import Image from "next/image";

export default function Banner({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <Image src={imageSrc} alt={imageAlt} width={1920} height={915} className="object-cover object-center w-full h-full" />
    
    <div className="absolute inset-0 bg-black opacity-70">
      <div className="hero-content text-center text-neutral-content flex flex-col items-center justify-center h-full px-4">
        <div className="max-w-xl">
          <h1 className="text-7xl font-extrabold">{title} <span className="bg-gradient-to-r via-red-500 from-orange-200 to-purple-600 bg-clip-text text-transparent">myguitarmags</span></h1>
          <p className="mb-5 text-2xl py-5">{description}</p>
        </div>      
      </div>
    </div>
  </div>
  </div>
  )
}
