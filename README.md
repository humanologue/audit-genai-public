# 🧠 Audit SI par IA générative (Mistral via Ollama)

> Prototype d’analyse automatique de configurations de systèmes d’information, assistée par un LLM open source.

[![Licence](https://img.shields.io/badge/licence-AGPLv3-blue)](./LICENSE)
[![Stack](https://img.shields.io/badge/stack-FastAPI%20%2B%20React%20%2B%20Ollama-blueviolet)]()
[![Statut](https://img.shields.io/badge/version-MVP--PoC-yellow)]()

---

## 🚀 Présentation

Ce projet propose un outil minimal mais fonctionnel pour analyser des configurations SI (au format JSON) à l’aide d’un modèle de langage (LLM) open source local, via l’interface **Ollama** et le modèle **Mistral**.

L’outil repose sur une architecture simple :
- **Backend** : API FastAPI pour le traitement des fichiers
- **Frontend** : Interface React pour l’upload et l’affichage des résultats
- **LLM** : Modèle *Mistral* lancé en local avec Ollama

---

## 🔧 Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Ollama](https://ollama.com/) avec le modèle Mistral :
  ```bash
  ollama run mistral

    Node.js (pour le frontend)

⚙️ Installation & lancement
🖥️ Backend (FastAPI via Docker)

cd backend
docker build -t audit-backend .
docker run -p 8000:8000 audit-backend

🌐 Frontend (React en mode développement)

cd frontend
npm install
npm run dev

L’interface est ensuite accessible sur : http://localhost:5173
🧪 Utilisation

    Sélectionner un fichier de configuration au format .json

    Cliquer sur Analyser pour l’envoyer à l’API backend

    Lire la synthèse générée par le LLM dans la section inférieure

📄 Licence

AGPL v3 — Logiciel libre à forte réciprocité.
Toute réutilisation ou modification publique doit également être publiée sous licence AGPL.
📬 Contact

Pour toute question, collaboration ou retour utilisateur :

📧 humanologue@gmail.com
📌 Notes

    Ce dépôt ne contient aucun code de déploiement sensible.

    L’infrastructure réelle ou les données SI réelles ne sont ni incluses ni décrites ici.

    Il s'agit d'un MVP librement réutilisable et extensible.
