import { RxCross2 } from "react-icons/rx";

export default function ToDoItem({ id, title, handleDelete }) {
  return (
    <li key={id} className="my-4 flex place-content-center border-2 border-black group w-[80%] mx-auto hover:bg-[#f4f4f0] hover:-translate-y-1 hover:-translate-x-1 hover:border-b-4 hover:border-r-4">
      <p className="my-1 break-words font-mono max-w-[75%]">{title}</p>
      <button className="border-2 border-slate-900 rounded-full grid place-items-center my-auto mr-2 mx-auto w-6 h-6 col-span-1 grid-flow-col-dense bg-[#d4cfc4] absolute right-0 top-1 invisible group-hover:visible" onClick={() => handleDelete(id)}>
        <RxCross2 className="hover:text-red-600 hover:animate-pulse"/>
      </button>
    </li>
  );
}
