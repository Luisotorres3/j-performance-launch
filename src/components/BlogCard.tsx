import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, image, slug }: BlogCardProps) => {
  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-glow">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Button asChild variant="outline">
          <Link to={`/blog/${slug}`} onClick={() => window.scrollTo(0, 0)}>Leer más</Link>
        </Button>
      </div>
    </article>
  );
};

export default BlogCard;
