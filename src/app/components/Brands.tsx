"use client";
import Image from "next/image";
import Link from "next/link";

const brand = [
  {
    src: "/brands/brand-1.png",
    href: "",
  },
  {
    src: "/brands/brand-2.png",
    href: "",
  },
  {
    src: "/brands/brand-3.png",
    href: "",
  },
  {
    src: "/brands/brand-4.png",
    href: "",
  },
  {
    src: "/brands/brand-5.png",
    href: "",
  },
];
function Brands() {
  return (
    <section className="py-8 px-8" id="contact">
      <div className="container mx-auto">
      {/* <h2 className="h2 text-center">Our Brands</h2> */}
        <div className="grid grid-cols-2 lg:grid-cols-5 py-8">
          {brand.map((img, index) => {
            return (
              <div key={index}>
                <Link href={img.href}>
                  <Image 
                  className="opacity-100 group-hover:opacity-100 transition-all
                  mx-auto"
                  src={img.src} 
                  width={204} 
                  height={106} 
                  alt="Brands" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Brands;
