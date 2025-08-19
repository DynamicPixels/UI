"use client";

import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import ButtonSection from "../components/sections/ButtonSection";
import InputSection from "../components/sections/InputSection";
import CardSection from "../components/sections/CardSection";
import BadgeSection from "../components/sections/BadgeSection";
import SwitchSection from "../components/sections/SwitchSection";
import CheckBoxSection from "../components/sections/CheckBoxSection";
import SelectSection from "../components/sections/SelectSection";
import ModalSection from "../components/sections/ModalSection";
import TableSection from "../components/sections/TableSection";
import TabsSection from "../components/sections/TabsSection";
import TagSection from "../components/sections/TagSection";
import ProgressSection from "../components/sections/ProgressSection";
import DividerSection from "../components/sections/DividerSection";
import SpinSection from "../components/sections/SpinSection";
import EmptySection from "../components/sections/EmptySection";
import SliderSection from "../components/sections/SliderSection";
import BreadcrumbSection from "../components/sections/BreadcrumbSection";
import StepsSection from "../components/sections/StepsSection";
import TimelineSection from "../components/sections/TimelineSection";
import NavigationSection from "../components/sections/NavigationSection";
import DropdownSection from "../components/sections/DropdownSection";
import AnchorSection from "../components/sections/AnchorSection";
import CascaderSection from "../components/sections/CascaderSection";
import TransferSection from "../components/sections/TransferSection";
import UploadAreaSection from "../components/sections/UploadAreaSection";
import IconsSection from "../components/sections/IconsSection";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section id="introduction" className="scroll-mt-20">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">DynamicUI</span>
            <span className="block text-blue-600 dark:text-blue-400">
              React Component Library
            </span>
          </h1>
          <p className="mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern React UI component library built with TypeScript. Create
            beautiful applications with our collection of high-quality,
            accessible components.
          </p>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Installation
        </h2>
        <div className="">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Package Manager
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                npm
              </p>
              <CodeBlock language="bash" title="npm">
                npm install @dynamicpixels/dynamicui
              </CodeBlock>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                yarn
              </p>
              <CodeBlock language="bash" title="yarn">
                yarn add @dynamicpixels/dynamicui
              </CodeBlock>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                pnpm
              </p>
              <CodeBlock language="bash" title="pnpm">
                pnpm add @dynamicpixels/dynamicui
              </CodeBlock>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-4">
            Basic Usage
          </h3>
          <CodeBlock language="tsx" title="App.tsx">
            {`import React from 'react';
import { Button, Card } from '@dynamicpixels/dynamicui';

function App() {
  return (
    <Card title="Welcome to DynamicUI">
      <p>Start building amazing interfaces!</p>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
          </CodeBlock>
        </div>
      </section>

      {/* Button Component */}
      <ButtonSection />

      {/* Input Component */}
      <InputSection />

      {/* Card Component */}
      <CardSection />

      {/* Badge Component */}
      <BadgeSection />

      {/* Switch Component */}
      <SwitchSection />

      {/* CheckBox Component */}
      <CheckBoxSection />

      {/* Select Component */}
      <SelectSection />

      {/* Modal Component */}
      <ModalSection />

      <TableSection />

      <TabsSection />

      <TagSection />

      <ProgressSection />

      <DividerSection />

      <SpinSection />

      <EmptySection />

      <SliderSection />

      <BreadcrumbSection />

      <StepsSection />

      <TimelineSection />

      <NavigationSection />

      <DropdownSection />

      <AnchorSection />

      <CascaderSection />

      <TransferSection />

      <UploadAreaSection />

      <IconsSection />
    </div>
  );
}
