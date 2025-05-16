import React from "react";

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white -mt-20">
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        alt="Video Background"
        src="/images/law.jpg" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center mt-6">
        <div className="flex justify-center mb-4">
          <img src="/images/niw.svg" className="w-48 h-28 " alt="" />
        </div>
        <h1 className="text-[29px] md:text-6xl  font-bold max-w-4xl  ">
          NATIONAL <span className="text-[#144470]">INDUSTRIAL</span>
          <br /> <span className="text-[#cfa84d]">WATCH</span> (NIW)
        </h1>

        <div className="relative inline-flex items-center justify-center mt-10">
          {/* Pulse Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#cfa84d] opacity-75 animate-pulseRing"></span>

          {/* Actual Button */}
          <button onClick={() => alert("Daftar Sekarang")} className="relative bg-[#cfa84d] hover:bg-opacity-90 text-white hover:text-white font-semibold text-lg py-3 px-8 rounded-full z-10">
            Ajukan Pengaduan
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroUdin;
