
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    content:
      "Absolutely delighted with the service! The car looked brand new after the wash. Their attention to detail and doorstep convenience made the entire experience seamless. Highly recommended!",
    image: "/avatars/priya.jpg",
    fallback: "PS",
  },
  {
    name: "Rohit Mehra",
    content:
      "Very professional and punctual team. They arrived on time and did a thorough job without cutting corners. Great value for money and hassle-free experience. Will definitely book again.",
    image: "/avatars/rohit.jpg",
    fallback: "RM",
  },
  {
    name: "Ananya Verma",
    content:
      "Consistently amazing service! I've been using CleanCruisers for a few months now and my car has never looked better. Their team is polite, efficient, and very reliable.",
    image: "/avatars/ananya.jpg",
    fallback: "AV",
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
              <Avatar className="w-16 h-16 mb-4 border-2 border-green-400 shadow-sm ring-2 ring-green-400/60">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.fallback}</AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-white text-base">
                {testimonial.name}
              </h4>
              {/* Removed job/role titles */}
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
