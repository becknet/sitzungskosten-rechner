# Sitzungskosten Rechner

## Überblick
Der **Sitzungskosten Rechner** ist eine Webanwendung, die die laufenden Kosten einer Sitzung in Echtzeit berechnet. Die Kosten werden anhand der Anzahl der Teilnehmenden und des durchschnittlichen Stundenlohns ermittelt. Diese Anwendung kann dazu beitragen, die Bewusstsein für die finanziellen Kosten von Besprechungen zu schärfen.

## Features
- **Start/Pause/Reset Timer**: Starten, pausieren oder zurücksetzen des Timers zur Berechnung der Kosten einer laufenden Sitzung.
- **Einstellungen**: Anpassung der Anzahl der Teilnehmenden und des durchschnittlichen Stundenlohns über einen Einstellungsdialog.
- **Kostenberechnung in Echtzeit**: Die Sitzungskosten werden laufend auf Grundlage der verstrichenen Zeit, der Anzahl der Teilnehmenden und des Stundenlohns berechnet.
- **Verstrichene Zeit**: Anzeige der verstrichenen Zeit im Format `hh:mm:ss`.
- **Speicherung der Sitzung**: Die Daten werden lokal im Browser gespeichert, sodass der Timer bei einem Seitenneuladen fortgesetzt werden kann.

## Nutzung
1. **Start/Pause des Timers**: Klicken Sie auf den grünen Knopf mit dem Play-Symbol, um den Timer zu starten. Während der Sitzung können Sie den Timer pausieren, indem Sie auf den Knopf mit dem Pause-Symbol klicken.
2. **Sitzung zurücksetzen**: Klicken Sie auf den roten Zurücksetzen-Knopf, um die Sitzung zurückzusetzen und die Zeit sowie die Kosten auf Null zu setzen.
3. **Einstellungen ändern**: Klicken Sie auf den Zahnrad-Knopf, um die Anzahl der Teilnehmenden und den durchschnittlichen Stundenlohn anzupassen. Speichern Sie die Einstellungen, um die Änderungen zu übernehmen.

## Technologie-Stack
- **HTML, CSS, JavaScript**: Für die Erstellung der Benutzeroberfläche und die Interaktivität.
- **Bootstrap**: Zur Verbesserung des Layouts und des Designs.
- **FontAwesome**: Für die Verwendung von Icons.
- **jQuery**: Für die Verwaltung von DOM-Interaktionen.

## Struktur
- **index.html**: Enthält das HTML-Layout der Anwendung.
- **styles.css**: Definiert das Styling der Anwendung.
- **script.js**: Enthält die JavaScript-Logik für die Berechnung der Sitzungskosten, das Starten/Stoppen des Timers und die Speicherung der Daten im LocalStorage.

## Installation
1. Klonen Sie dieses Repository auf Ihren lokalen Rechner:
   ```bash
   git clone https://github.com/becknet/sitzungskosten-rechner.git
   ```
2. Navigieren Sie in das Projektverzeichnis:
   ```bash
   cd sitzungskosten-rechner
   ```
3. Öffnen Sie die Datei `index.html` in Ihrem Browser.

## Lizenz
Dieses Projekt steht unter der Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz (CC BY-NC-SA 4.0).

