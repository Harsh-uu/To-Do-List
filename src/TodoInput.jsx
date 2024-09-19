import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

export default function ToDoInput({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mb-6">
      <input
        className='bg-[#d4cfc4] border-2 border-black text-lg px-3 mb-2 text-center placeholder:text-black outline-none' placeholder='Type Here!'
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
        <button className=" hover:text-green-400 px-3 bg-white border-black text-lg border-2 sm:border-l-0 ">Add</button>
    </form>
  );
}
