const textEditor = document.getElementById('editor');
const text = localStorage.getItem('text');

textEditor.addEventListener('input', () => {
    localStorage.setItem('text', textEditor.value);
})

if(text !== null) {
    textEditor.value = text;
}





