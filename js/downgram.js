const imageContainer = document.getElementsByClassName("_sxolz"),
    image = document.querySelector("._4rbun img"),
    button = document.createElement("a");

button.innerHTML = "Download";
button.className = "button-download";
button.setAttribute("download", "");
button.href = image.src;

imageContainer[0].appendChild(button);