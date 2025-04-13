import Avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import ExpenseDetails from './ExpenseDetails';

export default function Accounts() {
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[94.65dvh] w-full">
    <div className="dashboardParent w-full lg:w-[calc(100%-21dvw)] px-4 md:px-6 lg:px-8">
    <div className="flex-1">
        <div className="mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
            ExpenseEase
          </h3>
          <div className="text-[#101010] opacity-50 text-xs md:text-sm">
            01 - 25 March, 2020
          </div>
        </div>
          <div className="w-full max-w-2xl">
            <div className="text-[rgba(38,42,65,1)] border-b-[0.3px] mb-5 md:mb-7 pb-3 px-3 md:px-5 border-black w-full text-xl md:text-2xl font-bold">
              Accounts
            </div>
            <div className="flex flex-col gap-y-5 md:gap-y-7">
              <div className="flex h-12 md:h-16 gap-x-3 items-center w-full px-4 md:px-7">
                <img src={Avatar} alt="Avatar" className="bg-[#D9D9D9] rounded-lg py-2 px-3 h-10 md:h-12 w-auto object-contain" />
                <div>
                  <div className="text-lg md:text-xl">name</div>
                  <div className="text-[10px] md:text-xs">email</div>
                </div>
              </div>
              <div className="w-full px-4 md:px-7 space-y-3">
                <button className="bg-[#D9D9D9] rounded-md py-2 text-xs md:text-sm font-semibold w-full">
                  Manage account
                </button>
                <button className="bg-[#D9D9D9] rounded-md py-2 text-xs md:text-sm font-semibold w-full">
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-[#D9D9D9] px-4 md:px-6 py-2 text-sm md:text-base rounded-md ml-auto block hover:bg-[#c4c4c4] transition-colors"
          >
            Log out
          </button>
        </div>
      </div>
      <ExpenseDetails />
    </div>
     
        </>
  );
}
