import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [list, setlist] = useState([]);

  const addInList = () => {
    if (input.trim() === "") return;

    setlist([...list, input]);
    setInput("");
  };

  const clearTodo = (index) => {
    const newList = list.filter((item, i) => i !== index);
    setlist(newList);
  };

  return (
    <div className=" min-h-screen bg-radial from-black via-gray-600 to-black flex justify-center items-center px-5">
      <div className="bg-white/50 p-2 md:p-4 rounded-xl  w-xl md:w-xl lg:w-2xl text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-3 text-blue-800 text-shadow-md text-shadow-white">
          TODO List
        </h1>
        <hr />

        {/* ======================================= Input that add on List Div */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Item..."
          className="w-full bg-white p-2 rounded-xl mt-3 border-purple-700 border-2 hover:border-purple-950 text-gray-800 font-medium"
        />

        {/* ====================================== Add Button ===================================================== */}
        <button
          className="bg-blue-800 text-white font-bold py-2 px-4 rounded-xl mt-3 duration-300 hover:bg-white hover:text-blue-800"
          onClick={addInList}
        >
          Add
        </button>

        {/* =========================== All Added List =================================================== */}

        <ul className=" bg-amber-50 mt-3 rounded-xl py-3 text-start px-4">
          {list.map((e, i) => (
            <div className="flex items-center justify-center gap-x-2">
              <li
                className="font-semibold text-lg my-2 flex justify-between p-3 rounded-xl break-all w-full "
                key={i}
              >
                {e}
              </li>

              {/* =============================== Delete a specific list ====================================================== */}
              <button
                className="bg-gray-300 font-bold p-3 rounded-full "
                onClick={() => clearTodo(i)}
              >
                X
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

// somethings wrong with delete list it's all all list
