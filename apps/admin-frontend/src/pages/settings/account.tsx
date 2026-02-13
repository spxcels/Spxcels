import { useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AccountProfile() {
  const { user } = useAuth();
  const fileRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(user?.name ?? "");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    user?.avatar ?? null
  );

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarPreview(URL.createObjectURL(file));
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Profile
      </h1>

      <div className="p-6 bg-white border rounded-lg dark:bg-zinc-900 dark:border-zinc-800">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center w-20 h-20 overflow-hidden text-xl font-semibold bg-gray-200 rounded-full dark:bg-zinc-700">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                className="object-cover w-full h-full"
              />
            ) : (
              name?.charAt(0) || "A"
            )}
          </div>

          <div>
            <button
              onClick={() => fileRef.current?.click()}
              className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              Change photo
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleAvatarChange}
            />
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-6 mt-8">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              value={user?.email ?? ""}
              disabled
              className="w-full px-3 py-2 bg-gray-100 border rounded-md dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="px-6 py-2 text-sm text-white bg-black rounded-md dark:bg-white dark:text-black">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
