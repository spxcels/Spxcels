"use client";

import { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Affiliate {
  store: string;
  url: string;
}

interface Device {
  id: number;
  name: string;
  image: string;
  brand: string;
  specs: { [key: string]: string };
  affiliate?: Affiliate | null;
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

  /* ================= FETCH DEVICES ================= */

  useEffect(() => {
    fetch("/api/devices")
      .then((res) => res.json())
      .then((data) => {
        // 🔥 SAFE NORMALIZATION (fix)
        const safeDevices = Array.isArray(data?.results)
          ? data.results
          : [];
        setDevices(safeDevices);
      })
      .catch((err) => {
        console.error(err);
        setDevices([]);
      });
  }, []);

  /* ================= FILTER ================= */

  useEffect(() => {
    if (!search || devices.length === 0) {
      setFilteredDevices([]);
      setDropdownOpen(false);
      return;
    }

    const results = devices.filter(
      (device) =>
        (device.brand + " " + device.name)
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        !selectedDevices.find((d) => d.id === device.id)
    );

    setFilteredDevices(results);
    setDropdownOpen(true);
    setHighlightedIndex(0);
  }, [search, devices, selectedDevices]);

  /* ================= OUTSIDE CLICK ================= */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !inputRef.current?.contains(e.target as Node) &&
        !resultsRef.current?.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!dropdownOpen || filteredDevices.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredDevices.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredDevices[highlightedIndex];
      if (selected) addDevice(selected);
    }
  };

  const addDevice = (device: Device) => {
    if (selectedDevices.length >= MAX_DEVICES) return;
    setSelectedDevices([...selectedDevices, device]);
    setSearch("");
    setDropdownOpen(false);
  };

  const removeDevice = (id: number) => {
    setSelectedDevices(selectedDevices.filter((d) => d.id !== id));
  };

  const allSpecs = Array.from(
    new Set(selectedDevices.flatMap((device) => Object.keys(device.specs || {})))
  );

  const isMaxSelected = selectedDevices.length >= MAX_DEVICES;

  /* ================= UI ================= */

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Compare Devices
      </h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            isMaxSelected
              ? `Max ${MAX_DEVICES} devices selected`
              : "Search devices..."
          }
          disabled={isMaxSelected}
          className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 ${
            isMaxSelected
              ? "border-gray-300 dark:border-gray-700 cursor-not-allowed opacity-70"
              : "border-gray-300 dark:border-gray-700"
          }`}
        />
        <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-2.5 text-gray-400 dark:text-gray-500" />

        {/* Dropdown */}
        {dropdownOpen && !isMaxSelected && (
          <div
            ref={resultsRef}
            className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 max-h-60"
          >
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, index) => (
                <div
                  key={device.id}
                  onClick={() => addDevice(device)}
                  className={`p-2 cursor-pointer transition ${
                    index === highlightedIndex
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {device.brand} {device.name}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500 dark:text-gray-400">
                No results found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Compare Layout */}
      {selectedDevices.length > 0 && (
        <div className="grid grid-cols-2 gap-4 overflow-hidden border border-gray-300 rounded-lg shadow-md dark:border-gray-700">
          {selectedDevices.map((device, idx) => (
            <div
              key={device.id}
              className={`p-4 ${
                idx === 0 ? "border-r border-gray-300 dark:border-gray-700" : ""
              } bg-white dark:bg-gray-800`}
            >
              <div className="flex flex-col items-center">
                <XMarkIcon
                  className="w-6 h-6 mb-2 text-gray-500 cursor-pointer hover:text-red-500"
                  onClick={() => removeDevice(device.id)}
                />
                <img
                  src={device.image}
                  alt={device.name}
                  className="object-cover w-40 h-40 mb-2 rounded-md"
                />
                <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100">
                  {device.brand} {device.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
