export interface ContentItem {
  id: string;
  number: string;
  summary: string;
  detail?: string;
  links?: { text: string; href: string }[];
}

export const pastItems: ContentItem[] = [
  {
    id: "past-1",
    number: "01",
    summary: "helped out as venture fellow @ NEA (2025)",
    links: [{ text: "NEA", href: "https://nea.com/" }],
  },
  {
    id: "past-2",
    number: "02",
    summary:
      "built first RCS platform for text message marketing @ Beacon Text as part of Pear Garage (2023)",
    links: [{ text: "Pear Garage", href: "https://pear.vc/garage/" }],
  },
  {
    id: "past-3",
    number: "03",
    summary:
      "optimized fundraiser goals for one of the largest crowdfunding-platforms (2024)",
    detail:
      "researched knowledge systems on neuromorphic chips @ Brains in Silicon",
    links: [
      {
        text: "Brains in Silicon",
        href: "https://web.stanford.edu/group/brainsinsilicon/",
      },
    ],
  },
  {
    id: "past-4",
    number: "04",
    summary: "won CodeVsCovid19 Hackathon with AI to detect COVID-19 coughs (2021)",
    links: [
      {
        text: "CodeVsCovid19 Hackathon",
        href: "https://codevscovid19.devpost.com/",
      },
      {
        text: "AI to detect COVID-19 coughs",
        href: "https://devpost.com/software/detect-now",
      },
    ],
  },
  {
    id: "past-5",
    number: "-1",
    summary:
      "deployed @ Cognition Factory (2020), Infineon (2021), Check24 (2022), Theros AI (2023), QuantCo (2024)",
    links: [
      { text: "Cognition Factory", href: "https://cognitionfactory.com/" },
      { text: "Infineon", href: "https://www.infineon.com/" },
      { text: "Check24", href: "https://www.check24.de/" },
      { text: "QuantCo", href: "https://www.quantco.com/" },
    ],
  },
];
