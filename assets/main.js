       window.onload = function(){
        setTimeout(() => {
            document.querySelector(".loader").style.display="none";
        }, 2000);
       }
       

       var i = 1;
        showImg(i);
        function playSlide(param) {
            showImg(i+=param);
        }
        function showImg(stt){
            var slides = document.getElementsByClassName("slider-img");
            if (stt>slides.length) {
                i = 1;
            }

            if (stt<1) {
                i = slides.length;
            }

            for (let index = 0; index < slides.length; index++) {
                slides[index].style.display="none";    
            };

            slides[i-1].style.display ="block";
        }

        document.getElementById("slider_btn-l").onclick = function(){
            playSlide(-1);
        }

        document.getElementById("slider_btn-r").onclick = function(){
            playSlide(1);
        }

        setInterval(() => {
            playSlide(1);
        }, 2500);

        window.onscroll = function (){
            if (document.documentElement.scrollTop> 50) {
                var header = document.getElementById("header");
                var headerws = document.getElementById("headerws-js");

                header.style.height="40px";
                headerws.style.display="none";
            }else{
                var header = document.getElementById("header");
                var headerws = document.getElementById("headerws-js");

                header.style.height="var(--header-height)";
                headerws.style.display="flex";
            }

            if (document.documentElement.scrollTop> 300) {
                var banner = document.querySelectorAll(".container-banner");
                banner.forEach(element => {
                    element.style.display="block";
                });
            } else{
                var banner = document.querySelectorAll(".container-banner");
                banner.forEach(element => {
                    element.style.display="none";
                });
            }

            if (document.documentElement.scrollTop> 600) {
                var items = document.querySelectorAll(".produce-item");
                items.forEach(element => {
                    element.style.display="block";
                });

                var anh = document.getElementsByClassName("showProduce");
                for (const value of anh) {
                    value.style.display="block";
                }

                var gotop = document.querySelector(".go-to-top");
                gotop.style.display="block";

                gotop.onclick = function(){
                    var timer = setInterval(() => {
                        if (document.documentElement.scrollTop > 0) {
                            document.documentElement.scrollTop-=20;
                        }else{
                            clearInterval(timer);
                        }
                    }, 1);
                }

            }else{
                var gotop = document.querySelector(".go-to-top");
                gotop.style.display="none";

                var items = document.querySelectorAll(".produce-item");
                items.forEach(element => {
                    element.style.display="none";
                });

                var anh = document.getElementsByClassName("showProduce");
                for (const value of anh) {
                    value.style.display="none";
                }
            }

            if (document.documentElement.scrollTop> 1200) {
                var hot = document.querySelector(".hot-sale");
                hot.style.display="flex";
                var hotItem = document.querySelectorAll(".hot-sale-item");
                hotItem.forEach(element => {
                    element.style.animation="bottomIn linear 0.5s forwards";
                });
            } else{
                var hotItem = document.querySelectorAll(".hot-sale-item");
                hotItem.forEach(element => {
                    element.style.animation="bottomOut linear 0.5s forwards";
                });
                var hot = document.querySelector(".hot-sale");
                hot.style.display="none";
            }


            if (document.documentElement.scrollTop> 1500) {
                var big = document.querySelector(".news-item-big");
                big.style.display="block";

                var items = document.querySelectorAll(".news-item-small");
                items.forEach(element => {
                    element.style.display="block";
                });

                var heading =  document.querySelector(".news-heading");
                heading.style.display="block";
            }else{
                var big = document.querySelector(".news-item-big");
                big.style.display="none";

                var items = document.querySelectorAll(".news-item-small");
                items.forEach(element => {
                    element.style.display="none";
                });
                var heading =  document.querySelector(".news-heading");
                heading.style.display="none";
            }

            if (document.documentElement.scrollTop> 1800) {
                var content = document.querySelector(".community")
                content.style.display="flex";
            }else{
                var content = document.querySelector(".community")
                content.style.display="none";
            }

            if (document.documentElement.scrollTop> 2500){
                var content = document.querySelector(".slogan")
                content.style.display="flex";
            }else{
                var content = document.querySelector(".slogan")
                content.style.display="none";
            }

            if (document.documentElement.scrollTop > 3200){
                var content = document.querySelector(".slogan-content")
                content.style.display="block";
            }else{
                var content = document.querySelector(".slogan-content")
                content.style.display="none";
            }

        }

        var join = document.querySelector(".slogan-btn");
        var closeBtn = document.getElementById("form-close-btn");
        var formSign = document.getElementById("login-form");
        var btnAccount = document.getElementById("header-signup");
        btnAccount.onclick = function(){
            formSign.classList.add("open-fl");
        }
        document.getElementById("login-form-container").onclick=function(e){
            e.stopPropagation();
        }

        join.onclick = function(){
            formSign.classList.add("open-fl");
        }
        
        closeBtn.onclick = function(e){
            formSign.classList.remove("open-fl");
        }

        formSign.onclick = function(e){
            formSign.classList.remove("open-fl");
        }

        var logNav = document.querySelector('.login-navi');
        var logNav2 = document.querySelector('.login-navi2');
        var log = document.querySelector('.login-accout');
        logNav.onclick= function(){
            document.querySelector('.login-stt:first-child').classList.toggle("active")
            document.querySelector('.login-stt:last-child').classList.toggle("active")
        }
        logNav2.onclick= function(){
            document.querySelector('.login-stt:first-child').classList.toggle("active")
            document.querySelector('.login-stt:last-child').classList.toggle("active")
        }
        var hide = document.querySelector('.hidepw');
        var hide1 = document.querySelector('.hidepw2');

        var x = document.getElementById("form-account-pass");
        hide.onclick = function(){
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }

        var y = document.getElementById("form-account-pass2");

        hide1.onclick = function(){
            if (y.type === "password") {
                y.type = "text";
            } else {
                y.type = "password";
            }
        }



        var slick = document.querySelector(".header-darkmode-btn");
        var body = document.querySelector("body");
        slick.onclick = function(){
            body.classList.toggle("dark");
        }

        var viewCard = document.querySelector(".community-showcard");
        var card = document.querySelector(".comunity-card");
        viewCard.onclick= function(){
            viewCard.classList.toggle("click");
            card.classList.toggle("open-fl");
        }

        var viewCard2 = document.querySelector(".community-showcard2");
        var card2 = document.querySelector(".comunity-card2");
        viewCard2.onclick= function(){
            viewCard2.classList.toggle("click");
            card2.classList.toggle("open-fl");
        }

        var cate = document.querySelector(".header_nav-category");
        var cateList = document.querySelector(".header_nav-category--list");

        cate.onclick= ()=>{
            cateList.classList.toggle('open');
        }