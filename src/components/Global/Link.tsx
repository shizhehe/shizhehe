import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import NextLink from "next/link";

const CustomLink = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  const isInternalLink = href.startsWith("/");

  const content = (
    <>
      <span className="link">{text}</span>
      <span className="whitespace-nowrap">
        &nbsp;
        <ArrowUpRightIcon className="inline h-3 w-3 text-[var(--muted)]" />
      </span>
    </>
  );

  if (isInternalLink) {
    return (
      <NextLink href={href} className={`${className ?? ""} inline`}>
        {content}
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ?? ""} inline`}
    >
      {content}
    </a>
  );
};

export default CustomLink;
