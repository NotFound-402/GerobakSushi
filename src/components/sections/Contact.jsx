import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami siap melayani Anda. Hubungi kami atau kunjungi restoran kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Sudirman No. 123
                  <br />
                  Jakarta Pusat, 10220
                  <br />
                  Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Telepon</h3>
                <p className="text-gray-600">
                  +62 21 1234 5678
                  <br />
                  +62 812 3456 7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Email</h3>
                <p className="text-gray-600">
                  info@gerobalsushi.com
                  <br />
                  reservasi@gerobalsushi.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Jam Operasional</h3>
                <p className="text-gray-600">
                  Senin - Jumat: 11:00 - 22:00
                  <br />
                  Sabtu - Minggu: 10:00 - 23:00
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div id="reservasi" className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-black">Form Reservasi</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Waktu
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-2">
                  Jumlah Tamu
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option>1 Orang</option>
                  <option>2 Orang</option>
                  <option>3 Orang</option>
                  <option>4 Orang</option>
                  <option>5+ Orang</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan Khusus (Opsional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Permintaan khusus atau alergi makanan..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Kirim Reservasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
