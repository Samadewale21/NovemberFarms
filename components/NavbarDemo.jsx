"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Navbar";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm md:flex-row md:space-y-0 md:space-x-4">
            <HoveredLink href="/web-dev">Our Vision</HoveredLink>
            <HoveredLink href="/AppleCardsCarouselDemo">Our Success</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <ProductItem
              title="Medical Adherence"
              href="https://www.medisafe.com/"
              src="/images/adherence.png"
              description="Medical adherence is crucial for effective treatment, ensuring patients follow prescribed regimens to achieve the best health outcomes."
            />
            <ProductItem
              title="Mental Health"
              href="https://iheartprinciples.com/"
              src="/images/mental.png"
              description="Prioritizing mental health is essential for overall well-being, influencing how we think, feel, and interact with others."
            />
            <ProductItem
              title="Medical Insurance"
              href="https://www.nhis.gov.ng/"
              src="/images/insurance.png"
              description="Medical insurance provides financial protection and access to healthcare services, helping individuals manage unexpected medical expenses."
            />
            <ProductItem
              title="Get Care"
              href="https://getcare.eha.ng/"
              src="/images/getcare.png"
              description="GetCare connects individuals with personalized health resources and support, empowering them to take charge of their well-being."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm md:flex-row md:space-y-0 md:space-x-4">
            <HoveredLink href="/hobby">Medical Adherence</HoveredLink>
            <HoveredLink href="/individual">Mental Health</HoveredLink>
            <HoveredLink href="/team">Medical Insurance</HoveredLink>
            <HoveredLink href="/enterprise">EHA Clinic</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
