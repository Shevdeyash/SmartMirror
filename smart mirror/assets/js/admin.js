document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing

    let text = document.getElementById("text").value;
    let image = document.getElementById("image").files[0];
    let video = document.getElementById("video").files[0];
    let displayTime = document.getElementById("display-time").value;

    let previewContent = document.getElementById("preview-content");
    previewContent.innerHTML = ""; // Clear previous content

    let previewSection = document.querySelector(".preview");
    previewSection.style.display = "block"; // Make preview section visible

    // Text Preview
    if (text.trim() !== "") {
        let textElement = document.createElement("p");
        textElement.textContent = text;
        textElement.style.color = "cyan";
        textElement.style.fontSize = "16px";
        textElement.style.marginBottom = "10px";
        previewContent.appendChild(textElement);
    }

    // Image Preview
    if (image) {
        let imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(image);
        imgElement.style.maxWidth = "100%";
        imgElement.style.borderRadius = "5px";
        imgElement.style.marginBottom = "10px";
        previewContent.appendChild(imgElement);
    }

    // Video Preview
    if (video) {
        let videoElement = document.createElement("video");
        videoElement.src = URL.createObjectURL(video);
        videoElement.controls = true;
        videoElement.style.maxWidth = "100%";
        videoElement.style.borderRadius = "5px";
        previewContent.appendChild(videoElement);
    }

    alert("✅ Content Published Successfully!");
});

// Delete Content
document.getElementById("delete-content").addEventListener("click", function() {
    let previewContent = document.getElementById("preview-content");
    previewContent.innerHTML = ""; // Clear content
    document.querySelector(".preview").style.display = "none"; // Hide preview section
    alert("🗑️ Content Deleted Successfully!");
});
