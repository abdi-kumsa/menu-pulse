import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plus, Minus } from "lucide-react";

export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface MenuItemProps {
  item: MenuItemType;
  quantity: number;
  onAdd: (item: MenuItemType) => void;
  onRemove: (itemId: string) => void;
}

export function MenuItem({ item, quantity, onAdd, onRemove }: MenuItemProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
      <div className="aspect-video relative">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {item.isVegetarian && (
            <Badge variant="secondary" className="bg-green-600 text-green-100 border-green-500">
              Vegetarian
            </Badge>
          )}
          {item.isSpicy && (
            <Badge variant="destructive" className="bg-red-600 text-red-100 border-red-500">
              Spicy
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-white">{item.name}</h3>
          <span className="font-medium text-orange-500">₹{item.price}</span>
        </div>
        <p className="text-gray-400 mb-4">{item.description}</p>
        
        <div className="flex items-center justify-between">
          {quantity > 0 ? (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="h-8 w-8 p-0 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium text-white">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAdd(item)}
                className="h-8 w-8 p-0 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => onAdd(item)} 
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}