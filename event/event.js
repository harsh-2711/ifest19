// var e1 = document.querySelector("#e-1");
// var e2 = document.querySelector("#e-2");
// var e3 = document.querySelector("#e-3");
// var e4 = document.querySelector("#e-4");
// var e5 = document.querySelector("#e-5");
// var e6 = document.querySelector("#e-6");
// var e7 = document.querySelector("#e-7");
// var e8 = document.querySelector("#e-8");
// var e9 = document.querySelector("#e-9");
// var e10 = document.querySelector("#e-10");
// var e11 = document.querySelector("#e-11");
// var e12 = document.querySelector("#e-12");
// var e13 = document.querySelector("#e-13");
// var e14 = document.querySelector("#e-14");
// var e15 = document.querySelector("#e-15");
// var e16 = document.querySelector("#e-16");
// var e17 = document.querySelector("#e-17");
// var e18 = document.querySelector("#e-18");
// var e19 = document.querySelector("#e-19");
// var e20 = document.querySelector("#e-20");
// var e21 = document.querySelector("#e-21");
// var e22 = document.querySelector("#e-22");
// var e23 = document.querySelector("#e-23");

// var d1 = document.querySelector(".content-1");
// var d2 = document.querySelector(".content-2");
// var d3 = document.querySelector(".content-3");
// var d4 = document.querySelector(".content-4");
// var d5 = document.querySelector(".content-5");
// var d6 = document.querySelector(".content-6");
// var d7 = document.querySelector(".content-7");
// var d8 = document.querySelector(".content-8");
// var d9 = document.querySelector(".content-9");
// var d10 = document.querySelector(".content-10");
// var d11 = document.querySelector(".content-11");
// var d12 = document.querySelector(".content-12");
// var d13 = document.querySelector(".content-13");
// var d14 = document.querySelector(".content-14");
// var d15 = document.querySelector(".content-15");
// var d16 = document.querySelector(".content-16");
// var d17 = document.querySelector(".content-17");
// var d18 = document.querySelector(".content-18");
// var d19 = document.querySelector(".content-19");
// var d20 = document.querySelector(".content-20");
// var d21 = document.querySelector(".content-21");
// var d22 = document.querySelector(".content-22");
// var d23 = document.querySelector(".content-23");

// var e = [e1,e2,e3,e4,e5,e6];
// var e = [e1,e2,e3,'e4','e5','e6','e7','e8','e9','e10','e11','e12','e13','e14','e15','e16','e17','e18','e19','e20','e21','e22','e23'];
// var d = ['d1','d2','d3','d4','d5','d6'];
// var d = ['d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','d16','d17','d18','d19','d20','d21','d22','d23'];

function init() {


    var e = document.querySelectorAll('li');
    //var d = document.querySelectorAll('p');


    // for(var i=0;i<23;i++) { 
    //     e[i]= document.querySelector('#e-' + i+1);
    //     d[i]=document.querySelector('.content-' + i+1);
    //     console.log(typeof(e[i]));
    // }

    for (var i = 0; i < 23; i++) {
        console.log(e[i]);

        $("#e-" + (i + 1)).click(function() {
                var content = $(this).attr('data');
                $(".show").removeClass("show");
                $("." + content).addClass("show");

            })
            // e[i].addEventListener("click", function() {


        //     for(var j=0;j<23;j++) {
        //         console.log(i);

        //         if(j!=i) {
        //             d[j].classList.remove('show');
        //         } else {

        //             console.log(d[1].classList[0])
        //             d[j].classList.add('show');
        //         }

        //     }
        // })

    }

}

init();
// e1.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d1.classList.add('show');
// });

// e2.addEventListener("click", function() {
//     d1.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d2.classList.add('show');
// });

// e3.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d1.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d3.classList.add('show');
// });

// e4.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d1.classList.remove('show');
//     d5.classList.remove('show');
//     d6.classList.remove('show');
//     d4.classList.add('show');
// });

// e5.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d1.classList.remove('show');
//     d6.classList.remove('show');
//     d5.classList.add('show');
// });

// e6.addEventListener("click", function() {
//     d2.classList.remove('show');
//     d3.classList.remove('show');
//     d4.classList.remove('show');
//     d5.classList.remove('show');
//     d1.classList.remove('show');
//     d6.classList.add('show');
// });