import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GuruSvg from "../assets/Guru.svg";
import LogoSvg from "../assets/Logo.svg";
import Navbar from "../components/templates/Navbar.template";

function LandingPage() {
  useEffect(() => {
    // Logika useEffect
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-blue-600 h-screen flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mr-10 mb-24">
          <img src={GuruSvg} alt="Guru" className="w-1/2 mt-24 mr-10" />
          <div className="mr-10">
            <div className="mb-8 ">
              <p className="text-5xl text-white font-bold ">
                SELAMAT DATANG di halaman admin
              </p>
            </div>
            <div>
              <p className="text-white text-xl">
                Kelola pembelajaran dengan mudah dan efisien. Semua yang Anda
                butuhkan untuk mengelola LMS Anda, tersedia di sini.
              </p>
              <img
                src={LogoSvg}
                alt="Logo"
                className="opacity-50 absolute top-0 mt-24 -ml-12"
              />
            </div>
            <div>
              <Link
                to="/login"
                className="bg-primary-50 text-white rounded-lg font-bold text-lg p-2 mr-28 absolute bottom-0 right-0 mb-10 "
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
