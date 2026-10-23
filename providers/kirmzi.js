const BASE_URL = "https://www.krmzi.cam"; //[cite: 1]

function getStreams(tmdbId, mediaType, season, episode) {
  console.log(`[Kirmzi] Fetching ${mediaType} with TMDB ID: ${tmdbId}`);
  
  // Exemple de requête vers le nouveau domaine
  return fetch(`${BASE_URL}/api/search?id=${tmdbId}`)
    .then(response => response.json())
    .then(data => {
      const streams = [];
      
      // Traitement des liens trouvés et formatage pour Nuvio
      // data.forEach(item => {
      //   streams.push({
      //     name: "Kirmzi",
      //     title: item.title || "Stream 1080p",
      //     url: item.url,
      //     quality: "1080p",
      //     headers: {
      //       "Referer": BASE_URL
      //     }
      //   });
      // });

      return streams;
    })
    .catch(error => {
      console.error("[Kirmzi] Error fetching streams:", error);
      return [];
    });
}

module.exports = { getStreams };