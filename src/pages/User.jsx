import { useParams } from "react-router-dom";
const User = () => {
  const { uname } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <span>User Name: {uname}</span>
    </div>
  );
};

export default User;
