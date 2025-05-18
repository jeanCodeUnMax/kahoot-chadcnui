"use client";

import MainEditor from "@/components/editor/MainEditor";
import NavBarEditor from "@/components/editor/NavBarEditor";
import SideBarOption from "@/components/editor/SideBarOption";
import SideBarQuizz from "@/components/editor/SideBarQuizz";

// import { ChevronUp, ChevronDown, Plus, Minus, Save, Upload } from 'flowbite';

export default function GamePage() {
  // Traitement des données...

  return (
    <>
      <div className="bg-gray-50 antialiased dark:bg-gray-900">
        {/* Navbar */}
        <NavBarEditor />

        <div className="flex pt-16">
          {/* Left Sidebar - Liste */}
          <SideBarQuizz />

          {/* Main Content */}
          <MainEditor />

          {/* Right Sidebar - Options */}
          <SideBarOption />
        </div>
      </div>
    </>
  );
}
