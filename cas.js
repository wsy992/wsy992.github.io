$(document).ready(function(){
    function focusUserNameField() {
        $("input:visible:enabled:first").focus();
    }

    focusUserNameField();

    $('#msg').fadeOut(3000);

    $('form').submit(function (event) {
            if (!$('#username').val()) {
                $('#username-warning').show().fadeOut(3000);
                return false;
            }

            if (!$('#password').val()) {
                $('#password-warning').show().fadeOut(3000);
                return false;
            }
    });

});

function loginByFacebook(timestamp, token){
    var callback = encodeURIComponent("http://xxx.xxx.xxx/callback?app_type=facebook");
    var state = generateState(timestamp, token);
    var url = "https://www.facebook.com/dialog/oauth?client_id=332031297129779&response_type=code&redirect_uri=" + callback + "&state=" + state;
    window.location.href = url;
}

function generateState(utcTimestamp, token){
    // "#{$scope.org_id}_#{$scope.current_time}_#{$scope.token}_#{isExternalDomain}"
    return "1_" + utcTimestamp + "_" + token + "_0";
}
