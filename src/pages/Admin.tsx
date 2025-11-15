import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockPosts } from "@/lib/mockData";
import { CheckCircle, XCircle, Eye } from "lucide-react";

export default function Admin() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage and moderate content</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total Posts</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
          <p className="text-sm text-green-600 mt-1">+12% from last month</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Total Users</h3>
          <p className="text-3xl font-bold mt-2">5,678</p>
          <p className="text-sm text-green-600 mt-1">+8% from last month</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Pending Reports</h3>
          <p className="text-3xl font-bold mt-2">23</p>
          <p className="text-sm text-destructive mt-1">Needs attention</p>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.user.name}</TableCell>
                  <TableCell className="max-w-md truncate">{post.content}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {post.likes} likes · {post.comments} comments
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" title="View">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-green-600" title="Approve">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" title="Remove">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
