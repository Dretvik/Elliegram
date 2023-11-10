function registerUser() {
    const usernameInput = document.getElementById('newUsernameInput');
    const username = usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1);
    const password = document.getElementById('newPasswordInput').value;
    const email = document.getElementById('newEmailInput').value;
    const displayName = document.getElementById('newDisplaynameInput').value;

if (email.includes("@")) {
    const newUser = {
        username: username,
        password: password,
        displayName: displayName,
        profilePicture: './img/profileImages/emptyUser.jpg',
        emailAdress: email,
        description: "",
        friends: [],
        hobbies: [],
        groups: [],
        notifications: [],
    };

    model.data.users.push(newUser);
    loginPageView();
    } else {
     alert("Please enter valid email address.")
    }

}