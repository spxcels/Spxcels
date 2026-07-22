import type { ReactNode } from "react";

import clsx from "clsx";

type TableProps = {
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

  align?: "left" | "center" | "right";

  className?: string;
};

function Table({
  children,
  className,
}: TableProps) {
  return (
    <div className="overflow-hidden border rounded-xl border-zinc-800 bg-zinc-900">

      <div className="overflow-x-auto">

        <table
          className={clsx(
            "w-full border-collapse text-sm",
            className,
          )}
        >
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
    <thead className="border-b border-zinc-800 bg-zinc-950/50">
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
        "border-b border-zinc-800 last:border-none transition",
        hover &&
          "hover:bg-zinc-800/40",
        onClick &&
          "cursor-pointer",
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
        align === "center" &&
          "text-center",
        align === "right" &&
          "text-right",
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
        align === "center" &&
          "text-center",
        align === "right" &&
          "text-right",
        className,
      )}
    >
      {children}
    </td>
  );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export default Table;