"use strict";

window.onload = function(){
  console.log('hey')
  var fileSelect = document.getElementById("fileSelect");
  var selectButton = document.getElementById("fileSubmit");

  selectButton.addEventListener('click', function (event) {
      event.preventDefault();
      uploadFile(fileSelect.files[0]);
  }, false);

  function uploadFile(file) {
      var url = '/fileData';
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open("POST", url, true);
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              console.log('Response: ' + xhr.responseText);
              window.alert('The server responded with: ' + xhr.responseText);

          }
      };
      fd.append("upload", file);
      xhr.send(fd);
  }
}
