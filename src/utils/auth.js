export const login = (user) => {
  console.log(JSON.stringify(user));
  // Perform login logic (e.g., API request)
  // If successful, store authentication info (e.g., a token or user info)
  sessionStorage.setItem('auth', JSON.stringify({ user, token: 'fake_token' }));
};

export const logout = () => {
  // Clear the authentication data from localStorage
  sessionStorage.removeItem('auth');
};

export const isAuthenticated = () => {
  // Check if the user is authenticated by checking localStorage
  const auth = sessionStorage.getItem('auth');
  return auth ? JSON.parse(auth) : null;
};
