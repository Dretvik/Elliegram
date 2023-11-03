function forgottenPageView(){
    appBeforeLogin.innerHTML = /*HTML*/`
    ${logo}
    <div id="forgottenPasswordPageContainer">
    <h1>Forgot your password?</h1>
        <div>
            <span>Email adress:</span>
            <input value="" type="email" placeholder="Enter your email here:">
        </div>
        <div id="forgottenPasswordButtonsDiv">
            <button onclick="loginPageView()">Back</button>
            <button onclick="sendPasswordToEmail()">Send password</button>
        </div>
    </div>
    `;
}