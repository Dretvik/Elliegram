function mainPageView(){
    app.innerHTML = /*HTML*/`
    <section id="page">
        <header>
            <br>
            <h1>Hello ${model.app.loggedInUser.displayName}, and welcome to Elliegram!</h1>
            ${loggedInLogo}
            <button id="logoutButton" onclick="logoutWarning(true)">Logout</button>
            <div id="logoutwarningDiv"></div>
        </header>
        <nav>Navigation</nav>
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