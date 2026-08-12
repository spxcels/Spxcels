import React from "react";

export default function PhonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}