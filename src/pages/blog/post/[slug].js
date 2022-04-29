import Layout from "@/components/layout/layout";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Meta from "@/components/global/meta";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
        <Layout>
            <Meta title={frontmatter.title} />
    <div className="prose-layout">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <script
        src="https://giscus.app/client.js"
        data-repo="ronnapatp/ronnapat.com"
        data-repo-id="R_kgDOGOMxZg"
        data-category="Q&A"
        data-category-id="DIC_kwDOGOMxZs4CO13q"
        data-mapping="url"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async
      ></script>
    </div>
        </Layout>
  );
}
