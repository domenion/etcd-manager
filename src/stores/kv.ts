import { create, useStore } from "zustand";
import { useContentStore } from "./content";

interface KVState {
  node: KVNode;
  loadNode: () => void;
  updateNode: (newNode: KVNode) => void;
}

const nodes: KVNode = {
  key: "/",
  dir: true,
  nodes: [
    {
      key: "/child1",
      dir: true,
    },
    {
      key: "/child2",
      dir: true,
      nodes: [
        {
          key: "/child2/child3",
          dir: true,
          nodes: [
            { key: "item1", value: "value1" },
            { key: "item2", value: "value2" },
          ],
        },
      ],
    },
    {
      key: "/child4",
      dir: true,
      nodes: [
        {
          key: "root/child4/child5",
          dir: true,
          nodes: [
            { key: "item1", value: "value1" },
            { key: "item2", value: "value2" },
            { key: "item3", value: "value3" },
          ],
        },
      ],
    },
  ],
};

const loadNode = async (): Promise<KVNode> => {
  return nodes;
};

const saveNode = async (updatedNode: KVNode): Promise<KVNode> => {
  const targetNode = findInChildren(nodes, updatedNode.key);
  if (targetNode) {
    targetNode.nodes = updatedNode.nodes;
  }
  return nodes;
};

const findInChildren = (node: KVNode, key: string): KVNode | undefined => {
  if (node.key === key) {
    return node;
  }

  node.nodes?.forEach((n) => {
    const found = findInChildren(n, key);
    if (found != undefined) return found;
  });

  return undefined;
};

export const useKVState = create<KVState>((set) => ({
  node: { key: "/" },
  updateNode: (newNode: KVNode) => {
    saveNode(newNode).then((n) => {
      set(() => ({
        node: {
          key: n.key,
          value: n.value,
          nodes: n.nodes,
        },
      }));
    });
  },
  loadNode: () => {
    loadNode().then((n) => {
      set(() => ({
        node: {
          key: n.key,
          value: n.value,
          nodes: n.nodes,
        },
      }));
    });
  },
}));
