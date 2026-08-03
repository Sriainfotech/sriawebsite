import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAdminAuthenticated } from "@/lib/adminAuth";

// Guards every /admin/* route except /admin/login. Unauthenticated (or
// expired-token) visitors are redirected to /admin/login; the real security
// boundary is the server's JWT middleware — this is just the UX gate.
const RequireAdminAuth = () => {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAdminAuth;
