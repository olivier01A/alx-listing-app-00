// components/layout/Header.tsx
import React from "react";
import { Search, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const accommodations = ["Rooms", "Mansion", "Countryside", "Apartments", "Villas"];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StayFinder
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 max-w-md rounded-full border px-4 py-2 shadow-sm">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search accommodations..."
            className="ml-2 flex-1 outline-none text-sm"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-1">
            <User className="h-4 w-4" /> Sign in
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4">
            Sign up
          </Button>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="flex justify-center gap-6 border-t px-6 py-3 text-sm font-medium text-gray-600">
        {accommodations.map((type) => (
          <Link
            key={type}
            href={`/accommodation/${type.toLowerCase()}`}
            className="hover:text-blue-600 transition-colors"
          >
            {type}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
