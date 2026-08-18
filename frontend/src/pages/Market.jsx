import { useState } from "react";
import {
  FaSeedling,
  FaSearch,
  FaShoppingCart,
  FaLeaf
} from "react-icons/fa";

export default function Market() {

  const [search, setSearch] = useState("");

  // PRODUCTS
    const products = [

      // SEEDS
      {
        id: 1,
        name: "Hybrid Wheat Seeds",
        category: "Seeds",
        price: "₹499",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=wheat+seeds",
      },

      {
        id: 2,
        name: "Rice Seeds",
        category: "Seeds",
        price: "₹399",
        image:
          "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=rice+seeds",
      },

      {
        id: 3,
        name: "Maize Seeds",
        category: "Seeds",
        price: "₹599",
        image:
      "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
        link: "https://www.amazon.in/s?k=maize+seeds",
      },

      {
        id: 4,
        name: "Cotton Seeds",
        category: "Seeds",
        price: "₹699",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=cotton+seeds",
      },

      {
        id: 5,
        name: "Groundnut Seeds",
        category: "Seeds",
        price: "₹349",
        image:
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
        link: "https://www.amazon.in/s?k=groundnut+seeds",
      },

      {
        id: 6,
        name: "Sunflower Seeds",
        category: "Seeds",
        price: "₹449",
        image:
          "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=sunflower+seeds",
      },

      {
        id: 7,
        name: "Soybean Seeds",
        category: "Seeds",
        price: "₹529",
        image:
          "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=soybean+seeds",
      },

      {
        id: 8,
        name: "Mustard Seeds",
        category: "Seeds",
        price: "₹299",
        image:
      "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg",
        link: "https://www.flipkart.com/search?q=mustard+seeds",
      },

      {
        id: 9,
        name: "Millet Seeds",
        category: "Seeds",
        price: "₹399",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=millet+seeds",
      },

      {
        id: 10,
        name: "Barley Seeds",
        category: "Seeds",
        price: "₹379",
        image:
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=barley+seeds",
      },

      // FERTILIZERS

      {
        id: 11,
        name: "Organic Fertilizer",
        category: "Fertilizer",
        price: "₹799",
        image:
          "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=organic+fertilizer",
      },

      {
        id: 12,
        name: "NPK Fertilizer",
        category: "Fertilizer",
        price: "₹999",
        image:
          "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=npk+fertilizer",
      },

      {
        id: 13,
        name: "Bio Fertilizer",
        category: "Fertilizer",
        price: "₹549",
        image:
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=bio+fertilizer",
      },

      {
        id: 14,
        name: "Compost Fertilizer",
        category: "Fertilizer",
        price: "₹449",
        image:
          "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=compost+fertilizer",
      },

      {
        id: 15,
        name: "Urea Fertilizer",
        category: "Fertilizer",
        price: "₹899",
        image:
          "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=urea+fertilizer",
      },

      {
        id: 16,
        name: "Potash Fertilizer",
        category: "Fertilizer",
        price: "₹699",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=potash+fertilizer",
      },

      {
        id: 17,
        name: "DAP Fertilizer",
        category: "Fertilizer",
        price: "₹849",
        image:
          "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=dap+fertilizer",
      },

      {
        id: 18,
        name: "Seaweed Fertilizer",
        category: "Fertilizer",
        price: "₹599",
        image:
          "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=seaweed+fertilizer",
      },

      {
        id: 19,
        name: "Liquid Fertilizer",
        category: "Fertilizer",
        price: "₹649",
        image:
          "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.flipkart.com/search?q=liquid+fertilizer",
      },

      {
        id: 20,
        name: "Vermicompost",
        category: "Fertilizer",
        price: "₹499",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.amazon.in/s?k=vermicompost",
      },
    ];

  // SEARCH FILTER
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-white shadow-sm px-14 py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <span className="text-4xl text-green-700">
            🌱
          </span>

          <h1 className="text-3xl font-bold text-green-700">

            Seeds Shop

          </h1>

        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10 text-green-600 font-semibold text-sm ml-auto">

          <a
            href="/"
            className="hover:text-green-800 transition"
          >
            🏠 Home
          </a>

          <a
            href="/market"
            className="hover:text-green-800 transition"
          >
            🌱 Seeds
          </a>

          <a
            href="/analysis"
            className="hover:text-green-800 transition"
          >
            📈 Market Analysis
          </a>

        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[430px] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
          alt="Farm"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* GREEN OVERLAY */}
        <div className="absolute inset-0 bg-green-700/65"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center text-white px-4">

          <h1 className="text-6xl font-bold drop-shadow-lg">

            Premium Grains & Pulses

          </h1>

          <p className="mt-6 text-xl max-w-3xl">

            High-quality seeds for wheat, rice, maize, and other staple crops to maximize your harvest

          </p>

          <button
            className="mt-10 bg-green-600 hover:bg-green-700
                      px-10 py-4 rounded-full text-lg
                      font-semibold transition duration-300 shadow-lg"
          >

            BROWSE PRODUCTS

          </button>

        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-6xl mx-auto px-4 mt-10">

        <div className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-3">

          <FaSearch className="text-green-700 text-xl" />

          <input
            type="text"
            placeholder="Search seeds or fertilizers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg"
          />

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">

          Seeds & Fertilizers

        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {filteredProducts.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg
                        hover:-translate-y-2 hover:shadow-2xl
                        transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">

                  {
                    item.category === "Seeds"
                      ? <FaSeedling />
                      : <FaLeaf />
                  }

                  {item.category}

                </div>

                <h3 className="text-xl font-bold mt-3 text-gray-800">

                  {item.name}

                </h3>

                <p className="text-2xl font-bold text-green-700 mt-3">

                  {item.price}

                </p>

                {/* BUTTON */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button
                    className="mt-5 w-full bg-green-700 text-white py-3
                              rounded-xl hover:bg-green-800 transition
                              flex items-center justify-center gap-2"
                  >

                    <FaShoppingCart />

                    Buy Now

                  </button>

                </a>

              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS */}
        {
          filteredProducts.length === 0 && (

            <div className="text-center mt-10 text-gray-600 text-xl">

              No products found.

            </div>
          )
        }

      </div>
    </div>
  );
}