# L-STORE Restaurant — Website Concept

Progetto statico multi-pagina pronto per GitHub Pages. I contenuti, lo chef, l'indirizzo, i prezzi e i contatti sono **demo sostituibili**.

## Pagine
- `index.html` — homepage
- `ristorante.html` — storia e spazi
- `menu.html` — carta e degustazioni
- `chef.html` — profilo editoriale
- `esperienza.html` — percorso della cena
- `gallery.html` — gallery con lightbox
- `prenotazioni.html` — form front-end con validazione
- `contatti.html` — contatti, accessibilità e mappa
- `privacy.html`, `cookie.html`, `credits.html`

## Responsive
Il progetto cambia composizione, non solo dimensione: hero fullscreen verticale e menu immersivo su smartphone; layout editoriali orizzontali e split-screen su desktop; breakpoint intermedi per tablet/laptop.

## Pubblicazione
Carica la cartella in un repository GitHub e abilita **Settings → Pages → Deploy from a branch**. Non è richiesto un backend. Il form prenotazioni è volutamente demo e non salva dati.

## Da sostituire prima del go-live
1. Nome/brand, logo e favicon.
2. Fotografie Unsplash con shooting originale.
3. Indirizzo, contatti, orari e social.
4. Menu, prezzi, allergeni e policy.
5. Testi privacy/cookie validati.
6. Collegamento del form a gestionale/API/booking engine.
7. Dominio nei canonical e nello Schema.org.

## Performance
Le immagini sono remote e servite con parametri di ridimensionamento. In produzione è preferibile esportarle in AVIF/WebP locali con `srcset`, dimensioni note e caching.


## Branding note
Questa variante è stata rinominata **L-Store Restaurant** e predisposta per il brand **L-STORE**. Se viene fornito il file vettoriale o PNG ufficiale del logo L-STORE, basta sostituire `assets/img/logo-mark.svg` e `assets/img/favicon.svg` con l'asset definitivo.
