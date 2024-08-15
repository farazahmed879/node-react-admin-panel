import f from '../../public/images/14promax.png'
export const MyProducts = [
  // Mobile Category
  {
    categoryName: "mobile",
    categoryImage: "/img/mobile_category.jpg",
    products: [
      {
        productName: "iPhone 14 Pro Max",
        price: 120000,
        qty: 5,
        productRatings: 4.5,
        productDiscountPercent: 10,
        productPriceAfterDiscount: 108000,
        productImages:
          "/images/14promax.png",
        onSale: true,
      },
      {
        productName: "Samsung Galaxy S23 Ultra",
        price: 110000,
        qty: 3,
        productRatings: 4.7,
        productDiscountPercent: 15,
        productPriceAfterDiscount: 93500,
        productImages:
          "/images/s23ultra.png",
        onSale: true,
      },
      {
        productName: "Redmi Pad Se",
        price: 100000,
        qty: 3,
        productRatings: 4.7,
        productDiscountPercent: 15,
        productPriceAfterDiscount: 85000,
        productImages:
          "/images/redmipadse.png",
        onSale: true,
      },
      {
        productName: "Google Pixel 7",
        price: 90000,
        qty: 8,
        productRatings: 4.3,
        productDiscountPercent: 12,
        productPriceAfterDiscount: 79200,
        productImages: "/images/pixel7.png",
        onSale: false,
      },
      {
        productName: "OnePlus 11 Pro",
        price: 85000,
        qty: 6,
        productRatings: 4.2,
        productDiscountPercent: 10,
        productPriceAfterDiscount: 76500,
        productImages: "/images/oneplus11.png",
        onSale: false,
      },
      {
        productName: "Sony Xperia 5 II",
        price: 95000,
        qty: 2,
        productRatings: 4.1,
        productDiscountPercent: 20,
        productPriceAfterDiscount: 76000,
        productImages: "/images/xperia5.png",
        onSale: true,
      },
      {
        productName: "Xiaomi Mi 11 Ultra",
        price: 80000,
        qty: 10,
        productRatings: 4.4,
        productDiscountPercent: 5,
        productPriceAfterDiscount: 76000,
        productImages: "/images/oneplus11.png",
        onSale: false,
      },
      {
        productName: "Oppo Find X3 Pro",
        price: 92000,
        qty: 4,
        productRatings: 4.0,
        productDiscountPercent: 18,
        productPriceAfterDiscount: 75440,
        productImages: "/images/s23ultra.png",
        onSale: true,
      },
      {
        productName: "Huawei P50 Pro",
        price: 88000,
        qty: 7,
        productRatings: 4.3,
        productDiscountPercent: 10,
        productPriceAfterDiscount: 79200,
        productImages: "/images/oneplus11.png",
        onSale: false,
      },
      {
        productName: "Realme GT 2 Pro",
        price: 78000,
        qty: 9,
        productRatings: 4.2,
        productDiscountPercent: 8,
        productPriceAfterDiscount: 71760,
        productImages: "/images/s23ultra.png",
        onSale: true,
      },
      {
        productName: "Asus ROG Phone 5",
        price: 105000,
        qty: 3,
        productRatings: 4.6,
        productDiscountPercent: 12,
        productPriceAfterDiscount: 92400,
        productImages: "/images/oneplus11.png",
        onSale: true,
      },
    ],
  },

  // Clothes Category
  {
    categoryName: "clothes",
    categoryImage: "/img/clothes_category.jpg",
    subCategories: [
      {
        subCategoryName: "men",
        subCategoryImage: "/img/men_category.jpg",
        products: [
          {
            productName: "Levi's Jeans",
            price: 4000,
            qty: 10,
            productRatings: 4.3,
            productDiscountPercent: 20,
            productPriceAfterDiscount: 3200,
            productImages: "/img/levis_jeans.jpg",
            onSale: true,
          },
          {
            productName: "Nike T-Shirt",
            price: 2000,
            qty: 15,
            productRatings: 4.5,
            productDiscountPercent: 15,
            productPriceAfterDiscount: 1700,
            productImages: "/img/nike_tshirt.jpg",
            onSale: true,
          },
          {
            productName: "Adidas Hoodie",
            price: 3500,
            qty: 5,
            productRatings: 4.4,
            productDiscountPercent: 10,
            productPriceAfterDiscount: 3150,
            productImages: "/img/adidas_hoodie.jpg",
            onSale: false,
          },
          {
            productName: "Puma Track Pants",
            price: 3000,
            qty: 8,
            productRatings: 4.2,
            productDiscountPercent: 25,
            productPriceAfterDiscount: 2250,
            productImages: "/img/puma_track_pants.jpg",
            onSale: true,
          },
          {
            productName: "Under Armour Shorts",
            price: 2500,
            qty: 12,
            productRatings: 4.3,
            productDiscountPercent: 18,
            productPriceAfterDiscount: 2050,
            productImages: "/img/under_armour_shorts.jpg",
            onSale: false,
          },
        ],
      },
      {
        subCategoryName: "women",
        subCategoryImage: "/img/women_category.jpg",
        products: [
          {
            productName: "Levi's Skinny Jeans",
            price: 4500,
            qty: 10,
            productRatings: 4.4,
            productDiscountPercent: 15,
            productPriceAfterDiscount: 3825,
            productImages: "/img/levis_skinny_jeans.jpg",
            onSale: true,
          },
          {
            productName: "Nike Sports Bra",
            price: 2500,
            qty: 20,
            productRatings: 4.6,
            productDiscountPercent: 10,
            productPriceAfterDiscount: 2250,
            productImages: "/img/nike_sports_bra.jpg",
            onSale: true,
          },
          {
            productName: "Adidas Leggings",
            price: 3000,
            qty: 12,
            productRatings: 4.5,
            productDiscountPercent: 20,
            productPriceAfterDiscount: 2400,
            productImages: "/img/adidas_leggings.jpg",
            onSale: false,
          },
          {
            productName: "Puma T-Shirt",
            price: 1800,
            qty: 15,
            productRatings: 4.2,
            productDiscountPercent: 15,
            productPriceAfterDiscount: 1530,
            productImages: "/img/puma_tshirt.jpg",
            onSale: true,
          },
          {
            productName: "Under Armour Tank Top",
            price: 2000,
            qty: 18,
            productRatings: 4.3,
            productDiscountPercent: 18,
            productPriceAfterDiscount: 1640,
            productImages: "/img/under_armour_tank_top.jpg",
            onSale: false,
          },
        ],
      },
    ],
  },
];


