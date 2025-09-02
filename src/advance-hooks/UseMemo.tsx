import React, { useMemo, useState } from "react";

const slowFunction = (num: number): number => {
  console.log("Running slow function...");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

const UseMemo: React.FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [dark, setDark] = useState<boolean>(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div className="p-6 text-center">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        className="border p-2 rounded-md"
      />
      <button
        onClick={() => setDark((prev) => !prev)}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Toggle Theme
      </button>

      <div style={themeStyles} className="mt-4">
        <p className="text-xl font-bold">Result: {doubleNumber}</p>
      </div>
    </div>
  );
};

export default UseMemo;
