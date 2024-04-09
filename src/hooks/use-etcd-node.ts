import { useState } from "react";

export const useEtcdNode = () => {
  const url = "/etcd/keys";
  const [data, setData] = useState<KVNode | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getNode = async (path: string) => {
    setIsLoading(true);
    console.log("url:", url + path);
    const response = await fetch(url + path, {
      method: "GET",
    });
    const resp = await response.json();
    if (!response.ok) {
      setError(resp.error);
    } else {
      setData({
        key: path,
        value: resp.value,
        nodes: resp.nodes,
        dir: resp.dir,
      });
      resp.key = path;
      console.log(resp);
    }
    setIsLoading(false);
    return resp;
  };

  return { getNode, data, isLoading, error };
};
