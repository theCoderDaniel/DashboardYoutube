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
