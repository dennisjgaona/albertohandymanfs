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
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/d4/01/d401956f3dbc0c4d5f939584cc2ea8db.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/a6/00/a60039fc2aceeeaaaec1dcecb82d74ab.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/7c/7a/7c7adb63cedf614ca27024df5032b6e7.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/69/ab/69ab158d1c3d37961d49b6478d7c749a.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/43/fd/43fd7ad9b2b98bdfef3e99950a78ab18.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/2d/be/2dbee170a6e55c12b0bc6242db32cac0.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/16/80/168041e899209df96e37a57271dc127f.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/3d/7e/3d7ee961962e5f85e529324c0bb1f83e.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/f7/8d/f78d111c6186913e3d3ca099760bdd37.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/5a/8e/5a8eda4127cfc6add83b75ae1755fa6b.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/bf/40/bf403e3bb37e3e4fef0c01081ff34620.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/c1/1e/c11eb813ded8bc7a19611e91b48d8d49.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/fe/f1/fef101d58d6c89279d944fa4516f2370.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/ca/d9/cad993d63febbf4e2f19e52f428946fa.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/91/1e/911e6e98444b477f4e1732e6791ca11f.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://us1-photo.nextdoor.com/business_gallery/54/33/5433094d4b9bd2bd4a5c36b8f72c306f.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=6&resize_type=max",
  },
  {
    imgSrc:
      "https://media.istockphoto.com/id/1492434373/vector/illustration-cartoon-style-of-repairman-standing-with-arms-crossed-confident-posture-wearing.jpg?s=612x612&w=0&k=20&c=VtkFLJr7bHG2Ncqbas-9Va64fPQca4sw_prIqeXoKXg=",
  },
];

