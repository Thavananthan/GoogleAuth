$(document).ready(function () {
  var C_ID =
    '793305185607-1jtk8lgitlr6h5dv7q9vifau76rjna18.apps.googleusercontent.com';
  var R_URL = 'http://localhost:8012/Project/upload/fileupload.html';
  var scope = 'https://www.googleapis.com/auth/drive';

  var url = '';

  $('#SignIn').click(function () {
    LoginIn(C_ID, R_URL, scope, url);
  });

  function LoginIn(C_ID, R_URL, scope, url) {
    url =
      'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=' +
      R_URL +
      '&prompt=consent&response_type=code&client_id=' +
      C_ID +
      '&scope=' +
      scope +
      '&access_type=offline';

    window.location = url;
  }
});
