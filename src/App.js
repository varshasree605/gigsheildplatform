import React from "react";
import { Shield, CloudRain, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans">
      
      {/* Header */}
      <header className="bg-blue-900 text-white p-5 text-center">
        <h1 className="text-3xl font-bold">GigShield</h1>
        <p className="text-sm">Smart Income Protection for Delivery Partners</p>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Protect Your Daily Earnings
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          AI-powered protection for gig workers affected by weather,
          pollution, and unexpected disruptions.
        </p>
        <button className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600">
          Get Started
        </button>
      </section>

      {/* Problem */}
      <section className="py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Delivery partners lose income due to rain, extreme heat, pollution,
          and natural disruptions. There is no safety net for their daily earnings.
        </p>
      </section>

      {/* Solution */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          GigShield uses AI to predict risks and provide instant financial
          protection when disruptions impact gig workers.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-10">Key Features</h2>

        <div className="flex flex-wrap justify-center gap-6">
          
          <div className="bg-white shadow-lg p-6 rounded-xl w-72">
            <CloudRain className="mx-auto mb-4 text-blue-500" size={40} />
            <h3 className="font-semibold text-lg">AI Predictions</h3>
            <p className="text-gray-600 text-sm mt-2">
              Forecast income loss using weather and real-time data.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl w-72">
            <Zap className="mx-auto mb-4 text-yellow-500" size={40} />
            <h3 className="font-semibold text-lg">Instant Payout</h3>
            <p className="text-gray-600 text-sm mt-2">
              Automatic compensation during disruptions.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl w-72">
            <Shield className="mx-auto mb-4 text-green-500" size={40} />
            <h3 className="font-semibold text-lg">Affordable Plans</h3>
            <p className="text-gray-600 text-sm mt-2">
              Low-cost protection tailored for gig workers.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Protecting Your Income Today
        </h2>
        <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">
          Join GigShield
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2026 GigShield | Built for Gig Economy Workers</p>
      </footer>
    </div>
  );
}