import { create } from "zustand";

interface ContentState {
  current: KVNode;
  setContent: (newContent: KVNode) => void;
}

export const useContentStore = create<ContentState>((set) => ({
  current: { value: "", key: "" },
  setContent: (newContent: KVNode) => set(() => ({ current: newContent })),
}));
