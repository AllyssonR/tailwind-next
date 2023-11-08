import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex grid-cols-profile items-center gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/42867875?v=4"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className=" flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Allysson Ribeiro
        </span>
        <span className="truncate text-sm text-zinc-500">
          allyssonribeiro1@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-500"
      >
        <LogOut className="h-5 w-5 text-zinc-500 " />
      </button>
    </div>
  )
}
