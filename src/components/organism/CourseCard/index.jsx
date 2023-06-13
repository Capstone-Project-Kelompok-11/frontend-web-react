import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { getBgColor, option } from "../ChapterCard/constant";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";
import Modal from "../../molecules/Modal/Modal.molecul";

function CourseCard({
  courseName,
  courseDes,
  coursePrice,
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
    navigate(`/course/new-course`, {
      state: {
        createNewCourse: false,
        data: { courseName, courseDes, coursePrice },
      },
    });
  };

  return (
    <section className="flex items-center ">
      <section
        onClick={onClick}
        className={onClick ? "cursor-pointer" : "cursor-default"}
      >
        <h2>{courseName}</h2>
      </section>

      <section className="relative flex items-center">
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
                  Are you sure want to delete course{" "}
                  <span className="font-semibold">{courseName}</span>?
                </p>
              </section>
            </Modal>
          </>
        )}
      </section>
    </section>
  );
}

export default CourseCard;