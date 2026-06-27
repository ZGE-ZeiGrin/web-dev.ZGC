const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.querySelector('.terminal-body');

function printf(text) {
    const newRow = document.createElement('div');
    newRow.textContent = text;
    const inputLine = terminalInput.parentElement;
    terminalBody.insertBefore(newRow, inputLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function clearConsole() {
    const lines = terminalBody.querySelectorAll('div:not(.terminal-line)');
    lines.forEach(line => line.remove());
}

terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim();
        
        if (command !== '') {
            
            const historyRow = document.createElement('div');
            historyRow.innerHTML = `<span class="prompt">user@zeiterm_bio:~$</span> <span>${command}</span>`;
            terminalBody.insertBefore(historyRow, terminalInput.parentElement);

            if (command === 'neofetch') {
                printf("user : ZeiGrin");
                printf("college : Ctec (information technology)");
                printf("project : zeiterm-bio");
                printf("Fav-Music: EDM, PHONK");
                printf("location : Can Tho, Viet Nam");
            } 
            else if (command === 'clear') {
                clearConsole();
            } 
            else {
                printf(`bash: command not found: ${command}`);
            }

            terminalInput.value = '';
        }
    }
});

terminalBody.addEventListener('click', function() {
    terminalInput.focus();
});

function generateASCII(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const width = 100;
    const height = Math.floor(image.height * (width / image.width) * 0.65);
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height).data;

    const chars = "@%#*+=-:. ";
    let ascii = "";

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const offset = (y * width + x) * 4;
            const r = imageData[offset];
            const g = imageData[offset + 1];
            const b = imageData[offset + 2];

            const brightness = (0.299 * r + 0.587 * g + 0.114 * b);
            const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
            ascii += chars[charIndex];
        }
        ascii += "\n";
    }
    return ascii;
}

const img = new Image();
img.src = 'img/Github_avatar.jpg';

img.onload = () => {
    const asciiLogo = generateASCII(img);
    console.log(asciiLogo);
}

document.getElementById('upload-btn').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
        const asciiResult = generateASCII(img); 
        document.getElementById('ascii-display').textContent = asciiResult;
    };
    img.src = URL.createObjectURL(file);
});

function handleTerminalCommand(command) {
    
    if (command === 'upload') {
        const fileInput = document.getElementById('upload-btn');
        fileInput.click();
    }
}