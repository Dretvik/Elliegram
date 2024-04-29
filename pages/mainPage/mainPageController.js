function logout(){
    model.app.loggedInUser = null;
    loginPageView();
}
function logoutWarning(isWantToLogout){
    document.getElementById('logoutwarningDiv').innerHTML =/*HTML*/`
    ${isWantToLogout ? /*HTML*/`
    <div id="logoutWarningDiv"> 
    <p>Are you sure you want to log out allready?!</p>
    <span>Think of your friends, they'll miss you!</span>
    <br>
    <button onclick="logoutWarning(false)">No</button>
    <button id="realLogoutButton" onclick="logout()">Logout and miss out life!</button>` : ''}
    <div>
    `;
}

function addNotification(){
    newNotification = {
        newNote: 'Hello im a new notification',
    }
    model.app.loggedInUser.notifications.push(newNotification);
    updateNavbarAndTitle();
}

function updateNavbarAndTitle() {
    const user = model.app.loggedInUser;
    const isNotification = user.notifications.length > 0 ?
        `<img id="notificationVarning" src="./img/thumbnails/notification.png">
        <div id="numberOfNotificationsDiv">${model.app.loggedInUser.notifications.length}</div>` :
        ``;

    document.getElementById('profileImgNavbar').src = user.profilePicture;
    document.getElementById('notificationDiv').innerHTML = isNotification;

    pageTitleNotification();
}

function pageTitleNotification(){
    const isNotificationTitle = model.app.loggedInUser.notifications.length > 0 ? 
    `Elliegram (${model.app.loggedInUser.notifications.length})` :
    `Elliegram`;
    document.getElementById('pageTitle').innerText = isNotificationTitle;
}

function pushNews() {
    const newsToPush = document.getElementById('postYourStuff').value;

    const newNews = {
        content: newsToPush,
    }
    model.data.newsFeedContent.push(newNews);
}

function generateNewFeed() {
    let newsFeedWall = '';
    if (model.data.newsFeedContent.length > 0){
        for (let news of model.data.newsFeedContent) {
            newsFeedWall += /*HTML*/`
            <div>${model.app.loggedInUser.username} posted:
            <p>${news.content}</p>
            </div>
            `;
        }
    } else {
        newsFeedWall = `No news to show`;
    }
    return newsFeedWall;
}