import { Link, Navigate, useOutlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/upload">Upload Photos</Link>
        <Link to="/manage">Manage Photos</Link>
      </nav>
      {outlet}
    </div>
  );
};
