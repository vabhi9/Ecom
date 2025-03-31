import React from "react";
import PolicyPage from "./Policy";

const privacyContent = [
  {
    title: "1. Introduction",
    details: [
      "Welcome to M Divine Creation Pvt. Ltd. These Terms & Conditions govern your use of our e-commerce platform. By accessing our website and purchasing from us, you agree to be bound by these terms.",
    ],
  },
  {
    title: "2. Products & Services",
    details: [
      "•	We specialize in corporate gifting solutions, offering customizable and non-customizable products.",
      `• All product descriptions and images are for representational purposes only. Actual products may vary slightly due to material differences.`,
    ],
  },
  {
    title: "3. Ordering & Payments",
    details: [
      "•	Orders are confirmed only upon successful payment.",
      "•	We accept credit/debit cards, UPI, net banking, and COD (select locations only).",
      "•	Bulk orders require an advance payment of 50%, with the balance due before dispatch.",
      "•	Prices are subject to change without prior notice.",
    ],
  },
  {
    title: "4. Shipping & Delivery",
    details: [
      "•	Orders are dispatched within 3-5 business days and typically delivered within 5-10 business days.",
      "•	Delays caused by courier services, unforeseen circumstances, or force majeure events are not our responsibility.",
      "•	Customers must provide an accurate shipping address. Incorrect addresses leading to delivery failures are the buyer’s responsibility.",
    ],
  },
  {
    title: "5. Returns & Refunds",
    details: [
      "•	Refer to our Refund Policy for details.",
      "•	Customers are responsible for return shipping costs unless the return is due to an error on our part.",
    ],
  },
  {
    title: "6. Intellectual Property",
    details: [
      "•	All content, images, logos, and branding elements on our website are the property of M Divine Creation Pvt. Ltd.",
      "•	Unauthorized use, reproduction, or modification is strictly prohibited.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    details: [
      "•	M Divine Creation shall not be liable for indirect, incidental, or consequential damages arising from product usage.",
      "•	Our total liability shall not exceed the total amount paid by the customer for the purchase.",
    ],
  },
  {
    title: "8. Account Termination",
    details: [
      "•	We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activities.",
    ],
  },
  {
    title: "9. Governing Law",
    details: [
      "•	These Terms & Conditions are governed by Indian law, and any disputes shall be settled in the courts of Gurgaon, Haryana.",
    ],
  },
];

const TermsCons = () => {
  return <PolicyPage title={"Terms & Conditions"} content={privacyContent} />;
};

export default TermsCons;
