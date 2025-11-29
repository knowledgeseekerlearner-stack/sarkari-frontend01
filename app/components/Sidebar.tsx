"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Latest Jobs", path: "/latest-jobs" },
    { name: "Admit Card", path: "/admit-card" },
    { name: "Results", path: "/results" },
    { name: "Mock Tests", path: "/mock-tests" },
    { name: "Premium", path: "/premium" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-xl border-r fixed left-0 top-0 p-5">
      <h1 className="text-2xl font-bold mb-8">Sarkari Jeet</h1>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              className={`block px-4 py-2 rounded-lg text-lg font-medium transition ${
                path === item.path
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
