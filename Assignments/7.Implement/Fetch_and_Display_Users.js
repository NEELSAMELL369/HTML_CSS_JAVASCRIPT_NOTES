async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(user => console.log(user.name));
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

fetchUsers();

/*
✅ Expected Console Output:
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
...and so on for all 10 users
*/
