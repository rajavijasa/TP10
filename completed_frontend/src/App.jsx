import React, { useState, useEffect } from 'react';

// Data dari soal Nomor 2
const response = {
  page: 1,
  results: [
    {
      userId: 1, id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1, id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

export default function App() {
  // Deklarasi State untuk Nomor 3
  const [count, setCount] = useState(0);

  // Deklarasi Effect untuk Nomor 3
  useEffect(() => {
    // Mengecek apakah nilai habis dibagi 10 (dan mengabaikan angka 0 di awal)
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Jawaban Nomor 1: Navigation Bar */}
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-white shadow-md">
        <div className="text-xl font-bold">Raja Avicenna Al-Kindi Vijasa</div>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-300">Home</li>
          <li className="cursor-pointer hover:text-blue-300">Profile</li>
          <li className="cursor-pointer hover:text-blue-300">Contact</li>
        </ul>
      </nav>

      {/* Konten Utama */}
      <main className="p-8">
        
        {/* Konten Jawaban Nomor 2: Card List */}
        <section className="mb-12">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Card List</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {response.results.map((item) => (
              <div key={item.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
                <img 
                  src={`${item.image}?random=${item.id}`} 
                  alt={item.title} 
                  className="h-48 w-full object-cover" 
                />
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">{item.title}</h2>
                  <p className="flex-1 text-sm text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Konten Jawaban Nomor 3: Counter Demo */}
        <section className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-black">Counter Demo</h1>
          <div className="mb-6 text-2xl font-medium text-black">
            {count}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCount(count - 1)}
              className="rounded-md bg-[#a3c2f0] px-6 py-2 text-black hover:bg-blue-300 font-medium shadow-sm transition-colors"
            >
              -
            </button>
            <button 
              onClick={() => setCount(0)}
              className="rounded-md bg-[#a3c2f0] px-6 py-2 text-black hover:bg-blue-300 font-medium shadow-sm transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={() => setCount(count + 1)}
              className="rounded-md bg-[#a3c2f0] px-6 py-2 text-black hover:bg-blue-300 font-medium shadow-sm transition-colors"
            >
              +
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}