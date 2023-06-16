import { useState } from "react";
import { Session, User } from "next-auth";

export const trimAddress = (address: string) => {
  if (typeof address !== "string") return "";
  return address.substring(0, 5) + "..." + address.substring(38, 42);
};

export function getStyledUsernameFromCurrentUser(
  currentUser: Session["user"] | undefined
) {
  if (!currentUser?.id) {
    return "";
  }

  const platformColorMapping = {
    discord: "text-brand-discord",
    twitter: "text-brand-twitter",
    twitch: "text-[#9146FF]",
    epic_games: "text-[#2F2D2E]",
    reddit: "text-[#FF4500]",
    facebook: "text-[#3B5998]",
    microsoft: "text-[#2F2D2E]",
  };

  const platform = currentUser.id.split("-")[0].toLowerCase();
  // @ts-ignore
  const textColorClass = platformColorMapping[platform] || "text-gray-2000";

  return (
    <div className={`flex ${textColorClass} text-sm`}>
      <div>{currentUser?.username}</div>
    </div>
  );
}

interface UserAccountProps {
  currentUser: Session["user"] | undefined;
  logOut: () => Promise<void>;
}

const UserAccount: React.FC<UserAccountProps> = ({ currentUser, logOut }) => {
  const [copySuccess, setCopySuccess] = useState("Click to copy address");

  function handleCopy() {
    // navigator.clipboard.writeText(currentUser?.address);
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("Click to copy address");
    }, 2000);
  }

  return (
    <div
      className={`my-auto flex w-full sm:w-auto flex-row items-center justify-between rounded-md border border-gray-300 p-2 ${
        currentUser?.username ? "sm:gap-x-4" : "sm:gap-x-2"
      }`}
    >
      <div className="flex flex-row items-center gap-x-2">
        {/* {getProviderIconFromCurrentUser(currentUser)} */}
        {getStyledUsernameFromCurrentUser(currentUser) || <></>}
      </div>

      <button
        className="text-sm font-normal text-gray-1200 hover:text-red-1200"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};
export default UserAccount;
