import { useState, useEffect, MutableRefObject } from "react";

export function useClick<T>(ref: MutableRefObject<T>): boolean {
  const [res, setRes] = useState<boolean>(false);

  useEffect(() => {
    function clickHandler(e: MouseEvent) {
      const isSame = e.target === ref.current;

      if (ref.current && isSame) {
        setRes(true);
      }
    }

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [ref]);

  return res;
}
