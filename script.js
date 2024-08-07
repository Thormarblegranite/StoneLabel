let partCount = 0;
let customLogoURL = null;

document.getElementById('addPartButton').addEventListener('click', function() {
    addNewForm();
});

document.getElementById('printLabelsButton').addEventListener('click', function() {
    printLabels();
});

document.getElementById('logo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            customLogoURL = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function addNewForm() {
    partCount++;
    const jobName = document.getElementById('jobName').value;
    if (!jobName) {
        alert('Please enter the job name.');
        return;
    }

    const formsContainer = document.getElementById('formsContainer');
    const newFormSection = document.createElement('div');
    newFormSection.classList.add('form-section');
    newFormSection.id = `formSection${partCount}`;

    newFormSection.innerHTML = `
        <h2>Part ${partCount}</h2>
        <label for="width${partCount}">Sticker Width (2 - 8 inches):</label>
        <input type="number" id="width${partCount}" name="width" min="2" max="8" step="0.1" value="6" required oninput="validateWidth(${partCount}); updatePreview(${partCount})">
        
        <button type="button" onclick="setPreset(${partCount}, 4)">4x4</button>
        <button type="button" onclick="setPreset(${partCount}, 6)">6x4</button>
        <button type="button" onclick="setPreset(${partCount}, 8)">8x4</button>

        <label for="image${partCount}">Upload Image:</label>
        <input type="file" id="image${partCount}" name="image" accept="image/*" required onchange="updatePreview(${partCount})">
        
        <label for="areaName${partCount}">Area Name:</label>
        <input type="text" id="areaName${partCount}" name="areaName" required oninput="updatePreview(${partCount})">
        
        <label for="material${partCount}">Material:</label>
        <input type="text" id="material${partCount}" name="material" required oninput="updatePreview(${partCount})">
        
        <label for="address${partCount}">Address:</label>
        <input type="text" id="address${partCount}" name="address" required oninput="updatePreview(${partCount})">
        
        <label for="content${partCount}">Additional Content:</label>
        <textarea id="content${partCount}" name="content" rows="4" oninput="updatePreview(${partCount})"></textarea>
    `;

    formsContainer.appendChild(newFormSection);
    createLabelPreview(partCount);
    updatePreview(partCount); // Ensure initial preview is created
}

function setPreset(partNumber, width) {
    const widthInput = document.getElementById(`width${partNumber}`);
    widthInput.value = width;
    updatePreview(partNumber);
}

function validateWidth(partNumber) {
    const widthInput = document.getElementById(`width${partNumber}`);
    let width = widthInput.value;
    if (width < 2) {
        width = 2;
        alert('Width must be between 2 and 8 inches.');
    } else if (width > 8) {
        width = 8;
        alert('Width must be between 2 and 8 inches.');
    }
    widthInput.value = width;
    updatePreview(partNumber);
}

function createLabelPreview(partNumber) {
    const labelsContainer = document.getElementById('labelsContainer');
    const labelPreview = document.createElement('div');
    labelPreview.classList.add('label-preview');
    labelPreview.id = `labelPreview${partNumber}`;

    const partNumberDiv = document.createElement('div');
    partNumberDiv.classList.add('part-number');
    partNumberDiv.textContent = `Part ${partNumber}`;
    labelPreview.appendChild(partNumberDiv);

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    logoDiv.id = `logo${partNumber}`;
    labelPreview.appendChild(logoDiv);

    const labelImage = document.createElement('div');
    labelImage.id = `labelImage${partNumber}`;
    labelPreview.appendChild(labelImage);

    const qrCodeDiv = document.createElement('div');
    qrCodeDiv.classList.add('qr-code');
    qrCodeDiv.id = `qrCode${partNumber}`;
    labelPreview.appendChild(qrCodeDiv);

    const labelText = document.createElement('div');
    labelText.id = `labelText${partNumber}`;
    labelText.classList.add('horizontal-text');
    labelPreview.appendChild(labelText);

    labelsContainer.appendChild(labelPreview);
}

