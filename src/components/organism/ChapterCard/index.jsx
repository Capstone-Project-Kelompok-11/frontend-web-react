import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { getBgColor, option } from "./constant";
import { useNavigate } from "react-router-dom";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";
import Modal from "../../molecules/Modal/Modal.molecul";

function ChapterCard({
  chapterName,
  chapterDes,
  courseId,
  score,
  onClick,
  isReporting = false,
}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    alert("button yes delete has been clicked!");
    closeModal();
    //TODO: finish this logic
  };

  const handleClick = (value) => {
    if (value === "Delete") {
      setIsOpen(true);
      return;
    }

    // TODO: navigate to create new chapter form!
    navigate(`/course/${courseId}/new-chapter`, {
      state: { createNewChapter: false, data: { chapterName, chapterDes } },
    });
  };

  return (
    <section
      onClick={onClick}
      className="relative flex items-center justify-between p-3 bg-light-blue-10 shadow-gray-600 shadow-md rounded-xl cursor-pointer"
    >
      <h2>{chapterName}</h2>
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

          <Modal
            isOpen={isOpen}
            header="Delete Confirmation"
            primaryButtonName="Delete"
            handleSecondary={closeModal}
            handlePrimary={handleDelete}
            btnPrimaryClassName="bg-danger-70 hover:bg-danger-90"
          >
            <section className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure want to delete chapter{" "}
                <span className="font-semibold">{chapterName}</span>?
              </p>
            </section>
          </Modal>
        </>
      )}
    </section>
  );
}

export default ChapterCard;
