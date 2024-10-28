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
    imageUrl: "/img/property/property-2.jpg",
  },
  {
    id: 3,
    name: "Wibawa Mukti",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-3.jpg",
  },
  {
    id: 4,
    name: "Mutiara Jaya",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-4.jpg",
  },
  {
    id: 5,
    name: "KSB",
    location: "Bekasi, Jawa Barat",
    price: "IDR 500jt",
    imageUrl: "/img/property/property-5.jpg",
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
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <Image
      width={300}
      height={200}
      src={imageUrl}
      alt={name}
      className="w-full h-48 object-cover"
    />
    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm">{location}</div>
      <div className="text-lg font-bold">{price}</div>
    </div>
  </div>
);

const PropertyCardGrid = () => (
  <div className="px-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {properties.map((property) => (
      <PropertyCard key={property.id} {...property} />
    ))}
  </div>
);

export default PropertyCardGrid;
