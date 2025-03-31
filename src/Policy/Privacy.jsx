import PolicyPage from "./Policy";

const privacyContent = [
  {
    title: "1. Introduction",
    details: [
      "At M Divine Creation Pvt. Ltd., we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.",
    ],
  },
  {
    title: "2. Information We Collect",
    details: [
      "• Personal Data: Name, email, phone number, billing/shipping address.",
      "• Payment Information: Securely processed via third-party payment gateways; we do not store payment details.",
      "• Browsing Data: IP address, cookies, and site interaction data.",
    ],
  },
  {
    title: "3. How We Use Your Data",
    details: [
      "• To process and deliver orders.",
      "• To send promotional emails and updates (opt-out available).",
      "• To improve website performance and customer experience through analytics.",
      "• To comply with legal and regulatory requirements.",
    ],
  },
  {
    title: "4. Data Security",
    details: [
      "• We implement industry-standard encryption and security measures to protect user data.",
      "• Personal data is stored securely and is not shared with unauthorized third parties.",
    ],
  },
  {
    title: "5. Third-Party Services",
    details: [
      "• We may use third-party logistics and payment providers.",
      "• These services have their own privacy policies.",
      "• We do not sell, rent, or trade customer information to third parties for marketing.",
    ],
  },
  {
    title: "6. Cookies & Tracking Technologies",
    details: [
      "• Our website uses cookies to improve user experience.",
      "• Users can disable cookies through browser settings, but this may affect site functionality.",
    ],
  },
  {
    title: "7. Your Rights",
    details: [
      "• You have the right to access, update, or delete your personal data.",
      "• To request data changes, contact support@mdccorporategifting.com.",
    ],
  },
  {
    title: "8. Updates to Privacy Policy",
    details: [
      "• We may update this Privacy Policy periodically.",
      "• Any changes will be posted on our website.",
    ],
  },
  {
    title: "9. Contact Information",
    details: [
      "For privacy-related concerns, email us at support@mdccorporategifting.com.",
    ],
  },
];

const Privacy = () => {
  return <PolicyPage title="Privacy Policy" content={privacyContent} />;
};

export default Privacy;
