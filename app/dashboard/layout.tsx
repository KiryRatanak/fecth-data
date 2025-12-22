import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-indigo-600">Admin Console</h2>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <a href="/dashboard" className="hover:text-indigo-600 transition">Overview</a>
            <a href="/dashboard/settings" className="hover:text-indigo-600 transition">Settings</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
