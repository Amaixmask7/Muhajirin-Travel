# Al-Muhajirin Travel - Design Guidelines

## Design Approach
Islamic travel website with professional, trust-building design inspired by successful travel platforms (Airbnb structure, Booking.com functionality) with cultural authenticity for Indonesian Muslim pilgrims.

## Color Palette
- **Mint**: #A7D7C5 (Primary accent, CTA backgrounds, highlights)
- **Hijau Muted**: #5A8F7B (Headers, navigation, trust elements)
- **Cream**: #FFF2D7 (Backgrounds, card backgrounds, soft sections)
- **White**: #FFFFFF (Clean sections, card containers)
- **Text**: Dark gray/charcoal for readability on cream/white backgrounds

## Typography
- **Headings**: Clean, professional sans-serif (Inter, Poppins) - weights 600-700
- **Body**: Readable sans-serif - weight 400-500
- **Arabic elements**: Where appropriate, use complementary Arabic typography for authenticity
- **Hierarchy**: Large hero text (3xl-5xl), section headers (2xl-3xl), card titles (xl-2xl), body (base-lg)

## Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- **Container**: max-w-7xl for main content, max-w-6xl for text-heavy sections
- **Grid**: 3-4 columns for package cards (desktop), 2 columns (tablet), 1 column (mobile)

## Page-Specific Components

### Home Page
- **Hero Section**: Full-width image of Ka'bah or Madinah with overlay, centered headline "Wujudkan Impian Ibadah Umroh & Haji Anda", subtitle with value proposition, prominent CTA button with blurred background
- **Paket Promo Highlight**: 3-column grid showcasing featured packages with price badges, countdown timers for limited offers
- **Legalitas Section**: Display PPIU and PIHK certificates with official logos, verification badges
- **Testimoni Jamaah**: Card-based testimonials with photos, names, trip dates, star ratings
- **CTA Section**: Final conversion section with phone/WhatsApp buttons

### Paket Umroh Page
- **Filter Sidebar**: Collapsible filters for date range, hotel rating, airline, price range, departure city
- **Package Grid**: Cards showing thumbnail, destination, duration, starting price, departure date, slot availability (Open/Full/Waiting List), quick view button
- **Status Indicators**: Color-coded badges (green=open slots, orange=limited, red=full)

### Detail Paket Page
- **Hero Gallery**: Image carousel of hotels and destinations
- **Info Grid**: 2-column layout - left: itinerary day-by-day with icons, right: package details (hotel distance to Haram/Nabawi, airline, pricing tiers)
- **Facilities Section**: Icon grid showing included services (visa, baggage, tour guide, transportation)
- **CTA Sticky Bar**: Fixed bottom bar with price and "Daftar Sekarang" button

### Form Pendaftaran
- **Multi-step Form**: Progress indicator at top, sections for personal data, document upload (KTP/KK/Paspor), package selection, room type selection
- **Upload Areas**: Drag-and-drop zones with file preview
- **Summary Panel**: Sticky sidebar showing selected package, pricing breakdown, total cost

### Dashboard Jamaah
- **Status Card**: Large card showing registration status, payment progress, countdown to departure
- **Document Checklist**: List of required documents with completion status
- **Quick Actions**: Download invoice, view itinerary, contact support buttons

### Hubungi Kami Page
- **Contact Methods**: Large WhatsApp button with active status indicator, phone numbers, email
- **Map Section**: Embedded Google Maps with office location marker
- **Operating Hours**: Clear display with timezone, special holiday hours

### Tentang Kami Page
- **Company Story**: Timeline layout showing company history, achievements
- **Certificates Display**: Grid of official documents (PPIU, PIHK) with enlargeable images
- **Team Section**: Leadership photos with brief bios

## Component Library

### Cards
- **Package Card**: Rounded corners (rounded-xl), shadow-md, hover lift effect, image with gradient overlay, price badge in corner
- **Testimony Card**: White background, subtle border, profile photo, quote styling, rating stars
- **Feature Card**: Icon at top, centered text, minimal padding

### Buttons
- **Primary CTA**: Mint background, white text, rounded-lg, shadow hover effect, blurred background when on images
- **Secondary**: Outlined with Hijau Muted border, transparent background
- **WhatsApp**: Green with WhatsApp icon, direct click-to-chat

### Navigation
- **Header**: Hijau Muted background, white text, logo left, menu center, CTA button right
- **Mobile**: Hamburger menu with slide-in drawer

### Forms
- **Inputs**: Cream background, Hijau Muted border on focus, rounded-lg, adequate padding
- **Labels**: Above inputs, small text, slightly muted color

## Images
- **Hero Image**: Large, high-quality photo of Ka'bah or Masjid Nabawi with respectful composition
- **Package Thumbnails**: Hotel exteriors, prayer hall views, group photos of previous jamaah
- **Certificates**: High-resolution scans of official PPIU/PIHK documents
- **Testimonial Photos**: Authentic pilgrim photos (with permission)
- **Gallery**: Albums from previous trips showing airports, hotels, holy sites, group activities

## Trust Elements
- Official logo placements prominently
- Certificate numbers displayed clearly
- Real testimonials with full names and dates
- Countdown timers for urgency without pressure
- Clear pricing with no hidden fees
- Responsive customer service indicators (online status)

## Animations
- Minimal, purposeful only
- Smooth scroll to sections
- Hover lift on cards (subtle)
- Form validation feedback
- Page transitions (fade)