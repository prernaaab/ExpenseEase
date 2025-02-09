import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import authService from "../../appwrite/auth/auth";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <>
      <button className="bg-[#D9D9D9] px-6 py-1 rounded-md absolute right-16 bottom-8">
        log out
      </button>
    </>
  );
}
