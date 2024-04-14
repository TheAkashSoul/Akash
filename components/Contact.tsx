import { Xsvg } from "./Theme";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact</h2>

      <div className="bg-[#EFF6FF] dark:bg-[#161C31] w-full p-10 rounded-md overflow-hidden">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Ready to take the next step? Let&apos;s chat!
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Contact me and let&apos;s build something incredible together.
        </p>

        <a
          href="https://twitter.com/TheAkashSoul"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 items-center justify-center text-center p-2 my-6 bg-zinc-300 dark:bg-zinc-900 rounded"
        >
          <Xsvg className="w-5 h-5" />
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Chat on Twitter
          </span>
        </a>

        <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>

        <p className="mt-1 mb-4 text-gray-800 dark:text-gray-200">
          Drop a message in my inbox to start a conversation about your next
          project.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={"akashpatromail@gmail.com"}
          readOnly
          className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
      </div>
    </div>
  );
};

export default Contact;
