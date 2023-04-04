import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../api-calls/posts';
import Post from '../Post/Post';
import style from './Postlist.module.css';

export default function PostList({ posts, setPosts }) {
  useEffect(() => {
    const id = localStorage.getItem('loggedInUser');
    getAllPosts(id).then((data) => setPosts(data));
  }, []);

  return (
    <div className={style.postList}>
      {posts.map((post) => (
        <Post key={post._id} body={post.body} id={post._id} setPosts={setPosts} />
      ))}
    </div>
  );
}
