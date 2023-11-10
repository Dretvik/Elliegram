function registrationPageView(){
    appBeforeLogin.innerHTML = /*HTML*/`
    ${logo}
        <div id="registrationPageContainer">
            <div class="registrationPageRows">
                <div class="registrationColoumnA">Username:</div>
                <input class="registrationColoumnB" id="newUsernameInput" type="text" value="" placeholder="Enter chosen username">
            </div>
            <div class="registrationPageRows">
            <div class="registrationColoumnA">Display name:</div>
            <input class="registrationColoumnB" id="newDisplaynameInput" type="text" value="" placeholder="Enter chosen display name">
        </div>
            <div class="registrationPageRows">
                <div class="registrationColoumnA">Password:</div>
                <input class="registrationColoumnB" id="newPasswordInput" type="password" value="" placeholder="Enter your chosen password"> 
            </div>
            <div class="registrationPageRows">
                <div class="registrationColoumnA">Email adress:</div>
                <input class="registrationColoumnB" id="newEmailInput" type="email" value="" placeholder="Enter your email adress">
            </div>
            <button onclick="loginPageView()">Back</button>
            <br>
            <button onclick="registerUser()">Submit user</button>
    `;
}