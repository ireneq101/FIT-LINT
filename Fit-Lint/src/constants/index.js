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
    title: "Get personalized workout plans tailored to your goals and fitness level.",
  },

  {
    id: 2,
    icon: { check },
    title: "Build healthy habits that last a lifetime.",
  },

  {
    id: 3,
    icon: { check },
    title: "Set realistic goals you can stick with.",
  },

  {
    id: 4,
    icon: { check },
    title: "Stay motivated with our community support.",
  },
];

export const Routines = [
  {
    id: 1,
    title: "Walking",
    description: "Step up your fitness",
    value: "5,000 steps",
    image:  walking ,
    visible: true
  },

  {
    id: 2,
    title: "Running",
    description: "Hit your stride",
    value: "5,000 meters",
    image: ruuner,
    visible: true
  },

  {
    id: 3,
    title: "Bike",
    description: "Pedal to your goals",
    value: "17,000 meters",
    image: biker,
    visible: true
  },

  {
      id: 4,
    title: "Swimming",
    description: "Dive into fitness",
    value: "15 minutes",
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
    links: "No. 101 Gbjikdjd Texes, Fitness City, Fit-Island.",
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

