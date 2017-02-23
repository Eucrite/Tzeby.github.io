$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$("nav a").click(function(e){
		e.preventDefault();
		var sectionId = e.currentTarget.id + "Section";
		
		if(sectionId == "githubSection"){
			window.location.href = "https://github.com/Tzeby";
		}
		
		if(sectionId == "resumeSection"){
			window.location.href = "pdf/Resume.pdf";
		}
		
		if(sectionId == "linkedinSection"){
			window.location.href = "https://ca.linkedin.com/in/zebin-yang-450622133";
		}
		
		$("html body").animate({
			scrollTop: $("#" + sectionId).offset().top
		}, 1000);
	});
}
