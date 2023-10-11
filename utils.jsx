import { AiOutlineFormatPainter, AiOutlineClockCircle } from "react-icons/ai";
import {
  BsBricks,
  BsDoorOpen,
  BsCalendarCheck,
  BsShieldCheck,
} from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";
import {
  LiaToiletSolid,
  LiaHandshakeSolid,
  LiaToolboxSolid,
} from "react-icons/lia";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export const validationComp = [
  {
    title: "Lifelong Career Professional",
    subTitle: "In Construction Business",
    imgSrc:
      "https://img.icons8.com/external-wanicon-lineal-color-wanicon/256/external-construction-construction-wanicon-lineal-color-wanicon-1.png",
  },
  {
    title: "Certified NextDoor Neighbor",
    subTitle: "from Excellent Customer Service",
    imgSrc:
      "https://img.icons8.com/external-thin-kawalan-studio/96/external-nextdoor-social-media-thin-kawalan-studio.png",
  },
  {
    title: "100+",
    subTitle: "Jobs Completed",
    imgSrc:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-construction-emergency-service-flaticons-lineal-color-flat-icons.png",
  },
];

export const serviceComp = [
  {
    iconName: <AiOutlineFormatPainter />,
    title: "Painting & Drywall",
    description:
      "We're born drywallers and painters. We replace or repair damaged drywall (including water damage) and professionally apply your choice of paint, leaving you with a look you will love.",
    btnPath: "/services/painting-drywall",
  },
  {
    iconName: <BsBricks />,
    title: "Caulking & Grout",
    description:
      "When caulking and grout wears, water damage and mold can occur. We'll strip out the old and apply new caulking and grout to protect your cabinets, tile, counters, and other surfaces.",
    btnPath: "/services/caulk-grout",
  },
  {
    iconName: <MdOutlineWindow />,
    title: "Tile & Backsplashes",
    description:
      "Bathroom and kitchen tiles installed improperly can be uneven and non-durable. We install tile the right way, giving you results you'll love for years. We've got you covered with backsplashes too!",
    btnPath: "/services/tile-backsplash",
  },
  {
    iconName: <BsDoorOpen />,
    title: "Doors & Locks",
    description:
      "Properly installed doors provide you with a safer barrier of entry to your home, reduce heating and cooling costs, and more. We install locks too! ",
    btnPath: "/services/doors-locks",
  },
  {
    iconName: <LiaToiletSolid />,
    title: "Plumbing",
    description:
      "Even small plumbing issues can cause water damage over time. We can fix anything that's leaking, or install a new faucet, sink, or toilet.",
    btnPath: "/services/plumbing",
  },
  {
    iconName: <HiOutlineWrenchScrewdriver />,
    title: "Furniture Assembly",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/furniture-assy",
  },
];

export const whyUsComp = [
  {
    description: "We arrive on time",
    iconName: <AiOutlineClockCircle />,
  },
  {
    description: "Job done right the first time",
    iconName: <BsCalendarCheck />,
  },
  {
    description: "No project is too small",
    iconName: <LiaHandshakeSolid />,
  },
  {
    description: "Highly skilled employees",
    iconName: <BiBrain />,
  },
  {
    description: "We arrive fully equipped",
    iconName: <LiaToolboxSolid />,
  },
  {
    description: "Work satisfaction guaranteed",
    iconName: <BsShieldCheck />,
  },
];

export const reviewComp = [
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "Alberto transformed my garden into a paradise! He planted colorful flowers, trimmed the bushes, and installed a beautiful water feature. His attention to detail is unmatched. I couldn't be happier!",
    name: "Sophia Adams",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "I hired Alberto's HandyMan Co. to renovate my kitchen, and they did an outstanding job. From installing new cabinets to updating the lighting fixtures, everything was done professionally and within the timeframe. Highly recommended!",
    name: "David Miller",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "Alberto fixed my leaky roof during a stormy night. His prompt response and efficient repair saved my house from potential water damage. I'm extremely grateful for his quick and reliable service!",
    name: "Linda Johnson",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "I called Alberto to repair my faulty electrical wiring. He diagnosed the issue swiftly and fixed it with precision. Now, my home's electrical system works perfectly. Alberto's HandyMan Co. is my go-to for all repairs!",
    name: "John Anderson",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "Alberto's team painted the exterior of my house flawlessly. They paid attention to every detail, ensuring a smooth and even finish. The transformation is amazing, and I've received numerous compliments from my neighbors. Thank you, Alberto!",
    name: "Maria Gonzalez",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "I had a plumbing emergency, and Alberto came to the rescue! He fixed the burst pipe in my basement quickly and efficiently, preventing further water damage. Alberto's HandyMan Co. provides top-notch service, and I highly recommend them!",
    name: "William Parker",
  },
  {
    imgSrc: "src/assets/nextdoor.png",
    description:
      "Alberto assembled my new furniture with precision and care. He worked diligently, ensuring each piece was put together perfectly. I'm impressed with his skills and professionalism. Alberto's HandyMan Co. is the best in town!",
    name: "Emily Carter",
  },
];
