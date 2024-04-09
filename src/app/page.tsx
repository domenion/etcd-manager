'use client'

import KVDisplay from "@/components/editor/KVDisplay";
import Hierarchy from "@/components/hierarchy/Hierarchy";

export default function Home() {
  return (
    <main className="flex flex-wrap md:flex-nowrap">
      <Hierarchy />
      <KVDisplay />
    </main>
  );
}
