import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { initUsers } from "../redux/actions/userActions";

import { Table } from "react-bootstrap";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(initUsers());
  }, [dispatch]);

  return (
    <Table striped bordered style={{ marginTop: "48px" }}>
      <thead>
        <tr>
          <th>Users</th>
          <th>blogs created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <th>
              <Link to={`/users/${user.id}`}>{user.username}</Link>
            </th>
            <td>{user.blogs.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
