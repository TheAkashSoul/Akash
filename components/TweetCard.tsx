import { Xsvg } from "./Theme";

type Props = {
  title?: string;
  description?: string;
  date?: string;
  href?: string;
};
const TweetCard = ({ title, description, date, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-30 dark:from-[#202D2E] dark:to-[#303428]" />
      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

        <div className="p-4">
          <div className="py-1 flex flex-row flex-wrap gap-2 items-center justify-between">
            <Xsvg className="rounded-full w-6 h-6" />
            <span className="text-xs text-gray-700 dark:text-gray-300">
              {date}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 pt-2">
            {title}
          </h4>
          <p className="leading-6 text-gray-700 dark:text-gray-300 text-base pt-1">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default TweetCard;
