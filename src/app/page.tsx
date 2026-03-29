"use client";

import HeroSection from "@/components/Hero/HeroSection";
import Section from "@/components/Section/Section";
import SectionItem from "@/components/Section/SectionItem";
import PublicationItem from "@/components/Section/PublicationItem";
import AboutSidebar from "@/components/About/AboutSidebar";
import SocialBar from "@/components/Global/SocialBar";
import { currentItems } from "@/data/current";
import { publicationItems } from "@/data/publications";
import { problemItems } from "@/data/problems";
import { pastItems } from "@/data/past";

export default function Index() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <div className="light-section">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="lg:flex lg:gap-20">
          {/* Sticky sidebar on desktop */}
          <div className="hidden lg:block lg:w-48 shrink-0">
            <div className="sticky top-32">
              <AboutSidebar />
            </div>
          </div>

          {/* Mobile about section */}
          <div className="lg:hidden mb-20">
            <AboutSidebar />
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-2xl space-y-32">
            <Section title="Current">
              {currentItems.map((item) => (
                <SectionItem
                  key={item.id}
                  number={item.number}
                  summary={item.summary}
                  detail={item.detail}
                  links={item.links}
                />
              ))}
            </Section>

            <Section title="Publications">
              {publicationItems.map((pub) => (
                <PublicationItem key={pub.id} pub={pub} />
              ))}
            </Section>

            <Section title="Problems Solved">
              {problemItems.map((item) => (
                <SectionItem
                  key={item.id}
                  number={item.number}
                  summary={item.summary}
                  detail={item.detail}
                  links={item.links}
                />
              ))}
            </Section>

            <Section title="Past">
              {pastItems.map((item) => (
                <SectionItem
                  key={item.id}
                  number={item.number}
                  summary={item.summary}
                  detail={item.detail}
                  links={item.links}
                />
              ))}
            </Section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-12 space-y-6">
        <div className="h-px bg-[var(--muted)] opacity-20" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <SocialBar />
        </div>
      </footer>
      </div>
    </main>
  );
}
