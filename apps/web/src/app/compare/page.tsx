"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useRef, useState } from "react";

interface Device {
  id: number;
  name: string;
  slug: string;
  image: string | null;

  brand: {
    id: number;
    name: string;
    slug: string;
  };

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
    const loadDevices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/phones`,
        );

        if (!response.ok) {
          throw new Error("Failed to load phones.");
        }

        const data = await response.json();

        const phones: Device[] = (data.items ?? []).map(
          (phone: any) => ({
            id: phone.id,
            name: phone.name,
            slug: phone.slug,
            image: phone.cardImage,
            brand: phone.brand,
            specs: {},
          }),
        );

        setDevices(phones);
      } catch (error) {
        console.error("Failed to load phones.", error);
        setDevices([]);
      }
    };

    loadDevices();
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
        (device) =>
          `${device.brand.name} ${device.name}`
            .toLowerCase()
            .includes(q) &&
          !selectedDevices.some(
            (selected) => selected.id === device.id,
          ),
      )
      .slice(0, 8);

    setFilteredDevices(results);
    setDropdownOpen(results.length > 0);
    setHighlightedIndex(0);
  }, [search, devices, selectedDevices]);

  /* ================= KEYBOARD ================= */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!dropdownOpen || filteredDevices.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setHighlightedIndex((previous) =>
        previous < filteredDevices.length - 1
          ? previous + 1
          : 0,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setHighlightedIndex((previous) =>
        previous > 0
          ? previous - 1
          : filteredDevices.length - 1,
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();
      addDevice(filteredDevices[highlightedIndex]);
    }

    if (event.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  /* ================= AUTO SCROLL ================= */

  useEffect(() => {
    const element = resultsRef.current?.querySelector(
      `[data-index="${highlightedIndex}"]`,
    ) as HTMLElement | null;

    element?.scrollIntoView({
      block: "nearest",
    });
  }, [highlightedIndex]);

  /* ================= SPECS ================= */

  const allSpecs = useMemo(() => {
    const keys = new Set<string>();

    selectedDevices.forEach((device) => {
      Object.keys(device.specs ?? {}).forEach((key) =>
        keys.add(key),
      );
    });

    return Array.from(keys);
  }, [selectedDevices]);

  /* ================= ACTIONS ================= */

  const addDevice = (device: Device) => {
    if (!device || selectedDevices.length >= MAX_DEVICES) {
      return;
    }

    setSelectedDevices((previous) => [
      ...previous,
      device,
    ]);

    setSearch("");
    setFilteredDevices([]);
    setDropdownOpen(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const removeDevice = (id: number) => {
    setSelectedDevices((previous) =>
      previous.filter((device) => device.id !== id),
    );
  };

  /* ================= UI ================= */

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 md:px-6">
      {/* SEARCH */}

      <div className="relative mx-auto mb-10 max-w-2xl">
        <input
          ref={inputRef}
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder={
            selectedDevices.length >= MAX_DEVICES
              ? "Max devices selected"
              : "Search devices..."
          }
          disabled={
            selectedDevices.length >= MAX_DEVICES
          }
          className="w-full rounded-xl border border-border px-5 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/40"
          role="combobox"
          aria-expanded={dropdownOpen}
          aria-controls="device-results"
        />

        <MagnifyingGlassIcon className="absolute top-3.5 right-4 h-5 w-5 text-muted-foreground" />

        {dropdownOpen && (
          <div
            id="device-results"
            ref={resultsRef}
            role="listbox"
            className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-border bg-background shadow-lg"
          >
            {filteredDevices.map((device, index) => (
              <button
                key={device.id}
                data-index={index}
                role="option"
                aria-selected={
                  index === highlightedIndex
                }
                onClick={() => addDevice(device)}
                className={`w-full px-4 py-2 text-left ${
                  index === highlightedIndex
                    ? "bg-muted"
                    : "hover:bg-muted/60"
                }`}
              >
                {device.brand.name} {device.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedDevices.length > 0 && (
        <div className="overflow-hidden rounded-2xl border">
          <div className="grid grid-cols-2 border-b md:grid-cols-3">
            <div className="hidden bg-muted/30 md:block" />

            {selectedDevices.map((device) => (
              <div
                key={device.id}
                className="relative p-4 text-center md:p-6"
              >
                <button
                  onClick={() =>
                    removeDevice(device.id)
                  }
                  className="absolute top-3 right-3 rounded focus:ring-2 focus:outline-none"
                >
                  <XMarkIcon className="h-4 w-4 md:h-5 md:w-5" />
                </button>

                <img
                  src={
                    device.image ??
                    "/images/phones/a75.jpg"
                  }
                  alt={device.name}
                  className="mx-auto mb-2 h-24 w-24 object-contain md:h-40 md:w-40"
                />

                <h2 className="text-sm font-bold md:text-lg">
                  {device.brand.name} {device.name}
                </h2>
              </div>
            ))}
          </div>

          {selectedDevices.length === 2 &&
            allSpecs.map((spec, index) => {
              const first =
                selectedDevices[0].specs?.[spec] ??
                "-";

              const second =
                selectedDevices[1].specs?.[spec] ??
                "-";

              return (
                <div
                  key={spec}
                  className={`grid grid-cols-2 border-b md:grid-cols-3 ${
                    index % 2 === 0
                      ? "bg-muted/20"
                      : ""
                  }`}
                >
                  <div className="hidden p-4 font-medium md:block">
                    {spec}
                  </div>

                  <div className="p-3 text-center md:p-4">
                    {first}
                  </div>

                  <div className="p-3 text-center md:p-4">
                    {second}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}