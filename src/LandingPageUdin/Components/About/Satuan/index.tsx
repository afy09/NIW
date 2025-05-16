import { useEffect, useState, useRef } from "react";

const VisiMisi = () => {
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
    <section className="bg-white py-6  md:mt-24 mx-4 md:mx-12 ">
      <div className="flex gap-5 items-center">
        <div className="w-full h-[4px] bg-[#144470] text-[#144470]"></div>

        <h1 className="lg:text-[25px]  font-semibold text-[18px]  text-[#cfa84d] w-28">Visi Misi</h1>
      </div>

      <div className=" lg:flex gap-4 justify-center mt-8">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} bg-[#144470] text-white px-8 lg:px-12 py-8 rounded-lg w-full`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d]">Visi</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-justify mt-5">
            Terlibat secara aktif dalam mengembangkan, memberdayaan dan memperjuangkan kepentingan-kepentingan pekerja atau tenaga kerja sehingga tercipta hubungan industrial yang sehat dan membangun, termasuk didalam nya adalah mendorong
            keterlibatan pekerja atau tenaga kerja dalam proses legislasi, pembuatan regulasi terkait dan pengelolaan sumber daya negara sebagai bagian dari hak konstitusional pekerja atau tenaga kerja sebagai warga negara.
          </p>
        </div>

        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"} bg-[#144470] text-white px-8 lg:px-12 py-8 rounded-lg w-full mt-4 lg:mt-0`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d]">Misi</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-justify mt-5">
            - Mendorong penguatan hak-hak pekerja atau tenaga kerja guna terwujudnya hubungan industrial yang sehat dan membangun. <br />
            - Mendorong penguatan partisipasi pekerja atau tenaga kerja dalam proses legislasi, pembuatan regulasi lainnya. <br />
            - Mendorong jaminan keamanan sosial (social security) pekerja atau tenaga kerja sebagai manusia Indonesia dalam berbagai aspek kehidupan dan dalam berbagai konteks lokal, nasional dan global.
            <br />- Terwujudnya road map tata kehidupan pekerja atau tenaga kerja yang berdaya guna produktif dalam peran serta membangun bangsa dan negara
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
