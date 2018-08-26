! function(e) {
    "use strict";
    e(document).ready(function() {
        e(".navTrigger").click(function() {
            e(this).toggleClass("active"), e("ul.nav").slideToggle()
        });
        var i = null;
        e(".input-field #number, .input-field #price").keyup(function() {
            clearTimeout(i);
            e(this);
            i = setTimeout(function() {
                var i, t, s, n, a, l;
                i = parseFloat(e(".input-field #number").val()), t = parseFloat(e(".input-field #price").val()), s = (.8 * i).toFixed(0), n = (.5 * s).toFixed(0), a = (.22 * i).toFixed(0), l = (.1 * a).toFixed(0), e(".messenger-result .open span").html(s), e(".messenger-result .click span").html(n), e(".messenger-result .sales span").html(.1 * n), e(".messenger-result .earned span").html(.1 * n * t), e(".gmail-result .open span").html(a), e(".gmail-result .click span").html(l), e(".gmail-result .sales span").html((.1 * l).toFixed(1)), e(".gmail-result .earned span").html((.1 * l * t).toFixed(0))
            }, 100)
        }), e(".video-wrapper").each(function() {
            e(this).append('<span class="forIframe_' + this.id + '"></span>'), e(this).on("click", function() {
                e(this).toggleClass("playing");
                this.id;
                e(this).data("params") && e(this).data("params"), e(this).find(".video-image").hide(), e(".forIframe_" + this.id).replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen="" style="border:0" src="https://www.youtube.com/embed/' + this.id + '?rel=0;enablejsapi=1;showinfo=0;controls=1;autoplay=1;modestbranding=0"></iframe></div>')
            })
        })
		
		
		var query_string = window.location.href.split('?');
		query_string = (query_string[1])?query_string[1]:'';
		
		if(query_string.trim() !='' ){
			Cookies.set("MsgHeroUtmParam", query_string, {expires: 7,path: "/"});
			query_string = '?'+query_string;
		}
		
		
		$('input.startFreeTrial').on('click' , function(e){
			e.preventDefault();
			var t = $(this).parent().find('input[name="email"]').val();
			//console.log(t);
			if(t.trim() != ''){
				 var emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				
				if(emailRex.test(String(t).toLowerCase())){
					$.ajax({
					  type: "POST",
					  url: "https://www.msghero.com/home/add_email_to_autoresponder",
					  data: {'email': t},
					  success : function(resp){
						  //console.log(resp);
					  }
					});
					
					
					setTimeout(function(){ 
						Cookies.set("isAmazingUser", (window.location.href.split('amazing').length >= 2)?1:0 , {
							expires: 7,
							path: "/"
						});
						
						//var redirUrl = 'sign-up'+query_string;
						//var redirUrl = (query_string != '')?'checkout.php'+query_string+'&plan=msghero-free-trial':'checkout.php?plan=msghero-free-trial';
						var redirUrl = (query_string != '')?'checkout.php?plan=msghero-free-trial':'checkout.php?plan=msghero-free-trial';
						Cookies.set("salesEmail", t, {
							expires: 7,
							path: "/"
						}), window.open(window.location.protocol + "//" + window.location.host + "/"+redirUrl, "_self")
					}, 100);		
				}else{
					alert('Email should be valid.');
				}
			}else{
				alert('Please insert email address.');
			}	 
			
		});
		
		
    })
}(jQuery);