export const servicesPagesInfo = [
  {
    id: "painting-drywall",
    heroName: "Painting and Drywall Repair",
    mainTitle: "Professional painting & drywall replacement",
    mainDescription: `A fresh coat of paint on a wall, when professionally applied, can make a world of difference when it comes to the look and feel of a room. 
      
      Chicago Handy has the knowledge and experience needed to provide you with great results at affordable prices.But no matter how good we are at painting, a wall with holes or wear and tear won't look too good even with a fresh paint job. That's why we also take the time to repair your drywall beforehand to offer the best results possible. And that includes repairing water damaged drywall.
      
      Wet drywall loses its structural integrity and becomes weak, causing holes and other issues. If you have water damage in your drywall, we'll remove the damaged areas and replace with new drywall. We professionally apply a joining compound for a seamless look and when painted, you're left with your wall looking brand new.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/painting-contractors-scaled.jpg",
  },
  {
    id: "caulk-grout",
    heroName: "Caulking & Grout Repair",
    mainTitle: "Grout repair and caulking replacement",
    mainDescription: `Grout and caulking are often looked past when it comes to thinking about repairs, but they serve very important purposes.

A properly sealed countertop and grouted floor can prevent water damage by creating a seal.

And sealing windows and doors can help save money on your heating and cooling bills!

Over time (or with improper installation), caulking and grout can degrade and will need to be replaced to maintain their seal.

Chicago Handy has years of experience ensuring your caulking and grout has a proper seal, preserving your countertops, tile floors, and more.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/Grout-repair-and-caulking-replacement.jpg",
  },
  {
    id: "tile-backsplash",
    heroName: "Bathroom Tile & Kitchen Backsplashes",
    mainTitle: "Bathroom tile & kitchen backsplash installation",
    mainDescription: `Having tile installed during home remodeling (such as part of a kitchen remodel or bathroom update) is a great way to add value and appeal to your home.

Not only is properly installed tile durable, it is easy to clean, easy to maintain and offers design flexibility that other wall and flooring options simply do not.

However, improperly installed tile can be uneven and not very durable.

That's why it's important to have professionals, like the Chicago Handy team, install your tile.

And we also install kitchen backsplashes to help add a unique aesthetic touch to your kitchen!

Whatever the tile or backsplash project, Chicago Handy can install everything professionally and in a timely manner.`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/05/Norbert-Sienko-Powder-room-tile-installation.jpg",
  },
  {
    id: "doors-locks",
    heroName: "Door Repair & Lock Installation",
    mainTitle: "We repair and install doors & locks",
    mainDescription: `Doors offer many different benefits to your household; privacy, security, energy savings, and more.

And an improperly installed door can not only be a little annoying to use, but can also be much less safe and allow air to escape, costing you more money.

Chicago Handy has many years experience installing doors to improve the aesthetics of your home while also allowing you to take full advantage of the benefits of doors.

That goes for locks too!

Locks are a huge part of keeping your house safe and secure, so we take the time to make sure they are installed correctly.

Whether it's an exterior door to update the look of your house or an interior door to replace an old one, give Chicago Handy a call to get it done right!`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/house-1407562_1920.jpg",
  },
  {
    id: "plumbing",
    heroName: "Plumbing & Garbage Disposal Repair ",
    mainTitle: "Professional plumbing services",
    mainDescription: `Having a leak or other light plumbing issues can not only waste water, but they can cause water damage to nearby countertops, walls, and more, costing you thousands of dollars.

When your pipes are leaking, you need a toilet repaired or replaced, you need your garbage disposal repaired, or any other plumbing issue, call Chicago Handy.

We have many years of experience working with plumbing systems and are happy to help fix your plumbing issue`,
    imgSrc:
      "https://chicagohandy.com/wp-content/uploads/2020/07/plumbing-840835_1920.jpg",
  },
  {
    id: "furniture-assy",
    heroName: "Furniture Assembly Assistance",
    mainTitle: "We help out with complex or heavy furniture assembly",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    imgSrc:
      "https://www.leatherman.com/on/demandware.static/-/Library-Sites-leatherman-shared2020/default/dw7a20553f/blog/home/diy/7-hacks-for-assembling-furniture/AssemblingFurniture-full.jpg",
  },
  {
    id: "water-damage-repair",
    heroName: "Water Damage Repair",
    mainTitle: "Replace water damaged walls, sheetrock, carpet, etc.",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Sed tempus urna et pharetra pharetra massa massa. Turpis in eu mi bibendum neque egestas congue. Sapien pellentesque habitant morbi tristique senectus et. Non enim praesent elementum facilisis. Vulputate eu scelerisque felis imperdiet proin fermentum. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Nec sagittis aliquam malesuada bibendum. Lorem sed risus ultricies tristique nulla aliquet enim. Nisl tincidunt eget nullam non.`,
    imgSrc: "",
  },
  {
    id: "fireplace-tile-install",
    heroName: "Fireplace Tile Installation",
    mainTitle: "We install beautiful fireplace tiles",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Massa enim nec dui nunc mattis enim. Elementum nibh tellus molestie nunc non blandit massa enim nec. Sed euismod nisi porta lorem mollis aliquam ut. A lacus vestibulum sed arcu non odio euismod lacinia. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Aliquam sem fringilla ut morbi tincidunt augue. Ipsum a arcu cursus vitae congue. Nibh praesent tristique magna sit amet purus gravida quis. Cras pulvinar mattis nunc sed blandit libero volutpat. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.`,
    imgSrc: "",
  },
  {
    id: "leak-repair",
    heroName: "Leaky Pipes Repair",
    mainTitle: "We identify and fix leaky pipes",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae. Ultricies mi quis hendrerit dolor magna eget est lorem. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Scelerisque purus semper eget duis at tellus at. Id semper risus in hendrerit gravida. Ornare lectus sit amet est placerat in egestas. Rhoncus mattis rhoncus urna neque viverra justo. Aliquet enim tortor at auctor. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Pharetra pharetra massa massa ultricies mi quis hendrerit. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Sed lectus vestibulum mattis ullamcorper.`,
    imgSrc: "",
  },
  {
    id: "carpentry",
    heroName: "Carpentry",
    mainTitle: "Get your carpentry needs met with us",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id. Tempor nec feugiat nisl pretium fusce id velit ut. Lorem mollis aliquam ut porttitor leo a. Massa ultricies mi quis hendrerit dolor magna eget est. Feugiat scelerisque varius morbi enim nunc faucibus. Velit euismod in pellentesque massa placerat duis. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Magna sit amet purus gravida quis blandit. Fermentum odio eu feugiat pretium. Commodo sed egestas egestas fringilla phasellus faucibus`,
    imgSrc: "",
  },
  {
    id: "garage-repair-install",
    heroName: "Garage Door Installs and Repairs",
    mainTitle:
      "Automatic and remote control garage door repairs and installations",
    mainDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Mattis vulputate enim nulla aliquet porttitor lacus. Eget nulla facilisi etiam dignissim diam quis enim. Id eu nisl nunc mi. Id neque aliquam vestibulum morbi blandit cursus risus. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Nunc pulvinar sapien et ligula. Porta lorem mollis aliquam ut porttitor leo.`,
    imgSrc: "",
  },
];
