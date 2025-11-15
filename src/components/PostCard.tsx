import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/lib/mockData";
import { useState } from "react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(post.liked || false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-sm text-muted-foreground">{post.user.username} · {formatTime(post.timestamp)}</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="mb-4">{post.content}</p>
          
          {post.image && (
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full rounded-lg mb-4 object-cover max-h-96"
            />
          )}
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2 hover:text-primary"
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-primary text-primary' : ''}`} />
              <span className={liked ? 'text-primary' : ''}>{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
              <Share2 className="h-4 w-4" />
              <span>{post.shares}</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
