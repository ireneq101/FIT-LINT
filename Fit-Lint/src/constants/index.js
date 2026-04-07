import Button from "../components/Button";

import {
  biker,
  facebook,
  // fire,
  food,
  // foot,
  instagram,
  linkedin,
  ruuner,
  swimmer,
  // time,
  twitter,
  walking,
  check
} from "../assets";

export const Navlinks = [
  {
    id: "home",
    title: "Home",
  },

  {
    id: "about",
    title: "About",
  },

  {
    id: "activity",
    title: "Activity",
  },

  {
    id: "team",
    title: "Team",
  },

  // {
  //   id: "login",
  //   title: "Login",
  // },

  // {
  //   id: "signup",
  //   title: "Sign Up",
  // }
];

export const WithFitLint = [
  {
    id: 1,
    icon: { check },
    title: "Achieve consistent progress with small daily actions.",
  },

  {
    id: 2,
    icon: { check },
    title: "Turn big ambitions into manageable tasks.",
  },

  {
    id: 3,
    icon: { check },
    title: "Set realistic goals you can stick with.",
  },

  {
    id: 4,
    icon: { check },
    title: "Know what works best for you.",
  },
];

export const Routines = [
  {
    id: 1,
    title: "Walking",
    description: "Track your steps",
    value: "5,000 steps",
    image:  walking ,
    visible: true
  },

  {
    id: 2,
    title: "Running",
    description: "Set your target",
    value: "7,000",
    image: ruuner,
    visible: true
  },

  {
    id: 3,
    title: "Bike",
    description: "How fast can you go?",
    value: "5,000",
    image: biker,
    visible: true
  },

  {
      id: 4,
    title: "Swimming",
    description: "Beat your current score",
    value: "150 minutes",
    image: swimmer,
    visible: false
  },

  {
    id: 5,
    title: "Food",
    description: "Nutrition tailored for your lifestyle",
    value: "220 calories",
    image: food,
    visible: false
  },
];

export const FooterLinks = [
  {
    title: "fit-Lint",
    links: [
      {
        id: "about",
        name: "About",
        link: "",
      },

      {
        name: "Activities",
        link: "",
      },

      {
        name: "Boosting",
        link: "",
      },

      {
        name: "Team",
        link: "",
      },
    ],
  },

  {
    title: "location",
    links: "No. 101 Gbjikdjd Texas, United States of America",
  },

  {
    title: "stay fit, stay healthy",
    links:
      "join fit-Lint, our comprehensive resources, expert trainers and surpportive comuunity are here to surpport you.",
  },
];

export const SocialLinks = [
  {
    id: "social1",
    icon: { facebook },
  },

  {
    id: "social2",
    icon: { instagram },
  },

  {
    id: "social3",
    icon: { twitter },
  },

  {
    id: "social4",
    icon: { linkedin },
  },
];

