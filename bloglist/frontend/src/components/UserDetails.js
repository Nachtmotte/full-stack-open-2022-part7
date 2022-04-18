import { Card, ListGroup } from "react-bootstrap";

const UserDetails = ({ user }) => {
  if (!user) return null;

  return (
    <Card style={{ width: "fit-content", margin: "20px auto 0 auto" }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Subtitle>added blogs</Card.Subtitle>
        <ListGroup variant="flush" style={{marginTop: "10px"}}>
          {user.blogs.map((blog) => (
            <ListGroup.Item key={blog.id} style={{ marginBottom: 0 }}>- {blog.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
