import React from "react";

const Menu = () => {
  const menuItems = [
    {
      name: "Salmon Nigiri",
      description: "Salmon segar diatas nasi sushi dengan sentuhan wasabi",
      price: "Rp 45.000",
      image: "/1.jpeg",
      popular: true,
    },
    {
      name: "California Roll",
      description: "Kepiting, alpukat, dan mentimun dengan tobiko",
      price: "Rp 55.000",
      image:
        "https://images.unsplash.com/photo-1764183122524-974ccfb709fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXIlMjBqYXBhbmVzZSUyMGZvb2R8ZW58MXx8fHwxNzc0MjYxMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      popular: true,
    },
    {
      name: "Spicy Tuna Roll",
      description: "Tuna pedas dengan mayo spesial dan tempura flakes",
      price: "Rp 60.000",
      image:
        "https://images.unsplash.com/photo-1764183122524-974ccfb709fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXIlMjBqYXBhbmVzZSUyMGZvb2R8ZW58MXx8fHwxNzc0MjYxMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      popular: false,
    },
    {
      name: "Rainbow Roll",
      description: "Kombinasi salmon, tuna, dan avocado dalam satu roll",
      price: "Rp 75.000",
      image:
        "https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBzdXNoaSUyMG5pZ2lyaXxlbnwxfHx8fDE3NzQyMzI0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      popular: false,
    },
    {
      name: "Dragon Roll",
      description: "Unagi dengan alpukat, dilengkapi saus special",
      price: "Rp 85.000",
      image:
        "https://images.unsplash.com/photo-1764183122524-974ccfb709fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXIlMjBqYXBhbmVzZSUyMGZvb2R8ZW58MXx8fHwxNzc0MjYxMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      popular: true,
    },
    {
      name: "Sashimi Platter",
      description: "Pilihan sashimi premium dengan 5 jenis ikan segar",
      price: "Rp 120.000",
      image:
        "https://images.unsplash.com/photo-1680675228874-9b9963812b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBzdXNoaSUyMG5pZ2lyaXxlbnwxfHx8fDE3NzQyMzI0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      popular: false,
    },
  ];

  return (
    <div>
      <section id="menu" className="scroll-mt-20">
        <h1 className="font-bold text-center pt-16 text-5xl">
          Menu Unggulan Kami
        </h1>
        <p className="text-center mb-8 mt-3 max-w-2xl mx-auto font-bold text-pretty sm:text-lg/relaxed text-gray-500">
          Berbagai pilihan sushi dan makanan Jepang yang dibuat dengan bahan
          yang terbaik
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg"
            >
              <img
                alt={item.name}
                src={item.image || "/1.jpeg"}
                className="h-56 w-full object-cover"
              ></img>
              {item.popular && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </div>
              )}
              <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900">{item.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-1">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    {item.price}
                  </span>
                  <button className="bg-red-600 text-white px-6 my-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
