import { create } from "zustand";

interface ContentState {
  current: KVNode;
  changeContent: (newContent: KVNode) => void;
}

export const useContentStore = create<ContentState>((set) => ({
  current: { value: "", key: "" },
  changeContent: (newContent: KVNode) => set(() => ({ current: newContent })),
}));
