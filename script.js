const apiBaseUrl = 'http://localhost:3000';

document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const usernameEmail = document.getElementById('usernameEmail').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernameEmail, password })
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('labelForm').classList.remove('hidden');
        document.getElementById('vikingContainer').classList.add('hidden');
    } else {
        document.getElementById('loginError').textContent = result.message;
    }
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    const response = await fetch(`${apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, email: newEmail, password: newPassword })
    });

    const result = await response.json();

    if (response.ok) {
        alert('Account created successfully. Please log in.');
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    } else {
        document.getElementById('registerError').textContent = result.message;
    }
});

document.getElementById('usernameEmail').addEventListener('input', function() {
    moveVikingEyes(this);
});

document.getElementById('password').addEventListener('focus', function() {
    coverVikingEyes();
});

document.getElementById('password').addEventListener('blur', function() {
    uncoverVikingEyes();
});

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

function moveVikingEyes(input) {
    const viking = document.getElementById('viking');
    const rect = input.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(centerY - window.innerHeight / 2, centerX - window.innerWidth / 2) * 180 / Math.PI;
    viking.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

function coverVikingEyes() {
    const viking = document.getElementById('viking');
    viking.src = 'assets/viking_cover_eyes.png';
}

function uncoverVikingEyes() {
    const viking = document.getElementById('viking');
    viking.src = 'assets/viking.png';
}

function togglePassword(id) {
    const passwordInput = document.getElementById(id);
    const viking = document.getElementById('viking');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
        viking.src = 'assets/viking_peek.png';
    } else {
        coverVikingEyes();
    }
}

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
        <div class="advanced-settings" id="advancedAreaName${partCount}">
            <label for="areaNameFont${partCount}">Font:</label>
            <select id="areaNameFont${partCount}" onchange="updatePreview(${partCount})">
                <option value="Montserrat">Montserrat</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <label for="areaNameColor${partCount}">Color:</label>
            <input type="color" id="areaNameColor${partCount}" onchange="updatePreview(${partCount})">
        </div>
        
        <label for="material${partCount}">Material:</label>
        <input type="text" id="material${partCount}" name="material" required oninput="updatePreview(${partCount})">
        <div class="advanced-settings" id="advancedMaterial${partCount}">
            <label for="materialFont${partCount}">Font:</label>
            <select id="materialFont${partCount}" onchange="updatePreview(${partCount})">
                <option value="Montserrat">Montserrat</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <label for="materialColor${partCount}">Color:</label>
            <input type="color" id="materialColor${partCount}" onchange="updatePreview(${partCount})">
        </div>
        
        <label for="address${partCount}">Address:</label>
        <input type="text" id="address${partCount}" name="address" required oninput="updatePreview(${partCount})">
        <div class="advanced-settings" id="advancedAddress${partCount}">
            <label for="addressFont${partCount}">Font:</label>
            <select id="addressFont${partCount}" onchange="updatePreview(${partCount})">
                <option value="Montserrat">Montserrat</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <label for="addressColor${partCount}">Color:</label>
            <input type="color" id="addressColor${partCount}" onchange="updatePreview(${partCount})">
        </div>
        
        <label for="content${partCount}">Additional Content:</label>
        <textarea id="content${partCount}" name="content" rows="4" oninput="updatePreview(${partCount})"></textarea>
        <div class="advanced-settings" id="advancedContent${partCount}">
            <label for="contentFont${partCount}">Font:</label>
            <select id="contentFont${partCount}" onchange="updatePreview(${partCount})">
                <option value="Montserrat">Montserrat</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <label for="contentColor${partCount}">Color:</label>
            <input type="color" id="contentColor${partCount}" onchange="updatePreview(${partCount})">
        </div>
        
        <button type="button" onclick="toggleAdvancedSettings(${partCount})">Toggle Advanced Settings</button>
        <button type="button" onclick="deletePart(${partCount})">Delete Part</button>
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

function toggleAdvancedSettings(partNumber) {
    const advancedAreaName = document.getElementById(`advancedAreaName${partNumber}`);
    const advancedMaterial = document.getElementById(`advancedMaterial${partNumber}`);
    const advancedAddress = document.getElementById(`advancedAddress${partNumber}`);
    const advancedContent = document.getElementById(`advancedContent${partNumber}`);

    [advancedAreaName, advancedMaterial, advancedAddress, advancedContent].forEach(adv => {
        adv.style.display = adv.style.display === 'none' ? 'block' : 'none';
    });
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
    const areaNameFont = document.getElementById(`areaNameFont${partNumber}`).value;
    const areaNameColor = document.getElementById(`areaNameColor${partNumber}`).value;
    const material = document.getElementById(`material${partNumber}`).value;
    const materialFont = document.getElementById(`materialFont${partNumber}`).value;
    const materialColor = document.getElementById(`materialColor${partNumber}`).value;
    const address = document.getElementById(`address${partNumber}`).value;
    const addressFont = document.getElementById(`addressFont${partNumber}`).value;
    const addressColor = document.getElementById(`addressColor${partNumber}`).value;
    const content = document.getElementById(`content${partNumber}`).value;
    const contentFont = document.getElementById(`contentFont${partNumber}`).value;
    const contentColor = document.getElementById(`contentColor${partNumber}`).value;
    const imageInput = document.getElementById(`image${partNumber}`).files[0];

    const labelPreview = document.getElementById(`labelPreview${partNumber}`);
    labelPreview.style.width = `${width * 0.95}in`;  // Adjusted to 95% of the given width
    labelPreview.style.height = '3.6in';  // Adjusted to 90% of 4 inches

    const labelText = document.getElementById(`labelText${partNumber}`);
    labelText.innerHTML = `
        <span style="font-family:${areaNameFont}; color:${areaNameColor};">Job Name: ${jobName}</span>
        <span style="font-family:${areaNameFont}; color:${areaNameColor};">Area Name: ${areaName}</span>
        <span style="font-family:${materialFont}; color:${materialColor};">Material: ${material}</span>
        <span style="font-family:${addressFont}; color:${addressColor};">Address: ${address}</span>
        <span style="font-family:${contentFont}; color:${contentColor};">${content}</span>
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
            labelImage.innerHTML = `<img src="${e.target.result}" alt="Label Image" style="width:75%; height:80%; object-fit:contain; border-radius:10px;">`; // Adjust image size
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

function deletePart(partNumber) {
    const formSection = document.getElementById(`formSection${partNumber}`);
    const labelPreview = document.getElementById(`labelPreview${partNumber}`);
    if (formSection) formSection.remove();
    if (labelPreview) labelPreview.remove();
}

function printLabels() {
    const labelsContainer = document.getElementById('labelsContainer');
    const labels = labelsContainer.querySelectorAll('.label-preview');

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print Labels</title>');
    printWindow.document.write('<style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;}');
    printWindow.document.write('.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:10px;background-color:white;position:relative;text-align:center;border:2px solid #007BFF;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);font-family:"Montserrat", sans-serif;}');
    printWindow.document.write('.part-number{position:absolute;top:10px;right:10px;font-weight:bold;color:#007BFF;}');
    printWindow.document.write('.logo{position:absolute;top:10px;left:10px;width:70px;height:auto;}'); // Increased size
    printWindow.document.write('.horizontal-text{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;position:absolute;bottom:10px;text-align:center;font-size:1.5em;padding:0 10px;box-sizing:border-box;font-weight:bold;}'); // Bold text
    printWindow.document.write('.qr-code{position:absolute;top:5%;left:50%;transform:translate(-50%, -5%);width:60px;height:60px;}</style>'); // Adjusted size and position
    printWindow.document.write('</head><body>');

    labels.forEach((label) => {
        const labelClone = label.cloneNode(true);
        labelClone.style.width = `${label.style.width.replace('in', '') * 0.95}in`;
        labelClone.style.height = `${label.style.height.replace('in', '') * 0.95}in`;
        printWindow.document.write(labelClone.outerHTML);
        printWindow.document.write('<div style="page-break-before:always;"></div>');
    });

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
