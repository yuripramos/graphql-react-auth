import { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { withApollo } from '../apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { FeedQuery, isAuthenticatedQuery } from '../queries';

export interface Item {
  content: string;
  author: string;
  title: string;
  name: string;
}

export interface Post {
  post: {
    [key: string]: Item;
  };
}
const Post = ({ post }: Post) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author.name}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }

        h2 {
          text-transform: capitalize;
        }
      `}</style>
    </a>
  </Link>
);

const Blog = () => {
  const { loading, error, data } = useQuery(FeedQuery);

  const { loading: loadingAuth, data: dataAuth, error: errorAuth } = useQuery(isAuthenticatedQuery);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="page">
        {!!dataAuth && !loadingAuth ? <h1> Welcome back {dataAuth.me.name} </h1> : <h1>My Blog</h1>}
        <main>
          {data.feed.map((post) => (
            <div className="post">
              <Post key={post.id} post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        h1 {
          text-transform: capitalize;
        }
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Blog);
