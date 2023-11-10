function mainPageView(){
    const user = model.app.loggedInUser;
    const headerProfileImg = user.profilePicture; 
    const isNotification = user.notifications.length > 0 ? 
    `<img id="notificationVarning" src="./img/thumbnails/notification.png">
    <div id="numberOfNotificationsDiv">${model.app.loggedInUser.notifications.length}</div>` :
    ``;
    app.innerHTML = /*HTML*/`
    <section id="page">
        <header>
            <br>
            <h1>Hello ${model.app.loggedInUser.displayName}, and welcome to Elliegram!</h1>
            ${loggedInLogo}
            <button id="logoutButton" onclick="logoutWarning(true)">Logout</button>
            <div id="logoutwarningDiv"></div>
        </header>
        <nav>
        <img id="profileImgNavbar" src="${headerProfileImg}">
            <div id="notificationDiv">${isNotification}</div>
            <button id="addNotificationBtn" onclick="addNotification()">Add Notification Test Button</button>
        </nav>
        <main>
            <div id="postStuffDIv">
                <textarea id="postYourStuff" placeholder="What are you thinking about? Tell your friends!"></textarea>
                <button id="postStuffButton">Post</button>
            </div>
        </main>
        <footer>Elliegram &copy; 2023</footer>
    </section>
    `;
}