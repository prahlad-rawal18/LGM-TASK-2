import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const handleFetch = async () => {
    await axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setUsers(res.data.data);
      setIsPending(false)
    });
  };

  return (
    <div className="page">
      <div className="navbar">
        <h2>LetsgrowMore</h2>
        <button onClick={handleFetch}>Get Users</button>
      </div>
      <div className="details">
        {isPending && <div class="loader"></div>}
        {users.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <div className="card-text">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
