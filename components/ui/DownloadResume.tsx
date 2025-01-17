import React from "react";

function DownloadResume({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          <div className="flex items-center justify-center gap-4">
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </div>
        </div>
      </button>
    </>
  );
}

export default DownloadResume;
