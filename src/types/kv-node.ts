interface KVNode {
  key: string;
  value?: string;
  dir?: boolean;
  nodes?: KVNode[];
}
