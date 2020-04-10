import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Router from 'next/router';
import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CreateDraftMutation = gql`
  mutation CreateDraftMutation($title: String!, $content: String) {
    createDraft(title: $title, content: $content) {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;

function Draft(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [createDraft, { loading, error, data }] = useMutation(CreateDraftMutation);

  return (
    <Layout>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await createDraft({
              variables: {
                title,
                content,
              },
            });
            Router.push('/drafts');
          }}
        >
          <h1>Create Draft</h1>
          <input autoFocus onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" value={title} />
          <textarea cols={50} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={8} value={content} />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: hsla(0, 0%, 0%, 0.79);
          font-weight: 600;
          letter-spacing: 1.2px;
          color: #ffffff;
          border: 0;
          padding: 1rem 2rem;
        }

        input[type='submit']:hover {
          background: #dc00dc;
          cursor: pointer;
          color: #fff;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default withApollo(Draft);
