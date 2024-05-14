import { AiOutlineFormatPainter, AiOutlineClockCircle } from "react-icons/ai";
import {
  BsBricks,
  BsDoorOpen,
  BsCalendarCheck,
  BsShieldCheck,
} from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import {
  MdOutlineWindow,
  MdOutlineFireplace,
  MdOutlineCarpenter,
} from "react-icons/md";
import {
  LiaToiletSolid,
  LiaHandshakeSolid,
  LiaToolboxSolid,
} from "react-icons/lia";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

import { IoWaterOutline } from "react-icons/io5";

import { GiLeak } from "react-icons/gi";

import { PiGarageLight } from "react-icons/pi";

export const validationComp = [
  {
    title: "Lifelong Career Professional",
    subTitle: "Construction Business",
    imgSrc:
      "https://img.icons8.com/external-wanicon-lineal-color-wanicon/256/external-construction-construction-wanicon-lineal-color-wanicon-1.png",
  },
  {
    title: "Certified NextDoor Neighbor",
    subTitle: "Excellent Customer Service",
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

export const serviceCompLayout = [
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
  {
    iconName: <IoWaterOutline />,
    title: "Water Damage Repair",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/water-damage-repair",
  },
  {
    iconName: <MdOutlineFireplace />,
    title: "Fireplace Tile Installation",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/fireplace-tile-install",
  },
  {
    iconName: <GiLeak />,
    title: "Leak Repair",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/leak-repair",
  },
  {
    iconName: <MdOutlineCarpenter />,
    title: "Carpentry",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/carpentry",
  },
  {
    iconName: <PiGarageLight />,
    title: "Garage Repair & Installation",
    description:
      "We can put together furniture for you and save you time! We assemble it fast and efficiently",
    btnPath: "/services/garage-repair-install",
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

export const tempGallery = [
  {
    id: 0,
    filePath: "src/assets/gallery/gallery_AC_ACRepair_after_1.jpeg",
    projType: "AC",
    projName: "ACRepair",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 1,
    filePath: "/src/assets/gallery/gallery_carpenter_fenceRepair_after_1.jpeg",
    projType: "carpenter",
    projName: "fenceRepair",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 2,
    filePath: "/src/assets/gallery/gallery_carpenter_roomRepair_after_1.jpeg",
    projType: "carpenter",
    projName: "roomRepair",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 3,
    filePath: "/src/assets/gallery/gallery_carpenter_fenceRepair_before_1.jpeg",
    projType: "carpenter",
    projName: "fenceRepair",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 4,
    filePath: "/src/assets/gallery/gallery_door_doorInstall_after_1.jpeg",
    projType: "door",
    projName: "doorInstall",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 5,
    filePath: "/src/assets/gallery/gallery_carpenter_roomRepair_before_1.jpeg",
    projType: "carpenter",
    projName: "roomRepair",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 6,
    filePath: "/src/assets/gallery/gallery_door_doorInstall_before_1.jpeg",
    projType: "door",
    projName: "doorInstall",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 7,
    filePath: "/src/assets/gallery/gallery_door_doorInstall_after_2.jpeg",
    projType: "door",
    projName: "doorInstall",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 8,
    filePath: "/src/assets/gallery/gallery_door_doorInstall_before_2.jpeg",
    projType: "door",
    projName: "doorInstall",
    photoType: "before",
    photoNum: "2",
  },
  {
    id: 9,
    filePath: "/src/assets/gallery/gallery_door_sideDoorInstall_after_1.jpeg",
    projType: "door",
    projName: "sideDoorInstall",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 10,
    filePath: "/src/assets/gallery/gallery_door_sideDoorInstall_before_1.jpeg",
    projType: "door",
    projName: "sideDoorInstall",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 11,
    filePath:
      "/src/assets/gallery/gallery_electric_boilerReplacement_after_1.jpeg",
    projType: "electric",
    projName: "boilerReplacement",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 12,
    filePath:
      "/src/assets/gallery/gallery_electric_ceilingLightInstall_before_1.jpeg",
    projType: "electric",
    projName: "ceilingLightInstall",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 13,
    filePath:
      "/src/assets/gallery/gallery_electric_boilerReplacement_before_1.jpeg",
    projType: "electric",
    projName: "boilerReplacement",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 14,
    filePath:
      "/src/assets/gallery/gallery_electric_ceilingLightInstall_after_1.jpeg",
    projType: "electric",
    projName: "ceilingLightInstall",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 15,
    filePath: "/src/assets/gallery/gallery_electric_outsideLamp_after_1.jpeg",
    projType: "electric",
    projName: "outsideLamp",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 16,
    filePath: "/src/assets/gallery/gallery_electric_outsideLamp_after_2.jpeg",
    projType: "electric",
    projName: "outsideLamp",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 17,
    filePath: "/src/assets/gallery/gallery_electric_outsidePower_after_1.jpeg",
    projType: "electric",
    projName: "outsidePower",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 18,
    filePath: "/src/assets/gallery/gallery_electric_outsidePower_after_2.jpeg",
    projType: "electric",
    projName: "outsidePower",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 19,
    filePath: "/src/assets/gallery/gallery_electric_outsideLamp_before_1.jpeg",
    projType: "electric",
    projName: "outsideLamp",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 20,
    filePath:
      "/src/assets/gallery/gallery_general_christmasDecorFrontDoor_after_1.jpeg",
    projType: "general",
    projName: "christmasDecorFrontDoor",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 21,
    filePath:
      "/src/assets/gallery/gallery_general_christmasDecorFrontDoor_after_2.jpeg",
    projType: "general",
    projName: "christmasDecorFrontDoor",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 22,
    filePath:
      "/src/assets/gallery/gallery_general_christmasDecorFrontDoor_before_1.jpeg",
    projType: "general",
    projName: "christmasDecorFrontDoor",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 23,
    filePath:
      "/src/assets/gallery/gallery_general_foundationRepair_after_1.jpeg",
    projType: "general",
    projName: "foundationRepair",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 24,
    filePath:
      "/src/assets/gallery/gallery_general_foundationRepair_before_1.jpeg",
    projType: "general",
    projName: "foundationRepair",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 25,
    filePath:
      "/src/assets/gallery/gallery_general_outsideWineCool_after_1.jpeg",
    projType: "general",
    projName: "outsideWineCool",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 26,
    filePath: "/src/assets/gallery/gallery_general_vanLogo_after_1.jpeg",
    projType: "general",
    projName: "vanLogo",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 27,
    filePath: "/src/assets/gallery/gallery_general_stumpRemoval_after_1.jpeg",
    projType: "general",
    projName: "stumpRemoval",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 28,
    filePath:
      "/src/assets/gallery/gallery_general_outsideWineCool_before_1.jpeg",
    projType: "general",
    projName: "outsideWineCool",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 29,
    filePath: "/src/assets/gallery/gallery_light_lampReplace_after_1.jpeg",
    projType: "light",
    projName: "lampReplace",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 30,
    filePath: "/src/assets/gallery/gallery_light_lampReplace_before_1.jpeg",
    projType: "light",
    projName: "lampReplace",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 31,
    filePath:
      "/src/assets/gallery/gallery_plumbing_sinkMirrorRemodel_after_1.jpeg",
    projType: "plumbing",
    projName: "sinkMirrorRemodel",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 32,
    filePath:
      "/src/assets/gallery/gallery_plumbing_sinkMirrorRemodel_after_2.jpeg",
    projType: "plumbing",
    projName: "sinkMirrorRemodel",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 33,
    filePath:
      "/src/assets/gallery/gallery_plumbing_sinkMirrorRemodel_after_3.jpeg",
    projType: "plumbing",
    projName: "sinkMirrorRemodel",
    photoType: "after",
    photoNum: "3",
  },
  {
    id: 34,
    filePath:
      "/src/assets/gallery/gallery_plumbing_sinkMirrorRemodel_before_1.jpeg",
    projType: "plumbing",
    projName: "sinkMirrorRemodel",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 35,
    filePath: "/src/assets/gallery/gallery_tile_tileReplace_before_1.jpeg",
    projType: "tile",
    projName: "tileReplace",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 36,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_after_1.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 37,
    filePath: "/src/assets/gallery/gallery_tile_tileReplace_after_1.jpeg",
    projType: "tile",
    projName: "tileReplace",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 38,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_after_3.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "after",
    photoNum: "3",
  },
  {
    id: 39,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_before_3.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "before",
    photoNum: "3",
  },
  {
    id: 40,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_before_2.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "before",
    photoNum: "2",
  },
  {
    id: 41,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_after_2.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 42,
    filePath: "/src/assets/gallery/gallery_tiles_showerUpgrade_before_1.jpeg",
    projType: "tiles",
    projName: "showerUpgrade",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 43,
    filePath: "/src/assets/gallery/gallery_window_safetyBar_after_1.jpeg",
    projType: "window",
    projName: "safetyBar",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 44,
    filePath: "/src/assets/gallery/gallery_window_safetyBar_after_2.jpeg",
    projType: "window",
    projName: "safetyBar",
    photoType: "after",
    photoNum: "2",
  },
  {
    id: 45,
    filePath:
      "/src/assets/gallery/gallery_plumbing_sinkMirrorRemodel_before_2.jpeg",
    projType: "plumbing",
    projName: "sinkMirrorRemodel",
    photoType: "before",
    photoNum: "2",
  },
  {
    id: 46,
    filePath: "/src/assets/gallery/gallery_window_safetyBar_after_3.jpeg",
    projType: "window",
    projName: "safetyBar",
    photoType: "after",
    photoNum: "3",
  },
  {
    id: 47,
    filePath: "/src/assets/gallery/gallery_window_safetyBar_after_4.jpeg",
    projType: "window",
    projName: "safetyBar",
    photoType: "after",
    photoNum: "4",
  },
  {
    id: 48,
    filePath: "/src/assets/gallery/gallery_window_safetyBar_before_1.jpeg",
    projType: "window",
    projName: "safetyBar",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 49,
    filePath: "/src/assets/gallery/gallery_window_windowUpgrade_after_1.jpeg",
    projType: "window",
    projName: "windowUpgrade",
    photoType: "after",
    photoNum: "1",
  },
  {
    id: 50,
    filePath: "/src/assets/gallery/gallery_window_windowUpgrade_before_1.jpeg",
    projType: "window",
    projName: "windowUpgrade",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 51,
    filePath: "/src/assets/gallery/gallery_window_windowUpgrade_before_2.jpeg",
    projType: "window",
    projName: "windowUpgrade",
    photoType: "before",
    photoNum: "2",
  },
  {
    id: 52,
    filePath: "/src/assets/gallery/gallery_electric_outsidePower_before_1.jpeg",
    projType: "electric",
    projName: "outsidePower",
    photoType: "before",
    photoNum: "1",
  },
  {
    id: 53,
    filePath: "/src/assets/gallery/gallery_window_windowUpgrade_after_3.jpeg",
    projType: "window",
    projName: "windowUpgrade",
    photoType: "after",
    photoNum: "3",
  },
  {
    id: 54,
    filePath: "/src/assets/gallery/gallery_window_windowUpgrade_after_2.jpeg",
    projType: "window",
    projName: "windowUpgrade",
    photoType: "after",
    photoNum: "2",
  },
];

export const servicesPagesInfo = [
  {
    id: "painting-drywall",
    heroName: "Painting and Drywall Repair",
    mainTitle: "Professional painting & drywall replacement",
    mainDescription: `A fresh coat of paint on a wall, when professionally applied, can make a world of difference when it comes to the look and feel of a room. 
      
      Alberto's HandyMan Co. has the knowledge and experience needed to provide you with great results at affordable prices. But no matter how good we are at painting, a wall with holes or wear and tear won't look too good even with a fresh paint job. That's why we also take the time to repair your drywall beforehand to offer the best results possible. And that includes repairing water damaged drywall.
      
      Wet drywall loses its structural integrity and becomes weak, causing holes and other issues. If you have water damage in your drywall, we'll remove the damaged areas and replace with new drywall. We professionally apply a joining compound for a seamless look and when painted, you're left with your wall looking brand new.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/painting-contractors-scaled.jpg",
    heroImg:
      "https://i0.wp.com/www.deplok.com/wp-content/uploads/2019/06/Painting-Drywall.jpg?fit=950%2C632&ssl=1",
  },
  {
    id: "caulk-grout",
    heroName: "Caulking & Grout Repair",
    mainTitle: "Grout repair and caulking replacement",
    mainDescription: `Grout and caulking are often looked past when it comes to thinking about repairs, but they serve very important purposes.

A properly sealed countertop and grouted floor can prevent water damage by creating a seal.

And sealing windows and doors can help save money on your heating and cooling bills!

Over time (or with improper installation), caulking and grout can degrade and will need to be replaced to maintain their seal.

Alberto's HandyMan Co. has years of experience ensuring your caulking and grout has a proper seal, preserving your countertops, tile floors, and more.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/Grout-repair-and-caulking-replacement.jpg",
    heroImg:
      "https://apollohome.com/wp-content/uploads/2014/06/bathroom-sink-caulk-gun.jpg",
  },
  {
    id: "tile-backsplash",
    heroName: "Bathroom Tile & Kitchen Backsplashes",
    mainTitle: "Bathroom tile & kitchen backsplash installation",
    mainDescription: `Having tile installed during home remodeling (such as part of a kitchen remodel or bathroom update) is a great way to add value and appeal to your home.

Not only is properly installed tile durable, it is easy to clean, easy to maintain and offers design flexibility that other wall and flooring options simply do not.

However, improperly installed tile can be uneven and not very durable.

That's why it's important to have professionals, like the Alberto's HandyMan Co. team, install your tile.

And we also install kitchen backsplashes to help add a unique aesthetic touch to your kitchen!

Whatever the tile or backsplash project, Alberto's HandyMan Co. can install everything professionally and in a timely manner.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/05/Norbert-Sienko-Powder-room-tile-installation.jpg",
    heroImg:
      "https://i.etsystatic.com/20768209/r/il/a56d2a/2012735655/il_1080xN.2012735655_5vr3.jpg",
  },
  {
    id: "doors-locks",
    heroName: "Door Repair & Lock Installation",
    mainTitle: "We repair and install doors & locks",
    mainDescription: `Doors offer many different benefits to your household; privacy, security, energy savings, and more.

And an improperly installed door can not only be a little annoying to use, but can also be much less safe and allow air to escape, costing you more money.

Alberto's HandyMan Co. has many years experience installing doors to improve the aesthetics of your home while also allowing you to take full advantage of the benefits of doors.

That goes for locks too!

Locks are a huge part of keeping your house safe and secure, so we take the time to make sure they are installed correctly.

Whether it's an exterior door to update the look of your house or an interior door to replace an old one, give Alberto's HandyMan Co. a call to get it done right!`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/house-1407562_1920.jpg",
    heroImg:
      "https://www.lockedinnout.com/wp-content/uploads/2022/04/Commercial-Door-Locks.jpg",
  },
  {
    id: "plumbing",
    heroName: "Plumbing & Garbage Disposal Repair ",
    mainTitle: "Professional plumbing services",
    mainDescription: `Having a leak or other light plumbing issues can not only waste water, but they can cause water damage to nearby countertops, walls, and more, costing you thousands of dollars.

When your pipes are leaking, you need a toilet repaired or replaced, you need your garbage disposal repaired, or any other plumbing issue, call Alberto's HandyMan Co..

We have many years of experience working with plumbing systems and are happy to help fix your plumbing issue`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/plumbing-840835_1920.jpg",
    heroImg:
      "https://tiogacontractors.com/wp-content/uploads/2018/04/Common-Mistakes-in-Dallas-Plumbing-and-Upkeep-_-Plumbing-Service-in-Dallas.jpg",
  },
  {
    id: "furniture-assy",
    heroName: "Furniture Assembly Assistance",
    mainTitle: "We help out with complex or heavy furniture assembly",
    mainDescription: `Assembling furniture can be a daunting task, especially when faced with a barrage of confusing instructions and countless tiny pieces. That's where Alberto's HandyMan Co. comes in. Our team of experienced technicians specializes in furniture assembly, taking the stress and hassle out of the process for you. Whether it's a simple bookshelf or a complex bedroom set, we have the skills and tools to get the job done quickly and efficiently. We carefully follow manufacturer instructions to ensure that your furniture is assembled correctly the first time, saving you time and frustration. With Alberto's HandyMan Co., you can enjoy your new furniture without the headache of assembly.`,
    imgSrc:
      "https://www.leatherman.com/on/demandware.static/-/Library-Sites-leatherman-shared2020/default/dw7a20553f/blog/home/diy/7-hacks-for-assembling-furniture/AssemblingFurniture-full.jpg",
    heroImg:
      "https://helloservices.co.uk/wp-content/uploads/2021/10/flat-pack-assembler-near-me.jpg",
  },
  {
    id: "water-damage-repair",
    heroName: "Water Damage Repair",
    mainTitle: "Replace water damaged walls, sheetrock, carpet, etc.",
    mainDescription: `Water damage can wreak havoc on your home, causing structural issues, mold growth, and even health hazards. At Alberto's HandyMan Co., we understand the urgency of addressing water damage promptly and effectively. Our team of experts is equipped with the knowledge and tools to assess the extent of the damage and develop a comprehensive repair plan tailored to your specific needs. Whether it's a burst pipe, a leaking roof, or flooding from a storm, we have the experience to restore your home to its pre-damaged condition. From water extraction and drying to repairing damaged materials and preventing mold growth, we handle every aspect of the restoration process with precision and care. With Alberto's HandyMan Co., you can trust that your home is in capable hands, and we'll work tirelessly to ensure that your property is restored to its former glory.`,
    imgSrc:
      "https://www.ezgreen-service.com/wp-content/uploads/2022/11/Water-Damage-Repair-1024x768-1.jpg",
    heroImg:
      "https://american-restoration.com/wp-content/uploads/2021/05/water-damage-repair-diy.png",
  },
  {
    id: "fireplace-tile-install",
    heroName: "Fireplace Tile Installation",
    mainTitle: "We install beautiful fireplace tiles",
    mainDescription: `Transforming your fireplace with new tile can breathe new life into your living space, adding style and sophistication to your home. At Alberto's HandyMan Co., we specialize in fireplace tile installation, offering expert craftsmanship and attention to detail. Whether you're looking to create a sleek modern look or a cozy rustic feel, our team has the expertise to bring your vision to life. We'll work closely with you to choose the perfect tile that complements your existing decor and fits your aesthetic preferences. From preparing the surface to precision cutting and installation, we take pride in delivering flawless results that exceed your expectations. With Alberto's HandyMan Co., you can trust that your fireplace tile installation will be completed with the utmost care and professionalism, leaving you with a stunning focal point that enhances the beauty and value of your home.`,
    imgSrc:
      "https://thehappierhomemaker.com/wp-content/uploads/2019/01/tile-fireplace-surround-diy.jpg",
    heroImg:
      "https://classiquefloors.com/wp-content/uploads/2023/10/Ferreira-Hearth-Tile-1000.jpg",
  },
  {
    id: "leak-repair",
    heroName: "Leaky Pipes Repair",
    mainTitle: "We identify and fix leaky pipes",
    mainDescription: `A leaky roof, a dripping faucet, or a burst pipe—no matter the source, leaks can cause significant damage to your home if left unchecked. At Alberto's HandyMan Co., we specialize in leak repair, offering prompt and reliable solutions to protect your property and restore your peace of mind. Our team of skilled technicians has the expertise to identify and address leaks quickly and effectively, preventing further damage and costly repairs down the line. Whether it's patching a leaky roof, fixing a broken pipe, or sealing a leaking fixture, we have the tools and knowledge to get the job done right the first time. We understand the urgency of leak repair, which is why we prioritize fast response times and efficient solutions to minimize disruption to your daily life. With Alberto's HandyMan Co., you can trust that your leak repair needs will be handled with professionalism, integrity, and care, ensuring that your home remains safe, dry, and secure for years to come.`,
    imgSrc:
      "https://library.homeserve.com/m/63ed80bb936ab0c/Blog-GettyImages-1136317145.jpg",
    heroImg:
      "https://www.tmscomfort.com/wp-content/uploads/2019/11/1564474437516hidden-plumbing-1.jpg",
  },
  {
    id: "carpentry",
    heroName: "Carpentry",
    mainTitle: "Get your carpentry needs met with us",
    mainDescription: `Carpentry is the art of crafting and shaping wood into functional and beautiful structures, furniture, and fixtures. At Alberto's HandyMan Co., we take pride in our carpentry services, offering expert craftsmanship and attention to detail for all your woodworking needs. Whether you're looking to build custom shelving, install crown molding, or repair damaged woodwork, our team of skilled carpenters has the experience and expertise to bring your vision to life. We work closely with each client to understand their unique requirements and preferences, providing personalized solutions that exceed expectations. From precise measurements and cutting to meticulous assembly and finishing, we ensure that every project is completed to the highest standards of quality and craftsmanship. With Alberto's HandyMan Co., you can trust that your carpentry project will be handled with professionalism, integrity, and care, leaving you with beautiful, long-lasting results that enhance the beauty and functionality of your home.`,
    imgSrc:
      "https://www.pikespeak.edu/_images-universal/vertical-images/carpentry-800x1200-2.jpg",
    heroImg:
      "https://www.byf.org/wp-content/uploads/2022/01/IMG_6719-1146x600-1.jpg",
  },
  {
    id: "garage-repair-install",
    heroName: "Garage Door Installs and Repairs",
    mainTitle:
      "Automatic and remote control garage door repairs and installations",
    mainDescription: `Your garage door is more than just a functional aspect of your home; it's also a critical component of your property's security and curb appeal. At Alberto's HandyMan Co., we specialize in garage door installations and repairs, offering top-notch service and expertise to ensure your garage door operates smoothly and safely.

Whether you're looking to upgrade to a modern, energy-efficient model or need repairs to address issues like broken springs, damaged panels, or malfunctioning openers, our team of skilled technicians is here to help. We work with leading manufacturers to provide high-quality garage doors and parts that are built to last.

Our installation process is thorough and efficient, ensuring that your new garage door is properly installed and calibrated for optimal performance. And when it comes to repairs, we respond quickly to diagnose the problem and implement effective solutions to get your garage door back in working order as soon as possible.

With Alberto's HandyMan Co., you can trust that your garage door installation or repair will be completed with precision and professionalism, giving you peace of mind knowing that your property is secure and your investment is protected. Let us help you enhance the functionality and aesthetics of your home with our expert garage door services.`,
    imgSrc:
      "https://okdiscountgaragedoor.com/wp-content/uploads/2022/02/GarageDoorRepair-800x500-1.png",
    heroImg:
      "https://raynor.com/wp-content/uploads/2021/05/garage-door-repair-e1630931235655.png",
  },
  {
    id: "electrician",
    heroName: "Electrical and Wiring Necessities",
    mainTitle: "Install or Repair Wiring, Outlets, and Switches",
    mainDescription: ` When it comes to electrical repairs, safety and expertise are paramount. Faulty wiring or electrical fixtures not only pose a risk to your property but also to your family's safety. At Alberto's HandyMan Co., we understand the importance of addressing electrical issues promptly and correctly. Our team of skilled technicians is well-versed in diagnosing and repairing a wide range of electrical problems, from faulty outlets to wiring issues. Whether you need a simple outlet replacement or a complete rewiring of your home, you can trust Alberto's HandyMan Co. to get the job done safely and efficiently. With our attention to detail and commitment to quality craftsmanship, you can have peace of mind knowing that your electrical repairs are in capable hands.`,
    imgSrc:
      "https://mrelectric.com/us/en-us/mr-electric/_assets/images/Blog/mre-blog-replace-two-prong-.webp",
    heroImg:
      "https://techiezer.com/wp-content/uploads/2022/04/replace-electrical-outlets.jpeg",
  },
];

export const faqData = [
  {
    question: "Does Alberto's handyman services offer a guarantee?",
    answer:
      "Yes, all handyman work includes a 100% satisfaction guarantee. If you are not happy, we will make it right.",
  },
  {
    question:
      "Do I need to purchase the materials on my own, or do you supply them?",
    answer:
      "Our quotes include material and labor. However, if you have already purchased materials, we can quote accordingly.",
  },
  {
    question: "Do you charge by the hour or the job??",
    answer:
      "We charge by the job because projects vary so much. In this way, you know your pricing upfront and don't need to worry about getting billed for work that takes longer than expected.",
  },
  {
    question: "How do I pay for services?",
    answer:
      "You'll receive an invoice via email once the job is complete. It will list various payment options to choose from, including check and credit card.",
  },
  {
    question: "Will you work weekends and evenings?",
    answer:
      "Standard business hours are Monday - Friday from 7 a.m. to 6 p.m. However, in situations deemed an emergency, it's possible we can offer service in the evening or on a Saturday or Sunday.",
  },
  {
    question: "Can I trust an Alberto's handyman in my home or office?",
    answer:
      "Absolutely! We run a background check on all our employees. In addition, we seek committed, long term employees who want to learn, grow, and advance while delivering on our promise to you of Professional Service and Personal Care.",
  },
  {
    question:
      "How can I get an estimate or price quote for my job, and how soon can you start the work?",
    answer:
      "Call, email, or submit your information online. Once you make a request, we will schedule an onsite estimate appointment. Typically, after the quote is accepted, the job begins within a week.",
  },
  {
    question: "Can you give me a ballpark estimate over the phone?",
    answer:
      "There are many factors to consider when preparing a quote. For instance, we need to look at the job to determine how long it will take and what materials are required. In certain circumstances, we can prepare a quote using pictures you send us. When that's the case, we'll let you know.",
  },
];
