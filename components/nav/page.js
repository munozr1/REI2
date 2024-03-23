import Image from "next/image";

export default function Navbar({children}) {
  return (
    <nav className="w-full h-14 shadow-md flex justify-between">
      <span className="inline-flex h-16 w-16 items-center justify-center ml-8">
        <h1 className="font-semibold text-xl">CoEstate</h1>
      </span>
      <div className="inline-flex items-center justify-between w-60 ">
      {children}
      </div>

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 float-right mt-1 mr-8">
        <span className="text-white">TW</span>
      </span>
    </nav>
  );

}
