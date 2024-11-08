import React from 'react';

const articles = [
  {
    title: "Top 5 Dream Destinations for Every Traveler",
    description: "From tropical beaches to bustling cities, discover five stunning travel destinations that should be on every traveler’s bucket list.",
    imgSrc: "/images/1.jfif",
  },
  {
    title: "How to Pack Light for Long Trips",
    description: "Packing for long trips can be tricky, but with the right strategy, you can travel light without missing essentials. Learn efficient packing tips here.",
    imgSrc: "/images/2.jfif",
  },
  {
    title: "Hidden Gems: Best Underrated Cities to Visit",
    description: "Explore unique and underrated cities around the world that offer rich culture, beautiful landscapes, and authentic experiences without the large crowds.",
    imgSrc: "/images/3.jpg",
  },
  {
    title: "Solo Travel: Why You Should Try It",
    description: "Solo travel is an empowering experience that lets you explore new places on your own terms. Discover the joys and benefits of traveling alone.",
    imgSrc: "/images/4.jpg",
  },
  {
    title: "Budget Travel Hacks for Students",
    description: "Traveling as a student doesn’t have to be expensive. Learn how to find cheap flights, accommodations, and ways to save money while traveling.",
    imgSrc: "/images/5.jpeg",
  },
  {
    title: "How to Make the Most of a Weekend Getaway",
    description: "Discover tips on how to plan, pack, and explore efficiently so you can maximize every moment of your short trip and come back refreshed.",
    imgSrc: "/images/6.jpg",
  },
];

const Blogs = () => {
  return (
    <>
    <div className='mx-6'>
        <h1 className='text-white text-7xl pt-5 text-center  '>Our Blogs</h1>
    <div className='flex  flex-wrap mt-5  '>
    </div>
    <div className='flex  flex-wrap justify-center  gap-3'>
      {articles.map((article, index) => (
        <div
          key={index}
          className='sm:w-[350px] w-[270px]  py-5 px-3 flex flex-col flex-wrap gap-3 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-699 mx-5 my-5 via-slate-700 items-center justify-center to-gray-900 rounded-xl bounce-in-top tilt-effect z-10  from-slate-500'
        >
          <img src={article.imgSrc} alt={article.title} className='h-40 w-full object-cover rounded' />
          <h1 className='text-white text-2xl'>{article.title}</h1>
          <p className='text-white'>{article.description}</p>
          <button className='bg-blue-600 w-[110px] h-[40px] rounded-xl transition delay-200 hover:bg-blue-700'>Read More</button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Blogs;
