
let songArray = [{
  songName: "Si Veo A Tu Mama",
  artistName: "Bad Bunny",
  songLength: "2:50",
  imgAddress: "https://thumbs.gfycat.com/RectangularVigorousGull-size_restricted.gif",
  songLink:"https://www.youtube.com/watch?v=YO9xuiSsHL8"
},{songName:"Brain Stew",
   artistname:"Green day",
   songLength:"3:13",
   imgAddress:"https://media0.giphy.com/media/3o6fJbuTw8DHVwy57G/giphy.gif",
   songLink:"https://www.youtube.com/watch?v=vchLJE-RceM"
  }];
     
songArray.forEach(function(song){
  document.getElementById("Sname").innerHTML += "<div class='first'>"+song.songName+"</div>";
  document.getElementById("Aname").innerHTML += "<div class='first'><b>"+""+song.artistName+"</b></div>"
  document.getElementById("Slength").innerHTML += "<div class='first'><span>"+song.songLength+"</span><br></div>";
  document.getElementById("image").innerHTML += "<img src="+song.imgAddress+"><br></div>";
  document.getElementById("URL").innerHTML += "<div class='first test'><a href="+song.songLink+" target='_blank_'>Listen</a> </div>";
  
})
$(".enter_info").click(function() {
  // this part of the function just retrieves the information from the input boxes and puts the info in a variable
  let song_add = $(".song_name").val();
  let artist_add = $(".artist_name").val();
  let length_add = $(".song_length").val();
  let image_add = $(".Image_address").val();
  let link_add = $(".video_link").val();
  //test
  //let button_add = $("video_link").val()
  
  //this just transfers the information from the variable into the an array 
  let newObj = {
    songName: song_add,
    artistName: artist_add,
    songLength: length_add,
    imgAddress: image_add,
    songLink: link_add
  }

  songArray.push(newObj)
  console.log(songArray)
  

  // and the lines 36-40 just update innner html code to include the new information
  let centerContent = "<br></br><br></br>"
  document.getElementById("Aname").innerHTML += "<div class='newline'> "+centerContent+"<span><b>"+newObj.artistName+"</b></span></div>";
  document.getElementById("Sname").innerHTML += "<div class='newline'>"+centerContent+"<span>"+newObj.songName+"</span></div>";
  document.getElementById("image").innerHTML += "<img src="+newObj.imgAddress+"><br></div>";
  document.getElementById("Slength").innerHTML += "<div class='newline'>"+centerContent+"<span>"+newObj.songLength+"</span><br></div>";
  document.getElementById("URL").innerHTML += "<div class='newline'>"+centerContent+"<a href="+newObj.songLink+" class='newline' target='_blank_'>Listen</a> </div>";
  //document.getElementById("vid-button").innerHTML += "<div class='newline'>"+centerContent+"<button class='custo'> listen </button> </div>"
});