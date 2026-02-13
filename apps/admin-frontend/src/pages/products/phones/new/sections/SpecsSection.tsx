/* =========================================================
   PHONE SPECS SECTION
========================================================= */

export type PhoneSpecsDraft = {
  os?: string;
  chipset?: string;
  cpu?: string;
  gpu?: string;

  displayType?: string;
  displaySize?: string;
  resolution?: string;
  refreshRate?: string;
  protection?: string;

  mainCamera?: string;
  selfieCamera?: string;
  videoRecording?: string;

  batteryCapacity?: string;
  chargingSpeed?: string;

  network?: string;
  sim?: string;
  wifi?: string;
  bluetooth?: string;
  usb?: string;

  sensors?: string;
  dimensions?: string;
  weight?: string;
  buildMaterial?: string;
  releaseDate?: string;
  otherFeatures?: string;
};

type Props = {
  specs: PhoneSpecsDraft;
  update: <K extends keyof PhoneSpecsDraft>(
    key: K,
    value: PhoneSpecsDraft[K]
  ) => void;
};

/* =========================
   REUSABLE FIELD (OUTSIDE)
========================= */

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
};

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium">
        {label}
      </label>

      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 mt-1 border rounded-lg"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-lg"
        />
      )}
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function SpecsSection({
  specs,
  update,
}: Props) {
  const get = (field: keyof PhoneSpecsDraft) =>
    specs[field] ?? "";

  const set = (field: keyof PhoneSpecsDraft, value: string) =>
    update(field, value || undefined);

  return (
    <section className="p-6 space-y-10 bg-white border rounded-lg">
      <div>
        <h2 className="text-lg font-semibold">
          Specifications
        </h2>
        <p className="text-sm text-gray-500">
          Technical details for this phone model
        </p>
      </div>

      {/* PLATFORM */}
      <div className="space-y-4">
        <h3 className="font-medium">Platform</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="OS" value={get("os")} onChange={(v) => set("os", v)} />
          <Field label="Chipset" value={get("chipset")} onChange={(v) => set("chipset", v)} />
          <Field label="CPU" value={get("cpu")} onChange={(v) => set("cpu", v)} />
          <Field label="GPU" value={get("gpu")} onChange={(v) => set("gpu", v)} />
        </div>
      </div>

      {/* DISPLAY */}
      <div className="space-y-4">
        <h3 className="font-medium">Display</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Display Type" value={get("displayType")} onChange={(v) => set("displayType", v)} />
          <Field label="Display Size" value={get("displaySize")} onChange={(v) => set("displaySize", v)} />
          <Field label="Resolution" value={get("resolution")} onChange={(v) => set("resolution", v)} />
          <Field label="Refresh Rate" value={get("refreshRate")} onChange={(v) => set("refreshRate", v)} />
          <Field label="Protection" value={get("protection")} onChange={(v) => set("protection", v)} />
        </div>
      </div>

      {/* CAMERA */}
      <div className="space-y-4">
        <h3 className="font-medium">Camera</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Main Camera" value={get("mainCamera")} onChange={(v) => set("mainCamera", v)} textarea />
          <Field label="Selfie Camera" value={get("selfieCamera")} onChange={(v) => set("selfieCamera", v)} textarea />
          <Field label="Video Recording" value={get("videoRecording")} onChange={(v) => set("videoRecording", v)} textarea />
        </div>
      </div>

      {/* BATTERY */}
      <div className="space-y-4">
        <h3 className="font-medium">Battery</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Battery Capacity" value={get("batteryCapacity")} onChange={(v) => set("batteryCapacity", v)} />
          <Field label="Charging Speed" value={get("chargingSpeed")} onChange={(v) => set("chargingSpeed", v)} />
        </div>
      </div>

      {/* CONNECTIVITY */}
      <div className="space-y-4">
        <h3 className="font-medium">Connectivity</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Network" value={get("network")} onChange={(v) => set("network", v)} />
          <Field label="SIM" value={get("sim")} onChange={(v) => set("sim", v)} />
          <Field label="Wi-Fi" value={get("wifi")} onChange={(v) => set("wifi", v)} />
          <Field label="Bluetooth" value={get("bluetooth")} onChange={(v) => set("bluetooth", v)} />
          <Field label="USB" value={get("usb")} onChange={(v) => set("usb", v)} />
        </div>
      </div>

      {/* BODY */}
      <div className="space-y-4">
        <h3 className="font-medium">Body</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Dimensions" value={get("dimensions")} onChange={(v) => set("dimensions", v)} />
          <Field label="Weight" value={get("weight")} onChange={(v) => set("weight", v)} />
          <Field label="Build Material" value={get("buildMaterial")} onChange={(v) => set("buildMaterial", v)} />
        </div>
      </div>

      {/* OTHER */}
      <div className="space-y-4">
        <h3 className="font-medium">Other</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Release Date" value={get("releaseDate")} onChange={(v) => set("releaseDate", v)} />
          <Field label="Sensors" value={get("sensors")} onChange={(v) => set("sensors", v)} />
          <Field label="Other Features" value={get("otherFeatures")} onChange={(v) => set("otherFeatures", v)} textarea />
        </div>
      </div>
    </section>
  );
}
