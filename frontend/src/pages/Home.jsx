import React, { useState } from "react";
import { Link } from 'react-router-dom';

/**
 * FAQItem Component
 * A collapsible FAQ item for question and answer.
 */
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg font-semibold text-gray-800 flex justify-between items-center"
      >
        {question}
        <span className="ml-2 text-gray-500">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

/**
 * FAQ Data
 * An array of questions and answers for the FAQ section.
 */
const faqData = [
  { question: "What is MentalHealth?", answer: "MentalHealth is a platform dedicated to supporting individuals with their mental well-being through tools, resources, and peer support." },
  { question: "Is the platform free to use?", answer: "Yes, MentalHealth is completely free and accessible to everyone, 24/7." },
  { question: "How is my privacy protected?", answer: "We use a privacy-first approach, ensuring that your data is secure and never shared without your consent." },
  { question: "Can I track my progress?", answer: "Yes, you can set personal goals and track your wellness progress over time." },
  { question: "How can I connect with others?", answer: "You can join anonymous group chats to connect with others and receive peer support in a safe space." }
];

/**
 * Home Component
 * The main layout of the Home page.
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="welcome"
        className="bg-gradient-to-r from-blue-700 via-teal-500 to-green-400 text-white py-20 px-4 w-full min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">MentalHealth</span>
            </h1>
            <p className="text-lg mb-6">
              Your trusted partner for mental well-being. Explore tools, resources, and support designed to help you build resilience, find balance, and lead a healthier life. Whether you're just starting your journey or looking for ongoing support, we're here to help.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link to="/get-started" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300">
                Get Started
              </Link>
              <Link to="/learn-more" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="src/assets/hero.webp" alt="Hero" className="w-80 h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className="bg-blue-50 text-gray-800 py-16 px-4 w-full min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-10">
            At MentalHealth, we believe in making mental health resources accessible and supportive for all vulnerable young men between the ages of 18-26. We’re here to support you with resources, guidance, and a community that you can engage with to ensure your mental health recovery.
          </p>
          <p className="text-lg mb-10 font-bold text-left">
            A brief list of features that our platform provides:
          </p>
          <ul className="text-left list-disc list-inside space-y-4 text-gray-700">
            <li>Monitor your mood and gain valuable insights into your mental well-being.</li>
            <li>Set personalized goals and track your progress with ease.</li>
            <li>Join safe, anonymous group chats for peer-to-peer support.</li>
            <li>Access a library of articles, tips, and self-care resources.</li>
            <li>Benefit from robust privacy features that keep your data secure.</li>
            <li>Enjoy free 24/7 tools and resources tailored to your needs.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-orange-50 text-gray-800 py-16 px-4 w-full min-h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg mb-10">
            Have questions? We're here to provide clarity. Below are some of the most common questions about MentalHealth.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
  id="community"
  className="bg-gradient-to-b from-teal-100 to-gray-50 text-gray-800 py-16 px-4 w-full"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
    <p className="text-lg mb-10">
      Be part of a supportive network focused on mental health and well-being. Share your journey, inspire others, and grow together in a positive environment.
    </p>
    <Link to="/support">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500">
        Join Now
      </button>
    </Link>
  </div>
</section>
</div>
  );
};

export default Home;
