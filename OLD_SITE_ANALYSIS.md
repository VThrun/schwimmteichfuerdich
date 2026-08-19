# Analyse der bisherigen Website

Stand und letzte Prüfung: 18. August 2026

Quelle: [schwimmteichfuerdich.de](https://www.schwimmteichfuerdich.de/)

## Zweck dieses Dokuments

Dieses Dokument hält Erkenntnisse aus der öffentlich erreichbaren bisherigen Website für den späteren Relaunch fest. Es ist keine Freigabe zur Veröffentlichung. Namen, Rollen, Preise, Leistungsangaben, Bilder und Rechtstexte müssen vom Auftraggeber bestätigt werden, bevor sie in die neue Website übernommen werden.

Während der aktuellen Designphase arbeitet die neue Astro-Website weiterhin ausschließlich mit Platzhaltern und bereits freigegebenen, allgemein gehaltenen Texten.

## Ungeklärte Betreiber- und Markenrolle

Die alte Website präsentiert keine rein persönliche Website, sondern eine überregionale Marke mit mehreren Partnerbetrieben:

- Im alten [Impressum](https://www.schwimmteichfuerdich.de/about/) wird die **E & J Handels- und Dienstleistungs UG (haftungsbeschränkt)** als Betreiberin genannt, vertreten durch **Tom Egermann**.
- Auf der [Partnerseite](https://www.schwimmteichfuerdich.de/philosophie/) wird **Garten- u. Teichbau Mike Pohl** als Partner für Ostsachsen geführt.
- Der Auftraggeber wurde im Projektgespräch als **Maik** bezeichnet. Ob damit Mike Pohl gemeint ist und ob die Schreibweise abweicht, ist noch zu bestätigen.

Vor der Inhaltsübernahme muss geklärt werden:

1. Wer wird rechtlicher Betreiber der neuen Website?
2. Gehören Marke und Domain weiterhin der bisherigen Gesellschaft oder werden sie übertragen?
3. Entsteht die neue Seite für das gesamte Partnernetz oder nur für Maiks regionales Angebot?
4. Dürfen Texte, Projektdaten und Bilder der alten Website weiterverwendet werden?
5. Welche Partner und Regionen gehören künftig tatsächlich zum Angebot?

## Erkennbares Geschäftsmodell

Die alte Website deckt vier Leistungsbereiche ab:

### Schwimmteiche und Naturpools

Es werden zehn vorbereitete Varianten gezeigt: Saunateich, mehrere voll- und teilverbaute Schwimmteiche, Tauchbecken, Naturpool, Badeteich sowie ein frei geplantes Wunschprojekt.

### Zwei Ausführungsstufen

Die Detailseiten unterscheiden zwischen **Do It Yourself** und **badefertiger Übergabe**. Die Startseite zeigt häufig nur den niedrigeren Einstiegspreis, wodurch ohne Detailseite nicht deutlich wird, welche Eigenleistungen vorausgesetzt werden. Auf der [Saunateich-Detailseite](https://www.schwimmteichfuerdich.de/wir-bauen-f%C3%BCr-sie/saunateich-6x4-5/) sind beide Leistungsstufen getrennt ausgewiesen.

### Begleiteter Selbstbau

Die Seite [Do It Yourself](https://www.schwimmteichfuerdich.de/do-it-yourself-1/) beschreibt eine konkrete Arbeitsteilung. Kundenseitig mögliche Arbeiten sind unter anderem Aushub, Becken- und Randarbeiten, Filtermaterial, Treppenstufen, Zonierung und Pflanzung. Folie, Holzverbau und Technik bleiben laut Altseite beim Fachbetrieb.

### Partnernetz und Technik

Die alte Website wirbt mit regionalen Partnern und bundesweiter Umsetzung. Zusätzlich existiert eine [Produktübersicht](https://www.schwimmteichfuerdich.de/produkt%C3%BCbersicht/) für Erweiterungen wie Phosphatregulierung, Lufteinspeisung, Schadstofffilter, Beleuchtung und weitere Technik.

Der Selbstbau ist im aktuellen Relaunch als eigene Platzhalterseite vorbereitet. Partnernetz und Technik sind noch nicht als eigene Seiten vorgesehen. Ob sie später übernommen werden, hängt von der bestätigten Rolle und dem tatsächlichen Angebot des Auftraggebers ab.

## Verwertbare Stärken

Nach fachlicher und rechtlicher Freigabe bieten sich folgende Inhalte für den Relaunch an:

- zahlreiche echte Projekt- und Baustellenbilder;
- konkrete Größen, Wassertiefen, Materialien und Ausstattungsmerkmale;
- verständliche Abgrenzung zwischen Eigenleistung und Fachleistung;
- Hinweise auf nicht enthaltene Arbeiten und mögliche Zusatzkosten;
- ein nachvollziehbarer Bauablauf vom Aushub bis zur Bepflanzung;
- die Unterscheidung von Vollverbau, Naturpool und teilverbauten Teichen;
- regionale Ansprechpartner und Referenzprojekte, sofern weiterhin aktuell.

## Inhaltliche Auffälligkeiten

Folgende Punkte dürfen nicht ungeprüft übernommen werden:

- Die zeitlich begrenzte Meldung „10 % Rabatt … im Großraum Leipzig“ enthält keinen belastbaren Gültigkeitszeitraum.
- Auf der Startseite wird beim „Schwimmteich 10 × 5 m“ eine Badezone von 12 × 3 m genannt. Die [Detailseite](https://www.schwimmteichfuerdich.de/wir-bauen-f%C3%BCr-sie/schwimmteich-10x5/) nennt dagegen 10 × 3 m.
- Übersichts-, DIY- und Komplettbaupreise sind nicht überall eindeutig als unterschiedliche Leistungsstufen gekennzeichnet.
- Einzelne Produktübersichten und Detailseiten zeigen voneinander abweichende Preise oder Leistungszuschnitte.
- Die Website enthält zahlreiche Tipp-, Grammatik- und Formatierungsfehler.
- Aussagen wie bundesweite Umsetzung, Umweltfreundlichkeit oder vollständige Fertigstellung sind Leistungsversprechen und müssen aktuell bestätigt werden.

Der aktuelle Freigabestatus und die noch benötigten Inhalte stehen separat in [`.codex/context/content-status.md`](.codex/context/content-status.md). Alte Maße und Preise werden während der Designphase nicht in die neue Website übernommen.

## Gestaltung und Informationsarchitektur

Die alte Navigation ist sehr tief und stellt die einzelnen Größen, Partner, DIY und Technik nebeneinander. Die Navigation wird im HTML außerdem doppelt ausgegeben. Für den Relaunch wäre bei bestätigtem Gesamtumfang eine klarere Gruppierung sinnvoll:

- Leistungen: Komplettbau und begleiteter Selbstbau
- Schwimmteiche und Naturpools: Varianten und individuelle Planung
- Technik und Erweiterungen
- Projekte beziehungsweise Referenzen
- Partner und Regionen
- Über uns und Kontakt

Bis die geschäftliche Rolle geklärt ist, bleiben auch die zusätzlichen Detail-, DIY- und Galerieseiten reine Designgerüste ohne übernommene Altinhalte.

## Technische und SEO-bezogene Bestandsaufnahme

Die alte Seite läuft mit **Jimdo Creator** und wird über Cloudflare ausgeliefert. Eine Quelltextprüfung der Startseite ergab zum Analysezeitpunkt:

- etwa 109 KB HTML;
- 66 Bildelemente;
- 30 Script-Tags;
- kein `h1`, sondern drei `h2` und ein `h3`;
- 55 Bilder mit leerem Alt-Text;
- Canonical-, Open-Graph- und Twitter-Metadaten sind vorhanden;
- die Meta-Beschreibung fokussiert Selbstbausätze, obwohl die Seite auch Komplettbau, Partner und Technik anbietet;
- keine erkennbare strukturierte JSON-LD-Auszeichnung auf der Startseite;
- Cookie-Steuerung, Google-Analytics-Skripte und ein Meta/Facebook-Pixel sind eingebunden.

Die neue statische Astro-Seite benötigt diese Jimdo- und Tracking-Abhängigkeiten nicht. Ohne Analytics oder Drittanbieter-Embeds ist zunächst auch kein Consent-Banner vorgesehen.

## Rechtliche Bestandsaufnahme

Die Rechtstexte der alten Seite sind nur historische Quellen und werden nicht kopiert:

- Das alte Impressum verweist noch auf § 5 TMG. Die aktuellen allgemeinen Informationspflichten für digitale Dienste stehen in [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/BJNR0950B0024.html).
- Die Datenschutzhinweise beschreiben Google Analytics und Google AdSense in einer alten Form.
- Im Quelltext werden Skripte für Universal Analytics geladen. Google weist darauf hin, dass Standard-Universal-Analytics-Properties seit Juli 2023 keine neuen Daten mehr verarbeiten ([Google Analytics Help](https://support.google.com/analytics/answer/10089681)).
- Betreiber, Hosting, Formularversand, Auftragsverarbeiter und eingesetzte Dienste müssen für die neue Website vollständig neu bewertet werden.

Dieses Dokument ersetzt keine rechtliche Beratung. Impressum und Datenschutzerklärung müssen vor Veröffentlichung fachlich geprüft werden.

## Nächste Inhaltsentscheidungen

Vor dem Einsatz echter Inhalte werden benötigt:

1. bestätigte Identität und Rolle von Maik beziehungsweise Mike;
2. bestätigter künftiger Betreiber und Markeninhaber;
3. Entscheidung zwischen regionaler Partnerseite und vollständiger Markenwebsite;
4. Freigabe zur Nutzung der alten Texte und Bilder;
5. aktuelle Preis-, Maß- und Leistungslisten für DIY und Komplettbau;
6. bestätigte Partner, Regionen und Technikprodukte;
7. neue Betreiber-, Hosting- und Verarbeitungsangaben für das Rechtliche.
