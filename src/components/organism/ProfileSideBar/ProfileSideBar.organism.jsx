import Earning from "../../molecules/Earning/Earning.molecul";
import ProfileAccount from "../../molecules/ProfileAccount/ProfileAccount.molecul";
import EmailDash from "../../molecules/ProfileDashSidebar/EmailDash.molecule";
import PhoneDash from "../../molecules/ProfileDashSidebar/PhoneDash.molecule";
import DateOfBirthDash from "../../molecules/ProfileDashSidebar/DateOfBirth.molecule";
import GenderDash from "../../molecules/ProfileDashSidebar/GenderDash.molecule";
import WebsiteDash from "../../molecules/ProfileDashSidebar/WebsiteDash.molecule";

function ProfileSideBar() {
  return (
    <div className="fixed block inset-x-0 top-0 py-24 bg-primary-30 w-72 h-screen ">
      <div className="text-center px-10 flex-row">
        <ProfileAccount />
        <div className="flex flex-col items-start my-4">
          <h1 className="font-bold text-sm py-1 ">Contact Information</h1>
          <EmailDash text={"gabriel@gmail.com"} />
          <PhoneDash phone={"+92 75649589"} />
          <DateOfBirthDash birthDate={"12/03/1990"} />
          <GenderDash gender={"Male"} />
          <WebsiteDash website={"www.lms.co.id"} />
        </div>
        <div className="border-t border-black">
          <Earning />
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar;
