import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface MenuCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  itemCounts: Record<string, number>;
}

export function MenuCategories({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  itemCounts 
}: MenuCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`flex items-center gap-2 ${
            activeCategory === category 
              ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500" 
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
          <Badge 
            variant="secondary" 
            className={`ml-1 ${
              activeCategory === category 
                ? "bg-orange-600 text-white" 
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {itemCounts[category] || 0}
          </Badge>
        </Button>
      ))}
    </div>
  );
}