"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/notes", label: "Notes", icon: "📝" },
    { href: "/habits", label: "Habits", icon: "🎯" },
    { href: "/reflections", label: "Reflections", icon: "💭" },
    { href: "/tasks", label: "Tasks", icon: "✅" },
  ];

  return (
    <aside className="w-64 h-screen  border-r border-gray-200 flex flex-col">
      {/* Brand Section */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-300 mb-1">Life OS</h2>
        <p className="text-sm text-gray-400">Your personal dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
                  ${isActive 
                    ? 'bg-[#6c47ff] text-white shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer Section */}
      {/* <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Build your best life
        </div>
      </div> */}
    </aside>
  );
}