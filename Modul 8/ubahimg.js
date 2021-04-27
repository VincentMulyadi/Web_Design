var myImg = document.querySelector('img');

myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');

    if(mySrc == 'gambar1.jpg') {
        myImg.setAttribute('src', 'gambar2.jpg');
    }else{
        myImg.setAttribute('src', 'gambar1.jpg')
    }
}