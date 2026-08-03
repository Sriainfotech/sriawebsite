const TOKEN_KEY = "sria_admin_token";
const USERNAME_KEY = "sria_admin_username";

export function setAdminSession(token: string, username: string) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USERNAME_KEY, username);
}

export function getAdminToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getAdminUsername(): string | null {
  return localStorage.getItem(USERNAME_KEY);
}

export function clearAdminSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
}

// Client-side expiry check only, for UX (redirect to login before making a
// doomed request) — the real security boundary is the server's JWT
// verification middleware, not this check.
export function isAdminAuthenticated(): boolean {
  const token = getAdminToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (!payload.exp) return true;
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
