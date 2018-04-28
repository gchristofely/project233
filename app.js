<script>
window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'project233.auth0.com',
    clientID: 'V-l6SsxA-Dncl55ZvYzFNRMQBRdW-Rhy',
    responseType: 'token id_token',
    audience: 'https://project233.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
	</script>
