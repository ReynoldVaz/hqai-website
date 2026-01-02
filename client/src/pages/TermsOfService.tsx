import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: December 2025</p>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using services provided by HQAI Technologies ("Company," "we," "us," or "our"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
            <p>
              HQAI Technologies provides AI-driven solutions including but not limited to MenuVerse, custom LLM 
              integrations, and business process automation tools. Our services are designed to empower businesses 
              with intelligent automation and digital transformation solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to interfere with, compromise, or disrupt our services or systems</li>
              <li>Not use our services to transmit any harmful, threatening, or inappropriate content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property Rights</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to software, 
              text, designs, graphics, logos, and trademarks, are the exclusive property of HQAI Technologies 
              and are protected by Indian and international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, HQAI Technologies shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
              resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Modifications to Services and Terms</h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, our services (or any part 
              thereof) with or without notice. We also reserve the right to update these Terms of Service at any time. 
              Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to 
              its conflict of law provisions. Any disputes arising out of or relating to these Terms or our services 
              shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Dispute Resolution</h2>
            <p>
              In the event of any dispute, claim, or controversy arising out of or relating to these Terms or our 
              services, the parties agree to first attempt to resolve the dispute through good faith negotiations. 
              If the dispute cannot be resolved through negotiation within 30 days, either party may pursue resolution 
              through the appropriate legal channels in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:admin@hqai.site" className="text-white hover:underline">
                admin@hqai.site
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
