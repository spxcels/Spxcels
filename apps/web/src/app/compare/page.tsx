"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Device {
  id: number;
  name: string;
  image: string;
  brand: string;
  specs?: Record<string, string>;
}

export default function ComparePage() {
  const [search, setSearch] = useState("");
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const MAX_DEVICES = 2;

  /* ================= FETCH ================= */

  useEffect(() => {
    fetch("/api/devices")
      .then((r) => r.json())
      .then((data) => {
        const safe = Array.isArray(data?.results) ? data.results : [];
        setDevices(safe);
      });
  }, []);

  /* ================= SEARCH ================= */

  useEffect(() => {
    const q = search.trim().toLowerCase();

    if (!q || selectedDevices.length >= MAX_DEVICES) {
      setFilteredDevices([]);
      setDropdownOpen(false);
      return;
    }

    const results = devices
      .filter(
        (d) =>
          `${d.brand} ${d.name}`.toLowerCase().includes(q) &&
          !selectedDevices.some((s) => s.id === d.id)
      )
      .slice(0, 8);

    setFilteredDevices(results);
    setDropdownOpen(results.length > 0);
    setHighlightedIndex(0);
  }, [search, devices, selectedDevices]);

  /* ================= KEYBOARD ================= */

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!dropdownOpen || filteredDevices.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((p) =>
        p < filteredDevices.length - 1 ? p + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((p) =>
        p > 0 ? p - 1 : filteredDevices.length - 1
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      addDevice(filteredDevices[highlightedIndex]);
    }

    if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  /* auto scroll highlighted item */
  useEffect(() => {
    const el = resultsRef.current?.querySelector(
      `[data-index="${highlightedIndex}"]`
    ) as HTMLElement | null;

    el?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex]);

  /* ================= SPECS ================= */

  const allSpecs = useMemo(() => {
    const set = new Set<string>();
    selectedDevices.forEach((d) => {
      Object.keys(d.specs || {}).forEach((k) => set.add(k));
    });
    return Array.from(set);
  }, [selectedDevices]);

  /* ================= ACTIONS ================= */

  const addDevice = (device: Device) => {
    if (!device || selectedDevices.length >= MAX_DEVICES) return;

    setSelectedDevices((p) => [...p, device]);
    setSearch("");
    setFilteredDevices([]);
    setDropdownOpen(false);

    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const removeDevice = (id: number) => {
    setSelectedDevices((p) => p.filter((d) => d.id !== id));
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-20">

      {/* SEARCH */}
      <div className="relative max-w-2xl mx-auto mb-10">
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            selectedDevices.length >= MAX_DEVICES
              ? "Max devices selected"
              : "Search devices..."
          }
          disabled={selectedDevices.length >= MAX_DEVICES}
          className="w-full rounded-xl border border-border px-5 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/40"
          role="combobox"
          aria-expanded={dropdownOpen}
          aria-controls="device-results"
        />

        <MagnifyingGlassIcon className="w-5 h-5 absolute right-4 top-3.5 text-muted-foreground" />

        {dropdownOpen && (
          <div
            id="device-results"
            ref={resultsRef}
            role="listbox"
            className="absolute w-full mt-2 bg-background border border-border rounded-xl shadow-lg max-h-60 overflow-auto z-10"
          >
            {filteredDevices.map((d, i) => (
              <button
                key={d.id}
                data-index={i}
                role="option"
                aria-selected={i === highlightedIndex}
                onClick={() => addDevice(d)}
                className={`w-full text-left px-4 py-2 ${
                  i === highlightedIndex
                    ? "bg-muted"
                    : "hover:bg-muted/60"
                }`}
              >
                {d.brand} {d.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedDevices.length > 0 && (
        <div className="border rounded-2xl overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-3 border-b">
            <div className="hidden md:block bg-muted/30" />

            {selectedDevices.map((d) => (
              <div key={d.id} className="relative p-4 md:p-6 text-center">
                <button
                  onClick={() => removeDevice(d.id)}
                  className="absolute right-3 top-3 focus:outline-none focus:ring-2 rounded"
                >
                  <XMarkIcon className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <img
                  src={d.image}
                  className="w-24 h-24 md:w-40 md:h-40 object-contain mx-auto mb-2"
                />

                <h2 className="font-bold text-sm md:text-lg">
                  {d.brand} {d.name}
                </h2>
              </div>
            ))}
          </div>

          {selectedDevices.length === 2 &&
            allSpecs.map((spec, idx) => {
              const a = selectedDevices[0].specs?.[spec] || "-";
              const b = selectedDevices[1].specs?.[spec] || "-";

              return (
                <div
                  key={spec}
                  className={`grid grid-cols-2 md:grid-cols-3 border-b ${
                    idx % 2 === 0 ? "bg-muted/20" : ""
                  }`}
                >
                  <div className="hidden md:block p-4 font-medium">
                    {spec}
                  </div>

                  <div className="p-3 md:p-4 text-center">{a}</div>
                  <div className="p-3 md:p-4 text-center">{b}</div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}