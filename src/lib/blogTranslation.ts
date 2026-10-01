import type { PostDetail, PostSummary } from "@lobsterlead/blog-sdk";

type DeepLResponse = {
  translations: { text: string }[];
};

export async function translateBlogTexts(
  values: (string | null | undefined)[],
): Promise<string[]> {
  const indexes: number[] = [];
  const texts: string[] = [];

  values.forEach((value, index) => {
    if (value?.trim()) {
      indexes.push(index);
      texts.push(value);
    }
  });

  const translated = values.map((value) => value ?? "");
  if (texts.length === 0) return translated;

  const authKey = process.env.DEEPL_AUTH_KEY;
  if (!authKey) {
    throw new Error(
      "DEEPL_AUTH_KEY is required to translate English blog content.",
    );
  }

  const baseUrl = (
    process.env.DEEPL_API_URL || "https://api-free.deepl.com"
  ).replace(/\/+$/, "");
  const response = await fetch(`${baseUrl}/v2/translate`, {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${authKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: texts,
      source_lang: "TR",
      target_lang: "EN",
      tag_handling: "html",
      ignore_tags: "code,pre",
    }),
    cache: "force-cache",
    next: { revalidate: 3600, tags: ["blog-translations"] },
  });

  if (!response.ok) {
    throw new Error(`DeepL translation failed with status ${response.status}.`);
  }

  const result = (await response.json()) as DeepLResponse;
  if (result.translations.length !== indexes.length) {
    throw new Error("DeepL returned an unexpected number of translations.");
  }

  result.translations.forEach((item, resultIndex) => {
    translated[indexes[resultIndex]] = item.text;
  });

  return translated;
}

export async function translatePostSummaries(
  posts: PostSummary[],
): Promise<PostSummary[]> {
  const sourceValues = posts.flatMap((post) => [
    post.title,
    post.excerpt,
    ...post.tags,
    post.author?.name,
    post.coverImage?.alt,
  ]);
  const translated = await translateBlogTexts(sourceValues);
  let cursor = 0;
  const next = (source?: string | null) => {
    const value = translated[cursor++];
    return source === null || source === undefined ? source : value;
  };

  return posts.map((post) => ({
    ...post,
    locale: "en",
    title: next(post.title)!,
    excerpt: post.excerpt === null ? null : next(post.excerpt)!,
    tags: post.tags.map((tag) => next(tag)!),
    author: post.author
      ? { ...post.author, name: next(post.author.name)! }
      : null,
    coverImage: post.coverImage
      ? { ...post.coverImage, alt: next(post.coverImage.alt)! }
      : null,
  }));
}

export async function translatePostDetail(
  detail: PostDetail,
): Promise<PostDetail> {
  const { post, meta } = detail;
  const sourceValues = [
    post.title,
    post.excerpt,
    post.metaDescription,
    post.bodyHtml,
    post.keywords,
    post.author?.name,
    post.coverImage?.alt,
    ...post.tags,
    ...post.images.map((image) => image.alt),
    ...(post.sections?.flatMap((section) => [section.title, section.content]) ??
      []),
    meta.title,
    meta.description,
    meta.og.title,
    meta.og.description,
    meta.twitter.title,
    meta.twitter.description,
    ...meta.article.tags,
    meta.article.author,
  ];
  const translated = await translateBlogTexts(sourceValues);
  let cursor = 0;
  const next = (source?: string | null) => {
    const value = translated[cursor++];
    return source === null || source === undefined ? source : value;
  };

  const title = next(post.title)!;
  const excerpt = post.excerpt === null ? null : next(post.excerpt)!;
  const metaDescription =
    post.metaDescription === null ? null : next(post.metaDescription)!;
  const bodyHtml = next(post.bodyHtml)!;
  const keywords = post.keywords === null ? null : next(post.keywords)!;
  const authorName = next(post.author?.name);
  const coverAlt = next(post.coverImage?.alt);
  const tags = post.tags.map((tag) => next(tag)!);
  const images = post.images.map((image) => ({
    ...image,
    alt: next(image.alt)!,
  }));
  const sections =
    post.sections?.map((section) => ({
      ...section,
      title: section.title === null ? null : next(section.title)!,
      content: next(section.content)!,
    })) ?? null;
  const metaTitle = next(meta.title)!;
  const metaSummary = next(meta.description)!;
  const ogTitle = next(meta.og.title)!;
  const ogDescription = next(meta.og.description)!;
  const twitterTitle = next(meta.twitter.title)!;
  const twitterDescription = next(meta.twitter.description)!;
  const articleTags = meta.article.tags.map((tag) => next(tag)!);
  const articleAuthor =
    meta.article.author === undefined ? undefined : next(meta.article.author)!;

  return {
    ...detail,
    post: {
      ...post,
      locale: "en",
      title,
      excerpt,
      metaDescription,
      bodyHtml,
      keywords,
      tags,
      author: post.author ? { ...post.author, name: authorName! } : null,
      coverImage: post.coverImage
        ? { ...post.coverImage, alt: coverAlt! }
        : null,
      images,
      sections,
    },
    meta: {
      ...meta,
      title: metaTitle,
      description: metaSummary,
      og: {
        ...meta.og,
        title: ogTitle,
        description: ogDescription,
        locale: "en",
      },
      twitter: {
        ...meta.twitter,
        title: twitterTitle,
        description: twitterDescription,
      },
      article: { ...meta.article, tags: articleTags, author: articleAuthor },
    },
    jsonLd: {
      ...detail.jsonLd,
      headline: title,
      description: metaSummary,
      articleBody: bodyHtml,
      inLanguage: "en",
      keywords: tags,
    },
  };
}
