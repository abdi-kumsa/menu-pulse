import { useState } from "react";
import { MenuItem, MenuItemType } from "./components/MenuItem";
import { Cart, CartItem } from "./components/Cart";
import { MenuCategories } from "./components/MenuCategories";
import { Navigation } from "./components/Navigation";
import { AboutSection } from "./components/AboutSection";
import { ReservationsSection } from "./components/ReservationsSection";
import { ContactSection } from "./components/ContactSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Badge } from "./components/ui/badge";
import { Search, ChefHat, Clock, Star } from "lucide-react";

// Sample menu data
const menuItems: MenuItemType[] = [
  // Appetizers
  {
    id: "1",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing",
    price: 1079,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1674315526518-f8891c4a8b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGFwcGV0aXplcnxlbnwxfHx8fDE3NTUzMzkxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  {
    id: "2",
    name: "Buffalo Wings",
    description: "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese dip",
    price: 1244,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1712286928542-17af515d3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd2luZ3MlMjBidWZmYWxvfGVufDF8fHx8MTc1NTMzOTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isSpicy: true
  },
  {
    id: "3",
    name: "Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, basil, garlic, and balsamic glaze",
    price: 912,
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1536739782508-c2388552aad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwYXBwZXRpemVyfGVufDF8fHx8MTc1NTI3NjgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },

  // Main Courses
  {
    id: "4",
    name: "Grilled Salmon",
    description: "Atlantic salmon grilled to perfection, served with roasted vegetables and lemon herb sauce",
    price: 2240,
    category: "mains",
    image: "https://images.unsplash.com/photo-1708388464725-5c62c6e4574d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwZGlubmVyfGVufDF8fHx8MTc1NTMzOTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "5",
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and special sauce, served with crispy fries",
    price: 1576,
    category: "mains",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwYnVyZ2VyJTIwZnJpZXN8ZW58MXx8fHwxNzU1MzM5MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "6",
    name: "Pasta Carbonara",
    description: "Creamy pasta with pancetta, egg yolk, parmesan cheese, and black pepper",
    price: 1908,
    category: "mains",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYXxlbnwxfHx8fDE3NTUzMzkxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "7",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomato sauce, and basil leaves",
    price: 1659,
    category: "mains",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emF8ZW58MXx8fHwxNzU1MzM5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  {
    id: "8",
    name: "Ribeye Steak",
    description: "Premium ribeye steak cooked to your preference, served with mashed potatoes and seasonal vegetables",
    price: 2904,
    category: "mains",
    image: "https://images.unsplash.com/photo-1728376336154-cfa772d600fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lciUyMHBsYXRlfGVufDF8fHx8MTc1NTMzOTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  // New Non-Veg Items
  {
    id: "13",
    name: "Grilled Chicken Breast",
    description: "Tender grilled chicken breast with herbs and spices, served with rice and vegetables",
    price: 2074,
    category: "mains",
    image: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGJyZWFzdHxlbnwxfHx8fDE3NTUzMTMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "14",
    name: "Lamb Curry",
    description: "Slow-cooked lamb in aromatic spices and creamy curry sauce, served with basmati rice",
    price: 2406,
    category: "mains",
    image: "https://images.unsplash.com/photo-1586981115871-f10a7ea4c8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwY3VycnklMjBkaXNofGVufDF8fHx8MTc1NTMzOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isSpicy: true
  },
  {
    id: "15",
    name: "Beef Tacos",
    description: "Three soft shell tacos filled with seasoned ground beef, lettuce, cheese, and salsa",
    price: 1410,
    category: "mains",
    image: "https://images.unsplash.com/photo-1687585612388-3b9adf8bf078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwdGFjb3MlMjBtZXhpY2FufGVufDF8fHx8MTc1NTMzOTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isSpicy: true
  },
  {
    id: "16",
    name: "BBQ Ribs",
    description: "Fall-off-the-bone pork ribs glazed with our signature BBQ sauce, served with coleslaw",
    price: 2738,
    category: "mains",
    image: "https://images.unsplash.com/photo-1704576146048-c21e5d59764b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYnElMjByaWJzJTIwcGxhdGV8ZW58MXx8fHwxNzU1MzM5NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "17",
    name: "Fish Tacos",
    description: "Grilled white fish with cabbage slaw, avocado, and chipotle mayo in corn tortillas",
    price: 1659,
    category: "mains",
    image: "https://images.unsplash.com/photo-1611262359546-64e2822b2ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFjb3MlMjBzZWFmb29kfGVufDF8fHx8MTc1NTMzOTUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "18",
    name: "Asian Pork Belly",
    description: "Crispy pork belly with Asian glaze, served with steamed rice and bok choy",
    price: 2240,
    category: "mains",
    image: "https://images.unsplash.com/photo-1541618530-bd0a83a67f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwYmVsbHklMjBhc2lhbnxlbnwxfHx8fDE3NTUzMzk1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },

  // Desserts
  {
    id: "9",
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake with dark chocolate ganache and fresh berries",
    price: 829,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NTUyNTM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  {
    id: "10",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers, mascarpone, and cocoa powder",
    price: 746,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnR8ZW58MXx8fHwxNzU1MjY4MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  // New Desserts
  {
    id: "19",
    name: "New York Cheesecake",
    description: "Creamy New York style cheesecake with graham cracker crust and berry compote",
    price: 995,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1707528903686-91cbbe2f2985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2VjYWtlJTIwc2xpY2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NTMzOTUzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  {
    id: "20",
    name: "Ice Cream Sundae",
    description: "Three scoops of vanilla ice cream with chocolate sauce, whipped cream, and cherry",
    price: 663,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHN1bmRhZXxlbnwxfHx8fDE3NTUzMzk1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },
  {
    id: "21",
    name: "Chocolate Brownie",
    description: "Warm fudgy brownie served with vanilla ice cream and chocolate drizzle",
    price: 746,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1642220618391-72214d19711c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93bmllJTIwY2hvY29sYXRlJTIwZGVzc2VydHxlbnwxfHx8fDE3NTUzMzk1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isVegetarian: true
  },

  // Beverages
  {
    id: "11",
    name: "Craft Beer",
    description: "Local craft beer on tap, rotating selection of IPAs, lagers, and seasonal brews",
    price: 580,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1635705143334-1b74e7c97b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjBnbGFzc3xlbnwxfHx8fDE3NTUyOTU0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "12",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons, mint, and a touch of honey",
    price: 414,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1573500883698-e3ef47a95feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9uYWRlJTIwZHJpbmt8ZW58MXx8fHwxNzU1MzM5MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const categories = ["all", "appetizers", "mains", "desserts", "beverages"];

export default function App() {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Filter items based on category and search
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get item counts per category
  const itemCounts = categories.reduce((counts, category) => {
    counts[category] = category === "all" 
      ? menuItems.length 
      : menuItems.filter(item => item.category === category).length;
    return counts;
  }, {} as Record<string, number>);

  // Cart functions
  const addToCart = (item: MenuItemType) => {
    setCartItems(current => {
      const existingItem = current.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return current.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...current, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(current => {
      const existingItem = current.find(cartItem => cartItem.item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return current.map(cartItem =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return current.filter(cartItem => cartItem.item.id !== itemId);
    });
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(current => current.filter(cartItem => cartItem.item.id !== itemId));
    } else {
      setCartItems(current =>
        current.map(cartItem =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity }
            : cartItem
        )
      );
    }
  };

  const removeItemFromCart = (itemId: string) => {
    setCartItems(current => current.filter(cartItem => cartItem.item.id !== itemId));
  };

  const getItemQuantity = (itemId: string): number => {
    return cartItems.find(cartItem => cartItem.item.id === itemId)?.quantity || 0;
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    setCartItems([]);
    setTimeout(() => setOrderPlaced(false), 5000);
  };

  // Calculate total cart items for navigation
  const totalCartItems = cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  // Render different sections based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "reservations":
        return <ReservationsSection />;
      case "contact":
        return <ContactSection />;
      case "reviews":
        return <ReviewsSection />;
      case "menu":
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 py-8">
            {orderPlaced && (
              <Alert className="mb-6 border-green-200 bg-green-800/20 border-green-500">
                <AlertDescription className="text-green-400">
                  🎉 Order placed successfully! Your food will be ready in 25-30 minutes.
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Menu Section */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Our Menu</h2>
                  
                  {/* Search */}
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search menu items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    />
                  </div>

                  {/* Categories */}
                  <MenuCategories
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    itemCounts={itemCounts}
                  />
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      quantity={getItemQuantity(item.id)}
                      onAdd={addToCart}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-400">No items found matching your search.</p>
                  </div>
                )}
              </div>

              {/* Cart Section */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Cart
                    items={cartItems}
                    onUpdateQuantity={updateCartQuantity}
                    onRemoveItem={removeItemFromCart}
                    onCheckout={handleCheckout}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation 
        cartItemCount={totalCartItems} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Render Current Section */}
      {renderSection()}
    </div>
  );
}