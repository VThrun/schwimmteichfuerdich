# Nächste Sitzung: Designentwurf 2

Stand: 18. August 2026

## Aktueller Stand

- Designentwurf 1 ist als statische Astro-Website fertig aufgebaut.
- Enthalten sind Startseite, Angebotsübersicht, zehn Produktdetailseiten, DIY-Seite,
  Galerie, Über uns, Kontakt, Impressum und Datenschutz.
- Preise, Texte, Bilder und Social-Media-URLs sind weiterhin Platzhalter.
- Der Produktions-Build war erfolgreich: 18 Seiten, keine Astro-Fehler oder Warnungen.
- Fachliche Entscheidungen stehen unter `.codex/context/`.
- Die Analyse der alten Website bleibt in `OLD_SITE_ANALYSIS.md`.
- Es wurden keine automatisierten Tests angelegt.

## Git-Status

- Das bestehende private GitHub-Repository heißt `VThrun/schwimmteichfuerdich`.
- Der vollständige Designentwurf 1 existiert derzeit nur im lokalen, noch nicht
  vollständig committeten Arbeitsstand.
- Auf GitHub liegt bislang lediglich der ursprüngliche Initial Commit.
- Deshalb nicht direkt von GitHub klonen, bevor Designentwurf 1 committed und
  gepusht wurde.
- Die GitHub-CLI muss voraussichtlich erneut mit `gh auth login` authentifiziert
  werden.

## Nächster Schritt: Designentwurf 2

- Designentwurf 1 zunächst vollständig committen und in das bestehende private
  Repository pushen.
- Danach ein zweites privates GitHub-Repository und einen lokalen Schwesterordner
  anlegen.
- Vorgesehener Name: `schwimmteichfuerdich2`.
- Der sichtbare Markenname „Schwimmteich für Dich“ bleibt unverändert; nur die
  Projekt- und Entwurfsbezeichnung erhält die `2`.
- Der Link beziehungsweise die Quelle des zweiten Themes muss noch geliefert werden.
- Im zweiten Projekt die Präsentationsschicht des bisherigen ScrewFast-Themes
  entfernen und durch das neue Theme ersetzen.
- Weiterhin gültig bleiben Astro-Konfiguration, Routen, Angebotsdaten,
  Platzhalterregeln, Kontextdokumentation und Analyse der alten Website.
- Ob die ScrewFast-Lizenz im zweiten Projekt verbleiben muss, wird nach Prüfung des
  tatsächlich übernommenen Codes entschieden.
- Danach `npm run build` ausführen und Desktop- sowie Mobilansicht manuell prüfen.

## Noch zu entscheiden

- Endgültiger Name des zweiten GitHub-Repositories und lokalen Ordners.
- Quelle des neuen Themes.
- Ob Designentwurf 2 zunächst als exakter Fork entsteht oder direkt auf eine
  minimale Astro-Grundstruktur reduziert wird.
