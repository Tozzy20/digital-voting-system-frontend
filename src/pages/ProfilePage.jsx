import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import PersonalDataForm from "../components/profile/PersonalDataForm";
import PasswordChangeForm from "../components/profile/PasswordChangeFrom";
import TimezoneSettings from "../components/profile/TimezoneSetting";

const ProfilePage = () => {
  return (
    <div className=" min-h-screen">
      
      <div className="ml-[240px] mt-[60px] mr-[240px]">
        <Breadcrumbs title="Администратор / Личный кабинет / Общая информация" />
        <PageTitle title="Личный кабинет" />
        
        <main className="flex gap-[10px] mt-[24px] ">
            <div className="flex flex-col gap-[10px]">
                <PersonalDataForm />
                <PasswordChangeForm />
            </div>

            <div class="flex flex-col w-full space-y-[10px]">
                <TimezoneSettings />
            </div>
        </main>
      </div>
      
    </div>
  );
};

export default ProfilePage;
