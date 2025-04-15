
import { type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "categories.name",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("categories.name") as string;
      return <Badge>{category}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "published" ? "default" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const produce = row.original;

      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={`/produce/${produce.slug}`} target="_blank">
              <Eye className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`/admin/produce/${produce.id}`}>
              <Edit className="h-4 w-4" />
            </a>
          </Button>
        </div>
      );
    },
  },
];
