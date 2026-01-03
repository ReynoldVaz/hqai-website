import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Navigation />

            <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy for HQAI Technologies</h1>
                <p className="text-muted-foreground mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction & Data Fiduciary Identity</h2>
                        <p className="mb-4">
                            HQAI Technologies ("we","us," or "our") acts as a Data Fiduciary under the Digital Personal Data Protection (DPDP) Act, 2023, and the DPDP Rules, 2025. We are committed to processing personal data in a lawful, fair, and transparent manner, in accordance with applicable Indian laws.
                        </p>
                        <p>
                            Our services are intended for professional and business use only and are not directed at individuals under the age of 18.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collection & Purpose</h2>
                        <p className="mb-4">
                            We collect only such personal data as is necessary to provide bespoke AI solutions, software platforms, and related integrations. This may include:
                        </p>
                        <p className="mb-4">
                            <strong>Identity Data:</strong> Names and phone numbers provided for service inquiries, onboarding, or through product-specific interfaces.
                        </p>
                        <p className="mb-4">
                            <strong>Technical Identifiers:</strong> IP addresses, device identifiers, and usage logs collected to ensure platform security, prevent fraud, and maintain service integrity.
                        </p>
                        <p className="mb-4">
                            <strong>Communication Logs:</strong> Communication metadata (such as timestamps and delivery status) from interactions via the WhatsApp Business API, excluding message content where not required for service delivery.
                        </p>
                        <p className="mb-2">
                            <strong>Lawful Basis of Processing:</strong>
                        </p>
                        <p>
                            Personal data is processed on the basis of explicit user consent, contractual necessity, and legitimate business purposes, as permitted under the DPDP Act, 2023, and the DPDP Rules, 2025.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Product-Specific WhatsApp Opt-in</h2>
                        <p className="mb-4">
                            HQAI Technologies follows a meaningful consent model and does not engage in unsolicited communications.
                        </p>
                        <p>
                            WhatsApp communication is initiated only after a user provides a clear, affirmative opt-in within a specific product or service interface. Consent is purpose-specific, such as for receiving product updates, service notifications, or customer support communications, and is not reused for unrelated purposes.We comply with Meta’s WhatsApp Business Messaging Policies at all times.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. User Rights (Data Principal Rights)</h2>
                        <p className="mb-4">
                            In accordance with applicable Indian law, you have the following rights:
                        </p>
                        <p className="mb-4">
                            <strong>Right to Access & Correction:</strong> Request access to your personal data or correct inaccuracies.
                        </p>
                        <p className="mb-4">
                            <strong>Right to Erasure:</strong> Request deletion of personal data when it is no longer required for the purpose for which it was collected.
                        </p>
                        <p className="mb-4">
                            <strong>Right to Withdraw Consent (Opt-out):</strong> You may opt out of WhatsApp communications at any time by replying "STOP".
                        </p>
                        <p>
                            Opt-out requests and associated data removals are processed within 24 hours, with confirmation provided where applicable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security, Processors & Retention Protocols</h2>
                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Security Measures</h3>
                        <p className="mb-4">
                            All WhatsApp Business API communications are protected using end-to-end encryption.
                        </p>
                        <p className="mb-4">
                            Appropriate technical and organizational safeguards are implemented to prevent unauthorized access, loss, or misuse of data.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Use of Data Processors</h3>
                        <p className="mb-4">
                            We may engage trusted third-party data processors (such as cloud infrastructure providers or communication service providers) strictly for service delivery and operational purposes. Such processors operate under contractual confidentiality, security, and data-protection obligations.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Data Retention</h3>
                        <p className="mb-4">
                            Personal data is retained only for the duration necessary to fulfill the intended service purpose. Technical logs are retained for one-year period to ensure system security and regulatory compliance.
                        </p>
                        {/* <p className="mb-4">
                            Technical and security logs are retained for a mandatory period of one (1) year for audit and security compliance, after which they are securely erased or anonymized.
                        </p> */}

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">No Sale of Personal Data</h3>
                        <p>
                            HQAI Technologies does not sell, rent, trade, or share personal data with third parties for behavioral advertising or targeted marketing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Cross-Border Data Processing</h2>
                        <p>
                            Where personal data is processed or stored outside India, HQAI Technologies ensures compliance with applicable DPDP cross-border transfer requirements and implements equivalent data-protection safeguards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. AI Accuracy & Algorithmic Transparency</h2>
                        <p>
                            Our AI-driven solutions utilize probabilistic and machine-learning-based models. While we maintain high standards of quality and accuracy, AI-generated outputs may occasionally contain factual inaccuracies. Users are encouraged to independently verify critical or decision-impacting outputs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law & Grievance Redressal</h2>
                        <p className="mb-4">
                            HQAI Technologies is a registered proprietorship firm in India. This Privacy Policy is governed by the laws of India, with exclusive jurisdiction vested in the competent local courts.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Grievance Officer</h3>
                        <p className="mb-4">
                            For privacy-related concerns, data access requests, erasure requests, or reporting data breaches, please contact:
                        </p>
                        <p className="mb-2">
                            <strong>Grievance Officer – Data Protection</strong>
                        </p>
                        <p className="mb-2">
                            Email: <a href="mailto:admin@hqai.site" className="text-white hover:underline">admin@hqai.site</a>
                        </p>
                        <p className="mb-4">
                            <strong>Registered Office Address:</strong> H.NO 149/1 Macklem Macasana Salcete Goa 403709
                        </p>
                        <p>
                            All grievances will be acknowledged and resolved within the timelines prescribed under applicable law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Policy Updates</h2>
                        <p>
                            This Privacy Policy may be updated periodically to reflect changes in legal, regulatory, or operational requirements. Updates will be published on our website, and continued use of our services constitutes acceptance of the revised policy.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
