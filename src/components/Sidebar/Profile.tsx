export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/42867875?v=4"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          Allysson Ribeiro
        </span>
        <span className="text-sm text-zinc-500">
          allyssonribeiro1@gmail.com
        </span>
      </div>
    </div>
  )
}
