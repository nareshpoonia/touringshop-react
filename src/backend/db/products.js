import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Guardian Gears Saddle Bag",
    author: "Shiv Khera",
    price: 3399,
    categoryName: "luggage",
    image:
      "https://drive.google.com/uc?export=view&id=1_JETGp31cNARQbI2XOT4RIBeTiV9wmNU",
    condtion: "New",
    brand: "Guardian Gears",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "Konnen Panniers",
    author: "Junaid Qureshi",
    price: 9596,
    categoryName: "luggage",
    condtion: "New",
    image:
      "https://drive.google.com/uc?export=view&id=1YYcz3pO65aB_QvLf3YLJdPW4ZaP3EQcX",
    brand: "Konnen",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "Refit Top Box",
    author: "Shiv Khera",
    price: 23422,
    categoryName: "luggage",
    condtion: "New",
    image:
      "https://drive.google.com/uc?export=view&id=1RIMPIXCmRKTKoNAQf_mZnYV4W750UUiZ",
    brand: "Refit",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Refit Top Box",
    author: "Shiv Khera",
    price: 23422,
    categoryName: "luggage",
    condtion: "New",
    image:
      "https://drive.google.com/uc?export=view&id=1RIMPIXCmRKTKoNAQf_mZnYV4W750UUiZ",
    brand: "Refit",
    rating: 3,
  },
  {
    _id: uuid(),
    title: "R-Refit Top Box",
    author: "Shiv Khera",
    price: 23422,
    categoryName: "riding_gear",
    condtion: "New",
    image:
      "https://drive.google.com/uc?export=view&id=1RIMPIXCmRKTKoNAQf_mZnYV4W750UUiZ",
    brand: "Refit",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "R-Refit Top Box",
    author: "Shiv Khera",
    price: 23422,
    categoryName: "riding_gear",
    condtion: "New",
    image:
      "https://drive.google.com/uc?export=view&id=1RIMPIXCmRKTKoNAQf_mZnYV4W750UUiZ",
    brand: "Refit",
    rating: 5,
  },
];
