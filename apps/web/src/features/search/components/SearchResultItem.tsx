"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Newspaper,
  Smartphone,
  Tags,
} from "lucide-react";

import type { SearchResult } from "@/features/search/types";

interface SearchResultItemProps {
  result: SearchResult;
  onSelect?: () => void;
}

function ResultIcon({
  type,
}: {
  type: SearchResult["type"];
}) {
  switch (type) {
    case "phone":
      return <Smartphone size={18} />;

    case "brand":
      return <Tags size={18} />;

    case "news":
      return <Newspaper size={18} />;

    default:
      return <Smartphone size={18} />;
  }
}

export default function SearchResultItem({
  result,
  onSelect,
}: SearchResultItemProps) {
  return (
    <Link
      href={result.url}
      onClick={onSelect}
      className="group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-muted"
    >
      {/* Thumbnail */}

      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted">
        {result.image ? (
          <Image
            src={result.image}
            alt={result.title}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        ) : (
          <ResultIcon type={result.type} />
        )}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-foreground">
          {result.title}
        </h3>

        {result.subtitle && (
          <p className="truncate text-sm text-muted-foreground">
            {result.subtitle}
          </p>
        )}
      </div>

      {/* Type */}

      <span className="hidden rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize text-muted-foreground sm:block">
        {result.type}
      </span>

      {/* Arrow */}

      <ChevronRight
        size={18}
        className="text-muted-foreground transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}