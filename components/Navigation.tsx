import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { 
  ChefHat, 
  Clock, 
  Star, 
  Menu, 
  Phone, 
  MapPin, 
  ShoppingCart,
  User,
  Heart
} from "lucide-react";

interface NavigationProps {
  cartItemCount: number;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ cartItemCount, activeSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Menu", section: "menu" },
    { name: "About", section: "about" },
    { name: "Reservations", section: "reservations" },
    { name: "Contact", section: "contact" },
    { name: "Reviews", section: "reviews" }
  ];

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Restaurant Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <div>
                <h1 className="text-xl font-semibold text-white">Bella Vista</h1>
                <p className="text-sm text-gray-400">Italian Restaurant & Bar</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
                onClick={() => handleNavClick(link.section)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Restaurant Info */}
            <div className="hidden md:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>Open until 10 PM</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 (1,200+)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-500">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-500">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-orange-500 relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="lg:hidden text-gray-300 hover:text-orange-500 inline-flex items-center justify-center rounded-md p-2 transition-colors">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <div className="flex flex-col gap-6 pt-6">
                  <div className="flex items-center gap-2">
                    <ChefHat className="h-6 w-6 text-orange-500" />
                    <span className="text-lg font-semibold text-white">Bella Vista</span>
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={`#${link.section}`}
                        className="text-gray-300 hover:text-orange-500 transition-colors font-medium py-2"
                        onClick={() => handleNavClick(link.section)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>

                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex flex-col gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>Open until 10 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="h-4 w-4" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>123 Food Street, City</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>4.8 (1,200+ reviews)</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Make Reservation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}