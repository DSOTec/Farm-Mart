import React from 'react'
import tomatoImage from '../assets/items/tomato.png';
import pepperImage from '../assets/items/classic red pepper.png';
import afrospicyImage from '../assets/items/afrospicyredpepper.png';
import redImage from '../assets/items/red ball pepper.png';
import spicyImage from '../assets/items/spicy pepper.png';
import bisolaImage from '../assets/items/Bisola pepper.png'; 

const items = [
  {
    id: 1,
    image: tomatoImage, // 
    title: 'Farm Fresh Organic Pepper',
    farmer: 'Abo Farms',
    remaining: 40, // Number of items left
    price: 17300, // 
  },
  {
    id: 2,
    image: pepperImage,
    title: 'Classic Red Pepper',
    farmer: 'Alhaji Farms',
    remaining: 50,
    price: 7500,
  },
  {
    id: 3,
    image: afrospicyImage,
    title: 'Afro Spicy Red Pepper',
    farmer: 'Ruka Farms',
    remaining: 20,
    price: 17500,
  },
  {
    id: 4,
    image: spicyImage,
    title: 'Spicy Pepper',
    farmer: 'Spicy Farms',
    remaining: 100,
    price: 17250,
  },
  {
    id: 5,
    image: redImage,
    title: 'Red Ball Pepper (Shombo)',
    farmer: 'Alhaji Farms',
    remaining: 50,
    price: 7250,
  },
  {
    id: 6,
    image: bisolaImage,
    title: 'Bisola Pepper (Rodo)',
    farmer: 'Bisola Farms',
    remaining: 65,
    price: 17100,
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    title: 'Spinach (Bunch)',
    farmer: 'Anna Davis',
    remaining: 25,
    price: 150,
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    title: 'Sweet Corn (Each)',
    farmer: 'Chris Martinez',
    remaining: 35,
    price: 100,
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    title: 'Strawberries (250g)',
    farmer: 'Laura Garcia',
    remaining: 10,
    price: 450,
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/150',
    title: 'Honey (500g)',
    farmer: 'James Anderson',
    remaining: 5,
    price: 600,
  },
];

export default items;