import { assets } from "../assets/asset";

const Story = () => {
  const stories = [
    assets.slide3,
    assets.slide4,
    assets.slide5,
    assets.signup,
  ];

  return (
    <div className="my-16 px-4">

      {/* Heading */}
      <h1 className="text-center text-gray-900 text-3xl md:text-4xl font-semibold">
        Our Instagram Stories
      </h1>
      <p className="text-center text-gray-500 mt-2 text-sm">
        Fresh moments from our latest collections
      </p>

      {/* Stories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10 max-w-6xl mx-auto">

        {stories.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl">

            {/* Image */}
            <img
              src={img}
              alt={`story-${index}`}
              className="w-full h-[230px] object-cover
              group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-sm font-semibold">Story {index + 1}</p>
              <p className="text-xs opacity-80">View more</p>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/40 rounded-xl transition"></div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Story;