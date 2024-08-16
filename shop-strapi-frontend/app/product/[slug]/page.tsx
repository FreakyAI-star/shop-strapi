'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { jsPDF } from 'jspdf';

interface CartItem {
  item: string;
  price: number;
}

interface ProductData {
  attributes: {
    title: string;
    price: number;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

async function getProduct(slug: string) {
  const headers = {Authorization: `8bee3d4522081064f637ee50a151e47760fb2eb55765c91bea121e6e2d40f43b03ba075e8b7351ccee1365c3989d0daa77fbd330eace450a91faf72811a08e29e48f730454edf24935bf8bcc46b0a60867c2ede899f043c7e6e65e26ed9405d4a23659ca9fba54b358c31dcbf59018f4bbe8f82c552497ffda024bd8a9899f92`}
  const res = await fetch(`http://localhost:1337/api/products?filters[slug]=${slug}&populate=*`, {headers})
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  const data = await res.json()
  return data.data[0]
}

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [product, setProduct] = React.useState<ProductData | null>(null);

  React.useEffect(() => {
    getProduct(params.slug).then(setProduct);
  }, [params.slug]);
  
  if (!product) {
    return <div>Product not found</div>
  }

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text("Product Information", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Title: ${product.attributes.title}`, 20, 40);
    doc.text(`Price: Rs. ${product.attributes.price}`, 20, 50);
    doc.text(`Description: ${product.attributes.description}`, 20, 60, { maxWidth: 180 });
    
    // Load the image
    const img = new Image();
    img.crossOrigin = "Anonymous";  // This is necessary for loading images from different origins
    img.src = `http://localhost:1337${product.attributes.image.data.attributes.url}`;
    
    img.onload = function() {
      // Calculate aspect ratio to fit the image within 100x100 pixels
      const aspectRatio = img.width / img.height;
      let width = 100;
      let height = 100;
      
      if (aspectRatio > 1) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
      
      // Add the image to the PDF
      doc.addImage(img, 'JPEG', 20, 100, width, height);
      
      // Save the PDF
      doc.save(`${product.attributes.title}.pdf`);
    };
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="flex justify-center items-center w-full lg:w-auto"> 
              <img alt="ecommerce" className="rounded" src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}/>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">MyShop</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Star rating SVGs */}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{product.attributes.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.attributes.price}</span>
                <button onClick={downloadPDF} className="flex ml-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}