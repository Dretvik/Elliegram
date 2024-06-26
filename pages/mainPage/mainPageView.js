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
            <img onclick="profilePageView()" id="profileImgNavbar" src="${headerProfileImg}">
            <div onclick="profilePageView()">${user.displayName}</div>
            <div id="notificationDiv">${isNotification}</div>
            <button id="addNotificationBtn" onclick="addNotification()">Add Notification Test Button</button>
        </nav>

        <main id="mainContentDiv">
        </main>

        <footer>Elliegram &copy; 2023</footer>
    </section>
    `;
    pageTitleNotification();
    wallContentView();
}

// Wall Content 
function wallContentView(){ 
    const wallContent = document.getElementById('mainContentDiv');
    wallContent.innerHTML = /*HTML*/`
        <div id="wallContentDiv">
            <div id="postStuffDIv">
                <textarea id="postYourStuff" placeholder="What are you thinking about? Tell your friends!"></textarea>
                <button onclick="pushNews();wallContentView()" id="postStuffButton">Post</button>
                <div id="newsFeedWall">
                ${generateNewFeed()}
                </div>
            </div>
            <div>Hello peeps
                <p>Dummy text</p>
            </div>
        </div>
        `;
}