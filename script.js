document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-btn').addEventListener('click', function() {
        var text = document.getElementById('text-input').value;
        if (text) {
            var qrcodeDiv = document.getElementById('qrcode');
            qrcodeDiv.innerHTML = ''; // Clear previous QR code
            var canvas = document.createElement('canvas');
            qrcodeDiv.appendChild(canvas);
            QRCode.toCanvas(canvas, text, function (error) {
                if (error) console.error(error);
                console.log('QR code generated successfully!');
            });
        } else {
            alert('Please enter some text to generate a QR code.');
        }
    });
});
