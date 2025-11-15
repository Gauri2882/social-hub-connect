import { PostCard } from "@/components/PostCard";
import { mockPosts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Image, Smile } from "lucide-react";

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="p-4">
        <Textarea 
          placeholder="What's on your mind?" 
          className="mb-4 border-none focus-visible:ring-0 resize-none"
          rows={3}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Image className="h-4 w-4" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Smile className="h-4 w-4" />
              Emoji
            </Button>
          </div>
          <Button>Post</Button>
        </div>
      </Card>

      <div className="space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
