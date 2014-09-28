/**
 * Created by llcly on 2014/9/28.
 */
window.onload = function () {
    var navList1 = document.getElementById("J_nav_list1");
    var ulNb = navList1.getElementsByTagName("ul");

        ulNb[0].previousElementSibling.onclick = function () {
            ulNb[1].style.display = "none";
            ulNb[2].style.display = "none";
            ulNb[3].style.display = "none";
            if( ulNb[0].style.display == "block"){
                ulNb[0].style.display = "none";
            }else{

                ulNb[0].style.display = "block";
            }
        };
        ulNb[1].previousElementSibling.onclick = function () {
            ulNb[0].style.display = "none";
            ulNb[2].style.display = "none";
            ulNb[3].style.display = "none";
            if( ulNb[1].style.display == "block"){
                ulNb[1].style.display = "none";
            }else{

                ulNb[1].style.display = "block";
            }
        };
        ulNb[2].previousElementSibling.onclick = function () {
            ulNb[0].style.display = "none";
            ulNb[1].style.display = "none";
            ulNb[3].style.display = "none";
            if( ulNb[2].style.display == "block"){
                ulNb[2].style.display = "none";
            }else{
                ulNb[2].style.display = "block";
            }
        };
        ulNb[3].previousElementSibling.onclick = function () {
            ulNb[0].style.display = "none";
            ulNb[1].style.display = "none";
            ulNb[2].style.display = "none";
            if( ulNb[3].style.display == "block"){
                ulNb[3].style.display = "none";
            }else{

                ulNb[3].style.display = "block";
            }
        };

};
