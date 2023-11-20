import { useEffect, useCallback } from "react";

// This is used with the search so we dont end up calling the server every time 
// the search term changes
const useDebounce = (callbackFunction, dependencies, timer) => {
  const callback = useCallback(callbackFunction, dependencies);
  useEffect(() => {
    const timeout = setTimeout(callback, timer);
    return () => clearTimeout(timeout);
  }, [callback, timer]);
};

export default useDebounce;
