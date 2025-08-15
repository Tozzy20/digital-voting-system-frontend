import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import PageTitle from "../components/PageTitle";
import PersonalDataForm from "../components/profile/PersonalDataForm";
import PasswordChangeForm from "../components/profile/PasswordChangeFrom";
import TimezoneSettings from "../components/profile/TimezoneSetting";

const ProfilePage = () => {
  return (
    <div className="min-h-screen">

      <div className="lg:ml-[240px] lg:mt-[60px] lg:mr-[240px] px-4 lg:px-0 py-4 lg:py-0">
        <Breadcrumbs 
          title="Администратор / Личный кабинет / Общая информация" 
          className="text-sm lg:text-base"
        />
        
        <PageTitle 
          title="Личный кабинет" 
          className="text-2xl lg:text-3xl lg:mt-0"
        />
        
        <main className="flex flex-col lg:flex-row gap-4 lg:gap-[10px] mt-4 lg:mt-[24px]">
          {/* Левая колонка (формы) */}
          <div className="flex flex-col gap-4 lg:gap-[10px] w-full lg:w-auto">
            <PersonalDataForm />
            <PasswordChangeForm />
          </div>

          {/* Правая колонка (настройки) */}
          <div className="flex flex-col w-full lg:w-full gap-4 lg:gap-[10px]">
            <TimezoneSettings />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;