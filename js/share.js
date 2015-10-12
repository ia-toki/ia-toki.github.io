$(document).ready(function() {
	$("#shareButton").socialShare({
    social: "facebook,twitter",
    shareUrl: "http://www.ngoding.org",
    blur: true
  }).click(function() {
    var success = '<h1 id="text-success" class="text-success text-center">Email sudah berhasil didaftarkan.</h1>';
    var fail = '<h1 id="text-fail" class="text-danger text-center">Email sudah terdaftar.</h1>';
    $(".arthrefSocialShare .centered").prepend(success+fail);
  	$("#text-success").hide();
  	$("#text-fail").hide();
  });
});
