import React from "react";
import useAuth from "../src/hooks/useAuth";

export default function Admin() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div>
        <h1>This is a Secret page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
