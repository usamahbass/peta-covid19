import { useState, useEffect } from "react";
import { request, requestDekontaminasi } from "~/utils";

export const useAxios = (url: string, type: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response =
          type === "covid"
            ? await request.get(url)
            : await requestDekontaminasi.get(url);

        setData(response.data.list_data || response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
