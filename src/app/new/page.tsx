import { prisma } from '../../db'
import { redirect } from 'next/navigation'
import TransitionLink from '@/components/utils/TransitionLink'

async function createTodo(data: FormData) {
  'use server'

  const title = data.get('title')?.valueOf()

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Title is required')
  }

  await prisma.todo.create({data: {title, isComplete: false}})
  redirect('/')

  console.log(title)
}

export default function NewTodo() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Todo</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className='flex justify-end gap-2'>
          <TransitionLink
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </TransitionLink>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}