function updatePreview(partNumber) {
    const jobName = document.getElementById('jobName').value;
    const width = document.getElementById(`width${partNumber}`).value;
    const areaName = document.getElementById(`areaName${partNumber}`).value;
    const material = document.getElementById(`material${partNumber}`).value;
    const address = document.getElementById(`address${partNumber}`).value;
    const content = document.getElementById(`content${partNumber}`).value;
    const imageInput = document.getElementById(`image${partNumber}`).files[0];

    const labelPreview = document.getElementById(`labelPreview${partNumber}`);
    labelPreview.style.width = `${width * 0.95}in`;  // Adjusted to 95% of the given width
    labelPreview.style.height = '3.6in';  // Adjusted to 90% of 4 inches

    const labelText = document.getElementById(`labelText${partNumber}`);
    labelText.innerHTML = `
        <span>Job Name: ${jobName}</span>
        <span>Area Name: ${areaName}</span>
        <span>Material: ${material}</span>
        <span>Address: ${address}</span>
        <span>${content}</span>
    `;
    labelText.style.fontSize = `${0.15 * width}em`; // Adjust font size based on width

    const logoDiv = document.getElementById(`logo${partNumber}`);
    if (customLogoURL) {
        logoDiv.innerHTML = `<img src="${customLogoURL}" alt="Custom Logo" style="width:70px; height:auto;">`; // Increased size
    } else {
        logoDiv.innerHTML = `<img src="assets/thorlogo.png" alt="Default Logo" style="width:70px; height:auto;">`; // Increased size
    }

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const labelImage = document.getElementById(`labelImage${partNumber}`);
            labelImage.innerHTML = `<img src="${e.target.result}" alt="Label Image" style="width:75%; height:80%; object-fit:contain; border-radius:10px;">`;
        };
        reader.readAsDataURL(imageInput);
    }

    generateQRCode(partNumber, jobName, width, areaName, material, address, content);
}

function generateQRCode(partNumber, jobName, width, areaName, material, address, content) {
    const qrCodeDiv = document.getElementById(`qrCode${partNumber}`);
    qrCodeDiv.innerHTML = ''; // Clear previous QR code

    const qrData = `Job Name: ${jobName}\nWidth: ${width}in\nArea Name: ${areaName}\nMaterial: ${material}\nAddress: ${address}\nContent: ${content}`;
    const size = Math.max(30, 50 * (width / 8)); // Adjust size based on width
    QRCode.toCanvas(qrCodeDiv, qrData, { width: size, height: size }, function(error) {
        if (error) console.error(error);
        else {
            const img = document.createElement('img');
            img.src = qrCodeDiv.querySelector('canvas').toDataURL();
            img.style.width = `${size}px`;
            img.style.height = `${size}px`;
            qrCodeDiv.innerHTML = '';
            qrCodeDiv.appendChild(img);
        }
    });
}

function printLabels() {
    const labelsContainer = document.getElementById('labelsContainer');
    const labels = labelsContainer.querySelectorAll('.label-preview');

    labels.forEach((label) => {
        const width = label.style.width.replace('in', '');
        const height = label.style.height.replace('in', '');

        const newWindow = window.open('', '', `width=${width * 100},height=${height * 100}`);  // Adjust dimensions
        newWindow.document.write('<html><head><title>Print Labels</title>');
        newWindow.document.write('<style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;}');
        newWindow.document.write(`.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:${width * 1.0}in;height:${height * 1.0}in;padding:10px;background-color:white;position:relative;text-align:center;border:2px solid #007BFF;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);font-family:'Montserrat', sans-serif;}`);
        newWindow.document.write('.part-number{position:absolute;top:10px;right:10px;font-weight:bold;color:#007BFF;}');
        newWindow.document.write('.logo{position:absolute;top:10px;left:10px;width:70px;height:auto;}'); // Increased size
        newWindow.document.write('.horizontal-text{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;position:absolute;bottom:10px;text-align:center;font-size:1.5em;padding:0 10px;box-sizing:border-box;font-weight:bold;}'); // Bold text
        newWindow.document.write('.qr-code{position:absolute;top:20px;left:50%;transform:translate(-50%, 0);width:50px;height:50px;}</style>');
        newWindow.document.write('</head><body>');
        newWindow.document.write(label.outerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.print();
    });
}
