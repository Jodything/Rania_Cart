var loggedIn = false;

function checkLoggedIn() {
    if (getCookie('loggedIn')) {
        document.getElementById('login').style.visibility='hidden';
        var signedIn = document.getElementById('logOut');
        var span = signedIn.getElementsByTagName('span');
        span = span[0];
        span.appendChild(document.createTextNode(getCookie('name')));
        signedIn.style.display='block';
    }
}
checkLoggedIn();

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
