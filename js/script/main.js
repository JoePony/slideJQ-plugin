require.config({shim:{},paths:{jquery:"../lib/jquery-1.11.3.min",jqueryui:"../lib/jquery-ui.min",validate:"../lib/jquery.validate-v1.13.1.min",toTop:"../plugins/toTop",SlideJQ:"../plugins/slideJQ",bouncingBox:"../plugins/bouncingBox",validateApplyForm:"validateForm"}}),require(["jquery","toTop","SlideJQ","validateApplyForm","jqueryui"],function(i,e,t,a,l){$(function(){$("#slideWrap1").slideJQ({slideList:".slide-list",navList:{ele:".index-list",activeClass:"active"},titleList:".slide-title-list",arrowPrev:".prev",arrowNext:".next",speed:300,animate:{type:"slide"},aniamtionType:"swing",autoPlay:!0,duration:1500,initialIndex:2,mouseType:"click mouseover",titleHidden:!1,navHidden:!1}),$("#slideWrap2").slideJQ({slideList:".slide-list",navList:{ele:".index-list",activeClass:"active"},titleList:".slide-title-list",arrowPrev:".prev",arrowNext:".next",animate:{type:"blur",className:"animation-blur"},duration:1500,navHidden:!0}),$("#slideWrap3").slideJQ({slideList:".slide-list",navList:{ele:".index-list",activeClass:"active"},titleList:".slide-title-list",arrowPrev:".prev",arrowNext:".next",animate:{type:"fade",className:"animation-fade"},duration:1500,navHidden:!0}),$("#slideWrap4").slideJQ({slideList:".slide-list",navList:{ele:".index-list",activeClass:"active"},titleList:".slide-title-list",arrowPrev:".prev",arrowNext:".next",animate:{type:"scale",className:"animation-scale"},duration:1500,titleHidden:!0,navHidden:!0}),$("#slideWrap5").slideJQ({slideList:".slide-list",navList:{ele:".index-list",activeClass:"active"},titleList:".slide-title-list",arrowPrev:".prev",arrowNext:".next",animate:{type:"rotate",className:"animation-rotate"},duration:1500,titleHidden:!0}),$("#slideCarrousel1").slideJQ({slideList:".slide-list",arrowPrev:".prev",arrowNext:".next",animate:{type:"carrousel"}}),$("#tabWrap1").slideJQ({slideList:".pane-list",navList:{ele:".tab-list",activeClass:"active"},animate:{type:"default"},autoPlay:!1,mouseType:"click",remainNav:!0,initialIndex:3}),function(){function i(i){i>t?e.fadeIn(300):e.fadeOut(100)}var e=$("#toTop"),t=document.documentElement.scrollHeight/4;i($(window).scrollTop()),$(window).scroll(function(){i($(this).scrollTop())}),e.toTop()}(),a()})});