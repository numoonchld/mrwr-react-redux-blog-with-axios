import React from "react";
import { connect } from "react-redux";
import { loadPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostItem = ({ post }) => (
  <>
    <div className="item">
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UserHeader userID={post.userId} />
      </div>
    </div>
  </>
);

class PostList extends React.Component {
  componentDidMount() {
    this.props.loadPostsAndUsers();
  }

  render() {
    return (
      <>
        <p>Post List</p>
        <hr />
        <div className="ui relaxed divided list">
          {this.props.posts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { loadPostsAndUsers })(PostList);
