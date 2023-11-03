function registrationPageView(){
    appBeforeLogin.innerHTML = /*HTML*/`
    ${logo}
        <div id="registrationPageContainer">
            <div class="registrationPageRows">
                <span>Username:</span>
                <input id="newUsernameInput" type="text" value="" placeholder="Enter chosen username">
            </div>
            <div class="registrationPageRows">
            <span>Display name:</span>
            <input id="newDisplaynameInput" type="text" value="" placeholder="Enter chosen display name">
        </div>
            <div class="registrationPageRows">
                <span>Password:</span>
                <input id="newPasswordInput" type="password" value="" placeholder="Enter your chosen password"> 
            </div>
            <div class="registrationPageRows">
                <span>Email adress:</span>
                <input id="newEmailInput" type="email" value="" placeholder="Enter your email adress">
            </div>
            <button onclick="loginPageView()">Back</button>
            <button onclick="registerUser()">Submit user</button>
    `;
}