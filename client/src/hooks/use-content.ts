import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type Product, type Service, type Event } from "@shared/routes";

// MOCK DATA for static implementation as requested, but structured via hooks
// This ensures easy swap to real API later

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "MenuVerse",
    description: "AI-powered smart restaurant menu that adapts to customer preferences and inventory in real-time.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=800",
    link: "#",
    // link: "https://smartaimenu.hqai.site",
    isLive: true
  },
  // {
  //   id: 2,
  //   title: "Event Management Platform",
  //   description: "A unified ecosystem connecting bartenders, caterers, and venues for seamless event execution.",
  //   category: "Platform",
  //   image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  //   link: "#",
  //   isLive: true
  // },
  // {
  //   id: 3,
  //   title: "Unified Restaurant Database",
  //   description: "Frontend concept for a centralized culinary data repository serving multiple delivery networks.",
  //   category: "Concept",
  //   image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  //   link: "#",
  //   isLive: false
  // },
  // {
  //   id: 4,
  //   title: "What’s Happening in Goa",
  //   description: "The ultimate live events discovery platform for tourists and locals in Goa.",
  //   category: "Platform",
  //   image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800",
  //   link: "#",
  //   isLive: true
  // }
];

const MOCK_SERVICES = [
  {
    id: 1,
    title: "Custom AI Solutions",
    description: "Bespoke artificial intelligence integration for enterprise workflows.",
    icon: "Brain"
  },
  // {
  //   id: 2,
  //   title: "High-Performance Web Apps",
  //   description: "Blazing fast, SEO-optimized web applications built with modern frameworks.",
  //   icon: "Zap"
  // },
  // {
  //   id: 3,
  //   title: "MVP Development",
  //   description: "Rapid prototyping and development to get your product to market fast.",
  //   icon: "Rocket"
  // },
  // {
  //   id: 4,
  //   title: "AI Automation",
  //   description: "Streamline operations with intelligent automation agents.",
  //   icon: "Bot"
  // }
];

export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      // Simulating API call for now to respect "frontend-only" vibe but keeping structure
      // const res = await fetch(api.products.list.path);
      // return await res.json();
      return MOCK_PRODUCTS;
    },
  });
}

export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      return MOCK_SERVICES;
    },
  });
}

export function useContact() {
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string; service?: string }) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", data);
      return { success: true };
    }
  });
}
