import { useState } from "react";

export const useEtcdNode = () => {
  const url = "/etcd/keys";
  const [data, setData] = useState<GetEtcdNode | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const getNode = async (path: string) => {
    setIsLoading(true);
    const response = await fetch(url + path, {
      method: "GET",
    });
    const resp = await response.json();
    console.log(resp);
    if (!response.ok) {
      setError(resp.error);
    } else {
      setData(resp);
    }
    setIsLoading(false);
  };
  return { getNode, data, isLoading, error };
};
