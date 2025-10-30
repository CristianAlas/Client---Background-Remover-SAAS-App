import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      {/* Title section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        They love us. You will too
      </h2>

      {/* Body Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
          key={testimonial.id} 
          className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-A400 dark:text-gray-600 fill-current"
              >
                <path
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="text-gray-700 m-0" style={{hyphens: "auto"}}>
                {testimonial.quote}
              </p>
            </div>
            <div className="flex space-x-2 bg-gray-50 px-6 pt-6 pb-5 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 m-0">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm m-0 mt-1">
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;