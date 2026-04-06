"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    user: "Alice Johnson",
    email: "alice@example.com",
    amount: "+$2,450",
    type: "credit",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "TXN-002",
    user: "Bob Smith",
    email: "bob@example.com",
    amount: "-$890",
    type: "debit",
    status: "completed",
    date: "5 hours ago",
  },
  {
    id: "TXN-003",
    user: "Carol White",
    email: "carol@example.com",
    amount: "+$5,200",
    type: "credit",
    status: "completed",
    date: "1 day ago",
  },
  {
    id: "TXN-004",
    user: "David Brown",
    email: "david@example.com",
    amount: "+$1,750",
    type: "credit",
    status: "pending",
    date: "1 day ago",
  },
  {
    id: "TXN-005",
    user: "Eva Martinez",
    email: "eva@example.com",
    amount: "-$3,100",
    type: "debit",
    status: "completed",
    date: "2 days ago",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-zinc-800">
        <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
        <p className="text-sm text-gray-400 mt-1">Latest financial activities</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/50">
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                Transaction ID
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                User
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                Status
              </th>
              <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider px-6 py-4">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {transactions.map((txn, index) => (
              <tr
                key={index}
                className="hover:bg-zinc-800/50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <span className="text-sm font-mono text-gray-300">{txn.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{txn.user}</span>
                    <span className="text-xs text-gray-400">{txn.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {txn.type === "credit" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        txn.type === "credit" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {txn.amount}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      txn.status === "completed"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-400">{txn.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-zinc-800 flex justify-between items-center">
        <p className="text-sm text-gray-400">Showing 5 of 1,234 transactions</p>
        <button className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
          View All Transactions →
        </button>
      </div>
    </div>
  );
}
