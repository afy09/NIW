import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { ChevronDown } from "lucide-react";

const kategoriOptions = ["Upah & Tunjangan", "Pemutusan Hubungan kerja (PHK)", "Keselamatan dan Kesehatan Kerja (P3K)", "Waktu Kerja & Lembur", "Status Perjanjian Kerja", "Lainnya"];

const Pengaduan = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#144470] mx-auto flex justify-center h-[185vh] md:h-[100vh] lg:h-[150vh] ">
        <div className=" px-7 py-5 rounded-lg   w-full md:mx-8 lg:mx-20">
          <Link to="/">
            <div className="flex justify-start">
              <div className="bg-white opacity-50 text-black px-3 py-3 rounded-full">
                <img src="/logo/back.png" alt="" className="w-5 h-5" />
              </div>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl  mt-4 mb-8 text-center font-bold text-[#cfa84d] ">
            Formulir <span className="text-white"> Pengaduan</span>
          </h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Nama Lengkap</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500 w-full" placeholder="Masukan Nama Lengkap" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Nomor HP (WatsApp)</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500 w-full" placeholder="Masukan Nomor" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Nama Perusahaan/Instansi tempat Kerja</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Nama Perusahaan " />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Kategori Aduan</label>
                <div className="border border-[#cfa84d] bg-white rounded-lg text-[#cfa84d] p-3 cursor-pointer flex justify-between items-center" onClick={() => setOpen(!open)}>
                  {selected || "Pilih Kategori Aduan"}
                  <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
                {open && (
                  <ul className="absolute z-10 mt-24 w-full bg-white border border-[#cfa84d] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {kategoriOptions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected(item);
                          setOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-[#cfa84d] hover:text-white cursor-pointer text-[#333]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Provinsi</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Provinsi" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Kota/Kabupaten</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Kota/Kabupaten" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Kecamatan</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Kecamatan" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Kelurahan/Desa</label>
                <input type="text" className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Kelurahan/Desa" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Alamat</label>
                <textarea rows={4} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Alamat Perusahaan/Usaha Anda" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] text-lg md:text-xl font-semibold">Sampaikan Aduan Anda</label>
                <textarea rows={4} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3 placeholder:text-gray-500" placeholder="Masukan Aduan Anda" />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <div className="bg-[#cfa84d] text-white text-center py-2 px-8 mt-4 rounded-lg cursor-pointer hover:bg-white hover:text-[#cfa84d]">Kirim</div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pengaduan;
