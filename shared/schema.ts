import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const packages = pgTable("packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  destination: text("destination").notNull(),
  duration: integer("duration").notNull(),
  departureDate: text("departure_date").notNull(),
  airline: text("airline").notNull(),
  hotelMecca: text("hotel_mecca").notNull(),
  hotelMadinah: text("hotel_madinah").notNull(),
  distanceHaram: text("distance_haram").notNull(),
  distanceNabawi: text("distance_nabawi").notNull(),
  priceQuad: integer("price_quad").notNull(),
  priceTriple: integer("price_triple").notNull(),
  priceDouble: integer("price_double").notNull(),
  availableSlots: integer("available_slots").notNull(),
  totalSlots: integer("total_slots").notNull(),
  status: text("status").notNull(),
  itinerary: text("itinerary").notNull(),
  facilities: text("facilities").notNull(),
  imageUrl: text("image_url"),
});

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  packageId: varchar("package_id").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  passportName: text("passport_name").notNull(),
  roomType: text("room_type").notNull(),
  ktpUrl: text("ktp_url"),
  kkUrl: text("kk_url"),
  passportUrl: text("passport_url"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  tripDate: text("trip_date").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  photoUrl: text("photo_url"),
});

export const insertPackageSchema = createInsertSchema(packages).omit({
  id: true,
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
  status: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type Package = typeof packages.$inferSelect;

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
