import React,{ useState, useMemo, useCallback } from "react";
import { findPrime } from "../utils/helper";

const Child = React.memo(({ onClick }) => {
  return (
    <div>
      <button
        className="m-10 p-2 bg-green-200"
        onClick={onClick}
      >
        Toggle
      </button>
    </div>
  );
});

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => {
    return findPrime(text);
  }, [text]);

  const toggleTheme = useCallback(() => {
  setIsDarkTheme(prev => !prev);
}, []);
  
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " bg-gray-900 text-white")
      }
    >
         <Child onClick={toggleTheme} />
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>Nth Prime: {prime}</h1>
      </div>
    </div>
  );
};
export default Demo;
