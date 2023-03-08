const usersUrl = 'https://api.github.com/users';

export const fetchUserData = (userId) =>
  fetch(`${usersUrl}/${userId}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
