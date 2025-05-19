import { useRef, useEffect, useState } from "react";

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageVisible(true);
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto  h-auto bg-white mt-[40px]  md:mt-[100px] z-50">
      <div className="grid mb-[50px] rounded-[16px] bg-white lg:rounded-[32px] md:rounded-[10px] opacity-100 md:grid-cols-2 grid-cols-1 gap-14 items-center lg:mx-[56px] mx-[16px] md:mx-[32px]">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} lg:w-[588px] md:w-[300px] h-full`}>
          <div className="">
            <img src="/images/profile.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"} font-poppins md:text-left -pt-[20px] md:pt-0`}>
          {/* <div className="flex justify-center">
            <img src="/images/koptentang.png" alt="" className="object-contain w-40 h-40" />
          </div> */}
          <div className="flex gap-5 items-center">
            <h1 className="lg:text-[30px] font-poppins font-semibold text-[18px]  text-[#cfa84d] ">Profile</h1>

            <div className="w-full h-[4px] bg-[#144470] text-[#144470]"></div>
          </div>

          <div className="flex gap-2 items-start mt-4">
            {/* <div className="rounded-full  bg-[#144470] text-[#cfa84d] px-3 py-1">1</div> */}

            <p className="lg:text-[18px]  text-[14px] text-left  lg:text-justify ">
              <span className="rounded-full  bg-[#144470] text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">1</span>
              National Industrial Watch (NIW) merupakan lembaga kajian, riset, advokasi dan konsultasi yang memfokuskan pada paradigma civil society dengan focus pada pekerja atau tenaga kerja. NCW didirikan dengan maksud merespons
              perkembangan kontemporer di Indonesia ditengah industrialisasi, modernisasi dan digitalisasi dimana peran pekerja atau tenaga kerja secara massif mulai terpingirkan khususnya dalam konteks kontribusinya mengelola sumber daya,
              regulasi dan pengambilan keputusan.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify">
              <span className="rounded-full  bg-[#144470] text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">2</span>
              NIW ini digunakan sebagai sebuah perspektif/pendekatan di dalam membedah problem sosial, ekonomi, politik, regulasi dan lain sebagainya menyangkut dengan hak-hak pekerja atau tenaga kerja sehingga terbangun hubungan industrial
              yang sehat dan membangun.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify ">
              <span className="rounded-full  bg-[#144470] text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">3</span>
              NIW adalah lembaga independen yang bekerja secara profesional, netral dan menjalankan kerja-kerja yang bersifat akademik, advokatif, konsultatif, teoritis dan praktis di dalam melayani tuntutan publik akan pentingnya
              perspektif/pendekatan civil society di dalam mencari solusi atas berbagai permasalahan yang ada di Indonesia terkait dengan pekerja atau tenaga kerja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
