import { IoSearchOutline } from "react-icons/io5"

function RightSidebar() {
  return (
    <aside className="fixed top-0 right-0 w-[450px] h-screen pr-20 hidden xl:block p-5 ">
        <div className="text-white flex items-center gap-2 border border-border rounded-full p-2">
            <IoSearchOutline />
            <input type="text" placeholder="Search" className="outline-none w-full " />
        </div>
    </aside>
  )
}

export default RightSidebar