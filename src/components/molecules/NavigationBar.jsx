import { Fragment } from "react";
import {Menu , Transition} from "@headlessui/react"
import logo from "../../assets/logo.png";
import BellIcon from "../atoms/Icons/BellIcon";
import SearchInput from "../atoms/SearchInput/SearchInput";
import WhatsappIcon from "../atoms/Icons/WhatsappIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavigationBar() {
  return (
    <div className="flex relative z-10 max-w-7xl mx-4 my-4 bg-[#FFDA6A] h-16 border rounded-xl ">
      <div>
        <img src={logo} alt="" width={276} className="px-1" />
      </div>
     <SearchInput />
      <div className="absolute inset-y-0 right-12 mx-8 flex items-center pr-36 ">
        <WhatsappIcon style={{width:30}} />
        <BellIcon style={{width:30}} />
        
      </div>
      {/* Dropdown Icon */}
      <div>
        <div className="absolute inset-y-0 right-0  flex items-center  pr-16 ">
          <Menu as="div" className="relative mx-4">
            <div>
              <Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <div className="relative flex">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> 
                </div>
               <div className="py-2 px-1 text-md">
                Gabriel
               </div>
                
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      My Profile
                    </a>
                  )}
                </Menu.Item>
                
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/logout"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
