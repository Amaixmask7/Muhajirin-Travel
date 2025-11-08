import TestimonialCarousel from '../TestimonialCarousel';
import avatar1 from '@assets/generated_images/Indonesian_Muslim_woman_portrait_1fd11be7.png';
import avatar2 from '@assets/generated_images/Indonesian_Muslim_man_portrait_446fc646.png';
import avatar3 from '@assets/generated_images/Indonesian_Muslim_couple_portrait_102ce6cb.png';

export default function TestimonialCarouselExample() {
  const testimonials = [
    {
      name: "Siti Aminah",
      tripDate: "Umroh Februari 2024",
      rating: 5,
      comment: "Alhamdulillah, pengalaman umroh bersama Al-Muhajirin Travel sangat menyenangkan. Pelayanan ramah, hotel nyaman dekat dengan Masjidil Haram.",
      photoUrl: avatar1,
    },
    {
      name: "Ahmad Hidayat",
      tripDate: "Umroh Januari 2024",
      rating: 5,
      comment: "Sangat puas dengan pelayanan Al-Muhajirin Travel. Semua terorganisir dengan baik, dari pengurusan visa sampai bimbingan ibadah.",
      photoUrl: avatar2,
    },
    {
      name: "Putri & Rizki",
      tripDate: "Umroh Desember 2023",
      rating: 5,
      comment: "Umroh pertama kami sangat berkesan. Tim Al-Muhajirin sangat membantu dan sabar mengajari kami tata cara ibadah.",
      photoUrl: avatar3,
    },
  ];

  return (
    <div className="p-8">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}
