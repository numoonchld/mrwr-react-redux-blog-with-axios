import PostList from "./components/PostList";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="ui container">
        Blog
        <PostList />
      </div>
    </>
  );
}
