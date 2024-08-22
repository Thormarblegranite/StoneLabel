
function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    if (!previewContainer) {
        console.error('Labels container not found.');
        return;
    }

    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    previewContainer.appendChild(previewElement);
}

function deletePart(button) {
    let partSection = button.parentNode;
    while (partSection && !partSection.classList.contains('form-section')) {
        partSection = partSection.parentNode;
    }

    if (partSection) {
        partSection.remove();
        const partId = partSection.id.replace('formSection', '');
        updatePreview(partId);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    const defaultLogo = "assets/thorlogo.png";

    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            previewElement.innerHTML = `<img src="${defaultLogo}" alt="Default Logo" style="max-width: 100%;">`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    
    if (previewContainer) {
        previewContainer.appendChild(previewElement);
    } else {
        console.error('Labels container not found.');
    }
}

function deletePart(button) {
    // Ensure that parentNode is used instead of closest to avoid compatibility issues
    let partSection = button.parentNode;
    while (partSection && !partSection.classList.contains('form-section')) {
        partSection = partSection.parentNode;
    }

    if (partSection) {
        partSection.remove();
        const partId = partSection.id.replace('formSection', '');
        updatePreview(partId);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function printLabels() {
    const labelSections = document.querySelectorAll('.label-preview');
    if (labelSections.length > 0) {
        labelSections.forEach(section => {
            // Perform print logic here
            console.log('Printing section:', section);
        });
    } else {
        console.error('No label sections found for printing.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            console.log(`Updating preview for part ${partId}`);
            previewElement.textContent = `Preview: Part ${partId}`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    
    if (previewContainer) {
        previewContainer.appendChild(previewElement);
    } else {
        console.error('Labels container not found.');
    }
}

function deletePart(button) {
    const partSection = button.parentNode.closest('.form-section');
    if (partSection) {
        partSection.remove();
        const partId = partSection.id.replace('formSection', '');
        updatePreview(partId);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function printLabels() {
    const labelSections = document.querySelectorAll('.label-preview');
    if (labelSections.length > 0) {
        labelSections.forEach(section => {
            // Perform print logic here
            console.log('Printing section:', section);
        });
    } else {
        console.error('No label sections found for printing.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            console.log(`Updating preview for part ${partId}`);
            previewElement.textContent = `Preview: Part ${partId}`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    
    if (previewContainer) {
        previewContainer.appendChild(previewElement);
    } else {
        console.error('Labels container not found.');
    }
}

function deletePart(button) {
    // Replace closest with parentNode if closest is not supported
    const partSection = button.parentNode.closest('.form-section');
    if (partSection) {
        partSection.remove();
        const partId = partSection.id.replace('formSection', '');
        updatePreview(partId);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function printLabels() {
    const labelSections = document.querySelectorAll('.label-preview');
    if (labelSections.length > 0) {
        labelSections.forEach(section => {
            // Perform print logic here
            console.log('Printing section:', section);
        });
    } else {
        console.error('No label sections found for printing.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="\${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            console.log(`Updating preview for part ${partId}`);
            previewElement.textContent = `Preview: Part ${partId}`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    
    // Check if the labelsContainer exists before appending
    if (previewContainer) {
        previewContainer.appendChild(previewElement);
    } else {
        console.error('Labels container not found.');
    }
}

function deletePart(button) {
    // Ensure that button.closest is working by checking for compatibility
    const partSection = button.parentElement;
    if (partSection) {
        partSection.remove();
        const partId = partSection.id.replace('formSection', '');
        updatePreview(partId);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="\${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            console.log(`Updating preview for part ${partId}`);
            previewElement.textContent = `Preview: Part ${partId}`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}
let customLogoURL = '';
document.addEventListener('DOMContentLoaded', function() {
    if (typeof firebase !== 'undefined') {
        console.log('Firebase is loaded');

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

            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(usernameEmail, password);
                console.log('Login successful', userCredential);

                document.getElementById('loginForm').classList.add('hidden');
                document.getElementById('labelForm').classList.remove('hidden');
                document.getElementById('vikingContainer').classList.add('hidden');
            } catch (error) {
                console.error('Login error', error);
                document.getElementById('loginError').textContent = error.message;
            }
        });

        document.getElementById('registerForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            const newEmail = document.getElementById('newEmail').value;
            const newPassword = document.getElementById('newPassword').value;

            try {
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword);
                console.log('Account created successfully', userCredential);

                alert('Account created successfully. Please log in.');
                document.getElementById('registerForm').classList.add('hidden');
                document.getElementById('loginForm').classList.remove('hidden');
            } catch (error) {
                console.error('Registration error', error);
                document.getElementById('registerError').textContent = error.message;
            }
        });

        window.togglePassword = function(id) {
            const passwordInput = document.getElementById(id);
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            if (type === 'text') {
                uncoverVikingEyes();
            } else {
                coverVikingEyes();
            }
        };

        document.getElementById('password').addEventListener('focus', coverVikingEyes);
        document.getElementById('password').addEventListener('blur', uncoverVikingEyes);
        document.getElementById('newPassword').addEventListener('focus', coverVikingEyes);
        document.getElementById('newPassword').addEventListener('blur', uncoverVikingEyes);

        function coverVikingEyes() {
            document.querySelector('.viking-img.active').classList.remove('active');
            document.getElementById('vikingCovering').classList.add('active');
        }

        function uncoverVikingEyes() {
            document.querySelector('.viking-img.active').classList.remove('active');
            document.getElementById('vikingPeeking').classList.add('active');
            setTimeout(() => {
                document.getElementById('vikingPeeking').classList.remove('active');
                document.getElementById('viking').classList.add('active');
            }, 1000); // Adjust timing for smooth transition
        }

        document.getElementById('addPartButton').addEventListener('click', addNewForm);
        document.getElementById('printLabelsButton').addEventListener('click', printLabels);

        if (typeof partCount === 'undefined') partCount = 0;

        function addNewForm() {
            partCount++;
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
                <div class="advanced-settings hidden" id="advancedAreaName${partCount}">
                    <label for="areaNameFont${partCount}">Font:</label>
                    <select id="areaNameFont${partCount}" onchange="updatePreview(${partCount})">
                        <option value="Roboto">Roboto</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <label for="areaNameColor${partCount}">Color:</label>
                    <input type="color" id="areaNameColor${partCount}" onchange="updatePreview(${partCount})">
                </div>
                
                <label for="material${partCount}">Material:</label>
                <input type="text" id="material${partCount}" name="material" required oninput="updatePreview(${partCount})">
                <div class="advanced-settings hidden" id="advancedMaterial${partCount}">
                    <label for="materialFont${partCount}">Font:</label>
                    <select id="materialFont${partCount}" onchange="updatePreview(${partCount})">
                        <option value="Roboto">Roboto</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <label for="materialColor${partCount}">Color:</label>
                    <input type="color" id="materialColor${partCount}" onchange="updatePreview(${partCount})">
                </div>
                
                <label for="address${partCount}">Address:</label>
                <input type="text" id="address${partCount}" name="address" required oninput="updatePreview(${partCount})">
                <div class="advanced-settings hidden" id="advancedAddress${partCount}">
                    <label for="addressFont${partCount}">Font:</label>
                    <select id="addressFont${partCount}" onchange="updatePreview(${partCount})">
                        <option value="Roboto">Roboto</option>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <label for="addressColor${partCount}">Color:</label>
                    <input type="color" id="addressColor${partCount}" onchange="updatePreview(${partCount})">
                </div>
                
                <label for="content${partCount}">Additional Content:</label>
                <textarea id="content${partCount}" name="content" rows="4" oninput="updatePreview(${partCount})"></textarea>
                <div class="advanced-settings hidden" id="advancedContent${partCount}">
                    <label for="contentFont${partCount}">Font:</label>
                    <select id="contentFont${partCount}" onchange="updatePreview(${partCount})">
                        <option value="Roboto">Roboto</option>
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
                adv.classList.toggle('hidden');
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
            printWindow.document.write('.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:10px;background-color:white;position:relative;text-align:center;border:2px solid #007BFF;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);font-family:"Roboto", sans-serif;}');
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
    } else {
        console.error('Firebase is not loaded');
    }
});

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings) {
        advancedSettings.classList.toggle('hidden');
    }
}

function updatePreview(partId) {
    const partSection = document.getElementById('formSection' + partId);
    const previewElement = document.getElementById('preview' + partId);
    if (previewElement) {
        const width = partSection.querySelector('input[name="width"]').value;
        const areaName = partSection.querySelector('input[name="areaName"]').value;
        const description = partSection.querySelector('textarea[name="description"]').value;
        previewElement.textContent = `Preview: ${width} inches, ${areaName}, ${description}`;
    } else {
        console.error('Preview element not found for part ' + partId);
    }
}

// Ensure that input changes trigger the updatePreview function automatically
document.addEventListener('input', function(event) {
    if (event.target.matches('input[name="width"], input[name="areaName"], textarea[name="description"]')) {
        const partId = event.target.closest('.form-section').id.replace('formSection', '');
        updatePreview(partId);
    }
});

document.addEventListener('click', function(event) {
    if (event.target.matches('.delete-part')) {
        event.target.closest('.form-section').remove();
    }
});

function setPreset(partId, width) {
    const widthInput = document.getElementById(`width${partId}`);
    if (widthInput) {
        widthInput.value = width;
        updatePreview(partId);
    } else {
        console.error(`width${partId} element not found.`);
    }
}

function generateQRCode(elementId, text) {
    const qrCanvas = document.getElementById(elementId);
    if (QRCode && QRCode.toCanvas && qrCanvas) {
        QRCode.toCanvas(qrCanvas, text, function (error) {
            if (error) {
                console.error(error);
            } else {
                console.log('QR code generated!');
            }
        });
    } else {
        console.error('QRCode or Canvas element not found.');
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('previewContainer');
    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    
    // Check if the previewContainer exists before appending
    if (previewContainer) {
        previewContainer.appendChild(previewElement);
    } else {
        console.error('Preview container not found.');
    }
}

function deletePart(button) {
    // Ensure that button.closest is working by checking for compatibility
    if (typeof button.closest === 'function') {
        const partSection = button.closest('.form-section');
        if (partSection) {
            partSection.remove();
            updatePreview(partSection.id.replace('formSection', ''));
        } else {
            console.error('Part section not found.');
        }
    } else {
        console.error('button.closest is not a function');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings) {
        advancedSettings.classList.toggle('hidden');
    } else {
        console.error('Advanced settings not found.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload');
    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `<img src="\${e.target.result}" alt="Preview Image" style="max-width: 100%;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            console.log(`Updating preview for part ${partId}`);
            previewElement.textContent = `Preview: Part ${partId}`;
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function createLabelPreview(partId) {
    const previewContainer = document.getElementById('labelsContainer');
    if (!previewContainer) {
        console.error('Labels container not found.');
        return;
    }

    const previewElement = document.createElement('div');
    previewElement.id = `preview${partId}`;
    previewElement.className = 'label-preview';
    previewContainer.appendChild(previewElement);
    console.log(`Preview element created for part ${partId}`);
}

function deletePart(button) {
    let partSection = button.parentNode;
    while (partSection && !partSection.classList.contains('form-section')) {
        partSection = partSection.parentNode;
    }

    if (partSection) {
        partSection.remove();
        console.log('Part section removed:', partSection);
    } else {
        console.error('Part section not found.');
    }
}

function toggleAdvancedSettings(button) {
    const advancedSettings = button.nextElementSibling;
    if (advancedSettings && advancedSettings.classList.contains('advanced-options')) {
        advancedSettings.classList.toggle('hidden');
        console.log('Advanced settings toggled.');
    } else {
        console.error('Advanced settings not found.');
    }
}

function updatePreview(partId) {
    const previewElement = document.getElementById('preview' + partId);
    const imageInput = document.getElementById('logoUpload' + partId); // Change to unique ID per part
    const defaultLogo = "assets/thorlogo.png";

    if (previewElement) {
        if (imageInput && imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewElement.innerHTML = `
                    <img src="${e.target.result}" alt="Preview Image" style="max-width: 100%;">
                    <div style="text-align: center;">Text Example</div>
                `;
            };
            reader.readAsDataURL(imageInput.files[0]);
            console.log('Custom logo preview updated.');
        } else {
            previewElement.innerHTML = `
                <img src="${defaultLogo}" alt="Default Logo" style="max-width: 100%;">
                <div style="text-align: center;">Text Example</div>
            `;
            console.log('Default logo preview displayed.');
        }
    } else {
        console.error(`Preview element not found for part ${partId}`);
    }
}

function generateQRCode(partId) {
    const previewElement = document.getElementById('preview' + partId);
    if (!previewElement) {
        console.error('Preview element not found.');
        return;
    }

    const qrCanvas = document.createElement('canvas');
    previewElement.appendChild(qrCanvas);
    try {
        QRCode.toCanvas(qrCanvas, 'Sample QR Code Data', function (error) {
            if (error) console.error('Error generating QR code:', error);
            console.log('QR code generated successfully!');
        });
    } catch (e) {
        console.error('Failed to generate QR code:', e);
    }
}

// Adding functionality to close the footer
document.addEventListener('DOMContentLoaded', function() {
    const closeFooterButton = document.getElementById('closeFooter');
    if (closeFooterButton) {
        closeFooterButton.addEventListener('click', function() {
            const footer = document.querySelector('footer');
            if (footer) {
                footer.style.display = 'none';
            }
        });
    }
});

// Ensure no parts are added prematurely
document.addEventListener('DOMContentLoaded', function() {
    // Check for any pre-existing parts and remove them if not intended
    const formsContainer = document.getElementById('formsContainer');
    if (formsContainer) {
        formsContainer.innerHTML = ''; // Clear any pre-added parts
    }
});
