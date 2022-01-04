import { Fragment } from 'react'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  NewspaperIcon,
  IdentificationIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  TranslateIcon,
  SunIcon
} from '@heroicons/react/outline'
import { lightBlue } from 'tailwindcss/colors';

const pageshover = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: NewspaperIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: InformationCircleIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: IdentificationIcon,
  },
]

const pages = [
  {
    name: 'Blog',
    href: '/blog',
    icon: NewspaperIcon,
  },
  {
    name: 'About',
    href: '/about',
    icon: InformationCircleIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: IdentificationIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({
  lantoshow,
  pathname,
  page
}) {
  const [mounted, setMounted] = useState(false)
  const { theme , setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  let themeimage = 'ri-computer-line'

  if ( theme == 'dark' ){
    themeimage = 'ri-moon-clear-line'
  } else if ( theme == 'light' ){
    themeimage = 'ri-sun-line'
  } else {
    themeimage = 'ri-computer-line'
  }
console.log(theme)
  return (
      <>
    <Popover className="relative bg-white border-b-2 border-gray-100 dark:bg-gray-800 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href={`/${pathname}`} className='inline-flex space-x-2'>
              <img
                className="h-8 w-auto sm:h-10"
                src="/logo-no-bg.png"
                alt=""
              />
              <span className='text-2xl mt-1 hidden lg:block dark:text-white'>
                Ronnapat Srivoravilai
              </span>
              <span className='text-2xl sm:mt-1 block lg:hidden dark:text-white'>
                Ronnapat
              </span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-9 ">
            {pages.map((item) => (
              <a 
                key={item.name}
                href={`/${pathname}${item.href}`}
                className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-sky-400 inline-flex"
              >
                <item.icon className="flex-shrink-0 h-6 w-6 text-sky-500 dark:text-sky-400" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center p-2">
                  <i className={`${themeimage} text-xl dark:text-gray-400 dark:hover:text-gray-200`}></i>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => setTheme('light')}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200',
                            'block px-4 py-1 text-md select-none cursor-pointer'
                          )}
                        >
                          <i class="ri-sun-line text-md mr-2"></i>
                          Light
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                          <a
                            onClick={() => setTheme('dark')}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200',
                              'block px-4 py-1 text-md select-none cursor-pointer'
                            )}
                          >
                            <i class="ri-moon-clear-line text-md mr-2"></i>
                            Dark
                          </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                          <a
                            onClick={() => setTheme('system')}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200',
                              'block px-4 py-1 text-md select-none cursor-pointer'
                            )}
                          >
                            <i class="ri-computer-line text-md mr-2"></i>
                            System
                          </a>
                        )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full p-2">
                <TranslateIcon className='h-5 w-5 mr-1' />
                {/* {lantoshow}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`/en-us${page}`}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        🇺🇸 English
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`/th-th${page}`}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        🇹🇭 ไทย
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className='inline-flex space-x-2'>
                  <img
                    className="h-8 w-auto"
                    src="/logo-no-bg.png"
                    alt="Workflow"
                  />
                  <span className='text-2xl'>
                    Ronnapat Srivoravilai
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 mb-2">
                <nav className="grid gap-y-8">
                  {pageshover.map((item) => (
                    <a
                      key={item.name}
                      href={`/${pathname}${item.href}`}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-sky-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                   <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          <TranslateIcon className='h-5 w-5 mr-2' />
                          <span className='text-center'>
                            {lantoshow}
                          </span>
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href={`/en-us${page}`}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  🇺🇸 English
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                href={`/th-th${page}`}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  🇹🇭 ไทย
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </>
  )
}
