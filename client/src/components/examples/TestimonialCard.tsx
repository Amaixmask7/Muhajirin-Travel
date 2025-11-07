import TestimonialCard from '../TestimonialCard';
import avatar from '@assets/generated_images/Indonesian_Muslim_woman_portrait_1fd11be7.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        name="Siti Aminah"
        tripDate="Umroh Februari 2024"
        rating={5}
        comment="Alhamdulillah, pengalaman umroh bersama Al-Muhajirin Travel sangat menyenangkan. Pelayanan ramah, hotel nyaman dekat dengan Masjidil Haram, dan pembimbing yang sangat membantu. Terima kasih!"
        photoUrl={avatar}
      />
    </div>
  );
}
