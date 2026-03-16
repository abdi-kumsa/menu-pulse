import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ChefHat, 
  Clock, 
  Award, 
  Users, 
  Heart, 
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white mb-4">About Bella Vista</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A culinary journey through authentic Italian flavors, bringing you the finest dining experience 
          with fresh ingredients, traditional recipes, and modern presentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Restaurant Image */}
        <div className="aspect-video rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1MzQwMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Bella Vista Restaurant Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Story */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2015 by the Rossi family, Bella Vista has been serving authentic Italian 
              cuisine with a passion for excellence. Our recipes have been passed down through 
              generations, combining traditional techniques with contemporary flavors.
            </p>
            <p className="text-gray-300">
              Every dish is crafted with love, using the finest imported Italian ingredients and 
              locally sourced fresh produce. Our wood-fired oven, imported directly from Naples, 
              creates the perfect crispy yet tender pizzas that have made us famous.
            </p>
          </div>

          {/* Awards & Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-white font-semibold">4.8/5 Rating</div>
                <div className="text-gray-400 text-sm">1,200+ Reviews</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-white font-semibold">50,000+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ChefHat className="h-6 w-6 text-orange-500" />
                Quality First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We source only the finest ingredients and maintain the highest standards 
                in food preparation and presentation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="h-6 w-6 text-orange-500" />
                Family Tradition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our recipes and techniques have been perfected over generations, 
                bringing authentic Italian flavors to your table.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Clock className="h-6 w-6 text-orange-500" />
                Fresh Daily
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Everything is prepared fresh daily in our kitchen, from handmade pasta 
                to our signature sauces and dressings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                123 Food Street<br />
                Downtown District<br />
                Mumbai, Maharashtra 400001
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">
                +91 98765 43210<br />
                +91 22 1234 5678
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                info@bellavista.com<br />
                reservations@bellavista.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hours */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-center text-white">
            <Clock className="h-6 w-6 mx-auto mb-2 text-orange-500" />
            Opening Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <h4 className="text-white font-semibold mb-2">Monday - Thursday</h4>
              <p className="text-gray-300">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Friday - Sunday</h4>
              <p className="text-gray-300">11:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Badge variant="secondary" className="bg-orange-600 text-white">
              Open until 10 PM Today
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}