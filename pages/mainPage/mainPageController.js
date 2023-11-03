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