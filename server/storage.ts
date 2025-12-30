import { users, type User, type InsertUser, type Product, type Service, type Event } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // HQAI Data
  getProducts(): Promise<Product[]>;
  getServices(): Promise<Service[]>;
  getEvents(): Promise<Event[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Product[];
  private services: Service[];
  private events: Event[];
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;

    // Seed Mock Data
    this.products = [
      {
        id: 1,
        title: "MenuVerse",
        description: "AI-powered smart restaurant menu that adapts to customer preferences in real-time.",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1550963300-d4769ad1082d?auto=format&fit=crop&q=80&w=800",
        link: "#",
        isLive: true
      },
      {
        id: 2,
        title: "Event Management Platform",
        description: "A unified platform connecting bartenders, caterers, and venues for seamless event orchestration.",
        category: "Platform",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800",
        link: "#",
        isLive: true
      },
      {
        id: 3,
        title: "Unified Menu Database",
        description: "A centralized repository concept for restaurant menus, enabling cross-platform integration.",
        category: "Concept",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
        link: "#",
        isLive: false
      },
      {
        id: 4,
        title: "What’s Happening in Goa",
        description: "The ultimate live events discovery platform for tourists and locals in Goa.",
        category: "Platform",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
        link: "#",
        isLive: true
      }
    ];

    this.services = [
      { id: 1, title: "Custom AI Solutions", description: "Tailored artificial intelligence models to automate and optimize your business processes.", icon: "Brain" },
      { id: 2, title: "Custom Websites", description: "Stunning, high-performance websites built with modern technologies like React and Next.js.", icon: "Monitor" },
      { id: 3, title: "Web Applications", description: "Scalable, robust web applications designed for speed and user experience.", icon: "Layout" },
      { id: 4, title: "AI Automation", description: "Streamline workflows with intelligent automation bots and scripts.", icon: "Bot" },
      { id: 5, title: "MVP Development", description: "Rapid prototyping and development to get your product to market faster.", icon: "Rocket" }
    ];

    this.events = [
      {
        id: 1,
        title: "Techno Night",
        date: "2024-06-15",
        location: "SOHO, Goa",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
        category: "Party"
      },
      {
        id: 2,
        title: "Sunset Jazz",
        date: "2024-06-16",
        location: "Purple Martini",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800",
        category: "Music"
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.toString();
    this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getEvents(): Promise<Event[]> {
    return this.events;
  }
}

export const storage = new MemStorage();
