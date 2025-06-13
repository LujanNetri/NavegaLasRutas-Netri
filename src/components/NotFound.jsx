import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>The path you are looking for does not exist.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
