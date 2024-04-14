import TweetCard from "./TweetCard";
import tweetsData from "../data/tweetsData.json";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Tweets = () => {
  const tweets = tweetsData.tweets[0];
  return (
    <div id="tweets">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Tweets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TweetCard
          title={tweets["tweet-8"].title}
          description={tweets["tweet-8"].description}
          date={tweets["tweet-8"].date}
          href={tweets["tweet-8"].href}
        />
        <TweetCard
          title={tweets["tweet-7"].title}
          description={tweets["tweet-7"].description}
          date={tweets["tweet-7"].date}
          href={tweets["tweet-7"].href}
        />
        <TweetCard
          title={tweets["tweet-6"].title}
          description={tweets["tweet-6"].description}
          date={tweets["tweet-6"].date}
          href={tweets["tweet-6"].href}
        />
        <TweetCard
          title={tweets["tweet-5"].title}
          description={tweets["tweet-5"].description}
          date={tweets["tweet-5"].date}
          href={tweets["tweet-5"].href}
        />
        <TweetCard
          title={tweets["tweet-4"].title}
          description={tweets["tweet-4"].description}
          date={tweets["tweet-4"].date}
          href={tweets["tweet-4"].href}
        />
        <TweetCard
          title={tweets["tweet-3"].title}
          description={tweets["tweet-3"].description}
          date={tweets["tweet-3"].date}
          href={tweets["tweet-3"].href}
        />
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
