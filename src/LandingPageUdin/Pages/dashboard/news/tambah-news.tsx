import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const IoArrowBack = require("react-icons/io5").IoArrowBack;

type Category = {
  id: number;
  name: string;
};

const TambahNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Gagal ambil kategori:", err));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category_id", String(categoryId));
    if (image !== null) {
      formData.append("image", image);
    }

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Berita berhasil ditambahkan!");
      navigate("/dashboard/news");
      setTitle("");
      setDescription("");
      setImage(null);
      setCategoryId(null);
    } catch (error) {
      console.error("Gagal submit:", error);
      alert("Gagal menambahkan berita.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const isFormValid = title && description && image && categoryId;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-sm">
      <Link to="/dashboard/news">
        <div className="flex items-center gap-3 mb-4">
          <IoArrowBack />
          <h1 className="text-xl font-bold ">Tambah Berita</h1>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Judul</label>
          <input type="text" className="w-full border px-3 py-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Kategori</label>
          <div className="relative">
            <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full border px-3 py-2 rounded text-left bg-white">
              {categoryId ? categories.find((cat) => cat.id === categoryId)?.name : "Pilih kategori"}
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
                {categories.map((cat: any) => (
                  <li
                    key={cat.id}
                    onClick={() => {
                      setCategoryId(cat.id);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {cat.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deskripsi</label>
          <textarea rows={4} className="w-full border px-3 py-2 rounded" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Gambar</label>
          <input type="file" className="w-full border px-3 py-2 rounded bg-white" onChange={handleImageChange} />
        </div>

        <button type="submit" disabled={!isFormValid || loading} className={`w-full py-2 rounded text-white mt-4 ${isFormValid && !loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
          {loading ? "Mengirim..." : "Tambah Berita"}
        </button>
      </form>
    </div>
  );
};

export default TambahNews;
