'use client'
type Props = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleTodo: (id: string, isComplete: boolean) => void
};

function toggleTodo(id: string, isComplete: boolean) {
  

}

const TodoItem = ({ id, title, isComplete, toggleTodo }: Props) => {
  return (
    <li className="flex items-center gap-2">
      <input type="checkbox" id={id} className="cursor-pointer peer"
        defaultChecked={isComplete}
        onChange={e => toggleTodo(id, e.target.checked)}
         />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
