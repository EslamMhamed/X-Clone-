import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegBookmark, FaRegComment } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";

function Comments() {
  return (
    <div>
      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src="/images/image1.jpg"
          alt="profile"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex gap-1 items-center text-sm">
              <span className="text-white font-bold">Sara Mohamed</span>
              <span className="text-secondary-text ">@Sara</span>
              <span className="text-secondary-text">4h</span>
            </div>
            <BsThreeDots className="text-secondary-text" />
          </div>
          <div className="text-white my-2 block">
            Sometimes the darkness feels more honest than the light.
          </div>
          <div className="flex justify-between my-4">
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegComment />
              <span className="text-sm ">1.5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FiRepeat />
              <span className="text-sm ">7.5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaHeart />
              <span className="text-sm ">2.5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <IoIosStats />
              <span className="text-sm ">5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegBookmark size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
