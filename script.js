document.getElementById('robuxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneInput = document.getElementById('phone');
    const messageDiv = document.getElementById('message');
    const phoneNumber = phoneInput.value.trim();

    // Validation du numéro de téléphone
    if (!phoneNumber || phoneNumber.length < 10) {
        showMessage('❌ Veuillez entrer un numéro de téléphone valide', 'error');
        return;
    }

    // Validation du format
    const phoneRegex = /^[0-9\s\+\-\(\)]{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
        showMessage('❌ Format de numéro invalide', 'error');
        return;
    }

    // Afficher le message de succès
    showMessage('✅ Numéro enregistré! Vérifiez votre SMS pour les détails.', 'success');

    // Log le numéro (en production, l'envoyer à un serveur sécurisé)
    console.log('Numéro de téléphone reçu:', phoneNumber);

    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
        phoneInput.value = '';
        messageDiv.textContent = '';
        messageDiv.classList.remove('success', 'error');
    }, 3000);
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.classList.remove('success', 'error');
    messageDiv.classList.add(type);
}