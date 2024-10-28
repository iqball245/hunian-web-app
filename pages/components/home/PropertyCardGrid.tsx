import Image from "next/image";
import React from "react";

const properties = [
  {
    id: 1,
    name: "Mega Regency",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-1.jpg",
  },
  {
    id: 2,
    name: "Pasir Raya",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-3.jpg",
  },
  {
    id: 3,
    name: "Wibawa Mukti",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-5.jpg",
  },
  {
    id: 4,
    name: "Mutiara Jaya",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-2.jpg",
  },
  {
    id: 5,
    name: "KSB",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-4.jpg",
  },
  {
    id: 6,
    name: "Citra Indah",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-6.jpg",
  },
];

interface Props {
  name: string;
  location: string;
  price: string;
  imageUrl: string;
}

const PropertyCard: React.FC<Props> = ({ name, location, price, imageUrl }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg">
    <Image
      width={0}
      height={0}
      src={imageUrl}
      alt={name}
      sizes="100%"
      style={{ objectFit: "cover", width: "100vw", height: "100vh" }}
    />
    <div className="flex justify-between items-center absolute bottom-0 w-full p-4 bg-black rounded-md bg-opacity-50 backdrop-blur-md from-black text-white">
      <div>
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-sm">{location}</div>
      </div>
      <div className="text-xl font-bold">{price}</div>
    </div>
  </div>
);

const PropertyCardGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[34px] gap-y-[16px] p-4">
    {properties.map((property) => (
      <PropertyCard key={property.id} {...property} />
    ))}
  </div>
);

export default PropertyCardGrid;
