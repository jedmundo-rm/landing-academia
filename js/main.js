
/////

jQuery(document).ready(function ($) {
    videoSwitch=false;
    if ($(".home").length > 0) {
        /*$(".fancy_title").textillate({ in: { effect: 'fadeInLeft',shuffle:true,  },type:'word' });
        var arrChicas = ["chica1", "chica2", "chica3"];
        var i = 0;
        */
        setInterval(function () {
            /*i++;
            if (i == 3) {
                i = -1;
            }
            $("header").attr("class", arrChicas[i]);
            $("#logo").attr("class", arrChicas[i]);*/
            if(!videoSwitch){
                videofile="H2_V2.mp4";
            }else{
                videofile="H1-_1_V2.mp4";
            };
            $("video").attr("src","/wp-content/themes/besins_2022/img/"+videofile);
            videoSwitch=!videoSwitch;
        }, 12000);
    }
    AOS.init();
    $(".quererme").hide();

    $("#close-card").on( "click", function() {
        $(".card").hide();
    } );


});
jQuery( document ).on( 'nfFormSubmitResponse', function(event,response) {
	 setTimeout(function(){
		if(response.id=="2"){
		     jQuery(".card").hide();
			myModal2 = new bootstrap.Modal(document.getElementById('campaignModal'));
			myModal2.hide()

		}
	}, 2000);
     document.cookie = "formQuerer=1; expires=Wed, 09 Sep 2040 16:50:00 GMT";
});
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 0) {
        jQuery("body").addClass("scrolled");
        if (scroll > 300) {
            jQuery(".quererme").show();
        }
    } else {
        jQuery("body").removeClass("scrolled");
    }
});