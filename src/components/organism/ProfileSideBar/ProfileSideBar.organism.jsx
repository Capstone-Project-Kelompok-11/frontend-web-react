import ContactInformation from "../../molecules/ContactInformation/ContactInformation.moleculs";
import Earning from "../../molecules/Earning/Earning.molecul";
import ProfileAccount from "../../molecules/ProfileAccount/ProfileAccount.molecul";

function ProfileSideBar() {
  const contactInfo = [
    {
      name: "Email",
      text: "gabriel@gmail.com",
    },
    {
      name: "Phone",
      text: "+92 72649589",
    },
    {
      name: "Date of birth",
      text: "12/03/1990",
    },
    {
      name: "Gender",
      text: "Male",
    },
    {
      name: "Website",
      text: "www.lms.co.id",
    },
  ];

  return (
    <div className="absolute block inset-x-0 top-0 py-28 bg-custom-blue w-72 h-screen ">
      <div className="text-center px-10 flex-row">
        <ProfileAccount />
        <div className="flex flex-col items-start my-4">
          <h1 className="font-bold text-sm py-2 ">Contact Information</h1>
          {contactInfo.map((item) => (
            <ContactInformation items={item} />
          ))}
        </div>
        <div className="border-t border-black">
          <Earning />
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
