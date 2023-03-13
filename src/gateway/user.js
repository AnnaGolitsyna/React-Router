const usersUrl = 'https://api.github.com/users';

export const fetchUserData = (userId) =>
  fetch(`${usersUrl}/${userId}`).then((response) => {
    if (!response.ok) {
      alert('Incorrect URL')
      throw new Error(`Failed to fetch user data for user ID ${userId}`);
    }
    return response.json();
  });

