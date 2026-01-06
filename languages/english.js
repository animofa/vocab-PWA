const vocabulary = [
{ front: "I", back: "ich", lesson: "A1.1" },	
{ front: "to be called", back: "heißen", lesson: "A1.1" },	{ front: "have been called", back: "haben geheißen", lesson: "A1.7" },
{ front: "the name", back: "der Name", lesson: "A1.1" },	{ front: "the names", back: "die Namen", lesson: "A1.1" },
{ front: "to come", back: "kommen", lesson: "A1.1" },	{ front: "have come", back: "sein gekommen", lesson: "A1.7" },
{ front: "Germany", back: "das Deutschland", lesson: "A1.1" },	
 { front: "to speak", back: "sprechen", lesson: "A1.1" },	{ front: "have spoken", back: "haben gesprochen", lesson: "A1.7" },
 { front: "German (language)", back: "das Deutsch", lesson: "A1.1" },	
 { front: "and", back: "und", lesson: "A1.1" },	
 { front: "a little", back: "ein bisschen", lesson: "A1.1" },	
 { front: "good day", back: "guten Tag", lesson: "A1.1" },	
 { front: "hello", back: "hallo", lesson: "A1.1" },	
 { front: "goodbye", back: "auf Wiedersehen", lesson: "A1.1" },	
 { front: "bye", back: "tschüs", lesson: "A1.1" },	
 { front: "the gentleman", back: "der Herr", lesson: "A1.1" },	{ front: "the gentlemen", back: "die Herren", lesson: "A1.1" },
 { front: "the child", back: "das Kind", lesson: "A1.1" },	{ front: "the children", back: "die Kinder", lesson: "A1.1" },
 { front: "good evening", back: "guten Abend", lesson: "A1.1" },	
 { front: "the lady", back: "die Dame", lesson: "A1.1" },	{ front: "the ladies", back: "die Damen", lesson: "A1.1" },
 { front: "welcome", back: "willkommen", lesson: "A1.1" },	
 { front: "at", back: "bei", lesson: "A1.1" },	
 { front: "the music", back: "die Musik", lesson: "A1.1" },	
 { front: "international", back: "international", lesson: "A1.1" },	
 { front: "good morning", back: "guten Morgen", lesson: "A1.1" },	
 { front: "the woman", back: "die Frau", lesson: "A1.1" },	{ front: "the women", back: "die Frauen", lesson: "A1.1" },
 { front: "to thank", back: "danken", lesson: "A1.1" },	{ front: "have thanked", back: "haben gedankt", lesson: "A1.7" },
 { front: "good night", back: "gute Nacht", lesson: "A1.1" },	
 { front: "the dad", back: "der Papa", lesson: "A1.1" },	{ front: "the dads", back: "die Papas", lesson: "A1.1" },
 { front: "to be", back: "sein", lesson: "A1.1" },	{ front: "been", back: "gewesen", lesson: "A1.7" },
 { front: "the apology", back: "die Entschuldigung", lesson: "A1.1" },	{ front: "the apologies", back: "die Entschuldigungen", lesson: "A1.1" },
 { front: "how", back: "wie", lesson: "A1.1" },	
{ front: "she/they", back: "sie", lesson: "A1.1" },	
{ front: "who", back: "wer", lesson: "A1.1" },	
{ front: "yes", back: "ja", lesson: "A1.1" },	
{ front: "no", back: "nein", lesson: "A1.1" },	
{ front: "from where", back: "woher", lesson: "A1.1" },	
{ front: "from", back: "aus", lesson: "A1.1" },	
{ front: "you (informal)", back: "du", lesson: "A1.1" },	
{ front: "Austria", back: "Österreich", lesson: "A1.1" },	
{ front: "Switzerland", back: "die Schweiz", lesson: "A1.1" },	
{ front: "ah", back: "aha", lesson: "A1.1" },	
{ front: "great", back: "toll", lesson: "A1.1" },	
{ front: "interesting", back: "interessant", lesson: "A1.1" },	
{ front: "what", back: "was", lesson: "A1.1" },	
{ front: "also", back: "auch", lesson: "A1.1" },	
{ front: "the language", back: "die Sprache", lesson: "A1.1" },	{ front: "the languages", back: "die Sprachen", lesson: "A1.1" },
{ front: "the letter", back: "der Buchstabe", lesson: "A1.1" },	{ front: "the letters", back: "die Buchstaben", lesson: "A1.1" },
{ front: "the alphabet", back: "das Alphabet", lesson: "A1.1" },	
{ front: "excuse me?", back: "wie bitte?", lesson: "A1.1" },	
{ front: "to spell", back: "buchstabieren", lesson: "A1.1" },	{ front: "have spelled", back: "haben buchstabiert", lesson: "A1.7" },
{ front: "please", back: "bitte", lesson: "A1.1" },	
{ front: "the company", back: "die Firma", lesson: "A1.1" },	{ front: "the companies", back: "die Firmen", lesson: "A1.1" },
{ front: "thank you very much", back: "vielen Dank", lesson: "A1.1" },	
{ front: "goodbye (on the phone)", back: "auf Wiederhören", lesson: "A1.1" },	
{ front: "the address", back: "die Adresse", lesson: "A1.1" },	{ front: "the addresses", back: "die Adressen", lesson: "A1.1" },
{ front: "the business card", back: "die Visitenkarte", lesson: "A1.1" },	{ front: "the business cards", back: "die Visitenkarten", lesson: "A1.1" },
{ front: "the first name", back: "der Vorname", lesson: "A1.1" },	{ front: "the first names", back: "die Vornamen", lesson: "A1.1" },
{ front: "the last name", back: "der Familienname", lesson: "A1.1" },	{ front: "the last names", back: "die Familiennamen", lesson: "A1.1" },
{ front: "the street", back: "die Straße", lesson: "A1.1" },	{ front: "the streets", back: "die Straßen", lesson: "A1.1" },
{ front: "the city", back: "die Stadt", lesson: "A1.1" },	{ front: "the cities", back: "die Städte", lesson: "A1.1" },
{ front: "the country", back: "das Land", lesson: "A1.1" },	{ front: "the countries", back: "die Länder", lesson: "A1.1" },
{ front: "the email", back: "die E-Mail", lesson: "A1.1" },	{ front: "the emails", back: "die E-Mails", lesson: "A1.1" },
{ front: "the telephone", back: "das Telefon", lesson: "A1.1" },	{ front: "the telephones", back: "die Telefone", lesson: "A1.1" },
{ front: "the form", back: "das Formular", lesson: "A1.1" },	{ front: "the forms", back: "die Formulare", lesson: "A1.1" },
{ front: "the course", back: "der Kurs", lesson: "A1.1" },	{ front: "the courses", back: "die Kurse", lesson: "A1.1" },
{ front: "the foreign language", back: "die Fremdsprache", lesson: "A1.1" },	{ front: "the foreign languages", back: "die Fremdsprachen", lesson: "A1.1" },
{ front: "the registration", back: "die Anmeldung", lesson: "A1.1" },	{ front: "the registrations", back: "die Anmeldungen", lesson: "A1.1" },
{ front: "the postal code", back: "die Postleitzahl", lesson: "A1.1" },	{ front: "the postal codes", back: "die Postleitzahlen", lesson: "A1.1" },
{ front: "learn words", back: "lernen Sie Wörter", lesson: "A1.1" },	
{ front: "Turkish", back: "türkisch", lesson: "A1.1" },	
{ front: "German", back: "deutsch", lesson: "A1.1" },	
{ front: "Poland", back: "Polen", lesson: "A1.1" },	
{ front: "Polish", back: "polnisch", lesson: "A1.1" },	
{ front: "Turkey", back: "die Türkei", lesson: "A1.1" },	
{ front: "Spain", back: "Spanien", lesson: "A1.1" },	
{ front: "Hungary", back: "Ungarn", lesson: "A1.1" },	
{ front: "Germany", back: "Deutschland", lesson: "A1.1" },	
{ front: "Austria", back: "Österreich", lesson: "A1.1" },	
{ front: "Turkish", back: "türkisch", lesson: "A1.1" },	
{ front: "Spanish", back: "spanisch", lesson: "A1.1" },	
{ front: "Hungarian", back: "ungarisch", lesson: "A1.1" },	
{ front: "German", back: "deutsch", lesson: "A1.1" },	
{ front: "Switzerland", back: "die Schweiz", lesson: "A1.1" },	
{ front: "Romania", back: "Rumänien", lesson: "A1.1" },	
{ front: "Syria", back: "Syrien", lesson: "A1.1" },	
{ front: "Bulgaria", back: "Bulgarien", lesson: "A1.1" },	
{ front: "Italy", back: "Italien", lesson: "A1.1" },	
{ front: "Greece", back: "Griechenland", lesson: "A1.1" },	
{ front: "Romanian", back: "rumänisch", lesson: "A1.1" },	
{ front: "Arabic", back: "arabisch", lesson: "A1.1" },	
{ front: "Bulgarian", back: "bulgarisch", lesson: "A1.1" },	
{ front: "Italian", back: "italienisch", lesson: "A1.1" },	
{ front: "Greek", back: "griechisch", lesson: "A1.1" },	
{ front: "to learn", back: "lernen", lesson: "A1.2" },	{ front: "have learned", back: "haben gelernt", lesson: "A1.7" },
{ front: "the park", back: "der Park", lesson: "A1.2" },	{ front: "the parks", back: "die Parks", lesson: "A1.2" },
{ front: "the break", back: "die Pause", lesson: "A1.2" },	{ front: "the breaks", back: "die Pausen", lesson: "A1.2" },
{ front: "the family", back: "die Familie", lesson: "A1.2" },	{ front: "the families", back: "die Familien", lesson: "A1.2" },
{ front: "the father", back: "der Vater", lesson: "A1.2" },	{ front: "the fathers", back: "die Väter", lesson: "A1.2" },
{ front: "the grandparents", back: "die Großeltern", lesson: "A1.2" },	
{ front: "the mother", back: "die Mutter", lesson: "A1.2" },	{ front: "the mothers", back: "die Mütter", lesson: "A1.2" },
{ front: "the parents", back: "die Eltern", lesson: "A1.2" },	
{ front: "the brother", back: "der Bruder", lesson: "A1.2" },	{ front: "the brothers", back: "die Brüder", lesson: "A1.2" },
{ front: "the siblings", back: "die Geschwister", lesson: "A1.2" },	
{ front: "the year", back: "das Jahr", lesson: "A1.2" },	{ front: "the years", back: "die Jahre", lesson: "A1.2" },
{ front: "to live", back: "leben", lesson: "A1.2" },	{ front: "have lived", back: "haben gelebt", lesson: "A1.7" },
{ front: "in", back: "in", lesson: "A1.2" },	
{ front: "good", back: "gut", lesson: "A1.2" },	
{ front: "super", back: "super", lesson: "A1.2" },	
{ front: "well, okay", back: "na ja", lesson: "A1.2" },	
{ front: "oh", back: "ach", lesson: "A1.2" },	
{ front: "so", back: "so", lesson: "A1.2" },	
{ front: "very", back: "sehr", lesson: "A1.2" },	
{ front: "the grandson", back: "der Enkel", lesson: "A1.2" },	{ front: "the grandsons", back: "die Enkel", lesson: "A1.2" },
{ front: "the granddaughter", back: "die Enkelin", lesson: "A1.2" },	{ front: "the granddaughters", back: "die Enkelinnen", lesson: "A1.2" },
{ front: "the daughter", back: "die Tochter", lesson: "A1.2" },	{ front: "the daughters", back: "die Töchter", lesson: "A1.2" },
{ front: "the son", back: "der Sohn", lesson: "A1.2" },	{ front: "the sons", back: "die Söhne", lesson: "A1.2" },
{ front: "the sister", back: "die Schwester", lesson: "A1.2" },	{ front: "the sisters", back: "die Schwestern", lesson: "A1.2" },
{ front: "the grandmother", back: "die Oma", lesson: "A1.2" },	{ front: "the grandmothers", back: "die Omas", lesson: "A1.2" },
{ front: "the man", back: "der Mann", lesson: "A1.2" },	{ front: "the men", back: "die Männer", lesson: "A1.2" },
{ front: "the grandfather", back: "der Opa", lesson: "A1.2" },	{ front: "the grandfathers", back: "die Opas", lesson: "A1.2" },
{ front: "your (informal)", back: "dein", lesson: "A1.2" },	
{ front: "my", back: "mein", lesson: "A1.2" },	
{ front: "her/its (formal)", back: "ihr", lesson: "A1.2" },	
{ front: "the husband", back: "der Ehemann", lesson: "A1.2" },	{ front: "the husbands", back: "die Ehemänner", lesson: "A1.2" },
{ front: "the wife", back: "die Ehefrau", lesson: "A1.2" },	{ front: "the wives", back: "die Ehefrauen", lesson: "A1.2" },
{ front: "wrong", back: "falsch", lesson: "A1.2" },	
{ front: "she/they", back: "sie", lesson: "A1.2" },	
{ front: "together", back: "zusammen", lesson: "A1.2" },	
{ front: "they", back: "sie", lesson: "A1.2" },	
{ front: "divorced", back: "geschieden", lesson: "A1.2" },	
{ front: "he", back: "er", lesson: "A1.2" },	
{ front: "to live", back: "wohnen", lesson: "A1.2" },	{ front: "have lived", back: "haben gewohnt", lesson: "A1.7" },
{ front: "now", back: "jetzt", lesson: "A1.2" },	
{ front: "your (plural/formal)", back: "ihr", lesson: "A1.2" },	
{ front: "we", back: "wir", lesson: "A1.2" },	
{ front: "the number", back: "die Zahl", lesson: "A1.2" },	{ front: "the numbers", back: "die Zahlen", lesson: "A1.2" },
{ front: "where", back: "wo", lesson: "A1.2" },	
{ front: "born", back: "geboren", lesson: "A1.2" },	
{ front: "the number", back: "die Nummer", lesson: "A1.2" },	{ front: "the numbers", back: "die Nummern", lesson: "A1.2" },
{ front: "married", back: "verheiratet", lesson: "A1.2" },	
{ front: "to have", back: "haben", lesson: "A1.2" },	{ front: "have had", back: "haben gehabt", lesson: "A1.7" },
{ front: "the place of birth", back: "der Geburtsort", lesson: "A1.2" },	{ front: "the places of birth", back: "die Geburtsorte", lesson: "A1.2" },
{ front: "the place of residence", back: "der Wohnort", lesson: "A1.2" },	{ front: "the places of residence", back: "die Wohnorte", lesson: "A1.2" },
{ front: "marital status", back: "der Familienstand", lesson: "A1.2" },	
{ front: "single", back: "ledig", lesson: "A1.2" },	
{ front: "widowed", back: "verwitwet", lesson: "A1.2" },	
{ front: "the age", back: "das Alter", lesson: "A1.2" },	{ front: "the ages", back: "die Alter", lesson: "A1.2" },
{ front: "the north", back: "der Norden", lesson: "A1.2" },	
{ front: "the east", back: "der Osten", lesson: "A1.2" },	
{ front: "the south", back: "der Süden", lesson: "A1.2" },	
{ front: "the west", back: "der Westen", lesson: "A1.2" },	
{ front: "the capital city", back: "die Hauptstadt", lesson: "A1.2" },	{ front: "the capital cities", back: "die Hauptstädte", lesson: "A1.2" },
{ front: "south", back: "Süd", lesson: "A1.2" },	
{ front: "north", back: "Nord", lesson: "A1.2" },	
{ front: "the teacher (male)", back: "der Lehrer", lesson: "A1.2" },	{ front: "the teachers (male)", back: "die Lehrer", lesson: "A1.2" },
{ front: "the teacher (female)", back: "die Lehrerin", lesson: "A1.2" },	{ front: "the teachers (female)", back: "die Lehrerinnen", lesson: "A1.2" },
{ front: "the German (male)", back: "der Deutsche", lesson: "A1.2" },	{ front: "the Germans (male)", back: "die Deutschen", lesson: "A1.2" },
{ front: "the German (female)", back: "die Deutsche", lesson: "A1.2" },	{ front: "the Germans (female)", back: "die Deutschen", lesson: "A1.2" },
{ front: "the banana", back: "die Banane", lesson: "A1.3" },	{ front: "the bananas", back: "die Bananen", lesson: "A1.3" },
{ front: "the butter", back: "die Butter", lesson: "A1.3" },	
{ front: "the egg", back: "das Ei", lesson: "A1.3" },	{ front: "the eggs", back: "die Eier", lesson: "A1.3" },
{ front: "the flour", back: "das Mehl", lesson: "A1.3" },	
{ front: "the milk", back: "die Milch", lesson: "A1.3" },	
{ front: "the sugar", back: "der Zucker", lesson: "A1.3" },	
{ front: "the pancake", back: "der Pfannkuchen", lesson: "A1.3" },	{ front: "the pancakes", back: "die Pfannkuchen", lesson: "A1.3" },
{ front: "the chocolate", back: "die Schokolade", lesson: "A1.3" },	
{ front: "to need / to use", back: "brauchen", lesson: "A1.3" },	{ front: "have needed / have used", back: "haben gebraucht", lesson: "A1.7" },
{ front: "to buy", back: "kaufen", lesson: "A1.3" },	{ front: "have bought", back: "haben gekauft", lesson: "A1.7" },
{ front: "the hunger", back: "der Hunger", lesson: "A1.3" },	
{ front: "the euro", back: "der Euro", lesson: "A1.3" },	
{ front: "the meat", back: "das Fleisch", lesson: "A1.3" },	
{ front: "the beer", back: "das Bier", lesson: "A1.3" },	
{ front: "the cheese", back: "der Käse", lesson: "A1.3" },	
{ front: "the salt", back: "das Salz", lesson: "A1.3" },	
{ front: "the tea", back: "der Tee", lesson: "A1.3" },	{ front: "the teas", back: "die Tees", lesson: "A1.3" },
{ front: "the bread", back: "das Brot", lesson: "A1.3" },	{ front: "the breads / loaves", back: "die Brote", lesson: "A1.3" },
{ front: "the wine", back: "der Wein", lesson: "A1.3" },	{ front: "the wines", back: "die Weine", lesson: "A1.3" },
{ front: "the mineral water", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "the rice", back: "der Reis", lesson: "A1.3" },	
{ front: "the fish", back: "der Fisch", lesson: "A1.3" },	{ front: "the fishes", back: "die Fische", lesson: "A1.3" },
{ front: "a / one", back: "ein", lesson: "A1.3" },	
{ front: "no / none / not any", back: "kein", lesson: "A1.3" },	
{ front: "the apple", back: "der Apfel", lesson: "A1.3" },	{ front: "the apples", back: "die Äpfel", lesson: "A1.3" },
{ front: "the orange", back: "die Orange", lesson: "A1.3" },	{ front: "the oranges", back: "die Orangen", lesson: "A1.3" },
{ front: "the cake", back: "der Kuchen", lesson: "A1.3" },	{ front: "the cakes", back: "die Kuchen", lesson: "A1.3" },
{ front: "the coffee", back: "der Kaffee", lesson: "A1.3" },	{ front: "the coffees", back: "die Kaffees", lesson: "A1.3" },
{ front: "the juice", back: "der Saft", lesson: "A1.3" },	{ front: "the juices", back: "die Säfte", lesson: "A1.3" },
{ front: "the roll / bread roll", back: "das Brötchen", lesson: "A1.3" },	{ front: "the rolls", back: "die Brötchen", lesson: "A1.3" },
{ front: "the sausage (diminutive)", back: "das Würstchen", lesson: "A1.3" },	{ front: "the little sausages", back: "die Würstchen", lesson: "A1.3" },
{ front: "the pear", back: "die Birne", lesson: "A1.3" },	{ front: "the pears", back: "die Birnen", lesson: "A1.3" },
{ front: "the tomato", back: "die Tomate", lesson: "A1.3" },	{ front: "the tomatoes", back: "die Tomaten", lesson: "A1.3" },
{ front: "the potato", back: "die Kartoffel", lesson: "A1.3" },	{ front: "the potatoes", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "the yogurt", back: "der Joghurt", lesson: "A1.3" },	{ front: "the yogurts", back: "die Joghurts", lesson: "A1.3" },
{ front: "the onion", back: "die Zwiebel", lesson: "A1.3" },	{ front: "the onions", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "the shelf / shelving", back: "das Regal", lesson: "A1.3" },	{ front: "the shelves", back: "die Regale", lesson: "A1.3" },
{ front: "the price", back: "der Preis", lesson: "A1.3" },	{ front: "the prices", back: "die Preise", lesson: "A1.3" },
{ front: "the cent", back: "der Cent", lesson: "A1.3" },	
{ front: "the brochure / prospectus", back: "der Prospekt", lesson: "A1.3" },	{ front: "the brochures", back: "die Prospekte", lesson: "A1.3" },
{ front: "the special offer / sale", back: "das Sonderangebot", lesson: "A1.3" },	{ front: "the special offers", back: "die Sonderangebote", lesson: "A1.3" },
{ front: "the (single) food item / grocery", back: "das Lebensmittel", lesson: "A1.3" },	{ front: "the groceries / food items", back: "die Lebensmittel", lesson: "A1.3" },
{ front: "how much / how many", back: "wie viel", lesson: "A1.3" },	
{ front: "to cost", back: "kosten", lesson: "A1.3" },	{ front: "have cost", back: "haben gekostet", lesson: "A1.7" },
{ front: "the kilo(gram)", back: "das Kilo(gramm)", lesson: "A1.3" },	
{ front: "the gram", back: "das Gramm", lesson: "A1.3" },	
{ front: "the pound", back: "das Pfund", lesson: "A1.3" },	
{ front: "the liter", back: "der Liter", lesson: "A1.3" },	
{ front: "the bottle", back: "die Flasche", lesson: "A1.3" },	{ front: "the bottles", back: "die Flaschen", lesson: "A1.3" },
{ front: "the can / tin / dose", back: "die Dose", lesson: "A1.3" },	{ front: "the cans / tins", back: "die Dosen", lesson: "A1.3" },
{ front: "the cream", back: "die Sahne", lesson: "A1.3" },	
{ front: "the sausage", back: "die Wurst", lesson: "A1.3" },	{ front: "the sausages", back: "die Würste", lesson: "A1.3" },
{ front: "the minced meat / ground meat", back: "das Hackfleisch", lesson: "A1.3" },	
{ front: "the (male) seller / vendor", back: "der Verkäufer", lesson: "A1.3" },	{ front: "the (male) sellers", back: "die Verkäufer", lesson: "A1.3" },
{ front: "the (female) seller / vendor", back: "die Verkäuferin", lesson: "A1.3" },	{ front: "the (female) sellers", back: "die Verkäuferinnen", lesson: "A1.3" },
{ front: "the (male) customer", back: "der Kunde", lesson: "A1.3" },	{ front: "the (male) customers", back: "die Kunden", lesson: "A1.3" },
{ front: "the (female) customer", back: "die Kundin", lesson: "A1.3" },	{ front: "the (female) customers", back: "die Kundinnen", lesson: "A1.3" },
{ front: "still / yet / in addition", back: "noch", lesson: "A1.3" },	
{ front: "all / every", back: "all", lesson: "A1.3" },	
{ front: "would like", back: "möchten", lesson: "A1.3" },	{ front: "have wished / have desired", back: "haben gewünscht", lesson: "A1.7" },
{ front: "to find", back: "finden", lesson: "A1.3" },	{ front: "have found", back: "haben gefunden", lesson: "A1.7" },
{ front: "the shop / store", back: "der Laden", lesson: "A1.3" },	{ front: "the shops / stores", back: "die Läden", lesson: "A1.3" },
{ front: "the fruit", back: "das Obst", lesson: "A1.3" },	
{ front: "the vegetable(s)", back: "das Gemüse", lesson: "A1.3" },	{ front: "the vegetables", back: "die Gemüse", lesson: "A1.3" },
{ front: "the bakery", back: "die Bäckerei", lesson: "A1.3" },	{ front: "the bakeries", back: "die Bäckereien", lesson: "A1.3" },
{ front: "the water", back: "das Wasser", lesson: "A1.3" },	
{ front: "the pepper", back: "der Pfeffer", lesson: "A1.3" },	
{ front: "the chocolate", back: "die Schokolade", lesson: "A1.3" },	
{ front: "the banana", back: "die Banane", lesson: "A1.3" },	{ front: "the bananas", back: "die Bananen", lesson: "A1.3" },
{ front: "the butter", back: "die Butter", lesson: "A1.3" },	
{ front: "the egg", back: "das Ei", lesson: "A1.3" },	{ front: "the eggs", back: "die Eier", lesson: "A1.3" },
{ front: "the milk", back: "die Milch", lesson: "A1.3" },	
{ front: "the bread", back: "das Brot", lesson: "A1.3" },	{ front: "the breads / loaves", back: "die Brote", lesson: "A1.3" },
{ front: "the fish", back: "der Fisch", lesson: "A1.3" },	{ front: "the fishes", back: "die Fische", lesson: "A1.3" },
{ front: "the meat", back: "das Fleisch", lesson: "A1.3" },	
{ front: "the cheese", back: "der Käse", lesson: "A1.3" },	
{ front: "the apple", back: "der Apfel", lesson: "A1.3" },	{ front: "the apples", back: "die Äpfel", lesson: "A1.3" },
{ front: "the pear", back: "die Birne", lesson: "A1.3" },	{ front: "the pears", back: "die Birnen", lesson: "A1.3" },
{ front: "the roll / bread roll", back: "das Brötchen", lesson: "A1.3" },	{ front: "the rolls", back: "die Brötchen", lesson: "A1.3" },
{ front: "the cake", back: "der Kuchen", lesson: "A1.3" },	{ front: "the cakes", back: "die Kuchen", lesson: "A1.3" },
{ front: "the orange", back: "die Orange", lesson: "A1.3" },	{ front: "the oranges", back: "die Orangen", lesson: "A1.3" },
{ front: "the juice", back: "der Saft", lesson: "A1.3" },	{ front: "the juices", back: "die Säfte", lesson: "A1.3" },
{ front: "the yogurt", back: "der / das Joghurt", lesson: "A1.3" },	{ front: "the yogurts", back: "die Joghurts", lesson: "A1.3" },
{ front: "the potato", back: "die Kartoffel", lesson: "A1.3" },	{ front: "the potatoes", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "the onion", back: "die Zwiebel", lesson: "A1.3" },	{ front: "the onions", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "the tomato", back: "die Tomate", lesson: "A1.3" },	{ front: "the tomatoes", back: "die Tomaten", lesson: "A1.3" },
{ front: "the mineral water", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "the apartment", back: "die Wohnung", lesson: "A1.4" },	{ front: "the apartments", back: "die Wohnungen", lesson: "A1.4" },
{ front: "the lamp", back: "die Lampe", lesson: "A1.4" },	{ front: "the lamps", back: "die Lampen", lesson: "A1.4" },
{ front: "the room", back: "das Zimmer", lesson: "A1.4" },	{ front: "the rooms", back: "die Zimmer", lesson: "A1.4" },
{ front: "the kitchen", back: "die Küche", lesson: "A1.4" },	{ front: "the kitchens", back: "die Küchen", lesson: "A1.4" },
{ front: "the bathroom", back: "das Bad", lesson: "A1.4" },	{ front: "the bathrooms", back: "die Bäder", lesson: "A1.4" },
{ front: "old", back: "alt", lesson: "A1.4" },	
{ front: "new", back: "neu", lesson: "A1.4" },	
{ front: "big / large", back: "groß", lesson: "A1.4" },	
{ front: "small", back: "klein", lesson: "A1.4" },	
{ front: "bright / light", back: "hell", lesson: "A1.4" },	
{ front: "dark", back: "dunkel", lesson: "A1.4" },	
{ front: "expensive", back: "teuer", lesson: "A1.4" },	
{ front: "cheap", back: "billig", lesson: "A1.4" },	
{ front: "beautiful / nice", back: "schön", lesson: "A1.4" },	
{ front: "ugly", back: "hässlich", lesson: "A1.4" },	
{ front: "to know (someone/place)", back: "kennen", lesson: "A1.4" },	{ front: "have known", back: "haben gekannt", lesson: "A1.7" },
{ front: "the hallway / corridor", back: "der Flur", lesson: "A1.4" },	{ front: "the hallways", back: "die Flure", lesson: "A1.4" },
{ front: "the toilet", back: "die Toilette", lesson: "A1.4" },	{ front: "the toilets", back: "die Toiletten", lesson: "A1.4" },
{ front: "the balcony", back: "der Balkon", lesson: "A1.4" },	{ front: "the balconies", back: "die Balkone", lesson: "A1.4" },
{ front: "the living room", back: "das Wohnzimmer", lesson: "A1.4" },	{ front: "the living rooms", back: "die Wohnzimmer", lesson: "A1.4" },
{ front: "the (m/f/n)", back: "der / das / die", lesson: "A1.4" },	
{ front: "the house", back: "das Haus", lesson: "A1.4" },	{ front: "the houses", back: "die Häuser", lesson: "A1.4" },
{ front: "here", back: "hier", lesson: "A1.4" },	
{ front: "there", back: "dort", lesson: "A1.4" },	
{ front: "but", back: "aber", lesson: "A1.4" },	
{ front: "not", back: "nicht", lesson: "A1.4" },	
{ front: "the month", back: "der Monat", lesson: "A1.4" },	{ front: "the months", back: "die Monate", lesson: "A1.4" },
{ front: "narrow", back: "schmal", lesson: "A1.4" },	
{ front: "correct / right", back: "richtig", lesson: "A1.4" },	
{ front: "wide", back: "breit", lesson: "A1.4" },	
{ front: "the cupboard / closet", back: "der Schrank", lesson: "A1.4" },	{ front: "the cupboards", back: "die Schränke", lesson: "A1.4" },
{ front: "the refrigerator", back: "der Kühlschrank", lesson: "A1.4" },	{ front: "the refrigerators", back: "die Kühlschränke", lesson: "A1.4" },
{ front: "the sofa", back: "das Sofa", lesson: "A1.4" },	{ front: "the sofas", back: "die Sofas", lesson: "A1.4" },
{ front: "the table", back: "der Tisch", lesson: "A1.4" },	{ front: "the tables", back: "die Tische", lesson: "A1.4" },
{ front: "the chair", back: "der Stuhl", lesson: "A1.4" },	{ front: "the chairs", back: "die Stühle", lesson: "A1.4" },
{ front: "the bed", back: "das Bett", lesson: "A1.4" },	{ front: "the beds", back: "die Betten", lesson: "A1.4" },
{ front: "the TV", back: "der Fernseher", lesson: "A1.4" },	{ front: "the TVs", back: "die Fernseher", lesson: "A1.4" },
{ front: "the shower", back: "die Dusche", lesson: "A1.4" },	{ front: "the showers", back: "die Duschen", lesson: "A1.4" },
{ front: "the stove / cooker", back: "der Herd", lesson: "A1.4" },	{ front: "the stoves", back: "die Herde", lesson: "A1.4" },
{ front: "the bathtub", back: "die Badewanne", lesson: "A1.4" },	{ front: "the bathtubs", back: "die Badewannen", lesson: "A1.4" },
{ front: "the carpet / rug", back: "der Teppich", lesson: "A1.4" },	{ front: "the carpets", back: "die Teppiche", lesson: "A1.4" },
{ front: "the armchair", back: "der Sessel", lesson: "A1.4" },	{ front: "the armchairs", back: "die Sessel", lesson: "A1.4" },
{ front: "the furniture", back: "die Möbel", lesson: "A1.4" },	
{ front: "the device / appliance", back: "das Gerät", lesson: "A1.4" },	{ front: "the devices", back: "die Geräte", lesson: "A1.4" },
{ front: "to please", back: "gefallen", lesson: "A1.4" },	{ front: "have pleased", back: "haben gefallen", lesson: "A1.7" },
{ front: "the color", back: "die Farbe", lesson: "A1.4" },	{ front: "the colors", back: "die Farben", lesson: "A1.4" },
{ front: "to find", back: "finden", lesson: "A1.4" },	{ front: "have found", back: "haben gefunden", lesson: "A1.7" },
{ front: "whole / very / quite", back: "ganz", lesson: "A1.4" },	
{ front: "modern", back: "modern", lesson: "A1.4" },	
{ front: "black", back: "schwarz", lesson: "A1.4" },	
{ front: "gray", back: "grau", lesson: "A1.4" },	
{ front: "white", back: "weiß", lesson: "A1.4" },	
{ front: "green", back: "grün", lesson: "A1.4" },	
{ front: "brown", back: "braun", lesson: "A1.4" },	
{ front: "blue", back: "blau", lesson: "A1.4" },	
{ front: "red", back: "rot", lesson: "A1.4" },	
{ front: "yellow", back: "gelb", lesson: "A1.4" },	
{ front: "light- (color)", back: "hell-", lesson: "A1.4" },	
{ front: "dark- (color)", back: "dunkel-", lesson: "A1.4" },	
{ front: "the centimeter", back: "der Zentimeter", lesson: "A1.4" },	{ front: "the centimeters", back: "die Zentimeter", lesson: "A1.4" },
{ front: "times (×) / once / just", back: "mal", lesson: "A1.4" },	
{ front: "the mobile phone", back: "das Handy", lesson: "A1.4" },	{ front: "the mobile phones", back: "die Handys", lesson: "A1.4" },
{ front: "the work / job", back: "die Arbeit", lesson: "A1.4" },	
{ front: "the advertisement", back: "die Anzeige", lesson: "A1.4" },	{ front: "the advertisements", back: "die Anzeigen", lesson: "A1.4" },
{ front: "nice / kind", back: "nett", lesson: "A1.4" },	
{ front: "the married couple", back: "das Ehepaar", lesson: "A1.4" },	{ front: "the married couples", back: "die Ehepaare", lesson: "A1.4" },
{ front: "to search / look for", back: "suchen", lesson: "A1.4" },	{ front: "have searched", back: "haben gesucht", lesson: "A1.7" },
{ front: "the garden", back: "der Garten", lesson: "A1.4" },	{ front: "the gardens", back: "die Gärten", lesson: "A1.4" },
{ front: "to rent out", back: "vermieten", lesson: "A1.4" },	{ front: "have rented out", back: "haben vermietet", lesson: "A1.7" },
{ front: "the apartment", back: "das Apartment", lesson: "A1.4" },	{ front: "the apartments", back: "die Apartments", lesson: "A1.4" },
{ front: "the room / space", back: "der Raum", lesson: "A1.4" },	{ front: "the rooms / spaces", back: "die Räume", lesson: "A1.4" },
{ front: "the floor (level)", back: "der Stock", lesson: "A1.4" },	
{ front: "approximately / about", back: "circa", lesson: "A1.4" },	
{ front: "private", back: "privat", lesson: "A1.4" },	
{ front: "brown", back: "braun", lesson: "A1.4" },	
{ front: "blue", back: "blau", lesson: "A1.4" },	
{ front: "red", back: "rot", lesson: "A1.4" },	
{ front: "yellow", back: "gelb", lesson: "A1.4" },	
{ front: "colors", back: "Farben", lesson: "A1.4" },	
{ front: "from / starting at", back: "ab", lesson: "A1.4" },	
{ front: "immediately / right away", back: "sofort", lesson: "A1.4" },	
{ front: "maximum", back: "maximal", lesson: "A1.4" },	
{ front: "the call", back: "der Anruf", lesson: "A1.4" },	{ front: "the calls", back: "die Anrufe", lesson: "A1.4" },
{ front: "furnished", back: "möbliert", lesson: "A1.4" },	
{ front: "the TV (device)", back: "das TV", lesson: "A1.4" },	{ front: "the TVs", back: "die TVs", lesson: "A1.4" },
{ front: "the garage", back: "die Garage", lesson: "A1.4" },	{ front: "the garages", back: "die Garagen", lesson: "A1.4" },
{ front: "the square meter", back: "der Quadratmeter", lesson: "A1.4" },	{ front: "the square meters", back: "die Quadratmeter", lesson: "A1.4" },
{ front: "only", back: "nur", lesson: "A1.4" },	
{ front: "the rent", back: "die Miete", lesson: "A1.4" },	{ front: "the rents", back: "die Mieten", lesson: "A1.4" },
{ front: "to pay", back: "bezahlen", lesson: "A1.4" },	{ front: "have paid", back: "haben bezahlt", lesson: "A1.7" },
{ front: "to sell", back: "verkaufen", lesson: "A1.4" },	{ front: "have sold", back: "haben verkauft", lesson: "A1.7" },
{ front: "something / some", back: "etwas", lesson: "A1.4" },	
{ front: "the computer", back: "der Computer", lesson: "A1.4" },	{ front: "the computers", back: "die Computer", lesson: "A1.4" },
{ front: "the desk", back: "der Schreibtisch", lesson: "A1.4" },	{ front: "the desks", back: "die Schreibtische", lesson: "A1.4" },
{ front: "today", back: "heute", lesson: "A1.4" },	
{ front: "which …?", back: "welche …?", lesson: "A1.4" },	
{ front: "so / therefore / well then", back: "also", lesson: "A1.4" },	
{ front: "approximately", back: "ungefähr", lesson: "A1.4" },	
{ front: "the meter", back: "der Meter", lesson: "A1.4" },	{ front: "the meters", back: "die Meter", lesson: "A1.4" },
{ front: "long", back: "lang", lesson: "A1.4" },	
{ front: "exact / exactly", back: "genau", lesson: "A1.4" },	
{ front: "to see", back: "sehen", lesson: "A1.4" },	{ front: "have seen", back: "haben gesehen", lesson: "A1.7" },
{ front: "high / tall", back: "hoch", lesson: "A1.4" },	
{ front: "tomorrow", back: "morgen", lesson: "A1.4" },	
{ front: "to do / to make", back: "machen", lesson: "A1.5" },	{ front: "have done / made", back: "haben gemacht", lesson: "A1.7" },
{ front: "the presentation", back: "die Präsentation", lesson: "A1.5" },	{ front: "the presentations", back: "die Präsentationen", lesson: "A1.5" },
{ front: "to have breakfast", back: "frühstücken", lesson: "A1.5" },	{ front: "have had breakfast", back: "haben gefrühstückt", lesson: "A1.7" },
{ front: "to shop", back: "einkaufen", lesson: "A1.5" },	{ front: "have shopped", back: "haben eingekauft", lesson: "A1.7" },
{ front: "to hear / to listen", back: "hören", lesson: "A1.5" },	{ front: "have heard", back: "haben gehört", lesson: "A1.7" },
{ front: "to cook", back: "kochen", lesson: "A1.5" },	{ front: "have cooked", back: "haben gekocht", lesson: "A1.7" },
{ front: "to go for a walk", back: "spazieren gehen", lesson: "A1.5" },	{ front: "have gone for a walk", back: "sein spaziert", lesson: "A1.7" },
{ front: "to tidy up", back: "aufräumen", lesson: "A1.5" },	{ front: "have tidied up", back: "haben aufgeräumt", lesson: "A1.7" },
{ front: "to get up", back: "aufstehen", lesson: "A1.5" },	{ front: "have gotten up", back: "sein aufgestanden", lesson: "A1.7" },
{ front: "to go", back: "gehen", lesson: "A1.5" },	{ front: "have gone", back: "sein gegangen", lesson: "A1.7" },
{ front: "or", back: "oder", lesson: "A1.5" },	
{ front: "tired", back: "müde", lesson: "A1.5" },	
{ front: "to call (on the phone)", back: "anrufen", lesson: "A1.5" },	{ front: "have called", back: "haben angerufen", lesson: "A1.7" },
{ front: "early", back: "früh", lesson: "A1.5" },	
{ front: "the supermarket", back: "der Supermarkt", lesson: "A1.5" },	{ front: "the supermarkets", back: "die Supermärkte", lesson: "A1.5" },
{ front: "to watch TV", back: "fernsehen", lesson: "A1.5" },	{ front: "have watched TV", back: "haben ferngesehen", lesson: "A1.7" },
{ front: "with", back: "mit", lesson: "A1.5" },	
{ front: "to work", back: "arbeiten", lesson: "A1.5" },	{ front: "have worked", back: "haben gearbeitet", lesson: "A1.7" },
{ front: "long (time)", back: "lange", lesson: "A1.5" },	
{ front: "to play", back: "spielen", lesson: "A1.5" },	{ front: "have played", back: "haben gespielt", lesson: "A1.7" },
{ front: "to eat", back: "essen", lesson: "A1.5" },	{ front: "have eaten", back: "haben gegessen", lesson: "A1.7" },
{ front: "gladly / like to", back: "gern", lesson: "A1.5" },	
{ front: "late", back: "spät", lesson: "A1.5" },	
{ front: "already", back: "schon", lesson: "A1.5" },	
{ front: "only / just", back: "erst", lesson: "A1.5" },	
{ front: "the quarter (time or district)", back: "das Viertel", lesson: "A1.5" },	{ front: "the quarters", back: "die Viertel", lesson: "A1.5" },
{ front: "before / to (time)", back: "vor", lesson: "A1.5" },	
{ front: "after / past (time)", back: "nach", lesson: "A1.5" },	
{ front: "half (past)", back: "halb", lesson: "A1.5" },	
{ front: "the clock / o’clock", back: "die Uhr", lesson: "A1.5" },	{ front: "the clocks", back: "die Uhren", lesson: "A1.5" },
{ front: "shortly / briefly", back: "kurz", lesson: "A1.5" },	
{ front: "soon / right away", back: "gleich", lesson: "A1.5" },	
{ front: "the intensive course", back: "der Intensivkurs", lesson: "A1.5" },	{ front: "the intensive courses", back: "die Intensivkurse", lesson: "A1.5" },
{ front: "to begin", back: "anfangen", lesson: "A1.5" },	{ front: "have begun", back: "haben angefangen", lesson: "A1.7" },
{ front: "on the (with days)", back: "am", lesson: "A1.5" },	
{ front: "Monday", back: "der Montag", lesson: "A1.5" },	{ front: "Mondays", back: "die Montage", lesson: "A1.5" },
{ front: "Friday", back: "der Freitag", lesson: "A1.5" },	{ front: "Fridays", back: "die Freitage", lesson: "A1.5" },
{ front: "Thursday", back: "der Donnerstag", lesson: "A1.5" },	{ front: "Thursdays", back: "die Donnerstage", lesson: "A1.5" },
{ front: "Wednesday", back: "der Mittwoch", lesson: "A1.5" },	{ front: "Wednesdays", back: "die Mittwoche", lesson: "A1.5" },
{ front: "Tuesday", back: "der Dienstag", lesson: "A1.5" },	{ front: "Tuesdays", back: "die Dienstage", lesson: "A1.5" },
{ front: "when", back: "wann", lesson: "A1.5" },	
{ front: "at (with time)", back: "um", lesson: "A1.5" },	
{ front: "to end / to finish", back: "enden", lesson: "A1.5" },	{ front: "have ended", back: "haben geendet", lesson: "A1.7" },
{ front: "from … to …", back: "von … bis …", lesson: "A1.5" },	
{ front: "the party", back: "die Party", lesson: "A1.5" },	{ front: "the parties", back: "die Partys", lesson: "A1.5" },
{ front: "the time", back: "die Zeit", lesson: "A1.5" },	{ front: "the times", back: "die Zeiten", lesson: "A1.5" },
{ front: "the football / soccer", back: "der Fußball", lesson: "A1.5" },	
{ front: "Saturday", back: "der Samstag", lesson: "A1.5" },	{ front: "Saturdays", back: "die Samstage", lesson: "A1.5" },
{ front: "Sunday", back: "der Sonntag", lesson: "A1.5" },	{ front: "Sundays", back: "die Sonntage", lesson: "A1.5" },
{ front: "the homework", back: "die Hausaufgabe", lesson: "A1.5" },	{ front: "the homework (plural)", back: "die Hausaufgaben", lesson: "A1.5" },
{ front: "the mom", back: "die Mama", lesson: "A1.5" },	{ front: "the moms", back: "die Mamas", lesson: "A1.5" },
{ front: "to sleep", back: "schlafen", lesson: "A1.5" },	{ front: "have slept", back: "haben geschlafen", lesson: "A1.7" },
{ front: "the weekend", back: "das Wochenende", lesson: "A1.5" },	{ front: "the weekends", back: "die Wochenenden", lesson: "A1.5" },
{ front: "next", back: "nächst-", lesson: "A1.5" },	
{ front: "the week", back: "die Woche", lesson: "A1.5" },	{ front: "the weeks", back: "die Wochen", lesson: "A1.5" },
{ front: "the noon", back: "der Mittag", lesson: "A1.5" },	{ front: "the noons", back: "die Mittage", lesson: "A1.5" },
{ front: "the morning", back: "der Morgen", lesson: "A1.5" },	{ front: "the mornings", back: "die Morgen", lesson: "A1.5" },
{ front: "the evening", back: "der Abend", lesson: "A1.5" },	{ front: "the evenings", back: "die Abende", lesson: "A1.5" },
{ front: "the afternoon", back: "der Nachmittag", lesson: "A1.5" },	{ front: "the afternoons", back: "die Nachmittage", lesson: "A1.5" },
{ front: "the morning (before noon)", back: "der Vormittag", lesson: "A1.5" },	{ front: "the late mornings", back: "die Vormittage", lesson: "A1.5" },
{ front: "the night", back: "die Nacht", lesson: "A1.5" },	{ front: "the nights", back: "die Nächte", lesson: "A1.5" },
{ front: "the cinema", back: "das Kino", lesson: "A1.5" },	{ front: "the cinemas", back: "die Kinos", lesson: "A1.5" },
{ front: "the sport", back: "der Sport", lesson: "A1.5" },	
{ front: "to drink", back: "trinken", lesson: "A1.5" },	{ front: "have drunk", back: "haben getrunken", lesson: "A1.7" },
{ front: "the pizza", back: "die Pizza", lesson: "A1.5" },	{ front: "the pizzas", back: "die Pizzen", lesson: "A1.5" },
{ front: "to chat", back: "chatten", lesson: "A1.5" },	{ front: "have chatted", back: "haben gechattet", lesson: "A1.7" },
{ front: "open / opened", back: "geöffnet", lesson: "A1.5" },	
{ front: "the appointment", back: "der Termin", lesson: "A1.5" },	{ front: "the appointments", back: "die Termine", lesson: "A1.5" },
{ front: "the kindergarten", back: "der Kindergarten", lesson: "A1.5" },	{ front: "the kindergartens", back: "die Kindergärten", lesson: "A1.5" },
{ front: "the store / shop / business", back: "das Geschäft", lesson: "A1.5" },	{ front: "the stores", back: "die Geschäfte", lesson: "A1.5" },
{ front: "the library", back: "die Bibliothek", lesson: "A1.5" },	{ front: "the libraries", back: "die Bibliotheken", lesson: "A1.5" },
{ front: "closed", back: "geschlossen", lesson: "A1.5" },	
{ front: "to open", back: "öffnen", lesson: "A1.5" },	{ front: "have opened", back: "haben geöffnet", lesson: "A1.7" },
{ front: "to close", back: "schließen", lesson: "A1.5" },	{ front: "have closed", back: "haben geschlossen", lesson: "A1.7" },
{ front: "the (medical) practice / office", back: "die Praxis", lesson: "A1.5" },	{ front: "the practices", back: "die Praxen", lesson: "A1.5" },
{ front: "the day", back: "der Tag", lesson: "A1.5" },	{ front: "the days", back: "die Tage", lesson: "A1.5" },
{ front: "every", back: "jed-", lesson: "A1.5" },	
{ front: "the daycare center", back: "die Kita", lesson: "A1.5" },	{ front: "the daycare centers", back: "die Kitas", lesson: "A1.5" },
{ front: "to bring", back: "bringen", lesson: "A1.5" },	{ front: "have brought", back: "haben gebracht", lesson: "A1.7" },
{ front: "to pick up", back: "abholen", lesson: "A1.5" },	{ front: "have picked up", back: "haben abgeholt", lesson: "A1.7" },
{ front: "more", back: "mehr", lesson: "A1.5" },	
{ front: "the example", back: "das Beispiel", lesson: "A1.5" },	{ front: "the examples", back: "die Beispiele", lesson: "A1.5" },
{ front: "for example", back: "zum Beispiel", lesson: "A1.5" },	
{ front: "again", back: "wieder", lesson: "A1.5" },	
{ front: "the (male) friend", back: "der Freund", lesson: "A1.5" },	{ front: "the (male) friends", back: "die Freunde", lesson: "A1.5" },
{ front: "the (female) friend", back: "die Freundin", lesson: "A1.5" },	{ front: "the (female) friends", back: "die Freundinnen", lesson: "A1.5" },
{ front: "to ask", back: "fragen", lesson: "A1.5" },	{ front: "have asked", back: "haben gefragt", lesson: "A1.7" },
{ front: "to answer", back: "antworten", lesson: "A1.5" },	{ front: "have answered", back: "haben geantwortet", lesson: "A1.7" },
{ front: "totally / completely", back: "total", lesson: "A1.5" },	
{ front: "the excursion / trip", back: "der Ausflug", lesson: "A1.6" },	{ front: "the excursions / trips", back: "die Ausflüge", lesson: "A1.6" },
{ front: "the car", back: "das Auto", lesson: "A1.6" },	{ front: "the cars", back: "die Autos", lesson: "A1.6" },
{ front: "to hike", back: "wandern", lesson: "A1.6" },	{ front: "have hiked", back: "sein gewandert", lesson: "A1.7" },
{ front: "the picnic", back: "das Picknick", lesson: "A1.6" },	{ front: "the picnics", back: "die Picknicks", lesson: "A1.6" },
{ front: "the guitar", back: "die Gitarre", lesson: "A1.6" },	{ front: "the guitars", back: "die Gitarren", lesson: "A1.6" },
{ front: "to talk on the phone", back: "telefonieren", lesson: "A1.6" },	{ front: "have talked on the phone", back: "haben telefoniert", lesson: "A1.7" },
{ front: "the weather", back: "das Wetter", lesson: "A1.6" },	
{ front: "the sun", back: "die Sonne", lesson: "A1.6" },	
{ front: "to shine", back: "scheinen", lesson: "A1.6" },	{ front: "have shone", back: "haben geschienen", lesson: "A1.7" },
{ front: "to rain", back: "regnen", lesson: "A1.6" },	{ front: "have rained", back: "haben geregnet", lesson: "A1.7" },
{ front: "much / many", back: "viel-", lesson: "A1.6" },	
{ front: "the cloud", back: "die Wolke", lesson: "A1.6" },	{ front: "the clouds", back: "die Wolken", lesson: "A1.6" },
{ front: "to start / to leave", back: "los (losgehen)", lesson: "A1.6" },	
{ front: "to forget", back: "vergessen", lesson: "A1.6" },	{ front: "have forgotten", back: "haben vergessen", lesson: "A1.7" },
{ front: "the thirst", back: "der Durst", lesson: "A1.6" },	
{ front: "the degree (temperature)", back: "das Grad", lesson: "A1.6" },	
{ front: "warm", back: "warm", lesson: "A1.6" },	
{ front: "windy", back: "windig", lesson: "A1.6" },	
{ front: "cold", back: "kalt", lesson: "A1.6" },	
{ front: "to snow", back: "schneien", lesson: "A1.6" },	{ front: "have snowed", back: "haben geschneit", lesson: "A1.7" },
{ front: "cloudy / overcast", back: "bewölkt", lesson: "A1.6" },	
{ front: "the weather report", back: "der Wetterbericht", lesson: "A1.6" },	{ front: "the weather reports", back: "die Wetterberichte", lesson: "A1.6" },
{ front: "the middle / center", back: "die Mitte", lesson: "A1.6" },	
{ front: "everywhere", back: "überall", lesson: "A1.6" },	
{ front: "the temperature", back: "die Temperatur", lesson: "A1.6" },	{ front: "the temperatures", back: "die Temperaturen", lesson: "A1.6" },
{ front: "to rise", back: "steigen", lesson: "A1.6" },	{ front: "have risen", back: "sein gestiegen", lesson: "A1.7" },
{ front: "sunny", back: "sonnig", lesson: "A1.6" },	
{ front: "light / easy", back: "leicht", lesson: "A1.6" },	
{ front: "to stay", back: "bleiben", lesson: "A1.6" },	{ front: "have stayed", back: "sein geblieben", lesson: "A1.7" },
{ front: "the rain", back: "der Regen", lesson: "A1.6" },	
{ front: "the snow", back: "der Schnee", lesson: "A1.6" },	
{ front: "plus", back: "plus", lesson: "A1.6" },	
{ front: "minus", back: "minus", lesson: "A1.6" },	
{ front: "the radio", back: "das Radio", lesson: "A1.6" },	{ front: "the radios", back: "die Radios", lesson: "A1.6" },
{ front: "the internet", back: "das Internet", lesson: "A1.6" },	
{ front: "the summer", back: "der Sommer", lesson: "A1.6" },	{ front: "the summers", back: "die Sommer", lesson: "A1.6" },
{ front: "hot", back: "heiß", lesson: "A1.6" },	
{ front: "the spring", back: "der Frühling", lesson: "A1.6" },	{ front: "the springs", back: "die Frühlinge", lesson: "A1.6" },
{ front: "the autumn / fall", back: "der Herbst", lesson: "A1.6" },	{ front: "the autumns", back: "die Herbste", lesson: "A1.6" },
{ front: "bad", back: "schlecht", lesson: "A1.6" },	
{ front: "the winter", back: "der Winter", lesson: "A1.6" },	{ front: "the winters", back: "die Winter", lesson: "A1.6" },
{ front: "the wind", back: "der Wind", lesson: "A1.6" },	{ front: "the winds", back: "die Winde", lesson: "A1.6" },
{ front: "pleasant / comfortable", back: "angenehm", lesson: "A1.6" },	
{ front: "the menu", back: "die Speisekarte", lesson: "A1.6" },	{ front: "the menus", back: "die Speisekarten", lesson: "A1.6" },
{ front: "the hamburger", back: "der Hamburger", lesson: "A1.6" },	{ front: "the hamburgers", back: "die Hamburger", lesson: "A1.6" },
{ front: "the dish / meal", back: "die Speise", lesson: "A1.6" },	{ front: "the dishes", back: "die Speisen", lesson: "A1.6" },
{ front: "the French fries", back: "die Pommes frites", lesson: "A1.6" },	
{ front: "the portion / serving", back: "die Portion", lesson: "A1.6" },	{ front: "the portions", back: "die Portionen", lesson: "A1.6" },
{ front: "the ketchup", back: "der Ketchup", lesson: "A1.6" },	{ front: "the ketchups", back: "die Ketchups", lesson: "A1.6" },
{ front: "the salad", back: "der Salat", lesson: "A1.6" },	{ front: "the salads", back: "die Salate", lesson: "A1.6" },
{ front: "the ham", back: "der Schinken", lesson: "A1.6" },	{ front: "the hams", back: "die Schinken", lesson: "A1.6" },
{ front: "the drink / beverage", back: "das Getränk", lesson: "A1.6" },	{ front: "the drinks", back: "die Getränke", lesson: "A1.6" },
{ front: "the cola", back: "die Cola", lesson: "A1.6" },	{ front: "the colas", back: "die Colas", lesson: "A1.6" },
{ front: "but / however / after all", back: "doch", lesson: "A1.6" },	
{ front: "rather / prefer to", back: "lieber", lesson: "A1.6" },	
{ front: "to take", back: "nehmen", lesson: "A1.6" },	{ front: "have taken", back: "haben genommen", lesson: "A1.7" },
{ front: "why", back: "warum", lesson: "A1.6" },	
{ front: "the dog", back: "der Hund", lesson: "A1.6" },	{ front: "the dogs", back: "die Hunde", lesson: "A1.6" },
{ front: "the ice / ice cream", back: "das Eis", lesson: "A1.6" },	
{ front: "to dance", back: "tanzen", lesson: "A1.6" },	{ front: "have danced", back: "haben getanzt", lesson: "A1.7" },
{ front: "to swim", back: "schwimmen", lesson: "A1.6" },	{ front: "have swum", back: "sein geschwommen", lesson: "A1.7" },
{ front: "to meet", back: "treffen", lesson: "A1.6" },	{ front: "have met", back: "haben getroffen", lesson: "A1.7" },
{ front: "the bicycle", back: "das Fahrrad", lesson: "A1.6" },	{ front: "the bicycles", back: "die Fahrräder", lesson: "A1.6" },
{ front: "to drive / to ride", back: "fahren", lesson: "A1.6" },	{ front: "have driven / ridden", back: "sein gefahren", lesson: "A1.7" },
{ front: "to grill / barbecue", back: "grillen", lesson: "A1.6" },	{ front: "have grilled", back: "haben gegrillt", lesson: "A1.7" },
{ front: "the free time", back: "die Freizeit", lesson: "A1.6" },	
{ front: "the hobby", back: "das Hobby", lesson: "A1.6" },	{ front: "the hobbies", back: "die Hobbys", lesson: "A1.6" },
{ front: "to read", back: "lesen", lesson: "A1.6" },	{ front: "have read", back: "haben gelesen", lesson: "A1.7" },
{ front: "the crime novel / thriller", back: "der Krimi", lesson: "A1.6" },	{ front: "the crime novels", back: "die Krimis", lesson: "A1.6" },
{ front: "favorite- (prefix)", back: "Lieblings-", lesson: "A1.6" },	
{ front: "the film / movie", back: "der Film", lesson: "A1.6" },	{ front: "the films / movies", back: "die Filme", lesson: "A1.6" },
{ front: "important", back: "wichtig", lesson: "A1.6" },	
{ front: "the grill / barbecue", back: "der Grill", lesson: "A1.6" },	{ front: "the grills", back: "die Grills", lesson: "A1.6" },
{ front: "to collect", back: "sammeln", lesson: "A1.6" },	{ front: "have collected", back: "haben gesammelt", lesson: "A1.7" },
{ front: "the profession / job", back: "der Beruf", lesson: "A1.6" },	{ front: "the professions", back: "die Berufe", lesson: "A1.6" },
{ front: "the photo", back: "das Foto", lesson: "A1.6" },	{ front: "the photos", back: "die Fotos", lesson: "A1.6" },
{ front: "especially / particularly", back: "besonders", lesson: "A1.6" },	
{ front: "to photograph", back: "fotografieren", lesson: "A1.6" },	{ front: "have photographed", back: "haben fotografiert", lesson: "A1.7" },
{ front: "the fun", back: "der Spaß", lesson: "A1.6" },	
{ front: "the smartphone", back: "das Smartphone", lesson: "A1.6" },	{ front: "the smartphones", back: "die Smartphones", lesson: "A1.6" },
{ front: "stupid / silly", back: "dumm", lesson: "A1.6" },	
{ front: "often", back: "oft", lesson: "A1.6" },	
{ front: "to mean / to think", back: "meinen", lesson: "A1.6" },	{ front: "have thought / meant", back: "haben gemeint", lesson: "A1.7" },
{ front: "the dice / cube", back: "der Würfel", lesson: "A1.6" },	{ front: "the dice / cubes", back: "die Würfel", lesson: "A1.6" },
{ front: "the game", back: "das Spiel", lesson: "A1.6" },	{ front: "the games", back: "die Spiele", lesson: "A1.6" },
{ front: "unfortunately", back: "leider", lesson: "A1.6" },	
{ front: "the problem", back: "das Problem", lesson: "A1.6" },	{ front: "the problems", back: "die Probleme", lesson: "A1.6" },
{ front: "always", back: "immer", lesson: "A1.6" },	
{ front: "maybe / perhaps", back: "vielleicht", lesson: "A1.6" },	
{ front: "simple / easy", back: "einfach", lesson: "A1.6" },	
{ front: "fast / quickly", back: "schnell", lesson: "A1.6" },	
{ front: "the sun", back: "die Sonne", lesson: "A1.6" },	{ front: "the suns", back: "die Sonnen", lesson: "A1.6" },
{ front: "It is sunny.", back: "Es ist sonnig.", lesson: "A1.6" },	
{ front: "the rain", back: "der Regen", lesson: "A1.6" },	
{ front: "It is raining.", back: "Es regnet.", lesson: "A1.6" },	
{ front: "the cloud", back: "die Wolke", lesson: "A1.6" },	{ front: "the clouds", back: "die Wolken", lesson: "A1.6" },
{ front: "it is cloudy", back: "es ist bewölkt", lesson: "A1.6" },	
{ front: "the snow", back: "der Schnee", lesson: "A1.6" },	
{ front: "it is snowing", back: "es schneit", lesson: "A1.6" },	
{ front: "the wind", back: "der Wind", lesson: "A1.6" },	{ front: "the winds", back: "die Winde", lesson: "A1.6" },
{ front: "it is windy", back: "es ist windig", lesson: "A1.6" },	
{ front: "it is cold", back: "es ist kalt", lesson: "A1.6" },	
{ front: "it is warm", back: "es ist warm", lesson: "A1.6" },	
{ front: "great / excellent", back: "prima", lesson: "A1.7" },	
{ front: "the team", back: "das Team", lesson: "A1.7" },	{ front: "the teams", back: "die Teams", lesson: "A1.7" },
{ front: "to wake (someone) up", back: "wecken", lesson: "A1.7" },	{ front: "have woken (someone) up", back: "haben geweckt", lesson: "A1.7" },
{ front: "the breakfast", back: "das Frühstück", lesson: "A1.7" },	{ front: "the breakfasts", back: "die Frühstücke", lesson: "A1.7" },
{ front: "ready / finished", back: "fertig", lesson: "A1.7" },	
{ front: "to be going on", back: "los sein", lesson: "A1.7" },	
{ front: "to write", back: "schreiben", lesson: "A1.7" },	{ front: "have written", back: "haben geschrieben", lesson: "A1.7" },
{ front: "mathematics", back: "die Mathematik", lesson: "A1.7" },	
{ front: "the test", back: "der Test", lesson: "A1.7" },	{ front: "the tests", back: "die Tests", lesson: "A1.7" },
{ front: "punctual / on time", back: "pünktlich", lesson: "A1.7" },	
{ front: "under no/every circumstance", back: "auf keinen/jeden Fall", lesson: "A1.7" },	
{ front: "to taste", back: "schmecken", lesson: "A1.7" },	{ front: "have tasted", back: "haben geschmeckt", lesson: "A1.7" },
{ front: "(to) home", back: "nach Hause", lesson: "A1.7" },	
{ front: "the school", back: "die Schule", lesson: "A1.7" },	{ front: "the schools", back: "die Schulen", lesson: "A1.7" },
{ front: "to be able to / can", back: "können", lesson: "A1.7" },	{ front: "have been able to", back: "haben gekonnt", lesson: "A1.7" },
{ front: "sick / ill", back: "krank", lesson: "A1.7" },	
{ front: "the (male) doctor", back: "der Arzt", lesson: "A1.7" },	{ front: "the doctors", back: "die Ärzte", lesson: "A1.7" },
{ front: "the (female) doctor", back: "die Ärztin", lesson: "A1.7" },	{ front: "the doctors", back: "die Ärztinnen", lesson: "A1.7" },
{ front: "to bake", back: "backen", lesson: "A1.7" },	{ front: "have baked", back: "haben gebacken", lesson: "A1.7" },
{ front: "to sing", back: "singen", lesson: "A1.7" },	{ front: "have sung", back: "haben gesungen", lesson: "A1.7" },
{ front: "to ride (a horse)", back: "reiten", lesson: "A1.7" },	{ front: "have ridden", back: "sein geritten", lesson: "A1.7" },
{ front: "the piano", back: "das Klavier", lesson: "A1.7" },	{ front: "the pianos", back: "die Klaviere", lesson: "A1.7" },
{ front: "to paint / to draw", back: "malen", lesson: "A1.7" },	{ front: "have painted", back: "haben gemalt", lesson: "A1.7" },
{ front: "the ski", back: "der Ski", lesson: "A1.7" },	{ front: "the skis", back: "die Skier", lesson: "A1.7" },
{ front: "(to play) tennis", back: "das Tennis (spielen)", lesson: "A1.7" },	
{ front: "to want", back: "wollen", lesson: "A1.7" },	{ front: "have wanted", back: "haben gewollt", lesson: "A1.7" },
{ front: "finally", back: "endlich", lesson: "A1.7" },	
{ front: "the song", back: "das Lied", lesson: "A1.7" },	{ front: "the songs", back: "die Lieder", lesson: "A1.7" },
{ front: "to practice", back: "üben", lesson: "A1.7" },	{ front: "have practiced", back: "haben geübt", lesson: "A1.7" },
{ front: "the text", back: "der Text", lesson: "A1.7" },	{ front: "the texts", back: "die Texte", lesson: "A1.7" },
{ front: "the exercise", back: "die Übung", lesson: "A1.7" },	{ front: "the exercises", back: "die Übungen", lesson: "A1.7" },
{ front: "the letter", back: "der Brief", lesson: "A1.7" },	{ front: "the letters", back: "die Briefe", lesson: "A1.7" },
{ front: "the dictation", back: "das Diktat", lesson: "A1.7" },	{ front: "the dictations", back: "die Diktate", lesson: "A1.7" },
{ front: "the book", back: "das Buch", lesson: "A1.7" },	{ front: "the books", back: "die Bücher", lesson: "A1.7" },
{ front: "to play guitar", back: "Gitarre spielen", lesson: "A1.7" },	{ front: "have played guitar", back: "haben Gitarre gespielt", lesson: "A1.7" },
{ front: "to ride a bicycle", back: "Fahrrad fahren", lesson: "A1.7" },	{ front: "have ridden a bike", back: "sein Fahrrad gefahren", lesson: "A1.7" },
{ front: "to meet friends", back: "Freunde treffen", lesson: "A1.7" },	{ front: "have met", back: "haben getroffen", lesson: "A1.7" },
{ front: "to ski", back: "Ski fahren", lesson: "A1.7" },	{ front: "have skied", back: "sein Ski gefahren", lesson: "A1.7" },
{ front: "to play tennis", back: "Tennis spielen", lesson: "A1.7" },	{ front: "have played tennis", back: "haben Tennis gespielt", lesson: "A1.7" },
{ front: "the story / history", back: "die Geschichte", lesson: "A1.8" },	{ front: "the stories", back: "die Geschichten", lesson: "A1.8" },
{ front: "the hospital", back: "das Krankenhaus", lesson: "A1.8" },	{ front: "the hospitals", back: "die Krankenhäuser", lesson: "A1.8" },
{ front: "the interview", back: "das Interview", lesson: "A1.8" },	{ front: "the interviews", back: "die Interviews", lesson: "A1.8" },
{ front: "the newspaper", back: "die Zeitung", lesson: "A1.8" },	{ front: "the newspapers", back: "die Zeitungen", lesson: "A1.8" },
{ front: "the television / TV", back: "das Fernsehen", lesson: "A1.8" },	
{ front: "the training / education", back: "die Ausbildung", lesson: "A1.8" },	{ front: "the trainings", back: "die Ausbildungen", lesson: "A1.8" },
{ front: "the (male) boss", back: "der Chef", lesson: "A1.8" },	{ front: "the bosses", back: "die Chefs", lesson: "A1.8" },
{ front: "the (female) boss", back: "die Chefin", lesson: "A1.8" },	{ front: "the bosses", back: "die Chefinnen", lesson: "A1.8" },
{ front: "the (male) patient", back: "der Patient", lesson: "A1.8" },	{ front: "the patients", back: "die Patienten", lesson: "A1.8" },
{ front: "the (female) patient", back: "die Patientin", lesson: "A1.8" },	{ front: "the patients", back: "die Patientinnen", lesson: "A1.8" },
{ front: "the (male) janitor / caretaker", back: "der Hausmeister", lesson: "A1.8" },	{ front: "the caretakers", back: "die Hausmeister", lesson: "A1.8" },
{ front: "the (female) janitor", back: "die Hausmeisterin", lesson: "A1.8" },	{ front: "the caretakers", back: "die Hausmeisterinnen", lesson: "A1.8" },
{ front: "the (male) journalist", back: "der Journalist", lesson: "A1.8" },	{ front: "the journalists", back: "die Journalisten", lesson: "A1.8" },
{ front: "the (female) journalist", back: "die Journalistin", lesson: "A1.8" },	{ front: "the journalists", back: "die Journalistinnen", lesson: "A1.8" },
{ front: "the topic / theme", back: "das Thema", lesson: "A1.8" },	{ front: "the topics", back: "die Themen", lesson: "A1.8" },
{ front: "the (male) mechatronic technician", back: "der Mechatroniker", lesson: "A1.8" },	{ front: "the technicians", back: "die Mechatroniker", lesson: "A1.8" },
{ front: "the (female) mechatronic technician", back: "die Mechatronikerin", lesson: "A1.8" },	{ front: "the technicians", back: "die Mechatronikerinnen", lesson: "A1.8" },
{ front: "the househusband", back: "der Hausmann", lesson: "A1.8" },	{ front: "the househusbands", back: "die Hausmänner", lesson: "A1.8" },
{ front: "the housewife", back: "die Hausfrau", lesson: "A1.8" },	{ front: "the housewives", back: "die Hausfrauen", lesson: "A1.8" },
{ front: "the (male) police officer", back: "der Polizist", lesson: "A1.8" },	{ front: "the officers", back: "die Polizisten", lesson: "A1.8" },
{ front: "the (female) police officer", back: "die Polizistin", lesson: "A1.8" },	{ front: "the officers", back: "die Polizistinnen", lesson: "A1.8" },
{ front: "the (male) nurse", back: "der Krankenpfleger", lesson: "A1.8" },	{ front: "the nurses", back: "die Krankenschwestern", lesson: "A1.8" },
{ front: "the (female) nurse", back: "die Krankenschwester", lesson: "A1.8" },	{ front: "the nurses", back: "die Krankenschwestern", lesson: "A1.8" },
{ front: "professionally", back: "beruflich", lesson: "A1.8" },	
{ front: "the (male) pupil", back: "der Schüler", lesson: "A1.8" },	{ front: "the pupils", back: "die Schüler", lesson: "A1.8" },
{ front: "the (female) pupil", back: "die Schülerin", lesson: "A1.8" },	{ front: "the pupils", back: "die Schülerinnen", lesson: "A1.8" },
{ front: "the (male) student", back: "der Student", lesson: "A1.8" },	{ front: "the students", back: "die Studenten", lesson: "A1.8" },
{ front: "the (female) student", back: "die Studentin", lesson: "A1.8" },	{ front: "the students", back: "die Studentinnen", lesson: "A1.8" },
{ front: "to study (university)", back: "studieren", lesson: "A1.8" },	{ front: "have studied", back: "haben studiert", lesson: "A1.8" },
{ front: "the job", back: "der Job", lesson: "A1.8" },	{ front: "the jobs", back: "die Jobs", lesson: "A1.8" },
{ front: "the position / job", back: "die Stelle", lesson: "A1.8" },	{ front: "the positions", back: "die Stellen", lesson: "A1.8" },
{ front: "self-employed", back: "selbstständig", lesson: "A1.8" },	
{ front: "employed", back: "berufstätig", lesson: "A1.8" },	
{ front: "unemployed", back: "arbeitslos", lesson: "A1.8" },	
{ front: "currently / at the moment", back: "zurzeit", lesson: "A1.8" },	
{ front: "the (male) taxi driver", back: "der Taxifahrer", lesson: "A1.8" },	{ front: "the drivers", back: "die Taxifahrer", lesson: "A1.8" },
{ front: "the (female) taxi driver", back: "die Taxifahrerin", lesson: "A1.8" },	{ front: "the drivers", back: "die Taxifahrerinnen", lesson: "A1.8" },
{ front: "to last / to take (time)", back: "dauern", lesson: "A1.8" },	{ front: "have lasted", back: "haben gedauert", lesson: "A1.8" },
{ front: "since", back: "seit", lesson: "A1.8" },	
{ front: "the application", back: "die Bewerbung", lesson: "A1.8" },	{ front: "the applications", back: "die Bewerbungen", lesson: "A1.8" },
{ front: "the internship", back: "das Praktikum", lesson: "A1.8" },	{ front: "the internships", back: "die Praktika", lesson: "A1.8" },
{ front: "the department", back: "die Abteilung", lesson: "A1.8" },	{ front: "the departments", back: "die Abteilungen", lesson: "A1.8" },
{ front: "the (male) manager", back: "der Leiter", lesson: "A1.8" },	{ front: "the managers", back: "die Leiter", lesson: "A1.8" },
{ front: "the (female) manager", back: "die Leiterin", lesson: "A1.8" },	{ front: "the managers", back: "die Leiterinnen", lesson: "A1.8" },
{ front: "honored / respected", back: "geehrt", lesson: "A1.8" },	
{ front: "the economy", back: "die Wirtschaft", lesson: "A1.8" },	
{ front: "the diploma / degree", back: "das Diplom", lesson: "A1.8" },	{ front: "the diplomas", back: "die Diplome", lesson: "A1.8" },
{ front: "just / right now", back: "gerade", lesson: "A1.8" },	
{ front: "the office", back: "das Büro", lesson: "A1.8" },	{ front: "the offices", back: "die Büros", lesson: "A1.8" },
{ front: "the information", back: "die Information", lesson: "A1.8" },	{ front: "the information (plural)", back: "die Informationen", lesson: "A1.8" },
{ front: "the greeting", back: "der Gruß", lesson: "A1.8" },	{ front: "the greetings", back: "die Grüße", lesson: "A1.8" },
{ front: "to marry", back: "heiraten", lesson: "A1.8" },	{ front: "have married", back: "haben geheiratet", lesson: "A1.8" },
{ front: "actually / really", back: "eigentlich", lesson: "A1.8" },	
{ front: "later", back: "später", lesson: "A1.8" },	
{ front: "the (male) tour guide", back: "der Reiseführer", lesson: "A1.8" },	{ front: "the guides", back: "die Reiseführer", lesson: "A1.8" },
{ front: "the (female) tour guide", back: "die Reiseführerin", lesson: "A1.8" },	{ front: "the guides", back: "die Reiseführerinnen", lesson: "A1.8" },
{ front: "the (male) tourist", back: "der Tourist", lesson: "A1.8" },	{ front: "the tourists", back: "die Touristen", lesson: "A1.8" },
{ front: "the (female) tourist", back: "die Touristin", lesson: "A1.8" },	{ front: "the tourists", back: "die Touristinnen", lesson: "A1.8" },
{ front: "to show", back: "zeigen", lesson: "A1.8" },	{ front: "have shown", back: "haben gezeigt", lesson: "A1.8" },
{ front: "the work experience", back: "die Berufserfahrung", lesson: "A1.8" },	
{ front: "the café", back: "das Café", lesson: "A1.8" },	{ front: "the cafés", back: "die Cafés", lesson: "A1.8" },
{ front: "the stress", back: "der Stress", lesson: "A1.8" },	
{ front: "sometimes", back: "manchmal", lesson: "A1.8" },	
{ front: "the (male) waiter", back: "der Kellner", lesson: "A1.8" },	{ front: "the waiters", back: "die Kellner", lesson: "A1.8" },
{ front: "the (female) waitress", back: "die Kellnerin", lesson: "A1.8" },	{ front: "the waitresses", back: "die Kellnerinnen", lesson: "A1.8" },
{ front: "the restaurant", back: "das Restaurant", lesson: "A1.8" },	{ front: "the restaurants", back: "die Restaurants", lesson: "A1.8" },
{ front: "the (male) architect", back: "der Architekt", lesson: "A1.8" },	{ front: "the architects", back: "die Architekten", lesson: "A1.8" },
{ front: "the (female) architect", back: "die Architektin", lesson: "A1.8" },	{ front: "the architects", back: "die Architektinnen", lesson: "A1.8" },
{ front: "the (male) cook", back: "der Koch", lesson: "A1.8" },	{ front: "the cooks", back: "die Köche", lesson: "A1.8" },
{ front: "the (female) cook", back: "die Köchin", lesson: "A1.8" },	{ front: "the cooks", back: "die Köchinnen", lesson: "A1.8" },
{ front: "the (male) worker", back: "der Arbeiter", lesson: "A1.8" },	{ front: "the workers", back: "die Arbeiter", lesson: "A1.8" },
{ front: "the (female) worker", back: "die Arbeiterin", lesson: "A1.8" },	{ front: "the workers", back: "die Arbeiterinnen", lesson: "A1.8" },
{ front: "little / few", back: "wenig", lesson: "A1.8" },	
{ front: "the (male) colleague", back: "der Kollege", lesson: "A1.8" },	{ front: "the colleagues", back: "die Kollegen", lesson: "A1.8" },
{ front: "the (female) colleague", back: "die Kollegin", lesson: "A1.8" },	{ front: "the colleagues", back: "die Kolleginnen", lesson: "A1.8" },
{ front: "the foreign countries / abroad", back: "das Ausland", lesson: "A1.8" },	
{ front: "other / different", back: "ander-", lesson: "A1.8" },	
{ front: "the workplace", back: "der Arbeitsplatz", lesson: "A1.8" },	{ front: "the workplaces", back: "die Arbeitsplätze", lesson: "A1.8" },
{ front: "the dream", back: "der Traum", lesson: "A1.8" },	{ front: "the dreams", back: "die Träume", lesson: "A1.8" },
{ front: "dream- (prefix, e.g. dream job)", back: "traum-", lesson: "A1.8" },	
{ front: "during the day", back: "tagsüber", lesson: "A1.8" },	
{ front: "three times", back: "dreimal", lesson: "A1.8" },	
{ front: "to receive / get", back: "bekommen", lesson: "A1.8" },	{ front: "have received", back: "haben bekommen", lesson: "A1.8" },
{ front: "the (male) secretary", back: "der Sekretär", lesson: "A1.8" },	{ front: "the secretaries", back: "die Sekretäre", lesson: "A1.8" },
{ front: "the (female) secretary", back: "die Sekretärin", lesson: "A1.8" },	{ front: "the secretaries", back: "die Sekretärinnen", lesson: "A1.8" },
{ front: "the university", back: "die Universität", lesson: "A1.8" },	{ front: "the universities", back: "die Universitäten", lesson: "A1.8" },
{ front: "temporary / fixed-term", back: "befristet", lesson: "A1.8" },	
{ front: "full-time work", back: "die Vollzeit", lesson: "A1.8" },	
{ front: "part-time work", back: "die Teilzeit", lesson: "A1.8" },	
{ front: "all day / full-time", back: "ganztags", lesson: "A1.8" },	
{ front: "half-day / part-time", back: "halbtags", lesson: "A1.8" },	
{ front: "in the mornings", back: "vormittags", lesson: "A1.8" },	
{ front: "in the afternoons", back: "nachmittags", lesson: "A1.8" },	
{ front: "private tutoring", back: "die Nachhilfe", lesson: "A1.8" },	
{ front: "on Mondays", back: "montags", lesson: "A1.8" },	
{ front: "on Thursdays", back: "donnerstags", lesson: "A1.8" },	
{ front: "the (male) senior / elderly person", back: "der Senior", lesson: "A1.8" },	{ front: "the seniors", back: "die Senioren", lesson: "A1.8" },
{ front: "senior- (prefix, e.g. Seniorenheim)", back: "senioren-", lesson: "A1.8" },	
{ front: "the temporary help / assistant", back: "die Aushilfe", lesson: "A1.8" },	{ front: "the assistants", back: "die Aushilfen", lesson: "A1.8" },
{ front: "urgent(ly)", back: "dringend", lesson: "A1.8" },	
{ front: "the service", back: "der Service", lesson: "A1.8" },	
{ front: "in the evenings", back: "abends", lesson: "A1.8" },	
{ front: "on Tuesdays", back: "dienstags", lesson: "A1.8" },	
{ front: "on Wednesdays", back: "mittwochs", lesson: "A1.8" },	
{ front: "on Fridays", back: "freitags", lesson: "A1.8" },	
{ front: "on Sundays", back: "sonntags", lesson: "A1.8" },	
{ front: "to pay", back: "zahlen", lesson: "A1.8" },	{ front: "have paid", back: "haben gezahlt", lesson: "A1.8" },
{ front: "per / for each", back: "pro", lesson: "A1.8" },	
{ front: "the hour", back: "die Stunde", lesson: "A1.8" },	{ front: "the hours", back: "die Stunden", lesson: "A1.8" },
{ front: "the demand / inquiry", back: "die Nachfrage", lesson: "A1.8" },	{ front: "the inquiries / demands", back: "die Nachfragen", lesson: "A1.8" },
{ front: "free / available", back: "frei", lesson: "A1.8" },	
{ front: "each / respectively", back: "jeweils", lesson: "A1.8" },	
{ front: "on Saturdays", back: "samstags", lesson: "A1.8" },	
{ front: "the driver's license", back: "der Führerschein", lesson: "A1.9" },	{ front: "the driver's licenses", back: "die Führerscheine", lesson: "A1.9" },
{ front: "the ticket", back: "das Ticket", lesson: "A1.9" },	{ front: "the tickets", back: "die Tickets", lesson: "A1.9" },
{ front: "the office, the authority", back: "das Amt", lesson: "A1.9" },	{ front: "the offices, the authorities", back: "die Ämter", lesson: "A1.9" },
{ front: "valid", back: "gültig", lesson: "A1.9" },	
{ front: "to rent", back: "mieten", lesson: "A1.9" },	{ front: "have rented", back: "haben gemietet", lesson: "A1.9" },
{ front: "foreign", back: "ausländisch", lesson: "A1.9" },	
{ front: "European", back: "europäisch", lesson: "A1.9" },	
{ front: "the European Union", back: "die Europäische Union", lesson: "A1.9" },	
{ front: "young", back: "jung", lesson: "A1.9" },	
{ front: "the trip", back: "die Fahrt", lesson: "A1.9" },	{ front: "the trips", back: "die Fahrten", lesson: "A1.9" },
{ front: "the ticket", back: "die Fahrkarte", lesson: "A1.9" },	{ front: "the tickets", back: "die Fahrkarten", lesson: "A1.9" },
{ front: "the application", back: "der Antrag", lesson: "A1.9" },	{ front: "the applications", back: "die Anträge", lesson: "A1.9" },
{ front: "must, to have to", back: "müssen", lesson: "A1.9" },	{ front: "have had to", back: "haben gemusst", lesson: "A1.9" },
{ front: "to fill out", back: "ausfüllen", lesson: "A1.9" },	{ front: "have filled out", back: "haben ausgefüllt", lesson: "A1.9" },
{ front: "the ID card", back: "der Ausweis", lesson: "A1.9" },	{ front: "the ID cards", back: "die Ausweise", lesson: "A1.9" },
{ front: "to bring along", back: "mitbringen", lesson: "A1.9" },	{ front: "have brought along", back: "haben mitgebracht", lesson: "A1.9" },
{ front: "the paper", back: "das Papier", lesson: "A1.9" },	{ front: "the papers", back: "die Papiere", lesson: "A1.9" },
{ front: "to sign", back: "unterschreiben", lesson: "A1.9" },	{ front: "have signed", back: "haben unterschrieben", lesson: "A1.9" },
{ front: "cash", back: "bar", lesson: "A1.9" },	
{ front: "the machine", back: "der Automat", lesson: "A1.9" },	{ front: "the machines", back: "die Automaten", lesson: "A1.9" },
{ front: "to function, to work", back: "funktionieren", lesson: "A1.9" },	{ front: "have functioned", back: "haben funktioniert", lesson: "A1.9" },
{ front: "the goal, the destination", back: "das Ziel", lesson: "A1.9" },	{ front: "the goals, the destinations", back: "die Ziele", lesson: "A1.9" },
{ front: "to choose", back: "wählen", lesson: "A1.9" },	{ front: "have chosen", back: "haben gewählt", lesson: "A1.9" },
{ front: "the adult", back: "der Erwachsene / die Erwachsene", lesson: "A1.9" },	{ front: "the adults", back: "die Erwachsenen", lesson: "A1.9" },
{ front: "to select, to choose", back: "auswählen", lesson: "A1.9" },	{ front: "have selected, have chosen", back: "haben ausgewählt", lesson: "A1.9" },
{ front: "one, you (general)", back: "man", lesson: "A1.9" },	
{ front: "first", back: "zuerst", lesson: "A1.9" },	
{ front: "after that, then", back: "danach", lesson: "A1.9" },	
{ front: "then", back: "dann", lesson: "A1.9" },	
{ front: "the end, the conclusion", back: "der Schluss", lesson: "A1.9" },	
{ front: "quiet, soft", back: "leise", lesson: "A1.9" },	
{ front: "to explain", back: "erklären", lesson: "A1.9" },	{ front: "have explained", back: "haben erklärt", lesson: "A1.9" },
{ front: "loud", back: "laut", lesson: "A1.9" },	
{ front: "to turn off, to agree", back: "ausmachen", lesson: "A1.9" },	{ front: "have agreed", back: "haben ausgemacht", lesson: "A1.9" },
{ front: "to listen", back: "zuhören", lesson: "A1.9" },	{ front: "have listened", back: "haben zugehört", lesson: "A1.9" },
{ front: "to get up, to stand up", back: "aufstehen", lesson: "A1.9" },	{ front: "has gotten up", back: "ist aufgestanden", lesson: "A1.9" },
{ front: "to wait", back: "warten", lesson: "A1.9" },	{ front: "have waited", back: "haben gewartet", lesson: "A1.9" },
{ front: "the fee", back: "die Gebühr", lesson: "A1.9" },	{ front: "the fees", back: "die Gebühren", lesson: "A1.9" },
{ front: "the cashier, the checkout", back: "die Kasse", lesson: "A1.9" },	{ front: "the cashiers, the checkouts", back: "die Kassen", lesson: "A1.9" },
{ front: "to laugh", back: "lachen", lesson: "A1.9" },	{ front: "have laughed", back: "haben gelacht", lesson: "A1.9" },
{ front: "the moment", back: "der Moment", lesson: "A1.9" },	{ front: "the moments", back: "die Momente", lesson: "A1.9" },
{ front: "to apply for", back: "beantragen", lesson: "A1.9" },	{ front: "have applied for", back: "haben beantragt", lesson: "A1.9" },
{ front: "to be allowed, may", back: "dürfen", lesson: "A1.9" },	{ front: "have been allowed", back: "haben gedurft", lesson: "A1.9" },
{ front: "attention, caution", back: "Achtung", lesson: "A1.9" },	
{ front: "the cigarette", back: "die Zigarette", lesson: "A1.9" },	{ front: "the cigarettes", back: "die Zigaretten", lesson: "A1.9" },
{ front: "to smoke", back: "rauchen", lesson: "A1.9" },	{ front: "have smoked", back: "haben geraucht", lesson: "A1.9" },
{ front: "slow", back: "langsam", lesson: "A1.9" },	
{ front: "the parking lot", back: "der Parkplatz", lesson: "A1.9" },	{ front: "the parking lots", back: "die Parkplätze", lesson: "A1.9" },
{ front: "to park", back: "parken", lesson: "A1.9" },	{ front: "have parked", back: "haben geparkt", lesson: "A1.9" },
{ front: "allowed, permitted", back: "erlaubt", lesson: "A1.9" },	
{ front: "forbidden", back: "verboten", lesson: "A1.9" },	
{ front: "the luggage", back: "das Gepäck", lesson: "A1.9" },	
{ front: "to hand in, to submit", back: "abgeben", lesson: "A1.9" },	{ front: "have handed in, have submitted", back: "haben abgegeben", lesson: "A1.9" },
{ front: "to take along, to carry", back: "mitnehmen", lesson: "A1.9" },	{ front: "have taken along, have carried", back: "haben mitgenommen", lesson: "A1.9" },
{ front: "alone", back: "allein", lesson: "A1.9" },	
{ front: "the authority, the agency", back: "die Behörde", lesson: "A1.9" },	{ front: "the authorities, the agencies", back: "die Behörden", lesson: "A1.9" },
{ front: "the person", back: "die Person", lesson: "A1.9" },	{ front: "the people", back: "die Personen", lesson: "A1.9" },
{ front: "the birth name", back: "der Geburtsname", lesson: "A1.9" },	{ front: "the birth names", back: "die Geburtsnamen", lesson: "A1.9" },
{ front: "the gender", back: "das Geschlecht", lesson: "A1.9" },	{ front: "the genders", back: "die Geschlechter", lesson: "A1.9" },
{ front: "the foreigner", back: "der Ausländer", lesson: "A1.9" },	{ front: "the foreigners", back: "die Ausländer", lesson: "A1.9" },
{ front: "the foreign woman", back: "die Ausländerin", lesson: "A1.9" },	{ front: "the foreign women", back: "die Ausländerinnen", lesson: "A1.9" },
{ front: "to live separately", back: "getrennt leben", lesson: "A1.9" },	
{ front: "male", back: "männlich", lesson: "A1.9" },	
{ front: "female", back: "weiblich", lesson: "A1.9" },	
{ front: "the relative", back: "der Angehörige / die Angehörige", lesson: "A1.9" },	{ front: "the relatives", back: "die Angehörigen", lesson: "A1.9" },
{ front: "to mean, to signify", back: "bedeuten", lesson: "A1.9" },	{ front: "have meant", back: "haben bedeutet", lesson: "A1.9" },
{ front: "to repeat", back: "wiederholen", lesson: "A1.9" },	{ front: "have repeated", back: "haben wiederholt", lesson: "A1.9" },
{ front: "to understand", back: "verstehen", lesson: "A1.9" },	{ front: "have understood", back: "haben verstanden", lesson: "A1.9" },
{ front: "the language school", back: "die Sprachenschule", lesson: "A1.9" },	{ front: "the language schools", back: "die Sprachenschulen", lesson: "A1.9" },
{ front: "to visit, to attend", back: "besuchen", lesson: "A1.9" },	{ front: "have visited, have attended", back: "haben besucht", lesson: "A1.9" },
{ front: "to help", back: "helfen", lesson: "A1.9" },	{ front: "have helped", back: "haben geholfen", lesson: "A1.9" },
{ front: "the information, the inquiry", back: "die Auskunft", lesson: "A1.9" },	{ front: "the information, the inquiries", back: "die Auskünfte", lesson: "A1.9" },
{ front: "the permission", back: "die Erlaubnis", lesson: "A1.9" },	
{ front: "the explanation", back: "die Erklärung", lesson: "A1.9" },	{ front: "the explanations", back: "die Erklärungen", lesson: "A1.9" },
{ front: "the document", back: "das Dokument", lesson: "A1.9" },	{ front: "the documents", back: "die Dokumente", lesson: "A1.9" },
{ front: "the money", back: "das Geld", lesson: "A1.9" },	
{ front: "enough", back: "genug", lesson: "A1.9" },	
{ front: "the income", back: "das Einkommen", lesson: "A1.9" },	
{ front: "the trip, the journey", back: "die Reise", lesson: "A1.9" },	{ front: "the trips, the journeys", back: "die Reisen", lesson: "A1.9" },
{ front: "the insurance", back: "die Versicherung", lesson: "A1.9" },	{ front: "the insurances", back: "die Versicherungen", lesson: "A1.9" },
{ front: "the embassy", back: "die Botschaft", lesson: "A1.9" },	{ front: "the embassies", back: "die Botschaften", lesson: "A1.9" },
{ front: "the visa", back: "das Visum", lesson: "A1.9" },	{ front: "the visas", back: "die Visa", lesson: "A1.9" },
{ front: "to get, to fetch", back: "holen", lesson: "A1.9" },	{ front: "have gotten, have fetched", back: "haben geholt", lesson: "A1.9" },
{ front: "the employee (male)", back: "der Mitarbeiter", lesson: "A1.9" },	{ front: "the employees (male)", back: "die Mitarbeiter", lesson: "A1.9" },
{ front: "the employee (female)", back: "die Mitarbeiterin", lesson: "A1.9" },	{ front: "the employees (female)", back: "die Mitarbeiterinnen", lesson: "A1.9" },
{ front: "the civil servant (male)", back: "der Beamte", lesson: "A1.9" },	{ front: "the civil servants (male)", back: "die Beamten", lesson: "A1.9" },
{ front: "the civil servant (female)", back: "die Beamtin", lesson: "A1.9" },	{ front: "the civil servants (female)", back: "die Beamtinnen", lesson: "A1.9" },
{ front: "to earn", back: "verdienen", lesson: "A1.9" },	{ front: "have earned", back: "haben verdient", lesson: "A1.9" },
{ front: "the passport", back: "der Pass", lesson: "A1.9" },	{ front: "the passports", back: "die Pässe", lesson: "A1.9" },
{ front: "to travel", back: "reisen", lesson: "A1.9" },	{ front: "has traveled", back: "sein gereist", lesson: "A1.9" },
{ front: "the club", back: "der Klub", lesson: "A1.10" },	{ front: "the clubs", back: "die Klubs", lesson: "A1.10" },
{ front: "emergency room / A&E", back: "die Notaufnahme", lesson: "A1.10" },	{ front: "emergency rooms", back: "die Notaufnahmen", lesson: "A1.10" },
{ front: "the area / field / sector", back: "der Bereich", lesson: "A1.10" },	{ front: "the areas", back: "die Bereiche", lesson: "A1.10" },
{ front: "the tablet / pill", back: "die Tablette", lesson: "A1.10" },	{ front: "the tablets", back: "die Tabletten", lesson: "A1.10" },
{ front: "the eye", back: "das Auge", lesson: "A1.10" },	{ front: "the eyes", back: "die Augen", lesson: "A1.10" },
{ front: "to hurt", back: "weh tun", lesson: "A1.10" },	{ front: "have hurt", back: "haben wehgetan", lesson: "A1.10" },
{ front: "the accident", back: "der Unfall", lesson: "A1.10" },	{ front: "the accidents", back: "die Unfälle", lesson: "A1.10" },
{ front: "the doctor", back: "der Doktor", lesson: "A1.10" },	{ front: "the doctors", back: "die Doktoren", lesson: "A1.10" },
{ front: "the pain", back: "der Schmerz", lesson: "A1.10" },	{ front: "the pains", back: "die Schmerzen", lesson: "A1.10" },
{ front: "should / to be supposed to", back: "sollen", lesson: "A1.10" },	{ front: "have been supposed to", back: "haben gesollt", lesson: "A1.10" },
{ front: "both", back: "beide", lesson: "A1.10" },	
{ front: "funny", back: "lustig", lesson: "A1.10" },	
{ front: "bad / serious", back: "schlimm", lesson: "A1.10" },	
{ front: "to give", back: "geben", lesson: "A1.10" },	{ front: "have given", back: "haben gegeben", lesson: "A1.10" },
{ front: "the idea", back: "die Idee", lesson: "A1.10" },	{ front: "the ideas", back: "die Ideen", lesson: "A1.10" },
{ front: "the leg", back: "das Bein", lesson: "A1.10" },	{ front: "the legs", back: "die Beine", lesson: "A1.10" },
{ front: "the hair", back: "das Haar", lesson: "A1.10" },	{ front: "the hairs", back: "die Haare", lesson: "A1.10" },
{ front: "the ear", back: "das Ohr", lesson: "A1.10" },	{ front: "the ears", back: "die Ohren", lesson: "A1.10" },
{ front: "the arm", back: "der Arm", lesson: "A1.10" },	{ front: "the arms", back: "die Arme", lesson: "A1.10" },
{ front: "the stomach / belly", back: "der Bauch", lesson: "A1.10" },	{ front: "the stomachs", back: "die Bäuche", lesson: "A1.10" },
{ front: "the finger", back: "der Finger", lesson: "A1.10" },	{ front: "the fingers", back: "die Finger", lesson: "A1.10" },
{ front: "the foot", back: "der Fuß", lesson: "A1.10" },	{ front: "the feet", back: "die Füße", lesson: "A1.10" },
{ front: "the neck / throat", back: "der Hals", lesson: "A1.10" },	{ front: "the necks / throats", back: "die Hälse", lesson: "A1.10" },
{ front: "the head", back: "der Kopf", lesson: "A1.10" },	{ front: "the heads", back: "die Köpfe", lesson: "A1.10" },
{ front: "the back", back: "der Rücken", lesson: "A1.10" },	
{ front: "the chest / breast", back: "die Brust", lesson: "A1.10" },	{ front: "the chests / breasts", back: "die Brüste", lesson: "A1.10" },
{ front: "the hand", back: "die Hand", lesson: "A1.10" },	{ front: "the hands", back: "die Hände", lesson: "A1.10" },
{ front: "the nose", back: "die Nase", lesson: "A1.10" },	{ front: "the noses", back: "die Nasen", lesson: "A1.10" },
{ front: "the mouth", back: "der Mund", lesson: "A1.10" },	{ front: "the mouths", back: "die Münder", lesson: "A1.10" },
{ front: "to be", back: "sein", lesson: "A1.10" },	
{ front: "her / their", back: "ihr", lesson: "A1.10" },	
{ front: "the tooth", back: "der Zahn", lesson: "A1.10" },	{ front: "the teeth", back: "die Zähne", lesson: "A1.10" },
{ front: "to inform", back: "informieren", lesson: "A1.10" },	{ front: "have informed", back: "haben informiert", lesson: "A1.10" },
{ front: "our", back: "unser", lesson: "A1.10" },	
{ front: "to be cancelled / to fail", back: "ausfallen", lesson: "A1.10" },	{ front: "has failed / been cancelled", back: "ist ausgefallen", lesson: "A1.10" },
{ front: "the message / news", back: "die Nachricht", lesson: "A1.10" },	{ front: "the messages / news", back: "die Nachrichten", lesson: "A1.10" },
{ front: "the kiss", back: "der Kuss", lesson: "A1.10" },	{ front: "the kisses", back: "die Küsse", lesson: "A1.10" },
{ front: "your (plural, informal)", back: "euer", lesson: "A1.10" },	
{ front: "healthy", back: "gesund", lesson: "A1.10" },	
{ front: "hopefully", back: "hoffentlich", lesson: "A1.10" },	
{ front: "the (male/female) acquaintance", back: "der Bekannte / die Bekannte", lesson: "A1.10" },	{ front: "the acquaintances", back: "die Bekannten / die Bekannten", lesson: "A1.10" },
{ front: "the step", back: "der Schritt", lesson: "A1.10" },	{ front: "the steps", back: "die Schritte", lesson: "A1.10" },
{ front: "a few / some", back: "ein paar", lesson: "A1.10" },	
{ front: "the medicine", back: "die Medizin", lesson: "A1.10" },	
{ front: "calm / quiet", back: "ruhig", lesson: "A1.10" },	
{ front: "the pharmacy", back: "die Apotheke", lesson: "A1.10" },	{ front: "the pharmacies", back: "die Apotheken", lesson: "A1.10" },
{ front: "the fever", back: "das Fieber", lesson: "A1.10" },	
{ front: "the cough", back: "der Husten", lesson: "A1.10" },	
{ front: "the ointment / cream", back: "die Salbe", lesson: "A1.10" },	{ front: "the ointments", back: "die Salben", lesson: "A1.10" },
{ front: "to use", back: "verwenden", lesson: "A1.10" },	{ front: "have used", back: "haben verwendet", lesson: "A1.10" },
{ front: "the health", back: "die Gesundheit", lesson: "A1.10" },	
{ front: "the cold / runny nose", back: "der Schnupfen", lesson: "A1.10" },	
{ front: "to do", back: "tun", lesson: "A1.10" },	{ front: "have done", back: "haben getan", lesson: "A1.10" },
{ front: "the sender", back: "der Absender", lesson: "A1.10" },	{ front: "the senders", back: "die Absender", lesson: "A1.10" },
{ front: "the place / location", back: "der Ort", lesson: "A1.10" },	{ front: "the places", back: "die Orte", lesson: "A1.10" },
{ front: "the recipient", back: "der Empfänger", lesson: "A1.10" },	{ front: "the recipients", back: "die Empfänger", lesson: "A1.10" },
{ front: "the salutation / form of address", back: "die Anrede", lesson: "A1.10" },	{ front: "the salutations", back: "die Anreden", lesson: "A1.10" },
{ front: "the date", back: "das Datum", lesson: "A1.10" },	{ front: "the dates / data", back: "die Daten", lesson: "A1.10" },
{ front: "the signature", back: "die Unterschrift", lesson: "A1.10" },	{ front: "the signatures", back: "die Unterschriften", lesson: "A1.10" },
{ front: "to send", back: "schicken", lesson: "A1.10" },	{ front: "have sent", back: "haben geschickt", lesson: "A1.10" },
{ front: "the consultation hour", back: "die Sprechstunde", lesson: "A1.10" },	{ front: "the consultation hours", back: "die Sprechstunden", lesson: "A1.10" },
{ front: "the emergency", back: "der Notfall", lesson: "A1.10" },	{ front: "the emergencies", back: "die Notfälle", lesson: "A1.10" },
{ front: "nearby / in the vicinity", back: "in der Nähe", lesson: "A1.10" },	
{ front: "the minute", back: "die Minute", lesson: "A1.10" },	{ front: "the minutes", back: "die Minuten", lesson: "A1.10" },
{ front: "okay / all right", back: "in Ordnung", lesson: "A1.10" },	
{ front: "to come by / drop by", back: "vorbeikommen", lesson: "A1.10" },	{ front: "has come by", back: "ist vorbeigekommen", lesson: "A1.10" },
{ front: "the insurance card", back: "die Versichertenkarte", lesson: "A1.10" },	{ front: "the insurance cards", back: "die Versichertenkarten", lesson: "A1.10" },
{ front: "the floor / ground", back: "der Boden", lesson: "A1.10" },	{ front: "the floors", back: "die Böden", lesson: "A1.10" },
{ front: "to lie (down)", back: "liegen", lesson: "A1.10" },	{ front: "have lain", back: "haben gelegen", lesson: "A1.10" },
{ front: "the emergency doctor", back: "der Notarzt", lesson: "A1.10" },	{ front: "the emergency doctors", back: "die Notärzte", lesson: "A1.10" },
{ front: "strong / severe", back: "stark", lesson: "A1.10" },	
{ front: "the help / aid", back: "die Hilfe", lesson: "A1.10" },	
{ front: "suddenly", back: "plötzlich", lesson: "A1.10" },	
{ front: "to happen", back: "passieren", lesson: "A1.10" },	{ front: "has happened", back: "ist passiert", lesson: "A1.10" },
{ front: "the medicine / drug", back: "das Medikament", lesson: "A1.10" },	{ front: "the medicines", back: "die Medikamente", lesson: "A1.10" },
{ front: "the motorcycle", back: "das Motorrad", lesson: "A1.10" },	{ front: "the motorcycles", back: "die Motorräder", lesson: "A1.10" },
{ front: "the injury", back: "die Verletzung", lesson: "A1.10" },	{ front: "the injuries", back: "die Verletzungen", lesson: "A1.10" },
{ front: "the workshop / garage", back: "die Werkstatt", lesson: "A1.11" },	{ front: "the workshops / garages", back: "die Werkstätten", lesson: "A1.11" },
{ front: "the key", back: "der Schlüssel", lesson: "A1.11" },	{ front: "the keys", back: "die Schlüssel", lesson: "A1.11" },
{ front: "the highway / motorway", back: "die Autobahn", lesson: "A1.11" },	{ front: "the highways / motorways", back: "die Autobahnen", lesson: "A1.11" },
{ front: "the bridge", back: "die Brücke", lesson: "A1.11" },	{ front: "the bridges", back: "die Brücken", lesson: "A1.11" },
{ front: "right (direction)", back: "rechts", lesson: "A1.11" },	
{ front: "straight ahead", back: "geradeaus", lesson: "A1.11" },	
{ front: "left (direction)", back: "links", lesson: "A1.11" },	
{ front: "the way / path", back: "der Weg", lesson: "A1.11" },	{ front: "the ways / paths", back: "die Wege", lesson: "A1.11" },
{ front: "the train station", back: "der Bahnhof", lesson: "A1.11" },	{ front: "the train stations", back: "die Bahnhöfe", lesson: "A1.11" },
{ front: "the butcher shop", back: "die Metzgerei", lesson: "A1.11" },	{ front: "the butcher shops", back: "die Metzgereien", lesson: "A1.11" },
{ front: "the post office / mail", back: "die Post", lesson: "A1.11" },	
{ front: "the hotel", back: "das Hotel", lesson: "A1.11" },	{ front: "the hotels", back: "die Hotels", lesson: "A1.11" },
{ front: "the museum", back: "das Museum", lesson: "A1.11" },	{ front: "the museums", back: "die Museen", lesson: "A1.11" },
{ front: "the traffic light", back: "die Ampel", lesson: "A1.11" },	{ front: "the traffic lights", back: "die Ampeln", lesson: "A1.11" },
{ front: "the gas station / petrol station", back: "die Tankstelle", lesson: "A1.11" },	{ front: "the gas stations", back: "die Tankstellen", lesson: "A1.11" },
{ front: "the city map", back: "der Stadtplan", lesson: "A1.11" },	{ front: "the city maps", back: "die Stadtpläne", lesson: "A1.11" },
{ front: "foreign / unfamiliar", back: "fremd", lesson: "A1.11" },	
{ front: "to fly", back: "fliegen", lesson: "A1.11" },	{ front: "has flown", back: "ist geflogen", lesson: "A1.11" },
{ front: "the airplane", back: "das Flugzeug", lesson: "A1.11" },	{ front: "the airplanes", back: "die Flugzeuge", lesson: "A1.11" },
{ front: "the tram / streetcar", back: "die Straßenbahn", lesson: "A1.11" },	{ front: "the trams", back: "die Straßenbahnen", lesson: "A1.11" },
{ front: "the train", back: "der Zug", lesson: "A1.11" },	{ front: "the trains", back: "die Züge", lesson: "A1.11" },
{ front: "the subway / underground", back: "die U-Bahn", lesson: "A1.11" },	{ front: "the subways", back: "die U-Bahnen", lesson: "A1.11" },
{ front: "the bus", back: "der Bus", lesson: "A1.11" },	{ front: "the buses", back: "die Busse", lesson: "A1.11" },
{ front: "the suburban train", back: "die S-Bahn", lesson: "A1.11" },	{ front: "the suburban trains", back: "die S-Bahnen", lesson: "A1.11" },
{ front: "where to", back: "wohin", lesson: "A1.11" },	
{ front: "the station / stop", back: "die Station", lesson: "A1.11" },	{ front: "the stations", back: "die Stationen", lesson: "A1.11" },
{ front: "the truck / lorry", back: "der Lkw", lesson: "A1.11" },	{ front: "the trucks", back: "die Lkws", lesson: "A1.11" },
{ front: "the kiosk / small shop", back: "der Kiosk", lesson: "A1.11" },	{ front: "the kiosks", back: "die Kioske", lesson: "A1.11" },
{ front: "the (bus/tram) stop", back: "die Haltestelle", lesson: "A1.11" },	{ front: "the stops", back: "die Haltestellen", lesson: "A1.11" },
{ front: "the bookstore", back: "die Buchhandlung", lesson: "A1.11" },	{ front: "the bookstores", back: "die Buchhandlungen", lesson: "A1.11" },
{ front: "to sit", back: "sitzen", lesson: "A1.11" },	{ front: "have sat", back: "haben gesessen", lesson: "A1.11" },
{ front: "the library", back: "die Bücherei", lesson: "A1.11" },	{ front: "the libraries", back: "die Büchereien", lesson: "A1.11" },
{ front: "the tree", back: "der Baum", lesson: "A1.11" },	{ front: "the trees", back: "die Bäume", lesson: "A1.11" },
{ front: "the bank / bench", back: "die Bank", lesson: "A1.11" },	{ front: "the banks", back: "die Banken", lesson: "A1.11" },
{ front: "at / on (vertical)", back: "an", lesson: "A1.11" },	
{ front: "on / onto (horizontal)", back: "auf", lesson: "A1.11" },	
{ front: "behind", back: "hinter", lesson: "A1.11" },	
{ front: "next to / beside", back: "neben", lesson: "A1.11" },	
{ front: "over / above", back: "über", lesson: "A1.11" },	
{ front: "under / below", back: "unter", lesson: "A1.11" },	
{ front: "between", back: "zwischen", lesson: "A1.11" },	
{ front: "the pedestrian zone", back: "die Fußgängerzone", lesson: "A1.11" },	{ front: "the pedestrian zones", back: "die Fußgängerzonen", lesson: "A1.11" },
{ front: "the concert", back: "das Konzert", lesson: "A1.11" },	{ front: "the concerts", back: "die Konzerte", lesson: "A1.11" },
{ front: "to borrow / lend", back: "ausleihen", lesson: "A1.11" },	{ front: "have borrowed", back: "haben ausgeliehen", lesson: "A1.11" },
{ front: "to copy", back: "kopieren", lesson: "A1.11" },	{ front: "have copied", back: "haben kopiert", lesson: "A1.11" },
{ front: "(over) there in front", back: "(da) vorne", lesson: "A1.11" },	
{ front: "(over) there / across", back: "(da) drüben", lesson: "A1.11" },	
{ front: "the corner", back: "die Ecke", lesson: "A1.11" },	{ front: "the corners", back: "die Ecken", lesson: "A1.11" },
{ front: "(over) there in the back", back: "(da) hinten", lesson: "A1.11" },	
{ front: "to depart (by vehicle)", back: "abfahren", lesson: "A1.11" },	{ front: "has departed", back: "ist abgefahren", lesson: "A1.11" },
{ front: "the platform / track", back: "das Gleis", lesson: "A1.11" },	{ front: "the platforms / tracks", back: "die Gleise", lesson: "A1.11" },
{ front: "to get in / board", back: "einsteigen", lesson: "A1.11" },	{ front: "has boarded", back: "ist eingestiegen", lesson: "A1.11" },
{ front: "the delay", back: "die Verspätung", lesson: "A1.11" },	{ front: "the delays", back: "die Verspätungen", lesson: "A1.11" },
{ front: "to arrive", back: "ankommen", lesson: "A1.11" },	{ front: "has arrived", back: "ist angekommen", lesson: "A1.11" },
{ front: "to transfer / change (trains etc.)", back: "umsteigen", lesson: "A1.11" },	{ front: "has transferred", back: "ist umgestiegen", lesson: "A1.11" },
{ front: "to get out / disembark", back: "aussteigen", lesson: "A1.11" },	{ front: "has gotten off", back: "ist ausgestiegen", lesson: "A1.11" },
{ front: "the departure", back: "die Abfahrt", lesson: "A1.11" },	{ front: "the departures", back: "die Abfahrten", lesson: "A1.11" },
{ front: "the arrival", back: "die Ankunft", lesson: "A1.11" },	{ front: "the arrivals", back: "die Ankünfte", lesson: "A1.11" },
{ front: "the connection (transport)", back: "der Anschluss", lesson: "A1.11" },	{ front: "the connections", back: "die Anschlüsse", lesson: "A1.11" },
{ front: "the platform (at a station)", back: "der Bahnsteig", lesson: "A1.11" },	{ front: "the platforms", back: "die Bahnsteige", lesson: "A1.11" },
{ front: "direct(ly)", back: "direkt", lesson: "A1.11" },	
{ front: "the announcement", back: "die Durchsage", lesson: "A1.11" },	{ front: "the announcements", back: "die Durchsagen", lesson: "A1.11" },
{ front: "the counter / ticket window", back: "der Schalter", lesson: "A1.11" },	{ front: "the counters", back: "die Schalter", lesson: "A1.11" },
{ front: "there and back / round trip", back: "hin und zurück", lesson: "A1.11" },	
{ front: "the timetable / schedule", back: "der Fahrplan", lesson: "A1.11" },	{ front: "the timetables", back: "die Fahrpläne", lesson: "A1.11" },
{ front: "the bag", back: "die Tasche", lesson: "A1.12" },	{ front: "the bags", back: "die Taschen", lesson: "A1.12" },
{ front: "the bag / sack (plastic/paper)", back: "die Tüte", lesson: "A1.12" },	{ front: "the bags", back: "die Tüten", lesson: "A1.12" },
{ front: "the bill / invoice", back: "die Rechnung", lesson: "A1.12" },	{ front: "the bills / invoices", back: "die Rechnungen", lesson: "A1.12" },
{ front: "broken", back: "kaputt", lesson: "A1.12" },	
{ front: "to repair", back: "reparieren", lesson: "A1.12" },	{ front: "have repaired", back: "haben repariert", lesson: "A1.12" },
{ front: "angry / sour", back: "sauer", lesson: "A1.12" },	
{ front: "unfriendly", back: "unfreundlich", lesson: "A1.12" },	
{ front: "normal", back: "normal", lesson: "A1.12" },	
{ front: "the home country", back: "das Heimatland", lesson: "A1.12" },	{ front: "the home countries", back: "die Heimatländer", lesson: "A1.12" },
{ front: "training / workout", back: "Training", lesson: "A1.12" },	
{ front: "the clothes", back: "die Kleider", lesson: "A1.12" },	
{ front: "to sew", back: "nähen", lesson: "A1.12" },	{ front: "have sewn", back: "haben genäht", lesson: "A1.12" },
{ front: "the repair", back: "die Reparatur", lesson: "A1.12" },	{ front: "the repairs", back: "die Reparaturen", lesson: "A1.12" },
{ front: "to shower", back: "duschen", lesson: "A1.12" },	{ front: "have showered", back: "haben geduscht", lesson: "A1.12" },
{ front: "the statement", back: "die Aussage", lesson: "A1.12" },	{ front: "the statements", back: "die Aussagen", lesson: "A1.12" },
{ front: "the technician (male)", back: "der Techniker", lesson: "A1.12" },	{ front: "the technicians", back: "die Techniker", lesson: "A1.12" },
{ front: "the heater / heating", back: "die Heizung", lesson: "A1.12" },	{ front: "the heaters", back: "die Heizungen", lesson: "A1.12" },
{ front: "the printer", back: "der Drucker", lesson: "A1.12" },	{ front: "the printers", back: "die Drucker", lesson: "A1.12" },
{ front: "the model / version", back: "das Modell", lesson: "A1.12" },	{ front: "the models", back: "die Modelle", lesson: "A1.12" },
{ front: "the warranty / guarantee", back: "die Garantie", lesson: "A1.12" },	{ front: "the warranties", back: "die Garantien", lesson: "A1.12" },
{ front: "over / past (prefix)", back: "vorbei-", lesson: "A1.12" },	
{ front: "to bring over / drop off", back: "vorbeibringen", lesson: "A1.12" },	{ front: "have brought over", back: "haben vorbeigebracht", lesson: "A1.12" },
{ front: "to turn on", back: "anmachen", lesson: "A1.12" },	{ front: "have turned on", back: "haben angemacht", lesson: "A1.12" },
{ front: "the door", back: "die Tür", lesson: "A1.12" },	{ front: "the doors", back: "die Türen", lesson: "A1.12" },
{ front: "to close", back: "zumachen", lesson: "A1.12" },	{ front: "have closed", back: "haben zugemacht", lesson: "A1.12" },
{ front: "the window", back: "das Fenster", lesson: "A1.12" },	{ front: "the windows", back: "die Fenster", lesson: "A1.12" },
{ front: "to open", back: "aufmachen", lesson: "A1.12" },	{ front: "have opened", back: "haben aufgemacht", lesson: "A1.12" },
{ front: "the paper", back: "das Papier", lesson: "A1.12" },	{ front: "the papers", back: "die Papiere", lesson: "A1.12" },
{ front: "the light", back: "das Licht", lesson: "A1.12" },	{ front: "the lights", back: "die Lichter", lesson: "A1.12" },
{ front: "the dishwasher", back: "die Spülmaschine", lesson: "A1.12" },	{ front: "the dishwashers", back: "die Spülmaschinen", lesson: "A1.12" },
{ front: "to recommend", back: "empfehlen", lesson: "A1.12" },	{ front: "have recommended", back: "haben empfohlen", lesson: "A1.12" },
{ front: "to reserve / book", back: "reservieren", lesson: "A1.12" },	{ front: "have reserved", back: "haben reserviert", lesson: "A1.12" },
{ front: "the reception / front desk", back: "die Rezeption", lesson: "A1.12" },	{ front: "the receptions", back: "die Rezeptionen", lesson: "A1.12" },
{ front: "the announcement / message", back: "die Ansage", lesson: "A1.12" },	{ front: "the announcements", back: "die Ansagen", lesson: "A1.12" },
{ front: "to press / push", back: "drücken", lesson: "A1.12" },	{ front: "have pressed", back: "haben gedrückt", lesson: "A1.12" },
{ front: "to register / sign up", back: "anmelden", lesson: "A1.12" },	{ front: "have registered", back: "haben angemeldet", lesson: "A1.12" },
{ front: "to connect / transfer (a call)", back: "verbinden", lesson: "A1.12" },	{ front: "have connected", back: "haben verbunden", lesson: "A1.12" },
{ front: "to leave (a message)", back: "hinterlassen", lesson: "A1.12" },	{ front: "have left", back: "haben hinterlassen", lesson: "A1.12" },
{ front: "to call back", back: "zurückrufen", lesson: "A1.12" },	{ front: "have called back", back: "haben zurückgerufen", lesson: "A1.12" },
{ front: "to look / appear", back: "aussehen", lesson: "A1.12" },	{ front: "have looked", back: "haben ausgesehen", lesson: "A1.12" },
{ front: "the vacation / holiday", back: "der Urlaub", lesson: "A1.12" },	{ front: "the vacations", back: "die Urlaube", lesson: "A1.12" },
{ front: "outside", back: "draußen", lesson: "A1.12" },	
{ front: "gone / away", back: "weg", lesson: "A1.12" },	
{ front: "the coffee machine", back: "die Kaffeemaschine", lesson: "A1.12" },	{ front: "the coffee machines", back: "die Kaffeemaschinen", lesson: "A1.12" },
{ front: "the hairdresser (male)", back: "der Friseur", lesson: "A1.12" },	{ front: "the hairdressers", back: "die Friseure", lesson: "A1.12" },
{ front: "the hairdresser (female)", back: "die Friseurin", lesson: "A1.12" },	{ front: "the hairdressers", back: "die Friseurinnen", lesson: "A1.12" },
{ front: "to order", back: "bestellen", lesson: "A1.12" },	{ front: "has ordered", back: "hat bestellt", lesson: "A1.12" },
{ front: "the offer / deal", back: "das Angebot", lesson: "A1.12" },	{ front: "the offers", back: "die Angebote", lesson: "A1.12" },
{ front: "to offer", back: "anbieten", lesson: "A1.12" },	{ front: "has offered", back: "hat angeboten", lesson: "A1.12" },
{ front: "the young person (m/f)", back: "der Jugendliche / die Jugendliche", lesson: "A1.12" },	{ front: "the young people", back: "die Jugendlichen", lesson: "A1.12" },
{ front: "the instructions / manual", back: "die Gebrauchsanweisung", lesson: "A1.12" },	{ front: "the instruction manuals", back: "die Gebrauchsanweisungen", lesson: "A1.12" },
{ front: "the cleaning / dry cleaner’s", back: "die Reinigung", lesson: "A1.12" },	{ front: "the cleanings / cleaners", back: "die Reinigungen", lesson: "A1.12" },
{ front: "the plug", back: "der Stecker", lesson: "A1.12" },	{ front: "the plugs", back: "die Stecker", lesson: "A1.12" },
{ front: "the socket / outlet", back: "die Steckdose", lesson: "A1.12" },	{ front: "the sockets", back: "die Steckdosen", lesson: "A1.12" },
{ front: "to pull", back: "ziehen", lesson: "A1.12" },	{ front: "has pulled", back: "hat gezogen", lesson: "A1.12" },
{ front: "above / upstairs / top", back: "oben", lesson: "A1.12" },	
{ front: "the vinegar", back: "der Essig", lesson: "A1.12" },	
{ front: "the key / button (keyboard, machine)", back: "die Taste", lesson: "A1.12" },	{ front: "the keys / buttons", back: "die Tasten", lesson: "A1.12" },
{ front: "the second", back: "die Sekunde", lesson: "A1.12" },	{ front: "the seconds", back: "die Sekunden", lesson: "A1.12" },
{ front: "the jacket", back: "die Jacke", lesson: "A1.13" },	{ front: "the jackets", back: "die Jacken", lesson: "A1.13" },
{ front: "the coat", back: "der Mantel", lesson: "A1.13" },	{ front: "the coats", back: "die Mäntel", lesson: "A1.13" },
{ front: "thin", back: "dünn", lesson: "A1.13" },	
{ front: "to fit", back: "passen", lesson: "A1.13" },	{ front: "has fit", back: "hat gepasst", lesson: "A1.13" },
{ front: "wide / loose", back: "weit", lesson: "A1.13" },	
{ front: "the clothing", back: "die Kleidung", lesson: "A1.13" },	
{ front: "the blouse", back: "die Bluse", lesson: "A1.13" },	{ front: "the blouses", back: "die Blusen", lesson: "A1.13" },
{ front: "the T-shirt", back: "das T-Shirt", lesson: "A1.13" },	{ front: "the T-shirts", back: "die T-Shirts", lesson: "A1.13" },
{ front: "the shoe", back: "der Schuh", lesson: "A1.13" },	{ front: "the shoes", back: "die Schuhe", lesson: "A1.13" },
{ front: "the pants / trousers", back: "die Hose", lesson: "A1.13" },	{ front: "the pants", back: "die Hosen", lesson: "A1.13" },
{ front: "the skirt", back: "der Rock", lesson: "A1.13" },	{ front: "the skirts", back: "die Röcke", lesson: "A1.13" },
{ front: "the dress", back: "das Kleid", lesson: "A1.13" },	{ front: "the dresses", back: "die Kleider", lesson: "A1.13" },
{ front: "the boot", back: "der Stiefel", lesson: "A1.13" },	{ front: "the boots", back: "die Stiefel", lesson: "A1.13" },
{ front: "the sweater", back: "der Pullover", lesson: "A1.13" },	{ front: "the sweaters", back: "die Pullover", lesson: "A1.13" },
{ front: "the sock", back: "die Socke", lesson: "A1.13" },	{ front: "the socks", back: "die Socken", lesson: "A1.13" },
{ front: "the stocking", back: "der Strumpf", lesson: "A1.13" },	{ front: "the stockings", back: "die Strümpfe", lesson: "A1.13" },
{ front: "the jeans", back: "die Jeans", lesson: "A1.13" },	{ front: "the jeans (plural)", back: "die Jeans", lesson: "A1.13" },
{ front: "the scarf / cloth", back: "das Tuch", lesson: "A1.13" },	{ front: "the scarves / cloths", back: "die Tücher", lesson: "A1.13" },
{ front: "the shirt", back: "das Hemd", lesson: "A1.13" },	{ front: "the shirts", back: "die Hemden", lesson: "A1.13" },
{ front: "the suit", back: "der Anzug", lesson: "A1.13" },	{ front: "the suits", back: "die Anzüge", lesson: "A1.13" },
{ front: "the glasses", back: "die Brille", lesson: "A1.13" },	{ front: "the glasses (plural)", back: "die Brillen", lesson: "A1.13" },
{ front: "boring", back: "langweilig", lesson: "A1.13" },	
{ front: "the (rain) umbrella", back: "der (Regen-)Schirm", lesson: "A1.13" },	{ front: "the umbrellas", back: "die (Regen-)Schirme", lesson: "A1.13" },
{ front: "affordable / cheap", back: "günstig", lesson: "A1.13" },	
{ front: "perfect", back: "perfekt", lesson: "A1.13" },	
{ front: "to suit / look good on", back: "stehen", lesson: "A1.13" },	{ front: "has suited", back: "hat gestanden", lesson: "A1.13" },
{ front: "the grilled sausage", back: "die Bratwurst", lesson: "A1.13" },	{ front: "the grilled sausages", back: "die Bratwürste", lesson: "A1.13" },
{ front: "the landscape", back: "die Landschaft", lesson: "A1.13" },	{ front: "the landscapes", back: "die Landschaften", lesson: "A1.13" },
{ front: "the mountain", back: "der Berg", lesson: "A1.13" },	{ front: "the mountains", back: "die Berge", lesson: "A1.13" },
{ front: "the village", back: "das Dorf", lesson: "A1.13" },	{ front: "the villages", back: "die Dörfer", lesson: "A1.13" },
{ front: "the forest", back: "der Wald", lesson: "A1.13" },	{ front: "the forests", back: "die Wälder", lesson: "A1.13" },
{ front: "the North Sea", back: "die Nordsee", lesson: "A1.13" },	
{ front: "the beach", back: "der Strand", lesson: "A1.13" },	{ front: "the beaches", back: "die Strände", lesson: "A1.13" },
{ front: "the sea", back: "das Meer", lesson: "A1.13" },	{ front: "the seas", back: "die Meere", lesson: "A1.13" },
{ front: "the harbor / port", back: "der Hafen", lesson: "A1.13" },	{ front: "the harbors", back: "die Häfen", lesson: "A1.13" },
{ front: "never", back: "nie", lesson: "A1.13" },	
{ front: "better", back: "besser", lesson: "A1.13" },	
{ front: "best / the best", back: "am besten", lesson: "A1.13" },	
{ front: "backwards", back: "rückwärts", lesson: "A1.13" },	
{ front: "forwards", back: "vorwärts", lesson: "A1.13" },	
{ front: "present / with it", back: "dabei", lesson: "A1.13" },	
{ front: "heavy / difficult", back: "schwer", lesson: "A1.13" },	
{ front: "the musician (male)", back: "der Musiker", lesson: "A1.13" },	{ front: "the musicians", back: "die Musiker", lesson: "A1.13" },
{ front: "the musician (female)", back: "die Musikerin", lesson: "A1.13" },	{ front: "the musicians", back: "die Musikerinnen", lesson: "A1.13" },
{ front: "to train / work out", back: "trainieren", lesson: "A1.13" },	{ front: "has trained", back: "hat trainiert", lesson: "A1.13" },
{ front: "to ride a bike", back: "rad fahren", lesson: "A1.13" },	{ front: "has ridden a bike", back: "ist rad gefahren", lesson: "A1.13" },
{ front: "the record", back: "der Rekord", lesson: "A1.13" },	{ front: "the records", back: "die Rekorde", lesson: "A1.13" },
{ front: "preferably / favorite", back: "am liebsten", lesson: "A1.13" },	
{ front: "most of all", back: "am meisten", lesson: "A1.13" },	
{ front: "satisfied / content", back: "zufrieden", lesson: "A1.13" },	
{ front: "the joke", back: "der Witz", lesson: "A1.13" },	{ front: "the jokes", back: "die Witze", lesson: "A1.13" },
{ front: "this", back: "dies-", lesson: "A1.13" },	
{ front: "which", back: "welch-", lesson: "A1.13" },	
{ front: "the suitcase", back: "der Koffer", lesson: "A1.13" },	{ front: "the suitcases", back: "die Koffer", lesson: "A1.13" },
{ front: "to belong to", back: "gehören", lesson: "A1.13" },	{ front: "has belonged", back: "hat gehört", lesson: "A1.13" },
{ front: "to like", back: "mögen", lesson: "A1.13" },	{ front: "has liked", back: "hat gemocht", lesson: "A1.13" },
{ front: "the weekday", back: "der Wochentag", lesson: "A1.13" },	{ front: "the weekdays", back: "die Wochentage", lesson: "A1.13" },
{ front: "the ground floor", back: "das Erdgeschoss", lesson: "A1.13" },	{ front: "the ground floors", back: "die Erdgeschosse", lesson: "A1.13" },
{ front: "the upper floor", back: "das Obergeschoss", lesson: "A1.13" },	{ front: "the upper floors", back: "die Obergeschosse", lesson: "A1.13" },
{ front: "the basement / lower floor", back: "das Untergeschoss", lesson: "A1.13" },	{ front: "the basements", back: "die Untergeschosse", lesson: "A1.13" },
{ front: "the exit", back: "der Ausgang", lesson: "A1.13" },	{ front: "the exits", back: "die Ausgänge", lesson: "A1.13" },
{ front: "the drugstore", back: "die Drogerie", lesson: "A1.13" },	{ front: "the drugstores", back: "die Drogerien", lesson: "A1.13" },
{ front: "the cosmetics", back: "die Kosmetik", lesson: "A1.13" },	
{ front: "the jewelry", back: "der Schmuck", lesson: "A1.13" },	
{ front: "the dishes / crockery", back: "das Geschirr", lesson: "A1.13" },	
{ front: "the glass", back: "das Glas", lesson: "A1.13" },	{ front: "the glasses", back: "die Gläser", lesson: "A1.13" },
{ front: "the fashion", back: "die Mode", lesson: "A1.13" },	{ front: "the fashions", back: "die Moden", lesson: "A1.13" },
{ front: "the entrance", back: "der Eingang", lesson: "A1.13" },	{ front: "the entrances", back: "die Eingänge", lesson: "A1.13" },
{ front: "to apologize", back: "entschuldigen", lesson: "A1.13" },	{ front: "has apologized", back: "hat entschuldigt", lesson: "A1.13" },
{ front: "to know", back: "wissen", lesson: "A1.13" },	{ front: "has known", back: "hat gewusst", lesson: "A1.13" },
{ front: "the soap", back: "die Seife", lesson: "A1.13" },	{ front: "the soaps", back: "die Seifen", lesson: "A1.13" },
{ front: "the toothbrush", back: "die Zahnbürste", lesson: "A1.13" },	{ front: "the toothbrushes", back: "die Zahnbürsten", lesson: "A1.13" },
{ front: "the toothpaste", back: "die Zahnpasta", lesson: "A1.13" },	
{ front: "the size", back: "die Größe", lesson: "A1.13" },	{ front: "the sizes", back: "die Größen", lesson: "A1.13" },
{ front: "to put on (clothes)", back: "anziehen", lesson: "A1.13" },	{ front: "has put on", back: "hat angezogen", lesson: "A1.13" },
{ front: "to try on", back: "anprobieren", lesson: "A1.13" },	{ front: "has tried on", back: "hat anprobiert", lesson: "A1.13" },
{ front: "the birthday", back: "der Geburtstag", lesson: "A1.14" },	{ front: "the birthdays", back: "die Geburtstage", lesson: "A1.14" },
{ front: "the tire", back: "der Reifen", lesson: "A1.14" },	{ front: "the tires", back: "die Reifen", lesson: "A1.14" },
{ front: "to tell / narrate", back: "erzählen", lesson: "A1.14" },	{ front: "has told", back: "hat erzählt", lesson: "A1.14" },
{ front: "to celebrate", back: "feiern", lesson: "A1.14" },	{ front: "has celebrated", back: "hat gefeiert", lesson: "A1.14" },
{ front: "the farewell / goodbye", back: "der Abschied", lesson: "A1.14" },	{ front: "the farewells", back: "die Abschiede", lesson: "A1.14" },
{ front: "soon", back: "bald", lesson: "A1.14" },	
{ front: "to begin", back: "beginnen", lesson: "A1.14" },	{ front: "has begun", back: "hat begonnen", lesson: "A1.14" },
{ front: "the job / workplace", back: "die Arbeitsstelle", lesson: "A1.14" },	{ front: "the jobs / workplaces", back: "die Arbeitsstellen", lesson: "A1.14" },
{ front: "luck / happiness", back: "das Glück", lesson: "A1.14" },	
{ front: "joy / pleasure", back: "die Freude", lesson: "A1.14" },	
{ front: "to wish (for oneself)", back: "(sich) wünschen", lesson: "A1.14" },	{ front: "has wished", back: "hat gewünscht", lesson: "A1.14" },
{ front: "to congratulate", back: "gratulieren", lesson: "A1.14" },	{ front: "has congratulated", back: "hat gratuliert", lesson: "A1.14" },
{ front: "the congratulation", back: "der Glückwunsch", lesson: "A1.14" },	{ front: "the congratulations", back: "die Glückwünsche", lesson: "A1.14" },
{ front: "to believe", back: "glauben", lesson: "A1.14" },	{ front: "has believed", back: "hat geglaubt", lesson: "A1.14" },
{ front: "to visit", back: "besuchen", lesson: "A1.14" },	{ front: "has visited", back: "hat besucht", lesson: "A1.14" },
{ front: "November", back: "der November", lesson: "A1.14" },	
{ front: "January", back: "der Januar", lesson: "A1.14" },	
{ front: "first", back: "erste", lesson: "A1.14" },	
{ front: "second", back: "zweite", lesson: "A1.14" },	
{ front: "third", back: "dritte", lesson: "A1.14" },	
{ front: "February", back: "der Februar", lesson: "A1.14" },	
{ front: "March", back: "der März", lesson: "A1.14" },	
{ front: "April", back: "der April", lesson: "A1.14" },	
{ front: "May", back: "der Mai", lesson: "A1.14" },	
{ front: "June", back: "der Juni", lesson: "A1.14" },	
{ front: "July", back: "der Juli", lesson: "A1.14" },	
{ front: "August", back: "der August", lesson: "A1.14" },	
{ front: "September", back: "der September", lesson: "A1.14" },	
{ front: "October", back: "der Oktober", lesson: "A1.14" },	
{ front: "December", back: "der Dezember", lesson: "A1.14" },	
{ front: "the flower", back: "die Blume", lesson: "A1.14" },	{ front: "the flowers", back: "die Blumen", lesson: "A1.14" },
{ front: "the carnival", back: "der Karneval", lesson: "A1.14" },	
{ front: "last / previous", back: "letzt-", lesson: "A1.14" },	
{ front: "to participate", back: "mitmachen", lesson: "A1.14" },	{ front: "has participated", back: "hat mitgemacht", lesson: "A1.14" },
{ front: "the public holiday", back: "der Feiertag", lesson: "A1.14" },	{ front: "the holidays", back: "die Feiertage", lesson: "A1.14" },
{ front: "the present / gift", back: "das Geschenk", lesson: "A1.14" },	{ front: "the presents", back: "die Geschenke", lesson: "A1.14" },
{ front: "to love (each other)", back: "(sich) lieben", lesson: "A1.14" },	{ front: "has loved", back: "hat geliebt", lesson: "A1.14" },
{ front: "wonderful", back: "wunderbar", lesson: "A1.14" },	
{ front: "the dessert", back: "der Nachtisch", lesson: "A1.14" },	{ front: "the desserts", back: "die Nachtische", lesson: "A1.14" },
{ front: "to clean", back: "putzen", lesson: "A1.14" },	{ front: "has cleaned", back: "hat geputzt", lesson: "A1.14" },
{ front: "the laptop", back: "der Laptop", lesson: "A1.14" },	{ front: "the laptops", back: "die Laptops", lesson: "A1.14" },
{ front: "dirty", back: "schmutzig", lesson: "A1.14" },	
{ front: "to wash", back: "waschen", lesson: "A1.14" },	{ front: "has washed", back: "hat gewaschen", lesson: "A1.14" },
{ front: "the grandfather", back: "der Großvater", lesson: "A1.14" },	{ front: "the grandfathers", back: "die Großväter", lesson: "A1.14" },
{ front: "the grandmother", back: "die Großmutter", lesson: "A1.14" },	{ front: "the grandmothers", back: "die Großmütter", lesson: "A1.14" },
{ front: "the celebration / party", back: "die Feier", lesson: "A1.14" },	{ front: "the celebrations", back: "die Feiern", lesson: "A1.14" },
{ front: "to organize", back: "organisieren", lesson: "A1.14" },	{ front: "has organized", back: "hat organisiert", lesson: "A1.14" },
{ front: "to inform / give notice", back: "Bescheid geben", lesson: "A1.14" },	{ front: "has informed", back: "hat Bescheid gegeben", lesson: "A1.14" },
{ front: "the invitation", back: "die Einladung", lesson: "A1.14" },	{ front: "the invitations", back: "die Einladungen", lesson: "A1.14" },
{ front: "the flight", back: "der Flug", lesson: "A1.14" },	{ front: "the flights", back: "die Flüge", lesson: "A1.14" },
{ front: "to become", back: "werden", lesson: "A1.14" },	{ front: "has become", back: "ist geworden", lesson: "A1.14" },
{ front: "to invite", back: "einladen", lesson: "A1.14" },	{ front: "has invited", back: "hat eingeladen", lesson: "A1.14" },
{ front: "to be happy / look forward", back: "sich freuen", lesson: "A1.14" },	{ front: "has been happy / looked forward", back: "hat sich gefreut", lesson: "A1.14" },
{ front: "the festival / party", back: "das Fest", lesson: "A1.14" },	{ front: "the festivals / parties", back: "die Feste", lesson: "A1.14" },
{ front: "cordial / heartfelt", back: "herzlich", lesson: "A1.14" },	
{ front: "the guest", back: "der Gast", lesson: "A1.14" },	{ front: "the guests", back: "die Gäste", lesson: "A1.14" },
{ front: "the reason", back: "der Grund", lesson: "A1.14" },	{ front: "the reasons", back: "die Gründe", lesson: "A1.14" },
{ front: "the answer", back: "die Antwort", lesson: "A1.14" },	{ front: "the answers", back: "die Antworten", lesson: "A1.14" },
{ front: "to ask / request", back: "bitten", lesson: "A1.14" },	{ front: "has asked", back: "hat gebeten", lesson: "A1.14" },
{ front: "Christmas", back: "das Weihnachten", lesson: "A1.14" },	
{ front: "Easter", back: "das Ostern", lesson: "A1.14" },	
{ front: "New Year's Eve", back: "das Silvester", lesson: "A1.14" },	
{ front: "New Year", back: "das Neujahr", lesson: "A1.14" },	
{ front: "to win", back: "gewinnen", lesson: "A1.14" },	{ front: "has won", back: "hat gewonnen", lesson: "A1.14" },
{ front: "the relative (m/f)", back: "der Verwandte / die Verwandte", lesson: "A1.14" },	{ front: "the relatives", back: "die Verwandten", lesson: "A1.14" },
{ front: "the card / ticket", back: "die Karte", lesson: "A1.14" },	{ front: "the cards / tickets", back: "die Karten", lesson: "A1.14" },
{ front: "the wedding", back: "die Hochzeit", lesson: "A1.14" },	{ front: "the weddings", back: "die Hochzeiten", lesson: "A1.14" },
{ front: "happy", back: "glücklich", lesson: "A2.1" },	
{ front: "to look at / watch", back: "ansehen", lesson: "A2.1" },	{ front: "has looked at / watched", back: "hat angesehen", lesson: "A2.1" },
{ front: "the neighbor (male)", back: "der Nachbar", lesson: "A2.1" },	{ front: "the neighbors (male or mixed)", back: "die Nachbarn", lesson: "A2.1" },
{ front: "the neighbor (female)", back: "die Nachbarin", lesson: "A2.1" },	{ front: "the neighbors (female)", back: "die Nachbarinnen", lesson: "A2.1" },
{ front: "the shopping / purchase", back: "der Einkauf", lesson: "A2.1" },	{ front: "the shoppings / purchases", back: "die Einkäufe", lesson: "A2.1" },
{ front: "to work out / succeed", back: "klappen", lesson: "A2.1" },	{ front: "has worked out / succeeded", back: "hat geklappt", lesson: "A2.1" },
{ front: "the center", back: "das Zentrum", lesson: "A2.1" },	{ front: "the centers", back: "die Zentren", lesson: "A2.1" },
{ front: "the feeling", back: "das Gefühl", lesson: "A2.1" },	{ front: "the feelings", back: "die Gefühle", lesson: "A2.1" },
{ front: "the beginning", back: "der Anfang", lesson: "A2.1" },	{ front: "the beginnings", back: "die Anfänge", lesson: "A2.1" },
{ front: "to miss (someone)", back: "vermissen", lesson: "A2.1" },	{ front: "has missed", back: "hat vermisst", lesson: "A2.1" },
{ front: "because", back: "weil", lesson: "A2.1" },	
{ front: "the person / human", back: "der Mensch", lesson: "A2.1" },	{ front: "the people", back: "die Menschen", lesson: "A2.1" },
{ front: "the employer (male)", back: "der Arbeitgeber", lesson: "A2.1" },	{ front: "the employers (male or mixed)", back: "die Arbeitgeber", lesson: "A2.1" },
{ front: "the employer (female)", back: "die Arbeitgeberin", lesson: "A2.1" },	{ front: "the employers (female)", back: "die Arbeitgeberinnen", lesson: "A2.1" },
{ front: "to move (house)", back: "umziehen", lesson: "A2.1" },	{ front: "has moved", back: "ist umgezogen", lesson: "A2.1" },
{ front: "to get to know each other", back: "(sich) kennenlernen", lesson: "A2.1" },	{ front: "has gotten to know each other", back: "hat kennengelernt", lesson: "A2.1" },
{ front: "yesterday", back: "gestern", lesson: "A2.1" },	
{ front: "the move / relocation", back: "der Umzug", lesson: "A2.1" },	{ front: "the moves / relocations", back: "die Umzüge", lesson: "A2.1" },
{ front: "the things / stuff", back: "die Sachen", lesson: "A2.1" },	
{ front: "to unpack", back: "auspacken", lesson: "A2.1" },	{ front: "has unpacked", back: "hat ausgepackt", lesson: "A2.1" },
{ front: "to fall asleep", back: "einschlafen", lesson: "A2.1" },	{ front: "has fallen asleep", back: "ist eingeschlafen", lesson: "A2.1" },
{ front: "the alarm clock", back: "der Wecker", lesson: "A2.1" },	{ front: "the alarm clocks", back: "die Wecker", lesson: "A2.1" },
{ front: "to remember / notice", back: "(sich) merken", lesson: "A2.1" },	{ front: "has remembered / noticed", back: "hat gemerkt", lesson: "A2.1" },
{ front: "finally / after all", back: "schließlich", lesson: "A2.1" },	
{ front: "even", back: "sogar", lesson: "A2.1" },	
{ front: "the working day", back: "der Arbeitstag", lesson: "A2.1" },	{ front: "the working days", back: "die Arbeitstage", lesson: "A2.1" },
{ front: "to sound", back: "klingen", lesson: "A2.1" },	{ front: "has sounded", back: "hat geklungen", lesson: "A2.1" },
{ front: "to experience", back: "erleben", lesson: "A2.1" },	{ front: "has experienced", back: "hat erlebt", lesson: "A2.1" },
{ front: "the breakdown / malfunction", back: "die Panne", lesson: "A2.1" },	{ front: "the breakdowns", back: "die Pannen", lesson: "A2.1" },
{ front: "the everyday life", back: "der Alltag", lesson: "A2.1" },	
{ front: "to miss (an event)", back: "verpassen", lesson: "A2.1" },	{ front: "has missed", back: "hat verpasst", lesson: "A2.1" },
{ front: "to notice", back: "bemerken", lesson: "A2.1" },	{ front: "has noticed", back: "hat bemerkt", lesson: "A2.1" },
{ front: "to find out / experience", back: "erfahren", lesson: "A2.1" },	{ front: "has found out / experienced", back: "hat erfahren", lesson: "A2.1" },
{ front: "to imagine / introduce oneself", back: "(sich) vorstellen", lesson: "A2.1" },	{ front: "has imagined / introduced oneself", back: "hat vorgestellt", lesson: "A2.1" },
{ front: "the wallet", back: "die Geldbörse", lesson: "A2.1" },	{ front: "the wallets", back: "die Geldbörsen", lesson: "A2.1" },
{ front: "to lose", back: "verlieren", lesson: "A2.1" },	{ front: "has lost", back: "hat verloren", lesson: "A2.1" },
{ front: "bad luck", back: "das Pech", lesson: "A2.1" },	
{ front: "the credit card", back: "die Kreditkarte", lesson: "A2.1" },	{ front: "the credit cards", back: "die Kreditkarten", lesson: "A2.1" },
{ front: "to bump / push", back: "stoßen", lesson: "A2.1" },	{ front: "has bumped / pushed", back: "hat/ist gestoßen", lesson: "A2.1" },
{ front: "embarrassing", back: "peinlich", lesson: "A2.1" },	
{ front: "the uncle", back: "der Onkel", lesson: "A2.1" },	{ front: "the uncles", back: "die Onkel", lesson: "A2.1" },
{ front: "the aunt", back: "die Tante", lesson: "A2.1" },	{ front: "the aunts", back: "die Tanten", lesson: "A2.1" },
{ front: "the cousin (male)", back: "der Cousin", lesson: "A2.1" },	{ front: "the cousins (male or mixed)", back: "die Cousins", lesson: "A2.1" },
{ front: "the cousin (female)", back: "die Cousine", lesson: "A2.1" },	{ front: "the cousins (female)", back: "die Cousinen", lesson: "A2.1" },
{ front: "the nephew", back: "der Neffe", lesson: "A2.1" },	{ front: "the nephews", back: "die Neffen", lesson: "A2.1" },
{ front: "the niece", back: "die Nichte", lesson: "A2.1" },	{ front: "the nieces", back: "die Nichten", lesson: "A2.1" },
{ front: "likeable / nice", back: "sympathisch", lesson: "A2.1" },	
{ front: "the member", back: "das Mitglied", lesson: "A2.1" },	{ front: "the members", back: "die Mitglieder", lesson: "A2.1" },
{ front: "the shared flat / flatshare", back: "die Wohngemeinschaft", lesson: "A2.1" },	{ front: "the shared flats", back: "die Wohngemeinschaften", lesson: "A2.1" },
{ front: "probably", back: "wahrscheinlich", lesson: "A2.1" },	
{ front: "the roof", back: "das Dach", lesson: "A2.1" },	{ front: "the roofs", back: "die Dächer", lesson: "A2.1" },
{ front: "until now / so far", back: "bisher", lesson: "A2.1" },	
{ front: "different / various", back: "verschieden", lesson: "A2.1" },	
{ front: "the quarter / district", back: "das Viertel", lesson: "A2.1" },	{ front: "the quarters", back: "die Viertel", lesson: "A2.1" },
{ front: "the tenant (male)", back: "der Mieter", lesson: "A2.1" },	{ front: "the tenants (male or mixed)", back: "die Mieter", lesson: "A2.1" },
{ front: "the tenant (female)", back: "die Mieterin", lesson: "A2.1" },	{ front: "the tenants (female)", back: "die Mieterinnen", lesson: "A2.1" },
{ front: "to move in", back: "einziehen", lesson: "A2.1" },	{ front: "has moved in", back: "ist eingezogen", lesson: "A2.1" },
{ front: "the time / occurrence", back: "das Mal", lesson: "A2.1" },	{ front: "the times / occurrences", back: "die Male", lesson: "A2.1" },
{ front: "funny / strange", back: "komisch", lesson: "A2.1" },	
{ front: "someone / somebody", back: "jemand", lesson: "A2.1" },	
{ front: "to be enough / to reach", back: "reichen", lesson: "A2.1" },	{ front: "has been enough", back: "hat gereicht", lesson: "A2.1" },
{ front: "to share", back: "teilen", lesson: "A2.1" },	{ front: "has shared", back: "hat geteilt", lesson: "A2.1" },
{ front: "to move out / take off clothes", back: "ausziehen", lesson: "A2.1" },	{ front: "has moved out / taken off clothes", back: "ist ausgezogen", lesson: "A2.1" },
{ front: "the place / square", back: "der Platz", lesson: "A2.1" },	{ front: "the places / squares", back: "die Plätze", lesson: "A2.1" },
{ front: "every / each", back: "jeder", lesson: "A2.1" },	
{ front: "to use", back: "benutzen", lesson: "A2.1" },	{ front: "has used", back: "hat benutzt", lesson: "A2.1" },
{ front: "together", back: "gemeinsam", lesson: "A2.1" },	
{ front: "otherwise / else", back: "sonst", lesson: "A2.1" },	
{ front: "now", back: "nun", lesson: "A2.1" },	
{ front: "normally / usually", back: "normalerweise", lesson: "A2.1" },	
{ front: "pregnant", back: "schwanger", lesson: "A2.1" },	
{ front: "the father-in-law", back: "der Schwiegervater", lesson: "A2.1" },	{ front: "the fathers-in-law", back: "die Schwiegerväter", lesson: "A2.1" },
{ front: "the mother-in-law", back: "die Schwiegermutter", lesson: "A2.1" },	{ front: "the mothers-in-law", back: "die Schwiegermütter", lesson: "A2.1" },
{ front: "the household", back: "der Haushalt", lesson: "A2.1" },	{ front: "the households", back: "die Haushalte", lesson: "A2.1" },
{ front: "the pension / retirement", back: "die Rente", lesson: "A2.1" },	{ front: "the pensions", back: "die Renten", lesson: "A2.1" },
{ front: "energy", back: "die Energie", lesson: "A2.2" },	
{ front: "oneself / self / by oneself", back: "selbst", lesson: "A2.2" },	
{ front: "to change / switch", back: "wechseln", lesson: "A2.2" },	{ front: "has changed / switched", back: "hat gewechselt", lesson: "A2.2" },
{ front: "ceiling / blanket", back: "die Decke", lesson: "A2.2" },	{ front: "the ceilings / blankets", back: "die Decken", lesson: "A2.2" },
{ front: "to hang", back: "hängen", lesson: "A2.2" },	{ front: "has hung (transitive) / has been hanging (intransitive)", back: "hat gehängt / hat gehangen", lesson: "A2.2" },
{ front: "thanks / gratitude", back: "der Dank", lesson: "A2.2" },	
{ front: "nothing", back: "nichts", lesson: "A2.2" },	
{ front: "amount / quantity / crowd", back: "die Menge", lesson: "A2.2" },	{ front: "the amounts / quantities / crowds", back: "die Mengen", lesson: "A2.2" },
{ front: "ballpoint pen", back: "der Kugelschreiber", lesson: "A2.2" },	{ front: "ballpoint pens", back: "die Kugelschreiber", lesson: "A2.2" },
{ front: "to stick / put (in)", back: "stecken", lesson: "A2.2" },	{ front: "has stuck / put (in)", back: "hat gesteckt", lesson: "A2.2" },
{ front: "lock / castle", back: "das Schloss", lesson: "A2.2" },	{ front: "locks / castles", back: "die Schlösser", lesson: "A2.2" },
{ front: "to stand", back: "stehen", lesson: "A2.2" },	{ front: "has stood / been standing", back: "hat gestanden", lesson: "A2.2" },
{ front: "picture / image", back: "das Bild", lesson: "A2.2" },	{ front: "pictures / images", back: "die Bilder", lesson: "A2.2" },
{ front: "wall", back: "die Wand", lesson: "A2.2" },	{ front: "walls", back: "die Wände", lesson: "A2.2" },
{ front: "cat", back: "die Katze", lesson: "A2.2" },	{ front: "cats", back: "die Katzen", lesson: "A2.2" },
{ front: "to lay / put (horizontal)", back: "legen", lesson: "A2.2" },	{ front: "has laid / put", back: "hat gelegt", lesson: "A2.2" },
{ front: "peace / quiet", back: "die Ruhe", lesson: "A2.2" },	
{ front: "sign / shield", back: "das Schild", lesson: "A2.2" },	{ front: "signs / shields", back: "die Schilder", lesson: "A2.2" },
{ front: "to disturb", back: "stören", lesson: "A2.2" },	{ front: "has disturbed", back: "hat gestört", lesson: "A2.2" },
{ front: "to put / place (vertical)", back: "stellen", lesson: "A2.2" },	{ front: "has put / placed", back: "hat gestellt", lesson: "A2.2" },
{ front: "pen / pencil", back: "der Stift", lesson: "A2.2" },	{ front: "pens / pencils", back: "die Stifte", lesson: "A2.2" },
{ front: "to build", back: "bauen", lesson: "A2.2" },	{ front: "has built", back: "hat gebaut", lesson: "A2.2" },
{ front: "there / to there", back: "dahin", lesson: "A2.2" },	
{ front: "plant", back: "die Pflanze", lesson: "A2.2" },	{ front: "plants", back: "die Pflanzen", lesson: "A2.2" },
{ front: "there / to there (directional)", back: "dorthin", lesson: "A2.2" },	
{ front: "caution / care", back: "die Vorsicht", lesson: "A2.2" },	
{ front: "to fall down", back: "runterfallen", lesson: "A2.2" },	{ front: "has fallen down", back: "ist gefallen", lesson: "A2.2" },
{ front: "in / inside", back: "rein", lesson: "A2.2" },	
{ front: "garbage / trash", back: "der Müll", lesson: "A2.2" },	
{ front: "out / outside", back: "raus", lesson: "A2.2" },	
{ front: "to come in", back: "reinkommen", lesson: "A2.2" },	{ front: "has come in", back: "ist reingekommen", lesson: "A2.2" },
{ front: "message / notification", back: "die Mitteilung", lesson: "A2.2" },	{ front: "messages / notifications", back: "die Mitteilungen", lesson: "A2.2" },
{ front: "resident (male)", back: "der Bewohner", lesson: "A2.2" },	{ front: "residents (male or mixed)", back: "die Bewohner", lesson: "A2.2" },
{ front: "resident (female)", back: "die Bewohnerin", lesson: "A2.2" },	{ front: "residents (female)", back: "die Bewohnerinnen", lesson: "A2.2" },
{ front: "to separate / split", back: "trennen", lesson: "A2.2" },	{ front: "has separated", back: "hat getrennt", lesson: "A2.2" },
{ front: "bio- / organic", back: "bio-", lesson: "A2.2" },	
{ front: "waste / garbage", back: "der Abfall", lesson: "A2.2" },	{ front: "wastes / garbages", back: "die Abfälle", lesson: "A2.2" },
{ front: "plastic", back: "das Plastik", lesson: "A2.2" },	
{ front: "to observe / take note of", back: "beachten", lesson: "A2.2" },	{ front: "has observed / taken note of", back: "hat beachtet", lesson: "A2.2" },
{ front: "garbage collection", back: "die Müllabfuhr", lesson: "A2.2" },	{ front: "garbage collections", back: "die Müllabfuhren", lesson: "A2.2" },
{ front: "garbage bin", back: "die Mülltonne", lesson: "A2.2" },	{ front: "garbage bins", back: "die Mülltonnen", lesson: "A2.2" },
{ front: "to put down / park", back: "abstellen", lesson: "A2.2" },	{ front: "has put down / parked", back: "hat abgestellt", lesson: "A2.2" },
{ front: "driveway / entrance for vehicles", back: "die Einfahrt", lesson: "A2.2" },	{ front: "driveways", back: "die Einfahrten", lesson: "A2.2" },
{ front: "courtyard / yard", back: "der Hof", lesson: "A2.2" },	{ front: "courtyards / yards", back: "die Höfe", lesson: "A2.2" },
{ front: "to cancel / terminate (contract)", back: "kündigen", lesson: "A2.2" },	{ front: "has canceled / terminated", back: "hat gekündigt", lesson: "A2.2" },
{ front: "contract / agreement", back: "der Vertrag", lesson: "A2.2" },	{ front: "contracts / agreements", back: "die Verträge", lesson: "A2.2" },
{ front: "to hope", back: "hoffen", lesson: "A2.2" },	{ front: "has hoped", back: "hat gehofft", lesson: "A2.2" },
{ front: "understanding", back: "das Verständnis", lesson: "A2.2" },	
{ front: "to conclude / complete / lock", back: "abschließen", lesson: "A2.2" },	{ front: "has concluded / completed / locked", back: "hat abgeschlossen", lesson: "A2.2" },
{ front: "low", back: "niedrig", lesson: "A2.2" },	
{ front: "costs / expenses", back: "die Kosten", lesson: "A2.2" },	
{ front: "to increase (oneself)", back: "(sich) erhöhen", lesson: "A2.2" },	{ front: "has increased", back: "hat erhöht", lesson: "A2.2" },
{ front: "to remove", back: "entfernen", lesson: "A2.2" },	{ front: "has removed", back: "hat entfernt", lesson: "A2.2" },
{ front: "object / item", back: "der Gegenstand", lesson: "A2.2" },	{ front: "objects / items", back: "die Gegenstände", lesson: "A2.2" },
{ front: "to heat", back: "heizen", lesson: "A2.2" },	{ front: "has heated", back: "hat geheizt", lesson: "A2.2" },
{ front: "baby stroller", back: "der Kinderwagen", lesson: "A2.2" },	{ front: "baby strollers", back: "die Kinderwagen", lesson: "A2.2" },
{ front: "elevator / lift", back: "der Aufzug", lesson: "A2.2" },	{ front: "elevators", back: "die Aufzüge", lesson: "A2.2" },
{ front: "stairs", back: "die Treppe", lesson: "A2.2" },	{ front: "stairs", back: "die Treppen", lesson: "A2.2" },
{ front: "mailbox", back: "der Briefkasten", lesson: "A2.2" },	{ front: "mailboxes", back: "die Briefkästen", lesson: "A2.2" },
{ front: "solution", back: "die Lösung", lesson: "A2.2" },	{ front: "solutions", back: "die Lösungen", lesson: "A2.2" },
{ front: "quite / rather", back: "ziemlich", lesson: "A2.2" },	
{ front: "to be right", back: "recht haben", lesson: "A2.2" },	{ front: "has been right", back: "hat recht gehabt", lesson: "A2.2" },
{ front: "question", back: "die Frage", lesson: "A2.2" },	{ front: "questions", back: "die Fragen", lesson: "A2.2" },
{ front: "request / favor", back: "die Bitte", lesson: "A2.2" },	{ front: "requests / favors", back: "die Bitten", lesson: "A2.2" },
{ front: "intention / purpose", back: "die Absicht", lesson: "A2.2" },	{ front: "intentions / purposes", back: "die Absichten", lesson: "A2.2" },
{ front: "shift (work), layer", back: "die Schicht", lesson: "A2.2" },	{ front: "shifts / layers", back: "die Schichten", lesson: "A2.2" },
{ front: "to let / leave", back: "lassen", lesson: "A2.2" },	{ front: "has let / left", back: "hat gelassen", lesson: "A2.2" },
{ front: "to throw", back: "werfen", lesson: "A2.2" },	{ front: "has thrown", back: "hat geworfen", lesson: "A2.2" },
{ front: "to pay attention / watch out", back: "aufpassen", lesson: "A2.2" },	{ front: "has paid attention / watched out", back: "hat aufgepasst", lesson: "A2.2" },
{ front: "to pour / water", back: "gießen", lesson: "A2.2" },	{ front: "has poured / watered", back: "hat gegossen", lesson: "A2.2" },
{ front: "really / truly", back: "wirklich", lesson: "A2.2" },	
{ front: "to ring (bell)", back: "klingeln", lesson: "A2.2" },	{ front: "has rung", back: "hat geklingelt", lesson: "A2.2" },
{ front: "to discuss", back: "besprechen", lesson: "A2.2" },	{ front: "has discussed", back: "hat besprochen", lesson: "A2.2" },
{ front: "to feed", back: "füttern", lesson: "A2.2" },	{ front: "has fed", back: "hat gefüttert", lesson: "A2.2" },
{ front: "craftsman / handyman", back: "der Handwerker", lesson: "A2.2" },	{ front: "craftsmen / handymen", back: "die Handwerker", lesson: "A2.2" },
{ front: "organic waste", back: "der Biomüll", lesson: "A2.2" },	
{ front: "dessert", back: "die Nachspeise", lesson: "A2.3" },	{ front: "desserts", back: "die Nachspeisen", lesson: "A2.3" },
{ front: "honey", back: "der Honig", lesson: "A2.3" },	
{ front: "mostly / usually", back: "meistens", lesson: "A2.3" },	
{ front: "seldom / rarely", back: "selten", lesson: "A2.3" },	
{ front: "to be correct / agree", back: "stimmen", lesson: "A2.3" },	{ front: "has been correct / agreed", back: "hat gestimmt", lesson: "A2.3" },
{ front: "on the way / traveling", back: "unterwegs", lesson: "A2.3" },	
{ front: "meal", back: "die Mahlzeit", lesson: "A2.3" },	{ front: "meals", back: "die Mahlzeiten", lesson: "A2.3" },
{ front: "at noon / midday", back: "mittags", lesson: "A2.3" },	
{ front: "in the morning", back: "morgens", lesson: "A2.3" },	
{ front: "cup", back: "die Tasse", lesson: "A2.3" },	{ front: "cups", back: "die Tassen", lesson: "A2.3" },
{ front: "certainly / definitely", back: "bestimmt", lesson: "A2.3" },	
{ front: "food / meal", back: "das Essen", lesson: "A2.3" },	
{ front: "lunch", back: "das Mittagessen", lesson: "A2.3" },	{ front: "lunches", back: "die Mittagessen", lesson: "A2.3" },
{ front: "canteen / cafeteria", back: "die Kantine", lesson: "A2.3" },	{ front: "canteens / cafeterias", back: "die Kantinen", lesson: "A2.3" },
{ front: "almost / nearly", back: "fast", lesson: "A2.3" },	
{ front: "vegetarian", back: "vegetarisch", lesson: "A2.3" },	
{ front: "dish / course", back: "das Gericht", lesson: "A2.3" },	{ front: "dishes / courses", back: "die Gerichte", lesson: "A2.3" },
{ front: "habit", back: "die Gewohnheit", lesson: "A2.3" },	{ front: "habits", back: "die Gewohnheiten", lesson: "A2.3" },
{ front: "to take over", back: "übernehmen", lesson: "A2.3" },	{ front: "has taken over", back: "hat übernommen", lesson: "A2.3" },
{ front: "jam / marmalade", back: "die Marmelade", lesson: "A2.3" },	{ front: "jams / marmalades", back: "die Marmeladen", lesson: "A2.3" },
{ front: "German", back: "deutsch", lesson: "A2.3" },	
{ front: "pig / pork", back: "das Schwein", lesson: "A2.3" },	{ front: "pigs / pork", back: "die Schweine", lesson: "A2.3" },
{ front: "alcohol", back: "der Alkohol", lesson: "A2.3" },	
{ front: "twice", back: "zweimal", lesson: "A2.3" },	
{ front: "spoon", back: "der Löffel", lesson: "A2.3" },	{ front: "spoons", back: "die Löffel", lesson: "A2.3" },
{ front: "knife", back: "das Messer", lesson: "A2.3" },	{ front: "knives", back: "die Messer", lesson: "A2.3" },
{ front: "plate", back: "der Teller", lesson: "A2.3" },	{ front: "plates", back: "die Teller", lesson: "A2.3" },
{ front: "fork", back: "die Gabel", lesson: "A2.3" },	{ front: "forks", back: "die Gabeln", lesson: "A2.3" },
{ front: "quartet", back: "das Quartett", lesson: "A2.3" },	{ front: "quartets", back: "die Quartette", lesson: "A2.3" },
{ front: "pot", back: "der Topf", lesson: "A2.3" },	{ front: "pots", back: "die Töpfe", lesson: "A2.3" },
{ front: "jug / pot", back: "die Kanne", lesson: "A2.3" },	{ front: "jugs / pots", back: "die Kannen", lesson: "A2.3" },
{ front: "bowl", back: "die Schüssel", lesson: "A2.3" },	{ front: "bowls", back: "die Schüsseln", lesson: "A2.3" },
{ front: "pan", back: "die Pfanne", lesson: "A2.3" },	{ front: "pans", back: "die Pfannen", lesson: "A2.3" },
{ front: "appetite", back: "der Appetit", lesson: "A2.3" },	
{ front: "to smell", back: "riechen", lesson: "A2.3" },	{ front: "has smelled", back: "hat gerochen", lesson: "A2.3" },
{ front: "to undress / take off clothes", back: "(sich) ausziehen", lesson: "A2.3" },	{ front: "has undressed / taken off clothes", back: "hat ausgezogen", lesson: "A2.3" },
{ front: "full", back: "voll", lesson: "A2.3" },	
{ front: "okay", back: "okay", lesson: "A2.3" },	
{ front: "before / previously", back: "vorher", lesson: "A2.3" },	
{ front: "polite", back: "höflich", lesson: "A2.3" },	
{ front: "diet", back: "die Diät", lesson: "A2.3" },	{ front: "diets", back: "die Diäten", lesson: "A2.3" },
{ front: "full (after eating)", back: "satt", lesson: "A2.3" },	
{ front: "different / otherwise", back: "anders", lesson: "A2.3" },	
{ front: "just as / equally", back: "genauso", lesson: "A2.3" },	
{ front: "to surprise", back: "überraschen", lesson: "A2.3" },	{ front: "has surprised", back: "hat überrascht", lesson: "A2.3" },
{ front: "strange / odd", back: "seltsam", lesson: "A2.3" },	
{ front: "spicy / sharp", back: "scharf", lesson: "A2.3" },	
{ front: "sweet", back: "süß", lesson: "A2.3" },	
{ front: "salty", back: "salzig", lesson: "A2.3" },	
{ front: "fat / greasy", back: "fett", lesson: "A2.3" },	
{ front: "to lead / manage", back: "leiten", lesson: "A2.3" },	{ front: "has led / managed", back: "hat geleitet", lesson: "A2.3" },
{ front: "fresh", back: "frisch", lesson: "A2.3" },	
{ front: "round", back: "rund", lesson: "A2.3" },	
{ front: "different / various", back: "unterschiedlich", lesson: "A2.3" },	
{ front: "type / kind", back: "die Art", lesson: "A2.3" },	{ front: "types / kinds", back: "die Arten", lesson: "A2.3" },
{ front: "muesli / cereal", back: "das Müsli", lesson: "A2.3" },	{ front: "mueslis / cereals", back: "die Müslis", lesson: "A2.3" },
{ front: "fruit", back: "die Frucht", lesson: "A2.3" },	{ front: "fruits", back: "die Früchte", lesson: "A2.3" },
{ front: "appetizer / starter", back: "die Vorspeise", lesson: "A2.3" },	{ front: "appetizers / starters", back: "die Vorspeisen", lesson: "A2.3" },
{ front: "main- (prefix)", back: "Haupt-", lesson: "A2.3" },	
{ front: "percent", back: "das Prozent", lesson: "A2.3" },	{ front: "percents", back: "die Prozente", lesson: "A2.3" },
{ front: "market", back: "der Markt", lesson: "A2.3" },	{ front: "markets", back: "die Märkte", lesson: "A2.3" },
{ front: "regional", back: "regional", lesson: "A2.3" },	
{ front: "product", back: "das Produkt", lesson: "A2.3" },	{ front: "products", back: "die Produkte", lesson: "A2.3" },
{ front: "surroundings / environment", back: "die Umgebung", lesson: "A2.3" },	{ front: "surroundings / environments", back: "die Umgebungen", lesson: "A2.3" },
{ front: "steak", back: "das Steak", lesson: "A2.3" },	{ front: "steaks", back: "die Steaks", lesson: "A2.3" },
{ front: "factory", back: "die Fabrik", lesson: "A2.3" },	{ front: "factories", back: "die Fabriken", lesson: "A2.3" },
{ front: "against", back: "gegen", lesson: "A2.3" },	
{ front: "to plan", back: "planen", lesson: "A2.3" },	{ front: "has planned", back: "hat geplant", lesson: "A2.3" },
{ front: "daily", back: "täglich", lesson: "A2.3" },	
{ front: "schnitzel (breaded cutlet)", back: "das Schnitzel", lesson: "A2.3" },	{ front: "schnitzels", back: "die Schnitzel", lesson: "A2.3" },
{ front: "soup", back: "die Suppe", lesson: "A2.3" },	{ front: "soups", back: "die Suppen", lesson: "A2.3" },
{ front: "piece", back: "das Stück", lesson: "A2.3" },	{ front: "pieces", back: "die Stücke", lesson: "A2.3" },
{ front: "lemon", back: "die Zitrone", lesson: "A2.3" },	{ front: "lemons", back: "die Zitronen", lesson: "A2.3" },
{ front: "clean", back: "sauber", lesson: "A2.3" },	
{ front: "beef / cattle", back: "das Rind", lesson: "A2.3" },	{ front: "beef / cattle", back: "die Rinder", lesson: "A2.3" },
{ front: "roast", back: "der Braten", lesson: "A2.3" },	{ front: "roasts", back: "die Braten", lesson: "A2.3" },
{ front: "occupied / taken", back: "besetzt", lesson: "A2.3" },	
{ front: "tip (money)", back: "das Trinkgeld", lesson: "A2.3" },	{ front: "tips", back: "die Trinkgelder", lesson: "A2.3" },
{ front: "glass / jar", back: "das Glas", lesson: "A2.3" },	{ front: "glasses / jars", back: "die Gläser", lesson: "A2.3" },
{ front: "reservation", back: "die Reservierung", lesson: "A2.4" },	{ front: "reservations", back: "die Reservierungen", lesson: "A2.4" },
{ front: "confirmation", back: "die Bestätigung", lesson: "A2.4" },	{ front: "confirmations", back: "die Bestätigungen", lesson: "A2.4" },
{ front: "to note / write down", back: "notieren", lesson: "A2.4" },	{ front: "has noted / written down", back: "hat notiert", lesson: "A2.4" },
{ front: "online", back: "online", lesson: "A2.4" },	
{ front: "difficult / hard", back: "schwierig", lesson: "A2.4" },	
{ front: "meeting / discussion", back: "die Besprechung", lesson: "A2.4" },	{ front: "meetings / discussions", back: "die Besprechungen", lesson: "A2.4" },
{ front: "namely / that is", back: "nämlich", lesson: "A2.4" },	
{ front: "friendly", back: "freundlich", lesson: "A2.4" },	
{ front: "clever / smart", back: "klug", lesson: "A2.4" },	
{ front: "mistake / error", back: "der Fehler", lesson: "A2.4" },	{ front: "mistakes / errors", back: "die Fehler", lesson: "A2.4" },
{ front: "if / when", back: "wenn", lesson: "A2.4" },	
{ front: "sure / safe", back: "sicher", lesson: "A2.4" },	
{ front: "material", back: "das Material", lesson: "A2.4" },	{ front: "materials", back: "die Materialien", lesson: "A2.4" },
{ front: "participant (male)", back: "der Teilnehmer", lesson: "A2.4" },	{ front: "participants (male)", back: "die Teilnehmer", lesson: "A2.4" },
{ front: "participant (female)", back: "die Teilnehmerin", lesson: "A2.4" },	{ front: "participants (female)", back: "die Teilnehmerinnen", lesson: "A2.4" },
{ front: "tip / advice", back: "der Tipp", lesson: "A2.4" },	{ front: "tips / advices", back: "die Tipps", lesson: "A2.4" },
{ front: "regularly", back: "regelmäßig", lesson: "A2.4" },	
{ front: "to pay attention to", back: "achten auf", lesson: "A2.4" },	{ front: "has paid attention to", back: "hat geachtet", lesson: "A2.4" },
{ front: "note / slip", back: "der Zettel", lesson: "A2.4" },	{ front: "notes / slips", back: "die Zettel", lesson: "A2.4" },
{ front: "department store", back: "das Kaufhaus", lesson: "A2.4" },	{ front: "department stores", back: "die Kaufhäuser", lesson: "A2.4" },
{ front: "to use", back: "nutzen", lesson: "A2.4" },	{ front: "has used", back: "hat genutzt", lesson: "A2.4" },
{ front: "platform", back: "die Plattform", lesson: "A2.4" },	{ front: "platforms", back: "die Plattformen", lesson: "A2.4" },
{ front: "forum", back: "das Forum", lesson: "A2.4" },	{ front: "forums", back: "die Foren", lesson: "A2.4" },
{ front: "agency", back: "die Agentur", lesson: "A2.4" },	{ front: "agencies", back: "die Agenturen", lesson: "A2.4" },
{ front: "temporary work", back: "die Zeitarbeit", lesson: "A2.4" },	{ front: "temporary works", back: "die Zeitarbeiten", lesson: "A2.4" },
{ front: "trainee / apprentice (m/f)", back: "der Auszubildende / die Auszubildende", lesson: "A2.4" },	{ front: "trainees / apprentices", back: "die Auszubildenden", lesson: "A2.4" },
{ front: "to switch off / turn off", back: "ausschalten", lesson: "A2.4" },	{ front: "has switched off / turned off", back: "hat ausgeschaltet", lesson: "A2.4" },
{ front: "labor union", back: "die Gewerkschaft", lesson: "A2.4" },	{ front: "labor unions", back: "die Gewerkschaften", lesson: "A2.4" },
{ front: "safety / security", back: "die Sicherheit", lesson: "A2.4" },	
{ front: "protection", back: "der Schutz", lesson: "A2.4" },	
{ front: "business / company", back: "der Betrieb", lesson: "A2.4" },	{ front: "businesses / companies", back: "die Betriebe", lesson: "A2.4" },
{ front: "assembly / meeting", back: "die Versammlung", lesson: "A2.4" },	{ front: "assemblies / meetings", back: "die Versammlungen", lesson: "A2.4" },
{ front: "deadline", back: "die Frist", lesson: "A2.4" },	{ front: "deadlines", back: "die Fristen", lesson: "A2.4" },
{ front: "further training", back: "die Weiterbildung", lesson: "A2.4" },	{ front: "further trainings", back: "die Weiterbildungen", lesson: "A2.4" },
{ front: "interest", back: "das Interesse", lesson: "A2.4" },	
{ front: "to retire", back: "in Rente gehen", lesson: "A2.4" },	
{ front: "life", back: "das Leben", lesson: "A2.4" },	
{ front: "retiree (male)", back: "der Rentner", lesson: "A2.4" },	{ front: "retirees (male)", back: "die Rentner", lesson: "A2.4" },
{ front: "retiree (female)", back: "die Rentnerin", lesson: "A2.4" },	{ front: "retirees (female)", back: "die Rentnerinnen", lesson: "A2.4" },
{ front: "event / function", back: "die Veranstaltung", lesson: "A2.4" },	{ front: "events / functions", back: "die Veranstaltungen", lesson: "A2.4" },
{ front: "to turn / address", back: "wenden", lesson: "A2.4" },	{ front: "has turned / addressed", back: "hat gewandt", lesson: "A2.4" },
{ front: "to take place", back: "stattfinden", lesson: "A2.4" },	{ front: "has taken place", back: "hat stattgefunden", lesson: "A2.4" },
{ front: "workers’ council", back: "der Betriebsrat", lesson: "A2.4" },	{ front: "workers’ councils", back: "die Betriebsräte", lesson: "A2.4" },
{ front: "to report", back: "berichten", lesson: "A2.4" },	{ front: "has reported", back: "hat berichtet", lesson: "A2.4" },
{ front: "to advise", back: "beraten", lesson: "A2.4" },	{ front: "has advised", back: "hat beraten", lesson: "A2.4" },
{ front: "tariff / rate", back: "der Tarif", lesson: "A2.4" },	{ front: "tariffs / rates", back: "die Tarife", lesson: "A2.4" },
{ front: "right / law", back: "das Recht", lesson: "A2.4" },	{ front: "rights / laws", back: "die Rechte", lesson: "A2.4" },
{ front: "termination / resignation", back: "die Kündigung", lesson: "A2.4" },	{ front: "terminations / resignations", back: "die Kündigungen", lesson: "A2.4" },
{ front: "dismissal", back: "die Entlassung", lesson: "A2.4" },	{ front: "dismissals", back: "die Entlassungen", lesson: "A2.4" },
{ front: "regulation / rule", back: "die Vorschrift", lesson: "A2.4" },	{ front: "regulations / rules", back: "die Vorschriften", lesson: "A2.4" },
{ front: "without", back: "ohne", lesson: "A2.4" },	
{ front: "to dismiss / release", back: "entlassen", lesson: "A2.4" },	{ front: "has dismissed / released", back: "hat entlassen", lesson: "A2.4" },
{ front: "to protect", back: "schützen", lesson: "A2.4" },	{ front: "has protected", back: "hat geschützt", lesson: "A2.4" },
{ front: "to thank", back: "(sich) bedanken", lesson: "A2.4" },	{ front: "has thanked", back: "hat bedankt", lesson: "A2.4" },
{ front: "to pass on (a message)", back: "ausrichten", lesson: "A2.4" },	{ front: "has passed on", back: "hat ausgerichtet", lesson: "A2.4" },
{ front: "export", back: "der Export", lesson: "A2.4" },	{ front: "exports", back: "die Exporte", lesson: "A2.4" },
{ front: "to try", back: "versuchen", lesson: "A2.4" },	{ front: "has tried", back: "hat versucht", lesson: "A2.4" },
{ front: "nobody / no one", back: "niemand", lesson: "A2.4" },	
{ front: "end of workday", back: "der Feierabend", lesson: "A2.4" },	{ front: "ends of workday", back: "die Feierabende", lesson: "A2.4" },
{ front: "import", back: "der Import", lesson: "A2.4" },	{ front: "imports", back: "die Importe", lesson: "A2.4" },
{ front: "employee (male)", back: "der Arbeitnehmer", lesson: "A2.4" },	{ front: "employees (male)", back: "die Arbeitnehmer", lesson: "A2.4" },
{ front: "employee (female)", back: "die Arbeitnehmerin", lesson: "A2.4" },	{ front: "employees (female)", back: "die Arbeitnehmerinnen", lesson: "A2.4" },
{ front: "average", back: "durchschnittlich", lesson: "A2.4" },	
{ front: "idea / notion", back: "die Ahnung", lesson: "A2.4" },	{ front: "ideas / notions", back: "die Ahnungen", lesson: "A2.4" },
{ front: "national holiday", back: "der Nationalfeiertag", lesson: "A2.4" },	{ front: "national holidays", back: "die Nationalfeiertage", lesson: "A2.4" },
{ front: "overtime (work)", back: "die Überstunde", lesson: "A2.4" },	{ front: "overtime hours", back: "die Überstunden", lesson: "A2.4" },
{ front: "wage / salary", back: "der Lohn", lesson: "A2.4" },	{ front: "wages / salaries", back: "die Löhne", lesson: "A2.4" },
{ front: "to offer", back: "bieten", lesson: "A2.4" },	{ front: "has offered", back: "hat geboten", lesson: "A2.4" },
{ front: "rule", back: "die Regel", lesson: "A2.4" },	{ front: "rules", back: "die Regeln", lesson: "A2.4" },
{ front: "industry", back: "die Industrie", lesson: "A2.4" },	
{ front: "average", back: "der Durchschnitt", lesson: "A2.4" },	{ front: "averages", back: "die Durchschnitte", lesson: "A2.4" },
{ front: "most (people)", back: "die meisten", lesson: "A2.4" },	
{ front: "altogether / in total", back: "insgesamt", lesson: "A2.4" },	
{ front: "to apply / be valid", back: "gelten", lesson: "A2.4" },	{ front: "has applied / been valid", back: "hat gegolten", lesson: "A2.4" },
{ front: "at least", back: "mindestens", lesson: "A2.4" },	
{ front: "to move (oneself)", back: "(sich) bewegen", lesson: "A2.5" },	{ front: "has moved (oneself)", back: "hat bewegt", lesson: "A2.5" },
{ front: "to be interested in", back: "(sich) interessieren für", lesson: "A2.5" },	{ front: "has been interested in", back: "hat interessiert", lesson: "A2.5" },
{ front: "dance", back: "der Tanz", lesson: "A2.5" },	{ front: "dances", back: "die Tänze", lesson: "A2.5" },
{ front: "basketball", back: "der Basketball", lesson: "A2.5" },	
{ front: "to feel (oneself)", back: "(sich) fühlen", lesson: "A2.5" },	{ front: "has felt (oneself)", back: "hat gefühlt", lesson: "A2.5" },
{ front: "too little / too few", back: "zu wenig", lesson: "A2.5" },	
{ front: "video", back: "das Video", lesson: "A2.5" },	{ front: "videos", back: "die Videos", lesson: "A2.5" },
{ front: "to fall down", back: "hinfallen", lesson: "A2.5" },	{ front: "has fallen down", back: "ist hingefallen", lesson: "A2.5" },
{ front: "desire / appetite", back: "die Lust", lesson: "A2.5" },	
{ front: "club / association", back: "der Verein", lesson: "A2.5" },	{ front: "clubs / associations", back: "die Vereine", lesson: "A2.5" },
{ front: "attempt", back: "der Versuch", lesson: "A2.5" },	{ front: "attempts", back: "die Versuche", lesson: "A2.5" },
{ front: "champion / master", back: "der Meister", lesson: "A2.5" },	{ front: "champions / masters", back: "die Meister", lesson: "A2.5" },
{ front: "sport discipline", back: "die Sportart", lesson: "A2.5" },	{ front: "sport disciplines", back: "die Sportarten", lesson: "A2.5" },
{ front: "relaxation", back: "die Entspannung", lesson: "A2.5" },	
{ front: "nutrition", back: "die Ernährung", lesson: "A2.5" },	
{ front: "movement", back: "die Bewegung", lesson: "A2.5" },	{ front: "movements", back: "die Bewegungen", lesson: "A2.5" },
{ front: "fit", back: "fit", lesson: "A2.5" },	
{ front: "walk / stroll", back: "der Spaziergang", lesson: "A2.5" },	{ front: "walks / strolls", back: "die Spaziergänge", lesson: "A2.5" },
{ front: "to arrange to meet with", back: "(sich) verabreden mit", lesson: "A2.5" },	{ front: "has arranged to meet with", back: "hat verabredet", lesson: "A2.5" },
{ front: "to rest (oneself)", back: "(sich) ausruhen", lesson: "A2.5" },	{ front: "has rested (oneself)", back: "hat ausgeruht", lesson: "A2.5" },
{ front: "to feed / nourish oneself", back: "(sich) ernähren", lesson: "A2.5" },	{ front: "has fed / nourished oneself", back: "hat ernährt", lesson: "A2.5" },
{ front: "to get annoyed (about)", back: "(sich) ärgern (über)", lesson: "A2.5" },	{ front: "has gotten annoyed (about)", back: "hat geärgert", lesson: "A2.5" },
{ front: "to put on makeup", back: "(sich) schminken", lesson: "A2.5" },	{ front: "has put on makeup", back: "hat geschminkt", lesson: "A2.5" },
{ front: "to shave (oneself)", back: "(sich) rasieren", lesson: "A2.5" },	{ front: "has shaved (oneself)", back: "hat rasiert", lesson: "A2.5" },
{ front: "to change clothes", back: "(sich) umziehen", lesson: "A2.5" },	{ front: "has changed clothes", back: "hat umgezogen", lesson: "A2.5" },
{ front: "to comb (oneself)", back: "(sich) kämmen", lesson: "A2.5" },	{ front: "has combed (oneself)", back: "hat gekämmt", lesson: "A2.5" },
{ front: "to wash (oneself)", back: "(sich) waschen", lesson: "A2.5" },	{ front: "has washed (oneself)", back: "hat gewaschen", lesson: "A2.5" },
{ front: "to hurry (oneself)", back: "(sich) beeilen", lesson: "A2.5" },	{ front: "has hurried (oneself)", back: "hat beeilt", lesson: "A2.5" },
{ front: "to concentrate (on)", back: "(sich) konzentrieren (auf)", lesson: "A2.5" },	{ front: "has concentrated (on)", back: "hat konzentriert", lesson: "A2.5" },
{ front: "to complain (about)", back: "(sich) beschweren (über)", lesson: "A2.5" },	{ front: "has complained (about)", back: "hat beschwert", lesson: "A2.5" },
{ front: "at all / generally", back: "überhaupt", lesson: "A2.5" },	
{ front: "magazine", back: "die Zeitschrift", lesson: "A2.5" },	{ front: "magazines", back: "die Zeitschriften", lesson: "A2.5" },
{ front: "history / story", back: "die Geschichte", lesson: "A2.5" },	
{ front: "theater", back: "das Theater", lesson: "A2.5" },	{ front: "theaters", back: "die Theater", lesson: "A2.5" },
{ front: "news", back: "die Nachrichten", lesson: "A2.5" },	
{ front: "world championship", back: "die Weltmeisterschaft", lesson: "A2.5" },	{ front: "world championships", back: "die Weltmeisterschaften", lesson: "A2.5" },
{ front: "weather forecast", back: "die Wettervorhersage", lesson: "A2.5" },	{ front: "weather forecasts", back: "die Wettervorhersagen", lesson: "A2.5" },
{ front: "team", back: "die Mannschaft", lesson: "A2.5" },	{ front: "teams", back: "die Mannschaften", lesson: "A2.5" },
{ front: "visit", back: "der Besuch", lesson: "A2.5" },	{ front: "visits", back: "die Besuche", lesson: "A2.5" },
{ front: "to take care of", back: "(sich) kümmern um", lesson: "A2.5" },	{ front: "has taken care of", back: "hat gekümmert", lesson: "A2.5" },
{ front: "to dream of", back: "träumen von", lesson: "A2.5" },	{ front: "has dreamed of", back: "hat geträumt", lesson: "A2.5" },
{ front: "fear / anxiety", back: "die Angst", lesson: "A2.5" },	{ front: "fears / anxieties", back: "die Ängste", lesson: "A2.5" },
{ front: "honest", back: "ehrlich", lesson: "A2.5" },	
{ front: "gold", back: "das Gold", lesson: "A2.5" },	
{ front: "season", back: "die Saison", lesson: "A2.5" },	{ front: "seasons", back: "die Saisons", lesson: "A2.5" },
{ front: "to remember / recall", back: "(sich) erinnern an", lesson: "A2.5" },	{ front: "has remembered / recalled", back: "hat erinnert", lesson: "A2.5" },
{ front: "to think of", back: "denken an", lesson: "A2.5" },	{ front: "has thought of", back: "hat gedacht", lesson: "A2.5" },
{ front: "vacation / holidays", back: "die Ferien", lesson: "A2.5" },	
{ front: "gymnastics", back: "die Gymnastik", lesson: "A2.5" },	
{ front: "table tennis", back: "das Tischtennis", lesson: "A2.5" },	
{ front: "volleyball", back: "der Volleyball", lesson: "A2.5" },	
{ front: "fitness", back: "die Fitness", lesson: "A2.5" },	
{ front: "contribution / post", back: "der Beitrag", lesson: "A2.5" },	{ front: "contributions / posts", back: "die Beiträge", lesson: "A2.5" },
{ front: "to amount to / total", back: "betragen", lesson: "A2.5" },	{ front: "has amounted to / totaled", back: "hat betragen", lesson: "A2.5" },
{ front: "group", back: "die Gruppe", lesson: "A2.5" },	{ front: "groups", back: "die Gruppen", lesson: "A2.5" },
{ front: "reduction / discount", back: "die Ermäßigung", lesson: "A2.5" },	{ front: "reductions / discounts", back: "die Ermäßigungen", lesson: "A2.5" },
{ front: "free of charge", back: "kostenlos", lesson: "A2.5" },	
{ front: "trainee / apprentice", back: "der Azubi", lesson: "A2.5" },	{ front: "trainees / apprentices", back: "die Azubis", lesson: "A2.5" },
{ front: "additional", back: "zusätzlich", lesson: "A2.5" },	
{ front: "active", back: "aktiv", lesson: "A2.5" },	
{ front: "to jog", back: "joggen", lesson: "A2.5" },	{ front: "has jogged", back: "ist gejoggt", lesson: "A2.5" },
{ front: "to hold (oneself)", back: "(sich) halten", lesson: "A2.5" },	{ front: "has held", back: "hat gehalten", lesson: "A2.5" },
{ front: "frequent", back: "häufig", lesson: "A2.5" },	
{ front: "the cause", back: "die Ursache", lesson: "A2.5" },	{ front: "the causes", back: "die Ursachen", lesson: "A2.5" },
{ front: "the illness", back: "die Krankheit", lesson: "A2.5" },	{ front: "the illnesses", back: "die Krankheiten", lesson: "A2.5" },
{ front: "the screen", back: "der Bildschirm", lesson: "A2.5" },	{ front: "the screens", back: "die Bildschirme", lesson: "A2.5" },
{ front: "the body", back: "der Körper", lesson: "A2.5" },	{ front: "the bodies", back: "die Körper", lesson: "A2.5" },
{ front: "besides/also", back: "außerdem", lesson: "A2.5" },	
{ front: "the air", back: "die Luft", lesson: "A2.5" },	
{ front: "the examination/investigation", back: "die Untersuchung", lesson: "A2.5" },	{ front: "the examinations/investigations", back: "die Untersuchungen", lesson: "A2.5" },
{ front: "to manage/accomplish", back: "schaffen", lesson: "A2.5" },	{ front: "has managed/accomplished", back: "hat geschafft", lesson: "A2.5" },
{ front: "inexpensive", back: "preiswert", lesson: "A2.5" },	
{ front: "to run", back: "laufen", lesson: "A2.5" },	{ front: "has run", back: "ist gelaufen", lesson: "A2.5" },
{ front: "the trend", back: "der Trend", lesson: "A2.5" },	{ front: "the trends", back: "die Trends", lesson: "A2.5" },
{ front: "the playground", back: "der Spielplatz", lesson: "A2.5" },	{ front: "the playgrounds", back: "die Spielplätze", lesson: "A2.5" },
{ front: "extra", back: "extra", lesson: "A2.5" },	
{ front: "flexible", back: "flexibel", lesson: "A2.5" },	
{ front: "the environment", back: "die Umwelt", lesson: "A2.5" },	
{ front: "the health insurance fund", back: "die Krankenkasse", lesson: "A2.5" },	{ front: "the health insurance funds", back: "die Krankenkassen", lesson: "A2.5" },
{ front: "popular", back: "beliebt", lesson: "A2.5" },	
{ front: "the route/distance", back: "die Strecke", lesson: "A2.5" },	{ front: "the routes/distances", back: "die Strecken", lesson: "A2.5" },
{ front: "clear", back: "klar", lesson: "A2.5" },	
{ front: "to exaggerate", back: "übertreiben", lesson: "A2.5" },	{ front: "has exaggerated", back: "hat übertrieben", lesson: "A2.5" },
{ front: "of course/natural", back: "selbstverständlich", lesson: "A2.5" },	
{ front: "to play tennis", back: "tennis spielen", lesson: "A2.5" },	
{ front: "to ski", back: "ski fahren", lesson: "A2.5" },	{ front: "has skied", back: "ist gefahren", lesson: "A2.5" },
{ front: "to play basketball", back: "basketball spielen", lesson: "A2.5" },	
{ front: "to do gymnastics", back: "gymnastik machen", lesson: "A2.5" },	
{ front: "to play table tennis", back: "tischtennis spielen", lesson: "A2.5" },	
{ front: "to play volleyball", back: "volleyball spielen", lesson: "A2.5" },	
{ front: "to do fitness training", back: "fitnesstraining machen", lesson: "A2.5" },	
{ front: "to play ice hockey", back: "eishockey spielen", lesson: "A2.5" },	
{ front: "to swim", back: "schwimmen", lesson: "A2.5" },	{ front: "has swum", back: "ist geschwommen", lesson: "A2.5" },
{ front: "to ride a bike", back: "fahrrad fahren", lesson: "A2.5" },	{ front: "has ridden a bike", back: "ist gefahren", lesson: "A2.5" },
{ front: "to play soccer", back: "fußball spielen", lesson: "A2.5" },	
{ front: "to hike", back: "wandern", lesson: "A2.5" },	{ front: "has hiked", back: "ist gewandert", lesson: "A2.5" },
{ front: "to dance", back: "tanzen", lesson: "A2.5" },	{ front: "has danced", back: "hat getanzt", lesson: "A2.5" },
{ front: "the report card/certificate", back: "das Zeugnis", lesson: "A2.6" },	{ front: "the report cards/certificates", back: "die Zeugnisse", lesson: "A2.6" },
{ front: "the subject/field", back: "das Fach", lesson: "A2.6" },	{ front: "the subjects/fields", back: "die Fächer", lesson: "A2.6" },
{ front: "the grade/mark", back: "die Note", lesson: "A2.6" },	{ front: "the grades/marks", back: "die Noten", lesson: "A2.6" },
{ front: "the high school (academic)", back: "das Gymnasium", lesson: "A2.6" },	{ front: "the high schools (academic)", back: "die Gymnasien", lesson: "A2.6" },
{ front: "the presentation/report", back: "das Referat", lesson: "A2.6" },	{ front: "the presentations/reports", back: "die Referate", lesson: "A2.6" },
{ front: "the high school diploma", back: "das Abitur", lesson: "A2.6" },	
{ front: "the graduation/completion", back: "der Abschluss", lesson: "A2.6" },	{ front: "the graduations/completions", back: "die Abschlüsse", lesson: "A2.6" },
{ front: "the exam", back: "die Prüfung", lesson: "A2.6" },	{ front: "the exams", back: "die Prüfungen", lesson: "A2.6" },
{ front: "lazy", back: "faul", lesson: "A2.6" },	
{ front: "terrible", back: "schrecklich", lesson: "A2.6" },	
{ front: "hardworking", back: "fleißig", lesson: "A2.6" },	
{ front: "intelligent", back: "intelligent", lesson: "A2.6" },	
{ front: "to argue", back: "streiten", lesson: "A2.6" },	{ front: "has argued", back: "hat gestritten", lesson: "A2.6" },
{ front: "that", back: "dass", lesson: "A2.6" },	
{ front: "to improve", back: "verbessern", lesson: "A2.6" },	{ front: "has improved", back: "hat verbessert", lesson: "A2.6" },
{ front: "the behavior", back: "das Verhalten", lesson: "A2.6" },	
{ front: "strict", back: "streng", lesson: "A2.6" },	
{ front: "the wish", back: "der Wunsch", lesson: "A2.6" },	{ front: "the wishes", back: "die Wünsche", lesson: "A2.6" },
{ front: "the plan", back: "der Plan", lesson: "A2.6" },	{ front: "the plans", back: "die Pläne", lesson: "A2.6" },
{ front: "the astronaut (male)", back: "der Astronaut", lesson: "A2.6" },	{ front: "the astronauts (male)", back: "die Astronauten", lesson: "A2.6" },
{ front: "the astronaut (female)", back: "die Astronautin", lesson: "A2.6" },	{ front: "the astronauts (female)", back: "die Astronautinnen", lesson: "A2.6" },
{ front: "earlier/just now", back: "vorhin", lesson: "A2.6" },	
{ front: "middle/intermediate", back: "mittler-", lesson: "A2.6" },	
{ front: "the activity", back: "die Aktivität", lesson: "A2.6" },	{ front: "the activities", back: "die Aktivitäten", lesson: "A2.6" },
{ front: "the system", back: "das System", lesson: "A2.6" },	{ front: "the systems", back: "die Systeme", lesson: "A2.6" },
{ front: "the (technical) college", back: "die (Fach-)Hochschule", lesson: "A2.6" },	{ front: "the (technical) colleges", back: "die (Fach-)Hochschulen", lesson: "A2.6" },
{ front: "the university", back: "die Universität", lesson: "A2.6" },	{ front: "the universities", back: "die Universitäten", lesson: "A2.6" },
{ front: "the comprehensive school", back: "die Gesamtschule", lesson: "A2.6" },	{ front: "the comprehensive schools", back: "die Gesamtschulen", lesson: "A2.6" },
{ front: "the secondary school", back: "die Realschule", lesson: "A2.6" },	{ front: "the secondary schools", back: "die Realschulen", lesson: "A2.6" },
{ front: "the general secondary school", back: "die Hauptschule", lesson: "A2.6" },	{ front: "the general secondary schools", back: "die Hauptschulen", lesson: "A2.6" },
{ front: "the middle school", back: "die Mittelschule", lesson: "A2.6" },	{ front: "the middle schools", back: "die Mittelschulen", lesson: "A2.6" },
{ front: "the vocational school", back: "die Berufsschule", lesson: "A2.6" },	{ front: "the vocational schools", back: "die Berufsschulen", lesson: "A2.6" },
{ front: "voluntary", back: "freiwillig", lesson: "A2.6" },	
{ front: "the daycare nursery", back: "die Krippe", lesson: "A2.6" },	{ front: "the daycare nurseries", back: "die Krippen", lesson: "A2.6" },
{ front: "physics", back: "die Physik", lesson: "A2.6" },	
{ front: "social studies", back: "die Sozialkunde", lesson: "A2.6" },	
{ front: "biology", back: "die Biologie", lesson: "A2.6" },	
{ front: "chemistry", back: "die Chemie", lesson: "A2.6" },	
{ front: "geography", back: "die Geografie", lesson: "A2.6" },	
{ front: "art", back: "die Kunst", lesson: "A2.6" },	
{ front: "history", back: "die Geschichte", lesson: "A2.6" },	
{ front: "to hate", back: "hassen", lesson: "A2.6" },	{ front: "has hated", back: "hat gehasst", lesson: "A2.6" },
{ front: "the spring (season)", back: "das Frühjahr", lesson: "A2.6" },	
{ front: "the beginning", back: "der Beginn", lesson: "A2.6" },	
{ front: "the theory", back: "die Theorie", lesson: "A2.6" },	{ front: "the theories", back: "die Theorien", lesson: "A2.6" },
{ front: "the introduction", back: "die Einführung", lesson: "A2.6" },	{ front: "the introductions", back: "die Einführungen", lesson: "A2.6" },
{ front: "to save (data)", back: "speichern", lesson: "A2.6" },	{ front: "has saved", back: "hat gespeichert", lesson: "A2.6" },
{ front: "the migrant (male)", back: "der Migrant", lesson: "A2.6" },	{ front: "the migrants (male)", back: "die Migranten", lesson: "A2.6" },
{ front: "the migrant (female)", back: "die Migrantin", lesson: "A2.6" },	{ front: "the migrants (female)", back: "die Migrantinnen", lesson: "A2.6" },
{ front: "social", back: "sozial", lesson: "A2.6" },	
{ front: "the lecture/presentation", back: "der Vortrag", lesson: "A2.6" },	{ front: "the lectures/presentations", back: "die Vorträge", lesson: "A2.6" },
{ front: "to apply (for a job)", back: "(sich) bewerben", lesson: "A2.6" },	{ front: "has applied", back: "hat beworben", lesson: "A2.6" },
{ front: "to present", back: "präsentieren", lesson: "A2.6" },	{ front: "has presented", back: "hat präsentiert", lesson: "A2.6" },
{ front: "the expert (male)", back: "der Experte", lesson: "A2.6" },	{ front: "the experts (male)", back: "die Experten", lesson: "A2.6" },
{ front: "the expert (female)", back: "die Expertin", lesson: "A2.6" },	{ front: "the experts (female)", back: "die Expertinnen", lesson: "A2.6" },
{ front: "the preparation", back: "die Vorbereitung", lesson: "A2.6" },	{ front: "the preparations", back: "die Vorbereitungen", lesson: "A2.6" },
{ front: "the certificate", back: "das Zertifikat", lesson: "A2.6" },	{ front: "the certificates", back: "die Zertifikate", lesson: "A2.6" },
{ front: "the support/funding", back: "die Förderung", lesson: "A2.6" },	{ front: "the supports/fundings", back: "die Förderungen", lesson: "A2.6" },
{ front: "possible", back: "möglich", lesson: "A2.6" },	
{ front: "the consultation/advice", back: "die Beratung", lesson: "A2.6" },	{ front: "the consultations/advice", back: "die Beratungen", lesson: "A2.6" },
{ front: "to injure oneself", back: "sich verletzen", lesson: "A2.6" },	{ front: "has injured oneself", back: "hat verletzt", lesson: "A2.6" },
{ front: "to bleed", back: "bluten", lesson: "A2.6" },	{ front: "has bled", back: "hat geblutet", lesson: "A2.6" },
{ front: "the studies (at university)", back: "das Studium", lesson: "A2.6" },	
{ front: "the daily routine", back: "der Tagesablauf", lesson: "A2.6" },	{ front: "the daily routines", back: "die Tagesabläufe", lesson: "A2.6" },
{ front: "to pass (an exam)", back: "bestehen", lesson: "A2.6" },	{ front: "has passed", back: "hat bestanden", lesson: "A2.6" },
{ front: "migration background", back: "der Migrationshintergrund", lesson: "A2.6" },	
{ front: "proud", back: "stolz", lesson: "A2.6" },	
{ front: "electric", back: "elektrisch", lesson: "A2.6" },	
{ front: "the technology/technique", back: "die Technik", lesson: "A2.6" },	
{ front: "the contact", back: "der Kontakt", lesson: "A2.6" },	{ front: "the contacts", back: "die Kontakte", lesson: "A2.6" },
{ front: "to recognize/acknowledge", back: "anerkennen", lesson: "A2.6" },	{ front: "has recognized/acknowledged", back: "hat anerkannt", lesson: "A2.6" },
{ front: "to check/examine", back: "prüfen", lesson: "A2.6" },	{ front: "has checked/examined", back: "hat geprüft", lesson: "A2.6" },
{ front: "complicated", back: "kompliziert", lesson: "A2.6" },	
{ front: "the baker (male)", back: "der Bäcker", lesson: "A2.6" },	{ front: "the bakers (male)", back: "die Bäcker", lesson: "A2.6" },
{ front: "the baker (female)", back: "die Bäckerin", lesson: "A2.6" },	{ front: "the bakers (female)", back: "die Bäckerinnen", lesson: "A2.6" },
{ front: "the actor (male)", back: "der Schauspieler", lesson: "A2.6" },	{ front: "the actors (male)", back: "die Schauspieler", lesson: "A2.6" },
{ front: "the actress (female)", back: "die Schauspielerin", lesson: "A2.6" },	{ front: "the actresses (female)", back: "die Schauspielerinnen", lesson: "A2.6" },
{ front: "the music", back: "die Musik", lesson: "A2.6" },	
{ front: "the mathematics", back: "die Mathematik", lesson: "A2.6" },	
{ front: "the sport", back: "der Sport", lesson: "A2.6" },	
{ front: "unknown", back: "unbekannt", lesson: "A2.7" },	
{ front: "to prepare", back: "vorbereiten", lesson: "A2.7" },	{ front: "has prepared", back: "hat vorbereitet", lesson: "A2.7" },
{ front: "to do crafts/craft", back: "basteln", lesson: "A2.7" },	{ front: "has done crafts", back: "hat gebastelt", lesson: "A2.7" },
{ front: "to decide", back: "entscheiden", lesson: "A2.7" },	{ front: "has decided", back: "hat entschieden", lesson: "A2.7" },
{ front: "to give (a gift)", back: "schenken", lesson: "A2.7" },	{ front: "has given (a gift)", back: "hat geschenkt", lesson: "A2.7" },
{ front: "the baby", back: "das Baby", lesson: "A2.7" },	{ front: "the babies", back: "die Babys", lesson: "A2.7" },
{ front: "the necklace/chain", back: "die Kette", lesson: "A2.7" },	{ front: "the necklaces/chains", back: "die Ketten", lesson: "A2.7" },
{ front: "to guess/advice", back: "raten", lesson: "A2.7" },	{ front: "has guessed/advised", back: "hat geraten", lesson: "A2.7" },
{ front: "the doll", back: "die Puppe", lesson: "A2.7" },	{ front: "the dolls", back: "die Puppen", lesson: "A2.7" },
{ front: "the DVD", back: "die DVD", lesson: "A2.7" },	{ front: "the DVDs", back: "die DVDs", lesson: "A2.7" },
{ front: "the perfume", back: "das Parfüm", lesson: "A2.7" },	{ front: "the perfumes", back: "die Parfüms", lesson: "A2.7" },
{ front: "the cream", back: "die Creme", lesson: "A2.7" },	{ front: "the creams", back: "die Cremes", lesson: "A2.7" },
{ front: "the wallet", back: "der Geldbeutel", lesson: "A2.7" },	{ front: "the wallets", back: "die Geldbeutel", lesson: "A2.7" },
{ front: "to try/taste", back: "probieren", lesson: "A2.7" },	{ front: "has tried/tasted", back: "hat probiert", lesson: "A2.7" },
{ front: "the noodle", back: "die Nudel", lesson: "A2.7" },	{ front: "the noodles", back: "die Nudeln", lesson: "A2.7" },
{ front: "to deliver", back: "liefern", lesson: "A2.7" },	{ front: "has delivered", back: "hat geliefert", lesson: "A2.7" },
{ front: "reliable", back: "zuverlässig", lesson: "A2.7" },	
{ front: "special/premium", back: "Sonder-", lesson: "A2.7" },	
{ front: "to name/call", back: "nennen", lesson: "A2.7" },	{ front: "has named/called", back: "hat genannt", lesson: "A2.7" },
{ front: "the box", back: "die Schachtel", lesson: "A2.7" },	{ front: "the boxes", back: "die Schachteln", lesson: "A2.7" },
{ front: "to print out", back: "ausdrucken", lesson: "A2.7" },	{ front: "has printed out", back: "hat ausgedruckt", lesson: "A2.7" },
{ front: "the postage stamp", back: "die Briefmarke", lesson: "A2.7" },	{ front: "the postage stamps", back: "die Briefmarken", lesson: "A2.7" },
{ front: "the people", back: "die Leute", lesson: "A2.7" },	
{ front: "the church", back: "die Kirche", lesson: "A2.7" },	{ front: "the churches", back: "die Kirchen", lesson: "A2.7" },
{ front: "the wedding/ceremony", back: "die Trauung", lesson: "A2.7" },	{ front: "the weddings/ceremonies", back: "die Trauungen", lesson: "A2.7" },
{ front: "crazy/insane", back: "wahnsinnig", lesson: "A2.7" },	
{ front: "the mood/atmosphere", back: "die Stimmung", lesson: "A2.7" },	
{ front: "stupid/dumb", back: "blöd", lesson: "A2.7" },	
{ front: "to greet", back: "grüßen", lesson: "A2.7" },	{ front: "has greeted", back: "hat gegrüßt", lesson: "A2.7" },
{ front: "wonderful/beautiful", back: "wunderschön", lesson: "A2.7" },	
{ front: "to cry", back: "weinen", lesson: "A2.7" },	{ front: "has cried", back: "hat geweint", lesson: "A2.7" },
{ front: "typical", back: "typisch", lesson: "A2.7" },	
{ front: "the cake (layer cake)", back: "die Torte", lesson: "A2.7" },	{ front: "the cakes", back: "die Torten", lesson: "A2.7" },
{ front: "by the way", back: "übrigens", lesson: "A2.7" },	
{ front: "to step/kick", back: "treten", lesson: "A2.7" },	{ front: "has stepped/kicked", back: "ist getreten", lesson: "A2.7" },
{ front: "probably/well", back: "wohl", lesson: "A2.7" },	
{ front: "nervous", back: "nervös", lesson: "A2.7" },	
{ front: "at least", back: "wenigstens", lesson: "A2.7" },	
{ front: "awake", back: "wach", lesson: "A2.7" },	
{ front: "wild", back: "wild", lesson: "A2.7" },	
{ front: "to wear/carry", back: "tragen", lesson: "A2.7" },	{ front: "has worn/carried", back: "hat getragen", lesson: "A2.7" },
{ front: "personal", back: "persönlich", lesson: "A2.7" },	
{ front: "the heart", back: "das Herz", lesson: "A2.7" },	{ front: "the hearts", back: "die Herzen", lesson: "A2.7" },
{ front: "the death", back: "der Tod", lesson: "A2.7" },	
{ front: "to spend (money)", back: "ausgeben", lesson: "A2.7" },	{ front: "has spent", back: "hat ausgegeben", lesson: "A2.7" },
{ front: "the homeland", back: "die Heimat", lesson: "A2.7" },	
{ front: "via/by", back: "per", lesson: "A2.7" },	
{ front: "the SMS/text message", back: "die SMS", lesson: "A2.7" },	{ front: "the SMS/text messages", back: "die SMS", lesson: "A2.7" },
{ front: "to converse/talk", back: "sich unterhalten", lesson: "A2.7" },	{ front: "has conversed/talked", back: "hat unterhalten", lesson: "A2.7" },
{ front: "to decorate", back: "dekorieren", lesson: "A2.7" },	{ front: "has decorated", back: "hat dekoriert", lesson: "A2.7" },
{ front: "the entertainment/conversation", back: "die Unterhaltung", lesson: "A2.7" },	{ front: "the entertainments/conversations", back: "die Unterhaltungen", lesson: "A2.7" },
{ front: "to convince", back: "überzeugen", lesson: "A2.7" },	{ front: "has convinced", back: "hat überzeugt", lesson: "A2.7" },
{ front: "the praline (chocolate)", back: "die Praline", lesson: "A2.7" },	{ front: "the pralines", back: "die Pralinen", lesson: "A2.7" },
{ front: "the chocolate", back: "die Schokolade", lesson: "A2.7" },	{ front: "the chocolates", back: "die Schokoladen", lesson: "A2.7" },
{ front: "the book", back: "das Buch", lesson: "A2.7" },	{ front: "the books", back: "die Bücher", lesson: "A2.7" },
{ front: "the wood", back: "das Holz", lesson: "A2.8" },	{ front: "the woods", back: "die Hölzer", lesson: "A2.8" },
{ front: "the hammer", back: "der Hammer", lesson: "A2.8" },	{ front: "the hammers", back: "die Hämmer", lesson: "A2.8" },
{ front: "the tool", back: "das Werkzeug", lesson: "A2.8" },	{ front: "the tools", back: "die Werkzeuge", lesson: "A2.8" },
{ front: "to play along", back: "mitspielen", lesson: "A2.8" },	{ front: "has played along", back: "hat mitgespielt", lesson: "A2.8" },
{ front: "the disco / discotheque", back: "die Disko / die Diskothek", lesson: "A2.8" },	{ front: "the discos / discotheques", back: "die Diskos / die Diskotheken", lesson: "A2.8" },
{ front: "to go out", back: "ausgehen", lesson: "A2.8" },	{ front: "has gone out", back: "ist ausgegangen", lesson: "A2.8" },
{ front: "to spend (time)", back: "verbringen", lesson: "A2.8" },	{ front: "has spent (time)", back: "hat verbracht", lesson: "A2.8" },
{ front: "the laundry", back: "die Wäsche", lesson: "A2.8" },	
{ front: "to undertake/do", back: "unternehmen", lesson: "A2.8" },	{ front: "has undertaken/done", back: "hat unternommen", lesson: "A2.8" },
{ front: "the thing", back: "das Ding", lesson: "A2.8" },	{ front: "the things", back: "die Dinge", lesson: "A2.8" },
{ front: "the lake", back: "der See", lesson: "A2.8" },	{ front: "the lakes", back: "die Seen", lesson: "A2.8" },
{ front: "nevertheless/still", back: "trotzdem", lesson: "A2.8" },	
{ front: "the bike tour", back: "die Radtour", lesson: "A2.8" },	{ front: "the bike tours", back: "die Radtouren", lesson: "A2.8" },
{ front: "the flea market", back: "der Flohmarkt", lesson: "A2.8" },	{ front: "the flea markets", back: "die Flohmärkte", lesson: "A2.8" },
{ front: "to have a cold", back: "erkältet sein", lesson: "A2.8" },	
{ front: "constant/constantly", back: "ständig", lesson: "A2.8" },	
{ front: "the proposal/suggestion", back: "der Vorschlag", lesson: "A2.8" },	{ front: "the proposals/suggestions", back: "die Vorschläge", lesson: "A2.8" },
{ front: "the sightseeing tour", back: "die Rundfahrt", lesson: "A2.8" },	{ front: "the sightseeing tours", back: "die Rundfahrten", lesson: "A2.8" },
{ front: "agreed/okay", back: "einverstanden", lesson: "A2.8" },	
{ front: "positive", back: "positiv", lesson: "A2.8" },	
{ front: "to react", back: "reagieren", lesson: "A2.8" },	{ front: "has reacted", back: "hat reagiert", lesson: "A2.8" },
{ front: "negative", back: "negativ", lesson: "A2.8" },	
{ front: "the bar", back: "die Bar", lesson: "A2.8" },	{ front: "the bars", back: "die Bars", lesson: "A2.8" },
{ front: "the culture", back: "die Kultur", lesson: "A2.8" },	
{ front: "the nature", back: "die Natur", lesson: "A2.8" },	
{ front: "the opera", back: "die Oper", lesson: "A2.8" },	{ front: "the operas", back: "die Opern", lesson: "A2.8" },
{ front: "the meeting point", back: "der Treffpunkt", lesson: "A2.8" },	{ front: "the meeting points", back: "die Treffpunkte", lesson: "A2.8" },
{ front: "the town hall", back: "das Rathaus", lesson: "A2.8" },	{ front: "the town halls", back: "die Rathäuser", lesson: "A2.8" },
{ front: "the participation", back: "die Teilnahme", lesson: "A2.8" },	
{ front: "to perform/appear", back: "auftreten", lesson: "A2.8" },	{ front: "has performed/appeared", back: "ist aufgetreten", lesson: "A2.8" },
{ front: "the jazz", back: "der Jazz", lesson: "A2.8" },	
{ front: "the train", back: "die Bahn", lesson: "A2.8" },	{ front: "the trains", back: "die Bahnen", lesson: "A2.8" },
{ front: "open", back: "offen", lesson: "A2.8" },	
{ front: "the adult education center", back: "die Volkshochschule", lesson: "A2.8" },	{ front: "the adult education centers", back: "die Volkshochschulen", lesson: "A2.8" },
{ front: "the politics", back: "die Politik", lesson: "A2.8" },	
{ front: "the photography", back: "die Fotografie", lesson: "A2.8" },	
{ front: "required/necessary", back: "erforderlich", lesson: "A2.8" },	
{ front: "free entry", back: "Eintritt frei", lesson: "A2.8" },	
{ front: "no registration required", back: "keine Anmeldung erforderlich", lesson: "A2.8" },	
{ front: "the semester", back: "das Semester", lesson: "A2.8" },	{ front: "the semesters", back: "die Semester", lesson: "A2.8" },
{ front: "the hike", back: "die Wanderung", lesson: "A2.8" },	{ front: "the hikes", back: "die Wanderungen", lesson: "A2.8" },
{ front: "the program", back: "das Programm", lesson: "A2.8" },	{ front: "the programs", back: "die Programme", lesson: "A2.8" },
{ front: "the fan", back: "der Fan", lesson: "A2.8" },	{ front: "the fans", back: "die Fans", lesson: "A2.8" },
{ front: "the artist (male)", back: "der Künstler", lesson: "A2.8" },	{ front: "the artists (male)", back: "die Künstler", lesson: "A2.8" },
{ front: "the artist (female)", back: "die Künstlerin", lesson: "A2.8" },	{ front: "the artists (female)", back: "die Künstlerinnen", lesson: "A2.8" },
{ front: "Europe", back: "Europa", lesson: "A2.8" },	
{ front: "the toy", back: "das Spielzeug", lesson: "A2.8" },	{ front: "the toys", back: "die Spielzeuge", lesson: "A2.8" },
{ front: "the CD", back: "die CD", lesson: "A2.8" },	{ front: "the CDs", back: "die CDs", lesson: "A2.8" },
{ front: "on weekdays", back: "wochentags", lesson: "A2.8" },	
{ front: "the admission ticket", back: "die Eintrittskarte", lesson: "A2.8" },	{ front: "the admission tickets", back: "die Eintrittskarten", lesson: "A2.8" },
{ front: "the broadcaster/channel", back: "der Sender", lesson: "A2.8" },	{ front: "the broadcasters/channels", back: "die Sender", lesson: "A2.8" },
{ front: "to go for a hike", back: "eine Wanderung machen", lesson: "A2.8" },	
{ front: "to do/make", back: "machen", lesson: "A2.8" },	{ front: "has done/made", back: "hat gemacht", lesson: "A2.8" },
{ front: "to go to the opera", back: "in die Oper gehen", lesson: "A2.8" },	
{ front: "to go to a bar", back: "in eine Bar", lesson: "A2.8" },	
{ front: "to take a sightseeing tour", back: "eine Rundfahrt machen", lesson: "A2.8" },	
{ front: "a bike tour", back: "eine Radtour", lesson: "A2.8" },	
{ front: "to go to a flea market", back: "auf einen Flohmarkt gehen", lesson: "A2.8" },	
{ front: "to go to the disco", back: "in die Disko gehen", lesson: "A2.8" },	
{ front: "to go to the lake", back: "an den See fahren", lesson: "A2.8" },	
{ front: "to set up, to arrange", back: "einrichten", lesson: "A2.9" },	{ front: "has set up, has arranged", back: "hat eingerichtet", lesson: "A2.9" },
{ front: "the poster", back: "das Poster", lesson: "A2.9" },	{ front: "the posters", back: "die Poster", lesson: "A2.9" },
{ front: "the candle", back: "die Kerze", lesson: "A2.9" },	{ front: "the candles", back: "die Kerzen", lesson: "A2.9" },
{ front: "awful, hideous, horrible", back: "scheußlich", lesson: "A2.9" },	
{ front: "colorful, multicolored", back: "bunt", lesson: "A2.9" },	
{ front: "to look, to watch", back: "gucken", lesson: "A2.9" },	{ front: "has looked, has watched", back: "hat geguckt", lesson: "A2.9" },
{ front: "the wallet, the purse", back: "die Brieftasche", lesson: "A2.9" },	{ front: "the wallets, the purses", back: "die Brieftaschen", lesson: "A2.9" },
{ front: "the lighter", back: "das Feuerzeug", lesson: "A2.9" },	{ front: "the lighters", back: "die Feuerzeuge", lesson: "A2.9" },
{ front: "the camera", back: "die Kamera", lesson: "A2.9" },	{ front: "the cameras", back: "die Kameras", lesson: "A2.9" },
{ front: "the bikini", back: "der Bikini", lesson: "A2.9" },	{ front: "the bikinis", back: "die Bikinis", lesson: "A2.9" },
{ front: "practical", back: "praktisch", lesson: "A2.9" },	
{ front: "pretty, lovely", back: "hübsch", lesson: "A2.9" },	
{ front: "thick, fat", back: "dick", lesson: "A2.9" },	
{ front: "the plate", back: "die Platte", lesson: "A2.9" },	{ front: "the plates", back: "die Platten", lesson: "A2.9" },
{ front: "the height", back: "die Höhe", lesson: "A2.9" },	{ front: "the heights", back: "die Höhen", lesson: "A2.9" },
{ front: "the condition, the state", back: "der Zustand", lesson: "A2.9" },	{ front: "the conditions, the states", back: "die Zustände", lesson: "A2.9" },
{ front: "the quality", back: "die Qualität", lesson: "A2.9" },	{ front: "the qualities", back: "die Qualitäten", lesson: "A2.9" },
{ front: "the cutlery", back: "das Besteck", lesson: "A2.9" },	{ front: "the cutleries", back: "die Bestecke", lesson: "A2.9" },
{ front: "the metal", back: "das Metall", lesson: "A2.9" },	{ front: "the metals", back: "die Metalle", lesson: "A2.9" },
{ front: "the fabric, the material", back: "der Stoff", lesson: "A2.9" },	{ front: "the fabrics, the materials", back: "die Stoffe", lesson: "A2.9" },
{ front: "the backpack", back: "der Rucksack", lesson: "A2.9" },	{ front: "the backpacks", back: "die Rucksäcke", lesson: "A2.9" },
{ front: "the hat", back: "der Hut", lesson: "A2.9" },	{ front: "the hats", back: "die Hüte", lesson: "A2.9" },
{ front: "the love", back: "die Liebe", lesson: "A2.9" },	
{ front: "the novel", back: "der Roman", lesson: "A2.9" },	{ front: "the novels", back: "die Romane", lesson: "A2.9" },
{ front: "exciting, thrilling", back: "spannend", lesson: "A2.9" },	
{ front: "than, as", back: "als", lesson: "A2.9" },	
{ front: "the stadium", back: "das Stadion", lesson: "A2.9" },	{ front: "the stadiums", back: "die Stadien", lesson: "A2.9" },
{ front: "the PC, the personal computer", back: "der PC", lesson: "A2.9" },	{ front: "the PCs", back: "die PCs", lesson: "A2.9" },
{ front: "the pudding", back: "der Pudding", lesson: "A2.9" },	{ front: "the puddings", back: "die Puddings", lesson: "A2.9" },
{ front: "the shop window", back: "das Schaufenster", lesson: "A2.9" },	{ front: "the shop windows", back: "die Schaufenster", lesson: "A2.9" },
{ front: "to suggest", back: "vorschlagen", lesson: "A2.9" },	{ front: "has suggested", back: "hat vorgeschlagen", lesson: "A2.9" },
{ front: "distant, removed", back: "entfernt", lesson: "A2.9" },	
{ front: "the statistics", back: "die Statistik", lesson: "A2.9" },	{ front: "the statistics", back: "die Statistiken", lesson: "A2.9" },
{ front: "the foodstuff", back: "das Nahrungsmittel", lesson: "A2.9" },	{ front: "the foodstuffs", back: "die Nahrungsmittel", lesson: "A2.9" },
{ front: "the gas", back: "das Gas", lesson: "A2.9" },	{ front: "the gases", back: "die Gase", lesson: "A2.9" },
{ front: "the credit", back: "der Kredit", lesson: "A2.9" },	{ front: "the credits", back: "die Kredite", lesson: "A2.9" },
{ front: "to record, to admit, to take", back: "aufnehmen", lesson: "A2.9" },	{ front: "has recorded, has admitted", back: "hat aufgenommen", lesson: "A2.9" },
{ front: "to save", back: "sparen", lesson: "A2.9" },	{ front: "has saved", back: "hat gespart", lesson: "A2.9" },
{ front: "some, many", back: "manch-", lesson: "A2.9" },	
{ front: "the memory", back: "die Erinnerung", lesson: "A2.9" },	{ front: "the memories", back: "die Erinnerungen", lesson: "A2.9" },
{ front: "the thought", back: "der Gedanke", lesson: "A2.9" },	{ front: "the thoughts", back: "die Gedanken", lesson: "A2.9" },
{ front: "valuable", back: "wertvoll", lesson: "A2.9" },	
{ front: "back then, at that time", back: "damals", lesson: "A2.9" },	
{ front: "dear, sweet", back: "lieb", lesson: "A2.9" },	
{ front: "therefore, that's why", back: "deshalb", lesson: "A2.9" },	
{ front: "inside, in there", back: "drin", lesson: "A2.9" },	
{ front: "the hammer", back: "der Hammer", lesson: "A2.9" },	{ front: "the hammers", back: "die Hämmer", lesson: "A2.9" },
{ front: "the wood", back: "das Holz", lesson: "A2.9" },	{ front: "the woods", back: "die Hölzer", lesson: "A2.9" },
{ front: "the lamp", back: "die Lampe", lesson: "A2.9" },	{ front: "the lamps", back: "die Lampen", lesson: "A2.9" },
{ front: "the glass", back: "das Glas", lesson: "A2.9" },	{ front: "the glasses", back: "die Gläser", lesson: "A2.9" },
{ front: "the cutlery", back: "das Besteck", lesson: "A2.9" },	{ front: "the cutleries", back: "die Bestecke", lesson: "A2.9" },
{ front: "the metal", back: "das Metall", lesson: "A2.9" },	{ front: "the metals", back: "die Metalle", lesson: "A2.9" },
{ front: "the (salad) bowl", back: "die (Salat-) Schüssel", lesson: "A2.9" },	{ front: "the (salad) bowls", back: "die (Salat-) Schüsseln", lesson: "A2.9" },
{ front: "the plastic", back: "das Plastik", lesson: "A2.9" },	
{ front: "the entrance ticket", back: "die Eintrittskarte", lesson: "A2.9" },	{ front: "the entrance tickets", back: "die Eintrittskarten", lesson: "A2.9" },
{ front: "the paper", back: "das Papier", lesson: "A2.9" },	{ front: "the papers", back: "die Papiere", lesson: "A2.9" },
{ front: "the package", back: "das Paket", lesson: "A2.10" },	{ front: "the packages", back: "die Pakete", lesson: "A2.10" },
{ front: "the envelope", back: "der Briefumschlag", lesson: "A2.10" },	{ front: "the envelopes", back: "die Briefumschläge", lesson: "A2.10" },
{ front: "the postcard", back: "die Postkarte", lesson: "A2.10" },	{ front: "the postcards", back: "die Postkarten", lesson: "A2.10" },
{ front: "the scissors", back: "die Schere", lesson: "A2.10" },	{ front: "the scissors", back: "die Scheren", lesson: "A2.10" },
{ front: "to send, to dispatch", back: "verschicken", lesson: "A2.10" },	{ front: "has sent, has dispatched", back: "hat verschickt", lesson: "A2.10" },
{ front: "to send, to mail", back: "versenden", lesson: "A2.10" },	{ front: "has sent, has mailed", back: "hat versendet", lesson: "A2.10" },
{ front: "neat, orderly", back: "ordentlich", lesson: "A2.10" },	
{ front: "the shipment, the broadcast", back: "die Sendung", lesson: "A2.10" },	{ front: "the shipments, the broadcasts", back: "die Sendungen", lesson: "A2.10" },
{ front: "to transport", back: "transportieren", lesson: "A2.10" },	{ front: "has transported", back: "hat transportiert", lesson: "A2.10" },
{ front: "hard", back: "hart", lesson: "A2.10" },	
{ front: "to weigh", back: "wiegen", lesson: "A2.10" },	{ front: "has weighed", back: "hat gewogen", lesson: "A2.10" },
{ front: "to pack", back: "verpacken", lesson: "A2.10" },	{ front: "has packed", back: "hat verpackt", lesson: "A2.10" },
{ front: "the ship", back: "das Schiff", lesson: "A2.10" },	{ front: "the ships", back: "die Schiffe", lesson: "A2.10" },
{ front: "the harvest", back: "die Ernte", lesson: "A2.10" },	{ front: "the harvests", back: "die Ernten", lesson: "A2.10" },
{ front: "ripe", back: "reif", lesson: "A2.10" },	
{ front: "soft", back: "weich", lesson: "A2.10" },	
{ front: "the imagination, the fantasy", back: "die Fantasie", lesson: "A2.10" },	{ front: "the imaginations, the fantasies", back: "die Fantasien", lesson: "A2.10" },
{ front: "what kind of, what a", back: "was für ein-", lesson: "A2.10" },	
{ front: "the possibility", back: "die Möglichkeit", lesson: "A2.10" },	{ front: "the possibilities", back: "die Möglichkeiten", lesson: "A2.10" },
{ front: "then, actually, because", back: "denn", lesson: "A2.10" },	
{ front: "the registered letter", back: "das Einschreiben", lesson: "A2.10" },	{ front: "the registered letters", back: "die Einschreiben", lesson: "A2.10" },
{ front: "to send", back: "senden", lesson: "A2.10" },	{ front: "has sent", back: "hat gesendet", lesson: "A2.10" },
{ front: "the small package", back: "das Päckchen", lesson: "A2.10" },	{ front: "the small packages", back: "die Päckchen", lesson: "A2.10" },
{ front: "the customs", back: "der Zoll", lesson: "A2.10" },	{ front: "the customs", back: "die Zölle", lesson: "A2.10" },
{ front: "valuable, worth", back: "wert", lesson: "A2.10" },	
{ front: "absolutely, necessarily", back: "unbedingt", lesson: "A2.10" },	
{ front: "the worry, the concern", back: "die Sorge", lesson: "A2.10" },	{ front: "the worries, the concerns", back: "die Sorgen", lesson: "A2.10" },
{ front: "to freeze", back: "frieren", lesson: "A2.10" },	{ front: "has frozen", back: "hat gefroren", lesson: "A2.10" },
{ front: "the railway", back: "die Eisenbahn", lesson: "A2.10" },	{ front: "the railways", back: "die Eisenbahnen", lesson: "A2.10" },
{ front: "the leaf", back: "das Blatt", lesson: "A2.10" },	{ front: "the leaves", back: "die Blätter", lesson: "A2.10" },
{ front: "the bear", back: "der Bär", lesson: "A2.10" },	{ front: "the bears", back: "die Bären", lesson: "A2.10" },
{ front: "the coin", back: "die Münze", lesson: "A2.10" },	{ front: "the coins", back: "die Münzen", lesson: "A2.10" },
{ front: "the duck", back: "die Ente", lesson: "A2.10" },	{ front: "the ducks", back: "die Enten", lesson: "A2.10" },
{ front: "the souvenir", back: "das Souvenir", lesson: "A2.10" },	{ front: "the souvenirs", back: "die Souvenirs", lesson: "A2.10" },
{ front: "the animal", back: "das Tier", lesson: "A2.10" },	{ front: "the animals", back: "die Tiere", lesson: "A2.10" },
{ front: "the bird", back: "der Vogel", lesson: "A2.10" },	{ front: "the birds", back: "die Vögel", lesson: "A2.10" },
{ front: "un-, not", back: "un-", lesson: "A2.10" },	
{ front: "the point", back: "der Punkt", lesson: "A2.10" },	{ front: "the points", back: "die Punkte", lesson: "A2.10" },
{ front: "the elephant", back: "der Elefant", lesson: "A2.10" },	{ front: "the elephants", back: "die Elefanten", lesson: "A2.10" },
{ front: "the rose", back: "die Rose", lesson: "A2.10" },	{ front: "the roses", back: "die Rosen", lesson: "A2.10" },
{ front: "the star", back: "der Stern", lesson: "A2.10" },	{ front: "the stars", back: "die Sterne", lesson: "A2.10" },
{ front: "the sky", back: "der Himmel", lesson: "A2.10" },	{ front: "the skies", back: "die Himmel", lesson: "A2.10" },
{ front: "orange", back: "orange", lesson: "A2.10" },	
{ front: "the network", back: "das Netzwerk", lesson: "A2.10" },	{ front: "the networks", back: "die Netzwerke", lesson: "A2.10" },
{ front: "to test", back: "testen", lesson: "A2.10" },	{ front: "has tested", back: "hat getestet", lesson: "A2.10" },
{ front: "the knowledge", back: "das Wissen", lesson: "A2.10" },	
{ front: "the quiz", back: "das Quiz", lesson: "A2.10" },	
{ front: "the mobile phone", back: "das Mobiltelefon", lesson: "A2.10" },	{ front: "the mobile phones", back: "die Mobiltelefone", lesson: "A2.10" },
{ front: "the mail, the email", back: "die Mail", lesson: "A2.10" },	{ front: "the mails", back: "die Mails", lesson: "A2.10" },
{ front: "worldwide", back: "weltweit", lesson: "A2.10" },	
{ front: "the mailbox", back: "die Mailbox", lesson: "A2.10" },	{ front: "the mailboxes", back: "die Mailboxen", lesson: "A2.10" },
{ front: "the success", back: "der Erfolg", lesson: "A2.10" },	{ front: "the successes", back: "die Erfolge", lesson: "A2.10" },
{ front: "the pub, the tavern", back: "die Kneipe", lesson: "A2.10" },	{ front: "the pubs, the taverns", back: "die Kneipen", lesson: "A2.10" },
{ front: "to report, to get in touch", back: "melden (sich)", lesson: "A2.10" },	{ front: "has reported, has gotten in touch", back: "hat sich gemeldet", lesson: "A2.10" },
{ front: "the parent council", back: "der Elternbeirat", lesson: "A2.10" },	{ front: "the parent councils", back: "die Elternbeiräte", lesson: "A2.10" },
{ front: "the flu", back: "die Grippe", lesson: "A2.10" },	
{ front: "the vaccination", back: "die Impfung", lesson: "A2.10" },	{ front: "the vaccinations", back: "die Impfungen", lesson: "A2.10" },
{ front: "the consulate", back: "das Konsulat", lesson: "A2.10" },	{ front: "the consulates", back: "die Konsulate", lesson: "A2.10" },
{ front: "general", back: "allgemein", lesson: "A2.10" },	
{ front: "the letter", back: "der Brief", lesson: "A2.10" },	{ front: "the letters", back: "die Briefe", lesson: "A2.10" },
{ front: "the mailbox", back: "der Briefkasten", lesson: "A2.10" },	{ front: "the mailboxes", back: "die Briefkästen", lesson: "A2.10" },
{ front: "the email", back: "die E-Mail", lesson: "A2.10" },	{ front: "the emails", back: "die E-Mails", lesson: "A2.10" },
{ front: "the mobile phone", back: "das Handy", lesson: "A2.10" },	{ front: "the mobile phones", back: "die Handys", lesson: "A2.10" },
{ front: "the chat", back: "der Chat", lesson: "A2.10" },	{ front: "the chats", back: "die Chats", lesson: "A2.10" },
{ front: "the zoo", back: "der Zoo", lesson: "A2.11" },	{ front: "the zoos", back: "die Zoos", lesson: "A2.11" },
{ front: "the tiger", back: "der Tiger", lesson: "A2.11" },	{ front: "the tigers", back: "die Tiger", lesson: "A2.11" },
{ front: "the zebra", back: "das Zebra", lesson: "A2.11" },	{ front: "the zebras", back: "die Zebras", lesson: "A2.11" },
{ front: "to look at, to watch", back: "anschauen", lesson: "A2.11" },	{ front: "has looked at, has watched", back: "hat angeschaut", lesson: "A2.11" },
{ front: "to leave, to depart", back: "wegfahren", lesson: "A2.11" },	{ front: "has left, has departed", back: "ist weggefahren", lesson: "A2.11" },
{ front: "to jump", back: "springen", lesson: "A2.11" },	{ front: "has jumped", back: "ist gesprungen", lesson: "A2.11" },
{ front: "to refuel", back: "tanken", lesson: "A2.11" },	{ front: "has refueled", back: "hat getankt", lesson: "A2.11" },
{ front: "along", back: "entlang", lesson: "A2.11" },	
{ front: "past … at", back: "vorbei … an", lesson: "A2.11" },	
{ front: "opposite, across from", back: "gegenüber", lesson: "A2.11" },	
{ front: "the direction", back: "die Richtung", lesson: "A2.11" },	{ front: "the directions", back: "die Richtungen", lesson: "A2.11" },
{ front: "the river", back: "der Fluss", lesson: "A2.11" },	{ front: "the rivers", back: "die Flüsse", lesson: "A2.11" },
{ front: "the intersection", back: "die Kreuzung", lesson: "A2.11" },	{ front: "the intersections", back: "die Kreuzungen", lesson: "A2.11" },
{ front: "to turn (off)", back: "abbiegen", lesson: "A2.11" },	{ front: "has turned", back: "ist abgebogen", lesson: "A2.11" },
{ front: "the exit", back: "die Ausfahrt", lesson: "A2.11" },	{ front: "the exits", back: "die Ausfahrten", lesson: "A2.11" },
{ front: "the copier", back: "der Kopierer", lesson: "A2.11" },	{ front: "the copiers", back: "die Kopierer", lesson: "A2.11" },
{ front: "the cafeteria", back: "die Cafeteria", lesson: "A2.11" },	{ front: "the cafeterias", back: "die Cafeterien", lesson: "A2.11" },
{ front: "the traffic jam", back: "der Stau", lesson: "A2.11" },	{ front: "the traffic jams", back: "die Staus", lesson: "A2.11" },
{ front: "the sidewalk", back: "der Bürgersteig", lesson: "A2.11" },	{ front: "the sidewalks", back: "die Bürgersteige", lesson: "A2.11" },
{ front: "to fall, to tumble", back: "stürzen", lesson: "A2.11" },	{ front: "has fallen", back: "ist gestürzt", lesson: "A2.11" },
{ front: "the cyclist", back: "der Radfahrer", lesson: "A2.11" },	{ front: "the cyclists", back: "die Radfahrer", lesson: "A2.11" },
{ front: "the knee", back: "das Knie", lesson: "A2.11" },	{ front: "the knees", back: "die Knie", lesson: "A2.11" },
{ front: "to stick, to glue", back: "kleben", lesson: "A2.11" },	{ front: "has stuck, has glued", back: "hat geklebt", lesson: "A2.11" },
{ front: "the band-aid, plaster", back: "das Pflaster", lesson: "A2.11" },	{ front: "the band-aids, plasters", back: "die Pflaster", lesson: "A2.11" },
{ front: "the bike, the wheel", back: "das Rad", lesson: "A2.11" },	{ front: "the bikes, the wheels", back: "die Räder", lesson: "A2.11" },
{ front: "the darling, the favorite", back: "der Liebling", lesson: "A2.11" },	{ front: "the darlings, the favorites", back: "die Lieblinge", lesson: "A2.11" },
{ front: "to stop, to remain standing", back: "stehen bleiben", lesson: "A2.11" },	{ front: "has stopped, has remained standing", back: "ist stehen geblieben", lesson: "A2.11" },
{ front: "the gasoline, petrol", back: "das Benzin", lesson: "A2.11" },	
{ front: "the battery", back: "die Batterie", lesson: "A2.11" },	{ front: "the batteries", back: "die Batterien", lesson: "A2.11" },
{ front: "empty", back: "leer", lesson: "A2.11" },	
{ front: "on time, punctual", back: "rechtzeitig", lesson: "A2.11" },	
{ front: "the traffic", back: "der Verkehr", lesson: "A2.11" },	
{ front: "the construction site", back: "die Baustelle", lesson: "A2.11" },	{ front: "the construction sites", back: "die Baustellen", lesson: "A2.11" },
{ front: "the lane, the track", back: "die Spur", lesson: "A2.11" },	{ front: "the lanes, the tracks", back: "die Spuren", lesson: "A2.11" },
{ front: "to overtake", back: "überholen", lesson: "A2.11" },	{ front: "has overtaken", back: "hat überholt", lesson: "A2.11" },
{ front: "the roadway", back: "die Fahrbahn", lesson: "A2.11" },	{ front: "the roadways", back: "die Fahrbahnen", lesson: "A2.11" },
{ front: "careful, cautious", back: "vorsichtig", lesson: "A2.11" },	
{ front: "because of, due to", back: "wegen", lesson: "A2.11" },	
{ front: "the ice", back: "das Eis", lesson: "A2.11" },	
{ front: "the fog", back: "der Nebel", lesson: "A2.11" },	{ front: "the fogs", back: "die Nebel", lesson: "A2.11" },
{ front: "the storm", back: "der Sturm", lesson: "A2.11" },	{ front: "the storms", back: "die Stürme", lesson: "A2.11" },
{ front: "the thunderstorm", back: "das Gewitter", lesson: "A2.11" },	{ front: "the thunderstorms", back: "die Gewitter", lesson: "A2.11" },
{ front: "foggy", back: "neblig", lesson: "A2.11" },	
{ front: "the chaos", back: "das Chaos", lesson: "A2.11" },	
{ front: "to worry, to care for", back: "sorgen", lesson: "A2.11" },	{ front: "has worried, has cared for", back: "hat gesorgt", lesson: "A2.11" },
{ front: "the situation", back: "die Situation", lesson: "A2.11" },	{ front: "the situations", back: "die Situationen", lesson: "A2.11" },
{ front: "complete", back: "komplett", lesson: "A2.11" },	
{ front: "for hours", back: "stundenlang", lesson: "A2.11" },	
{ front: "the car", back: "der Wagen", lesson: "A2.11" },	{ front: "the cars", back: "die Wagen", lesson: "A2.11" },
{ front: "the region", back: "die Region", lesson: "A2.11" },	{ front: "the regions", back: "die Regionen", lesson: "A2.11" },
{ front: "the heat", back: "die Hitze", lesson: "A2.11" },	
{ front: "the part", back: "das Teil", lesson: "A2.11" },	{ front: "the parts", back: "die Teile", lesson: "A2.11" },
{ front: "strong, vigorous", back: "kräftig", lesson: "A2.11" },	
{ front: "to avoid", back: "vermeiden", lesson: "A2.11" },	{ front: "has avoided", back: "hat vermieden", lesson: "A2.11" },
{ front: "the danger", back: "die Gefahr", lesson: "A2.11" },	{ front: "the dangers", back: "die Gefahren", lesson: "A2.11" },
{ front: "the citizen", back: "der Bürger", lesson: "A2.11" },	{ front: "the citizens", back: "die Bürger", lesson: "A2.11" },
{ front: "the female citizen", back: "die Bürgerin", lesson: "A2.11" },	{ front: "the female citizens", back: "die Bürgerinnen", lesson: "A2.11" },
{ front: "the view", back: "die Aussicht", lesson: "A2.11" },	{ front: "the views", back: "die Aussichten", lesson: "A2.11" },
{ front: "to promise", back: "versprechen", lesson: "A2.11" },	{ front: "has promised", back: "hat versprochen", lesson: "A2.11" },
{ front: "summery, hot", back: "sommerlich", lesson: "A2.11" },	
{ front: "dense, close, tight", back: "dicht", lesson: "A2.11" },	
{ front: "to prevent", back: "verhindern", lesson: "A2.11" },	{ front: "has prevented", back: "hat verhindert", lesson: "A2.11" },
{ front: "the start", back: "der Start", lesson: "A2.11" },	{ front: "the starts", back: "die Starts", lesson: "A2.11" },
{ front: "the landing", back: "die Landung", lesson: "A2.11" },	{ front: "the landings", back: "die Landungen", lesson: "A2.11" },
{ front: "the airport", back: "der Flughafen", lesson: "A2.11" },	{ front: "the airports", back: "die Flughäfen", lesson: "A2.11" },
{ front: "to start, to take off", back: "starten", lesson: "A2.11" },	{ front: "has started, has taken off", back: "ist gestartet", lesson: "A2.11" },
{ front: "to land", back: "landen", lesson: "A2.11" },	{ front: "has landed", back: "ist gelandet", lesson: "A2.11" },
{ front: "expected, likely", back: "voraussichtlich", lesson: "A2.11" },	
{ front: "the departure", back: "der Abflug", lesson: "A2.11" },	{ front: "the departures", back: "die Abflüge", lesson: "A2.11" },
{ front: "dangerous", back: "gefährlich", lesson: "A2.11" },	
{ front: "to stand out, to be noticeable", back: "auffallen", lesson: "A2.11" },	{ front: "has stood out, has been noticeable", back: "ist aufgefallen", lesson: "A2.11" },
{ front: "the moped", back: "das Moped", lesson: "A2.11" },	{ front: "the mopeds", back: "die Mopeds", lesson: "A2.11" },
{ front: "the means of transport", back: "das Verkehrsmittel", lesson: "A2.11" },	{ front: "the means of transport", back: "die Verkehrsmittel", lesson: "A2.11" },
{ front: "to honk, to beep", back: "hupen", lesson: "A2.11" },	{ front: "has honked, has beeped", back: "hat gehupt", lesson: "A2.11" },
{ front: "to brake", back: "bremsen", lesson: "A2.11" },	{ front: "has braked", back: "hat gebremst", lesson: "A2.11" },
{ front: "the pedestrian", back: "der Fußgänger", lesson: "A2.11" },	{ front: "the pedestrians", back: "die Fußgänger", lesson: "A2.11" },
{ front: "the female pedestrian", back: "die Fußgängerin", lesson: "A2.11" },	{ front: "the female pedestrians", back: "die Fußgängerinnen", lesson: "A2.11" },
{ front: "the fine, the ticket", back: "der Strafzettel", lesson: "A2.11" },	{ front: "the fines, the tickets", back: "die Strafzettel", lesson: "A2.11" },
{ front: "the penalty, the punishment", back: "die Strafe", lesson: "A2.11" },	{ front: "the penalties, the punishments", back: "die Strafen", lesson: "A2.11" },
{ front: "exhausting, strenuous", back: "anstrengend", lesson: "A2.11" },	
{ front: "terrible, awful", back: "furchtbar", lesson: "A2.11" },	
{ front: "public", back: "öffentlich", lesson: "A2.11" },	
{ front: "to talk, to speak", back: "reden", lesson: "A2.11" },	{ front: "has talked, has spoken", back: "hat geredet", lesson: "A2.11" },
{ front: "the difference", back: "der Unterschied", lesson: "A2.11" },	{ front: "the differences", back: "die Unterschiede", lesson: "A2.11" },
{ front: "the country", back: "das Land", lesson: "A2.11" },	
{ front: "the speed, the pace", back: "das Tempo", lesson: "A2.11" },	
{ front: "the Baltic Sea", back: "die Ostsee", lesson: "A2.12" },	
{ front: "the choice, election", back: "die Wahl", lesson: "A2.12" },	
{ front: "to visit, to tour", back: "besichtigen", lesson: "A2.12" },	{ front: "has visited, has toured", back: "hat besichtigt", lesson: "A2.12" },
{ front: "against, on the other hand", back: "dagegen", lesson: "A2.12" },	
{ front: "enthusiastic", back: "begeistert", lesson: "A2.12" },	
{ front: "the accommodation", back: "die Unterkunft", lesson: "A2.12" },	{ front: "the accommodations", back: "die Unterkünfte", lesson: "A2.12" },
{ front: "the dream", back: "der Traum", lesson: "A2.12" },	{ front: "the dreams", back: "die Träume", lesson: "A2.12" },
{ front: "the coast", back: "die Küste", lesson: "A2.12" },	{ front: "the coasts", back: "die Küsten", lesson: "A2.12" },
{ front: "the island", back: "die Insel", lesson: "A2.12" },	{ front: "the islands", back: "die Inseln", lesson: "A2.12" },
{ front: "the mountain range", back: "das Gebirge", lesson: "A2.12" },	
{ front: "Luxembourg", back: "Luxemburg", lesson: "A2.12" },	
{ front: "to bathe, to swim", back: "baden", lesson: "A2.12" },	{ front: "has bathed", back: "hat gebadet", lesson: "A2.12" },
{ front: "the sand", back: "der Sand", lesson: "A2.12" },	
{ front: "further, more", back: "weiter", lesson: "A2.12" },	
{ front: "cool", back: "kühl", lesson: "A2.12" },	
{ front: "the farm", back: "der Bauernhof", lesson: "A2.12" },	{ front: "the farms", back: "die Bauernhöfe", lesson: "A2.12" },
{ front: "the cow", back: "die Kuh", lesson: "A2.12" },	{ front: "the cows", back: "die Kühe", lesson: "A2.12" },
{ front: "the horse", back: "das Pferd", lesson: "A2.12" },	{ front: "the horses", back: "die Pferde", lesson: "A2.12" },
{ front: "the sheep", back: "das Schaf", lesson: "A2.12" },	{ front: "the sheep", back: "die Schafe", lesson: "A2.12" },
{ front: "the boat", back: "das Boot", lesson: "A2.12" },	{ front: "the boats", back: "die Boote", lesson: "A2.12" },
{ front: "the festival", back: "das Festival", lesson: "A2.12" },	{ front: "the festivals", back: "die Festivals", lesson: "A2.12" },
{ front: "the sight, the landmark", back: "die Sehenswürdigkeit", lesson: "A2.12" },	{ front: "the sights, the landmarks", back: "die Sehenswürdigkeiten", lesson: "A2.12" },
{ front: "above all, especially", back: "vor allem", lesson: "A2.12" },	
{ front: "real, genuine", back: "echt", lesson: "A2.12" },	
{ front: "the guesthouse, the boarding house", back: "die Pension", lesson: "A2.12" },	{ front: "the guesthouses, the boarding houses", back: "die Pensionen", lesson: "A2.12" },
{ front: "the view", back: "der Blick", lesson: "A2.12" },	{ front: "the views", back: "die Blicke", lesson: "A2.12" },
{ front: "the single room", back: "das Einzelzimmer", lesson: "A2.12" },	
{ front: "the double room", back: "das Doppelzimmer", lesson: "A2.12" },	
{ front: "the toilet", back: "das WC", lesson: "A2.12" },	{ front: "the toilets", back: "die WCs", lesson: "A2.12" },
{ front: "half board", back: "die Halbpension", lesson: "A2.12" },	
{ front: "camping", back: "das Camping", lesson: "A2.12" },	
{ front: "the tour", back: "die Tour", lesson: "A2.12" },	{ front: "the tours", back: "die Touren", lesson: "A2.12" },
{ front: "the valley", back: "das Tal", lesson: "A2.12" },	{ front: "the valleys", back: "die Täler", lesson: "A2.12" },
{ front: "the meadow, the field", back: "die Wiese", lesson: "A2.12" },	{ front: "the meadows, the fields", back: "die Wiesen", lesson: "A2.12" },
{ front: "romantic", back: "romantisch", lesson: "A2.12" },	
{ front: "the location", back: "die Lage", lesson: "A2.12" },	{ front: "the locations", back: "die Lagen", lesson: "A2.12" },
{ front: "the castle", back: "das Schloss", lesson: "A2.12" },	{ front: "the castles", back: "die Schlösser", lesson: "A2.12" },
{ front: "historical", back: "historisch", lesson: "A2.12" },	
{ front: "numerous, many", back: "zahlreich", lesson: "A2.12" },	
{ front: "the overnight stay", back: "die Übernachtung", lesson: "A2.12" },	{ front: "the overnight stays", back: "die Übernachtungen", lesson: "A2.12" },
{ front: "famous", back: "berühmt", lesson: "A2.12" },	
{ front: "the cathedral", back: "der Dom", lesson: "A2.12" },	{ front: "the cathedrals", back: "die Dome", lesson: "A2.12" },
{ front: "the youth hostel", back: "die Jugendherberge", lesson: "A2.12" },	{ front: "the youth hostels", back: "die Jugendherbergen", lesson: "A2.12" },
{ front: "inclusive", back: "inklusive", lesson: "A2.12" },	
{ front: "the stay", back: "der Aufenthalt", lesson: "A2.12" },	{ front: "the stays", back: "die Aufenthalte", lesson: "A2.12" },
{ front: "to book", back: "buchen", lesson: "A2.12" },	{ front: "has booked", back: "hat gebucht", lesson: "A2.12" },
{ front: "the travel agency", back: "das Reisebüro", lesson: "A2.12" },	{ front: "the travel agencies", back: "die Reisebüros", lesson: "A2.12" },
{ front: "the specialist", back: "der Spezialist", lesson: "A2.12" },	{ front: "the specialists", back: "die Spezialisten", lesson: "A2.12" },
{ front: "the employee", back: "der Angestellte", lesson: "A2.12" },	{ front: "the employees", back: "die Angestellten", lesson: "A2.12" },
{ front: "the female employee", back: "die Angestellte", lesson: "A2.12" },	{ front: "the female employees", back: "die Angestellten", lesson: "A2.12" },
{ front: "the connection, the link", back: "die Verbindung", lesson: "A2.12" },	{ front: "the connections, the links", back: "die Verbindungen", lesson: "A2.12" },
{ front: "of course, naturally", back: "natürlich", lesson: "A2.12" },	
{ front: "to surf", back: "surfen", lesson: "A2.12" },	{ front: "has surfed", back: "ist gesurft", lesson: "A2.12" },
{ front: "the tour, the leadership", back: "die Führung", lesson: "A2.12" },	{ front: "the tours, the leaderships", back: "die Führungen", lesson: "A2.12" },
{ front: "the old town", back: "die Altstadt", lesson: "A2.12" },	{ front: "the old towns", back: "die Altstädte", lesson: "A2.12" },
{ front: "the exhibition", back: "die Ausstellung", lesson: "A2.12" },	{ front: "the exhibitions", back: "die Ausstellungen", lesson: "A2.12" },
{ front: "known, famous", back: "bekannt", lesson: "A2.12" },	
{ front: "nowhere", back: "nirgends", lesson: "A2.12" },	
{ front: "to pack", back: "einpacken", lesson: "A2.12" },	{ front: "has packed", back: "hat eingepackt", lesson: "A2.12" },
{ front: "to agree", back: "einigen", lesson: "A2.12" },	{ front: "has agreed", back: "hat geeinigt", lesson: "A2.12" },
{ front: "to spend the night, to stay overnight", back: "übernachten", lesson: "A2.12" },	{ front: "has stayed overnight", back: "hat übernachtet", lesson: "A2.12" },
{ front: "to be against", back: "dagegen sein", lesson: "A2.12" },	{ front: "has been against", back: "ist dagegen gewesen", lesson: "A2.12" },
{ front: "to be in favor", back: "dafür sein", lesson: "A2.12" },	{ front: "has been in favor", back: "ist dafür gewesen", lesson: "A2.12" },
{ front: "to accept", back: "annehmen", lesson: "A2.12" },	{ front: "has accepted", back: "hat angenommen", lesson: "A2.12" },
{ front: "to decline", back: "ablehnen", lesson: "A2.12" },	{ front: "has declined", back: "hat abgelehnt", lesson: "A2.12" },
{ front: "to laze around, to be lazy", back: "faulenzen", lesson: "A2.12" },	{ front: "has lazed around", back: "hat gefaulenzt", lesson: "A2.12" },
{ front: "the travel destination", back: "das Reiseziel", lesson: "A2.12" },	{ front: "the travel destinations", back: "die Reiseziele", lesson: "A2.12" },
{ front: "the activities", back: "die Aktivitäten", lesson: "A2.12" },	
{ front: "to see the sights, to visit landmarks", back: "Sehenswürdigkeiten ansehen", lesson: "A2.12" },	{ front: "has seen the sights, has visited landmarks", back: "hat Sehenswürdigkeiten angesehen", lesson: "A2.12" },
{ front: "to visit the old town", back: "die Altstadt besichtigen", lesson: "A2.12" },	{ front: "has visited the old town", back: "hat die Altstadt besichtigt", lesson: "A2.12" },
{ front: "to view an exhibition", back: "eine Ausstellung ansehen", lesson: "A2.12" },	{ front: "has viewed an exhibition", back: "hat eine Ausstellung angesehen", lesson: "A2.12" },
{ front: "to take a city tour", back: "eine Stadtführung machen", lesson: "A2.12" },	{ front: "has taken a city tour", back: "hat eine Stadtführung gemacht", lesson: "A2.12" },
{ front: "at the travel agency", back: "im Reisebüro", lesson: "A2.12" },	
{ front: "to book a trip", back: "eine Reise buchen", lesson: "A2.12" },	{ front: "has booked a trip", back: "hat eine Reise gebucht", lesson: "A2.12" },
{ front: "the information", back: "die Auskunft", lesson: "A2.12" },	
{ front: "the trip", back: "die Reise", lesson: "A2.12" },	{ front: "the trips", back: "die Reisen", lesson: "A2.12" },
{ front: "the office", back: "das Büro", lesson: "A2.12" },	{ front: "the offices", back: "die Büros", lesson: "A2.12" },
{ front: "the ice", back: "das Eis", lesson: "A2.12" },	
{ front: "the egg", back: "das Ei", lesson: "A2.12" },	{ front: "the eggs", back: "die Eier", lesson: "A2.12" },
{ front: "the amount", back: "der Betrag", lesson: "A2.12" },	{ front: "the amounts", back: "die Beträge", lesson: "A2.12" },
{ front: "the account", back: "das Konto", lesson: "A2.13" },	{ front: "the accounts", back: "die Konten", lesson: "A2.13" },
{ front: "to open", back: "eröffnen", lesson: "A2.13" },	{ front: "has opened", back: "hat eröffnet", lesson: "A2.13" },
{ front: "to answer", back: "beantworten", lesson: "A2.13" },	{ front: "has answered", back: "hat beantwortet", lesson: "A2.13" },
{ front: "to get, to procure", back: "besorgen", lesson: "A2.13" },	{ front: "has procured", back: "hat besorgt", lesson: "A2.13" },
{ front: "to postpone", back: "verschieben", lesson: "A2.13" },	{ front: "has postponed", back: "hat verschoben", lesson: "A2.13" },
{ front: "the EC card", back: "die EC-Karte", lesson: "A2.13" },	{ front: "the EC cards", back: "die EC-Karten", lesson: "A2.13" },
{ front: "to withdraw", back: "abheben", lesson: "A2.13" },	{ front: "has withdrawn", back: "hat abgehoben", lesson: "A2.13" },
{ front: "to get, to receive", back: "kriegen", lesson: "A2.13" },	{ front: "has gotten", back: "hat gekriegt", lesson: "A2.13" },
{ front: "the ATM", back: "der Geldautomat", lesson: "A2.13" },	{ front: "the ATMs", back: "die Geldautomaten", lesson: "A2.13" },
{ front: "the checking account", back: "das Girokonto", lesson: "A2.13" },	{ front: "the checking accounts", back: "die Girokonten", lesson: "A2.13" },
{ front: "whether, if", back: "ob", lesson: "A2.13" },	
{ front: "the cash", back: "das Bargeld", lesson: "A2.13" },	
{ front: "the sum", back: "die Summe", lesson: "A2.13" },	{ front: "the sums", back: "die Summen", lesson: "A2.13" },
{ front: "but rather, but", back: "sondern", lesson: "A2.13" },	
{ front: "monthly", back: "monatlich", lesson: "A2.13" },	
{ front: "the interest", back: "die Zinsen", lesson: "A2.13" },	
{ front: "to accept", back: "akzeptieren", lesson: "A2.13" },	{ front: "has accepted", back: "hat akzeptiert", lesson: "A2.13" },
{ front: "the pocket money", back: "das Taschengeld", lesson: "A2.13" },	
{ front: "to complete, to finish", back: "erledigen", lesson: "A2.13" },	{ front: "has completed", back: "hat erledigt", lesson: "A2.13" },
{ front: "to check, to control", back: "kontrollieren", lesson: "A2.13" },	{ front: "has controlled", back: "hat kontrolliert", lesson: "A2.13" },
{ front: "the control", back: "die Kontrolle", lesson: "A2.13" },	{ front: "the controls", back: "die Kontrollen", lesson: "A2.13" },
{ front: "to break down (to be broken)", back: "kaputtgehen", lesson: "A2.13" },	{ front: "has broken down", back: "ist kaputtgegangen", lesson: "A2.13" },
{ front: "to recognize", back: "erkennen", lesson: "A2.13" },	{ front: "has recognized", back: "hat erkannt", lesson: "A2.13" },
{ front: "the manufacturer", back: "der Hersteller", lesson: "A2.13" },	{ front: "the manufacturers", back: "die Hersteller", lesson: "A2.13" },
{ front: "the oil", back: "das Öl", lesson: "A2.13" },	
{ front: "the brake", back: "die Bremse", lesson: "A2.13" },	{ front: "the brakes", back: "die Bremsen", lesson: "A2.13" },
{ front: "to check, to verify", back: "überprüfen", lesson: "A2.13" },	{ front: "has checked", back: "hat überprüft", lesson: "A2.13" },
{ front: "to renovate", back: "renovieren", lesson: "A2.13" },	{ front: "has renovated", back: "hat renoviert", lesson: "A2.13" },
{ front: "to change", back: "ändern", lesson: "A2.13" },	{ front: "has changed", back: "hat geändert", lesson: "A2.13" },
{ front: "to cut (oneself)", back: "schneiden (sich)", lesson: "A2.13" },	{ front: "has cut (oneself)", back: "hat geschnitten", lesson: "A2.13" },
{ front: "to deposit", back: "einzahlen", lesson: "A2.13" },	{ front: "has deposited", back: "hat eingezahlt", lesson: "A2.13" },
{ front: "the brochure", back: "die Broschüre", lesson: "A2.13" },	{ front: "the brochures", back: "die Broschüren", lesson: "A2.13" },
{ front: "the salary", back: "das Gehalt", lesson: "A2.13" },	{ front: "the salaries", back: "die Gehälter", lesson: "A2.13" },
{ front: "the payslip", back: "der Gehaltsnachweis", lesson: "A2.13" },	{ front: "the payslips", back: "die Gehaltsnachweise", lesson: "A2.13" },
{ front: "to type", back: "tippen", lesson: "A2.13" },	{ front: "has typed", back: "hat getippt", lesson: "A2.13" },
{ front: "to transfer", back: "überweisen", lesson: "A2.13" },	{ front: "has transferred", back: "hat überwiesen", lesson: "A2.13" },
{ front: "the menu", back: "das Menü", lesson: "A2.13" },	{ front: "the menus", back: "die Menüs", lesson: "A2.13" },
{ front: "the waiter", back: "der Ober", lesson: "A2.13" },	{ front: "the waiters", back: "die Ober", lesson: "A2.13" },
{ front: "the police", back: "die Polizei", lesson: "A2.13" },	
{ front: "angry, evil", back: "böse", lesson: "A2.13" },	
{ front: "the mood", back: "die Laune", lesson: "A2.13" },	{ front: "the moods", back: "die Launen", lesson: "A2.13" },
{ front: "the increase", back: "die Erhöhung", lesson: "A2.13" },	{ front: "the increases", back: "die Erhöhungen", lesson: "A2.13" },
{ front: "the bank statement", back: "der Kontoauszug", lesson: "A2.13" },	{ front: "the bank statements", back: "die Kontoauszüge", lesson: "A2.13" },
{ front: "to withdraw money", back: "Geld abheben", lesson: "A2.13" },	{ front: "has withdrawn", back: "hat abgehoben", lesson: "A2.13" },
{ front: "the survey", back: "die Umfrage", lesson: "A2.14" },	{ front: "the surveys", back: "die Umfragen", lesson: "A2.14" },
{ front: "hardly, scarcely", back: "kaum", lesson: "A2.14" },	
{ front: "the future", back: "die Zukunft", lesson: "A2.14" },	
{ front: "the decision", back: "die Entscheidung", lesson: "A2.14" },	{ front: "the decisions", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "to die", back: "sterben", lesson: "A2.14" },	{ front: "has died", back: "ist gestorben", lesson: "A2.14" },
{ front: "the childhood", back: "die Kindheit", lesson: "A2.14" },	{ front: "the childhoods", back: "die Kindheiten", lesson: "A2.14" },
{ front: "next door", back: "nebenan", lesson: "A2.14" },	
{ front: "to fall in love", back: "verlieben (sich)", lesson: "A2.14" },	{ front: "has fallen in love", back: "hat sich verliebt", lesson: "A2.14" },
{ front: "nonsense", back: "der Quatsch", lesson: "A2.14" },	
{ front: "the teaching, the apprenticeship", back: "die Lehre", lesson: "A2.14" },	{ front: "the teachings, the apprenticeships", back: "die Lehren", lesson: "A2.14" },
{ front: "accidental, coincidental", back: "zufällig", lesson: "A2.14" },	
{ front: "the restaurant, the venue", back: "das Lokal", lesson: "A2.14" },	{ front: "the restaurants, the venues", back: "die Lokale", lesson: "A2.14" },
{ front: "since then", back: "seitdem", lesson: "A2.14" },	
{ front: "only, single", back: "einzig-", lesson: "A2.14" },	
{ front: "the opposite", back: "das Gegenteil", lesson: "A2.14" },	{ front: "the opposites", back: "die Gegenteile", lesson: "A2.14" },
{ front: "doesn't matter, indifferent", back: "egal", lesson: "A2.14" },	
{ front: "the argument, the fight", back: "der Streit", lesson: "A2.14" },	{ front: "the arguments, the fights", back: "die Streite", lesson: "A2.14" },
{ front: "the couple", back: "das Paar", lesson: "A2.14" },	{ front: "the couples", back: "die Paare", lesson: "A2.14" },
{ front: "the education, upbringing", back: "die Erziehung", lesson: "A2.14" },	
{ front: "the opinion", back: "die Meinung", lesson: "A2.14" },	{ front: "the opinions", back: "die Meinungen", lesson: "A2.14" },
{ front: "the advice", back: "der Ratschlag", lesson: "A2.14" },	{ front: "the pieces of advice", back: "die Ratschläge", lesson: "A2.14" },
{ front: "the mouse", back: "die Maus", lesson: "A2.14" },	{ front: "the mice", back: "die Mäuse", lesson: "A2.14" },
{ front: "rather, sooner", back: "eher", lesson: "A2.14" },	
{ front: "popular", back: "populär", lesson: "A2.14" },	
{ front: "the smoker", back: "der Raucher", lesson: "A2.14" },	{ front: "the smokers", back: "die Raucher", lesson: "A2.14" },
{ front: "the female smoker", back: "die Raucherin", lesson: "A2.14" },	{ front: "the female smokers", back: "die Raucherinnen", lesson: "A2.14" },
{ front: "the fairy tale", back: "das Märchen", lesson: "A2.14" },	{ front: "the fairy tales", back: "die Märchen", lesson: "A2.14" },
{ front: "to address, to speak to", back: "ansprechen", lesson: "A2.14" },	{ front: "has addressed, spoken to", back: "hat angesprochen", lesson: "A2.14" },
{ front: "to thank", back: "danken", lesson: "A2.14" },	{ front: "has thanked", back: "hat gedankt", lesson: "A2.14" },
{ front: "the idea, the thought", back: "der Einfall", lesson: "A2.14" },	{ front: "the ideas, the thoughts", back: "die Einfälle", lesson: "A2.14" },
{ front: "the world", back: "die Welt", lesson: "A2.14" },	{ front: "the worlds", back: "die Welten", lesson: "A2.14" },
{ front: "the pet", back: "das Haustier", lesson: "A2.14" },	{ front: "the pets", back: "die Haustiere", lesson: "A2.14" },
{ front: "serious", back: "ernst", lesson: "A2.14" },	
{ front: "comfortable", back: "bequem", lesson: "A2.14" },	
{ front: "the childhood", back: "die Kindheit", lesson: "A2.14" },	{ front: "the childhoods", back: "die Kindheiten", lesson: "A2.14" },
{ front: "the couple", back: "das Paar", lesson: "A2.14" },	{ front: "the couples", back: "die Paare", lesson: "A2.14" },
{ front: "the decision", back: "die Entscheidung", lesson: "A2.14" },	{ front: "the decisions", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "the survey", back: "die Umfrage", lesson: "A2.14" },	{ front: "the surveys", back: "die Umfragen", lesson: "A2.14" },
{ front: "the world", back: "die Welt", lesson: "A2.14" },	{ front: "the worlds", back: "die Welten", lesson: "A2.14" },
{ front: "the experience", back: "das Erlebnis", lesson: "B1.1" },	{ front: "the experiences", back: "die Erlebnisse", lesson: "B1.1" },
{ front: "the article", back: "der Artikel", lesson: "B1.1" },	
{ front: "to be (infinitive)", back: "sein", lesson: "B1.1" },	{ front: "been gone (perfect)", back: "sein weg gewesen", lesson: "B1.1" },
{ front: "the religion", back: "die Religion", lesson: "B1.1" },	{ front: "the religions", back: "die Religionen", lesson: "B1.1" },
{ front: "the surprise", back: "die Überraschung", lesson: "B1.1" },	{ front: "the surprises", back: "die Überraschungen", lesson: "B1.1" },
{ front: "crazy", back: "verrückt", lesson: "B1.1" },	
{ front: "the profit/win", back: "der Gewinn", lesson: "B1.1" },	{ front: "the profits/wins", back: "die Gewinne", lesson: "B1.1" },
{ front: "the tax", back: "die Steuer", lesson: "B1.1" },	
{ front: "the voice", back: "die Stimme", lesson: "B1.1" },	{ front: "the voices", back: "die Stimmen", lesson: "B1.1" },
{ front: "to sit down", back: "sich setzen", lesson: "B1.1" },	{ front: "has sat down", back: "hat sich gesetzt", lesson: "B1.1" },
{ front: "brave", back: "mutig", lesson: "B1.1" },	
{ front: "the report/message", back: "die Meldung", lesson: "B1.1" },	{ front: "the reports/messages", back: "die Meldungen", lesson: "B1.1" },
{ front: "the headline", back: "die Überschrift", lesson: "B1.1" },	{ front: "the headlines", back: "die Überschriften", lesson: "B1.1" },
{ front: "during/while", back: "während", lesson: "B1.1" },	
{ front: "to disappear", back: "verschwinden", lesson: "B1.1" },	{ front: "has disappeared", back: "ist verschwunden", lesson: "B1.1" },
{ front: "several/multiple (prefix)", back: "mehrer-", lesson: "B1.1" },	
{ front: "in vain", back: "vergeblich", lesson: "B1.1" },	
{ front: "to climb/rise", back: "steigen", lesson: "B1.1" },	{ front: "has climbed/risen", back: "ist gestiegen", lesson: "B1.1" },
{ front: "to wonder/to be surprised", back: "sich wundern", lesson: "B1.1" },	{ front: "has wondered/been surprised", back: "hat sich gewundert", lesson: "B1.1" },
{ front: "indeed/namely", back: "zwar", lesson: "B1.1" },	
{ front: "the courage", back: "der Mut", lesson: "B1.1" },	
{ front: "both (prefix)", back: "beid-", lesson: "B1.1" },	
{ front: "to reach", back: "erreichen", lesson: "B1.1" },	{ front: "has reached", back: "hat erreicht", lesson: "B1.1" },
{ front: "deep", back: "tief", lesson: "B1.1" },	
{ front: "to confuse/mistake", back: "verwechseln", lesson: "B1.1" },	{ front: "has confused/mistaken", back: "hat verwechselt", lesson: "B1.1" },
{ front: "the means/medium", back: "das Mittel", lesson: "B1.1" },	
{ front: "united/some (prefix)", back: "einig-", lesson: "B1.1" },	
{ front: "to be located/to find oneself", back: "sich befinden", lesson: "B1.1" },	{ front: "has been located/found oneself", back: "hat sich befunden", lesson: "B1.1" },
{ front: "to reflect/think about", back: "nachdenken", lesson: "B1.1" },	{ front: "has reflected/thought about", back: "hat nachgedacht", lesson: "B1.1" },
{ front: "the information/detail", back: "die Angabe", lesson: "B1.1" },	{ front: "the informations/details", back: "die Angaben", lesson: "B1.1" },
{ front: "to save", back: "retten", lesson: "B1.1" },	{ front: "has saved", back: "hat gerettet", lesson: "B1.1" },
{ front: "to suffice/be enough", back: "ausreichen", lesson: "B1.1" },	{ front: "has sufficed/been enough", back: "hat ausgereicht", lesson: "B1.1" },
{ front: "the annoyance/anger", back: "der Ärger", lesson: "B1.1" },	
{ front: "to follow", back: "folgen", lesson: "B1.1" },	{ front: "has followed", back: "ist gefolgt", lesson: "B1.1" },
{ front: "at least", back: "zumindest", lesson: "B1.1" },	
{ front: "to cancel", back: "absagen", lesson: "B1.1" },	{ front: "has cancelled", back: "hat abgesagt", lesson: "B1.1" },
{ front: "to call/shout", back: "rufen", lesson: "B1.1" },	{ front: "has called/shouted", back: "hat gerufen", lesson: "B1.1" },
{ front: "to block/cordon off", back: "absperren", lesson: "B1.1" },	{ front: "has blocked/cordoned off", back: "hat abgesperrt", lesson: "B1.1" },
{ front: "to arrest", back: "festnehmen", lesson: "B1.1" },	{ front: "has arrested", back: "hat festgenommen", lesson: "B1.1" },
{ front: "drunk", back: "betrunken", lesson: "B1.1" },	
{ front: "the burglar", back: "der Einbrecher", lesson: "B1.1" },	
{ front: "exciting", back: "aufregend", lesson: "B1.1" },	
{ front: "funny", back: "witzig", lesson: "B1.1" },	
{ front: "the motor scooter", back: "der Motorroller", lesson: "B1.1" },	
{ front: "to be (infinitive)", back: "sein", lesson: "B1.1" },	{ front: "has been in love", back: "ist verliebt gewesen", lesson: "B1.1" },
{ front: "to break", back: "brechen", lesson: "B1.1" },	{ front: "has broken", back: "ist/hat gebrochen", lesson: "B1.1" },
{ front: "the (male) coach", back: "der Trainer", lesson: "B1.1" },	
{ front: "the (female) coach", back: "die Trainerin", lesson: "B1.1" },	{ front: "the (female) coaches", back: "die Trainerinnen", lesson: "B1.1" },
{ front: "the field", back: "das Feld", lesson: "B1.1" },	{ front: "the fields", back: "die Felder", lesson: "B1.1" },
{ front: "all (prefix)", back: "aller-", lesson: "B1.1" },	
{ front: "the goal/gate", back: "das Tor", lesson: "B1.1" },	{ front: "the goals/gates", back: "die Tore", lesson: "B1.1" },
{ front: "to flee", back: "fliehen", lesson: "B1.1" },	{ front: "has fled", back: "ist geflohen", lesson: "B1.1" },
{ front: "best (prefix)", back: "best-", lesson: "B1.1" },	
{ front: "the registry office", back: "das Standesamt", lesson: "B1.1" },	{ front: "the registry offices", back: "die Standesämter", lesson: "B1.1" },
{ front: "to shoot", back: "schießen", lesson: "B1.1" },	{ front: "has shot", back: "hat geschossen", lesson: "B1.1" },
{ front: "the damage", back: "der Schaden", lesson: "B1.1" },	{ front: "the damages", back: "die Schäden", lesson: "B1.1" },
{ front: "the curtain", back: "der Vorhang", lesson: "B1.1" },	{ front: "the curtains", back: "die Vorhänge", lesson: "B1.1" },
{ front: "immediate/momentary", back: "augenblicklich", lesson: "B1.1" },	
{ front: "to bite", back: "beißen", lesson: "B1.1" },	{ front: "has bitten", back: "hat gebissen", lesson: "B1.1" },
{ front: "to frighten/startle", back: "erschrecken", lesson: "B1.1" },	{ front: "has been startled", back: "ist erschrocken", lesson: "B1.1" },
{ front: "the contact", back: "der Kontakt", lesson: "B1.1" },	{ front: "the contacts", back: "die Kontakte", lesson: "B1.1" },
{ front: "the data", back: "die Daten", lesson: "B1.1" },	
{ front: "the conversation", back: "das Gespräch", lesson: "B1.1" },	{ front: "the conversations", back: "die Gespräche", lesson: "B1.1" },
{ front: "the report", back: "der Bericht", lesson: "B1.1" },	{ front: "the reports", back: "die Berichte", lesson: "B1.1" },
{ front: "the midnight", back: "die Mitternacht", lesson: "B1.1" },	
{ front: "the stone", back: "der Stein", lesson: "B1.1" },	{ front: "the stones", back: "die Steine", lesson: "B1.1" },
{ front: "the lion", back: "der Löwe", lesson: "B1.1" },	{ front: "the lions", back: "die Löwen", lesson: "B1.1" },
{ front: "the report/message", back: "die Meldung", lesson: "B1.1" },	{ front: "the reports/messages", back: "die Meldungen", lesson: "B1.1" },
{ front: "the headline", back: "die Überschrift", lesson: "B1.1" },	{ front: "the headlines", back: "die Überschriften", lesson: "B1.1" },
{ front: "the article", back: "der Artikel", lesson: "B1.1" },	
{ front: "the report", back: "der Bericht", lesson: "B1.1" },	{ front: "the reports", back: "die Berichte", lesson: "B1.1" },
{ front: "the interview", back: "das Interview", lesson: "B1.1" },	{ front: "the interviews", back: "die Interviews", lesson: "B1.1" },
{ front: "the information", back: "die Information", lesson: "B1.1" },	{ front: "the informations", back: "die Informationen", lesson: "B1.1" },
{ front: "the advertisement/notice", back: "die Anzeige", lesson: "B1.1" },	{ front: "the advertisements/notices", back: "die Anzeigen", lesson: "B1.1" },
{ front: "the series", back: "die Serie", lesson: "B1.2" },	{ front: "the series (plural)", back: "die Serien", lesson: "B1.2" },
{ front: "the episode", back: "die Folge", lesson: "B1.2" },	{ front: "the episodes", back: "die Folgen", lesson: "B1.2" },
{ front: "the character", back: "der Charakter", lesson: "B1.2" },	{ front: "the characters", back: "die Charaktere", lesson: "B1.2" },
{ front: "although", back: "obwohl", lesson: "B1.2" },	
{ front: "constantly/continuously", back: "dauernd", lesson: "B1.2" },	
{ front: "the loser", back: "der Verlierer", lesson: "B1.2" },	{ front: "the losers", back: "die Verlierer", lesson: "B1.2" },
{ front: "the guy/type", back: "der Typ", lesson: "B1.2" },	{ front: "the guys/types", back: "die Typen", lesson: "B1.2" },
{ front: "optimistic", back: "optimistisch", lesson: "B1.2" },	
{ front: "the figure/character", back: "die Figur", lesson: "B1.2" },	{ front: "the figures/characters", back: "die Figuren", lesson: "B1.2" },
{ front: "unbelievable", back: "unglaublich", lesson: "B1.2" },	
{ front: "to invent", back: "erfinden", lesson: "B1.2" },	{ front: "has invented", back: "hat erfunden", lesson: "B1.2" },
{ front: "the operation", back: "die Operation", lesson: "B1.2" },	{ front: "the operations", back: "die Operationen", lesson: "B1.2" },
{ front: "the blood", back: "das Blut", lesson: "B1.2" },	
{ front: "crime/criminal (adj.)", back: "Kriminal", lesson: "B1.2" },	
{ front: "to publish", back: "veröffentlichen", lesson: "B1.2" },	{ front: "has published", back: "hat veröffentlicht", lesson: "B1.2" },
{ front: "the case", back: "der Fall", lesson: "B1.2" },	{ front: "the cases", back: "die Fälle", lesson: "B1.2" },
{ front: "the vocabulary (learning)", back: "der Lernwortschatz", lesson: "B1.2" },	
{ front: "today’s/current", back: "heutig", lesson: "B1.2" },	
{ front: "to act/trade", back: "handeln", lesson: "B1.2" },	{ front: "has acted/traded", back: "hat gehandelt", lesson: "B1.2" },
{ front: "the past", back: "die Vergangenheit", lesson: "B1.2" },	
{ front: "the (female) singer", back: "die Sängerin", lesson: "B1.2" },	{ front: "the (female) singers", back: "die Sängerinnen", lesson: "B1.2" },
{ front: "the band", back: "die Band", lesson: "B1.2" },	{ front: "the bands", back: "die Bands", lesson: "B1.2" },
{ front: "to arise/come into being", back: "entstehen", lesson: "B1.2" },	{ front: "has arisen/come into being", back: "ist entstanden", lesson: "B1.2" },
{ front: "electronic", back: "elektronisch", lesson: "B1.2" },	
{ front: "to produce", back: "produzieren", lesson: "B1.2" },	{ front: "has produced", back: "hat produziert", lesson: "B1.2" },
{ front: "the big city", back: "die Großstadt", lesson: "B1.2" },	{ front: "the big cities", back: "die Großstädte", lesson: "B1.2" },
{ front: "meanwhile/in the meantime", back: "inzwischen", lesson: "B1.2" },	
{ front: "initially/at the beginning", back: "anfangs", lesson: "B1.2" },	
{ front: "so-called", back: "sogenannt", lesson: "B1.2" },	
{ front: "the song", back: "der Song", lesson: "B1.2" },	{ front: "the songs", back: "die Songs", lesson: "B1.2" },
{ front: "the hit", back: "der Hit", lesson: "B1.2" },	{ front: "the hits", back: "die Hits", lesson: "B1.2" },
{ front: "completely/fully", back: "völlig", lesson: "B1.2" },	
{ front: "the humor", back: "der Humor", lesson: "B1.2" },	
{ front: "everyday/common", back: "alltäglich", lesson: "B1.2" },	
{ front: "the violence", back: "die Gewalt", lesson: "B1.2" },	
{ front: "to criticize", back: "kritisieren", lesson: "B1.2" },	{ front: "has criticized", back: "hat kritisiert", lesson: "B1.2" },
{ front: "the star", back: "der Star", lesson: "B1.2" },	{ front: "the stars", back: "die Stars", lesson: "B1.2" },
{ front: "the scene", back: "die Szene", lesson: "B1.2" },	
{ front: "successful", back: "erfolgreich", lesson: "B1.2" },	
{ front: "to be occupied with", back: "sich beschäftigen", lesson: "B1.2" },	{ front: "has been occupied with", back: "hat sich beschäftigt", lesson: "B1.2" },
{ front: "the unemployment", back: "die Arbeitslosigkeit", lesson: "B1.2" },	
{ front: "the camp/warehouse", back: "das Lager", lesson: "B1.2" },	{ front: "the camps/warehouses", back: "die Lager", lesson: "B1.2" },
{ front: "the relationship/ratio", back: "das Verhältnis", lesson: "B1.2" },	{ front: "the relationships/ratios", back: "die Verhältnisse", lesson: "B1.2" },
{ front: "to succeed", back: "gelingen", lesson: "B1.2" },	{ front: "has succeeded", back: "ist gelungen", lesson: "B1.2" },
{ front: "the advice/council", back: "der Rat", lesson: "B1.2" },	
{ front: "finally/lastly", back: "zuletzt", lesson: "B1.2" },	
{ front: "to leave", back: "verlassen", lesson: "B1.2" },	{ front: "has left", back: "hat verlassen", lesson: "B1.2" },
{ front: "to accompany", back: "begleiten", lesson: "B1.2" },	{ front: "has accompanied", back: "hat begleitet", lesson: "B1.2" },
{ front: "the box", back: "die Kiste", lesson: "B1.2" },	{ front: "the boxes", back: "die Kisten", lesson: "B1.2" },
{ front: "the shore/bank", back: "das Ufer", lesson: "B1.2" },	{ front: "the shores/banks", back: "die Ufer", lesson: "B1.2" },
{ front: "to wash/dishwash", back: "spülen", lesson: "B1.2" },	{ front: "has washed/dishwashed", back: "hat gespült", lesson: "B1.2" },
{ front: "outside", back: "außen", lesson: "B1.2" },	
{ front: "inside", back: "innen", lesson: "B1.2" },	
{ front: "to meet/encounter", back: "begegnen", lesson: "B1.2" },	{ front: "has met/encountered", back: "ist begegnet", lesson: "B1.2" },
{ front: "the adventure", back: "das Abenteuer", lesson: "B1.2" },	{ front: "the adventures", back: "die Abenteuer", lesson: "B1.2" },
{ front: "to come true/fulfill", back: "sich erfüllen", lesson: "B1.2" },	{ front: "has come true/fulfilled", back: "hat sich erfüllt", lesson: "B1.2" },
{ front: "for that", back: "dafür", lesson: "B1.2" },	
{ front: "to agree", back: "zustimmen", lesson: "B1.2" },	{ front: "has agreed", back: "hat zugestimmt", lesson: "B1.2" },
{ front: "the media", back: "die Medien", lesson: "B1.2" },	{ front: "the media", back: "die Medien", lesson: "B1.2" },
{ front: "the broadcasting/radio", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "tight/scarce", back: "knapp", lesson: "B1.2" },	
{ front: "double", back: "doppelt", lesson: "B1.2" },	
{ front: "relative", back: "relativ", lesson: "B1.2" },	
{ front: "the series", back: "die Serie", lesson: "B1.2" },	{ front: "the series (plural)", back: "die Serien", lesson: "B1.2" },
{ front: "the episode", back: "die Folge", lesson: "B1.2" },	{ front: "the episodes", back: "die Folgen", lesson: "B1.2" },
{ front: "the figure/character", back: "die Figur", lesson: "B1.2" },	{ front: "the figures/characters", back: "die Figuren", lesson: "B1.2" },
{ front: "the character", back: "der Charakter", lesson: "B1.2" },	{ front: "the characters", back: "die Charaktere", lesson: "B1.2" },
{ front: "crime/criminal (adj.)", back: "Kriminal", lesson: "B1.2" },	
{ front: "the broadcasting/radio", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "the adventure", back: "das Abenteuer", lesson: "B1.2" },	{ front: "the adventures", back: "die Abenteuer", lesson: "B1.2" },
{ front: "the cinema/movie theater", back: "das Kino", lesson: "B1.2" },	{ front: "the cinemas/movie theaters", back: "die Kinos", lesson: "B1.2" },
{ front: "the stomach", back: "der Magen", lesson: "B1.3" },	{ front: "the stomachs", back: "die Mägen", lesson: "B1.3" },
{ front: "to persuade", back: "überreden", lesson: "B1.3" },	{ front: "has persuaded", back: "hat überredet", lesson: "B1.3" },
{ front: "to arrange/agree", back: "vereinbaren", lesson: "B1.3" },	{ front: "has arranged/agreed", back: "hat vereinbart", lesson: "B1.3" },
{ front: "the means/remedy", back: "das Mittel", lesson: "B1.3" },	{ front: "the means/remedies", back: "die Mittel", lesson: "B1.3" },
{ front: "the sleep", back: "der Schlaf", lesson: "B1.3" },	
{ front: "the factor", back: "der Faktor", lesson: "B1.3" },	{ front: "the factors", back: "die Faktoren", lesson: "B1.3" },
{ front: "at night", back: "nachts", lesson: "B1.3" },	
{ front: "the basis/foundation", back: "die Grundlage", lesson: "B1.3" },	{ front: "the bases/foundations", back: "die Grundlagen", lesson: "B1.3" },
{ front: "sufficient/enough", back: "ausreichend", lesson: "B1.3" },	
{ front: "to pay attention/watch", back: "achten", lesson: "B1.3" },	{ front: "has paid attention/watched", back: "hat geachtet", lesson: "B1.3" },
{ front: "the fat", back: "das Fett", lesson: "B1.3" },	{ front: "the fats", back: "die Fette", lesson: "B1.3" },
{ front: "ideal", back: "ideal", lesson: "B1.3" },	
{ front: "likewise/also", back: "ebenfalls", lesson: "B1.3" },	
{ front: "to breathe", back: "atmen", lesson: "B1.3" },	{ front: "has breathed", back: "hat geatmet", lesson: "B1.3" },
{ front: "flat/shallow", back: "flach", lesson: "B1.3" },	
{ front: "the effect", back: "die Wirkung", lesson: "B1.3" },	{ front: "the effects", back: "die Wirkungen", lesson: "B1.3" },
{ front: "more often/frequently", back: "öfter", lesson: "B1.3" },	
{ front: "the strength/power", back: "die Kraft", lesson: "B1.3" },	{ front: "the strengths/powers", back: "die Kräfte", lesson: "B1.3" },
{ front: "simultaneously", back: "gleichzeitig", lesson: "B1.3" },	
{ front: "exhausted", back: "erschöpft", lesson: "B1.3" },	
{ front: "the result", back: "das Ergebnis", lesson: "B1.3" },	{ front: "the results", back: "die Ergebnisse", lesson: "B1.3" },
{ front: "to handle/deal with", back: "umgehen", lesson: "B1.3" },	{ front: "has handled/dealt with", back: "ist umgegangen", lesson: "B1.3" },
{ front: "to wake up", back: "aufwachen", lesson: "B1.3" },	{ front: "have woken up", back: "bist aufgewacht", lesson: "B1.3" },
{ front: "the lack/deficiency", back: "der Mangel", lesson: "B1.3" },	{ front: "the lacks/deficiencies", back: "die Mängel", lesson: "B1.3" },
{ front: "extreme", back: "extrem", lesson: "B1.3" },	
{ front: "to measure", back: "messen", lesson: "B1.3" },	{ front: "has measured", back: "hat gemessen", lesson: "B1.3" },
{ front: "to lose weight", back: "abnehmen", lesson: "B1.3" },	{ front: "has lost weight", back: "hat abgenommen", lesson: "B1.3" },
{ front: "the weight", back: "das Gewicht", lesson: "B1.3" },	
{ front: "to examine/investigate", back: "untersuchen", lesson: "B1.3" },	{ front: "has examined/investigated", back: "hat untersucht", lesson: "B1.3" },
{ front: "the trash bin", back: "der Abfalleimer", lesson: "B1.3" },	{ front: "the trash bins", back: "die Abfalleimer", lesson: "B1.3" },
{ front: "the improvement", back: "die Verbesserung", lesson: "B1.3" },	{ front: "the improvements", back: "die Verbesserungen", lesson: "B1.3" },
{ front: "the intake (e.g. medicine)", back: "die Einnahme", lesson: "B1.3" },	
{ front: "such", back: "solch", lesson: "B1.3" },	
{ front: "the expert/professional", back: "der Fachmann", lesson: "B1.3" },	{ front: "the experts/professionals", back: "die Fachmänner", lesson: "B1.3" },
{ front: "the shoulder", back: "die Schulter", lesson: "B1.3" },	{ front: "the shoulders", back: "die Schultern", lesson: "B1.3" },
{ front: "at first/initially", back: "zunächst", lesson: "B1.3" },	
{ front: "to suppose/assume", back: "vermuten", lesson: "B1.3" },	{ front: "has supposed/assumed", back: "hat vermutet", lesson: "B1.3" },
{ front: "the disturbance/disorder", back: "die Störung", lesson: "B1.3" },	{ front: "the disturbances/disorders", back: "die Störungen", lesson: "B1.3" },
{ front: "the painkiller", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "the painkillers", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "to lead", back: "führen", lesson: "B1.3" },	{ front: "has led", back: "hat geführt", lesson: "B1.3" },
{ front: "to prescribe", back: "verschreiben", lesson: "B1.3" },	{ front: "has prescribed", back: "hat verschrieben", lesson: "B1.3" },
{ front: "to receive/get", back: "erhalten", lesson: "B1.3" },	{ front: "has received/get", back: "hat erhalten", lesson: "B1.3" },
{ front: "to take off/remove/lose weight", back: "abnehmen", lesson: "B1.3" },	{ front: "has taken off/removed/lost weight", back: "hat abgenommen", lesson: "B1.3" },
{ front: "the well-being", back: "das Wohl", lesson: "B1.3" },	
{ front: "for free/in vain", back: "umsonst", lesson: "B1.3" },	
{ front: "to participate", back: "teilnehmen", lesson: "B1.3" },	{ front: "has participated", back: "hat teilgenommen", lesson: "B1.3" },
{ front: "the performance/achievement", back: "die Leistung", lesson: "B1.3" },	{ front: "the performances/achievements", back: "die Leistungen", lesson: "B1.3" },
{ front: "to vaccinate", back: "impfen", lesson: "B1.3" },	{ front: "has vaccinated", back: "hat geimpft", lesson: "B1.3" },
{ front: "to do/engage in (sports etc.)", back: "treiben", lesson: "B1.3" },	{ front: "has done/engaged in", back: "hat getrieben", lesson: "B1.3" },
{ front: "the half", back: "die Hälfte", lesson: "B1.3" },	{ front: "the halves", back: "die Hälften", lesson: "B1.3" },
{ front: "the quarter", back: "das Viertel", lesson: "B1.3" },	{ front: "the quarters", back: "die Viertel", lesson: "B1.3" },
{ front: "the third", back: "das Drittel", lesson: "B1.3" },	{ front: "the thirds", back: "die Drittel", lesson: "B1.3" },
{ front: "basically/fundamentally", back: "grundsätzlich", lesson: "B1.3" },	
{ front: "the fruit", back: "die Frucht", lesson: "B1.3" },	{ front: "the fruits", back: "die Früchte", lesson: "B1.3" },
{ front: "to do without/renounce", back: "verzichten", lesson: "B1.3" },	{ front: "has done without/renounced", back: "hat verzichtet", lesson: "B1.3" },
{ front: "the curd/quark", back: "der Quark", lesson: "B1.3" },	
{ front: "the vitamin", back: "das Vitamin", lesson: "B1.3" },	{ front: "the vitamins", back: "die Vitamine", lesson: "B1.3" },
{ front: "to report sick", back: "krankmelden", lesson: "B1.3" },	{ front: "has reported sick", back: "hat krankgemeldet", lesson: "B1.3" },
{ front: "to certify sick leave", back: "krankschreiben", lesson: "B1.3" },	{ front: "has certified sick leave", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "the conference", back: "die Konferenz", lesson: "B1.3" },	{ front: "the conferences", back: "die Konferenzen", lesson: "B1.3" },
{ front: "the writing pad/notepad", back: "der Schreibblock", lesson: "B1.3" },	{ front: "the writing pads/notepads", back: "die Schreibblöcke", lesson: "B1.3" },
{ front: "the lab", back: "das Labor", lesson: "B1.3" },	{ front: "the labs", back: "die Labors / die Labore", lesson: "B1.3" },
{ front: "the bandage/association", back: "der Verband", lesson: "B1.3" },	{ front: "the bandages/associations", back: "die Verbände", lesson: "B1.3" },
{ front: "the syringe/injection", back: "die Spritze", lesson: "B1.3" },	{ front: "the syringes/injections", back: "die Spritzen", lesson: "B1.3" },
{ front: "to examine (someone/something)", back: "untersuchen (jemanden/etwas)", lesson: "B1.3" },	{ front: "has examined", back: "hat untersucht", lesson: "B1.3" },
{ front: "to vaccinate (someone)", back: "impfen (jemanden)", lesson: "B1.3" },	{ front: "has vaccinated", back: "hat geimpft", lesson: "B1.3" },
{ front: "the medication", back: "das Medikament", lesson: "B1.3" },	{ front: "the medications", back: "die Medikamente", lesson: "B1.3" },
{ front: "to prescribe", back: "verschreiben", lesson: "B1.3" },	{ front: "has prescribed", back: "hat verschrieben", lesson: "B1.3" },
{ front: "someone", back: "jemanden", lesson: "B1.3" },	
{ front: "to certify sick leave", back: "krankschreiben", lesson: "B1.3" },	{ front: "has certified sick leave", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "the syringe/injection", back: "die Spritze", lesson: "B1.3" },	{ front: "the syringes/injections", back: "die Spritzen", lesson: "B1.3" },
{ front: "the bandage/association", back: "der Verband", lesson: "B1.3" },	{ front: "the bandages/associations", back: "die Verbände", lesson: "B1.3" },
{ front: "the painkiller", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "the painkillers", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "the ointment/salve", back: "die Salbe", lesson: "B1.3" },	{ front: "the ointments/salves", back: "die Salben", lesson: "B1.3" },
{ front: "the pain", back: "der Schmerz", lesson: "B1.3" },	{ front: "the pains", back: "die Schmerzen", lesson: "B1.3" },
{ front: "the cold (illness)", back: "der Schnupfen", lesson: "B1.3" },	
{ front: "to measure (blood pressure)", back: "messen (den Blutdruck)", lesson: "B1.3" },	{ front: "has measured", back: "hat gemessen", lesson: "B1.3" },
{ front: "to take (blood)", back: "abnehmen (Blut)", lesson: "B1.3" },	{ front: "has taken", back: "hat abgenommen", lesson: "B1.3" },
{ front: "to check (the weight)", back: "prüfen (das Gewicht)", lesson: "B1.3" },	{ front: "has checked", back: "hat geprüft", lesson: "B1.3" },
{ front: "the belly/stomach", back: "der Bauch", lesson: "B1.3" },	{ front: "the bellies/stomachs", back: "die Bäuche", lesson: "B1.3" },
{ front: "the fever", back: "das Fieber", lesson: "B1.3" },	
{ front: "the cough", back: "der Husten", lesson: "B1.3" },	
{ front: "about what/over what", back: "worüber", lesson: "B1.4" },	
{ front: "the hurry/rush", back: "die Eile", lesson: "B1.4" },	
{ front: "the cellar/basement", back: "der Keller", lesson: "B1.4" },	{ front: "the cellars/basements", back: "die Keller", lesson: "B1.4" },
{ front: "there/then/because", back: "da", lesson: "B1.4" },	
{ front: "the sentence/phrase", back: "der Satz", lesson: "B1.4" },	{ front: "the sentences/phrases", back: "die Sätze", lesson: "B1.4" },
{ front: "that/there (prefix)", back: "da(r)-", lesson: "B1.4" },	
{ front: "really/at all", back: "gar", lesson: "B1.4" },	
{ front: "in any case/anyway", back: "jedenfalls", lesson: "B1.4" },	
{ front: "to smile", back: "lächeln", lesson: "B1.4" },	{ front: "has smiled", back: "hat gelächelt", lesson: "B1.4" },
{ front: "just/simply", back: "halt", lesson: "B1.4" },	
{ front: "clear/distinct", back: "deutlich", lesson: "B1.4" },	
{ front: "so much", back: "so viel", lesson: "B1.4" },	
{ front: "to plan/intend", back: "vorhaben", lesson: "B1.4" },	{ front: "has planned/intended", back: "hat vorgehabt", lesson: "B1.4" },
{ front: "the truth", back: "die Wahrheit", lesson: "B1.4" },	{ front: "the truths", back: "die Wahrheiten", lesson: "B1.4" },
{ front: "to lie", back: "lügen", lesson: "B1.4" },	{ front: "has lied", back: "hat gelogen", lesson: "B1.4" },
{ front: "to end/finish", back: "beenden", lesson: "B1.4" },	{ front: "has ended/finished", back: "hat beendet", lesson: "B1.4" },
{ front: "the training/apprenticeship place", back: "der Ausbildungsplatz", lesson: "B1.4" },	{ front: "the training/apprenticeship places", back: "die Ausbildungsplätze", lesson: "B1.4" },
{ front: "to choose/select", back: "aussuchen", lesson: "B1.4" },	{ front: "has chosen/selected", back: "hat ausgesucht", lesson: "B1.4" },
{ front: "the president (m/f)", back: "der Präsident / die Präsidentin", lesson: "B1.4" },	{ front: "the presidents (m/f)", back: "die Präsidenten / die Präsidentinnen", lesson: "B1.4" },
{ front: "the wallet/purse", back: "das Portemonnaie", lesson: "B1.4" },	{ front: "the wallets/purses", back: "die Portemonnaies", lesson: "B1.4" },
{ front: "fluent", back: "fließend", lesson: "B1.4" },	
{ front: "therefore/that's why", back: "deswegen", lesson: "B1.4" },	
{ front: "sometime/eventually", back: "irgendwann", lesson: "B1.4" },	
{ front: "to translate", back: "übersetzen", lesson: "B1.4" },	{ front: "has translated", back: "hat übersetzt", lesson: "B1.4" },
{ front: "therefore/from there", back: "daher", lesson: "B1.4" },	
{ front: "the mother tongue", back: "die Muttersprache", lesson: "B1.4" },	{ front: "the mother tongues", back: "die Muttersprachen", lesson: "B1.4" },
{ front: "the pronunciation", back: "die Aussprache", lesson: "B1.4" },	
{ front: "therefore/about that", back: "darum", lesson: "B1.4" },	
{ front: "to write down", back: "aufschreiben", lesson: "B1.4" },	{ front: "has written down", back: "hat aufgeschrieben", lesson: "B1.4" },
{ front: "the expression/phrase", back: "der Ausdruck", lesson: "B1.4" },	{ front: "the expressions/phrases", back: "die Ausdrücke", lesson: "B1.4" },
{ front: "once again/again", back: "noch mal", lesson: "B1.4" },	
{ front: "the mechanic (male)", back: "der Mechaniker", lesson: "B1.4" },	{ front: "the mechanics (male)", back: "die Mechaniker", lesson: "B1.4" },
{ front: "the mechanic (female)", back: "die Mechanikerin", lesson: "B1.4" },	{ front: "the mechanics (female)", back: "die Mechanikerinnen", lesson: "B1.4" },
{ front: "the repetition/review", back: "die Wiederholung", lesson: "B1.4" },	{ front: "the repetitions/reviews", back: "die Wiederholungen", lesson: "B1.4" },
{ front: "the cafeteria/canteen", back: "die Mensa", lesson: "B1.4" },	{ front: "the cafeterias/canteens", back: "die Mensen", lesson: "B1.4" },
{ front: "the integration course", back: "der Integrationskurs", lesson: "B1.4" },	{ front: "the integration courses", back: "die Integrationskurse", lesson: "B1.4" },
{ front: "the origin/background", back: "die Herkunft", lesson: "B1.4" },	{ front: "the origins/backgrounds", back: "die Herkünfte", lesson: "B1.4" },
{ front: "to hide oneself", back: "sich verstecken", lesson: "B1.4" },	{ front: "has hidden oneself", back: "hat sich versteckt", lesson: "B1.4" },
{ front: "cool", back: "cool", lesson: "B1.4" },	
{ front: "the Greek language", back: "das Griechisch", lesson: "B1.4" },	
{ front: "the Greek (male)", back: "der Grieche", lesson: "B1.4" },	{ front: "the Greeks (male)", back: "die Griechen", lesson: "B1.4" },
{ front: "the Greek (female)", back: "die Griechin", lesson: "B1.4" },	{ front: "the Greeks (female)", back: "die Griechinnen", lesson: "B1.4" },
{ front: "confused/mixed up", back: "durcheinander", lesson: "B1.4" },	
{ front: "at the latest/by", back: "spätestens", lesson: "B1.4" },	
{ front: "to choose/vote", back: "wählen", lesson: "B1.4" },	{ front: "has chosen/voted", back: "hat gewählt", lesson: "B1.4" },
{ front: "to originate/come from", back: "stammen", lesson: "B1.4" },	{ front: "has originated/came from", back: "hat gestammt", lesson: "B1.4" },
{ front: "the sauce", back: "die Soße", lesson: "B1.4" },	{ front: "the sauces", back: "die Soßen", lesson: "B1.4" },
{ front: "gradually", back: "allmählich", lesson: "B1.4" },	
{ front: "the nerve", back: "der Nerv", lesson: "B1.4" },	{ front: "the nerves", back: "die Nerven", lesson: "B1.4" },
{ front: "strange/odd", back: "merkwürdig", lesson: "B1.4" },	
{ front: "correct", back: "korrekt", lesson: "B1.4" },	
{ front: "on the other hand", back: "andererseits", lesson: "B1.4" },	
{ front: "likewise/as well", back: "ebenso", lesson: "B1.4" },	
{ front: "the forehead", back: "die Stirn", lesson: "B1.4" },	{ front: "the foreheads", back: "die Stirnen", lesson: "B1.4" },
{ front: "to suffer", back: "leiden", lesson: "B1.4" },	{ front: "has suffered", back: "hat gelitten", lesson: "B1.4" },
{ front: "to mix", back: "mischen", lesson: "B1.4" },	{ front: "has mixed", back: "hat gemischt", lesson: "B1.4" },
{ front: "however", back: "allerdings", lesson: "B1.4" },	
{ front: "to pass/exist", back: "bestehen", lesson: "B1.4" },	{ front: "has passed/existed", back: "hat bestanden", lesson: "B1.4" },
{ front: "the author (male)", back: "der Autor", lesson: "B1.4" },	{ front: "the authors (male)", back: "die Autoren", lesson: "B1.4" },
{ front: "the author (female)", back: "die Autorin", lesson: "B1.4" },	{ front: "the authors (female)", back: "die Autorinnen", lesson: "B1.4" },
{ front: "the knowledge/skills", back: "die Kenntnisse", lesson: "B1.4" },	{ front: "the knowledge/skills", back: "die Kenntnisse", lesson: "B1.4" },
{ front: "to compare", back: "vergleichen", lesson: "B1.4" },	{ front: "has compared", back: "hat verglichen", lesson: "B1.4" },
{ front: "the partner (male)", back: "der Partner", lesson: "B1.4" },	{ front: "the partners (male)", back: "die Partner", lesson: "B1.4" },
{ front: "the partner (female)", back: "die Partnerin", lesson: "B1.4" },	{ front: "the partners (female)", back: "die Partnerinnen", lesson: "B1.4" },
{ front: "to scold/complain", back: "schimpfen", lesson: "B1.4" },	{ front: "has scolded/complained", back: "hat geschimpft", lesson: "B1.4" },
{ front: "the script/writing", back: "die Schrift", lesson: "B1.4" },	{ front: "the scripts/writings", back: "die Schriften", lesson: "B1.4" },
{ front: "the mother tongue", back: "die Muttersprache", lesson: "B1.4" },	{ front: "the mother tongues", back: "die Muttersprachen", lesson: "B1.4" },
{ front: "the foreign language", back: "die Fremdsprache", lesson: "B1.4" },	{ front: "the foreign languages", back: "die Fremdsprachen", lesson: "B1.4" },
{ front: "the language school", back: "die Sprachenschule", lesson: "B1.4" },	{ front: "the language schools", back: "die Sprachenschulen", lesson: "B1.4" },
{ front: "the pronunciation", back: "die Aussprache", lesson: "B1.4" },	{ front: "the pronunciations", back: "die Aussprachen", lesson: "B1.4" },
{ front: "the script/writing", back: "die Schrift", lesson: "B1.4" },	{ front: "the scripts/writings", back: "die Schriften", lesson: "B1.4" },
{ front: "fluent", back: "fließend", lesson: "B1.4" },	
{ front: "to translate", back: "übersetzen", lesson: "B1.4" },	{ front: "has translated", back: "hat übersetzt", lesson: "B1.4" },
{ front: "to/at/by", back: "zu", lesson: "B1.5" },	
{ front: "the talent", back: "das Talent", lesson: "B1.5" },	{ front: "the talents", back: "die Talente", lesson: "B1.5" },
{ front: "about/approximately", back: "etwa", lesson: "B1.5" },	
{ front: "to suffice/be enough", back: "genügen", lesson: "B1.5" },	{ front: "has sufficed/been enough", back: "hat genügt", lesson: "B1.5" },
{ front: "to stop/cease", back: "aufhören", lesson: "B1.5" },	{ front: "has stopped/ceased", back: "hat aufgehört", lesson: "B1.5" },
{ front: "the trade/business", back: "der Handel", lesson: "B1.5" },	
{ front: "the advantage/benefit", back: "der Vorteil", lesson: "B1.5" },	{ front: "the advantages/benefits", back: "die Vorteile", lesson: "B1.5" },
{ front: "to expect", back: "erwarten", lesson: "B1.5" },	{ front: "has expected", back: "hat erwartet", lesson: "B1.5" },
{ front: "the prerequisite/condition", back: "die Voraussetzung", lesson: "B1.5" },	{ front: "the prerequisites/conditions", back: "die Voraussetzungen", lesson: "B1.5" },
{ front: "the service employee (male)", back: "der Serviceangestellte", lesson: "B1.5" },	{ front: "the service employees (male/mixed)", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "the service employee (female)", back: "die Serviceangestellte", lesson: "B1.5" },	{ front: "the service employees (female)", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "the documents/material", back: "die Unterlagen", lesson: "B1.5" },	{ front: "the documents/materials", back: "die Unterlagen", lesson: "B1.5" },
{ front: "the task/job", back: "die Aufgabe", lesson: "B1.5" },	{ front: "the tasks/jobs", back: "die Aufgaben", lesson: "B1.5" },
{ front: "the support", back: "die Unterstützung", lesson: "B1.5" },	{ front: "the supports", back: "die Unterstützungen", lesson: "B1.5" },
{ front: "in writing/written", back: "schriftlich", lesson: "B1.5" },	
{ front: "to determine/ascertain", back: "feststellen", lesson: "B1.5" },	{ front: "has determined/ascertained", back: "hat festgestellt", lesson: "B1.5" },
{ front: "accustomed/used to", back: "gewohnt", lesson: "B1.5" },	
{ front: "usual/common", back: "üblich", lesson: "B1.5" },	
{ front: "the facility/attachment", back: "die Anlage", lesson: "B1.5" },	{ front: "the facilities/attachments", back: "die Anlagen", lesson: "B1.5" },
{ front: "the CV/resume", back: "der Lebenslauf", lesson: "B1.5" },	{ front: "the CVs/resumes", back: "die Lebensläufe", lesson: "B1.5" },
{ front: "to develop", back: "entwickeln", lesson: "B1.5" },	{ front: "has developed", back: "hat entwickelt", lesson: "B1.5" },
{ front: "to produce/manufacture", back: "herstellen", lesson: "B1.5" },	{ front: "has produced/manufactured", back: "hat hergestellt", lesson: "B1.5" },
{ front: "the activity/occupation", back: "die Tätigkeit", lesson: "B1.5" },	{ front: "the activities/occupations", back: "die Tätigkeiten", lesson: "B1.5" },
{ front: "outside/of", back: "außerhalb", lesson: "B1.5" },	
{ front: "inside/within", back: "innerhalb", lesson: "B1.5" },	
{ front: "the point in time/moment", back: "der Zeitpunkt", lesson: "B1.5" },	{ front: "the points in time/moments", back: "die Zeitpunkte", lesson: "B1.5" },
{ front: "to calculate/count", back: "rechnen", lesson: "B1.5" },	{ front: "has calculated/counted", back: "hat gerechnet", lesson: "B1.5" },
{ front: "the mirror", back: "der Spiegel", lesson: "B1.5" },	{ front: "the mirrors", back: "die Spiegel", lesson: "B1.5" },
{ front: "to calm down", back: "sich beruhigen", lesson: "B1.5" },	{ front: "has calmed down", back: "hat sich beruhigt", lesson: "B1.5" },
{ front: "technical", back: "technisch", lesson: "B1.5" },	
{ front: "responsible", back: "zuständig", lesson: "B1.5" },	
{ front: "together", back: "zusammen-", lesson: "B1.5" },	
{ front: "the responsibility", back: "die Verantwortung", lesson: "B1.5" },	
{ front: "the painter (male)", back: "der Maler", lesson: "B1.5" },	{ front: "the painters (male)", back: "die Maler", lesson: "B1.5" },
{ front: "the painter (female)", back: "die Malerin", lesson: "B1.5" },	{ front: "the painters (female)", back: "die Malerinnen", lesson: "B1.5" },
{ front: "the order/assignment", back: "der Auftrag", lesson: "B1.5" },	{ front: "the orders/assignments", back: "die Aufträge", lesson: "B1.5" },
{ front: "the translator (male)", back: "der Übersetzer", lesson: "B1.5" },	{ front: "the translators (male)", back: "die Übersetzer", lesson: "B1.5" },
{ front: "the translator (female)", back: "die Übersetzerin", lesson: "B1.5" },	{ front: "the translators (female)", back: "die Übersetzerinnen", lesson: "B1.5" },
{ front: "to think over/consider", back: "sich überlegen", lesson: "B1.5" },	{ front: "has thought over/considered", back: "hat überlegt", lesson: "B1.5" },
{ front: "the competition", back: "die Konkurrenz", lesson: "B1.5" },	
{ front: "on the side/by the way", back: "nebenbei", lesson: "B1.5" },	
{ front: "to do casual jobs/side jobs", back: "jobben", lesson: "B1.5" },	{ front: "has done casual/side jobs", back: "hat gejobbt", lesson: "B1.5" },
{ front: "to manage/get along", back: "zurechtkommen", lesson: "B1.5" },	{ front: "has managed/gotten along", back: "ist zurechtgekommen", lesson: "B1.5" },
{ front: "the zoo/animal park", back: "der Tierpark", lesson: "B1.5" },	{ front: "the zoos/animal parks", back: "die Tierparks", lesson: "B1.5" },
{ front: "the further training", back: "die Fortbildung", lesson: "B1.5" },	{ front: "the further trainings", back: "die Fortbildungen", lesson: "B1.5" },
{ front: "to represent", back: "vertreten", lesson: "B1.5" },	{ front: "has represented", back: "hat vertreten", lesson: "B1.5" },
{ front: "the teacher (male)", back: "der Lehrer", lesson: "B1.5" },	{ front: "the teachers (male)", back: "die Lehrer", lesson: "B1.5" },
{ front: "the teacher (female)", back: "die Lehrerin", lesson: "B1.5" },	{ front: "the teachers (female)", back: "die Lehrerinnen", lesson: "B1.5" },
{ front: "the janitor/caretaker (male)", back: "der Hausmeister", lesson: "B1.5" },	{ front: "the janitors/caretakers (male)", back: "die Hausmeister", lesson: "B1.5" },
{ front: "the janitor/caretaker (female)", back: "die Hausmeisterin", lesson: "B1.5" },	{ front: "the janitors/caretakers (female)", back: "die Hausmeisterinnen", lesson: "B1.5" },
{ front: "the doctor (male)", back: "der Arzt", lesson: "B1.5" },	{ front: "the doctors (male)", back: "die Ärzte", lesson: "B1.5" },
{ front: "the doctor (female)", back: "die Ärztin", lesson: "B1.5" },	{ front: "the doctors (female)", back: "die Ärztinnen", lesson: "B1.5" },
{ front: "the architect (male)", back: "der Architekt", lesson: "B1.5" },	{ front: "the architects (male)", back: "die Architekten", lesson: "B1.5" },
{ front: "the architect (female)", back: "die Architektin", lesson: "B1.5" },	{ front: "the architects (female)", back: "die Architektinnen", lesson: "B1.5" },
{ front: "the hairdresser (male)", back: "der Friseur", lesson: "B1.5" },	{ front: "the hairdressers (male)", back: "die Friseure", lesson: "B1.5" },
{ front: "the hairdresser (female)", back: "die Friseurin", lesson: "B1.5" },	{ front: "the hairdressers (female)", back: "die Friseurinnen", lesson: "B1.5" },
{ front: "the journalist (male)", back: "der Journalist", lesson: "B1.5" },	{ front: "the journalists (male)", back: "die Journalisten", lesson: "B1.5" },
{ front: "the nurse (male)", back: "der Krankenpfleger", lesson: "B1.5" },	{ front: "the nurses (male)", back: "die Krankenpfleger", lesson: "B1.5" },
{ front: "the journalist (female)", back: "die Journalistin", lesson: "B1.5" },	{ front: "the journalists (female)", back: "die Journalistinnen", lesson: "B1.5" },
{ front: "the nurse (female)", back: "die Krankenschwester", lesson: "B1.5" },	{ front: "the nurses (female)", back: "die Krankenschwestern", lesson: "B1.5" },
{ front: "the police officer (male)", back: "der Polizist", lesson: "B1.5" },	{ front: "the police officers (male)", back: "die Polizisten", lesson: "B1.5" },
{ front: "the police officer (female)", back: "die Polizistin", lesson: "B1.5" },	{ front: "the police officers (female)", back: "die Polizistinnen", lesson: "B1.5" },
{ front: "the salesperson (male)", back: "der Verkäufer", lesson: "B1.5" },	{ front: "the salespersons (male)", back: "die Verkäufer", lesson: "B1.5" },
{ front: "the salesperson (female)", back: "die Verkäuferin", lesson: "B1.5" },	{ front: "the salespersons (female)", back: "die Verkäuferinnen", lesson: "B1.5" },
{ front: "instead of", back: "statt", lesson: "B1.6" },	
{ front: "first- (prefix)", back: "erst-", lesson: "B1.6" },	
{ front: "the production", back: "die Produktion", lesson: "B1.6" },	{ front: "the productions", back: "die Produktionen", lesson: "B1.6" },
{ front: "the replacement", back: "der Ersatz", lesson: "B1.6" },	
{ front: "certain/specific", back: "bestimmt", lesson: "B1.6" },	
{ front: "to solve/release", back: "lösen", lesson: "B1.6" },	{ front: "has solved/released", back: "hat gelöst", lesson: "B1.6" },
{ front: "the secret", back: "das Geheimnis", lesson: "B1.6" },	{ front: "the secrets", back: "die Geheimnisse", lesson: "B1.6" },
{ front: "the risk", back: "das Risiko", lesson: "B1.6" },	{ front: "the risks", back: "die Risiken", lesson: "B1.6" },
{ front: "the change", back: "die Änderung", lesson: "B1.6" },	{ front: "the changes", back: "die Änderungen", lesson: "B1.6" },
{ front: "the sense/meaning", back: "der Sinn", lesson: "B1.6" },	
{ front: "to be worth it", back: "sich lohnen", lesson: "B1.6" },	{ front: "has been worth it", back: "hat gelohnt", lesson: "B1.6" },
{ front: "the season", back: "die Jahreszeit", lesson: "B1.6" },	{ front: "the seasons", back: "die Jahreszeiten", lesson: "B1.6" },
{ front: "to own/possess", back: "besitzen", lesson: "B1.6" },	{ front: "has owned/possessed", back: "hat besessen", lesson: "B1.6" },
{ front: "to be born", back: "geboren werden", lesson: "B1.6" },	{ front: "has been born", back: "ist geboren worden", lesson: "B1.6" },
{ front: "to decide", back: "sich entschließen", lesson: "B1.6" },	{ front: "has decided", back: "hat entschlossen", lesson: "B1.6" },
{ front: "the homesickness", back: "das Heimweh", lesson: "B1.6" },	
{ front: "the competition", back: "der Wettbewerb", lesson: "B1.6" },	{ front: "the competitions", back: "die Wettbewerbe", lesson: "B1.6" },
{ front: "the spice", back: "das Gewürz", lesson: "B1.6" },	{ front: "the spices", back: "die Gewürze", lesson: "B1.6" },
{ front: "meanwhile/by now", back: "mittlerweile", lesson: "B1.6" },	
{ front: "the consideration/respect", back: "die Rücksicht", lesson: "B1.6" },	{ front: "the considerations/respects", back: "die Rücksichten", lesson: "B1.6" },
{ front: "intercultural", back: "interkulturell", lesson: "B1.6" },	
{ front: "to found/establish", back: "gründen", lesson: "B1.6" },	{ front: "has founded/established", back: "hat gegründet", lesson: "B1.6" },
{ front: "to look after/supervise", back: "betreuen", lesson: "B1.6" },	{ front: "has looked after/supervised", back: "hat betreut", lesson: "B1.6" },
{ front: "to get used to", back: "sich gewöhnen", lesson: "B1.6" },	{ front: "has gotten used to", back: "hat gewöhnt", lesson: "B1.6" },
{ front: "to care for/maintain", back: "pflegen", lesson: "B1.6" },	{ front: "has cared for/maintained", back: "hat gepflegt", lesson: "B1.6" },
{ front: "for years", back: "jahrelang", lesson: "B1.6" },	
{ front: "the businessman (male)", back: "der Kaufmann", lesson: "B1.6" },	{ front: "the businessmen", back: "die Kaufleute", lesson: "B1.6" },
{ front: "the businesswoman (female)", back: "die Kauffrau", lesson: "B1.6" },	{ front: "the businesswomen", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "the experiment", back: "das Experiment", lesson: "B1.6" },	{ front: "the experiments", back: "die Experimente", lesson: "B1.6" },
{ front: "financial", back: "finanziell", lesson: "B1.6" },	
{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "exclusively", back: "ausschließlich", lesson: "B1.6" },	
{ front: "the ingredient", back: "die Zutat", lesson: "B1.6" },	{ front: "the ingredients", back: "die Zutaten", lesson: "B1.6" },
{ front: "at most/maximum", back: "höchstens", lesson: "B1.6" },	
{ front: "the studio", back: "das Studio", lesson: "B1.6" },	{ front: "the studios", back: "die Studios", lesson: "B1.6" },
{ front: "in order to", back: "um … zu", lesson: "B1.6" },	
{ front: "as … as possible", back: "möglichst", lesson: "B1.6" },	
{ front: "the speech", back: "die Rede", lesson: "B1.6" },	{ front: "the speeches", back: "die Reden", lesson: "B1.6" },
{ front: "the compromise", back: "der Kompromiss", lesson: "B1.6" },	{ front: "the compromises", back: "die Kompromisse", lesson: "B1.6" },
{ front: "the air conditioning", back: "die Klimaanlage", lesson: "B1.6" },	{ front: "the air conditioning units", back: "die Klimaanlagen", lesson: "B1.6" },
{ front: "the software", back: "die Software", lesson: "B1.6" },	{ front: "the softwares (rare plural)", back: "die Softwares", lesson: "B1.6" },
{ front: "to come back/return", back: "wiederkommen", lesson: "B1.6" },	{ front: "has come back/returned", back: "ist wiedergekommen", lesson: "B1.6" },
{ front: "the effort/trouble", back: "die Mühe", lesson: "B1.6" },	{ front: "the efforts/troubles", back: "die Mühen", lesson: "B1.6" },
{ front: "the toothpaste", back: "die Zahncreme", lesson: "B1.6" },	{ front: "the toothpastes", back: "die Zahncremes", lesson: "B1.6" },
{ front: "the detergent", back: "das Waschmittel", lesson: "B1.6" },	
{ front: "the brush", back: "die Bürste", lesson: "B1.6" },	{ front: "the brushes", back: "die Bürsten", lesson: "B1.6" },
{ front: "to greet", back: "begrüßen", lesson: "B1.6" },	{ front: "has greeted", back: "hat begrüßt", lesson: "B1.6" },
{ front: "to say goodbye", back: "sich verabschieden", lesson: "B1.6" },	{ front: "has said goodbye", back: "hat verabschiedet", lesson: "B1.6" },
{ front: "the role", back: "die Rolle", lesson: "B1.6" },	{ front: "the roles", back: "die Rollen", lesson: "B1.6" },
{ front: "the claim/demand", back: "der Anspruch", lesson: "B1.6" },	{ front: "the claims/demands", back: "die Ansprüche", lesson: "B1.6" },
{ front: "to confirm", back: "bestätigen", lesson: "B1.6" },	{ front: "has confirmed", back: "hat bestätigt", lesson: "B1.6" },
{ front: "the copy", back: "die Kopie", lesson: "B1.6" },	{ front: "the copies", back: "die Kopien", lesson: "B1.6" },
{ front: "to damage", back: "beschädigen", lesson: "B1.6" },	{ front: "has damaged", back: "hat beschädigt", lesson: "B1.6" },
{ front: "annoying/irritating", back: "ärgerlich", lesson: "B1.6" },	
{ front: "the user manual/instruction", back: "die Bedienungsanleitung", lesson: "B1.6" },	{ front: "the user manuals/instructions", back: "die Bedienungsanleitungen", lesson: "B1.6" },
{ front: "to exchange/return", back: "umtauschen", lesson: "B1.6" },	{ front: "has exchanged/returned", back: "hat umgetauscht", lesson: "B1.6" },
{ front: "however/yet", back: "jedoch", lesson: "B1.6" },	
{ front: "already", back: "bereits", lesson: "B1.6" },	
{ front: "to demand/require", back: "fordern", lesson: "B1.6" },	{ front: "has demanded/required", back: "hat gefordert", lesson: "B1.6" },
{ front: "to disappoint", back: "enttäuschen", lesson: "B1.6" },	{ front: "has disappointed", back: "hat enttäuscht", lesson: "B1.6" },
{ front: "to request/urge", back: "auffordern", lesson: "B1.6" },	{ front: "has requested/urged", back: "hat aufgefordert", lesson: "B1.6" },
{ front: "the business/operation", back: "der Betrieb", lesson: "B1.6" },	{ front: "the businesses/operations", back: "die Betriebe", lesson: "B1.6" },
{ front: "the company/firm", back: "die Firma", lesson: "B1.6" },	{ front: "the companies/firms", back: "die Firmen", lesson: "B1.6" },
{ front: "the production", back: "die Produktion", lesson: "B1.6" },	{ front: "the productions", back: "die Produktionen", lesson: "B1.6" },
{ front: "the trade/business", back: "der Handel", lesson: "B1.6" },	
{ front: "the risk", back: "das Risiko", lesson: "B1.6" },	{ front: "the risks", back: "die Risiken", lesson: "B1.6" },
{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "the businessman (male)", back: "der Kaufmann", lesson: "B1.6" },	{ front: "the businessmen", back: "die Kaufleute", lesson: "B1.6" },
{ front: "the businesswoman (female)", back: "die Kauffrau", lesson: "B1.6" },	{ front: "the businesswomen", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "to found/establish", back: "gründen", lesson: "B1.6" },	{ front: "has founded/established", back: "hat gegründet", lesson: "B1.6" },
{ front: "the court/dish", back: "das Gericht", lesson: "B1.7" },	{ front: "the courts/dishes", back: "die Gerichte", lesson: "B1.7" },
{ front: "the trial/process", back: "der Prozess", lesson: "B1.7" },	{ front: "the trials/processes", back: "die Prozesse", lesson: "B1.7" },
{ front: "to burn", back: "brennen", lesson: "B1.7" },	{ front: "has burned", back: "hat gebrannt", lesson: "B1.7" },
{ front: "the noise", back: "der Lärm", lesson: "B1.7" },	
{ front: "the lawyer (male)", back: "der Rechtsanwalt", lesson: "B1.7" },	{ front: "the lawyers (male)", back: "die Rechtsanwälte", lesson: "B1.7" },
{ front: "the lawyer (female)", back: "die Rechtsanwältin", lesson: "B1.7" },	{ front: "the lawyers (female)", back: "die Rechtsanwältinnen", lesson: "B1.7" },
{ front: "the property/plot", back: "das Grundstück", lesson: "B1.7" },	{ front: "the properties/plots", back: "die Grundstücke", lesson: "B1.7" },
{ front: "to suspect", back: "verdächtigen", lesson: "B1.7" },	{ front: "has suspected", back: "hat verdächtigt", lesson: "B1.7" },
{ front: "the peace", back: "der Frieden", lesson: "B1.7" },	
{ front: "the reality", back: "die Wirklichkeit", lesson: "B1.7" },	{ front: "the realities", back: "die Wirklichkeiten", lesson: "B1.7" },
{ front: "the lawn", back: "der Rasen", lesson: "B1.7" },	
{ front: "the federal state", back: "das Bundesland", lesson: "B1.7" },	{ front: "the federal states", back: "die Bundesländer", lesson: "B1.7" },
{ front: "each other (suffix)", back: "-einander", lesson: "B1.7" },	
{ front: "the lawyer (male)", back: "der Anwalt", lesson: "B1.7" },	{ front: "the lawyers (male)", back: "die Anwälte", lesson: "B1.7" },
{ front: "the lawyer (female)", back: "die Anwältin", lesson: "B1.7" },	{ front: "the lawyers (female)", back: "die Anwältinnen", lesson: "B1.7" },
{ front: "either ... or", back: "entweder ... oder", lesson: "B1.7" },	
{ front: "central", back: "zentral", lesson: "B1.7" },	
{ front: "the duty/obligation", back: "die Pflicht", lesson: "B1.7" },	{ front: "the duties/obligations", back: "die Pflichten", lesson: "B1.7" },
{ front: "the property/ownership", back: "das Eigentum", lesson: "B1.7" },	{ front: "the owners", back: "die Eigentümer", lesson: "B1.7" },
{ front: "to scream/shout", back: "schreien", lesson: "B1.7" },	{ front: "has screamed/shouted", back: "hat geschrien", lesson: "B1.7" },
{ front: "with each other", back: "miteinander", lesson: "B1.7" },	
{ front: "the eraser", back: "der Radiergummi", lesson: "B1.7" },	{ front: "the erasers", back: "die Radiergummis", lesson: "B1.7" },
{ front: "the pencil", back: "der Bleistift", lesson: "B1.7" },	{ front: "the pencils", back: "die Bleistifte", lesson: "B1.7" },
{ front: "the colored pencil", back: "der Farbstift", lesson: "B1.7" },	{ front: "the colored pencils", back: "die Farbstifte", lesson: "B1.7" },
{ front: "to discover", back: "entdecken", lesson: "B1.7" },	{ front: "has discovered", back: "hat entdeckt", lesson: "B1.7" },
{ front: "angry", back: "wütend", lesson: "B1.7" },	
{ front: "the puzzle", back: "das Puzzle", lesson: "B1.7" },	{ front: "the puzzles", back: "die Puzzles", lesson: "B1.7" },
{ front: "the ban/prohibition", back: "das Verbot", lesson: "B1.7" },	{ front: "the bans/prohibitions", back: "die Verbote", lesson: "B1.7" },
{ front: "just/only", back: "bloß", lesson: "B1.7" },	
{ front: "here (to this place)", back: "hierher", lesson: "B1.7" },	
{ front: "attentive/alert", back: "aufmerksam", lesson: "B1.7" },	
{ front: "to agree/detach", back: "abmachen", lesson: "B1.7" },	{ front: "has agreed/detached", back: "hat abgemacht", lesson: "B1.7" },
{ front: "indeed/actually", back: "tatsächlich", lesson: "B1.7" },	
{ front: "the cheek/impudence", back: "die Frechheit", lesson: "B1.7" },	{ front: "the cheekiness/impudences", back: "die Frechheiten", lesson: "B1.7" },
{ front: "for my sake/as far as I am concerned", back: "meinetwegen", lesson: "B1.7" },	
{ front: "to concern/start", back: "angehen", lesson: "B1.7" },	{ front: "has concerned/started", back: "ist angegangen", lesson: "B1.7" },
{ front: "the elevator", back: "der Lift", lesson: "B1.7" },	{ front: "the elevators", back: "die Lifte", lesson: "B1.7" },
{ front: "the terrace", back: "die Terrasse", lesson: "B1.7" },	{ front: "the terraces", back: "die Terrassen", lesson: "B1.7" },
{ front: "any-/some- (prefix)", back: "irgend-", lesson: "B1.7" },	
{ front: "the city center", back: "die Innenstadt", lesson: "B1.7" },	{ front: "the city centers", back: "die Innenstädte", lesson: "B1.7" },
{ front: "the cross street", back: "die Querstraße", lesson: "B1.7" },	{ front: "the cross streets", back: "die Querstraßen", lesson: "B1.7" },
{ front: "essential/significant", back: "wesentlich", lesson: "B1.7" },	
{ front: "the alternative", back: "die Alternative", lesson: "B1.7" },	{ front: "the alternatives", back: "die Alternativen", lesson: "B1.7" },
{ front: "the edge/border", back: "der Rand", lesson: "B1.7" },	{ front: "the edges/borders", back: "die Ränder", lesson: "B1.7" },
{ front: "the link", back: "der Link", lesson: "B1.7" },	{ front: "the links", back: "die Links", lesson: "B1.7" },
{ front: "where- (prefix)", back: "wo(r)-", lesson: "B1.7" },	
{ front: "to be missing/lack", back: "fehlen", lesson: "B1.7" },	{ front: "has been missing/lacked", back: "hat gefehlt", lesson: "B1.7" },
{ front: "the state", back: "der Staat", lesson: "B1.7" },	{ front: "the states", back: "die Staaten", lesson: "B1.7" },
{ front: "east- (prefix)", back: "Ost-", lesson: "B1.7" },	
{ front: "west- (prefix)", back: "West-", lesson: "B1.7" },	
{ front: "the wall", back: "die Mauer", lesson: "B1.7" },	{ front: "the walls", back: "die Mauern", lesson: "B1.7" },
{ front: "the government", back: "die Regierung", lesson: "B1.7" },	{ front: "the governments", back: "die Regierungen", lesson: "B1.7" },
{ front: "to reign/rule", back: "herrschen", lesson: "B1.7" },	{ front: "has reigned/ruled", back: "hat geherrscht", lesson: "B1.7" },
{ front: "the step/level", back: "die Stufe", lesson: "B1.7" },	{ front: "the steps/levels", back: "die Stufen", lesson: "B1.7" },
{ front: "in the middle", back: "mitten", lesson: "B1.7" },	
{ front: "angular/edgy", back: "eckig", lesson: "B1.7" },	
{ front: "northern", back: "nördlich", lesson: "B1.7" },	
{ front: "the earth/soil", back: "die Erde", lesson: "B1.7" },	{ front: "the earths/soils", back: "die Erden", lesson: "B1.7" },
{ front: "the chance/opportunity", back: "die Chance", lesson: "B1.7" },	{ front: "the chances/opportunities", back: "die Chancen", lesson: "B1.7" },
{ front: "to enlarge", back: "vergrößern", lesson: "B1.7" },	{ front: "has enlarged", back: "hat vergrößert", lesson: "B1.7" },
{ front: "long ago/already", back: "längst", lesson: "B1.7" },	
{ front: "despite/in spite of", back: "trotz", lesson: "B1.7" },	
{ front: "the building/construction", back: "der Bau", lesson: "B1.7" },	{ front: "the buildings/constructions", back: "die Bauten", lesson: "B1.7" },
{ front: "the permission/approval", back: "die Genehmigung", lesson: "B1.7" },	{ front: "the permissions/approvals", back: "die Genehmigungen", lesson: "B1.7" },
{ front: "the tourism", back: "der Tourismus", lesson: "B1.7" },	
{ front: "same- (prefix)", back: "gleich-", lesson: "B1.7" },	
{ front: "the building", back: "das Gebäude", lesson: "B1.7" },	
{ front: "the roof", back: "das Dach", lesson: "B1.7" },	{ front: "the roofs", back: "die Dächer", lesson: "B1.7" },
{ front: "the house", back: "das Haus", lesson: "B1.7" },	{ front: "the houses", back: "die Häuser", lesson: "B1.7" },
{ front: "the wall", back: "die Mauer", lesson: "B1.7" },	{ front: "the walls", back: "die Mauern", lesson: "B1.7" },
{ front: "the property/plot", back: "das Grundstück", lesson: "B1.7" },	{ front: "the properties/plots", back: "die Grundstücke", lesson: "B1.7" },
{ front: "the staircase", back: "die Treppe", lesson: "B1.7" },	{ front: "the staircases", back: "die Treppen", lesson: "B1.7" },
{ front: "the step/level", back: "die Stufe", lesson: "B1.7" },	{ front: "the steps/levels", back: "die Stufen", lesson: "B1.7" },
{ front: "the door", back: "die Tür", lesson: "B1.7" },	{ front: "the doors", back: "die Türen", lesson: "B1.7" },
{ front: "the window", back: "das Fenster", lesson: "B1.7" },	
{ front: "the cellar/basement", back: "der Keller", lesson: "B1.7" },	
{ front: "the elevator", back: "der Lift", lesson: "B1.7" },	{ front: "the elevators", back: "die Lifte", lesson: "B1.7" },
{ front: "the terrace", back: "die Terrasse", lesson: "B1.7" },	{ front: "the terraces", back: "die Terrassen", lesson: "B1.7" },
{ front: "the garden", back: "der Garten", lesson: "B1.7" },	{ front: "the gardens", back: "die Gärten", lesson: "B1.7" },
{ front: "the balcony", back: "der Balkon", lesson: "B1.7" },	{ front: "the balconies", back: "die Balkone", lesson: "B1.7" },
{ front: "the lawn", back: "der Rasen", lesson: "B1.7" },
           
{ front: "präteritum ich heißen", back: "ich hieß", lesson: " B1.1" },	{ front: "präteritum du heißen", back: "du hießt", lesson: " B1.1" },	{ front: "präteritum  sie heißen", back: "sie hieß", lesson: " B1.1" },	{ front: "präteritum wir heißen", back: "wir hießen", lesson: " B1.1" },	{ front: "präteritum ihr heißen", back: "ihr hießt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) heißen", back: "sie hießen", lesson: " B1.1" },
       
{ front: "präteritum ich kommen", back: "ich kam", lesson: " B1.1" },	{ front: "präteritum du kommen", back: "du kamst", lesson: " B1.1" },	{ front: "präteritum  er kommen", back: "er kam", lesson: " B1.1" },	{ front: "präteritum wir kommen", back: "wir kamen", lesson: " B1.1" },	{ front: "präteritum ihr kommen", back: "ihr kamt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kommen", back: "sie kamen", lesson: " B1.1" },
       
{ front: "präteritum ich sprechen", back: "ich sprach", lesson: " B1.1" },	{ front: "präteritum du sprechen", back: "du sprachst", lesson: " B1.1" },	{ front: "präteritum  es sprechen", back: "es sprach", lesson: " B1.1" },	{ front: "präteritum wir sprechen", back: "wir sprachen", lesson: " B1.1" },	{ front: "präteritum ihr sprechen", back: "ihr spracht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sprechen", back: "sie sprachen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sein", back: "ich war", lesson: " B1.1" },	{ front: "präteritum du sein", back: "du warst", lesson: " B1.1" },	{ front: "präteritum  es sein", back: "es war", lesson: " B1.1" },	{ front: "präteritum wir sein", back: "wir waren", lesson: " B1.1" },	{ front: "präteritum ihr sein", back: "ihr wart", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sein", back: "sie waren", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich buchstabieren", back: "ich buchstabierte", lesson: " B1.1" },	{ front: "präteritum du buchstabieren", back: "du buchstabiertest", lesson: " B1.1" },	{ front: "präteritum  es buchstabieren", back: "es buchstabierte", lesson: " B1.1" },	{ front: "präteritum wir buchstabieren", back: "wir buchstabierten", lesson: " B1.1" },	{ front: "präteritum ihr buchstabieren", back: "ihr buchstabiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) buchstabieren", back: "sie buchstabierten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich lernen", back: "ich lernte", lesson: " B1.1" },	{ front: "präteritum du lernen", back: "du lerntest", lesson: " B1.1" },	{ front: "präteritum  sie lernen", back: "sie lernte", lesson: " B1.1" },	{ front: "präteritum wir lernen", back: "wir lernten", lesson: " B1.1" },	{ front: "präteritum ihr lernen", back: "ihr lerntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) lernen", back: "sie lernten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich leben", back: "ich lebte", lesson: " B1.1" },	{ front: "präteritum du leben", back: "du lebtest", lesson: " B1.1" },	{ front: "präteritum  er leben", back: "er lebte", lesson: " B1.1" },	{ front: "präteritum wir leben", back: "wir lebten", lesson: " B1.1" },	{ front: "präteritum ihr leben", back: "ihr lebtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) leben", back: "sie lebten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich wohnen", back: "ich wohnte", lesson: " B1.1" },	{ front: "präteritum du wohnen", back: "du wohntest", lesson: " B1.1" },	{ front: "präteritum  er wohnen", back: "er wohnte", lesson: " B1.1" },	{ front: "präteritum wir wohnen", back: "wir wohnten", lesson: " B1.1" },	{ front: "präteritum ihr wohnen", back: "ihr wohntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wohnen", back: "sie wohnten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich haben", back: "ich hatte", lesson: " B1.1" },	{ front: "präteritum du haben", back: "du hattest", lesson: " B1.1" },	{ front: "präteritum  er haben", back: "er hatte", lesson: " B1.1" },	{ front: "präteritum wir haben", back: "wir hatten", lesson: " B1.1" },	{ front: "präteritum ihr haben", back: "ihr hattet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) haben", back: "sie hatten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich brauchen", back: "ich brauchte", lesson: " B1.1" },	{ front: "präteritum du brauchen", back: "du brauchtest", lesson: " B1.1" },	{ front: "präteritum  es brauchen", back: "es brauchte", lesson: " B1.1" },	{ front: "präteritum wir brauchen", back: "wir brauchten", lesson: " B1.1" },	{ front: "präteritum ihr brauchen", back: "ihr brauchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) brauchen", back: "sie brauchten", lesson: " B1.1" },
{ front: "präteritum ich kaufen", back: "ich kaufte", lesson: " B1.1" },	{ front: "präteritum du kaufen", back: "du kauftest", lesson: " B1.1" },	{ front: "präteritum  er kaufen", back: "er kaufte", lesson: " B1.1" },	{ front: "präteritum wir kaufen", back: "wir kauften", lesson: " B1.1" },	{ front: "präteritum ihr kaufen", back: "ihr kauftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kaufen", back: "sie kauften", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich kosten", back: "ich kostete", lesson: " B1.1" },	{ front: "präteritum du kosten", back: "du kostetest", lesson: " B1.1" },	{ front: "präteritum  sie kosten", back: "sie kostete", lesson: " B1.1" },	{ front: "präteritum wir kosten", back: "wir kosteten", lesson: " B1.1" },	{ front: "präteritum ihr kosten", back: "ihr kostetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kosten", back: "sie kosteten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich möchten", back: "ich möchte", lesson: " B1.1" },	{ front: "präteritum du möchten", back: "du möchtest", lesson: " B1.1" },	{ front: "präteritum  es möchten", back: "es möchte", lesson: " B1.1" },	{ front: "präteritum wir möchten", back: "wir möchten", lesson: " B1.1" },	{ front: "präteritum ihr möchten", back: "ihr möchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) möchten", back: "sie möchten", lesson: " B1.1" },
{ front: "präteritum ich finden", back: "ich fand", lesson: " B1.1" },	{ front: "präteritum du finden", back: "du fandest", lesson: " B1.1" },	{ front: "präteritum  er finden", back: "er fand", lesson: " B1.1" },	{ front: "präteritum wir finden", back: "wir fanden", lesson: " B1.1" },	{ front: "präteritum ihr finden", back: "ihr fandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) finden", back: "sie fanden", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich kennen", back: "ich kannte", lesson: " B1.1" },	{ front: "präteritum du kennen", back: "du kanntest", lesson: " B1.1" },	{ front: "präteritum  er kennen", back: "er kannte", lesson: " B1.1" },	{ front: "präteritum wir kennen", back: "wir kannten", lesson: " B1.1" },	{ front: "präteritum ihr kennen", back: "ihr kanntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kennen", back: "sie kannten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich gefallen", back: "ich gefiel", lesson: " B1.1" },	{ front: "präteritum du gefallen", back: "du gefielst", lesson: " B1.1" },	{ front: "präteritum  es gefallen", back: "es gefiel", lesson: " B1.1" },	{ front: "präteritum wir gefallen", back: "wir gefielen", lesson: " B1.1" },	{ front: "präteritum ihr gefallen", back: "ihr gefielt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gefallen", back: "sie gefielen", lesson: " B1.1" },
       
{ front: "präteritum ich finden", back: "ich fand", lesson: " B1.1" },	{ front: "präteritum du finden", back: "du fandest", lesson: " B1.1" },	{ front: "präteritum  sie finden", back: "sie fand", lesson: " B1.1" },	{ front: "präteritum wir finden", back: "wir fanden", lesson: " B1.1" },	{ front: "präteritum ihr finden", back: "ihr fandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) finden", back: "sie fanden", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich suchen", back: "ich suchte", lesson: " B1.1" },	{ front: "präteritum du suchen", back: "du suchtest", lesson: " B1.1" },	{ front: "präteritum  er suchen", back: "er suchte", lesson: " B1.1" },	{ front: "präteritum wir suchen", back: "wir suchten", lesson: " B1.1" },	{ front: "präteritum ihr suchen", back: "ihr suchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) suchen", back: "sie suchten", lesson: " B1.1" },
       
{ front: "präteritum ich vermieten", back: "ich vermietete", lesson: " B1.1" },	{ front: "präteritum du vermieten", back: "du vermietetest", lesson: " B1.1" },	{ front: "präteritum  es vermieten", back: "es vermietete", lesson: " B1.1" },	{ front: "präteritum wir vermieten", back: "wir vermieteten", lesson: " B1.1" },	{ front: "präteritum ihr vermieten", back: "ihr vermietetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vermieten", back: "sie vermieteten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich bezahlen", back: "ich bezahlte", lesson: " B1.1" },	{ front: "präteritum du bezahlen", back: "du bezahltest", lesson: " B1.1" },	{ front: "präteritum  er bezahlen", back: "er bezahlte", lesson: " B1.1" },	{ front: "präteritum wir bezahlen", back: "wir bezahlten", lesson: " B1.1" },	{ front: "präteritum ihr bezahlen", back: "ihr bezahltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bezahlen", back: "sie bezahlten", lesson: " B1.1" },
{ front: "präteritum ich verkaufen", back: "ich verkaufte", lesson: " B1.1" },	{ front: "präteritum du verkaufen", back: "du verkauftest", lesson: " B1.1" },	{ front: "präteritum  sie verkaufen", back: "sie verkaufte", lesson: " B1.1" },	{ front: "präteritum wir verkaufen", back: "wir verkauften", lesson: " B1.1" },	{ front: "präteritum ihr verkaufen", back: "ihr verkauftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verkaufen", back: "sie verkauften", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sehen", back: "ich sah", lesson: " B1.1" },	{ front: "präteritum du sehen", back: "du sahst", lesson: " B1.1" },	{ front: "präteritum  er sehen", back: "er sah", lesson: " B1.1" },	{ front: "präteritum wir sehen", back: "wir sahen", lesson: " B1.1" },	{ front: "präteritum ihr sehen", back: "ihr saht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sehen", back: "sie sahen", lesson: " B1.1" },
       
       
{ front: "präteritum ich machen", back: "ich machte", lesson: " B1.1" },	{ front: "präteritum du machen", back: "du machtest", lesson: " B1.1" },	{ front: "präteritum  er machen", back: "er machte", lesson: " B1.1" },	{ front: "präteritum wir machen", back: "wir machten", lesson: " B1.1" },	{ front: "präteritum ihr machen", back: "ihr machtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) machen", back: "sie machten", lesson: " B1.1" },
       
{ front: "präteritum ich frühstücken", back: "ich frühstückte", lesson: " B1.1" },	{ front: "präteritum du frühstücken", back: "du frühstücktest", lesson: " B1.1" },	{ front: "präteritum  es frühstücken", back: "es frühstückte", lesson: " B1.1" },	{ front: "präteritum wir frühstücken", back: "wir frühstückten", lesson: " B1.1" },	{ front: "präteritum ihr frühstücken", back: "ihr frühstücktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) frühstücken", back: "sie frühstückten", lesson: " B1.1" },
{ front: "präteritum ich einkaufen", back: "ich kaufte ein", lesson: " B1.1" },	{ front: "präteritum du einkaufen", back: "du kauftest ein", lesson: " B1.1" },	{ front: "präteritum  er einkaufen", back: "er kaufte ein", lesson: " B1.1" },	{ front: "präteritum wir einkaufen", back: "wir kauften ein", lesson: " B1.1" },	{ front: "präteritum ihr einkaufen", back: "ihr kauftet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einkaufen", back: "sie kauften ein", lesson: " B1.1" },
{ front: "präteritum ich hören", back: "ich hörte", lesson: " B1.1" },	{ front: "präteritum du hören", back: "du hörtest", lesson: " B1.1" },	{ front: "präteritum  sie hören", back: "sie hörte", lesson: " B1.1" },	{ front: "präteritum wir hören", back: "wir hörten", lesson: " B1.1" },	{ front: "präteritum ihr hören", back: "ihr hörtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hören", back: "sie hörten", lesson: " B1.1" },
{ front: "präteritum ich kochen", back: "ich kochte", lesson: " B1.1" },	{ front: "präteritum du kochen", back: "du kochtest", lesson: " B1.1" },	{ front: "präteritum  es kochen", back: "es kochte", lesson: " B1.1" },	{ front: "präteritum wir kochen", back: "wir kochten", lesson: " B1.1" },	{ front: "präteritum ihr kochen", back: "ihr kochtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kochen", back: "sie kochten", lesson: " B1.1" },
{ front: "präteritum ich spazieren gehen", back: "ich ging spazieren", lesson: " B1.1" },	{ front: "präteritum du spazieren gehen", back: "du gingst spazieren", lesson: " B1.1" },	{ front: "präteritum  er spazieren gehen", back: "er ging spazieren", lesson: " B1.1" },	{ front: "präteritum wir spazieren gehen", back: "wir gingen spazieren", lesson: " B1.1" },	{ front: "präteritum ihr spazieren gehen", back: "ihr gingt spazieren", lesson: " B1.1" },	{ front: "präteritum sie(pl.) spazieren gehen", back: "sie gingen spazieren", lesson: " B1.1" },
{ front: "präteritum ich aufräumen", back: "ich räumte auf", lesson: " B1.1" },	{ front: "präteritum du aufräumen", back: "du räumtest auf", lesson: " B1.1" },	{ front: "präteritum  sie aufräumen", back: "sie räumte auf", lesson: " B1.1" },	{ front: "präteritum wir aufräumen", back: "wir räumten auf", lesson: " B1.1" },	{ front: "präteritum ihr aufräumen", back: "ihr räumtet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufräumen", back: "sie räumten auf", lesson: " B1.1" },
{ front: "präteritum ich aufstehen", back: "ich stand auf", lesson: " B1.1" },	{ front: "präteritum du aufstehen", back: "du standest auf", lesson: " B1.1" },	{ front: "präteritum  es aufstehen", back: "es stand auf", lesson: " B1.1" },	{ front: "präteritum wir aufstehen", back: "wir standen auf", lesson: " B1.1" },	{ front: "präteritum ihr aufstehen", back: "ihr standet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufstehen", back: "sie standen auf", lesson: " B1.1" },
{ front: "präteritum ich gehen", back: "ich ging", lesson: " B1.1" },	{ front: "präteritum du gehen", back: "du gingst", lesson: " B1.1" },	{ front: "präteritum  er gehen", back: "er ging", lesson: " B1.1" },	{ front: "präteritum wir gehen", back: "wir gingen", lesson: " B1.1" },	{ front: "präteritum ihr gehen", back: "ihr gingt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gehen", back: "sie gingen", lesson: " B1.1" },
       
       
{ front: "präteritum ich anrufen", back: "ich rief an", lesson: " B1.1" },	{ front: "präteritum du anrufen", back: "du riefst an", lesson: " B1.1" },	{ front: "präteritum  er anrufen", back: "er rief an", lesson: " B1.1" },	{ front: "präteritum wir anrufen", back: "wir riefen an", lesson: " B1.1" },	{ front: "präteritum ihr anrufen", back: "ihr rieft an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anrufen", back: "sie riefen an", lesson: " B1.1" },
       
       
{ front: "präteritum ich fernsehen", back: "ich sah fern", lesson: " B1.1" },	{ front: "präteritum du fernsehen", back: "du sahst fern", lesson: " B1.1" },	{ front: "präteritum  er fernsehen", back: "er sah fern", lesson: " B1.1" },	{ front: "präteritum wir fernsehen", back: "wir sahen fern", lesson: " B1.1" },	{ front: "präteritum ihr fernsehen", back: "ihr saht fern", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fernsehen", back: "sie sahen fern", lesson: " B1.1" },
       
{ front: "präteritum ich arbeiten", back: "ich arbeitete", lesson: " B1.1" },	{ front: "präteritum du arbeiten", back: "du arbeitetest", lesson: " B1.1" },	{ front: "präteritum  es arbeiten", back: "es arbeitete", lesson: " B1.1" },	{ front: "präteritum wir arbeiten", back: "wir arbeiteten", lesson: " B1.1" },	{ front: "präteritum ihr arbeiten", back: "ihr arbeitetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) arbeiten", back: "sie arbeiteten", lesson: " B1.1" },
       
{ front: "präteritum ich spielen", back: "ich spielte", lesson: " B1.1" },	{ front: "präteritum du spielen", back: "du spieltest", lesson: " B1.1" },	{ front: "präteritum  sie spielen", back: "sie spielte", lesson: " B1.1" },	{ front: "präteritum wir spielen", back: "wir spielten", lesson: " B1.1" },	{ front: "präteritum ihr spielen", back: "ihr spieltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) spielen", back: "sie spielten", lesson: " B1.1" },
{ front: "präteritum ich essen", back: "ich aß", lesson: " B1.1" },	{ front: "präteritum du essen", back: "du aßest", lesson: " B1.1" },	{ front: "präteritum  es essen", back: "es aß", lesson: " B1.1" },	{ front: "präteritum wir essen", back: "wir aßen", lesson: " B1.1" },	{ front: "präteritum ihr essen", back: "ihr aßt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) essen", back: "sie aßen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich anfangen", back: "ich fing an", lesson: " B1.1" },	{ front: "präteritum du anfangen", back: "du fingst an", lesson: " B1.1" },	{ front: "präteritum  er anfangen", back: "er fing an", lesson: " B1.1" },	{ front: "präteritum wir anfangen", back: "wir fingen an", lesson: " B1.1" },	{ front: "präteritum ihr anfangen", back: "ihr fangt an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anfangen", back: "sie fingen an", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich enden", back: "ich endete", lesson: " B1.1" },	{ front: "präteritum du enden", back: "du endetest", lesson: " B1.1" },	{ front: "präteritum  er enden", back: "er endete", lesson: " B1.1" },	{ front: "präteritum wir enden", back: "wir endeten", lesson: " B1.1" },	{ front: "präteritum ihr enden", back: "ihr endetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) enden", back: "sie endeten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich schlafen", back: "ich schlief", lesson: " B1.1" },	{ front: "präteritum du schlafen", back: "du schliefst", lesson: " B1.1" },	{ front: "präteritum  er schlafen", back: "er schlief", lesson: " B1.1" },	{ front: "präteritum wir schlafen", back: "wir schliefen", lesson: " B1.1" },	{ front: "präteritum ihr schlafen", back: "ihr schlieft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schlafen", back: "sie schliefen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich trinken", back: "ich trank", lesson: " B1.1" },	{ front: "präteritum du trinken", back: "du trankst", lesson: " B1.1" },	{ front: "präteritum  er trinken", back: "er trank", lesson: " B1.1" },	{ front: "präteritum wir trinken", back: "wir tranken", lesson: " B1.1" },	{ front: "präteritum ihr trinken", back: "ihr trankt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) trinken", back: "sie tranken", lesson: " B1.1" },
       
{ front: "präteritum ich chatten", back: "ich chattete", lesson: " B1.1" },	{ front: "präteritum du chatten", back: "du chattetest", lesson: " B1.1" },	{ front: "präteritum  es chatten", back: "es chattete", lesson: " B1.1" },	{ front: "präteritum wir chatten", back: "wir chatteten", lesson: " B1.1" },	{ front: "präteritum ihr chatten", back: "ihr chattetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) chatten", back: "sie chatteten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich öffnen", back: "ich öffnete", lesson: " B1.1" },	{ front: "präteritum du öffnen", back: "du öffnetest", lesson: " B1.1" },	{ front: "präteritum  er öffnen", back: "er öffnete", lesson: " B1.1" },	{ front: "präteritum wir öffnen", back: "wir öffneten", lesson: " B1.1" },	{ front: "präteritum ihr öffnen", back: "ihr öffnetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) öffnen", back: "sie öffneten", lesson: " B1.1" },
{ front: "präteritum ich schließen", back: "ich schloss", lesson: " B1.1" },	{ front: "präteritum du schließen", back: "du schlossest", lesson: " B1.1" },	{ front: "präteritum  sie schließen", back: "sie schloss", lesson: " B1.1" },	{ front: "präteritum wir schließen", back: "wir schlossen", lesson: " B1.1" },	{ front: "präteritum ihr schließen", back: "ihr schlosst", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schließen", back: "sie schlossen", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich bringen", back: "ich brachte", lesson: " B1.1" },	{ front: "präteritum du bringen", back: "du brachtest", lesson: " B1.1" },	{ front: "präteritum  er bringen", back: "er brachte", lesson: " B1.1" },	{ front: "präteritum wir bringen", back: "wir brachten", lesson: " B1.1" },	{ front: "präteritum ihr bringen", back: "ihr brachtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bringen", back: "sie brachten", lesson: " B1.1" },
{ front: "präteritum ich abholen", back: "ich holte ab", lesson: " B1.1" },	{ front: "präteritum du abholen", back: "du holtest ab", lesson: " B1.1" },	{ front: "präteritum  sie abholen", back: "sie holte ab", lesson: " B1.1" },	{ front: "präteritum wir abholen", back: "wir holten ab", lesson: " B1.1" },	{ front: "präteritum ihr abholen", back: "ihr holtet ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abholen", back: "sie holten ab", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich fragen", back: "ich fragte", lesson: " B1.1" },	{ front: "präteritum du fragen", back: "du fragtest", lesson: " B1.1" },	{ front: "präteritum  es fragen", back: "es fragte", lesson: " B1.1" },	{ front: "präteritum wir fragen", back: "wir fragten", lesson: " B1.1" },	{ front: "präteritum ihr fragen", back: "ihr fragtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fragen", back: "sie fragten", lesson: " B1.1" },
{ front: "präteritum ich antworten", back: "ich antwortete", lesson: " B1.1" },	{ front: "präteritum du antworten", back: "du antwortetest", lesson: " B1.1" },	{ front: "präteritum  er antworten", back: "er antwortete", lesson: " B1.1" },	{ front: "präteritum wir antworten", back: "wir antworteten", lesson: " B1.1" },	{ front: "präteritum ihr antworten", back: "ihr antwortetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) antworten", back: "sie antworteten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich wandern", back: "ich wanderte", lesson: " B1.1" },	{ front: "präteritum du wandern", back: "du wandertest", lesson: " B1.1" },	{ front: "präteritum  sie wandern", back: "sie wanderte", lesson: " B1.1" },	{ front: "präteritum wir wandern", back: "wir wanderten", lesson: " B1.1" },	{ front: "präteritum ihr wandern", back: "ihr wandertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wandern", back: "sie wanderten", lesson: " B1.1" },
       
       
{ front: "präteritum ich telefonieren", back: "ich telefonierte", lesson: " B1.1" },	{ front: "präteritum du telefonieren", back: "du telefoniertest", lesson: " B1.1" },	{ front: "präteritum  sie telefonieren", back: "sie telefonierte", lesson: " B1.1" },	{ front: "präteritum wir telefonieren", back: "wir telefonierten", lesson: " B1.1" },	{ front: "präteritum ihr telefonieren", back: "ihr telefoniertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) telefonieren", back: "sie telefonierten", lesson: " B1.1" },
       
       
{ front: "präteritum ich scheinen", back: "ich schien", lesson: " B1.1" },	{ front: "präteritum du scheinen", back: "du schienst", lesson: " B1.1" },	{ front: "präteritum  sie scheinen", back: "sie schien", lesson: " B1.1" },	{ front: "präteritum wir scheinen", back: "wir schienen", lesson: " B1.1" },	{ front: "präteritum ihr scheinen", back: "ihr schient", lesson: " B1.1" },	{ front: "präteritum sie(pl.) scheinen", back: "sie schienen", lesson: " B1.1" },
{ front: "präteritum ich regnen", back: "es regnete", lesson: " B1.1" },					
       
       
{ front: "präteritum ich los (losgehen)", back: "ich ging los", lesson: " B1.1" },	{ front: "präteritum du los (losgehen)", back: "du gingst los", lesson: " B1.1" },	{ front: "präteritum  es los (losgehen)", back: "es ging los", lesson: " B1.1" },	{ front: "präteritum wir los (losgehen)", back: "wir gingen los", lesson: " B1.1" },	{ front: "präteritum ihr los (losgehen)", back: "ihr gingt los", lesson: " B1.1" },	{ front: "präteritum sie(pl.) los (losgehen)", back: "sie gingen los", lesson: " B1.1" },
{ front: "präteritum ich vergessen", back: "ich vergaß", lesson: " B1.1" },	{ front: "präteritum du vergessen", back: "du vergaßt", lesson: " B1.1" },	{ front: "präteritum  er vergessen", back: "er vergaß", lesson: " B1.1" },	{ front: "präteritum wir vergessen", back: "wir vergaßen", lesson: " B1.1" },	{ front: "präteritum ihr vergessen", back: "ihr vergaßt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vergessen", back: "sie vergaßen", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich schneien", back: "es schneite", lesson: " B1.1" },					
       
       
       
       
       
{ front: "präteritum ich steigen", back: "ich stieg", lesson: " B1.1" },	{ front: "präteritum du steigen", back: "du stiegst", lesson: " B1.1" },	{ front: "präteritum  er steigen", back: "er stieg", lesson: " B1.1" },	{ front: "präteritum wir steigen", back: "wir stiegen", lesson: " B1.1" },	{ front: "präteritum ihr steigen", back: "ihr stiegt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) steigen", back: "sie stiegen", lesson: " B1.1" },
       
       
{ front: "präteritum ich bleiben", back: "ich blieb", lesson: " B1.1" },	{ front: "präteritum du bleiben", back: "du bliebst", lesson: " B1.1" },	{ front: "präteritum  er bleiben", back: "er blieb", lesson: " B1.1" },	{ front: "präteritum wir bleiben", back: "wir blieben", lesson: " B1.1" },	{ front: "präteritum ihr bleiben", back: "ihr bliebt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bleiben", back: "sie blieben", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich nehmen", back: "ich nahm", lesson: " B1.1" },	{ front: "präteritum du nehmen", back: "du nahmst", lesson: " B1.1" },	{ front: "präteritum  er nehmen", back: "er nahm", lesson: " B1.1" },	{ front: "präteritum wir nehmen", back: "wir nahmen", lesson: " B1.1" },	{ front: "präteritum ihr nehmen", back: "ihr nahmt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) nehmen", back: "sie nahmen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich tanzen", back: "ich tanzte", lesson: " B1.1" },	{ front: "präteritum du tanzen", back: "du tanztest", lesson: " B1.1" },	{ front: "präteritum  sie tanzen", back: "sie tanzte", lesson: " B1.1" },	{ front: "präteritum wir tanzen", back: "wir tanzten", lesson: " B1.1" },	{ front: "präteritum ihr tanzen", back: "ihr tanztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tanzen", back: "sie tanzten", lesson: " B1.1" },
{ front: "präteritum ich schwimmen", back: "ich schwamm", lesson: " B1.1" },	{ front: "präteritum du schwimmen", back: "du schwammst", lesson: " B1.1" },	{ front: "präteritum  es schwimmen", back: "es schwamm", lesson: " B1.1" },	{ front: "präteritum wir schwimmen", back: "wir schwammen", lesson: " B1.1" },	{ front: "präteritum ihr schwimmen", back: "ihr schwammt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schwimmen", back: "sie schwammen", lesson: " B1.1" },
{ front: "präteritum ich treffen", back: "ich traf", lesson: " B1.1" },	{ front: "präteritum du treffen", back: "du trafst", lesson: " B1.1" },	{ front: "präteritum  er treffen", back: "er traf", lesson: " B1.1" },	{ front: "präteritum wir treffen", back: "wir trafen", lesson: " B1.1" },	{ front: "präteritum ihr treffen", back: "ihr traft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) treffen", back: "sie trafen", lesson: " B1.1" },
       
{ front: "präteritum ich fahren", back: "ich fuhr", lesson: " B1.1" },	{ front: "präteritum du fahren", back: "du fuhrst", lesson: " B1.1" },	{ front: "präteritum  es fahren", back: "es fuhr", lesson: " B1.1" },	{ front: "präteritum wir fahren", back: "wir fuhren", lesson: " B1.1" },	{ front: "präteritum ihr fahren", back: "ihr fuhrt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fahren", back: "sie fuhren", lesson: " B1.1" },
{ front: "präteritum ich grillen", back: "ich grillte", lesson: " B1.1" },	{ front: "präteritum du grillen", back: "du grilltest", lesson: " B1.1" },	{ front: "präteritum  er grillen", back: "er grillte", lesson: " B1.1" },	{ front: "präteritum wir grillen", back: "wir grillten", lesson: " B1.1" },	{ front: "präteritum ihr grillen", back: "ihr grilltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) grillen", back: "sie grillten", lesson: " B1.1" },
       
       
{ front: "präteritum ich lesen", back: "ich las", lesson: " B1.1" },	{ front: "präteritum du lesen", back: "du last", lesson: " B1.1" },	{ front: "präteritum  er lesen", back: "er las", lesson: " B1.1" },	{ front: "präteritum wir lesen", back: "wir lasen", lesson: " B1.1" },	{ front: "präteritum ihr lesen", back: "ihr last", lesson: " B1.1" },	{ front: "präteritum sie(pl.) lesen", back: "sie lasen", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich sammeln", back: "ich sammelte", lesson: " B1.1" },	{ front: "präteritum du sammeln", back: "du sammeltest", lesson: " B1.1" },	{ front: "präteritum  er sammeln", back: "er sammelte", lesson: " B1.1" },	{ front: "präteritum wir sammeln", back: "wir sammelten", lesson: " B1.1" },	{ front: "präteritum ihr sammeln", back: "ihr sammeltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sammeln", back: "sie sammelten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich fotografieren", back: "ich fotografierte", lesson: " B1.1" },	{ front: "präteritum du fotografieren", back: "du fotografiertest", lesson: " B1.1" },	{ front: "präteritum  sie fotografieren", back: "sie fotografierte", lesson: " B1.1" },	{ front: "präteritum wir fotografieren", back: "wir fotografierten", lesson: " B1.1" },	{ front: "präteritum ihr fotografieren", back: "ihr fotografiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fotografieren", back: "sie fotografierten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich meinen", back: "ich meinte", lesson: " B1.1" },	{ front: "präteritum du meinen", back: "du meintest", lesson: " B1.1" },	{ front: "präteritum  er meinen", back: "er meinte", lesson: " B1.1" },	{ front: "präteritum wir meinen", back: "wir meinten", lesson: " B1.1" },	{ front: "präteritum ihr meinen", back: "ihr meintet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) meinen", back: "sie meinten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich wecken", back: "ich weckte", lesson: " B1.1" },	{ front: "präteritum du wecken", back: "du wecktest", lesson: " B1.1" },	{ front: "präteritum  es wecken", back: "es weckte", lesson: " B1.1" },	{ front: "präteritum wir wecken", back: "wir weckten", lesson: " B1.1" },	{ front: "präteritum ihr wecken", back: "ihr wecktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wecken", back: "sie weckten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich schreiben", back: "ich schrieb", lesson: " B1.1" },	{ front: "präteritum du schreiben", back: "du schriebst", lesson: " B1.1" },	{ front: "präteritum  er schreiben", back: "er schrieb", lesson: " B1.1" },	{ front: "präteritum wir schreiben", back: "wir schrieben", lesson: " B1.1" },	{ front: "präteritum ihr schreiben", back: "ihr schriebt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schreiben", back: "sie schrieben", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich schmecken", back: "es schmeckte", lesson: " B1.1" },					
       
       
{ front: "präteritum ich können", back: "ich konnte", lesson: " B1.1" },	{ front: "präteritum du können", back: "du konntest", lesson: " B1.1" },	{ front: "präteritum  es können", back: "es konnte", lesson: " B1.1" },	{ front: "präteritum wir können", back: "wir konnten", lesson: " B1.1" },	{ front: "präteritum ihr können", back: "ihr konntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) können", back: "sie konnten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich backen", back: "ich backte", lesson: " B1.1" },	{ front: "präteritum du backen", back: "du backtest", lesson: " B1.1" },	{ front: "präteritum  er backen", back: "er backte", lesson: " B1.1" },	{ front: "präteritum wir backen", back: "wir backten", lesson: " B1.1" },	{ front: "präteritum ihr backen", back: "ihr backtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) backen", back: "sie backten", lesson: " B1.1" },
{ front: "präteritum ich singen", back: "ich sang", lesson: " B1.1" },	{ front: "präteritum du singen", back: "du sangst", lesson: " B1.1" },	{ front: "präteritum  sie singen", back: "sie sang", lesson: " B1.1" },	{ front: "präteritum wir singen", back: "wir sangen", lesson: " B1.1" },	{ front: "präteritum ihr singen", back: "ihr sangt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) singen", back: "sie sangen", lesson: " B1.1" },
{ front: "präteritum ich reiten", back: "ich ritt", lesson: " B1.1" },	{ front: "präteritum du reiten", back: "du rittst", lesson: " B1.1" },	{ front: "präteritum  es reiten", back: "es ritt", lesson: " B1.1" },	{ front: "präteritum wir reiten", back: "wir ritten", lesson: " B1.1" },	{ front: "präteritum ihr reiten", back: "ihr rittet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reiten", back: "sie ritten", lesson: " B1.1" },
       
{ front: "präteritum ich malen", back: "ich malte", lesson: " B1.1" },	{ front: "präteritum du malen", back: "du maltest", lesson: " B1.1" },	{ front: "präteritum  sie malen", back: "sie malte", lesson: " B1.1" },	{ front: "präteritum wir malen", back: "wir malten", lesson: " B1.1" },	{ front: "präteritum ihr malen", back: "ihr maltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) malen", back: "sie malten", lesson: " B1.1" },
       
       
{ front: "präteritum ich wollen", back: "ich wollte", lesson: " B1.1" },	{ front: "präteritum du wollen", back: "du wolltest", lesson: " B1.1" },	{ front: "präteritum  sie wollen", back: "sie wollte", lesson: " B1.1" },	{ front: "präteritum wir wollen", back: "wir wollten", lesson: " B1.1" },	{ front: "präteritum ihr wollen", back: "ihr wolltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wollen", back: "sie wollten", lesson: " B1.1" },
       
       
{ front: "präteritum ich üben", back: "ich übte", lesson: " B1.1" },	{ front: "präteritum du üben", back: "du übtest", lesson: " B1.1" },	{ front: "präteritum  sie üben", back: "sie übte", lesson: " B1.1" },	{ front: "präteritum wir üben", back: "wir übten", lesson: " B1.1" },	{ front: "präteritum ihr üben", back: "ihr übtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) üben", back: "sie übten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich Gitarre spielen", back: "ich spielte Gitarre", lesson: " B1.1" },	{ front: "präteritum du Gitarre spielen", back: "du spieltest Gitarre", lesson: " B1.1" },	{ front: "präteritum  sie Gitarre spielen", back: "sie spielte Gitarre", lesson: " B1.1" },	{ front: "präteritum wir Gitarre spielen", back: "wir spielten Gitarre", lesson: " B1.1" },	{ front: "präteritum ihr Gitarre spielen", back: "ihr spieltet Gitarre", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Gitarre spielen", back: "sie spielten Gitarre", lesson: " B1.1" },
{ front: "präteritum ich Fahrrad fahren", back: "ich fuhr Fahrrad", lesson: " B1.1" },	{ front: "präteritum du Fahrrad fahren", back: "du fuhrst Fahrrad", lesson: " B1.1" },	{ front: "präteritum  es Fahrrad fahren", back: "es fuhr Fahrrad", lesson: " B1.1" },	{ front: "präteritum wir Fahrrad fahren", back: "wir fuhren Fahrrad", lesson: " B1.1" },	{ front: "präteritum ihr Fahrrad fahren", back: "ihr fuhrt Fahrrad", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Fahrrad fahren", back: "sie fuhren Fahrrad", lesson: " B1.1" },
{ front: "präteritum ich Freunde treffen", back: "ich traf Freunde", lesson: " B1.1" },	{ front: "präteritum du Freunde treffen", back: "du trafst Freunde", lesson: " B1.1" },	{ front: "präteritum  er Freunde treffen", back: "er traf Freunde", lesson: " B1.1" },	{ front: "präteritum wir Freunde treffen", back: "wir trafen Freunde", lesson: " B1.1" },	{ front: "präteritum ihr Freunde treffen", back: "ihr traft Freunde", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Freunde treffen", back: "sie trafen Freunde", lesson: " B1.1" },
{ front: "präteritum ich Ski fahren", back: "ich fuhr Ski", lesson: " B1.1" },	{ front: "präteritum du Ski fahren", back: "du fuhrst Ski", lesson: " B1.1" },	{ front: "präteritum  sie Ski fahren", back: "sie fuhr Ski", lesson: " B1.1" },	{ front: "präteritum wir Ski fahren", back: "wir fuhren Ski", lesson: " B1.1" },	{ front: "präteritum ihr Ski fahren", back: "ihr fuhrt Ski", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Ski fahren", back: "sie fuhren Ski", lesson: " B1.1" },
{ front: "präteritum ich Tennis spielen", back: "ich spielte Tennis", lesson: " B1.1" },	{ front: "präteritum du Tennis spielen", back: "du spieltest Tennis", lesson: " B1.1" },	{ front: "präteritum  es Tennis spielen", back: "es spielte Tennis", lesson: " B1.1" },	{ front: "präteritum wir Tennis spielen", back: "wir spielten Tennis", lesson: " B1.1" },	{ front: "präteritum ihr Tennis spielen", back: "ihr spieltet Tennis", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Tennis spielen", back: "sie spielten Tennis", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich studieren", back: "ich studierte", lesson: " B1.1" },	{ front: "präteritum du studieren", back: "du studiertest", lesson: " B1.1" },	{ front: "präteritum  sie studieren", back: "sie studierte", lesson: " B1.1" },	{ front: "präteritum wir studieren", back: "wir studierten", lesson: " B1.1" },	{ front: "präteritum ihr studieren", back: "ihr studiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) studieren", back: "sie studierten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich dauern", back: "es dauerte", lesson: " B1.1" },	{ front: "präteritum du dauern", back: "es dauerte", lesson: " B1.1" },	{ front: "präteritum  sie dauern", back: "sie dauerte", lesson: " B1.1" },	{ front: "präteritum wir dauern", back: "es dauerte", lesson: " B1.1" },		
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich heiraten", back: "ich heiratete", lesson: " B1.1" },	{ front: "präteritum du heiraten", back: "du heiratetest", lesson: " B1.1" },	{ front: "präteritum  er heiraten", back: "er heiratete", lesson: " B1.1" },	{ front: "präteritum wir heiraten", back: "wir heirateten", lesson: " B1.1" },	{ front: "präteritum ihr heiraten", back: "ihr heiratetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) heiraten", back: "sie heirateten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich zeigen", back: "ich zeigte", lesson: " B1.1" },	{ front: "präteritum du zeigen", back: "du zeigtest", lesson: " B1.1" },	{ front: "präteritum  sie zeigen", back: "sie zeigte", lesson: " B1.1" },	{ front: "präteritum wir zeigen", back: "wir zeigten", lesson: " B1.1" },	{ front: "präteritum ihr zeigen", back: "ihr zeigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) zeigen", back: "sie zeigten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich bekommen", back: "ich bekam", lesson: " B1.1" },	{ front: "präteritum du bekommen", back: "du bekamst", lesson: " B1.1" },	{ front: "präteritum  sie bekommen", back: "sie bekam", lesson: " B1.1" },	{ front: "präteritum wir bekommen", back: "wir bekamen", lesson: " B1.1" },	{ front: "präteritum ihr bekommen", back: "ihr bekamt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bekommen", back: "sie bekamen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich zahlen", back: "ich zahlte", lesson: " B1.1" },	{ front: "präteritum du zahlen", back: "du zahltest", lesson: " B1.1" },	{ front: "präteritum  sie zahlen", back: "sie zahlte", lesson: " B1.1" },	{ front: "präteritum wir zahlen", back: "wir zahlten", lesson: " B1.1" },	{ front: "präteritum ihr zahlen", back: "ihr zahltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) zahlen", back: "sie zahlten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich mieten", back: "ich mietete", lesson: " B1.1" },	{ front: "präteritum du mieten", back: "du mietetest", lesson: " B1.1" },	{ front: "präteritum  er mieten", back: "er mietete", lesson: " B1.1" },	{ front: "präteritum wir mieten", back: "wir mieteten", lesson: " B1.1" },	{ front: "präteritum ihr mieten", back: "ihr mietetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mieten", back: "sie mieteten", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich müssen", back: "ich musste", lesson: " B1.1" },	{ front: "präteritum du müssen", back: "du musstest", lesson: " B1.1" },	{ front: "präteritum  es müssen", back: "es musste", lesson: " B1.1" },	{ front: "präteritum wir müssen", back: "wir mussten", lesson: " B1.1" },	{ front: "präteritum ihr müssen", back: "ihr musstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) müssen", back: "sie mussten", lesson: " B1.1" },
{ front: "präteritum ich ausfüllen", back: "ich füllte aus", lesson: " B1.1" },	{ front: "präteritum du ausfüllen", back: "du fülltest aus", lesson: " B1.1" },	{ front: "präteritum  er ausfüllen", back: "er füllte aus", lesson: " B1.1" },	{ front: "präteritum wir ausfüllen", back: "wir füllten aus", lesson: " B1.1" },	{ front: "präteritum ihr ausfüllen", back: "ihr fülltet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausfüllen", back: "sie füllten aus", lesson: " B1.1" },
       
{ front: "präteritum ich mitbringen", back: "ich brachte mit", lesson: " B1.1" },	{ front: "präteritum du mitbringen", back: "du brachtest mit", lesson: " B1.1" },	{ front: "präteritum  es mitbringen", back: "es brachte mit", lesson: " B1.1" },	{ front: "präteritum wir mitbringen", back: "wir brachten mit", lesson: " B1.1" },	{ front: "präteritum ihr mitbringen", back: "ihr brachtet mit", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mitbringen", back: "sie brachten mit", lesson: " B1.1" },
       
{ front: "präteritum ich unterschreiben", back: "ich unterschrieb", lesson: " B1.1" },	{ front: "präteritum du unterschreiben", back: "du unterschriebst", lesson: " B1.1" },	{ front: "präteritum  sie unterschreiben", back: "sie unterschrieb", lesson: " B1.1" },	{ front: "präteritum wir unterschreiben", back: "wir unterschrieben", lesson: " B1.1" },	{ front: "präteritum ihr unterschreiben", back: "ihr unterschriebt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) unterschreiben", back: "sie unterschrieben", lesson: " B1.1" },
       
       
{ front: "präteritum ich funktionieren", back: "es funktionierte", lesson: " B1.1" },	{ front: "präteritum du funktionieren", back: "es funktionierte", lesson: " B1.1" },	{ front: "präteritum  sie funktionieren", back: "sie funktionierte", lesson: " B1.1" },	{ front: "präteritum wir funktionieren", back: "es funktionierten", lesson: " B1.1" },		
       
{ front: "präteritum ich wählen", back: "ich wählte", lesson: " B1.1" },	{ front: "präteritum du wählen", back: "du wähltest", lesson: " B1.1" },	{ front: "präteritum  er wählen", back: "er wählte", lesson: " B1.1" },	{ front: "präteritum wir wählen", back: "wir wählten", lesson: " B1.1" },	{ front: "präteritum ihr wählen", back: "ihr wähltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wählen", back: "sie wählten", lesson: " B1.1" },
       
{ front: "präteritum ich auswählen", back: "ich wählte aus", lesson: " B1.1" },	{ front: "präteritum du auswählen", back: "du wähltest aus", lesson: " B1.1" },	{ front: "präteritum  es auswählen", back: "es wählte aus", lesson: " B1.1" },	{ front: "präteritum wir auswählen", back: "wir wählten aus", lesson: " B1.1" },	{ front: "präteritum ihr auswählen", back: "ihr wähltet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) auswählen", back: "sie wählten aus", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich erklären", back: "ich erklärte", lesson: " B1.1" },	{ front: "präteritum du erklären", back: "du erklärtest", lesson: " B1.1" },	{ front: "präteritum  er erklären", back: "er erklärte", lesson: " B1.1" },	{ front: "präteritum wir erklären", back: "wir erklärten", lesson: " B1.1" },	{ front: "präteritum ihr erklären", back: "ihr erklärtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erklären", back: "sie erklärten", lesson: " B1.1" },
       
{ front: "präteritum ich ausmachen", back: "ich machte aus", lesson: " B1.1" },	{ front: "präteritum du ausmachen", back: "du machtest aus", lesson: " B1.1" },	{ front: "präteritum  es ausmachen", back: "es machte aus", lesson: " B1.1" },	{ front: "präteritum wir ausmachen", back: "wir machten aus", lesson: " B1.1" },	{ front: "präteritum ihr ausmachen", back: "ihr machtet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausmachen", back: "sie machten aus", lesson: " B1.1" },
{ front: "präteritum ich zuhören", back: "ich hörte zu", lesson: " B1.1" },	{ front: "präteritum du zuhören", back: "du hörtest zu", lesson: " B1.1" },	{ front: "präteritum  er zuhören", back: "er hörte zu", lesson: " B1.1" },	{ front: "präteritum wir zuhören", back: "wir hörten zu", lesson: " B1.1" },	{ front: "präteritum ihr zuhören", back: "ihr hörtet zu", lesson: " B1.1" },	{ front: "präteritum sie(pl.) zuhören", back: "sie hörten zu", lesson: " B1.1" },
{ front: "präteritum ich aufstehen", back: "ich stand auf", lesson: " B1.1" },	{ front: "präteritum du aufstehen", back: "du standest auf", lesson: " B1.1" },	{ front: "präteritum  sie aufstehen", back: "sie stand auf", lesson: " B1.1" },	{ front: "präteritum wir aufstehen", back: "wir standen auf", lesson: " B1.1" },	{ front: "präteritum ihr aufstehen", back: "ihr standet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufstehen", back: "sie standen auf", lesson: " B1.1" },
{ front: "präteritum ich warten", back: "ich wartete", lesson: " B1.1" },	{ front: "präteritum du warten", back: "du wartetest", lesson: " B1.1" },	{ front: "präteritum  es warten", back: "es wartete", lesson: " B1.1" },	{ front: "präteritum wir warten", back: "wir warteten", lesson: " B1.1" },	{ front: "präteritum ihr warten", back: "ihr wartetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) warten", back: "sie warteten", lesson: " B1.1" },
       
       
{ front: "präteritum ich lachen", back: "ich lachte", lesson: " B1.1" },	{ front: "präteritum du lachen", back: "du lachtest", lesson: " B1.1" },	{ front: "präteritum  es lachen", back: "es lachte", lesson: " B1.1" },	{ front: "präteritum wir lachen", back: "wir lachten", lesson: " B1.1" },	{ front: "präteritum ihr lachen", back: "ihr lachtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) lachen", back: "sie lachten", lesson: " B1.1" },
       
{ front: "präteritum ich beantragen", back: "ich beantragte", lesson: " B1.1" },	{ front: "präteritum du beantragen", back: "du beantragtest", lesson: " B1.1" },	{ front: "präteritum  sie beantragen", back: "sie beantragte", lesson: " B1.1" },	{ front: "präteritum wir beantragen", back: "wir beantragten", lesson: " B1.1" },	{ front: "präteritum ihr beantragen", back: "ihr beantragtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beantragen", back: "sie beantragten", lesson: " B1.1" },
{ front: "präteritum ich dürfen", back: "ich durfte", lesson: " B1.1" },	{ front: "präteritum du dürfen", back: "du durftest", lesson: " B1.1" },	{ front: "präteritum  es dürfen", back: "es durfte", lesson: " B1.1" },	{ front: "präteritum wir dürfen", back: "wir durften", lesson: " B1.1" },	{ front: "präteritum ihr dürfen", back: "ihr durftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) dürfen", back: "sie durften", lesson: " B1.1" },
       
       
{ front: "präteritum ich rauchen", back: "ich rauchte", lesson: " B1.1" },	{ front: "präteritum du rauchen", back: "du rauchtest", lesson: " B1.1" },	{ front: "präteritum  es rauchen", back: "es rauchte", lesson: " B1.1" },	{ front: "präteritum wir rauchen", back: "wir rauchten", lesson: " B1.1" },	{ front: "präteritum ihr rauchen", back: "ihr rauchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) rauchen", back: "sie rauchten", lesson: " B1.1" },
       
       
{ front: "präteritum ich parken", back: "ich parkte", lesson: " B1.1" },	{ front: "präteritum du parken", back: "du parktest", lesson: " B1.1" },	{ front: "präteritum  es parken", back: "es parkte", lesson: " B1.1" },	{ front: "präteritum wir parken", back: "wir parkten", lesson: " B1.1" },	{ front: "präteritum ihr parken", back: "ihr parktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) parken", back: "sie parkten", lesson: " B1.1" },
{ front: "präteritum ich erlaubt", back: "es war erlaubt", lesson: " B1.1" },	{ front: "präteritum du erlaubt", back: "es war erlaubt", lesson: " B1.1" },	{ front: "präteritum  er erlaubt", back: "er war erlaubt", lesson: " B1.1" },	{ front: "präteritum wir erlaubt", back: "es war erlaubt", lesson: " B1.1" },		
{ front: "präteritum ich verboten", back: "es war verboten", lesson: " B1.1" },	{ front: "präteritum du verboten", back: "es war verboten", lesson: " B1.1" },	{ front: "präteritum  sie verboten", back: "sie war verboten", lesson: " B1.1" },	{ front: "präteritum wir verboten", back: "es war verboten", lesson: " B1.1" },		
       
{ front: "präteritum ich abgeben", back: "ich gab ab", lesson: " B1.1" },	{ front: "präteritum du abgeben", back: "du gabst ab", lesson: " B1.1" },	{ front: "präteritum  er abgeben", back: "er gab ab", lesson: " B1.1" },	{ front: "präteritum wir abgeben", back: "wir gaben ab", lesson: " B1.1" },	{ front: "präteritum ihr abgeben", back: "ihr gabt ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abgeben", back: "sie gaben ab", lesson: " B1.1" },
{ front: "präteritum ich mitnehmen", back: "ich nahm mit", lesson: " B1.1" },	{ front: "präteritum du mitnehmen", back: "du nahmst mit", lesson: " B1.1" },	{ front: "präteritum  sie mitnehmen", back: "sie nahm mit", lesson: " B1.1" },	{ front: "präteritum wir mitnehmen", back: "wir nahmen mit", lesson: " B1.1" },	{ front: "präteritum ihr mitnehmen", back: "ihr nahmt mit", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mitnehmen", back: "sie nahmen mit", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich getrennt leben", back: "wir lebten getrennt", lesson: " B1.1" },					
       
       
       
{ front: "präteritum ich bedeuten", back: "es bedeutete", lesson: " B1.1" },	{ front: "präteritum du bedeuten", back: "du bedeutetest", lesson: " B1.1" },	{ front: "präteritum  sie bedeuten", back: "sie bedeutete", lesson: " B1.1" },	{ front: "präteritum wir bedeuten", back: "wir bedeuteten", lesson: " B1.1" },	{ front: "präteritum ihr bedeuten", back: "ihr bedeutetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bedeuten", back: "sie bedeuteten", lesson: " B1.1" },
{ front: "präteritum ich wiederholen", back: "ich wiederholte", lesson: " B1.1" },	{ front: "präteritum du wiederholen", back: "du wiederholtest", lesson: " B1.1" },	{ front: "präteritum  es wiederholen", back: "es wiederholte", lesson: " B1.1" },	{ front: "präteritum wir wiederholen", back: "wir wiederholten", lesson: " B1.1" },	{ front: "präteritum ihr wiederholen", back: "ihr wiederholtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wiederholen", back: "sie wiederholten", lesson: " B1.1" },
{ front: "präteritum ich verstehen", back: "ich verstand", lesson: " B1.1" },	{ front: "präteritum du verstehen", back: "du verstandest", lesson: " B1.1" },	{ front: "präteritum  er verstehen", back: "er verstand", lesson: " B1.1" },	{ front: "präteritum wir verstehen", back: "wir verstanden", lesson: " B1.1" },	{ front: "präteritum ihr verstehen", back: "ihr verstandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verstehen", back: "sie verstanden", lesson: " B1.1" },
       
{ front: "präteritum ich besuchen", back: "ich besuchte", lesson: " B1.1" },	{ front: "präteritum du besuchen", back: "du besuchtest", lesson: " B1.1" },	{ front: "präteritum  es besuchen", back: "es besuchte", lesson: " B1.1" },	{ front: "präteritum wir besuchen", back: "wir besuchten", lesson: " B1.1" },	{ front: "präteritum ihr besuchen", back: "ihr besuchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) besuchen", back: "sie besuchten", lesson: " B1.1" },
{ front: "präteritum ich helfen", back: "ich half", lesson: " B1.1" },	{ front: "präteritum du helfen", back: "du halfst", lesson: " B1.1" },	{ front: "präteritum  er helfen", back: "er half", lesson: " B1.1" },	{ front: "präteritum wir helfen", back: "wir halfen", lesson: " B1.1" },	{ front: "präteritum ihr helfen", back: "ihr halft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) helfen", back: "sie halfen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich holen", back: "ich holte", lesson: " B1.1" },	{ front: "präteritum du holen", back: "du holtest", lesson: " B1.1" },	{ front: "präteritum  er holen", back: "er holte", lesson: " B1.1" },	{ front: "präteritum wir holen", back: "wir holten", lesson: " B1.1" },	{ front: "präteritum ihr holen", back: "ihr holtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) holen", back: "sie holten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich verdienen", back: "ich verdiente", lesson: " B1.1" },	{ front: "präteritum du verdienen", back: "du verdienstest", lesson: " B1.1" },	{ front: "präteritum  es verdienen", back: "es verdiente", lesson: " B1.1" },	{ front: "präteritum wir verdienen", back: "wir verdienten", lesson: " B1.1" },	{ front: "präteritum ihr verdienen", back: "ihr verdientet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verdienen", back: "sie verdienten", lesson: " B1.1" },
       
{ front: "präteritum ich reisen", back: "ich reiste", lesson: " B1.1" },	{ front: "präteritum du reisen", back: "du reistest", lesson: " B1.1" },	{ front: "präteritum  sie reisen", back: "sie reiste", lesson: " B1.1" },	{ front: "präteritum wir reisen", back: "wir reisten", lesson: " B1.1" },	{ front: "präteritum ihr reisen", back: "ihr reistet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reisen", back: "sie reisten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich weh tun", back: "ich tat weh", lesson: " B1.1" },	{ front: "präteritum du weh tun", back: "du tatest weh", lesson: " B1.1" },	{ front: "präteritum  sie weh tun", back: "sie tat weh", lesson: " B1.1" },	{ front: "präteritum wir weh tun", back: "wir taten weh", lesson: " B1.1" },	{ front: "präteritum ihr weh tun", back: "ihr tatet weh", lesson: " B1.1" },	{ front: "präteritum sie(pl.) weh tun", back: "sie taten weh", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich sollen", back: "ich sollte", lesson: " B1.1" },	{ front: "präteritum du sollen", back: "du solltest", lesson: " B1.1" },	{ front: "präteritum  es sollen", back: "es sollte", lesson: " B1.1" },	{ front: "präteritum wir sollen", back: "wir sollten", lesson: " B1.1" },	{ front: "präteritum ihr sollen", back: "ihr solltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sollen", back: "sie sollten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich geben", back: "ich gab", lesson: " B1.1" },	{ front: "präteritum du geben", back: "du gabst", lesson: " B1.1" },	{ front: "präteritum  er geben", back: "er gab", lesson: " B1.1" },	{ front: "präteritum wir geben", back: "wir gaben", lesson: " B1.1" },	{ front: "präteritum ihr geben", back: "ihr gabt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) geben", back: "sie gaben", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich informieren", back: "ich informierte", lesson: " B1.1" },	{ front: "präteritum du informieren", back: "du informiertest", lesson: " B1.1" },	{ front: "präteritum  sie informieren", back: "sie informierte", lesson: " B1.1" },	{ front: "präteritum wir informieren", back: "wir informierten", lesson: " B1.1" },	{ front: "präteritum ihr informieren", back: "ihr informiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) informieren", back: "sie informierten", lesson: " B1.1" },
       
{ front: "präteritum ich ausfallen", back: "es fiel aus", lesson: " B1.1" },	{ front: "präteritum du ausfallen", back: "du fielst aus", lesson: " B1.1" },	{ front: "präteritum  er ausfallen", back: "er fiel aus", lesson: " B1.1" },	{ front: "präteritum wir ausfallen", back: "es fielen aus", lesson: " B1.1" },		
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich verwenden", back: "ich verwendete", lesson: " B1.1" },	{ front: "präteritum du verwenden", back: "du verwendetest", lesson: " B1.1" },	{ front: "präteritum  er verwenden", back: "er verwendete", lesson: " B1.1" },	{ front: "präteritum wir verwenden", back: "wir verwendeten", lesson: " B1.1" },	{ front: "präteritum ihr verwenden", back: "ihr verwendetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verwenden", back: "sie verwendeten", lesson: " B1.1" },
       
       
{ front: "präteritum ich tun", back: "ich tat", lesson: " B1.1" },	{ front: "präteritum du tun", back: "du tatest", lesson: " B1.1" },	{ front: "präteritum  er tun", back: "er tat", lesson: " B1.1" },	{ front: "präteritum wir tun", back: "wir taten", lesson: " B1.1" },	{ front: "präteritum ihr tun", back: "ihr tatet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tun", back: "sie taten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich schicken", back: "ich schickte", lesson: " B1.1" },	{ front: "präteritum du schicken", back: "du schicktest", lesson: " B1.1" },	{ front: "präteritum  sie schicken", back: "sie schickte", lesson: " B1.1" },	{ front: "präteritum wir schicken", back: "wir schickten", lesson: " B1.1" },	{ front: "präteritum ihr schicken", back: "ihr schicktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schicken", back: "sie schickten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich vorbeikommen", back: "ich kam vorbei", lesson: " B1.1" },	{ front: "präteritum du vorbeikommen", back: "du kamst vorbei", lesson: " B1.1" },	{ front: "präteritum  sie vorbeikommen", back: "sie kam vorbei", lesson: " B1.1" },	{ front: "präteritum wir vorbeikommen", back: "wir kamen vorbei", lesson: " B1.1" },	{ front: "präteritum ihr vorbeikommen", back: "ihr kamt vorbei", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vorbeikommen", back: "sie kamen vorbei", lesson: " B1.1" },
       
       
{ front: "präteritum ich liegen", back: "ich lag", lesson: " B1.1" },	{ front: "präteritum du liegen", back: "du lagst", lesson: " B1.1" },	{ front: "präteritum  sie liegen", back: "sie lag", lesson: " B1.1" },	{ front: "präteritum wir liegen", back: "wir lagen", lesson: " B1.1" },	{ front: "präteritum ihr liegen", back: "ihr lagt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) liegen", back: "sie lagen", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich passieren", back: "es passierte", lesson: " B1.1" },	{ front: "präteritum du passieren", back: "du passiertest", lesson: " B1.1" },	{ front: "präteritum  er passieren", back: "er passierte", lesson: " B1.1" },	{ front: "präteritum wir passieren", back: "wir passierten", lesson: " B1.1" },	{ front: "präteritum ihr passieren", back: "ihr passiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) passieren", back: "sie passierten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich fliegen", back: "ich flog", lesson: " B1.1" },	{ front: "präteritum du fliegen", back: "du flogst", lesson: " B1.1" },	{ front: "präteritum  er fliegen", back: "er flog", lesson: " B1.1" },	{ front: "präteritum wir fliegen", back: "wir flogen", lesson: " B1.1" },	{ front: "präteritum ihr fliegen", back: "ihr flogt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fliegen", back: "sie flogen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sitzen", back: "ich saß", lesson: " B1.1" },	{ front: "präteritum du sitzen", back: "du saßt", lesson: " B1.1" },	{ front: "präteritum  sie sitzen", back: "sie saß", lesson: " B1.1" },	{ front: "präteritum wir sitzen", back: "wir saßen", lesson: " B1.1" },	{ front: "präteritum ihr sitzen", back: "ihr saßt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sitzen", back: "sie saßen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich ausleihen", back: "ich lieh aus", lesson: " B1.1" },	{ front: "präteritum du ausleihen", back: "du liehst aus", lesson: " B1.1" },	{ front: "präteritum  es ausleihen", back: "es lieh aus", lesson: " B1.1" },	{ front: "präteritum wir ausleihen", back: "wir liehen aus", lesson: " B1.1" },	{ front: "präteritum ihr ausleihen", back: "ihr lieht aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausleihen", back: "sie liehen aus", lesson: " B1.1" },
{ front: "präteritum ich kopieren", back: "ich kopierte", lesson: " B1.1" },	{ front: "präteritum du kopieren", back: "du kopiertest", lesson: " B1.1" },	{ front: "präteritum  er kopieren", back: "er kopierte", lesson: " B1.1" },	{ front: "präteritum wir kopieren", back: "wir kopierten", lesson: " B1.1" },	{ front: "präteritum ihr kopieren", back: "ihr kopiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kopieren", back: "sie kopierten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich abfahren", back: "ich fuhr ab", lesson: " B1.1" },	{ front: "präteritum du abfahren", back: "du fuhrst ab", lesson: " B1.1" },	{ front: "präteritum  es abfahren", back: "es fuhr ab", lesson: " B1.1" },	{ front: "präteritum wir abfahren", back: "wir fuhren ab", lesson: " B1.1" },	{ front: "präteritum ihr abfahren", back: "ihr fuhrt ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abfahren", back: "sie fuhren ab", lesson: " B1.1" },
       
{ front: "präteritum ich einsteigen", back: "ich stieg ein", lesson: " B1.1" },	{ front: "präteritum du einsteigen", back: "du stiegst ein", lesson: " B1.1" },	{ front: "präteritum  sie einsteigen", back: "sie stieg ein", lesson: " B1.1" },	{ front: "präteritum wir einsteigen", back: "wir stiegen ein", lesson: " B1.1" },	{ front: "präteritum ihr einsteigen", back: "ihr steigtet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einsteigen", back: "sie stiegen ein", lesson: " B1.1" },
       
{ front: "präteritum ich ankommen", back: "ich kam an", lesson: " B1.1" },	{ front: "präteritum du ankommen", back: "du kamst an", lesson: " B1.1" },	{ front: "präteritum  er ankommen", back: "er kam an", lesson: " B1.1" },	{ front: "präteritum wir ankommen", back: "wir kamen an", lesson: " B1.1" },	{ front: "präteritum ihr ankommen", back: "ihr kamt an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ankommen", back: "sie kamen an", lesson: " B1.1" },
{ front: "präteritum ich umsteigen", back: "ich stieg um", lesson: " B1.1" },	{ front: "präteritum du umsteigen", back: "du stiegst um", lesson: " B1.1" },	{ front: "präteritum  sie umsteigen", back: "sie stieg um", lesson: " B1.1" },	{ front: "präteritum wir umsteigen", back: "wir stiegen um", lesson: " B1.1" },	{ front: "präteritum ihr umsteigen", back: "ihr steigtet um", lesson: " B1.1" },	{ front: "präteritum sie(pl.) umsteigen", back: "sie stiegen um", lesson: " B1.1" },
{ front: "präteritum ich aussteigen", back: "ich stieg aus", lesson: " B1.1" },	{ front: "präteritum du aussteigen", back: "du stiegst aus", lesson: " B1.1" },	{ front: "präteritum  es aussteigen", back: "es stieg aus", lesson: " B1.1" },	{ front: "präteritum wir aussteigen", back: "wir stiegen aus", lesson: " B1.1" },	{ front: "präteritum ihr aussteigen", back: "ihr steigtet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aussteigen", back: "sie stiegen aus", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich reparieren", back: "ich reparierte", lesson: " B1.1" },	{ front: "präteritum du reparieren", back: "du repariertest", lesson: " B1.1" },	{ front: "präteritum  sie reparieren", back: "sie reparierte", lesson: " B1.1" },	{ front: "präteritum wir reparieren", back: "wir reparierten", lesson: " B1.1" },	{ front: "präteritum ihr reparieren", back: "ihr repariertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reparieren", back: "sie reparierten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich nähen", back: "ich nähte", lesson: " B1.1" },	{ front: "präteritum du nähen", back: "du nähtest", lesson: " B1.1" },	{ front: "präteritum  es nähen", back: "es nähte", lesson: " B1.1" },	{ front: "präteritum wir nähen", back: "wir nähten", lesson: " B1.1" },	{ front: "präteritum ihr nähen", back: "ihr nähtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) nähen", back: "sie nähten", lesson: " B1.1" },
       
{ front: "präteritum ich duschen", back: "ich duschte", lesson: " B1.1" },	{ front: "präteritum du duschen", back: "du duschtest", lesson: " B1.1" },	{ front: "präteritum  sie duschen", back: "sie duschte", lesson: " B1.1" },	{ front: "präteritum wir duschen", back: "wir duschten", lesson: " B1.1" },	{ front: "präteritum ihr duschen", back: "ihr duschtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) duschen", back: "sie duschten", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich vorbeibringen", back: "ich brachte vorbei", lesson: " B1.1" },	{ front: "präteritum du vorbeibringen", back: "du brachtest vorbei", lesson: " B1.1" },	{ front: "präteritum  er vorbeibringen", back: "er brachte vorbei", lesson: " B1.1" },	{ front: "präteritum wir vorbeibringen", back: "wir brachten vorbei", lesson: " B1.1" },	{ front: "präteritum ihr vorbeibringen", back: "ihr brachtet vorbei", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vorbeibringen", back: "sie brachten vorbei", lesson: " B1.1" },
{ front: "präteritum ich anmachen", back: "ich machte an", lesson: " B1.1" },	{ front: "präteritum du anmachen", back: "du machtest an", lesson: " B1.1" },	{ front: "präteritum  sie anmachen", back: "sie machte an", lesson: " B1.1" },	{ front: "präteritum wir anmachen", back: "wir machten an", lesson: " B1.1" },	{ front: "präteritum ihr anmachen", back: "ihr machtet an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anmachen", back: "sie machten an", lesson: " B1.1" },
       
{ front: "präteritum ich zumachen", back: "ich machte zu", lesson: " B1.1" },	{ front: "präteritum du zumachen", back: "du machtest zu", lesson: " B1.1" },	{ front: "präteritum  er zumachen", back: "er machte zu", lesson: " B1.1" },	{ front: "präteritum wir zumachen", back: "wir machten zu", lesson: " B1.1" },	{ front: "präteritum ihr zumachen", back: "ihr machtet zu", lesson: " B1.1" },	{ front: "präteritum sie(pl.) zumachen", back: "sie machten zu", lesson: " B1.1" },
       
{ front: "präteritum ich aufmachen", back: "ich machte auf", lesson: " B1.1" },	{ front: "präteritum du aufmachen", back: "du machtest auf", lesson: " B1.1" },	{ front: "präteritum  es aufmachen", back: "es machte auf", lesson: " B1.1" },	{ front: "präteritum wir aufmachen", back: "wir machten auf", lesson: " B1.1" },	{ front: "präteritum ihr aufmachen", back: "ihr machtet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufmachen", back: "sie machten auf", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich empfehlen", back: "ich empfahl", lesson: " B1.1" },	{ front: "präteritum du empfehlen", back: "du empfahlst", lesson: " B1.1" },	{ front: "präteritum  er empfehlen", back: "er empfahl", lesson: " B1.1" },	{ front: "präteritum wir empfehlen", back: "wir empfahlen", lesson: " B1.1" },	{ front: "präteritum ihr empfehlen", back: "ihr empfahlt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) empfehlen", back: "sie empfahlen", lesson: " B1.1" },
{ front: "präteritum ich reservieren", back: "ich reservierte", lesson: " B1.1" },	{ front: "präteritum du reservieren", back: "du reserviertest", lesson: " B1.1" },	{ front: "präteritum  sie reservieren", back: "sie reservierte", lesson: " B1.1" },	{ front: "präteritum wir reservieren", back: "wir reservierten", lesson: " B1.1" },	{ front: "präteritum ihr reservieren", back: "ihr reserviertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reservieren", back: "sie reservierten", lesson: " B1.1" },
       
       
{ front: "präteritum ich drücken", back: "ich drückte", lesson: " B1.1" },	{ front: "präteritum du drücken", back: "du drücktest", lesson: " B1.1" },	{ front: "präteritum  sie drücken", back: "sie drückte", lesson: " B1.1" },	{ front: "präteritum wir drücken", back: "wir drückten", lesson: " B1.1" },	{ front: "präteritum ihr drücken", back: "ihr drücktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) drücken", back: "sie drückten", lesson: " B1.1" },
{ front: "präteritum ich anmelden", back: "ich meldete mich an", lesson: " B1.1" },	{ front: "präteritum du anmelden", back: "du meldetest dich an", lesson: " B1.1" },	{ front: "präteritum  es anmelden", back: "es meldete sich an", lesson: " B1.1" },	{ front: "präteritum wir anmelden", back: "wir meldeten uns an", lesson: " B1.1" },	{ front: "präteritum ihr anmelden", back: "ihr meldetet euch an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anmelden", back: "sie meldeten sich an", lesson: " B1.1" },
{ front: "präteritum ich verbinden", back: "ich verband", lesson: " B1.1" },	{ front: "präteritum du verbinden", back: "du verbandst", lesson: " B1.1" },	{ front: "präteritum  er verbinden", back: "er verband", lesson: " B1.1" },	{ front: "präteritum wir verbinden", back: "wir verbanden", lesson: " B1.1" },	{ front: "präteritum ihr verbinden", back: "ihr verbandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verbinden", back: "sie verbanden", lesson: " B1.1" },
{ front: "präteritum ich hinterlassen", back: "ich hinterließ", lesson: " B1.1" },	{ front: "präteritum du hinterlassen", back: "du hinterließest", lesson: " B1.1" },	{ front: "präteritum  sie hinterlassen", back: "sie hinterließ", lesson: " B1.1" },	{ front: "präteritum wir hinterlassen", back: "wir hinterließen", lesson: " B1.1" },	{ front: "präteritum ihr hinterlassen", back: "ihr hinterließt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hinterlassen", back: "sie hinterließen", lesson: " B1.1" },
{ front: "präteritum ich zurückrufen", back: "ich rief zurück", lesson: " B1.1" },	{ front: "präteritum du zurückrufen", back: "du riefst zurück", lesson: " B1.1" },	{ front: "präteritum  es zurückrufen", back: "es rief zurück", lesson: " B1.1" },	{ front: "präteritum wir zurückrufen", back: "wir riefen zurück", lesson: " B1.1" },	{ front: "präteritum ihr zurückrufen", back: "ihr rieft zurück", lesson: " B1.1" },	{ front: "präteritum sie(pl.) zurückrufen", back: "sie riefen zurück", lesson: " B1.1" },
{ front: "präteritum ich aussehen", back: "ich sah aus", lesson: " B1.1" },	{ front: "präteritum du aussehen", back: "du sahst aus", lesson: " B1.1" },	{ front: "präteritum  er aussehen", back: "er sah aus", lesson: " B1.1" },	{ front: "präteritum wir aussehen", back: "wir sahen aus", lesson: " B1.1" },	{ front: "präteritum ihr aussehen", back: "ihr saht aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aussehen", back: "sie sahen aus", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich bestellen", back: "ich bestellte", lesson: " B1.1" },	{ front: "präteritum du bestellen", back: "du bestelltest", lesson: " B1.1" },	{ front: "präteritum  sie bestellen", back: "sie bestellte", lesson: " B1.1" },	{ front: "präteritum wir bestellen", back: "wir bestellten", lesson: " B1.1" },	{ front: "präteritum ihr bestellen", back: "ihr bestelltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bestellen", back: "sie bestellten", lesson: " B1.1" },
       
{ front: "präteritum ich anbieten", back: "ich bot an", lesson: " B1.1" },	{ front: "präteritum du anbieten", back: "du botst an", lesson: " B1.1" },	{ front: "präteritum  er anbieten", back: "er bot an", lesson: " B1.1" },	{ front: "präteritum wir anbieten", back: "wir boten an", lesson: " B1.1" },	{ front: "präteritum ihr anbieten", back: "ihr botet an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anbieten", back: "sie boten an", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich ziehen", back: "ich zog", lesson: " B1.1" },	{ front: "präteritum du ziehen", back: "du zogst", lesson: " B1.1" },	{ front: "präteritum  er ziehen", back: "er zog", lesson: " B1.1" },	{ front: "präteritum wir ziehen", back: "wir zogen", lesson: " B1.1" },	{ front: "präteritum ihr ziehen", back: "ihr zogt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ziehen", back: "sie zogen", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich passen", back: "ich passte", lesson: " B1.1" },	{ front: "präteritum du passen", back: "du passtest", lesson: " B1.1" },	{ front: "präteritum  es passen", back: "es passte", lesson: " B1.1" },	{ front: "präteritum wir passen", back: "wir passten", lesson: " B1.1" },	{ front: "präteritum ihr passen", back: "ihr passtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) passen", back: "sie passten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich stehen", back: "ich stand", lesson: " B1.1" },	{ front: "präteritum du stehen", back: "du stand(e)st", lesson: " B1.1" },	{ front: "präteritum  er stehen", back: "er stand", lesson: " B1.1" },	{ front: "präteritum wir stehen", back: "wir standen", lesson: " B1.1" },	{ front: "präteritum ihr stehen", back: "ihr standet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stehen", back: "sie standen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich trainieren", back: "ich trainierte", lesson: " B1.1" },	{ front: "präteritum du trainieren", back: "du trainiertest", lesson: " B1.1" },	{ front: "präteritum  sie trainieren", back: "sie trainierte", lesson: " B1.1" },	{ front: "präteritum wir trainieren", back: "wir trainierten", lesson: " B1.1" },	{ front: "präteritum ihr trainieren", back: "ihr trainiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) trainieren", back: "sie trainierten", lesson: " B1.1" },
{ front: "präteritum ich rad fahren", back: "ich fuhr Rad", lesson: " B1.1" },	{ front: "präteritum du rad fahren", back: "du fuhrst Rad", lesson: " B1.1" },	{ front: "präteritum  es rad fahren", back: "es fuhr Rad", lesson: " B1.1" },	{ front: "präteritum wir rad fahren", back: "wir fuhren Rad", lesson: " B1.1" },	{ front: "präteritum ihr rad fahren", back: "ihr fuhrt Rad", lesson: " B1.1" },	{ front: "präteritum sie(pl.) rad fahren", back: "sie fuhren Rad", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich gehören", back: "ich gehörte", lesson: " B1.1" },	{ front: "präteritum du gehören", back: "du gehörtest", lesson: " B1.1" },	{ front: "präteritum  es gehören", back: "es gehörte", lesson: " B1.1" },	{ front: "präteritum wir gehören", back: "wir gehörten", lesson: " B1.1" },	{ front: "präteritum ihr gehören", back: "ihr gehörtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gehören", back: "sie gehörten", lesson: " B1.1" },
{ front: "präteritum ich mögen", back: "ich mochte", lesson: " B1.1" },	{ front: "präteritum du mögen", back: "du mochtest", lesson: " B1.1" },	{ front: "präteritum  er mögen", back: "er mochte", lesson: " B1.1" },	{ front: "präteritum wir mögen", back: "wir mochten", lesson: " B1.1" },	{ front: "präteritum ihr mögen", back: "ihr mochtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mögen", back: "sie mochten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich entschuldigen", back: "ich entschuldigte mich", lesson: " B1.1" },	{ front: "präteritum du entschuldigen", back: "du entschuldigtest dich", lesson: " B1.1" },	{ front: "präteritum  sie entschuldigen", back: "sie entschuldigte sich", lesson: " B1.1" },	{ front: "präteritum wir entschuldigen", back: "wir entschuldigten uns", lesson: " B1.1" },	{ front: "präteritum ihr entschuldigen", back: "ihr entschuldigtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) entschuldigen", back: "sie entschuldigten sich", lesson: " B1.1" },
{ front: "präteritum ich wissen", back: "ich wusste", lesson: " B1.1" },	{ front: "präteritum du wissen", back: "du wusstest", lesson: " B1.1" },	{ front: "präteritum  es wissen", back: "es wusste", lesson: " B1.1" },	{ front: "präteritum wir wissen", back: "wir wussten", lesson: " B1.1" },	{ front: "präteritum ihr wissen", back: "ihr wusstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wissen", back: "sie wussten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich anziehen", back: "ich zog an", lesson: " B1.1" },	{ front: "präteritum du anziehen", back: "du zogst an", lesson: " B1.1" },	{ front: "präteritum  sie anziehen", back: "sie zog an", lesson: " B1.1" },	{ front: "präteritum wir anziehen", back: "wir zogen an", lesson: " B1.1" },	{ front: "präteritum ihr anziehen", back: "ihr zogt an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anziehen", back: "sie zogen an", lesson: " B1.1" },
{ front: "präteritum ich anprobieren", back: "ich probierte an", lesson: " B1.1" },	{ front: "präteritum du anprobieren", back: "du probiertest an", lesson: " B1.1" },	{ front: "präteritum  es anprobieren", back: "es probierte an", lesson: " B1.1" },	{ front: "präteritum wir anprobieren", back: "wir probierten an", lesson: " B1.1" },	{ front: "präteritum ihr anprobieren", back: "ihr probiertet an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anprobieren", back: "sie probierten an", lesson: " B1.1" },
       
       
{ front: "präteritum ich erzählen", back: "ich erzählte", lesson: " B1.1" },	{ front: "präteritum du erzählen", back: "du erzähltest", lesson: " B1.1" },	{ front: "präteritum  es erzählen", back: "es erzählte", lesson: " B1.1" },	{ front: "präteritum wir erzählen", back: "wir erzählten", lesson: " B1.1" },	{ front: "präteritum ihr erzählen", back: "ihr erzähltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erzählen", back: "sie erzählten", lesson: " B1.1" },
{ front: "präteritum ich feiern", back: "ich feierte", lesson: " B1.1" },	{ front: "präteritum du feiern", back: "du feiertest", lesson: " B1.1" },	{ front: "präteritum  er feiern", back: "er feierte", lesson: " B1.1" },	{ front: "präteritum wir feiern", back: "wir feierten", lesson: " B1.1" },	{ front: "präteritum ihr feiern", back: "ihr feiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) feiern", back: "sie feierten", lesson: " B1.1" },
       
       
{ front: "präteritum ich beginnen", back: "ich begann", lesson: " B1.1" },	{ front: "präteritum du beginnen", back: "du begannst", lesson: " B1.1" },	{ front: "präteritum  er beginnen", back: "er begann", lesson: " B1.1" },	{ front: "präteritum wir beginnen", back: "wir begannen", lesson: " B1.1" },	{ front: "präteritum ihr beginnen", back: "ihr begannt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beginnen", back: "sie begannen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich (sich) wünschen", back: "ich wünschte mir", lesson: " B1.1" },	{ front: "präteritum du (sich) wünschen", back: "du wünschtest dir", lesson: " B1.1" },	{ front: "präteritum  sie (sich) wünschen", back: "sie wünschte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) wünschen", back: "wir wünschten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) wünschen", back: "ihr wünschtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) wünschen", back: "sie wünschten sich", lesson: " B1.1" },
{ front: "präteritum ich gratulieren", back: "ich gratulierte", lesson: " B1.1" },	{ front: "präteritum du gratulieren", back: "du gratuliertest", lesson: " B1.1" },	{ front: "präteritum  es gratulieren", back: "es gratulierte", lesson: " B1.1" },	{ front: "präteritum wir gratulieren", back: "wir gratulierten", lesson: " B1.1" },	{ front: "präteritum ihr gratulieren", back: "ihr gratuliertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gratulieren", back: "sie gratulierten", lesson: " B1.1" },
       
{ front: "präteritum ich glauben", back: "ich glaubte", lesson: " B1.1" },	{ front: "präteritum du glauben", back: "du glaubtest", lesson: " B1.1" },	{ front: "präteritum  sie glauben", back: "sie glaubte", lesson: " B1.1" },	{ front: "präteritum wir glauben", back: "wir glaubten", lesson: " B1.1" },	{ front: "präteritum ihr glauben", back: "ihr glaubtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) glauben", back: "sie glaubten", lesson: " B1.1" },
{ front: "präteritum ich besuchen", back: "ich besuchte", lesson: " B1.1" },	{ front: "präteritum du besuchen", back: "du besuchtest", lesson: " B1.1" },	{ front: "präteritum  es besuchen", back: "es besuchte", lesson: " B1.1" },	{ front: "präteritum wir besuchen", back: "wir besuchten", lesson: " B1.1" },	{ front: "präteritum ihr besuchen", back: "ihr besuchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) besuchen", back: "sie besuchten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich mitmachen", back: "ich machte mit", lesson: " B1.1" },	{ front: "präteritum du mitmachen", back: "du machtest mit", lesson: " B1.1" },	{ front: "präteritum  er mitmachen", back: "er machte mit", lesson: " B1.1" },	{ front: "präteritum wir mitmachen", back: "wir machten mit", lesson: " B1.1" },	{ front: "präteritum ihr mitmachen", back: "ihr machtet mit", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mitmachen", back: "sie machten mit", lesson: " B1.1" },
       
       
{ front: "präteritum ich (sich) lieben", back: "ich liebte", lesson: " B1.1" },	{ front: "präteritum du (sich) lieben", back: "du liebtest", lesson: " B1.1" },	{ front: "präteritum  er (sich) lieben", back: "er liebte", lesson: " B1.1" },	{ front: "präteritum wir (sich) lieben", back: "wir liebten", lesson: " B1.1" },	{ front: "präteritum ihr (sich) lieben", back: "ihr liebtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) lieben", back: "sie liebten", lesson: " B1.1" },
       
       
{ front: "präteritum ich putzen", back: "ich putzte", lesson: " B1.1" },	{ front: "präteritum du putzen", back: "du putztest", lesson: " B1.1" },	{ front: "präteritum  er putzen", back: "er putzte", lesson: " B1.1" },	{ front: "präteritum wir putzen", back: "wir putzten", lesson: " B1.1" },	{ front: "präteritum ihr putzen", back: "ihr putztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) putzen", back: "sie putzten", lesson: " B1.1" },
       
       
{ front: "präteritum ich waschen", back: "ich wusch", lesson: " B1.1" },	{ front: "präteritum du waschen", back: "du wuschst", lesson: " B1.1" },	{ front: "präteritum  er waschen", back: "er wusch", lesson: " B1.1" },	{ front: "präteritum wir waschen", back: "wir wuschen", lesson: " B1.1" },	{ front: "präteritum ihr waschen", back: "ihr wuscht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) waschen", back: "sie wuschen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich organisieren", back: "ich organisierte", lesson: " B1.1" },	{ front: "präteritum du organisieren", back: "du organisiertest", lesson: " B1.1" },	{ front: "präteritum  sie organisieren", back: "sie organisierte", lesson: " B1.1" },	{ front: "präteritum wir organisieren", back: "wir organisierten", lesson: " B1.1" },	{ front: "präteritum ihr organisieren", back: "ihr organisiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) organisieren", back: "sie organisierten", lesson: " B1.1" },
{ front: "präteritum ich Bescheid geben", back: "ich gab Bescheid", lesson: " B1.1" },	{ front: "präteritum du Bescheid geben", back: "du gabst Bescheid", lesson: " B1.1" },	{ front: "präteritum  es Bescheid geben", back: "es gab Bescheid", lesson: " B1.1" },	{ front: "präteritum wir Bescheid geben", back: "wir gaben Bescheid", lesson: " B1.1" },	{ front: "präteritum ihr Bescheid geben", back: "ihr gabt Bescheid", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Bescheid geben", back: "sie gaben Bescheid", lesson: " B1.1" },
       
       
{ front: "präteritum ich werden", back: "ich wurde", lesson: " B1.1" },	{ front: "präteritum du werden", back: "du wurdest", lesson: " B1.1" },	{ front: "präteritum  es werden", back: "es wurde", lesson: " B1.1" },	{ front: "präteritum wir werden", back: "wir wurden", lesson: " B1.1" },	{ front: "präteritum ihr werden", back: "ihr wurdet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) werden", back: "sie wurden", lesson: " B1.1" },
{ front: "präteritum ich einladen", back: "ich lud ein", lesson: " B1.1" },	{ front: "präteritum du einladen", back: "du ludst ein", lesson: " B1.1" },	{ front: "präteritum  er einladen", back: "er lud ein", lesson: " B1.1" },	{ front: "präteritum wir einladen", back: "wir luden ein", lesson: " B1.1" },	{ front: "präteritum ihr einladen", back: "ihr ludet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einladen", back: "sie luden ein", lesson: " B1.1" },
{ front: "präteritum ich sich freuen", back: "ich freute mich", lesson: " B1.1" },	{ front: "präteritum du sich freuen", back: "du freutest dich", lesson: " B1.1" },	{ front: "präteritum  sie sich freuen", back: "sie freute sich", lesson: " B1.1" },	{ front: "präteritum wir sich freuen", back: "wir freuten uns", lesson: " B1.1" },	{ front: "präteritum ihr sich freuen", back: "ihr freutet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich freuen", back: "sie freuten sich", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich bitten", back: "ich bat", lesson: " B1.1" },	{ front: "präteritum du bitten", back: "du batst", lesson: " B1.1" },	{ front: "präteritum  sie bitten", back: "sie bat", lesson: " B1.1" },	{ front: "präteritum wir bitten", back: "wir baten", lesson: " B1.1" },	{ front: "präteritum ihr bitten", back: "ihr batet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bitten", back: "sie baten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich gewinnen", back: "ich gewann", lesson: " B1.1" },	{ front: "präteritum du gewinnen", back: "du gewannst", lesson: " B1.1" },	{ front: "präteritum  er gewinnen", back: "er gewann", lesson: " B1.1" },	{ front: "präteritum wir gewinnen", back: "wir gewannen", lesson: " B1.1" },	{ front: "präteritum ihr gewinnen", back: "ihr gewannt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gewinnen", back: "sie gewannen", lesson: " B1.1" },
       
       
     { front: "präteritum ihr die Hochzeit", back: "", lesson: " B1.1" },	
       
{ front: "präteritum ich ansehen", back: "ich sah an", lesson: " B1.1" },	{ front: "präteritum du ansehen", back: "du sahst an", lesson: " B1.1" },	{ front: "präteritum  es ansehen", back: "es sah an", lesson: " B1.1" },	{ front: "präteritum wir ansehen", back: "wir sahen an", lesson: " B1.1" },	{ front: "präteritum ihr ansehen", back: "ihr saht an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ansehen", back: "sie sahen an", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich klappen", back: "ich klappte", lesson: " B1.1" },	{ front: "präteritum du klappen", back: "du klapptest", lesson: " B1.1" },	{ front: "präteritum  er klappen", back: "er klappte", lesson: " B1.1" },	{ front: "präteritum wir klappen", back: "wir klappten", lesson: " B1.1" },	{ front: "präteritum ihr klappen", back: "ihr klapptet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) klappen", back: "sie klappten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich vermissen", back: "ich vermisste", lesson: " B1.1" },	{ front: "präteritum du vermissen", back: "du vermisstest", lesson: " B1.1" },	{ front: "präteritum  sie vermissen", back: "sie vermisste", lesson: " B1.1" },	{ front: "präteritum wir vermissen", back: "wir vermissten", lesson: " B1.1" },	{ front: "präteritum ihr vermissen", back: "ihr vermisstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vermissen", back: "sie vermissten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich umziehen", back: "ich zog um", lesson: " B1.1" },	{ front: "präteritum du umziehen", back: "du zogst um", lesson: " B1.1" },	{ front: "präteritum  er umziehen", back: "er zog um", lesson: " B1.1" },	{ front: "präteritum wir umziehen", back: "wir zogen um", lesson: " B1.1" },	{ front: "präteritum ihr umziehen", back: "ihr zogt um", lesson: " B1.1" },	{ front: "präteritum sie(pl.) umziehen", back: "sie zogen um", lesson: " B1.1" },
{ front: "präteritum ich (sich) kennenlernen", back: "ich lernte kennen", lesson: " B1.1" },	{ front: "präteritum du (sich) kennenlernen", back: "du lerntest kennen", lesson: " B1.1" },	{ front: "präteritum  sie (sich) kennenlernen", back: "sie lernte kennen", lesson: " B1.1" },	{ front: "präteritum wir (sich) kennenlernen", back: "wir lernten kennen", lesson: " B1.1" },	{ front: "präteritum ihr (sich) kennenlernen", back: "ihr lerntet kennen", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) kennenlernen", back: "sie lernten kennen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich auspacken", back: "ich packte aus", lesson: " B1.1" },	{ front: "präteritum du auspacken", back: "du packtest aus", lesson: " B1.1" },	{ front: "präteritum  es auspacken", back: "es packte aus", lesson: " B1.1" },	{ front: "präteritum wir auspacken", back: "wir packten aus", lesson: " B1.1" },	{ front: "präteritum ihr auspacken", back: "ihr packtet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) auspacken", back: "sie packten aus", lesson: " B1.1" },
{ front: "präteritum ich einschlafen", back: "ich schlief ein", lesson: " B1.1" },	{ front: "präteritum du einschlafen", back: "du schliefst ein", lesson: " B1.1" },	{ front: "präteritum  er einschlafen", back: "er schlief ein", lesson: " B1.1" },	{ front: "präteritum wir einschlafen", back: "wir schliefen ein", lesson: " B1.1" },	{ front: "präteritum ihr einschlafen", back: "ihr schlieft ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einschlafen", back: "sie schliefen ein", lesson: " B1.1" },
       
{ front: "präteritum ich (sich) merken", back: "ich merkte", lesson: " B1.1" },	{ front: "präteritum du (sich) merken", back: "du merktest", lesson: " B1.1" },	{ front: "präteritum  es (sich) merken", back: "es merkte", lesson: " B1.1" },	{ front: "präteritum wir (sich) merken", back: "wir merkten", lesson: " B1.1" },	{ front: "präteritum ihr (sich) merken", back: "ihr merktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) merken", back: "sie merkten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich klingen", back: "ich klang", lesson: " B1.1" },	{ front: "präteritum du klingen", back: "du klangst", lesson: " B1.1" },	{ front: "präteritum  er klingen", back: "er klang", lesson: " B1.1" },	{ front: "präteritum wir klingen", back: "wir klangen", lesson: " B1.1" },	{ front: "präteritum ihr klingen", back: "ihr klangt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) klingen", back: "sie klangen", lesson: " B1.1" },
{ front: "präteritum ich erleben", back: "ich erlebte", lesson: " B1.1" },	{ front: "präteritum du erleben", back: "du erlebtest", lesson: " B1.1" },	{ front: "präteritum  sie erleben", back: "sie erlebte", lesson: " B1.1" },	{ front: "präteritum wir erleben", back: "wir erlebten", lesson: " B1.1" },	{ front: "präteritum ihr erleben", back: "ihr erlebtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erleben", back: "sie erlebten", lesson: " B1.1" },
       
       
{ front: "präteritum ich verpassen", back: "ich verpasste", lesson: " B1.1" },	{ front: "präteritum du verpassen", back: "du verpasstest", lesson: " B1.1" },	{ front: "präteritum  sie verpassen", back: "sie verpasste", lesson: " B1.1" },	{ front: "präteritum wir verpassen", back: "wir verpassten", lesson: " B1.1" },	{ front: "präteritum ihr verpassen", back: "ihr verpasstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verpassen", back: "sie verpassten", lesson: " B1.1" },
{ front: "präteritum ich bemerken", back: "ich bemerkte", lesson: " B1.1" },	{ front: "präteritum du bemerken", back: "du bemerktest", lesson: " B1.1" },	{ front: "präteritum  es bemerken", back: "es bemerkte", lesson: " B1.1" },	{ front: "präteritum wir bemerken", back: "wir bemerkten", lesson: " B1.1" },	{ front: "präteritum ihr bemerken", back: "ihr bemerktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bemerken", back: "sie bemerkten", lesson: " B1.1" },
{ front: "präteritum ich erfahren", back: "ich erfuhr", lesson: " B1.1" },	{ front: "präteritum du erfahren", back: "du erfuhrst", lesson: " B1.1" },	{ front: "präteritum  er erfahren", back: "er erfuhr", lesson: " B1.1" },	{ front: "präteritum wir erfahren", back: "wir erfuhren", lesson: " B1.1" },	{ front: "präteritum ihr erfahren", back: "ihr erfuhrt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erfahren", back: "sie erfuhren", lesson: " B1.1" },
{ front: "präteritum ich (sich) vorstellen", back: "ich stellte vor", lesson: " B1.1" },	{ front: "präteritum du (sich) vorstellen", back: "du stelltest vor", lesson: " B1.1" },	{ front: "präteritum  sie (sich) vorstellen", back: "sie stellte vor", lesson: " B1.1" },	{ front: "präteritum wir (sich) vorstellen", back: "wir stellten vor", lesson: " B1.1" },	{ front: "präteritum ihr (sich) vorstellen", back: "ihr stelltet vor", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) vorstellen", back: "sie stellten vor", lesson: " B1.1" },
       
{ front: "präteritum ich verlieren", back: "ich verlor", lesson: " B1.1" },	{ front: "präteritum du verlieren", back: "du verlorst", lesson: " B1.1" },	{ front: "präteritum  er verlieren", back: "er verlor", lesson: " B1.1" },	{ front: "präteritum wir verlieren", back: "wir verloren", lesson: " B1.1" },	{ front: "präteritum ihr verlieren", back: "ihr verlort", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verlieren", back: "sie verloren", lesson: " B1.1" },
       
       
{ front: "präteritum ich stoßen", back: "ich stieß", lesson: " B1.1" },	{ front: "präteritum du stoßen", back: "du stießest", lesson: " B1.1" },	{ front: "präteritum  er stoßen", back: "er stieß", lesson: " B1.1" },	{ front: "präteritum wir stoßen", back: "wir stießen", lesson: " B1.1" },	{ front: "präteritum ihr stoßen", back: "ihr stießt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stoßen", back: "sie stießen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich einziehen", back: "ich zog ein", lesson: " B1.1" },	{ front: "präteritum du einziehen", back: "du zogst ein", lesson: " B1.1" },	{ front: "präteritum  er einziehen", back: "er zog ein", lesson: " B1.1" },	{ front: "präteritum wir einziehen", back: "wir zogen ein", lesson: " B1.1" },	{ front: "präteritum ihr einziehen", back: "ihr zogt ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einziehen", back: "sie zogen ein", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich reichen", back: "ich reichte", lesson: " B1.1" },	{ front: "präteritum du reichen", back: "du reichtetst", lesson: " B1.1" },	{ front: "präteritum  sie reichen", back: "sie reichte", lesson: " B1.1" },	{ front: "präteritum wir reichen", back: "wir reichten", lesson: " B1.1" },	{ front: "präteritum ihr reichen", back: "ihr reichtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reichen", back: "sie reichten", lesson: " B1.1" },
{ front: "präteritum ich teilen", back: "ich teilte", lesson: " B1.1" },	{ front: "präteritum du teilen", back: "du teiltest", lesson: " B1.1" },	{ front: "präteritum  es teilen", back: "es teilte", lesson: " B1.1" },	{ front: "präteritum wir teilen", back: "wir teilten", lesson: " B1.1" },	{ front: "präteritum ihr teilen", back: "ihr teiltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) teilen", back: "sie teilten", lesson: " B1.1" },
{ front: "präteritum ich ausziehen", back: "ich zog aus", lesson: " B1.1" },	{ front: "präteritum du ausziehen", back: "du zogst aus", lesson: " B1.1" },	{ front: "präteritum  er ausziehen", back: "er zog aus", lesson: " B1.1" },	{ front: "präteritum wir ausziehen", back: "wir zogen aus", lesson: " B1.1" },	{ front: "präteritum ihr ausziehen", back: "ihr zogt aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausziehen", back: "sie zogen aus", lesson: " B1.1" },
       
       
{ front: "präteritum ich benutzen", back: "ich benutzte", lesson: " B1.1" },	{ front: "präteritum du benutzen", back: "du benutztest", lesson: " B1.1" },	{ front: "präteritum  er benutzen", back: "er benutzte", lesson: " B1.1" },	{ front: "präteritum wir benutzen", back: "wir benutzten", lesson: " B1.1" },	{ front: "präteritum ihr benutzen", back: "ihr benutztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) benutzen", back: "sie benutzten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich wechseln", back: "ich wechselte", lesson: " B1.1" },	{ front: "präteritum du wechseln", back: "du wechseltest", lesson: " B1.1" },	{ front: "präteritum  er wechseln", back: "er wechselte", lesson: " B1.1" },	{ front: "präteritum wir wechseln", back: "wir wechselten", lesson: " B1.1" },	{ front: "präteritum ihr wechseln", back: "ihr wechseltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wechseln", back: "sie wechselten", lesson: " B1.1" },
       
{ front: "präteritum ich hängen", back: "ich hing", lesson: " B1.1" },	{ front: "präteritum du hängen", back: "du hingst", lesson: " B1.1" },	{ front: "präteritum  es hängen", back: "es hing", lesson: " B1.1" },	{ front: "präteritum wir hängen", back: "wir hingen", lesson: " B1.1" },	{ front: "präteritum ihr hängen", back: "ihr hingt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hängen", back: "sie hingen", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich stecken", back: "ich steckte", lesson: " B1.1" },	{ front: "präteritum du stecken", back: "du stecktest", lesson: " B1.1" },	{ front: "präteritum  sie stecken", back: "sie steckte", lesson: " B1.1" },	{ front: "präteritum wir stecken", back: "wir steckten", lesson: " B1.1" },	{ front: "präteritum ihr stecken", back: "ihr stecktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stecken", back: "sie steckten", lesson: " B1.1" },
       
{ front: "präteritum ich stehen", back: "ich stand", lesson: " B1.1" },	{ front: "präteritum du stehen", back: "du stand(e)st", lesson: " B1.1" },	{ front: "präteritum  er stehen", back: "er stand", lesson: " B1.1" },	{ front: "präteritum wir stehen", back: "wir standen", lesson: " B1.1" },	{ front: "präteritum ihr stehen", back: "ihr standet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stehen", back: "sie standen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich legen", back: "ich legte", lesson: " B1.1" },	{ front: "präteritum du legen", back: "du legtest", lesson: " B1.1" },	{ front: "präteritum  sie legen", back: "sie legte", lesson: " B1.1" },	{ front: "präteritum wir legen", back: "wir legten", lesson: " B1.1" },	{ front: "präteritum ihr legen", back: "ihr legtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) legen", back: "sie legten", lesson: " B1.1" },
       
       
{ front: "präteritum ich stören", back: "ich störte", lesson: " B1.1" },	{ front: "präteritum du stören", back: "du stört(e)st", lesson: " B1.1" },	{ front: "präteritum  sie stören", back: "sie störte", lesson: " B1.1" },	{ front: "präteritum wir stören", back: "wir störten", lesson: " B1.1" },	{ front: "präteritum ihr stören", back: "ihr störtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stören", back: "sie störten", lesson: " B1.1" },
{ front: "präteritum ich stellen", back: "ich stellte", lesson: " B1.1" },	{ front: "präteritum du stellen", back: "du stelltest", lesson: " B1.1" },	{ front: "präteritum  es stellen", back: "es stellte", lesson: " B1.1" },	{ front: "präteritum wir stellen", back: "wir stellten", lesson: " B1.1" },	{ front: "präteritum ihr stellen", back: "ihr stelltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stellen", back: "sie stellten", lesson: " B1.1" },
       
{ front: "präteritum ich bauen", back: "ich baute", lesson: " B1.1" },	{ front: "präteritum du bauen", back: "du bautest", lesson: " B1.1" },	{ front: "präteritum  sie bauen", back: "sie baute", lesson: " B1.1" },	{ front: "präteritum wir bauen", back: "wir bauten", lesson: " B1.1" },	{ front: "präteritum ihr bauen", back: "ihr bautet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bauen", back: "sie bauten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich runterfallen", back: "ich fiel herunter", lesson: " B1.1" },	{ front: "präteritum du runterfallen", back: "du fielst herunter", lesson: " B1.1" },	{ front: "präteritum  er runterfallen", back: "er fiel herunter", lesson: " B1.1" },	{ front: "präteritum wir runterfallen", back: "wir fielen herunter", lesson: " B1.1" },	{ front: "präteritum ihr runterfallen", back: "ihr fielt herunter", lesson: " B1.1" },	{ front: "präteritum sie(pl.) runterfallen", back: "sie fielen herunter", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich reinkommen", back: "ich kam rein", lesson: " B1.1" },	{ front: "präteritum du reinkommen", back: "du kamst rein", lesson: " B1.1" },	{ front: "präteritum  sie reinkommen", back: "sie kam rein", lesson: " B1.1" },	{ front: "präteritum wir reinkommen", back: "wir kamen rein", lesson: " B1.1" },	{ front: "präteritum ihr reinkommen", back: "ihr kamt rein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reinkommen", back: "sie kamen rein", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich trennen", back: "ich trennte", lesson: " B1.1" },	{ front: "präteritum du trennen", back: "du trenntest", lesson: " B1.1" },	{ front: "präteritum  es trennen", back: "es trennte", lesson: " B1.1" },	{ front: "präteritum wir trennen", back: "wir trennten", lesson: " B1.1" },	{ front: "präteritum ihr trennen", back: "ihr trenntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) trennen", back: "sie trennten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich beachten", back: "ich beachtete", lesson: " B1.1" },	{ front: "präteritum du beachten", back: "du beachtetest", lesson: " B1.1" },	{ front: "präteritum  er beachten", back: "er beachtete", lesson: " B1.1" },	{ front: "präteritum wir beachten", back: "wir beachteten", lesson: " B1.1" },	{ front: "präteritum ihr beachten", back: "ihr beachtetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beachten", back: "sie beachteten", lesson: " B1.1" },
       
       
{ front: "präteritum ich abstellen", back: "ich stellte ab", lesson: " B1.1" },	{ front: "präteritum du abstellen", back: "du stelltest ab", lesson: " B1.1" },	{ front: "präteritum  er abstellen", back: "er stellte ab", lesson: " B1.1" },	{ front: "präteritum wir abstellen", back: "wir stellten ab", lesson: " B1.1" },	{ front: "präteritum ihr abstellen", back: "ihr stelltet ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abstellen", back: "sie stellten ab", lesson: " B1.1" },
       
       
{ front: "präteritum ich kündigen", back: "ich kündigte", lesson: " B1.1" },	{ front: "präteritum du kündigen", back: "du kündigtest", lesson: " B1.1" },	{ front: "präteritum  er kündigen", back: "er kündigte", lesson: " B1.1" },	{ front: "präteritum wir kündigen", back: "wir kündigten", lesson: " B1.1" },	{ front: "präteritum ihr kündigen", back: "ihr kündigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kündigen", back: "sie kündigten", lesson: " B1.1" },
       
{ front: "präteritum ich hoffen", back: "ich hoffte", lesson: " B1.1" },	{ front: "präteritum du hoffen", back: "du hofftest", lesson: " B1.1" },	{ front: "präteritum  es hoffen", back: "es hoffte", lesson: " B1.1" },	{ front: "präteritum wir hoffen", back: "wir hofften", lesson: " B1.1" },	{ front: "präteritum ihr hoffen", back: "ihr hofftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hoffen", back: "sie hofften", lesson: " B1.1" },
       
{ front: "präteritum ich abschließen", back: "ich schloss ab", lesson: " B1.1" },	{ front: "präteritum du abschließen", back: "du schlossest ab", lesson: " B1.1" },	{ front: "präteritum  sie abschließen", back: "sie schloss ab", lesson: " B1.1" },	{ front: "präteritum wir abschließen", back: "wir schlossen ab", lesson: " B1.1" },	{ front: "präteritum ihr abschließen", back: "ihr schlosst ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abschließen", back: "sie schlossen ab", lesson: " B1.1" },
       
       
{ front: "präteritum ich (sich) erhöhen", back: "ich erhöhte (mich)", lesson: " B1.1" },	{ front: "präteritum du (sich) erhöhen", back: "du erhöhtest (dich)", lesson: " B1.1" },	{ front: "präteritum  sie (sich) erhöhen", back: "sie erhöhte (sich)", lesson: " B1.1" },	{ front: "präteritum wir (sich) erhöhen", back: "wir erhöhten (uns)", lesson: " B1.1" },	{ front: "präteritum ihr (sich) erhöhen", back: "ihr erhöhtet (euch)", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) erhöhen", back: "sie erhöhten (sich)", lesson: " B1.1" },
{ front: "präteritum ich entfernen", back: "ich entfernte", lesson: " B1.1" },	{ front: "präteritum du entfernen", back: "du entferntest", lesson: " B1.1" },	{ front: "präteritum  es entfernen", back: "es entfernte", lesson: " B1.1" },	{ front: "präteritum wir entfernen", back: "wir entfernten", lesson: " B1.1" },	{ front: "präteritum ihr entfernen", back: "ihr entferntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) entfernen", back: "sie entfernten", lesson: " B1.1" },
       
{ front: "präteritum ich heizen", back: "ich heizte", lesson: " B1.1" },	{ front: "präteritum du heizen", back: "du heiztest", lesson: " B1.1" },	{ front: "präteritum  sie heizen", back: "sie heizte", lesson: " B1.1" },	{ front: "präteritum wir heizen", back: "wir heizten", lesson: " B1.1" },	{ front: "präteritum ihr heizen", back: "ihr heiztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) heizen", back: "sie heizten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich recht haben", back: "ich hatte recht", lesson: " B1.1" },	{ front: "präteritum du recht haben", back: "du hattest recht", lesson: " B1.1" },	{ front: "präteritum  es recht haben", back: "es hatte recht", lesson: " B1.1" },	{ front: "präteritum wir recht haben", back: "wir hatten recht", lesson: " B1.1" },	{ front: "präteritum ihr recht haben", back: "ihr hattet recht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) recht haben", back: "sie hatten recht", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich lassen", back: "ich ließ", lesson: " B1.1" },	{ front: "präteritum du lassen", back: "du ließest", lesson: " B1.1" },	{ front: "präteritum  sie lassen", back: "sie ließ", lesson: " B1.1" },	{ front: "präteritum wir lassen", back: "wir ließen", lesson: " B1.1" },	{ front: "präteritum ihr lassen", back: "ihr ließt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) lassen", back: "sie ließen", lesson: " B1.1" },
{ front: "präteritum ich werfen", back: "ich warf", lesson: " B1.1" },	{ front: "präteritum du werfen", back: "du warfst", lesson: " B1.1" },	{ front: "präteritum  es werfen", back: "es warf", lesson: " B1.1" },	{ front: "präteritum wir werfen", back: "wir warfen", lesson: " B1.1" },	{ front: "präteritum ihr werfen", back: "ihr warft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) werfen", back: "sie warfen", lesson: " B1.1" },
{ front: "präteritum ich aufpassen", back: "ich passte auf", lesson: " B1.1" },	{ front: "präteritum du aufpassen", back: "du passtest auf", lesson: " B1.1" },	{ front: "präteritum  er aufpassen", back: "er passte auf", lesson: " B1.1" },	{ front: "präteritum wir aufpassen", back: "wir passten auf", lesson: " B1.1" },	{ front: "präteritum ihr aufpassen", back: "ihr passtet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufpassen", back: "sie passten auf", lesson: " B1.1" },
{ front: "präteritum ich gießen", back: "ich goss", lesson: " B1.1" },	{ front: "präteritum du gießen", back: "du gosst", lesson: " B1.1" },	{ front: "präteritum  sie gießen", back: "sie goss", lesson: " B1.1" },	{ front: "präteritum wir gießen", back: "wir gossen", lesson: " B1.1" },	{ front: "präteritum ihr gießen", back: "ihr gosst", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gießen", back: "sie gossen", lesson: " B1.1" },
       
{ front: "präteritum ich klingeln", back: "ich klingelte", lesson: " B1.1" },	{ front: "präteritum du klingeln", back: "du klingeltest", lesson: " B1.1" },	{ front: "präteritum  er klingeln", back: "er klingelte", lesson: " B1.1" },	{ front: "präteritum wir klingeln", back: "wir klingelten", lesson: " B1.1" },	{ front: "präteritum ihr klingeln", back: "ihr klingeltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) klingeln", back: "sie klingelten", lesson: " B1.1" },
{ front: "präteritum ich besprechen", back: "ich besprach", lesson: " B1.1" },	{ front: "präteritum du besprechen", back: "du besprachst", lesson: " B1.1" },	{ front: "präteritum  sie besprechen", back: "sie besprach", lesson: " B1.1" },	{ front: "präteritum wir besprechen", back: "wir besprachen", lesson: " B1.1" },	{ front: "präteritum ihr besprechen", back: "ihr besprecht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) besprechen", back: "sie besprachen", lesson: " B1.1" },
{ front: "präteritum ich füttern", back: "ich fütterte", lesson: " B1.1" },	{ front: "präteritum du füttern", back: "du füttertest", lesson: " B1.1" },	{ front: "präteritum  es füttern", back: "es fütterte", lesson: " B1.1" },	{ front: "präteritum wir füttern", back: "wir fütterten", lesson: " B1.1" },	{ front: "präteritum ihr füttern", back: "ihr füttertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) füttern", back: "sie fütterten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich stimmen", back: "ich stimmte", lesson: " B1.1" },	{ front: "präteritum du stimmen", back: "du stimmtest", lesson: " B1.1" },	{ front: "präteritum  er stimmen", back: "er stimmte", lesson: " B1.1" },	{ front: "präteritum wir stimmen", back: "wir stimmten", lesson: " B1.1" },	{ front: "präteritum ihr stimmen", back: "ihr stimmtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stimmen", back: "sie stimmten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich übernehmen", back: "ich übernahm", lesson: " B1.1" },	{ front: "präteritum du übernehmen", back: "du übernahmst", lesson: " B1.1" },	{ front: "präteritum  es übernehmen", back: "es übernahm", lesson: " B1.1" },	{ front: "präteritum wir übernehmen", back: "wir übernahmen", lesson: " B1.1" },	{ front: "präteritum ihr übernehmen", back: "ihr übernahmt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) übernehmen", back: "sie übernahmen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich riechen", back: "ich roch", lesson: " B1.1" },	{ front: "präteritum du riechen", back: "du rochst", lesson: " B1.1" },	{ front: "präteritum  er riechen", back: "er roch", lesson: " B1.1" },	{ front: "präteritum wir riechen", back: "wir rochen", lesson: " B1.1" },	{ front: "präteritum ihr riechen", back: "ihr rocht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) riechen", back: "sie rochen", lesson: " B1.1" },
{ front: "präteritum ich (sich) ausziehen", back: "ich zog mich aus", lesson: " B1.1" },	{ front: "präteritum du (sich) ausziehen", back: "du zogst dich aus", lesson: " B1.1" },	{ front: "präteritum  sie (sich) ausziehen", back: "sie zog sich aus", lesson: " B1.1" },	{ front: "präteritum wir (sich) ausziehen", back: "wir zogen uns aus", lesson: " B1.1" },	{ front: "präteritum ihr (sich) ausziehen", back: "ihr zogt euch aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) ausziehen", back: "sie zogen sich aus", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich überraschen", back: "ich überraschte", lesson: " B1.1" },	{ front: "präteritum du überraschen", back: "du überraschtest", lesson: " B1.1" },	{ front: "präteritum  sie überraschen", back: "sie überraschte", lesson: " B1.1" },	{ front: "präteritum wir überraschen", back: "wir überraschten", lesson: " B1.1" },	{ front: "präteritum ihr überraschen", back: "ihr überraschtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) überraschen", back: "sie überraschten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich leiten", back: "ich leitete", lesson: " B1.1" },	{ front: "präteritum du leiten", back: "du leitetest", lesson: " B1.1" },	{ front: "präteritum  sie leiten", back: "sie leitete", lesson: " B1.1" },	{ front: "präteritum wir leiten", back: "wir leiteten", lesson: " B1.1" },	{ front: "präteritum ihr leiten", back: "ihr leitetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) leiten", back: "sie leiteten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich planen", back: "ich plante", lesson: " B1.1" },	{ front: "präteritum du planen", back: "du plantest", lesson: " B1.1" },	{ front: "präteritum  er planen", back: "er plante", lesson: " B1.1" },	{ front: "präteritum wir planen", back: "wir planten", lesson: " B1.1" },	{ front: "präteritum ihr planen", back: "ihr plantet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) planen", back: "sie planten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich notieren", back: "ich notierte", lesson: " B1.1" },	{ front: "präteritum du notieren", back: "du notiertest", lesson: " B1.1" },	{ front: "präteritum  es notieren", back: "es notierte", lesson: " B1.1" },	{ front: "präteritum wir notieren", back: "wir notierten", lesson: " B1.1" },	{ front: "präteritum ihr notieren", back: "ihr notiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) notieren", back: "sie notierten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich achten auf", back: "ich achtete auf", lesson: " B1.1" },	{ front: "präteritum du achten auf", back: "du achtetest auf", lesson: " B1.1" },	{ front: "präteritum  es achten auf", back: "es achtete auf", lesson: " B1.1" },	{ front: "präteritum wir achten auf", back: "wir achteten auf", lesson: " B1.1" },	{ front: "präteritum ihr achten auf", back: "ihr achtetet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) achten auf", back: "sie achteten auf", lesson: " B1.1" },
       
       
{ front: "präteritum ich nutzen", back: "ich nutzte", lesson: " B1.1" },	{ front: "präteritum du nutzen", back: "du nutztest", lesson: " B1.1" },	{ front: "präteritum  es nutzen", back: "es nutzte", lesson: " B1.1" },	{ front: "präteritum wir nutzen", back: "wir nutzten", lesson: " B1.1" },	{ front: "präteritum ihr nutzen", back: "ihr nutztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) nutzen", back: "sie nutzten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich aus·schalten", back: "ich schaltete aus", lesson: " B1.1" },	{ front: "präteritum du aus·schalten", back: "du schaltetest aus", lesson: " B1.1" },	{ front: "präteritum  es aus·schalten", back: "es schaltete aus", lesson: " B1.1" },	{ front: "präteritum wir aus·schalten", back: "wir schalteten aus", lesson: " B1.1" },	{ front: "präteritum ihr aus·schalten", back: "ihr schaltetet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aus·schalten", back: "sie schalteten aus", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich in Rente gehen", back: "ich ging in Rente", lesson: " B1.1" },	{ front: "präteritum du in Rente gehen", back: "du gingst in Rente", lesson: " B1.1" },	{ front: "präteritum  es in Rente gehen", back: "es ging in Rente", lesson: " B1.1" },	{ front: "präteritum wir in Rente gehen", back: "wir gingen in Rente", lesson: " B1.1" },	{ front: "präteritum ihr in Rente gehen", back: "ihr gingt in Rente", lesson: " B1.1" },	{ front: "präteritum sie(pl.) in Rente gehen", back: "sie gingen in Rente", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich wenden", back: "ich wandte", lesson: " B1.1" },	{ front: "präteritum du wenden", back: "du wandtest", lesson: " B1.1" },	{ front: "präteritum  sie wenden", back: "sie wandte", lesson: " B1.1" },	{ front: "präteritum wir wenden", back: "wir wandten", lesson: " B1.1" },	{ front: "präteritum ihr wenden", back: "ihr wandtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wenden", back: "sie wandten", lesson: " B1.1" },
{ front: "präteritum ich statt·finden", back: "ich fand statt", lesson: " B1.1" },	{ front: "präteritum du statt·finden", back: "du fandst statt", lesson: " B1.1" },	{ front: "präteritum  es statt·finden", back: "es fand statt", lesson: " B1.1" },	{ front: "präteritum wir statt·finden", back: "wir fanden statt", lesson: " B1.1" },	{ front: "präteritum ihr statt·finden", back: "ihr fandet statt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) statt·finden", back: "sie fanden statt", lesson: " B1.1" },
       
{ front: "präteritum ich berichten", back: "ich berichtete", lesson: " B1.1" },	{ front: "präteritum du berichten", back: "du berichtetest", lesson: " B1.1" },	{ front: "präteritum  sie berichten", back: "sie berichtete", lesson: " B1.1" },	{ front: "präteritum wir berichten", back: "wir berichteten", lesson: " B1.1" },	{ front: "präteritum ihr berichten", back: "ihr berichtetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) berichten", back: "sie berichteten", lesson: " B1.1" },
{ front: "präteritum ich beraten", back: "ich beriet", lesson: " B1.1" },	{ front: "präteritum du beraten", back: "du beriet(e)st", lesson: " B1.1" },	{ front: "präteritum  es beraten", back: "es beriet", lesson: " B1.1" },	{ front: "präteritum wir beraten", back: "wir berieten", lesson: " B1.1" },	{ front: "präteritum ihr beraten", back: "ihr berietet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beraten", back: "sie berieten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich entlassen", back: "ich entließ", lesson: " B1.1" },	{ front: "präteritum du entlassen", back: "du entließest", lesson: " B1.1" },	{ front: "präteritum  er entlassen", back: "er entließ", lesson: " B1.1" },	{ front: "präteritum wir entlassen", back: "wir entließen", lesson: " B1.1" },	{ front: "präteritum ihr entlassen", back: "ihr entließt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) entlassen", back: "sie entließen", lesson: " B1.1" },
{ front: "präteritum ich schützen", back: "ich schützte", lesson: " B1.1" },	{ front: "präteritum du schützen", back: "du schütztest", lesson: " B1.1" },	{ front: "präteritum  sie schützen", back: "sie schützte", lesson: " B1.1" },	{ front: "präteritum wir schützen", back: "wir schützten", lesson: " B1.1" },	{ front: "präteritum ihr schützen", back: "ihr schütztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schützen", back: "sie schützten", lesson: " B1.1" },
{ front: "präteritum ich (sich) bedanken", back: "ich bedankte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) bedanken", back: "du bedanktest dich", lesson: " B1.1" },	{ front: "präteritum  es (sich) bedanken", back: "es bedankte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) bedanken", back: "wir bedankten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) bedanken", back: "ihr bedanktet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) bedanken", back: "sie bedankten sich", lesson: " B1.1" },
{ front: "präteritum ich aus·richten", back: "ich richtete aus", lesson: " B1.1" },	{ front: "präteritum du aus·richten", back: "du richtetest aus", lesson: " B1.1" },	{ front: "präteritum  er aus·richten", back: "er richtete aus", lesson: " B1.1" },	{ front: "präteritum wir aus·richten", back: "wir richteten aus", lesson: " B1.1" },	{ front: "präteritum ihr aus·richten", back: "ihr richtetet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aus·richten", back: "sie richteten aus", lesson: " B1.1" },
       
{ front: "präteritum ich versuchen", back: "ich versuchte", lesson: " B1.1" },	{ front: "präteritum du versuchen", back: "du versucht(e)st", lesson: " B1.1" },	{ front: "präteritum  es versuchen", back: "es versuchte", lesson: " B1.1" },	{ front: "präteritum wir versuchen", back: "wir versuchten", lesson: " B1.1" },	{ front: "präteritum ihr versuchen", back: "ihr versuchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) versuchen", back: "sie versuchten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich bieten", back: "ich bot", lesson: " B1.1" },	{ front: "präteritum du bieten", back: "du botst", lesson: " B1.1" },	{ front: "präteritum  sie bieten", back: "sie bot", lesson: " B1.1" },	{ front: "präteritum wir bieten", back: "wir boten", lesson: " B1.1" },	{ front: "präteritum ihr bieten", back: "ihr botet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bieten", back: "sie boten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich gelten", back: "ich galt", lesson: " B1.1" },	{ front: "präteritum du gelten", back: "du galtest", lesson: " B1.1" },	{ front: "präteritum  sie gelten", back: "sie galt", lesson: " B1.1" },	{ front: "präteritum wir gelten", back: "wir galten", lesson: " B1.1" },	{ front: "präteritum ihr gelten", back: "ihr galtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gelten", back: "sie galten", lesson: " B1.1" },
       
{ front: "präteritum ich (sich) bewegen", back: "ich bewegte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) bewegen", back: "du bewegtest dich", lesson: " B1.1" },	{ front: "präteritum  er (sich) bewegen", back: "er bewegte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) bewegen", back: "wir bewegten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) bewegen", back: "ihr bewegtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) bewegen", back: "sie bewegten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) interessieren für", back: "ich interessierte mich für", lesson: " B1.1" },	{ front: "präteritum du (sich) interessieren für", back: "du interessiertest dich für", lesson: " B1.1" },	{ front: "präteritum  sie (sich) interessieren für", back: "sie interessierte sich für", lesson: " B1.1" },	{ front: "präteritum wir (sich) interessieren für", back: "wir interessierten uns für", lesson: " B1.1" },	{ front: "präteritum ihr (sich) interessieren für", back: "ihr interessiertet euch für", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) interessieren für", back: "sie interessierten sich für", lesson: " B1.1" },
       
       
{ front: "präteritum ich (sich) fühlen", back: "ich fühlte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) fühlen", back: "du fühltest dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) fühlen", back: "sie fühlte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) fühlen", back: "wir fühlten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) fühlen", back: "ihr fühltet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) fühlen", back: "sie fühlten sich", lesson: " B1.1" },
       
       
{ front: "präteritum ich hin·fallen", back: "ich fiel hin", lesson: " B1.1" },	{ front: "präteritum du hin·fallen", back: "du fielst hin", lesson: " B1.1" },	{ front: "präteritum  sie hin·fallen", back: "sie fiel hin", lesson: " B1.1" },	{ front: "präteritum wir hin·fallen", back: "wir fielen hin", lesson: " B1.1" },	{ front: "präteritum ihr hin·fallen", back: "ihr fielt hin", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hin·fallen", back: "sie fielen hin", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich (sich) verabreden mit", back: "ich verabredete mich mit", lesson: " B1.1" },	{ front: "präteritum du (sich) verabreden mit", back: "du verabredetest dich mit", lesson: " B1.1" },	{ front: "präteritum  er (sich) verabreden mit", back: "er verabredete sich mit", lesson: " B1.1" },	{ front: "präteritum wir (sich) verabreden mit", back: "wir verabredeten uns mit", lesson: " B1.1" },	{ front: "präteritum ihr (sich) verabreden mit", back: "ihr verabredetet euch mit", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) verabreden mit", back: "sie verabredeten sich mit", lesson: " B1.1" },
{ front: "präteritum ich (sich) aus·ruhen", back: "ich ruhte mich aus", lesson: " B1.1" },	{ front: "präteritum du (sich) aus·ruhen", back: "du ruhstest dich aus", lesson: " B1.1" },	{ front: "präteritum  sie (sich) aus·ruhen", back: "sie ruhte sich aus", lesson: " B1.1" },	{ front: "präteritum wir (sich) aus·ruhen", back: "wir ruhten uns aus", lesson: " B1.1" },	{ front: "präteritum ihr (sich) aus·ruhen", back: "ihr ruhtet euch aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) aus·ruhen", back: "sie ruhten sich aus", lesson: " B1.1" },
{ front: "präteritum ich (sich) ernähren", back: "ich ernährte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) ernähren", back: "du ernährtest dich", lesson: " B1.1" },	{ front: "präteritum  es (sich) ernähren", back: "es ernährte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) ernähren", back: "wir ernährten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) ernähren", back: "ihr ernährtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) ernähren", back: "sie ernährten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) ärgern (über)", back: "ich ärgerte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) ärgern (über)", back: "du ärgertest dich", lesson: " B1.1" },	{ front: "präteritum  er (sich) ärgern (über)", back: "er ärgerte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) ärgern (über)", back: "wir ärgerten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) ärgern (über)", back: "ihr ärgertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) ärgern (über)", back: "sie ärgerten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) schminken", back: "ich schminkte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) schminken", back: "du schminktest dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) schminken", back: "sie schminkte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) schminken", back: "wir schminkten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) schminken", back: "ihr schminktet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) schminken", back: "sie schminkten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) rasieren", back: "ich rasierte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) rasieren", back: "du rasiertest dich", lesson: " B1.1" },	{ front: "präteritum  es (sich) rasieren", back: "es rasierte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) rasieren", back: "wir rasierten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) rasieren", back: "ihr rasiertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) rasieren", back: "sie rasierten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) um·ziehen", back: "ich zog mich um", lesson: " B1.1" },	{ front: "präteritum du (sich) um·ziehen", back: "du zogst dich um", lesson: " B1.1" },	{ front: "präteritum  er (sich) um·ziehen", back: "er zog sich um", lesson: " B1.1" },	{ front: "präteritum wir (sich) um·ziehen", back: "wir zogen uns um", lesson: " B1.1" },	{ front: "präteritum ihr (sich) um·ziehen", back: "ihr zogt euch um", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) um·ziehen", back: "sie zogen sich um", lesson: " B1.1" },
{ front: "präteritum ich (sich) kämmen", back: "ich kämmte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) kämmen", back: "du kämmtest dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) kämmen", back: "sie kämmte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) kämmen", back: "wir kämmten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) kämmen", back: "ihr kämmtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) kämmen", back: "sie kämmten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) waschen", back: "ich wusch mich", lesson: " B1.1" },	{ front: "präteritum du (sich) waschen", back: "du wuschst dich", lesson: " B1.1" },	{ front: "präteritum  es (sich) waschen", back: "es wusch sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) waschen", back: "wir wuschen uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) waschen", back: "ihr wuscht euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) waschen", back: "sie wuschen sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) beeilen", back: "ich beeilte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) beeilen", back: "du beeilstest dich", lesson: " B1.1" },	{ front: "präteritum  er (sich) beeilen", back: "er beeilte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) beeilen", back: "wir beeilten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) beeilen", back: "ihr beeiltet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) beeilen", back: "sie beeilten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) konzentrieren (auf)", back: "ich konzentrierte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) konzentrieren (auf)", back: "du konzentriertest dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) konzentrieren (auf)", back: "sie konzentrierte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) konzentrieren (auf)", back: "wir konzentrierten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) konzentrieren (auf)", back: "ihr konzentriertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) konzentrieren (auf)", back: "sie konzentrierten sich", lesson: " B1.1" },
{ front: "präteritum ich (sich) beschweren (über)", back: "ich beschwerte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) beschweren (über)", back: "du beschwertest dich", lesson: " B1.1" },	{ front: "präteritum  es (sich) beschweren (über)", back: "es beschwerte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) beschweren (über)", back: "wir beschwerten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) beschweren (über)", back: "ihr beschwertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) beschweren (über)", back: "sie beschwerten sich", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich (sich) kümmern um", back: "ich kümmerte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) kümmern um", back: "du kümmertest dich", lesson: " B1.1" },	{ front: "präteritum  er (sich) kümmern um", back: "er kümmerte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) kümmern um", back: "wir kümmerten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) kümmern um", back: "ihr kümmertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) kümmern um", back: "sie kümmerten sich", lesson: " B1.1" },
{ front: "präteritum ich träumen von", back: "ich träumte", lesson: " B1.1" },	{ front: "präteritum du träumen von", back: "du träumtest", lesson: " B1.1" },	{ front: "präteritum  sie träumen von", back: "sie träumte", lesson: " B1.1" },	{ front: "präteritum wir träumen von", back: "wir träumten", lesson: " B1.1" },	{ front: "präteritum ihr träumen von", back: "ihr träumtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) träumen von", back: "sie träumten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich (sich) erinnern an", back: "ich erinnerte mich", lesson: " B1.1" },	{ front: "präteritum du (sich) erinnern an", back: "du erinnertes dich", lesson: " B1.1" },	{ front: "präteritum  er (sich) erinnern an", back: "er erinnerte sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) erinnern an", back: "wir erinnerten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) erinnern an", back: "ihr erinnertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) erinnern an", back: "sie erinnerten sich", lesson: " B1.1" },
{ front: "präteritum ich denken an", back: "ich dachte", lesson: " B1.1" },	{ front: "präteritum du denken an", back: "du dachtest", lesson: " B1.1" },	{ front: "präteritum  sie denken an", back: "sie dachte", lesson: " B1.1" },	{ front: "präteritum wir denken an", back: "wir dachten", lesson: " B1.1" },	{ front: "präteritum ihr denken an", back: "ihr dachtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) denken an", back: "sie dachten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich betragen", back: "ich betrug", lesson: " B1.1" },	{ front: "präteritum du betragen", back: "du betrugst", lesson: " B1.1" },	{ front: "präteritum  es betragen", back: "es betrug", lesson: " B1.1" },	{ front: "präteritum wir betragen", back: "wir betrugen", lesson: " B1.1" },	{ front: "präteritum ihr betragen", back: "ihr betrugt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) betragen", back: "sie betrugen", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich joggen", back: "ich joggte", lesson: " B1.1" },	{ front: "präteritum du joggen", back: "du joggtest", lesson: " B1.1" },	{ front: "präteritum  er joggen", back: "er joggte", lesson: " B1.1" },	{ front: "präteritum wir joggen", back: "wir joggten", lesson: " B1.1" },	{ front: "präteritum ihr joggen", back: "ihr joggtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) joggen", back: "sie joggten", lesson: " B1.1" },
{ front: "präteritum ich (sich) halten", back: "ich hielt mich", lesson: " B1.1" },	{ front: "präteritum du (sich) halten", back: "du hieltest dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) halten", back: "sie hielt sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) halten", back: "wir hielten uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) halten", back: "ihr hieltet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) halten", back: "sie hielten sich", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich schaffen", back: "ich schaffte", lesson: " B1.1" },	{ front: "präteritum du schaffen", back: "du schafftest", lesson: " B1.1" },	{ front: "präteritum  sie schaffen", back: "sie schaffte", lesson: " B1.1" },	{ front: "präteritum wir schaffen", back: "wir schafften", lesson: " B1.1" },	{ front: "präteritum ihr schaffen", back: "ihr schafftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schaffen", back: "sie schafften", lesson: " B1.1" },
       
{ front: "präteritum ich laufen", back: "ich lief", lesson: " B1.1" },	{ front: "präteritum du laufen", back: "du liefst", lesson: " B1.1" },	{ front: "präteritum  er laufen", back: "er lief", lesson: " B1.1" },	{ front: "präteritum wir laufen", back: "wir liefen", lesson: " B1.1" },	{ front: "präteritum ihr laufen", back: "ihr lieft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) laufen", back: "sie liefen", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich übertreiben", back: "ich übertrieb", lesson: " B1.1" },	{ front: "präteritum du übertreiben", back: "du übertriebst", lesson: " B1.1" },	{ front: "präteritum  sie übertreiben", back: "sie übertrieb", lesson: " B1.1" },	{ front: "präteritum wir übertreiben", back: "wir übertrieben", lesson: " B1.1" },	{ front: "präteritum ihr übertreiben", back: "ihr übertriebt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) übertreiben", back: "sie übertrieben", lesson: " B1.1" },
       
{ front: "präteritum ich tennis spielen", back: "ich spielte Tennis", lesson: " B1.1" },	{ front: "präteritum du tennis spielen", back: "du spieltest Tennis", lesson: " B1.1" },	{ front: "präteritum  er tennis spielen", back: "er spielte Tennis", lesson: " B1.1" },	{ front: "präteritum wir tennis spielen", back: "wir spielten Tennis", lesson: " B1.1" },	{ front: "präteritum ihr tennis spielen", back: "ihr spieltet Tennis", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tennis spielen", back: "sie spielten Tennis", lesson: " B1.1" },
{ front: "präteritum ich ski fahren", back: "ich fuhr Ski", lesson: " B1.1" },	{ front: "präteritum du ski fahren", back: "du fuhrst Ski", lesson: " B1.1" },	{ front: "präteritum  sie ski fahren", back: "sie fuhr Ski", lesson: " B1.1" },	{ front: "präteritum wir ski fahren", back: "wir fuhren Ski", lesson: " B1.1" },	{ front: "präteritum ihr ski fahren", back: "ihr fuhrt Ski", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ski fahren", back: "sie fuhren Ski", lesson: " B1.1" },
{ front: "präteritum ich basketball spielen", back: "ich spielte Basketball", lesson: " B1.1" },	{ front: "präteritum du basketball spielen", back: "du spieltest Basketball", lesson: " B1.1" },	{ front: "präteritum  es basketball spielen", back: "es spielte Basketball", lesson: " B1.1" },	{ front: "präteritum wir basketball spielen", back: "wir spielten Basketball", lesson: " B1.1" },	{ front: "präteritum ihr basketball spielen", back: "ihr spieltet Basketball", lesson: " B1.1" },	{ front: "präteritum sie(pl.) basketball spielen", back: "sie spielten Basketball", lesson: " B1.1" },
{ front: "präteritum ich gymnastik machen", back: "ich machte Gymnastik", lesson: " B1.1" },	{ front: "präteritum du gymnastik machen", back: "du machtest Gymnastik", lesson: " B1.1" },	{ front: "präteritum  er gymnastik machen", back: "er machte Gymnastik", lesson: " B1.1" },	{ front: "präteritum wir gymnastik machen", back: "wir machten Gymnastik", lesson: " B1.1" },	{ front: "präteritum ihr gymnastik machen", back: "ihr machtet Gymnastik", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gymnastik machen", back: "sie machten Gymnastik", lesson: " B1.1" },
{ front: "präteritum ich tischtennis spielen", back: "ich spielte Tischtennis", lesson: " B1.1" },	{ front: "präteritum du tischtennis spielen", back: "du spieltest Tischtennis", lesson: " B1.1" },	{ front: "präteritum  sie tischtennis spielen", back: "sie spielte Tischtennis", lesson: " B1.1" },	{ front: "präteritum wir tischtennis spielen", back: "wir spielten Tischtennis", lesson: " B1.1" },	{ front: "präteritum ihr tischtennis spielen", back: "ihr spieltet Tischtennis", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tischtennis spielen", back: "sie spielten Tischtennis", lesson: " B1.1" },
{ front: "präteritum ich volleyball spielen", back: "ich spielte Volleyball", lesson: " B1.1" },	{ front: "präteritum du volleyball spielen", back: "du spieltest Volleyball", lesson: " B1.1" },	{ front: "präteritum  es volleyball spielen", back: "es spielte Volleyball", lesson: " B1.1" },	{ front: "präteritum wir volleyball spielen", back: "wir spielten Volleyball", lesson: " B1.1" },	{ front: "präteritum ihr volleyball spielen", back: "ihr spieltet Volleyball", lesson: " B1.1" },	{ front: "präteritum sie(pl.) volleyball spielen", back: "sie spielten Volleyball", lesson: " B1.1" },
{ front: "präteritum ich fitnesstraining machen", back: "ich machte Fitnesstraining", lesson: " B1.1" },	{ front: "präteritum du fitnesstraining machen", back: "du machtest Fitnesstraining", lesson: " B1.1" },	{ front: "präteritum  er fitnesstraining machen", back: "er machte Fitnesstraining", lesson: " B1.1" },	{ front: "präteritum wir fitnesstraining machen", back: "wir machten Fitnesstraining", lesson: " B1.1" },	{ front: "präteritum ihr fitnesstraining machen", back: "ihr machtet Fitnesstraining", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fitnesstraining machen", back: "sie machten Fitnesstraining", lesson: " B1.1" },
{ front: "präteritum ich eishockey spielen", back: "ich spielte Eishockey", lesson: " B1.1" },	{ front: "präteritum du eishockey spielen", back: "du spieltest Eishockey", lesson: " B1.1" },	{ front: "präteritum  sie eishockey spielen", back: "sie spielte Eishockey", lesson: " B1.1" },	{ front: "präteritum wir eishockey spielen", back: "wir spielten Eishockey", lesson: " B1.1" },	{ front: "präteritum ihr eishockey spielen", back: "ihr spieltet Eishockey", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eishockey spielen", back: "sie spielten Eishockey", lesson: " B1.1" },
{ front: "präteritum ich schwimmen", back: "ich schwamm", lesson: " B1.1" },	{ front: "präteritum du schwimmen", back: "du schwammst", lesson: " B1.1" },	{ front: "präteritum  es schwimmen", back: "es schwamm", lesson: " B1.1" },	{ front: "präteritum wir schwimmen", back: "wir schwammen", lesson: " B1.1" },	{ front: "präteritum ihr schwimmen", back: "ihr schwammt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schwimmen", back: "sie schwammen", lesson: " B1.1" },
{ front: "präteritum ich fahrrad fahren", back: "ich fuhr Fahrrad", lesson: " B1.1" },	{ front: "präteritum du fahrrad fahren", back: "du fuhrst Fahrrad", lesson: " B1.1" },	{ front: "präteritum  er fahrrad fahren", back: "er fuhr Fahrrad", lesson: " B1.1" },	{ front: "präteritum wir fahrrad fahren", back: "wir fuhren Fahrrad", lesson: " B1.1" },	{ front: "präteritum ihr fahrrad fahren", back: "ihr fuhrt Fahrrad", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fahrrad fahren", back: "sie fuhren Fahrrad", lesson: " B1.1" },
{ front: "präteritum ich fußball spielen", back: "ich spielte Fußball", lesson: " B1.1" },	{ front: "präteritum du fußball spielen", back: "du spieltest Fußball", lesson: " B1.1" },	{ front: "präteritum  sie fußball spielen", back: "sie spielte Fußball", lesson: " B1.1" },	{ front: "präteritum wir fußball spielen", back: "wir spielten Fußball", lesson: " B1.1" },	{ front: "präteritum ihr fußball spielen", back: "ihr spieltet Fußball", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fußball spielen", back: "sie spielten Fußball", lesson: " B1.1" },
{ front: "präteritum ich wandern", back: "ich wanderte", lesson: " B1.1" },	{ front: "präteritum du wandern", back: "du wandertest", lesson: " B1.1" },	{ front: "präteritum  es wandern", back: "es wanderte", lesson: " B1.1" },	{ front: "präteritum wir wandern", back: "wir wanderten", lesson: " B1.1" },	{ front: "präteritum ihr wandern", back: "ihr wandertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wandern", back: "sie wanderten", lesson: " B1.1" },
{ front: "präteritum ich tanzen", back: "ich tanzte", lesson: " B1.1" },	{ front: "präteritum du tanzen", back: "du tanztest", lesson: " B1.1" },	{ front: "präteritum  er tanzen", back: "er tanzte", lesson: " B1.1" },	{ front: "präteritum wir tanzen", back: "wir tanzten", lesson: " B1.1" },	{ front: "präteritum ihr tanzen", back: "ihr tanztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tanzen", back: "sie tanzten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich streiten", back: "ich stritt mich", lesson: " B1.1" },	{ front: "präteritum du streiten", back: "du strittest dich", lesson: " B1.1" },	{ front: "präteritum  sie streiten", back: "sie stritt sich", lesson: " B1.1" },	{ front: "präteritum wir streiten", back: "wir stritten uns", lesson: " B1.1" },	{ front: "präteritum ihr streiten", back: "ihr strittet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) streiten", back: "sie stritten sich", lesson: " B1.1" },
       
{ front: "präteritum ich verbessern", back: "ich verbesserte mich", lesson: " B1.1" },	{ front: "präteritum du verbessern", back: "du verbessertest dich", lesson: " B1.1" },	{ front: "präteritum  er verbessern", back: "er verbesserte sich", lesson: " B1.1" },	{ front: "präteritum wir verbessern", back: "wir verbesserten uns", lesson: " B1.1" },	{ front: "präteritum ihr verbessern", back: "ihr verbessertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verbessern", back: "sie verbesserten sich", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich hassen", back: "ich hasste", lesson: " B1.1" },	{ front: "präteritum du hassen", back: "du hasstest", lesson: " B1.1" },	{ front: "präteritum  er hassen", back: "er hasste", lesson: " B1.1" },	{ front: "präteritum wir hassen", back: "wir hassten", lesson: " B1.1" },	{ front: "präteritum ihr hassen", back: "ihr hasstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hassen", back: "sie hassten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich speichern", back: "ich speicherte", lesson: " B1.1" },	{ front: "präteritum du speichern", back: "du speichertest", lesson: " B1.1" },	{ front: "präteritum  es speichern", back: "es speicherte", lesson: " B1.1" },	{ front: "präteritum wir speichern", back: "wir speicherten", lesson: " B1.1" },	{ front: "präteritum ihr speichern", back: "ihr speichertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) speichern", back: "sie speicherten", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich (sich) bewerben", back: "ich bewarb mich", lesson: " B1.1" },	{ front: "präteritum du (sich) bewerben", back: "du bewarbst dich", lesson: " B1.1" },	{ front: "präteritum  sie (sich) bewerben", back: "sie bewarb sich", lesson: " B1.1" },	{ front: "präteritum wir (sich) bewerben", back: "wir bewarben uns", lesson: " B1.1" },	{ front: "präteritum ihr (sich) bewerben", back: "ihr bewarbt euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) (sich) bewerben", back: "sie bewarben sich", lesson: " B1.1" },
{ front: "präteritum ich präsentieren", back: "ich präsentierte", lesson: " B1.1" },	{ front: "präteritum du präsentieren", back: "du präsentiertest", lesson: " B1.1" },	{ front: "präteritum  es präsentieren", back: "es präsentierte", lesson: " B1.1" },	{ front: "präteritum wir präsentieren", back: "wir präsentierten", lesson: " B1.1" },	{ front: "präteritum ihr präsentieren", back: "ihr präsentiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) präsentieren", back: "sie präsentierten", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich sich verletzen", back: "ich verletzte mich", lesson: " B1.1" },	{ front: "präteritum du sich verletzen", back: "du verletztest dich", lesson: " B1.1" },	{ front: "präteritum  sie sich verletzen", back: "sie verletzte sich", lesson: " B1.1" },	{ front: "präteritum wir sich verletzen", back: "wir verletzten uns", lesson: " B1.1" },	{ front: "präteritum ihr sich verletzen", back: "ihr verletztet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich verletzen", back: "sie verletzten sich", lesson: " B1.1" },
{ front: "präteritum ich bluten", back: "ich blutete", lesson: " B1.1" },	{ front: "präteritum du bluten", back: "du blutetest", lesson: " B1.1" },	{ front: "präteritum  es bluten", back: "es blutete", lesson: " B1.1" },	{ front: "präteritum wir bluten", back: "wir bluteten", lesson: " B1.1" },	{ front: "präteritum ihr bluten", back: "ihr blutetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bluten", back: "sie bluteten", lesson: " B1.1" },
       
       
{ front: "präteritum ich bestehen", back: "ich bestand", lesson: " B1.1" },	{ front: "präteritum du bestehen", back: "du bestandst", lesson: " B1.1" },	{ front: "präteritum  es bestehen", back: "es bestand", lesson: " B1.1" },	{ front: "präteritum wir bestehen", back: "wir bestanden", lesson: " B1.1" },	{ front: "präteritum ihr bestehen", back: "ihr bestandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bestehen", back: "sie bestanden", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich anerkennen", back: "ich erkannte an", lesson: " B1.1" },	{ front: "präteritum du anerkennen", back: "du erkanntest an", lesson: " B1.1" },	{ front: "präteritum  es anerkennen", back: "es erkannte an", lesson: " B1.1" },	{ front: "präteritum wir anerkennen", back: "wir erkannten an", lesson: " B1.1" },	{ front: "präteritum ihr anerkennen", back: "ihr erkanntet an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anerkennen", back: "sie erkannten an", lesson: " B1.1" },
{ front: "präteritum ich prüfen", back: "ich prüfte", lesson: " B1.1" },	{ front: "präteritum du prüfen", back: "du prüftest", lesson: " B1.1" },	{ front: "präteritum  er prüfen", back: "er prüfte", lesson: " B1.1" },	{ front: "präteritum wir prüfen", back: "wir prüften", lesson: " B1.1" },	{ front: "präteritum ihr prüfen", back: "ihr prüftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) prüfen", back: "sie prüften", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich vorbereiten", back: "ich bereitete mich vor", lesson: " B1.1" },	{ front: "präteritum du vorbereiten", back: "du bereitetest dich vor", lesson: " B1.1" },	{ front: "präteritum  sie vorbereiten", back: "sie bereitete sich vor", lesson: " B1.1" },	{ front: "präteritum wir vorbereiten", back: "wir bereiteten uns vor", lesson: " B1.1" },	{ front: "präteritum ihr vorbereiten", back: "ihr bereitetet euch vor", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vorbereiten", back: "sie bereiteten sich vor", lesson: " B1.1" },
{ front: "präteritum ich basteln", back: "ich bastelte", lesson: " B1.1" },	{ front: "präteritum du basteln", back: "du basteltest", lesson: " B1.1" },	{ front: "präteritum  es basteln", back: "es bastelte", lesson: " B1.1" },	{ front: "präteritum wir basteln", back: "wir bastelten", lesson: " B1.1" },	{ front: "präteritum ihr basteln", back: "ihr basteltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) basteln", back: "sie bastelten", lesson: " B1.1" },
{ front: "präteritum ich entscheiden", back: "ich entschied", lesson: " B1.1" },	{ front: "präteritum du entscheiden", back: "du entschiedest", lesson: " B1.1" },	{ front: "präteritum  er entscheiden", back: "er entschied", lesson: " B1.1" },	{ front: "präteritum wir entscheiden", back: "wir entschieden", lesson: " B1.1" },	{ front: "präteritum ihr entscheiden", back: "ihr entschiedet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) entscheiden", back: "sie entschieden", lesson: " B1.1" },
{ front: "präteritum ich schenken", back: "ich schenkte", lesson: " B1.1" },	{ front: "präteritum du schenken", back: "du schenktest", lesson: " B1.1" },	{ front: "präteritum  sie schenken", back: "sie schenkte", lesson: " B1.1" },	{ front: "präteritum wir schenken", back: "wir schenkten", lesson: " B1.1" },	{ front: "präteritum ihr schenken", back: "ihr schenktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schenken", back: "sie schenkten", lesson: " B1.1" },
       
       
{ front: "präteritum ich raten", back: "ich riet", lesson: " B1.1" },	{ front: "präteritum du raten", back: "du rietest", lesson: " B1.1" },	{ front: "präteritum  sie raten", back: "sie riet", lesson: " B1.1" },	{ front: "präteritum wir raten", back: "wir rieten", lesson: " B1.1" },	{ front: "präteritum ihr raten", back: "ihr rietet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) raten", back: "sie rieten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich probieren", back: "ich probierte", lesson: " B1.1" },	{ front: "präteritum du probieren", back: "du probiertest", lesson: " B1.1" },	{ front: "präteritum  sie probieren", back: "sie probierte", lesson: " B1.1" },	{ front: "präteritum wir probieren", back: "wir probierten", lesson: " B1.1" },	{ front: "präteritum ihr probieren", back: "ihr probiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) probieren", back: "sie probierten", lesson: " B1.1" },
       
{ front: "präteritum ich liefern", back: "ich lieferte", lesson: " B1.1" },	{ front: "präteritum du liefern", back: "du liefest", lesson: " B1.1" },	{ front: "präteritum  er liefern", back: "er lieferte", lesson: " B1.1" },	{ front: "präteritum wir liefern", back: "wir lieferten", lesson: " B1.1" },	{ front: "präteritum ihr liefern", back: "ihr lieferte", lesson: " B1.1" },	{ front: "präteritum sie(pl.) liefern", back: "sie lieferten", lesson: " B1.1" },
       
       
{ front: "präteritum ich nennen", back: "ich nannte", lesson: " B1.1" },	{ front: "präteritum du nennen", back: "du nanntest", lesson: " B1.1" },	{ front: "präteritum  er nennen", back: "er nannte", lesson: " B1.1" },	{ front: "präteritum wir nennen", back: "wir nannten", lesson: " B1.1" },	{ front: "präteritum ihr nennen", back: "ihr nanntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) nennen", back: "sie nannten", lesson: " B1.1" },
       
{ front: "präteritum ich ausdrucken", back: "ich druckte aus", lesson: " B1.1" },	{ front: "präteritum du ausdrucken", back: "du drucktest aus", lesson: " B1.1" },	{ front: "präteritum  es ausdrucken", back: "es druckte aus", lesson: " B1.1" },	{ front: "präteritum wir ausdrucken", back: "wir druckten aus", lesson: " B1.1" },	{ front: "präteritum ihr ausdrucken", back: "ihr drucktet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausdrucken", back: "sie druckten aus", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich grüßen", back: "ich grüßte", lesson: " B1.1" },	{ front: "präteritum du grüßen", back: "du grüßtest", lesson: " B1.1" },	{ front: "präteritum  sie grüßen", back: "sie grüßte", lesson: " B1.1" },	{ front: "präteritum wir grüßen", back: "wir grüßten", lesson: " B1.1" },	{ front: "präteritum ihr grüßen", back: "ihr grüßtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) grüßen", back: "sie grüßten", lesson: " B1.1" },
       
{ front: "präteritum ich weinen", back: "ich weinte", lesson: " B1.1" },	{ front: "präteritum du weinen", back: "du weintest", lesson: " B1.1" },	{ front: "präteritum  er weinen", back: "er weinte", lesson: " B1.1" },	{ front: "präteritum wir weinen", back: "wir weinten", lesson: " B1.1" },	{ front: "präteritum ihr weinen", back: "ihr weintet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) weinen", back: "sie weinten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich treten", back: "ich trat", lesson: " B1.1" },	{ front: "präteritum du treten", back: "du tratst", lesson: " B1.1" },	{ front: "präteritum  sie treten", back: "sie trat", lesson: " B1.1" },	{ front: "präteritum wir treten", back: "wir traten", lesson: " B1.1" },	{ front: "präteritum ihr treten", back: "ihr tratet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) treten", back: "sie traten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich tragen", back: "ich trug", lesson: " B1.1" },	{ front: "präteritum du tragen", back: "du trugst", lesson: " B1.1" },	{ front: "präteritum  sie tragen", back: "sie trug", lesson: " B1.1" },	{ front: "präteritum wir tragen", back: "wir trugen", lesson: " B1.1" },	{ front: "präteritum ihr tragen", back: "ihr trugt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tragen", back: "sie trugen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich ausgeben", back: "ich gab aus", lesson: " B1.1" },	{ front: "präteritum du ausgeben", back: "du gabst aus", lesson: " B1.1" },	{ front: "präteritum  es ausgeben", back: "es gab aus", lesson: " B1.1" },	{ front: "präteritum wir ausgeben", back: "wir gaben aus", lesson: " B1.1" },	{ front: "präteritum ihr ausgeben", back: "ihr gabt aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausgeben", back: "sie gaben aus", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich sich unterhalten", back: "ich unterhielt mich", lesson: " B1.1" },	{ front: "präteritum du sich unterhalten", back: "du unterhieltest dich", lesson: " B1.1" },	{ front: "präteritum  er sich unterhalten", back: "er unterhielt sich", lesson: " B1.1" },	{ front: "präteritum wir sich unterhalten", back: "wir unterhielten uns", lesson: " B1.1" },	{ front: "präteritum ihr sich unterhalten", back: "ihr unterhielt euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich unterhalten", back: "sie unterhielten sich", lesson: " B1.1" },
{ front: "präteritum ich dekorieren", back: "ich dekorierte", lesson: " B1.1" },	{ front: "präteritum du dekorieren", back: "du dekoriertest", lesson: " B1.1" },	{ front: "präteritum  sie dekorieren", back: "sie dekorierte", lesson: " B1.1" },	{ front: "präteritum wir dekorieren", back: "wir dekorierten", lesson: " B1.1" },	{ front: "präteritum ihr dekorieren", back: "ihr dekoriertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) dekorieren", back: "sie dekorierten", lesson: " B1.1" },
       
{ front: "präteritum ich überzeugen", back: "ich überzeugte", lesson: " B1.1" },	{ front: "präteritum du überzeugen", back: "du überzeugtest", lesson: " B1.1" },	{ front: "präteritum  er überzeugen", back: "er überzeugte", lesson: " B1.1" },	{ front: "präteritum wir überzeugen", back: "wir überzeugten", lesson: " B1.1" },	{ front: "präteritum ihr überzeugen", back: "ihr überzeugtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) überzeugen", back: "sie überzeugten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich mitspielen", back: "ich spielte mit", lesson: " B1.1" },	{ front: "präteritum du mitspielen", back: "du spieltest mit", lesson: " B1.1" },	{ front: "präteritum  sie mitspielen", back: "sie spielte mit", lesson: " B1.1" },	{ front: "präteritum wir mitspielen", back: "wir spielten mit", lesson: " B1.1" },	{ front: "präteritum ihr mitspielen", back: "ihr spieltet mit", lesson: " B1.1" },	{ front: "präteritum sie(pl.) mitspielen", back: "sie spielten mit", lesson: " B1.1" },
       
{ front: "präteritum ich ausgehen", back: "ich ging aus", lesson: " B1.1" },	{ front: "präteritum du ausgehen", back: "du gingst aus", lesson: " B1.1" },	{ front: "präteritum  er ausgehen", back: "er ging aus", lesson: " B1.1" },	{ front: "präteritum wir ausgehen", back: "wir gingen aus", lesson: " B1.1" },	{ front: "präteritum ihr ausgehen", back: "ihr gingt aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausgehen", back: "sie gingen aus", lesson: " B1.1" },
{ front: "präteritum ich verbringen", back: "ich verbrachte", lesson: " B1.1" },	{ front: "präteritum du verbringen", back: "du verbrachtest", lesson: " B1.1" },	{ front: "präteritum  sie verbringen", back: "sie verbrachte", lesson: " B1.1" },	{ front: "präteritum wir verbringen", back: "wir verbrachten", lesson: " B1.1" },	{ front: "präteritum ihr verbringen", back: "ihr verbrachtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verbringen", back: "sie verbrachten", lesson: " B1.1" },
       
{ front: "präteritum ich unternehmen", back: "ich unternahm", lesson: " B1.1" },	{ front: "präteritum du unternehmen", back: "du unternahmst", lesson: " B1.1" },	{ front: "präteritum  er unternehmen", back: "er unternahm", lesson: " B1.1" },	{ front: "präteritum wir unternehmen", back: "wir unternahmen", lesson: " B1.1" },	{ front: "präteritum ihr unternehmen", back: "ihr unternahmt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) unternehmen", back: "sie unternahmen", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich erkältet sein", back: "ich war erkältet", lesson: " B1.1" },	{ front: "präteritum du erkältet sein", back: "du warst erkältet", lesson: " B1.1" },	{ front: "präteritum  er erkältet sein", back: "er war erkältet", lesson: " B1.1" },	{ front: "präteritum wir erkältet sein", back: "wir waren erkältet", lesson: " B1.1" },	{ front: "präteritum ihr erkältet sein", back: "ihr wart erkältet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erkältet sein", back: "sie waren erkältet", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich reagieren", back: "ich reagierte", lesson: " B1.1" },	{ front: "präteritum du reagieren", back: "du reagiertest", lesson: " B1.1" },	{ front: "präteritum  er reagieren", back: "er reagierte", lesson: " B1.1" },	{ front: "präteritum wir reagieren", back: "wir reagierten", lesson: " B1.1" },	{ front: "präteritum ihr reagieren", back: "ihr reagiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reagieren", back: "sie reagierten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich auftreten", back: "ich trat auf", lesson: " B1.1" },	{ front: "präteritum du auftreten", back: "du tratst auf", lesson: " B1.1" },	{ front: "präteritum  er auftreten", back: "er trat auf", lesson: " B1.1" },	{ front: "präteritum wir auftreten", back: "wir traten auf", lesson: " B1.1" },	{ front: "präteritum ihr auftreten", back: "ihr tratet auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) auftreten", back: "sie traten auf", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich eine Wanderung machen", back: "ich machte eine Wanderung", lesson: " B1.1" },	{ front: "präteritum du eine Wanderung machen", back: "du machtest eine Wanderung", lesson: " B1.1" },	{ front: "präteritum  sie eine Wanderung machen", back: "sie machte eine Wanderung", lesson: " B1.1" },	{ front: "präteritum wir eine Wanderung machen", back: "wir machten eine Wanderung", lesson: " B1.1" },	{ front: "präteritum ihr eine Wanderung machen", back: "ihr machtet eine Wanderung", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eine Wanderung machen", back: "sie machten eine Wanderung", lesson: " B1.1" },
{ front: "präteritum ich machen", back: "ich machte", lesson: " B1.1" },	{ front: "präteritum du machen", back: "du machtest", lesson: " B1.1" },	{ front: "präteritum  es machen", back: "es machte", lesson: " B1.1" },	{ front: "präteritum wir machen", back: "wir machten", lesson: " B1.1" },	{ front: "präteritum ihr machen", back: "ihr machtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) machen", back: "sie machten", lesson: " B1.1" },
{ front: "präteritum ich in die Oper gehen", back: "ich ging in die Oper", lesson: " B1.1" },	{ front: "präteritum du in die Oper gehen", back: "du gingst in die Oper", lesson: " B1.1" },	{ front: "präteritum  er in die Oper gehen", back: "er ging in die Oper", lesson: " B1.1" },	{ front: "präteritum wir in die Oper gehen", back: "wir gingen in die Oper", lesson: " B1.1" },	{ front: "präteritum ihr in die Oper gehen", back: "ihr gingt in die Oper", lesson: " B1.1" },	{ front: "präteritum sie(pl.) in die Oper gehen", back: "sie gingen in die Oper", lesson: " B1.1" },
{ front: "präteritum ich in eine Bar", back: "ich ging in eine Bar", lesson: " B1.1" },	{ front: "präteritum du in eine Bar", back: "du gingst in eine Bar", lesson: " B1.1" },	{ front: "präteritum  sie in eine Bar", back: "sie ging in eine Bar", lesson: " B1.1" },	{ front: "präteritum wir in eine Bar", back: "wir gingen in eine Bar", lesson: " B1.1" },	{ front: "präteritum ihr in eine Bar", back: "ihr gingt in eine Bar", lesson: " B1.1" },	{ front: "präteritum sie(pl.) in eine Bar", back: "sie gingen in eine Bar", lesson: " B1.1" },
{ front: "präteritum ich eine Rundfahrt machen", back: "ich machte eine Rundfahrt", lesson: " B1.1" },	{ front: "präteritum du eine Rundfahrt machen", back: "du machtest eine Rundfahrt", lesson: " B1.1" },	{ front: "präteritum  es eine Rundfahrt machen", back: "es machte eine Rundfahrt", lesson: " B1.1" },	{ front: "präteritum wir eine Rundfahrt machen", back: "wir machten eine Rundfahrt", lesson: " B1.1" },	{ front: "präteritum ihr eine Rundfahrt machen", back: "ihr machtet eine Rundfahrt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eine Rundfahrt machen", back: "sie machten eine Rundfahrt", lesson: " B1.1" },
       
{ front: "präteritum ich auf einen Flohmarkt gehen", back: "ich ging auf einen Flohmarkt", lesson: " B1.1" },	{ front: "präteritum du auf einen Flohmarkt gehen", back: "du gingst auf einen Flohmarkt", lesson: " B1.1" },	{ front: "präteritum  sie auf einen Flohmarkt gehen", back: "sie ging auf einen Flohmarkt", lesson: " B1.1" },	{ front: "präteritum wir auf einen Flohmarkt gehen", back: "wir gingen auf einen Flohmarkt", lesson: " B1.1" },	{ front: "präteritum ihr auf einen Flohmarkt gehen", back: "ihr gingt auf einen Flohmarkt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) auf einen Flohmarkt gehen", back: "sie gingen auf einen Flohmarkt", lesson: " B1.1" },
{ front: "präteritum ich in die Disko gehen", back: "ich ging in die Disko", lesson: " B1.1" },	{ front: "präteritum du in die Disko gehen", back: "du gingst in die Disko", lesson: " B1.1" },	{ front: "präteritum  es in die Disko gehen", back: "es ging in die Disko", lesson: " B1.1" },	{ front: "präteritum wir in die Disko gehen", back: "wir gingen in die Disko", lesson: " B1.1" },	{ front: "präteritum ihr in die Disko gehen", back: "ihr gingt in die Disko", lesson: " B1.1" },	{ front: "präteritum sie(pl.) in die Disko gehen", back: "sie gingen in die Disko", lesson: " B1.1" },
{ front: "präteritum ich an den See fahren", back: "ich fuhr an den See", lesson: " B1.1" },	{ front: "präteritum du an den See fahren", back: "du fuhrst an den See", lesson: " B1.1" },	{ front: "präteritum  er an den See fahren", back: "er fuhr an den See", lesson: " B1.1" },	{ front: "präteritum wir an den See fahren", back: "wir fuhren an den See", lesson: " B1.1" },	{ front: "präteritum ihr an den See fahren", back: "ihr fuhrt an den See", lesson: " B1.1" },	{ front: "präteritum sie(pl.) an den See fahren", back: "sie fuhren an den See", lesson: " B1.1" },
{ front: "präteritum ich einrichten", back: "ich richtete ein", lesson: " B1.1" },	{ front: "präteritum du einrichten", back: "du richtetest ein", lesson: " B1.1" },	{ front: "präteritum  sie einrichten", back: "sie richtete ein", lesson: " B1.1" },	{ front: "präteritum wir einrichten", back: "wir richteten ein", lesson: " B1.1" },	{ front: "präteritum ihr einrichten", back: "ihr richtetet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einrichten", back: "sie richteten ein", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich gucken", back: "ich guckte", lesson: " B1.1" },	{ front: "präteritum du gucken", back: "du gucktest", lesson: " B1.1" },	{ front: "präteritum  er gucken", back: "er guckte", lesson: " B1.1" },	{ front: "präteritum wir gucken", back: "wir guckten", lesson: " B1.1" },	{ front: "präteritum ihr gucken", back: "ihr gucktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) gucken", back: "sie guckten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich vorschlagen", back: "ich schlug vor", lesson: " B1.1" },	{ front: "präteritum du vorschlagen", back: "du schlugst vor", lesson: " B1.1" },	{ front: "präteritum  sie vorschlagen", back: "sie schlug vor", lesson: " B1.1" },	{ front: "präteritum wir vorschlagen", back: "wir schlugen vor", lesson: " B1.1" },	{ front: "präteritum ihr vorschlagen", back: "ihr schlugt vor", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vorschlagen", back: "sie schlugen vor", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich aufnehmen", back: "ich nahm auf", lesson: " B1.1" },	{ front: "präteritum du aufnehmen", back: "du nahmst auf", lesson: " B1.1" },	{ front: "präteritum  sie aufnehmen", back: "sie nahm auf", lesson: " B1.1" },	{ front: "präteritum wir aufnehmen", back: "wir nahmen auf", lesson: " B1.1" },	{ front: "präteritum ihr aufnehmen", back: "ihr nahmt auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) aufnehmen", back: "sie nahmen auf", lesson: " B1.1" },
{ front: "präteritum ich sparen", back: "ich sparte", lesson: " B1.1" },	{ front: "präteritum du sparen", back: "du spartest", lesson: " B1.1" },	{ front: "präteritum  es sparen", back: "es sparte", lesson: " B1.1" },	{ front: "präteritum wir sparen", back: "wir sparten", lesson: " B1.1" },	{ front: "präteritum ihr sparen", back: "ihr spartet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sparen", back: "sie sparten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich verschicken", back: "ich verschickte", lesson: " B1.1" },	{ front: "präteritum du verschicken", back: "du verschicktest", lesson: " B1.1" },	{ front: "präteritum  sie verschicken", back: "sie verschickte", lesson: " B1.1" },	{ front: "präteritum wir verschicken", back: "wir verschickten", lesson: " B1.1" },	{ front: "präteritum ihr verschicken", back: "ihr verschicktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verschicken", back: "sie verschickten", lesson: " B1.1" },
{ front: "präteritum ich versenden", back: "ich versendete", lesson: " B1.1" },	{ front: "präteritum du versenden", back: "du versendetest", lesson: " B1.1" },	{ front: "präteritum  es versenden", back: "es versendete", lesson: " B1.1" },	{ front: "präteritum wir versenden", back: "wir versendeten", lesson: " B1.1" },	{ front: "präteritum ihr versenden", back: "ihr versendetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) versenden", back: "sie versendeten", lesson: " B1.1" },
       
       
{ front: "präteritum ich transportieren", back: "ich transportierte", lesson: " B1.1" },	{ front: "präteritum du transportieren", back: "du transportiertest", lesson: " B1.1" },	{ front: "präteritum  es transportieren", back: "es transportierte", lesson: " B1.1" },	{ front: "präteritum wir transportieren", back: "wir transportierten", lesson: " B1.1" },	{ front: "präteritum ihr transportieren", back: "ihr transportiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) transportieren", back: "sie transportierten", lesson: " B1.1" },
       
{ front: "präteritum ich wiegen", back: "ich wog", lesson: " B1.1" },	{ front: "präteritum du wiegen", back: "du wogst", lesson: " B1.1" },	{ front: "präteritum  sie wiegen", back: "sie wog", lesson: " B1.1" },	{ front: "präteritum wir wiegen", back: "wir wogen", lesson: " B1.1" },	{ front: "präteritum ihr wiegen", back: "ihr wogt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wiegen", back: "sie wogen", lesson: " B1.1" },
{ front: "präteritum ich verpacken", back: "ich verpackte", lesson: " B1.1" },	{ front: "präteritum du verpacken", back: "du verpacktest", lesson: " B1.1" },	{ front: "präteritum  es verpacken", back: "es verpackte", lesson: " B1.1" },	{ front: "präteritum wir verpacken", back: "wir verpackten", lesson: " B1.1" },	{ front: "präteritum ihr verpacken", back: "ihr verpacktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verpacken", back: "sie verpackten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich senden", back: "ich sendete", lesson: " B1.1" },	{ front: "präteritum du senden", back: "du sendetest", lesson: " B1.1" },	{ front: "präteritum  er senden", back: "er sendete", lesson: " B1.1" },	{ front: "präteritum wir senden", back: "wir sendeten", lesson: " B1.1" },	{ front: "präteritum ihr senden", back: "ihr sendetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) senden", back: "sie sendeten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich frieren", back: "ich fror", lesson: " B1.1" },	{ front: "präteritum du frieren", back: "du frorst", lesson: " B1.1" },	{ front: "präteritum  er frieren", back: "er fror", lesson: " B1.1" },	{ front: "präteritum wir frieren", back: "wir froren", lesson: " B1.1" },	{ front: "präteritum ihr frieren", back: "ihr frort", lesson: " B1.1" },	{ front: "präteritum sie(pl.) frieren", back: "sie froren", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich testen", back: "ich testete", lesson: " B1.1" },	{ front: "präteritum du testen", back: "du testetest", lesson: " B1.1" },	{ front: "präteritum  es testen", back: "es testete", lesson: " B1.1" },	{ front: "präteritum wir testen", back: "wir testeten", lesson: " B1.1" },	{ front: "präteritum ihr testen", back: "ihr testetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) testen", back: "sie testeten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich melden (sich)", back: "ich meldete mich", lesson: " B1.1" },	{ front: "präteritum du melden (sich)", back: "du meldetest dich", lesson: " B1.1" },	{ front: "präteritum  es melden (sich)", back: "es meldete sich", lesson: " B1.1" },	{ front: "präteritum wir melden (sich)", back: "wir meldeten uns", lesson: " B1.1" },	{ front: "präteritum ihr melden (sich)", back: "ihr meldetet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) melden (sich)", back: "sie meldeten sich", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
     { front: "präteritum ihr der Chat", back: "", lesson: " B1.1" },	
       
       
       
{ front: "präteritum ich anschauen", back: "ich schaute an", lesson: " B1.1" },	{ front: "präteritum du anschauen", back: "du schautest an", lesson: " B1.1" },	{ front: "präteritum  sie anschauen", back: "sie schaute an", lesson: " B1.1" },	{ front: "präteritum wir anschauen", back: "wir schauten an", lesson: " B1.1" },	{ front: "präteritum ihr anschauen", back: "ihr schautet an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) anschauen", back: "sie schauten an", lesson: " B1.1" },
{ front: "präteritum ich wegfahren", back: "ich fuhr weg", lesson: " B1.1" },	{ front: "präteritum du wegfahren", back: "du fuhrst weg", lesson: " B1.1" },	{ front: "präteritum  es wegfahren", back: "es er fuhr weg", lesson: " B1.1" },	{ front: "präteritum wir wegfahren", back: "wir fuhren weg", lesson: " B1.1" },	{ front: "präteritum ihr wegfahren", back: "ihr fuhrt weg", lesson: " B1.1" },	{ front: "präteritum sie(pl.) wegfahren", back: "sie fuhren weg", lesson: " B1.1" },
{ front: "präteritum ich springen", back: "ich sprang", lesson: " B1.1" },	{ front: "präteritum du springen", back: "du sprangst", lesson: " B1.1" },	{ front: "präteritum  er springen", back: "er er sprang", lesson: " B1.1" },	{ front: "präteritum wir springen", back: "wir sprangen", lesson: " B1.1" },	{ front: "präteritum ihr springen", back: "ihr sprangt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) springen", back: "sie sprangen", lesson: " B1.1" },
{ front: "präteritum ich tanken", back: "ich tankte", lesson: " B1.1" },	{ front: "präteritum du tanken", back: "du tanktest", lesson: " B1.1" },	{ front: "präteritum  sie tanken", back: "sie er tankte", lesson: " B1.1" },	{ front: "präteritum wir tanken", back: "wir tankten", lesson: " B1.1" },	{ front: "präteritum ihr tanken", back: "ihr tanktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tanken", back: "sie tankten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich abbiegen", back: "ich bog ab", lesson: " B1.1" },	{ front: "präteritum du abbiegen", back: "du bogst ab", lesson: " B1.1" },	{ front: "präteritum  es abbiegen", back: "es er bog ab", lesson: " B1.1" },	{ front: "präteritum wir abbiegen", back: "wir bogen ab", lesson: " B1.1" },	{ front: "präteritum ihr abbiegen", back: "ihr bogt ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abbiegen", back: "sie bogen ab", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich stürzen", back: "ich stürzte", lesson: " B1.1" },	{ front: "präteritum du stürzen", back: "du stürztest", lesson: " B1.1" },	{ front: "präteritum  es stürzen", back: "es er stürzte", lesson: " B1.1" },	{ front: "präteritum wir stürzen", back: "wir stürzten", lesson: " B1.1" },	{ front: "präteritum ihr stürzen", back: "ihr stürztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stürzen", back: "sie stürzten", lesson: " B1.1" },
       
       
{ front: "präteritum ich kleben", back: "ich klebte", lesson: " B1.1" },	{ front: "präteritum du kleben", back: "du klebtest", lesson: " B1.1" },	{ front: "präteritum  es kleben", back: "es er klebte", lesson: " B1.1" },	{ front: "präteritum wir kleben", back: "wir klebten", lesson: " B1.1" },	{ front: "präteritum ihr kleben", back: "ihr klebtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kleben", back: "sie klebten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich stehen bleiben", back: "ich blieb stehen", lesson: " B1.1" },	{ front: "präteritum du stehen bleiben", back: "du bliebst stehen", lesson: " B1.1" },	{ front: "präteritum  er stehen bleiben", back: "er er blieb stehen", lesson: " B1.1" },	{ front: "präteritum wir stehen bleiben", back: "wir blieben stehen", lesson: " B1.1" },	{ front: "präteritum ihr stehen bleiben", back: "ihr bliebt stehen", lesson: " B1.1" },	{ front: "präteritum sie(pl.) stehen bleiben", back: "sie blieben stehen", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich überholen", back: "ich überholte", lesson: " B1.1" },	{ front: "präteritum du überholen", back: "du überholtest", lesson: " B1.1" },	{ front: "präteritum  es überholen", back: "es er überholte", lesson: " B1.1" },	{ front: "präteritum wir überholen", back: "wir überholten", lesson: " B1.1" },	{ front: "präteritum ihr überholen", back: "ihr überholtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) überholen", back: "sie überholten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sorgen", back: "ich sorgte", lesson: " B1.1" },	{ front: "präteritum du sorgen", back: "du sorgtest", lesson: " B1.1" },	{ front: "präteritum  er sorgen", back: "er er sorgte", lesson: " B1.1" },	{ front: "präteritum wir sorgen", back: "wir sorgten", lesson: " B1.1" },	{ front: "präteritum ihr sorgen", back: "ihr sorgtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sorgen", back: "sie sorgten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich vermeiden", back: "ich vermied", lesson: " B1.1" },	{ front: "präteritum du vermeiden", back: "du vermiedest", lesson: " B1.1" },	{ front: "präteritum  er vermeiden", back: "er er vermied", lesson: " B1.1" },	{ front: "präteritum wir vermeiden", back: "wir vermieden", lesson: " B1.1" },	{ front: "präteritum ihr vermeiden", back: "ihr vermiedet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) vermeiden", back: "sie vermieden", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich versprechen", back: "ich versprach", lesson: " B1.1" },	{ front: "präteritum du versprechen", back: "du versprachst", lesson: " B1.1" },	{ front: "präteritum  es versprechen", back: "es er versprach", lesson: " B1.1" },	{ front: "präteritum wir versprechen", back: "wir versprachen", lesson: " B1.1" },	{ front: "präteritum ihr versprechen", back: "ihr verspracht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) versprechen", back: "sie versprachen", lesson: " B1.1" },
       
       
{ front: "präteritum ich verhindern", back: "ich verhinderte", lesson: " B1.1" },	{ front: "präteritum du verhindern", back: "du verhinderstest", lesson: " B1.1" },	{ front: "präteritum  es verhindern", back: "es er verhinderte", lesson: " B1.1" },	{ front: "präteritum wir verhindern", back: "wir verhinderten", lesson: " B1.1" },	{ front: "präteritum ihr verhindern", back: "ihr verhindertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verhindern", back: "sie verhinderten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich starten", back: "ich startete", lesson: " B1.1" },	{ front: "präteritum du starten", back: "du startetest", lesson: " B1.1" },	{ front: "präteritum  er starten", back: "er er startete", lesson: " B1.1" },	{ front: "präteritum wir starten", back: "wir starteten", lesson: " B1.1" },	{ front: "präteritum ihr starten", back: "ihr startetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) starten", back: "sie starteten", lesson: " B1.1" },
{ front: "präteritum ich landen", back: "ich landete", lesson: " B1.1" },	{ front: "präteritum du landen", back: "du landetest", lesson: " B1.1" },	{ front: "präteritum  sie landen", back: "sie er landete", lesson: " B1.1" },	{ front: "präteritum wir landen", back: "wir landeten", lesson: " B1.1" },	{ front: "präteritum ihr landen", back: "ihr landetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) landen", back: "sie landeten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich auffallen", back: "ich fiel auf", lesson: " B1.1" },	{ front: "präteritum du auffallen", back: "du fielst auf", lesson: " B1.1" },	{ front: "präteritum  es auffallen", back: "es er fiel auf", lesson: " B1.1" },	{ front: "präteritum wir auffallen", back: "wir fielen auf", lesson: " B1.1" },	{ front: "präteritum ihr auffallen", back: "ihr fielt auf", lesson: " B1.1" },	{ front: "präteritum sie(pl.) auffallen", back: "sie fielen auf", lesson: " B1.1" },
       
       
{ front: "präteritum ich hupen", back: "ich hupte", lesson: " B1.1" },	{ front: "präteritum du hupen", back: "du huptest", lesson: " B1.1" },	{ front: "präteritum  es hupen", back: "es er hupte", lesson: " B1.1" },	{ front: "präteritum wir hupen", back: "wir hupten", lesson: " B1.1" },	{ front: "präteritum ihr hupen", back: "ihr huptet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) hupen", back: "sie hupten", lesson: " B1.1" },
{ front: "präteritum ich bremsen", back: "ich bremste", lesson: " B1.1" },	{ front: "präteritum du bremsen", back: "du bremstest", lesson: " B1.1" },	{ front: "präteritum  er bremsen", back: "er er bremste", lesson: " B1.1" },	{ front: "präteritum wir bremsen", back: "wir bremsten", lesson: " B1.1" },	{ front: "präteritum ihr bremsen", back: "ihr bremstet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) bremsen", back: "sie bremsten", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich reden", back: "ich redete", lesson: " B1.1" },	{ front: "präteritum du reden", back: "du redetest", lesson: " B1.1" },	{ front: "präteritum  es reden", back: "es er redete", lesson: " B1.1" },	{ front: "präteritum wir reden", back: "wir redeten", lesson: " B1.1" },	{ front: "präteritum ihr reden", back: "ihr redetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) reden", back: "sie redeten", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich besichtigen", back: "ich besichtigte", lesson: " B1.1" },	{ front: "präteritum du besichtigen", back: "du besichtigtest", lesson: " B1.1" },	{ front: "präteritum  es besichtigen", back: "es er besichtigte", lesson: " B1.1" },	{ front: "präteritum wir besichtigen", back: "wir besichtigten", lesson: " B1.1" },	{ front: "präteritum ihr besichtigen", back: "ihr besichtigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) besichtigen", back: "sie besichtigten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich baden", back: "ich badete", lesson: " B1.1" },	{ front: "präteritum du baden", back: "du badetest", lesson: " B1.1" },	{ front: "präteritum  es baden", back: "es er badete", lesson: " B1.1" },	{ front: "präteritum wir baden", back: "wir badeten", lesson: " B1.1" },	{ front: "präteritum ihr baden", back: "ihr badetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) baden", back: "sie badeten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich buchen", back: "ich buchte", lesson: " B1.1" },	{ front: "präteritum du buchen", back: "du buchtest", lesson: " B1.1" },	{ front: "präteritum  er buchen", back: "er er buchte", lesson: " B1.1" },	{ front: "präteritum wir buchen", back: "wir buchten", lesson: " B1.1" },	{ front: "präteritum ihr buchen", back: "ihr buchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) buchen", back: "sie buchten", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich surfen", back: "ich surfte", lesson: " B1.1" },	{ front: "präteritum du surfen", back: "du surftest", lesson: " B1.1" },	{ front: "präteritum  sie surfen", back: "sie er surfte", lesson: " B1.1" },	{ front: "präteritum wir surfen", back: "wir surften", lesson: " B1.1" },	{ front: "präteritum ihr surfen", back: "ihr surftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) surfen", back: "sie surften", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich einpacken", back: "ich packte ein", lesson: " B1.1" },	{ front: "präteritum du einpacken", back: "du packtest ein", lesson: " B1.1" },	{ front: "präteritum  sie einpacken", back: "sie er packte ein", lesson: " B1.1" },	{ front: "präteritum wir einpacken", back: "wir packten ein", lesson: " B1.1" },	{ front: "präteritum ihr einpacken", back: "ihr packtet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einpacken", back: "sie packten ein", lesson: " B1.1" },
{ front: "präteritum ich einigen", back: "ich einigte", lesson: " B1.1" },	{ front: "präteritum du einigen", back: "du einigtest", lesson: " B1.1" },	{ front: "präteritum  es einigen", back: "es er einigte", lesson: " B1.1" },	{ front: "präteritum wir einigen", back: "wir einigten", lesson: " B1.1" },	{ front: "präteritum ihr einigen", back: "ihr einigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einigen", back: "sie einigten", lesson: " B1.1" },
{ front: "präteritum ich übernachten", back: "ich übernachtete", lesson: " B1.1" },	{ front: "präteritum du übernachten", back: "du übernachtetest", lesson: " B1.1" },	{ front: "präteritum  er übernachten", back: "er er übernachtete", lesson: " B1.1" },	{ front: "präteritum wir übernachten", back: "wir übernachteten", lesson: " B1.1" },	{ front: "präteritum ihr übernachten", back: "ihr übernachtetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) übernachten", back: "sie übernachteten", lesson: " B1.1" },
{ front: "präteritum ich dagegen sein", back: "ich war dagegen", lesson: " B1.1" },	{ front: "präteritum du dagegen sein", back: "du warst dagegen", lesson: " B1.1" },	{ front: "präteritum  sie dagegen sein", back: "sie er war dagegen", lesson: " B1.1" },	{ front: "präteritum wir dagegen sein", back: "wir waren dagegen", lesson: " B1.1" },	{ front: "präteritum ihr dagegen sein", back: "ihr wart dagegen", lesson: " B1.1" },	{ front: "präteritum sie(pl.) dagegen sein", back: "sie waren dagegen", lesson: " B1.1" },
{ front: "präteritum ich dafür sein", back: "ich war dafür", lesson: " B1.1" },	{ front: "präteritum du dafür sein", back: "du warst dafür", lesson: " B1.1" },	{ front: "präteritum  es dafür sein", back: "es er war dafür", lesson: " B1.1" },	{ front: "präteritum wir dafür sein", back: "wir waren dafür", lesson: " B1.1" },	{ front: "präteritum ihr dafür sein", back: "ihr wart dafür", lesson: " B1.1" },	{ front: "präteritum sie(pl.) dafür sein", back: "sie waren dafür", lesson: " B1.1" },
{ front: "präteritum ich annehmen", back: "ich nahm an", lesson: " B1.1" },	{ front: "präteritum du annehmen", back: "du nahmst an", lesson: " B1.1" },	{ front: "präteritum  er annehmen", back: "er er nahm an", lesson: " B1.1" },	{ front: "präteritum wir annehmen", back: "wir nahmen an", lesson: " B1.1" },	{ front: "präteritum ihr annehmen", back: "ihr nahmt an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) annehmen", back: "sie nahmen an", lesson: " B1.1" },
{ front: "präteritum ich ablehnen", back: "ich lehnte ab", lesson: " B1.1" },	{ front: "präteritum du ablehnen", back: "du lehntest ab", lesson: " B1.1" },	{ front: "präteritum  sie ablehnen", back: "sie er lehnte ab", lesson: " B1.1" },	{ front: "präteritum wir ablehnen", back: "wir lehnten ab", lesson: " B1.1" },	{ front: "präteritum ihr ablehnen", back: "ihr lehntet ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ablehnen", back: "sie lehnten ab", lesson: " B1.1" },
{ front: "präteritum ich faulenzen", back: "ich faulenzte", lesson: " B1.1" },	{ front: "präteritum du faulenzen", back: "du faulenztet", lesson: " B1.1" },	{ front: "präteritum  es faulenzen", back: "es er faulenzte", lesson: " B1.1" },	{ front: "präteritum wir faulenzen", back: "wir faulenzten", lesson: " B1.1" },	{ front: "präteritum ihr faulenzen", back: "ihr faulenztet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) faulenzen", back: "sie faulenzten", lesson: " B1.1" },
       
       
{ front: "präteritum ich Sehenswürdigkeiten ansehen", back: "ich sah an", lesson: " B1.1" },	{ front: "präteritum du Sehenswürdigkeiten ansehen", back: "du sahst an", lesson: " B1.1" },	{ front: "präteritum  es Sehenswürdigkeiten ansehen", back: "es er sah an", lesson: " B1.1" },	{ front: "präteritum wir Sehenswürdigkeiten ansehen", back: "wir sahen an", lesson: " B1.1" },	{ front: "präteritum ihr Sehenswürdigkeiten ansehen", back: "ihr saht an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Sehenswürdigkeiten ansehen", back: "sie sahen an", lesson: " B1.1" },
{ front: "präteritum ich die Altstadt besichtigen", back: "ich besichtigte", lesson: " B1.1" },	{ front: "präteritum du die Altstadt besichtigen", back: "du besichtigtest", lesson: " B1.1" },	{ front: "präteritum  er die Altstadt besichtigen", back: "er er besichtigte", lesson: " B1.1" },	{ front: "präteritum wir die Altstadt besichtigen", back: "wir besichtigten", lesson: " B1.1" },	{ front: "präteritum ihr die Altstadt besichtigen", back: "ihr besichtigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) die Altstadt besichtigen", back: "sie besichtigten", lesson: " B1.1" },
{ front: "präteritum ich eine Ausstellung ansehen", back: "ich sah an", lesson: " B1.1" },	{ front: "präteritum du eine Ausstellung ansehen", back: "du sahst an", lesson: " B1.1" },	{ front: "präteritum  sie eine Ausstellung ansehen", back: "sie er sah an", lesson: " B1.1" },	{ front: "präteritum wir eine Ausstellung ansehen", back: "wir sahen an", lesson: " B1.1" },	{ front: "präteritum ihr eine Ausstellung ansehen", back: "ihr saht an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eine Ausstellung ansehen", back: "sie sahen an", lesson: " B1.1" },
{ front: "präteritum ich eine Stadtführung machen", back: "ich machte", lesson: " B1.1" },	{ front: "präteritum du eine Stadtführung machen", back: "du machtest", lesson: " B1.1" },	{ front: "präteritum  es eine Stadtführung machen", back: "es er machte", lesson: " B1.1" },	{ front: "präteritum wir eine Stadtführung machen", back: "wir machten", lesson: " B1.1" },	{ front: "präteritum ihr eine Stadtführung machen", back: "ihr machtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eine Stadtführung machen", back: "sie machten", lesson: " B1.1" },
       
{ front: "präteritum ich eine Reise buchen", back: "ich buchte", lesson: " B1.1" },	{ front: "präteritum du eine Reise buchen", back: "du buchtest", lesson: " B1.1" },	{ front: "präteritum  sie eine Reise buchen", back: "sie er buchte", lesson: " B1.1" },	{ front: "präteritum wir eine Reise buchen", back: "wir buchten", lesson: " B1.1" },	{ front: "präteritum ihr eine Reise buchen", back: "ihr buchtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eine Reise buchen", back: "sie buchten", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich eröffnen", back: "ich eröffnete", lesson: " B1.1" },	{ front: "präteritum du eröffnen", back: "du eröffnetest", lesson: " B1.1" },	{ front: "präteritum  er eröffnen", back: "er er eröffnete", lesson: " B1.1" },	{ front: "präteritum wir eröffnen", back: "wir eröffneten", lesson: " B1.1" },	{ front: "präteritum ihr eröffnen", back: "ihr eröffnetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) eröffnen", back: "sie eröffneten", lesson: " B1.1" },
{ front: "präteritum ich beantworten", back: "ich beantwortete", lesson: " B1.1" },	{ front: "präteritum du beantworten", back: "du beantwortetest", lesson: " B1.1" },	{ front: "präteritum  sie beantworten", back: "sie er beantwortete", lesson: " B1.1" },	{ front: "präteritum wir beantworten", back: "wir beantworteten", lesson: " B1.1" },	{ front: "präteritum ihr beantworten", back: "ihr beantwortetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beantworten", back: "sie beantworteten", lesson: " B1.1" },
{ front: "präteritum ich besorgen", back: "ich besorgte", lesson: " B1.1" },	{ front: "präteritum du besorgen", back: "du besorgtest", lesson: " B1.1" },	{ front: "präteritum  es besorgen", back: "es er besorgte", lesson: " B1.1" },	{ front: "präteritum wir besorgen", back: "wir besorgten", lesson: " B1.1" },	{ front: "präteritum ihr besorgen", back: "ihr besorgtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) besorgen", back: "sie besorgten", lesson: " B1.1" },
{ front: "präteritum ich verschieben", back: "ich verschob", lesson: " B1.1" },	{ front: "präteritum du verschieben", back: "du verschobst", lesson: " B1.1" },	{ front: "präteritum  er verschieben", back: "er er verschob", lesson: " B1.1" },	{ front: "präteritum wir verschieben", back: "wir verschoben", lesson: " B1.1" },	{ front: "präteritum ihr verschieben", back: "ihr verschobt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verschieben", back: "sie verschoben", lesson: " B1.1" },
       
{ front: "präteritum ich abheben", back: "ich hob ab", lesson: " B1.1" },	{ front: "präteritum du abheben", back: "du hobst ab", lesson: " B1.1" },	{ front: "präteritum  es abheben", back: "es er hob ab", lesson: " B1.1" },	{ front: "präteritum wir abheben", back: "wir hoben ab", lesson: " B1.1" },	{ front: "präteritum ihr abheben", back: "ihr hobt ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) abheben", back: "sie hoben ab", lesson: " B1.1" },
{ front: "präteritum ich kriegen", back: "ich kriegte", lesson: " B1.1" },	{ front: "präteritum du kriegen", back: "du kriegtest", lesson: " B1.1" },	{ front: "präteritum  er kriegen", back: "er er kriegte", lesson: " B1.1" },	{ front: "präteritum wir kriegen", back: "wir kriegten", lesson: " B1.1" },	{ front: "präteritum ihr kriegen", back: "ihr kriegtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kriegen", back: "sie kriegten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich akzeptieren", back: "ich akzeptierte", lesson: " B1.1" },	{ front: "präteritum du akzeptieren", back: "du akzeptiertest", lesson: " B1.1" },	{ front: "präteritum  er akzeptieren", back: "er er akzeptierte", lesson: " B1.1" },	{ front: "präteritum wir akzeptieren", back: "wir akzeptierten", lesson: " B1.1" },	{ front: "präteritum ihr akzeptieren", back: "ihr akzeptiertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) akzeptieren", back: "sie akzeptierten", lesson: " B1.1" },
       
{ front: "präteritum ich erledigen", back: "ich erledigte", lesson: " B1.1" },	{ front: "präteritum du erledigen", back: "du erledigtest", lesson: " B1.1" },	{ front: "präteritum  es erledigen", back: "es er erledigte", lesson: " B1.1" },	{ front: "präteritum wir erledigen", back: "wir erledigten", lesson: " B1.1" },	{ front: "präteritum ihr erledigen", back: "ihr erledigtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erledigen", back: "sie erledigten", lesson: " B1.1" },
{ front: "präteritum ich kontrollieren", back: "ich kontrollierte", lesson: " B1.1" },	{ front: "präteritum du kontrollieren", back: "du kontrolliertest", lesson: " B1.1" },	{ front: "präteritum  er kontrollieren", back: "er er kontrollierte", lesson: " B1.1" },	{ front: "präteritum wir kontrollieren", back: "wir kontrollierten", lesson: " B1.1" },	{ front: "präteritum ihr kontrollieren", back: "ihr kontrolliertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kontrollieren", back: "sie kontrollierten", lesson: " B1.1" },
       
{ front: "präteritum ich kaputtgehen", back: "ich ging kaputt", lesson: " B1.1" },	{ front: "präteritum du kaputtgehen", back: "du gingst kaputt", lesson: " B1.1" },	{ front: "präteritum  es kaputtgehen", back: "es er ging kaputt", lesson: " B1.1" },	{ front: "präteritum wir kaputtgehen", back: "wir gingen kaputt", lesson: " B1.1" },	{ front: "präteritum ihr kaputtgehen", back: "ihr gingt kaputt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) kaputtgehen", back: "sie gingen kaputt", lesson: " B1.1" },
{ front: "präteritum ich erkennen", back: "ich erkannte", lesson: " B1.1" },	{ front: "präteritum du erkennen", back: "du erkanntest", lesson: " B1.1" },	{ front: "präteritum  er erkennen", back: "er er erkannte", lesson: " B1.1" },	{ front: "präteritum wir erkennen", back: "wir erkannten", lesson: " B1.1" },	{ front: "präteritum ihr erkennen", back: "ihr erkanntet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erkennen", back: "sie erkannten", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich überprüfen", back: "ich überprüfte", lesson: " B1.1" },	{ front: "präteritum du überprüfen", back: "du überprüftest", lesson: " B1.1" },	{ front: "präteritum  sie überprüfen", back: "sie er überprüfte", lesson: " B1.1" },	{ front: "präteritum wir überprüfen", back: "wir überprüften", lesson: " B1.1" },	{ front: "präteritum ihr überprüfen", back: "ihr überprüftet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) überprüfen", back: "sie überprüften", lesson: " B1.1" },
{ front: "präteritum ich renovieren", back: "ich renovierte", lesson: " B1.1" },	{ front: "präteritum du renovieren", back: "du renoviertest", lesson: " B1.1" },	{ front: "präteritum  es renovieren", back: "es er renovierte", lesson: " B1.1" },	{ front: "präteritum wir renovieren", back: "wir renovierten", lesson: " B1.1" },	{ front: "präteritum ihr renovieren", back: "ihr renoviertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) renovieren", back: "sie renovierten", lesson: " B1.1" },
{ front: "präteritum ich ändern", back: "ich änderte", lesson: " B1.1" },	{ front: "präteritum du ändern", back: "du ändetest", lesson: " B1.1" },	{ front: "präteritum  er ändern", back: "er er änderte", lesson: " B1.1" },	{ front: "präteritum wir ändern", back: "wir änderten", lesson: " B1.1" },	{ front: "präteritum ihr ändern", back: "ihr ändertet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ändern", back: "sie änderten", lesson: " B1.1" },
{ front: "präteritum ich schneiden (sich)", back: "ich schnitt", lesson: " B1.1" },	{ front: "präteritum du schneiden (sich)", back: "du schnittest", lesson: " B1.1" },	{ front: "präteritum  sie schneiden (sich)", back: "sie er schnitt", lesson: " B1.1" },	{ front: "präteritum wir schneiden (sich)", back: "wir schnitten", lesson: " B1.1" },	{ front: "präteritum ihr schneiden (sich)", back: "ihr schnittet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schneiden (sich)", back: "sie schnitten", lesson: " B1.1" },
{ front: "präteritum ich einzahlen", back: "ich zahlte ein", lesson: " B1.1" },	{ front: "präteritum du einzahlen", back: "du zahltest ein", lesson: " B1.1" },	{ front: "präteritum  es einzahlen", back: "es er zahlte ein", lesson: " B1.1" },	{ front: "präteritum wir einzahlen", back: "wir zahlten ein", lesson: " B1.1" },	{ front: "präteritum ihr einzahlen", back: "ihr zahltet ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) einzahlen", back: "sie zahlten ein", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich tippen", back: "ich tippte", lesson: " B1.1" },	{ front: "präteritum du tippen", back: "du tipptest", lesson: " B1.1" },	{ front: "präteritum  er tippen", back: "er er tippte", lesson: " B1.1" },	{ front: "präteritum wir tippen", back: "wir tippten", lesson: " B1.1" },	{ front: "präteritum ihr tippen", back: "ihr tipptet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) tippen", back: "sie tippten", lesson: " B1.1" },
{ front: "präteritum ich überweisen", back: "ich überwies", lesson: " B1.1" },	{ front: "präteritum du überweisen", back: "du überwiesest", lesson: " B1.1" },	{ front: "präteritum  sie überweisen", back: "sie er überwies", lesson: " B1.1" },	{ front: "präteritum wir überweisen", back: "wir überwiesen", lesson: " B1.1" },	{ front: "präteritum ihr überweisen", back: "ihr überwieset", lesson: " B1.1" },	{ front: "präteritum sie(pl.) überweisen", back: "sie überwiesen", lesson: " B1.1" },
       
       
       
       
       
       
       
{ front: "präteritum ich Geld abheben", back: "ich hob ab", lesson: " B1.1" },	{ front: "präteritum du Geld abheben", back: "du hobst ab", lesson: " B1.1" },	{ front: "präteritum  er Geld abheben", back: "er er hob ab", lesson: " B1.1" },	{ front: "präteritum wir Geld abheben", back: "wir hoben ab", lesson: " B1.1" },	{ front: "präteritum ihr Geld abheben", back: "ihr hobt ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) Geld abheben", back: "sie hoben ab", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich sterben", back: "ich starb", lesson: " B1.1" },	{ front: "präteritum du sterben", back: "du starbst", lesson: " B1.1" },	{ front: "präteritum  es sterben", back: "es er starb", lesson: " B1.1" },	{ front: "präteritum wir sterben", back: "wir starben", lesson: " B1.1" },	{ front: "präteritum ihr sterben", back: "ihr starbt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sterben", back: "sie starben", lesson: " B1.1" },
       
       
{ front: "präteritum ich verlieben (sich)", back: "ich verliebte mich", lesson: " B1.1" },	{ front: "präteritum du verlieben (sich)", back: "du verliebtest dich", lesson: " B1.1" },	{ front: "präteritum  es verlieben (sich)", back: "es er verliebte sich", lesson: " B1.1" },	{ front: "präteritum wir verlieben (sich)", back: "wir verliebten uns", lesson: " B1.1" },	{ front: "präteritum ihr verlieben (sich)", back: "ihr verliebtet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verlieben (sich)", back: "sie verliebten sich", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich ansprechen", back: "ich sprach an", lesson: " B1.1" },	{ front: "präteritum du ansprechen", back: "du sprachst an", lesson: " B1.1" },	{ front: "präteritum  sie ansprechen", back: "sie er sprach an", lesson: " B1.1" },	{ front: "präteritum wir ansprechen", back: "wir sprachen an", lesson: " B1.1" },	{ front: "präteritum ihr ansprechen", back: "ihr spracht an", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ansprechen", back: "sie sprachen an", lesson: " B1.1" },
{ front: "präteritum ich danken", back: "ich dankte", lesson: " B1.1" },	{ front: "präteritum du danken", back: "du danktest", lesson: " B1.1" },	{ front: "präteritum  es danken", back: "es er dankte", lesson: " B1.1" },	{ front: "präteritum wir danken", back: "wir dankten", lesson: " B1.1" },	{ front: "präteritum ihr danken", back: "ihr danktet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) danken", back: "sie dankten", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sein", back: "ich war weg", lesson: " B1.1" },	{ front: "präteritum du sein", back: "du warst weg", lesson: " B1.1" },	{ front: "präteritum  er sein", back: "er er war weg", lesson: " B1.1" },	{ front: "präteritum wir sein", back: "wir waren weg", lesson: " B1.1" },	{ front: "präteritum ihr sein", back: "ihr wart weg", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sein", back: "sie waren weg", lesson: " B1.1" },
       
       
       
       
       
       
{ front: "präteritum ich sich setzen", back: "ich setzte mich", lesson: " B1.1" },	{ front: "präteritum du sich setzen", back: "du setztest dich", lesson: " B1.1" },	{ front: "präteritum  sie sich setzen", back: "sie er setzte sich", lesson: " B1.1" },	{ front: "präteritum wir sich setzen", back: "wir setzten uns", lesson: " B1.1" },	{ front: "präteritum ihr sich setzen", back: "ihr setztet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich setzen", back: "sie setzten sich", lesson: " B1.1" },
       
       
       
       
{ front: "präteritum ich verschwinden", back: "ich verschwand", lesson: " B1.1" },	{ front: "präteritum du verschwinden", back: "du verschwandest", lesson: " B1.1" },	{ front: "präteritum  er verschwinden", back: "er er verschwand", lesson: " B1.1" },	{ front: "präteritum wir verschwinden", back: "wir verschwanden", lesson: " B1.1" },	{ front: "präteritum ihr verschwinden", back: "ihr verschwandet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verschwinden", back: "sie verschwanden", lesson: " B1.1" },
       
       
{ front: "präteritum ich steigen", back: "ich stieg ein", lesson: " B1.1" },	{ front: "präteritum du steigen", back: "du stiegst ein", lesson: " B1.1" },	{ front: "präteritum  er steigen", back: "er er stieg ein", lesson: " B1.1" },	{ front: "präteritum wir steigen", back: "wir stiegen ein", lesson: " B1.1" },	{ front: "präteritum ihr steigen", back: "ihr stiegt ein", lesson: " B1.1" },	{ front: "präteritum sie(pl.) steigen", back: "sie stiegen ein", lesson: " B1.1" },
{ front: "präteritum ich sich wundern", back: "ich wunderte mich", lesson: " B1.1" },	{ front: "präteritum du sich wundern", back: "du wundertest dich", lesson: " B1.1" },	{ front: "präteritum  sie sich wundern", back: "sie er wunderte sich", lesson: " B1.1" },	{ front: "präteritum wir sich wundern", back: "wir wunderten uns", lesson: " B1.1" },	{ front: "präteritum ihr sich wundern", back: "ihr wundertet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich wundern", back: "sie wunderten sich", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich erreichen", back: "ich erreichte", lesson: " B1.1" },	{ front: "präteritum du erreichen", back: "du erreichtest", lesson: " B1.1" },	{ front: "präteritum  es erreichen", back: "es er erreichte", lesson: " B1.1" },	{ front: "präteritum wir erreichen", back: "wir erreichten", lesson: " B1.1" },	{ front: "präteritum ihr erreichen", back: "ihr erreichtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erreichen", back: "sie erreichten", lesson: " B1.1" },
       
{ front: "präteritum ich verwechseln", back: "ich verwechselte", lesson: " B1.1" },	{ front: "präteritum du verwechseln", back: "du verwechseltest", lesson: " B1.1" },	{ front: "präteritum  sie verwechseln", back: "sie er verwechselte", lesson: " B1.1" },	{ front: "präteritum wir verwechseln", back: "wir verwechselten", lesson: " B1.1" },	{ front: "präteritum ihr verwechseln", back: "ihr verwechseltet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) verwechseln", back: "sie verwechselten", lesson: " B1.1" },
       
       
{ front: "präteritum ich sich befinden", back: "ich befand mich", lesson: " B1.1" },	{ front: "präteritum du sich befinden", back: "du befandest dich", lesson: " B1.1" },	{ front: "präteritum  sie sich befinden", back: "sie er befand sich", lesson: " B1.1" },	{ front: "präteritum wir sich befinden", back: "wir befanden uns", lesson: " B1.1" },	{ front: "präteritum ihr sich befinden", back: "ihr befandet euch", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sich befinden", back: "sie befanden sich", lesson: " B1.1" },
{ front: "präteritum ich nachdenken", back: "ich dachte nach", lesson: " B1.1" },	{ front: "präteritum du nachdenken", back: "du dachtest nach", lesson: " B1.1" },	{ front: "präteritum  es nachdenken", back: "es er dachte nach", lesson: " B1.1" },	{ front: "präteritum wir nachdenken", back: "wir dachten nach", lesson: " B1.1" },	{ front: "präteritum ihr nachdenken", back: "ihr dachtet nach", lesson: " B1.1" },	{ front: "präteritum sie(pl.) nachdenken", back: "sie dachten nach", lesson: " B1.1" },
       
{ front: "präteritum ich retten", back: "ich rettete", lesson: " B1.1" },	{ front: "präteritum du retten", back: "du rettetest", lesson: " B1.1" },	{ front: "präteritum  sie retten", back: "sie er rettete", lesson: " B1.1" },	{ front: "präteritum wir retten", back: "wir retteten", lesson: " B1.1" },	{ front: "präteritum ihr retten", back: "ihr rettetet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) retten", back: "sie retteten", lesson: " B1.1" },
{ front: "präteritum ich ausreichen", back: "ich reichte aus", lesson: " B1.1" },	{ front: "präteritum du ausreichen", back: "du reichtest aus", lesson: " B1.1" },	{ front: "präteritum  es ausreichen", back: "es er reichte aus", lesson: " B1.1" },	{ front: "präteritum wir ausreichen", back: "wir reichten aus", lesson: " B1.1" },	{ front: "präteritum ihr ausreichen", back: "ihr reichtet aus", lesson: " B1.1" },	{ front: "präteritum sie(pl.) ausreichen", back: "sie reichten aus", lesson: " B1.1" },
       
{ front: "präteritum ich folgen", back: "ich folgte", lesson: " B1.1" },	{ front: "präteritum du folgen", back: "du folgtest", lesson: " B1.1" },	{ front: "präteritum  sie folgen", back: "sie er folgte", lesson: " B1.1" },	{ front: "präteritum wir folgen", back: "wir folgten", lesson: " B1.1" },	{ front: "präteritum ihr folgen", back: "ihr folgtet", lesson: " B1.1" },	{ front: "präteritum sie(pl.) folgen", back: "sie folgten", lesson: " B1.1" },
       
{ front: "präteritum ich absagen", back: "ich sagte ab", lesson: " B1.1" },	{ front: "präteritum du absagen", back: "du sagtest ab", lesson: " B1.1" },	{ front: "präteritum  er absagen", back: "er er sagte ab", lesson: " B1.1" },	{ front: "präteritum wir absagen", back: "wir sagten ab", lesson: " B1.1" },	{ front: "präteritum ihr absagen", back: "ihr sagtet ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) absagen", back: "sie sagten ab", lesson: " B1.1" },
{ front: "präteritum ich rufen", back: "ich rief", lesson: " B1.1" },	{ front: "präteritum du rufen", back: "du riefst", lesson: " B1.1" },	{ front: "präteritum  sie rufen", back: "sie er rief", lesson: " B1.1" },	{ front: "präteritum wir rufen", back: "wir riefen", lesson: " B1.1" },	{ front: "präteritum ihr rufen", back: "ihr rieft", lesson: " B1.1" },	{ front: "präteritum sie(pl.) rufen", back: "sie riefen", lesson: " B1.1" },
{ front: "präteritum ich absperren", back: "ich sperrte ab", lesson: " B1.1" },	{ front: "präteritum du absperren", back: "du sperrtest ab", lesson: " B1.1" },	{ front: "präteritum  es absperren", back: "es er sperrte ab", lesson: " B1.1" },	{ front: "präteritum wir absperren", back: "wir sperrten ab", lesson: " B1.1" },	{ front: "präteritum ihr absperren", back: "ihr sperrtet ab", lesson: " B1.1" },	{ front: "präteritum sie(pl.) absperren", back: "sie sperrten ab", lesson: " B1.1" },
{ front: "präteritum ich festnehmen", back: "ich nahm fest", lesson: " B1.1" },	{ front: "präteritum du festnehmen", back: "du nahmst fest", lesson: " B1.1" },	{ front: "präteritum  er festnehmen", back: "er er nahm fest", lesson: " B1.1" },	{ front: "präteritum wir festnehmen", back: "wir nahmen fest", lesson: " B1.1" },	{ front: "präteritum ihr festnehmen", back: "ihr nahmt fest", lesson: " B1.1" },	{ front: "präteritum sie(pl.) festnehmen", back: "sie nahmen fest", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich sein", back: "ich war verliebt", lesson: " B1.1" },	{ front: "präteritum du sein", back: "du warst verliebt", lesson: " B1.1" },	{ front: "präteritum  er sein", back: "er er war verliebt", lesson: " B1.1" },	{ front: "präteritum wir sein", back: "wir waren verliebt", lesson: " B1.1" },	{ front: "präteritum ihr sein", back: "ihr wart verliebt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) sein", back: "sie waren verliebt", lesson: " B1.1" },
{ front: "präteritum ich brechen", back: "ich brach", lesson: " B1.1" },	{ front: "präteritum du brechen", back: "du brachst", lesson: " B1.1" },	{ front: "präteritum  sie brechen", back: "sie er brach", lesson: " B1.1" },	{ front: "präteritum wir brechen", back: "wir brachen", lesson: " B1.1" },	{ front: "präteritum ihr brechen", back: "ihr bracht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) brechen", back: "sie brachen", lesson: " B1.1" },
       
       
       
       
       
{ front: "präteritum ich fliehen", back: "ich floh", lesson: " B1.1" },	{ front: "präteritum du fliehen", back: "du flohst", lesson: " B1.1" },	{ front: "präteritum  sie fliehen", back: "sie er floh", lesson: " B1.1" },	{ front: "präteritum wir fliehen", back: "wir flohen", lesson: " B1.1" },	{ front: "präteritum ihr fliehen", back: "ihr floht", lesson: " B1.1" },	{ front: "präteritum sie(pl.) fliehen", back: "sie flohen", lesson: " B1.1" },
       
       
{ front: "präteritum ich schießen", back: "ich schoss", lesson: " B1.1" },	{ front: "präteritum du schießen", back: "du schossest", lesson: " B1.1" },	{ front: "präteritum  sie schießen", back: "sie er schoss", lesson: " B1.1" },	{ front: "präteritum wir schießen", back: "wir schossen", lesson: " B1.1" },	{ front: "präteritum ihr schießen", back: "ihr schosst", lesson: " B1.1" },	{ front: "präteritum sie(pl.) schießen", back: "sie schossen", lesson: " B1.1" },
       
       
       
{ front: "präteritum ich beißen", back: "ich biss", lesson: " B1.1" },	{ front: "präteritum du beißen", back: "du bissest", lesson: " B1.1" },	{ front: "präteritum  es beißen", back: "es er biss", lesson: " B1.1" },	{ front: "präteritum wir beißen", back: "wir bissen", lesson: " B1.1" },	{ front: "präteritum ihr beißen", back: "ihr bisst", lesson: " B1.1" },	{ front: "präteritum sie(pl.) beißen", back: "sie bissen", lesson: " B1.1" },
{ front: "präteritum ich erschrecken", back: "ich erschrak", lesson: " B1.1" },	{ front: "präteritum du erschrecken", back: "du erschrakst", lesson: " B1.1" },	{ front: "präteritum  er erschrecken", back: "er er erschrak", lesson: " B1.1" },	{ front: "präteritum wir erschrecken", back: "wir erschraken", lesson: " B1.1" },	{ front: "präteritum ihr erschrecken", back: "ihr erschrakt", lesson: " B1.1" },	{ front: "präteritum sie(pl.) erschrecken", back: "sie erschraken", lesson: " B1.1" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich erfinden", back: "ich erfand", lesson: "B1.2" },	{ front: "präteritum du erfinden", back: "du erfandest", lesson: "B1.2" },	{ front: "präteritum  er erfinden", back: "er er erfand", lesson: "B1.2" },	{ front: "präteritum wir erfinden", back: "wir erfanden", lesson: "B1.2" },	{ front: "präteritum ihr erfinden", back: "ihr erfandet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) erfinden", back: "sie erfanden", lesson: "B1.2" },
       
       
       
{ front: "präteritum ich veröffentlichen", back: "ich veröffentlichte", lesson: "B1.2" },	{ front: "präteritum du veröffentlichen", back: "du veröffentlichtest", lesson: "B1.2" },	{ front: "präteritum  sie veröffentlichen", back: "sie er veröffentlichte", lesson: "B1.2" },	{ front: "präteritum wir veröffentlichen", back: "wir veröffentlichten", lesson: "B1.2" },	{ front: "präteritum ihr veröffentlichen", back: "ihr veröffentlichtet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) veröffentlichen", back: "sie veröffentlichten", lesson: "B1.2" },
       
       
       
{ front: "präteritum ich handeln", back: "ich handelte", lesson: "B1.2" },	{ front: "präteritum du handeln", back: "du handeltest", lesson: "B1.2" },	{ front: "präteritum  es handeln", back: "es er handelte", lesson: "B1.2" },	{ front: "präteritum wir handeln", back: "wir handelten", lesson: "B1.2" },	{ front: "präteritum ihr handeln", back: "ihr handeltet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) handeln", back: "sie handelten", lesson: "B1.2" },
       
       
       
{ front: "präteritum ich entstehen", back: "ich entstand", lesson: "B1.2" },	{ front: "präteritum du entstehen", back: "du entstandest", lesson: "B1.2" },	{ front: "präteritum  er entstehen", back: "er er entstand", lesson: "B1.2" },	{ front: "präteritum wir entstehen", back: "wir entstanden", lesson: "B1.2" },	{ front: "präteritum ihr entstehen", back: "ihr entstandet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) entstehen", back: "sie entstanden", lesson: "B1.2" },
       
{ front: "präteritum ich produzieren", back: "ich produzierte", lesson: "B1.2" },	{ front: "präteritum du produzieren", back: "du produziertest", lesson: "B1.2" },	{ front: "präteritum  es produzieren", back: "es er produzierte", lesson: "B1.2" },	{ front: "präteritum wir produzieren", back: "wir produzierten", lesson: "B1.2" },	{ front: "präteritum ihr produzieren", back: "ihr produziertet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) produzieren", back: "sie produzierten", lesson: "B1.2" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich kritisieren", back: "ich kritisierte", lesson: "B1.2" },	{ front: "präteritum du kritisieren", back: "du kritisiertest", lesson: "B1.2" },	{ front: "präteritum  sie kritisieren", back: "sie er kritisierte", lesson: "B1.2" },	{ front: "präteritum wir kritisieren", back: "wir kritisierten", lesson: "B1.2" },	{ front: "präteritum ihr kritisieren", back: "ihr kritisiertet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) kritisieren", back: "sie kritisierten", lesson: "B1.2" },
       
       
       
{ front: "präteritum ich sich beschäftigen", back: "ich beschäftigte mich", lesson: "B1.2" },	{ front: "präteritum du sich beschäftigen", back: "du beschäftigtest dich", lesson: "B1.2" },	{ front: "präteritum  es sich beschäftigen", back: "es er beschäftigte sich", lesson: "B1.2" },	{ front: "präteritum wir sich beschäftigen", back: "wir beschäftigten uns", lesson: "B1.2" },	{ front: "präteritum ihr sich beschäftigen", back: "ihr beschäftigtet euch", lesson: "B1.2" },	{ front: "präteritum sie(pl.) sich beschäftigen", back: "sie beschäftigten sich", lesson: "B1.2" },
       
       
       
{ front: "präteritum ich gelingen", back: "ich gelang", lesson: "B1.2" },	{ front: "präteritum du gelingen", back: "du gelangst", lesson: "B1.2" },	{ front: "präteritum  er gelingen", back: "er er gelang", lesson: "B1.2" },	{ front: "präteritum wir gelingen", back: "wir gelangen", lesson: "B1.2" },	{ front: "präteritum ihr gelingen", back: "ihr gelangt", lesson: "B1.2" },	{ front: "präteritum sie(pl.) gelingen", back: "sie gelangen", lesson: "B1.2" },
       
       
{ front: "präteritum ich verlassen", back: "ich verließ", lesson: "B1.2" },	{ front: "präteritum du verlassen", back: "du verließest", lesson: "B1.2" },	{ front: "präteritum  er verlassen", back: "er er verließ", lesson: "B1.2" },	{ front: "präteritum wir verlassen", back: "wir verließen", lesson: "B1.2" },	{ front: "präteritum ihr verlassen", back: "ihr verließt", lesson: "B1.2" },	{ front: "präteritum sie(pl.) verlassen", back: "sie verließen", lesson: "B1.2" },
{ front: "präteritum ich begleiten", back: "ich begleitete", lesson: "B1.2" },	{ front: "präteritum du begleiten", back: "du begleitetest", lesson: "B1.2" },	{ front: "präteritum  sie begleiten", back: "sie er begleitete", lesson: "B1.2" },	{ front: "präteritum wir begleiten", back: "wir begleiteten", lesson: "B1.2" },	{ front: "präteritum ihr begleiten", back: "ihr begleitetet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) begleiten", back: "sie begleiteten", lesson: "B1.2" },
       
       
{ front: "präteritum ich spülen", back: "ich spülte", lesson: "B1.2" },	{ front: "präteritum du spülen", back: "du spültest", lesson: "B1.2" },	{ front: "präteritum  sie spülen", back: "sie er spülte", lesson: "B1.2" },	{ front: "präteritum wir spülen", back: "wir spülten", lesson: "B1.2" },	{ front: "präteritum ihr spülen", back: "ihr spültet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) spülen", back: "sie spülten", lesson: "B1.2" },
       
       
{ front: "präteritum ich begegnen", back: "ich begegnete", lesson: "B1.2" },	{ front: "präteritum du begegnen", back: "du begegnetest", lesson: "B1.2" },	{ front: "präteritum  sie begegnen", back: "sie er begegnete", lesson: "B1.2" },	{ front: "präteritum wir begegnen", back: "wir begegneten", lesson: "B1.2" },	{ front: "präteritum ihr begegnen", back: "ihr begegnetet", lesson: "B1.2" },	{ front: "präteritum sie(pl.) begegnen", back: "sie begegneten", lesson: "B1.2" },
       
{ front: "präteritum ich sich erfüllen", back: "ich erfüllte mich", lesson: "B1.2" },	{ front: "präteritum du sich erfüllen", back: "du erfülltest dich", lesson: "B1.2" },	{ front: "präteritum  er sich erfüllen", back: "er er erfüllte sich", lesson: "B1.2" },	{ front: "präteritum wir sich erfüllen", back: "wir erfüllten uns", lesson: "B1.2" },	{ front: "präteritum ihr sich erfüllen", back: "ihr erfülltet euch", lesson: "B1.2" },	{ front: "präteritum sie(pl.) sich erfüllen", back: "sie erfüllten sich", lesson: "B1.2" },
       
{ front: "präteritum ich zustimmen", back: "ich stimmte zu", lesson: "B1.2" },	{ front: "präteritum du zustimmen", back: "du stimmtest zu", lesson: "B1.2" },	{ front: "präteritum  es zustimmen", back: "es er stimmte zu", lesson: "B1.2" },	{ front: "präteritum wir zustimmen", back: "wir stimmten zu", lesson: "B1.2" },	{ front: "präteritum ihr zustimmen", back: "ihr stimmtet zu", lesson: "B1.2" },	{ front: "präteritum sie(pl.) zustimmen", back: "sie stimmten zu", lesson: "B1.2" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich überreden", back: "ich überredete", lesson: "B1.3" },	{ front: "präteritum du überreden", back: "du überredetest", lesson: "B1.3" },	{ front: "präteritum  es überreden", back: "es er überredete", lesson: "B1.3" },	{ front: "präteritum wir überreden", back: "wir überredeten", lesson: "B1.3" },	{ front: "präteritum ihr überreden", back: "ihr überredetet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) überreden", back: "sie überredeten", lesson: "B1.3" },
{ front: "präteritum ich vereinbaren", back: "ich vereinbarte", lesson: "B1.3" },	{ front: "präteritum du vereinbaren", back: "du vereinbartest", lesson: "B1.3" },	{ front: "präteritum  er vereinbaren", back: "er er vereinbarte", lesson: "B1.3" },	{ front: "präteritum wir vereinbaren", back: "wir vereinbarten", lesson: "B1.3" },	{ front: "präteritum ihr vereinbaren", back: "ihr vereinbartet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) vereinbaren", back: "sie vereinbarten", lesson: "B1.3" },
       
       
       
       
       
       
{ front: "präteritum ich achten", back: "ich achtete", lesson: "B1.3" },	{ front: "präteritum du achten", back: "du achtetest", lesson: "B1.3" },	{ front: "präteritum  sie achten", back: "sie er achtete", lesson: "B1.3" },	{ front: "präteritum wir achten", back: "wir achteten", lesson: "B1.3" },	{ front: "präteritum ihr achten", back: "ihr achtetet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) achten", back: "sie achteten", lesson: "B1.3" },
       
       
       
{ front: "präteritum ich atmen", back: "ich atmete", lesson: "B1.3" },	{ front: "präteritum du atmen", back: "du atmetest", lesson: "B1.3" },	{ front: "präteritum  es atmen", back: "es er atmete", lesson: "B1.3" },	{ front: "präteritum wir atmen", back: "wir atmeten", lesson: "B1.3" },	{ front: "präteritum ihr atmen", back: "ihr atmetet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) atmen", back: "sie atmeten", lesson: "B1.3" },
       
       
       
       
       
       
       
{ front: "präteritum ich umgehen", back: "ich ging um", lesson: "B1.3" },	{ front: "präteritum du umgehen", back: "du gingst um", lesson: "B1.3" },	{ front: "präteritum  sie umgehen", back: "sie er ging um", lesson: "B1.3" },	{ front: "präteritum wir umgehen", back: "wir gingen um", lesson: "B1.3" },	{ front: "präteritum ihr umgehen", back: "ihr gingt um", lesson: "B1.3" },	{ front: "präteritum sie(pl.) umgehen", back: "sie gingen um", lesson: "B1.3" },
{ front: "präteritum ich aufwachen", back: "ich wachte auf", lesson: "B1.3" },	{ front: "präteritum du aufwachen", back: "du wachtest auf", lesson: "B1.3" },	{ front: "präteritum  es aufwachen", back: "es er wachte auf", lesson: "B1.3" },	{ front: "präteritum wir aufwachen", back: "wir wachten auf", lesson: "B1.3" },	{ front: "präteritum ihr aufwachen", back: "ihr wachtet auf", lesson: "B1.3" },	{ front: "präteritum sie(pl.) aufwachen", back: "sie wachten auf", lesson: "B1.3" },
       
       
{ front: "präteritum ich messen", back: "ich maß", lesson: "B1.3" },	{ front: "präteritum du messen", back: "du maßest", lesson: "B1.3" },	{ front: "präteritum  es messen", back: "es er maß", lesson: "B1.3" },	{ front: "präteritum wir messen", back: "wir maßen", lesson: "B1.3" },	{ front: "präteritum ihr messen", back: "ihr maßt", lesson: "B1.3" },	{ front: "präteritum sie(pl.) messen", back: "sie maßen", lesson: "B1.3" },
{ front: "präteritum ich abnehmen", back: "ich nahm ab", lesson: "B1.3" },	{ front: "präteritum du abnehmen", back: "du nahmst ab", lesson: "B1.3" },	{ front: "präteritum  er abnehmen", back: "er er nahm ab", lesson: "B1.3" },	{ front: "präteritum wir abnehmen", back: "wir nahmen ab", lesson: "B1.3" },	{ front: "präteritum ihr abnehmen", back: "ihr nahmt ab", lesson: "B1.3" },	{ front: "präteritum sie(pl.) abnehmen", back: "sie nahmen ab", lesson: "B1.3" },
       
{ front: "präteritum ich untersuchen", back: "ich untersuchte", lesson: "B1.3" },	{ front: "präteritum du untersuchen", back: "du untersuchtest", lesson: "B1.3" },	{ front: "präteritum  es untersuchen", back: "es er untersuchte", lesson: "B1.3" },	{ front: "präteritum wir untersuchen", back: "wir untersuchten", lesson: "B1.3" },	{ front: "präteritum ihr untersuchen", back: "ihr untersuchtet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) untersuchen", back: "sie untersuchten", lesson: "B1.3" },
       
       
       
       
       
       
       
{ front: "präteritum ich vermuten", back: "ich vermutete", lesson: "B1.3" },	{ front: "präteritum du vermuten", back: "du vermutetest", lesson: "B1.3" },	{ front: "präteritum  sie vermuten", back: "sie er vermutete", lesson: "B1.3" },	{ front: "präteritum wir vermuten", back: "wir vermuteten", lesson: "B1.3" },	{ front: "präteritum ihr vermuten", back: "ihr vermutetet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) vermuten", back: "sie vermuteten", lesson: "B1.3" },
       
       
{ front: "präteritum ich führen", back: "ich führte", lesson: "B1.3" },	{ front: "präteritum du führen", back: "du führtest", lesson: "B1.3" },	{ front: "präteritum  sie führen", back: "sie er führte", lesson: "B1.3" },	{ front: "präteritum wir führen", back: "wir führten", lesson: "B1.3" },	{ front: "präteritum ihr führen", back: "ihr führtet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) führen", back: "sie führten", lesson: "B1.3" },
{ front: "präteritum ich verschreiben", back: "ich verschrieb", lesson: "B1.3" },	{ front: "präteritum du verschreiben", back: "du verschriebst", lesson: "B1.3" },	{ front: "präteritum  es verschreiben", back: "es er verschrieb", lesson: "B1.3" },	{ front: "präteritum wir verschreiben", back: "wir verschrieben", lesson: "B1.3" },	{ front: "präteritum ihr verschreiben", back: "ihr verschriebt", lesson: "B1.3" },	{ front: "präteritum sie(pl.) verschreiben", back: "sie verschrieben", lesson: "B1.3" },
{ front: "präteritum ich erhalten", back: "ich erhielt", lesson: "B1.3" },	{ front: "präteritum du erhalten", back: "du erhieltst", lesson: "B1.3" },	{ front: "präteritum  er erhalten", back: "er er erhielt", lesson: "B1.3" },	{ front: "präteritum wir erhalten", back: "wir erhielten", lesson: "B1.3" },	{ front: "präteritum ihr erhalten", back: "ihr erhieltet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) erhalten", back: "sie erhielten", lesson: "B1.3" },
{ front: "präteritum ich abnehmen", back: "ich nahm ab", lesson: "B1.3" },	{ front: "präteritum du abnehmen", back: "du nahmst ab", lesson: "B1.3" },	{ front: "präteritum  sie abnehmen", back: "sie er nahm ab", lesson: "B1.3" },	{ front: "präteritum wir abnehmen", back: "wir nahmen ab", lesson: "B1.3" },	{ front: "präteritum ihr abnehmen", back: "ihr nahmt ab", lesson: "B1.3" },	{ front: "präteritum sie(pl.) abnehmen", back: "sie nahmen ab", lesson: "B1.3" },
       
       
{ front: "präteritum ich teilnehmen", back: "ich nahm teil", lesson: "B1.3" },	{ front: "präteritum du teilnehmen", back: "du nahmst teil", lesson: "B1.3" },	{ front: "präteritum  sie teilnehmen", back: "sie er nahm teil", lesson: "B1.3" },	{ front: "präteritum wir teilnehmen", back: "wir nahmen teil", lesson: "B1.3" },	{ front: "präteritum ihr teilnehmen", back: "ihr nahmt teil", lesson: "B1.3" },	{ front: "präteritum sie(pl.) teilnehmen", back: "sie nahmen teil", lesson: "B1.3" },
       
{ front: "präteritum ich impfen", back: "ich impfte", lesson: "B1.3" },	{ front: "präteritum du impfen", back: "du impftest", lesson: "B1.3" },	{ front: "präteritum  er impfen", back: "er er impfte", lesson: "B1.3" },	{ front: "präteritum wir impfen", back: "wir impften", lesson: "B1.3" },	{ front: "präteritum ihr impfen", back: "ihr impftet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) impfen", back: "sie impften", lesson: "B1.3" },
{ front: "präteritum ich treiben", back: "ich trieb", lesson: "B1.3" },	{ front: "präteritum du treiben", back: "du triebst", lesson: "B1.3" },	{ front: "präteritum  sie treiben", back: "sie er trieb", lesson: "B1.3" },	{ front: "präteritum wir treiben", back: "wir trieben", lesson: "B1.3" },	{ front: "präteritum ihr treiben", back: "ihr triebt", lesson: "B1.3" },	{ front: "präteritum sie(pl.) treiben", back: "sie trieben", lesson: "B1.3" },
       
       
       
       
       
{ front: "präteritum ich verzichten", back: "ich verzichtete", lesson: "B1.3" },	{ front: "präteritum du verzichten", back: "du verzichtetest", lesson: "B1.3" },	{ front: "präteritum  sie verzichten", back: "sie er verzichtete", lesson: "B1.3" },	{ front: "präteritum wir verzichten", back: "wir verzichteten", lesson: "B1.3" },	{ front: "präteritum ihr verzichten", back: "ihr verzichtetet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) verzichten", back: "sie verzichteten", lesson: "B1.3" },
       
       
{ front: "präteritum ich krankmelden", back: "ich meldete krank", lesson: "B1.3" },	{ front: "präteritum du krankmelden", back: "du meldetest krank", lesson: "B1.3" },	{ front: "präteritum  sie krankmelden", back: "sie er meldete krank", lesson: "B1.3" },	{ front: "präteritum wir krankmelden", back: "wir meldeten krank", lesson: "B1.3" },	{ front: "präteritum ihr krankmelden", back: "ihr meldetet krank", lesson: "B1.3" },	{ front: "präteritum sie(pl.) krankmelden", back: "sie meldeten krank", lesson: "B1.3" },
{ front: "präteritum ich krankschreiben", back: "ich schrieb krank", lesson: "B1.3" },	{ front: "präteritum du krankschreiben", back: "du schriebst krank", lesson: "B1.3" },	{ front: "präteritum  es krankschreiben", back: "es er schrieb krank", lesson: "B1.3" },	{ front: "präteritum wir krankschreiben", back: "wir schrieben krank", lesson: "B1.3" },	{ front: "präteritum ihr krankschreiben", back: "ihr schriebt krank", lesson: "B1.3" },	{ front: "präteritum sie(pl.) krankschreiben", back: "sie schrieben krank", lesson: "B1.3" },
       
       
       
       
       
{ front: "präteritum ich untersuchen (jemanden/etwas)", back: "ich untersuchte", lesson: "B1.3" },	{ front: "präteritum du untersuchen (jemanden/etwas)", back: "du untersuchtest", lesson: "B1.3" },	{ front: "präteritum  es untersuchen (jemanden/etwas)", back: "es er untersuchte", lesson: "B1.3" },	{ front: "präteritum wir untersuchen (jemanden/etwas)", back: "wir untersuchten", lesson: "B1.3" },	{ front: "präteritum ihr untersuchen (jemanden/etwas)", back: "ihr untersuchtet", lesson: "B1.3" },	{ front: "präteritum sie(pl.) untersuchen (jemanden/etwas)", back: "sie untersuchten", lesson: "B1.3" },
{ front: "präteritum ich impfen (jemanden)", back: "ich impfte jemanden", lesson: "B1.3" },	{ front: "präteritum du impfen (jemanden)", back: "du impftest jemanden", lesson: "B1.3" },	{ front: "präteritum  er impfen (jemanden)", back: "er er impfte jemanden", lesson: "B1.3" },	{ front: "präteritum wir impfen (jemanden)", back: "wir impften jemanden", lesson: "B1.3" },	{ front: "präteritum ihr impfen (jemanden)", back: "ihr impftet jemanden", lesson: "B1.3" },	{ front: "präteritum sie(pl.) impfen (jemanden)", back: "sie impften jemanden", lesson: "B1.3" },
       
{ front: "präteritum ich verschreiben", back: "ich verschrieb", lesson: "B1.3" },	{ front: "präteritum du verschreiben", back: "du verschriebst", lesson: "B1.3" },	{ front: "präteritum  es verschreiben", back: "es er verschrieb", lesson: "B1.3" },	{ front: "präteritum wir verschreiben", back: "wir verschrieben", lesson: "B1.3" },	{ front: "präteritum ihr verschreiben", back: "ihr verschreibt", lesson: "B1.3" },	{ front: "präteritum sie(pl.) verschreiben", back: "sie verschrieben", lesson: "B1.3" },
       
{ front: "präteritum ich krankschreiben", back: "ich schrieb krank", lesson: "B1.3" },	{ front: "präteritum du krankschreiben", back: "du schriebst krank", lesson: "B1.3" },	{ front: "präteritum  sie krankschreiben", back: "sie er schrieb krank", lesson: "B1.3" },	{ front: "präteritum wir krankschreiben", back: "wir schrieben krank", lesson: "B1.3" },	{ front: "präteritum ihr krankschreiben", back: "ihr schriebt krank", lesson: "B1.3" },	{ front: "präteritum sie(pl.) krankschreiben", back: "sie schrieben krank", lesson: "B1.3" },
       
       
       
       
       
       
{ front: "präteritum ich messen (den Blutdruck)", back: "ich maß den Blutdruck", lesson: "B1.3" },	{ front: "präteritum du messen (den Blutdruck)", back: "du maßest den Blutdruck", lesson: "B1.3" },	{ front: "präteritum  es messen (den Blutdruck)", back: "es er maß den Blutdruck", lesson: "B1.3" },	{ front: "präteritum wir messen (den Blutdruck)", back: "wir maßen den Blutdruck", lesson: "B1.3" },	{ front: "präteritum ihr messen (den Blutdruck)", back: "ihr maßt den Blutdruck", lesson: "B1.3" },	{ front: "präteritum sie(pl.) messen (den Blutdruck)", back: "sie maßen den Blutdruck", lesson: "B1.3" },
{ front: "präteritum ich abnehmen (Blut)", back: "ich nahm Blut ab", lesson: "B1.3" },	{ front: "präteritum du abnehmen (Blut)", back: "du nahmst Blut ab", lesson: "B1.3" },	{ front: "präteritum  er abnehmen (Blut)", back: "er er nahm Blut ab", lesson: "B1.3" },	{ front: "präteritum wir abnehmen (Blut)", back: "wir nahmen Blut ab", lesson: "B1.3" },	{ front: "präteritum ihr abnehmen (Blut)", back: "ihr nahmt Blut ab", lesson: "B1.3" },	{ front: "präteritum sie(pl.) abnehmen (Blut)", back: "sie nahmen Blut ab", lesson: "B1.3" },
{ front: "präteritum ich prüfen (das Gewicht)", back: "ich prüfte das Gewicht", lesson: "B1.3" },	{ front: "präteritum du prüfen (das Gewicht)", back: "du prüftest das Gewicht", lesson: "B1.3" },	{ front: "präteritum  sie prüfen (das Gewicht)", back: "sie er prüfte das Gewicht", lesson: "B1.3" },	{ front: "präteritum wir prüfen (das Gewicht)", back: "wir prüften das Gewicht", lesson: "B1.3" },	{ front: "präteritum ihr prüfen (das Gewicht)", back: "ihr prüftet das Gewicht", lesson: "B1.3" },	{ front: "präteritum sie(pl.) prüfen (das Gewicht)", back: "sie prüften das Gewicht", lesson: "B1.3" },
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich lächeln", back: "ich lächelte", lesson: "B1.4" },	{ front: "präteritum du lächeln", back: "du lächeltest", lesson: "B1.4" },	{ front: "präteritum  sie lächeln", back: "sie lächelte", lesson: "B1.4" },	{ front: "präteritum wir lächeln", back: "wir lächelten", lesson: "B1.4" },	{ front: "präteritum ihr lächeln", back: "ihr lächeltet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) lächeln", back: "sie lächelten", lesson: "B1.4" },
       
       
       
{ front: "präteritum ich vorhaben", back: "ich hatte vor", lesson: "B1.4" },	{ front: "präteritum du vorhaben", back: "du hattest vor", lesson: "B1.4" },	{ front: "präteritum  es vorhaben", back: "es hatte vor", lesson: "B1.4" },	{ front: "präteritum wir vorhaben", back: "wir hatten vor", lesson: "B1.4" },	{ front: "präteritum ihr vorhaben", back: "ihr hattet vor", lesson: "B1.4" },	{ front: "präteritum sie(pl.) vorhaben", back: "sie hatten vor", lesson: "B1.4" },
       
{ front: "präteritum ich lügen", back: "ich log", lesson: "B1.4" },	{ front: "präteritum du lügen", back: "du logst", lesson: "B1.4" },	{ front: "präteritum  sie lügen", back: "sie log", lesson: "B1.4" },	{ front: "präteritum wir lügen", back: "wir logen", lesson: "B1.4" },	{ front: "präteritum ihr lügen", back: "ihr logt", lesson: "B1.4" },	{ front: "präteritum sie(pl.) lügen", back: "sie logen", lesson: "B1.4" },
{ front: "präteritum ich beenden", back: "ich beendete", lesson: "B1.4" },	{ front: "präteritum du beenden", back: "du beendetest", lesson: "B1.4" },	{ front: "präteritum  es beenden", back: "es beendete", lesson: "B1.4" },	{ front: "präteritum wir beenden", back: "wir beendeten", lesson: "B1.4" },	{ front: "präteritum ihr beenden", back: "ihr beendetet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) beenden", back: "sie beendeten", lesson: "B1.4" },
       
{ front: "präteritum ich aussuchen", back: "ich suchte aus", lesson: "B1.4" },	{ front: "präteritum du aussuchen", back: "du suchtest aus", lesson: "B1.4" },	{ front: "präteritum  sie aussuchen", back: "sie suchte aus", lesson: "B1.4" },	{ front: "präteritum wir aussuchen", back: "wir suchten aus", lesson: "B1.4" },	{ front: "präteritum ihr aussuchen", back: "ihr suchtet aus", lesson: "B1.4" },	{ front: "präteritum sie(pl.) aussuchen", back: "sie suchten aus", lesson: "B1.4" },
       
       
       
       
       
{ front: "präteritum ich übersetzen", back: "ich übersetzte", lesson: "B1.4" },	{ front: "präteritum du übersetzen", back: "du übersetztest", lesson: "B1.4" },	{ front: "präteritum  sie übersetzen", back: "sie übersetzte", lesson: "B1.4" },	{ front: "präteritum wir übersetzen", back: "wir übersetzten", lesson: "B1.4" },	{ front: "präteritum ihr übersetzen", back: "ihr übersetztet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) übersetzen", back: "sie übersetzten", lesson: "B1.4" },
       
       
       
       
{ front: "präteritum ich aufschreiben", back: "ich schrieb auf", lesson: "B1.4" },	{ front: "präteritum du aufschreiben", back: "du schriebst auf", lesson: "B1.4" },	{ front: "präteritum  er aufschreiben", back: "er schrieb auf", lesson: "B1.4" },	{ front: "präteritum wir aufschreiben", back: "wir schrieben auf", lesson: "B1.4" },	{ front: "präteritum ihr aufschreiben", back: "ihr schriebt auf", lesson: "B1.4" },	{ front: "präteritum sie(pl.) aufschreiben", back: "sie schrieben auf", lesson: "B1.4" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich sich verstecken", back: "ich versteckte mich", lesson: "B1.4" },	{ front: "präteritum du sich verstecken", back: "du verstecktest dich", lesson: "B1.4" },	{ front: "präteritum  er sich verstecken", back: "er versteckte sich", lesson: "B1.4" },	{ front: "präteritum wir sich verstecken", back: "wir versteckten uns", lesson: "B1.4" },	{ front: "präteritum ihr sich verstecken", back: "ihr verstecktet euch", lesson: "B1.4" },	{ front: "präteritum sie(pl.) sich verstecken", back: "sie versteckten sich", lesson: "B1.4" },
       
       
       
       
       
       
{ front: "präteritum ich wählen", back: "ich wählte", lesson: "B1.4" },	{ front: "präteritum du wählen", back: "du wähltest", lesson: "B1.4" },	{ front: "präteritum  sie wählen", back: "sie wählte", lesson: "B1.4" },	{ front: "präteritum wir wählen", back: "wir wählten", lesson: "B1.4" },	{ front: "präteritum ihr wählen", back: "ihr wähltet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) wählen", back: "sie wählten", lesson: "B1.4" },
{ front: "präteritum ich stammen", back: "ich stammte", lesson: "B1.4" },	{ front: "präteritum du stammen", back: "du stammtest", lesson: "B1.4" },	{ front: "präteritum  es stammen", back: "es stammte", lesson: "B1.4" },	{ front: "präteritum wir stammen", back: "wir stammten", lesson: "B1.4" },	{ front: "präteritum ihr stammen", back: "ihr stammtet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) stammen", back: "sie stammten", lesson: "B1.4" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich leiden", back: "ich litt", lesson: "B1.4" },	{ front: "präteritum du leiden", back: "du littest", lesson: "B1.4" },	{ front: "präteritum  es leiden", back: "es litt", lesson: "B1.4" },	{ front: "präteritum wir leiden", back: "wir litten", lesson: "B1.4" },	{ front: "präteritum ihr leiden", back: "ihr littet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) leiden", back: "sie litten", lesson: "B1.4" },
{ front: "präteritum ich mischen", back: "ich mischte", lesson: "B1.4" },	{ front: "präteritum du mischen", back: "du mischtest", lesson: "B1.4" },	{ front: "präteritum  er mischen", back: "er mischte", lesson: "B1.4" },	{ front: "präteritum wir mischen", back: "wir mischten", lesson: "B1.4" },	{ front: "präteritum ihr mischen", back: "ihr mischtet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) mischen", back: "sie mischten", lesson: "B1.4" },
       
{ front: "präteritum ich bestehen", back: "ich bestand auf", lesson: "B1.4" },	{ front: "präteritum du bestehen", back: "du bestandest auf", lesson: "B1.4" },	{ front: "präteritum  es bestehen", back: "es bestand auf", lesson: "B1.4" },	{ front: "präteritum wir bestehen", back: "wir bestanden auf", lesson: "B1.4" },	{ front: "präteritum ihr bestehen", back: "ihr bestandet auf", lesson: "B1.4" },	{ front: "präteritum sie(pl.) bestehen", back: "sie bestanden auf", lesson: "B1.4" },
       
       
       
{ front: "präteritum ich vergleichen", back: "ich verglich", lesson: "B1.4" },	{ front: "präteritum du vergleichen", back: "du verglichst", lesson: "B1.4" },	{ front: "präteritum  er vergleichen", back: "er verglich", lesson: "B1.4" },	{ front: "präteritum wir vergleichen", back: "wir verglichen", lesson: "B1.4" },	{ front: "präteritum ihr vergleichen", back: "ihr verglicht", lesson: "B1.4" },	{ front: "präteritum sie(pl.) vergleichen", back: "sie verglichen", lesson: "B1.4" },
       
       
{ front: "präteritum ich schimpfen", back: "ich schimpfte", lesson: "B1.4" },	{ front: "präteritum du schimpfen", back: "du schimpftest", lesson: "B1.4" },	{ front: "präteritum  er schimpfen", back: "er schimpfte", lesson: "B1.4" },	{ front: "präteritum wir schimpfen", back: "wir schimpften", lesson: "B1.4" },	{ front: "präteritum ihr schimpfen", back: "ihr schimpftet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) schimpfen", back: "sie schimpften", lesson: "B1.4" },
       
       
       
       
{ front: "präteritum ich übersetzen", back: "ich übersetzte", lesson: "B1.4" },	{ front: "präteritum du übersetzen", back: "du übersetztest", lesson: "B1.4" },	{ front: "präteritum  es übersetzen", back: "es übersetzte", lesson: "B1.4" },	{ front: "präteritum wir übersetzen", back: "wir übersetzten", lesson: "B1.4" },	{ front: "präteritum ihr übersetzen", back: "ihr übersetztet", lesson: "B1.4" },	{ front: "präteritum sie(pl.) übersetzen", back: "sie übersetzten", lesson: "B1.4" },
       
       
       
{ front: "präteritum ich genügen", back: "ich genügte", lesson: "B1.5" },	{ front: "präteritum du genügen", back: "du genügte", lesson: "B1.5" },	{ front: "präteritum  er genügen", back: "er genügte", lesson: "B1.5" },	{ front: "präteritum wir genügen", back: "wir genügten", lesson: "B1.5" },	{ front: "präteritum ihr genügen", back: "ihr genügtet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) genügen", back: "sie genügten", lesson: "B1.5" },
{ front: "präteritum ich aufhören", back: "ich hörte auf", lesson: "B1.5" },	{ front: "präteritum du aufhören", back: "du hörtest auf", lesson: "B1.5" },	{ front: "präteritum  sie aufhören", back: "sie hörte auf", lesson: "B1.5" },	{ front: "präteritum wir aufhören", back: "wir hörten auf", lesson: "B1.5" },	{ front: "präteritum ihr aufhören", back: "ihr hörtet auf", lesson: "B1.5" },	{ front: "präteritum sie(pl.) aufhören", back: "sie hörten auf", lesson: "B1.5" },
       
       
{ front: "präteritum ich erwarten", back: "ich erwartete", lesson: "B1.5" },	{ front: "präteritum du erwarten", back: "du erwartetest", lesson: "B1.5" },	{ front: "präteritum  sie erwarten", back: "sie erwartete", lesson: "B1.5" },	{ front: "präteritum wir erwarten", back: "wir erwarteten", lesson: "B1.5" },	{ front: "präteritum ihr erwarten", back: "ihr erwartetet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) erwarten", back: "sie erwarteten", lesson: "B1.5" },
       
       
       
       
       
       
       
{ front: "präteritum ich feststellen", back: "ich stellte fest", lesson: "B1.5" },	{ front: "präteritum du feststellen", back: "du stelltest fest", lesson: "B1.5" },	{ front: "präteritum  er feststellen", back: "er stellte fest", lesson: "B1.5" },	{ front: "präteritum wir feststellen", back: "wir stellten fest", lesson: "B1.5" },	{ front: "präteritum ihr feststellen", back: "ihr stelltet fest", lesson: "B1.5" },	{ front: "präteritum sie(pl.) feststellen", back: "sie stellten fest", lesson: "B1.5" },
       
       
       
       
{ front: "präteritum ich entwickeln", back: "ich entwickelte", lesson: "B1.5" },	{ front: "präteritum du entwickeln", back: "du entwickeltest", lesson: "B1.5" },	{ front: "präteritum  es entwickeln", back: "es entwickelte", lesson: "B1.5" },	{ front: "präteritum wir entwickeln", back: "wir entwickelten", lesson: "B1.5" },	{ front: "präteritum ihr entwickeln", back: "ihr entwickeltet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) entwickeln", back: "sie entwickelten", lesson: "B1.5" },
{ front: "präteritum ich herstellen", back: "ich stellte her", lesson: "B1.5" },	{ front: "präteritum du herstellen", back: "du stelltest her", lesson: "B1.5" },	{ front: "präteritum  er herstellen", back: "er stellte her", lesson: "B1.5" },	{ front: "präteritum wir herstellen", back: "wir stellten her", lesson: "B1.5" },	{ front: "präteritum ihr herstellen", back: "ihr stelltet her", lesson: "B1.5" },	{ front: "präteritum sie(pl.) herstellen", back: "sie stellten her", lesson: "B1.5" },
       
       
       
       
{ front: "präteritum ich rechnen", back: "ich rechnete", lesson: "B1.5" },	{ front: "präteritum du rechnen", back: "du rechnetest", lesson: "B1.5" },	{ front: "präteritum  es rechnen", back: "es rechnete", lesson: "B1.5" },	{ front: "präteritum wir rechnen", back: "wir rechneten", lesson: "B1.5" },	{ front: "präteritum ihr rechnen", back: "ihr rechnetet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) rechnen", back: "sie rechneten", lesson: "B1.5" },
       
{ front: "präteritum ich sich beruhigen", back: "ich beruhigte mich", lesson: "B1.5" },	{ front: "präteritum du sich beruhigen", back: "du beruhigtest dich", lesson: "B1.5" },	{ front: "präteritum  sie sich beruhigen", back: "sie beruhigte sich", lesson: "B1.5" },	{ front: "präteritum wir sich beruhigen", back: "wir beruhigten uns", lesson: "B1.5" },	{ front: "präteritum ihr sich beruhigen", back: "ihr beruhigtet euch", lesson: "B1.5" },	{ front: "präteritum sie(pl.) sich beruhigen", back: "sie beruhigten sich", lesson: "B1.5" },
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich sich überlegen", back: "ich überlegte mich", lesson: "B1.5" },	{ front: "präteritum du sich überlegen", back: "du überlegtest dich", lesson: "B1.5" },	{ front: "präteritum  es sich überlegen", back: "es überlegte sich", lesson: "B1.5" },	{ front: "präteritum wir sich überlegen", back: "wir überlegten uns", lesson: "B1.5" },	{ front: "präteritum ihr sich überlegen", back: "ihr überlegtet euch", lesson: "B1.5" },	{ front: "präteritum sie(pl.) sich überlegen", back: "sie überlegten sich", lesson: "B1.5" },
       
       
{ front: "präteritum ich jobben", back: "ich jobbte", lesson: "B1.5" },	{ front: "präteritum du jobben", back: "du jobbtest", lesson: "B1.5" },	{ front: "präteritum  es jobben", back: "es jobbte", lesson: "B1.5" },	{ front: "präteritum wir jobben", back: "wir jobbten", lesson: "B1.5" },	{ front: "präteritum ihr jobben", back: "ihr jobbtet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) jobben", back: "sie jobbten", lesson: "B1.5" },
{ front: "präteritum ich zurechtkommen", back: "ich kam zurecht", lesson: "B1.5" },	{ front: "präteritum du zurechtkommen", back: "du kamst zurecht", lesson: "B1.5" },	{ front: "präteritum  er zurechtkommen", back: "er kam zurecht", lesson: "B1.5" },	{ front: "präteritum wir zurechtkommen", back: "wir kamen zurecht", lesson: "B1.5" },	{ front: "präteritum ihr zurechtkommen", back: "ihr kamt zurecht", lesson: "B1.5" },	{ front: "präteritum sie(pl.) zurechtkommen", back: "sie kamen zurecht", lesson: "B1.5" },
       
       
{ front: "präteritum ich vertreten", back: "ich vertrat", lesson: "B1.5" },	{ front: "präteritum du vertreten", back: "du vertratst", lesson: "B1.5" },	{ front: "präteritum  er vertreten", back: "er vertrat", lesson: "B1.5" },	{ front: "präteritum wir vertreten", back: "wir vertraten", lesson: "B1.5" },	{ front: "präteritum ihr vertreten", back: "ihr vertratet", lesson: "B1.5" },	{ front: "präteritum sie(pl.) vertreten", back: "sie vertraten", lesson: "B1.5" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
     { front: "präteritum ihr die Verkäuferin", back: "", lesson: "B1.5" },	
       
       
       
       
       
{ front: "präteritum ich lösen", back: "ich löste", lesson: "B1.6" },	{ front: "präteritum du lösen", back: "du löstest", lesson: "B1.6" },	{ front: "präteritum  er lösen", back: "er löste", lesson: "B1.6" },	{ front: "präteritum wir lösen", back: "wir lösten", lesson: "B1.6" },	{ front: "präteritum ihr lösen", back: "ihr löstet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) lösen", back: "sie lösten", lesson: "B1.6" },
       
       
       
       
{ front: "präteritum ich sich lohnen", back: "ich lohnte mich", lesson: "B1.6" },	{ front: "präteritum du sich lohnen", back: "du lohntest dich", lesson: "B1.6" },	{ front: "präteritum  es sich lohnen", back: "es lohnte sich", lesson: "B1.6" },	{ front: "präteritum wir sich lohnen", back: "wir lohnten uns", lesson: "B1.6" },	{ front: "präteritum ihr sich lohnen", back: "ihr lohntet euch", lesson: "B1.6" },	{ front: "präteritum sie(pl.) sich lohnen", back: "sie lohnten sich", lesson: "B1.6" },
       
{ front: "präteritum ich besitzen", back: "ich besaß", lesson: "B1.6" },	{ front: "präteritum du besitzen", back: "du besaßest", lesson: "B1.6" },	{ front: "präteritum  sie besitzen", back: "sie besaß", lesson: "B1.6" },	{ front: "präteritum wir besitzen", back: "wir besaßen", lesson: "B1.6" },	{ front: "präteritum ihr besitzen", back: "ihr besaßt", lesson: "B1.6" },	{ front: "präteritum sie(pl.) besitzen", back: "sie besaßen", lesson: "B1.6" },
{ front: "präteritum ich geboren werden", back: "ich wurde geboren", lesson: "B1.6" },	{ front: "präteritum du geboren werden", back: "du wurdest geboren", lesson: "B1.6" },	{ front: "präteritum  es geboren werden", back: "es wurde geboren", lesson: "B1.6" },	{ front: "präteritum wir geboren werden", back: "wir wurden geboren", lesson: "B1.6" },	{ front: "präteritum ihr geboren werden", back: "ihr wurdet geboren", lesson: "B1.6" },	{ front: "präteritum sie(pl.) geboren werden", back: "sie wurden geboren", lesson: "B1.6" },
{ front: "präteritum ich sich entschließen", back: "ich entschloss mich", lesson: "B1.6" },	{ front: "präteritum du sich entschließen", back: "du entschlossest dich", lesson: "B1.6" },	{ front: "präteritum  er sich entschließen", back: "er entschloss sich", lesson: "B1.6" },	{ front: "präteritum wir sich entschließen", back: "wir entschlossen uns", lesson: "B1.6" },	{ front: "präteritum ihr sich entschließen", back: "ihr entschlosst euch", lesson: "B1.6" },	{ front: "präteritum sie(pl.) sich entschließen", back: "sie entschlossen sich", lesson: "B1.6" },
       
       
       
       
       
       
{ front: "präteritum ich gründen", back: "ich gründete", lesson: "B1.6" },	{ front: "präteritum du gründen", back: "du gründetest", lesson: "B1.6" },	{ front: "präteritum  sie gründen", back: "sie gründete", lesson: "B1.6" },	{ front: "präteritum wir gründen", back: "wir gründeten", lesson: "B1.6" },	{ front: "präteritum ihr gründen", back: "ihr gründetet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) gründen", back: "sie gründeten", lesson: "B1.6" },
{ front: "präteritum ich betreuen", back: "ich betreute", lesson: "B1.6" },	{ front: "präteritum du betreuen", back: "du betreutest", lesson: "B1.6" },	{ front: "präteritum  es betreuen", back: "es betreute", lesson: "B1.6" },	{ front: "präteritum wir betreuen", back: "wir betreuten", lesson: "B1.6" },	{ front: "präteritum ihr betreuen", back: "ihr betreutet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) betreuen", back: "sie betreuten", lesson: "B1.6" },
{ front: "präteritum ich sich gewöhnen", back: "ich gewöhnte mich", lesson: "B1.6" },	{ front: "präteritum du sich gewöhnen", back: "du gewöhn test dich", lesson: "B1.6" },	{ front: "präteritum  er sich gewöhnen", back: "er gewöhnte sich", lesson: "B1.6" },	{ front: "präteritum wir sich gewöhnen", back: "wir gewöhnten uns", lesson: "B1.6" },	{ front: "präteritum ihr sich gewöhnen", back: "ihr gewöhntet euch", lesson: "B1.6" },	{ front: "präteritum sie(pl.) sich gewöhnen", back: "sie gewöhnten sich", lesson: "B1.6" },
{ front: "präteritum ich pflegen", back: "ich pflegte", lesson: "B1.6" },	{ front: "präteritum du pflegen", back: "du pflegtest", lesson: "B1.6" },	{ front: "präteritum  sie pflegen", back: "sie pflegte", lesson: "B1.6" },	{ front: "präteritum wir pflegen", back: "wir pflegten", lesson: "B1.6" },	{ front: "präteritum ihr pflegen", back: "ihr pflegtet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) pflegen", back: "sie pflegten", lesson: "B1.6" },
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich wiederkommen", back: "ich kam wieder", lesson: "B1.6" },	{ front: "präteritum du wiederkommen", back: "du kamst wieder", lesson: "B1.6" },	{ front: "präteritum  er wiederkommen", back: "er kam wieder", lesson: "B1.6" },	{ front: "präteritum wir wiederkommen", back: "wir kamen wieder", lesson: "B1.6" },	{ front: "präteritum ihr wiederkommen", back: "ihr kamt wieder", lesson: "B1.6" },	{ front: "präteritum sie(pl.) wiederkommen", back: "sie kamen wieder", lesson: "B1.6" },
       
       
       
       
{ front: "präteritum ich begrüßen", back: "ich begrüßte", lesson: "B1.6" },	{ front: "präteritum du begrüßen", back: "du begrüßtest", lesson: "B1.6" },	{ front: "präteritum  es begrüßen", back: "es begrüßte", lesson: "B1.6" },	{ front: "präteritum wir begrüßen", back: "wir begrüßten", lesson: "B1.6" },	{ front: "präteritum ihr begrüßen", back: "ihr begrüßtet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) begrüßen", back: "sie begrüßten", lesson: "B1.6" },
{ front: "präteritum ich sich verabschieden", back: "ich verabschiedete mich", lesson: "B1.6" },	{ front: "präteritum du sich verabschieden", back: "du verabschiedetest dich", lesson: "B1.6" },	{ front: "präteritum  er sich verabschieden", back: "er verabschiedete sich", lesson: "B1.6" },	{ front: "präteritum wir sich verabschieden", back: "wir verabschiedeten uns", lesson: "B1.6" },	{ front: "präteritum ihr sich verabschieden", back: "ihr verabschiedetet euch", lesson: "B1.6" },	{ front: "präteritum sie(pl.) sich verabschieden", back: "sie verabschiedeten sich", lesson: "B1.6" },
       
       
{ front: "präteritum ich bestätigen", back: "ich bestätigte", lesson: "B1.6" },	{ front: "präteritum du bestätigen", back: "du bestätigtest", lesson: "B1.6" },	{ front: "präteritum  er bestätigen", back: "er bestätigte", lesson: "B1.6" },	{ front: "präteritum wir bestätigen", back: "wir bestätigten", lesson: "B1.6" },	{ front: "präteritum ihr bestätigen", back: "ihr bestätigtet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) bestätigen", back: "sie bestätigten", lesson: "B1.6" },
       
{ front: "präteritum ich beschädigen", back: "ich beschädigte", lesson: "B1.6" },	{ front: "präteritum du beschädigen", back: "du beschädigtest", lesson: "B1.6" },	{ front: "präteritum  es beschädigen", back: "es beschädigte", lesson: "B1.6" },	{ front: "präteritum wir beschädigen", back: "wir beschädigten", lesson: "B1.6" },	{ front: "präteritum ihr beschädigen", back: "ihr beschädigtet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) beschädigen", back: "sie beschädigten", lesson: "B1.6" },
       
       
{ front: "präteritum ich umtauschen", back: "ich tauschte um", lesson: "B1.6" },	{ front: "präteritum du umtauschen", back: "du tauschtest um", lesson: "B1.6" },	{ front: "präteritum  es umtauschen", back: "es tauschte um", lesson: "B1.6" },	{ front: "präteritum wir umtauschen", back: "wir tauschten um", lesson: "B1.6" },	{ front: "präteritum ihr umtauschen", back: "ihr tauschtet um", lesson: "B1.6" },	{ front: "präteritum sie(pl.) umtauschen", back: "sie tauschten um", lesson: "B1.6" },
       
       
{ front: "präteritum ich fordern", back: "ich forderte", lesson: "B1.6" },	{ front: "präteritum du fordern", back: "du fordertest", lesson: "B1.6" },	{ front: "präteritum  es fordern", back: "es forderte", lesson: "B1.6" },	{ front: "präteritum wir fordern", back: "wir forderten", lesson: "B1.6" },	{ front: "präteritum ihr fordern", back: "ihr fordertet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) fordern", back: "sie forderten", lesson: "B1.6" },
{ front: "präteritum ich enttäuschen", back: "ich enttäuschte", lesson: "B1.6" },	{ front: "präteritum du enttäuschen", back: "du enttäuschtest", lesson: "B1.6" },	{ front: "präteritum  er enttäuschen", back: "er enttäuschte", lesson: "B1.6" },	{ front: "präteritum wir enttäuschen", back: "wir enttäuschten", lesson: "B1.6" },	{ front: "präteritum ihr enttäuschen", back: "ihr enttäuschtet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) enttäuschen", back: "sie enttäuschten", lesson: "B1.6" },
{ front: "präteritum ich auffordern", back: "ich forderte auf", lesson: "B1.6" },	{ front: "präteritum du auffordern", back: "du fordertest auf", lesson: "B1.6" },	{ front: "präteritum  sie auffordern", back: "sie forderte auf", lesson: "B1.6" },	{ front: "präteritum wir auffordern", back: "wir forderten auf", lesson: "B1.6" },	{ front: "präteritum ihr auffordern", back: "ihr fordertet auf", lesson: "B1.6" },	{ front: "präteritum sie(pl.) auffordern", back: "sie forderten auf", lesson: "B1.6" },
       
       
       
       
       
       
       
       
{ front: "präteritum ich gründen", back: "ich gründete", lesson: "B1.6" },	{ front: "präteritum du gründen", back: "du gründetest", lesson: "B1.6" },	{ front: "präteritum  sie gründen", back: "sie gründete", lesson: "B1.6" },	{ front: "präteritum wir gründen", back: "wir gründeten", lesson: "B1.6" },	{ front: "präteritum ihr gründen", back: "ihr gründetet", lesson: "B1.6" },	{ front: "präteritum sie(pl.) gründen", back: "sie gründeten", lesson: "B1.6" },
       
       
{ front: "präteritum ich brennen", back: "ich brannte", lesson: "B1.7" },	{ front: "präteritum du brennen", back: "du branntest", lesson: "B1.7" },	{ front: "präteritum  sie brennen", back: "sie brannte", lesson: "B1.7" },	{ front: "präteritum wir brennen", back: "wir brannten", lesson: "B1.7" },	{ front: "präteritum ihr brennen", back: "ihr branntet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) brennen", back: "sie brannten", lesson: "B1.7" },
       
       
       
       
{ front: "präteritum ich verdächtigen", back: "ich verdächtigte", lesson: "B1.7" },	{ front: "präteritum du verdächtigen", back: "du verdächtigtest", lesson: "B1.7" },	{ front: "präteritum  er verdächtigen", back: "er verdächtigte", lesson: "B1.7" },	{ front: "präteritum wir verdächtigen", back: "wir verdächtigten", lesson: "B1.7" },	{ front: "präteritum ihr verdächtigen", back: "ihr verdächtigtet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) verdächtigen", back: "sie verdächtigten", lesson: "B1.7" },
       
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich schreien", back: "ich schrie", lesson: "B1.7" },	{ front: "präteritum du schreien", back: "du schriest", lesson: "B1.7" },	{ front: "präteritum  er schreien", back: "er schrie", lesson: "B1.7" },	{ front: "präteritum wir schreien", back: "wir schrien", lesson: "B1.7" },	{ front: "präteritum ihr schreien", back: "ihr schriet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) schreien", back: "sie schrien", lesson: "B1.7" },
       
       
       
       
{ front: "präteritum ich entdecken", back: "ich entdeckte", lesson: "B1.7" },	{ front: "präteritum du entdecken", back: "du entdecktest", lesson: "B1.7" },	{ front: "präteritum  es entdecken", back: "es entdeckte", lesson: "B1.7" },	{ front: "präteritum wir entdecken", back: "wir entdeckten", lesson: "B1.7" },	{ front: "präteritum ihr entdecken", back: "ihr entdecktet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) entdecken", back: "sie entdeckten", lesson: "B1.7" },
       
       
       
       
       
       
{ front: "präteritum ich abmachen", back: "ich machte ab", lesson: "B1.7" },	{ front: "präteritum du abmachen", back: "du machtest ab", lesson: "B1.7" },	{ front: "präteritum  er abmachen", back: "er machte ab", lesson: "B1.7" },	{ front: "präteritum wir abmachen", back: "wir machten ab", lesson: "B1.7" },	{ front: "präteritum ihr abmachen", back: "ihr machtet ab", lesson: "B1.7" },	{ front: "präteritum sie(pl.) abmachen", back: "sie machten ab", lesson: "B1.7" },
       
       
       
{ front: "präteritum ich angehen", back: "ich ging an", lesson: "B1.7" },	{ front: "präteritum du angehen", back: "du gingst an", lesson: "B1.7" },	{ front: "präteritum  sie angehen", back: "sie ging an", lesson: "B1.7" },	{ front: "präteritum wir angehen", back: "wir gingen an", lesson: "B1.7" },	{ front: "präteritum ihr angehen", back: "ihr gingt an", lesson: "B1.7" },	{ front: "präteritum sie(pl.) angehen", back: "sie gingen an", lesson: "B1.7" },
       
       
       
       
       
       
       
       
       
       
{ front: "präteritum ich fehlen", back: "ich fehlte", lesson: "B1.7" },	{ front: "präteritum du fehlen", back: "du fehltest", lesson: "B1.7" },	{ front: "präteritum  er fehlen", back: "er fehlte", lesson: "B1.7" },	{ front: "präteritum wir fehlen", back: "wir fehlten", lesson: "B1.7" },	{ front: "präteritum ihr fehlen", back: "ihr fehltet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) fehlen", back: "sie fehlten", lesson: "B1.7" },
       
       
       
       
       
{ front: "präteritum ich herrschen", back: "ich herrschte", lesson: "B1.7" },	{ front: "präteritum du herrschen", back: "du herrschtest", lesson: "B1.7" },	{ front: "präteritum  er herrschen", back: "er herrschte", lesson: "B1.7" },	{ front: "präteritum wir herrschen", back: "wir herrschten", lesson: "B1.7" },	{ front: "präteritum ihr herrschen", back: "ihr herrschtet", lesson: "B1.7" },	{ front: "präteritum sie(pl.) herrschen", back: "sie herrschten", lesson: "B1.7" },
 
{ front: "präteritum ich vergrößern", back: "ich vergrößerte mich", lesson: "B1.7" },	{ front: "präteritum du vergrößern", back: "du vergrößertest dich", lesson: "B1.7" },	{ front: "präteritum  sie vergrößern", back: "sie vergrößerte sich", lesson: "B1.7" },	{ front: "präteritum wir vergrößern", back: "wir vergrößerten uns", lesson: "B1.7" },	{ front: "präteritum ihr vergrößern", back: "ihr vergrößertet euch", lesson: "B1.7" },	{ front: "präteritum sie(pl.) vergrößern", back: "sie vergrößerten sich", lesson: "B1.7" }
];

export default vocabulary;
