import HeaderLogin from '/src/components/HeaderLogin';
import Sidebar from '/src/components/office/Sidebar'

const MyOfficePage = () => {
    return (
        <div className="bg-[#EFF3F8]">
        <HeaderLogin />

        <div>
            <Sidebar />
        </div>
        </div>
    );
};

export default MyOfficePage;