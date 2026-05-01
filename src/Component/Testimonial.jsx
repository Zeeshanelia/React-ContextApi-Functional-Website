import { testimonials } from "../assets/asset";

const Testimonial = () => {
  return (
    <div className="my-12 bg-[#F3F2F3] py-12">
      <h1 className="py-5 text-4xl text-center text-gray-900 font-semibold">
        What Our Customers Say
      </h1>
      <div className="flex flex-wrap mx-auto flex-col md:flex-row items-center justify-center gap-5 max-w-6xl px-4">
        {testimonials.map((item, index) => (
          <div key={index} className="rounded-md p-6 w-80 bg-white shadow-lg mx-auto md:mx-0">

            <img src={item.stars} className="w-22 h-10 mb-3" alt="Rating stars" />

            <p className="text-gray-700 mb-4 italic">"{item.review}"</p>

            <div className="flex items-center gap-3">

              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />

              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;