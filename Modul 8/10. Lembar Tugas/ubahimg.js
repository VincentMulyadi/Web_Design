var myImg = document.querySelector('img');

myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');

    if(mySrc == 'images/profile-1.jpeg') {
        myImg.setAttribute('src', 'images/profile-1a.jpg');
    }else{
        myImg.setAttribute('src', 'images/profile-1.jpeg')
    }
}