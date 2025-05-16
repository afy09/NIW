import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const fiturData = [
  {
    title: "Demokrasi untuk Pekerja",
    description: "Mendorong lahirnya tatanan ketatanegaraan dan sistem sosial, ekonomi, politik, budaya yang lebih demokratis dengan tetap mengakomodir sector pekerja atau tenaga kerja.",
    image: "/images/isu.jpg",
    cards: [{ image: "/images/isu1.jpg" }, { image: "/images/isu1a.jpg" }, { image: "/images/isuB.jpg" }],
  },
  {
    title: "Penguatan Empat Modal",
    description: "Melakukan penguatan Modal Sosial, Modal Ekonomi, Modal Politik dan Modal Budaya di dalam membangun sistem sosial yang berbasis pada kenyamanan dan keamanan public para pekerja atau tenaga kerja.",
    image: "/images/isu2.jpg",
    cards: [{ image: "/images/isu1.jpg" }, { image: "/images/isu1a.jpg" }, { image: "/images/isuB.jpg" }],
  },
  {
    title: "Regulasi Berkeadilan",
    description: "Mendorong lahirnya regulasi dan sistem perundang-undangan yang mengarusutamakan keadilan dan kesejahteraan social bagi pekerja atau tenaga kerja.",
    image: "/images/isu3.jpg",
    cards: [{ image: "/images/isu1.jpg" }, { image: "/images/isu1a.jpg" }, { image: "/images/isuB.jpg" }],
  },
  {
    title: "Perlindungan dan HAM Pekerja",
    description: "Perlindungan Hukum dan Penegakan HAM bagi pekerja atau tenaga kerja.",
    image: "/images/isu4.jpg",
    cards: [{ image: "/images/isu1.jpg" }, { image: "/images/isu1a.jpg" }, { image: "/images/isuB.jpg" }],
  },
  {
    title: "Perspektif Jaminan Sosial",
    description: "Memberikan masukan-masukan perspektif/pendekatan teoritis dan praktis dengan perspektif social security.",
    image: "/images/isu5.jpg",
    cards: [{ image: "/images/isu1.jpg" }, { image: "/images/isu1a.jpg" }, { image: "/images/isuB.jpg" }],
  },
];

const Fitur = () => {
  return (
    <section className="bg-white mt-16 mb-10">
      <div className="relative px-5 xl:px-10">
        {/* Title */}
        <div className="flex gap-5 items-center mb-10">
          <h1 className="lg:text-[28px]  font-semibold text-[18px]  text-[#cfa84d] w-96">TUJUAN STRATEGIS</h1>
          <div className="w-full h-[4px] bg-[#144470] text-[#144470]"></div>
        </div>

        {/* Swiper Content */}
        <Swiper modules={[Navigation, Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }}>
          {fiturData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-80 rounded-2xl object-cover shadow-lg" />
                </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#144470] mb-4">{item.title}</h3>

                  <p className="text-gray-500 text-base leading-relaxed mb-8 text-justify">{item.description}</p>

                  <div className="flex  gap-2 lg:gap-5">
                    {item.cards.map((card, idx) => (
                      <div key={idx} className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group flex-1">
                        <img src={card.image} alt="tujuan" className="w-full h-28 lg:h-40 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent transition-opacity group-hover:opacity-80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fitur;
