import { useState, useCallback } from "react";

export const getTodos = async (param) => {
  const response = await fetch(
    `${process.env.REACT_APP_API}/api${param}?populate=*`
  );
  const data = await response.json();

  // add transformers here if needed

  return data;
};

export const useGetTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (options = {}) => {
    try {
      setIsLoading(true);
      const todos = await getTodos(options);
      setData(todos);
      return todos;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };

  return {
    isLoading,
    error,
    data,
    execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  };
};
