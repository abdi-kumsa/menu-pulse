import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  Filter,
  TrendingUp,
  Award,
  Users,
  Calendar
} from "lucide-react";

interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
  category?: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    date: "2 days ago",
    title: "Absolutely incredible experience!",
    content: "The pasta carbonara was divine - perfectly creamy with just the right amount of pancetta. The ambiance is romantic and the service was exceptional. Our server was knowledgeable about wine pairings. Will definitely be back!",
    helpful: 24,
    verified: true,
    category: "Food Quality"
  },
  {
    id: "2",
    name: "Rohit Kumar",
    rating: 5,
    date: "1 week ago",
    title: "Best Italian food in Mumbai!",
    content: "Came here for our anniversary and everything was perfect. The wood-fired pizza reminded me of the ones I had in Naples. The tiramisu was heavenly. Staff went above and beyond to make our evening special.",
    helpful: 18,
    verified: true,
    category: "Service"
  },
  {
    id: "3",
    name: "Sarah Johnson",
    rating: 4,
    date: "2 weeks ago",
    title: "Great food, lovely atmosphere",
    content: "Beautiful restaurant with authentic Italian decor. The risotto was creamy and flavorful. Only minor complaint is that it gets quite busy on weekends, so make sure to book ahead. Overall great experience!",
    helpful: 12,
    verified: true,
    category: "Atmosphere"
  },
  {
    id: "4",
    name: "Amit Patel",
    rating: 5,
    date: "3 weeks ago",
    title: "Outstanding dinner experience",
    content: "The grilled salmon was cooked to perfection, and the wine selection is impressive. The chef even came out to check on us. This level of attention to detail is rare. Worth every rupee!",
    helpful: 31,
    verified: true,
    category: "Food Quality"
  },
  {
    id: "5",
    name: "Lisa Chen",
    rating: 4,
    date: "1 month ago",
    title: "Lovely place for special occasions",
    content: "Celebrated my birthday here and the staff surprised me with a complimentary dessert. The margherita pizza was authentic and delicious. Good vegetarian options too. Highly recommend!",
    helpful: 9,
    verified: false,
    category: "Service"
  },
  {
    id: "6",
    name: "Vikram Singh",
    rating: 5,
    date: "1 month ago",
    title: "Exceeded all expectations",
    content: "From the moment we walked in, we felt welcomed. The lamb curry was exceptional - perfectly spiced and tender. The cocktails are also well-crafted. This place sets the bar high!",
    helpful: 16,
    verified: true,
    category: "Food Quality"
  }
];

const ratingDistribution = [
  { stars: 5, count: 856, percentage: 71 },
  { stars: 4, count: 234, percentage: 19 },
  { stars: 3, count: 78, percentage: 7 },
  { stars: 2, count: 24, percentage: 2 },
  { stars: 1, count: 8, percentage: 1 }
];

export function ReviewsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const averageRating = 4.8;
  const totalReviews = 1200;

  const handleFilter = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === "all") {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.filter(review => 
        review.category?.toLowerCase() === filter.toLowerCase()
      ));
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white mb-4">Customer Reviews</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See what our guests are saying about their dining experience at Bella Vista. 
          Your feedback helps us continue to deliver exceptional service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reviews Overview */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="text-gray-400">Based on {totalReviews.toLocaleString()} reviews</div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm text-white">{rating.stars}</span>
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    </div>
                    <Progress value={rating.percentage} className="flex-1 h-2" />
                    <span className="text-sm text-gray-400 w-12 text-right">
                      {rating.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <div className="text-white font-semibold">95%</div>
                <div className="text-gray-400 text-sm">Recommend</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4 text-center">
                <Award className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <div className="text-white font-semibold">4.8/5</div>
                <div className="text-gray-400 text-sm">Food Quality</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Filter className="h-5 w-5 text-orange-500" />
                Filter Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {["all", "Food Quality", "Service", "Atmosphere"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleFilter(filter)}
                    className={
                      selectedFilter === filter
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {filter === "all" ? "All Reviews" : filter}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-orange-500 text-white">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">{review.name}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="bg-green-600 text-green-100 text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium text-white mb-2">{review.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{review.content}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      {review.category && (
                        <Badge variant="outline" className="border-gray-600 text-gray-400">
                          {review.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gray-900 border-gray-800 mt-12">
        <CardContent className="p-8 text-center">
          <MessageSquare className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Share Your Experience</h2>
          <p className="text-gray-300 mb-6">
            Had a great meal with us? We'd love to hear about your experience!
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Write a Review
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}