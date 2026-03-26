import React from "react";
import { ChefHat, Award, Clock, Heart } from 'lucide-react';

const Hero = () => {
    const features = [
    {
      icon: ChefHat,
      title: 'Chef Berpengalaman',
      description: 'Chef kami memiliki pengalaman lebih dari 15 tahun di bidang kuliner Jepang',
    },
    {
      icon: Award,
      title: 'Bahan Premium',
      description: 'Menggunakan bahan-bahan segar dan berkualitas tinggi yang diimpor langsung dari Jepang',
    },
    {
      icon: Clock,
      title: 'Layanan Cepat',
      description: 'Hidangan disajikan fresh dan cepat dengan pelayanan yang ramah',
    },
    {
      icon: Heart,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap hidangan dibuat dengan penuh perhatian dan dedikasi untuk kepuasan Anda',
    },
  ];


  return (
    <div>
      <section className="hero bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Cita Rasa Jepang Autentik di Gerobak Sushi
            </h1>

            <p class="mt-4 text-base text-pretty text-white sm:text-lg/relaxed">
             Nikmati pengalaman kuliner Jepang terbaik 
             dengan sushi premium yang dibuat oleh chef berpengalaman
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded-3xl bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700/90"
                href="#"
              >
                Lihat Menu
              </a>

              <a
                className="inline-block rounded-3xl bg-white px-5 py-3 font-medium text-red-600 shadow-sm transition-colors hover:bg-gray-300/80"
                href="#"
              >
                Reservasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
         <h1 className="font-bold text-center pt-16 text-5xl text-black bg-white">Mengapa Memilih Kami?</h1>
         <p className="text-center pb-8 pt-3 max-w-2xl mx-auto font-bold text-pretty sm:text-lg/relaxed text-gray-500 bg-white">Komitmen kami adalah memberikan pengalaman kuliner Jepang terbaik untuk Anda</p>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white px-4 sm:px-6 lg:px-8">
          {features.map((features, index) => {
            const Icon = features.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{features.title}</h3>
                <p className="text-gray-600">{features.description}</p>
              </div>
            );
        })};
        </div>
   </div>
  );
};

export default Hero;
