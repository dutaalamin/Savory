function Menu() {
  const [menuItems] = useState([
    // ... existing menu items ...

    // Tambahan Main Course
    {
      id: 17,
      name: "Beef Rendang",
      category: "Main Course",
      price: 185000,
      description: "Padang style beef slow-cooked in coconut milk and spices",
      image: "https://img.freepik.com/free-photo/rendang-beef_1339-3842.jpg",
      isSpicy: true
    },
    {
      id: 18,
      name: "Duck Confit",
      category: "Main Course",
      price: 225000,
      description: "French-style duck leg slowly cooked in its own fat",
      image: "https://img.freepik.com/free-photo/duck-confit_1339-4526.jpg",
      isSpicy: false
    },

    // Tambahan Appetizer
    {
      id: 19,
      name: "Tuna Tartare",
      category: "Appetizer",
      price: 95000,
      description: "Fresh tuna with avocado, sesame oil and ponzu sauce",
      image: "https://img.freepik.com/free-photo/tuna-tartare_1339-3254.jpg",
      isSpicy: false
    },
    {
      id: 20,
      name: "Mushroom Soup",
      category: "Appetizer",
      price: 70000,
      description: "Creamy soup with mixed forest mushrooms",
      image: "https://img.freepik.com/free-photo/mushroom-soup_1339-1567.jpg",
      isSpicy: false
    },

    // Tambahan Dessert
    {
      id: 21,
      name: "Matcha Cheesecake",
      category: "Dessert",
      price: 68000,
      description: "Japanese green tea flavored cheesecake",
      image: "https://img.freepik.com/free-photo/matcha-cheesecake_1339-4752.jpg",
      isSpicy: false
    },
    {
      id: 22,
      name: "Mango Panna Cotta",
      category: "Dessert",
      price: 62000,
      description: "Italian cream dessert with fresh mango topping",
      image: "https://img.freepik.com/free-photo/panna-cotta_1339-3845.jpg",
      isSpicy: false
    },

    // Tambahan Beverages
    {
      id: 23,
      name: "Tropical Smoothie",
      category: "Beverages",
      price: 48000,
      description: "Blend of mango, pineapple and passion fruit",
      image: "https://img.freepik.com/free-photo/tropical-smoothie_1339-3678.jpg",
      isSpicy: false
    },
    {
      id: 24,
      name: "Espresso Martini",
      category: "Beverages",
      price: 90000,
      description: "Cocktail with vodka, coffee liqueur and fresh espresso",
      image: "https://img.freepik.com/free-photo/espresso-martini_1339-4268.jpg",
      isSpicy: false
    }
  ]);

  // ... rest of the existing code ...
} 