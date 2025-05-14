import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setResponse('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Veuillez sélectionner un fichier.');

    setLoading(true);
    setResponse('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:8000/analyze/', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(data.response || 'Aucune réponse reçue');
      } else {
        setResponse('Erreur : ' + (data.error || 'Inconnue'));
      }
    } catch (err) {
      setResponse('Erreur réseau ou serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Audit SI par IA générative</h1>
      <form onSubmit={onSubmit}>
        <input type="file" accept=".json" onChange={onFileChange} />
        <button type="submit" disabled={loading} style={{ marginLeft: '1rem' }}>
          {loading ? 'Analyse en cours...' : 'Analyser'}
        </button>
      </form>
      {response && (
        <pre style={{ whiteSpace: 'pre-wrap', background: '#f0f0f0', padding: '1rem', marginTop: '1rem', borderRadius: '4px' }}>
          {response}
        </pre>
      )}
    </div>
  );
}

export default App;
