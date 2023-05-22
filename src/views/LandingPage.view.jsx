import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GuruSvg from "../assets/guru.svg";
import LogoSvg from "../assets/home.svg";
import Navbar from "../components/templates/Navbar.template";

function LandingPage() {
  useEffect(() => {
    // Logika useEffect
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="main">
          <img src={LogoSvg} alt="Logo" className="w-700 h-500 opacity-20" />
        </div>
        <div className="tulisan">
          <img className="foto w-700 h-500" src={GuruSvg} alt="Guru" />
          <div className="posisi">
            <div className="pesan">
              <p className="font-bold text-6xl text-white">
                SELAMAT DATANG di halaman admin
              </p>
            </div>
            <div className="text">
              <p className="text-white ">
                Kelola pembelajaran dengan mudah dan efisien.Semua yang Anda
                butuhkan untuk mengelola LMS Anda,tersedia di sini.
              </p>
            </div>
          </div>
        </div>
        <Link
          to="/Login"
          className="Signin bg-blue-600 rounded-lg text-white font-bold text-lg p-6 px-8 py-5"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
