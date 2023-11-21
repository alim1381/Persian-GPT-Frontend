"use client";
import { logout } from "@/redux/futures/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/auth/login");
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="p-4 text-center">
        <svg
          className="text-neutral-400 w-11 h-11 mb-3.5 mx-auto"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className="mb-4 text-neutral-300">آیا مطمئن هستید ؟</p>
        <div className="flex justify-center items-center space-x-4">
          <button
            data-modal-toggle="deleteModal"
            type="button"
            className="py-2 px-3 text-sm font-medium text-neutral-400 rounded-lgfocus:outline-none "
            onClick={() => router.back()}
          >
            بازگشت
          </button>
          <button
            type="submit"
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
            onClick={logoutHandler}
          >
            خروج
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
