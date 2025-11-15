import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockUsers, mockMessages } from "@/lib/mockData";
import { Send } from "lucide-react";

export default function Messages() {
  return (
    <div className="flex h-[calc(100vh-2rem)] gap-4 p-6">
      <Card className="w-80 p-4">
        <h2 className="text-xl font-semibold mb-4">Messages</h2>
        <div className="space-y-2">
          {mockUsers.map((user) => (
            <div 
              key={user.id} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-sm text-muted-foreground truncate">{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={mockUsers[1].avatar} alt={mockUsers[1].name} />
            <AvatarFallback>{mockUsers[1].name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{mockUsers[1].name}</p>
            <p className="text-sm text-muted-foreground">{mockUsers[1].username}</p>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {mockMessages.map((message) => (
            <div 
              key={message.id} 
              className={`flex gap-3 ${message.user.id === "1" ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.user.avatar} alt={message.user.name} />
                <AvatarFallback>{message.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className={`max-w-md ${message.user.id === "1" ? "items-end" : ""}`}>
                <div 
                  className={`p-3 rounded-2xl ${
                    message.user.id === "1" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4 flex gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
