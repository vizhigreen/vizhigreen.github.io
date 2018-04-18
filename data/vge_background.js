
function setVGEbackground(){
var svgNS = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox","0 0 910 560");
   svg.setAttribute('width',"100%");
    svg.setAttribute('height',"100%");
    svg.setAttribute('position','absolute');
   svg.setAttribute('id',"back001");
   svg.setAttribute('preserveAspectRatio','none');
    var img1 = document.createElementNS(svgNS,"image");
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
    
    var img2 = document.createElementNS(svgNS,"image");
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
     
     
    document.getElementById("page_back").appendChild(svg); 
    //alert(document.getElementById("interface").innerHTML);




}
   



