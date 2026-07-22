import type { ReactNode } from "react";

import clsx from "clsx";

type DataTableProps = {
  children: ReactNode;

  className?: string;
};

type HeadProps = {
  children: ReactNode;
};

type BodyProps = {
  children: ReactNode;
};

type RowProps = {
  children: ReactNode;

  hover?: boolean;

  onClick?: () => void;

  className?: string;
};

type CellProps = {
  children: ReactNode;

  className?: string;

  align?: "left" | "center" | "right";
};

function DataTable({
  children,
  className,
}: DataTableProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900",
        className,
      )}
    >
      <div className="overflow-x-auto">

        <table className="min-w-full text-sm">

          {children}

        </table>

      </div>
    </div>
  );
}

function Head({
  children,
}: HeadProps) {
  return (
    <thead className="border-b bg-zinc-950 border-zinc-800">
      {children}
    </thead>
  );
}

function Body({
  children,
}: BodyProps) {
  return (
    <tbody>

      {children}

    </tbody>
  );
}

function Row({
  children,
  hover = true,
  onClick,
  className,
}: RowProps) {
  return (
    <tr
      onClick={onClick}
      className={clsx(
        "border-b border-zinc-800 transition-colors last:border-none",
        hover && "hover:bg-zinc-800/40",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </tr>
  );
}

function HeaderCell({
  children,
  align = "left",
  className,
}: CellProps) {
  return (
    <th
      className={clsx(
        "px-5 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      {children}
    </th>
  );
}

function Cell({
  children,
  align = "left",
  className,
}: CellProps) {
  return (
    <td
      className={clsx(
        "px-5 py-3 text-sm text-zinc-200",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className,
      )}
    >
      {children}
    </td>
  );
}

function Empty({
  title = "No data found",
  description = "There is nothing to display.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <h3 className="text-base font-semibold text-zinc-200">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        {description}
      </p>

    </div>
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center py-20">

      <div className="w-8 h-8 border-2 rounded-full animate-spin border-violet-500 border-t-transparent" />

    </div>
  );
}

DataTable.Head = Head;
DataTable.Body = Body;
DataTable.Row = Row;
DataTable.HeaderCell = HeaderCell;
DataTable.Cell = Cell;
DataTable.Empty = Empty;
DataTable.Loading = Loading;

export default DataTable;