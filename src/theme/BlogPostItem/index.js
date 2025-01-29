import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '../../components/GiscusComponent';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <GiscusComponent/>
    </>
  );
}
