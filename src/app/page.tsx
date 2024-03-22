'use client'

import KVDisplay from "@/components/editor/KVDisplay";
import Hierarchy from "@/components/hierarchy/Hierarchy";
import { useContentStore } from "@/stores/content";
import { useKVState } from "@/stores/kv";
import { useEffect } from "react";

export default function Home() {
  const { loadNode } = useKVState();
  const { current } = useContentStore()

  useEffect(() => {
    loadNode()
  }, [loadNode])

  return (
    <main className="flex flex-wrap">
      <Hierarchy />
      <div className="m-2 p-2 w-80">
        <KVDisplay key={current.key} />
      </div>
    </main>
  );
}
