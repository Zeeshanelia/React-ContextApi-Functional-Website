import hero from "/images/hero.png";
import login from "/images/login.webp";
import signup from "/images/signup.webp";
import welcome from "/images/welcome.png";
import logo from "/images/logo.png";
import stars from "/images/stars.png";
import stars2 from "/images/stars.png";

// Slides
import slide1 from "/images/slide1.png";
import slide2 from "/images/slide2.png";
import slide3 from "/images/slide3.png";
import slide4 from "/images/slide4.png";
import slide5 from "/images/slide5.png";
import slide6 from "/images/slide6.png";
import slide7 from "/images/slide7.png";

// Products / stories
import story1 from "/images/story1.png";
import p1 from "/images/p1.jpg";
import p2 from "/images/p2.jpg";
import p3 from "/images/p3.jpg";
import p4 from "/images/p4.jpg";
import p5 from "/images/p5.jpg";
import p6 from "/images/p6.png";
import p7 from "/images/p7.png";
import p8 from "/images/p8.png";

// --------------------
// Assets Object
// --------------------
export const assets = {
  hero,
  login,
  signup,
  welcome,
  logo,
  stars,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,

  story1,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
};


// Products Data

export const products = [
  {
    id: 1,
    name: "Laptop & accessories",
    smallDesc: "Trendy floral design crop top for casual wear.",
    category: "Girls Topwear",
    oldPrice: 1499,
    offerPrice: 999,
    image: p1,
  },
  {
    id: 2,
    name: "Electronic items & gadgets",
    smallDesc: "Modern striped crop design.",
    category: "Girls Topwear",
    oldPrice: 1299,
    offerPrice: 899,
    image: p7,
  },
  {
    id: 3,
    name: "Shoes",
    smallDesc: "Elegant high-waist skirt.",
    category: "Girls Bottomwear",
    oldPrice: 1899,
    offerPrice: 1399,
    image: p8,
  },
  {
    id: 4,
    name: "Cloths collection",
    smallDesc: "Warm knitted sweater.",
    category: "Girls Winterwear",
    oldPrice: 2299,
    offerPrice: 1699,
    image: slide5,
  },
  {
    id: 5,
    name: "Summer Maxi Dress",
    smallDesc: "Lightweight floral maxi dress.",
    category: "Girls Dresses",
    oldPrice: 2799,
    offerPrice: 1999,
    image: p5,
  },
  {
    id: 6,
    name: "Hooded Sweatshirt",
    smallDesc: "Warm and cozy hoodie.",
    category: "Girls Winterwear",
    oldPrice: 1999,
    offerPrice: 1499,
    image: p6,
  },
  {
    id: 9,
    name: "Printed Kurti",
    smallDesc: "Traditional printed kurti.",
    category: "Girls Ethnic",
    oldPrice: 1599,
    offerPrice: 1199,
    image: slide1,
  },
  {
    id: 10,
    name: "Denim Shorts",
    smallDesc: "Stylish summer denim shorts.",
    category: "Girls Bottomwear",
    oldPrice: 1499,
    offerPrice: 999,
    image: slide2,
  },
  {
    id: 11,
    name: "Oversized Shirt",
    smallDesc: "Relaxed fit oversized shirt.",
    category: "Girls Topwear",
    oldPrice: 1799,
    offerPrice: 1299,
    image: slide3,
  },
  {
    id: 12,
    name: "Formal Blazer",
    smallDesc: "Elegant office blazer.",
    category: "Girls Outerwear",
    oldPrice: 3499,
    offerPrice: 2499,
    image: slide4,
  },
  {
    id: 15,
    name: "Graphic T-Shirt",
    smallDesc: "Cool printed graphic tee.",
    category: "Girls Topwear",
    oldPrice: 1099,
    offerPrice: 799,
    image: stars,
  },
  {
    id: 17,
    name: "Ankle Length Jeans",
    smallDesc: "Slim ankle fit jeans.",
    category: "Girls Bottomwear",
    oldPrice: 2299,
    offerPrice: 1699,
    image: welcome,
  },
  {
    id: 18,
    name: "Denim Jacket",
    smallDesc: "Classic blue denim jacket.",
    category: "Girls Outerwear",
    oldPrice: 2999,
    offerPrice: 1999,
    image: p2,
  },
  {
    id: 19,
    name: "Casual White T-Shirt",
    smallDesc: "Basic white tee for everyday wear.",
    category: "Girls Topwear",
    oldPrice: 999,
    offerPrice: 699,
    image: p3,
  },
  {
    id: 20,
    name: "Black Skinny Jeans",
    smallDesc: "Slim fit stretchable jeans.",
    category: "Girls Bottomwear",
    oldPrice: 2499,
    offerPrice: 1799,
    image: p4,
  },
  {
    id: 21,
    name: "Hooded Sweatshirt",
    smallDesc: "Warm and cozy hoodie.",
    category: "Girls Winterwear",
    oldPrice: 1999,
    offerPrice: 1499,
    image: slide6,
  },
  {
    id: 22,
    name: "Printed Kurti",
    smallDesc: "Traditional printed kurti.",
    category: "Girls Ethnic",
    oldPrice: 1599,
    offerPrice: 1199,
    image: slide7,
  },
];

export const testimonials = [

  {
    image: p2,
    name: "Rahul Sharma",
    stars: stars,
    review:
      "The experience was great! Everything was handled professionally from start to finish.",
  },
  {
    image: p3,
    name: "Priya Patel",
    stars: stars,
    review:
      "Amazing attention to detail. The final result exceeded my expectations completely.",
  },
  {
    image: p4,
    name: "Vikram Singh",
    stars: stars,
    review:
      "Very reliable and punctual. I would definitely recommend their services to anyone.",
  },
  {
    image: p5,
    name: "Sneha Iyer",
    stars: stars,
    review:
      "Outstanding customer support and a truly seamless process from beginning to end.",
  },
  {
    image: p6,
    name: "Arjun Mehta",
    stars: stars,
    review:
      "Top-notch quality work. They really listened to what I needed and delivered perfectly.",
  },
  {
    image: p7,
    name: "Ananya Reddy",
    stars: stars,
    review:
      "Professional, friendly, and incredibly skilled. Couldn't be happier with the outcome!",
  },
];