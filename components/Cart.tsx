import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { MenuItemType } from "./MenuItem";

export interface CartItem {
  item: MenuItemType;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.quantity), 0);
  const itemCount = items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  if (items.length === 0) {
    return (
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <ShoppingCart className="h-5 w-5" />
            Your Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            Your cart is empty
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <ShoppingCart className="h-5 w-5" />
          Your Cart
          <Badge variant="secondary" className="bg-orange-600 text-white">
            {itemCount} item{itemCount !== 1 ? 's' : ''}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((cartItem) => (
          <div key={cartItem.item.id} className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-white">{cartItem.item.name}</h4>
              <p className="text-gray-400">₹{cartItem.item.price} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                className="h-8 w-8 p-0 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center text-white">{cartItem.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                className="h-8 w-8 p-0 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveItem(cartItem.item.id)}
                className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <Separator className="bg-gray-700" />
        
        <div className="flex justify-between items-center font-medium text-white">
          <span>Total:</span>
          <span className="text-orange-500">₹{total}</span>
        </div>
        
        <Button 
          onClick={onCheckout} 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          size="lg"
        >
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
}