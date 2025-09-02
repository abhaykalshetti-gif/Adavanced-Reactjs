import React, { useEffect, useRef, useState } from "react";

const UseRef: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef<number>(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="p-4 space-y-2">
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default UseRef;
