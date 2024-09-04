import fs from 'fs';
import matter from 'gray-matter';
import PostCard from '../components/PostCard';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  posts.push({
    frontMatter: { title: 'Sample Post 1', date: '2024-08-23', image: 'discordIcon.png' },
    slug: 'sample-post-1',
  });
  posts.push({
    frontMatter: { title: 'Sample Post 2', date: '2024-08-24', image: 'discordIcon.png' },
    slug: 'sample-post-2',
  });

  return {
    props: {
      posts,
    },
  };
};


export default function Home({ posts }) {
  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
