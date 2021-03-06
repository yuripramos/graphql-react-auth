import Layout from '../components/Layout'
import Link from 'next/link'
import { withApollo } from '../apollo/client'
import { useQuery } from '@apollo/react-hooks'
import { DraftsQuery } from '../queries';
import React from 'react';

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author ? post.author.name : 'Unknown Author'}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 1.4rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
)

const Drafts = () => {
  const { loading, error, data } = useQuery(DraftsQuery, { fetchPolicy: 'no-cache' })

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Layout>
      <div className="page">
        <h1>Drafts</h1>
        <main>
          {data.drafts.map(post => (
            <div className="post" key={post.id} >
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin: 2rem 0;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Drafts)
