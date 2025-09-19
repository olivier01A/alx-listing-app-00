// components/layout/Footer.tsx
import { FC } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">StayBnB</h2>
          <p className="mt-3 text-sm">
            Find the best accommodations around the world. From countryside
            cottages to luxury mansions, we’ve got you covered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white">Categories</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/rooms" className="hover:text-white transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/mansion" className="hover:text-white transition">
                Mansion
              </Link>
            </li>
            <li>
              <Link href="/countryside" className="hover:text-white transition">
                Countryside
              </Link>
            </li>
            <li>
              <Link href="/apartments" className="hover:text-white transition">
                Apartments
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-3 space-x-4">
            <Link href="#" className="hover:text-white transition">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} StayBnB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
