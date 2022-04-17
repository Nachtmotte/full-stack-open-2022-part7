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
    <>
      <h2>Users</h2>
      <Table striped>
        <tbody>
          <tr>
            <td></td>
            <th>blogs created</th>
          </tr>
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
    </>
  );
};

export default UserList;
