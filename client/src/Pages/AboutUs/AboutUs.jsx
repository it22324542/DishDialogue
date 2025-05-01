import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center p-4"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20230426/original/pngtree-chef-preparing-a-dish-in-a-restaurant-picture-image_2482776.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-2xl max-w-4xl text-center space-y-8">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to DishDialogue</h1>
        
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-400">DishDialogue</span>, the ultimate social media platform crafted for food and drink enthusiasts who live to savor, share, and celebrate culinary experiences! Whether you're a home cook experimenting with new recipes, a seasoned food critic reviewing the hottest restaurants, or simply someone who loves discovering delicious dishes, DishDialogue is your go-to community to connect with fellow foodies.
        </p>

        <div>
          <h2 className="text-3xl font-bold mb-2 text-yellow-300">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At DishDialogue, we believe that food is more than just sustenance—it’s a language that brings people together. Our mission is to create a vibrant, inclusive space where food lovers from all walks of life can share their passion, exchange ideas, and inspire one another. From mouthwatering homemade meals to hidden gem eateries, we’re here to help you document, discuss, and delight in every bite.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2 text-yellow-300">What We Offer</h2>
          <ul className="text-lg leading-relaxed list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
            <li><span className="font-semibold text-yellow-400">Share Your Culinary Journey:</span> Post photos, videos, and stories of your favorite dishes, recipes, and dining experiences.</li>
            <li><span className="font-semibold text-yellow-400">Discover & Explore:</span> Follow chefs, food bloggers, and fellow enthusiasts to get inspired by global and local flavors.</li>
            <li><span className="font-semibold text-yellow-400">Join the Conversation:</span> Engage in lively discussions, exchange cooking tips, and debate the best food trends in dedicated groups.</li>
            <li><span className="font-semibold text-yellow-400">Honest Reviews:</span> Rate and review restaurants, cafes, and food products to help others make informed dining choices.</li>
            <li><span className="font-semibold text-yellow-400">Recipe Hub:</span> Save, share, and try out recipes from a diverse community of home cooks and professional chefs.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2 text-yellow-300">Why DishDialogue?</h2>
          <p className="text-lg leading-relaxed">
            Unlike other platforms, DishDialogue is built by food lovers, for food lovers. We prioritize authenticity, creativity, and connection, ensuring every user feels welcome to express their culinary passion. Whether you're looking for the perfect pasta recipe, the best street food spots in your city, or simply a place to geek out over food photography, you’ll find your tribe here.
          </p>
        </div>

        <p className="text-xl font-semibold mt-6 text-yellow-400">
          Join us today and be part of a growing community that eats, shares, and connects—one dish at a time. Let’s Dish It Out!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
