
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Stats {
  totalProduce: number;
  totalBlogPosts: number;
  publishedProduce: number;
  publishedPosts: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    totalProduce: 0,
    totalBlogPosts: 0,
    publishedProduce: 0,
    publishedPosts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [
        { count: totalProduce }, 
        { count: publishedProduce },
        { count: totalBlogPosts },
        { count: publishedPosts }
      ] = await Promise.all([
        supabase.from('produce').select('*', { count: 'exact', head: true }),
        supabase.from('produce').select('*', { count: 'exact', head: true }).eq('status', 'published'),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('status', 'published'),
      ]);

      setStats({
        totalProduce: totalProduce || 0,
        publishedProduce: publishedProduce || 0,
        totalBlogPosts: totalBlogPosts || 0,
        publishedPosts: publishedPosts || 0,
      });
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your content management dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Produce</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProduce}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedProduce} published
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedPosts} published
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
