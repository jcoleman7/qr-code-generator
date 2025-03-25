window.onload = function() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let generateBtn = document.getElementById("generateBtn");

    generateBtn.onclick = function() {
        if (qrText.value.trim() === "") {
            alert("Please enter a text or URL to generate a QR code.");
            return;
        }
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImage.onload = function() {
            imgBox.classList.add("show-img");
        };
    };
};
