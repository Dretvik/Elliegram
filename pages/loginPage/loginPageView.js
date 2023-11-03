function loginPageView(){
    appBeforeLogin.innerHTML = /*HTML*/`
    ${logo}
    <h1 id="loginPageLogo">Welcome to Elliegram!</h1>
    <p> Discover new friends and exiting conntent!</p>
    <div id="loginContainer">
        <div class="loginPageRows">
            <span class="loginPageSpan">Username:</span>
            <input id="loginUsernameInput" type="text" value="" placeholder="Enter username">
        </div>
        <div class="loginPageRows">
            <span class="loginPageSpan">Password:</span>
            <input id="loginPasswordInput" type="password" value="" placeholder="Enter password">
        </div>
        <div id="loginPageButtonsDiv">
            <button class="loginPageButtons" onclick="userLogin()">Login</button>
            <button class="loginPageButtons" onclick="registrationPageView()">Register</button>
            <button class="loginPageButtons" onclick="forgottenPageView()">Forgot Password?</button>
        </div>
    </div>
    `;
    addEventlistenersLoginPage();
}