import { AiOutlineFormatPainter } from "react-icons/ai";
import { BsBricks, BsDoorOpen } from "react-icons/bs";
import { MdOutlineWindow } from "react-icons/md";
import { LiaToiletSolid } from "react-icons/lia";
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
    btnPath: "/",
  },
  {
    iconName: <BsBricks />,
    title: "Caulking & Grout",
    description:
      "When caulking and grout wears, water damage and mold can occur. We'll strip out the old and apply new caulking and grout to protect your cabinets, tile, counters, and other surfaces.",
    btnPath: "/",
  },
  {
    iconName: <MdOutlineWindow />,
    title: "Tile & Backsplashes",
    description:
      "Bathroom and kitchen tiles installed improperly can be uneven and non-durable. We install tile the right way, giving you results you'll love for years. We've got you covered with backsplashes too!",
    btnPath: "/",
  },
  {
    iconName: <BsDoorOpen />,
    title: "Doors & Locks",
    description:
      "Properly installed doors provide you with a safer barrier of entry to your home, reduce heating and cooling costs, and more. We install locks too! ",
    btnPath: "/",
  },
  {
    iconName: <LiaToiletSolid />,
    title: "Plumbing",
    description:
      "Even small plumbing issues can cause water damage over time. We can fix anything that's leaking, or install a new faucet, sink, or toilet.",
    btnPath: "/",
  },
  {
    iconName: <HiOutlineWrenchScrewdriver />,
    title: "Furniture Assembly",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/",
  },
];
