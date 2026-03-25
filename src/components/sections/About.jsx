import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1730324772289-b00b3cfbd374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGNoZWYlMjBwcmVwYXJpbmd8ZW58MXx8fHwxNzc0MjAzMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sushi Chef"
                className="w-full h-full object-cover"
              ></img>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang Gerobal Sushi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sejak tahun 2010, Gerobal Sushi telah menjadi destinasi favorit
                para pecinta kuliner Jepang di Indonesia. Kami berkomitmen untuk
                menghadirkan pengalaman makan sushi yang autentik dengan
                menggunakan teknik tradisional Jepang yang telah diwariskan
                turun-temurun.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Chef kami yang berpengalaman lebih dari 15 tahun dalam seni
                membuat sushi, memastikan setiap hidangan dibuat dengan presisi
                dan dedikasi. Kami hanya menggunakan bahan-bahan segar
                berkualitas premium, termasuk ikan yang diimpor langsung dari
                pasar ikan Tsukiji, Tokyo.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Di Gerobal Sushi, kami percaya bahwa makanan bukan hanya tentang
                rasa, tetapi juga tentang pengalaman dan kenangan. Itulah
                mengapa kami menciptakan suasana yang nyaman dan elegan untuk
                setiap tamu kami.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Menu Pilihan</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    10k+
                  </div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
              </div>

              <a
                href="#reservasi"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                Reservasi Meja
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
