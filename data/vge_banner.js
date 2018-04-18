var img1,img2,group_overlay;
function getVGEBanner(svgid){
var svgNS = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(svgNS, "svg");
   svg.setAttribute("viewBox","0 0 910 560");
   //svg.setAttribute('width',910);
   //svg.setAttribute('height',560);
   svg.setAttribute('width','100%');
   svg.setAttribute('id',svgid);
  /*<image
     y="49.087692"
     x="284.53238"
     id="image3428"
     xlink:href="data:image/png;base64,iVBORw0KGgoEogK0k7F693Tr8zdDkmJNSb/Jvm1GsSQePJzVeJKT5fkVQxxpULd...."
     style="image-rendering:optimizeQuality"
     preserveAspectRatio="none"
     height="350"
     width="325.58151" />
     
     var img1 = document.createElementNS(svgNS,"image");
     img1.setAttribute('y','49.087692');
     img1.setAttribute('x','284.53238');
     img1.setAttribute('id','image3428');
     img1.setAttribute('xlink:href','data:image/png;base64,iVBORw0KGgoAAAANSUhGU.......');
     img1.setAttribute('style','image-rendering:optimizeQuality');
     img1.setAttribute('preserveAspectRatio','none');
     img1.setAttribute('height','350');
     img1.setAttribute('width','325.58151');*/
    
     /* <image
     sodipodi:absref="/home/athman/Vizhi Green Expressions/Website/images/vge_eye.png"
     y="18.685434"
     x="63.412506"
     id="image3452"
     xlink:href="file:///home/athman/Vizhi%20Green%20Expressions/Website/images/vge_eye.png"
     preserveAspectRatio="none"
     height="385.23007"
     width="797.59644" />
  <image
     sodipodi:absref="/home/athman/Vizhi Green Expressions/Website/images/vge_globe.png"
     y="53.800663"
     x="297.18173"
     id="image3463"
     xlink:href="file:///home/athman/Vizhi%20Green%20Expressions/Website/images/vge_globe.png"
     preserveAspectRatio="none"
     height="340"
     width="330" />*/
    img1 = document.createElementNS(svgNS,"image");
    img1.setAttribute('y','18.685434');
     img1.setAttribute('x','63.412506');
     img1.setAttribute('id','eye1001');
     img1.setAttribute('href','../images/vge_eye.png');
    // img1.setAttribute('xlink:href','images/vge_eye.png');
    img1.setAttribute('style','image-rendering:optimizeQuality');
     img1.setAttribute('preserveAspectRatio','none');
     img1.setAttribute('height','385.23007');
     img1.setAttribute('width','797.59644');
    svg.appendChild(img1);
        img1.addEventListener("mouseover", function(){console.log("eye over"); document.getElementById("group001").style.display = "none";});
    
    
    img2 = document.createElementNS(svgNS,"image");
    img2.setAttribute('y','53.800663');
     img2.setAttribute('x','297.18173');
     img2.setAttribute('id','eye1002');
     //img2.setAttribute('xlink:href','images/vge_globepng');
      img2.setAttribute('href','../images/vge_globe.png');
    img2.setAttribute('style','image-rendering:optimizeQuality');
     img2.setAttribute('preserveAspectRatio','none');
     img2.setAttribute('height','340');
     img2.setAttribute('width','330');
    svg.appendChild(img2);
    //img2.addEventListener("click", globe_onclick);
    img2.addEventListener("mouseover", function(){console.log("ball over"); document.getElementById("group001").style.display = "block";});
    
    /*<circle cx = "50%" cy = "50%" r = "35%" fill = "#ededed">
          <animate attributeName="r" begin="0s" dur="1s" repeatCount="indefinite" from="25%" to="35%"/>
          </circle>
          <circle cx = "50%" cy = "50%" r = "25%" fill = "#808080">
          <animate attributeName="r" begin="0s" dur="1s" repeatCount="indefinite" from="15%" to="25%"/>
          </circle>
            <circle class = "innerCircle" cx = "50%" cy = "50%" r = "15%" fill = "#000000">
             
            </circle> */
            

group_overlay = document.createElementNS(svgNS,"g");
group_overlay.style.display = "none";
group_overlay.setAttribute("id","group001");
        //var bb = group_overlay.getBBox();
        var matrix = "matrix(0.5,0,0,0.5,234,70)";
       group_overlay.setAttribute("transform", matrix);
// group_overlay.setAttribute("transform", "translate(125,25)");
var cir1 = document.createElementNS(svgNS,"circle");
cir1.setAttribute("cx","50%");
cir1.setAttribute("cy","50%");
cir1.setAttribute("r","35%");
cir1.setAttribute("fill","#ededed");
cir1.setAttribute("opacity","0.6");
var animate_cir1 = document.createElementNS(svgNS,"animate"); 
animate_cir1.setAttribute("attributeName","r"); 
animate_cir1.setAttribute("begin","0s"); 
animate_cir1.setAttribute("dur","1s"); 
animate_cir1.setAttribute("repeatCount","indefinite"); 
animate_cir1.setAttribute("from","25%"); 
animate_cir1.setAttribute("to","35%"); 
cir1.appendChild(animate_cir1);
group_overlay.appendChild(cir1);
var cir2 = document.createElementNS(svgNS,"circle");
cir2.setAttribute("cx","50%");
cir2.setAttribute("cy","50%");
cir2.setAttribute("r","25%");
cir2.setAttribute("fill","#808080");
cir2.setAttribute("opacity","0.6");
var animate_cir2 = document.createElementNS(svgNS,"animate"); 
animate_cir2.setAttribute("attributeName","r"); 
animate_cir2.setAttribute("begin","0s"); 
animate_cir2.setAttribute("dur","1s"); 
animate_cir2.setAttribute("repeatCount","indefinite"); 
animate_cir2.setAttribute("from","15%"); 
animate_cir2.setAttribute("to","25%");
cir2.appendChild(animate_cir2); 
group_overlay.appendChild(cir2);
var cir3 = document.createElementNS(svgNS,"circle"); 
cir3.setAttribute("cx","50%");
cir3.setAttribute("cy","50%");
cir3.setAttribute("r","15%");
cir3.setAttribute("fill","#000000");
cir3.setAttribute("opacity","0.6");
cir3.addEventListener("click", function(){
console.log("click"); 
document.getElementById("vge_svg").style.display = "none";
document.getElementById("interface").style.display = "block";
document.getElementById("page_back").style.display = "block";
});
/*<a xlink:href="https://www.google.com" style="cursor: pointer" target="_blank">
    <circle  cx="125" cy="70" r="60" stroke="darkblue" stroke-width="3" fill="green" />
  </a>*/

group_overlay.appendChild(cir3); 

/*<text x="90" y="100" fill="white" width = "30%" style="font-size: 8px;">Click</text>
            <text x="85" y="110" fill="white" width = "30%" style="font-size: 8px;">For More</text>*/


var gtext1 = document.createElementNS(svgNS, "text");
gtext1.setAttribute("x","46%");
gtext1.setAttribute("y","50%");
gtext1.setAttribute("fill","white");
gtext1.setAttribute("font-size","25px");
gtext1.textContent = "Click";
group_overlay.appendChild(gtext1);
var gtext2 = document.createElementNS(svgNS, "text");
gtext2.setAttribute("x","45%");
gtext2.setAttribute("y","55%");
gtext2.setAttribute("fill","white");
gtext2.setAttribute("font-size","25px");
gtext2.textContent = "For More";
group_overlay.appendChild(gtext2);




svg.appendChild(group_overlay);
    
/*  <text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:58.75px;line-height:125%;font-family:Arial;-inkscape-font-specification:Arial;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     x="60.184738"
     y="461.50317"
     id="text3357"
     sodipodi:linespacing="125%"><tspan
       sodipodi:role="line"
       id="tspan3359"
       x="60.184738"
       y="461.50317"
       style="font-size:58.75px"><tspan
   style="fill:#ff6600"
   id="tspan3363">VIZHI</tspan><tspan
   style="fill:#00ff00"
   id="tspan3361"> GREEN</tspan> EXPRESSIONS</tspan></text>*/

  var txtElem = document.createElementNS(svgNS, "text");
 
txtElem.setAttribute("x",60.184738);
txtElem.setAttribute("y",461.50317);
txtElem.setAttribute("font-size","58.75px");
txtElem.setAttribute("font-style","normal");
txtElem.setAttribute("font-family","Arial");
txtElem.setAttribute("font-weight","normal");
txtElem.setAttribute("line-height","125%");
var ts1 = document.createElementNS(svgNS, "tspan");
var ts2 = document.createElementNS(svgNS, "tspan");
var ts3 = document.createElementNS(svgNS, "tspan");

ts1.setAttribute("fill","#ff6600");
ts2.setAttribute("fill","#00ff00");
ts3.setAttribute("fill","#000000");

ts1.textContent = "VIZHI";
ts2.textContent = " GREEN";
ts3.textContent = " EXPRESSIONS";

txtElem.appendChild(ts1);  
txtElem.appendChild(ts2);
txtElem.appendChild(ts3);  
    
    svg.appendChild(txtElem);

/*  <text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:18.75px;line-height:125%;font-family:Arial;-inkscape-font-specification:Arial;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     x="59.079563"
     y="471.97031"
     id="text3443"
     sodipodi:linespacing="125%"><tspan
       sodipodi:role="line"
       x="59.079563"
       y="471.97031"
       id="tspan3447" /><tspan
       sodipodi:role="line"
       x="59.079563"
       y="506.47867"
       id="tspan3451"
       style="font-size:30px">•Solar •CCTV •Wireless •DIY •Clean Energy •Green Gadgets</tspan></text>*/
       
  var txtElem2 = document.createElementNS(svgNS, "text");
 
txtElem2.setAttribute("x",59.079563);
txtElem2.setAttribute("y",506.47867);
txtElem2.setAttribute("font-size","30px");
txtElem2.setAttribute("font-style","normal");
txtElem2.setAttribute("font-family","Arial");
txtElem2.setAttribute("font-weight","normal");
txtElem2.setAttribute("line-height","125%");
var ts4 = document.createElementNS(svgNS, "tspan");
ts4.setAttribute("fill","#000000");
ts4.textContent = "•Solar •CCTV •Wireless •DIY •Clean Energy •Green Gadgets";
txtElem2.appendChild(ts4);  
    
    svg.appendChild(txtElem2);       
       
       
       
 /* Call symbol
 <path
     inkscape:connector-curvature="0"
     style="fill:#4d4d4d"
     d="m 79.929155,536.88748 -2.223659,-2.66016 c -0.443063,-0.52786 -1.249728,-0.58503 -1.798001,-0.12524 l -1.340026,1.11991 c -0.0741,-0.0518 -0.150323,-0.0994 -0.230664,-0.15567 -0.738358,-0.49979 -1.748809,-1.18452 -2.767408,-2.40459 -1.021819,-1.22201 -1.517142,-2.33992 -1.879423,-3.15598 -0.03841,-0.0872 -0.07486,-0.17066 -0.111166,-0.24898 l 0.899274,-0.75046 0.442231,-0.37033 c 0.549066,-0.45915 0.63497,-1.26301 0.193178,-1.79212 l -2.223644,-2.66076 c -0.441845,-0.52838 -1.248896,-0.5858 -1.797996,-0.12524 l -0.749994,0.63047 0.0177,0.0224 c -0.257064,0.27393 -0.48023,0.5961 -0.656428,0.9495 -0.163272,0.33669 -0.275504,0.66195 -0.34292,0.99195 -0.56126,2.64399 0.441859,5.19578 3.460179,8.80664 4.172672,4.99118 7.895697,4.97475 8.056827,4.97252 0.350622,-0.009 0.690654,-0.0628 1.040174,-0.16356 0.37551,-0.11151 0.732235,-0.27152 1.047057,-0.47552 l 0.01045,0.0119 0.758215,-0.62048 c 0.547992,-0.45911 0.634508,-1.26305 0.192985,-1.79274 m 7.74209,-5.89072 A 14.999978,14.999978 0 0 1 72.667834,546 14.999978,14.999978 0 0 1 57.668186,530.99973 a 14.999978,14.999978 0 0 1 15.000322,-14.9997 14.999978,14.999978 0 0 1 14.999648,15.00025"
     id="path9213" />*/      
       
      var path0 = document.createElementNS(svgNS, "path");
      path0.setAttribute("id","path001");
         path0.setAttribute("fill","#4d4d4d");
       
       path0.setAttribute("d","m 79.929155,536.88748 -2.223659,-2.66016 c -0.443063,-0.52786 -1.249728,-0.58503 -1.798001,-0.12524 l -1.340026,1.11991 c -0.0741,-0.0518 -0.150323,-0.0994 -0.230664,-0.15567 -0.738358,-0.49979 -1.748809,-1.18452 -2.767408,-2.40459 -1.021819,-1.22201 -1.517142,-2.33992 -1.879423,-3.15598 -0.03841,-0.0872 -0.07486,-0.17066 -0.111166,-0.24898 l 0.899274,-0.75046 0.442231,-0.37033 c 0.549066,-0.45915 0.63497,-1.26301 0.193178,-1.79212 l -2.223644,-2.66076 c -0.441845,-0.52838 -1.248896,-0.5858 -1.797996,-0.12524 l -0.749994,0.63047 0.0177,0.0224 c -0.257064,0.27393 -0.48023,0.5961 -0.656428,0.9495 -0.163272,0.33669 -0.275504,0.66195 -0.34292,0.99195 -0.56126,2.64399 0.441859,5.19578 3.460179,8.80664 4.172672,4.99118 7.895697,4.97475 8.056827,4.97252 0.350622,-0.009 0.690654,-0.0628 1.040174,-0.16356 0.37551,-0.11151 0.732235,-0.27152 1.047057,-0.47552 l 0.01045,0.0119 0.758215,-0.62048 c 0.547992,-0.45911 0.634508,-1.26305 0.192985,-1.79274 m 7.74209,-5.89072 A 14.999978,14.999978 0 0 1 72.667834,546 14.999978,14.999978 0 0 1 57.668186,530.99973 a 14.999978,14.999978 0 0 1 15.000322,-14.9997 14.999978,14.999978 0 0 1 14.999648,15.00025");
       
        svg.appendChild(path0);    
/*<text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:18.75px;line-height:125%;font-family:Arial;-inkscape-font-specification:Arial;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     x="92.125877"
     y="543.68262"
     id="text9234"
     sodipodi:linespacing="125%"><tspan
       sodipodi:role="line"
       id="tspan9236"
       x="92.125877"
       y="543.68262"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:25px;font-family:Arial;-inkscape-font-specification:'Arial Bold'">+91 9487066151</tspan></text>*/
       
         var txtElem3 = document.createElementNS(svgNS, "text");
 
txtElem3.setAttribute("x","92.125877");
txtElem3.setAttribute("y","543.68262");
txtElem3.setAttribute("font-size","25px");
txtElem3.setAttribute("font-style","normal");
txtElem3.setAttribute("font-family","Arial");
txtElem3.setAttribute("font-weight","bold");
txtElem3.setAttribute("line-height","125%");
var ts5 = document.createElementNS(svgNS, "tspan");
ts5.setAttribute("fill","#000000");
ts5.textContent = "+91 9487066151";
txtElem3.appendChild(ts5);  
    
    svg.appendChild(txtElem3);
/*<text
     x="287.71991"
     y="539.17316"
     font-size="144px"
     style="font-size:32.43928146px;font-family:Arial"
     id="text9259">@</text>*/

   var txtElem4 = document.createElementNS(svgNS, "text");
 
txtElem4.setAttribute("x","287.71991");
txtElem4.setAttribute("y","539.17316");
txtElem4.setAttribute("font-size","33px");
txtElem4.setAttribute("font-style","normal");
txtElem4.setAttribute("font-family","Arial");
txtElem4.setAttribute("font-weight","bold");
txtElem4.setAttribute("line-height","125%");
var ts6 = document.createElementNS(svgNS, "tspan");
ts6.setAttribute("fill","#000000");
ts6.textContent = "@";
txtElem4.appendChild(ts6);  
    
    svg.appendChild(txtElem4);
 /* <text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:18.75px;line-height:125%;font-family:Arial;-inkscape-font-specification:Arial;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     x="326.37347"
     y="540.73877"
     id="text9234-4"
     sodipodi:linespacing="125%"><tspan
       sodipodi:role="line"
       id="tspan9236-9"
       x="326.37347"
       y="540.73877"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:25px;font-family:Arial;-inkscape-font-specification:'Arial Bold'">loginvizhi@gmail.com</tspan></text>*/
         var txtElem5 = document.createElementNS(svgNS, "text");
 
txtElem5.setAttribute("x","326.37347");
txtElem5.setAttribute("y","540.73877");
txtElem5.setAttribute("font-size","25px");
txtElem5.setAttribute("font-style","normal");
txtElem5.setAttribute("font-family","Arial");
txtElem5.setAttribute("font-weight","bold");
txtElem5.setAttribute("line-height","125%");
var ts7 = document.createElementNS(svgNS, "tspan");
ts7.setAttribute("fill","#000000");
ts7.textContent = "loginvizhi@gmail.com";
txtElem5.appendChild(ts7);  
    
    svg.appendChild(txtElem5);  
  /*  <text
     xml:space="preserve"
     style="font-style:normal;font-weight:normal;font-size:18.75px;line-height:125%;font-family:Arial;-inkscape-font-specification:Arial;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
     x="604.00647"
     y="542.0083"
     id="text9234-4-9"
     sodipodi:linespacing="125%"><tspan
       sodipodi:role="line"
       id="tspan9236-9-3"
       x="604.00647"
       y="542.0083"
       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:25px;font-family:Arial;-inkscape-font-specification:'Arial Bold'">#189, Bazaar St.  CDM</tspan></text>*/
              var txtElem6 = document.createElementNS(svgNS, "text");
 
txtElem6.setAttribute("x","604.00647");
txtElem6.setAttribute("y","542.0083");
txtElem6.setAttribute("font-size","25px");
txtElem6.setAttribute("font-style","normal");
txtElem6.setAttribute("font-family","Arial");
txtElem6.setAttribute("font-weight","bold");
txtElem6.setAttribute("line-height","125%");
var ts8 = document.createElementNS(svgNS, "tspan");
ts8.setAttribute("fill","#000000");
ts8.textContent = "#189, Bazaar St.  CDM";
txtElem6.appendChild(ts8);  
    
    svg.appendChild(txtElem6);  
         
    
    
   // document.body.appendChild(svg);
    document.getElementById("vge_svg").appendChild(svg); 


}
   



