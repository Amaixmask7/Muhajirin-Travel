import PackageCard from '../PackageCard';
import hotelImage from '@assets/generated_images/Luxury_Mecca_hotel_room_f42f9135.png';

export default function PackageCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PackageCard
        id="1"
        name="Paket Umroh Ramadhan Premium"
        destination="Makkah - Madinah"
        duration={12}
        departureDate="15 Maret 2024"
        airline="Garuda Indonesia"
        priceQuad={28500000}
        availableSlots={15}
        totalSlots={40}
        status="open"
        imageUrl={hotelImage}
      />
    </div>
  );
}
