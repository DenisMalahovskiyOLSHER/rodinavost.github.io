let res = document.querySelector( '#textarea_pass_res' );
let btn = document.querySelector( '#generation' );
btn.addEventListener( 'click', gen );

function gen() {
	let userText = document.querySelector( '#genpass' ).value;

    var pass = "";
    var dic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIKLMNOPQRSTUVWXYZJ1234567890";
 
    for (var i = 0; i < userText; i++) {
        pass += dic.charAt(Math.floor(Math.random() * dic.length));
	}

	res.value = pass;
}