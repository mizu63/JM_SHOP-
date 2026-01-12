import React from 'react';

function About() {
  return (
    <section className="bg-gray-50 py-16 pt-[130px]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold">JMSHOP</span>, your
          trusted destination for [product type]. We are committed to providing
          the very best of [products], focusing on quality, innovation, and
          exceptional customer service.
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To make shopping for [product type] seamless, enjoyable, and
                reliable for everyone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the most customer-centric e-commerce store, where you
                can find everything you need with confidence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Why Choose Us?
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Curated, high-quality products</li>
                <li>Secure and easy shopping experience</li>
                <li>Fast shipping & hassle-free returns</li>
                <li>A team that genuinely cares about your satisfaction</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="About us"
              className="rounded-xl shadow-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-600 text-center mt-12 text-lg">
          Thank you for visiting{' '}
          <span className="font-semibold">JMSHOP</span>. We hope you
          enjoy our products as much as we enjoy offering them to you!
        </p>
      </div>
    </section>
  );
}

export default About;
