import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconAcademade from "../../molecules/IconAcademade/IconAcademade.molecul";
import Cookies from "js-cookie";
import sessionSlice from "../../../config/redux/session/sessionSlice/sessionSlice";
import useHTTP from "../../../utils/hooks/useHTTP";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dummy =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
 
  const notification = [
    { name: "rehan", desc: "dsdsddsdsddsdsddsdsddsdsdsdsdsddsdsddsdsddsdsddsdsds", photo: dummy },
    { name: "rehan", desc: "dsdsddsdsddsdsddsdsddsdsddsdsddsdsddsdsddsdsddsdsds", photo: dummy },
    { name: "rehan", desc: "dsdsddsdsddsdsddsdsddsdsd", photo: dummy },
    { name: "rehan", desc: "dsdsddsdsddsdsddsdsddsdsd", photo: dummy },
    { name: "rehan", desc: "dsdsddsdsddsdsddsdsddsdsd", photo: dummy },
  ];
  const { getRequest } = useHTTP();
  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(sessionSlice.actions.removeToken());
    navigate("/");
  };
  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=6283895104256')
  }
  // const { data } = useSWR("/api/v1/admin/events?size=5&page=1", getRequest);
  // console.log(data);

  return (
    <section className="flex sticky top-4 z-20 max-w-8xl mx-8 my-4 px-10 bg-warning-10 h-16 shadow-xl rounded-2xl">
      <IconAcademade />

      {/* Notification and Whatsapp Icon */}
      <section className="absolute gap-4 inset-y-0 right-12 mx-8 flex items-center pr-36 cursor-pointer">
      <WhatsappIcon style={{ width: 30 }} onClick={handleWhatsapp} />
            
        <Menu as="div" className="relative mx-4">
          <Menu.Button className="flex -mb-1 gap-3 rounded-full text-sm focus:ring-white focus:ring-offset-2">
          <BellIcon style={{ width: 30 }} />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {notification.length ? (
                notification?.map((value, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          " flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <img
                          src={value.photo}
                          alt={value.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="-mt-2">
                          <p className="block px-4 py-2 text-sm text-gray-700">
                            {value.name}
                          </p>
                          <p className="block px-4 py-2 -mt-3 w-60 text-xs text-gray-700 truncate ...">
                            "{value.desc}"
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      You don't have any notification right now!
                    </p>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </section>

      {/* Dropdown Notification */}
      {/* Dropdown Icon */}
      <section className="absolute inset-y-0 right-0 flex items-center pr-10">
        <Menu as="div" className="relative mx-4">
          <Menu.Button className="flex -mb-1 gap-3 rounded-full text-sm focus:ring-white focus:ring-offset-2">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
            />
            <h2 className="py-1 text-xl font-medium">Gabriel</h2>
          </Menu.Button>

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
                  <Link
                    to="/profile"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    My Profile
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700 w-full text-start"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </section>
    </section>
  );
}

export default NavigationBar;
