/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: '18947 Waterway Rd, Dallas, TX 75287',
    href: '#',
    price: '$430,000',
    availability: 'White and Black',
    imageSrc: 'https://photos.zillowstatic.com/fp/aa10bc6b805b7136b5d01c9ee7af2cd3-p_e.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: '1525 Nomas St, Dallas, TX 75212',
    href: '#',
    price: '$140,000',
    availability: 'Washed Black',
    imageSrc: 'https://photos.zillowstatic.com/fp/9c110b9b1b2de5572031ab3229e25965-p_e.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: '4231 W Lawther Dr, Dallas, TX 75214',
    href: '#',
    price: '$290,000',
    availability: 'Blue',
    imageSrc: 'https://photos.zillowstatic.com/fp/88d0a14781973d2268e83846bf59bde3-p_e.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: '4231 W Lawther Dr, Dallas, TX 75214',
    href: '#',
    price: '$500,000',
    availability: 'White and Black',
    imageSrc: 'https://photos.zillowstatic.com/fp/7c344c5f588c5d1fc87ba95f81c59b58-p_e.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 5,
    name: '16817 Rustic Meadows Dr, Dallas, TX 75248',
    href: '#',
    price: '$140,000',
    availability: 'Washed Black',
    imageSrc: 'https://photos.zillowstatic.com/fp/28958238e03f4b61d7189dcd8acfabaa-p_e.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 6,
    name: '15539 Preston Rd APT 1037, Dallas, TX 75248',
    href: '#',
    price: '$220,000',
    availability: 'Blue',
    imageSrc: 'https://photos.zillowstatic.com/fp/370e4c69dd31190a376b40bb5e75b527-p_e.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Listings() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm shadow-md rounded-md">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="ml-4 mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="ml-4 mb-5 mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
