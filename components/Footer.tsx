import Link from "next/link";

const Footer = () => {
  const navList = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Tweets", link: "tweets" },
  ];

  const socialList = [
    { name: "GitHub", link: "https://github.com/TheAkashSoul" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/akashpatro" },
    { name: "Twitter", link: "https://twitter.com/TheAkashSoul" },
    { name: "Instagram", link: "https://www.instagram.com/theakashsoul" },
  ];
  return (
    <div className="">
      <hr className="w-full border border-gray-200 dark:border-gray-800 mb-8"></hr>
      <div className="w-full grid grid-cols-2 gap-4 pb-16 overflow-hidden">
        <div className="flex flex-col space-y-4">
          {navList.map((list) => (
            <Link
              href={list.link}
              key={list.name}
              className="text-gray-500 hover:text-gray-600 transition w-fit"
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {socialList.map((list) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={list.link}
              key={list.name}
              className="text-gray-500 hover:text-gray-600 transition w-fit"
            >
              {list.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
