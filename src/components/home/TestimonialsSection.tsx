import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SRIA Infotech Pvt Ltd played a pivotal role in transforming our business operations. Their expertise in SAP consulting helped us streamline processes and improve efficiency, leading to significant cost savings. I highly recommend their services to any business looking to drive digital transformation.",
    author: "Venugopalam Medicherla",
    position: "Group CIO",
    company: "MSPL – Baldota Group",
  },
  {
    quote: "We engaged SRIA for data analytics solutions, and they exceeded our expectations in every way. Their team's analytical prowess and attention to detail were commendable. They helped us uncover valuable insights that have positively impacted our decision-making and overall business performance.",
    author: "Purshottam A",
    position: "Executive Director",
    company: "Sai Balaji Infra India Pvt Ltd",
  },
  {
    quote: "We are incredibly impressed with the level of service and expertise provided by SRIA Infotech Pvt Ltd. Their team surpassed expectations, delivering tailored solutions tailored to our unique business needs. We highly recommend them to any organization seeking digital transformation.",
    author: "Vidya Sagar Reddy",
    position: "Deputy General Manager of Finance",
    company: "Patil Group",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our valued partners about their experience working with SRIA Infotech.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 md:left-12">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              <div className="pt-4">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-primary">
                      {testimonials[current].author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].position}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current
                        ? "bg-accent w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-colors group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
