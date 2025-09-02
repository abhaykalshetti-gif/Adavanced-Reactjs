import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  // useCallback memoizes the function so it only changes if 'count' changes
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div className="p-6 text-center">
      <button
        onClick={() => setDark((prev) => !prev)}
        className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
      >
        Toggle Theme
      </button>

      <div style={themeStyles} className="mt-4">
        <p className="text-xl font-bold">Count: {count}</p>
        {/* Passing increment to child */}
        <Child increment={increment} />
      </div>
    </div>
  );
};

export default UseCallback;