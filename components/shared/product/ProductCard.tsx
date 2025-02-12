import React from "react";
import Image from "next/image";

const ProductCard = ({
  product,
}: {
  product: {
    image: string;
    title: string;
    price: number;
  };
}) => {
  return (
    <div className="w-[300px] h-[500px] flex flex-col justify-start items-start rounded-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      />
      <p className="text-sm my-2 ">{product.title}</p>
      <p className="text-2xl font-semibold">
        ${new Intl.NumberFormat().format(product.price)}
      </p>
    </div>
  );
};

export default ProductCard;
