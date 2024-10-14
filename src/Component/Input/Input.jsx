import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    case "changeColor":
      return { ...state, color: !state.color };
    case "newUserInput":
      return { ...state, userInput: action.payload };
  }
};

function Input() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: "",
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
      <div>
        <div className={`text-${state.color ? "yellow-500" : "white"}`}>
          {state.count}
        </div>
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
          onClick={() => dispatch({ type: "changeColor" })}
        >
          Color
        </button>
      </div>
      <div className={`text-${state.color ? "yellow-500" : "white"}`}>
        {state.userInput}
      </div>
    </div>
  );
}

export default Input;
