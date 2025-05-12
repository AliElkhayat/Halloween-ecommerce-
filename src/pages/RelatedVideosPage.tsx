
import { useState } from "react";
import { Play, Info, ThumbsUp, Share2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Improved video data with real YouTube video IDs
const halloweenVideos = [
  {
    id: 1,
    title: "DIY Halloween Decorations on a Budget",
    thumbnail: "https://i3.ytimg.com/vi/vm-8RCJt2Z0/maxresdefault.jpg",
    youtubeId: "vm-8RCJt2Z0",
    views: "125K",
    duration: "10:24",
    creator: "Spooky Crafts",
    category: "DIY",
    description: "Learn how to create stunning Halloween decorations without breaking the bank. This tutorial walks you through creating spooky props, eerie lighting, and creepy centerpieces perfect for your Halloween party.",
    publishedAt: "2025-04-15",
  },
  {
    id: 2,
    title: "Haunted House Walkthrough 2024",
    thumbnail: "https://i3.ytimg.com/vi/oASpYeXzz3Y/maxresdefault.jpg",
    youtubeId: "oASpYeXzz3Y",
    views: "89K",
    duration: "15:36",
    creator: "Haunted Adventures",
    category: "Tours",
    description: "Take a virtual tour through the most terrifying haunted house attraction of 2024. Experience the scares and marvel at the detailed horror setups that will give you nightmares.",
    publishedAt: "2025-04-28",
  },
  {
    id: 3,
    title: "Professional Halloween Makeup Tutorial",
    thumbnail: "https://i3.ytimg.com/vi/CXKJf51z-qw/maxresdefault.jpg",
    youtubeId: "CXKJf51z-qw",
    views: "302K",
    duration: "18:45",
    creator: "Horror Makeup FX",
    category: "Makeup",
    description: "Transform yourself into a terrifying creature with this professional-grade makeup tutorial. Learn techniques used by Hollywood special effects artists to create realistic wounds, scars, and otherworldly appearances.",
    publishedAt: "2025-05-01",
  },
  {
    id: 4,
    title: "History of Halloween Traditions",
    thumbnail: "https://i3.ytimg.com/vi/R-VRAemIvbI/maxresdefault.jpg",
    youtubeId: "R-VRAemIvbI",
    views: "75K",
    duration: "22:10",
    creator: "Historical Haunts",
    category: "Educational",
    description: "Discover the fascinating origins of Halloween traditions from around the world. This documentary explores the ancient Celtic festival of Samhain, the evolution of trick-or-treating, and how different cultures celebrate the day of the dead.",
    publishedAt: "2025-04-22",
  },
  {
    id: 5,
    title: "Halloween Party Food Ideas",
    thumbnail: "https://i3.ytimg.com/vi/AMnBlO2s0ik/maxresdefault.jpg",
    youtubeId: "AMnBlO2s0ik",
    views: "163K",
    duration: "14:22",
    creator: "Spooky Bites",
    category: "Food",
    description: "Impress your guests with these creative and delicious Halloween-themed treats. From eyeball appetizers to bloody cocktails, this video provides step-by-step instructions for a complete Halloween party menu.",
    publishedAt: "2025-05-03",
  },
  {
    id: 6,
    title: "Pumpkin Carving Master Class",
    thumbnail: "https://i3.ytimg.com/vi/LespJIPfhiI/maxresdefault.jpg",
    youtubeId: "LespJIPfhiI",
    views: "210K",
    duration: "25:18",
    creator: "Gourd Artist",
    category: "DIY",
    description: "Elevate your pumpkin carving skills with this comprehensive tutorial. Learn advanced techniques, intricate designs, and creative lighting options to make your jack-o'-lanterns stand out in the neighborhood.",
    publishedAt: "2025-04-18",
  },
];

// Updated featured video
const featuredVideo = {
  id: 0,
  title: "Ultimate Halloween House Decoration Guide",
  thumbnail: "https://i3.ytimg.com/vi/5CB3e6B3-_g/maxresdefault.jpg", 
  youtubeId: "5CB3e6B3-_g",
  views: "578K",
  duration: "32:15",
  creator: "Halloween Enthusiast",
  category: "Guides",
  description: "The complete guide to transforming your home into the most frightening haunt on the block. This video covers everything from yard decorations and lighting to automated props and sound effects for an immersive experience.",
  publishedAt: "2025-04-05",
};

// Create a new component for YouTube video modal
const VideoModal = ({ video, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-background rounded-lg overflow-hidden">
        <div className="relative pt-[56.25%]">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.creator} • {video.views} views</p>
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedVideosPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  const categories = ["All", "DIY", "Makeup", "Tours", "Guides", "Food", "Educational"];
  
  const filteredVideos = halloweenVideos.filter((video) => {
    return (
      (activeCategory === "All" || video.category === activeCategory) &&
      (searchTerm === "" || video.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleShare = (video) => {
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${video.youtubeId}`);
    toast({
      title: "Share link copied!",
      description: "The video link has been copied to your clipboard",
    });
  };

  const handleLike = (video) => {
    toast({
      title: "Thanks for the like!",
      description: "Your appreciation helps us create better content",
    });
  };
  
  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Video className="h-6 w-6 text-halloween-purple mr-2" />
          <h1 className="font-creepster text-4xl">Halloween Videos</h1>
        </div>
        <div className="relative max-w-xs w-full">
          <Input
            type="search"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
        </div>
      </div>

      {/* Featured Video */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Featured Video</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black relative rounded-lg overflow-hidden">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full bg-halloween-purple/80 hover:bg-halloween-purple"
                  onClick={() => openVideoModal(featuredVideo)}
                >
                  <Play className="h-8 w-8 text-white" />
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 bg-black/70 text-white px-2 py-1 text-sm m-2 rounded">
                {featuredVideo.duration}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{featuredVideo.title}</h3>
            <div className="flex items-center mb-3 text-sm text-muted-foreground">
              <span>{featuredVideo.views} views</span>
              <span className="mx-2">•</span>
              <span>{featuredVideo.publishedAt}</span>
            </div>
            <p className="text-muted-foreground mb-4">{featuredVideo.description}</p>
            <div className="flex items-center mb-4">
              <Badge variant="outline" className="mr-2">{featuredVideo.category}</Badge>
              <span className="text-sm text-muted-foreground">By {featuredVideo.creator}</span>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleLike(featuredVideo)}
                className="flex items-center"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare(featuredVideo)}
                className="flex items-center"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Categories */}
      <div className="mb-8">
        <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
                        <Button
                          size="icon"
                          className="h-12 w-12 rounded-full bg-halloween-purple/90 hover:bg-halloween-purple"
                          onClick={() => openVideoModal(video)}
                        >
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </div>
                      <div className="absolute bottom-0 right-0 bg-black/70 text-white px-2 py-1 text-sm m-2 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-base line-clamp-1 mb-1">{video.title}</h3>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <span>{video.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{video.creator}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{video.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{video.category}</Badge>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex items-center"
                          onClick={() => openVideoModal(video)}
                        >
                          <Info className="h-3 w-3 mr-1" />
                          Watch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        video={selectedVideo} 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </div>
  );
};

export default RelatedVideosPage;
