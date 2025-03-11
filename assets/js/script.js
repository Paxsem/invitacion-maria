let noClickCount = 0; // Contador de clics en "No"

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "¡Genial! Nos vemos este fin de semana 🍽️😊";
    
    // Deshabilitar los botones para que no puedan volver a votar
    document.getElementById("yesBtn").disabled = true;
    document.getElementById("noBtn").disabled = true;

    // Cambiar el estilo para que parezcan desactivados
    document.getElementById("yesBtn").style.opacity = "0.5";
    document.getElementById("noBtn").style.opacity = "0.5";
    document.getElementById("noBtn").style.cursor = "not-allowed";
    document.getElementById("yesBtn").style.cursor = "not-allowed";
});

document.getElementById("noBtn").addEventListener("click", function() {
    noClickCount++; // Aumentamos el contador

    if (noClickCount < 3) {
        document.getElementById("response").innerText = "¡UPS! Parece que hay un error. Vuelve a votar 🙃";
    } else {
        document.getElementById("response").innerText = "¿No te cansas de rechazarme? 😢";
    }
});
