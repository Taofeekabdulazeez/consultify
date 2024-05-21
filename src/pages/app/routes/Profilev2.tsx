import { useUser } from "../../../features/user/hooks/useUser";

export default function Profile() {
  const { userData } = useUser();
  return (
    <section className="">
      <span className="text-xl font-semibold text-stone-600 inline-block mb-8">
        Account Details
      </span>
      <h2 className="text-[24px] font-semibold mb-4">Profile</h2>
      <div className="flex gap-10 items-center mb-20">
        <div className="flex gap-6">
          <img
            className="block h-[6rem] w-[6rem] rounded-full"
            src="/profile-placeholder.png"
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-3 rounded-3xl border-stone-600 border-0 text-md font-medium appearance-none whitespace-pre overflow-hidden"
            type="file"
          />
          <span className="text-md text-stone-600">
            JPG, GIF or PNG. Max size of 5MB.
          </span>
        </div>
      </div>
      <div className="flex flex-col divide-y-1 gap-10 mb-12">
        <div className="flex gap-20 items-center">
          <span className="text-md font-medium">Name</span>
          <input
            className="py-2 px-4 w-[360px] block text-md rounded-xl focus:outline-1 outline-purple-800"
            spellCheck="false"
            type="text"
            value={userData?.fullname}
          />
        </div>
        <div className="flex gap-20 items-center">
          <span className="text-md font-medium">Email</span>
          <input
            className="py-2 px-4 w-[360px] block text-md rounded-xl focus:outline-1 outline-purple-800"
            spellCheck="false"
            type="text"
            value={userData?.email}
          />
        </div>
        <div className="flex gap-20 items-center">
          <span className="text-md font-medium">Phone</span>
          <input
            className="py-2 px-4 w-[360px] block text-md rounded-xl focus:outline-1 outline-purple-800"
            spellCheck="false"
            type="text"
            value={userData?.phoneNumber}
          />
        </div>
      </div>
      <div className="flex gap-6 justify-end">
        <button className="inline-block px-3 py-1.5 font-medium text-sm bg-white border rounded-xl">
          Cancel
        </button>
        <button className="inline-block px-3 py-1.5 font-medium text-sm bg-[var(--color-primary)] border rounded-xl text-white">
          Save changes
        </button>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-6">Update Password</h4>
        <div className="flex flex-col divide-y-1 gap-10 mb-12">
          <div className="flex gap-20 items-center">
            <span className="text-md font-medium">
              New Password (min 8 characters)
            </span>
            <input
              className="py-2 px-4 w-[360px] block text-md rounded-xl focus:outline-1 outline-purple-800"
              spellCheck="false"
              type="text"
            />
          </div>
          <div className="flex gap-20 items-center">
            <span className="text-md font-medium">Confirm Password</span>
            <input
              className="py-2 px-4 w-[360px] block text-md rounded-xl focus:outline-1 outline-purple-800"
              spellCheck="false"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-end">
        <button className="inline-block px-3 py-1.5 font-medium text-sm bg-white border rounded-xl">
          Cancel
        </button>
        <button className="inline-block px-3 py-1.5 font-medium text-sm bg-[var(--color-primary)] border rounded-xl text-white">
          Update
        </button>
      </div>
    </section>
  );
}
