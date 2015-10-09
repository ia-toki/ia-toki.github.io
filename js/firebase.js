$(document).ready(function() {
	$("#text-success").hide();
	$("#text-fail").hide();
	var firebase = new Firebase('https://ngoding.firebaseio.com/email_list');
	$("#emailForm").submit(function(e) {
		e.preventDefault();
		var email = $("#inputEmail").val();
		firebase.once('value', function(snapshot) {
			var exists = false;
			for (item in snapshot.val()) {
				if (snapshot.val()[item] === email) {
					exists = true;
				}
			}
			if (exists) {
				$("#inputEmail").val("");
				$("#text-success").hide();
				$("#text-fail").show();
			} else {
				firebase.push(email);
				$("#inputEmail").val("");
				$("#text-fail").hide();
				$("#text-success").show();
			}
		});
	});
});
