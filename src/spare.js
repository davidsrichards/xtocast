import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };

    case "decreament":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
  }
};

function Input() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <div className="border-4 flex  items-center h-screen flex-col gap-4 bg-black text-[#fff] p-4">
      <input
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "newUserInput", payload: e.target.value })
        }
        type="text"
        placeholder="enter text"
        className="p-1 rounded-md text-black"
      />
      <div className={`${state.color ? "text-yellow-500" : "text-white"}`}>
        {state.count}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className="bg-[#fff] text-black px-4 rounded-md"
          onClick={() => dispatch({ type: "decreament" })}
        >
          -
        </button>
        <button
          className="bg-[#fff] text-black px-4 rounded-md"
          onClick={() => dispatch({ type: "increament" })}
        >
          +
        </button>
        <button
          className="bg-[#fff] text-black px-4 rounded-md"
          onClick={() => dispatch({ type: "tgColor" })}
        >
          Color
        </button>
      </div>
      <div className={`${state.color ? "text-yellow-500" : "text-white"}`}>
        {state.userInput}
      </div>
    </div>
  );
}

export default Input;
