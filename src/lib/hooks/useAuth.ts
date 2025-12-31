import { useState, useEffect } from "react";

export function useAuth() {
  // Simple auth hook - can be extended later if authentication is needed
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // For now, default to false (non-authenticated)
    // This can be extended to check for actual auth tokens/sessions later
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}
