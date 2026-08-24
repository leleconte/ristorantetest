# QA report — L-Store Restaurant demo

Verifiche eseguite sul pacchetto:

- 11 pagine HTML analizzate.
- 0 link/asset locali mancanti.
- 0 anchor interni rotti.
- 0 ID duplicati.
- 0 immagini senza attributo `alt`.
- 0 controlli form privi di label.
- JavaScript verificato con `node --check`.
- CSS con parentesi bilanciate e 13 media query / calibrazioni responsive.
- Breakpoint dedicati per: ≤360, 361–430, 431–600, 601–820, 821–1024, 1025–1365, 1366–1919, 1920–2559, ≥2560 px.
- Il form prenotazioni non persiste dati: è una simulazione front-end pronta per integrazione.

## Risoluzioni target coperte dalle regole CSS

Mobile: 390×844, 393×852, 430×932.
Desktop: 1366×768, 1440×900, 1920×1080, 2560×1440.

## Nota sul test visuale

Nel runtime di generazione il browser headless disponibile non ha completato correttamente l'acquisizione screenshot, quindi non viene dichiarato un pixel-test automatico. Le verifiche strutturali, sintattiche, dei link e delle regole responsive sono state completate. Prima del go-live commerciale è comunque raccomandato un ultimo controllo in Chrome/Safari reali con le fotografie definitive.


- Variante aggiornata con naming **L-Store Restaurant** e branding testuale **L-STORE**.
- Asset logo predisposto come placeholder vettoriale sostituibile con il file ufficiale.
