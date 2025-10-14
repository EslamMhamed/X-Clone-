import Image from "next/image"
import Link from "next/link"
import { BiBell, BiEnvelope } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { FaFeather, FaRegUser, FaXTwitter } from "react-icons/fa6"
import { GoHomeFill } from "react-icons/go"
import { HiDotsHorizontal } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"
import { TbDotsCircleHorizontal } from "react-icons/tb"

function Leftsidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[50px] lg:w-[400px] p-1 lg:p-4 h-screen lg:pl-30  ">
        <p className="mb-6 text-white">
            <FaXTwitter size={30} />
        </p>
        <div className="space-y-2">
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <GoHomeFill size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Home</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <IoSearchOutline size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Explore</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <BiBell size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Notifications</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <BiEnvelope size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Messgae</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <BsPeople size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Communities</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <FaXTwitter size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Premium</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <FaRegUser size={30} />
            <span className="hidden lg:inline text-xl font-bold ">Profile</span>
            </Link>
            <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover" >
            <TbDotsCircleHorizontal size={30} />
            <span className="hidden lg:inline text-xl font-bold ">More</span>
            </Link>
        </div>
        <button className="hidden lg:block bg-white text-black p-3 w-full mt-3 font-bold rounded-full cursor-pointer ">Post</button>
        <button className="bg-primary p-3 mt-3 rounded-full cursor-pointer text-white lg:hidden">
            <FaFeather size={20} />
        </button>
        <div className="mt-10 text-white flex justify-between items-center ">
            <div className="flex items-center gap-2">
                <Image src="/images/profile.png" alt="profile iamge" width={500} height={500} className="w-10 h-10 object-cover rounded-full" />
                <div className="hidden lg:block">
                    <p className="font-semibold">Eslam</p>
                    <p className="text-secondary-text font-light">@mohaeslam</p>
                    <HiDotsHorizontal className="hidden lg:block" />
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Leftsidebar