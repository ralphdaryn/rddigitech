// src/auth/ProtectedRoute.jsx
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: "/dashboard" } });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <div style={{ padding: 40 }}>Loading...</div>;
  if (!isAuthenticated) return null;

  return children;
}