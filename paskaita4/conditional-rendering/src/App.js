import './App.css';
import Hero from './component/Herro/Herro';
import { posts } from './data/post.js';
import Post from './component/Post/Post';

function App() {
  return (
    <div className="container">
      <Hero />
      <div className="flex-container">
        {posts.map((post) => {
          return <Post img={post.url} text={post.text} />;
        })}
      </div>
    </div>
  );
}

export default App;
