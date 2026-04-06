"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, Activity } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export default function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  const isPositive = trend === "up";
  
  const IconComponent = 
    icon === "dollar" ? DollarSign :
    icon === "users" ? Users :
    icon === "activity" ? Activity :
    Activity;
  
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-3">{value}</h3>
          
          <div className="flex items-center space-x-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
              {change}
            </span>
            <span className="text-gray-500 text-sm">from last month</span>
          </div>
        </div>

        <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </div>
  );
}
