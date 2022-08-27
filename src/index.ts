import {} from 'object-hash';

export default {
  port: 3000,
  fetch() {
    return fetch("https://api.github.com/users/octocat");
  },
};
