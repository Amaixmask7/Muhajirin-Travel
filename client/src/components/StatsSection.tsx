import { Users, Award, MapPin, CheckCircle } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Jamaah Terlayani",
    },
    {
      icon: Award,
      value: "10+",
      label: "Tahun Pengalaman",
    },
    {
      icon: MapPin,
      value: "100+",
      label: "Paket Berangkat",
    },
    {
      icon: CheckCircle,
      value: "99%",
      label: "Kepuasan Jamaah",
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
