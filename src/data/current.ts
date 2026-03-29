export interface ContentItem {
  id: string;
  number: string;
  summary: string;
  detail?: string;
  links?: { text: string; href: string }[];
}

export const currentItems: ContentItem[] = [
  {
    id: "current-1",
    number: "01",
    summary: "studying CS & International Relations @ Stanford",
    detail: "studying CS (ML Systems) & International Relations @ Stanford",
    links: [],
  },
  {
    id: "current-2",
    number: "02",
    summary: "teaching machines @ stealth",
  },
  {
    id: "current-3",
    number: "03",
    summary:
      "trying to do hard things physically, psychologically, and socially",
  },
];
