import React from "react";

interface ChildProps {
  increment: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ increment }) => {
  console.log("👶 Child re-rendered");
  return (
    <button
      onClick={increment}
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Increment from Child
    </button>
  );
});

export default Child;
