import GoButtonBack from "../../../../../components/GoButtonBack";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import ReplayPost from "../../../../../components/ReplayPost";
import Comments from "../../../../../components/Comments";
import supabaseClient from "../../../../../lib/SupabaseClient";
import { Tweet } from "../../../../../types/types";
import moment from "moment";
import TweetActions from "../../../../../components/TweetActions";

async function getTweet(id: string) {
  const { error, data } = await supabaseClient
    .from("tweets")
    .select("*, profile(id, username, avatar_url,name)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error.message);
  }
  return data;
}

async function Page({ params }: { params: { postid: string } }) {
  const tweet: Tweet = await getTweet(params.postid);

  return (
    <div>
      <div className="flex justify-between items-center mb-3 px-4 py-2">
        <div className="text-white flex items-center gap-3">
          <GoButtonBack />
          <span className="font-bold text-xl">Post</span>
        </div>
        <button className="border border-border rounded-full px-4 py-1 cursor-pointer text-white">
          Replay
        </button>
      </div>
      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src={tweet.profile.avatar_url}
          alt="profile"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex gap-1 items-center text-sm">
              <span className="text-white font-bold">{tweet.profile.name}</span>
              <span className="text-secondary-text ">
                @{tweet.profile.username}
              </span>
              <span className="text-secondary-text">
                {moment(tweet.created_at).fromNow()}
              </span>
            </div>
            <BsThreeDots className="text-secondary-text" />
          </div>
          {tweet.content && (
            <div className="text-white my-2 block">{tweet.content}</div>
          )}
          {tweet.image_url && (
            <div>
              <Image
                src={tweet.image_url}
                alt="image-post"
                width={1800}
                height={1800}
                className="h-70
                         md:h-130 w-full rounded-lg border border-border object-cover"
              />
            </div>
          )}
          <TweetActions creatorId ={tweet.profile.id} imagePath={tweet.image_path} tweetId={tweet.id} isTweetPostViewPage={true} />
        </div>
      </div>
      <ReplayPost />
      <Comments />
    </div>
  );
}

export default Page;
