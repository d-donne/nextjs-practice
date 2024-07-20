import { prisma } from "../db";
import TodoItem from "../components/TodoItem";
import TransitionLink from "@/components/utils/TransitionLink";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, isComplete: boolean) {
  'use server'

  await prisma.todo.update({where: {id}, data: {isComplete}})

  console.log(id, isComplete)
}

export default async function Home () {

  const todos = await getTodos();
  // await prisma.todo.create({data: {title: "Test todo", isComplete: false}})

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <TransitionLink
          href={"/new"}
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </TransitionLink>
      </header>
      <ul>
        {todos.map(todo => (
          // the spread operator is used to pass all properties of todo object as props to TodoItem
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>
    </>
  );
};

