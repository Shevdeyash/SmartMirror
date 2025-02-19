function loadContent() {
    let displayContent = document.getElementById("display-content");
    displayContent.innerHTML = "<p>Waiting for content...</p>";

    setInterval(() => {
        fetch("../server/content.json")
        .then(response => response.json())
        .then(data => {
            displayContent.innerHTML = "";

            if (data.text) {
                let textElement = document.createElement("p");
                textElement.textContent = data.text;
                textElement.style.fontSize = "24px";
                textElement.style.color = "white";
                displayContent.appendChild(textElement);
            }

            if (data.image) {
                let imgElement = document.createElement("img");
                imgElement.src = data.image;
                imgElement.style.maxWidth = "100%";
                displayContent.appendChild(imgElement);
            }

            if (data.video) {
                let videoElement = document.createElement("video");
                videoElement.src = data.video;
                videoElement.controls = true;
                videoElement.autoplay = true;
                videoElement.loop = true;
                videoElement.style.maxWidth = "100%";
                displayContent.appendChild(videoElement);
            }
        })
        .catch(error => console.error("Error fetching content:", error));
    }, 5000);
}

/* Fullscreen Toggle */
document.addEventListener("dblclick", function() {
    let elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
