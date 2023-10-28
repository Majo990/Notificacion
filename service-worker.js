self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'bell-fil.svg', // Proporciona la URL de tu icono
    };

    event.waitUntil(
        self.registration.showNotification('Notificación Web Push', options)
    );
});
