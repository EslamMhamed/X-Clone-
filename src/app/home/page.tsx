import CreatePost from "../../../components/CreatePost"
import Posts from "../../../components/Posts"

function page() {
  return (
    <div>
      <div className="border border-border h-14 grid grid-cols-2 text-white  ">
      <button className="cursor-pointer font-semibold hover:bg-hover ">For you</button>
      <button className="cursor-pointer font-semibold hover:bg-hover">Following</button>
      </div>
      <CreatePost />
      <Posts />
    </div>
  )
}

export default page