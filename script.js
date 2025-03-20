function verifierCode() {
    let code = document.getElementById("code-editor").value.trim();
    let message = document.getElementById("result-message");

    if (code.includes('cout << "Bonjour, CodeBot!"')) {
        message.innerHTML = "✅ Bravo ! Ton programme affiche bien le message !";
        message.style.color = "green";
    } else {
        message.innerHTML = "❌ Oups ! Essaye d'afficher 'Bonjour, CodeBot!'";
        message.style.color = "red";
    }
}