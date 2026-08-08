'use client'

import { ChevronRight, Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { SearchResult } from '@/features/search/types';

interface SearchResultItemProps {
  result: SearchResult
  onSelect?: () => void
}

export default function SearchResultItem({
  result,
  onSelect,
}: SearchResultItemProps) {
  return (
    <Link
      href={`/products/phones/${result.slug}`}
      onClick={onSelect}
      className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
    >
      {/* Thumbnail */}

      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted">
        {result.cardImage ? (
          <Image
            src={result.cardImage}
            alt={result.name}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        ) : (
          <Smartphone size={18} />
        )}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-foreground">{result.name}</h3>

        <p className="truncate text-sm text-muted-foreground">
          {result.brand.name}
        </p>
      </div>

      {/* Type */}

      <span className="hidden rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground sm:block">
        Phone
      </span>

      {/* Arrow */}

      <ChevronRight
        size={18}
        className="text-muted-foreground transition-transform group-hover:translate-x-1"
      />
    </Link>
  )
}
