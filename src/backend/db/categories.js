import {
  v4 as uuid
} from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
    _id: uuid(),
    categoryName: "Clothing",
    Image: "Images/jacket.webp",
  },
  {
    _id: uuid(),
    categoryName: "Camping",
    Image: "Images/tent.webp",
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    Image: "Images/shoes.webp",
  },
  {
    _id: uuid(),
    categoryName: "Backpacks",
    Image: "Images/bag.webp",
  },
  {
    _id: uuid(),
    categoryName: "Equpments",
    Image: "Images/light.webp",
  },
];


export const HeroCategories = [{
    _id: uuid(),
    categoryText: "WATERPROOF",
    categorySubtext: "JACKETS",
    Image: "Images/jackets.webp",
  },
  {
    _id: uuid(),
    categoryText: "10-90L",
    categorySubtext: "BACKPACKS",
    Image: "Images/backpack1.webp",
  },
  {
    _id: uuid(),
    categoryText: "TREKKING",
    categorySubtext: "GEARS",
    Image: "Images/gears.webp",
  },
  {
    _id: uuid(),
    categoryText: "CAMPING",
    categorySubtext: "TENTS",
    Image: "Images/tentcamp.webp",
  },
]