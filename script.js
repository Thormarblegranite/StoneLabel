let partCount = 1;

document.getElementById('labelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generateLabel(this);
});

document.getElementById('addPartButton').addEventListener('click', function() {
    partCount++;
    addNewForm();
});

function generateLabel(form) {
    const width = form.querySelector('[name="width"]').value;
    const jobName = form.querySelector('[name="jobName"]').value;
    const areaName = form.querySelector('[name="areaName"]').value;
    const material = form.querySelector('[name="material"]').value;
    const address = form.querySelector('[name="address"]').value;
    const content = form.querySelector('[name="content"]').value;
    const imageInput = form.querySelector('[name="image"]').files[0];

    const labelPreview = document.createElement('div');
    labelPreview.classList.add('label-preview');
    labelPreview.style.width = `${width}in`;

    const partNumber = document.createElement('div');
    partNumber.classList.add('part-number');
    partNumber.textContent = `Part ${partCount}`;
    labelPreview.appendChild(partNumber);

    const labelImage = document.createElement('div');
    labelImage.id = 'labelImage';
    labelPreview.appendChild(labelImage);

    const labelText = document.createElement('div');
    labelText.id = 'labelText';

    const labelJobName = document.createElement('p');
    labelJobName.textContent = `Job Name: ${jobName}`;
    labelText.appendChild(labelJobName);

    const labelAreaName = document.createElement('p');
    labelAreaName.textContent = `Area Name: ${areaName}`;
    labelText.appendChild(labelAreaName);

    const labelMaterial = document.createElement('p');
    labelMaterial.textContent = `Material: ${material}`;
    labelText.appendChild(labelMaterial);

    const labelAddress = document.createElement('p');
    labelAddress.textContent = `Address: ${address}`;
    labelText.appendChild(labelAddress);

    const labelContent = document.createElement('p');
    labelContent.textContent = content;
    labelText.appendChild(labelContent);

    labelPreview.appendChild(labelText);

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            labelImage.innerHTML = `<img src="${e.target.result}" alt="Label Image">`;
        };
        reader.readAsDataURL(imageInput);
    }

    document.getElementById('labelsContainer').appendChild(labelPreview);
    form.reset();
    form.style.display = 'none';
}

function addNewForm() {
    const formsContainer = document.getElementById('formsContainer');
    const newForm = document.createElement('form');
    newForm.classList.add('label-form');

    newForm.innerHTML = `
        <label for="width">Sticker Width (2 - 8 inches):</label>
        <input type="number" name="width" min="2" max="8" step="0.1" required>
        
        <label for="jobName">Job Name:</label>
        <input type="text" name="jobName" required>
        
        <label for="areaName">Area Name:</label>
        <input type="text" name="areaName" required>
        
        <label for="material">Material:</label>
        <input type="text" name="material" required>
        
        <label for="address">Address:</label>
        <input type="text" name="address" required>
        
        <label for="content">Additional Content:</label>
        <textarea name="content" rows="4"></textarea>
        
        <label for="image">Upload Image:</label>
        <input type="file" name="image" accept="image/*" required>
        
        <button type="submit">Generate Label</button>
    `;

    newForm.addEventListener('submit', function(event) {
        event.preventDefault();
        generateLabel(this);
    });

    formsContainer.appendChild(newForm);
}
