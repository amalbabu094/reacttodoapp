import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.data) {
          setUsers(data.data);
        } else {
          setUsers([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Users</h2>

      <div className="users">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))
        ) : (
          <p>No Users Found</p>
        )}
      </div>
    </div>
  );
}

export default UserList;