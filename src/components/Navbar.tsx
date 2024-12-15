"use client";

import { ROUTES } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  const navItem = [
    { label: "Main", href: ROUTES.HOME },
    { label: "Users", href: ROUTES.USERS },
    { label: "Posts", href: ROUTES.POSTS },
    { label: "Add Post", href: ROUTES.ADD_POST },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
        <h1 className="text-xl font-bold text-blue-600">
          <Link href={ROUTES.HOME}>{"Home App"}</Link>
        </h1>

        <nav>
          <ul className="flex space-x-6">
            {navItem.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg ${
                    pathName === item.href
                      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
