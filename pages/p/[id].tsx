import Layout from '../../components/Layout';
import Router, { useRouter } from 'next/router';
import { withApollo } from '../../apollo/client';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { PostQuery } from '../../queries';
import { ErrorMsg } from '../../components/error';
import { PublishMutation, DeleteMutation } from "../../mutations";
import React from 'react';

function Post() {
  const postId = useRouter().query.id;
  const { loading, error, data } = useQuery(PostQuery, {
    variables: { id: postId },
  });

  const [publish, { error: errorPublish }] = useMutation(PublishMutation);
  const [deletePost, { error: errorDelete }] = useMutation(DeleteMutation);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let title = data.post.title;
  if (!data.post.published) {
    title = `${title} (Draft)`;
  }

  const authorName = data.post.author ? data.post.author.name : 'Unknown author';
  console.log("errors", errorPublish, errorDelete);
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {authorName}</p>
        <p>{data.post.content}</p>
        {errorDelete && (
          <ErrorMsg error={errorDelete} />
        )}
        {errorPublish && (
          <ErrorMsg error={errorPublish} />
        )}
        {!data.post.published && (
          <button
            onClick={async (e) => {
              await publish({
                variables: {
                  id: Number(postId),
                },
              });
              Router.push('/');
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async (e) => {
            await deletePost({
              variables: {
                id: Number(postId),
              },
            });
            Router.push('/');
          }}
        >
          Delete
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: hsla(0, 0%, 0%, 0.79);
          font-weight: 600;
          letter-spacing: 1.2px;
          font-size: 16px;
          color: #ffffff;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button:hover {
          background: #dc00dc;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default withApollo(Post);
