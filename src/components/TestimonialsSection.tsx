import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    content:
      "Absolutely delighted with the service! The car looked brand new after the wash. Their attention to detail and doorstep convenience made the entire experience seamless. Highly recommended!",
  },
  {
    name: "Aayush Roy",
    content:
      "Very professional and punctual team. They arrived on time and did a thorough job without cutting corners. Great value for money and hassle-free experience. Will definitely book again.",
  },
  {
    name: "Ananya Verma",
    content:
      "Consistently amazing service! I've been using CleanCruisers for a few months now and my car has never looked better. Their team is polite, efficient, and very reliable.",
  },
];

const TestimonialsSection = () => (
  <section
    className="py-12 md:py-20 px-4 md:px-6 bg-gray-900/50"
    style={{ backgroundColor: "#0b0f10" }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What our clients say
        </h2>
        <div className="w-20 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gray-800/80 border-gray-700">
            <CardContent className="p-6 flex flex-col items-center text-center">

              

              <h4 className="font-semibold text-white text-base mb-2">
                {testimonial.name}
              </h4>

              {/* ⭐⭐⭐⭐⭐ Rating Section */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-green-400 fill-green-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
