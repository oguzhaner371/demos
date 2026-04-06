"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", users: 4000, revenue: 2400 },
  { month: "Feb", users: 5200, revenue: 3200 },
  { month: "Mar", users: 4800, revenue: 2800 },
  { month: "Apr", users: 6400, revenue: 3900 },
  { month: "May", users: 7200, revenue: 4500 },
  { month: "Jun", users: 8234, revenue: 5100 },
];

export default function UserGrowthChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis 
            dataKey="month" 
            stroke="#71717a"
            style={{ fontSize: "12px" }}
          />
          <YAxis 
            stroke="#71717a"
            style={{ fontSize: "12px" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "8px",
              color: "#fff",
            }}
            labelStyle={{ color: "#a1a1aa" }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#a855f7"
            strokeWidth={3}
            dot={{ fill: "#a855f7", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#ec4899"
            strokeWidth={3}
            dot={{ fill: "#ec4899", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
