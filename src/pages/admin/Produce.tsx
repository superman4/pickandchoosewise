
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { DataTable } from '@/components/admin/DataTable';
import { columns } from '@/components/admin/ProduceColumns';
import { useToast } from '@/hooks/use-toast';

const ProducePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProduce();
  }, []);

  const fetchProduce = async () => {
    try {
      const { data, error } = await supabase
        .from('produce')
        .select('*, categories(name)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setData(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch produce items",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Produce Management</h1>
          <p className="text-muted-foreground">
            Manage fruits, vegetables, and pantry items
          </p>
        </div>
        <Button asChild>
          <a href="/admin/produce/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Produce
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Produce Items</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={data} 
            loading={loading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProducePage;
