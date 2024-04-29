function profilePageView() {
    document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
    <div>
        Hello ${model.app.loggedInUser.username}, this is your profile:
    </div>
    `;
}