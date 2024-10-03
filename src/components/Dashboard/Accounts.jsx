// import LogoutBtn from "./LogoutBtn";
import Avatar from "../../assets/avatar.png";
import authService from "../../appwrite/auth/auth";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <div className="py-14 px-[4.5dvw] w-full relative">
      <div className="mb-10">
        <h3 className="text-4xl font-semibold mb-2">ExpenseEase</h3>
        <div className="text-[#101010] opacity-50 text-sm">
          01 - 25 March, 2020
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-[rgba(38, 42, 65, 1)] border-b-[0.3px] mb-7 pb-3 px-5 border-black w-full text-2xl font-bold">
          Accounts
        </div>
        <div className="flex flex-col gap-y-7 items-center">
          <div className="flex h-16 gap-x-3 items-center w-full px-7">
            <img src={Avatar} className="bg-[#D9D9D9] rounded-lg py-2 px-3" />
            <div>
              <div className="text-xl">John Doe</div>
              <div className="text-xs">johndoe@mail.net</div>
            </div>
          </div>
          <div>
            <button className="bg-[#D9D9D9] rounded-md block mb-3 py-2 text-sm font-semibold w-full">
              Manage account
            </button>
            <button className="bg-[#D9D9D9] rounded-md py-2 text-sm font-semibold px-24">
              Change password
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#D9D9D9] px-6 py-1 rounded-md absolute right-16 bottom-8"
      >
        log out
      </button>
    </div>
  );
}
