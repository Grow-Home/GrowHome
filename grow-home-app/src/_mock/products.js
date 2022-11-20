import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'REWE',
  'Income',
  'Lidl',
  'TUM Cafeteria',
  'TUM Mensa',
  'Cinema',
  'Barschwein',
  'Bowling',
  'Icescating',
  'Fitnesscenter',
  'Rent',
  'Health Insurance',
];
const PRODUCT_CATEGORIES = [
  'Food',
  'Income',
  'Food',
  'Food',
  'Food',
  'Activities',
  'Activities',
  'Activities',
  'Activities',
  'FixedCosts',
  'FixedCosts',
  'FixedCosts'
];
const PRODUCT_PRICE = [
  '28.50',
  '3000',
  '7.60',
  '5.50',
  '12.70',
  '17.99',
  '30.00',
  '10.99',
  '5.00',
  '40.00',
  '800.00',
  '150.0'
];
const PRODUCT_DATE = [
  '2022-11-19',
  '2022-11-18',
  '2022-11-18',
  '2022-11-16',
  '2022-11-13',
  '2022-11-15',
  '2022-11-14',
  '2022-11-17',
  '2022-11-18',
  '2022-11-12',
  '2022-11-11',
  '2022-11-19'
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: index,
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: PRODUCT_PRICE[index],
    categories: PRODUCT_CATEGORIES[index],
    date: PRODUCT_DATE[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
