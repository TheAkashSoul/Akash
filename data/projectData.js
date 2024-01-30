import ivoice01 from "../assets/ivoice01.png";
import ivoice02 from "../assets/ivoice01.png";
import ivoice03 from "../assets/ivoice01.png";

import recipeat01 from "../assets/recipeat01.png";
import recipeat02 from "../assets/recipeat01.png";
import recipeat03 from "../assets/recipeat01.png";
import recipeat04 from "../assets/recipeat01.png";
import recipeat05 from "../assets/recipeat01.png";
import recipeat06 from "../assets/recipeat01.png";

const projectData = [
  {
    id: 1,
    title: "Recipeat - Food Recipe App",
    description:
      "Recipeat: A sleek food recipe app with five tabs – Home for curated recipes, Search for smart suggestions, Post Upload for sharing, Saved for tracking, and Profile for showcasing. Each recipe comes to life in a dedicated Detail Page, ensuring a seamless culinary journey.",
    image: recipeat01,
    github: "https://github.com/TheAkashSoul/Recipeat",
    mainTech: ["React Native", "Expo"],
    tweets: ["https://x.com/TheAkashSoul/status/1743543025194934680?s=20"],
    gallery: [
      recipeat01,
      recipeat02,
      recipeat03,
      recipeat04,
      recipeat05,
      recipeat06,
    ],
    features: [
      "Feature 1 for Project 1",
      "Feature 2 for Project 1",
      "Feature 3 for Project 1",
    ],
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
  },
  {
    id: 2,
    title: "iVoice - Voice Recorder App",
    description:
      "Introducing iVoice, a voice recorder app developed using Expo React Native. With a clean interface, it offers easy recording, playback controls, and efficient organization of audio snippets.",
    image: ivoice01,
    github: "https://github.com/TheAkashSoul/iVoice",
    mainTech: ["React Native", "Expo"],
    tweets: ["https://x.com/TheAkashSoul/status/1742452781154451740?s=20"],
    gallery: [ivoice03, ivoice02, ivoice01],
    features: [
      "One-tap recording functionality",
      "Playback controls for play, pause, replay, fast forward, and rewind",
      "Organized list view for efficient management of recordings",
      "Intuitive user interface for a seamless user experience",
      "Built with Expo React Native for cross-platform compatibility (iOS and Android)",
      "Utilizes Expo Router and Expo AV libraries for smooth navigation and audio functionality",
    ],
    techStack: ["React Native", "Expo", "Expo Router", "Expo AV"],
  },
];

export default projectData;
