Voici le fichier **`README.md`** adapté pour votre fork **« No Animes Bundle »**.

Toutes les sections liées aux animes ont été retirées, les statistiques (badges, tableaux, totaux) ont été ajustées pour ne conserver que les **11 providers de Films & Séries**, et la structure technique reste intacte.

---

```markdown
# 🚀 Nuvio French Providers - No Animes Bundle

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.2.3-green.svg)](manifest.json)
[![Providers](https://img.shields.io/badge/providers-11-brightgreen.svg)](manifest.json)
[![Runtime](https://img.shields.io/badge/runtime-QuickJS-orange.svg)](#-quickjs-runtime)

Collection optimisée de plugins francophones **exclusivement dédiés aux Films et Séries** pour l'application **Nuvio** (sans contenu Anime). Ce bundle intègre un système de résolution de liens directs pour une lecture fluide sur mobiles **et téléviseurs (TV)**.

> Les versions et formats dans ce document sont synchronisés avec le fichier [`manifest.json`](manifest.json) (version repo **1.2.3**).

---

## 📱 Installation rapide

1. Ouvrez **Nuvio** > **Settings** > **Content & Discovery** > **Plugins**.
2. Ajoutez l'URL de votre dépôt dans la section "Repository" :
   ```text
   https://raw.githubusercontent.com/hmimedhdm/HdmTV/refs/heads/main/manifest.json

```

3. Cliquez sur **Refresh**, puis activez les plugins de votre choix.

---

## 🇫🇷 Providers inclus (11)

Ce bundle intègre **11 providers** couvrant le catalogue francophone de **Films & Séries (VF / VOSTFR)**.

### 🎬 Films & Séries (11)

| # | Provider | 🎬 Contenu | 🌐 Langues | 💾 Formats | 📱 App | 📺 TV | 🏷️ Ver. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **Coflix** ¹ | 🎬📺 | VF / VOSTFR | MP4, M3U8 | ✅ | ⚠️ | 2.0.4 |
| 2 | **DuLourd** | 📺 *seule* | VF / VOSTFR | MP4, M3U8 | ✅ | ✅ | 1.0.14 |
| 3 | **Flemmix** | 🎬📺 | VF / VOSTFR | MP4, M3U8 | ✅ | ✅ | 1.0.13 |
| 4 | **Frenchstream** ⚙️ | 🎬📺 | VF / VOSTFR | MP4, MKV, M3U8 | ✅ | ✅ | 2.0.23 |
| 5 | **Movix** ⚙️ | 🎬📺 | VF / VOSTFR | MP4, MKV, M3U8 | ✅ | ✅ | 0.1.4 |
| 6 | **Nakios** | 🎬📺 | FR / EN | MP4 | ✅ | ✅ | 1.0.4 |
| 7 | **Papadustream** | 🎬📺 | FR / EN | M3U8 | ✅ | ✅ | 1.1.1 |
| 8 | **StreamZo** | 🎬📺 | VF / VOSTFR | M3U8 | ✅ | ✅ | 1.0.7 |
| 9 | **Voirdrama** | 🎬📺 | VF / VOSTFR | MP4, M3U8 | ✅ | ✅ | 0.0.4 |
| 10 | **Webflix** ⚙️ | 🎬📺 | VF / VOSTFR | MP4, M3U8 | ✅ | ✅ | 0.1.4 |
| 11 | **Wookafr** | 🎬📺 | VF / VOSTFR | MP4, M3U8 | ✅ | ✅ | 1.0.15 |

> **Légende :**
> * 🎬📺 = Films & Séries | 📺 *seule* = Séries uniquement
> * ✅ = Fonctionnel | ⚠️ = Limitations connues (voir remarques)
> * 📱 App = NuvioMobile (Android/iOS) | 📺 TV = NuvioTV
> * ⚙️ = Provider avec interface de paramètres intégrée (`hasSettings`)
> * Formats "—" : formats non déclarés dans le manifest (lecteurs multi-qualités via résolveur)
> 
> 
> **Remarques :**
> * ¹ **Coflix** : détection multi-domaines + intégrations `lecteurvideo` — bascule vers des liens embed si la résolution directe échoue.
> 
> 

---

## 🛠️ Fonctionnalités techniques

* **Résolveur universel** : moteur de résolution automatique pour les hébergeurs populaires (**Sibnet, Vidmoly, Uqload, VOE, XtremeStream, Sendvid, VidCDN, FSVID/Vidzy…**).
* **VOE** : décodage du lecteur classique (payload encodé ROT13 → base64 → décalage → inversion → base64), redirections multiples de domaines.
* **XtremeStream** : extraction de `video_id` + chargeur `xs1.php` → master m3u8 signé.


* **Filtrage des faux flux directs** : rejet automatique des URLs de test / échantillons avant la lecture.
* **Expansion de qualité HLS** : conversion des fichiers HLS master en résolutions sélectionnables (`2160p`, `1080p`, `720p`, `480p`, `360p`).
* **Direct-Only Safety** : sortie stricte de liens directs (`.m3u8`, `.mp4`…) pour éliminer les erreurs ExoPlayer.
* **Sécurité d'épisode** : validation stricte saison/épisode (pas de bascule silencieuse vers une autre saison) et filtres anti-homonymes.
* **Paramètres par provider** : interface embarquée dans l'application pour Frenchstream, Movix et Webflix.
* **Optimisé QuickJS** : polyfills pour opérations chaînes + `atob`/`btoa`, compatible avec le runtime embarqué des téléviseurs.

### 🔧 Variables d'environnement

| Variable | Provider | Par défaut | Description |
| --- | --- | --- | --- |
| `NUVIO_NAKIOS_EXCLUDE_PREMIUM` | Nakios | `0` | `1` = exclut les sources premium. Si aucune source gratuite n'est disponible, le provider renvoie 0 flux. |

---

## 👨‍💻 Pour les contributeurs

### Structure du projet

```text
gowaru-nuvio-providers/
├── src/                      # Code source (un dossier par provider)
│   ├── utils/                # Logique partagée (résolveurs, http, cache, métadonnées…)
│   └── <provider>/
│       ├── index.js          # Point d'entrée (export getStreams + onSettings)
│       ├── extractor.js      # Extraction HTML/API
│       ├── http.js           # Wrappers fetchText/fetchJson (en-têtes anti-Cloudflare)
│       └── config.js         # Constantes (optionnel)
├── providers/                # Fichiers compilés (build esbuild IIFE)
├── manifest.json             # Registre des plugins (versions, formats, plateformes)
├── build.js                  # Script de compilation (esbuild)
└── test_providers.js         # Tests d'intégration (node test_providers.js [provider…])

```

### Signature API d'un Provider

```js
// Signature obligatoire
getStreams(tmdbId, mediaType, season, episode) → Promise<Array<Stream>>
// Stream: { url (requis), title, name, quality, headers, language, size, subtitles… }

```

### Configuration & Commandes

```bash
npm install

# Compiler tous les providers (développement)
npm run build

# Build minifié (utilisé en CI/Production)
npm run build:minify

# Compiler un seul provider
node build.js frenchstream

# Mode Watch (développement)
npm run build:watch

# Serveur local (manifest + providers sur http://<ip-locale>:3000)
npm run serve

# Tests d'intégration
node test_providers.js frenchstream wookafr

```

---

## 📜 Licence

Distribué sous licence **GPL-3.0** — voir le fichier [LICENSE](https://www.google.com/search?q=LICENSE) pour plus de détails.

---

*Fork basé sur les travaux initiaux de Gowaru — Adapté pour un usage Films & Séries uniquement.*

```

```
