import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import api from "../util/authAxios";

const useAPI = (url, postData) => {
  const { auth } = useAuth(); 
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  function resetState() {
    setState({
      data: [],
      loading: true,
      error: false,
    });
  }

  function refresh() {
    resetState();
    fetch();
  }

  async function fetch() {
    try {
      const { data } = await api(auth.token).post(url, postData || {});
      setState((prevState) => ({
        ...prevState,
        data,
        loading: false,
      }));
    } catch (e) {
      console.log(e)
      setState((prevState) => ({
        ...prevState,
        error: true,
        loading: false,
      }));
    }
  }
  
  useEffect(() => {
    fetch();
  }, []);
  return {
    error: state.error,
    data: state.data,
    loading: state.loading,
    refresh,
  };
};

export default useAPI;
