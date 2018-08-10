document.addEventListener("DOMContentLoaded", function (e) {
}); 

function change() {
    console.log("ENTERING FUNCTION");
    var switchPic = document.getElementById('profilePicture');
    var random = true 
    if (switchPic.src === "file:///C:/Users/GWC03/Documents/Portfolio/pic1.jpg") {
        console.log (switchPic.src);
        switchPic.src = "file:///C:/Users/GWC03/Documents/Portfolio/pic2.jpg";
    } else if (switchPic.src === "file:///C:/Users/GWC03/Documents/Portfolio/pic2.jpg") {
        switchPic.src = "file:///C:/Users/GWC03/Documents/Portfolio/pic1.jpg";
    };
}

