import supabaseData from "@/data/supabase";
import TweetCard from "./TweetCard";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type TweetProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  href: string;
};
const Tweets = async () => {
  const tweetsData = await supabaseData("Tweets");
  return (
    <div id="tweets">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Tweets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tweetsData
          ?.slice()
          .reverse()
          .slice(0, 6)
          .map((tweet: TweetProps) => (
            <TweetCard key={tweet.title} {...tweet} />
          ))}
      </div>

      <Link
        href="/tweets"
        className="flex flex-row items-center justify-center gap-1 text-sm mx-auto font-medium text-gray-900 dark:text-gray-100 my-4"
      >
        <span>See More</span>
        <IoIosArrowDown
          size={16}
          className="text-gray-900 dark:text-gray-100"
        />
      </Link>
    </div>
  );
};

export default Tweets;
