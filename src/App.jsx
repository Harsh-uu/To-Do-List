import { useEffect, useState } from "react";
import ToDoInput from "./TodoInput";
import ToDoLists from "./ToDoLists";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentItem) => {
      return [...currentItem, { id: crypto.randomUUID(), title }];
    });
  }

  const handleDelete = (id) => {
    setTodos((currentItem) => {
      return currentItem.filter((todo) => todo.id != id);
    });
  };

  return (
    <>
      <div className="grid place-content-center h-screen">
        <div className="w-72 sm:w-96 rounded-lg h-fit bg-[#d4cfc4] shadow-lg shadow-amber-900/20 ">
          <h1 className="font-caveat font-black text-6xl my-8 text-center bg-white rounded-sm">
            -ToDoList-
          </h1>
          <ToDoInput onSubmit={addTodo} />
          <ToDoLists todos={todos} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}
