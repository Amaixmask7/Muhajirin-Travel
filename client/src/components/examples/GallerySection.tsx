import GallerySection from '../GallerySection';
import img1 from '@assets/generated_images/Pilgrims_selfie_Kaaba_8730a78a.png';
import img2 from '@assets/generated_images/Pilgrims_Mount_Uhud_9ca43e51.png';
import img3 from '@assets/generated_images/Iftar_family_meal_4fab22e1.png';
import img4 from '@assets/generated_images/Souq_market_shopping_450744ec.png';

export default function GallerySectionExample() {
  const images = [
    { url: img1, title: "Di depan Ka'bah", category: "Makkah" },
    { url: img2, title: "Ziarah Gunung Uhud", category: "Madinah" },
    { url: img3, title: "Buka Puasa Bersama", category: "Kegiatan" },
    { url: img4, title: "Belanja di Souq", category: "Kegiatan" },
  ];

  return <GallerySection images={images} />;
}
