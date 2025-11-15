import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/components/PostCard";
import { mockUsers, mockPosts } from "@/lib/mockData";
import { MapPin, Calendar, Link as LinkIcon } from "lucide-react";

export default function Profile() {
  const currentUser = mockUsers[0];
  const userPosts = mockPosts.filter(post => post.user.id === currentUser.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <div className="h-48 bg-gradient-to-r from-primary to-accent rounded-t-lg" />
        
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-16 mb-4">
            <Avatar className="h-32 w-32 border-4 border-card">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback className="text-2xl">{currentUser.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1" />
            <Button>Edit Profile</Button>
          </div>

          <div>
            <h1 className="text-2xl font-bold">{currentUser.name}</h1>
            <p className="text-muted-foreground">{currentUser.username}</p>
            <p className="mt-3">{currentUser.bio}</p>
            
            <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Joined March 2024
              </div>
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a href="#" className="text-primary hover:underline">portfolio.com</a>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <div>
                <span className="font-bold">1,234</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
              <div>
                <span className="font-bold">5,678</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="posts">
        <TabsList className="w-full">
          <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
          <TabsTrigger value="media" className="flex-1">Media</TabsTrigger>
          <TabsTrigger value="likes" className="flex-1">Likes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="space-y-4 mt-6">
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        
        <TabsContent value="media" className="mt-6">
          <div className="grid grid-cols-3 gap-4">
            {userPosts.filter(p => p.image).map((post) => (
              <img 
                key={post.id}
                src={post.image} 
                alt="Media" 
                className="aspect-square object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="likes" className="space-y-4 mt-6">
          {mockPosts.filter(p => p.liked).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
