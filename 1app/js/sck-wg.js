			function setCookie(cname, cvalue, exdays) {
				var d = new Date();
				d.setTime(d.getTime() + (exdays*24*60*60*1000));
				var expires = "expires="+d.toUTCString();
				document.cookie = cname + "=" + cvalue + "; " + expires;
			}

			function getCookie(cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1);
					if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
				}
				return "";
			}

			function checkCookie() {
				var user = getCookie("userid");
                var user_name = getCookie("username");
                var user_fn = getCookie("userfirstname");
				if (user_name != "") {
					
				} else {
					//user = prompt("Please enter your name:", "");
					window.location = "login.html";
                    
				}
			}

			function eraseCookie(name) {
			  document.cookie = name + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
			}

function are_cookies_enabled()
{
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    { 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}
function get_endpoint()
{	
	var endpoint = "http://1application.in:8080/";
	return endpoint;
}
function get_rzpKey()
{	
	//var key = "rzp_test_7dpXEck7JgQgVP"; /*test*/
	var key = "rzp_live_DplVS0sok0suTA"; /*prod*/
	return key;
}
