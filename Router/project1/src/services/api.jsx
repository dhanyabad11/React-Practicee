// services/api.js
export const loginService = (email, password) => {
    // Mocking an API call (replace this with real API logic)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'dhanyabadbehera@gmail.com' && password === 'abc') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };
  