export const Categories = [
  {
    categoryName:'Mobile',
    categoryImage:'/images/14promax.png'
  },
  {
    categoryName:'Computer',
    categoryImage:'/images/laptop.png'
  },
  {
    categoryName:'T-Shirts',
    categoryImage:'/images/t-shirt.png'
  },
  {
    categoryName:'Jackets',
    categoryImage:'/images/jacket.png'
  },
  {
    categoryName:'Smart Watch',
    categoryImage:'/images/smart watch.png'
  },
  {
    categoryName:'Headphones',
    categoryImage:'/images/headphone.png'
  },
  {
    categoryName:'Chargers',
    categoryImage:'/images/charger.png'
  },
  {
    categoryName:'Bluetooth Speaker',
    categoryImage:'/images/speakers.png'
  },
]

export const Brands = [
  {
    brandName:'Huawei',
    brandImage:'/images/huawei.png'
  },
  {
    brandName:'Apple',
    brandImage:'/images/apple.png'
  },
  {
    brandName:'Xiomi',
    brandImage:'/images/xiomi.png'
  },
  {
    brandName:'7up',
    brandImage:'/images/7up.png'
  },
  {
    brandName:'Pepsi',
    brandImage:'/images/pepsi.png'
  },
  {
    brandName:'Dany',
    brandImage:'/images/dany.png'
  },
]

export const services = [
  {
    serviceName:'Frequently Asked Questions',
    serviceImage:'/images/FAQ.jpg'
  },
  {
    serviceName:'Home Delivery Options',
    serviceImage:'/images/delivery-man1.jpg'
  },
  {
    serviceName:'Online Payment Process',
    serviceImage:'/images/FAQ.jpg'
  },
  {
    serviceName:'Money Back Guarantee',
    serviceImage:'/images/money-back.jpg'
  },
]