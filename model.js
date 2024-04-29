const app = document.getElementById('app');
const appBeforeLogin = document.getElementById('app');
const logo = '<img id="logoImg" src="./img/elliegramLogo.png">';
const loggedInLogo = '<img onclick="wallContentView()" id="LoggedInLogoImg" src="./favicon.png">'

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
                notifications: [],
            },
    },
    //Data
    data: {
        newsFeedContent: [],
        users: [
            {
                username: '',
                password: '',
                displayName: 'Ellie',
                profilePicture: './img/profileImages/emptyUser.jpg',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
                groups: [],
                notifications: [],
            },
            {
                username: 'Ellie',
                password: '1234',
                displayName: 'Ellie Marie',
                profilePicture: 'https://scontent.fosl5-1.fna.fbcdn.net/v/t39.30808-6/395626766_10223441768658464_6718305758821957028_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kxXy-0xd9zwAX8HdPlO&_nc_ht=scontent.fosl5-1.fna&oh=00_AfBifZXMYMeuotjcg5gsqAgyVB4pc1cFWKor8d_0Fprc4g&oe=65524B62',
                emailAdress: 'elliemarie@getacademy.no',
                description: "Hello, I'm the developper of this website. Please note that this is only for training purpuses!",
                friends: [],
                hobbies: [],
                groups: [],
                notifications: [],
            },
            {
                username: 'Kacy',
                password: '1234',
                displayName: 'Kacy Helene',
                profilePicture: './img/profileImages/emptyUser.jpg',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
                groups: [],
                notifications: [],
            },            {
                username: 'Chris',
                password: '1234',
                displayName: 'Chris',
                profilePicture: './img/profileImages/emptyUser.jpg',
                emailAdress: '',
                description: "",
                friends: [],
                hobbies: [],
                groups: [],
                notifications: [],
            },
        ],
    },
}