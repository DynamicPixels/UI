"use client";

import { useEffect, useState, useMemo } from "react";
import { Anchor, cn } from "@dynamicpixels/dynamicui";

const documentationSections = [
  { id: "introduction", name: "Introduction", href: "#introduction" },
  { id: "installation", name: "Installation", href: "#installation" },
  { id: "button", name: "Button", href: "#button" },
  { id: "input", name: "Input", href: "#input" },
  { id: "card", name: "Card", href: "#card" },
  { id: "badge", name: "Badge", href: "#badge" },
  { id: "switch", name: "Switch", href: "#switch" },
  { id: "checkbox", name: "CheckBox", href: "#checkbox" },
  { id: "select", name: "Select", href: "#select" },
  { id: "modal", name: "Modal", href: "#modal" },
  { id: "table", name: "Table", href: "#table" },
  { id: "tabs", name: "Tabs", href: "#tabs" },
  { id: "tag", name: "Tag", href: "#tag" },
  { id: "progress", name: "Progress", href: "#progress" },
  { id: "divider", name: "Divider", href: "#divider" },
  { id: "spin", name: "Spin", href: "#spin" },
  { id: "empty", name: "Empty", href: "#empty" },
  { id: "slider", name: "Slider", href: "#slider" },
  { id: "breadcrumb", name: "Breadcrumb", href: "#breadcrumb" },
  { id: "steps", name: "Steps", href: "#steps" },
  { id: "timeline", name: "Timeline", href: "#timeline" },
  { id: "navigation", name: "Navigation", href: "#navigation" },
  { id: "dropdown", name: "Dropdown", href: "#dropdown" },
  { id: "anchor", name: "Anchor", href: "#anchor" },
  { id: "cascader", name: "Cascader", href: "#cascader" },
  { id: "transfer", name: "Transfer", href: "#transfer" },
  { id: "uploadarea", name: "UploadArea", href: "#uploadarea" },
  { id: "icons", name: "Icons", href: "#icons" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("introduction");

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const anchorItems = useMemo(() => {
    console.log("Current activeSection:", activeSection);
    return documentationSections.map((section) => ({
      label: section.name,
      href: section.href,
      active: activeSection === section.id,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleClick(section.id);
      },
    }));
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let mostVisibleEntry: IntersectionObserverEntry | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleEntry = entry;
          }
        });

        if (mostVisibleEntry && mostVisibleEntry.intersectionRatio > 0.1) {
          console.log("Active section changed to:", mostVisibleEntry.target.id);
          setActiveSection(mostVisibleEntry.target.id);
        }
      },
      {
        rootMargin: "-10% 0% -70% 0%",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    // Observe all sections
    documentationSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        console.log("Observing section:", section.id, element);
        observer.observe(element);
      } else {
        console.warn("Section not found:", section.id);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="lg:block hidden h-full">
        <div className="sticky top-20 overflow-y-auto h-[calc(100vh-5rem)] py-6 pr-2">
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Documentation
            </h3>
            <Anchor
              direction="vertical"
              items={anchorItems}
              className="space-y-1"
            />
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Links
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/dynamicpixels/dynamicui"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub Repository
              </a>
              <a
                href="https://www.npmjs.com/package/@dynamicpixels/dynamicui"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                NPM Package
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - simplified for now */}
      <div className="lg:hidden">
        <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            DynamicUI Docs
          </h2>
        </div>
      </div>
    </div>
  );
}
