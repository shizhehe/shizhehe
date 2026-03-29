export interface ContentItem {
  id: string;
  number: string;
  summary: string;
  detail?: string;
  links?: { text: string; href: string }[];
}

export const problemItems: ContentItem[] = [
  {
    id: "problem-1",
    number: "01",
    summary:
      "built encoding of structural/geometric information in foundational model for brain MRIs @ STAI Lab Stanford",
    detail:
      "built basis for structural/geometric information in foundational model for brain MRIs @ STAI Lab Stanford",
    links: [
      { text: "STAI Lab Stanford", href: "https://stai.stanford.edu/people" },
    ],
  },
  {
    id: "problem-2",
    number: "02",
    summary:
      "streamlined semiconductor design & verification processes @ Infineon",
    links: [{ text: "Infineon", href: "https://www.infineon.com/" }],
  },
  {
    id: "problem-3",
    number: "03",
    summary:
      "gave language models memory before RAG existed & when context windows were short af",
  },
  {
    id: "problem-4",
    number: "04",
    summary:
      "engineered better encodings for fundraiser for one of the largest crowdfunding-platforms",
    detail:
      "created better latent fundraiser representations using text features for one of the largest crowdfunding-platforms",
  },
  {
    id: "problem-5",
    number: "05",
    summary:
      "integrated art with AI to help users better find, visualize, and share art @ Artue",
    detail:
      "built and deployed multi-index search engine, interior design assistant, and other recommendation systems for art @ Artue",
    links: [{ text: "Artue", href: "https://www.artue.io/" }],
  },
];
