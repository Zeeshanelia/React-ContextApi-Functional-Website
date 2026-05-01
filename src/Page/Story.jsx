import { assets } from "../assets/asset";

const Story = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-gray-900 text-3xl font-semibold py-5">
        Our Instagram Stories
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-8 gap-4 max-w-6xl mx-auto px-4">
        <img
          src={assets.slide3}
          className="w-80 h-[235px] rounded-md shadow-lg hover:shadow-xl transition-shadow"
          alt="Instagram story slide 3"
        />
        <img
          src={assets.slide4}
          className="w-80 h-[235px] rounded-md shadow-lg hover:shadow-xl transition-shadow"
          alt="Instagram story slide 4"
        />
        <img
          src={assets.slide5}
          className="w-80 h-[235px] rounded-md shadow-lg hover:shadow-xl transition-shadow"
          alt="Instagram story slide 5"
        />
        <img
          src={assets.signup}
          className="w-80 h-[235px] rounded-md shadow-lg hover:shadow-xl transition-shadow"
          alt="Signup story"
        />
      </div>
    </div>
  );
};

export default Story;