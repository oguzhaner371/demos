"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import StatCard from "./components/StatCard";
import UserGrowthChart from "./components/UserGrowthChart";
import RecentTransactions from "./components/RecentTransactions";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up" as const,
      icon: "dollar",
    },
    {
      title: "Active Users",
      value: "8,234",
      change: "+12.5%",
      trend: "up" as const,
      icon: "users",
    },
    {
      title: "Engagement Rate",
      value: "87.3%",
      change: "+5.2%",
      trend: "up" as const,
      icon: "activity",
    },
  ];

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto bg-zinc-950 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Analytics Overview
              </h1>
              <p className="text-gray-400">
                AI-powered insights for your business
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Chart */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                User Growth
              </h2>
              <UserGrowthChart />
            </div>

            {/* Recent Transactions */}
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}
