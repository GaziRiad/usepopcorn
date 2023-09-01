import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(() => {
    function handleClosingKey(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    }

    document.addEventListener("keydown", handleClosingKey);

    return () => {
      document.removeEventListener("keydown", handleClosingKey);
    };
  }, [callback, key]);
}
