document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    const thumbnailUpload = document.getElementById('thumbnailUpload');
    const thumbnailImage = document.getElementById('thumbnailImage');

    thumbnailUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                thumbnailImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Bitte wählen Sie eine gültige Bilddatei aus.');
        }
    });
});

function openPrompt() {
    const topic = prompt("Thema für den Liedtext eingeben:");
    if (topic) {
        const promptText = `Можешь ли ты сейчас создать для меня 10 песенных текстов на тему «${topic}»? Пусть они будут библейскими, христианскими и содержат упоминания Христа, Бога и Духа Святого в каждом тексте. Важно, чтобы тексты были глубокими, а не поверхностными. Формат каждого текста: Куплет 1, Куплет 2, Припев, Бридж. Пожалуйста, сделай каждый текст уникальным, чтобы не повторялись формулировки из предыдущих песен`;
        document.getElementById('promptText').value = promptText;
        document.getElementById('promptModal').style.display = 'block';
    }
}

function copyPrompt() {
    const promptText = document.getElementById('promptText');
    promptText.select();
    document.execCommand('copy');
    alert('Text in die Zwischenablage kopiert.');
    openChatGPT();
}

function openChatGPT() {
    let chatWindow = window.open("https://chatgpt.com/", "_blank");
    if (!chatWindow) {
        alert("Bitte erlauben Sie Pop-ups für diese Website und versuchen Sie es erneut.");
    }
}

function closePromptModal() {
    document.getElementById('promptModal').style.display = 'none';
}

function openThumbnailModal() {
    document.getElementById('thumbnailModal').style.display = 'block';
}

function closeThumbnailModal() {
    document.getElementById('thumbnailModal').style.display = 'none';
}
