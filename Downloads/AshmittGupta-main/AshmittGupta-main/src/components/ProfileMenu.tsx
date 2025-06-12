'use client';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon, KeyIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const userNavigation = [
  { name: 'Your Profile', href: '#', icon: UserCircleIcon },
  { name: 'Change Password', href: '#', icon: KeyIcon },
  { name: 'Sign out', href: '#', icon: ArrowRightOnRectangleIcon },
]

export default function ProfileMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative flex rounded-lg bg-white p-1.5 text-gray-700 hover:text-blue-600 focus:outline-none border border-gray-200 hover:border-blue-500 transition-all duration-200 hover:scale-105 active:scale-95">
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-md object-cover"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="User avatar"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200/80">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm text-gray-900 font-medium">Admin User</p>
            <p className="text-xs text-gray-500 mt-0.5">admin@learnxr.com</p>
          </div>
          <div className="py-1">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={`
                      flex items-center px-4 py-2 text-sm transition-colors duration-150
                      ${active 
                        ? 'bg-gray-50 text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                      }
                    `}
                  >
                    <item.icon 
                      className={`
                        mr-3 h-5 w-5 transition-transform duration-150
                        ${active ? 'scale-110' : ''}
                      `} 
                      aria-hidden="true" 
                    />
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 