/**
 * This is a property of Edge Realty Real Estate.
 * Use of any code within this file is strictly 
 * prohibited
 */
	
    
    var $logo = $('#myBtn');
	$(document).scroll(function() {
		if($(this).scrollTop()> 100)
		{   //alert("scop");
	//  $logo.css({display: $(this).scrollTop() > 100? "block":"none"});
		$('#myBtn').css("display", "block");
		}else{
			$('#myBtn').css("display", "none");
		}
		
	});

	document.querySelectorAll('a[href^="#myBtn"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

    document.querySelectorAll('a[href^="#contact-form"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
    
    
    $(document).ready(function(){
		$('.owl-one').owlCarousel({
			center: false,
			items:7,
			loop:false,
			margin:10,
			responsive:{
				600:{
					items: 3
				}
			}
		});
		$('.mobile-owl-one').owlCarousel({
			center: false,
			items:1,
			autoplay:true,
			autoplayTimeout:1500,
			autoplayHoverPause:true,
			loop:true,
			margin:10,
			nav: true,
			responsive:{
				600:{
					items: 3
				}
			}
		})
	});

	$(document).ready(function(){
		$('.owl-two').owlCarousel({
			center: false,
			loop:false,
			margin:10,
			nav:true,
			singleItem: true ,
			smartSpeed :900,
     		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		})
	});

	
/**
 * Desktop scripts
 */
	function swapTownhouse() {
		var x = document.getElementById("townhouses");
		var y = document.getElementById("villas");
		var z = document.getElementById("mansions");

		var mobile_x = document.getElementById("mobile_townhouses");
		var mobile_y = document.getElementById("mobile_villas");
		var mobile_z = document.getElementById("mobile_mansions");

        var ts = document.getElementById("townhouses-slider");
		var vs = document.getElementById("villas-slider");
		var ms = document.getElementById("mansions-slider");

		var mobile_ts = document.getElementById("mobile_townhouses-slider");
		var mobile_vs = document.getElementById("mobile_villas-slider");
		var mobile_ms = document.getElementById("mobile_mansions-slider");

		ts.style.display = "block";
		vs.style.display = "none";
		ms.style.display = "none";

		mobile_ts.style.display = "block";
		mobile_vs.style.display = "none";
		mobile_ms.style.display = "none";

		var s = document.getElementsByClassName("townhouseActive");
		var r = document.getElementsByClassName("villaActive");
		var t = document.getElementsByClassName("mansionActive");
		
		var l= document.getElementsByClassName("customButton01");
		var m= document.getElementsByClassName("customButton02");
		var n= document.getElementsByClassName("customButton03");

		var a = document.getElementById("section_townhouse");
		var b = document.getElementById("section_villa");
		var c = document.getElementById("section_mansion");
		var d = document.getElementById("oneBedroom");
		var e = document.getElementById("1_bedd");

		var townhouse_floor_plans = document.getElementsByClassName("section_townhouse");
		var villas_floor_plans = document.getElementsByClassName("section_villa");
		var mansions_floor_plans = document.getElementsByClassName("section_mansion");

		// townhouse_floor_plans.style.display = "none";
		// villas_floor_plans.style.display = "block";
		// mansions_floor_plans.style.display = "none";

		for(var i = 0, length = townhouse_floor_plans.length; i < length; i++) {
			townhouse_floor_plans[i].style.display = 'block';
		}

		for(var i = 0, length = villas_floor_plans.length; i < length; i++) {
			villas_floor_plans[i].style.display = 'none';
		}

		for(var i = 0, length = mansions_floor_plans.length; i < length; i++) {
			mansions_floor_plans[i].style.display = 'none';
		}



		for(var i = 0, length = s.length; i < length; i++) {
			s[i].style.display = 'block';
		}

		for(var i = 0, length = r.length; i < length; i++) {
			r[i].style.display = 'none';
		}

		for(var i = 0, length = t.length; i < length; i++) {
			t[i].style.display = 'none';
		}



        // FOR SWITCH
		for(var i = 0, length = l.length; i < length; i++) {
			l[i].className += ' customButtonTransform';
			l[i].classList.remove("bg-option2");
			l[i].classList.remove("bg-option1");
		}

		for(var i = 0, length = m.length; i < length; i++) {
			m[i].classList.remove("customButtonTransform");
			m[i].classList.remove("bg-option2");
			m[i].className += ' bg-option1';
		}

		for(var i = 0, length = n.length; i < length; i++) {
			n[i].classList.remove("customButtonTransform");
			n[i].classList.remove("bg-option1");
			n[i].className += ' bg-option2';
		}

		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";

		mobile_x.style.display = "block";
		mobile_y.style.display = "none";
		mobile_z.style.display = "none";

		a.style.display = "block";
		b.style.display = "none";
		c.style.display = "none";
		
		d.style.display = "block";
		e.style.textDecoration = 'underline';

        

	}


	function swapVillas() {
		var x = document.getElementById("townhouses");
		var y = document.getElementById("villas");
		var z = document.getElementById("mansions");

		var mobile_x = document.getElementById("mobile_townhouses");
		var mobile_y = document.getElementById("mobile_villas");
		var mobile_z = document.getElementById("mobile_mansions");

        var ts = document.getElementById("townhouses-slider");
		var vs = document.getElementById("villas-slider");
		var ms = document.getElementById("mansions-slider");

		var mobile_ts = document.getElementById("mobile_townhouses-slider");
		var mobile_vs = document.getElementById("mobile_villas-slider");
		var mobile_ms = document.getElementById("mobile_mansions-slider");

		ts.style.display = "none";
		vs.style.display = "block";
		ms.style.display = "none";

		mobile_ts.style.display = "none";
		mobile_vs.style.display = "block";
		mobile_ms.style.display = "none";

		var s = document.getElementsByClassName("townhouseActive");
		var r = document.getElementsByClassName("villaActive");
		var t = document.getElementsByClassName("mansionActive");

		var l= document.getElementsByClassName("customButton01");
		var m= document.getElementsByClassName("customButton02");
		var n= document.getElementsByClassName("customButton03");

		var a = document.getElementById("section_townhouse");
		var b = document.getElementById("section_villa");
		var c = document.getElementById("section_mansion");
		var d = document.getElementById("threeBedroom");
		var e = document.getElementById("3_bedd");

		var townhouse_floor_plans = document.getElementsByClassName("section_townhouse");
		var villas_floor_plans = document.getElementsByClassName("section_villa");
		var mansions_floor_plans = document.getElementsByClassName("section_mansion");

		// townhouse_floor_plans.style.display = "none";
		// villas_floor_plans.style.display = "block";
		// mansions_floor_plans.style.display = "none";

		for(var i = 0, length = townhouse_floor_plans.length; i < length; i++) {
			townhouse_floor_plans[i].style.display = 'none';
		}

		for(var i = 0, length = villas_floor_plans.length; i < length; i++) {
			villas_floor_plans[i].style.display = 'block';
		}

		for(var i = 0, length = mansions_floor_plans.length; i < length; i++) {
			mansions_floor_plans[i].style.display = 'none';
		}


		for(var i = 0, length = s.length; i < length; i++) {
			s[i].style.display = 'none';
		}

		for(var i = 0, length = r.length; i < length; i++) {
			r[i].style.display = 'block';
		}

		for(var i = 0, length = t.length; i < length; i++) {
			t[i].style.display = 'none';
		}

        // FOR SWITCH
		for(var i = 0, length = l.length; i < length; i++) {
			l[i].classList.remove("customButtonTransform");
            l[i].className += ' bg-option2';
		}

		for(var i = 0, length = m.length; i < length; i++) {
			m[i].className += ' customButtonTransform';
			m[i].classList.remove("bg-option1");
		}

		for(var i = 0, length = n.length; i < length; i++) {
			n[i].classList.remove("customButtonTransform");
			n[i].classList.remove("bg-option2");
            n[i].className += ' bg-option1';
		}
		
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";

		mobile_x.style.display = "none";
		mobile_y.style.display = "block";
		mobile_z.style.display = "none";

        

		a.style.display = "none";
		b.style.display = "block";
		c.style.display = "none";

		d.style.display = "block";
		e.style.textDecoration = 'underline';

	}


	function swapMansions() {
		var x = document.getElementById("townhouses");
		var y = document.getElementById("villas");
		var z = document.getElementById("mansions");

		var mobile_x = document.getElementById("mobile_townhouses");
		var mobile_y = document.getElementById("mobile_villas");
		var mobile_z = document.getElementById("mobile_mansions");

        var ts = document.getElementById("townhouses-slider");
		var vs = document.getElementById("villas-slider");
		var ms = document.getElementById("mansions-slider");

		var mobile_ts = document.getElementById("mobile_townhouses-slider");
		var mobile_vs = document.getElementById("mobile_villas-slider");
		var mobile_ms = document.getElementById("mobile_mansions-slider");

		ts.style.display = "none";
		vs.style.display = "none";
		ms.style.display = "block";

		mobile_ts.style.display = "none";
		mobile_vs.style.display = "none";
		mobile_ms.style.display = "block";

		var s = document.getElementsByClassName("townhouseActive");
		var r = document.getElementsByClassName("villaActive");
		var t = document.getElementsByClassName("mansionActive");

		var l= document.getElementsByClassName("customButton01");
		var m= document.getElementsByClassName("customButton02");
		var n= document.getElementsByClassName("customButton03");

		var a = document.getElementById("section_townhouse");
		var b = document.getElementById("section_villa");
		var c = document.getElementById("section_mansion");
		var d = document.getElementById("mansionBedroom");
		var e = document.getElementById("mansion_bedd");

		var townhouse_floor_plans = document.getElementsByClassName("section_townhouse");
		var villas_floor_plans = document.getElementsByClassName("section_villa");
		var mansions_floor_plans = document.getElementsByClassName("section_mansion");

		// townhouse_floor_plans.style.display = "none";
		// villas_floor_plans.style.display = "block";
		// mansions_floor_plans.style.display = "none";

		for(var i = 0, length = townhouse_floor_plans.length; i < length; i++) {
			townhouse_floor_plans[i].style.display = 'none';
		}

		for(var i = 0, length = villas_floor_plans.length; i < length; i++) {
			villas_floor_plans[i].style.display = 'none';
		}

		for(var i = 0, length = mansions_floor_plans.length; i < length; i++) {
			mansions_floor_plans[i].style.display = 'block';
		}




		for(var i = 0, length = s.length; i < length; i++) {
			s[i].style.display = 'none';
		}

		for(var i = 0, length = r.length; i < length; i++) {
			r[i].style.display = 'none';
		}

		for(var i = 0, length = t.length; i < length; i++) {
			t[i].style.display = 'block';
		}


        // FOR SWITCH
		for(var i = 0, length = l.length; i < length; i++) {
			l[i].classList.remove("customButtonTransform");
			l[i].classList.remove("bg-option2");
			l[i].className += ' bg-option2';
		}

		for(var i = 0, length = m.length; i < length; i++) {
			m[i].classList.remove("customButtonTransform");
            m[i].className += ' bg-option1';

		}

		for(var i = 0, length = n.length; i < length; i++) {
			n[i].className += ' customButtonTransform';
			n[i].classList.remove("bg-option2");
			n[i].classList.remove("bg-option1");
		}

		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";

		mobile_x.style.display = "none";
		mobile_y.style.display = "none";
		mobile_z.style.display = "block";

		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "block";

		d.style.display = "block";
		e.style.display = 'none';

        
	}



	function myFunction() {
		var x = document.getElementById("myDIV");
		var y = document.getElementById("myDIV2");
		if (x.innerHTML === "€ 655,025 <br> Starting Price ") {
			x.innerHTML = "AED 2,560,000 <br> Starting Price ";
			y.innerHTML = "IN EURO";
		} else {
			x.innerHTML = "€ 655,025 <br> Starting Price ";
			y.innerHTML = "IN AED";
		}
	}
	
	function oneBedroom() {
		var s = document.getElementById("1_bedd");
		var p = document.getElementById("2_bedd");
		
		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';	

		var x = document.getElementById("oneBedroom");
		var y = document.getElementById("twoBedroom");

		var mobile_x = document.getElementById("mobile_oneBedroom");
		var mobile_y = document.getElementById("mobile_twoBedroom");

		

		var mobile_s = document.getElementById("mobile_1_bedd");
		var mobile_p = document.getElementById("mobile_2_bedd");
		mobile_s.style.textDecoration = 'underline';
		mobile_p.style.textDecoration = 'none';

		// if (x.style.display === "none") {

			x.style.display = "block";
			y.style.display = "none";

			mobile_x.style.display = "block";
			mobile_y.style.display = "none";


			
			


			
		// } else {
			// x.style.display = "none";
			// y.style.display = "block";
			// z.style.display = "block";
			// w.style.display = "block";
		// }
	}

	function oneBedroom_aura() {
		var x = document.getElementById("oneBedroom_aura");
		var y = document.getElementById("twoBedroom_aura");
		var s = document.getElementById("1_bedd_aura");
		var p = document.getElementById("2_bedd_aura");

		x.style.display = "block";
		y.style.display = "none";
		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';

		var mobile_x = document.getElementById("mobile_oneBedroom_aura");
		var mobile_y = document.getElementById("mobile_twoBedroom_aura");
		var mobile_s = document.getElementById("mobile_1_bedd_aura");
		var mobile_p = document.getElementById("mobile_2_bedd_aura");

		mobile_x.style.display = "block";
		mobile_y.style.display = "none";
		mobile_s.style.textDecoration = 'underline';
		mobile_p.style.textDecoration = 'none';

		
	}
	

	function oneBedroom_alaya() {
		var x = document.getElementById("oneBedroom_alaya");
		var y = document.getElementById("twoBedroom_alaya");

		var s = document.getElementById("1_bedd_alaya");
		var p = document.getElementById("2_bedd_alaya");

			x.style.display = "block";
			y.style.display = "none";
			
			s.style.textDecoration = 'underline';
			p.style.textDecoration = 'none';
	}


	function oneBedroom_harmony3() {
		var x = document.getElementById("oneBedroom_harmony3");
		var y = document.getElementById("twoBedroom_harmony3");
		var z = document.getElementById("threeBedroom_harmony3");
		var s = document.getElementById("1_bedd_harmony3");
		var p = document.getElementById("2_bedd_harmony3");
		var q = document.getElementById("3_bedd_harmony3");

		var mobile_x = document.getElementById("mobile_oneBedroom_harmony3");
		var mobile_y = document.getElementById("mobile_twoBedroom_harmony3");
		var mobile_z = document.getElementById("mobile_threeBedroom_harmony3");
		var mobile_s = document.getElementById("mobile_1_bedd_harmony3");
		var mobile_p = document.getElementById("mobile_2_bedd_harmony3");
		var mobile_q = document.getElementById("mobile_3_bedd_harmony3");

		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';

		mobile_x.style.display = "block";
		mobile_y.style.display = "none";
		mobile_z.style.display = "none";
		mobile_s.style.textDecoration = 'underline';
		mobile_p.style.textDecoration = 'none';
		mobile_q.style.textDecoration = 'none';
	}

	function twoBedroom() {
		var s = document.getElementById("1_bedd");
		var p = document.getElementById("2_bedd");

		s.style.textDecoration = 'none';
		p.style.textDecoration = 'underline';

		
		
		var x = document.getElementById("oneBedroom");
		var y = document.getElementById("twoBedroom");
		
		var mobile_x = document.getElementById("mobile_oneBedroom");
		var mobile_y = document.getElementById("mobile_twoBedroom");

		

		var mobile_s = document.getElementById("mobile_1_bedd");
		var mobile_p = document.getElementById("mobile_2_bedd");
		mobile_s.style.textDecoration = 'none';
		mobile_p.style.textDecoration = 'underline';

		x.style.display = "none";
		y.style.display = "block";

		mobile_x.style.display = "none";
		mobile_y.style.display = "block";

		
	}


	function twoBedroom_aura() {
		var x = document.getElementById("oneBedroom_aura");
		var y = document.getElementById("twoBedroom_aura");
		var s = document.getElementById("1_bedd_aura");
		var p = document.getElementById("2_bedd_aura");
		x.style.display = "none";
		y.style.display = "block";
		s.style.textDecoration = 'none';
		p.style.textDecoration = 'underline';

		var mobile_x = document.getElementById("mobile_oneBedroom_aura");
		var mobile_y = document.getElementById("mobile_twoBedroom_aura");
		var mobile_s = document.getElementById("mobile_1_bedd_aura");
		var mobile_p = document.getElementById("mobile_2_bedd_aura");
		mobile_x.style.display = "none";
		mobile_y.style.display = "block";
		mobile_s.style.textDecoration = 'none';
		mobile_p.style.textDecoration = 'underline';

		
	}

	function twoBedroom_harmony3() {
		var x = document.getElementById("oneBedroom_harmony3");
		var y = document.getElementById("twoBedroom_harmony3");
		var z = document.getElementById("threeBedroom_harmony3");
		var s = document.getElementById("1_bedd_harmony3");
		var p = document.getElementById("2_bedd_harmony3");
		var q = document.getElementById("3_bedd_harmony3");

		var mobile_x = document.getElementById("mobile_oneBedroom_harmony3");
		var mobile_y = document.getElementById("mobile_twoBedroom_harmony3");
		var mobile_z = document.getElementById("mobile_threeBedroom_harmony3");
		var mobile_s = document.getElementById("mobile_1_bedd_harmony3");
		var mobile_p = document.getElementById("mobile_2_bedd_harmony3");
		var mobile_q = document.getElementById("mobile_3_bedd_harmony3");

		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
		s.style.textDecoration = 'none';
		p.style.textDecoration = 'underline';
		q.style.textDecoration = 'none';

		mobile_x.style.display = "none";
		mobile_y.style.display = "block";
		mobile_z.style.display = "none";
		mobile_s.style.textDecoration = 'none';
		mobile_p.style.textDecoration = 'underline';
		mobile_q.style.textDecoration = 'none';
	}


	function twoBedroom_alaya() {
		var x = document.getElementById("oneBedroom_alaya");
		var y = document.getElementById("twoBedroom_alaya");

		var s = document.getElementById("1_bedd_alaya");
		var p = document.getElementById("2_bedd_alaya");

		x.style.display = "none";
		y.style.display = "block";

		s.style.textDecoration = 'none';
		p.style.textDecoration = 'underline';

	}


	function threeBedroom() {
		var x = document.getElementById("oneBedroom");
		var y = document.getElementById("twoBedroom");
		var z = document.getElementById("threeBedroom");
		var w = document.getElementById("fourBedroom");
		var v = document.getElementById("mansionBedroom");

		
		var s = document.getElementById("3_bedd");
		var p = document.getElementById("1_bedd");
		var q = document.getElementById("2_bedd");
		var r = document.getElementById("4_bedd");
		var t = document.getElementById("mansion_bedd");


		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
		w.style.display = "none";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

	}

	function threeBedroom_harmony3() {
		var x = document.getElementById("oneBedroom_harmony3");
		var y = document.getElementById("twoBedroom_harmony3");
		var z = document.getElementById("threeBedroom_harmony3");
		var s = document.getElementById("3_bedd_harmony3");
		var p = document.getElementById("1_bedd_harmony3");
		var q = document.getElementById("2_bedd_harmony3");

		var mobile_x = document.getElementById("mobile_oneBedroom_harmony3");
		var mobile_y = document.getElementById("mobile_twoBedroom_harmony3");
		var mobile_z = document.getElementById("mobile_threeBedroom_harmony3");
		var mobile_s = document.getElementById("mobile_3_bedd_harmony3");
		var mobile_p = document.getElementById("mobile_1_bedd_harmony3");
		var mobile_q = document.getElementById("mobile_2_bedd_harmony3");

		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';

		mobile_x.style.display = "none";
		mobile_y.style.display = "none";
		mobile_z.style.display = "block";
		mobile_s.style.textDecoration = 'underline';
		mobile_p.style.textDecoration = 'none';
		mobile_q.style.textDecoration = 'none';
	}


	


	function fourBedroom() {
		var x = document.getElementById("oneBedroom");
		var y = document.getElementById("twoBedroom");
		var z = document.getElementById("threeBedroom");
		var w = document.getElementById("fourBedroom");
		var v = document.getElementById("mansionBedroom");


		var s = document.getElementById("4_bedd");
		var p = document.getElementById("1_bedd");
		var q = document.getElementById("2_bedd");
		var r = document.getElementById("3_bedd");
		var t = document.getElementById("mansion_bedd");


		
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "block";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

	}

	function mansionFunction() {
		var x = document.getElementById("oneBedroom");
		var y = document.getElementById("twoBedroom");
		var z = document.getElementById("threeBedroom");
		var w = document.getElementById("fourBedroom");
		var v = document.getElementById("mansionBedroom");

		var s = document.getElementById("4_bedd");
		var p = document.getElementById("1_bedd");
		var q = document.getElementById("2_bedd");
		var r = document.getElementById("3_bedd");
		var t = document.getElementById("mansion_bedd");

		
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "none";
		v.style.display = "block";

		s.style.textDecoration = 'none';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'underline';
	}








	function oneBedroom2() {
		var x = document.getElementById("oneBedroom2");
		var y = document.getElementById("twoBedroom2");
		var z = document.getElementById("threeBedroom2");
		var w = document.getElementById("fourBedroom2");
		var v = document.getElementById("mansionBedroom2");

		var s = document.getElementById("1_bed");
		var p = document.getElementById("3_bed");
		var q = document.getElementById("2_bed");
		var r = document.getElementById("4_bed");
		var t = document.getElementById("mansion_bed");


		// if (x.style.display === "none") {
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "none";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

		// } else {
			// x.style.display = "none";
			// y.style.display = "block";
			// z.style.display = "block";
			// w.style.display = "block";
		// }
	}

	function twoBedroom2() {
		var x = document.getElementById("oneBedroom2");
		var y = document.getElementById("twoBedroom2");
		var z = document.getElementById("threeBedroom2");
		var w = document.getElementById("fourBedroom2");
		var v = document.getElementById("mansionBedroom2");

		var s = document.getElementById("2_bed");
		var p = document.getElementById("3_bed");
		var q = document.getElementById("1_bed");
		var r = document.getElementById("4_bed");
		var t = document.getElementById("mansion_bed");


		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
		w.style.display = "none";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

	}


	function threeBedroom2() {
		var x = document.getElementById("oneBedroom2");
		var y = document.getElementById("twoBedroom2");
		var z = document.getElementById("threeBedroom2");
		var w = document.getElementById("fourBedroom2");
		var v = document.getElementById("mansionBedroom2");

		var s = document.getElementById("3_bed");
		var p = document.getElementById("1_bed");
		var q = document.getElementById("2_bed");
		var r = document.getElementById("4_bed");
		var t = document.getElementById("mansion_bed");


		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
		w.style.display = "none";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

	}


	function fourBedroom2() {
		var x = document.getElementById("oneBedroom2");
		var y = document.getElementById("twoBedroom2");
		var z = document.getElementById("threeBedroom2");
		var w = document.getElementById("fourBedroom2");
		var v = document.getElementById("mansionBedroom2");

		var s = document.getElementById("4_bed");
		var p = document.getElementById("1_bed");
		var q = document.getElementById("2_bed");
		var r = document.getElementById("3_bed");
		var t = document.getElementById("mansion_bed");



		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "block";
		v.style.display = "none";


		s.style.textDecoration = 'underline';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'none';

	}


	function mansionBedroom2() {
		var x = document.getElementById("oneBedroom2");
		var y = document.getElementById("twoBedroom2");
		var z = document.getElementById("threeBedroom2");
		var w = document.getElementById("fourBedroom2");
		var v = document.getElementById("mansionBedroom2");

		var s = document.getElementById("4_bed");
		var p = document.getElementById("1_bed");
		var q = document.getElementById("2_bed");
		var r = document.getElementById("3_bed");
		var t = document.getElementById("mansion_bed");


		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "none";
		v.style.display = "block";

		s.style.textDecoration = 'none';
		p.style.textDecoration = 'none';
		q.style.textDecoration = 'none';
		r.style.textDecoration = 'none';
		t.style.textDecoration = 'underline';
	}




/**
 * Mobile scripts
 */


















	function myFunction() {
		var x = document.getElementById("myDIV");
		var y = document.getElementById("myDIV2");
		if (x.innerHTML === "€ 604,554") {
			x.innerHTML = "AED 2.4 Million";
			y.innerHTML = "IN EURO";
		} else {
			x.innerHTML = "€ 604,554";
			y.innerHTML = "IN AED";
		}
	}


   


