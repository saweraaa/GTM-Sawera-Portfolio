import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { POSTS, getPost, type Block } from "@/content/posts";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: post.keywords,
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="type-display-m mt-14 mb-5 max-w-[22ch]">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-garnet" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-10 border-l-2 border-garnet pl-6 font-display text-xl leading-snug text-ink"
        >
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={i} className="mb-5 text-muted">
          {block.text}
        </p>
      );
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            updated: post.updated,
            keywords: post.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Notes", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="pt-36 lg:pt-48">
        <Container>
          <Link
            href="/blog"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted hover:text-garnet"
          >
            <ArrowLeft className="size-3.5" />
            All notes
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <time
              dateTime={post.date}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted"
            >
              {formatDate(post.date)}
            </time>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              {post.readingTime}
            </span>
          </div>

          <TextReveal
            as="h1"
            className="type-display-l mt-5 max-w-[20ch]"
            lines={[post.title]}
          />

          <Reveal delay={0.2}>
            <p className="type-lead mt-7">{post.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2 border-b border-line pb-10">
              {post.tags.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-measure mt-14">{post.body.map(renderBlock)}</div>
          </Reveal>

          <Reveal className="mt-20 border-t border-line pt-10">
            <p className="type-label">More notes</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/blog/${m.slug}`}
                    data-cursor="link"
                    className="type-title link-underline max-w-[26ch]"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </article>

      <CtaBand
        title="Building something like this?"
        body="If any of the above is a problem you are living with right now, I am happy to talk it through."
      />
    </>
  );
}
