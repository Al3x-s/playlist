//this just holds all the array info of names lengths links and adressses
let songNameArray = ["Si Veo a Tu Mama", "Brain Stew", "93 Til Infinity"];
let artistNameArray = ["Bad bunny","Green Day", "Souls Of Mischief", ];
let songLengthArray = ["2:50","3:13","4:46"];
let imageArray = ["https://zachary-jones.com/zambombazo/wp-content/uploads/2020/03/bad_bunny_-_si_veo_a_tu_mama-f.jpg","https://i.ytimg.com/vi/IPeJ7iM55hc/maxresdefault.jpg","https://images-na.ssl-images-amazon.com/images/I/812%2B8KJoDTL._SL1500_.jpg"];
let songLinkArray = ["https://www.youtube.com/watch?v=YO9xuiSsHL8","https://www.youtube.com/watch?v=vchLJE-RceM","https://www.youtube.com/watch?v=sR7QjmrJqG4"];
//testing
//let buttonarray = ["https://www.youtube.com/watch?v=YO9xuiSsHL8","https://www.youtube.com/watch?v=vchLJE-RceM"];

let ccontent = "<br></br><br></br>";


songNameArray.forEach(function(name){
  document.getElementById("Sname").innerHTML += "<div class='first'>"+name+"</div>";
})
artistNameArray.forEach(function(artistname){
  document.getElementById("Aname").innerHTML += "<div class='first'><b>"+""+artistname+"</b></div>"
})
songLengthArray.forEach(function(length){
  document.getElementById("Slength").innerHTML += "<div class='first'><span>"+length+"</span><br></div>";
})
imageArray.forEach(function(img){
  document.getElementById("image").innerHTML += "<img src="+img+"><br></div>";
})
songLinkArray.forEach(function(link){
  document.getElementById("URL").innerHTML += "<div class='first test'><a href="+link+" target='_blank_'>Listen</a> </div>";
})
//testing
//buttonarray.forEach(function(link){
//  document.getElementById("vid-button").innerHTML += "<div class='first'> <button class='custo'>listen</button> </div>"
//})


$(".enter_info").click(function() {
  // this part of the function just retrieves the information from the input boxes and puts the info in a variable
  let song_add = $(".song_name").val();
  let artist_add = $(".artist_name").val();
  let length_add = $(".song_length").val();
  let image_add = $(".Image_address").val();
  let link_add = $(".video_link").val();
  //test
  let button_add = $("video_link").val()
  
  //this just transfers the information from the variable into the an array 
  songNameArray.push(song_add);
  artistNameArray.push(artist_add);
  songLengthArray.push(length_add);
  imageArray.push(image_add);
  songLinkArray.push(link_add);
  //test
  //buttonarray.push(link_add);
  //console.log(artist_add, song_add, length_add, image_add, link_add, explicit_add)
  
  // this information of new variable gets the last item in an array by calling the last
  // item in an array so that the program know what to display as we enter information
  var newname = [songNameArray.length-1]
  var newArtistName = [artistNameArray.length-1]
  var newLength = [songLengthArray.length-1]
  var newImg = [imageArray.length-1]
  var newLink = [songLinkArray.length-1]
  //test
  //use new link as input
  
  // remember to get actual text value by using songNameArray[newname])
  //the center content just moves the information
  // and the lines 36-40 just update innner html code to include the new information
  let centerContent = "<br></br><br></br>"
  document.getElementById("Aname").innerHTML += "<div class='newline'> "+centerContent+"<span><b>"+artistNameArray[newArtistName]+"</b></span></div>";
  document.getElementById("Sname").innerHTML += "<div class='newline'>"+centerContent+"<span>"+songNameArray[newname]+"</span></div>";
  document.getElementById("image").innerHTML += "<img src="+imageArray[newImg]+"><br></div>";
  document.getElementById("Slength").innerHTML += "<div class='newline'>"+centerContent+"<span>"+songLengthArray[newLength]+"</span><br></div>";
  document.getElementById("URL").innerHTML += "<div class='newline'>"+centerContent+"<a href="+songLinkArray[newLink]+" class='newline' target='_blank_'>Listen</a> </div>";
  document.getElementById("vid-button").innerHTML += "<div class='newline'>"+centerContent+"<button class='custo'> listen </button> </div>"
});

//$(".siveo").hide()
//testing!!!!!
//$("#custo").click(function(){
//  $(iframe).css("display","inline")
//}) 