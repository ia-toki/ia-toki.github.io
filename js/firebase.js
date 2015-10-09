$(document).ready(function() {
	var firebase = new Firebase('https://ngoding.firebaseio.com/email_list');
	$("#emailForm").submit(function(e) {
		e.preventDefault();
		var email = $("#inputEmail").val();
		firebase.push(email);
		/*firebase.child(email).once('value', function(snapshot) {
		    var exists = (snapshot.val() !== null);
		    if (exists) {
		    } else {
			}
		});*/
	});
});
