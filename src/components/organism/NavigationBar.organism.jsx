import { Fragment } from "react";
import {Menu , Transition} from "@headlessui/react"
import BellIcon from "../atoms/Icons/BellIcon.atom";
import WhatsappIcon from "../atoms/Icons/WhatsappIcon.atom";
import IconAcademade from "../molecules/IconAcademade/IconAcademade.molecul";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavigationBar() {
  return (
    <div className="flex relative z-10 max-w-8xl mx-8 my-4 bg-custom-yellow h-16 shadow-xl rounded-2xl ">
      <div className="-mt-9 ">
        <IconAcademade />
      </div>
      {/* Notification and Whatsapp Icon */}
      <div className="absolute gap-4 inset-y-0 right-12 mx-8 flex items-center pr-36 ">
        <WhatsappIcon style={{width:30}} />
        <BellIcon style={{width:30}} />
        
      </div>
      {/* Dropdown Icon */}
      <div>
        <div className="absolute inset-y-0 right-0  flex items-center  pr-16 ">
          <Menu as="div" className="relative mx-4">
            <div>
              <Menu.Button className="flex -mb-1 gap-4 rounded-full text-sm  focus:ring-white focus:ring-offset-2 ">
                <span className="sr-only">Open user menu</span>
                <div className="relative  flex">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> 
                </div>
               <div className="py-1 px-1 text-lg font-medium">
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
