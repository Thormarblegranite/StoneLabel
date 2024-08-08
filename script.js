
// Ensure elements exist before attaching event listeners
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
