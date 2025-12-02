import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { auto } from "@/api/auto";
import { Eye } from "lucide-react";

export default function TableList() {
  const { table } = useParams();

  const [rows, setRows] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;

  const [editing, setEditing] = useState<{ id: number; key: string } | null>(null);
  const [editValue, setEditValue] = useState("");

  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const selectAll = (ids: number[]) =>
    setSelected((prev) => (prev.length === ids.length ? [] : [...ids]));

  useEffect(() => {
    if (!table) return;
    auto
      .list(table)
      .then(setRows)
      .catch(() => setRows([]));
  }, [table]);

  if (!rows.length)
    return (
      <div className="p-6 text-center text-white/60">
        <h2 className="mb-4 text-2xl font-bold capitalize">{table}</h2>
        <p>No entries found.</p>

        <Link
          to={`/admin/tables/${table}/create`}
          className="inline-block px-5 py-2 mt-4 font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600"
        >
          + Add New
        </Link>
      </div>
    );

  const keys = Object.keys(rows[0]);

  const filtered = rows.filter((r) =>
    JSON.stringify(r).toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const saveEdit = async (row: any, key: string) => {
    try {
      await auto.update(table!, row.id, { [key]: editValue });
      row[key] = editValue;
      setEditing(null);
    } catch (err) {}
  };

  return (
    <div className="relative max-w-full">

      <h1 className="mb-4 text-4xl font-semibold text-transparent capitalize bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
        {table}
      </h1>

      {/* SEARCH + ADD */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <Link
          to={`/admin/tables/${table}/create`}
          className="px-5 py-2 font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600"
        >
          + Add New
        </Link>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 text-sm text-white border outline-none rounded-xl bg-black/40 border-white/10"
        />
      </div>

      {/* BULK DELETE */}
      {selected.length > 0 && (
        <button
          onClick={() => {
            if (!confirm("Delete selected rows?")) return;
            selected.forEach((id) => auto.remove(table!, id));
            setRows(rows.filter((r) => !selected.includes(r.id)));
            setSelected([]);
          }}
          className="px-4 py-2 mb-3 text-white rounded-lg bg-red-600/70"
        >
          Delete Selected ({selected.length})
        </button>
      )}

      {/* TABLE */}
      <div className="p-4 overflow-hidden border rounded-2xl bg-black/40 border-white/10">

        <div className="w-full overflow-x-auto scrollbar-thin">

          <table className="w-full border-collapse table-auto text-white/90">

            <thead className="sticky top-0 z-10 bg-black/60">
              <tr className="text-sm uppercase border-b border-white/10 text-white/60">

                {/* SELECT ALL CHECKBOX */}
                <th className="w-12 p-3 text-center">
                  <input
                    type="checkbox"
                    checked={
                      selected.length === paginated.length &&
                      paginated.length > 0
                    }
                    onChange={() => selectAll(paginated.map((r) => r.id))}
                  />
                </th>

                {keys.map((k) => (
                  <th
                    key={k}
                    className={`p-3 text-left whitespace-nowrap ${
                      k === "id" ? "w-20 text-center" : ""
                    }`}
                  >
                    {k}
                  </th>
                ))}

                <th className="p-3 whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginated.map((row) => (
                <tr
                  key={row.id}
                  className={`hover:bg-white/5 ${
                    selected.includes(row.id) ? "bg-white/10" : ""
                  }`}
                >

                  {/* CHECKBOX COLUMN */}
                  <td className="w-12 p-3 text-center border-b border-white/5">
                    <input
                      type="checkbox"
                      checked={selected.includes(row.id)}
                      onChange={() => toggleSelect(row.id)}
                    />
                  </td>

                  {/* DATA CELLS */}
                  {keys.map((k) => (
                    <td
                      key={k}
                      className={`
                        p-3 
                        border-b border-white/5 
                        cursor-pointer 
                        text-sm
                        truncate 
                        whitespace-nowrap 
                        overflow-hidden
                        hover:bg-white/5
                        ${k === "id" ? "w-20 text-center" : "max-w-[180px]"}
                      `}
                      onDoubleClick={() => {
                        setEditing({ id: row.id, key: k });
                        setEditValue(String(row[k]));
                      }}
                      title={String(row[k])}
                    >
                      {editing && editing.id === row.id && editing.key === k ? (
                        <input
                          autoFocus
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => saveEdit(row, k)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEdit(row, k);
                            if (e.key === "Escape") setEditing(null);
                          }}
                          className="w-full px-2 py-1 border rounded outline-none bg-white/10 border-white/20"
                        />
                      ) : (
                        String(row[k])
                      )}
                    </td>
                  ))}

                  {/* ACTIONS */}
                  <td className="flex gap-3 p-3 border-b border-white/5 whitespace-nowrap">
                    <Link
                      to={`/admin/tables/${table}/view/${row.id}`}
                      className="p-2 rounded bg-white/10 hover:bg-white/20"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/admin/tables/${table}/edit/${row.id}`}
                      className="px-3 py-1 rounded bg-blue-600/80 hover:bg-blue-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => {
                        if (confirm("Delete this row?")) {
                          auto.remove(table!, row.id);
                          setRows(rows.filter((r) => r.id !== row.id));
                        }
                      }}
                      className="px-3 py-1 rounded bg-red-600/80 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-3 mt-4 text-white/70">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded-lg bg-white/10 disabled:opacity-20"
          >
            Prev
          </button>

          <span>Page {page} / {totalPages}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-lg bg-white/10 disabled:opacity-20"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
