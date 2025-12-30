import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We are using MemStorage, so these tables are just for type definitions compatibility
// effectively acting as our "Mock Data" schema

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'SaaS', 'Concept', 'Platform'
  image: text("image").notNull(),
  link: text("link"),
  isLive: boolean("is_live").default(false),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  location: text("location").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
});

// Schemas
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });

// Types
export type Product = typeof products.$inferSelect;
export type Service = typeof services.$inferSelect;
export type Event = typeof events.$inferSelect;
