function updatePreview() {
    const content = document.getElementById('editor').value;
    const previewFrame = document.getElementById('preview').contentWindow.document;
    
    previewFrame.open();
    previewFrame.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                body { 
                    padding: 1rem; 
                    font-family: 'Inter', sans-serif;
                }
            </style>
        </head>
        <body>${content}</body>
        </html>
    `);
    previewFrame.close();
}

function adjustLayout() {
    const container = document.getElementById('editor-container');
    if (window.innerWidth < 768) {
        container.classList.remove('md:flex-row');
        container.classList.add('flex-col');
    } else {
        container.classList.remove('flex-col');
        container.classList.add('md:flex-row');
    }
}

// Initialize
window.addEventListener('load', () => {
    updatePreview();
    adjustLayout();
    
    // Add event listener to the editor
    document.getElementById('editor').addEventListener('input', updatePreview);
});

window.addEventListener('resize', adjustLayout);
