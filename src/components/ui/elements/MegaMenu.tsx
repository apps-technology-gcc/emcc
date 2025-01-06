import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
// import { ShoppingCart, User, Search } from "lucide-react";

interface MenuItem {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

const menuData: MenuItem[] = [
  {
    title: "Women",
    items: [
      { name: "New Arrivals", href: "/women/new" },
      { name: "Dresses", href: "/women/dresses" },
      { name: "Tops", href: "/women/tops" },
      { name: "Shoes", href: "/women/shoes" },
      { name: "Accessories", href: "/women/accessories" },
    ],
  },
  {
    title: "Men",
    items: [
      { name: "New Arrivals", href: "/men/new" },
      { name: "Shirts", href: "/men/shirts" },
      { name: "Pants", href: "/men/pants" },
      { name: "Shoes", href: "/men/shoes" },
      { name: "Accessories", href: "/men/accessories" },
    ],
  },
  {
    title: "Kids",
    items: [
      { name: "New Arrivals", href: "/kids/new" },
      { name: "Girls", href: "/kids/girls" },
      { name: "Boys", href: "/kids/boys" },
      { name: "Baby", href: "/kids/baby" },
      { name: "Toys", href: "/kids/toys" },
    ],
  },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuData.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(category.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  {category.title}
                </button>
                {/* Invisible bridge to prevent menu from hiding */}
                <div className="absolute -bottom-5 left-0 w-full h-5 bg-transparent" />
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Icon name="search" className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Icon name="search" className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Icon name="search" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMenu && (
        <div
          className="absolute left-0 w-full bg-red-600 shadow-lg z-50 transition-all duration-300 ease-in-out"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="absolute -top-5 left-0 w-full h-5 bg-transparent" />
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-8">
              {menuData
                .find((category) => category.title === activeMenu)
                ?.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MegaMenu;
