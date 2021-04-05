import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";
import moment from "moment";
function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  function commentOnPost() {
    console.log("Comment on post!");
  }
  function likePost() {
    console.log("Like post!");
  }
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button icon color="red" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button icon color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}
export default PostCard;
