/**
 * Created by llcly on 2014/9/28.
 */
window.onload = function () {
    var navList1 = document.getElementById("J_nav_list1");
    var ulNb = navList1.getElementsByTagName("ul");
    var oSpan = navList1.getElementsByTagName("span");
//naver
    for(var i = 0; i < oSpan.length; i++){

        oSpan[i].num1 = i;
        oSpan[i].num2 = 0;
        oSpan[i].onclick = function () {

            for( var j = 0; j < oSpan.length; j++){
                ulNb[j].style.display = "none";
            }
            switch (this.num2){

                case 0:
                    ulNb[this.num1].style.display = "block";
                    for( var k = 0;  k < oSpan.length; k++){
                        oSpan[k].num2 = 0;
                    }
                    this.num2 = 1;
                    break;
                case 1:
                    ulNb[this.num1].style.display = "none";
                    this.num2 = 0;
                    break;
            }

        }
    }

};




