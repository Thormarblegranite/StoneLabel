
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

                <label for="description${partCount}">Description:</label>
                <textarea id="description${partCount}" name="description" required oninput="updatePreview(${partCount})"></textarea>

                <button type="button" class="delete-part">Delete Part</button>
            `;
            formsContainer.appendChild(newFormSection);

            // Ensure delete part button works
            document.querySelector(`#formSection${partCount} .delete-part`).addEventListener('click', function() {
                newFormSection.remove();
            });
        }

        function validateWidth(partId) {
            const input = document.getElementById(`width${partId}`);
            if (input.value < 2 || input.value > 8) {
                input.setCustomValidity('Sticker width must be between 2 and 8 inches.');
            } else {
                input.setCustomValidity('');
            }
        }

        function updatePreview(partId) {
            console.log(`Updating preview for part ${partId}`);
            // Implement the logic to update the preview based on the input values
        }

        function setPreset(partId, width) {
            const widthInput = document.getElementById(`width${partId}`);
            if (widthInput) {
                widthInput.value = width;
                updatePreview(partId);
            } else {
                console.error(`width${partId} element not found.`);
            }
        }

        function printLabels() {
            const labelsContainer = document.getElementById('labelsContainer');
            const labels = labelsContainer.querySelectorAll('.label-preview');
            const printWindow = window.open('', 'PRINT', 'height=400,width=600');

            printWindow.document.write('<html><head><title>Print Labels</title>');
            printWindow.document.write('<style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;}');
            printWindow.document.write('.label-preview{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:10px;background-color:white;position:relative;text-align:center;border:2px solid #007BFF;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);font-family:"Roboto", sans-serif;}');
            printWindow.document.write('.part-number{position:absolute;top:10px;right:10px;font-weight:bold;color:#007BFF;}');
            printWindow.document.write('.logo{position:absolute;top:10px;left:10px;width:70px;height:auto;}');
            printWindow.document.write('.horizontal-text{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;position:absolute;bottom:10px;text-align:center;font-size:1.5em;padding:0 10px;box-sizing:border-box;font-weight:bold;}');
            printWindow.document.write('.qr-code{position:absolute;top:5%;left:50%;transform:translate(-50%, -5%);width:60px;height:60px;}</style>');
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

// Additional features to ensure proper functionality
document.addEventListener('DOMContentLoaded', function() {
    // Safe way to add event listeners
    function safeAddEventListener(selector, event, handler) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        } else {
            console.error(`Element ${selector} not found.`);
        }
    }

    // Safe attach for buttons
    safeAddEventListener('#toggleAdvancedSettings', 'click', function() {
        const advancedSettings = document.getElementById('advancedSettings');
        if (advancedSettings) {
            advancedSettings.classList.toggle('hidden');
        }
    });

    safeAddEventListener('#updatePreviewButton', 'click', updateStickerPreview);

    // Ensure updateStickerPreview function is defined
    function updateStickerPreview() {
        console.log("Sticker preview updated."); // Placeholder for actual function
    }

    function setPreset(width) {
        const widthInput = document.getElementById('stickerWidth');
        if (widthInput) {
            widthInput.value = width;
        } else {
            console.error('stickerWidth element not found.');
        }
    }

    // Ensure togglePassword function is defined
    function togglePassword(id) {
        const passwordInput = document.getElementById(id);
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    }

    // Add logo upload field under job name
    const logoUploadField = document.createElement('div');
    logoUploadField.innerHTML = `
        <label for="logoUpload">Upload Logo:</label>
        <input type="file" id="logoUpload" name="logoUpload" accept="image/*" required>
    `;
    const jobNameField = document.querySelector('.job-name-input');
    if (jobNameField && jobNameField.parentNode) {
        jobNameField.parentNode.insertBefore(logoUploadField, jobNameField.nextSibling);
    } else {
        console.error('Job Name field not found.');
    }
});
