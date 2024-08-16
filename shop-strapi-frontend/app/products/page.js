import Link from "next/link";
import React from "react";

async function getProducts() {
  const headers = {
    Authorization: `Bearer 8bee3d4522081064f637ee50a151e47760fb2eb55765c91bea121e6e2d40f43b03ba075e8b7351ccee1365c3989d0daa77fbd330eace450a91faf72811a08e29e48f730454edf24935bf8bcc46b0a60867c2ede899f043c7e6e65e26ed9405d4a23659ca9fba54b358c31dcbf59018f4bbe8f82c552497ffda024bd8a9899f92`
  };
  const res = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
    cache: "no-store"  // This makes the request dynamic
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  // Group products by category (or another attribute if you prefer)
  const groupedProducts = products.data.reduce((acc, item) => {
    const category = item.attributes.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">

          {Object.keys(groupedProducts).map((category) => (
            <div key={category}>
              <div className="flex flex-wrap w-full md:mb-5">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    {category}
                  </h1>
                  <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
              </div>

              <div className="flex flex-wrap -m-1">
                {groupedProducts[category].map((item) => (
                  <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-96 rounded m-auto mb-8"
                        src={item.attributes.image.data && `http://localhost:1337${item.attributes.image.data.attributes.url}`}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {item.attributes.category}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {item.attributes.title}
                      </h2>
                      <p className="leading-relaxed text-base">{item.attributes.description}</p>
                      <Link href={`/product/${item.attributes.slug}`}>
                        <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </section>
    </div>
  );
}
