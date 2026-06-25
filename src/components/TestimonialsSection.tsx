import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Dwarka Sector 10",
    service: "Monthly Package",
    content:
      "Absolutely delighted with the service! The car looked brand new after the wash. Their attention to detail and doorstep convenience made the entire experience seamless. Highly recommended!",
    rating: 5,
    date: "March 2025",
    initials: "PS",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Aayush Roy",
    location: "Uttam Nagar",
    service: "Car Wash & Care",
    content:
      "Very professional and punctual team. They arrived on time and did a thorough job without cutting corners. Great value for money and hassle-free experience. Will definitely book again.",
    rating: 5,
    date: "February 2025",
    initials: "AR",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Ananya Verma",
    location: "Janakpuri",
    service: "Complete Car Care",
    content:
      "Consistently amazing service! I've been using CleanCruisers for a few months now and my car has never looked better. Their team is polite, efficient, and very reliable.",
    rating: 5,
    date: "March 2025",
    initials: "AV",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Manish Kumar",
    location: "Rajouri Garden",
    service: "Interior Dry Cleaning",
    content:
      "My SUV was a mess after the monsoon. CleanCruisers did an incredible interior dry clean – seats, carpets, dashboard – all spotless. Worth every rupee!",
    rating: 5,
    date: "January 2025",
    initials: "RM",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Kunal Garg",
    location: "Paschim Vihar",
    service: "Rubbing & Waxing",
    content:
      "I was skeptical about at-home car wash but CleanCruisers changed my mind completely. Professional equipment, trained staff and the paint shine after rubbing & waxing is outstanding.",
    rating: 5,
    date: "February 2025",
    initials: "SK",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Vikram Singh",
    location: "Najafgarh",
    service: "Monthly Package",
    content:
      "Finally a service that comes to me! The monthly package is great value. My Honda City stays clean throughout the month. Booking is easy and the team is always on time.",
    rating: 5,
    date: "March 2025",
    initials: "VS",
    color: "from-teal-500 to-teal-600",
  },
];

const stats = [
  { value: "1000+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "3+", label: "Years of Service" },
  { value: "15+", label: "Areas Covered" },
];

const TestimonialsSection = () => (
  <section
    className="py-16 md:py-24 px-4 md:px-6"
    style={{ backgroundColor: "#0b0f10" }}
  >
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
          ⭐ Customer Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Real reviews from real customers across West Delhi. We take pride in
          every car we clean.
        </p>
        <div className="w-20 h-1 bg-green-400 mx-auto mt-4"></div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 bg-gray-900/60 rounded-2xl border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-green-400">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className="bg-gray-800/70 border-gray-700/50 hover:border-green-400/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-green-400/5">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Top: Avatar + Name + Rating */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      📍 {testimonial.location}
                    </p>
                    <div className="flex mt-1.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-green-400 fill-green-400"
                        />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-green-400/30 flex-shrink-0 mt-1" />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed text-sm flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Bottom: Service + Date */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
                  <span className="text-xs bg-green-400/10 text-green-400 px-2.5 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-600">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-gray-500 text-sm">
          Verified reviews from our customers.{" "}
          <a
            href="https://wa.me/918920230357"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline font-medium"
          >
            Share your experience
          </a>{" "}
          and get 10% off your next wash!
        </p>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
