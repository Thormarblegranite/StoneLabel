let partCount = 0;

document.getElementById('addPartButton').addEventListener('click', function() {
    partCount++;
    addNewForm();
});

document.getElementById('printLabelsButton').addEventListener('click', function() {
    printLabels();
});

function addNewForm() {
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

    const logo = document.createElement('img');
    logo.src = 'assets/thorlogo.png';
    logo.classList.add('logo');
    labelPreview.appendChild(logo);

    const labelImage = document.createElement('div');
    labelImage.id = `labelImage${partNumber}`;
    labelPreview.appendChild(labelImage);

    const labelText = document.createElement('div');
    labelText.id = `labelText${partNumber}`;
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
        <p>Job Name: ${jobName}</p>
        <p>Area Name: ${areaName}</p>
        <p>Material: ${material}</p>
        <p>Address: ${address}</p>
        <p>${content}</p>
    `;

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const labelImage = document.getElementById(`labelImage${partNumber}`);
            labelImage.innerHTML = `<img src="${e.target.result}" alt="Label Image">`;
        };
        reader.readAsDataURL(imageInput);
    }
}

function printLabels() {
    const labelsContainer = document.getElementById('labelsContainer');
    const labels = labelsContainer.querySelectorAll('.label-preview');

    labels.forEach((label, index) => {
        const newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write('<html><head><title>Print Labels</title>');
        newWindow.document.write('<style>body{margin:0;padding:0;}.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100vh;}</style>');
        newWindow.document.write('</head><body>');
        newWindow.document.write(label.outerHTML);
        newWindow.document.write('</body></html>');
        newWindow.document.close();
        newWindow.print();
    });
}
