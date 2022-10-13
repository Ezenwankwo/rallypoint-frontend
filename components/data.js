import {
    EmojiHappyIcon,
    ChartSquareBarIcon,
    CursorClickIcon,
    DeviceMobileIcon,
    AdjustmentsIcon,
    SunIcon,
  } from "@heroicons/react/outline";
  
  import benefitOneImg from "../public/img/benefit-one.svg";
  import benefitTwoImg from "../public/img/benefit-two.svg";
  
  const benefitOne = {
    title: "Why you need us",
    desc: "Business owners are unaware that integrated communications strategy is critical to the growth of their company. Those who know this lack the skill to develop a communications strategy to achieve their goals. Most businesses will need:",
    image: benefitOneImg,
    bullets: [
      {
        title: "Customer acquisition/fostering",
        desc: "Identify, acquire and grow customers.",
        icon: <EmojiHappyIcon />,
      },
      {
        title: "Public relations and branding",
        desc: "Build trust and standout in the market.",
        icon: <ChartSquareBarIcon />,
      },
      {
        title: "Stakeholders management",
        desc: "Identify and manage relevant stakeholders.",
        icon: <CursorClickIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "How we help you",
    desc: "Our team is a blend of communications experts and business owners. We have unique insights into the challenges that businesses face, expecially about storytelling and communication.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Communications Audit",
        desc: "We will carry out a comprehensive communications audit to understand your current communication strategy and needs.",
        icon: <DeviceMobileIcon />,
      },
      {
        title: "Develop Strategy",
        desc: "Based on our audit, we will develop an integrated communications strategy that will help you to achieve your goals.",
        icon: <AdjustmentsIcon />,
      },
      {
        title: "Evaluate and Interate",
        desc: "We will evaluate your current strategy and iterate on it to improve it.",
        icon: <SunIcon />,
      },
    ],
  };
  
  export { benefitOne, benefitTwo };