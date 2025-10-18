import Image from "next/image"
import { IoSearchOutline } from "react-icons/io5"

function RightSidebar() {
  return (
    <aside className="fixed top-0 right-0 w-[450px] h-screen pr-20 hidden xl:block p-5 ">
        <div className="text-white flex items-center gap-2 border border-border rounded-full p-2">
            <IoSearchOutline />
            <input type="text" placeholder="Search" className="outline-none w-full " />
        </div>
        <div className="border border-border p-4 text-white mt-5 rounded-lg">
          <h3 className="font-bold text-2xl mb-4 ">Subscribe to Premium</h3>
          <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
          <button className="mt-4 bg-primary text-white py-2 px-5 font-semibold cursor-pointer rounded-full">Subscribe</button>
        </div>
        <div className="border border-border p-4 text-white mt-5 rounded-lg ">
          <h3 className="mb-4 text-2xl font-bold">Who to follow</h3>
          <div className="flex justify-between items-center mb-6 ">
            <div className="flex gap-2 items-center">
              <Image src="/images/image1.jpg" alt="profile-pic" width={800} height={800} className="w-10 h-10 object-cover rounded-full" />
              <div className="text-white">
                <p>Sara Mohamed</p>
                <p className="text-secondary-text font-light" >@sara</p>
              </div>
            </div>
            <button className="bg-white text-black py-2 px-5 font-semibold rounded-full cursor-pointer">Follow</button>
          </div>
          <div className="flex justify-between items-center mb-6 ">
            <div className="flex gap-2 items-center">
              <Image src="/images/image2.jpg" alt="profile-pic" width={800} height={800} className="w-10 h-10 object-cover rounded-full" />
              <div className="text-white">
                <p>Karem Mohamed</p>
                <p className="text-secondary-text font-light" >@karem</p>
              </div>
            </div>
            <button className="bg-white text-black py-2 px-5 font-semibold rounded-full cursor-pointer">Follow</button>
          </div>
          <div className="flex justify-between items-center mb-6 ">
            <div className="flex gap-2 items-center">
              <Image src="/images/image3.jpg" alt="profile-pic" width={800} height={800} className="w-10 h-10 object-cover rounded-full" />
              <div className="text-white">
                <p>Oliva Scott</p>
                <p className="text-secondary-text font-light" >@oliva</p>
              </div>
            </div>
            <button className="bg-white text-black py-2 px-5 font-semibold rounded-full cursor-pointer">Follow</button>
          </div>
        </div>
    </aside>
  )
}

export default RightSidebar