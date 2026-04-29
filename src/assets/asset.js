// Images
import hero from "/images/hero.png";
import login from "/images/login.webp";
import signup from "/images/signup.webp";
import welcome from "/images/welcome.png";
import logo from "/images/logo.png";
import stars from "/images/stars.jpg";

// Slides
import slide1 from "/images/slide1.png";
import slide2 from "/images/slide2.png";
import slide3 from "/images/slide3.png";
import slide4 from "/images/slide4.png";
import slide5 from "/images/slide5.png";

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



// Assets Object

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

  story1,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8
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
    longDesc: "This floral print crop top is perfect for casual outings and summer vibes. Made from high-quality cotton, it ensures comfort and breathability.",
    image: p1,
  },

  {
    id: 7,
    name: "Electronic items & gadgets",
    smallDesc: "Modern striped crop design.",
    category: "Girls Topwear",
    oldPrice: 1299,
    offerPrice: 899,
    longDesc: "Trendy striped crop top that pairs well with jeans or skirts. Lightweight and stylish.",
    image: p7,
  },

  {
    id: 8,
    name: "Shoes",
    smallDesc: "Elegant high-waist skirt.",
    category: "Girls Bottomwear",
    oldPrice: 1899,
    offerPrice: 1399,
    longDesc: "Chic and comfortable skirt designed to enhance your silhouette. Suitable for casual and formal wear.",
    image: p8,
  },
  {
    id: 13,
    name: "Cloths collcetion",
    smallDesc: "Warm knitted sweater.",
    category: "Girls Winterwear",
    oldPrice: 2299,
    offerPrice: 1699,
    longDesc: "Cozy sweater made with soft knit fabric. Perfect for chilly weather.",
    image: slide5,
  },

  {
    id: 2,
    name: "Denim Jacket",
    smallDesc: "Classic blue denim jacket.",
    category: "Girls Outerwear",
    oldPrice: 2999,
    offerPrice: 1999,
    longDesc: "A timeless denim jacket that pairs well with any outfit. Durable and stylish for all seasons.",
    image: p2,
  },
  {
    id: 3,
    name: "Casual White T-Shirt",
    smallDesc: "Basic white tee for everyday wear.",
    category: "Girls Topwear",
    oldPrice: 999,
    offerPrice: 699,
    longDesc: "Soft cotton t-shirt designed for comfort and simplicity. Ideal for layering or wearing alone.",
    image: p3,
  },
  {
    id: 4,
    name: "Black Skinny Jeans",
    smallDesc: "Slim fit stretchable jeans.",
    category: "Girls Bottomwear",
    oldPrice: 2499,
    offerPrice: 1799,
    longDesc: "Comfortable skinny jeans with stretch fabric for all-day wear. Perfect for casual and semi-formal looks.",
    image: p4,
  },
  {
    id: 5,
    name: "Summer Maxi Dress",
    smallDesc: "Lightweight floral maxi dress.",
    category: "Girls Dresses",
    oldPrice: 2799,
    offerPrice: 1999,
    longDesc: "Flowy maxi dress made from breathable fabric. Ideal for summer outings and beach days.",
    image: p5,
  },
  {
    id: 6,
    name: "Hooded Sweatshirt",
    smallDesc: "Warm and cozy hoodie.",
    category: "Girls Winterwear",
    oldPrice: 1999,
    offerPrice: 1499,
    longDesc: "Soft fleece hoodie designed to keep you warm during colder days while maintaining style.",
    image: p6,
  },


  {
    id: 9,
    name: "Printed Kurti",
    smallDesc: "Traditional printed kurti.",
    category: "Girls Ethnic",
    oldPrice: 1599,
    offerPrice: 1199,
    longDesc: "Beautifully printed kurti perfect for festive and daily wear. Made from soft breathable fabric.",
    image: slide1,
  },
  {
    id: 10,
    name: "Denim Shorts",
    smallDesc: "Stylish summer denim shorts.",
    category: "Girls Bottomwear",
    oldPrice: 1499,
    offerPrice: 999,
    longDesc: "Comfortable denim shorts designed for summer fashion. Durable and easy to style.",
    image: slide2,
  },
  {
    id: 11,
    name: "Oversized Shirt",
    smallDesc: "Relaxed fit oversized shirt.",
    category: "Girls Topwear",
    oldPrice: 1799,
    offerPrice: 1299,
    longDesc: "Loose-fit shirt offering both comfort and modern style. Perfect for layering.",
    image: slide3,
  },
  {
    id: 12,
    name: "Formal Blazer",
    smallDesc: "Elegant office blazer.",
    category: "Girls Outerwear",
    oldPrice: 3499,
    offerPrice: 2499,
    longDesc: "Tailored blazer ideal for professional settings. Adds a polished touch to any outfit.",
    image: slide4,
  },


  {
    id: 15,
    name: "Graphic T-Shirt",
    smallDesc: "Cool printed graphic tee.",
    category: "Girls Topwear",
    oldPrice: 1099,
    offerPrice: 799,
    longDesc: "Trendy graphic t-shirt with bold prints. Comfortable and stylish for everyday wear.",
    image: stars,
  },

  {
    id: 17,
    name: "Ankle Length Jeans",
    smallDesc: "Slim ankle fit jeans.",
    category: "Girls Bottomwear",
    oldPrice: 2299,
    offerPrice: 1699,
    longDesc: "Stylish ankle-length jeans designed for a modern look and maximum comfort.",
    image: welcome,
  },


];