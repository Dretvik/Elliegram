const app = document.getElementById('app');
const appBeforeLogin = document.getElementById('app');
const logo = '<img id="logoImg" src="./img/elliegramLogo.png">';
const loggedInLogo = '<img id="LoggedInLogoImg" src="./favicon.png">';

const model = {
    app: {
        loggedInUser: null,
        logo: '',
        currentPage: '',
    },
    inputs: {
        user: {
                username: '',
                password: '',
                displayName: '',
                profilePicture: '',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
            },
    },
    //Data
    data: {
        users: [
            {
                username: '',
                password: '',
                displayName: 'Ellie',
                profilePicture: '',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
            },
            {
                username: 'Ellie',
                password: '1234',
                displayName: 'Ellie',
                profilePicture: '',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
            },
        ],
    },
}