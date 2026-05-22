import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-jp-cream text-jp-charcoal">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-jp-sakura/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-jp-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-jp-red md:text-sm">
            {post.category}
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-jp-charcoal/75 md:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] tracking-[0.2em] text-jp-indigo/60">
                <span>{post.date}</span>
                <span>・</span>
                <span>{post.readTime}</span>
                <span>・</span>
                <span>{post.author}</span>
              </div>
            </div>

            <div className="group relative h-96 overflow-hidden rounded-4xl bg-jp-charcoal shadow-2xl md:h-130">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="glass-card rounded-4xl p-6 md:p-8 h-fit sticky top-24">
            <p className="text-xs uppercase tracking-[0.35em] text-jp-red">Tags</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-jp-red/10 px-4 py-2 text-xs font-medium tracking-wide text-jp-red"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-jp-charcoal/10 pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-jp-indigo/60">Author</p>
              <p className="mt-4 font-display text-xl font-bold">{post.author}</p>
              <p className="mt-2 text-sm tracking-wide text-jp-charcoal/65">{post.authorRole}</p>
            </div>
          </aside>

          <article className="space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading} className="glass-card rounded-4xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-jp-charcoal/75 md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}