import { useEffect, useState } from "react";
import { auto } from "@/api/auto";

type Props = {
  table: string;
  initialData: any | null;
  onClose: () => void;
  onSaved: () => void;
};

export default function TableForm({
  table,
  initialData,
  onClose,
  onSaved,
}: Props) {
  // 🚫 BLOCK MEDIA TABLE
  if (table === "phone_media") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="p-6 text-center bg-white rounded-lg dark:bg-zinc-900">
          <p className="text-lg font-medium">
            Phone media is managed via Phone Models.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Go to <strong>Phone Models → Media</strong>
          </p>

          <button
            onClick={onClose}
            className="px-4 py-2 mt-6 text-white bg-gray-900 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const [columns, setColumns] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const isEdit = Boolean(initialData?.id);

  useEffect(() => {
    const load = async () => {
      const cols = await auto.columns();
      setColumns(cols.filter((c: any) => c.table_name === table));
      setForm(initialData ? { ...initialData } : {});
      setLoading(false);
    };

    load();
  }, [table, initialData]);

  const handleChange = (key: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [key]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      await auto.update(table, initialData.id, form);
    } else {
      await auto.create(table, form);
    }

    onSaved();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="p-6 bg-white rounded-lg dark:bg-zinc-900">
          Loading…
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-4xl p-6 bg-white dark:bg-zinc-900 rounded-xl">
        <h1 className="mb-6 text-xl font-semibold">
          {isEdit ? "Edit" : "Create"} {table}
        </h1>

        <form onSubmit={submit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {columns.map((col) => {
              if (col.column_name === "id") return null;

              const name = col.column_name;
              const value = form[name] ?? "";

              return (
                <div key={name} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{name}</label>
                  <input
                    value={value}
                    onChange={(e) =>
                      handleChange(name, e.target.value)
                    }
                    className="px-3 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-white bg-blue-600 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
