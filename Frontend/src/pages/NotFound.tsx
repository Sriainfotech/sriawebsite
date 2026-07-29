import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
 const location = useLocation();

 useEffect(() => {
 // console.warn, not .error — a 404 is expected, routine navigation
 // outcome, not an application fault. Lighthouse's Best Practices audit
 // flags any console.error logged during a page load, so using .error
 // here would fail that check every time this route is hit.
 console.warn("404: no route matched", location.pathname);
 }, [location.pathname]);

 return (
 <div className="flex min-h-screen items-center justify-center bg-muted">
 <div className="text-center">
 <h1 className="mb-4 text-4xl font-bold">404</h1>
 <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
 <Link to="/" className="text-primary underline hover:text-primary/90">
 Return to Home
 </Link>
 </div>
 </div>
 );
};

export default NotFound;

