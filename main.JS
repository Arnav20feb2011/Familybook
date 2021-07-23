
}
var reasons =[
    "Family book","Grandfather", "Grandmother", "Father","Mother"
  
  ];
  var images=[
    "https://image.shutterstock.com/https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg-vector/cute-grandfather-cartoon-260nw-726215185.jpg",
    "https://thumbs.dreamstime.com/b/cartoon-grandma-cute-vector-clip-art-illustration-simple-gradients-all-single-layer-57681194.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/72/81/family-single-father-with-little-kid-cartoon-vector-26327281.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f7/A_Happy_Working_Mom_Cartoon.svg"
    
  
  
  ];
  var i=0;
  function nextslide(){
    document.getElementById("text1").innerHTML=reasons[i];
     document.getElementById("img1").src=images[i];
    i++;
  }