import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Science of Progressive Overload in Strength Training",
      excerpt: "Discover how progressive overload is the fundamental principle behind muscle growth and strength gains. Learn practical strategies to implement it in your training routine.",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
      slug: "progressive-overload-strength-training",
    },
    {
      title: "Nutrition Timing: Does It Really Matter?",
      excerpt: "Explore the latest research on nutrient timing and learn whether eating at specific times can enhance your performance and recovery.",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop",
      slug: "nutrition-timing-guide",
    },
    {
      title: "Understanding Biomechanics for Better Performance",
      excerpt: "Learn how understanding your body's biomechanics can help you lift more efficiently, prevent injuries, and maximize your training results.",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop",
      slug: "biomechanics-performance",
    },
    {
      title: "5 Common Training Mistakes That Limit Your Progress",
      excerpt: "Identify and correct these frequent training errors that might be holding you back from reaching your full potential in the gym.",
      date: "April 28, 2024",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
      slug: "common-training-mistakes",
    },
    {
      title: "Building Mental Resilience for Athletic Success",
      excerpt: "Mental strength is just as important as physical strength. Learn strategies to develop the mental toughness needed for peak performance.",
      date: "April 20, 2024",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=450&fit=crop",
      slug: "mental-resilience-athletes",
    },
    {
      title: "The Complete Guide to Recovery and Rest Days",
      excerpt: "Recovery is where the magic happens. Understand the importance of rest days and learn how to optimize your recovery for better results.",
      date: "April 15, 2024",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
      slug: "recovery-rest-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Training <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert articles on training, nutrition, and performance optimization to help you achieve your fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
