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
    title: "Why your startup needs a communication strategy",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: <EmojiHappyIcon />,
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: <ChartSquareBarIcon />,
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: <CursorClickIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "How we help you",
    desc: "Our team is a blend of communications experts and startup founders. We have unique insights into the challenges that startups face, expecially about storytelling and communication.",
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