# Miniter - Minuteur Synchronisé pour OBS

![Miniter Logo](https://img.shields.io/badge/Miniter-Minuteur%20OBS-40e0ff)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-ISC-green)

Miniter est une application web permettant de créer un minuteur élégant et synchronisé pour vos streams OBS. Contrôlez le minuteur depuis une interface dédiée et affichez-le en temps réel dans votre stream.

## 📚 Table des matières

- [🎯 Objectifs](#-objectifs)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Installation](#️-installation)
- [📋 Requirements](#-requirements)
- [🚀 Utilisation](#-utilisation)
- [⚙️ Configuration](#️-configuration)
- [🔧 Dépannage](#-dépannage)
- [🎁 Bonus](#-bonus)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)

## 🎯 Objectifs

Miniter a été conçu pour répondre aux besoins des streamers et créateurs de contenu qui souhaitent :

- Afficher un minuteur élégant et professionnel dans leurs streams
- Contrôler facilement le minuteur sans quitter leur interface de streaming
- Synchroniser parfaitement l'affichage entre l'interface de contrôle et OBS
- Personnaliser l'apparence du minuteur pour l'adapter à leur identité visuelle

## ✨ Fonctionnalités

- **Interface de contrôle dédiée** : Démarrer, mettre en pause, réinitialiser et définir le temps du minuteur
- **Synchronisation en temps réel** : Toutes les actions sont immédiatement reflétées dans OBS
- **Design moderne et élégant** : Interface futuriste avec animations fluides
- **Effets visuels** : Particules animées et célébration à la fin du décompte
- **Compatibilité OBS** : S'intègre parfaitement comme source navigateur dans OBS Studio
- **Serveur local** : Fonctionne entièrement en local, sans dépendance externe

## 🛠️ Installation

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre ordinateur
2. Clonez ce dépôt ou téléchargez les fichiers dans un dossier sur votre ordinateur
3. Ouvrez un terminal dans le dossier du projet
4. Installez les dépendances :

```bash
npm install
```

## 📋 Requirements

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- Un navigateur web moderne
- OBS Studio (pour l'intégration du minuteur dans vos streams)

## 🚀 Utilisation

1. Démarrez le serveur :

```bash
node server.js
```

2. Accédez à l'interface de contrôle dans votre navigateur :

```
http://localhost:3000
```

3. Dans OBS Studio, ajoutez une nouvelle source "Navigateur" avec l'URL :

```
http://localhost:3000/obs
```

4. Configurez la source navigateur dans OBS :
   - Largeur : 400px (recommandé)
   - Hauteur : 150px (recommandé)
   - Décochez l'option "Actualiser le navigateur lorsque la scène devient active"

5. Utilisez l'interface de contrôle pour gérer le minuteur :
   - **Démarrer** : Lance ou reprend le décompte
   - **Pause** : Met le minuteur en pause
   - **Réinitialiser** : Remet le minuteur à sa valeur initiale
   - **Définir** : Change la durée totale du minuteur (en minutes)

## ⚙️ Configuration

Le port du serveur peut être modifié dans le fichier `server.js` :

```javascript
const PORT = process.env.PORT || 3000;
```

Vous pouvez également personnaliser l'apparence du minuteur en modifiant les styles CSS dans les fichiers `controller.html` et `obs_timer.html`.

## 🔧 Dépannage

### Le message "En attente de connexion..." persiste

- Vérifiez que le serveur Node.js est bien démarré
- Assurez-vous qu'aucun autre service n'utilise le port 3000
- Vérifiez que votre pare-feu n'empêche pas la connexion locale

### Le minuteur ne s'affiche pas correctement dans OBS

- Assurez-vous d'avoir ajouté la bonne URL dans la source navigateur
- Essayez de rafraîchir la source navigateur dans OBS
- Vérifiez que l'option "Actualiser le navigateur lorsque la scène devient active" est décochée

### La synchronisation ne fonctionne pas

- Redémarrez le serveur Node.js
- Rafraîchissez à la fois l'interface de contrôle et la source navigateur dans OBS
- Vérifiez que vous n'avez pas de problème réseau local

## 🎁 Bonus

Voici quelques idées pour améliorer votre minuteur :

- Ajoutez des sons pour les événements importants (démarrage, pause, fin)
- Personnalisez les couleurs pour correspondre à votre identité visuelle
- Créez différents thèmes visuels pour différentes occasions
- Ajoutez une fonctionnalité de compte à rebours programmé

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add some amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence ISC. Voir le fichier `LICENSE` pour plus d'informations.

---

Créé avec ❤️ pour la communauté des streamers et créateurs de contenu.