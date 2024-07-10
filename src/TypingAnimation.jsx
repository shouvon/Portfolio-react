import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer.",
        "React js Developer.",
        "Freshers.",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span style={{ color: "red" }} className="typing" ref={el}></span>;
};

export default TypingAnimation;
