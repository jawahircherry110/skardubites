const Products = [
  // Pakistani (10)
  {
    id: 1,
    name: "Biryani",
    price: 8.99,
    category: "pakistani",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Karahi",
    price: 12.99,
    category: "pakistani",
    image: "https://images.unsplash.com/photo-1716535232842-d10da4eb33d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FyYWhpfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    name: "Nihari",
    price: 10.99,
    category: "pakistani",
    image: "https://media.istockphoto.com/id/954905290/photo/food-on-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=qPB0DVO_i3FYSQ49KFzU8l5nYiYrChJ-QmiFIRkjA1Q="
  },
  {
    id: 4,
    name: "Haleem",
    price: 7.99,
    category: "pakistani",
    image: "https://media.istockphoto.com/id/1454433038/photo/chicken-haleem-with-fried-onion-and-lemon-served-in-plate-isolated-on-table-top-view-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=xKt32ektXvj6rF4hsH6oy6cAFecTHPT5gmRVlyE7bTw="
  },
  {
    id: 5,
    name: "Chapli Kebab",
    price: 6.99,
    category: "pakistani",
    image: "https://images.unsplash.com/photo-1660262849063-63c52a1fa2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcGxpJTIwa2FiYWJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Seekh Kebab",
    price: 6.49,
    category: "pakistani",
    image: "https://images.unsplash.com/photo-1630585577431-03c64600308a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcGxpJTIwa2FiYWJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    name: "Paya",
    price: 9.49,
    category: "pakistani",
    image: "https://media.istockphoto.com/id/2251954103/photo/chicken-nihari-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=P8r-UMvV5Cb2RX-eRxt_vd5tXZogk_nc4_N2iu_9rrs="
  },
  {
    id: 8,
    name: "Saag",
    price: 5.99,
    category: "pakistani",
    image: "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaSUyMHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 9,
    name: "Paratha",
    price: 3.49,
    category: "pakistani",
    image: "https://source.unsplash.com/400x400/?paratha"
  },
  {
    id: 10,
    name: "Gol Gappa",
    price: 4.99,
    category: "pakistani",
    image: "https://source.unsplash.com/400x400/?golgappa"
  },

  // Chinese (10)
  {
    id: 11,
    name: "Fried Rice",
    price: 7.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?fried-rice"
  },
  {
    id: 12,
    name: "Chow Mein",
    price: 8.49,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?chow-mein"
  },
  {
    id: 13,
    name: "Sweet and Sour Chicken",
    price: 9.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?sweet-sour-chicken"
  },
  {
    id: 14,
    name: "Spring Rolls",
    price: 5.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?spring-rolls"
  },
  {
    id: 15,
    name: "Dumplings",
    price: 6.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?dumplings"
  },
  {
    id: 16,
    name: "Kung Pao Chicken",
    price: 10.49,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?kung-pao-chicken"
  },
  {
    id: 17,
    name: "Hot and Sour Soup",
    price: 4.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?hot-sour-soup"
  },
  {
    id: 18,
    name: "Manchurian",
    price: 8.99,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?manchurian"
  },
  {
    id: 19,
    name: "Szechuan Noodles",
    price: 9.49,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?szechuan-noodles"
  },
  {
    id: 20,
    name: "Beef with Broccoli",
    price: 11.49,
    category: "chinese",
    image: "https://source.unsplash.com/400x400/?beef-broccoli"
  },

  // Cultural (10)
  {
    id: 21,
    name: "Pizza",
    price: 11.99,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?pizza"
  },
  {
    id: 22,
    name: "Burger",
    price: 8.99,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?burger"
  },
  {
    id: 23,
    name: "Pasta",
    price: 9.49,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?pasta"
  },
  {
    id: 24,
    name: "Tacos",
    price: 7.49,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?tacos"
  },
  {
    id: 25,
    name: "Sushi",
    price: 13.99,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?sushi"
  },
  {
    id: 26,
    name: "Steak",
    price: 15.99,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?steak"
  },
  {
    id: 27,
    name: "French Fries",
    price: 4.49,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?french-fries"
  },
  {
    id: 28,
    name: "Sandwich",
    price: 6.49,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?sandwich"
  },
  {
    id: 29,
    name: "Donuts",
    price: 5.49,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?donuts"
  },
  {
    id: 30,
    name: "Ice Cream",
    price: 3.99,
    category: "cultural",
    image: "https://source.unsplash.com/400x400/?ice-cream"
  }
];

export default Products;