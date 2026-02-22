import { updateProfileProps } from "@/app/types/roadmap";
import { SetStateAction, Dispatch } from "react";
import { FiEdit } from "react-icons/fi";
const EditProfileModal = ({
  updateProfile,
  setUpdateProfile,
}: {
  updateProfile: updateProfileProps;
  setUpdateProfile: Dispatch<SetStateAction<updateProfileProps>>;
}) => {
  return (
    <div className="space-y-6 py-2">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground flex items-center gap-2">
            User Name
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="text"
              value={updateProfile.username}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              placeholder="Enter username"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Email</label>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              type="email"
              value={updateProfile.email}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Bio</label>

        <div className="rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
          <input
            className="w-full bg-transparent outline-none text-sm"
            type="text"
            value={updateProfile.bio}
            onChange={(e) =>
              setUpdateProfile((prev) => ({
                ...prev,
                bio: e.target.value,
              }))
            }
            placeholder="Tell something about yourself"
          />
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="font-medium text-sm text-muted-foreground">
          Social Links
        </h3>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              placeholder="Website link"
              value={updateProfile?.links?.website}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  links: { ...prev.links, website: e.target.value },
                }))
              }
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              placeholder="LinkedIn profile"
              value={updateProfile.links.linkedin}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  links: { ...prev.links, linkedin: e.target.value },
                }))
              }
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 focus-within:border-primary transition">
            <input
              className="w-full bg-transparent outline-none text-sm"
              placeholder="Github profile"
              value={updateProfile.links.github}
              onChange={(e) =>
                setUpdateProfile((prev) => ({
                  ...prev,
                  links: { ...prev.links, github: e.target.value },
                }))
              }
            />
          </div>
        </div>
      </div>
        <button  className="p-2 rounded-xl bg-primary/70 hover:bg-primary transition-all cursor-pointer mx-auto mt-5 w-full max-w-2xl flex items-center gap-2 justify-center font-bold">Edit Profile <FiEdit /> </button>
    </div>
  );
};

export default EditProfileModal;
