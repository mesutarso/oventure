import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhySection() {
  return (
    <div className="mx-auto px-4 py-12 md:py-16 bg-[#0e342d]">
      <div className="container">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-[#0a2559] mb-8 md:mb-12 text-center md:text-left">
        What Our Customers Are Saying - Client Feedback
      </h2> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0a2559]">
                    Jessica Miller
                  </h3>
                  <p className="text-gray-600 text-sm">California</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#0d6efd] text-[#0d6efd]"
                    />
                  ))}
                </div>
              </div>
              <h4 className="text-[#0a2559] font-medium mb-3">
                My choice for any paper
              </h4>
              <p className="text-gray-700 text-sm">
                Ive used this paper writing service a few times now, and each
                time, they deliver exactly what I need. Whether its a research
                paper or a term paper, they are always well-written and
                submitted on time.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0a2559]">
                    Mark Thompson
                  </h3>
                  <p className="text-gray-600 text-sm">Texas</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#0d6efd] text-[#0d6efd]"
                    />
                  ))}
                </div>
              </div>
              <h4 className="text-[#0a2559] font-medium mb-3">
                Helped me with my deadline
              </h4>
              <p className="text-gray-700 text-sm">
                I was skeptical at first, but when I had a critical research
                paper due in 24 hours, they really came through! The quality was
                better than expected for such a short time frame. Would
                definitely use them again.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0a2559]">
                    Rachel Garcia
                  </h3>
                  <p className="text-gray-600 text-sm">Florida</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#0d6efd] text-[#0d6efd]"
                    />
                  ))}
                </div>
              </div>
              <h4 className="text-[#0a2559] font-medium mb-3">
                Catered to my feedback
              </h4>
              <p className="text-gray-700 text-sm">
                What sets this service apart is their amazing support team. They
                answered all my questions and helped me adjust the details of my
                term paper order. The final paper was also top-notch.
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0a2559]">
                    Brian Williams
                  </h3>
                  <p className="text-gray-600 text-sm">New York</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#0d6efd] text-[#0d6efd]"
                    />
                  ))}
                </div>
              </div>
              <h4 className="text-[#0a2559] font-medium mb-3">
                Best paper writing service Ive found
              </h4>
              <p className="text-gray-700 text-sm">
                Ive tried several writing services, but this one is by far the
                best. The writers truly understand whats needed for various
                types of academic papers, and my grades have improved because of
                it.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Info Card 1 */}
            <div className="bg-white rounded-lg border-2 border-[#0d6efd] p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0d6efd]"
                >
                  <path
                    d="M48 16L32 8L16 16L32 24L48 16ZM48 16V36"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 36V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 24V44"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 40L32 44L40 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32L32 36L40 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Our average page is</h3>
              <p className="text-3xl font-bold text-[#0a2559] mb-2">
                300 WORDS
              </p>
              <p className="text-gray-700">
                so you get upto{" "}
                <span className="text-[#0d6efd] font-bold">20%</span> more value
              </p>
            </div>

            {/* Info Card 2 */}
            <div className="bg-white rounded-lg border-2 border-dashed border-[#0d6efd] p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0d6efd]"
                >
                  <rect
                    x="16"
                    y="12"
                    width="32"
                    height="40"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 32L28 36L40 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-4">
                Getting your paper done is easy when you know the right people.
              </h3>
              <Button className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium px-8 py-2 rounded-full">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
