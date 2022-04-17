import {
  v4 as uuid
} from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
    _id: uuid(),
    categoryName: "clothing",
    Image: "Images/jacket.webp",
  },
  {
    _id: uuid(),
    categoryName: "camping",
    Image: "Images/tent.webp",
  },
  {
    _id: uuid(),
    categoryName: "footwear",
    Image: "Images/shoes.webp",
  },
  {
    _id: uuid(),
    categoryName: "backpacks",
    Image: "Images/bag.webp",
  },
  {
    _id: uuid(),
    categoryName: "gears",
    Image: "Images/light.webp",
  },
];


export const HeroCategories = [{
    _id: uuid(),
    categoryName: "clothing",
    categoryText: "WATERPROOF",
    categorySubtext: "JACKETS",
    Image: "Images/jackets.webp",
  },
  {
    _id: uuid(),
    categoryName: "backpacks",
    categoryText: "10-90L",
    categorySubtext: "BACKPACKS",
    Image: "Images/backpack1.webp",
  },
  {
    _id: uuid(),
    categoryName: "gears",
    categoryText: "TREKKING",
    categorySubtext: "GEARS",
    Image: "Images/gears.webp",
  },
  {
    _id: uuid(),
    categoryName: "camping",
    categoryText: "CAMPING",
    categorySubtext: "TENTS",
    Image: "Images/tentcamp.webp",
  },
]