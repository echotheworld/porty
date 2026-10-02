import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-32 w-full grow">
        <header className="mb-24">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-[5rem] md:text-[8rem] leading-none font-normal tracking-tighter mb-8">
              Blog
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-secondary text-xl max-w-2xl font-light">
              Thoughts on technology, design, and creative strategy.
            </p>
          </BlurFade>
        </header>

        <div className="space-y-12 max-w-4xl">
          {posts
            .sort((a, b) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                <Link
                  className="flex flex-col space-y-2 group"
                  href={`/blog/${post.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <p className="text-[10px] uppercase tracking-widest text-secondary mb-2 group-hover:text-foreground transition-colors">
                      {post.metadata.publishedAt}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-normal group-hover:text-secondary transition-colors">
                      {post.metadata.title}
                    </h2>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
