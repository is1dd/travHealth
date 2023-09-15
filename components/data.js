import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CheckBadge,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import indiagate from "../public/img/indiagate.jpg";
import indiaMedical from "../public/img/indiaMedical.webp";

const benefitOne = {
  title: "What you will get With US",
  desc: "Discover.",
  image: indiagate,
  bullets: [
    {
      title: "Cutting-edge Medical facilities",
      desc: "A reputable agency should have",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Seamless Travel Experience",
      desc: "A reputable agency should have",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cultural Immersion",
      desc: "A reputable agency should have",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Personalised Guidance",
      desc: "A reputable agency should have",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title:
    "India stands apart as a remarkable destination for all your healthcare needs ranging from",
  desc: "",
  image: indiaMedical,
  bullets: [
    {
      title: "Modern Medicine",
      desc: "Get Modern Medicine",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Ayurveda",
      desc: "Embrace the richness of ayurveda India has to offer",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Yoga",
      desc: "Explore Yoga ",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Other Traditional Systems",
      desc: "Explore other traditional systems",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
