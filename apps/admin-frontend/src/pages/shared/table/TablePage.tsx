import { useState } from "react";
import TableList from "./TableList";
import TableForm from "./TableForm";

type Props = {
  table: string;
  title: string;
};

export default function TablePage({ table, title }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRow, setEditingRow] = useState<any | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const openCreate = () => {
    setEditingRow(null);
    setIsFormOpen(true);
  };

  const openEdit = (row: any) => {
    setEditingRow(row);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingRow(null);
  };

  const handleSaved = () => {
    setRefreshKey((k) => k + 1);
    closeForm();
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        <button
          type="button"
          onClick={openCreate}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add New
        </button>
      </div>

      {/* TABLE */}
      <TableList
        key={refreshKey}
        table={table}
        onEdit={openEdit}
      />

      {/* FORM */}
      {isFormOpen && (
        <TableForm
          table={table}
          initialData={editingRow}
          onClose={closeForm}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}
