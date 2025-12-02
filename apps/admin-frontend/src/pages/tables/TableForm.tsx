import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auto } from "@/api/auto";

export default function TableForm() {
  const { table, id } = useParams();
  const navigate = useNavigate();

  const [columns, setColumns] = useState<any[]>([]);
  const [form, setForm] = useState<any | null>(null); // FIX: start with null
  const [loading, setLoading] = useState(true);

  // =============================
  // LOAD METADATA + EXISTING DATA
  // =============================
  useEffect(() => {
    setLoading(true);

    // Load table columns
    auto.columns()
      .then((data) => {
        const filtered = data.filter((c: any) => c.table_name === table);
        setColumns(filtered);
      })
      .catch((err) => {
        console.error("Column load error:", err);
        setColumns([]);
      });

    // Load row for edit
    if (id) {
      auto
        .get(table!, id)
        .then((data) => {
          setForm(data || {}); // FIX: null crash
          setLoading(false);
        })
        .catch((err) => {
          console.error("Edit load error:", err);
          setForm({});
          setLoading(false);
        });
    } else {
      setForm({});
      setLoading(false);
    }
  }, [table, id]);

  // Prevent blank page crash
  if (loading || form === null || columns.length === 0) {
    return (
      <div className="p-6 text-center text-white">
        Loading form...
      </div>
    );
  }

  function handleChange(col: string, value: any) {
    setForm((old: any) => ({ ...old, [col]: value }));
  }

  async function submit(e: any) {
    e.preventDefault();

    try {
      if (id) {
        await auto.update(table!, id, form);
      } else {
        await auto.create(table!, form);
      }

      navigate(`/admin/tables/${table}`); // FIXED (your old route was wrong)
    } catch (error) {
      console.error("Save failed:", error);
    }
  }

  return (
    <div className="relative p-6">
      {/* PAGE TITLE */}
      <h1 className="mb-8 text-4xl font-semibold text-transparent capitalize bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
        {id ? "Edit" : "Create"} {table}
      </h1>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-pink-600/30 blur-3xl opacity-40" />

      {/* FORM CARD */}
      <form
        onSubmit={submit}
        className="p-8 border shadow-2xl rounded-3xl bg-black/40 backdrop-blur-xl border-white/10"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {columns.map((col) => {
            if (col.column_name === "id") return null;

            const colName = col.column_name;
            const value = form?.[colName] ?? ""; // FIXED

            // BOOLEAN
            if (col.data_type.includes("boolean")) {
              return (
                <div key={colName} className="flex items-center gap-3">
                  <label className="font-semibold capitalize text-white/80">
                    {colName}
                  </label>
                  <input
                    type="checkbox"
                    checked={!!value}
                    onChange={(e) => handleChange(colName, e.target.checked)}
                    className="w-5 h-5 accent-purple-500"
                  />
                </div>
              );
            }

            // DATE OR TIMESTAMP
            if (
              col.data_type.includes("timestamp") ||
              col.data_type.includes("date")
            ) {
              return (
                <div key={colName} className="flex flex-col">
                  <label className="font-semibold capitalize text-white/80">
                    {colName}
                  </label>
                  <input
                    type="datetime-local"
                    value={value}
                    onChange={(e) => handleChange(colName, e.target.value)}
                    className="p-3 text-white transition border outline-none rounded-xl bg-white/5 border-white/10 focus:border-purple-400"
                  />
                </div>
              );
            }

            // NUMBER
            if (
              col.data_type.includes("int") ||
              col.data_type.includes("numeric")
            ) {
              return (
                <div key={colName} className="flex flex-col">
                  <label className="font-semibold capitalize text-white/80">
                    {colName}
                  </label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleChange(colName, Number(e.target.value))}
                    className="p-3 text-white transition border outline-none rounded-xl bg-white/5 border-white/10 focus:border-blue-400"
                  />
                </div>
              );
            }

            // FK DROPDOWN (TODO)
            if (colName.endsWith("_id")) {
              return (
                <div key={colName} className="flex flex-col">
                  <label className="font-semibold capitalize text-white/80">
                    {colName}
                  </label>

                  <select
                    value={value}
                    onChange={(e) => handleChange(colName, e.target.value)}
                    className="p-3 text-white transition border outline-none rounded-xl bg-white/5 border-white/10 focus:border-pink-400"
                  >
                    <option value="">Select {colName.replace("_id", "")}</option>
                    {/* TODO: Auto FK loading */}
                  </select>
                </div>
              );
            }

            // DEFAULT STRING INPUT
            return (
              <div key={colName} className="flex flex-col">
                <label className="font-semibold capitalize text-white/80">
                  {colName}
                </label>
                <input
                  value={value}
                  onChange={(e) => handleChange(colName, e.target.value)}
                  className="p-3 text-white transition border outline-none rounded-xl bg-white/5 border-white/10 focus:border-purple-400"
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-10">
          <button className="px-6 py-3 font-semibold text-white transition shadow-xl rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-pink-500/30 active:scale-95">
            Save
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 font-semibold text-white transition rounded-xl bg-white/10 hover:bg-white/20 active:scale-95"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
