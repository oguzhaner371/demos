"use client";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  FileText,
  Zap,
  HelpCircle,
  X
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Users", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Zap, label: "AI Insights", active: false },
  { icon: Settings, label: "Settings", active: false },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
      {/* Logo */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">AI Analytics</h2>
              <p className="text-xs text-gray-400">Premium Dashboard</p>
            </div>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeItem;
          
          return (
            <button
              key={index}
              onClick={() => setActiveItem(index)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  : "text-gray-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t border-zinc-800">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white transition-all duration-200">
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Help & Support</span>
        </button>
      </div>
      </div>
    </>
  );
}
