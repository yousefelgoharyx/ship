import { useEffect, useState } from "react";
const useFetch = (fetcher) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: false,
  });

  const resetState = () => {
    setState({
      data: null,
      loading: true,
      error: false,
    });
  };

  const refresh = () => {
    resetState();
    fetch();
  };
  const fetch = async () => {
    try {
      const data = await fetcher();
      setState((prevState) => ({ ...prevState, loading: false, data }));
    } catch {
      setState((prevState) => ({
        ...prevState,
        error: true,
        loading: false,
      }));
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return {
      ...state,
      refresh
  };
};

export default useFetch;
