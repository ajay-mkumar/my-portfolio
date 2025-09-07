export function setToken(
  token: string,
  username: string,
  expiresInSeconds: number
) {
  const expiryTime = Date.now() + expiresInSeconds * 1000; // convert sec → ms
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  localStorage.setItem("tokenExpiry", expiryTime.toString()); // store as string
}

export function getToken(): string | null {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

  if (!token || !expiry) return null;

  const expiryTime = parseInt(expiry, 10); // convert back to number

  if (Date.now() > expiryTime) {
    // expired → remove it
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    return null;
  }

  return token;
}

export function startTokenTimer() {
  const expiry = localStorage.getItem("tokenExpiry");
  if (!expiry) return;

  const timeout = expiry - Date.now();
  if (timeout > 0) {
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("tokenExpiry");
      console.log("⏰ Token expired and removed");
      // Optionally redirect to login page
    }, timeout);
  }
}

export function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("tokenExpiry");
}
