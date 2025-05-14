from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import httpx
import json

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "API d'audit SI avec IA générative (Ollama)"}

@app.post("/analyze/")
async def analyze_file(file: UploadFile = File(...)):
    content = await file.read()

    try:
        content_str = content.decode("utf-8-sig")
        data = json.loads(content_str.strip())
    except Exception as e:
        return JSONResponse(status_code=400, content={
            "error": "Fichier JSON invalide",
            "details": str(e)
        })

    prompt = (
        "Tu es un assistant chargé d'analyser une configuration système d'information.\n"
        "Voici un extrait de configuration, produis une synthèse des composants et des éventuelles anomalies :\n"
        + json.dumps(data, indent=2)
    )

    try:
        with httpx.stream(
            "POST",
            "http://host.docker.internal:11434/api/generate",
            json={"model": "mistral", "prompt": prompt},
            timeout=60.0
        ) as response:
            response.raise_for_status()
            result_text = ""
            for line in response.iter_lines():
                if line:
                    try:
                        chunk = json.loads(line)
                        result_text += chunk.get("response", "")
                    except json.JSONDecodeError:
                        continue

        return {
            "filename": file.filename,
            "response": result_text.strip()
        }

    except Exception as e:
        return JSONResponse(status_code=500, content={
            "error": "Erreur appel IA",
            "details": str(e),
            "prompt_debug": prompt[:300]
        })
