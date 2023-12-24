import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadingText = ({ textArray }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [delay, setDelay] = useState(2000); // Initial delay in milliseconds

  useEffect(() => {
    if (inView) {
      textArray?.forEach((text, index) => {
        setTimeout(() => {
          setDelay(500 + index); // Increase delay by 1000ms (1 second) for each text
        }, index * 1000); // Start fading in after 1 second for the first text, 2 seconds for the second, and so on.
      });
    }
  }, [inView, textArray]);

  return (
    <h2 ref={ref} className="fading-text">
      {textArray?.map((text, index) => (
        <>
          <span
            key={index}
            className={`text ${inView ? "fade-in" : ""}`}
            style={{ transitionDelay: `${delay * index}ms` }}
          >
            {text}
          </span>
          <br />
        </>
      ))}
    </h2>
  );
};

export default FadingText;
