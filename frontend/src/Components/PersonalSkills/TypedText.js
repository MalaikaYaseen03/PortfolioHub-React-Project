import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ items }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (items && items.length > 0) {
      typedRef.current = new Typed(".typed", {
        strings: items,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [items]);

  return <span className="typed"></span>;
};

export default TypedText;
