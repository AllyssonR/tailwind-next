import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600"
      {...props}
    />
  )
}
type InputRootprops = ComponentProps<'input'>
export function InputRoot(props: InputRootprops) {
  return (
    <div
      className=" mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 p-2 shadow-sm"
      {...props}
    ></div>
  )
}
