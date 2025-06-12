'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, ChartBarIcon, BookOpenIcon, UsersIcon, Cog6ToothIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const navigation = [
  { name: 'Overview', href: '/', icon: HomeIcon },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Courses', href: '/courses', icon: BookOpenIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Fixed header for toggle button */}
      <div className="fixed top-0 left-0 z-50 h-16 px-4 flex items-center bg-gradient-to-r from-blue-900 to-blue-800 border-b border-blue-700">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-blue-700/50 text-white hover:bg-blue-600 transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? (
            <>
              <XMarkIcon className="h-6 w-6" />
              <span className="text-sm font-medium">Close Menu</span>
            </>
          ) : (
            <>
              <Bars3Icon className="h-6 w-6" />
              <span className="text-sm font-medium">Open Menu</span>
            </>
          )}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30 backdrop-blur-sm transition-opacity duration-200"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed 
          top-0 
          left-0 
          z-40 
          h-full 
          w-64 
          bg-gradient-to-br 
          from-blue-900 
          via-blue-800 
          to-blue-900 
          border-r 
          border-blue-700/50
          transition-all
          duration-300
          ease-out
          shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="h-16"></div> {/* Spacer for toggle button */}
          
          {/* Logo and Title */}
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
              LearnXR
            </h2>
            <p className="text-blue-300 mt-2 text-sm">Admin Dashboard</p>
          </div>

          <div className="flex flex-col justify-between flex-1 px-4">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 text-sm transition-all duration-200 
                      rounded-lg relative group
                      ${isActive 
                        ? 'text-white bg-blue-600 shadow-lg' 
                        : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'
                      }
                    `}
                  >
                    <item.icon className={`
                      w-5 h-5 transition-transform duration-200
                      ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                    `} />
                    <span className="mx-4 font-medium">{item.name}</span>
                    {isActive && (
                      <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* User Profile Section */}
            <div className="mb-8">
              <div className="px-4 py-6 bg-gradient-to-br from-blue-700/30 to-blue-800/30 rounded-xl backdrop-blur-sm border border-blue-700/20">
                <div className="flex items-center">
                  <img
                    className="object-cover rounded-lg h-12 w-12 border-2 border-blue-400/30"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="Admin profile"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Admin User</h4>
                    <p className="text-sm text-blue-300">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
} 