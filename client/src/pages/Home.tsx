import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { useProducts, useServices, useContact } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { handleSmoothScroll } from "@/lib/scroll-utils";
import { useEffect } from "react";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const { data: products } = useProducts();
  const { data: services } = useServices();
  const { mutateAsync: submitContact, isPending } = useContact();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Scroll instantly without smooth behavior to avoid the jump
          element.scrollIntoView({ behavior: "auto" });
        }
      });
    }
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContact(data);
      toast({
        title: "Message sent",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-white/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-white/5 text-white/70 border border-white/10 backdrop-blur-sm">
              The Future of AI
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl font-display text-white">
              HQAI Technologies <br />
              {/* <span className="text-gradient">Custom AI Solutions.</span> */}
            </h1>
            {/* <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              We build high-quality, high-performance digital products for the next generation of businesses. Minimalist design, maximalist impact.
            </p> */}
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
              Empowering Businesses with Intelligent AI Solutions
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                onClick={(e) => handleSmoothScroll(e, "#products")}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-xl bg-white text-black hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                data-testid="button-view-work"
              >
                View Our Work
              </a>
              {/* <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                data-testid="button-contact-us"
              >
                Contact Us
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative flex min-h-[50vh] items-center justify-center py-5 md:py-20 border-t border-white/5 bg-background/50 overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Why HQAI Technologies?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In a world of noise, we prioritize clarity. At HQAI Technologies, our mission is to deliver AI-driven solutions and bespoke software integrations that are not just functional, but exceptional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine advanced AI technology with premium design aesthetics to create products that stand out through performance and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative flex min-h-[50vh] items-center justify-center py-5 md:py-20 overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6">Current Projects</h2>
            <p className="text-muted-foreground text-lg">
              Currently developing proprietary AI-driven communication tools and bespoke enterprise integrations. Project details available upon request.
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products?.map((product, index) => (
              <ProductCard
                key={product.id}
                index={index}
                {...product}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-24 md:py-32 border-t border-white/5 bg-background/50">
        <div className="container px-4 md:px-6">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl mb-6">Services</h2>
            <p className="text-muted-foreground text-lg">
              From concept to deployment, we handle the complexity so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services?.map((service, index) => (
              <ServiceCard
                key={service.id}
                index={index}
                {...service}
                iconName={service.icon}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-white/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl mb-4">Start a Project</h2>
              <p className="text-muted-foreground">
                Ready to transform your ideas into reality? Let's talk.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus-visible:ring-white/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          {...field} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus-visible:ring-white/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          {...field} 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[120px] rounded-xl focus-visible:ring-white/20 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 rounded-xl bg-white text-black hover:bg-white/90 font-semibold text-base transition-all"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
