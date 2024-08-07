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
        <input type="number" id="width${partCount}" name="width" min="2" max="8" step="0.1" required oninput="updatePreview(${partCount})">
        
        <label for="areaName${partCount}">Area Name:</label>
        <input type="text" id="areaName${partCount}" name="areaName" required oninput="updatePreview(${partCount})">
        
        <label for="material${partCount}">Material:</label>
        <input type="text" id="material${partCount}" name="material" required oninput="updatePreview(${partCount})">
        
        <label for="address${partCount}">Address:</label>
        <input type="text" id="address${partCount}" name="address" required oninput="updatePreview(${partCount})">
        
        <label for="content${partCount}">Additional Content:</label>
        <textarea id="content${partCount}" name="content" rows="4" oninput="updatePreview(${partCount})"></textarea>
        
        <label for="image${partCount}">Upload Image:</label>
        <input type="file" id="image${partCount}" name="image" accept="image/*" required onchange="updatePreview(${partCount})">
    `;

    formsContainer.appendChild(newFormSection);
    createLabelPreview(partCount);
    updatePreview(partCount); // Ensure initial preview is created
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
    labelPreview.style.width = `${width}in`;

    const labelText = document.getElementById(`labelText${partNumber}`);
    labelText.innerHTML = `
        <span>Job Name: ${jobName}</span>
        <span>Area Name: ${areaName}</span>
        <span>Material: ${material}</span>
        <span>Address: ${address}</span>
        <span>${content}</span>
    `;
    labelText.style.fontSize = `${0.6 * (2 / width)}em`; // Make the font size responsive to the width

    const logoDiv = document.getElementById(`logo${partNumber}`);
    if (customLogoURL) {
        logoDiv.innerHTML = `<img src="${customLogoURL}" alt="Custom Logo" style="width:50px; height:auto;">`;
    } else {
        logoDiv.innerHTML = `<img src="assets/thorlogo.png" alt="Default Logo" style="width:50px; height:auto;">`;
    }

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const labelImage = document.getElementById(`labelImage${partNumber}`);
            labelImage.innerHTML = `<img src="${e.target.result}" alt="Label Image" style="width:50%; height:50%; object-fit:contain; border-radius:10px; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">`;
        };
        reader.readAsDataURL(imageInput);
    }
}

function printLabels() {
    const labelsContainer = document.getElementById('labelsContainer');
    const labels = labelsContainer.querySelectorAll('.label-preview');

    labels.forEach((label) => {
        const newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write('<html><head><title>Print Labels</title>');
        newWindow.document.write('<style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;}');
        newWindow.document.write('.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:fit-content;height:4in;padding:10px;margin-top:20px;background-color:white;position:relative;text-align:center;margin-bottom:20px;border:2px solid #007BFF;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);}');
        newWindow.document.write('.part-number{position:absolute;top:10px;right:10px;font-weight:bold;color:#007BFF;}');
        newWindow.document.write('.logo{position:absolute;top:10px;left:10px;width:50px;height:auto;}');
        newWindow.document.write('.horizontal-text{display:flex;justify-content:space-around;width:100%;position:absolute;bottom:10px;text-align:center;font-size:0.6em;}</style>');
        newWindow.document.write('</head><body>');
        newWindow.document.write(label.outerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.print();
    });
}
