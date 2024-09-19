import ToDoItem from "./ToDoItem";

export default function ToDoLists({ todos, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
            <ToDoItem
              {...todo}
              handleDelete={handleDelete}
              key={todo.id}
            />
        );
      })}
    </ul>
  );
}
