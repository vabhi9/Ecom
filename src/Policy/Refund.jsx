import PolicyPage from "./Policy";

const privacyContent = [
  {
    title: "1. Introduction",
    details: [
      "M Divine Creation Pvt. Ltd. is committed to ensuring customer satisfaction. Our Refund Policy outlines the terms under which returns, exchanges, and refunds are processed. By purchasing from our e-commerce platform, you agree to these terms.",
    ],
  },
  {
    title: "2. Eligiblility of Refunds",
    details: [
      "• Refunds are available for non-customized, non-personalized products.",
      "• Customized, personalized, or bulk corporate orders are not eligible for refunds unless they arrive damaged or defective.",
      "• Customers must request a refund within 7 days of receiving the order.",
    ],
  },
  {
    title: "3. Conditions for Refunds",
    details: [
      "• The item must be unused, in its original packaging, and include all accessories, invoices, and tags.",
      "•	If a product is defective or damaged, the customer must provide clear images or videos as proof.",
      "• Products with minor variations in color, size, or texture (common in corporate gifting) do not qualify for refunds.",
      "•	Shipping and handling charges are non-refundable unless the refund is due to an error on our part.",
    ],
  },
  {
    title: "4. Refund Request Process",
    details: [
      "• Email us at support@mdccorporategifting.com with the subject 'Refund Request - Order #[Order Number].'",
      "• Provide the order details, reason for refund, and proof (if applicable).",
      "• Wait for our team to verify and approve the refund request.",
      "• If approved, refunds will be processed within 7-10 business days.",
    ],
  },
  {
    title: "5. Refund Methods",
    details: [
      "• Refunds will be credited to the original payment method (credit/debit card, UPI, or net banking).",
      "• For COD orders, refunds will be processed via bank transfer after confirmation of bank details.",
      "• Customers may opt for a store credit for future purchases.",
    ],
  },
  {
    title: "6. Exchange & Replacement Policy",
    details: [
      "• If a product is received in a damaged condition, we offer a free replacement.",
      "• Exchanges are available for products of equal or higher value, subject to stock availability.",
    ],
  },
  {
    title: "7. Non-Refundable Items",
    details: [
      "•	Custom-printed or engraved products.",
      "•	Personalized or corporate bulk orders.",
      "•	Digital products, gift cards, or subscription-based services.",
      "•	Items purchased during promotional sales (unless defective upon delivery).",
    ],
  },
  {
    title: "8. Contact Information",
    details: [
      "For refund-related queries, contact support@mdccorporategifting.com or call +91 XXXXX XXXXX during business hours.",
    ],
  },
];

const Refund = () => {
  return <PolicyPage title="Refund Policy" content={privacyContent} />;
};

export default Refund;
