import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Program/index.css";

const data = [
  {
    title: "Riset Pekerjaan",
    desc: "Melakukan aktivitas Riset/penelitian yang terkait dengan fenomena sosial, ekonomi, politik dan budaya kontemporer di Indonesia dengan perspektif/pendekatan sector pekerja atau tenaga kerja.",
    icon: "/logo/news.png",
    image: "/images/program1.jpg",
    date: "19-05-2025",
  },

  {
    title: "Riset Pekerjaan",
    desc: "Melakukan aktivitas Riset/penelitian yang terkait dengan fenomena sosial, ekonomi, politik dan budaya kontemporer di Indonesia dengan perspektif/pendekatan sector pekerja atau tenaga kerja.",
    icon: "/logo/news.png",
    image: "/images/program1.jpg",
    date: "19-05-2025",
  },
  {
    title: "Arahan Kerja",
    desc: "Melakukan Seminar, Dialog Publik dan Workshop terkait dengan mengarusutamakan pendekatan/perspektif social security.",
    icon: "/logo/news.png",
    image: "/images/program2.jpg",
    date: "19-05-2025",
  },
  {
    title: "Upah & Tunjangan",
    desc: "Mengembangkan kajian akademik yang bersifat teoritis, praktis dan aplikatif terkait isu-isu sektor pekerja atau tenaga kerja.",
    icon: "/logo/news.png",
    image: "/images/program3.jpg",
    date: "19-05-2025",
  },
];

const Editorial = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateText = (text: string, index: number) => {
    if (expanded === index) return text;
    return text.length > 80 ? text.substring(0, 80) + "..." : text;
  };

  return (
    <div className="bg-white py-7 px-5 lg:px-10">
      <div className="flex gap-5 items-center mb-7">
        <div className="w-full h-[4px] bg-[#144470] text-[#144470]"></div>

        <h1 className="lg:text-[25px]  font-semibold text-[18px]  text-[#cfa84d] w-52 lg:w-56">Editorial NIW</h1>
      </div>

      <Swiper
        slidesPerView={1.2} // default: untuk mobile
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 2.8, spaceBetween: 30 }, // desktop: 3 kartu
        }}>
        {data.map((item, index) => (
          <div className="px-5 md:px-10 lg:px-20">
            <SwiperSlide key={index}>
              <div>
                <div className="rounded-md border-2 border-[#144470]">
                  <div className="">
                    <img src={item.image} alt="" className="w-full h-48" />
                  </div>

                  <div className="px-2 py-3">
                    <h3 className="font-bold text-xl mb-3 mt-2">{item.title}</h3>
                    <p className="text-sm mb-4">{truncateText(item.desc, index)}</p>

                    <div className="flex items-center justify-between">
                      <button onClick={() => toggleExpand(index)} className="font-semibold text-sm underline underline-offset-2">
                        {expanded === index ? "Tutup" : "Selengkapnya →"}
                      </button>

                      <div className="text-[#cfa84d] italic">{item.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      {/* Custom Pagination di sini */}
      <div className="custom-pagination flex justify-center mt-6" />
    </div>
  );
};

export default Editorial;
