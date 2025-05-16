import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "ISSUE STRATEGIS",
    content: `Menguatnya fenomena ketidakamanan dan ketidaknyamanan global yang melanda berbagai level dan aspek kehidupan masyarakat sebagai imbas industrialisasi, modernisasi dan digitalisasi.`,
  },
  {
    title: "ISSUE STRATEGIS",
    content: `Melemahnya peran pekerja atau tenaga kerja dalam konteks kekuasaan negara sebagai dasar moralitas kekuasaan puncak dari relasi kekuasaan dan ketatanegaraan dengan sektor pekerja atau tenaga kerja.`,
  },
  {
    title: "ISSUE STRATEGIS",
    content: `Memudarnya modal sosial, modal kultural, modal ekonomi dan modal politik para pekerja atau tenaga kerja di dalam menciptakan social security dan civil society.`,
  },
  {
    title: "ISSUE STRATEGIS",
    content: `Terdegradasinya hak-hak pekerja atau tenaga kerja dalam pola hubungan industrial, maupun hak-hak lainnya sebagai warga negara.`,
  },
];

const GeraiSection = () => {
  return (
    <section className="relative w-full text-white">
      {/* Background */}
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/bg-profile.jpg" alt="" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} className="w-full custom-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/30 backdrop-blur-md text-gray-800 rounded-2xl p-8 max-w-4xl mx-auto relative">
                <h2 className="text-2xl md:text-3xl font-bold text-[#024654] mb-4 text-center">{item.title}</h2>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GeraiSection;
