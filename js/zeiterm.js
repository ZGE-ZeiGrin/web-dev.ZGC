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