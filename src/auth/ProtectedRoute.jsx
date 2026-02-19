// src/auth/ProtectedRoute.jsx
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        Loading…
      </div>
    );
  }

  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: "/dashboard" },
    });
    return null;
  }

  return children;
}