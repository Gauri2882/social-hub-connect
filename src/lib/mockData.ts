export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: Date;
  liked?: boolean;
}

export interface Message {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    username: "@sarahj",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    bio: "Designer & Creative Director"
  },
  {
    id: "2",
    name: "Mike Chen",
    username: "@mikechen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    bio: "Tech Enthusiast"
  },
  {
    id: "3",
    name: "Emma Davis",
    username: "@emmad",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    bio: "Travel Photographer"
  }
];

export const mockPosts: Post[] = [
  {
    id: "1",
    user: mockUsers[0],
    content: "Just launched my new design project! So excited to share it with everyone. Check out the link in my bio 🎨✨",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    liked: false
  },
  {
    id: "2",
    user: mockUsers[1],
    content: "The future of AI is here and it's amazing! Working on some exciting projects at the intersection of tech and creativity.",
    likes: 567,
    comments: 89,
    shares: 34,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    liked: true
  },
  {
    id: "3",
    user: mockUsers[2],
    content: "Captured this stunning sunset in Santorini 🌅 Nature never ceases to amaze me!",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    likes: 1243,
    comments: 156,
    shares: 78,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    liked: false
  }
];

export const mockMessages: Message[] = [
  {
    id: "1",
    user: mockUsers[1],
    content: "Hey! How's the project going?",
    timestamp: new Date(Date.now() - 30 * 60 * 1000)
  },
  {
    id: "2",
    user: mockUsers[0],
    content: "Great! Just finished the design phase.",
    timestamp: new Date(Date.now() - 25 * 60 * 1000)
  },
  {
    id: "3",
    user: mockUsers[1],
    content: "Awesome! Can't wait to see it 🚀",
    timestamp: new Date(Date.now() - 20 * 60 * 1000)
  }
];
