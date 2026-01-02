# Sprzątanie Na Błysk Wrocław - Statyczna Strona WWW

Profesjonalna, jednostronicowa strona internetowa dla firmy sprzątającej. Całkowicie statyczna - HTML, CSS i vanilla JavaScript bez backendu.

## 🚀 Jak uruchomić

Wystarczy otworzyć plik `index.html` w przeglądarce. Nie wymaga serwera, frameworków ani instalacji zależności.

## 📋 Jak edytować

### Zmiana numeru telefonu

Numer telefonu `+48123456789` znajduje się w kilku miejscach:

1. **index.html** - wszystkie linki `tel:+48123456789`:
   - Sticky header (2x)
   - Hero section
   - Sekcja kontakt (2x)
   - Stopka

2. **index.html** - Schema.org JSON-LD (linia ~28):
   ```json
   "telephone": "+48123456789"
   ```

### Zmiana miasta

Słowo "Wrocław" pojawia się w:
- Meta description (linia 7)
- Meta keywords (linia 8)
- Tytuł strony (linia 16)
- Nagłówek H1 w sekcji hero (linia 72)
- Podtytuł hero (linia 73)
- Schema.org JSON-LD (linia 30)
- Sekcje "Dlaczego my" i kontakt

### Zmiana tekstu hero

Sekcja hero znajduje się w pliku `index.html` (linie 72-82):
```html
<h1>Sprzątanie Na Błysk – Wrocław</h1>
<p class="hero-subtitle">Szybkie i dokładne sprzątanie...</p>
```

### Edycja cen

Wszystkie ceny znajdują się w sekcji `#cennik` w pliku `index.html` (linie 128-260).

Każdy wiersz cennika ma strukturę:
```html
<div class="pricing-row">
    <span class="pricing-item">Nazwa usługi</span>
    <span class="pricing-price">Cena PLN</span>
</div>
```

## 🎨 Zmiana kolorów

Kolory definiowane są w pliku `styles.css` (linie 11-20):

```css
:root {
    --primary-color: #2563eb;      /* Główny kolor (niebieski) */
    --primary-hover: #1d4ed8;      /* Hover dla głównego koloru */
    --accent-color: #10b981;       /* Kolor akcentu (zielony) */
    /* ... */
}
```

## 📱 Funkcjonalności

- ✅ W pełni responsywny design (mobile-first)
- ✅ Sticky header z CTA
- ✅ Click-to-call buttons (działa na urządzeniach mobilnych)
- ✅ Smooth scroll do sekcji
- ✅ Mobilne menu hamburger
- ✅ FAQ accordion
- ✅ Przycisk "wróć do góry"
- ✅ SEO: meta tags, Open Graph, Schema.org
- ✅ Semantic HTML (H1, H2, proper structure)

## 🚢 Deploy na Replit

1. Stwórz nowy projekt **Static** na Replit
2. Wgraj wszystkie pliki (index.html, styles.css, script.js)
3. Kliknij "Run" - Replit automatycznie serwuje pliki statyczne
4. Twoja strona jest dostępna pod adresem: `https://[project-name].[user].repl.co`

### Opcjonalnie: Dodanie własnej domeny

W ustawieniach projektu Replit możesz podłączyć własną domenę.

## 📁 Struktura plików

```
├── index.html      # Główny plik HTML ze wszystkimi sekcjami
├── styles.css      # Wszystkie style CSS
├── script.js       # Interakcje JavaScript (menu, FAQ, scroll)
└── README.md       # Ten plik
```

## 🔧 Brak formularza kontaktowego

Strona nie zawiera formularza kontaktowego (wymaga backendu). Zamiast tego:
- Wyraźne przyciski click-to-call
- Widoczny numer telefonu w wielu miejscach
- Zachęta do bezpośredniego kontaktu telefonicznego

## 📊 SEO

Strona zawiera:
- Meta title i description z "Wrocław"
- Open Graph tags dla social media
- Schema.org JSON-LD (LocalBusiness)
- Semantic HTML (H1, H2 hierarchy)
- Responsive meta viewport

## 💡 Tips

- Wszystkie ikony to emoji (brak zewnętrznych zależności)
- Obrazy można dodać do folderu `/assets` i użyć ścieżek względnych
- Strona ładuje się błyskawicznie (brak zewnętrznych bibliotek)
- Działa offline po pierwszym załadowaniu

## 📝 Licencja

Możesz swobodnie modyfikować i używać tej strony dla swojej firmy.
