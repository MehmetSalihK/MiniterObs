const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// État du minuteur
let timerState = {
    totalTime: 45 * 60, // 45 minutes en secondes par défaut
    timeLeft: 45 * 60,
    isRunning: false,
    isPaused: false,
    startTime: null,
    lastUpdate: Date.now()
};

// Connexion Socket.io
io.on('connection', (socket) => {
    console.log('Un client s\'est connecté');
    
    // Envoyer l'état actuel au client qui vient de se connecter
    socket.emit('timerState', timerState);
    
    // Recevoir les mises à jour du client
    socket.on('updateTimer', (newState) => {
        timerState = { ...newState, lastUpdate: Date.now() };
        // Diffuser la mise à jour à tous les autres clients
        socket.broadcast.emit('timerState', timerState);
    });
    
    socket.on('disconnect', () => {
        console.log('Un client s\'est déconnecté');
    });
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'controller.html'));
});

app.get('/obs', (req, res) => {
    res.sendFile(path.join(__dirname, 'obs_timer.html'));
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Affichage OBS disponible sur http://localhost:${PORT}/obs`);
});