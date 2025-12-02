import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

const UserPage = () => {
  const users = useSelector((state) => {
    return state?.userDetails?.users || [];
  });

  const dispatch = useDispatch();

  console.log("🚀 ~ UserPage ~ users:", users);
  return (
    <div>
      <h1>User Page</h1>
      <table style={{ border: "1px" }}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => {
              return (
                <tr key={`user-row-${index}`}>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.mobile}</td>
                  <td>{user?.age}</td>
                  <td>{user?.desc}</td>
                  <td>
                    <a
                      onClick={() => dispatch(deleteUser({ name: user?.name }))}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} align="center">
                No data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
