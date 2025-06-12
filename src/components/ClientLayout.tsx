'use client';

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'
import ProfileMenu from '@/components/ProfileMenu'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main content */}
      <div 
        className={`
          flex-1 
          transition-all 
          duration-300 
          ease-out
          ${isSidebarOpen ? 'ml-64' : 'ml-0'}
        `}
      >
        {/* Fixed header */}
        <div 
          className="
            fixed 
            top-0 
            right-0 
            left-0 
            z-40 
            bg-white/70
            backdrop-blur-md 
            border-b 
            border-slate-200/80
            transition-all 
            duration-300 
            ease-out
            shadow-sm
          " 
          style={{ left: isSidebarOpen ? '256px' : '0' }}
        >
          <div className="h-16 px-4 flex items-center justify-between relative">
            {/* Left spacer to match toggle button width */}
            <div className="w-[100px]"></div>
            
            {/* Centered search bar */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4">
              <SearchBar />
            </div>
            
            {/* Profile menu */}
            <div className="w-[100px] flex justify-end">
              <ProfileMenu />
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="pt-20 min-h-screen">
          <div className="max-w-screen-2xl mx-auto p-4 md:p-8">
            <div className="bg-white/70 backdrop-blur-sm shadow-sm border border-slate-200/80 rounded-2xl p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 