import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { getBgColor, option } from "./constant";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";
import DeleteModal from "../../molecules/Modal/DeleteModal.molecul";

function ChapterCard({ title, onClick, isReporting, score }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    if (value === "Delete") {
      setIsOpen(true);
      return;
    }

    alert("Updated is clicked!");
  };

  return (
    <section
      onClick={onClick}
      className="relative flex items-center justify-between p-3 bg-light-blue-10 shadow-gray-600 shadow-md rounded-xl cursor-pointer"
    >
      <h2>{title}</h2>
      {isReporting ? (
        <p className="font-bold text-success-30 mr-10">{score}</p>
      ) : (
        <>
          <Menu>
            <Menu.Button>
              <ThreeDotIcon width={20} height={20} />
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
              <Menu.Items className="absolute right-0 flex flex-col w-24 gap-1 p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {option.map((value) => (
                  <Menu.Item key={value} as={Fragment}>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`text-center cursor-pointer rounded-md ${
                          active && `text-white ${getBgColor(value)}`
                        }`}
                        onClick={() => handleClick(value)}
                      >
                        {value}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          <DeleteModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Delete Confirmation"
            content={title}
          />
        </>
      )}
    </section>
  );
}

export default ChapterCard;
