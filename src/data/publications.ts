export interface PublicationItem {
  id: string;
  number: string;
  title: string;
  href?: string;
  venue: string;
  venueHref?: string;
  authors: string[];
  detail?: string;
}

export const publicationItems: PublicationItem[] = [
  {
    id: "pub-1",
    number: "01",
    title: "An Information Theoretic Perspective on Agentic System Design",
    venue: "Hazy Research",
    venueHref: "https://hazyresearch.stanford.edu/",
    authors: [
      "Shizhe He",
      "Avanika Narayan",
      "Ishan Khare",
      "Scott Linderman",
      "Chris Ré",
      "Dan Biderman",
    ],
    detail: "submitted to ICLR 2026",
  },
  {
    id: "pub-2",
    number: "02",
    title: "SOE: SO(3)-Equivariant 3D MRI Encoding",
    href: "https://arxiv.org/abs/2410.12053",
    venue: "STAI Lab Stanford",
    venueHref: "https://stai.stanford.edu/people",
    authors: [
      "Shizhe He",
      "Magdalini Paschali",
      "Jiahong Ouyang",
      "Adnan Masood",
      "Akshay Chaudhari",
      "Ehsan Adeli",
    ],
  },
  {
    id: "pub-3",
    number: "03",
    title:
      "Understanding Domain Shift in Learned Magnetic Resonance Imaging (MRI) Reconstruction",
    href: "https://oar.ptb.de/resources/show/10.7795/320.202401",
    venue: "AIM Lab TUM",
    venueHref: "https://aim-lab.io/",
    authors: [
      "Shizhe He",
      "Veronika Zimmer",
      "Daniel Rueckert",
      "Kerstin Hammernik",
    ],
  },
  {
    id: "pub-4",
    number: "04",
    title: "Learning-based Cardiac Cine MRI Reconstruction at 7T",
    venue: "AIM Lab TUM",
    venueHref: "https://aim-lab.io/",
    authors: [
      "Andreas Kofler",
      "Shizhe He",
      "Daniel Rueckert",
      "Tobias Schaeffter",
      "Sebastian Schmitter",
      "Christoph Kolbitsch",
      "Christoph Aigner",
      "Kerstin Hammernik",
    ],
  },
];
