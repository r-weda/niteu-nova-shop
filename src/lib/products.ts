export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: "Best Seller" | "New" | "Limited" | "Sale";
}

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Beauty & Health",
  "Sports & Outdoors",
  "Books & Media",
  "Toys & Games",
  "Automotive",
  "Pet Supplies",
  "Office Supplies"
];

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 38999,
    originalPrice: 51999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2456,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.",
    features: ["40-hour battery life", "Active noise cancellation", "Premium sound quality", "Comfortable fit"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 58499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1823,
    description: "Stay connected and track your fitness with our advanced smart watch.",
    features: ["Heart rate monitor", "GPS tracking", "Water resistant", "7-day battery"],
    inStock: true,
    badge: "New"
  },
  {
    id: "3",
    name: "4K Action Camera",
    price: 45499,
    originalPrice: 58499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 987,
    description: "Capture your adventures in stunning 4K resolution with image stabilization.",
    features: ["4K video at 60fps", "Waterproof", "Image stabilization", "WiFi connectivity"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    price: 16899,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 3421,
    description: "Powerful sound in a compact design. Perfect for outdoor adventures.",
    features: ["360-degree sound", "Waterproof", "20-hour battery", "Deep bass"],
    inStock: true
  },
  {
    id: "5",
    name: "Wireless Gaming Mouse",
    price: 11699,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 1567,
    description: "Professional-grade wireless gaming mouse with customizable RGB lighting.",
    features: ["16000 DPI sensor", "Programmable buttons", "RGB lighting", "Ergonomic design"],
    inStock: true,
    badge: "Best Seller"
  },

  // Fashion
  {
    id: "6",
    name: "Classic Leather Jacket",
    price: 38999,
    originalPrice: 58499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 892,
    description: "Timeless leather jacket crafted from premium genuine leather.",
    features: ["Genuine leather", "Multiple pockets", "Comfortable lining", "Available in S-XXL"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "7",
    name: "Designer Sunglasses",
    price: 24699,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1234,
    description: "Stylish designer sunglasses with UV protection and polarized lenses.",
    features: ["UV400 protection", "Polarized lenses", "Lightweight frame", "Includes case"],
    inStock: true
  },
  {
    id: "8",
    name: "Premium Denim Jeans",
    price: 11699,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2341,
    description: "Comfortable premium denim jeans with a modern fit.",
    features: ["Stretch denim", "Modern fit", "5-pocket design", "Multiple washes available"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "9",
    name: "Luxury Handbag",
    price: 51999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 678,
    description: "Elegant luxury handbag crafted from premium materials.",
    features: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Designer hardware"],
    inStock: true,
    badge: "New"
  },
  {
    id: "10",
    name: "Running Sneakers Pro",
    price: 19499,
    originalPrice: 25999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 3456,
    description: "High-performance running sneakers with advanced cushioning technology.",
    features: ["Advanced cushioning", "Breathable mesh", "Durable outsole", "Lightweight design"],
    inStock: true,
    badge: "Best Seller"
  },

  // Home & Garden
  {
    id: "11",
    name: "Smart Home Security Camera",
    price: 179.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1892,
    description: "Keep your home secure with 1080p HD video and night vision.",
    features: ["1080p HD video", "Night vision", "Two-way audio", "Motion detection"],
    inStock: true
  },
  {
    id: "12",
    name: "Aromatherapy Diffuser",
    price: 49.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 2134,
    description: "Create a relaxing atmosphere with this elegant aromatherapy diffuser.",
    features: ["LED lights", "Auto shut-off", "Quiet operation", "Large capacity"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "13",
    name: "Robot Vacuum Cleaner",
    price: 399.99,
    originalPrice: 599.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1567,
    description: "Smart robot vacuum with mapping technology and app control.",
    features: ["Smart mapping", "App control", "Strong suction", "Self-charging"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "14",
    name: "Memory Foam Pillow Set",
    price: 79.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1631049035701-f1c036bb9e5d?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 3421,
    description: "Premium memory foam pillows for ultimate comfort and support.",
    features: ["Memory foam", "Cooling gel", "Hypoallergenic", "Set of 2"],
    inStock: true
  },
  {
    id: "15",
    name: "LED String Lights",
    price: 34.99,
    category: "Home & Garden",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 2890,
    description: "Create ambiance with these energy-efficient LED string lights.",
    features: ["50 feet length", "Remote control", "8 lighting modes", "Weatherproof"],
    inStock: true,
    badge: "Best Seller"
  },

  // Beauty & Health
  {
    id: "16",
    name: "Professional Hair Dryer",
    price: 129.99,
    category: "Beauty & Health",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1678,
    description: "Salon-quality hair dryer with ionic technology for faster drying.",
    features: ["Ionic technology", "3 heat settings", "Cool shot button", "Professional grade"],
    inStock: true
  },
  {
    id: "17",
    name: "Fitness Tracker Band",
    price: 79.99,
    category: "Beauty & Health",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 2345,
    description: "Track your fitness goals with this advanced activity tracker.",
    features: ["Heart rate monitor", "Sleep tracking", "Waterproof", "14-day battery"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "18",
    name: "Luxury Skincare Set",
    price: 199.99,
    originalPrice: 299.99,
    category: "Beauty & Health",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 987,
    description: "Complete skincare routine with premium anti-aging ingredients.",
    features: ["5-piece set", "Anti-aging formula", "Natural ingredients", "Dermatologist tested"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "19",
    name: "Electric Toothbrush",
    price: 89.99,
    category: "Beauty & Health",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 3421,
    description: "Advanced electric toothbrush with multiple cleaning modes.",
    features: ["5 cleaning modes", "2-minute timer", "Long battery life", "Pressure sensor"],
    inStock: true
  },
  {
    id: "20",
    name: "Yoga Mat Premium",
    price: 49.99,
    category: "Beauty & Health",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1890,
    description: "Extra-thick yoga mat with superior grip and cushioning.",
    features: ["6mm thickness", "Non-slip surface", "Eco-friendly", "Carrying strap included"],
    inStock: true,
    badge: "Best Seller"
  },

  // Sports & Outdoors
  {
    id: "21",
    name: "Camping Tent 4-Person",
    price: 249.99,
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1234,
    description: "Spacious 4-person tent perfect for family camping adventures.",
    features: ["Waterproof", "Easy setup", "Spacious interior", "Ventilation system"],
    inStock: true
  },
  {
    id: "22",
    name: "Mountain Bike Pro",
    price: 899.99,
    originalPrice: 1199.99,
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 567,
    description: "Professional mountain bike with 21-speed gear system.",
    features: ["21-speed gears", "Aluminum frame", "Disc brakes", "Suspension fork"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "23",
    name: "Hiking Backpack 50L",
    price: 129.99,
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 2134,
    description: "Durable 50L hiking backpack with multiple compartments.",
    features: ["50L capacity", "Water-resistant", "Padded straps", "Multiple pockets"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "24",
    name: "Golf Club Set",
    price: 599.99,
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 432,
    description: "Complete golf club set for beginners and intermediate players.",
    features: ["12-piece set", "Graphite shafts", "Includes bag", "Suitable for all skill levels"],
    inStock: true
  },
  {
    id: "25",
    name: "Fishing Rod & Reel Combo",
    price: 89.99,
    category: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1567,
    description: "Premium fishing rod and reel combo for freshwater and saltwater.",
    features: ["Carbon fiber rod", "Smooth reel", "Corrosion resistant", "Portable design"],
    inStock: true
  },

  // Books & Media
  {
    id: "26",
    name: "E-Reader Premium",
    price: 199.99,
    category: "Books & Media",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2341,
    description: "Lightweight e-reader with glare-free display and long battery life.",
    features: ["7-inch display", "Adjustable backlight", "Weeks of battery", "Waterproof"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "27",
    name: "Vinyl Record Player",
    price: 249.99,
    category: "Books & Media",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 876,
    description: "Vintage-style vinyl record player with modern features.",
    features: ["Bluetooth connectivity", "Built-in speakers", "USB output", "3-speed turntable"],
    inStock: true
  },
  {
    id: "28",
    name: "Board Game Collection",
    price: 79.99,
    category: "Books & Media",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1456,
    description: "Classic board game collection for family entertainment.",
    features: ["5 classic games", "Family-friendly", "High-quality pieces", "Storage box included"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "29",
    name: "Art Supplies Professional Set",
    price: 149.99,
    category: "Books & Media",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 789,
    description: "Complete professional art supplies set for artists.",
    features: ["150+ pieces", "Premium quality", "Wooden case", "Various mediums"],
    inStock: true
  },
  {
    id: "30",
    name: "Digital Drawing Tablet",
    price: 299.99,
    originalPrice: 399.99,
    category: "Books & Media",
    image: "https://images.unsplash.com/photo-1575909812264-6902b55846ad?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 1234,
    description: "Professional digital drawing tablet with pressure sensitivity.",
    features: ["8192 pressure levels", "Battery-free pen", "10-inch screen", "Compatible with major software"],
    inStock: true,
    badge: "Sale"
  },

  // Toys & Games
  {
    id: "31",
    name: "Remote Control Drone",
    price: 199.99,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1567,
    description: "High-performance drone with HD camera and GPS.",
    features: ["HD camera", "GPS navigation", "20-minute flight time", "Easy to fly"],
    inStock: true,
    badge: "New"
  },
  {
    id: "32",
    name: "Building Blocks Mega Set",
    price: 89.99,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2890,
    description: "1000-piece building blocks set for creative construction.",
    features: ["1000 pieces", "Compatible with major brands", "Storage box", "Instruction booklet"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "33",
    name: "Educational STEM Kit",
    price: 69.99,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1234,
    description: "Interactive STEM learning kit for kids aged 8-12.",
    features: ["30+ experiments", "Educational guide", "Safe materials", "Award-winning"],
    inStock: true
  },
  {
    id: "34",
    name: "Action Figure Collection",
    price: 49.99,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 987,
    description: "Collectible action figure set with accessories.",
    features: ["6-figure set", "Articulated joints", "Accessories included", "Display stand"],
    inStock: true
  },
  {
    id: "35",
    name: "Puzzle 3D Castle",
    price: 59.99,
    category: "Toys & Games",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1678,
    description: "Intricate 3D puzzle castle with 500+ pieces.",
    features: ["500+ pieces", "3D assembly", "Detailed design", "Display-worthy"],
    inStock: true,
    badge: "Best Seller"
  },

  // Automotive
  {
    id: "36",
    name: "Dash Cam Pro",
    price: 149.99,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1602523896029-4a5c0c5f0e14?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 2134,
    description: "Full HD dash cam with night vision and parking mode.",
    features: ["1080p Full HD", "Night vision", "Loop recording", "G-sensor"],
    inStock: true
  },
  {
    id: "37",
    name: "Car Vacuum Cleaner",
    price: 69.99,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 1890,
    description: "Powerful cordless car vacuum cleaner with multiple attachments.",
    features: ["Cordless", "Powerful suction", "Multiple attachments", "Long battery life"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "38",
    name: "Tire Inflator Portable",
    price: 59.99,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 2567,
    description: "Compact portable tire inflator with digital display.",
    features: ["Digital display", "Auto shut-off", "LED flashlight", "Compact design"],
    inStock: true
  },
  {
    id: "39",
    name: "Car Phone Mount",
    price: 29.99,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 3421,
    description: "Universal car phone mount with strong suction cup.",
    features: ["360-degree rotation", "Strong suction", "One-hand operation", "Universal fit"],
    inStock: true
  },
  {
    id: "40",
    name: "Jump Starter Power Bank",
    price: 99.99,
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1456,
    description: "Portable jump starter and power bank for emergency situations.",
    features: ["20000mAh capacity", "LED flashlight", "USB charging ports", "Safety protection"],
    inStock: true,
    badge: "Best Seller"
  },

  // Pet Supplies
  {
    id: "41",
    name: "Automatic Pet Feeder",
    price: 89.99,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1678,
    description: "Smart automatic pet feeder with portion control and timer.",
    features: ["Programmable timer", "Portion control", "Large capacity", "Easy to clean"],
    inStock: true
  },
  {
    id: "42",
    name: "Pet Camera with Treat Dispenser",
    price: 149.99,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 987,
    description: "Interactive pet camera with two-way audio and treat dispenser.",
    features: ["1080p HD video", "Two-way audio", "Treat dispenser", "Motion alerts"],
    inStock: true,
    badge: "New"
  },
  {
    id: "43",
    name: "Premium Dog Bed",
    price: 79.99,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 2341,
    description: "Orthopedic dog bed with memory foam for ultimate comfort.",
    features: ["Memory foam", "Removable cover", "Non-slip bottom", "Machine washable"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "44",
    name: "Cat Litter Box Automatic",
    price: 299.99,
    originalPrice: 399.99,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 876,
    description: "Self-cleaning automatic litter box for hassle-free maintenance.",
    features: ["Self-cleaning", "Odor control", "Large capacity", "Quiet operation"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "45",
    name: "Interactive Cat Toy",
    price: 34.99,
    category: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 1890,
    description: "Automated interactive toy to keep your cat entertained.",
    features: ["Motion sensor", "Rechargeable", "Multiple modes", "Durable design"],
    inStock: true
  },

  // Office Supplies
  {
    id: "46",
    name: "Ergonomic Office Chair",
    price: 349.99,
    originalPrice: 499.99,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 1567,
    description: "Premium ergonomic office chair with lumbar support.",
    features: ["Lumbar support", "Adjustable height", "Breathable mesh", "360-degree swivel"],
    inStock: true,
    badge: "Sale"
  },
  {
    id: "47",
    name: "Standing Desk Converter",
    price: 249.99,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 2134,
    description: "Adjustable standing desk converter for healthier work habits.",
    features: ["Height adjustable", "Spacious surface", "Keyboard tray", "Sturdy construction"],
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "48",
    name: "Wireless Keyboard & Mouse",
    price: 79.99,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 3421,
    description: "Sleek wireless keyboard and mouse combo for productivity.",
    features: ["Wireless connectivity", "Long battery life", "Ergonomic design", "Quiet keys"],
    inStock: true
  },
  {
    id: "49",
    name: "Monitor Arm Dual Mount",
    price: 129.99,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 1234,
    description: "Dual monitor arm mount for improved workspace ergonomics.",
    features: ["Dual monitor support", "Full articulation", "Cable management", "Easy installation"],
    inStock: true
  },
  {
    id: "50",
    name: "Desk Organizer Set",
    price: 49.99,
    category: "Office Supplies",
    image: "https://images.unsplash.com/photo-1594050760280-4c7ea6cf3e48?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 2890,
    description: "Premium desk organizer set to keep your workspace tidy.",
    features: ["Multiple compartments", "Premium materials", "Modern design", "10-piece set"],
    inStock: true,
    badge: "Best Seller"
  }
];
