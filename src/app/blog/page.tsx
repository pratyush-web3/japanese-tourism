import Image from "next/image";
import Link from "next/link";
import { blogCategories, blogMeta, blogPosts } from "@/data/blog";

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const secondaryPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <main className="bg-jp-cream text-jp-charcoal">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-jp-sakura/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-jp-indigo/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-jp-red md:text-sm">
            {blogMeta.label}
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                {blogMeta.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-jp-charcoal/75 md:text-lg">
                {blogMeta.subtitle}
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-jp-indigo/60">
                編集方針
              </p>
              <p className="mt-4 text-sm leading-8 text-jp-charcoal/75">
                {blogMeta.intro}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-jp-charcoal/10 bg-white/50 px-4 py-2 text-xs font-medium tracking-wider text-jp-charcoal/80"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="group relative overflow-hidden rounded-4xl bg-jp-charcoal text-white shadow-2xl">
            <div className="relative h-130">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8 md:p-10">
                <div className="max-w-2xl">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-jp-sakura/80">
                    Featured Story
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-white/75 md:text-base">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-[11px] tracking-[0.2em] text-white/60">
                    <span>{featuredPost.category}</span>
                    <span>・</span>
                    <span>{featuredPost.readTime}</span>
                    <span>・</span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <div className="glass-card rounded-4xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-jp-red">読む理由</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-jp-charcoal/75">
                <li>旅程の組み方がわかる実用情報</li>
                <li>季節や時間帯に合わせた観光の視点</li>
                <li>宿・食・街歩きをつなぐ読みもの</li>
                <li>写真だけでは伝わらない日本の空気感</li>
              </ul>
            </div>

            <div className="glass-card rounded-4xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-jp-indigo/60">
                人気トピック
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-jp-red/10 px-4 py-2 text-xs font-medium tracking-wide text-jp-red"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-jp-red">
                すべての記事
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                読み進めるほど、旅の精度が上がる
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-jp-charcoal/65 md:block">
              各記事は、旅の前後で参考になるように、実際の移動や滞在の判断に役立つ視点を重視して構成しています。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {secondaryPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-4xl bg-white/60 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-jp-charcoal">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] text-jp-indigo/55">
                    <span>{post.date}</span>
                    <span>・</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-jp-charcoal md:text-3xl">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-jp-charcoal/70">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-jp-sakura/20 px-3 py-1 text-[11px] font-medium tracking-wide text-jp-charcoal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-jp-charcoal/10 pt-5">
                    <div>
                      <p className="text-sm font-medium text-jp-charcoal">{post.author}</p>
                      <p className="text-[11px] tracking-[0.15em] text-jp-indigo/60">
                        {post.authorRole}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold tracking-[0.25em] text-jp-red transition hover:text-jp-charcoal"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card rounded-4xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-jp-red">編集メモ</p>
            <h2 className="mt-4 font-display text-3xl font-bold">旅の読みものは、準備の質を上げる</h2>
            <p className="mt-5 text-sm leading-8 text-jp-charcoal/75">
              目的地を決める前に、街の時間帯、宿の位置、食事の流れ、季節の気配を知っておくと、旅の満足度は大きく変わります。
              このブログでは、そうした判断を支える情報を、観光案内よりも一歩深く掘り下げて届けます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.slug} className="glass-card rounded-3xl p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-jp-indigo/55">{post.category}</p>
                <h3 className="mt-4 font-display text-xl font-bold leading-tight">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-jp-charcoal/70">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}