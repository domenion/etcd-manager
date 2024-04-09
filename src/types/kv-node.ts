interface KVNode {
  key: string;
  value?: string;
  nodes?: KVNode[];
  dir?: boolean;
}
