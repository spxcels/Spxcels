import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { auto } from "@/api/auto";
import { Pencil, Trash2, Image, ExternalLink } from "lucide-react";
import { cloudinaryUrl } from "@/lib/cloudinary";

type Props = {
  table: string;
  onEdit: (row: any) => void;
};

export default function TableList({ table, onEdit }: Props) {
  const isMediaTable = table === "phone_media";

  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const [deleteTarget, setDeleteTarget] = useState<any | null>(null);
  const [deleting, setDeleting] = useState(false);

  /* ===============================
     Fetch data
  =============================== */
  const fetchRows = async () => {
    try {
      const data = await auto.list(table);
      setRows(data);
    } catch (err) {
      console.error(err);
      setRows([]);
    }
  };

  useEffect(() => {
    fetchRows();
  }, [table]);

  /* ===============================
     FIXED: Table keys (IMPORTANT)
     - scan ALL rows
     - ignore objects / arrays
  =============================== */
  const keys = useMemo(() => {
    if (!rows.length) return [];

    const keySet = new Set<string>();

    rows.forEach((row) => {
      Object.entries(row).forEach(([key, value]) => {
        if (
          value === null ||
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
        ) {
          keySet.add(key);
        }
      });
    });

    return Array.from(keySet);
  }, [rows]);

  /* ===============================
     Filtering & pagination
  =============================== */
  const filtered = rows.filter((r) =>
    JSON.stringify(r).toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  /* ===============================
     Delete
  =============================== */
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await auto.remove(table, deleteTarget.id);
      await fetchRows();
    } catch (err) {
      console.error("Delete failed", err);
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  /* ===============================
     UI
  =============================== */
  return (
    <div className="space-y-4">
      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search..."
        className="w-full px-3 py-2 text-sm border rounded-lg md:w-64"
      />

      {/* EMPTY STATE */}
      {rows.length === 0 && (
        <div className="p-6 text-sm text-gray-500 border rounded-lg">
          No data found in this table.
        </div>
      )}

      {/* TABLE */}
      {rows.length > 0 && (
        <div className="overflow-x-auto border rounded-xl dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-zinc-800">
              <tr>
                {keys.map((k) => (
                  <th key={k} className="p-3 text-left">
                    {k}
                  </th>
                ))}
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((row) => {
                const imageUrl = cloudinaryUrl(row.image);

                return (
                  <tr
                    key={row.id}
                    className="border-t dark:border-zinc-800"
                  >
                    {keys.map((k) => (
                      <td
                        key={k}
                        className="p-3 truncate max-w-[200px]"
                      >
                        {String(row[k])}
                      </td>
                    ))}

                    {/* ACTIONS */}
                    <td className="flex justify-end gap-3 p-3">
                      <button
                        onClick={() => onEdit(row)}
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>

                      {imageUrl && (
                        <a
                          href={imageUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View image"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {table === "phone_models" && (
                        <Link
                          to={`/admin/models/${row.id}/media`}
                          title="Manage Media"
                        >
                          <Image size={16} />
                        </Link>
                      )}

                      {!isMediaTable && (
                        <button
                          onClick={() => setDeleteTarget(row)}
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="p-6 bg-white rounded-lg dark:bg-zinc-900">
            <p className="mb-4">Confirm delete?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
