# Audit SI par IA générative (Mistral via Ollama)

Ce projet est un outil d'analyse de configurations SI par IA générative, avec backend FastAPI et frontend React.

## Prérequis

- Docker Desktop
- Ollama avec modèle `mistral` lancé (`ollama run mistral`)
- Node.js (pour frontend)

## Installation & lancement

### Backend

```bash
cd backend
docker build -t audit-backend .
docker run -p 8000:8000 audit-backend
```

### Frontend (dev mode)

```bash
cd frontend
npm install
npm run dev
```

L'interface est accessible sur http://localhost:5173

## Utilisation

- Sélectionner un fichier JSON de configuration.
- Cliquer sur "Analyser" pour envoyer au backend.
- Voir la synthèse IA en dessous.

## Licence

AGPL v3

## Contact

humanologue@gmail.com
