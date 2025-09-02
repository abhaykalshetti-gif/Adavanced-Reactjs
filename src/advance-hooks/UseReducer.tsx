import React, { useReducer } from "react";

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

interface CounterState {
  count: number;
}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
};

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Counter: {state.count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          ➕ Increment
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          ➖ Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          🔄 Reset
        </button>
      </div>

      <button
        onClick={() => dispatch({ type: "set", payload: 10 })}
        className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
      >
        Set to 10
      </button>
    </div>
  );
};

export default UseReducer;
