import { SettingsTabs } from '@/components/SettingsTabs'
import {
  InputRoot,
  InputControl,
  InputPrefix,
} from '../components/Sidebar/input'
import { Mail } from 'lucide-react'
import * as FileInput from '../components/Form/FileInput'
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3 ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-500"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue={'Diego'} />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue={'Fernandes'} />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-500"
            >
              Email address
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControl
                  id="email"
                  type="email"
                  defaultValue={'diegofernandes@rocketseat.com'}
                />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className=" text-sm font-medium text-zinc-500"
            >
              Your photo
              <span className="mt-0.5 block  text-sm font-normal text-zinc-500">
                This will displaed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-500">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="role" defaultValue="CTO" />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-500"
            >
              Country
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-500"
            >
              Timezone
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className=" text-sm font-medium text-zinc-500">
              Bio
              <span className="mt-0.5 block  text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6"></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className=" text-sm font-medium text-zinc-500"
            >
              Portfolio projects
              <span className="mt-0.5 block  text-sm font-normal text-zinc-500">
                Share a few snippets of your portfolio
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
