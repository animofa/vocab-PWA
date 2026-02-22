const vocabulary = [
{ front: "я", back: "ich", lesson: "A1.1" },	
{ front: "называться", back: "heißen", lesson: "A1.1" },	{ front: "имели название", back: "haben geheißen", lesson: "A1.7" },
{ front: "имя", back: "der Name", lesson: "A1.1" },	{ front: "имена", back: "die Namen", lesson: "A1.1" },
{ front: "приходить", back: "kommen", lesson: "A1.1" },	{ front: "пришли", back: "sein gekommen", lesson: "A1.7" },
{ front: "Германия", back: "das Deutschland", lesson: "A1.1" },	
{ front: "говорить", back: "sprechen", lesson: "A1.1" },	{ front: "говорили", back: "haben gesprochen", lesson: "A1.7" },
{ front: "немецкий (язык)", back: "das Deutsch", lesson: "A1.1" },	
{ front: "и", back: "und", lesson: "A1.1" },	
{ front: "немного", back: "ein bisschen", lesson: "A1.1" },	
{ front: "добрый день", back: "guten Tag", lesson: "A1.1" },	
{ front: "привет", back: "hallo", lesson: "A1.1" },	
{ front: "до свидания", back: "auf Wiedersehen", lesson: "A1.1" },	
{ front: "пока", back: "tschüs", lesson: "A1.1" },	
{ front: "господин", back: "der Herr", lesson: "A1.1" },	{ front: "господа", back: "die Herren", lesson: "A1.1" },
{ front: "ребёнок", back: "das Kind", lesson: "A1.1" },	{ front: "дети", back: "die Kinder", lesson: "A1.1" },
{ front: "добрый вечер", back: "guten Abend", lesson: "A1.1" },	
{ front: "дама", back: "die Dame", lesson: "A1.1" },	{ front: "дамы", back: "die Damen", lesson: "A1.1" },
{ front: "добро пожаловать", back: "willkommen", lesson: "A1.1" },	
{ front: "у/при", back: "bei", lesson: "A1.1" },	
{ front: "музыка", back: "die Musik", lesson: "A1.1" },	
{ front: "международный", back: "international", lesson: "A1.1" },	
{ front: "доброе утро", back: "guten Morgen", lesson: "A1.1" },	
{ front: "женщина", back: "die Frau", lesson: "A1.1" },	{ front: "женщины", back: "die Frauen", lesson: "A1.1" },
{ front: "благодарить", back: "danken", lesson: "A1.1" },	{ front: "благодарили", back: "haben gedankt", lesson: "A1.7" },
{ front: "спокойной ночи", back: "gute Nacht", lesson: "A1.1" },	
{ front: "папа", back: "der Papa", lesson: "A1.1" },	{ front: "папы", back: "die Papas", lesson: "A1.1" },
{ front: "быть", back: "sein", lesson: "A1.1" },	{ front: "был/были", back: "gewesen", lesson: "A1.7" },
{ front: "извинение", back: "die Entschuldigung", lesson: "A1.1" },	{ front: "извинения", back: "die Entschuldigungen", lesson: "A1.1" },
{ front: "как", back: "wie", lesson: "A1.1" },	
{ front: "она/они", back: "sie", lesson: "A1.1" },	
{ front: "кто", back: "wer", lesson: "A1.1" },	
{ front: "да", back: "ja", lesson: "A1.1" },	
{ front: "нет", back: "nein", lesson: "A1.1" },	
{ front: "откуда", back: "woher", lesson: "A1.1" },	
{ front: "из", back: "aus", lesson: "A1.1" },	
{ front: "ты", back: "du", lesson: "A1.1" },	
{ front: "Австрия", back: "Österreich", lesson: "A1.1" },	
{ front: "Швейцария", back: "die Schweiz", lesson: "A1.1" },	
{ front: "ага", back: "aha", lesson: "A1.1" },	
{ front: "классно", back: "toll", lesson: "A1.1" },	
{ front: "интересно", back: "interessant", lesson: "A1.1" },	
{ front: "что", back: "was", lesson: "A1.1" },	
{ front: "тоже", back: "auch", lesson: "A1.1" },	
{ front: "язык", back: "die Sprache", lesson: "A1.1" },	{ front: "языки", back: "die Sprachen", lesson: "A1.1" },
{ front: "буква", back: "der Buchstabe", lesson: "A1.1" },	{ front: "буквы", back: "die Buchstaben", lesson: "A1.1" },
{ front: "алфавит", back: "das Alphabet", lesson: "A1.1" },	
{ front: "что, простите?", back: "wie bitte?", lesson: "A1.1" },	
{ front: "произносить по буквам", back: "buchstabieren", lesson: "A1.1" },	{ front: "произносили по буквам", back: "haben buchstabiert", lesson: "A1.7" },
{ front: "пожалуйста", back: "bitte", lesson: "A1.1" },	
{ front: "фирма", back: "die Firma", lesson: "A1.1" },	{ front: "фирмы", back: "die Firmen", lesson: "A1.1" },
{ front: "большое спасибо", back: "vielen Dank", lesson: "A1.1" },	
{ front: "до свидания (по телефону)", back: "auf Wiederhören", lesson: "A1.1" },	
{ front: "адрес", back: "die Adresse", lesson: "A1.1" },	{ front: "адреса", back: "die Adressen", lesson: "A1.1" },
{ front: "визитная карточка", back: "die Visitenkarte", lesson: "A1.1" },	{ front: "визитные карточки", back: "die Visitenkarten", lesson: "A1.1" },
{ front: "имя (личное)", back: "der Vorname", lesson: "A1.1" },	{ front: "имена (личные)", back: "die Vornamen", lesson: "A1.1" },
{ front: "фамилия", back: "der Familienname", lesson: "A1.1" },	{ front: "фамилии", back: "die Familiennamen", lesson: "A1.1" },
{ front: "улица", back: "die Straße", lesson: "A1.1" },	{ front: "улицы", back: "die Straßen", lesson: "A1.1" },
{ front: "город", back: "die Stadt", lesson: "A1.1" },	{ front: "города", back: "die Städte", lesson: "A1.1" },
{ front: "страна", back: "das Land", lesson: "A1.1" },	{ front: "страны", back: "die Länder", lesson: "A1.1" },
{ front: "электронная почта", back: "die E-Mail", lesson: "A1.1" },	{ front: "электронные письма", back: "die E-Mails", lesson: "A1.1" },
{ front: "телефон", back: "das Telefon", lesson: "A1.1" },	{ front: "телефоны", back: "die Telefone", lesson: "A1.1" },
{ front: "форма (документ)", back: "das Formular", lesson: "A1.1" },	{ front: "формы", back: "die Formulare", lesson: "A1.1" },
{ front: "курс", back: "der Kurs", lesson: "A1.1" },	{ front: "курсы", back: "die Kurse", lesson: "A1.1" },
{ front: "иностранный язык", back: "die Fremdsprache", lesson: "A1.1" },	{ front: "иностранные языки", back: "die Fremdsprachen", lesson: "A1.1" },
{ front: "регистрация", back: "die Anmeldung", lesson: "A1.1" },	{ front: "регистрации", back: "die Anmeldungen", lesson: "A1.1" },
{ front: "почтовый индекс", back: "die Postleitzahl", lesson: "A1.1" },	{ front: "почтовые индексы", back: "die Postleitzahlen", lesson: "A1.1" },
{ front: "учите слова", back: "lernen Sie Wörter", lesson: "A1.1" },	
{ front: "турецкий", back: "türkisch", lesson: "A1.1" },	
{ front: "немецкий", back: "deutsch", lesson: "A1.1" },	
{ front: "Польша", back: "Polen", lesson: "A1.1" },	
{ front: "польский", back: "polnisch", lesson: "A1.1" },	
{ front: "Турция", back: "die Türkei", lesson: "A1.1" },	
{ front: "Испания", back: "Spanien", lesson: "A1.1" },	
{ front: "Венгрия", back: "Ungarn", lesson: "A1.1" },	
{ front: "Германия", back: "Deutschland", lesson: "A1.1" },	
{ front: "Австрия", back: "Österreich", lesson: "A1.1" },	
{ front: "турецкий", back: "türkisch", lesson: "A1.1" },	
{ front: "испанский", back: "spanisch", lesson: "A1.1" },	
{ front: "венгерский", back: "ungarisch", lesson: "A1.1" },	
{ front: "немецкий", back: "deutsch", lesson: "A1.1" },	
{ front: "Швейцария", back: "die Schweiz", lesson: "A1.1" },	
{ front: "Румыния", back: "Rumänien", lesson: "A1.1" },	
{ front: "Сирия", back: "Syrien", lesson: "A1.1" },	
{ front: "Болгария", back: "Bulgarien", lesson: "A1.1" },	
{ front: "Италия", back: "Italien", lesson: "A1.1" },	
{ front: "Греция", back: "Griechenland", lesson: "A1.1" },	
{ front: "румынский", back: "rumänisch", lesson: "A1.1" },	
{ front: "арабский", back: "arabisch", lesson: "A1.1" },	
{ front: "болгарский", back: "bulgarisch", lesson: "A1.1" },	
{ front: "итальянский", back: "italienisch", lesson: "A1.1" },	
{ front: "греческий", back: "griechisch", lesson: "A1.1" },	
{ front: "учить", back: "lernen", lesson: "A1.2" },	{ front: "учили", back: "haben gelernt", lesson: "A1.7" },
{ front: "парк", back: "der Park", lesson: "A1.2" },	{ front: "парки", back: "die Parks", lesson: "A1.2" },
{ front: "пауза", back: "die Pause", lesson: "A1.2" },	{ front: "паузы", back: "die Pausen", lesson: "A1.2" },
{ front: "семья", back: "die Familie", lesson: "A1.2" },	{ front: "семьи", back: "die Familien", lesson: "A1.2" },
{ front: "отец", back: "der Vater", lesson: "A1.2" },	{ front: "отцы", back: "die Väter", lesson: "A1.2" },
{ front: "бабушка и дедушка", back: "die Großeltern", lesson: "A1.2" },	
{ front: "мать", back: "die Mutter", lesson: "A1.2" },	{ front: "матери", back: "die Mütter", lesson: "A1.2" },
{ front: "родители", back: "die Eltern", lesson: "A1.2" },	
{ front: "брат", back: "der Bruder", lesson: "A1.2" },	{ front: "братья", back: "die Brüder", lesson: "A1.2" },
{ front: "братья и сестры", back: "die Geschwister", lesson: "A1.2" },	
{ front: "год", back: "das Jahr", lesson: "A1.2" },	{ front: "годы", back: "die Jahre", lesson: "A1.2" },
{ front: "жить", back: "leben", lesson: "A1.2" },	{ front: "жили", back: "haben gelebt", lesson: "A1.7" },
{ front: "в", back: "in", lesson: "A1.2" },	
{ front: "хороший", back: "gut", lesson: "A1.2" },	
{ front: "супер", back: "super", lesson: "A1.2" },	
{ front: "ну да", back: "na ja", lesson: "A1.2" },	
{ front: "ах", back: "ach", lesson: "A1.2" },	
{ front: "так", back: "so", lesson: "A1.2" },	
{ front: "очень", back: "sehr", lesson: "A1.2" },	
{ front: "внук", back: "der Enkel", lesson: "A1.2" },	{ front: "внуки", back: "die Enkel", lesson: "A1.2" },
{ front: "внучка", back: "die Enkelin", lesson: "A1.2" },	{ front: "внучки", back: "die Enkelinnen", lesson: "A1.2" },
{ front: "дочь", back: "die Tochter", lesson: "A1.2" },	{ front: "дочери", back: "die Töchter", lesson: "A1.2" },
{ front: "сын", back: "der Sohn", lesson: "A1.2" },	{ front: "сыновья", back: "die Söhne", lesson: "A1.2" },
{ front: "сестра", back: "die Schwester", lesson: "A1.2" },	{ front: "сёстры", back: "die Schwestern", lesson: "A1.2" },
{ front: "бабушка", back: "die Oma", lesson: "A1.2" },	{ front: "бабушки", back: "die Omas", lesson: "A1.2" },
{ front: "мужчина, муж", back: "der Mann", lesson: "A1.2" },	{ front: "мужчины", back: "die Männer", lesson: "A1.2" },
{ front: "дедушка", back: "der Opa", lesson: "A1.2" },	{ front: "дедушки", back: "die Opas", lesson: "A1.2" },
{ front: "твой", back: "dein", lesson: "A1.2" },	
{ front: "мой", back: "mein", lesson: "A1.2" },	
{ front: "её / их / ваш", back: "ihr", lesson: "A1.2" },	
{ front: "муж", back: "der Ehemann", lesson: "A1.2" },	{ front: "мужья", back: "die Ehemänner", lesson: "A1.2" },
{ front: "жена", back: "die Ehefrau", lesson: "A1.2" },	{ front: "жены", back: "die Ehefrauen", lesson: "A1.2" },
{ front: "неправильный", back: "falsch", lesson: "A1.2" },	
{ front: "она / они", back: "sie", lesson: "A1.2" },	
{ front: "вместе", back: "zusammen", lesson: "A1.2" },	
{ front: "она / они", back: "sie", lesson: "A1.2" },	
{ front: "разведённый", back: "geschieden", lesson: "A1.2" },	
{ front: "он", back: "er", lesson: "A1.2" },	
{ front: "жить (где-то)", back: "wohnen", lesson: "A1.2" },	{ front: "жили", back: "haben gewohnt", lesson: "A1.7" },
{ front: "сейчас", back: "jetzt", lesson: "A1.2" },	
{ front: "вы (мн.ч.)", back: "ihr", lesson: "A1.2" },	
{ front: "мы", back: "wir", lesson: "A1.2" },	
{ front: "число", back: "die Zahl", lesson: "A1.2" },	{ front: "числа", back: "die Zahlen", lesson: "A1.2" },
{ front: "где", back: "wo", lesson: "A1.2" },	
{ front: "рожденный", back: "geboren", lesson: "A1.2" },	
{ front: "номер", back: "die Nummer", lesson: "A1.2" },	{ front: "номера", back: "die Nummern", lesson: "A1.2" },
{ front: "женатый / замужняя", back: "verheiratet", lesson: "A1.2" },	
{ front: "иметь", back: "haben", lesson: "A1.2" },	{ front: "имели", back: "haben gehabt", lesson: "A1.7" },
{ front: "место рождения", back: "der Geburtsort", lesson: "A1.2" },	{ front: "места рождения", back: "die Geburtsorte", lesson: "A1.2" },
{ front: "место жительства", back: "der Wohnort", lesson: "A1.2" },	{ front: "места жительства", back: "die Wohnorte", lesson: "A1.2" },
{ front: "семейное положение", back: "der Familienstand", lesson: "A1.2" },	
{ front: "неженатый / незамужняя", back: "ledig", lesson: "A1.2" },	
{ front: "вдовец / вдова", back: "verwitwet", lesson: "A1.2" },	
{ front: "возраст", back: "das Alter", lesson: "A1.2" },	{ front: "возраста", back: "die Alter", lesson: "A1.2" },
{ front: "север", back: "der Norden", lesson: "A1.2" },	
{ front: "восток", back: "der Osten", lesson: "A1.2" },	
{ front: "юг", back: "der Süden", lesson: "A1.2" },	
{ front: "запад", back: "der Westen", lesson: "A1.2" },	
{ front: "столица", back: "die Hauptstadt", lesson: "A1.2" },	{ front: "столицы", back: "die Hauptstädte", lesson: "A1.2" },
{ front: "юг", back: "Süd", lesson: "A1.2" },	
{ front: "север", back: "Nord", lesson: "A1.2" },	
{ front: "учитель", back: "der Lehrer", lesson: "A1.2" },	{ front: "учителя", back: "die Lehrer", lesson: "A1.2" },
{ front: "учительница", back: "die Lehrerin", lesson: "A1.2" },	{ front: "учительницы", back: "die Lehrerinnen", lesson: "A1.2" },
{ front: "немец (мужчина)", back: "der Deutsche", lesson: "A1.2" },	{ front: "немцы (мужчины)", back: "die Deutschen", lesson: "A1.2" },
{ front: "немка", back: "die Deutsche", lesson: "A1.2" },	{ front: "немки / немцы (женщины/мужчины)", back: "die Deutschen", lesson: "A1.2" },
{ front: "банан", back: "die Banane", lesson: "A1.3" },	{ front: "бананы", back: "die Bananen", lesson: "A1.3" },
{ front: "масло", back: "die Butter", lesson: "A1.3" },	
{ front: "яйцо", back: "das Ei", lesson: "A1.3" },	{ front: "яйца", back: "die Eier", lesson: "A1.3" },
{ front: "мука", back: "das Mehl", lesson: "A1.3" },	
{ front: "молоко", back: "die Milch", lesson: "A1.3" },	
{ front: "сахар", back: "der Zucker", lesson: "A1.3" },	
{ front: "блин", back: "der Pfannkuchen", lesson: "A1.3" },	{ front: "блины", back: "die Pfannkuchen", lesson: "A1.3" },
{ front: "шоколад", back: "die Schokolade", lesson: "A1.3" },	
{ front: "нуждаться", back: "brauchen", lesson: "A1.3" },	{ front: "нуждались", back: "haben gebraucht", lesson: "A1.7" },
{ front: "покупать", back: "kaufen", lesson: "A1.3" },	{ front: "покупали", back: "haben gekauft", lesson: "A1.7" },
{ front: "голод", back: "der Hunger", lesson: "A1.3" },	
{ front: "евро", back: "der Euro", lesson: "A1.3" },	
{ front: "мясо", back: "das Fleisch", lesson: "A1.3" },	
{ front: "пиво", back: "das Bier", lesson: "A1.3" },	
{ front: "сыр", back: "der Käse", lesson: "A1.3" },	
{ front: "соль", back: "das Salz", lesson: "A1.3" },	
{ front: "чай", back: "der Tee", lesson: "A1.3" },	{ front: "чаи", back: "die Tees", lesson: "A1.3" },
{ front: "хлеб", back: "das Brot", lesson: "A1.3" },	{ front: "хлеба", back: "die Brote", lesson: "A1.3" },
{ front: "вино", back: "der Wein", lesson: "A1.3" },	{ front: "вина", back: "die Weine", lesson: "A1.3" },
{ front: "минеральная вода", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "рис", back: "der Reis", lesson: "A1.3" },	
{ front: "рыба", back: "der Fisch", lesson: "A1.3" },	{ front: "рыбы", back: "die Fische", lesson: "A1.3" },
{ front: "один", back: "ein", lesson: "A1.3" },	
{ front: "никакой, не", back: "kein", lesson: "A1.3" },	
{ front: "яблоко", back: "der Apfel", lesson: "A1.3" },	{ front: "яблоки", back: "die Äpfel", lesson: "A1.3" },
{ front: "апельсин", back: "die Orange", lesson: "A1.3" },	{ front: "апельсины", back: "die Orangen", lesson: "A1.3" },
{ front: "торт, пирог", back: "der Kuchen", lesson: "A1.3" },	{ front: "торты, пироги", back: "die Kuchen", lesson: "A1.3" },
{ front: "кофе", back: "der Kaffee", lesson: "A1.3" },	{ front: "кофе (мн.ч. в значении сорта)", back: "die Kaffees", lesson: "A1.3" },
{ front: "сок", back: "der Saft", lesson: "A1.3" },	{ front: "соки", back: "die Säfte", lesson: "A1.3" },
{ front: "булочка", back: "das Brötchen", lesson: "A1.3" },	{ front: "булочки", back: "die Brötchen", lesson: "A1.3" },
{ front: "сосиска", back: "das Würstchen", lesson: "A1.3" },	{ front: "сосиски", back: "die Würstchen", lesson: "A1.3" },
{ front: "груша", back: "die Birne", lesson: "A1.3" },	{ front: "груши", back: "die Birnen", lesson: "A1.3" },
{ front: "помидор", back: "die Tomate", lesson: "A1.3" },	{ front: "помидоры", back: "die Tomaten", lesson: "A1.3" },
{ front: "картофель", back: "die Kartoffel", lesson: "A1.3" },	{ front: "картофели", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "йогурт", back: "der Joghurt", lesson: "A1.3" },	{ front: "йогурты", back: "die Joghurts", lesson: "A1.3" },
{ front: "лук", back: "die Zwiebel", lesson: "A1.3" },	{ front: "луки", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "полка", back: "das Regal", lesson: "A1.3" },	{ front: "полки", back: "die Regale", lesson: "A1.3" },
{ front: "цена", back: "der Preis", lesson: "A1.3" },	{ front: "цены", back: "die Preise", lesson: "A1.3" },
{ front: "цент", back: "der Cent", lesson: "A1.3" },	
{ front: "проспект (буклет)", back: "der Prospekt", lesson: "A1.3" },	{ front: "проспекты (буклеты)", back: "die Prospekte", lesson: "A1.3" },
{ front: "специальное предложение", back: "das Sonderangebot", lesson: "A1.3" },	{ front: "специальные предложения", back: "die Sonderangebote", lesson: "A1.3" },
{ front: "продукты питания", back: "das Lebensmittel", lesson: "A1.3" },	{ front: "продукты питания", back: "die Lebensmittel", lesson: "A1.3" },
{ front: "сколько", back: "wie viel", lesson: "A1.3" },	
{ front: "стоить", back: "kosten", lesson: "A1.3" },	{ front: "стоили", back: "haben gekostet", lesson: "A1.7" },
{ front: "килограмм", back: "das Kilo(gramm)", lesson: "A1.3" },	
{ front: "грамм", back: "das Gramm", lesson: "A1.3" },	
{ front: "фунт", back: "das Pfund", lesson: "A1.3" },	
{ front: "литр", back: "der Liter", lesson: "A1.3" },	
{ front: "бутылка", back: "die Flasche", lesson: "A1.3" },	{ front: "бутылки", back: "die Flaschen", lesson: "A1.3" },
{ front: "банка", back: "die Dose", lesson: "A1.3" },	{ front: "банки", back: "die Dosen", lesson: "A1.3" },
{ front: "сливки", back: "die Sahne", lesson: "A1.3" },	
{ front: "колбаса", back: "die Wurst", lesson: "A1.3" },	{ front: "колбасы", back: "die Würste", lesson: "A1.3" },
{ front: "фарш", back: "das Hackfleisch", lesson: "A1.3" },	
{ front: "продавец", back: "der Verkäufer", lesson: "A1.3" },	{ front: "продавцы", back: "die Verkäufer", lesson: "A1.3" },
{ front: "продавщица", back: "die Verkäuferin", lesson: "A1.3" },	{ front: "продавщицы", back: "die Verkäuferinnen", lesson: "A1.3" },
{ front: "клиент", back: "der Kunde", lesson: "A1.3" },	{ front: "клиенты", back: "die Kunden", lesson: "A1.3" },
{ front: "клиентка", back: "die Kundin", lesson: "A1.3" },	{ front: "клиентки", back: "die Kundinnen", lesson: "A1.3" },
{ front: "ещё", back: "noch", lesson: "A1.3" },	
{ front: "всё", back: "all", lesson: "A1.3" },	
{ front: "хотеть (вежливо)", back: "möchten", lesson: "A1.3" },	{ front: "хотели (вежливо)", back: "haben gewünscht", lesson: "A1.7" },
{ front: "находить", back: "finden", lesson: "A1.3" },	{ front: "находили", back: "haben gefunden", lesson: "A1.7" },
{ front: "магазин", back: "der Laden", lesson: "A1.3" },	{ front: "магазины", back: "die Läden", lesson: "A1.3" },
{ front: "фрукты", back: "das Obst", lesson: "A1.3" },	
{ front: "овощи", back: "das Gemüse", lesson: "A1.3" },	{ front: "овощи", back: "die Gemüse", lesson: "A1.3" },
{ front: "пекарня", back: "die Bäckerei", lesson: "A1.3" },	{ front: "пекарни", back: "die Bäckereien", lesson: "A1.3" },
{ front: "вода", back: "das Wasser", lesson: "A1.3" },	
{ front: "перец", back: "der Pfeffer", lesson: "A1.3" },	
{ front: "шоколад", back: "die Schokolade", lesson: "A1.3" },	
{ front: "банан", back: "die Banane", lesson: "A1.3" },	{ front: "бананы", back: "die Bananen", lesson: "A1.3" },
{ front: "масло", back: "die Butter", lesson: "A1.3" },	
{ front: "яйцо", back: "das Ei", lesson: "A1.3" },	{ front: "яйца", back: "die Eier", lesson: "A1.3" },
{ front: "молоко", back: "die Milch", lesson: "A1.3" },	
{ front: "хлеб", back: "das Brot", lesson: "A1.3" },	{ front: "хлеба", back: "die Brote", lesson: "A1.3" },
{ front: "рыба", back: "der Fisch", lesson: "A1.3" },	{ front: "рыбы", back: "die Fische", lesson: "A1.3" },
{ front: "мясо", back: "das Fleisch", lesson: "A1.3" },	
{ front: "сыр", back: "der Käse", lesson: "A1.3" },	
{ front: "яблоко", back: "der Apfel", lesson: "A1.3" },	{ front: "яблоки", back: "die Äpfel", lesson: "A1.3" },
{ front: "груша", back: "die Birne", lesson: "A1.3" },	{ front: "груши", back: "die Birnen", lesson: "A1.3" },
{ front: "булочка", back: "das Brötchen", lesson: "A1.3" },	{ front: "булочки", back: "die Brötchen", lesson: "A1.3" },
{ front: "торт, пирог", back: "der Kuchen", lesson: "A1.3" },	{ front: "торты, пироги", back: "die Kuchen", lesson: "A1.3" },
{ front: "апельсин", back: "die Orange", lesson: "A1.3" },	{ front: "апельсины", back: "die Orangen", lesson: "A1.3" },
{ front: "сок", back: "der Saft", lesson: "A1.3" },	{ front: "соки", back: "die Säfte", lesson: "A1.3" },
{ front: "йогурт", back: "der/ das Joghurt", lesson: "A1.3" },	{ front: "йогурты", back: "die Joghurts", lesson: "A1.3" },
{ front: "картофель", back: "die Kartoffel", lesson: "A1.3" },	{ front: "картофель", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "лук", back: "die Zwiebel", lesson: "A1.3" },	{ front: "лук (мн.ч.)", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "помидор", back: "die Tomate", lesson: "A1.3" },	{ front: "помидоры", back: "die Tomaten", lesson: "A1.3" },
{ front: "минеральная вода", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "квартира", back: "die Wohnung", lesson: "A1.4" },	{ front: "квартиры", back: "die Wohnungen", lesson: "A1.4" },
{ front: "лампа", back: "die Lampe", lesson: "A1.4" },	{ front: "лампы", back: "die Lampen", lesson: "A1.4" },
{ front: "комната", back: "das Zimmer", lesson: "A1.4" },	{ front: "комнаты", back: "die Zimmer", lesson: "A1.4" },
{ front: "кухня", back: "die Küche", lesson: "A1.4" },	{ front: "кухни", back: "die Küchen", lesson: "A1.4" },
{ front: "ванная", back: "das Bad", lesson: "A1.4" },	{ front: "ванные", back: "die Bäder", lesson: "A1.4" },
{ front: "старый", back: "alt", lesson: "A1.4" },	
{ front: "новый", back: "neu", lesson: "A1.4" },	
{ front: "большой", back: "groß", lesson: "A1.4" },	
{ front: "маленький", back: "klein", lesson: "A1.4" },	
{ front: "светлый", back: "hell", lesson: "A1.4" },	
{ front: "тёмный", back: "dunkel", lesson: "A1.4" },	
{ front: "дорогой", back: "teuer", lesson: "A1.4" },	
{ front: "дешёвый", back: "billig", lesson: "A1.4" },	
{ front: "красивый", back: "schön", lesson: "A1.4" },	
{ front: "уродливый", back: "hässlich", lesson: "A1.4" },	
{ front: "знать", back: "kennen", lesson: "A1.4" },	{ front: "знали", back: "haben gekannt", lesson: "A1.7" },
{ front: "коридор", back: "der Flur", lesson: "A1.4" },	{ front: "коридоры", back: "die Flure", lesson: "A1.4" },
{ front: "туалет", back: "die Toilette", lesson: "A1.4" },	{ front: "туалеты", back: "die Toiletten", lesson: "A1.4" },
{ front: "балкон", back: "der Balkon", lesson: "A1.4" },	{ front: "балконы", back: "die Balkone", lesson: "A1.4" },
{ front: "гостиная", back: "das Wohnzimmer", lesson: "A1.4" },	{ front: "гостиные", back: "die Wohnzimmer", lesson: "A1.4" },
{ front: "этот, эта, это", back: "der, das, die", lesson: "A1.4" },	
{ front: "дом", back: "das Haus", lesson: "A1.4" },	{ front: "дома", back: "die Häuser", lesson: "A1.4" },
{ front: "здесь", back: "hier", lesson: "A1.4" },	
{ front: "там", back: "dort", lesson: "A1.4" },	
{ front: "но", back: "aber", lesson: "A1.4" },	
{ front: "не", back: "nicht", lesson: "A1.4" },	
{ front: "месяц", back: "der Monat", lesson: "A1.4" },	{ front: "месяцы", back: "die Monate", lesson: "A1.4" },
{ front: "узкий", back: "schmal", lesson: "A1.4" },	
{ front: "правильный", back: "richtig", lesson: "A1.4" },	
{ front: "широкий", back: "breit", lesson: "A1.4" },	
{ front: "шкаф", back: "der Schrank", lesson: "A1.4" },	{ front: "шкафы", back: "die Schränke", lesson: "A1.4" },
{ front: "холодильник", back: "der Kühlschrank", lesson: "A1.4" },	{ front: "холодильники", back: "die Kühlschränke", lesson: "A1.4" },
{ front: "диван", back: "das Sofa", lesson: "A1.4" },	{ front: "диваны", back: "die Sofas", lesson: "A1.4" },
{ front: "стол", back: "der Tisch", lesson: "A1.4" },	{ front: "столы", back: "die Tische", lesson: "A1.4" },
{ front: "стул", back: "der Stuhl", lesson: "A1.4" },	{ front: "стулья", back: "die Stühle", lesson: "A1.4" },
{ front: "кровать", back: "das Bett", lesson: "A1.4" },	{ front: "кровати", back: "die Betten", lesson: "A1.4" },
{ front: "телевизор", back: "der Fernseher", lesson: "A1.4" },	{ front: "телевизоры", back: "die Fernseher", lesson: "A1.4" },
{ front: "душ", back: "die Dusche", lesson: "A1.4" },	{ front: "души", back: "die Duschen", lesson: "A1.4" },
{ front: "плита", back: "der Herd", lesson: "A1.4" },	{ front: "плиты", back: "die Herde", lesson: "A1.4" },
{ front: "ванна", back: "die Badewanne", lesson: "A1.4" },	{ front: "ванны", back: "die Badewannen", lesson: "A1.4" },
{ front: "ковёр", back: "der Teppich", lesson: "A1.4" },	{ front: "ковры", back: "die Teppiche", lesson: "A1.4" },
{ front: "кресло", back: "der Sessel", lesson: "A1.4" },	{ front: "кресла", back: "die Sessel", lesson: "A1.4" },
{ front: "мебель", back: "die Möbel", lesson: "A1.4" },	
{ front: "устройство", back: "das Gerät", lesson: "A1.4" },	{ front: "устройства", back: "die Geräte", lesson: "A1.4" },
{ front: "нравиться", back: "gefallen", lesson: "A1.4" },	{ front: "нравились", back: "haben gefallen", lesson: "A1.7" },
{ front: "цвет", back: "die Farbe", lesson: "A1.4" },	{ front: "цвета", back: "die Farben", lesson: "A1.4" },
{ front: "находить", back: "finden", lesson: "A1.4" },	{ front: "находили", back: "haben gefunden", lesson: "A1.7" },
{ front: "весь, совсем", back: "ganz", lesson: "A1.4" },	
{ front: "современный", back: "modern", lesson: "A1.4" },	
{ front: "чёрный", back: "schwarz", lesson: "A1.4" },	
{ front: "серый", back: "grau", lesson: "A1.4" },	
{ front: "белый", back: "weiß", lesson: "A1.4" },	
{ front: "зелёный", back: "grün", lesson: "A1.4" },	
{ front: "коричневый", back: "braun", lesson: "A1.4" },	
{ front: "синий", back: "blau", lesson: "A1.4" },	
{ front: "красный", back: "rot", lesson: "A1.4" },	
{ front: "жёлтый", back: "gelb", lesson: "A1.4" },	
{ front: "светло-", back: "hell-", lesson: "A1.4" },	
{ front: "темно-", back: "dunkel-", lesson: "A1.4" },	
{ front: "сантиметр", back: "der Zentimeter", lesson: "A1.4" },	{ front: "сантиметры", back: "die Zentimeter", lesson: "A1.4" },
{ front: "раз", back: "mal", lesson: "A1.4" },	
{ front: "мобильный телефон", back: "das Handy", lesson: "A1.4" },	{ front: "мобильные телефоны", back: "die Handys", lesson: "A1.4" },
{ front: "работа", back: "die Arbeit", lesson: "A1.4" },	
{ front: "объявление", back: "die Anzeige", lesson: "A1.4" },	{ front: "объявления", back: "die Anzeigen", lesson: "A1.4" },
{ front: "милый", back: "nett", lesson: "A1.4" },	
{ front: "супруги", back: "das Ehepaar", lesson: "A1.4" },	{ front: "супруги", back: "die Ehepaare", lesson: "A1.4" },
{ front: "искать", back: "suchen", lesson: "A1.4" },	{ front: "искали", back: "haben gesucht", lesson: "A1.7" },
{ front: "сад", back: "der Garten", lesson: "A1.4" },	{ front: "сады", back: "die Gärten", lesson: "A1.4" },
{ front: "сдавать в аренду", back: "vermieten", lesson: "A1.4" },	{ front: "сдавали в аренду", back: "haben vermietet", lesson: "A1.7" },
{ front: "апартамент", back: "das Apartment", lesson: "A1.4" },	{ front: "апартаменты", back: "die Apartments", lesson: "A1.4" },
{ front: "комната, помещение", back: "der Raum", lesson: "A1.4" },	{ front: "комнаты", back: "die Räume", lesson: "A1.4" },
{ front: "этаж", back: "der Stock", lesson: "A1.4" },	
{ front: "приблизительно", back: "circa", lesson: "A1.4" },	
{ front: "частный", back: "privat", lesson: "A1.4" },	
{ front: "коричневый", back: "braun", lesson: "A1.4" },	
{ front: "синий", back: "blau", lesson: "A1.4" },	
{ front: "красный", back: "rot", lesson: "A1.4" },	
{ front: "жёлтый", back: "gelb", lesson: "A1.4" },	
{ front: "цвета", back: "Farben", lesson: "A1.4" },	
{ front: "от", back: "ab", lesson: "A1.4" },	
{ front: "сразу", back: "sofort", lesson: "A1.4" },	
{ front: "максимальный", back: "maximal", lesson: "A1.4" },	
{ front: "звонок", back: "der Anruf", lesson: "A1.4" },	{ front: "звонки", back: "die Anrufe", lesson: "A1.4" },
{ front: "меблированный", back: "möbliert", lesson: "A1.4" },	
{ front: "телевизор", back: "das TV", lesson: "A1.4" },	{ front: "телевизоры", back: "die TVs", lesson: "A1.4" },
{ front: "гараж", back: "die Garage", lesson: "A1.4" },	{ front: "гаражи", back: "die Garagen", lesson: "A1.4" },
{ front: "квадратный метр", back: "der Quadratmeter", lesson: "A1.4" },	{ front: "квадратные метры", back: "die Quadratmeter", lesson: "A1.4" },
{ front: "только", back: "nur", lesson: "A1.4" },	
{ front: "аренда", back: "die Miete", lesson: "A1.4" },	{ front: "аренды", back: "die Mieten", lesson: "A1.4" },
{ front: "платить", back: "bezahlen", lesson: "A1.4" },	{ front: "платили", back: "haben bezahlt", lesson: "A1.7" },
{ front: "продавать", back: "verkaufen", lesson: "A1.4" },	{ front: "продавали", back: "haben verkauft", lesson: "A1.7" },
{ front: "что-то", back: "etwas", lesson: "A1.4" },	
{ front: "компьютер", back: "der Computer", lesson: "A1.4" },	{ front: "компьютеры", back: "die Computer", lesson: "A1.4" },
{ front: "письменный стол", back: "der Schreibtisch", lesson: "A1.4" },	{ front: "письменные столы", back: "die Schreibtische", lesson: "A1.4" },
{ front: "сегодня", back: "heute", lesson: "A1.4" },	
{ front: "какой …?", back: "welche …?", lesson: "A1.4" },	
{ front: "значит, итак", back: "also", lesson: "A1.4" },	
{ front: "приблизительно", back: "ungefähr", lesson: "A1.4" },	
{ front: "метр", back: "der Meter", lesson: "A1.4" },	{ front: "метры", back: "die Meter", lesson: "A1.4" },
{ front: "длинный", back: "lang", lesson: "A1.4" },	
{ front: "точный", back: "genau", lesson: "A1.4" },	
{ front: "видеть", back: "sehen", lesson: "A1.4" },	{ front: "видели", back: "haben gesehen", lesson: "A1.7" },
{ front: "высокий", back: "hoch", lesson: "A1.4" },	
{ front: "завтра", back: "morgen", lesson: "A1.4" },	
{ front: "делать", back: "machen", lesson: "A1.5" },	{ front: "делали", back: "haben gemacht", lesson: "A1.7" },
{ front: "презентация", back: "die Präsentation", lesson: "A1.5" },	{ front: "презентации", back: "die Präsentationen", lesson: "A1.5" },
{ front: "завтракать", back: "frühstücken", lesson: "A1.5" },	{ front: "завтракали", back: "haben gefrühstückt", lesson: "A1.7" },
{ front: "делать покупки", back: "einkaufen", lesson: "A1.5" },	{ front: "делали покупки", back: "haben eingekauft", lesson: "A1.7" },
{ front: "слушать", back: "hören", lesson: "A1.5" },	{ front: "слушали", back: "haben gehört", lesson: "A1.7" },
{ front: "готовить", back: "kochen", lesson: "A1.5" },	{ front: "готовили", back: "haben gekocht", lesson: "A1.7" },
{ front: "гулять", back: "spazieren gehen", lesson: "A1.5" },	{ front: "гуляли", back: "sein spaziert", lesson: "A1.7" },
{ front: "убирать", back: "aufräumen", lesson: "A1.5" },	{ front: "убирали", back: "haben aufgeräumt", lesson: "A1.7" },
{ front: "вставать", back: "aufstehen", lesson: "A1.5" },	{ front: "вставали", back: "sein aufgestanden", lesson: "A1.7" },
{ front: "идти", back: "gehen", lesson: "A1.5" },	{ front: "шли", back: "sein gegangen", lesson: "A1.7" },
{ front: "или", back: "oder", lesson: "A1.5" },	
{ front: "уставший", back: "müde", lesson: "A1.5" },	
{ front: "звонить", back: "anrufen", lesson: "A1.5" },	{ front: "звонили", back: "haben angerufen", lesson: "A1.7" },
{ front: "рано", back: "früh", lesson: "A1.5" },	
{ front: "супермаркет", back: "der Supermarkt", lesson: "A1.5" },	{ front: "супермаркеты", back: "die Supermärkte", lesson: "A1.5" },
{ front: "смотреть телевизор", back: "fernsehen", lesson: "A1.5" },	{ front: "смотрели телевизор", back: "haben ferngesehen", lesson: "A1.7" },
{ front: "с", back: "mit", lesson: "A1.5" },	
{ front: "работать", back: "arbeiten", lesson: "A1.5" },	{ front: "работали", back: "haben gearbeitet", lesson: "A1.7" },
{ front: "долго", back: "lange", lesson: "A1.5" },	
{ front: "играть", back: "spielen", lesson: "A1.5" },	{ front: "играли", back: "haben gespielt", lesson: "A1.7" },
{ front: "есть", back: "essen", lesson: "A1.5" },	{ front: "ели", back: "haben gegessen", lesson: "A1.7" },
{ front: "охотно", back: "gern", lesson: "A1.5" },	
{ front: "поздно", back: "spät", lesson: "A1.5" },	
{ front: "уже", back: "schon", lesson: "A1.5" },	
{ front: "сначала", back: "erst", lesson: "A1.5" },	
{ front: "квартал", back: "das Viertel", lesson: "A1.5" },	{ front: "кварталы", back: "die Viertel", lesson: "A1.5" },
{ front: "до, перед", back: "vor", lesson: "A1.5" },	
{ front: "после", back: "nach", lesson: "A1.5" },	
{ front: "половина", back: "halb", lesson: "A1.5" },	
{ front: "часы", back: "die Uhr", lesson: "A1.5" },	{ front: "часы", back: "die Uhren", lesson: "A1.5" },
{ front: "короткий", back: "kurz", lesson: "A1.5" },	
{ front: "сейчас, одинаковый", back: "gleich", lesson: "A1.5" },	
{ front: "интенсивный курс", back: "der Intensivkurs", lesson: "A1.5" },	{ front: "интенсивные курсы", back: "die Intensivkurse", lesson: "A1.5" },
{ front: "начинать", back: "anfangen", lesson: "A1.5" },	{ front: "начали", back: "haben angefangen", lesson: "A1.7" },
{ front: "в (день, дата)", back: "am", lesson: "A1.5" },	
{ front: "понедельник", back: "der Montag", lesson: "A1.5" },	{ front: "понедельники", back: "die Montage", lesson: "A1.5" },
{ front: "пятница", back: "der Freitag", lesson: "A1.5" },	{ front: "пятницы", back: "die Freitage", lesson: "A1.5" },
{ front: "четверг", back: "der Donnerstag", lesson: "A1.5" },	{ front: "четверги", back: "die Donnerstage", lesson: "A1.5" },
{ front: "среда", back: "der Mittwoch", lesson: "A1.5" },	{ front: "среды", back: "die Mittwoche", lesson: "A1.5" },
{ front: "вторник", back: "der Dienstag", lesson: "A1.5" },	{ front: "вторники", back: "die Dienstage", lesson: "A1.5" },
{ front: "когда", back: "wann", lesson: "A1.5" },	
{ front: "в (время)", back: "um", lesson: "A1.5" },	
{ front: "заканчивать", back: "enden", lesson: "A1.5" },	{ front: "закончили", back: "haben geendet", lesson: "A1.7" },
{ front: "с ... до ...", back: "von ... bis ...", lesson: "A1.5" },	
{ front: "вечеринка", back: "die Party", lesson: "A1.5" },	{ front: "вечеринки", back: "die Partys", lesson: "A1.5" },
{ front: "время", back: "die Zeit", lesson: "A1.5" },	{ front: "времена", back: "die Zeiten", lesson: "A1.5" },
{ front: "футбол", back: "der Fußball", lesson: "A1.5" },	
{ front: "суббота", back: "der Samstag", lesson: "A1.5" },	{ front: "субботы", back: "die Samstage", lesson: "A1.5" },
{ front: "воскресенье", back: "der Sonntag", lesson: "A1.5" },	{ front: "воскресенья", back: "die Sonntage", lesson: "A1.5" },
{ front: "домашнее задание", back: "die Hausaufgabe", lesson: "A1.5" },	{ front: "домашние задания", back: "die Hausaufgaben", lesson: "A1.5" },
{ front: "мама", back: "die Mama", lesson: "A1.5" },	{ front: "мамы", back: "die Mamas", lesson: "A1.5" },
{ front: "спать", back: "schlafen", lesson: "A1.5" },	{ front: "спали", back: "haben geschlafen", lesson: "A1.7" },
{ front: "выходные", back: "das Wochenende", lesson: "A1.5" },	{ front: "выходные", back: "die Wochenenden", lesson: "A1.5" },
{ front: "следующий", back: "nächst-", lesson: "A1.5" },	
{ front: "неделя", back: "die Woche", lesson: "A1.5" },	{ front: "недели", back: "die Wochen", lesson: "A1.5" },
{ front: "полдень", back: "der Mittag", lesson: "A1.5" },	{ front: "полдни", back: "die Mittage", lesson: "A1.5" },
{ front: "утро", back: "der Morgen", lesson: "A1.5" },	{ front: "утра", back: "die Morgen", lesson: "A1.5" },
{ front: "вечер", back: "der Abend", lesson: "A1.5" },	{ front: "вечера", back: "die Abende", lesson: "A1.5" },
{ front: "послеобеденное время", back: "der Nachmittag", lesson: "A1.5" },	{ front: "послеобеденное время", back: "die Nachmittage", lesson: "A1.5" },
{ front: "дообеденное время", back: "der Vormittag", lesson: "A1.5" },	{ front: "дообеденное время", back: "die Vormittage", lesson: "A1.5" },
{ front: "ночь", back: "die Nacht", lesson: "A1.5" },	{ front: "ночи", back: "die Nächte", lesson: "A1.5" },
{ front: "кинотеатр", back: "das Kino", lesson: "A1.5" },	{ front: "кинотеатры", back: "die Kinos", lesson: "A1.5" },
{ front: "спорт", back: "der Sport", lesson: "A1.5" },	
{ front: "пить", back: "trinken", lesson: "A1.5" },	{ front: "пили", back: "haben getrunken", lesson: "A1.7" },
{ front: "пицца", back: "die Pizza", lesson: "A1.5" },	{ front: "пиццы", back: "die Pizzen", lesson: "A1.5" },
{ front: "чатиться", back: "chatten", lesson: "A1.5" },	{ front: "чатились", back: "haben gechattet", lesson: "A1.7" },
{ front: "открытый", back: "geöffnet", lesson: "A1.5" },	
{ front: "назначенная встреча", back: "der Termin", lesson: "A1.5" },	{ front: "назначенные встречи", back: "die Termine", lesson: "A1.5" },
{ front: "детский сад", back: "der Kindergarten", lesson: "A1.5" },	{ front: "детские сады", back: "die Kindergärten", lesson: "A1.5" },
{ front: "магазин", back: "das Geschäft", lesson: "A1.5" },	{ front: "магазины", back: "die Geschäfte", lesson: "A1.5" },
{ front: "библиотека", back: "die Bibliothek", lesson: "A1.5" },	{ front: "библиотеки", back: "die Bibliotheken", lesson: "A1.5" },
{ front: "закрытый", back: "geschlossen", lesson: "A1.5" },	
{ front: "открывать", back: "öffnen", lesson: "A1.5" },	{ front: "открывали", back: "haben geöffnet", lesson: "A1.7" },
{ front: "закрывать", back: "schließen", lesson: "A1.5" },	{ front: "закрывали", back: "haben geschlossen", lesson: "A1.7" },
{ front: "практика, врачебный кабинет", back: "die Praxis", lesson: "A1.5" },	{ front: "практики, врачебные кабинеты", back: "die Praxen", lesson: "A1.5" },
{ front: "день", back: "der Tag", lesson: "A1.5" },	{ front: "дни", back: "die Tage", lesson: "A1.5" },
{ front: "каждый", back: "jed-", lesson: "A1.5" },	
{ front: "детский сад", back: "die Kita", lesson: "A1.5" },	{ front: "детские сады", back: "die Kitas", lesson: "A1.5" },
{ front: "приносить", back: "bringen", lesson: "A1.5" },	{ front: "приносили", back: "haben gebracht", lesson: "A1.7" },
{ front: "забирать", back: "abholen", lesson: "A1.5" },	{ front: "забирали", back: "haben abgeholt", lesson: "A1.7" },
{ front: "больше", back: "mehr", lesson: "A1.5" },	
{ front: "пример", back: "das Beispiel", lesson: "A1.5" },	{ front: "примеры", back: "die Beispiele", lesson: "A1.5" },
{ front: "например", back: "zum Beispiel", lesson: "A1.5" },	
{ front: "снова", back: "wieder", lesson: "A1.5" },	
{ front: "друг", back: "der Freund", lesson: "A1.5" },	{ front: "друзья", back: "die Freunde", lesson: "A1.5" },
{ front: "подруга", back: "die Freundin", lesson: "A1.5" },	{ front: "подруги", back: "die Freundinnen", lesson: "A1.5" },
{ front: "спрашивать", back: "fragen", lesson: "A1.5" },	{ front: "спрашивали", back: "haben gefragt", lesson: "A1.7" },
{ front: "отвечать", back: "antworten", lesson: "A1.5" },	{ front: "отвечали", back: "haben geantwortet", lesson: "A1.7" },
{ front: "полный, совершенно", back: "total", lesson: "A1.5" },	
{ front: "экскурсия", back: "der Ausflug", lesson: "A1.6" },	{ front: "экскурсии", back: "die Ausflüge", lesson: "A1.6" },
{ front: "автомобиль", back: "das Auto", lesson: "A1.6" },	{ front: "автомобили", back: "die Autos", lesson: "A1.6" },
{ front: "ходить в поход", back: "wandern", lesson: "A1.6" },	{ front: "ходили в поход", back: "sein gewandert", lesson: "A1.7" },
{ front: "пикник", back: "das Picknick", lesson: "A1.6" },	{ front: "пикники", back: "die Picknicks", lesson: "A1.6" },
{ front: "гитара", back: "die Gitarre", lesson: "A1.6" },	{ front: "гитары", back: "die Gitarren", lesson: "A1.6" },
{ front: "звонить по телефону", back: "telefonieren", lesson: "A1.6" },	{ front: "звонили по телефону", back: "haben telefoniert", lesson: "A1.7" },
{ front: "погода", back: "das Wetter", lesson: "A1.6" },	
{ front: "солнце", back: "die Sonne", lesson: "A1.6" },	
{ front: "светить", back: "scheinen", lesson: "A1.6" },	{ front: "светили", back: "haben geschienen", lesson: "A1.7" },
{ front: "идти (о дожде)", back: "regnen", lesson: "A1.6" },	{ front: "шел дождь", back: "haben geregnet", lesson: "A1.7" },
{ front: "много", back: "viel-", lesson: "A1.6" },	
{ front: "облако", back: "die Wolke", lesson: "A1.6" },	{ front: "облака", back: "die Wolken", lesson: "A1.6" },
{ front: "начать (начинать идти)", back: "los (losgehen)", lesson: "A1.6" },	
{ front: "забывать", back: "vergessen", lesson: "A1.6" },	{ front: "забывали", back: "haben vergessen", lesson: "A1.7" },
{ front: "жажда", back: "der Durst", lesson: "A1.6" },	
{ front: "градус", back: "das Grad", lesson: "A1.6" },	
{ front: "теплый", back: "warm", lesson: "A1.6" },	
{ front: "ветреный", back: "windig", lesson: "A1.6" },	
{ front: "холодный", back: "kalt", lesson: "A1.6" },	
{ front: "идти (о снеге)", back: "schneien", lesson: "A1.6" },	{ front: "шел снег", back: "haben geschneit", lesson: "A1.7" },
{ front: "пасмурно", back: "bewölkt", lesson: "A1.6" },	
{ front: "прогноз погоды", back: "der Wetterbericht", lesson: "A1.6" },	{ front: "прогнозы погоды", back: "die Wetterberichte", lesson: "A1.6" },
{ front: "середина", back: "die Mitte", lesson: "A1.6" },	
{ front: "везде", back: "überall", lesson: "A1.6" },	
{ front: "температура", back: "die Temperatur", lesson: "A1.6" },	{ front: "температуры", back: "die Temperaturen", lesson: "A1.6" },
{ front: "подниматься", back: "steigen", lesson: "A1.6" },	{ front: "поднимались", back: "sein gestiegen", lesson: "A1.7" },
{ front: "солнечно", back: "sonnig", lesson: "A1.6" },	
{ front: "легкий", back: "leicht", lesson: "A1.6" },	
{ front: "оставаться", back: "bleiben", lesson: "A1.6" },	{ front: "оставались", back: "sein geblieben", lesson: "A1.7" },
{ front: "дождь", back: "der Regen", lesson: "A1.6" },	
{ front: "снег", back: "der Schnee", lesson: "A1.6" },	
{ front: "плюс", back: "plus", lesson: "A1.6" },	
{ front: "минус", back: "minus", lesson: "A1.6" },	
{ front: "радио", back: "das Radio", lesson: "A1.6" },	{ front: "радио (мн.ч.)", back: "die Radios", lesson: "A1.6" },
{ front: "интернет", back: "das Internet", lesson: "A1.6" },	
{ front: "лето", back: "der Sommer", lesson: "A1.6" },	{ front: "лета", back: "die Sommer", lesson: "A1.6" },
{ front: "жарко", back: "heiß", lesson: "A1.6" },	
{ front: "весна", back: "der Frühling", lesson: "A1.6" },	{ front: "весны", back: "die Frühlinge", lesson: "A1.6" },
{ front: "осень", back: "der Herbst", lesson: "A1.6" },	{ front: "осени", back: "die Herbste", lesson: "A1.6" },
{ front: "плохой", back: "schlecht", lesson: "A1.6" },	
{ front: "зима", back: "der Winter", lesson: "A1.6" },	{ front: "зимы", back: "die Winter", lesson: "A1.6" },
{ front: "ветер", back: "der Wind", lesson: "A1.6" },	{ front: "ветры", back: "die Winde", lesson: "A1.6" },
{ front: "приятный", back: "angenehm", lesson: "A1.6" },	
{ front: "меню", back: "die Speisekarte", lesson: "A1.6" },	{ front: "меню (мн.ч.)", back: "die Speisekarten", lesson: "A1.6" },
{ front: "гамбургер", back: "der Hamburger", lesson: "A1.6" },	{ front: "гамбургеры", back: "die Hamburger", lesson: "A1.6" },
{ front: "блюдо", back: "die Speise", lesson: "A1.6" },	{ front: "блюда", back: "die Speisen", lesson: "A1.6" },
{ front: "картофель фри", back: "die Pommes frites", lesson: "A1.6" },	
{ front: "порция", back: "die Portion", lesson: "A1.6" },	{ front: "порции", back: "die Portionen", lesson: "A1.6" },
{ front: "кетчуп", back: "der Ketchup", lesson: "A1.6" },	{ front: "кетчупы", back: "die Ketchups", lesson: "A1.6" },
{ front: "салат", back: "der Salat", lesson: "A1.6" },	{ front: "салаты", back: "die Salate", lesson: "A1.6" },
{ front: "ветчина", back: "der Schinken", lesson: "A1.6" },	{ front: "ветчины", back: "die Schinken", lesson: "A1.6" },
{ front: "напиток", back: "das Getränk", lesson: "A1.6" },	{ front: "напитки", back: "die Getränke", lesson: "A1.6" },
{ front: "кола", back: "die Cola", lesson: "A1.6" },	{ front: "колы", back: "die Colas", lesson: "A1.6" },
{ front: "же, всё-таки", back: "doch", lesson: "A1.6" },	
{ front: "скорее, лучше", back: "lieber", lesson: "A1.6" },	
{ front: "брать", back: "nehmen", lesson: "A1.6" },	{ front: "брали", back: "haben genommen", lesson: "A1.7" },
{ front: "почему", back: "warum", lesson: "A1.6" },	
{ front: "собака", back: "der Hund", lesson: "A1.6" },	{ front: "собаки", back: "die Hunde", lesson: "A1.6" },
{ front: "мороженое", back: "das Eis", lesson: "A1.6" },	
{ front: "танцевать", back: "tanzen", lesson: "A1.6" },	{ front: "танцевали", back: "haben getanzt", lesson: "A1.7" },
{ front: "плавать", back: "schwimmen", lesson: "A1.6" },	{ front: "плавали", back: "sein geschwommen", lesson: "A1.7" },
{ front: "встречать", back: "treffen", lesson: "A1.6" },	{ front: "встречали", back: "haben getroffen", lesson: "A1.7" },
{ front: "велосипед", back: "das Fahrrad", lesson: "A1.6" },	{ front: "велосипеды", back: "die Fahrräder", lesson: "A1.6" },
{ front: "ехать", back: "fahren", lesson: "A1.6" },	{ front: "ездили", back: "sein gefahren", lesson: "A1.7" },
{ front: "жарить на гриле", back: "grillen", lesson: "A1.6" },	{ front: "жарили на гриле", back: "haben gegrillt", lesson: "A1.7" },
{ front: "свободное время", back: "die Freizeit", lesson: "A1.6" },	
{ front: "хобби", back: "das Hobby", lesson: "A1.6" },	{ front: "хобби (мн.ч.)", back: "die Hobbys", lesson: "A1.6" },
{ front: "читать", back: "lesen", lesson: "A1.6" },	{ front: "читали", back: "haben gelesen", lesson: "A1.7" },
{ front: "детектив (книга, фильм)", back: "der Krimi", lesson: "A1.6" },	{ front: "детективы", back: "die Krimis", lesson: "A1.6" },
{ front: "любимый", back: "Lieblings-", lesson: "A1.6" },	
{ front: "фильм", back: "der Film", lesson: "A1.6" },	{ front: "фильмы", back: "die Filme", lesson: "A1.6" },
{ front: "важный", back: "wichtig", lesson: "A1.6" },	
{ front: "гриль", back: "der Grill", lesson: "A1.6" },	{ front: "грили", back: "die Grills", lesson: "A1.6" },
{ front: "собирать", back: "sammeln", lesson: "A1.6" },	{ front: "собирали", back: "haben gesammelt", lesson: "A1.7" },
{ front: "профессия", back: "der Beruf", lesson: "A1.6" },	{ front: "профессии", back: "die Berufe", lesson: "A1.6" },
{ front: "фото", back: "das Foto", lesson: "A1.6" },	{ front: "фото (мн.ч.)", back: "die Fotos", lesson: "A1.6" },
{ front: "особенно", back: "besonders", lesson: "A1.6" },	
{ front: "фотографировать", back: "fotografieren", lesson: "A1.6" },	{ front: "фотографировали", back: "haben fotografiert", lesson: "A1.7" },
{ front: "удовольствие, удовольствие", back: "der Spaß", lesson: "A1.6" },	
{ front: "смартфон", back: "das Smartphone", lesson: "A1.6" },	{ front: "смартфоны", back: "die Smartphones", lesson: "A1.6" },
{ front: "глупый", back: "dumm", lesson: "A1.6" },	
{ front: "часто", back: "oft", lesson: "A1.6" },	
{ front: "иметь в виду", back: "meinen", lesson: "A1.6" },	{ front: "имели в виду", back: "haben gemeint", lesson: "A1.7" },
{ front: "кубик", back: "der Würfel", lesson: "A1.6" },	{ front: "кубики", back: "die Würfel", lesson: "A1.6" },
{ front: "игра", back: "das Spiel", lesson: "A1.6" },	{ front: "игры", back: "die Spiele", lesson: "A1.6" },
{ front: "к сожалению", back: "leider", lesson: "A1.6" },	
{ front: "проблема", back: "das Problem", lesson: "A1.6" },	{ front: "проблемы", back: "die Probleme", lesson: "A1.6" },
{ front: "всегда", back: "immer", lesson: "A1.6" },	
{ front: "возможно", back: "vielleicht", lesson: "A1.6" },	
{ front: "простой", back: "einfach", lesson: "A1.6" },	
{ front: "быстрый", back: "schnell", lesson: "A1.6" },	
{ front: "солнце", back: "die Sonne", lesson: "A1.6" },	{ front: "солнца", back: "die Sonnen", lesson: "A1.6" },
{ front: "Солнечно.", back: "Es ist sonnig.", lesson: "A1.6" },	
{ front: "дождь", back: "der Regen", lesson: "A1.6" },	
{ front: "Идет дождь.", back: "Es regnet.", lesson: "A1.6" },	
{ front: "облако", back: "die Wolke", lesson: "A1.6" },	{ front: "облака", back: "die Wolken", lesson: "A1.6" },
{ front: "пасмурно", back: "es ist bewölkt", lesson: "A1.6" },	
{ front: "снег", back: "der Schnee", lesson: "A1.6" },	
{ front: "идет снег", back: "es schneit", lesson: "A1.6" },	
{ front: "ветер", back: "der Wind", lesson: "A1.6" },	{ front: "ветры", back: "die Winde", lesson: "A1.6" },
{ front: "ветрено", back: "es ist windig", lesson: "A1.6" },	
{ front: "холодно", back: "es ist kalt", lesson: "A1.6" },	
{ front: "тепло", back: "es ist warm", lesson: "A1.6" },	
{ front: "отлично", back: "prima", lesson: "A1.7" },	
{ front: "команда", back: "das Team", lesson: "A1.7" },	{ front: "команды", back: "die Teams", lesson: "A1.7" },
{ front: "будить", back: "wecken", lesson: "A1.7" },	{ front: "будили", back: "haben geweckt", lesson: "A1.7" },
{ front: "завтрак", back: "das Frühstück", lesson: "A1.7" },	{ front: "завтраки", back: "die Frühstücke", lesson: "A1.7" },
{ front: "готовый", back: "fertig", lesson: "A1.7" },	
{ front: "начинать, отправляться", back: "los sein", lesson: "A1.7" },	
{ front: "писать", back: "schreiben", lesson: "A1.7" },	{ front: "писали", back: "haben geschrieben", lesson: "A1.7" },
{ front: "математика", back: "die Mathematik", lesson: "A1.7" },	
{ front: "тест", back: "der Test", lesson: "A1.7" },	{ front: "тесты", back: "die Tests", lesson: "A1.7" },
{ front: "пунктуальный", back: "pünktlich", lesson: "A1.7" },	
{ front: "ни в коем случае / в любом случае", back: "auf keinen/jeden Fall", lesson: "A1.7" },	
{ front: "иметь вкус", back: "schmecken", lesson: "A1.7" },	{ front: "имели вкус", back: "haben geschmeckt", lesson: "A1.7" },
{ front: "домой", back: "nach Hause", lesson: "A1.7" },	
{ front: "школа", back: "die Schule", lesson: "A1.7" },	{ front: "школы", back: "die Schulen", lesson: "A1.7" },
{ front: "мочь", back: "können", lesson: "A1.7" },	{ front: "могли", back: "haben gekonnt", lesson: "A1.7" },
{ front: "больной", back: "krank", lesson: "A1.7" },	
{ front: "врач", back: "der Arzt", lesson: "A1.7" },	{ front: "врачи", back: "die Ärzte", lesson: "A1.7" },
{ front: "врач (женщина)", back: "die Ärztin", lesson: "A1.7" },	{ front: "врачи (женщины)", back: "die Ärztinnen", lesson: "A1.7" },
{ front: "печь", back: "backen", lesson: "A1.7" },	{ front: "пекли", back: "haben gebacken", lesson: "A1.7" },
{ front: "петь", back: "singen", lesson: "A1.7" },	{ front: "пели", back: "haben gesungen", lesson: "A1.7" },
{ front: "ездить верхом", back: "reiten", lesson: "A1.7" },	{ front: "ездили верхом", back: "sein geritten", lesson: "A1.7" },
{ front: "пианино", back: "das Klavier", lesson: "A1.7" },	{ front: "пианино (мн.ч.)", back: "die Klaviere", lesson: "A1.7" },
{ front: "рисовать", back: "malen", lesson: "A1.7" },	{ front: "рисовали", back: "haben gemalt", lesson: "A1.7" },
{ front: "лыжа", back: "der Ski", lesson: "A1.7" },	{ front: "лыжи", back: "die Skier", lesson: "A1.7" },
{ front: "теннис (играть)", back: "das Tennis (spielen)", lesson: "A1.7" },	
{ front: "хотеть", back: "wollen", lesson: "A1.7" },	{ front: "хотели", back: "haben gewollt", lesson: "A1.7" },
{ front: "наконец", back: "endlich", lesson: "A1.7" },	
{ front: "песня", back: "das Lied", lesson: "A1.7" },	{ front: "песни", back: "die Lieder", lesson: "A1.7" },
{ front: "упражняться", back: "üben", lesson: "A1.7" },	{ front: "упражнялись", back: "haben geübt", lesson: "A1.7" },
{ front: "текст", back: "der Text", lesson: "A1.7" },	{ front: "тексты", back: "die Texte", lesson: "A1.7" },
{ front: "упражнение", back: "die Übung", lesson: "A1.7" },	{ front: "упражнения", back: "die Übungen", lesson: "A1.7" },
{ front: "письмо", back: "der Brief", lesson: "A1.7" },	{ front: "письма", back: "die Briefe", lesson: "A1.7" },
{ front: "диктант", back: "das Diktat", lesson: "A1.7" },	{ front: "диктанты", back: "die Diktate", lesson: "A1.7" },
{ front: "книга", back: "das Buch", lesson: "A1.7" },	{ front: "книги", back: "die Bücher", lesson: "A1.7" },
{ front: "играть на гитаре", back: "Gitarre spielen", lesson: "A1.7" },	{ front: "играли на гитаре", back: "haben Gitarre gespielt", lesson: "A1.7" },
{ front: "ездить на велосипеде", back: "Fahrrad fahren", lesson: "A1.7" },	{ front: "ездили на велосипеде", back: "sein Fahrrad gefahren", lesson: "A1.7" },
{ front: "встречать друзей", back: "Freunde treffen", lesson: "A1.7" },	{ front: "встречали", back: "haben getroffen", lesson: "A1.7" },
{ front: "кататься на лыжах", back: "Ski fahren", lesson: "A1.7" },	{ front: "катались на лыжах", back: "sein Ski gefahren", lesson: "A1.7" },
{ front: "играть в теннис", back: "Tennis spielen", lesson: "A1.7" },	{ front: "играли в теннис", back: "haben Tennis gespielt", lesson: "A1.7" },
{ front: "история", back: "die Geschichte", lesson: "A1.8" },	{ front: "истории", back: "die Geschichten", lesson: "A1.8" },
{ front: "больница", back: "das Krankenhaus", lesson: "A1.8" },	{ front: "больницы", back: "die Krankenhäuser", lesson: "A1.8" },
{ front: "интервью", back: "das Interview", lesson: "A1.8" },	{ front: "интервью", back: "die Interviews", lesson: "A1.8" },
{ front: "газета", back: "die Zeitung", lesson: "A1.8" },	{ front: "газеты", back: "die Zeitungen", lesson: "A1.8" },
{ front: "телевидение", back: "das Fernsehen", lesson: "A1.8" },	
{ front: "образование", back: "die Ausbildung", lesson: "A1.8" },	{ front: "образования", back: "die Ausbildungen", lesson: "A1.8" },
{ front: "начальник", back: "der Chef", lesson: "A1.8" },	{ front: "начальники", back: "die Chefs", lesson: "A1.8" },
{ front: "начальница", back: "die Chefin", lesson: "A1.8" },	{ front: "начальницы", back: "die Chefinnen", lesson: "A1.8" },
{ front: "пациент", back: "der Patient", lesson: "A1.8" },	{ front: "пациенты", back: "die Patienten", lesson: "A1.8" },
{ front: "пациентка", back: "die Patientin", lesson: "A1.8" },	{ front: "пациентки", back: "die Patientinnen", lesson: "A1.8" },
{ front: "дворник/заведующий", back: "der Hausmeister", lesson: "A1.8" },	{ front: "дворники/заведующие", back: "die Hausmeister", lesson: "A1.8" },
{ front: "дворничиха/заведующая", back: "die Hausmeisterin", lesson: "A1.8" },	{ front: "дворничихи/заведующие", back: "die Hausmeisterinnen", lesson: "A1.8" },
{ front: "журналист", back: "der Journalist", lesson: "A1.8" },	{ front: "журналисты", back: "die Journalisten", lesson: "A1.8" },
{ front: "журналистка", back: "die Journalistin", lesson: "A1.8" },	{ front: "журналистки", back: "die Journalistinnen", lesson: "A1.8" },
{ front: "тема", back: "das Thema", lesson: "A1.8" },	{ front: "темы", back: "die Themen", lesson: "A1.8" },
{ front: "мехатроник", back: "der Mechatroniker", lesson: "A1.8" },	{ front: "мехатроники", back: "die Mechatroniker", lesson: "A1.8" },
{ front: "мехатроник (женщина)", back: "die Mechatronikerin", lesson: "A1.8" },	{ front: "мехатроники (женщины)", back: "die Mechatronikerinnen", lesson: "A1.8" },
{ front: "домохозяин", back: "der Hausmann", lesson: "A1.8" },	{ front: "домохозяева", back: "die Hausmänner", lesson: "A1.8" },
{ front: "домохозяйка", back: "die Hausfrau", lesson: "A1.8" },	{ front: "домохозяйки", back: "die Hausfrauen", lesson: "A1.8" },
{ front: "полицейский", back: "der Polizist", lesson: "A1.8" },	{ front: "полицейские", back: "die Polizisten", lesson: "A1.8" },
{ front: "полицейская", back: "die Polizistin", lesson: "A1.8" },	{ front: "полицейские (женщины)", back: "die Polizistinnen", lesson: "A1.8" },
{ front: "санитар/медбрат", back: "der Krankenpfleger", lesson: "A1.8" },	{ front: "медсёстры", back: "die Krankenschwestern", lesson: "A1.8" },
{ front: "медсестра", back: "die Krankenschwester", lesson: "A1.8" },	{ front: "медсёстры", back: "die Krankenschwestern", lesson: "A1.8" },
{ front: "профессиональный", back: "beruflich", lesson: "A1.8" },	
{ front: "ученик", back: "der Schüler", lesson: "A1.8" },	{ front: "ученики", back: "die Schüler", lesson: "A1.8" },
{ front: "ученица", back: "die Schülerin", lesson: "A1.8" },	{ front: "ученицы", back: "die Schülerinnen", lesson: "A1.8" },
{ front: "студент", back: "der Student", lesson: "A1.8" },	{ front: "студенты", back: "die Studenten", lesson: "A1.8" },
{ front: "студентка", back: "die Studentin", lesson: "A1.8" },	{ front: "студентки", back: "die Studentinnen", lesson: "A1.8" },
{ front: "учиться", back: "studieren", lesson: "A1.8" },	{ front: "учились", back: "haben studiert", lesson: "A1.8" },
{ front: "работа", back: "der Job", lesson: "A1.8" },	{ front: "работы", back: "die Jobs", lesson: "A1.8" },
{ front: "место работы", back: "die Stelle", lesson: "A1.8" },	{ front: "места работы", back: "die Stellen", lesson: "A1.8" },
{ front: "самостоятельный", back: "selbstständig", lesson: "A1.8" },	
{ front: "работающий по профессии", back: "berufstätig", lesson: "A1.8" },	
{ front: "безработный", back: "arbeitslos", lesson: "A1.8" },	
{ front: "в настоящее время", back: "zurzeit", lesson: "A1.8" },	
{ front: "таксист", back: "der Taxifahrer", lesson: "A1.8" },	{ front: "таксисты", back: "die Taxifahrer", lesson: "A1.8" },
{ front: "таксистка", back: "die Taxifahrerin", lesson: "A1.8" },	{ front: "таксистки", back: "die Taxifahrerinnen", lesson: "A1.8" },
{ front: "длиться", back: "dauern", lesson: "A1.8" },	{ front: "длились", back: "haben gedauert", lesson: "A1.8" },
{ front: "с (временной предлог)", back: "seit", lesson: "A1.8" },	
{ front: "заявление (о приеме)", back: "die Bewerbung", lesson: "A1.8" },	{ front: "заявления", back: "die Bewerbungen", lesson: "A1.8" },
{ front: "практика", back: "das Praktikum", lesson: "A1.8" },	{ front: "практики", back: "die Praktika", lesson: "A1.8" },
{ front: "отдел", back: "die Abteilung", lesson: "A1.8" },	{ front: "отделы", back: "die Abteilungen", lesson: "A1.8" },
{ front: "руководитель", back: "der Leiter", lesson: "A1.8" },	{ front: "руководители", back: "die Leiter", lesson: "A1.8" },
{ front: "руководительница", back: "die Leiterin", lesson: "A1.8" },	{ front: "руководительницы", back: "die Leiterinnen", lesson: "A1.8" },
{ front: "уважаемый", back: "geehrt", lesson: "A1.8" },	
{ front: "экономика", back: "die Wirtschaft", lesson: "A1.8" },	
{ front: "диплом", back: "das Diplom", lesson: "A1.8" },	{ front: "дипломы", back: "die Diplome", lesson: "A1.8" },
{ front: "как раз, прямо", back: "gerade", lesson: "A1.8" },	
{ front: "офис", back: "das Büro", lesson: "A1.8" },	{ front: "офисы", back: "die Büros", lesson: "A1.8" },
{ front: "информация", back: "die Information", lesson: "A1.8" },	{ front: "информация (мн.ч.)", back: "die Informationen", lesson: "A1.8" },
{ front: "приветствие", back: "der Gruß", lesson: "A1.8" },	{ front: "приветствия", back: "die Grüße", lesson: "A1.8" },
{ front: "жениться/выйти замуж", back: "heiraten", lesson: "A1.8" },	{ front: "женились/вышли замуж", back: "haben geheiratet", lesson: "A1.8" },
{ front: "на самом деле", back: "eigentlich", lesson: "A1.8" },	
{ front: "позже", back: "später", lesson: "A1.8" },	
{ front: "гид", back: "der Reiseführer", lesson: "A1.8" },	{ front: "гиды", back: "die Reiseführer", lesson: "A1.8" },
{ front: "гид (женщина)", back: "die Reiseführerin", lesson: "A1.8" },	{ front: "гиды (женщины)", back: "die Reiseführerinnen", lesson: "A1.8" },
{ front: "турист", back: "der Tourist", lesson: "A1.8" },	{ front: "туристы", back: "die Touristen", lesson: "A1.8" },
{ front: "туристка", back: "die Touristin", lesson: "A1.8" },	{ front: "туристки", back: "die Touristinnen", lesson: "A1.8" },
{ front: "показывать", back: "zeigen", lesson: "A1.8" },	{ front: "показывали", back: "haben gezeigt", lesson: "A1.8" },
{ front: "профессиональный опыт", back: "die Berufserfahrung", lesson: "A1.8" },	
{ front: "кафе", back: "das Café", lesson: "A1.8" },	{ front: "кафе", back: "die Cafés", lesson: "A1.8" },
{ front: "стресс", back: "der Stress", lesson: "A1.8" },	
{ front: "иногда", back: "manchmal", lesson: "A1.8" },	
{ front: "официант", back: "der Kellner", lesson: "A1.8" },	{ front: "официанты", back: "die Kellner", lesson: "A1.8" },
{ front: "официантка", back: "die Kellnerin", lesson: "A1.8" },	{ front: "официантки", back: "die Kellnerinnen", lesson: "A1.8" },
{ front: "ресторан", back: "das Restaurant", lesson: "A1.8" },	{ front: "рестораны", back: "die Restaurants", lesson: "A1.8" },
{ front: "архитектор", back: "der Architekt", lesson: "A1.8" },	{ front: "архитекторы", back: "die Architekten", lesson: "A1.8" },
{ front: "архитектор (женщина)", back: "die Architektin", lesson: "A1.8" },	{ front: "архитекторы (женщины)", back: "die Architektinnen", lesson: "A1.8" },
{ front: "повар", back: "der Koch", lesson: "A1.8" },	{ front: "повара", back: "die Köche", lesson: "A1.8" },
{ front: "повариха", back: "die Köchin", lesson: "A1.8" },	{ front: "поварихи", back: "die Köchinnen", lesson: "A1.8" },
{ front: "работник", back: "der Arbeiter", lesson: "A1.8" },	{ front: "работники", back: "die Arbeiter", lesson: "A1.8" },
{ front: "работница", back: "die Arbeiterin", lesson: "A1.8" },	{ front: "работницы", back: "die Arbeiterinnen", lesson: "A1.8" },
{ front: "мало", back: "wenig", lesson: "A1.8" },	
{ front: "коллега", back: "der Kollege", lesson: "A1.8" },	{ front: "коллеги", back: "die Kollegen", lesson: "A1.8" },
{ front: "коллега (женщина)", back: "die Kollegin", lesson: "A1.8" },	{ front: "коллеги (женщины)", back: "die Kolleginnen", lesson: "A1.8" },
{ front: "заграница", back: "das Ausland", lesson: "A1.8" },	
{ front: "другой", back: "ander-", lesson: "A1.8" },	
{ front: "рабочее место", back: "der Arbeitsplatz", lesson: "A1.8" },	{ front: "рабочие места", back: "die Arbeitsplätze", lesson: "A1.8" },
{ front: "мечта", back: "der Traum", lesson: "A1.8" },	{ front: "мечты", back: "die Träume", lesson: "A1.8" },
{ front: "мечтательный", back: "traum-", lesson: "A1.8" },	
{ front: "в течение дня", back: "tagsüber", lesson: "A1.8" },	
{ front: "три раза", back: "dreimal", lesson: "A1.8" },	
{ front: "получать", back: "bekommen", lesson: "A1.8" },	{ front: "получили", back: "haben bekommen", lesson: "A1.8" },
{ front: "секретарь", back: "der Sekretär", lesson: "A1.8" },	{ front: "секретари", back: "die Sekretäre", lesson: "A1.8" },
{ front: "секретарь (женщина)", back: "die Sekretärin", lesson: "A1.8" },	{ front: "секретари (женщины)", back: "die Sekretärinnen", lesson: "A1.8" },
{ front: "университет", back: "die Universität", lesson: "A1.8" },	{ front: "университеты", back: "die Universitäten", lesson: "A1.8" },
{ front: "срочный", back: "befristet", lesson: "A1.8" },	
{ front: "полная занятость", back: "die Vollzeit", lesson: "A1.8" },	
{ front: "неполная занятость", back: "die Teilzeit", lesson: "A1.8" },	
{ front: "полный рабочий день", back: "ganztags", lesson: "A1.8" },	
{ front: "полдня", back: "halbtags", lesson: "A1.8" },	
{ front: "до полудня", back: "vormittags", lesson: "A1.8" },	
{ front: "после полудня", back: "nachmittags", lesson: "A1.8" },	
{ front: "репетиторство", back: "die Nachhilfe", lesson: "A1.8" },	
{ front: "по понедельникам", back: "montags", lesson: "A1.8" },	
{ front: "по четвергам", back: "donnerstags", lesson: "A1.8" },	
{ front: "пенсионер", back: "der Senior", lesson: "A1.8" },	{ front: "пенсионеры", back: "die Senioren", lesson: "A1.8" },
{ front: "пенсионерский", back: "senioren-", lesson: "A1.8" },	
{ front: "временный работник", back: "die Aushilfe", lesson: "A1.8" },	{ front: "временные работники", back: "die Aushilfen", lesson: "A1.8" },
{ front: "срочно", back: "dringend", lesson: "A1.8" },	
{ front: "сервис", back: "der Service", lesson: "A1.8" },	
{ front: "по вечерам", back: "abends", lesson: "A1.8" },	
{ front: "по вторникам", back: "dienstags", lesson: "A1.8" },	
{ front: "по средам", back: "mittwochs", lesson: "A1.8" },	
{ front: "по пятницам", back: "freitags", lesson: "A1.8" },	
{ front: "по воскресеньям", back: "sonntags", lesson: "A1.8" },	
{ front: "платить", back: "zahlen", lesson: "A1.8" },	{ front: "платили", back: "haben gezahlt", lesson: "A1.8" },
{ front: "за", back: "pro", lesson: "A1.8" },	
{ front: "час", back: "die Stunde", lesson: "A1.8" },	{ front: "часы", back: "die Stunden", lesson: "A1.8" },
{ front: "спрос", back: "die Nachfrage", lesson: "A1.8" },	{ front: "споры", back: "die Nachfragen", lesson: "A1.8" },
{ front: "свободный", back: "frei", lesson: "A1.8" },	
{ front: "каждый раз", back: "jeweils", lesson: "A1.8" },	
{ front: "по субботам", back: "samstags", lesson: "A1.8" },	
{ front: "водительское удостоверение", back: "der Führerschein", lesson: "A1.9" },	{ front: "водительские удостоверения", back: "die Führerscheine", lesson: "A1.9" },
{ front: "билет", back: "das Ticket", lesson: "A1.9" },	{ front: "билеты", back: "die Tickets", lesson: "A1.9" },
{ front: "учреждение, ведомство", back: "das Amt", lesson: "A1.9" },	{ front: "учреждения, ведомства", back: "die Ämter", lesson: "A1.9" },
{ front: "действительный", back: "gültig", lesson: "A1.9" },	
{ front: "арендовать", back: "mieten", lesson: "A1.9" },	{ front: "арендовали", back: "haben gemietet", lesson: "A1.9" },
{ front: "иностранный", back: "ausländisch", lesson: "A1.9" },	
{ front: "европейский", back: "europäisch", lesson: "A1.9" },	
{ front: "Европейский союз", back: "die Europäische Union", lesson: "A1.9" },	
{ front: "молодой", back: "jung", lesson: "A1.9" },	
{ front: "поездка", back: "die Fahrt", lesson: "A1.9" },	{ front: "поездки", back: "die Fahrten", lesson: "A1.9" },
{ front: "билет", back: "die Fahrkarte", lesson: "A1.9" },	{ front: "билеты", back: "die Fahrkarten", lesson: "A1.9" },
{ front: "заявление", back: "der Antrag", lesson: "A1.9" },	{ front: "заявления", back: "die Anträge", lesson: "A1.9" },
{ front: "должен", back: "müssen", lesson: "A1.9" },	{ front: "долженствовали", back: "haben gemusst", lesson: "A1.9" },
{ front: "заполнять", back: "ausfüllen", lesson: "A1.9" },	{ front: "заполнили", back: "haben ausgefüllt", lesson: "A1.9" },
{ front: "удостоверение личности", back: "der Ausweis", lesson: "A1.9" },	{ front: "удостоверения личности", back: "die Ausweise", lesson: "A1.9" },
{ front: "приносить", back: "mitbringen", lesson: "A1.9" },	{ front: "приносили", back: "haben mitgebracht", lesson: "A1.9" },
{ front: "бумага", back: "das Papier", lesson: "A1.9" },	{ front: "бумаги", back: "die Papiere", lesson: "A1.9" },
{ front: "подписывать", back: "unterschreiben", lesson: "A1.9" },	{ front: "подписали", back: "haben unterschrieben", lesson: "A1.9" },
{ front: "наличный", back: "bar", lesson: "A1.9" },	
{ front: "автомат", back: "der Automat", lesson: "A1.9" },	{ front: "автоматы", back: "die Automaten", lesson: "A1.9" },
{ front: "функционировать", back: "funktionieren", lesson: "A1.9" },	{ front: "функционировали", back: "haben funktioniert", lesson: "A1.9" },
{ front: "цель", back: "das Ziel", lesson: "A1.9" },	{ front: "цели", back: "die Ziele", lesson: "A1.9" },
{ front: "выбирать", back: "wählen", lesson: "A1.9" },	{ front: "выбирали", back: "haben gewählt", lesson: "A1.9" },
{ front: "взрослый / взрослая", back: "der Erwachsene / die Erwachsene", lesson: "A1.9" },	{ front: "взрослые", back: "die Erwachsenen", lesson: "A1.9" },
{ front: "выбирать", back: "auswählen", lesson: "A1.9" },	{ front: "выбрали", back: "haben ausgewählt", lesson: "A1.9" },
{ front: "человек (общ.)", back: "man", lesson: "A1.9" },	
{ front: "сначала", back: "zuerst", lesson: "A1.9" },	
{ front: "затем", back: "danach", lesson: "A1.9" },	
{ front: "потом", back: "dann", lesson: "A1.9" },	
{ front: "конец", back: "der Schluss", lesson: "A1.9" },	
{ front: "тихо", back: "leise", lesson: "A1.9" },	
{ front: "объяснять", back: "erklären", lesson: "A1.9" },	{ front: "объяснили", back: "haben erklärt", lesson: "A1.9" },
{ front: "громко", back: "laut", lesson: "A1.9" },	
{ front: "выключать", back: "ausmachen", lesson: "A1.9" },	{ front: "выключили", back: "haben ausgemacht", lesson: "A1.9" },
{ front: "слушать", back: "zuhören", lesson: "A1.9" },	{ front: "слушали", back: "haben zugehört", lesson: "A1.9" },
{ front: "вставать", back: "aufstehen", lesson: "A1.9" },	{ front: "вставали", back: "sein aufgestanden", lesson: "A1.9" },
{ front: "ждать", back: "warten", lesson: "A1.9" },	{ front: "ждали", back: "haben gewartet", lesson: "A1.9" },
{ front: "плата", back: "die Gebühr", lesson: "A1.9" },	{ front: "платы", back: "die Gebühren", lesson: "A1.9" },
{ front: "касса", back: "die Kasse", lesson: "A1.9" },	{ front: "кассы", back: "die Kassen", lesson: "A1.9" },
{ front: "смеяться", back: "lachen", lesson: "A1.9" },	{ front: "смеялись", back: "haben gelacht", lesson: "A1.9" },
{ front: "момент", back: "der Moment", lesson: "A1.9" },	{ front: "моменты", back: "die Momente", lesson: "A1.9" },
{ front: "подавать заявление", back: "beantragen", lesson: "A1.9" },	{ front: "подавали заявление", back: "haben beantragt", lesson: "A1.9" },
{ front: "иметь разрешение", back: "dürfen", lesson: "A1.9" },	{ front: "имели разрешение", back: "haben gedurft", lesson: "A1.9" },
{ front: "внимание", back: "Achtung", lesson: "A1.9" },	
{ front: "сигарета", back: "die Zigarette", lesson: "A1.9" },	{ front: "сигареты", back: "die Zigaretten", lesson: "A1.9" },
{ front: "курить", back: "rauchen", lesson: "A1.9" },	{ front: "курили", back: "haben geraucht", lesson: "A1.9" },
{ front: "медленно", back: "langsam", lesson: "A1.9" },	
{ front: "парковка", back: "der Parkplatz", lesson: "A1.9" },	{ front: "парковки", back: "die Parkplätze", lesson: "A1.9" },
{ front: "парковаться", back: "parken", lesson: "A1.9" },	{ front: "парковались", back: "haben geparkt", lesson: "A1.9" },
{ front: "разрешённый", back: "erlaubt", lesson: "A1.9" },	
{ front: "запрещённый", back: "verboten", lesson: "A1.9" },	
{ front: "багаж", back: "das Gepäck", lesson: "A1.9" },	
{ front: "сдавать", back: "abgeben", lesson: "A1.9" },	{ front: "сдавали", back: "haben abgegeben", lesson: "A1.9" },
{ front: "брать с собой", back: "mitnehmen", lesson: "A1.9" },	{ front: "брали с собой", back: "haben mitgenommen", lesson: "A1.9" },
{ front: "один", back: "allein", lesson: "A1.9" },	
{ front: "орган власти", back: "die Behörde", lesson: "A1.9" },	{ front: "органы власти", back: "die Behörden", lesson: "A1.9" },
{ front: "человек", back: "die Person", lesson: "A1.9" },	{ front: "люди", back: "die Personen", lesson: "A1.9" },
{ front: "девичья фамилия", back: "der Geburtsname", lesson: "A1.9" },	{ front: "девичьи фамилии", back: "die Geburtsnamen", lesson: "A1.9" },
{ front: "пол", back: "das Geschlecht", lesson: "A1.9" },	{ front: "полы", back: "die Geschlechter", lesson: "A1.9" },
{ front: "иностранец", back: "der Ausländer", lesson: "A1.9" },	{ front: "иностранцы", back: "die Ausländer", lesson: "A1.9" },
{ front: "иностранка", back: "die Ausländerin", lesson: "A1.9" },	{ front: "иностранки", back: "die Ausländerinnen", lesson: "A1.9" },
{ front: "жить раздельно", back: "getrennt leben", lesson: "A1.9" },	
{ front: "мужской", back: "männlich", lesson: "A1.9" },	
{ front: "женский", back: "weiblich", lesson: "A1.9" },	
{ front: "родственник / родственница", back: "der Angehörige / die Angehörige", lesson: "A1.9" },	{ front: "родственники", back: "die Angehörigen", lesson: "A1.9" },
{ front: "означать", back: "bedeuten", lesson: "A1.9" },	{ front: "означали", back: "haben bedeutet", lesson: "A1.9" },
{ front: "повторять", back: "wiederholen", lesson: "A1.9" },	{ front: "повторяли", back: "haben wiederholt", lesson: "A1.9" },
{ front: "понимать", back: "verstehen", lesson: "A1.9" },	{ front: "понимали", back: "haben verstanden", lesson: "A1.9" },
{ front: "языковая школа", back: "die Sprachenschule", lesson: "A1.9" },	{ front: "языковые школы", back: "die Sprachenschulen", lesson: "A1.9" },
{ front: "посещать", back: "besuchen", lesson: "A1.9" },	{ front: "посещали", back: "haben besucht", lesson: "A1.9" },
{ front: "помогать", back: "helfen", lesson: "A1.9" },	{ front: "помогали", back: "haben geholfen", lesson: "A1.9" },
{ front: "справка", back: "die Auskunft", lesson: "A1.9" },	{ front: "справки", back: "die Auskünfte", lesson: "A1.9" },
{ front: "разрешение", back: "die Erlaubnis", lesson: "A1.9" },	
{ front: "объяснение", back: "die Erklärung", lesson: "A1.9" },	{ front: "объяснения", back: "die Erklärungen", lesson: "A1.9" },
{ front: "документ", back: "das Dokument", lesson: "A1.9" },	{ front: "документы", back: "die Dokumente", lesson: "A1.9" },
{ front: "деньги", back: "das Geld", lesson: "A1.9" },	
{ front: "достаточно", back: "genug", lesson: "A1.9" },	
{ front: "доход", back: "das Einkommen", lesson: "A1.9" },	
{ front: "путешествие", back: "die Reise", lesson: "A1.9" },	{ front: "путешествия", back: "die Reisen", lesson: "A1.9" },
{ front: "страховка", back: "die Versicherung", lesson: "A1.9" },	{ front: "страховки", back: "die Versicherungen", lesson: "A1.9" },
{ front: "посольство", back: "die Botschaft", lesson: "A1.9" },	{ front: "посольства", back: "die Botschaften", lesson: "A1.9" },
{ front: "виза", back: "das Visum", lesson: "A1.9" },	{ front: "визы", back: "die Visa", lesson: "A1.9" },
{ front: "приносить", back: "holen", lesson: "A1.9" },	{ front: "приносили", back: "haben geholt", lesson: "A1.9" },
{ front: "сотрудник", back: "der Mitarbeiter", lesson: "A1.9" },	
{ front: "сотрудница", back: "die Mitarbeiterin", lesson: "A1.9" },	
{ front: "чиновник", back: "der Beamte", lesson: "A1.9" },	
{ front: "чиновница", back: "die Beamtin", lesson: "A1.9" },	
{ front: "зарабатывать", back: "verdienen", lesson: "A1.9" },	{ front: "зарабатывали", back: "haben verdient", lesson: "A1.9" },
{ front: "паспорт", back: "der Pass", lesson: "A1.9" },	{ front: "паспорта", back: "die Pässe", lesson: "A1.9" },
{ front: "путешествовать", back: "reisen", lesson: "A1.9" },	{ front: "путешествовали", back: "sein gereist", lesson: "A1.9" },
{ front: "клуб", back: "der Klub", lesson: "A1.10" },	{ front: "клубы", back: "die Klubs", lesson: "A1.10" },
{ front: "приемное отделение (скорой помощи)", back: "die Notaufnahme", lesson: "A1.10" },	{ front: "приемные отделения", back: "die Notaufnahmen", lesson: "A1.10" },
{ front: "область, зона", back: "der Bereich", lesson: "A1.10" },	{ front: "области, зоны", back: "die Bereiche", lesson: "A1.10" },
{ front: "таблетка", back: "die Tablette", lesson: "A1.10" },	{ front: "таблетки", back: "die Tabletten", lesson: "A1.10" },
{ front: "глаз", back: "das Auge", lesson: "A1.10" },	{ front: "глаза", back: "die Augen", lesson: "A1.10" },
{ front: "причинять боль", back: "weh tun", lesson: "A1.10" },	{ front: "причинили боль", back: "haben wehgetan", lesson: "A1.10" },
{ front: "авария, несчастный случай", back: "der Unfall", lesson: "A1.10" },	{ front: "аварии, несчастные случаи", back: "die Unfälle", lesson: "A1.10" },
{ front: "доктор", back: "der Doktor", lesson: "A1.10" },	{ front: "доктора", back: "die Doktoren", lesson: "A1.10" },
{ front: "боль", back: "der Schmerz", lesson: "A1.10" },	{ front: "боли", back: "die Schmerzen", lesson: "A1.10" },
{ front: "должен", back: "sollen", lesson: "A1.10" },	{ front: "долженствовали", back: "haben gesollt", lesson: "A1.10" },
{ front: "оба", back: "beide", lesson: "A1.10" },	
{ front: "веселый", back: "lustig", lesson: "A1.10" },	
{ front: "плохой, серьезный", back: "schlimm", lesson: "A1.10" },	
{ front: "давать", back: "geben", lesson: "A1.10" },	{ front: "дали", back: "haben gegeben", lesson: "A1.10" },
{ front: "идея", back: "die Idee", lesson: "A1.10" },	{ front: "идеи", back: "die Ideen", lesson: "A1.10" },
{ front: "нога (от колена вниз)", back: "das Bein", lesson: "A1.10" },	{ front: "ноги", back: "die Beine", lesson: "A1.10" },
{ front: "волос", back: "das Haar", lesson: "A1.10" },	{ front: "волосы", back: "die Haare", lesson: "A1.10" },
{ front: "ухо", back: "das Ohr", lesson: "A1.10" },	{ front: "уши", back: "die Ohren", lesson: "A1.10" },
{ front: "рука", back: "der Arm", lesson: "A1.10" },	{ front: "руки", back: "die Arme", lesson: "A1.10" },
{ front: "живот", back: "der Bauch", lesson: "A1.10" },	{ front: "животы", back: "die Bäuche", lesson: "A1.10" },
{ front: "палец", back: "der Finger", lesson: "A1.10" },	{ front: "пальцы", back: "die Finger", lesson: "A1.10" },
{ front: "ступня", back: "der Fuß", lesson: "A1.10" },	{ front: "ступни", back: "die Füße", lesson: "A1.10" },
{ front: "шея", back: "der Hals", lesson: "A1.10" },	{ front: "шеи", back: "die Hälse", lesson: "A1.10" },
{ front: "голова", back: "der Kopf", lesson: "A1.10" },	{ front: "головы", back: "die Köpfe", lesson: "A1.10" },
{ front: "спина", back: "der Rücken", lesson: "A1.10" },	
{ front: "грудь", back: "die Brust", lesson: "A1.10" },	{ front: "груди", back: "die Brüste", lesson: "A1.10" },
{ front: "кисть руки", back: "die Hand", lesson: "A1.10" },	{ front: "кисти рук", back: "die Hände", lesson: "A1.10" },
{ front: "нос", back: "die Nase", lesson: "A1.10" },	{ front: "носы", back: "die Nasen", lesson: "A1.10" },
{ front: "рот", back: "der Mund", lesson: "A1.10" },	{ front: "рты", back: "die Münder", lesson: "A1.10" },
{ front: "быть", back: "sein", lesson: "A1.10" },	
{ front: "её, их", back: "ihr", lesson: "A1.10" },	
{ front: "зуб", back: "der Zahn", lesson: "A1.10" },	{ front: "зубы", back: "die Zähne", lesson: "A1.10" },
{ front: "информировать", back: "informieren", lesson: "A1.10" },	{ front: "информировали", back: "haben informiert", lesson: "A1.10" },
{ front: "наш", back: "unser", lesson: "A1.10" },	
{ front: "выпадать, не состояться", back: "ausfallen", lesson: "A1.10" },	{ front: "выпали, не состоялись", back: "ist ausgefallen", lesson: "A1.10" },
{ front: "сообщение", back: "die Nachricht", lesson: "A1.10" },	{ front: "сообщения", back: "die Nachrichten", lesson: "A1.10" },
{ front: "поцелуй", back: "der Kuss", lesson: "A1.10" },	{ front: "поцелуи", back: "die Küsse", lesson: "A1.10" },
{ front: "ваш", back: "euer", lesson: "A1.10" },	
{ front: "здоровый", back: "gesund", lesson: "A1.10" },	
{ front: "надеюсь", back: "hoffentlich", lesson: "A1.10" },	
{ front: "знакомый / знакомая", back: "der Bekannte / die Bekannte", lesson: "A1.10" },	{ front: "знакомые / знакомые", back: "die Bekannten / die Bekannten", lesson: "A1.10" },
{ front: "шаг", back: "der Schritt", lesson: "A1.10" },	{ front: "шаги", back: "die Schritte", lesson: "A1.10" },
{ front: "несколько", back: "ein paar", lesson: "A1.10" },	
{ front: "медицина, лекарство", back: "die Medizin", lesson: "A1.10" },	
{ front: "спокойный", back: "ruhig", lesson: "A1.10" },	
{ front: "аптека", back: "die Apotheke", lesson: "A1.10" },	{ front: "аптеки", back: "die Apotheken", lesson: "A1.10" },
{ front: "жар", back: "das Fieber", lesson: "A1.10" },	
{ front: "кашель", back: "der Husten", lesson: "A1.10" },	
{ front: "мазь", back: "die Salbe", lesson: "A1.10" },	{ front: "мази", back: "die Salben", lesson: "A1.10" },
{ front: "использовать", back: "verwenden", lesson: "A1.10" },	{ front: "использовали", back: "haben verwendet", lesson: "A1.10" },
{ front: "здоровье", back: "die Gesundheit", lesson: "A1.10" },	
{ front: "насморк", back: "der Schnupfen", lesson: "A1.10" },	
{ front: "делать", back: "tun", lesson: "A1.10" },	{ front: "делали", back: "haben getan", lesson: "A1.10" },
{ front: "отправитель", back: "der Absender", lesson: "A1.10" },	{ front: "отправители", back: "die Absender", lesson: "A1.10" },
{ front: "место", back: "der Ort", lesson: "A1.10" },	{ front: "места", back: "die Orte", lesson: "A1.10" },
{ front: "получатель", back: "der Empfänger", lesson: "A1.10" },	{ front: "получатели", back: "die Empfänger", lesson: "A1.10" },
{ front: "обращение", back: "die Anrede", lesson: "A1.10" },	{ front: "обращения", back: "die Anreden", lesson: "A1.10" },
{ front: "дата", back: "das Datum", lesson: "A1.10" },	{ front: "даты", back: "die Daten", lesson: "A1.10" },
{ front: "подпись", back: "die Unterschrift", lesson: "A1.10" },	{ front: "подписи", back: "die Unterschriften", lesson: "A1.10" },
{ front: "посылать", back: "schicken", lesson: "A1.10" },	{ front: "послали", back: "haben geschickt", lesson: "A1.10" },
{ front: "приемное время (у врача)", back: "die Sprechstunde", lesson: "A1.10" },	{ front: "приемные времена", back: "die Sprechstunden", lesson: "A1.10" },
{ front: "экстренный случай", back: "der Notfall", lesson: "A1.10" },	{ front: "экстренные случаи", back: "die Notfälle", lesson: "A1.10" },
{ front: "поблизости", back: "in der Nähe", lesson: "A1.10" },	
{ front: "минута", back: "die Minute", lesson: "A1.10" },	{ front: "минуты", back: "die Minuten", lesson: "A1.10" },
{ front: "в порядке", back: "in Ordnung", lesson: "A1.10" },	
{ front: "заходить, проходить мимо", back: "vorbeikommen", lesson: "A1.10" },	{ front: "заходили, проходили мимо", back: "ist vorbeigekommen", lesson: "A1.10" },
{ front: "страховая карта", back: "die Versichertenkarte", lesson: "A1.10" },	{ front: "страховые карты", back: "die Versichertenkarten", lesson: "A1.10" },
{ front: "пол, земля", back: "der Boden", lesson: "A1.10" },	{ front: "полы, земли", back: "die Böden", lesson: "A1.10" },
{ front: "лежать", back: "liegen", lesson: "A1.10" },	{ front: "лежали", back: "haben gelegen", lesson: "A1.10" },
{ front: "врач скорой помощи", back: "der Notarzt", lesson: "A1.10" },	{ front: "врачи скорой помощи", back: "die Notärzte", lesson: "A1.10" },
{ front: "сильный", back: "stark", lesson: "A1.10" },	
{ front: "помощь", back: "die Hilfe", lesson: "A1.10" },	
{ front: "внезапно", back: "plötzlich", lesson: "A1.10" },	
{ front: "случаться", back: "passieren", lesson: "A1.10" },	{ front: "случились", back: "ist passiert", lesson: "A1.10" },
{ front: "лекарство", back: "das Medikament", lesson: "A1.10" },	{ front: "лекарства", back: "die Medikamente", lesson: "A1.10" },
{ front: "мотоцикл", back: "das Motorrad", lesson: "A1.10" },	{ front: "мотоциклы", back: "die Motorräder", lesson: "A1.10" },
{ front: "травма", back: "die Verletzung", lesson: "A1.10" },	{ front: "травмы", back: "die Verletzungen", lesson: "A1.10" },
{ front: "мастерская", back: "die Werkstatt", lesson: "A1.11" },	{ front: "мастерские", back: "die Werkstätten", lesson: "A1.11" },
{ front: "ключ", back: "der Schlüssel", lesson: "A1.11" },	{ front: "ключи", back: "die Schlüssel", lesson: "A1.11" },
{ front: "автомагистраль", back: "die Autobahn", lesson: "A1.11" },	{ front: "автомагистрали", back: "die Autobahnen", lesson: "A1.11" },
{ front: "мост", back: "die Brücke", lesson: "A1.11" },	{ front: "мосты", back: "die Brücken", lesson: "A1.11" },
{ front: "справа", back: "rechts", lesson: "A1.11" },	
{ front: "прямо", back: "geradeaus", lesson: "A1.11" },	
{ front: "слева", back: "links", lesson: "A1.11" },	
{ front: "путь, дорога", back: "der Weg", lesson: "A1.11" },	{ front: "пути, дороги", back: "die Wege", lesson: "A1.11" },
{ front: "вокзал", back: "der Bahnhof", lesson: "A1.11" },	{ front: "вокзалы", back: "die Bahnhöfe", lesson: "A1.11" },
{ front: "мясная лавка", back: "die Metzgerei", lesson: "A1.11" },	{ front: "мясные лавки", back: "die Metzgereien", lesson: "A1.11" },
{ front: "почта", back: "die Post", lesson: "A1.11" },	
{ front: "отель", back: "das Hotel", lesson: "A1.11" },	{ front: "отели", back: "die Hotels", lesson: "A1.11" },
{ front: "музей", back: "das Museum", lesson: "A1.11" },	{ front: "музеи", back: "die Museen", lesson: "A1.11" },
{ front: "светофор", back: "die Ampel", lesson: "A1.11" },	{ front: "светофоры", back: "die Ampeln", lesson: "A1.11" },
{ front: "автозаправка", back: "die Tankstelle", lesson: "A1.11" },	{ front: "автозаправки", back: "die Tankstellen", lesson: "A1.11" },
{ front: "план города", back: "der Stadtplan", lesson: "A1.11" },	{ front: "планы городов", back: "die Stadtpläne", lesson: "A1.11" },
{ front: "чужой, иностранный", back: "fremd", lesson: "A1.11" },	
{ front: "летать", back: "fliegen", lesson: "A1.11" },	{ front: "летал", back: "ist geflogen", lesson: "A1.11" },
{ front: "самолет", back: "das Flugzeug", lesson: "A1.11" },	{ front: "самолеты", back: "die Flugzeuge", lesson: "A1.11" },
{ front: "трамвай", back: "die Straßenbahn", lesson: "A1.11" },	{ front: "трамваи", back: "die Straßenbahnen", lesson: "A1.11" },
{ front: "поезд", back: "der Zug", lesson: "A1.11" },	{ front: "поезда", back: "die Züge", lesson: "A1.11" },
{ front: "метро", back: "die U-Bahn", lesson: "A1.11" },	{ front: "метро", back: "die U-Bahnen", lesson: "A1.11" },
{ front: "автобус", back: "der Bus", lesson: "A1.11" },	{ front: "автобусы", back: "die Busse", lesson: "A1.11" },
{ front: "городской поезд", back: "die S-Bahn", lesson: "A1.11" },	{ front: "городские поезда", back: "die S-Bahnen", lesson: "A1.11" },
{ front: "куда", back: "wohin", lesson: "A1.11" },	
{ front: "станция", back: "die Station", lesson: "A1.11" },	{ front: "станции", back: "die Stationen", lesson: "A1.11" },
{ front: "грузовик", back: "der Lkw", lesson: "A1.11" },	{ front: "грузовики", back: "die Lkws", lesson: "A1.11" },
{ front: "киоск", back: "der Kiosk", lesson: "A1.11" },	{ front: "киоски", back: "die Kioske", lesson: "A1.11" },
{ front: "остановка", back: "die Haltestelle", lesson: "A1.11" },	{ front: "остановки", back: "die Haltestellen", lesson: "A1.11" },
{ front: "книжный магазин", back: "die Buchhandlung", lesson: "A1.11" },	{ front: "книжные магазины", back: "die Buchhandlungen", lesson: "A1.11" },
{ front: "сидеть", back: "sitzen", lesson: "A1.11" },	{ front: "сидели", back: "haben gesessen", lesson: "A1.11" },
{ front: "библиотека", back: "die Bücherei", lesson: "A1.11" },	{ front: "библиотеки", back: "die Büchereien", lesson: "A1.11" },
{ front: "дерево", back: "der Baum", lesson: "A1.11" },	{ front: "деревья", back: "die Bäume", lesson: "A1.11" },
{ front: "банк / скамейка", back: "die Bank", lesson: "A1.11" },	{ front: "банки / скамейки", back: "die Banken", lesson: "A1.11" },
{ front: "у, на", back: "an", lesson: "A1.11" },	
{ front: "на", back: "auf", lesson: "A1.11" },	
{ front: "за", back: "hinter", lesson: "A1.11" },	
{ front: "рядом", back: "neben", lesson: "A1.11" },	
{ front: "над, через", back: "über", lesson: "A1.11" },	
{ front: "под", back: "unter", lesson: "A1.11" },	
{ front: "между", back: "zwischen", lesson: "A1.11" },	
{ front: "пешеходная зона", back: "die Fußgängerzone", lesson: "A1.11" },	{ front: "пешеходные зоны", back: "die Fußgängerzonen", lesson: "A1.11" },
{ front: "концерт", back: "das Konzert", lesson: "A1.11" },	{ front: "концерты", back: "die Konzerte", lesson: "A1.11" },
{ front: "брать напрокат", back: "ausleihen", lesson: "A1.11" },	{ front: "брали напрокат", back: "haben ausgeliehen", lesson: "A1.11" },
{ front: "копировать", back: "kopieren", lesson: "A1.11" },	{ front: "копировали", back: "haben kopiert", lesson: "A1.11" },
{ front: "(там) впереди", back: "(da) vorne", lesson: "A1.11" },	
{ front: "(там) вон там", back: "(da) drüben", lesson: "A1.11" },	
{ front: "угол", back: "die Ecke", lesson: "A1.11" },	{ front: "углы", back: "die Ecken", lesson: "A1.11" },
{ front: "(там) сзади", back: "(da) hinten", lesson: "A1.11" },	
{ front: "отъезжать", back: "abfahren", lesson: "A1.11" },	{ front: "отъехали", back: "ist abgefahren", lesson: "A1.11" },
{ front: "путь (на вокзале)", back: "das Gleis", lesson: "A1.11" },	{ front: "пути", back: "die Gleise", lesson: "A1.11" },
{ front: "садиться (в транспорт)", back: "einsteigen", lesson: "A1.11" },	{ front: "сели", back: "ist eingestiegen", lesson: "A1.11" },
{ front: "опоздание", back: "die Verspätung", lesson: "A1.11" },	{ front: "опоздания", back: "die Verspätungen", lesson: "A1.11" },
{ front: "прибывать", back: "ankommen", lesson: "A1.11" },	{ front: "прибыли", back: "ist angekommen", lesson: "A1.11" },
{ front: "пересаживаться", back: "umsteigen", lesson: "A1.11" },	{ front: "пересели", back: "ist umgestiegen", lesson: "A1.11" },
{ front: "выходить (из транспорта)", back: "aussteigen", lesson: "A1.11" },	{ front: "вышли", back: "ist ausgestiegen", lesson: "A1.11" },
{ front: "отъезд", back: "die Abfahrt", lesson: "A1.11" },	{ front: "отъезды", back: "die Abfahrten", lesson: "A1.11" },
{ front: "прибытие", back: "die Ankunft", lesson: "A1.11" },	{ front: "прибытия", back: "die Ankünfte", lesson: "A1.11" },
{ front: "пересадка", back: "der Anschluss", lesson: "A1.11" },	{ front: "пересадки", back: "die Anschlüsse", lesson: "A1.11" },
{ front: "платформа", back: "der Bahnsteig", lesson: "A1.11" },	{ front: "платформы", back: "die Bahnsteige", lesson: "A1.11" },
{ front: "прямо", back: "direkt", lesson: "A1.11" },	
{ front: "объявление (по громкой связи)", back: "die Durchsage", lesson: "A1.11" },	{ front: "объявления", back: "die Durchsagen", lesson: "A1.11" },
{ front: "окошко (кассы)", back: "der Schalter", lesson: "A1.11" },	{ front: "окошки", back: "die Schalter", lesson: "A1.11" },
{ front: "туда и обратно", back: "hin und zurück", lesson: "A1.11" },	
{ front: "расписание (транспорта)", back: "der Fahrplan", lesson: "A1.11" },	{ front: "расписания", back: "die Fahrpläne", lesson: "A1.11" },
{ front: "сумка", back: "die Tasche", lesson: "A1.12" },	{ front: "сумки", back: "die Taschen", lesson: "A1.12" },
{ front: "пакет", back: "die Tüte", lesson: "A1.12" },	{ front: "пакеты", back: "die Tüten", lesson: "A1.12" },
{ front: "счет", back: "die Rechnung", lesson: "A1.12" },	{ front: "счета", back: "die Rechnungen", lesson: "A1.12" },
{ front: "сломанный", back: "kaputt", lesson: "A1.12" },	
{ front: "ремонтировать", back: "reparieren", lesson: "A1.12" },	{ front: "ремонтировали", back: "haben repariert", lesson: "A1.12" },
{ front: "кислый, сердитый", back: "sauer", lesson: "A1.12" },	
{ front: "недружелюбный", back: "unfreundlich", lesson: "A1.12" },	
{ front: "обычный", back: "normal", lesson: "A1.12" },	
{ front: "родина", back: "das Heimatland", lesson: "A1.12" },	{ front: "родины", back: "die Heimatländer", lesson: "A1.12" },
{ front: "тренировка", back: "Training", lesson: "A1.12" },	
{ front: "одежда", back: "die Kleider", lesson: "A1.12" },	
{ front: "шить", back: "nähen", lesson: "A1.12" },	{ front: "сшили", back: "haben genäht", lesson: "A1.12" },
{ front: "ремонт", back: "die Reparatur", lesson: "A1.12" },	{ front: "ремонты", back: "die Reparaturen", lesson: "A1.12" },
{ front: "принимать душ", back: "duschen", lesson: "A1.12" },	{ front: "принимали душ", back: "haben geduscht", lesson: "A1.12" },
{ front: "высказывание", back: "die Aussage", lesson: "A1.12" },	{ front: "высказывания", back: "die Aussagen", lesson: "A1.12" },
{ front: "техник", back: "der Techniker", lesson: "A1.12" },	{ front: "техники", back: "die Techniker", lesson: "A1.12" },
{ front: "отопление", back: "die Heizung", lesson: "A1.12" },	{ front: "отопления", back: "die Heizungen", lesson: "A1.12" },
{ front: "принтер", back: "der Drucker", lesson: "A1.12" },	{ front: "принтеры", back: "die Drucker", lesson: "A1.12" },
{ front: "модель", back: "das Modell", lesson: "A1.12" },	{ front: "модели", back: "die Modelle", lesson: "A1.12" },
{ front: "гарантия", back: "die Garantie", lesson: "A1.12" },	{ front: "гарантии", back: "die Garantien", lesson: "A1.12" },
{ front: "мимо-, прошедший", back: "vorbei-", lesson: "A1.12" },	
{ front: "приносить (пройти с чем-то)", back: "vorbeibringen", lesson: "A1.12" },	{ front: "принесли (пройдя с чем-то)", back: "haben vorbeigebracht", lesson: "A1.12" },
{ front: "включать", back: "anmachen", lesson: "A1.12" },	{ front: "включили", back: "haben angemacht", lesson: "A1.12" },
{ front: "дверь", back: "die Tür", lesson: "A1.12" },	{ front: "двери", back: "die Türen", lesson: "A1.12" },
{ front: "закрывать", back: "zumachen", lesson: "A1.12" },	{ front: "закрыли", back: "haben zugemacht", lesson: "A1.12" },
{ front: "окно", back: "das Fenster", lesson: "A1.12" },	{ front: "окна", back: "die Fenster", lesson: "A1.12" },
{ front: "открывать", back: "aufmachen", lesson: "A1.12" },	{ front: "открыли", back: "haben aufgemacht", lesson: "A1.12" },
{ front: "бумага", back: "das Papier", lesson: "A1.12" },	{ front: "бумаги", back: "die Papiere", lesson: "A1.12" },
{ front: "свет", back: "das Licht", lesson: "A1.12" },	{ front: "огни", back: "die Lichter", lesson: "A1.12" },
{ front: "посудомоечная машина", back: "die Spülmaschine", lesson: "A1.12" },	{ front: "посудомоечные машины", back: "die Spülmaschinen", lesson: "A1.12" },
{ front: "рекомендовать", back: "empfehlen", lesson: "A1.12" },	{ front: "рекомендовали", back: "haben empfohlen", lesson: "A1.12" },
{ front: "резервировать", back: "reservieren", lesson: "A1.12" },	{ front: "резервировали", back: "haben reserviert", lesson: "A1.12" },
{ front: "ресепшн", back: "die Rezeption", lesson: "A1.12" },	{ front: "ресепшны", back: "die Rezeptionen", lesson: "A1.12" },
{ front: "объявление", back: "die Ansage", lesson: "A1.12" },	{ front: "объявления", back: "die Ansagen", lesson: "A1.12" },
{ front: "нажимать", back: "drücken", lesson: "A1.12" },	{ front: "нажимали", back: "haben gedrückt", lesson: "A1.12" },
{ front: "регистрироваться", back: "anmelden", lesson: "A1.12" },	{ front: "зарегистрировались", back: "haben angemeldet", lesson: "A1.12" },
{ front: "соединять", back: "verbinden", lesson: "A1.12" },	{ front: "соединили", back: "haben verbunden", lesson: "A1.12" },
{ front: "оставлять", back: "hinterlassen", lesson: "A1.12" },	{ front: "оставили", back: "haben hinterlassen", lesson: "A1.12" },
{ front: "перезванивать", back: "zurückrufen", lesson: "A1.12" },	{ front: "перезвонили", back: "haben zurückgerufen", lesson: "A1.12" },
{ front: "выглядеть", back: "aussehen", lesson: "A1.12" },	{ front: "выглядели", back: "haben ausgesehen", lesson: "A1.12" },
{ front: "отпуск", back: "der Urlaub", lesson: "A1.12" },	{ front: "отпуска", back: "die Urlaube", lesson: "A1.12" },
{ front: "снаружи", back: "draußen", lesson: "A1.12" },	
{ front: "прочь", back: "weg", lesson: "A1.12" },	
{ front: "кофемашина", back: "die Kaffeemaschine", lesson: "A1.12" },	{ front: "кофемашины", back: "die Kaffeemaschinen", lesson: "A1.12" },
{ front: "парикмахер (муж.)", back: "der Friseur", lesson: "A1.12" },	{ front: "парикмахеры (муж.)", back: "die Friseure", lesson: "A1.12" },
{ front: "парикмахер (жен.)", back: "die Friseurin", lesson: "A1.12" },	{ front: "парикмахеры (жен.)", back: "die Friseurinnen", lesson: "A1.12" },
{ front: "заказывать", back: "bestellen", lesson: "A1.12" },	{ front: "заказал", back: "hat bestellt", lesson: "A1.12" },
{ front: "предложение", back: "das Angebot", lesson: "A1.12" },	{ front: "предложения", back: "die Angebote", lesson: "A1.12" },
{ front: "предлагать", back: "anbieten", lesson: "A1.12" },	{ front: "предложил", back: "hat angeboten", lesson: "A1.12" },
{ front: "подросток (м/ж)", back: "der Jugendliche / die Jugendliche", lesson: "A1.12" },	{ front: "подростки", back: "die Jugendlichen", lesson: "A1.12" },
{ front: "инструкция по применению", back: "die Gebrauchsanweisung", lesson: "A1.12" },	{ front: "инструкции по применению", back: "die Gebrauchsanweisungen", lesson: "A1.12" },
{ front: "чистка, уборка", back: "die Reinigung", lesson: "A1.12" },	{ front: "чистки, уборки", back: "die Reinigungen", lesson: "A1.12" },
{ front: "вилка (электрическая)", back: "der Stecker", lesson: "A1.12" },	{ front: "вилки", back: "die Stecker", lesson: "A1.12" },
{ front: "розетка", back: "die Steckdose", lesson: "A1.12" },	{ front: "розетки", back: "die Steckdosen", lesson: "A1.12" },
{ front: "тянуть", back: "ziehen", lesson: "A1.12" },	{ front: "тянул", back: "hat gezogen", lesson: "A1.12" },
{ front: "вверху", back: "oben", lesson: "A1.12" },	
{ front: "уксус", back: "der Essig", lesson: "A1.12" },	
{ front: "кнопка", back: "die Taste", lesson: "A1.12" },	{ front: "кнопки", back: "die Tasten", lesson: "A1.12" },
{ front: "секунда", back: "die Sekunde", lesson: "A1.12" },	{ front: "", back: "die Sekunden", lesson: "A1.12" },
{ front: "куртка", back: "die Jacke", lesson: "A1.13" },	{ front: "куртки", back: "die Jacken", lesson: "A1.13" },
{ front: "пальто", back: "der Mantel", lesson: "A1.13" },	{ front: "пальто (мн.ч.)", back: "die Mäntel", lesson: "A1.13" },
{ front: "тонкий", back: "dünn", lesson: "A1.13" },	
{ front: "подходить", back: "passen", lesson: "A1.13" },	{ front: "подходил", back: "hat gepasst", lesson: "A1.13" },
{ front: "широкий", back: "weit", lesson: "A1.13" },	
{ front: "одежда", back: "die Kleidung", lesson: "A1.13" },	
{ front: "блузка", back: "die Bluse", lesson: "A1.13" },	{ front: "блузки", back: "die Blusen", lesson: "A1.13" },
{ front: "футболка", back: "das T-Shirt", lesson: "A1.13" },	{ front: "футболки", back: "die T-Shirts", lesson: "A1.13" },
{ front: "обувь", back: "der Schuh", lesson: "A1.13" },	{ front: "обувь (мн.ч.)", back: "die Schuhe", lesson: "A1.13" },
{ front: "брюки", back: "die Hose", lesson: "A1.13" },	{ front: "брюки", back: "die Hosen", lesson: "A1.13" },
{ front: "юбка", back: "der Rock", lesson: "A1.13" },	{ front: "юбки", back: "die Röcke", lesson: "A1.13" },
{ front: "платье", back: "das Kleid", lesson: "A1.13" },	{ front: "платья", back: "die Kleider", lesson: "A1.13" },
{ front: "сапог", back: "der Stiefel", lesson: "A1.13" },	{ front: "сапоги", back: "die Stiefel", lesson: "A1.13" },
{ front: "пуловер", back: "der Pullover", lesson: "A1.13" },	{ front: "пуловеры", back: "die Pullover", lesson: "A1.13" },
{ front: "носок", back: "die Socke", lesson: "A1.13" },	{ front: "носки", back: "die Socken", lesson: "A1.13" },
{ front: "чулок", back: "der Strumpf", lesson: "A1.13" },	{ front: "чулки", back: "die Strümpfe", lesson: "A1.13" },
{ front: "джинсы", back: "die Jeans", lesson: "A1.13" },	{ front: "джинсы", back: "die Jeans", lesson: "A1.13" },
{ front: "платок", back: "das Tuch", lesson: "A1.13" },	{ front: "платки", back: "die Tücher", lesson: "A1.13" },
{ front: "рубашка", back: "das Hemd", lesson: "A1.13" },	{ front: "рубашки", back: "die Hemden", lesson: "A1.13" },
{ front: "костюм", back: "der Anzug", lesson: "A1.13" },	{ front: "костюмы", back: "die Anzüge", lesson: "A1.13" },
{ front: "очки", back: "die Brille", lesson: "A1.13" },	{ front: "очки", back: "die Brillen", lesson: "A1.13" },
{ front: "скучный", back: "langweilig", lesson: "A1.13" },	
{ front: "(зонт от дождя)", back: "der (Regen-)Schirm", lesson: "A1.13" },	{ front: "зонты", back: "die (Regen-)Schirme", lesson: "A1.13" },
{ front: "выгодный", back: "günstig", lesson: "A1.13" },	
{ front: "совершенный", back: "perfekt", lesson: "A1.13" },	
{ front: "стоять", back: "stehen", lesson: "A1.13" },	{ front: "стоял", back: "hat gestanden", lesson: "A1.13" },
{ front: "жареная колбаса", back: "die Bratwurst", lesson: "A1.13" },	{ front: "жареные колбасы", back: "die Bratwürste", lesson: "A1.13" },
{ front: "ландшафт", back: "die Landschaft", lesson: "A1.13" },	{ front: "ландшафты", back: "die Landschaften", lesson: "A1.13" },
{ front: "гора", back: "der Berg", lesson: "A1.13" },	{ front: "горы", back: "die Berge", lesson: "A1.13" },
{ front: "деревня", back: "das Dorf", lesson: "A1.13" },	{ front: "деревни", back: "die Dörfer", lesson: "A1.13" },
{ front: "лес", back: "der Wald", lesson: "A1.13" },	{ front: "леса", back: "die Wälder", lesson: "A1.13" },
{ front: "Северное море", back: "die Nordsee", lesson: "A1.13" },	
{ front: "пляж", back: "der Strand", lesson: "A1.13" },	{ front: "пляжи", back: "die Strände", lesson: "A1.13" },
{ front: "море", back: "das Meer", lesson: "A1.13" },	{ front: "моря", back: "die Meere", lesson: "A1.13" },
{ front: "порт", back: "der Hafen", lesson: "A1.13" },	{ front: "порты", back: "die Häfen", lesson: "A1.13" },
{ front: "никогда", back: "nie", lesson: "A1.13" },	
{ front: "лучше", back: "besser", lesson: "A1.13" },	
{ front: "лучше всего", back: "am besten", lesson: "A1.13" },	
{ front: "назад", back: "rückwärts", lesson: "A1.13" },	
{ front: "вперед", back: "vorwärts", lesson: "A1.13" },	
{ front: "при этом", back: "dabei", lesson: "A1.13" },	
{ front: "тяжелый", back: "schwer", lesson: "A1.13" },	
{ front: "музыкант (муж.)", back: "der Musiker", lesson: "A1.13" },	{ front: "музыканты", back: "die Musiker", lesson: "A1.13" },
{ front: "музыкант (жен.)", back: "die Musikerin", lesson: "A1.13" },	{ front: "музыканты (жен.)", back: "die Musikerinnen", lesson: "A1.13" },
{ front: "тренироваться", back: "trainieren", lesson: "A1.13" },	{ front: "тренировался", back: "hat trainiert", lesson: "A1.13" },
{ front: "ездить на велосипеде", back: "rad fahren", lesson: "A1.13" },	{ front: "ездил на велосипеде", back: "ist rad gefahren", lesson: "A1.13" },
{ front: "рекорд", back: "der Rekord", lesson: "A1.13" },	{ front: "рекорды", back: "die Rekorde", lesson: "A1.13" },
{ front: "с наибольшим удовольствием", back: "am liebsten", lesson: "A1.13" },	
{ front: "больше всего", back: "am meisten", lesson: "A1.13" },	
{ front: "довольный", back: "zufrieden", lesson: "A1.13" },	
{ front: "шутка", back: "der Witz", lesson: "A1.13" },	{ front: "шутки", back: "die Witze", lesson: "A1.13" },
{ front: "этот", back: "dies-", lesson: "A1.13" },	
{ front: "какой", back: "welch-", lesson: "A1.13" },	
{ front: "чемодан", back: "der Koffer", lesson: "A1.13" },	{ front: "чемоданы", back: "die Koffer", lesson: "A1.13" },
{ front: "принадлежать", back: "gehören", lesson: "A1.13" },	{ front: "принадлежал", back: "hat gehört", lesson: "A1.13" },
{ front: "нравиться", back: "mögen", lesson: "A1.13" },	{ front: "нравился", back: "hat gemocht", lesson: "A1.13" },
{ front: "день недели", back: "der Wochentag", lesson: "A1.13" },	{ front: "дни недели", back: "die Wochentage", lesson: "A1.13" },
{ front: "первый этаж", back: "das Erdgeschoss", lesson: "A1.13" },	{ front: "первые этажи", back: "die Erdgeschosse", lesson: "A1.13" },
{ front: "верхний этаж", back: "das Obergeschoss", lesson: "A1.13" },	{ front: "верхние этажи", back: "die Obergeschosse", lesson: "A1.13" },
{ front: "подвал / цокольный этаж", back: "das Untergeschoss", lesson: "A1.13" },	{ front: "подвалы / цокольные этажи", back: "die Untergeschosse", lesson: "A1.13" },
{ front: "выход", back: "der Ausgang", lesson: "A1.13" },	{ front: "выходы", back: "die Ausgänge", lesson: "A1.13" },
{ front: "аптечный магазин", back: "die Drogerie", lesson: "A1.13" },	{ front: "аптечные магазины", back: "die Drogerien", lesson: "A1.13" },
{ front: "косметика", back: "die Kosmetik", lesson: "A1.13" },	
{ front: "украшения", back: "der Schmuck", lesson: "A1.13" },	
{ front: "посуда", back: "das Geschirr", lesson: "A1.13" },	
{ front: "стакан", back: "das Glas", lesson: "A1.13" },	{ front: "стаканы", back: "die Gläser", lesson: "A1.13" },
{ front: "мода", back: "die Mode", lesson: "A1.13" },	{ front: "моды", back: "die Moden", lesson: "A1.13" },
{ front: "вход", back: "der Eingang", lesson: "A1.13" },	{ front: "входы", back: "die Eingänge", lesson: "A1.13" },
{ front: "извиняться", back: "entschuldigen", lesson: "A1.13" },	{ front: "извинился", back: "hat entschuldigt", lesson: "A1.13" },
{ front: "знать", back: "wissen", lesson: "A1.13" },	{ front: "знал", back: "hat gewusst", lesson: "A1.13" },
{ front: "мыло", back: "die Seife", lesson: "A1.13" },	{ front: "мыла", back: "die Seifen", lesson: "A1.13" },
{ front: "зубная щетка", back: "die Zahnbürste", lesson: "A1.13" },	{ front: "зубные щетки", back: "die Zahnbürsten", lesson: "A1.13" },
{ front: "зубная паста", back: "die Zahnpasta", lesson: "A1.13" },	
{ front: "размер", back: "die Größe", lesson: "A1.13" },	{ front: "размеры", back: "die Größen", lesson: "A1.13" },
{ front: "надевать", back: "anziehen", lesson: "A1.13" },	{ front: "надевал", back: "hat angezogen", lesson: "A1.13" },
{ front: "примерять", back: "anprobieren", lesson: "A1.13" },	{ front: "примерял", back: "hat anprobiert", lesson: "A1.13" },
{ front: "день рождения", back: "der Geburtstag", lesson: "A1.14" },	{ front: "дни рождения", back: "die Geburtstage", lesson: "A1.14" },
{ front: "шина", back: "der Reifen", lesson: "A1.14" },	{ front: "шины", back: "die Reifen", lesson: "A1.14" },
{ front: "рассказывать", back: "erzählen", lesson: "A1.14" },	{ front: "рассказывал", back: "hat erzählt", lesson: "A1.14" },
{ front: "праздновать", back: "feiern", lesson: "A1.14" },	{ front: "праздновал", back: "hat gefeiert", lesson: "A1.14" },
{ front: "прощание", back: "der Abschied", lesson: "A1.14" },	{ front: "прощания", back: "die Abschiede", lesson: "A1.14" },
{ front: "скоро", back: "bald", lesson: "A1.14" },	
{ front: "начинать", back: "beginnen", lesson: "A1.14" },	{ front: "начинал", back: "hat begonnen", lesson: "A1.14" },
{ front: "место работы", back: "die Arbeitsstelle", lesson: "A1.14" },	{ front: "места работы", back: "die Arbeitsstellen", lesson: "A1.14" },
{ front: "счастье", back: "das Glück", lesson: "A1.14" },	
{ front: "радость", back: "die Freude", lesson: "A1.14" },	
{ front: "желать (себе)", back: "(sich) wünschen", lesson: "A1.14" },	{ front: "желал (себе)", back: "hat gewünscht", lesson: "A1.14" },
{ front: "поздравлять", back: "gratulieren", lesson: "A1.14" },	{ front: "поздравлял", back: "hat gratuliert", lesson: "A1.14" },
{ front: "поздравление", back: "der Glückwunsch", lesson: "A1.14" },	{ front: "поздравления", back: "die Glückwünsche", lesson: "A1.14" },
{ front: "верить", back: "glauben", lesson: "A1.14" },	{ front: "верил", back: "hat geglaubt", lesson: "A1.14" },
{ front: "посещать", back: "besuchen", lesson: "A1.14" },	{ front: "посещал", back: "hat besucht", lesson: "A1.14" },
{ front: "ноябрь", back: "der November", lesson: "A1.14" },	
{ front: "январь", back: "der Januar", lesson: "A1.14" },	
{ front: "первый", back: "erste", lesson: "A1.14" },	
{ front: "второй", back: "zweite", lesson: "A1.14" },	
{ front: "третий", back: "dritte", lesson: "A1.14" },	
{ front: "февраль", back: "der Februar", lesson: "A1.14" },	
{ front: "март", back: "der März", lesson: "A1.14" },	
{ front: "апрель", back: "der April", lesson: "A1.14" },	
{ front: "май", back: "der Mai", lesson: "A1.14" },	
{ front: "июнь", back: "der Juni", lesson: "A1.14" },	
{ front: "июль", back: "der Juli", lesson: "A1.14" },	
{ front: "август", back: "der August", lesson: "A1.14" },	
{ front: "сентябрь", back: "der September", lesson: "A1.14" },	
{ front: "октябрь", back: "der Oktober", lesson: "A1.14" },	
{ front: "декабрь", back: "der Dezember", lesson: "A1.14" },	
{ front: "цветок", back: "die Blume", lesson: "A1.14" },	{ front: "цветы", back: "die Blumen", lesson: "A1.14" },
{ front: "карнавал", back: "der Karneval", lesson: "A1.14" },	
{ front: "последний", back: "letzt-", lesson: "A1.14" },	
{ front: "участвовать", back: "mitmachen", lesson: "A1.14" },	{ front: "участвовал", back: "hat mitgemacht", lesson: "A1.14" },
{ front: "праздник", back: "der Feiertag", lesson: "A1.14" },	{ front: "праздники", back: "die Feiertage", lesson: "A1.14" },
{ front: "подарок", back: "das Geschenk", lesson: "A1.14" },	{ front: "подарки", back: "die Geschenke", lesson: "A1.14" },
{ front: "любить (друг друга)", back: "(sich) lieben", lesson: "A1.14" },	{ front: "любил (друг друга)", back: "hat geliebt", lesson: "A1.14" },
{ front: "чудесный", back: "wunderbar", lesson: "A1.14" },	
{ front: "десерт", back: "der Nachtisch", lesson: "A1.14" },	{ front: "десерты", back: "die Nachtische", lesson: "A1.14" },
{ front: "чистить", back: "putzen", lesson: "A1.14" },	{ front: "чистил", back: "hat geputzt", lesson: "A1.14" },
{ front: "ноутбук", back: "der Laptop", lesson: "A1.14" },	{ front: "ноутбуки", back: "die Laptops", lesson: "A1.14" },
{ front: "грязный", back: "schmutzig", lesson: "A1.14" },	
{ front: "стирать", back: "waschen", lesson: "A1.14" },	{ front: "стирал", back: "hat gewaschen", lesson: "A1.14" },
{ front: "дедушка", back: "der Großvater", lesson: "A1.14" },	{ front: "дедушки", back: "die Großväter", lesson: "A1.14" },
{ front: "бабушка", back: "die Großmutter", lesson: "A1.14" },	{ front: "бабушки", back: "die Großmütter", lesson: "A1.14" },
{ front: "праздник", back: "die Feier", lesson: "A1.14" },	{ front: "праздники", back: "die Feiern", lesson: "A1.14" },
{ front: "организовывать", back: "organisieren", lesson: "A1.14" },	{ front: "организовывал", back: "hat organisiert", lesson: "A1.14" },
{ front: "информировать", back: "Bescheid geben", lesson: "A1.14" },	{ front: "информировал", back: "hat Bescheid gegeben", lesson: "A1.14" },
{ front: "приглашение", back: "die Einladung", lesson: "A1.14" },	{ front: "приглашения", back: "die Einladungen", lesson: "A1.14" },
{ front: "рейс, полёт", back: "der Flug", lesson: "A1.14" },	{ front: "рейсы, полёты", back: "die Flüge", lesson: "A1.14" },
{ front: "становиться", back: "werden", lesson: "A1.14" },	{ front: "стал", back: "ist geworden", lesson: "A1.14" },
{ front: "приглашать", back: "einladen", lesson: "A1.14" },	{ front: "приглашал", back: "hat eingeladen", lesson: "A1.14" },
{ front: "радоваться", back: "sich freuen", lesson: "A1.14" },	{ front: "радовался", back: "hat sich gefreut", lesson: "A1.14" },
{ front: "праздник", back: "das Fest", lesson: "A1.14" },	{ front: "праздники", back: "die Feste", lesson: "A1.14" },
{ front: "сердечный", back: "herzlich", lesson: "A1.14" },	
{ front: "гость", back: "das Gast", lesson: "A1.14" },	{ front: "гости", back: "die Gäste", lesson: "A1.14" },
{ front: "причина", back: "der Grund", lesson: "A1.14" },	{ front: "причины", back: "die Gründe", lesson: "A1.14" },
{ front: "ответ", back: "die Antwort", lesson: "A1.14" },	{ front: "ответы", back: "die Antworten", lesson: "A1.14" },
{ front: "просить", back: "bitten", lesson: "A1.14" },	{ front: "просил", back: "hat gebeten", lesson: "A1.14" },
{ front: "Рождество", back: "das Weihnachten", lesson: "A1.14" },	
{ front: "Пасха", back: "das Ostern", lesson: "A1.14" },	
{ front: "Новый год", back: "das Silvester", lesson: "A1.14" },	
{ front: "Новый год", back: "das Neujahr", lesson: "A1.14" },	
{ front: "выигрывать", back: "gewinnen", lesson: "A1.14" },	{ front: "выиграл", back: "hat gewonnen", lesson: "A1.14" },
{ front: "родственник / родственница", back: "der Verwandte / die Verwandte", lesson: "A1.14" },	{ front: "родственники", back: "die Verwandten", lesson: "A1.14" },
{ front: "карта, открытка", back: "die Karte", lesson: "A1.14" },	{ front: "карты, открытки", back: "die Karten", lesson: "A1.14" },
{ front: "свадьба", back: "die Hochzeit", lesson: "A1.14" },	{ front: "свадьбы", back: "die Hochzeiten", lesson: "A1.14" },
{ front: "счастливый", back: "glücklich", lesson: "A2.1" },	
{ front: "смотреть", back: "ansehen", lesson: "A2.1" },	{ front: "смотрел", back: "hat angesehen", lesson: "A2.1" },
{ front: "сосед", back: "der Nachbar", lesson: "A2.1" },	{ front: "соседи", back: "die Nachbarn", lesson: "A2.1" },
{ front: "соседка", back: "die Nachbarin", lesson: "A2.1" },	{ front: "соседки", back: "die Nachbarinnen", lesson: "A2.1" },
{ front: "покупка", back: "der Einkauf", lesson: "A2.1" },	{ front: "покупки", back: "die Einkäufe", lesson: "A2.1" },
{ front: "получаться", back: "klappen", lesson: "A2.1" },	{ front: "получилось", back: "hat geklappt", lesson: "A2.1" },
{ front: "центр", back: "das Zentrum", lesson: "A2.1" },	{ front: "центры", back: "die Zentren", lesson: "A2.1" },
{ front: "чувство", back: "das Gefühl", lesson: "A2.1" },	{ front: "чувства", back: "die Gefühle", lesson: "A2.1" },
{ front: "начало", back: "der Anfang", lesson: "A2.1" },	{ front: "начала", back: "die Anfänge", lesson: "A2.1" },
{ front: "скучать", back: "vermissen", lesson: "A2.1" },	{ front: "скучал", back: "hat vermisst", lesson: "A2.1" },
{ front: "потому что", back: "weil", lesson: "A2.1" },	
{ front: "человек", back: "der Mensch", lesson: "A2.1" },	{ front: "люди", back: "die Menschen", lesson: "A2.1" },
{ front: "работодатель", back: "der Arbeitgeber", lesson: "A2.1" },	{ front: "работодатели", back: "die Arbeitgeber", lesson: "A2.1" },
{ front: "работодательница", back: "die Arbeitgeberin", lesson: "A2.1" },	{ front: "работодательницы", back: "die Arbeitgeberinnen", lesson: "A2.1" },
{ front: "переезжать", back: "umziehen", lesson: "A2.1" },	{ front: "переехал", back: "ist umgezogen", lesson: "A2.1" },
{ front: "знакомиться", back: "(sich) kennenlernen", lesson: "A2.1" },	{ front: "познакомился", back: "hat kennengelernt", lesson: "A2.1" },
{ front: "вчера", back: "gestern", lesson: "A2.1" },	
{ front: "переезд", back: "der Umzug", lesson: "A2.1" },	{ front: "переезды", back: "die Umzüge", lesson: "A2.1" },
{ front: "вещи", back: "die Sachen", lesson: "A2.1" },	
{ front: "распаковывать", back: "auspacken", lesson: "A2.1" },	{ front: "распаковал", back: "hat ausgepackt", lesson: "A2.1" },
{ front: "засыпать", back: "einschlafen", lesson: "A2.1" },	{ front: "заснул", back: "ist eingeschlafen", lesson: "A2.1" },
{ front: "будильник", back: "der Wecker", lesson: "A2.1" },	{ front: "будильники", back: "die Wecker", lesson: "A2.1" },
{ front: "запоминать", back: "(sich) merken", lesson: "A2.1" },	{ front: "запомнил", back: "hat gemerkt", lesson: "A2.1" },
{ front: "наконец", back: "schließlich", lesson: "A2.1" },	
{ front: "даже", back: "sogar", lesson: "A2.1" },	
{ front: "рабочий день", back: "der Arbeitstag", lesson: "A2.1" },	{ front: "рабочие дни", back: "die Arbeitstage", lesson: "A2.1" },
{ front: "звучать", back: "klingen", lesson: "A2.1" },	{ front: "звучал", back: "hat geklungen", lesson: "A2.1" },
{ front: "переживать", back: "erleben", lesson: "A2.1" },	{ front: "переживал", back: "hat erlebt", lesson: "A2.1" },
{ front: "поломка", back: "die Panne", lesson: "A2.1" },	{ front: "поломки", back: "die Pannen", lesson: "A2.1" },
{ front: "повседневность", back: "der Alltag", lesson: "A2.1" },	
{ front: "пропускать", back: "verpassen", lesson: "A2.1" },	{ front: "пропустил", back: "hat verpasst", lesson: "A2.1" },
{ front: "замечать", back: "bemerken", lesson: "A2.1" },	{ front: "заметил", back: "hat bemerkt", lesson: "A2.1" },
{ front: "узнавать", back: "erfahren", lesson: "A2.1" },	{ front: "узнал", back: "hat erfahren", lesson: "A2.1" },
{ front: "представлять себе", back: "(sich) vorstellen", lesson: "A2.1" },	{ front: "представил себе", back: "hat vorgestellt", lesson: "A2.1" },
{ front: "кошелёк", back: "die Geldbörse", lesson: "A2.1" },	{ front: "кошельки", back: "die Geldbörsen", lesson: "A2.1" },
{ front: "терять", back: "verlieren", lesson: "A2.1" },	{ front: "потерял", back: "hat verloren", lesson: "A2.1" },
{ front: "неудача", back: "das Pech", lesson: "A2.1" },	
{ front: "кредитная карта", back: "die Kreditkarte", lesson: "A2.1" },	{ front: "кредитные карты", back: "die Kreditkarten", lesson: "A2.1" },
{ front: "толкать / сталкиваться", back: "stoßen", lesson: "A2.1" },	{ front: "толкал / столкнулся", back: "hat/ist gestoßen", lesson: "A2.1" },
{ front: "неловкий", back: "peinlich", lesson: "A2.1" },	
{ front: "дядя", back: "der Onkel", lesson: "A2.1" },	{ front: "дяди", back: "die Onkel", lesson: "A2.1" },
{ front: "тётя", back: "die Tante", lesson: "A2.1" },	{ front: "тёти", back: "die Tanten", lesson: "A2.1" },
{ front: "кузен", back: "der Cousin", lesson: "A2.1" },	{ front: "кузены", back: "die Cousins", lesson: "A2.1" },
{ front: "кузина", back: "die Cousine", lesson: "A2.1" },	{ front: "кузины", back: "die Cousinen", lesson: "A2.1" },
{ front: "племянник", back: "der Neffe", lesson: "A2.1" },	{ front: "племянники", back: "die Neffen", lesson: "A2.1" },
{ front: "племянница", back: "die Nichte", lesson: "A2.1" },	{ front: "племянницы", back: "die Nichten", lesson: "A2.1" },
{ front: "симпатичный", back: "sympathisch", lesson: "A2.1" },	
{ front: "член", back: "das Mitglied", lesson: "A2.1" },	{ front: "члены", back: "die Mitglieder", lesson: "A2.1" },
{ front: "коммунальная квартира", back: "die Wohngemeinschaft", lesson: "A2.1" },	{ front: "коммунальные квартиры", back: "die Wohngemeinschaften", lesson: "A2.1" },
{ front: "вероятно", back: "wahrscheinlich", lesson: "A2.1" },	
{ front: "крыша", back: "das Dach", lesson: "A2.1" },	{ front: "крыши", back: "die Dächer", lesson: "A2.1" },
{ front: "до сих пор", back: "bisher", lesson: "A2.1" },	
{ front: "разный", back: "verschieden", lesson: "A2.1" },	
{ front: "квартал", back: "das Viertel", lesson: "A2.1" },	{ front: "кварталы", back: "die Viertel", lesson: "A2.1" },
{ front: "арендатор", back: "der Mieter", lesson: "A2.1" },	{ front: "арендаторы", back: "die Mieter", lesson: "A2.1" },
{ front: "арендаторша", back: "die Mieterin", lesson: "A2.1" },	{ front: "арендаторы (ж.р.)", back: "die Mieterinnen", lesson: "A2.1" },
{ front: "въезжать", back: "einziehen", lesson: "A2.1" },	{ front: "въехал", back: "ist eingezogen", lesson: "A2.1" },
{ front: "раз", back: "das Mal", lesson: "A2.1" },	{ front: "разы", back: "die Male", lesson: "A2.1" },
{ front: "странный", back: "komisch", lesson: "A2.1" },	
{ front: "кто-то", back: "jemand", lesson: "A2.1" },	
{ front: "хватать", back: "reichen", lesson: "A2.1" },	{ front: "хватало", back: "hat gereicht", lesson: "A2.1" },
{ front: "делить", back: "teilen", lesson: "A2.1" },	{ front: "делил", back: "hat geteilt", lesson: "A2.1" },
{ front: "выезжать", back: "ausziehen", lesson: "A2.1" },	{ front: "выехал", back: "ist ausgezogen", lesson: "A2.1" },
{ front: "место", back: "der Platz", lesson: "A2.1" },	{ front: "места", back: "die Plätze", lesson: "A2.1" },
{ front: "каждый", back: "jeder", lesson: "A2.1" },	
{ front: "использовать", back: "benutzen", lesson: "A2.1" },	{ front: "использовал", back: "hat benutzt", lesson: "A2.1" },
{ front: "вместе", back: "gemeinsam", lesson: "A2.1" },	
{ front: "иначе", back: "sonst", lesson: "A2.1" },	
{ front: "теперь", back: "nun", lesson: "A2.1" },	
{ front: "обычно", back: "normalerweise", lesson: "A2.1" },	
{ front: "беременная", back: "schwanger", lesson: "A2.1" },	
{ front: "тесть", back: "der Schwiegervater", lesson: "A2.1" },	{ front: "тести", back: "die Schwiegerväter", lesson: "A2.1" },
{ front: "тёща / свекровь", back: "die Schwiegermutter", lesson: "A2.1" },	{ front: "тёщи / свекрови", back: "die Schwiegermütter", lesson: "A2.1" },
{ front: "хозяйство", back: "der Haushalt", lesson: "A2.1" },	{ front: "хозяйства", back: "die Haushalte", lesson: "A2.1" },
{ front: "пенсия", back: "die Rente", lesson: "A2.1" },	{ front: "пенсии", back: "die Renten", lesson: "A2.1" },
{ front: "энергия", back: "die Energie", lesson: "A2.2" },	
{ front: "сам", back: "selbst", lesson: "A2.2" },	
{ front: "менять", back: "wechseln", lesson: "A2.2" },	{ front: "менял", back: "hat gewechselt", lesson: "A2.2" },
{ front: "потолок / одеяло", back: "die Decke", lesson: "A2.2" },	{ front: "потолки / одеяла", back: "die Decken", lesson: "A2.2" },
{ front: "висеть / вешать", back: "hängen", lesson: "A2.2" },	{ front: "повесил / висел", back: "hat gehängt / hat gehangen", lesson: "A2.2" },
{ front: "благодарность", back: "der Dank", lesson: "A2.2" },	
{ front: "ничего", back: "nichts", lesson: "A2.2" },	
{ front: "количество", back: "die Menge", lesson: "A2.2" },	{ front: "количества", back: "die Mengen", lesson: "A2.2" },
{ front: "шариковая ручка", back: "der Kugelschreiber", lesson: "A2.2" },	{ front: "шариковые ручки", back: "die Kugelschreiber", lesson: "A2.2" },
{ front: "засовывать / застревать", back: "stecken", lesson: "A2.2" },	{ front: "засовывал / застрял", back: "hat gesteckt", lesson: "A2.2" },
{ front: "замок", back: "das Schloss", lesson: "A2.2" },	{ front: "замки", back: "die Schlösser", lesson: "A2.2" },
{ front: "стоять", back: "stehen", lesson: "A2.2" },	{ front: "стоял", back: "hat gestanden", lesson: "A2.2" },
{ front: "картина / изображение", back: "das Bild", lesson: "A2.2" },	{ front: "картины / изображения", back: "die Bilder", lesson: "A2.2" },
{ front: "стена", back: "die Wand", lesson: "A2.2" },	{ front: "стены", back: "die Wände", lesson: "A2.2" },
{ front: "кошка", back: "die Katze", lesson: "A2.2" },	{ front: "кошки", back: "die Katzen", lesson: "A2.2" },
{ front: "класть", back: "legen", lesson: "A2.2" },	{ front: "положил", back: "hat gelegt", lesson: "A2.2" },
{ front: "покой", back: "die Ruhe", lesson: "A2.2" },	
{ front: "знак / табличка", back: "das Schild", lesson: "A2.2" },	{ front: "знаки / таблички", back: "die Schilder", lesson: "A2.2" },
{ front: "мешать", back: "stören", lesson: "A2.2" },	{ front: "мешал", back: "hat gestört", lesson: "A2.2" },
{ front: "ставить", back: "stellen", lesson: "A2.2" },	{ front: "ставил", back: "hat gestellt", lesson: "A2.2" },
{ front: "ручка / карандаш", back: "der Stift", lesson: "A2.2" },	{ front: "ручки / карандаши", back: "die Stifte", lesson: "A2.2" },
{ front: "строить", back: "bauen", lesson: "A2.2" },	{ front: "строил", back: "hat gebaut", lesson: "A2.2" },
{ front: "туда", back: "dahin", lesson: "A2.2" },	
{ front: "растение", back: "die Pflanze", lesson: "A2.2" },	{ front: "растения", back: "die Pflanzen", lesson: "A2.2" },
{ front: "туда", back: "dorthin", lesson: "A2.2" },	
{ front: "осторожность", back: "die Vorsicht", lesson: "A2.2" },	
{ front: "падать вниз", back: "runterfallen", lesson: "A2.2" },	{ front: "упал вниз", back: "ist gefallen", lesson: "A2.2" },
{ front: "внутрь", back: "rein", lesson: "A2.2" },	
{ front: "мусор", back: "der Müll", lesson: "A2.2" },	
{ front: "наружу", back: "raus", lesson: "A2.2" },	
{ front: "войти", back: "reinkommen", lesson: "A2.2" },	{ front: "вошёл", back: "ist reingekommen", lesson: "A2.2" },
{ front: "сообщение", back: "die Mitteilung", lesson: "A2.2" },	{ front: "сообщения", back: "die Mitteilungen", lesson: "A2.2" },
{ front: "житель", back: "der Bewohner", lesson: "A2.2" },	{ front: "жители", back: "die Bewohner", lesson: "A2.2" },
{ front: "жительница", back: "die Bewohnerin", lesson: "A2.2" },	{ front: "жительницы", back: "die Bewohnerinnen", lesson: "A2.2" },
{ front: "разделять", back: "trennen", lesson: "A2.2" },	{ front: "разделил", back: "hat getrennt", lesson: "A2.2" },
{ front: "био-", back: "bio-", lesson: "A2.2" },	
{ front: "отходы", back: "der Abfall", lesson: "A2.2" },	{ front: "отходы", back: "die Abfälle", lesson: "A2.2" },
{ front: "пластик", back: "das Plastik", lesson: "A2.2" },	
{ front: "обращать внимание", back: "beachten", lesson: "A2.2" },	{ front: "обращал внимание", back: "hat beachtet", lesson: "A2.2" },
{ front: "вывоз мусора", back: "die Müllabfuhr", lesson: "A2.2" },	{ front: "вывозы мусора", back: "die Müllabfuhren", lesson: "A2.2" },
{ front: "мусорный бак", back: "die Mülltonne", lesson: "A2.2" },	{ front: "мусорные баки", back: "die Mülltonnen", lesson: "A2.2" },
{ front: "ставить (откладывать)", back: "abstellen", lesson: "A2.2" },	{ front: "ставил", back: "hat abgestellt", lesson: "A2.2" },
{ front: "въезд", back: "die Einfahrt", lesson: "A2.2" },	{ front: "въезды", back: "die Einfahrten", lesson: "A2.2" },
{ front: "двор", back: "der Hof", lesson: "A2.2" },	{ front: "дворы", back: "die Höfe", lesson: "A2.2" },
{ front: "увольнять / расторгать", back: "kündigen", lesson: "A2.2" },	{ front: "уволил / расторгнул", back: "hat gekündigt", lesson: "A2.2" },
{ front: "договор", back: "der Vertrag", lesson: "A2.2" },	{ front: "договоры", back: "die Verträge", lesson: "A2.2" },
{ front: "надеяться", back: "hoffen", lesson: "A2.2" },	{ front: "надеялся", back: "hat gehofft", lesson: "A2.2" },
{ front: "понимание", back: "das Verständnis", lesson: "A2.2" },	
{ front: "заключать", back: "abschließen", lesson: "A2.2" },	{ front: "заключил", back: "hat abgeschlossen", lesson: "A2.2" },
{ front: "низкий", back: "niedrig", lesson: "A2.2" },	
{ front: "расходы / затраты", back: "die Kosten", lesson: "A2.2" },	
{ front: "повышаться", back: "(sich) erhöhen", lesson: "A2.2" },	{ front: "повысился", back: "hat erhöht", lesson: "A2.2" },
{ front: "удалять", back: "entfernen", lesson: "A2.2" },	{ front: "удалил", back: "hat entfernt", lesson: "A2.2" },
{ front: "предмет", back: "der Gegenstand", lesson: "A2.2" },	{ front: "предметы", back: "die Gegenstände", lesson: "A2.2" },
{ front: "отапливать", back: "heizen", lesson: "A2.2" },	{ front: "отапливал", back: "hat geheizt", lesson: "A2.2" },
{ front: "детская коляска", back: "der Kinderwagen", lesson: "A2.2" },	{ front: "детские коляски", back: "die Kinderwagen", lesson: "A2.2" },
{ front: "лифт", back: "der Aufzug", lesson: "A2.2" },	{ front: "лифты", back: "die Aufzüge", lesson: "A2.2" },
{ front: "лестница", back: "die Treppe", lesson: "A2.2" },	{ front: "лестницы", back: "die Treppen", lesson: "A2.2" },
{ front: "почтовый ящик", back: "der Briefkasten", lesson: "A2.2" },	{ front: "почтовые ящики", back: "die Briefkästen", lesson: "A2.2" },
{ front: "решение", back: "die Lösung", lesson: "A2.2" },	{ front: "решения", back: "die Lösungen", lesson: "A2.2" },
{ front: "довольно", back: "ziemlich", lesson: "A2.2" },	
{ front: "быть правым", back: "recht haben", lesson: "A2.2" },	{ front: "был прав", back: "hat recht gehabt", lesson: "A2.2" },
{ front: "вопрос", back: "die Frage", lesson: "A2.2" },	{ front: "вопросы", back: "die Fragen", lesson: "A2.2" },
{ front: "просьба", back: "die Bitte", lesson: "A2.2" },	{ front: "просьбы", back: "die Bitten", lesson: "A2.2" },
{ front: "намерение", back: "die Absicht", lesson: "A2.2" },	{ front: "намерения", back: "die Absichten", lesson: "A2.2" },
{ front: "смена", back: "die Schicht", lesson: "A2.2" },	{ front: "смены", back: "die Schichten", lesson: "A2.2" },
{ front: "позволять / оставлять", back: "lassen", lesson: "A2.2" },	{ front: "позволял / оставлял", back: "hat gelassen", lesson: "A2.2" },
{ front: "бросать", back: "werfen", lesson: "A2.2" },	{ front: "бросал", back: "hat geworfen", lesson: "A2.2" },
{ front: "присматривать", back: "aufpassen", lesson: "A2.2" },	{ front: "присматривал", back: "hat aufgepasst", lesson: "A2.2" },
{ front: "поливать", back: "gießen", lesson: "A2.2" },	{ front: "поливал", back: "hat gegossen", lesson: "A2.2" },
{ front: "действительно", back: "wirklich", lesson: "A2.2" },	
{ front: "звонить (в дверь, звонок)", back: "klingeln", lesson: "A2.2" },	{ front: "звонил", back: "hat geklingelt", lesson: "A2.2" },
{ front: "обсуждать", back: "besprechen", lesson: "A2.2" },	{ front: "обсуждал", back: "hat besprochen", lesson: "A2.2" },
{ front: "кормить", back: "füttern", lesson: "A2.2" },	{ front: "кормил", back: "hat gefüttert", lesson: "A2.2" },
{ front: "мастер / рабочий", back: "der Handwerker", lesson: "A2.2" },	{ front: "мастера / рабочие", back: "die Handwerker", lesson: "A2.2" },
{ front: "биоотходы", back: "der Biomüll", lesson: "A2.2" },	
{ front: "десерт", back: "die Nachspeise", lesson: "A2.3" },	{ front: "десерты", back: "die Nachspeisen", lesson: "A2.3" },
{ front: "мёд", back: "der Honig", lesson: "A2.3" },	
{ front: "обычно", back: "meistens", lesson: "A2.3" },	
{ front: "редко", back: "selten", lesson: "A2.3" },	
{ front: "соглашаться", back: "stimmen", lesson: "A2.3" },	{ front: "согласован", back: "hat gestimmt", lesson: "A2.3" },
{ front: "в пути", back: "unterwegs", lesson: "A2.3" },	
{ front: "приём пищи", back: "die Mahlzeit", lesson: "A2.3" },	{ front: "приёмы пищи", back: "die Mahlzeiten", lesson: "A2.3" },
{ front: "в полдень", back: "mittags", lesson: "A2.3" },	
{ front: "по утрам", back: "morgens", lesson: "A2.3" },	
{ front: "чашка", back: "die Tasse", lesson: "A2.3" },	{ front: "чашки", back: "die Tassen", lesson: "A2.3" },
{ front: "определённо", back: "bestimmt", lesson: "A2.3" },	
{ front: "еда", back: "das Essen", lesson: "A2.3" },	
{ front: "обед", back: "das Mittagessen", lesson: "A2.3" },	{ front: "обеды", back: "die Mittagessen", lesson: "A2.3" },
{ front: "столовая", back: "die Kantine", lesson: "A2.3" },	{ front: "столовые", back: "die Kantinen", lesson: "A2.3" },
{ front: "почти", back: "fast", lesson: "A2.3" },	
{ front: "вегетарианский", back: "vegetarisch", lesson: "A2.3" },	
{ front: "блюдо", back: "das Gericht", lesson: "A2.3" },	{ front: "блюда", back: "die Gerichte", lesson: "A2.3" },
{ front: "привычка", back: "die Gewohnheit", lesson: "A2.3" },	{ front: "привычки", back: "die Gewohnheiten", lesson: "A2.3" },
{ front: "брать на себя", back: "übernehmen", lesson: "A2.3" },	{ front: "взял на себя", back: "hat übernommen", lesson: "A2.3" },
{ front: "варенье", back: "die Marmelade", lesson: "A2.3" },	{ front: "варенья", back: "die Marmeladen", lesson: "A2.3" },
{ front: "немецкий", back: "deutsch", lesson: "A2.3" },	
{ front: "свинья", back: "das Schwein", lesson: "A2.3" },	{ front: "свиньи", back: "die Schweine", lesson: "A2.3" },
{ front: "алкоголь", back: "der Alkohol", lesson: "A2.3" },	
{ front: "дважды", back: "zweimal", lesson: "A2.3" },	
{ front: "ложка", back: "der Löffel", lesson: "A2.3" },	{ front: "ложки", back: "die Löffel", lesson: "A2.3" },
{ front: "нож", back: "das Messer", lesson: "A2.3" },	{ front: "ножи", back: "die Messer", lesson: "A2.3" },
{ front: "тарелка", back: "der Teller", lesson: "A2.3" },	{ front: "тарелки", back: "die Teller", lesson: "A2.3" },
{ front: "вилка", back: "die Gabel", lesson: "A2.3" },	{ front: "вилки", back: "die Gabeln", lesson: "A2.3" },
{ front: "квартет", back: "das Quartett", lesson: "A2.3" },	{ front: "квартеты", back: "die Quartette", lesson: "A2.3" },
{ front: "кастрюля", back: "der Topf", lesson: "A2.3" },	{ front: "кастрюли", back: "die Töpfe", lesson: "A2.3" },
{ front: "чайник, кувшин", back: "die Kanne", lesson: "A2.3" },	{ front: "чайники, кувшины", back: "die Kannen", lesson: "A2.3" },
{ front: "миска", back: "die Schüssel", lesson: "A2.3" },	{ front: "миски", back: "die Schüsseln", lesson: "A2.3" },
{ front: "сковорода", back: "die Pfanne", lesson: "A2.3" },	{ front: "сковороды", back: "die Pfannen", lesson: "A2.3" },
{ front: "аппетит", back: "der Appetit", lesson: "A2.3" },	
{ front: "пахнуть", back: "riechen", lesson: "A2.3" },	{ front: "пахнул", back: "hat gerochen", lesson: "A2.3" },
{ front: "раздеваться", back: "(sich) ausziehen", lesson: "A2.3" },	{ front: "раздевался", back: "hat ausgezogen", lesson: "A2.3" },
{ front: "полный", back: "voll", lesson: "A2.3" },	
{ front: "хорошо", back: "okay", lesson: "A2.3" },	
{ front: "раньше", back: "vorher", lesson: "A2.3" },	
{ front: "вежливый", back: "höflich", lesson: "A2.3" },	
{ front: "диета", back: "die Diät", lesson: "A2.3" },	{ front: "диеты", back: "die Diäten", lesson: "A2.3" },
{ front: "сытый", back: "satt", lesson: "A2.3" },	
{ front: "другой", back: "anders", lesson: "A2.3" },	
{ front: "так же", back: "genauso", lesson: "A2.3" },	
{ front: "удивлять", back: "überraschen", lesson: "A2.3" },	{ front: "удивил", back: "hat überrascht", lesson: "A2.3" },
{ front: "странный", back: "seltsam", lesson: "A2.3" },	
{ front: "острый", back: "scharf", lesson: "A2.3" },	
{ front: "сладкий", back: "süß", lesson: "A2.3" },	
{ front: "солёный", back: "salzig", lesson: "A2.3" },	
{ front: "жирный", back: "fett", lesson: "A2.3" },	
{ front: "руководить", back: "leiten", lesson: "A2.3" },	{ front: "руководил", back: "hat geleitet", lesson: "A2.3" },
{ front: "свежий", back: "frisch", lesson: "A2.3" },	
{ front: "круглый", back: "rund", lesson: "A2.3" },	
{ front: "различный", back: "unterschiedlich", lesson: "A2.3" },	
{ front: "вид, тип", back: "die Art", lesson: "A2.3" },	{ front: "виды, типы", back: "die Arten", lesson: "A2.3" },
{ front: "мюсли", back: "das Müsli", lesson: "A2.3" },	{ front: "мюсли", back: "die Müslis", lesson: "A2.3" },
{ front: "фрукт", back: "die Frucht", lesson: "A2.3" },	{ front: "фрукты", back: "die Früchte", lesson: "A2.3" },
{ front: "закуска", back: "die Vorspeise", lesson: "A2.3" },	{ front: "закуски", back: "die Vorspeisen", lesson: "A2.3" },
{ front: "главный", back: "Haupt-", lesson: "A2.3" },	
{ front: "процент", back: "das Prozent", lesson: "A2.3" },	{ front: "проценты", back: "die Prozente", lesson: "A2.3" },
{ front: "рынок", back: "der Markt", lesson: "A2.3" },	{ front: "рынки", back: "die Märkte", lesson: "A2.3" },
{ front: "региональный", back: "regional", lesson: "A2.3" },	
{ front: "продукт", back: "das Produkt", lesson: "A2.3" },	{ front: "продукты", back: "die Produkte", lesson: "A2.3" },
{ front: "окружение", back: "die Umgebung", lesson: "A2.3" },	{ front: "окружения", back: "die Umgebungen", lesson: "A2.3" },
{ front: "стейк", back: "das Steak", lesson: "A2.3" },	{ front: "стейки", back: "die Steaks", lesson: "A2.3" },
{ front: "фабрика", back: "die Fabrik", lesson: "A2.3" },	{ front: "фабрики", back: "die Fabriken", lesson: "A2.3" },
{ front: "против", back: "gegen", lesson: "A2.3" },	
{ front: "планировать", back: "planen", lesson: "A2.3" },	{ front: "планировал", back: "hat geplant", lesson: "A2.3" },
{ front: "ежедневно", back: "täglich", lesson: "A2.3" },	
{ front: "шницель", back: "das Schnitzel", lesson: "A2.3" },	{ front: "шницели", back: "die Schnitzel", lesson: "A2.3" },
{ front: "суп", back: "die Suppe", lesson: "A2.3" },	{ front: "супы", back: "die Suppen", lesson: "A2.3" },
{ front: "кусок", back: "das Stück", lesson: "A2.3" },	{ front: "куски", back: "die Stücke", lesson: "A2.3" },
{ front: "лимон", back: "die Zitrone", lesson: "A2.3" },	{ front: "лимоны", back: "die Zitronen", lesson: "A2.3" },
{ front: "чистый", back: "sauber", lesson: "A2.3" },	
{ front: "говядина", back: "das Rind", lesson: "A2.3" },	{ front: "говядины", back: "die Rinder", lesson: "A2.3" },
{ front: "жаркое", back: "der Braten", lesson: "A2.3" },	{ front: "жаркие", back: "die Braten", lesson: "A2.3" },
{ front: "занятый", back: "besetzt", lesson: "A2.3" },	
{ front: "чаевые", back: "das Trinkgeld", lesson: "A2.3" },	{ front: "чаевые (мн.ч.)", back: "die Trinkgelder", lesson: "A2.3" },
{ front: "стакан", back: "das Glas", lesson: "A2.3" },	{ front: "стаканы", back: "die Gläser", lesson: "A2.3" },
{ front: "бронь, резервация", back: "die Reservierung", lesson: "A2.4" },	{ front: "брони, резервации", back: "die Reservierungen", lesson: "A2.4" },
{ front: "подтверждение", back: "die Bestätigung", lesson: "A2.4" },	{ front: "подтверждения", back: "die Bestätigungen", lesson: "A2.4" },
{ front: "записывать", back: "notieren", lesson: "A2.4" },	{ front: "записал", back: "hat notiert", lesson: "A2.4" },
{ front: "онлайн", back: "online", lesson: "A2.4" },	
{ front: "сложный", back: "schwierig", lesson: "A2.4" },	
{ front: "совещание", back: "die Besprechung", lesson: "A2.4" },	{ front: "совещания", back: "die Besprechungen", lesson: "A2.4" },
{ front: "ведь, а именно", back: "nämlich", lesson: "A2.4" },	
{ front: "дружелюбный", back: "freundlich", lesson: "A2.4" },	
{ front: "умный", back: "klug", lesson: "A2.4" },	
{ front: "ошибка", back: "der Fehler", lesson: "A2.4" },	{ front: "ошибки", back: "die Fehler", lesson: "A2.4" },
{ front: "если", back: "wenn", lesson: "A2.4" },	
{ front: "безопасный, уверенный", back: "sicher", lesson: "A2.4" },	
{ front: "материал", back: "das Material", lesson: "A2.4" },	{ front: "материалы", back: "die Materialien", lesson: "A2.4" },
{ front: "участник", back: "der Teilnehmer", lesson: "A2.4" },	{ front: "участники", back: "die Teilnehmer", lesson: "A2.4" },
{ front: "участница", back: "die Teilnehmerin", lesson: "A2.4" },	{ front: "участницы", back: "die Teilnehmerinnen", lesson: "A2.4" },
{ front: "совет, подсказка", back: "der Tipp", lesson: "A2.4" },	{ front: "советы, подсказки", back: "die Tipps", lesson: "A2.4" },
{ front: "регулярно", back: "regelmäßig", lesson: "A2.4" },	
{ front: "обращать внимание на", back: "achten auf", lesson: "A2.4" },	{ front: "обратил внимание на", back: "hat geachtet", lesson: "A2.4" },
{ front: "записка, бумажка", back: "der Zettel", lesson: "A2.4" },	{ front: "записки, бумажки", back: "die Zettel", lesson: "A2.4" },
{ front: "универмаг", back: "das Kaufhaus", lesson: "A2.4" },	{ front: "универмаги", back: "die Kaufhäuser", lesson: "A2.4" },
{ front: "использовать", back: "nutzen", lesson: "A2.4" },	{ front: "использовал", back: "hat genutzt", lesson: "A2.4" },
{ front: "платформа", back: "die Plattform", lesson: "A2.4" },	{ front: "платформы", back: "die Plattformen", lesson: "A2.4" },
{ front: "форум", back: "das Forum", lesson: "A2.4" },	{ front: "форумы", back: "die Foren", lesson: "A2.4" },
{ front: "агентство", back: "die Agentur", lesson: "A2.4" },	{ front: "агентства", back: "die Agenturen", lesson: "A2.4" },
{ front: "временная работа", back: "die Zeitarbeit", lesson: "A2.4" },	{ front: "временные работы", back: "die Zeitarbeiten", lesson: "A2.4" },
{ front: "ученик, стажёр / ученица, стажёрша", back: "der Auszubildende / die Auszubildende", lesson: "A2.4" },	{ front: "ученики, стажёры / ученицы, стажёры", back: "die Auszubildenden", lesson: "A2.4" },
{ front: "выключать", back: "aus·schalten", lesson: "A2.4" },	{ front: "выключил", back: "hat ausgeschaltet", lesson: "A2.4" },
{ front: "профсоюз", back: "die Gewerkschaft", lesson: "A2.4" },	{ front: "профсоюзы", back: "die Gewerkschaften", lesson: "A2.4" },
{ front: "безопасность", back: "die Sicherheit", lesson: "A2.4" },	
{ front: "защита", back: "der Schutz", lesson: "A2.4" },	
{ front: "предприятие", back: "der Betrieb", lesson: "A2.4" },	{ front: "предприятия", back: "die Betriebe", lesson: "A2.4" },
{ front: "собрание", back: "die Versammlung", lesson: "A2.4" },	{ front: "собрания", back: "die Versammlungen", lesson: "A2.4" },
{ front: "срок", back: "die Frist", lesson: "A2.4" },	{ front: "сроки", back: "die Fristen", lesson: "A2.4" },
{ front: "повышение квалификации", back: "die Weiterbildung", lesson: "A2.4" },	{ front: "повышения квалификации", back: "die Weiterbildungen", lesson: "A2.4" },
{ front: "интерес", back: "das Interesse", lesson: "A2.4" },	
{ front: "выходить на пенсию", back: "in Rente gehen", lesson: "A2.4" },	
{ front: "жизнь", back: "das Leben", lesson: "A2.4" },	
{ front: "пенсионер (муж.)", back: "der Rentner", lesson: "A2.4" },	{ front: "пенсионеры (муж.)", back: "die Rentner", lesson: "A2.4" },
{ front: "пенсионерка (жен.)", back: "die Rentnerin", lesson: "A2.4" },	{ front: "пенсионерки (жен.)", back: "die Rentnerinnen", lesson: "A2.4" },
{ front: "мероприятие", back: "die Veranstaltung", lesson: "A2.4" },	{ front: "мероприятия", back: "die Veranstaltungen", lesson: "A2.4" },
{ front: "обращаться", back: "wenden", lesson: "A2.4" },	{ front: "обратился", back: "hat gewandt", lesson: "A2.4" },
{ front: "происходить", back: "statt·finden", lesson: "A2.4" },	{ front: "происходил", back: "hat stattgefunden", lesson: "A2.4" },
{ front: "производственный совет", back: "der Betriebsrat", lesson: "A2.4" },	{ front: "производственные советы", back: "die Betriebsräte", lesson: "A2.4" },
{ front: "сообщать", back: "berichten", lesson: "A2.4" },	{ front: "сообщил", back: "hat berichtet", lesson: "A2.4" },
{ front: "консультировать", back: "beraten", lesson: "A2.4" },	{ front: "консультировал", back: "hat beraten", lesson: "A2.4" },
{ front: "тариф", back: "der Tarif", lesson: "A2.4" },	{ front: "тарифы", back: "die Tarife", lesson: "A2.4" },
{ front: "право", back: "das Recht", lesson: "A2.4" },	{ front: "права", back: "die Rechte", lesson: "A2.4" },
{ front: "увольнение (заявление)", back: "die Kündigung", lesson: "A2.4" },	{ front: "увольнения", back: "die Kündigungen", lesson: "A2.4" },
{ front: "увольнение (факт)", back: "die Entlassung", lesson: "A2.4" },	{ front: "увольнения", back: "die Entlassungen", lesson: "A2.4" },
{ front: "предписание", back: "die Vorschrift", lesson: "A2.4" },	{ front: "предписания", back: "die Vorschriften", lesson: "A2.4" },
{ front: "без", back: "ohne", lesson: "A2.4" },	
{ front: "увольнять", back: "entlassen", lesson: "A2.4" },	{ front: "уволил", back: "hat entlassen", lesson: "A2.4" },
{ front: "защищать", back: "schützen", lesson: "A2.4" },	{ front: "защищал", back: "hat geschützt", lesson: "A2.4" },
{ front: "благодарить", back: "(sich) bedanken", lesson: "A2.4" },	{ front: "поблагодарил", back: "hat bedankt", lesson: "A2.4" },
{ front: "передавать (приветы)", back: "aus·richten", lesson: "A2.4" },	{ front: "передал", back: "hat ausgerichtet", lesson: "A2.4" },
{ front: "экспорт", back: "der Export", lesson: "A2.4" },	{ front: "экспорты", back: "die Exporte", lesson: "A2.4" },
{ front: "пытаться", back: "versuchen", lesson: "A2.4" },	{ front: "пытался", back: "hat versucht", lesson: "A2.4" },
{ front: "никто", back: "niemand", lesson: "A2.4" },	
{ front: "конец рабочего дня", back: "der Feierabend", lesson: "A2.4" },	{ front: "концы рабочего дня", back: "die Feierabende", lesson: "A2.4" },
{ front: "импорт", back: "der Import", lesson: "A2.4" },	{ front: "импорты", back: "die Importe", lesson: "A2.4" },
{ front: "работник", back: "der Arbeitnehmer", lesson: "A2.4" },	{ front: "работники", back: "die Arbeitnehmer", lesson: "A2.4" },
{ front: "работница", back: "die Arbeitnehmerin", lesson: "A2.4" },	{ front: "работницы", back: "die Arbeitnehmerinnen", lesson: "A2.4" },
{ front: "средний", back: "durchschnittlich", lesson: "A2.4" },	
{ front: "понятие, догадка", back: "die Ahnung", lesson: "A2.4" },	{ front: "понятия, догадки", back: "die Ahnungen", lesson: "A2.4" },
{ front: "национальный праздник", back: "der Nationalfeiertag", lesson: "A2.4" },	{ front: "национальные праздники", back: "die Nationalfeiertage", lesson: "A2.4" },
{ front: "сверхурочный час", back: "die Überstunde", lesson: "A2.4" },	{ front: "сверхурочные часы", back: "die Überstunden", lesson: "A2.4" },
{ front: "зарплата", back: "der Lohn", lesson: "A2.4" },	{ front: "зарплаты", back: "die Löhne", lesson: "A2.4" },
{ front: "предлагать", back: "bieten", lesson: "A2.4" },	{ front: "предлагал", back: "hat geboten", lesson: "A2.4" },
{ front: "правило", back: "die Regel", lesson: "A2.4" },	{ front: "правила", back: "die Regeln", lesson: "A2.4" },
{ front: "промышленность", back: "die Industrie", lesson: "A2.4" },	
{ front: "среднее значение", back: "der Durchschnitt", lesson: "A2.4" },	{ front: "средние значения", back: "die Durchschnitte", lesson: "A2.4" },
{ front: "большинство", back: "die meisten", lesson: "A2.4" },	
{ front: "в целом", back: "insgesamt", lesson: "A2.4" },	
{ front: "считаться", back: "gelten", lesson: "A2.4" },	{ front: "считался", back: "hat gegolten", lesson: "A2.4" },
{ front: "как минимум", back: "mindestens", lesson: "A2.4" },	
{ front: "двигаться", back: "(sich) bewegen", lesson: "A2.5" },	{ front: "двигался", back: "hat bewegt", lesson: "A2.5" },
{ front: "интересоваться", back: "(sich) interessieren für", lesson: "A2.5" },	{ front: "интересовался", back: "hat interessiert", lesson: "A2.5" },
{ front: "танец", back: "der Tanz", lesson: "A2.5" },	{ front: "танцы", back: "die Tänze", lesson: "A2.5" },
{ front: "баскетбол", back: "der Basketball", lesson: "A2.5" },	
{ front: "чувствовать", back: "(sich) fühlen", lesson: "A2.5" },	{ front: "чувствовал", back: "hat gefühlt", lesson: "A2.5" },
{ front: "слишком мало", back: "zu wenig", lesson: "A2.5" },	
{ front: "видео", back: "das Video", lesson: "A2.5" },	{ front: "видео", back: "die Videos", lesson: "A2.5" },
{ front: "падать", back: "hin·fallen", lesson: "A2.5" },	{ front: "упал", back: "ist hingefallen", lesson: "A2.5" },
{ front: "желание", back: "die Lust", lesson: "A2.5" },	
{ front: "клуб, объединение", back: "der Verein", lesson: "A2.5" },	{ front: "клубы, объединения", back: "die Vereine", lesson: "A2.5" },
{ front: "попытка", back: "der Versuch", lesson: "A2.5" },	{ front: "попытки", back: "die Versuche", lesson: "A2.5" },
{ front: "мастер", back: "der Meister", lesson: "A2.5" },	{ front: "мастера", back: "die Meister", lesson: "A2.5" },
{ front: "вид спорта", back: "die Sportart", lesson: "A2.5" },	{ front: "виды спорта", back: "die Sportarten", lesson: "A2.5" },
{ front: "расслабление", back: "die Entspannung", lesson: "A2.5" },	
{ front: "питание", back: "die Ernährung", lesson: "A2.5" },	
{ front: "движение", back: "die Bewegung", lesson: "A2.5" },	{ front: "движения", back: "die Bewegungen", lesson: "A2.5" },
{ front: "в форме", back: "fit", lesson: "A2.5" },	
{ front: "прогулка", back: "der Spaziergang", lesson: "A2.5" },	{ front: "прогулки", back: "die Spaziergänge", lesson: "A2.5" },
{ front: "договариваться о встрече", back: "(sich) verabreden mit", lesson: "A2.5" },	{ front: "договорился", back: "hat verabredet", lesson: "A2.5" },
{ front: "отдыхать", back: "(sich) aus·ruhen", lesson: "A2.5" },	{ front: "отдыхал", back: "hat ausgeruht", lesson: "A2.5" },
{ front: "питаться", back: "(sich) ernähren", lesson: "A2.5" },	{ front: "питался", back: "hat ernährt", lesson: "A2.5" },
{ front: "злиться (на)", back: "(sich) ärgern (über)", lesson: "A2.5" },	{ front: "злился", back: "hat geärgert", lesson: "A2.5" },
{ front: "краситься", back: "(sich) schminken", lesson: "A2.5" },	{ front: "красился", back: "hat geschminkt", lesson: "A2.5" },
{ front: "бриться", back: "(sich) rasieren", lesson: "A2.5" },	{ front: "брился", back: "hat rasiert", lesson: "A2.5" },
{ front: "переодеваться", back: "(sich) um·ziehen", lesson: "A2.5" },	{ front: "переодевался", back: "hat umgezogen", lesson: "A2.5" },
{ front: "причёсываться", back: "(sich) kämmen", lesson: "A2.5" },	{ front: "причесался", back: "hat gekämmt", lesson: "A2.5" },
{ front: "мыться", back: "(sich) waschen", lesson: "A2.5" },	{ front: "мылся", back: "hat gewaschen", lesson: "A2.5" },
{ front: "торопиться", back: "(sich) beeilen", lesson: "A2.5" },	{ front: "торопился", back: "hat beeilt", lesson: "A2.5" },
{ front: "концентрироваться (на)", back: "(sich) konzentrieren (auf)", lesson: "A2.5" },	{ front: "сосредоточился", back: "hat konzentriert", lesson: "A2.5" },
{ front: "жаловаться (на)", back: "(sich) beschweren (über)", lesson: "A2.5" },	{ front: "жаловался", back: "hat beschwert", lesson: "A2.5" },
{ front: "вообще", back: "überhaupt", lesson: "A2.5" },	
{ front: "журнал", back: "die Zeitschrift", lesson: "A2.5" },	{ front: "журналы", back: "die Zeitschriften", lesson: "A2.5" },
{ front: "история", back: "die Geschichte", lesson: "A2.5" },	
{ front: "театр", back: "das Theater", lesson: "A2.5" },	{ front: "театры", back: "die Theater", lesson: "A2.5" },
{ front: "новости", back: "die Nachrichten", lesson: "A2.5" },	
{ front: "чемпионат мира", back: "die Weltmeisterschaft", lesson: "A2.5" },	{ front: "чемпионаты мира", back: "die Weltmeisterschaften", lesson: "A2.5" },
{ front: "прогноз погоды", back: "die Wettervorhersage", lesson: "A2.5" },	{ front: "прогнозы погоды", back: "die Wettervorhersagen", lesson: "A2.5" },
{ front: "команда", back: "die Mannschaft", lesson: "A2.5" },	{ front: "команды", back: "die Mannschaften", lesson: "A2.5" },
{ front: "визит, посещение", back: "der Besuch", lesson: "A2.5" },	{ front: "визиты, посещения", back: "die Besuche", lesson: "A2.5" },
{ front: "заботиться о", back: "(sich) kümmern um", lesson: "A2.5" },	{ front: "заботился", back: "hat gekümmert", lesson: "A2.5" },
{ front: "мечтать о", back: "träumen von", lesson: "A2.5" },	{ front: "мечтал", back: "hat geträumt", lesson: "A2.5" },
{ front: "страх", back: "die Angst", lesson: "A2.5" },	{ front: "страхи", back: "die Ängste", lesson: "A2.5" },
{ front: "честный", back: "ehrlich", lesson: "A2.5" },	
{ front: "золото", back: "das Gold", lesson: "A2.5" },	
{ front: "сезон", back: "die Saison", lesson: "A2.5" },	{ front: "сезоны", back: "die Saisons", lesson: "A2.5" },
{ front: "вспоминать о", back: "(sich) erinnern an", lesson: "A2.5" },	{ front: "вспоминал", back: "hat erinnert", lesson: "A2.5" },
{ front: "думать о", back: "denken an", lesson: "A2.5" },	{ front: "думал", back: "hat gedacht", lesson: "A2.5" },
{ front: "каникулы", back: "die Ferien", lesson: "A2.5" },	
{ front: "гимнастика", back: "die Gymnastik", lesson: "A2.5" },	
{ front: "настольный теннис", back: "das Tischtennis", lesson: "A2.5" },	
{ front: "волейбол", back: "der Volleyball", lesson: "A2.5" },	
{ front: "фитнес", back: "die Fitness", lesson: "A2.5" },	
{ front: "вклад, статья", back: "der Beitrag", lesson: "A2.5" },	{ front: "вклады, статьи", back: "die Beiträge", lesson: "A2.5" },
{ front: "составлять, равняться", back: "betragen", lesson: "A2.5" },	{ front: "составил", back: "hat betragen", lesson: "A2.5" },
{ front: "группа", back: "die Gruppe", lesson: "A2.5" },	{ front: "группы", back: "die Gruppen", lesson: "A2.5" },
{ front: "скидка", back: "die Ermäßigung", lesson: "A2.5" },	{ front: "скидки", back: "die Ermäßigungen", lesson: "A2.5" },
{ front: "бесплатно", back: "kostenlos", lesson: "A2.5" },	
{ front: "ученик на производстве", back: "der Azubi", lesson: "A2.5" },	{ front: "ученики на производстве", back: "die Azubis", lesson: "A2.5" },
{ front: "дополнительный", back: "zusätzlich", lesson: "A2.5" },	
{ front: "активный", back: "aktiv", lesson: "A2.5" },	
{ front: "бегать трусцой", back: "joggen", lesson: "A2.5" },	{ front: "бегал трусцой", back: "ist gejoggt", lesson: "A2.5" },
{ front: "держаться", back: "(sich) halten", lesson: "A2.5" },	{ front: "держался", back: "hat gehalten", lesson: "A2.5" },
{ front: "часто", back: "häufig", lesson: "A2.5" },	
{ front: "причина", back: "die Ursache", lesson: "A2.5" },	{ front: "причины", back: "die Ursachen", lesson: "A2.5" },
{ front: "болезнь", back: "die Krankheit", lesson: "A2.5" },	{ front: "болезни", back: "die Krankheiten", lesson: "A2.5" },
{ front: "экран", back: "der Bildschirm", lesson: "A2.5" },	{ front: "экраны", back: "die Bildschirme", lesson: "A2.5" },
{ front: "тело", back: "der Körper", lesson: "A2.5" },	{ front: "тела", back: "die Körper", lesson: "A2.5" },
{ front: "кроме того", back: "außerdem", lesson: "A2.5" },	
{ front: "воздух", back: "die Luft", lesson: "A2.5" },	
{ front: "обследование", back: "die Untersuchung", lesson: "A2.5" },	{ front: "обследования", back: "die Untersuchungen", lesson: "A2.5" },
{ front: "справляться", back: "schaffen", lesson: "A2.5" },	{ front: "справился", back: "hat geschafft", lesson: "A2.5" },
{ front: "выгодный, недорогой", back: "preiswert", lesson: "A2.5" },	
{ front: "бегать", back: "laufen", lesson: "A2.5" },	{ front: "бегал", back: "ist gelaufen", lesson: "A2.5" },
{ front: "тренд", back: "der Trend", lesson: "A2.5" },	{ front: "тренды", back: "die Trends", lesson: "A2.5" },
{ front: "игровая площадка", back: "der Spielplatz", lesson: "A2.5" },	{ front: "игровые площадки", back: "die Spielplätze", lesson: "A2.5" },
{ front: "дополнительный", back: "extra", lesson: "A2.5" },	
{ front: "гибкий", back: "flexibel", lesson: "A2.5" },	
{ front: "окружающая среда", back: "die Umwelt", lesson: "A2.5" },	
{ front: "медицинская страховая", back: "die Krankenkasse", lesson: "A2.5" },	{ front: "медицинские страховые", back: "die Krankenkassen", lesson: "A2.5" },
{ front: "популярный", back: "beliebt", lesson: "A2.5" },	
{ front: "участок, маршрут", back: "die Strecke", lesson: "A2.5" },	{ front: "участки, маршруты", back: "die Strecken", lesson: "A2.5" },
{ front: "ясный", back: "klar", lesson: "A2.5" },	
{ front: "преувеличивать", back: "übertreiben", lesson: "A2.5" },	{ front: "преувеличил", back: "hat übertrieben", lesson: "A2.5" },
{ front: "само собой разумеется", back: "selbstverständlich", lesson: "A2.5" },	
{ front: "играть в теннис", back: "tennis spielen", lesson: "A2.5" },	
{ front: "кататься на лыжах", back: "ski fahren", lesson: "A2.5" },	{ front: "катался на лыжах", back: "ist gefahren", lesson: "A2.5" },
{ front: "играть в баскетбол", back: "basketball spielen", lesson: "A2.5" },	
{ front: "заниматься гимнастикой", back: "gymnastik machen", lesson: "A2.5" },	
{ front: "играть в настольный теннис", back: "tischtennis spielen", lesson: "A2.5" },	
{ front: "играть в волейбол", back: "volleyball spielen", lesson: "A2.5" },	
{ front: "заниматься фитнесом", back: "fitnesstraining machen", lesson: "A2.5" },	
{ front: "играть в хоккей", back: "eishockey spielen", lesson: "A2.5" },	
{ front: "плавать", back: "schwimmen", lesson: "A2.5" },	{ front: "плавал", back: "ist geschwommen", lesson: "A2.5" },
{ front: "ездить на велосипеде", back: "fahrrad fahren", lesson: "A2.5" },	{ front: "ездил на велосипеде", back: "ist gefahren", lesson: "A2.5" },
{ front: "играть в футбол", back: "fußball spielen", lesson: "A2.5" },	
{ front: "ходить в походы", back: "wandern", lesson: "A2.5" },	{ front: "ходил в походы", back: "ist gewandert", lesson: "A2.5" },
{ front: "танцевать", back: "tanzen", lesson: "A2.5" },	{ front: "танцевал", back: "hat getanzt", lesson: "A2.5" },
{ front: "свидетельство об обучении", back: "das Zeugnis", lesson: "A2.6" },	{ front: "свидетельства об обучении", back: "die Zeugnisse", lesson: "A2.6" },
{ front: "предмет", back: "das Fach", lesson: "A2.6" },	{ front: "предметы", back: "die Fächer", lesson: "A2.6" },
{ front: "оценка", back: "die Note", lesson: "A2.6" },	{ front: "оценки", back: "die Noten", lesson: "A2.6" },
{ front: "гимназия", back: "das Gymnasium", lesson: "A2.6" },	{ front: "гимназии", back: "die Gymnasien", lesson: "A2.6" },
{ front: "доклад", back: "das Referat", lesson: "A2.6" },	{ front: "доклады", back: "die Referate", lesson: "A2.6" },
{ front: "аттестат зрелости", back: "das Abitur", lesson: "A2.6" },	
{ front: "окончание, диплом", back: "der Abschluss", lesson: "A2.6" },	{ front: "окончания, дипломы", back: "die Abschlüsse", lesson: "A2.6" },
{ front: "экзамен", back: "die Prüfung", lesson: "A2.6" },	{ front: "экзамены", back: "die Prüfungen", lesson: "A2.6" },
{ front: "ленивый", back: "faul", lesson: "A2.6" },	
{ front: "ужасный", back: "schrecklich", lesson: "A2.6" },	
{ front: "прилежный, усердный", back: "fleißig", lesson: "A2.6" },	
{ front: "умный", back: "intelligent", lesson: "A2.6" },	
{ front: "спорить", back: "streiten", lesson: "A2.6" },	{ front: "спорил", back: "hat gestritten", lesson: "A2.6" },
{ front: "что (союз)", back: "dass", lesson: "A2.6" },	
{ front: "улучшать", back: "verbessern", lesson: "A2.6" },	{ front: "улучшил", back: "hat verbessert", lesson: "A2.6" },
{ front: "поведение", back: "das Verhalten", lesson: "A2.6" },	
{ front: "строгий", back: "streng", lesson: "A2.6" },	
{ front: "желание", back: "der Wunsch", lesson: "A2.6" },	{ front: "желания", back: "die Wünsche", lesson: "A2.6" },
{ front: "план", back: "der Plan", lesson: "A2.6" },	{ front: "планы", back: "die Pläne", lesson: "A2.6" },
{ front: "астронавт", back: "der Astronaut", lesson: "A2.6" },	{ front: "астронавты", back: "die Astronauten", lesson: "A2.6" },
{ front: "астронавтка", back: "die Astronautin", lesson: "A2.6" },	{ front: "астронавтки", back: "die Astronautinnen", lesson: "A2.6" },
{ front: "только что, недавно", back: "vorhin", lesson: "A2.6" },	
{ front: "средний", back: "mittler-", lesson: "A2.6" },	
{ front: "активность", back: "die Aktivität", lesson: "A2.6" },	{ front: "активности", back: "die Aktivitäten", lesson: "A2.6" },
{ front: "система", back: "das System", lesson: "A2.6" },	{ front: "системы", back: "die Systeme", lesson: "A2.6" },
{ front: "(профессиональный) вуз", back: "die (Fach-)Hochschule", lesson: "A2.6" },	{ front: "(профессиональные) вузы", back: "die (Fach-)Hochschulen", lesson: "A2.6" },
{ front: "университет", back: "die Universität", lesson: "A2.6" },	{ front: "университеты", back: "die Universitäten", lesson: "A2.6" },
{ front: "объединённая школа", back: "die Gesamtschule", lesson: "A2.6" },	{ front: "объединённые школы", back: "die Gesamtschulen", lesson: "A2.6" },
{ front: "реальная школа", back: "die Realschule", lesson: "A2.6" },	{ front: "реальные школы", back: "die Realschulen", lesson: "A2.6" },
{ front: "основная школа", back: "die Hauptschule", lesson: "A2.6" },	{ front: "основные школы", back: "die Hauptschulen", lesson: "A2.6" },
{ front: "средняя школа", back: "die Mittelschule", lesson: "A2.6" },	{ front: "средние школы", back: "die Mittelschulen", lesson: "A2.6" },
{ front: "профессионально-техническое училище", back: "die Berufsschule", lesson: "A2.6" },	{ front: "ПТУ", back: "die Berufsschulen", lesson: "A2.6" },
{ front: "добровольный", back: "freiwillig", lesson: "A2.6" },	
{ front: "ясли", back: "die Krippe", lesson: "A2.6" },	{ front: "ясли", back: "die Krippen", lesson: "A2.6" },
{ front: "физика", back: "die Physik", lesson: "A2.6" },	
{ front: "обществоведение", back: "die Sozialkunde", lesson: "A2.6" },	
{ front: "биология", back: "die Biologie", lesson: "A2.6" },	
{ front: "химия", back: "die Chemie", lesson: "A2.6" },	
{ front: "география", back: "die Geografie", lesson: "A2.6" },	
{ front: "искусство", back: "die Kunst", lesson: "A2.6" },	
{ front: "история", back: "die Geschichte", lesson: "A2.6" },	
{ front: "ненавидеть", back: "hassen", lesson: "A2.6" },	{ front: "ненавидел", back: "hat gehasst", lesson: "A2.6" },
{ front: "весна", back: "das Frühjahr", lesson: "A2.6" },	
{ front: "начало", back: "der Beginn", lesson: "A2.6" },	
{ front: "теория", back: "die Theorie", lesson: "A2.6" },	{ front: "теории", back: "die Theorien", lesson: "A2.6" },
{ front: "введение", back: "die Einführung", lesson: "A2.6" },	{ front: "введения", back: "die Einführungen", lesson: "A2.6" },
{ front: "сохранять", back: "speichern", lesson: "A2.6" },	{ front: "сохранил", back: "hat gespeichert", lesson: "A2.6" },
{ front: "мигрант", back: "der Migrant", lesson: "A2.6" },	{ front: "мигранты", back: "die Migranten", lesson: "A2.6" },
{ front: "мигрантка", back: "die Migrantin", lesson: "A2.6" },	{ front: "мигрантки", back: "die Migrantinnen", lesson: "A2.6" },
{ front: "социальный", back: "sozial", lesson: "A2.6" },	
{ front: "доклад", back: "der Vortrag", lesson: "A2.6" },	{ front: "доклады", back: "die Vorträge", lesson: "A2.6" },
{ front: "подавать заявку", back: "(sich) bewerben", lesson: "A2.6" },	{ front: "подал заявку", back: "hat beworben", lesson: "A2.6" },
{ front: "представлять", back: "präsentieren", lesson: "A2.6" },	{ front: "представил", back: "hat präsentiert", lesson: "A2.6" },
{ front: "эксперт", back: "der Experte", lesson: "A2.6" },	{ front: "эксперты", back: "die Experten", lesson: "A2.6" },
{ front: "экспертка", back: "die Expertin", lesson: "A2.6" },	{ front: "экспертки", back: "die Expertinnen", lesson: "A2.6" },
{ front: "подготовка", back: "die Vorbereitung", lesson: "A2.6" },	{ front: "подготовки", back: "die Vorbereitungen", lesson: "A2.6" },
{ front: "сертификат", back: "das Zertifikat", lesson: "A2.6" },	{ front: "сертификаты", back: "die Zertifikate", lesson: "A2.6" },
{ front: "поддержка", back: "die Förderung", lesson: "A2.6" },	{ front: "поддержки", back: "die Förderungen", lesson: "A2.6" },
{ front: "возможный", back: "möglich", lesson: "A2.6" },	
{ front: "консультация", back: "die Beratung", lesson: "A2.6" },	{ front: "консультации", back: "die Beratungen", lesson: "A2.6" },
{ front: "пораниться", back: "sich verletzen", lesson: "A2.6" },	{ front: "поранился", back: "hat verletzt", lesson: "A2.6" },
{ front: "кровоточить", back: "bluten", lesson: "A2.6" },	{ front: "кровоточил", back: "hat geblutet", lesson: "A2.6" },
{ front: "обучение в вузе", back: "das Studium", lesson: "A2.6" },	
{ front: "распорядок дня", back: "der Tagesablauf", lesson: "A2.6" },	{ front: "распорядки дня", back: "die Tagesabläufe", lesson: "A2.6" },
{ front: "сдавать (экзамен)", back: "bestehen", lesson: "A2.6" },	{ front: "сдал", back: "hat bestanden", lesson: "A2.6" },
{ front: "миграционный фон", back: "der Migrationshintergrund", lesson: "A2.6" },	
{ front: "гордый", back: "stolz", lesson: "A2.6" },	
{ front: "электрический", back: "elektrisch", lesson: "A2.6" },	
{ front: "техника", back: "die Technik", lesson: "A2.6" },	
{ front: "контакт", back: "der Kontakt", lesson: "A2.6" },	{ front: "контакты", back: "die Kontakte", lesson: "A2.6" },
{ front: "признавать", back: "anerkennen", lesson: "A2.6" },	{ front: "признал", back: "hat anerkannt", lesson: "A2.6" },
{ front: "проверять", back: "prüfen", lesson: "A2.6" },	{ front: "проверил", back: "hat geprüft", lesson: "A2.6" },
{ front: "сложный", back: "kompliziert", lesson: "A2.6" },	
{ front: "пекарь", back: "der Bäcker", lesson: "A2.6" },	{ front: "пекари", back: "die Bäcker", lesson: "A2.6" },
{ front: "пекарша", back: "die Bäckerin", lesson: "A2.6" },	{ front: "пекарши", back: "die Bäckerinnen", lesson: "A2.6" },
{ front: "актёр", back: "der Schauspieler", lesson: "A2.6" },	{ front: "актёры", back: "die Schauspieler", lesson: "A2.6" },
{ front: "актриса", back: "die Schauspielerin", lesson: "A2.6" },	{ front: "актрисы", back: "die Schauspielerinnen", lesson: "A2.6" },
{ front: "музыка", back: "die Musik", lesson: "A2.6" },	
{ front: "математика", back: "die Mathematik", lesson: "A2.6" },	
{ front: "спорт", back: "der Sport", lesson: "A2.6" },	
{ front: "неизвестный", back: "unbekannt", lesson: "A2.7" },	
{ front: "готовить", back: "vorbereiten", lesson: "A2.7" },	{ front: "приготовил", back: "hat vorbereitet", lesson: "A2.7" },
{ front: "мастерить", back: "basteln", lesson: "A2.7" },	{ front: "мастерил", back: "hat gebastelt", lesson: "A2.7" },
{ front: "решать", back: "entscheiden", lesson: "A2.7" },	{ front: "решил", back: "hat entschieden", lesson: "A2.7" },
{ front: "дарить", back: "schenken", lesson: "A2.7" },	{ front: "подарил", back: "hat geschenkt", lesson: "A2.7" },
{ front: "малыш", back: "das Baby", lesson: "A2.7" },	{ front: "малыши", back: "die Babys", lesson: "A2.7" },
{ front: "цепочка", back: "die Kette", lesson: "A2.7" },	{ front: "цепочки", back: "die Ketten", lesson: "A2.7" },
{ front: "угадывать", back: "raten", lesson: "A2.7" },	{ front: "угадал", back: "hat geraten", lesson: "A2.7" },
{ front: "кукла", back: "die Puppe", lesson: "A2.7" },	{ front: "куклы", back: "die Puppen", lesson: "A2.7" },
{ front: "DVD", back: "die DVD", lesson: "A2.7" },	{ front: "DVD", back: "die DVDs", lesson: "A2.7" },
{ front: "духи", back: "das Parfüm", lesson: "A2.7" },	{ front: "духи", back: "die Parfüms", lesson: "A2.7" },
{ front: "крем", back: "die Creme", lesson: "A2.7" },	{ front: "кремы", back: "die Cremes", lesson: "A2.7" },
{ front: "кошелек", back: "der Geldbeutel", lesson: "A2.7" },	{ front: "кошельки", back: "die Geldbeutel", lesson: "A2.7" },
{ front: "пробовать", back: "probieren", lesson: "A2.7" },	{ front: "пробовал", back: "hat probiert", lesson: "A2.7" },
{ front: "лапша", back: "die Nudel", lesson: "A2.7" },	{ front: "лапши", back: "die Nudeln", lesson: "A2.7" },
{ front: "доставлять", back: "liefern", lesson: "A2.7" },	{ front: "доставил", back: "hat geliefert", lesson: "A2.7" },
{ front: "надежный", back: "zuverlässig", lesson: "A2.7" },	
{ front: "специальный", back: "Sonder-", lesson: "A2.7" },	
{ front: "называть", back: "nennen", lesson: "A2.7" },	{ front: "назвал", back: "hat genannt", lesson: "A2.7" },
{ front: "коробка", back: "die Schachtel", lesson: "A2.7" },	{ front: "коробки", back: "die Schachteln", lesson: "A2.7" },
{ front: "распечатывать", back: "ausdrucken", lesson: "A2.7" },	{ front: "распечатал", back: "hat ausgedruckt", lesson: "A2.7" },
{ front: "почтовая марка", back: "die Briefmarke", lesson: "A2.7" },	{ front: "почтовые марки", back: "die Briefmarken", lesson: "A2.7" },
{ front: "люди", back: "die Leute", lesson: "A2.7" },	
{ front: "церковь", back: "die Kirche", lesson: "A2.7" },	{ front: "церкви", back: "die Kirchen", lesson: "A2.7" },
{ front: "венчание", back: "die Trauung", lesson: "A2.7" },	{ front: "венчания", back: "die Trauungen", lesson: "A2.7" },
{ front: "безумный", back: "wahnsinnig", lesson: "A2.7" },	
{ front: "настроение", back: "die Stimmung", lesson: "A2.7" },	
{ front: "глупый", back: "blöd", lesson: "A2.7" },	
{ front: "приветствовать", back: "grüßen", lesson: "A2.7" },	{ front: "приветствовал", back: "hat gegrüßt", lesson: "A2.7" },
{ front: "прекрасный", back: "wunderschön", lesson: "A2.7" },	
{ front: "плакать", back: "weinen", lesson: "A2.7" },	{ front: "плакал", back: "hat geweint", lesson: "A2.7" },
{ front: "типичный", back: "typisch", lesson: "A2.7" },	
{ front: "торт", back: "die Torte", lesson: "A2.7" },	{ front: "торты", back: "die Torten", lesson: "A2.7" },
{ front: "кстати", back: "übrigens", lesson: "A2.7" },	
{ front: "ступать", back: "treten", lesson: "A2.7" },	{ front: "ступил", back: "ist getreten", lesson: "A2.7" },
{ front: "вероятно, пожалуй", back: "wohl", lesson: "A2.7" },	
{ front: "нервный", back: "nervös", lesson: "A2.7" },	
{ front: "по крайней мере", back: "wenigstens", lesson: "A2.7" },	
{ front: "бодрствующий", back: "wach", lesson: "A2.7" },	
{ front: "дикий", back: "wild", lesson: "A2.7" },	
{ front: "носить", back: "tragen", lesson: "A2.7" },	{ front: "носил", back: "hat getragen", lesson: "A2.7" },
{ front: "личный", back: "persönlich", lesson: "A2.7" },	
{ front: "сердце", back: "das Herz", lesson: "A2.7" },	{ front: "сердца", back: "die Herzen", lesson: "A2.7" },
{ front: "смерть", back: "der Tod", lesson: "A2.7" },	
{ front: "тратить", back: "ausgeben", lesson: "A2.7" },	{ front: "потратил", back: "hat ausgegeben", lesson: "A2.7" },
{ front: "родина", back: "die Heimat", lesson: "A2.7" },	
{ front: "посредством, через", back: "per", lesson: "A2.7" },	
{ front: "смс", back: "die SMS", lesson: "A2.7" },	{ front: "смс", back: "die SMS", lesson: "A2.7" },
{ front: "беседовать", back: "sich unterhalten", lesson: "A2.7" },	{ front: "беседовал", back: "hat unterhalten", lesson: "A2.7" },
{ front: "украшать", back: "dekorieren", lesson: "A2.7" },	{ front: "украшал", back: "hat dekoriert", lesson: "A2.7" },
{ front: "разговор, развлечение", back: "die Unterhaltung", lesson: "A2.7" },	{ front: "разговоры, развлечения", back: "die Unterhaltungen", lesson: "A2.7" },
{ front: "убеждать", back: "überzeugen", lesson: "A2.7" },	{ front: "убедил", back: "hat überzeugt", lesson: "A2.7" },
{ front: "конфета", back: "die Praline", lesson: "A2.7" },	{ front: "конфеты", back: "die Pralinen", lesson: "A2.7" },
{ front: "шоколад", back: "die Schokolade", lesson: "A2.7" },	{ front: "шоколады", back: "die Schokoladen", lesson: "A2.7" },
{ front: "книга", back: "das Buch", lesson: "A2.7" },	{ front: "книги", back: "die Bücher", lesson: "A2.7" },
{ front: "дерево", back: "das Holz", lesson: "A2.8" },	{ front: "деревья", back: "die Hölzer", lesson: "A2.8" },
{ front: "молоток", back: "der Hammer", lesson: "A2.8" },	{ front: "молотки", back: "die Hämmer", lesson: "A2.8" },
{ front: "инструмент", back: "das Werkzeug", lesson: "A2.8" },	{ front: "инструменты", back: "die Werkzeuge", lesson: "A2.8" },
{ front: "играть вместе", back: "mitspielen", lesson: "A2.8" },	{ front: "играл вместе", back: "hat mitgespielt", lesson: "A2.8" },
{ front: "дискотека", back: "die Disko / die Diskothek", lesson: "A2.8" },	{ front: "дискотеки", back: "die Diskos / die Diskotheken", lesson: "A2.8" },
{ front: "выходить (в свет)", back: "ausgehen", lesson: "A2.8" },	{ front: "вышел (в свет)", back: "ist ausgegangen", lesson: "A2.8" },
{ front: "проводить (время)", back: "verbringen", lesson: "A2.8" },	{ front: "провел (время)", back: "hat verbracht", lesson: "A2.8" },
{ front: "белье", back: "die Wäsche", lesson: "A2.8" },	
{ front: "предпринимать", back: "unternehmen", lesson: "A2.8" },	{ front: "предпринял", back: "hat unternommen", lesson: "A2.8" },
{ front: "вещь", back: "das Ding", lesson: "A2.8" },	{ front: "вещи", back: "die Dinge", lesson: "A2.8" },
{ front: "озеро", back: "der See", lesson: "A2.8" },	{ front: "озера", back: "die Seen", lesson: "A2.8" },
{ front: "несмотря на", back: "trotzdem", lesson: "A2.8" },	
{ front: "велосипедная экскурсия", back: "die Radtour", lesson: "A2.8" },	{ front: "велосипедные экскурсии", back: "die Radtouren", lesson: "A2.8" },
{ front: "блошиный рынок", back: "der Flohmarkt", lesson: "A2.8" },	{ front: "блошиные рынки", back: "die Flohmärkte", lesson: "A2.8" },
{ front: "быть простуженным", back: "erkältet sein", lesson: "A2.8" },	
{ front: "постоянный", back: "ständig", lesson: "A2.8" },	
{ front: "предложение", back: "der Vorschlag", lesson: "A2.8" },	{ front: "предложения", back: "die Vorschläge", lesson: "A2.8" },
{ front: "обзорная поездка", back: "die Rundfahrt", lesson: "A2.8" },	{ front: "обзорные поездки", back: "die Rundfahrten", lesson: "A2.8" },
{ front: "согласный", back: "einverstanden", lesson: "A2.8" },	
{ front: "положительный", back: "positiv", lesson: "A2.8" },	
{ front: "реагировать", back: "reagieren", lesson: "A2.8" },	{ front: "реагировал", back: "hat reagiert", lesson: "A2.8" },
{ front: "отрицательный", back: "negativ", lesson: "A2.8" },	
{ front: "бар", back: "die Bar", lesson: "A2.8" },	{ front: "бары", back: "die Bars", lesson: "A2.8" },
{ front: "культура", back: "die Kultur", lesson: "A2.8" },	
{ front: "природа", back: "die Natur", lesson: "A2.8" },	
{ front: "опера", back: "die Oper", lesson: "A2.8" },	{ front: "оперы", back: "die Opern", lesson: "A2.8" },
{ front: "место встречи", back: "der Treffpunkt", lesson: "A2.8" },	{ front: "места встречи", back: "die Treffpunkte", lesson: "A2.8" },
{ front: "ратуша", back: "das Rathaus", lesson: "A2.8" },	{ front: "ратуши", back: "die Rathäuser", lesson: "A2.8" },
{ front: "участие", back: "die Teilnahme", lesson: "A2.8" },	
{ front: "выступать", back: "auftreten", lesson: "A2.8" },	{ front: "выступил", back: "ist aufgetreten", lesson: "A2.8" },
{ front: "джаз", back: "der Jazz", lesson: "A2.8" },	
{ front: "железная дорога", back: "die Bahn", lesson: "A2.8" },	{ front: "железные дороги", back: "die Bahnen", lesson: "A2.8" },
{ front: "открытый", back: "offen", lesson: "A2.8" },	
{ front: "народный университет", back: "die Volkshochschule", lesson: "A2.8" },	{ front: "народные университеты", back: "die Volkshochschulen", lesson: "A2.8" },
{ front: "политика", back: "die Politik", lesson: "A2.8" },	
{ front: "фотография", back: "die Fotografie", lesson: "A2.8" },	
{ front: "необходимый", back: "erforderlich", lesson: "A2.8" },	
{ front: "вход свободный", back: "Eintritt frei", lesson: "A2.8" },	
{ front: "регистрация не требуется", back: "keine Anmeldung erforderlich", lesson: "A2.8" },	
{ front: "семестр", back: "das Semester", lesson: "A2.8" },	{ front: "семестры", back: "die Semester", lesson: "A2.8" },
{ front: "пеший поход", back: "die Wanderung", lesson: "A2.8" },	{ front: "пешие походы", back: "die Wanderungen", lesson: "A2.8" },
{ front: "программа", back: "das Programm", lesson: "A2.8" },	{ front: "программы", back: "die Programme", lesson: "A2.8" },
{ front: "фанат", back: "der Fan", lesson: "A2.8" },	{ front: "фанаты", back: "die Fans", lesson: "A2.8" },
{ front: "художник, артист", back: "der Künstler", lesson: "A2.8" },	{ front: "художники, артисты", back: "die Künstler", lesson: "A2.8" },
{ front: "художница, артистка", back: "die Künstlerin", lesson: "A2.8" },	{ front: "художницы, артистки", back: "die Künstlerinnen", lesson: "A2.8" },
{ front: "Европа", back: "Europa", lesson: "A2.8" },	
{ front: "игрушка", back: "das Spielzeug", lesson: "A2.8" },	{ front: "игрушки", back: "die Spielzeuge", lesson: "A2.8" },
{ front: "CD-диск", back: "die CD", lesson: "A2.8" },	{ front: "CD-диски", back: "die CDs", lesson: "A2.8" },
{ front: "по будням", back: "wochentags", lesson: "A2.8" },	
{ front: "билет на вход", back: "die Eintrittskarte", lesson: "A2.8" },	{ front: "билеты на вход", back: "die Eintrittskarten", lesson: "A2.8" },
{ front: "передатчик, канал", back: "der Sender", lesson: "A2.8" },	{ front: "передатчики, каналы", back: "die Sender", lesson: "A2.8" },
{ front: "совершать пеший поход", back: "eine Wanderung machen", lesson: "A2.8" },	
{ front: "делать", back: "machen", lesson: "A2.8" },	{ front: "сделал", back: "hat gemacht", lesson: "A2.8" },
{ front: "идти в оперу", back: "in die Oper gehen", lesson: "A2.8" },	
{ front: "в бар", back: "in eine Bar", lesson: "A2.8" },	
{ front: "совершать обзорную поездку", back: "eine Rundfahrt machen", lesson: "A2.8" },	
{ front: "велосипедная экскурсия", back: "eine Radtour", lesson: "A2.8" },	
{ front: "идти на блошиный рынок", back: "auf einen Flohmarkt gehen", lesson: "A2.8" },	
{ front: "идти на дискотеку", back: "in die Disko gehen", lesson: "A2.8" },	
{ front: "ехать к озеру", back: "an den See fahren", lesson: "A2.8" },	
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
{ front: "the registered letter", back: "das Einschreiben", lesson: "A2.10" },	
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
{ front: "Балтийское море", back: "die Ostsee", lesson: "A2.12" },	
{ front: "выбор", back: "die Wahl", lesson: "A2.12" },	
{ front: "осматривать", back: "besichtigen", lesson: "A2.12" },	{ front: "осмотрел", back: "hat besichtigt", lesson: "A2.12" },
{ front: "против", back: "dagegen", lesson: "A2.12" },	
{ front: "восхищённый", back: "begeistert", lesson: "A2.12" },	
{ front: "жильё", back: "die Unterkunft", lesson: "A2.12" },	{ front: "жильё (мн. ч.)", back: "die Unterkünfte", lesson: "A2.12" },
{ front: "мечта", back: "der Traum", lesson: "A2.12" },	{ front: "мечты", back: "die Träume", lesson: "A2.12" },
{ front: "побережье", back: "die Küste", lesson: "A2.12" },	{ front: "побережья", back: "die Küsten", lesson: "A2.12" },
{ front: "остров", back: "die Insel", lesson: "A2.12" },	{ front: "острова", back: "die Inseln", lesson: "A2.12" },
{ front: "горы", back: "das Gebirge", lesson: "A2.12" },	
{ front: "Люксембург", back: "Luxemburg", lesson: "A2.12" },	
{ front: "купаться", back: "baden", lesson: "A2.12" },	{ front: "купался", back: "hat gebadet", lesson: "A2.12" },
{ front: "песок", back: "der Sand", lesson: "A2.12" },	
{ front: "дальше", back: "weiter", lesson: "A2.12" },	
{ front: "прохладный", back: "kühl", lesson: "A2.12" },	
{ front: "ферма", back: "der Bauernhof", lesson: "A2.12" },	{ front: "фермы", back: "die Bauernhöfe", lesson: "A2.12" },
{ front: "корова", back: "die Kuh", lesson: "A2.12" },	{ front: "коровы", back: "die Kühe", lesson: "A2.12" },
{ front: "лошадь", back: "das Pferd", lesson: "A2.12" },	{ front: "лошади", back: "die Pferde", lesson: "A2.12" },
{ front: "овца", back: "das Schaf", lesson: "A2.12" },	{ front: "овцы", back: "die Schafe", lesson: "A2.12" },
{ front: "лодка", back: "das Boot", lesson: "A2.12" },	{ front: "лодки", back: "die Boote", lesson: "A2.12" },
{ front: "фестиваль", back: "das Festival", lesson: "A2.12" },	{ front: "фестивали", back: "die Festivals", lesson: "A2.12" },
{ front: "достопримечательность", back: "die Sehenswürdigkeit", lesson: "A2.12" },	{ front: "достопримечательности", back: "die Sehenswürdigkeiten", lesson: "A2.12" },
{ front: "прежде всего", back: "vor allem", lesson: "A2.12" },	
{ front: "настоящий", back: "echt", lesson: "A2.12" },	
{ front: "пансион", back: "die Pension", lesson: "A2.12" },	{ front: "пансионы", back: "die Pensionen", lesson: "A2.12" },
{ front: "взгляд", back: "der Blick", lesson: "A2.12" },	{ front: "взгляды", back: "die Blicke", lesson: "A2.12" },
{ front: "одноместный номер", back: "das Einzelzimmer", lesson: "A2.12" },	
{ front: "двухместный номер", back: "das Doppelzimmer", lesson: "A2.12" },	
{ front: "туалет", back: "das WC", lesson: "A2.12" },	{ front: "туалеты", back: "die WCs", lesson: "A2.12" },
{ front: "полупансион", back: "die Halbpension", lesson: "A2.12" },	
{ front: "кемпинг", back: "das Camping", lesson: "A2.12" },	
{ front: "тур", back: "die Tour", lesson: "A2.12" },	{ front: "туры", back: "die Touren", lesson: "A2.12" },
{ front: "долина", back: "das Tal", lesson: "A2.12" },	{ front: "долины", back: "die Täler", lesson: "A2.12" },
{ front: "луг", back: "die Wiese", lesson: "A2.12" },	{ front: "луга", back: "die Wiesen", lesson: "A2.12" },
{ front: "романтичный", back: "romantisch", lesson: "A2.12" },	
{ front: "расположение", back: "die Lage", lesson: "A2.12" },	{ front: "расположения", back: "die Lagen", lesson: "A2.12" },
{ front: "замок", back: "das Schloss", lesson: "A2.12" },	{ front: "замки", back: "die Schlösser", lesson: "A2.12" },
{ front: "исторический", back: "historisch", lesson: "A2.12" },	
{ front: "многочисленный", back: "zahlreich", lesson: "A2.12" },	
{ front: "ночлег", back: "die Übernachtung", lesson: "A2.12" },	{ front: "ночлеги", back: "die Übernachtungen", lesson: "A2.12" },
{ front: "знаменитый", back: "berühmt", lesson: "A2.12" },	
{ front: "собор", back: "der Dom", lesson: "A2.12" },	{ front: "соборы", back: "die Dome", lesson: "A2.12" },
{ front: "молодежная гостиница", back: "die Jugendherberge", lesson: "A2.12" },	{ front: "молодежные гостиницы", back: "die Jugendherbergen", lesson: "A2.12" },
{ front: "включая", back: "inklusive", lesson: "A2.12" },	
{ front: "пребывание", back: "der Aufenthalt", lesson: "A2.12" },	{ front: "пребывания", back: "die Aufenthalte", lesson: "A2.12" },
{ front: "бронировать", back: "buchen", lesson: "A2.12" },	{ front: "забронировал", back: "hat gebucht", lesson: "A2.12" },
{ front: "туристическое агентство", back: "das Reisebüro", lesson: "A2.12" },	{ front: "туристические агентства", back: "die Reisebüros", lesson: "A2.12" },
{ front: "специалист", back: "der Spezialist", lesson: "A2.12" },	{ front: "специалисты", back: "die Spezialisten", lesson: "A2.12" },
{ front: "сотрудник", back: "der Angestellte", lesson: "A2.12" },	{ front: "сотрудники", back: "die Angestellten", lesson: "A2.12" },
{ front: "сотрудница", back: "die Angestellte", lesson: "A2.12" },	{ front: "сотрудницы", back: "die Angestellten", lesson: "A2.12" },
{ front: "связь", back: "die Verbindung", lesson: "A2.12" },	{ front: "связи", back: "die Verbindungen", lesson: "A2.12" },
{ front: "конечно", back: "natürlich", lesson: "A2.12" },	
{ front: "серфить", back: "surfen", lesson: "A2.12" },	{ front: "серфил", back: "ist gesurft", lesson: "A2.12" },
{ front: "экскурсия", back: "die Führung", lesson: "A2.12" },	{ front: "экскурсии", back: "die Führungen", lesson: "A2.12" },
{ front: "старый город", back: "die Altstadt", lesson: "A2.12" },	{ front: "старые города", back: "die Altstädte", lesson: "A2.12" },
{ front: "выставка", back: "die Ausstellung", lesson: "A2.12" },	{ front: "выставки", back: "die Ausstellungen", lesson: "A2.12" },
{ front: "известный", back: "bekannt", lesson: "A2.12" },	
{ front: "нигде", back: "nirgends", lesson: "A2.12" },	
{ front: "паковать", back: "einpacken", lesson: "A2.12" },	{ front: "упаковал", back: "hat eingepackt", lesson: "A2.12" },
{ front: "договориться", back: "einigen", lesson: "A2.12" },	{ front: "договорился", back: "hat geeinigt", lesson: "A2.12" },
{ front: "ночевать", back: "übernachten", lesson: "A2.12" },	{ front: "ночевал", back: "hat übernachtet", lesson: "A2.12" },
{ front: "быть против", back: "dagegen sein", lesson: "A2.12" },	{ front: "был против", back: "ist dagegen gewesen", lesson: "A2.12" },
{ front: "быть за", back: "dafür sein", lesson: "A2.12" },	{ front: "был за", back: "ist dafür gewesen", lesson: "A2.12" },
{ front: "принимать", back: "annehmen", lesson: "A2.12" },	{ front: "принял", back: "hat angenommen", lesson: "A2.12" },
{ front: "отклонять", back: "ablehnen", lesson: "A2.12" },	{ front: "отклонил", back: "hat abgelehnt", lesson: "A2.12" },
{ front: "лениться", back: "faulenzen", lesson: "A2.12" },	{ front: "ленился", back: "hat gefaulenzt", lesson: "A2.12" },
{ front: "туристическая цель", back: "das Reiseziel", lesson: "A2.12" },	{ front: "туристические цели", back: "die Reiseziele", lesson: "A2.12" },
{ front: "занятия", back: "die Aktivitäten", lesson: "A2.12" },	
{ front: "осматривать достопримечательности", back: "Sehenswürdigkeiten ansehen", lesson: "A2.12" },	{ front: "осмотрел достопримечательности", back: "hat Sehenswürdigkeiten angesehen", lesson: "A2.12" },
{ front: "осматривать старый город", back: "die Altstadt besichtigen", lesson: "A2.12" },	{ front: "осмотрел старый город", back: "hat die Altstadt besichtigt", lesson: "A2.12" },
{ front: "смотреть выставку", back: "eine Ausstellung ansehen", lesson: "A2.12" },	{ front: "посмотрел выставку", back: "hat eine Ausstellung angesehen", lesson: "A2.12" },
{ front: "делать экскурсию по городу", back: "eine Stadtführung machen", lesson: "A2.12" },	{ front: "сделал экскурсию по городу", back: "hat eine Stadtführung gemacht", lesson: "A2.12" },
{ front: "в туристическом агентстве", back: "im Reisebüro", lesson: "A2.12" },	
{ front: "бронировать поездку", back: "eine Reise buchen", lesson: "A2.12" },	{ front: "забронировал поездку", back: "hat eine Reise gebucht", lesson: "A2.12" },
{ front: "справка", back: "die Auskunft", lesson: "A2.12" },	
{ front: "путешествие", back: "die Reise", lesson: "A2.12" },	{ front: "путешествия", back: "die Reisen", lesson: "A2.12" },
{ front: "офис", back: "das Büro", lesson: "A2.12" },	{ front: "офисы", back: "die Büros", lesson: "A2.12" },
{ front: "лёд", back: "das Eis", lesson: "A2.12" },	
{ front: "яйцо", back: "das Ei", lesson: "A2.12" },	{ front: "яйца", back: "die Eier", lesson: "A2.12" },
{ front: "сумма", back: "der Betrag", lesson: "A2.12" },	{ front: "суммы", back: "die Beträge", lesson: "A2.12" },
{ front: "счёт", back: "das Konto", lesson: "A2.13" },	{ front: "счёта", back: "die Konten", lesson: "A2.13" },
{ front: "открывать", back: "eröffnen", lesson: "A2.13" },	{ front: "открыл", back: "hat eröffnet", lesson: "A2.13" },
{ front: "отвечать", back: "beantworten", lesson: "A2.13" },	{ front: "ответил", back: "hat beantwortet", lesson: "A2.13" },
{ front: "достать, приобрести", back: "besorgen", lesson: "A2.13" },	{ front: "достал", back: "hat besorgt", lesson: "A2.13" },
{ front: "откладывать", back: "verschieben", lesson: "A2.13" },	{ front: "отложил", back: "hat verschoben", lesson: "A2.13" },
{ front: "банковская карта", back: "die EC-Karte", lesson: "A2.13" },	{ front: "банковские карты", back: "die EC-Karten", lesson: "A2.13" },
{ front: "снимать (деньги)", back: "abheben", lesson: "A2.13" },	{ front: "снял", back: "hat abgehoben", lesson: "A2.13" },
{ front: "получать", back: "kriegen", lesson: "A2.13" },	{ front: "получил", back: "hat gekriegt", lesson: "A2.13" },
{ front: "банкомат", back: "der Geldautomat", lesson: "A2.13" },	{ front: "банкоматы", back: "die Geldautomaten", lesson: "A2.13" },
{ front: "расчётный счёт", back: "das Girokonto", lesson: "A2.13" },	{ front: "расчётные счёта", back: "die Girokonten", lesson: "A2.13" },
{ front: "ли", back: "ob", lesson: "A2.13" },	
{ front: "наличные деньги", back: "das Bargeld", lesson: "A2.13" },	
{ front: "сумма", back: "die Summe", lesson: "A2.13" },	{ front: "суммы", back: "die Summen", lesson: "A2.13" },
{ front: "но (после отрицания)", back: "sondern", lesson: "A2.13" },	
{ front: "ежемесячный", back: "monatlich", lesson: "A2.13" },	
{ front: "проценты", back: "die Zinsen", lesson: "A2.13" },	
{ front: "принимать", back: "akzeptieren", lesson: "A2.13" },	{ front: "принял", back: "hat akzeptiert", lesson: "A2.13" },
{ front: "карманные деньги", back: "das Taschengeld", lesson: "A2.13" },	
{ front: "выполнять, завершать", back: "erledigen", lesson: "A2.13" },	{ front: "выполнил", back: "hat erledigt", lesson: "A2.13" },
{ front: "контролировать", back: "kontrollieren", lesson: "A2.13" },	{ front: "контролировал", back: "hat kontrolliert", lesson: "A2.13" },
{ front: "контроль", back: "die Kontrolle", lesson: "A2.13" },	{ front: "контроли", back: "die Kontrollen", lesson: "A2.13" },
{ front: "ломаться", back: "kaputtgehen", lesson: "A2.13" },	{ front: "сломался", back: "ist kaputtgegangen", lesson: "A2.13" },
{ front: "узнавать", back: "erkennen", lesson: "A2.13" },	{ front: "узнал", back: "hat erkannt", lesson: "A2.13" },
{ front: "производитель", back: "der Hersteller", lesson: "A2.13" },	{ front: "производители", back: "die Hersteller", lesson: "A2.13" },
{ front: "масло", back: "das Öl", lesson: "A2.13" },	
{ front: "тормоз", back: "die Bremse", lesson: "A2.13" },	{ front: "тормоза", back: "die Bremsen", lesson: "A2.13" },
{ front: "проверять", back: "überprüfen", lesson: "A2.13" },	{ front: "проверил", back: "hat überprüft", lesson: "A2.13" },
{ front: "ремонтировать", back: "renovieren", lesson: "A2.13" },	{ front: "отремонтировал", back: "hat renoviert", lesson: "A2.13" },
{ front: "изменять", back: "ändern", lesson: "A2.13" },	{ front: "изменил", back: "hat geändert", lesson: "A2.13" },
{ front: "порезаться", back: "schneiden (sich)", lesson: "A2.13" },	{ front: "порезался", back: "hat geschnitten", lesson: "A2.13" },
{ front: "вносить деньги", back: "einzahlen", lesson: "A2.13" },	{ front: "внес деньги", back: "hat eingezahlt", lesson: "A2.13" },
{ front: "брошюра", back: "die Broschüre", lesson: "A2.13" },	{ front: "брошюры", back: "die Broschüren", lesson: "A2.13" },
{ front: "зарплата", back: "das Gehalt", lesson: "A2.13" },	{ front: "зарплаты", back: "die Gehälter", lesson: "A2.13" },
{ front: "справка о зарплате", back: "der Gehaltsnachweis", lesson: "A2.13" },	{ front: "справки о зарплате", back: "die Gehaltsnachweise", lesson: "A2.13" },
{ front: "набирать (текст)", back: "tippen", lesson: "A2.13" },	{ front: "набрал", back: "hat getippt", lesson: "A2.13" },
{ front: "переводить (деньги)", back: "überweisen", lesson: "A2.13" },	{ front: "перевёл", back: "hat überwiesen", lesson: "A2.13" },
{ front: "меню", back: "das Menü", lesson: "A2.13" },	{ front: "меню (мн. ч.)", back: "die Menüs", lesson: "A2.13" },
{ front: "официант", back: "der Ober", lesson: "A2.13" },	{ front: "официанты", back: "die Ober", lesson: "A2.13" },
{ front: "полиция", back: "die Polizei", lesson: "A2.13" },	
{ front: "злой", back: "böse", lesson: "A2.13" },	
{ front: "настроение", back: "die Laune", lesson: "A2.13" },	{ front: "настроения", back: "die Launen", lesson: "A2.13" },
{ front: "повышение", back: "die Erhöhung", lesson: "A2.13" },	{ front: "повышения", back: "die Erhöhungen", lesson: "A2.13" },
{ front: "выписка со счёта", back: "der Kontoauszug", lesson: "A2.13" },	{ front: "выписки со счёта", back: "die Kontoauszüge", lesson: "A2.13" },
{ front: "снимать деньги", back: "Geld abheben", lesson: "A2.13" },	{ front: "снял деньги", back: "hat abgehoben", lesson: "A2.13" },
{ front: "опрос", back: "die Umfrage", lesson: "A2.14" },	{ front: "опросы", back: "die Umfragen", lesson: "A2.14" },
{ front: "едва", back: "kaum", lesson: "A2.14" },	
{ front: "будущее", back: "die Zukunft", lesson: "A2.14" },	
{ front: "решение", back: "die Entscheidung", lesson: "A2.14" },	{ front: "решения", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "умирать", back: "sterben", lesson: "A2.14" },	{ front: "умер", back: "ist gestorben", lesson: "A2.14" },
{ front: "детство", back: "die Kindheit", lesson: "A2.14" },	{ front: "детства", back: "die Kindheiten", lesson: "A2.14" },
{ front: "рядом", back: "nebenan", lesson: "A2.14" },	
{ front: "влюбляться", back: "verlieben (sich)", lesson: "A2.14" },	{ front: "влюбился", back: "hat sich verliebt", lesson: "A2.14" },
{ front: "ерунда", back: "der Quatsch", lesson: "A2.14" },	
{ front: "учёба / обучение", back: "die Lehre", lesson: "A2.14" },	{ front: "учёбы / обучения", back: "die Lehren", lesson: "A2.14" },
{ front: "случайно", back: "zufällig", lesson: "A2.14" },	
{ front: "заведение (кафе, ресторан и т.п.)", back: "das Lokal", lesson: "A2.14" },	{ front: "заведения", back: "die Lokale", lesson: "A2.14" },
{ front: "с тех пор", back: "seitdem", lesson: "A2.14" },	
{ front: "единственный-", back: "einzig-", lesson: "A2.14" },	
{ front: "противоположность", back: "das Gegenteil", lesson: "A2.14" },	{ front: "противоположности", back: "die Gegenteile", lesson: "A2.14" },
{ front: "всё равно", back: "egal", lesson: "A2.14" },	
{ front: "ссора", back: "der Streit", lesson: "A2.14" },	{ front: "ссоры", back: "die Streite", lesson: "A2.14" },
{ front: "пара", back: "das Paar", lesson: "A2.14" },	{ front: "пары", back: "die Paare", lesson: "A2.14" },
{ front: "воспитание", back: "die Erziehung", lesson: "A2.14" },	
{ front: "мнение", back: "die Meinung", lesson: "A2.14" },	{ front: "мнения", back: "die Meinungen", lesson: "A2.14" },
{ front: "совет", back: "der Ratschlag", lesson: "A2.14" },	{ front: "советы", back: "die Ratschläge", lesson: "A2.14" },
{ front: "мышь", back: "die Maus", lesson: "A2.14" },	{ front: "мыши", back: "die Mäuse", lesson: "A2.14" },
{ front: "скорее", back: "eher", lesson: "A2.14" },	
{ front: "популярный", back: "populär", lesson: "A2.14" },	
{ front: "курильщик", back: "der Raucher", lesson: "A2.14" },	{ front: "курильщики", back: "die Raucher", lesson: "A2.14" },
{ front: "курильщица", back: "die Raucherin", lesson: "A2.14" },	{ front: "курильщицы", back: "die Raucherinnen", lesson: "A2.14" },
{ front: "сказка", back: "das Märchen", lesson: "A2.14" },	{ front: "сказки", back: "die Märchen", lesson: "A2.14" },
{ front: "заговорить", back: "ansprechen", lesson: "A2.14" },	{ front: "заговорил", back: "hat angesprochen", lesson: "A2.14" },
{ front: "благодарить", back: "danken", lesson: "A2.14" },	{ front: "поблагодарил", back: "hat gedankt", lesson: "A2.14" },
{ front: "идея", back: "der Einfall", lesson: "A2.14" },	{ front: "идеи", back: "die Einfälle", lesson: "A2.14" },
{ front: "мир", back: "die Welt", lesson: "A2.14" },	{ front: "миры", back: "die Welten", lesson: "A2.14" },
{ front: "домашнее животное", back: "das Haustier", lesson: "A2.14" },	{ front: "домашние животные", back: "die Haustiere", lesson: "A2.14" },
{ front: "серьёзный", back: "ernst", lesson: "A2.14" },	
{ front: "удобный", back: "bequem", lesson: "A2.14" },	
{ front: "детство", back: "die Kindheit", lesson: "A2.14" },	{ front: "детства", back: "die Kindheiten", lesson: "A2.14" },
{ front: "пара", back: "das Paar", lesson: "A2.14" },	{ front: "пары", back: "die Paare", lesson: "A2.14" },
{ front: "решение", back: "die Entscheidung", lesson: "A2.14" },	{ front: "решения", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "опрос", back: "die Umfrage", lesson: "A2.14" },	{ front: "опросы", back: "die Umfragen", lesson: "A2.14" },
{ front: "мир", back: "die Welt", lesson: "A2.14" },	{ front: "миры", back: "die Welten", lesson: "A2.14" },
{ front: "событие", back: "das Erlebnis", lesson: "B1.1" },	{ front: "события", back: "die Erlebnisse", lesson: "B1.1" },
{ front: "статья", back: "der Artikel", lesson: "B1.1" },	
{ front: "быть", back: "sein", lesson: "B1.1" },	{ front: "был отсутствовал", back: "sein weg gewesen", lesson: "B1.1" },
{ front: "религия", back: "die Religion", lesson: "B1.1" },	{ front: "религии", back: "die Religionen", lesson: "B1.1" },
{ front: "неожиданность", back: "die Überraschung", lesson: "B1.1" },	{ front: "неожиданности", back: "die Überraschungen", lesson: "B1.1" },
{ front: "сумасшедший", back: "verrückt", lesson: "B1.1" },	
{ front: "выигрыш", back: "der Gewinn", lesson: "B1.1" },	{ front: "выигрыши", back: "die Gewinne", lesson: "B1.1" },
{ front: "налог", back: "die Steuer", lesson: "B1.1" },	
{ front: "голос", back: "die Stimme", lesson: "B1.1" },	{ front: "голоса", back: "die Stimmen", lesson: "B1.1" },
{ front: "садиться", back: "sich setzen", lesson: "B1.1" },	{ front: "сел(ся)", back: "hat sich gesetzt", lesson: "B1.1" },
{ front: "смелый", back: "mutig", lesson: "B1.1" },	
{ front: "сообщение", back: "die Meldung", lesson: "B1.1" },	{ front: "сообщения", back: "die Meldungen", lesson: "B1.1" },
{ front: "заголовок", back: "die Überschrift", lesson: "B1.1" },	{ front: "заголовки", back: "die Überschriften", lesson: "B1.1" },
{ front: "во время", back: "während", lesson: "B1.1" },	
{ front: "исчезать", back: "verschwinden", lesson: "B1.1" },	{ front: "исчезнул", back: "ist verschwunden", lesson: "B1.1" },
{ front: "несколько", back: "mehrer-", lesson: "B1.1" },	
{ front: "напрасно", back: "vergeblich", lesson: "B1.1" },	
{ front: "подниматься", back: "steigen", lesson: "B1.1" },	{ front: "поднялся", back: "ist gestiegen", lesson: "B1.1" },
{ front: "удивляться", back: "sich wundern", lesson: "B1.1" },	{ front: "удивился", back: "hat sich gewundert", lesson: "B1.1" },
{ front: "хотя", back: "zwar", lesson: "B1.1" },	
{ front: "смелость", back: "der Mut", lesson: "B1.1" },	
{ front: "оба", back: "beid-", lesson: "B1.1" },	
{ front: "достигать", back: "erreichen", lesson: "B1.1" },	{ front: "достиг", back: "hat erreicht", lesson: "B1.1" },
{ front: "глубокий", back: "tief", lesson: "B1.1" },	
{ front: "путать", back: "verwechseln", lesson: "B1.1" },	{ front: "перепутал", back: "hat verwechselt", lesson: "B1.1" },
{ front: "средство", back: "das Mittel", lesson: "B1.1" },	
{ front: "согласный", back: "einig-", lesson: "B1.1" },	
{ front: "находиться", back: "sich befinden", lesson: "B1.1" },	{ front: "находился", back: "hat sich befunden", lesson: "B1.1" },
{ front: "обдумывать", back: "nachdenken", lesson: "B1.1" },	{ front: "обдумал", back: "hat nachgedacht", lesson: "B1.1" },
{ front: "указание", back: "die Angabe", lesson: "B1.1" },	{ front: "указания", back: "die Angaben", lesson: "B1.1" },
{ front: "спасать", back: "retten", lesson: "B1.1" },	{ front: "спас", back: "hat gerettet", lesson: "B1.1" },
{ front: "быть достаточным", back: "ausreichen", lesson: "B1.1" },	{ front: "хватило", back: "hat ausgereicht", lesson: "B1.1" },
{ front: "досада", back: "der Ärger", lesson: "B1.1" },	
{ front: "следовать", back: "folgen", lesson: "B1.1" },	{ front: "последовал", back: "ist gefolgt", lesson: "B1.1" },
{ front: "по крайней мере", back: "zumindest", lesson: "B1.1" },	
{ front: "отменять", back: "absagen", lesson: "B1.1" },	{ front: "отменил", back: "hat abgesagt", lesson: "B1.1" },
{ front: "звать", back: "rufen", lesson: "B1.1" },	{ front: "позвал", back: "hat gerufen", lesson: "B1.1" },
{ front: "перекрывать", back: "absperren", lesson: "B1.1" },	{ front: "перекрыл", back: "hat abgesperrt", lesson: "B1.1" },
{ front: "задерживать", back: "festnehmen", lesson: "B1.1" },	{ front: "задержал", back: "hat festgenommen", lesson: "B1.1" },
{ front: "пьяный", back: "betrunken", lesson: "B1.1" },	
{ front: "грабитель", back: "der Einbrecher", lesson: "B1.1" },	
{ front: "захватывающий", back: "aufregend", lesson: "B1.1" },	
{ front: "смешной", back: "witzig", lesson: "B1.1" },	
{ front: "мотороллер", back: "der Motorroller", lesson: "B1.1" },	
{ front: "быть", back: "sein", lesson: "B1.1" },	{ front: "был влюблён", back: "ist verliebt gewesen", lesson: "B1.1" },
{ front: "ломать / ломаться", back: "brechen", lesson: "B1.1" },	{ front: "сломался / сломал", back: "ist/hat gebrochen", lesson: "B1.1" },
{ front: "тренер", back: "der Trainer", lesson: "B1.1" },	
{ front: "тренер (ж.р.)", back: "die Trainerin", lesson: "B1.1" },	{ front: "тренеры (ж.р.)", back: "die Trainerinnen", lesson: "B1.1" },
{ front: "поле", back: "das Feld", lesson: "B1.1" },	{ front: "поля", back: "die Felder", lesson: "B1.1" },
{ front: "весь", back: "aller-", lesson: "B1.1" },	
{ front: "ворота", back: "das Tor", lesson: "B1.1" },	{ front: "ворота", back: "die Tore", lesson: "B1.1" },
{ front: "бежать / убегать", back: "fliehen", lesson: "B1.1" },	{ front: "убежал", back: "ist geflohen", lesson: "B1.1" },
{ front: "лучший", back: "best-", lesson: "B1.1" },	
{ front: "загс", back: "das Standesamt", lesson: "B1.1" },	{ front: "загсы", back: "die Standesämter", lesson: "B1.1" },
{ front: "стрелять", back: "schießen", lesson: "B1.1" },	{ front: "стрелял", back: "hat geschossen", lesson: "B1.1" },
{ front: "ущерб", back: "der Schaden", lesson: "B1.1" },	{ front: "ущербы", back: "die Schäden", lesson: "B1.1" },
{ front: "занавес", back: "der Vorhang", lesson: "B1.1" },	{ front: "занавески", back: "die Vorhänge", lesson: "B1.1" },
{ front: "мгновенный", back: "augenblicklich", lesson: "B1.1" },	
{ front: "кусать", back: "beißen", lesson: "B1.1" },	{ front: "кусал", back: "hat gebissen", lesson: "B1.1" },
{ front: "пугать / испугаться", back: "erschrecken", lesson: "B1.1" },	{ front: "испугался", back: "ist erschrocken", lesson: "B1.1" },
{ front: "контакт", back: "der Kontakt", lesson: "B1.1" },	{ front: "контакты", back: "die Kontakte", lesson: "B1.1" },
{ front: "данные", back: "die Daten", lesson: "B1.1" },	
{ front: "разговор", back: "das Gespräch", lesson: "B1.1" },	{ front: "разговоры", back: "die Gespräche", lesson: "B1.1" },
{ front: "отчёт", back: "der Bericht", lesson: "B1.1" },	{ front: "отчёты", back: "die Berichte", lesson: "B1.1" },
{ front: "полночь", back: "die Mitternacht", lesson: "B1.1" },	
{ front: "камень", back: "der Stein", lesson: "B1.1" },	{ front: "камни", back: "die Steine", lesson: "B1.1" },
{ front: "лев", back: "der Löwe", lesson: "B1.1" },	{ front: "львы", back: "die Löwen", lesson: "B1.1" },
{ front: "сообщение", back: "die Meldung", lesson: "B1.1" },	{ front: "сообщения", back: "die Meldungen", lesson: "B1.1" },
{ front: "заголовок", back: "die Überschrift", lesson: "B1.1" },	{ front: "заголовки", back: "die Überschriften", lesson: "B1.1" },
{ front: "статья", back: "der Artikel", lesson: "B1.1" },	
{ front: "отчёт", back: "der Bericht", lesson: "B1.1" },	{ front: "отчёты", back: "die Berichte", lesson: "B1.1" },
{ front: "интервью", back: "das Interview", lesson: "B1.1" },	{ front: "интервью", back: "die Interviews", lesson: "B1.1" },
{ front: "информация", back: "die Information", lesson: "B1.1" },	{ front: "информации", back: "die Informationen", lesson: "B1.1" },
{ front: "объявление", back: "die Anzeige", lesson: "B1.1" },	{ front: "объявления", back: "die Anzeigen", lesson: "B1.1" },
{ front: "сериал", back: "die Serie", lesson: "B1.2" },	{ front: "сериалы", back: "die Serien", lesson: "B1.2" },
{ front: "серия", back: "die Folge", lesson: "B1.2" },	{ front: "серии", back: "die Folgen", lesson: "B1.2" },
{ front: "характер", back: "der Charakter", lesson: "B1.2" },	{ front: "характеры", back: "die Charaktere", lesson: "B1.2" },
{ front: "хотя", back: "obwohl", lesson: "B1.2" },	
{ front: "постоянно", back: "dauernd", lesson: "B1.2" },	
{ front: "проигравший", back: "der Verlierer", lesson: "B1.2" },	{ front: "проигравшие", back: "die Verlierer", lesson: "B1.2" },
{ front: "тип", back: "der Typ", lesson: "B1.2" },	{ front: "типы", back: "die Typen", lesson: "B1.2" },
{ front: "оптимистичный", back: "optimistisch", lesson: "B1.2" },	
{ front: "фигура", back: "die Figur", lesson: "B1.2" },	{ front: "фигуры", back: "die Figuren", lesson: "B1.2" },
{ front: "невероятный", back: "unglaublich", lesson: "B1.2" },	
{ front: "изобретать", back: "erfinden", lesson: "B1.2" },	{ front: "изобрёл", back: "hat erfunden", lesson: "B1.2" },
{ front: "операция", back: "die Operation", lesson: "B1.2" },	{ front: "операции", back: "die Operationen", lesson: "B1.2" },
{ front: "кровь", back: "das Blut", lesson: "B1.2" },	
{ front: "криминальный", back: "Kriminal", lesson: "B1.2" },	
{ front: "публиковать", back: "veröffentlichen", lesson: "B1.2" },	{ front: "опубликовал", back: "hat veröffentlicht", lesson: "B1.2" },
{ front: "случай", back: "der Fall", lesson: "B1.2" },	{ front: "случаи", back: "die Fälle", lesson: "B1.2" },
{ front: "учебный словарь", back: "der Lernwortschatz", lesson: "B1.2" },	
{ front: "сегодняшний", back: "heutig", lesson: "B1.2" },	
{ front: "действовать", back: "handeln", lesson: "B1.2" },	{ front: "действовал", back: "hat gehandelt", lesson: "B1.2" },
{ front: "прошлое", back: "die Vergangenheit", lesson: "B1.2" },	
{ front: "певица", back: "die Sängerin", lesson: "B1.2" },	{ front: "певицы", back: "die Sängerinnen", lesson: "B1.2" },
{ front: "группа", back: "die Band", lesson: "B1.2" },	{ front: "группы", back: "die Bands", lesson: "B1.2" },
{ front: "возникать", back: "entstehen", lesson: "B1.2" },	{ front: "возник", back: "ist entstanden", lesson: "B1.2" },
{ front: "электронный", back: "elektronisch", lesson: "B1.2" },	
{ front: "производить", back: "produzieren", lesson: "B1.2" },	{ front: "произвёл", back: "hat produziert", lesson: "B1.2" },
{ front: "большой город", back: "die Großstadt", lesson: "B1.2" },	{ front: "большие города", back: "die Großstädte", lesson: "B1.2" },
{ front: "тем временем", back: "inzwischen", lesson: "B1.2" },	
{ front: "сначала", back: "anfangs", lesson: "B1.2" },	
{ front: "так называемый", back: "sogenannt", lesson: "B1.2" },	
{ front: "песня", back: "der Song", lesson: "B1.2" },	{ front: "песни", back: "die Songs", lesson: "B1.2" },
{ front: "хит", back: "der Hit", lesson: "B1.2" },	{ front: "хиты", back: "die Hits", lesson: "B1.2" },
{ front: "полностью", back: "völlig", lesson: "B1.2" },	
{ front: "юмор", back: "der Humor", lesson: "B1.2" },	
{ front: "повседневный", back: "alltäglich", lesson: "B1.2" },	
{ front: "насилие", back: "die Gewalt", lesson: "B1.2" },	
{ front: "критиковать", back: "kritisieren", lesson: "B1.2" },	{ front: "критиковал", back: "hat kritisiert", lesson: "B1.2" },
{ front: "звезда", back: "der Star", lesson: "B1.2" },	{ front: "звёзды", back: "die Stars", lesson: "B1.2" },
{ front: "сцена", back: "die Szene", lesson: "B1.2" },	
{ front: "успешный", back: "erfolgreich", lesson: "B1.2" },	
{ front: "заниматься", back: "sich beschäftigen", lesson: "B1.2" },	{ front: "занимался", back: "hat sich beschäftigt", lesson: "B1.2" },
{ front: "безработица", back: "die Arbeitslosigkeit", lesson: "B1.2" },	
{ front: "лагерь", back: "das Lager", lesson: "B1.2" },	{ front: "лагеря", back: "die Lager", lesson: "B1.2" },
{ front: "отношение", back: "das Verhältnis", lesson: "B1.2" },	{ front: "отношения", back: "die Verhältnisse", lesson: "B1.2" },
{ front: "удаваться", back: "gelingen", lesson: "B1.2" },	{ front: "удалось", back: "ist gelungen", lesson: "B1.2" },
{ front: "совет", back: "der Rat", lesson: "B1.2" },	
{ front: "в конце концов", back: "zuletzt", lesson: "B1.2" },	
{ front: "покидать", back: "verlassen", lesson: "B1.2" },	{ front: "покинул", back: "hat verlassen", lesson: "B1.2" },
{ front: "сопровождать", back: "begleiten", lesson: "B1.2" },	{ front: "сопровождал", back: "hat begleitet", lesson: "B1.2" },
{ front: "ящик", back: "die Kiste", lesson: "B1.2" },	{ front: "ящики", back: "die Kisten", lesson: "B1.2" },
{ front: "берег", back: "das Ufer", lesson: "B1.2" },	{ front: "берега", back: "die Ufer", lesson: "B1.2" },
{ front: "мыть", back: "spülen", lesson: "B1.2" },	{ front: "вымыл", back: "hat gespült", lesson: "B1.2" },
{ front: "снаружи", back: "außen", lesson: "B1.2" },	
{ front: "внутри", back: "innen", lesson: "B1.2" },	
{ front: "встречать", back: "begegnen", lesson: "B1.2" },	{ front: "встретил", back: "ist begegnet", lesson: "B1.2" },
{ front: "приключение", back: "das Abenteuer", lesson: "B1.2" },	{ front: "приключения", back: "die Abenteuer", lesson: "B1.2" },
{ front: "сбываться", back: "sich erfüllen", lesson: "B1.2" },	{ front: "сбылось", back: "hat sich erfüllt", lesson: "B1.2" },
{ front: "за это", back: "dafür", lesson: "B1.2" },	
{ front: "соглашаться", back: "zustimmen", lesson: "B1.2" },	{ front: "согласился", back: "hat zugestimmt", lesson: "B1.2" },
{ front: "СМИ", back: "die Medien", lesson: "B1.2" },	{ front: "СМИ", back: "die Medien", lesson: "B1.2" },
{ front: "радио", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "чуть-чуть", back: "knapp", lesson: "B1.2" },	
{ front: "двойной", back: "doppelt", lesson: "B1.2" },	
{ front: "относительно", back: "relativ", lesson: "B1.2" },	
{ front: "сериал", back: "die Serie", lesson: "B1.2" },	{ front: "сериалы", back: "die Serien", lesson: "B1.2" },
{ front: "серия", back: "die Folge", lesson: "B1.2" },	{ front: "серии", back: "die Folgen", lesson: "B1.2" },
{ front: "фигура", back: "die Figur", lesson: "B1.2" },	{ front: "фигуры", back: "die Figuren", lesson: "B1.2" },
{ front: "характер", back: "der Charakter", lesson: "B1.2" },	{ front: "характеры", back: "die Charaktere", lesson: "B1.2" },
{ front: "криминальный", back: "Kriminal", lesson: "B1.2" },	
{ front: "радио", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "приключение", back: "das Abenteuer", lesson: "B1.2" },	{ front: "приключения", back: "die Abenteuer", lesson: "B1.2" },
{ front: "кино", back: "das Kino", lesson: "B1.2" },	{ front: "кинотеатры", back: "die Kinos", lesson: "B1.2" },
{ front: "желудок", back: "der Magen", lesson: "B1.3" },	{ front: "желудки", back: "die Mägen", lesson: "B1.3" },
{ front: "уговаривать", back: "überreden", lesson: "B1.3" },	{ front: "уговорил", back: "hat überredet", lesson: "B1.3" },
{ front: "договариваться", back: "vereinbaren", lesson: "B1.3" },	{ front: "договорился", back: "hat vereinbart", lesson: "B1.3" },
{ front: "средство", back: "das Mittel", lesson: "B1.3" },	{ front: "средства", back: "die Mittel", lesson: "B1.3" },
{ front: "сон", back: "der Schlaf", lesson: "B1.3" },	
{ front: "фактор", back: "der Faktor", lesson: "B1.3" },	{ front: "факторы", back: "die Faktoren", lesson: "B1.3" },
{ front: "ночью", back: "nachts", lesson: "B1.3" },	
{ front: "основа", back: "die Grundlage", lesson: "B1.3" },	{ front: "основы", back: "die Grundlagen", lesson: "B1.3" },
{ front: "достаточный", back: "ausreichend", lesson: "B1.3" },	
{ front: "обращать внимание", back: "achten", lesson: "B1.3" },	{ front: "обратил внимание", back: "hat geachtet", lesson: "B1.3" },
{ front: "жир", back: "das Fett", lesson: "B1.3" },	{ front: "жиры", back: "die Fette", lesson: "B1.3" },
{ front: "идеальный", back: "ideal", lesson: "B1.3" },	
{ front: "также", back: "ebenfalls", lesson: "B1.3" },	
{ front: "дышать", back: "atmen", lesson: "B1.3" },	{ front: "дышал", back: "hat geatmet", lesson: "B1.3" },
{ front: "плоский", back: "flach", lesson: "B1.3" },	
{ front: "действие, эффект", back: "die Wirkung", lesson: "B1.3" },	{ front: "действия, эффекты", back: "die Wirkungen", lesson: "B1.3" },
{ front: "чаще", back: "öfter", lesson: "B1.3" },	
{ front: "сила", back: "die Kraft", lesson: "B1.3" },	{ front: "силы", back: "die Kräfte", lesson: "B1.3" },
{ front: "одновременно", back: "gleichzeitig", lesson: "B1.3" },	
{ front: "истощённый", back: "erschöpft", lesson: "B1.3" },	
{ front: "результат", back: "das Ergebnis", lesson: "B1.3" },	{ front: "результаты", back: "die Ergebnisse", lesson: "B1.3" },
{ front: "обходить, обращаться", back: "umgehen", lesson: "B1.3" },	{ front: "обошёл, обращался", back: "ist umgegangen", lesson: "B1.3" },
{ front: "просыпаться", back: "aufwachen", lesson: "B1.3" },	{ front: "проснулся", back: "bist aufgewacht", lesson: "B1.3" },
{ front: "недостаток", back: "der Mangel", lesson: "B1.3" },	{ front: "недостатки", back: "die Mängel", lesson: "B1.3" },
{ front: "экстремальный", back: "extrem", lesson: "B1.3" },	
{ front: "измерять", back: "messen", lesson: "B1.3" },	{ front: "измерил", back: "hat gemessen", lesson: "B1.3" },
{ front: "худеть / уменьшать", back: "abnehmen", lesson: "B1.3" },	{ front: "похудел / уменьшил", back: "hat abgenommen", lesson: "B1.3" },
{ front: "вес", back: "das Gewicht", lesson: "B1.3" },	
{ front: "обследовать, исследовать", back: "untersuchen", lesson: "B1.3" },	{ front: "обследовал", back: "hat untersucht", lesson: "B1.3" },
{ front: "мусорное ведро", back: "der Abfalleimer", lesson: "B1.3" },	{ front: "мусорные ведра", back: "die Abfalleimer", lesson: "B1.3" },
{ front: "улучшение", back: "die Verbesserung", lesson: "B1.3" },	{ front: "улучшения", back: "die Verbesserungen", lesson: "B1.3" },
{ front: "приём (лекарств)", back: "die Einnahme", lesson: "B1.3" },	
{ front: "такой", back: "solch", lesson: "B1.3" },	
{ front: "специалист", back: "der Fachmann", lesson: "B1.3" },	{ front: "специалисты", back: "die Fachmänner", lesson: "B1.3" },
{ front: "плечо", back: "die Schulter", lesson: "B1.3" },	{ front: "плечи", back: "die Schultern", lesson: "B1.3" },
{ front: "сначала", back: "zunächst", lesson: "B1.3" },	
{ front: "предполагать", back: "vermuten", lesson: "B1.3" },	{ front: "предположил", back: "hat vermutet", lesson: "B1.3" },
{ front: "нарушение", back: "die Störung", lesson: "B1.3" },	{ front: "нарушения", back: "die Störungen", lesson: "B1.3" },
{ front: "обезболивающее средство", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "обезболивающие средства", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "вести", back: "führen", lesson: "B1.3" },	{ front: "вел", back: "hat geführt", lesson: "B1.3" },
{ front: "выписывать (рецепт)", back: "verschreiben", lesson: "B1.3" },	{ front: "выписал (рецепт)", back: "hat verschrieben", lesson: "B1.3" },
{ front: "получать", back: "erhalten", lesson: "B1.3" },	{ front: "получил", back: "hat erhalten", lesson: "B1.3" },
{ front: "худеть / уменьшать", back: "abnehmen", lesson: "B1.3" },	{ front: "похудел / уменьшил", back: "hat abgenommen", lesson: "B1.3" },
{ front: "благополучие", back: "das Wohl", lesson: "B1.3" },	
{ front: "бесплатно, зря", back: "umsonst", lesson: "B1.3" },	
{ front: "участвовать", back: "teilnehmen", lesson: "B1.3" },	{ front: "участвовал", back: "hat teilgenommen", lesson: "B1.3" },
{ front: "Leistung", back: "die Leistung", lesson: "B1.3" },	{ front: "Leistungen", back: "die Leistungen", lesson: "B1.3" },
{ front: "делать прививку", back: "impfen", lesson: "B1.3" },	{ front: "сделал прививку", back: "hat geimpft", lesson: "B1.3" },
{ front: "заниматься (спортом и т.п.)", back: "treiben", lesson: "B1.3" },	{ front: "занимался", back: "hat getrieben", lesson: "B1.3" },
{ front: "половина", back: "die Hälfte", lesson: "B1.3" },	{ front: "половины", back: "die Hälften", lesson: "B1.3" },
{ front: "четверть", back: "das Viertel", lesson: "B1.3" },	{ front: "четверти", back: "die Viertel", lesson: "B1.3" },
{ front: "треть", back: "das Drittel", lesson: "B1.3" },	{ front: "трети", back: "die Drittel", lesson: "B1.3" },
{ front: "в основном, принципиально", back: "grundsätzlich", lesson: "B1.3" },	
{ front: "фрукт", back: "die Frucht", lesson: "B1.3" },	{ front: "фрукты", back: "die Früchte", lesson: "B1.3" },
{ front: "отказываться", back: "verzichten", lesson: "B1.3" },	{ front: "отказался", back: "hat verzichtet", lesson: "B1.3" },
{ front: "творог", back: "der Quark", lesson: "B1.3" },	
{ front: "витамин", back: "das Vitamin", lesson: "B1.3" },	{ front: "витамины", back: "die Vitamine", lesson: "B1.3" },
{ front: "сообщать о болезни", back: "krankmelden", lesson: "B1.3" },	{ front: "сообщил о болезни", back: "hat krankgemeldet", lesson: "B1.3" },
{ front: "выписывать больничный", back: "krankschreiben", lesson: "B1.3" },	{ front: "выписал больничный", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "конференция", back: "die Konferenz", lesson: "B1.3" },	{ front: "конференции", back: "die Konferenzen", lesson: "B1.3" },
{ front: "блокнот", back: "der Schreibblock", lesson: "B1.3" },	{ front: "блокноты", back: "die Schreibblöcke", lesson: "B1.3" },
{ front: "лаборатория", back: "das Labor", lesson: "B1.3" },	{ front: "лаборатории", back: "die Labors / die Labore", lesson: "B1.3" },
{ front: "повязка", back: "der Verband", lesson: "B1.3" },	{ front: "повязки", back: "die Verbände", lesson: "B1.3" },
{ front: "шприц", back: "die Spritze", lesson: "B1.3" },	{ front: "шприцы", back: "die Spritzen", lesson: "B1.3" },
{ front: "обследовать (кого-то/что-то)", back: "untersuchen (jemanden/etwas)", lesson: "B1.3" },	{ front: "обследовал", back: "hat untersucht", lesson: "B1.3" },
{ front: "делать прививку (кому-то)", back: "impfen (jemanden)", lesson: "B1.3" },	{ front: "сделал прививку", back: "hat geimpft", lesson: "B1.3" },
{ front: "лекарство", back: "das Medikament", lesson: "B1.3" },	{ front: "лекарства", back: "die Medikamente", lesson: "B1.3" },
{ front: "выписывать (рецепт)", back: "verschreiben", lesson: "B1.3" },	{ front: "выписал (рецепт)", back: "hat verschrieben", lesson: "B1.3" },
{ front: "кого-то", back: "jemanden", lesson: "B1.3" },	
{ front: "выписывать больничный", back: "krankschreiben", lesson: "B1.3" },	{ front: "выписал больничный", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "шприц", back: "die Spritze", lesson: "B1.3" },	{ front: "шприцы", back: "die Spritzen", lesson: "B1.3" },
{ front: "повязка", back: "der Verband", lesson: "B1.3" },	{ front: "повязки", back: "die Verbände", lesson: "B1.3" },
{ front: "обезболивающее средство", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "обезболивающие средства", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "мазь", back: "die Salbe", lesson: "B1.3" },	{ front: "мази", back: "die Salben", lesson: "B1.3" },
{ front: "боль", back: "der Schmerz", lesson: "B1.3" },	{ front: "боли", back: "die Schmerzen", lesson: "B1.3" },
{ front: "насморк", back: "der Schnupfen", lesson: "B1.3" },	
{ front: "измерять (артериальное давление)", back: "messen (den Blutdruck)", lesson: "B1.3" },	{ front: "измерил", back: "hat gemessen", lesson: "B1.3" },
{ front: "сдавать (кровь)", back: "abnehmen (Blut)", lesson: "B1.3" },	{ front: "сдал кровь", back: "hat abgenommen", lesson: "B1.3" },
{ front: "проверять (вес)", back: "prüfen (das Gewicht)", lesson: "B1.3" },	{ front: "проверил", back: "hat geprüft", lesson: "B1.3" },
{ front: "живот", back: "der Bauch", lesson: "B1.3" },	{ front: "животы", back: "die Bäuche", lesson: "B1.3" },
{ front: "температура (жар)", back: "das Fieber", lesson: "B1.3" },	
{ front: "кашель", back: "der Husten", lesson: "B1.3" },	
{ front: "о чём", back: "worüber", lesson: "B1.4" },	
{ front: "спешка", back: "die Eile", lesson: "B1.4" },	
{ front: "подвал", back: "der Keller", lesson: "B1.4" },	{ front: "подвалы", back: "die Keller", lesson: "B1.4" },
{ front: "там, здесь", back: "da", lesson: "B1.4" },	
{ front: "предложение", back: "der Satz", lesson: "B1.4" },	{ front: "предложения", back: "die Sätze", lesson: "B1.4" },
{ front: "этот, та", back: "da(r)-", lesson: "B1.4" },	
{ front: "совсем, вообще", back: "gar", lesson: "B1.4" },	
{ front: "во всяком случае", back: "jedenfalls", lesson: "B1.4" },	
{ front: "улыбаться", back: "lächeln", lesson: "B1.4" },	{ front: "улыбался", back: "hat gelächelt", lesson: "B1.4" },
{ front: "просто, ну", back: "halt", lesson: "B1.4" },	
{ front: "ясно, чётко", back: "deutlich", lesson: "B1.4" },	
{ front: "столько", back: "so viel", lesson: "B1.4" },	
{ front: "намереваться", back: "vorhaben", lesson: "B1.4" },	{ front: "намеревался", back: "hat vorgehabt", lesson: "B1.4" },
{ front: "правда", back: "die Wahrheit", lesson: "B1.4" },	{ front: "правды", back: "die Wahrheiten", lesson: "B1.4" },
{ front: "лгать", back: "lügen", lesson: "B1.4" },	{ front: "лгал", back: "hat gelogen", lesson: "B1.4" },
{ front: "заканчивать", back: "beenden", lesson: "B1.4" },	{ front: "закончил", back: "hat beendet", lesson: "B1.4" },
{ front: "место для обучения", back: "der Ausbildungsplatz", lesson: "B1.4" },	{ front: "места для обучения", back: "die Ausbildungsplätze", lesson: "B1.4" },
{ front: "выбирать", back: "aussuchen", lesson: "B1.4" },	{ front: "выбрал", back: "hat ausgesucht", lesson: "B1.4" },
{ front: "президент / президентка", back: "der Präsident / die Präsidentin", lesson: "B1.4" },	{ front: "президенты / президентки", back: "die Präsidenten / Präsidentinnen", lesson: "B1.4" },
{ front: "кошелёк", back: "das Portemonnaie", lesson: "B1.4" },	{ front: "кошельки", back: "die Portemonnaies", lesson: "B1.4" },
{ front: "бегло", back: "fließend", lesson: "B1.4" },	
{ front: "поэтому", back: "deswegen", lesson: "B1.4" },	
{ front: "когда-нибудь", back: "irgendwann", lesson: "B1.4" },	
{ front: "переводить", back: "übersetzen", lesson: "B1.4" },	{ front: "перевёл", back: "hat übersetzt", lesson: "B1.4" },
{ front: "поэтому", back: "daher", lesson: "B1.4" },	
{ front: "родной язык", back: "die Muttersprache", lesson: "B1.4" },	{ front: "родные языки", back: "die Muttersprachen", lesson: "B1.4" },
{ front: "произношение", back: "die Aussprache", lesson: "B1.4" },	
{ front: "поэтому", back: "darum", lesson: "B1.4" },	
{ front: "записывать", back: "aufschreiben", lesson: "B1.4" },	{ front: "записал", back: "hat aufgeschrieben", lesson: "B1.4" },
{ front: "выражение", back: "der Ausdruck", lesson: "B1.4" },	{ front: "выражения", back: "die Ausdrücke", lesson: "B1.4" },
{ front: "ещё раз", back: "noch mal", lesson: "B1.4" },	
{ front: "механик", back: "der Mechaniker", lesson: "B1.4" },	{ front: "механики", back: "die Mechaniker", lesson: "B1.4" },
{ front: "механик (женщина)", back: "die Mechanikerin", lesson: "B1.4" },	{ front: "механики (женщины)", back: "die Mechanikerinnen", lesson: "B1.4" },
{ front: "повторение", back: "die Wiederholung", lesson: "B1.4" },	{ front: "повторения", back: "die Wiederholungen", lesson: "B1.4" },
{ front: "студенческая столовая", back: "die Mensa", lesson: "B1.4" },	{ front: "студенческие столовые", back: "die Mensen", lesson: "B1.4" },
{ front: "курс интеграции", back: "der Integrationskurs", lesson: "B1.4" },	{ front: "курсы интеграции", back: "die Integrationskurse", lesson: "B1.4" },
{ front: "происхождение", back: "die Herkunft", lesson: "B1.4" },	{ front: "происхождения", back: "die Herkünfte", lesson: "B1.4" },
{ front: "прятаться", back: "sich verstecken", lesson: "B1.4" },	{ front: "прятался", back: "hat sich versteckt", lesson: "B1.4" },
{ front: "классный, крутой", back: "cool", lesson: "B1.4" },	
{ front: "греческий язык", back: "das Griechisch", lesson: "B1.4" },	
{ front: "грек", back: "der Grieche", lesson: "B1.4" },	{ front: "греки", back: "die Griechen", lesson: "B1.4" },
{ front: "гречанка", back: "die Griechin", lesson: "B1.4" },	{ front: "гречанки", back: "die Griechinnen", lesson: "B1.4" },
{ front: "перепутанный, в беспорядке", back: "durcheinander", lesson: "B1.4" },	
{ front: "не позднее", back: "spätestens", lesson: "B1.4" },	
{ front: "выбирать", back: "wählen", lesson: "B1.4" },	{ front: "выбрал", back: "hat gewählt", lesson: "B1.4" },
{ front: "происходить", back: "stammen", lesson: "B1.4" },	{ front: "происходил", back: "hat gestammt", lesson: "B1.4" },
{ front: "соус", back: "die Soße", lesson: "B1.4" },	{ front: "соусы", back: "die Soßen", lesson: "B1.4" },
{ front: "постепенно", back: "allmählich", lesson: "B1.4" },	
{ front: "нерв", back: "der Nerv", lesson: "B1.4" },	{ front: "нервы", back: "die Nerven", lesson: "B1.4" },
{ front: "странный", back: "merkwürdig", lesson: "B1.4" },	
{ front: "правильный", back: "korrekt", lesson: "B1.4" },	
{ front: "с другой стороны", back: "andererseits", lesson: "B1.4" },	
{ front: "также", back: "ebenso", lesson: "B1.4" },	
{ front: "лоб", back: "die Stirn", lesson: "B1.4" },	{ front: "лбы", back: "die Stirnen", lesson: "B1.4" },
{ front: "страдать", back: "leiden", lesson: "B1.4" },	{ front: "страдал", back: "hat gelitten", lesson: "B1.4" },
{ front: "смешивать", back: "mischen", lesson: "B1.4" },	{ front: "смешивал", back: "hat gemischt", lesson: "B1.4" },
{ front: "однако", back: "allerdings", lesson: "B1.4" },	
{ front: "существовать, выдержать", back: "bestehen", lesson: "B1.4" },	{ front: "существовал, выдержал", back: "hat bestanden", lesson: "B1.4" },
{ front: "автор", back: "der Autor", lesson: "B1.4" },	{ front: "авторы", back: "die Autoren", lesson: "B1.4" },
{ front: "автор (женщина)", back: "die Autorin", lesson: "B1.4" },	{ front: "авторы (женщины)", back: "die Autorinnen", lesson: "B1.4" },
{ front: "знания", back: "die Kenntnisse", lesson: "B1.4" },	{ front: "знания", back: "die Kenntnisse", lesson: "B1.4" },
{ front: "сравнивать", back: "vergleichen", lesson: "B1.4" },	{ front: "сравнил", back: "hat verglichen", lesson: "B1.4" },
{ front: "партнёр", back: "der Partner", lesson: "B1.4" },	{ front: "партнёры", back: "die Partner", lesson: "B1.4" },
{ front: "партнёр (женщина)", back: "die Partnerin", lesson: "B1.4" },	{ front: "партнёры (женщины)", back: "die Partnerinnen", lesson: "B1.4" },
{ front: "ругаться", back: "schimpfen", lesson: "B1.4" },	{ front: "ругался", back: "hat geschimpft", lesson: "B1.4" },
{ front: "письменность, почерк", back: "die Schrift", lesson: "B1.4" },	{ front: "письменности, почерки", back: "die Schriften", lesson: "B1.4" },
{ front: "родной язык", back: "die Muttersprache", lesson: "B1.4" },	{ front: "родные языки", back: "die Muttersprachen", lesson: "B1.4" },
{ front: "иностранный язык", back: "die Fremdsprache", lesson: "B1.4" },	{ front: "иностранные языки", back: "die Fremdsprachen", lesson: "B1.4" },
{ front: "языковая школа", back: "die Sprachenschule", lesson: "B1.4" },	{ front: "языковые школы", back: "die Sprachenschulen", lesson: "B1.4" },
{ front: "произношение", back: "die Aussprache", lesson: "B1.4" },	{ front: "произношения", back: "die Aussprachen", lesson: "B1.4" },
{ front: "письменность, почерк", back: "die Schrift", lesson: "B1.4" },	{ front: "письменности, почерки", back: "die Schriften", lesson: "B1.4" },
{ front: "бегло", back: "fließend", lesson: "B1.4" },	
{ front: "переводить", back: "übersetzen", lesson: "B1.4" },	{ front: "перевёл", back: "hat übersetzt", lesson: "B1.4" },
{ front: "к, в, на", back: "zu", lesson: "B1.5" },	
{ front: "талант", back: "das Talent", lesson: "B1.5" },	{ front: "таланты", back: "die Talente", lesson: "B1.5" },
{ front: "примерно, около", back: "etwa", lesson: "B1.5" },	
{ front: "быть достаточным", back: "genügen", lesson: "B1.5" },	{ front: "было достаточно", back: "hat genügt", lesson: "B1.5" },
{ front: "прекращать", back: "aufhören", lesson: "B1.5" },	{ front: "прекратил", back: "hat aufgehört", lesson: "B1.5" },
{ front: "торговля", back: "der Handel", lesson: "B1.5" },	
{ front: "преимущество", back: "der Vorteil", lesson: "B1.5" },	{ front: "преимущества", back: "die Vorteile", lesson: "B1.5" },
{ front: "ожидать", back: "erwarten", lesson: "B1.5" },	{ front: "ожидал", back: "hat erwartet", lesson: "B1.5" },
{ front: "предпосылка", back: "die Voraussetzung", lesson: "B1.5" },	{ front: "предпосылки", back: "die Voraussetzungen", lesson: "B1.5" },
{ front: "сотрудник сервиса", back: "der Serviceangestellte", lesson: "B1.5" },	{ front: "сотрудники сервиса", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "сотрудница сервиса", back: "die Serviceangestellte", lesson: "B1.5" },	{ front: "сотрудницы сервиса", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "документы", back: "die Unterlagen", lesson: "B1.5" },	{ front: "документы", back: "die Unterlagen", lesson: "B1.5" },
{ front: "задание", back: "die Aufgabe", lesson: "B1.5" },	{ front: "задания", back: "die Aufgaben", lesson: "B1.5" },
{ front: "поддержка", back: "die Unterstützung", lesson: "B1.5" },	{ front: "поддержки", back: "die Unterstützungen", lesson: "B1.5" },
{ front: "письменный", back: "schriftlich", lesson: "B1.5" },	
{ front: "устанавливать", back: "feststellen", lesson: "B1.5" },	{ front: "установил", back: "hat festgestellt", lesson: "B1.5" },
{ front: "привыкший", back: "gewohnt", lesson: "B1.5" },	
{ front: "обычный", back: "üblich", lesson: "B1.5" },	
{ front: "установка, приложение", back: "die Anlage", lesson: "B1.5" },	{ front: "установки, приложения", back: "die Anlagen", lesson: "B1.5" },
{ front: "резюме", back: "der Lebenslauf", lesson: "B1.5" },	{ front: "резюме", back: "die Lebensläufe", lesson: "B1.5" },
{ front: "развивать", back: "entwickeln", lesson: "B1.5" },	{ front: "развил", back: "hat entwickelt", lesson: "B1.5" },
{ front: "производить", back: "herstellen", lesson: "B1.5" },	{ front: "произвёл", back: "hat hergestellt", lesson: "B1.5" },
{ front: "деятельность", back: "die Tätigkeit", lesson: "B1.5" },	{ front: "деятельности", back: "die Tätigkeiten", lesson: "B1.5" },
{ front: "вне", back: "außerhalb", lesson: "B1.5" },	
{ front: "внутри", back: "innerhalb", lesson: "B1.5" },	
{ front: "момент времени", back: "der Zeitpunkt", lesson: "B1.5" },	{ front: "моменты времени", back: "die Zeitpunkte", lesson: "B1.5" },
{ front: "считать", back: "rechnen", lesson: "B1.5" },	{ front: "посчитал", back: "hat gerechnet", lesson: "B1.5" },
{ front: "зеркало", back: "der Spiegel", lesson: "B1.5" },	{ front: "зеркала", back: "die Spiegel", lesson: "B1.5" },
{ front: "успокаиваться", back: "sich beruhigen", lesson: "B1.5" },	{ front: "успокоился", back: "hat sich beruhigt", lesson: "B1.5" },
{ front: "технический", back: "technisch", lesson: "B1.5" },	
{ front: "ответственный", back: "zuständig", lesson: "B1.5" },	
{ front: "совместный, вместе", back: "zusammen-", lesson: "B1.5" },	
{ front: "ответственность", back: "die Verantwortung", lesson: "B1.5" },	
{ front: "маляр", back: "der Maler", lesson: "B1.5" },	{ front: "маляры", back: "die Maler", lesson: "B1.5" },
{ front: "маляр (женщина)", back: "die Malerin", lesson: "B1.5" },	{ front: "малярши", back: "die Malerinnen", lesson: "B1.5" },
{ front: "заказ", back: "der Auftrag", lesson: "B1.5" },	{ front: "заказы", back: "die Aufträge", lesson: "B1.5" },
{ front: "переводчик", back: "der Übersetzer", lesson: "B1.5" },	{ front: "переводчики", back: "die Übersetzer", lesson: "B1.5" },
{ front: "переводчица", back: "die Übersetzerin", lesson: "B1.5" },	{ front: "переводчицы", back: "die Übersetzerinnen", lesson: "B1.5" },
{ front: "обдумывать", back: "sich überlegen", lesson: "B1.5" },	{ front: "обдумал", back: "hat überlegt", lesson: "B1.5" },
{ front: "конкуренция", back: "die Konkurrenz", lesson: "B1.5" },	
{ front: "кстати, между прочим", back: "nebenbei", lesson: "B1.5" },	
{ front: "подрабатывать", back: "jobben", lesson: "B1.5" },	{ front: "подработал", back: "hat gejobbt", lesson: "B1.5" },
{ front: "справляться", back: "zurechtkommen", lesson: "B1.5" },	{ front: "справился", back: "ist zurechtgekommen", lesson: "B1.5" },
{ front: "зоопарк", back: "der Tierpark", lesson: "B1.5" },	{ front: "зоопарки", back: "die Tierparks", lesson: "B1.5" },
{ front: "повышение квалификации", back: "die Fortbildung", lesson: "B1.5" },	{ front: "повышения квалификации", back: "die Fortbildungen", lesson: "B1.5" },
{ front: "представлять", back: "vertreten", lesson: "B1.5" },	{ front: "представлял", back: "hat vertreten", lesson: "B1.5" },
{ front: "учитель", back: "der Lehrer", lesson: "B1.5" },	{ front: "учителя", back: "die Lehrer", lesson: "B1.5" },
{ front: "учительница", back: "die Lehrerin", lesson: "B1.5" },	{ front: "учительницы", back: "die Lehrerinnen", lesson: "B1.5" },
{ front: "дворник, домоуправ", back: "der Hausmeister", lesson: "B1.5" },	{ front: "дворники, домоуправы", back: "die Hausmeister", lesson: "B1.5" },
{ front: "дворничиха, домоуправ", back: "die Hausmeisterin", lesson: "B1.5" },	{ front: "дворничихи, домоуправы", back: "die Hausmeisterinnen", lesson: "B1.5" },
{ front: "врач", back: "der Arzt", lesson: "B1.5" },	{ front: "врачи", back: "die Ärzte", lesson: "B1.5" },
{ front: "врач (женщина)", back: "die Ärztin", lesson: "B1.5" },	{ front: "врачи (женщины)", back: "die Ärztinnen", lesson: "B1.5" },
{ front: "архитектор", back: "der Architekt", lesson: "B1.5" },	{ front: "архитекторы", back: "die Architekten", lesson: "B1.5" },
{ front: "архитектор (женщина)", back: "die Architektin", lesson: "B1.5" },	{ front: "архитекторы (женщины)", back: "die Architektinnen", lesson: "B1.5" },
{ front: "парикмахер", back: "der Friseur", lesson: "B1.5" },	{ front: "парикмахеры", back: "die Friseure", lesson: "B1.5" },
{ front: "парикмахер (женщина)", back: "die Friseurin", lesson: "B1.5" },	{ front: "парикмахеры (женщины)", back: "die Friseurinnen", lesson: "B1.5" },
{ front: "журналист", back: "der Journalist", lesson: "B1.5" },	{ front: "журналисты", back: "die Journalisten", lesson: "B1.5" },
{ front: "санитар", back: "der Krankenpfleger", lesson: "B1.5" },	{ front: "санитары", back: "die Krankenpfleger", lesson: "B1.5" },
{ front: "журналистка", back: "die Journalistin", lesson: "B1.5" },	{ front: "журналистки", back: "die Journalistinnen", lesson: "B1.5" },
{ front: "медсестра", back: "die Krankenschwester", lesson: "B1.5" },	{ front: "медсестры", back: "die Krankenschwestern", lesson: "B1.5" },
{ front: "полицейский", back: "der Polizist", lesson: "B1.5" },	{ front: "полицейские", back: "die Polizisten", lesson: "B1.5" },
{ front: "полицейская", back: "die Polizistin", lesson: "B1.5" },	{ front: "полицейские (женщины)", back: "die Polizistinnen", lesson: "B1.5" },
{ front: "продавец", back: "der Verkäufer", lesson: "B1.5" },	{ front: "продавцы", back: "die Verkäufer", lesson: "B1.5" },
{ front: "продавщица", back: "die Verkäuferin", lesson: "B1.5" },	{ front: "продавщицы", back: "die Verkäuferinnen", lesson: "B1.5" },
{ front: "вместо", back: "statt", lesson: "B1.6" },	
{ front: "сначала, первый", back: "erst-", lesson: "B1.6" },	
{ front: "производство", back: "die Produktion", lesson: "B1.6" },	{ front: "производства", back: "die Produktionen", lesson: "B1.6" },
{ front: "замена", back: "der Ersatz", lesson: "B1.6" },	
{ front: "определённый", back: "bestimmt", lesson: "B1.6" },	
{ front: "решать", back: "lösen", lesson: "B1.6" },	{ front: "решил", back: "hat gelöst", lesson: "B1.6" },
{ front: "тайна", back: "das Geheimnis", lesson: "B1.6" },	{ front: "тайны", back: "die Geheimnisse", lesson: "B1.6" },
{ front: "риск", back: "das Risiko", lesson: "B1.6" },	{ front: "риски", back: "die Risiken", lesson: "B1.6" },
{ front: "изменение", back: "die Änderung", lesson: "B1.6" },	{ front: "изменения", back: "die Änderungen", lesson: "B1.6" },
{ front: "смысл", back: "der Sinn", lesson: "B1.6" },	
{ front: "быть выгодным", back: "sich lohnen", lesson: "B1.6" },	{ front: "было выгодно", back: "hat gelohnt", lesson: "B1.6" },
{ front: "время года", back: "die Jahreszeit", lesson: "B1.6" },	{ front: "времена года", back: "die Jahreszeiten", lesson: "B1.6" },
{ front: "владеть", back: "besitzen", lesson: "B1.6" },	{ front: "владел", back: "hat besessen", lesson: "B1.6" },
{ front: "родиться", back: "geboren werden", lesson: "B1.6" },	{ front: "родился", back: "ist geboren worden", lesson: "B1.6" },
{ front: "решиться", back: "sich entschließen", lesson: "B1.6" },	{ front: "решился", back: "hat entschlossen", lesson: "B1.6" },
{ front: "тоска по дому", back: "das Heimweh", lesson: "B1.6" },	
{ front: "соревнование", back: "der Wettbewerb", lesson: "B1.6" },	{ front: "соревнования", back: "die Wettbewerbe", lesson: "B1.6" },
{ front: "приправа", back: "das Gewürz", lesson: "B1.6" },	{ front: "приправы", back: "die Gewürze", lesson: "B1.6" },
{ front: "тем временем, между тем", back: "mittlerweile", lesson: "B1.6" },	
{ front: "уважение, внимание", back: "die Rücksicht", lesson: "B1.6" },	{ front: "уважения, внимания", back: "die Rücksichten", lesson: "B1.6" },
{ front: "межкультурный", back: "interkulturell", lesson: "B1.6" },	
{ front: "основывать", back: "gründen", lesson: "B1.6" },	{ front: "основал", back: "hat gegründet", lesson: "B1.6" },
{ front: "заботиться", back: "betreuen", lesson: "B1.6" },	{ front: "заботился", back: "hat betreut", lesson: "B1.6" },
{ front: "привыкать", back: "sich gewöhnen", lesson: "B1.6" },	{ front: "привык", back: "hat gewöhnt", lesson: "B1.6" },
{ front: "ухаживать", back: "pflegen", lesson: "B1.6" },	{ front: "ухаживал", back: "hat gepflegt", lesson: "B1.6" },
{ front: "многолетний", back: "jahrelang", lesson: "B1.6" },	
{ front: "купец", back: "der Kaufmann", lesson: "B1.6" },	{ front: "купцы", back: "die Kaufleute", lesson: "B1.6" },
{ front: "купчиха", back: "die Kauffrau", lesson: "B1.6" },	{ front: "купчихи", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "эксперимент", back: "das Experiment", lesson: "B1.6" },	{ front: "эксперименты", back: "die Experimente", lesson: "B1.6" },
{ front: "финансовый", back: "finanziell", lesson: "B1.6" },	
{ front: "бизнесмены", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "бизнесмены", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "исключительно", back: "ausschließlich", lesson: "B1.6" },	
{ front: "ингредиент", back: "die Zutat", lesson: "B1.6" },	{ front: "ингредиенты", back: "die Zutaten", lesson: "B1.6" },
{ front: "максимум", back: "höchstens", lesson: "B1.6" },	
{ front: "студия", back: "das Studio", lesson: "B1.6" },	{ front: "студии", back: "die Studios", lesson: "B1.6" },
{ front: "чтобы", back: "um … zu", lesson: "B1.6" },	
{ front: "максимально", back: "möglichst", lesson: "B1.6" },	
{ front: "речь", back: "die Rede", lesson: "B1.6" },	{ front: "речи", back: "die Reden", lesson: "B1.6" },
{ front: "компромисс", back: "der Kompromiss", lesson: "B1.6" },	{ front: "компромиссы", back: "die Kompromisse", lesson: "B1.6" },
{ front: "кондиционер", back: "die Klimaanlage", lesson: "B1.6" },	{ front: "кондиционеры", back: "die Klimaanlagen", lesson: "B1.6" },
{ front: "программное обеспечение", back: "die Software", lesson: "B1.6" },	{ front: "программное обеспечение (мн.ч. редко)", back: "die Softwares", lesson: "B1.6" },
{ front: "возвращаться", back: "wiederkommen", lesson: "B1.6" },	{ front: "вернулся", back: "ist wiedergekommen", lesson: "B1.6" },
{ front: "усилие", back: "die Mühe", lesson: "B1.6" },	{ front: "усилия", back: "die Mühen", lesson: "B1.6" },
{ front: "зубная паста", back: "die Zahncreme", lesson: "B1.6" },	{ front: "зубные пасты", back: "die Zahncremes", lesson: "B1.6" },
{ front: "моющее средство", back: "das Waschmittel", lesson: "B1.6" },	
{ front: "щётка", back: "die Bürste", lesson: "B1.6" },	{ front: "щётки", back: "die Bürsten", lesson: "B1.6" },
{ front: "приветствовать", back: "begrüßen", lesson: "B1.6" },	{ front: "поприветствовал", back: "hat begrüßt", lesson: "B1.6" },
{ front: "прощаться", back: "sich verabschieden", lesson: "B1.6" },	{ front: "попрощался", back: "hat verabschiedet", lesson: "B1.6" },
{ front: "роль", back: "die Rolle", lesson: "B1.6" },	{ front: "роли", back: "die Rollen", lesson: "B1.6" },
{ front: "претензия, требование", back: "der Anspruch", lesson: "B1.6" },	{ front: "претензии, требования", back: "die Ansprüche", lesson: "B1.6" },
{ front: "подтверждать", back: "bestätigen", lesson: "B1.6" },	{ front: "подтвердил", back: "hat bestätigt", lesson: "B1.6" },
{ front: "копия", back: "die Kopie", lesson: "B1.6" },	{ front: "копии", back: "die Kopien", lesson: "B1.6" },
{ front: "повреждать", back: "beschädigen", lesson: "B1.6" },	{ front: "повредил", back: "hat beschädigt", lesson: "B1.6" },
{ front: "раздражающий", back: "ärgerlich", lesson: "B1.6" },	
{ front: "инструкция по эксплуатации", back: "die Bedienungsanleitung", lesson: "B1.6" },	{ front: "инструкции по эксплуатации", back: "die Bedienungsanleitungen", lesson: "B1.6" },
{ front: "обменивать", back: "umtauschen", lesson: "B1.6" },	{ front: "обменял", back: "hat umgetauscht", lesson: "B1.6" },
{ front: "однако", back: "jedoch", lesson: "B1.6" },	
{ front: "уже", back: "bereits", lesson: "B1.6" },	
{ front: "требовать", back: "fordern", lesson: "B1.6" },	{ front: "потребовал", back: "hat gefordert", lesson: "B1.6" },
{ front: "разочаровывать", back: "enttäuschen", lesson: "B1.6" },	{ front: "разочаровал", back: "hat enttäuscht", lesson: "B1.6" },
{ front: "призывать, приглашать", back: "auffordern", lesson: "B1.6" },	{ front: "пригласил, призвал", back: "hat aufgefordert", lesson: "B1.6" },
{ front: "предприятие, бизнес", back: "der Betrieb", lesson: "B1.6" },	{ front: "предприятия", back: "die Betriebe", lesson: "B1.6" },
{ front: "фирма", back: "die Firma", lesson: "B1.6" },	{ front: "фирмы", back: "die Firmen", lesson: "B1.6" },
{ front: "производство", back: "die Produktion", lesson: "B1.6" },	{ front: "производства", back: "die Produktionen", lesson: "B1.6" },
{ front: "торговля", back: "der Handel", lesson: "B1.6" },	
{ front: "риск", back: "das Risiko", lesson: "B1.6" },	{ front: "риски", back: "die Risiken", lesson: "B1.6" },
{ front: "бизнесмены", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "бизнесмены", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "купец", back: "der Kaufmann", lesson: "B1.6" },	{ front: "купцы", back: "die Kaufleute", lesson: "B1.6" },
{ front: "купчиха", back: "die Kauffrau", lesson: "B1.6" },	{ front: "купчихи", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "основывать", back: "gründen", lesson: "B1.6" },	{ front: "основал", back: "hat gegründet", lesson: "B1.6" },
{ front: "суд, блюдо", back: "das Gericht", lesson: "B1.7" },	{ front: "суды, блюда", back: "die Gerichte", lesson: "B1.7" },
{ front: "процесс", back: "der Prozess", lesson: "B1.7" },	{ front: "процессы", back: "die Prozesse", lesson: "B1.7" },
{ front: "гореть", back: "brennen", lesson: "B1.7" },	{ front: "горел", back: "hat gebrannt", lesson: "B1.7" },
{ front: "шум", back: "der Lärm", lesson: "B1.7" },	
{ front: "адвокат (муж.)", back: "der Rechtsanwalt", lesson: "B1.7" },	{ front: "адвокаты", back: "die Rechtsanwälte", lesson: "B1.7" },
{ front: "адвокат (жен.)", back: "die Rechtsanwältin", lesson: "B1.7" },	{ front: "адвокаты", back: "die Rechtsanwältinnen", lesson: "B1.7" },
{ front: "участок земли", back: "das Grundstück", lesson: "B1.7" },	{ front: "участки земли", back: "die Grundstücke", lesson: "B1.7" },
{ front: "подозревать", back: "verdächtigen", lesson: "B1.7" },	{ front: "подозревал", back: "hat verdächtigt", lesson: "B1.7" },
{ front: "мир", back: "der Frieden", lesson: "B1.7" },	
{ front: "реальность", back: "die Wirklichkeit", lesson: "B1.7" },	{ front: "реальности", back: "die Wirklichkeiten", lesson: "B1.7" },
{ front: "газон", back: "der Rasen", lesson: "B1.7" },	
{ front: "федеральная земля", back: "das Bundesland", lesson: "B1.7" },	{ front: "федеральные земли", back: "die Bundesländer", lesson: "B1.7" },
{ front: "друг друга", back: "-einander", lesson: "B1.7" },	
{ front: "юрист, адвокат", back: "der Anwalt", lesson: "B1.7" },	{ front: "юристы, адвокаты", back: "die Anwälte", lesson: "B1.7" },
{ front: "юрист (жен.), адвокат", back: "die Anwältin", lesson: "B1.7" },	{ front: "юристы (жен.), адвокаты", back: "die Anwältinnen", lesson: "B1.7" },
{ front: "либо ... либо", back: "entweder ... oder", lesson: "B1.7" },	
{ front: "центральный", back: "zentral", lesson: "B1.7" },	
{ front: "обязанность", back: "die Pflicht", lesson: "B1.7" },	{ front: "обязанности", back: "die Pflichten", lesson: "B1.7" },
{ front: "собственность", back: "das Eigentum", lesson: "B1.7" },	{ front: "собственники", back: "die Eigentümer", lesson: "B1.7" },
{ front: "кричать", back: "schreien", lesson: "B1.7" },	{ front: "кричал", back: "hat geschrien", lesson: "B1.7" },
{ front: "вместе", back: "miteinander", lesson: "B1.7" },	
{ front: "ластик", back: "der Radiergummi", lesson: "B1.7" },	{ front: "ластики", back: "die Radiergummis", lesson: "B1.7" },
{ front: "карандаш", back: "der Bleistift", lesson: "B1.7" },	{ front: "карандаши", back: "die Bleistifte", lesson: "B1.7" },
{ front: "цветной карандаш", back: "der Farbstift", lesson: "B1.7" },	{ front: "цветные карандаши", back: "die Farbstifte", lesson: "B1.7" },
{ front: "обнаруживать", back: "entdecken", lesson: "B1.7" },	{ front: "обнаружил", back: "hat entdeckt", lesson: "B1.7" },
{ front: "сердитый", back: "wütend", lesson: "B1.7" },	
{ front: "пазл", back: "das Puzzle", lesson: "B1.7" },	{ front: "пазлы", back: "die Puzzles", lesson: "B1.7" },
{ front: "запрет", back: "das Verbot", lesson: "B1.7" },	{ front: "запреты", back: "die Verbote", lesson: "B1.7" },
{ front: "только, лишь", back: "bloß", lesson: "B1.7" },	
{ front: "сюда", back: "hierher", lesson: "B1.7" },	
{ front: "внимательный", back: "aufmerksam", lesson: "B1.7" },	
{ front: "договариваться", back: "abmachen", lesson: "B1.7" },	{ front: "договорился", back: "hat abgemacht", lesson: "B1.7" },
{ front: "действительно", back: "tatsächlich", lesson: "B1.7" },	
{ front: "наглость", back: "die Frechheit", lesson: "B1.7" },	{ front: "наглости", back: "die Frechheiten", lesson: "B1.7" },
{ front: "из-за меня, ради меня", back: "meinetwegen", lesson: "B1.7" },	
{ front: "начинаться, касаться", back: "angehen", lesson: "B1.7" },	{ front: "начался, коснулся", back: "ist angegangen", lesson: "B1.7" },
{ front: "лифт", back: "der Lift", lesson: "B1.7" },	{ front: "лифты", back: "die Lifte", lesson: "B1.7" },
{ front: "терраса", back: "die Terrasse", lesson: "B1.7" },	{ front: "террасы", back: "die Terrassen", lesson: "B1.7" },
{ front: "какой-то", back: "irgend-", lesson: "B1.7" },	
{ front: "центр города", back: "die Innenstadt", lesson: "B1.7" },	{ front: "центры городов", back: "die Innenstädte", lesson: "B1.7" },
{ front: "поперечная улица", back: "die Querstraße", lesson: "B1.7" },	{ front: "поперечные улицы", back: "die Querstraßen", lesson: "B1.7" },
{ front: "существенный", back: "wesentlich", lesson: "B1.7" },	
{ front: "альтернатива", back: "die Alternative", lesson: "B1.7" },	{ front: "альтернативы", back: "die Alternativen", lesson: "B1.7" },
{ front: "край", back: "der Rand", lesson: "B1.7" },	{ front: "края", back: "die Ränder", lesson: "B1.7" },
{ front: "ссылка", back: "der Link", lesson: "B1.7" },	{ front: "ссылки", back: "die Links", lesson: "B1.7" },
{ front: "где", back: "wo(r)-", lesson: "B1.7" },	
{ front: "отсутствовать", back: "fehlen", lesson: "B1.7" },	{ front: "отсутствовал", back: "hat gefehlt", lesson: "B1.7" },
{ front: "государство", back: "der Staat", lesson: "B1.7" },	{ front: "государства", back: "die Staaten", lesson: "B1.7" },
{ front: "восточный", back: "Ost-", lesson: "B1.7" },	
{ front: "западный", back: "West-", lesson: "B1.7" },	
{ front: "стена", back: "die Mauer", lesson: "B1.7" },	{ front: "стены", back: "die Mauern", lesson: "B1.7" },
{ front: "правительство", back: "die Regierung", lesson: "B1.7" },	{ front: "правительства", back: "die Regierungen", lesson: "B1.7" },
{ front: "царить, господствовать", back: "herrschen", lesson: "B1.7" },	{ front: "царил, господствовал", back: "hat geherrscht", lesson: "B1.7" },
{ front: "ступень", back: "die Stufe", lesson: "B1.7" },	{ front: "ступени", back: "die Stufen", lesson: "B1.7" },
{ front: "посередине", back: "mitten", lesson: "B1.7" },	
{ front: "угловатый", back: "eckig", lesson: "B1.7" },	
{ front: "северный", back: "nördlich", lesson: "B1.7" },	
{ front: "земля", back: "die Erde", lesson: "B1.7" },	{ front: "земли", back: "die Erden", lesson: "B1.7" },
{ front: "шанс", back: "die Chance", lesson: "B1.7" },	{ front: "шансы", back: "die Chancen", lesson: "B1.7" },
{ front: "увеличивать", back: "vergrößern", lesson: "B1.7" },	{ front: "увеличил", back: "hat vergrößert", lesson: "B1.7" },
{ front: "давно", back: "längst", lesson: "B1.7" },	
{ front: "несмотря на", back: "trotz", lesson: "B1.7" },	
{ front: "строительство", back: "der Bau", lesson: "B1.7" },	{ front: "строительства", back: "die Bauten", lesson: "B1.7" },
{ front: "разрешение", back: "die Genehmigung", lesson: "B1.7" },	{ front: "разрешения", back: "die Genehmigungen", lesson: "B1.7" },
{ front: "туризм", back: "der Tourismus", lesson: "B1.7" },	
{ front: "одинаковый", back: "gleich-", lesson: "B1.7" },	
{ front: "здание", back: "das Gebäude", lesson: "B1.7" },	
{ front: "крыша", back: "das Dach", lesson: "B1.7" },	{ front: "крыши", back: "die Dächer", lesson: "B1.7" },
{ front: "дом", back: "das Haus", lesson: "B1.7" },	{ front: "дома", back: "die Häuser", lesson: "B1.7" },
{ front: "стена", back: "die Mauer", lesson: "B1.7" },	{ front: "стены", back: "die Mauern", lesson: "B1.7" },
{ front: "участок", back: "das Grundstück", lesson: "B1.7" },	{ front: "участки", back: "die Grundstücke", lesson: "B1.7" },
{ front: "лестница", back: "die Treppe", lesson: "B1.7" },	{ front: "лестницы", back: "die Treppen", lesson: "B1.7" },
{ front: "ступень", back: "die Stufe", lesson: "B1.7" },	{ front: "ступени", back: "die Stufen", lesson: "B1.7" },
{ front: "дверь", back: "die Tür", lesson: "B1.7" },	{ front: "двери", back: "die Türen", lesson: "B1.7" },
{ front: "окно", back: "das Fenster", lesson: "B1.7" },	
{ front: "подвал", back: "der Keller", lesson: "B1.7" },	
{ front: "лифт", back: "der Lift", lesson: "B1.7" },	{ front: "лифты", back: "die Lifte", lesson: "B1.7" },
{ front: "терраса", back: "die Terrasse", lesson: "B1.7" },	{ front: "террасы", back: "die Terrassen", lesson: "B1.7" },
{ front: "сад", back: "der Garten", lesson: "B1.7" },	{ front: "сады", back: "die Gärten", lesson: "B1.7" },
{ front: "балкон", back: "der Balkon", lesson: "B1.7" },	{ front: "балконы", back: "die Balkone", lesson: "B1.7" },
{ front: "газон", back: "der Rasen", lesson: "B1.7" },
    					
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
					
					
					
					
					
					
{ front: "präteritum ich vergrößern", back: "ich vergrößerte mich", lesson: "B1.7" },	{ front: "präteritum du vergrößern", back: "du vergrößertest dich", lesson: "B1.7" },	{ front: "präteritum  sie vergrößern", back: "sie vergrößerte sich", lesson: "B1.7" },	{ front: "präteritum wir vergrößern", back: "wir vergrößerten uns", lesson: "B1.7" },	{ front: "präteritum ihr vergrößern", back: "ihr vergrößertet euch", lesson: "B1.7" },	{ front: "präteritum sie(pl.) vergrößern", back: "sie vergrößerten sich", lesson: "B1.7" },
{ front: "спортсмен", back: "der Sportler", lesson: "B1.8" },	{ front: "спортсмены", back: "die Sportler", lesson: "B1.8" },
{ front: "спортсменка", back: "die Sportlerin", lesson: "B1.8" },	{ front: "спортсменки", back: "die Sportlerinnen", lesson: "B1.8" },
{ front: "если", back: "falls", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "чат", back: "der Chat", lesson: "B1.8" },	{ front: "чаты", back: "die Chats", lesson: "B1.8" },
{ front: "граница", back: "die Grenze", lesson: "B1.8" },	{ front: "границы", back: "die Grenzen", lesson: "B1.8" },
{ front: "возможно", back: "eventuell", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "последствие", back: "die Konsequenz", lesson: "B1.8" },	{ front: "последствия", back: "die Konsequenzen", lesson: "B1.8" },
{ front: "действовать", back: "wirken", lesson: "B1.8" },	{ front: "действовали/повлияли", back: "haben gewirkt", lesson: "B1.8" },
{ front: "обещать", back: "zusagen", lesson: "B1.8" },	{ front: "пообещали", back: "haben zugesagt", lesson: "B1.8" },
{ front: "потом", back: "nachher", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "обменивать", back: "tauschen", lesson: "B1.8" },	{ front: "обменяли", back: "haben getauscht", lesson: "B1.8" },
{ front: "ручка (шариковая)", back: "der Kuli", lesson: "B1.8" },	{ front: "ручки (шариковые)", back: "die Kulis", lesson: "B1.8" },
{ front: "завтрашний", back: "morgig", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "о чём", back: "worum", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "по", back: "je", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "тем", back: "desto", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "чем … тем", back: "je … desto", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "влияние", back: "der Einfluss", lesson: "B1.8" },	{ front: "влияния", back: "die Einflüsse", lesson: "B1.8" },
{ front: "климат", back: "das Klima", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "карьера", back: "die Karriere", lesson: "B1.8" },	{ front: "карьеры", back: "die Karrieren", lesson: "B1.8" },
{ front: "узкий / тесный", back: "eng", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "исследование", back: "die Studie", lesson: "B1.8" },	{ front: "исследования", back: "die Studien", lesson: "B1.8" },
{ front: "дружба", back: "die Freundschaft", lesson: "B1.8" },	{ front: "дружбы", back: "die Freundschaften", lesson: "B1.8" },
{ front: "атмосфера", back: "die Atmosphäre", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "предупреждать", back: "warnen", lesson: "B1.8" },	{ front: "предупреждали", back: "haben gewarnt", lesson: "B1.8" },
{ front: "дистанция", back: "die Distanz", lesson: "B1.8" },	{ front: "дистанции", back: "die Distanzen", lesson: "B1.8" },
{ front: "сотрудничество", back: "die Zusammenarbeit", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "отношения", back: "die Beziehung", lesson: "B1.8" },	{ front: "отношения", back: "die Beziehungen", lesson: "B1.8" },
{ front: "влиять", back: "beeinflussen", lesson: "B1.8" },	{ front: "повлияли", back: "haben beeinflusst", lesson: "B1.8" },
{ front: "разумный / целесообразный", back: "sinnvoll", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "многомесячный", back: "monatelang", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "стихотворение", back: "das Gedicht", lesson: "B1.8" },	{ front: "стихотворения", back: "die Gedichte", lesson: "B1.8" },
{ front: "верный", back: "treu", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "оркестр", back: "das Orchester", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "обращаться на "ты"", back: "duzen", lesson: "B1.8" },	{ front: "обращались на "ты"", back: "haben geduzt", lesson: "B1.8" },
{ front: "родительское собрание", back: "der Elternabend", lesson: "B1.8" },	{ front: "родительские собрания", back: "die Elternabende", lesson: "B1.8" },
{ front: "правильный / довольно", back: "recht", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "реклама", back: "die Werbung", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "сравнение", back: "der Vergleich", lesson: "B1.8" },	{ front: "сравнения", back: "die Vergleiche", lesson: "B1.8" },
{ front: "сообщество", back: "die Gemeinschaft", lesson: "B1.8" },	{ front: "сообщества", back: "die Gemeinschaften", lesson: "B1.8" },
{ front: "тот же самый", back: "derselbe", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "кроме", back: "außer", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "форма", back: "die Form", lesson: "B1.8" },	{ front: "формы", back: "die Formen", lesson: "B1.8" },
{ front: "впечатление", back: "der Eindruck", lesson: "B1.8" },	{ front: "впечатления", back: "die Eindrücke", lesson: "B1.8" },
{ front: "рабочая атмосфера", back: "das Betriebsklima", lesson: "B1.8" },	{ front: "–", back: "–", lesson: "B1.8" },
{ front: "рабочая атмосфера", back: "die Arbeitsatmosphäre", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "обращаться на "Вы"", back: "siezen", lesson: "B1.9" },	{ front: "обращались на "Вы"", back: "haben gesiezt", lesson: "B1.9" },
{ front: "виртуальный", back: "virtuell", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "папка", back: "der Ordner", lesson: "B1.9" },	{ front: "папки", back: "die Ordner", lesson: "B1.9" },
{ front: "жёсткий диск", back: "die Festplatte", lesson: "B1.9" },	{ front: "жёсткие диски", back: "die Festplatten", lesson: "B1.9" },
{ front: "файл", back: "die Datei", lesson: "B1.9" },	{ front: "файлы", back: "die Dateien", lesson: "B1.9" },
{ front: "вирус", back: "der Virus / das Virus", lesson: "B1.9" },	{ front: "вирусы", back: "die Viren", lesson: "B1.9" },
{ front: "монитор", back: "der Monitor", lesson: "B1.9" },	{ front: "мониторы", back: "die Monitore", lesson: "B1.9" },
{ front: "загружать", back: "herunterladen", lesson: "B1.9" },	{ front: "загрузили", back: "hat heruntergeladen", lesson: "B1.9" },
{ front: "подключать", back: "anschließen", lesson: "B1.9" },	{ front: "подключили", back: "hat angeschlossen", lesson: "B1.9" },
{ front: "удалять", back: "löschen", lesson: "B1.9" },	{ front: "удалили", back: "hat gelöscht", lesson: "B1.9" },
{ front: "клавиатура", back: "die Tastatur", lesson: "B1.9" },	{ front: "клавиатуры", back: "die Tastaturen", lesson: "B1.9" },
{ front: "кликать", back: "anklicken", lesson: "B1.9" },	{ front: "кликнули", back: "hat angeklickt", lesson: "B1.9" },
{ front: "бог", back: "der Gott", lesson: "B1.9" },	{ front: "боги", back: "die Götter", lesson: "B1.9" },
{ front: "многодневный", back: "tagelang", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "прежде чем", back: "bevor", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "бессмыслица", back: "der Unsinn", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "изобретение", back: "die Erfindung", lesson: "B1.9" },	{ front: "изобретения", back: "die Erfindungen", lesson: "B1.9" },
{ front: "аккумулятор", back: "der Akku", lesson: "B1.9" },	{ front: "аккумуляторы", back: "die Akkus", lesson: "B1.9" },
{ front: "после того как", back: "nachdem", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "компьютер / калькулятор", back: "der Rechner", lesson: "B1.9" },	{ front: "компьютеры / калькуляторы", back: "die Rechner", lesson: "B1.9" },
{ front: "устанавливать", back: "installieren", lesson: "B1.9" },	{ front: "установили", back: "hat installiert", lesson: "B1.9" },
{ front: "руководитель курса", back: "der Kursleiter", lesson: "B1.9" },	{ front: "руководители курса", back: "die Kursleiter", lesson: "B1.9" },
{ front: "руководительница курса", back: "die Kursleiterin", lesson: "B1.9" },	{ front: "руководительницы курса", back: "die Kursleiterinnen", lesson: "B1.9" },
{ front: "как будто", back: "als ob", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "классный / отличный", back: "klasse", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "великолепный", back: "herrlich", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "менеджер", back: "der Manager", lesson: "B1.9" },	{ front: "менеджеры", back: "die Manager", lesson: "B1.9" },
{ front: "менеджерша", back: "die Managerin", lesson: "B1.9" },	{ front: "менеджерши", back: "die Managerinnen", lesson: "B1.9" },
{ front: "жилой дом", back: "der Wohnblock", lesson: "B1.9" },	{ front: "жилые дома", back: "die Wohnblöcke", lesson: "B1.9" },
{ front: "описывать", back: "beschreiben", lesson: "B1.9" },	{ front: "описали", back: "hat beschrieben", lesson: "B1.9" },
{ front: "решать / принимать решение", back: "beschließen", lesson: "B1.9" },	{ front: "решили / приняли решение", back: "hat beschlossen", lesson: "B1.9" },
{ front: "салон", back: "der Salon", lesson: "B1.9" },	{ front: "салоны", back: "die Salons", lesson: "B1.9" },
{ front: "кнопка", back: "der Knopf", lesson: "B1.9" },	{ front: "кнопки", back: "die Knöpfe", lesson: "B1.9" },
{ front: "прощение", back: "die Verzeihung", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "создавать", back: "erstellen", lesson: "B1.9" },	{ front: "создали", back: "hat erstellt", lesson: "B1.9" },
{ front: "пароль", back: "das Passwort", lesson: "B1.9" },	{ front: "пароли", back: "die Passwörter", lesson: "B1.9" },
{ front: "символ", back: "das Symbol", lesson: "B1.9" },	{ front: "символы", back: "die Symbole", lesson: "B1.9" },
{ front: "зависимый", back: "süchtig", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "спереди", back: "vorn", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "все / весь", back: "sämtlich", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "горный велосипед", back: "das Mountainbike", lesson: "B1.9" },	{ front: "горные велосипеды", back: "die Mountainbikes", lesson: "B1.9" },
{ front: "в любом случае", back: "sowieso", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "прочь", back: "fort", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "почему", back: "wieso", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "волновать", back: "aufregen", lesson: "B1.9" },	{ front: "взволновали", back: "hat aufgeregt", lesson: "B1.9" },
{ front: "изменяться", back: "sich verändern", lesson: "B1.9" },	{ front: "изменились", back: "hat sich verändert", lesson: "B1.9" },
{ front: "цифровой", back: "digital", lesson: "B1.9" },	{ front: "–", back: "–", lesson: "B1.9" },
{ front: "дискуссия", back: "die Diskussion", lesson: "B1.9" },	{ front: "дискуссии", back: "die Diskussionen", lesson: "B1.9" },
{ front: "обсуждать", back: "diskutieren", lesson: "B1.9" },	{ front: "обсудили", back: "hat diskutiert", lesson: "B1.9" },
{ front: "ведущий", back: "der Moderator", lesson: "B1.9" },	{ front: "ведущие", back: "die Moderatoren", lesson: "B1.9" },
{ front: "ведущая", back: "die Moderatorin", lesson: "B1.9" },	{ front: "ведущие", back: "die Moderatorinnen", lesson: "B1.9" },
{ front: "точка зрения", back: "der Standpunkt", lesson: "B1.10" },	{ front: "точки зрения", back: "die Standpunkte", lesson: "B1.10" },
{ front: "меняться", back: "sich ändern", lesson: "B1.10" },	{ front: "изменились", back: "hat sich geändert", lesson: "B1.10" },
{ front: "кожа", back: "die Haut", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "лицо", back: "das Gesicht", lesson: "B1.10" },	{ front: "лица", back: "die Gesichter", lesson: "B1.10" },
{ front: "недостаток", back: "der Nachteil", lesson: "B1.10" },	{ front: "недостатки", back: "die Nachteile", lesson: "B1.10" },
{ front: "запрещать", back: "verbieten", lesson: "B1.10" },	{ front: "запретили", back: "hat verboten", lesson: "B1.10" },
{ front: "в прямом эфире", back: "live", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "победитель", back: "der Sieger", lesson: "B1.10" },	{ front: "победители", back: "die Sieger", lesson: "B1.10" },
{ front: "победительница", back: "die Siegerin", lesson: "B1.10" },	{ front: "победительницы", back: "die Siegerinnen", lesson: "B1.10" },
{ front: "справедливый", back: "gerecht", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "обращаться / лечить", back: "behandeln", lesson: "B1.10" },	{ front: "обращались / лечили", back: "hat behandelt", lesson: "B1.10" },
{ front: "прошлый", back: "vorig", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "переключать", back: "schalten", lesson: "B1.10" },	{ front: "переключили", back: "hat geschaltet", lesson: "B1.10" },
{ front: "как … так и", back: "sowohl … als auch", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "ни … ни", back: "weder … noch", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "лимонад", back: "die Limonade", lesson: "B1.10" },	{ front: "лимонады", back: "die Limonaden", lesson: "B1.10" },
{ front: "доставка", back: "die Lieferung", lesson: "B1.10" },	{ front: "доставки", back: "die Lieferungen", lesson: "B1.10" },
{ front: "палатка", back: "das Zelt", lesson: "B1.10" },	{ front: "палатки", back: "die Zelte", lesson: "B1.10" },
{ front: "выбрасывать", back: "wegwerfen", lesson: "B1.10" },	{ front: "выбросили", back: "hat weggeworfen", lesson: "B1.10" },
{ front: "условие", back: "die Bedingung", lesson: "B1.10" },	{ front: "условия", back: "die Bedingungen", lesson: "B1.10" },
{ front: "вычеркнуть / красить", back: "streichen", lesson: "B1.10" },	{ front: "вычеркнули / покрасили", back: "hat gestrichen", lesson: "B1.10" },
{ front: "фотоаппарат", back: "der Fotoapparat", lesson: "B1.10" },	{ front: "фотоаппараты", back: "die Fotoapparate", lesson: "B1.10" },
{ front: "квитанция", back: "der Beleg", lesson: "B1.10" },	{ front: "квитанции", back: "die Belege", lesson: "B1.10" },
{ front: "обмен", back: "der Umtausch", lesson: "B1.10" },	{ front: "обмены", back: "die Umtausche", lesson: "B1.10" },
{ front: "нуждаться", back: "benötigen", lesson: "B1.10" },	{ front: "нуждались", back: "hat benötigt", lesson: "B1.10" },
{ front: "бесплатно", back: "gratis", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "смотреть", back: "schauen", lesson: "B1.10" },	{ front: "смотрели", back: "hat geschaut", lesson: "B1.10" },
{ front: "змея / очередь", back: "die Schlange", lesson: "B1.10" },	{ front: "змеи / очереди", back: "die Schlangen", lesson: "B1.10" },
{ front: "сумочка", back: "die Handtasche", lesson: "B1.10" },	{ front: "сумочки", back: "die Handtaschen", lesson: "B1.10" },
{ front: "становиться в очередь", back: "sich anstellen", lesson: "B1.10" },	{ front: "встали в очередь", back: "hat sich angestellt", lesson: "B1.10" },
{ front: "приходить в голову", back: "einfallen", lesson: "B1.10" },	{ front: "пришло в голову", back: "ist eingefallen", lesson: "B1.10" },
{ front: "кривой / неправильный", back: "schief", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "неудача", back: "das Missgeschick", lesson: "B1.10" },	{ front: "неудачи", back: "die Missgeschicke", lesson: "B1.10" },
{ front: "транспортное средство", back: "das Fahrzeug", lesson: "B1.10" },	{ front: "транспортные средства", back: "die Fahrzeuge", lesson: "B1.10" },
{ front: "отличный", back: "ausgezeichnet", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "исправлять", back: "korrigieren", lesson: "B1.10" },	{ front: "исправили", back: "hat korrigiert", lesson: "B1.10" },
{ front: "очищать", back: "reinigen", lesson: "B1.10" },	{ front: "очистили", back: "hat gereinigt", lesson: "B1.10" },
{ front: "расти", back: "wachsen", lesson: "B1.10" },	{ front: "росли", back: "ist gewachsen", lesson: "B1.10" },
{ front: "вращаться", back: "sich drehen", lesson: "B1.10" },	{ front: "вращались", back: "hat sich gedreht", lesson: "B1.10" },
{ front: "развитие", back: "die Entwicklung", lesson: "B1.10" },	{ front: "развития", back: "die Entwicklungen", lesson: "B1.10" },
{ front: "потом / следом", back: "hinterher", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "голосовать", back: "abstimmen", lesson: "B1.10" },	{ front: "проголосовали", back: "hat abgestimmt", lesson: "B1.10" },
{ front: "перекус", back: "der Snack", lesson: "B1.10" },	{ front: "перекусы", back: "die Snacks", lesson: "B1.10" },
{ front: "исследование", back: "die Forschung", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "потребитель", back: "der Verbraucher", lesson: "B1.10" },	{ front: "потребители", back: "die Verbraucher", lesson: "B1.10" },
{ front: "потребительница", back: "die Verbraucherin", lesson: "B1.10" },	{ front: "потребительницы", back: "die Verbraucherinnen", lesson: "B1.10" },
{ front: "проект", back: "das Projekt", lesson: "B1.10" },	{ front: "проекты", back: "die Projekte", lesson: "B1.10" },
{ front: "слива", back: "die Pflaume", lesson: "B1.10" },	{ front: "сливы", back: "die Pflaumen", lesson: "B1.10" },
{ front: "абрикос", back: "die Aprikose", lesson: "B1.10" },	{ front: "абрикосы", back: "die Aprikosen", lesson: "B1.10" },
{ front: "бой", back: "der Kampf", lesson: "B1.10" },	{ front: "бои", back: "die Kämpfe", lesson: "B1.10" },
{ front: "недавно", back: "neulich", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "ручка / хватка", back: "der Griff", lesson: "B1.10" },	{ front: "ручки / хватки", back: "die Griffe", lesson: "B1.10" },
{ front: "продолжать", back: "weitermachen", lesson: "B1.10" },	{ front: "продолжили", back: "hat weitergemacht", lesson: "B1.10" },
{ front: "вор", back: "der Dieb", lesson: "B1.10" },	{ front: "воры", back: "die Diebe", lesson: "B1.10" },
{ front: "воришка", back: "die Diebin", lesson: "B1.10" },	{ front: "воришки", back: "die Diebinnen", lesson: "B1.10" },
{ front: "решительный", back: "entschlossen", lesson: "B1.10" },	{ front: "–", back: "–", lesson: "B1.10" },
{ front: "трясти", back: "schütteln", lesson: "B1.10" },	{ front: "трясли", back: "hat geschüttelt", lesson: "B1.10" },
{ front: "полотенце", back: "das Handtuch", lesson: "B1.10" },	{ front: "полотенца", back: "die Handtücher", lesson: "B1.10" },
{ front: "задерживать", back: "aufhalten", lesson: "B1.10" },	{ front: "задержали", back: "hat aufgehalten", lesson: "B1.10" },
{ front: "остаток", back: "der Rest", lesson: "B1.10" },	{ front: "остатки", back: "die Reste", lesson: "B1.10" },
{ front: "ударять", back: "schlagen", lesson: "B1.11" },	{ front: "ударили", back: "hat geschlagen", lesson: "B1.11" },
{ front: "молчать", back: "schweigen", lesson: "B1.11" },	{ front: "молчали", back: "hat geschwiegen", lesson: "B1.11" },
{ front: "обманывать", back: "betrügen", lesson: "B1.11" },	{ front: "обманули", back: "hat betrogen", lesson: "B1.11" },
{ front: "незаконный", back: "illegal", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "подавать заявление / сообщать", back: "anzeigen", lesson: "B1.11" },	{ front: "подали заявление / сообщили", back: "hat angezeigt", lesson: "B1.11" },
{ front: "наказывать", back: "bestrafen", lesson: "B1.11" },	{ front: "наказали", back: "hat bestraft", lesson: "B1.11" },
{ front: "ящик", back: "der Kasten", lesson: "B1.11" },	{ front: "ящики", back: "die Kästen", lesson: "B1.11" },
{ front: "разрушать", back: "zerstören", lesson: "B1.11" },	{ front: "разрушили", back: "hat zerstört", lesson: "B1.11" },
{ front: "доверие", back: "das Vertrauen", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "красть", back: "stehlen", lesson: "B1.11" },	{ front: "украли", back: "hat gestohlen", lesson: "B1.11" },
{ front: "уходить", back: "weggehen", lesson: "B1.11" },	{ front: "ушли", back: "ist weggegangen", lesson: "B1.11" },
{ front: "территория", back: "das Gebiet", lesson: "B1.11" },	{ front: "территории", back: "die Gebiete", lesson: "B1.11" },
{ front: "капля", back: "der Tropfen", lesson: "B1.11" },	{ front: "капли", back: "die Tropfen", lesson: "B1.11" },
{ front: "препятствовать", back: "behindern", lesson: "B1.11" },	{ front: "препятствовали", back: "hat behindert", lesson: "B1.11" },
{ front: "просьба / требование", back: "die Aufforderung", lesson: "B1.11" },	{ front: "просьбы / требования", back: "die Aufforderungen", lesson: "B1.11" },
{ front: "окончательный", back: "endgültig", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "сдаваться / бросать", back: "aufgeben", lesson: "B1.11" },	{ front: "сдались / бросили", back: "hat aufgegeben", lesson: "B1.11" },
{ front: "стараться", back: "sich bemühen", lesson: "B1.11" },	{ front: "старались", back: "hat sich bemüht", lesson: "B1.11" },
{ front: "простуда", back: "die Erkältung", lesson: "B1.11" },	{ front: "простуды", back: "die Erkältungen", lesson: "B1.11" },
{ front: "флейта", back: "die Flöte", lesson: "B1.11" },	{ front: "флейты", back: "die Flöten", lesson: "B1.11" },
{ front: "инструмент", back: "das Instrument", lesson: "B1.11" },	{ front: "инструменты", back: "die Instrumente", lesson: "B1.11" },
{ front: "крепкий / твёрдый", back: "fest", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "намечать / планировать", back: "sich vornehmen", lesson: "B1.11" },	{ front: "намечали / планировали", back: "hat sich vorgenommen", lesson: "B1.11" },
{ front: "реалистичный", back: "realistisch", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "готовый", back: "bereit", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "поколение", back: "die Generation", lesson: "B1.11" },	{ front: "поколения", back: "die Generationen", lesson: "B1.11" },
{ front: "главный вокзал", back: "der Hauptbahnhof", lesson: "B1.11" },	{ front: "главные вокзалы", back: "die Hauptbahnhöfe", lesson: "B1.11" },
{ front: "опаздывать", back: "sich verspäten", lesson: "B1.11" },	{ front: "опоздали", back: "hat sich verspätet", lesson: "B1.11" },
{ front: "круг / раунд", back: "die Runde", lesson: "B1.11" },	{ front: "круги / раунды", back: "die Runden", lesson: "B1.11" },
{ front: "экспресс (поезд)", back: "der ICE", lesson: "B1.11" },	{ front: "экспрессы", back: "die ICEs", lesson: "B1.11" },
{ front: "вагон-ресторан", back: "der Speisewagen", lesson: "B1.11" },	{ front: "вагоны-рестораны", back: "die Speisewagen", lesson: "B1.11" },
{ front: "продолжительностью в несколько минут", back: "minutenlang", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "отказываться", back: "sich weigern", lesson: "B1.11" },	{ front: "отказались", back: "hat sich geweigert", lesson: "B1.11" },
{ front: "смотреть / наблюдать", back: "zuschauen", lesson: "B1.11" },	{ front: "смотрели / наблюдали", back: "hat zugeschaut", lesson: "B1.11" },
{ front: "невыносимый", back: "unerträglich", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "исключение", back: "die Ausnahme", lesson: "B1.11" },	{ front: "исключения", back: "die Ausnahmen", lesson: "B1.11" },
{ front: "абсолютный", back: "absolut", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "однозначный", back: "eindeutig", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "ограничение скорости", back: "die Geschwindigkeitsbeschränkung", lesson: "B1.11" },	{ front: "ограничения скорости", back: "die Geschwindigkeitsbeschränkungen", lesson: "B1.11" },
{ front: "срочный", back: "eilig", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "пересекать", back: "überqueren", lesson: "B1.11" },	{ front: "пересекли", back: "hat überquert", lesson: "B1.11" },
{ front: "происходить / случаться", back: "vorkommen", lesson: "B1.11" },	{ front: "произошло / случилось", back: "ist vorgekommen", lesson: "B1.11" },
{ front: "недоразумение", back: "das Missverständnis", lesson: "B1.11" },	{ front: "недоразумения", back: "die Missverständnisse", lesson: "B1.11" },
{ front: "культурный", back: "kulturell", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "страна происхождения", back: "das Herkunftsland", lesson: "B1.11" },	{ front: "страны происхождения", back: "die Herkunftsländer", lesson: "B1.11" },
{ front: "побег", back: "die Flucht", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "автор", back: "der Autor", lesson: "B1.11" },	{ front: "авторы", back: "die Autoren", lesson: "B1.11" },
{ front: "авторша", back: "die Autorin", lesson: "B1.11" },	{ front: "авторши", back: "die Autorinnen", lesson: "B1.11" },
{ front: "вести себя", back: "sich verhalten", lesson: "B1.11" },	{ front: "вели себя", back: "hat sich verhalten", lesson: "B1.11" },
{ front: "оскорблять", back: "beleidigen", lesson: "B1.11" },	{ front: "оскорбили", back: "hat beleidigt", lesson: "B1.11" },
{ front: "утверждать", back: "behaupten", lesson: "B1.11" },	{ front: "утверждали", back: "hat behauptet", lesson: "B1.11" },
{ front: "доказывать", back: "beweisen", lesson: "B1.11" },	{ front: "доказали", back: "hat bewiesen", lesson: "B1.11" },
{ front: "любопытный", back: "neugierig", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "понятный", back: "verständlich", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "хвалить", back: "loben", lesson: "B1.11" },	{ front: "похвалили", back: "hat gelobt", lesson: "B1.11" },
{ front: "вкус", back: "der Geschmack", lesson: "B1.11" },	{ front: "вкусы", back: "die Geschmäcker", lesson: "B1.11" },
{ front: "считать", back: "zählen", lesson: "B1.11" },	{ front: "посчитали", back: "hat gezählt", lesson: "B1.11" },
{ front: "количество", back: "die Anzahl", lesson: "B1.11" },	{ front: "–", back: "–", lesson: "B1.11" },
{ front: "плакат", back: "das Plakat", lesson: "B1.11" },	{ front: "плакаты", back: "die Plakate", lesson: "B1.11" },
{ front: "необходимый", back: "notwendig", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "неправильно понять", back: "missverstehen", lesson: "B1.12" },	{ front: "неправильно поняли", back: "hat missverstanden", lesson: "B1.12" },
{ front: "пчела", back: "die Biene", lesson: "B1.12" },	{ front: "пчёлы", back: "die Bienen", lesson: "B1.12" },
{ front: "ответственный", back: "verantwortlich", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "организация", back: "die Organisation", lesson: "B1.12" },	{ front: "организации", back: "die Organisationen", lesson: "B1.12" },
{ front: "трудность", back: "die Schwierigkeit", lesson: "B1.12" },	{ front: "трудности", back: "die Schwierigkeiten", lesson: "B1.12" },
{ front: "поддерживать", back: "unterstützen", lesson: "B1.12" },	{ front: "поддержали", back: "hat unterstützt", lesson: "B1.12" },
{ front: "цирк", back: "der Zirkus", lesson: "B1.12" },	{ front: "цирки", back: "die Zirkusse", lesson: "B1.12" },
{ front: "публика", back: "das Publikum", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "исполнять / показывать", back: "aufführen", lesson: "B1.12" },	{ front: "исполнили / показали", back: "hat aufgeführt", lesson: "B1.12" },
{ front: "другой / прочий", back: "sonstig", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "няня", back: "die Tagesmutter", lesson: "B1.12" },	{ front: "няни", back: "die Tagesmütter", lesson: "B1.12" },
{ front: "посредничество / передача", back: "die Vermittlung", lesson: "B1.12" },	{ front: "посредничества / передачи", back: "die Vermittlungen", lesson: "B1.12" },
{ front: "быть на пенсии", back: "pensioniert sein", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "момент", back: "der Augenblick", lesson: "B1.12" },	{ front: "моменты", back: "die Augenblicke", lesson: "B1.12" },
{ front: "круг", back: "der Kreis", lesson: "B1.12" },	{ front: "круги", back: "die Kreise", lesson: "B1.12" },
{ front: "служба", back: "der Dienst", lesson: "B1.12" },	{ front: "службы", back: "die Dienste", lesson: "B1.12" },
{ front: "зачитывать вслух", back: "vorlesen", lesson: "B1.12" },	{ front: "зачитали вслух", back: "hat vorgelesen", lesson: "B1.12" },
{ front: "будущий", back: "zukünftig", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "уход / забота", back: "die Betreuung", lesson: "B1.12" },	{ front: "ухода / заботы", back: "die Betreuungen", lesson: "B1.12" },
{ front: "еженедельный", back: "wöchentlich", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "терпение", back: "die Geduld", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "разумный", back: "vernünftig", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "молодёжь", back: "die Jugend", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "пожарная охрана", back: "die Feuerwehr", lesson: "B1.12" },	{ front: "пожарные охраны", back: "die Feuerwehren", lesson: "B1.12" },
{ front: "почти", back: "beinahe", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "входить / вступать", back: "eintreten", lesson: "B1.12" },	{ front: "вошли / вступили", back: "ist eingetreten", lesson: "B1.12" },
{ front: "карабкаться", back: "klettern", lesson: "B1.12" },	{ front: "карабкались", back: "ist geklettert", lesson: "B1.12" },
{ front: "десятилетиями", back: "jahrzehntelang", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "пока / до тех пор", back: "solange", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "обеспечивать / заботиться", back: "versorgen", lesson: "B1.12" },	{ front: "обеспечили / позаботились", back: "hat versorgt", lesson: "B1.12" },
{ front: "интеграция", back: "die Integration", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "указывать", back: "hinweisen", lesson: "B1.12" },	{ front: "указали", back: "hat hingewiesen", lesson: "B1.12" },
{ front: "гражданская инициатива", back: "die Bürgerinitiative", lesson: "B1.12" },	{ front: "гражданские инициативы", back: "die Bürgerinitiativen", lesson: "B1.12" },
{ front: "сиделка", back: "der Babysitter", lesson: "B1.12" },	{ front: "сиделки", back: "die Babysitter", lesson: "B1.12" },
{ front: "няня", back: "die Babysitterin", lesson: "B1.12" },	{ front: "няни", back: "die Babysitterinnen", lesson: "B1.12" },
{ front: "срок годности", back: "das Verfallsdatum", lesson: "B1.12" },	{ front: "сроки годности", back: "die Verfallsdaten", lesson: "B1.12" },
{ front: "распределять", back: "verteilen", lesson: "B1.12" },	{ front: "распределили", back: "hat verteilt", lesson: "B1.12" },
{ front: "холод", back: "die Kälte", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "экологический", back: "ökologisch", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "дом престарелых", back: "das Altenheim", lesson: "B1.12" },	{ front: "дома престарелых", back: "die Altenheime", lesson: "B1.12" },
{ front: "учреждение / обстановка", back: "die Einrichtung", lesson: "B1.12" },	{ front: "учреждения / обстановки", back: "die Einrichtungen", lesson: "B1.12" },
{ front: "эгоистичный", back: "egoistisch", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "общество", back: "die Gesellschaft", lesson: "B1.12" },	{ front: "общества", back: "die Gesellschaften", lesson: "B1.12" },
{ front: "выступать за что-то", back: "sich einsetzen", lesson: "B1.12" },	{ front: "выступили", back: "hat sich eingesetzt", lesson: "B1.12" },
{ front: "охрана окружающей среды", back: "der Umweltschutz", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "философия", back: "die Philosophie", lesson: "B1.12" },	{ front: "философии", back: "die Philosophien", lesson: "B1.12" },
{ front: "клиника", back: "die Klinik", lesson: "B1.12" },	{ front: "клиники", back: "die Kliniken", lesson: "B1.12" },
{ front: "мера", back: "die Maßnahme", lesson: "B1.12" },	{ front: "меры", back: "die Maßnahmen", lesson: "B1.12" },
{ front: "толерантный", back: "tolerant", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "совесть", back: "das Gewissen", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "позавчера", back: "vorgestern", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "шерсть", back: "die Wolle", lesson: "B1.12" },	{ front: "–", back: "–", lesson: "B1.12" },
{ front: "ложь", back: "die Lüge", lesson: "B1.13" },	{ front: "лжи", back: "die Lügen", lesson: "B1.13" },
{ front: "тайный / скрытый", back: "heimlich", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "повышать квалификацию", back: "sich weiterbilden", lesson: "B1.13" },	{ front: "повышали квалификацию", back: "hat sich weitergebildet", lesson: "B1.13" },
{ front: "готовить", back: "zubereiten", lesson: "B1.13" },	{ front: "готовили", back: "hat zubereitet", lesson: "B1.13" },
{ front: "подходить", back: "passen", lesson: "B1.13" },	{ front: "подошли", back: "hat gepasst", lesson: "B1.13" },
{ front: "репортаж", back: "die Reportage", lesson: "B1.13" },	{ front: "репортажи", back: "die Reportagen", lesson: "B1.13" },
{ front: "физический", back: "körperlich", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "событие", back: "das Ereignis", lesson: "B1.13" },	{ front: "события", back: "die Ereignisse", lesson: "B1.13" },
{ front: "происходить", back: "geschehen", lesson: "B1.13" },	{ front: "произошло", back: "ist geschehen", lesson: "B1.13" },
{ front: "война", back: "der Krieg", lesson: "B1.13" },	{ front: "войны", back: "die Kriege", lesson: "B1.13" },
{ front: "бомба", back: "die Bombe", lesson: "B1.13" },	{ front: "бомбы", back: "die Bomben", lesson: "B1.13" },
{ front: "убивать", back: "töten", lesson: "B1.13" },	{ front: "убили", back: "hat getötet", lesson: "B1.13" },
{ front: "влажный", back: "feucht", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "сражаться / бороться", back: "kämpfen", lesson: "B1.13" },	{ front: "сражались / боролись", back: "hat gekämpft", lesson: "B1.13" },
{ front: "принимать", back: "empfangen", lesson: "B1.13" },	{ front: "приняли", back: "hat empfangen", lesson: "B1.13" },
{ front: "способствовать / продвигать", back: "fördern", lesson: "B1.13" },	{ front: "способствовали", back: "hat gefördert", lesson: "B1.13" },
{ front: "местный", back: "örtlich", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "мэр", back: "der Bürgermeister", lesson: "B1.13" },	{ front: "мэры", back: "die Bürgermeister", lesson: "B1.13" },
{ front: "мэрша", back: "die Bürgermeisterin", lesson: "B1.13" },	{ front: "мэрши", back: "die Bürgermeisterinnen", lesson: "B1.13" },
{ front: "прогресс", back: "der Fortschritt", lesson: "B1.13" },	{ front: "прогрессы", back: "die Fortschritte", lesson: "B1.13" },
{ front: "позволить себе", back: "sich leisten", lesson: "B1.13" },	{ front: "позволили себе", back: "hat sich geleistet", lesson: "B1.13" },
{ front: "закон", back: "das Gesetz", lesson: "B1.13" },	{ front: "законы", back: "die Gesetze", lesson: "B1.13" },
{ front: "скорость", back: "die Geschwindigkeit", lesson: "B1.13" },	{ front: "скорости", back: "die Geschwindigkeiten", lesson: "B1.13" },
{ front: "мнение", back: "die Ansicht", lesson: "B1.13" },	{ front: "мнения", back: "die Ansichten", lesson: "B1.13" },
{ front: "связь", back: "der Zusammenhang", lesson: "B1.13" },	{ front: "связи", back: "die Zusammenhänge", lesson: "B1.13" },
{ front: "противоположность", back: "der Gegensatz", lesson: "B1.13" },	{ front: "противоположности", back: "die Gegensätze", lesson: "B1.13" },
{ front: "демонстрация", back: "die Demonstration", lesson: "B1.13" },	{ front: "демонстрации", back: "die Demonstrationen", lesson: "B1.13" },
{ front: "знак", back: "das Zeichen", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "политический", back: "politisch", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "справедливый", back: "fair", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "фермер", back: "der Bauer", lesson: "B1.13" },	{ front: "фермеры", back: "die Bauern", lesson: "B1.13" },
{ front: "фермерша", back: "die Bäuerin", lesson: "B1.13" },	{ front: "фермерши", back: "die Bäuerinnen", lesson: "B1.13" },
{ front: "протестовать", back: "protestieren", lesson: "B1.13" },	{ front: "протестовали", back: "hat protestiert", lesson: "B1.13" },
{ front: "сельское хозяйство", back: "die Landwirtschaft", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "забастовка", back: "der Streik", lesson: "B1.13" },	{ front: "забастовки", back: "die Streiks", lesson: "B1.13" },
{ front: "канцлер (ФРГ)", back: "der Bundeskanzler", lesson: "B1.13" },	{ front: "канцлеры", back: "die Bundeskanzler", lesson: "B1.13" },
{ front: "канцлерша (ФРГ)", back: "die Bundeskanzlerin", lesson: "B1.13" },	{ front: "канцлерши", back: "die Bundeskanzlerinnen", lesson: "B1.13" },
{ front: "власть", back: "die Macht", lesson: "B1.13" },	{ front: "власти", back: "die Mächte", lesson: "B1.13" },
{ front: "зона", back: "die Zone", lesson: "B1.13" },	{ front: "зоны", back: "die Zonen", lesson: "B1.13" },
{ front: "официальный", back: "offiziell", lesson: "B1.13" },	{ front: "–", back: "–", lesson: "B1.13" },
{ front: "национальный", back: "national", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "следующий", back: "folgend", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "на этот раз", back: "diesmal", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "традиционный", back: "traditionell", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "выпечка", back: "das Gebäck", lesson: "B1.14" },	{ front: "выпечки", back: "die Gebäcke", lesson: "B1.14" },
{ front: "специальный", back: "speziell", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "жарить", back: "braten", lesson: "B1.14" },	{ front: "жарили", back: "hat gebraten", lesson: "B1.14" },
{ front: "мешать", back: "rühren", lesson: "B1.14" },	{ front: "мешали", back: "hat gerührt", lesson: "B1.14" },
{ front: "сушить", back: "trocknen", lesson: "B1.14" },	{ front: "сушили", back: "hat getrocknet", lesson: "B1.14" },
{ front: "дом (родной)", back: "das Zuhause", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "традиция", back: "die Tradition", lesson: "B1.14" },	{ front: "традиции", back: "die Traditionen", lesson: "B1.14" },
{ front: "местность", back: "die Gegend", lesson: "B1.14" },	{ front: "местности", back: "die Gegenden", lesson: "B1.14" },
{ front: "мобильность", back: "die Mobilität", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "миграция", back: "die Migration", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "изначальный", back: "ursprünglich", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "народ", back: "das Volk", lesson: "B1.14" },	{ front: "народы", back: "die Völker", lesson: "B1.14" },
{ front: "гражданство", back: "die Staatsangehörigkeit", lesson: "B1.14" },	{ front: "гражданства", back: "die Staatsangehörigkeiten", lesson: "B1.14" },
{ front: "профессионал", back: "der Profi", lesson: "B1.14" },	{ front: "профессионалы", back: "die Profis", lesson: "B1.14" },
{ front: "интегрировать", back: "integrieren", lesson: "B1.14" },	{ front: "интегрировали", back: "hat integriert", lesson: "B1.14" },
{ front: "упорядочивать", back: "ordnen", lesson: "B1.14" },	{ front: "упорядочили", back: "hat geordnet", lesson: "B1.14" },
{ front: "площадь", back: "die Fläche", lesson: "B1.14" },	{ front: "площади", back: "die Flächen", lesson: "B1.14" },
{ front: "житель", back: "der Einwohner", lesson: "B1.14" },	{ front: "жители", back: "die Einwohner", lesson: "B1.14" },
{ front: "континент", back: "der Kontinent", lesson: "B1.14" },	{ front: "континенты", back: "die Kontinente", lesson: "B1.14" },
{ front: "Европейский Союз", back: "die EU", lesson: "B1.14" },	{ front: "–", back: "–", lesson: "B1.14" },
{ front: "свобода", back: "die Freiheit", lesson: "B1.14" },	{ front: "свободы", back: "die Freiheiten", lesson: "B1.14" },
{ front: "демократия", back: "die Demokratie", lesson: "B1.14" },	{ front: "демократии", back: "die Demokratien", lesson: "B1.14" },
{ front: "иммигрант", back: "der Zuwanderer", lesson: "B1.14" },	{ front: "иммигранты", back: "die Zuwanderer", lesson: "B1.14" },
{ front: "происхождение", back: "die Herkunft", lesson: "B2.1" },	
{ front: "мотив", back: "das Motiv", lesson: "B2.1" },	{ front: "мотивы", back: "die Motive", lesson: "B2.1" },
{ front: "разрабатывать, проектировать", back: "entwerfen", lesson: "B2.1" },	{ front: "разработал", back: "hat entworfen", lesson: "B2.1" },
{ front: "комментировать", back: "kommentieren", lesson: "B2.1" },	{ front: "прокомментировал", back: "hat kommentiert", lesson: "B2.1" },
{ front: "альтернатива", back: "die Alternative", lesson: "B2.1" },	{ front: "альтернативы", back: "die Alternativen", lesson: "B2.1" },
{ front: "перечисление", back: "die Aufzählung", lesson: "B2.1" },	{ front: "перечисления", back: "die Aufzählungen", lesson: "B2.1" },
{ front: "ограничение", back: "die Einschränkung", lesson: "B2.1" },	{ front: "ограничения", back: "die Einschränkungen", lesson: "B2.1" },
{ front: "противоположность", back: "der Gegensatz", lesson: "B2.1" },	{ front: "противоположности", back: "die Gegensätze", lesson: "B2.1" },
{ front: "вкус", back: "der Geschmack", lesson: "B2.1" },	{ front: "вкусы", back: "die Geschmäcker", lesson: "B2.1" },
{ front: "иметь одинаковый вкус", back: "denselben Geschmack haben", lesson: "B2.1" },	{ front: "имел одинаковый вкус", back: "hat denselben Geschmack gehabt", lesson: "B2.1" },
{ front: "недоразумение", back: "das Missverständnis", lesson: "B2.1" },	{ front: "недоразумения", back: "die Missverständnisse", lesson: "B2.1" },
{ front: "новость", back: "die Neuigkeit", lesson: "B2.1" },	{ front: "новости", back: "die Neuigkeiten", lesson: "B2.1" },
{ front: "обмениваться новостями", back: "Neuigkeiten austauschen", lesson: "B2.1" },	{ front: "обменялся новостями", back: "hat Neuigkeiten ausgetauscht", lesson: "B2.1" },
{ front: "опрос", back: "die Umfrage", lesson: "B2.1" },	{ front: "опросы", back: "die Umfragen", lesson: "B2.1" },
{ front: "доверять", back: "anvertrauen", lesson: "B2.1" },	{ front: "доверил", back: "hat anvertraut", lesson: "B2.1" },
{ front: "иметь значение для кого-то", back: "jemandem etwas ausmachen", lesson: "B2.1" },	{ front: "имело значение для кого-то", back: "hat jemandem etwas ausgemacht", lesson: "B2.1" },
{ front: "обозначать, называть", back: "bezeichnen", lesson: "B2.1" },	{ front: "обозначил", back: "hat bezeichnet", lesson: "B2.1" },
{ front: "полагаться", back: "sich verlassen", lesson: "B2.1" },	{ front: "положился", back: "hat verlassen", lesson: "B2.1" },
{ front: "понимать", back: "verstehen", lesson: "B2.1" },	{ front: "понял", back: "hat verstanden", lesson: "B2.1" },
{ front: "быть в замешательстве", back: "hin- und hergerissen sein", lesson: "B2.1" },	
{ front: "терять", back: "verlieren", lesson: "B2.1" },	{ front: "потерял", back: "hat verloren", lesson: "B2.1" },
{ front: "с одной стороны — с другой стороны", back: "einerseits - andererseits", lesson: "B2.1" },	
{ front: "либо — либо", back: "entweder - oder", lesson: "B2.1" },	
{ front: "не только — но и", back: "nicht nur - sondern auch", lesson: "B2.1" },	
{ front: "как — так и", back: "sowohl - als auch", lesson: "B2.1" },	
{ front: "ни — ни", back: "weder - noch", lesson: "B2.1" },	
{ front: "хотя — но", back: "zwar - aber", lesson: "B2.1" },	
{ front: "задание, заказ", back: "der Auftrag", lesson: "B2.1" },	{ front: "задания, заказы", back: "die Aufträge", lesson: "B2.1" },
{ front: "заказывать, поручать", back: "in Auftrag geben", lesson: "B2.1" },	{ front: "поручил", back: "hat in Auftrag geben", lesson: "B2.1" },
{ front: "-", back: "-", lesson: "B2.1" },	{ front: "данные", back: "die Daten", lesson: "B2.1" },
{ front: "анализировать данные", back: "Daten auswerten", lesson: "B2.1" },	{ front: "проанализировал данные", back: "hat Daten ausgewertet", lesson: "B2.1" },
{ front: "собирать данные", back: "Daten erfassen", lesson: "B2.1" },	{ front: "собрал данные", back: "hat Daten erfasst", lesson: "B2.1" },
{ front: "население Земли", back: "die Erdbevölkerung", lesson: "B2.1" },	
{ front: "факт", back: "der Fakt", lesson: "B2.1" },	{ front: "факты", back: "die Fakten", lesson: "B2.1" },
{ front: "запрос в друзья", back: "die Freundschaftsanfrage", lesson: "B2.1" },	{ front: "запросы в друзья", back: "die Freundschaftsanfragen", lesson: "B2.1" },
{ front: "пользователь", back: "der Nutzer", lesson: "B2.1" },	{ front: "пользователи", back: "die Nutzer", lesson: "B2.1" },
{ front: "выражение, поговорка", back: "die Redensart", lesson: "B2.1" },	{ front: "выражения", back: "die Redensarten", lesson: "B2.1" },
{ front: "позволять, делать возможным", back: "ermöglichen", lesson: "B2.1" },	{ front: "сделал возможным", back: "hat ermöglicht", lesson: "B2.1" },
{ front: "быть связанным (в сети)", back: "vernetzt sein", lesson: "B2.1" },	{ front: "был связан", back: "ist vernetzt gewesen", lesson: "B2.1" },
{ front: "знать через шесть рукопожатий", back: "über sechs Ecken kennen", lesson: "B2.1" },	{ front: "знал через шесть рукопожатий", back: "hat über sechs Ecken gekannt", lesson: "B2.1" },
{ front: "тем временем, к настоящему времени", back: "mittlerweile", lesson: "B2.1" },	
{ front: "объявление", back: "die Ankündigung", lesson: "B2.1" },	{ front: "объявления", back: "die Ankündigungen", lesson: "B2.1" },
{ front: "впечатление", back: "der Eindruck", lesson: "B2.1" },	{ front: "впечатления", back: "die Eindrücke", lesson: "B2.1" },
{ front: "иметь впечатление", back: "den Eindruck haben", lesson: "B2.1" },	{ front: "имел впечатление", back: "hat den Eindruck gehabt", lesson: "B2.1" },
{ front: "дискуссионная группа", back: "die Gesprächsrunde", lesson: "B2.1" },	{ front: "дискуссионные группы", back: "die Gesprächsrunden", lesson: "B2.1" },
{ front: "советчик, справочник", back: "der Ratgeber", lesson: "B2.1" },	{ front: "советчики, справочники", back: "die Ratgeber", lesson: "B2.1" },
{ front: "путаница, замешательство", back: "die Verwirrung", lesson: "B2.1" },	
{ front: "бросаться в глаза", back: "auffallen", lesson: "B2.1" },	{ front: "бросился в глаза", back: "ist aufgefallen", lesson: "B2.1" },
{ front: "устанавливать, замечать", back: "feststellen", lesson: "B2.1" },	{ front: "установил", back: "hat festgestellt", lesson: "B2.1" },
{ front: "поверхностный", back: "oberflächlich", lesson: "B2.1" },	
{ front: "потребность", back: "das Bedürfnis", lesson: "B2.1" },	{ front: "потребности", back: "die Bedürfnisse", lesson: "B2.1" },
{ front: "отношения", back: "die Beziehung", lesson: "B2.1" },	{ front: "отношения", back: "die Beziehungen", lesson: "B2.1" },
{ front: "быть в отношениях", back: "eine Beziehung haben", lesson: "B2.1" },	{ front: "был в отношениях", back: "hat eine Beziehung gehabt", lesson: "B2.1" },
{ front: "благодарность", back: "die Dankbarkeit", lesson: "B2.1" },	
{ front: "эмоция", back: "die Emotion", lesson: "B2.1" },	{ front: "эмоции", back: "die Emotionen", lesson: "B2.1" },
{ front: "комик", back: "der Komiker", lesson: "B2.1" },	{ front: "комики", back: "die Komiker", lesson: "B2.1" },
{ front: "жизненный этап", back: "der Lebensabschnitt", lesson: "B2.1" },	{ front: "жизненные этапы", back: "die Lebensabschnitte", lesson: "B2.1" },
{ front: "фаза жизни", back: "die Lebensphase", lesson: "B2.1" },	{ front: "фазы жизни", back: "die Lebensphasen", lesson: "B2.1" },
{ front: "подросток", back: "der Teenager", lesson: "B2.1" },	{ front: "подростки", back: "die Teenager", lesson: "B2.1" },
{ front: "собираться, сходиться", back: "zusammenkommen", lesson: "B2.1" },	{ front: "сошёлся", back: "ist zusammengekommen", lesson: "B2.1" },
{ front: "быть друзьями", back: "befreundet sein", lesson: "B2.1" },	
{ front: "завязать дружбу", back: "Freundschaft schließen", lesson: "B2.1" },	{ front: "завязал дружбу", back: "hat Freundschaft geschlossen", lesson: "B2.1" },
{ front: "действие, сюжет", back: "die Handlung", lesson: "B2.1" },	{ front: "действия, сюжеты", back: "die Handlungen", lesson: "B2.1" },
{ front: "обратная связь", back: "das Feedback", lesson: "B2.1" },	{ front: "отзывы", back: "die Feedbacks", lesson: "B2.1" },
{ front: "слайд, плёнка", back: "die Folie", lesson: "B2.1" },	{ front: "слайды", back: "die Folien", lesson: "B2.1" },
{ front: "музыкальное мероприятие", back: "die Musikveranstaltung", lesson: "B2.1" },	{ front: "музыкальные мероприятия", back: "die Musikveranstaltungen", lesson: "B2.1" },
{ front: "актёр", back: "der Schauspieler", lesson: "B2.1" },	{ front: "актёры", back: "die Schauspieler", lesson: "B2.1" },
{ front: "вид спорта", back: "die Sportart", lesson: "B2.1" },	{ front: "виды спорта", back: "die Sportarten", lesson: "B2.1" },
{ front: "спортивное событие", back: "das Sportereignis", lesson: "B2.1" },	{ front: "спортивные события", back: "die Sportereignisse", lesson: "B2.1" },
{ front: "выбирать", back: "auswählen", lesson: "B2.1" },	{ front: "выбрал", back: "hat ausgewählt", lesson: "B2.1" },
{ front: "упоминать", back: "erwähnen", lesson: "B2.1" },	{ front: "упомянул", back: "hat erwähnt", lesson: "B2.1" },
{ front: "оформлять, создавать", back: "gestalten", lesson: "B2.1" },	{ front: "оформил", back: "hat gestaltet", lesson: "B2.1" },
{ front: "любящий приключения", back: "abenteuerlustig", lesson: "B2.1" },	
{ front: "необычный", back: "außergewöhnlich", lesson: "B2.1" },	
{ front: "экстравертный", back: "extrovertiert", lesson: "B2.1" },	
{ front: "готовый помочь", back: "hilfsbereit", lesson: "B2.1" },	
{ front: "интровертный", back: "introvertiert", lesson: "B2.1" },	
{ front: "задумчивый", back: "nachdenklich", lesson: "B2.1" },	
{ front: "склонный к риску", back: "risikofreudig", lesson: "B2.1" },	
{ front: "безрассудный / внимательный", back: "rücksichtslos / rücksichtsvoll", lesson: "B2.1" },	
{ front: "наглядный", back: "übersichtlich", lesson: "B2.1" },	
{ front: "анализ", back: "die Auswertung", lesson: "B2.1" },	{ front: "анализы", back: "die Auswertungen", lesson: "B2.1" },
{ front: "обратная сторона", back: "die Rückseite", lesson: "B2.1" },	{ front: "обратные стороны", back: "die Rückseiten", lesson: "B2.1" },
{ front: "лицевая сторона", back: "die Vorderseite", lesson: "B2.1" },	{ front: "лицевые стороны", back: "die Vorderseiten", lesson: "B2.1" },
{ front: "оценивать", back: "bewerten", lesson: "B2.1" },	{ front: "оценил", back: "hat bewertet", lesson: "B2.1" },
{ front: "поддерживать контакты", back: "Kontakte pflegen", lesson: "B2.1" },	{ front: "поддерживал контакты", back: "hat Kontakte gepflegt", lesson: "B2.1" },
{ front: "веник", back: "der Besen", lesson: "B2.1" },	{ front: "веники", back: "die Besen", lesson: "B2.1" },
{ front: "заботиться", back: "sorgen", lesson: "B2.1" },	{ front: "позаботился", back: "hat gesorgt", lesson: "B2.1" },
{ front: "ознакомить", back: "vertraut machen", lesson: "B2.2" },	{ front: "ознакомил", back: "hat vertraut gemacht", lesson: "B2.2" },
{ front: "ментальный, умственный", back: "mental", lesson: "B2.2" },	
{ front: "рабочий день", back: "der Arbeitstag", lesson: "B2.2" },	{ front: "рабочие дни", back: "die Arbeitstage", lesson: "B2.2" },
{ front: "ремонт", back: "die Reparatur", lesson: "B2.2" },	{ front: "ремонты", back: "die Reparaturen", lesson: "B2.2" },
{ front: "требование", back: "die Anforderung", lesson: "B2.2" },	{ front: "требования", back: "die Anforderungen", lesson: "B2.2" },
{ front: "область, сфера", back: "der Bereich", lesson: "B2.2" },	{ front: "области, сферы", back: "die Bereiche", lesson: "B2.2" },
{ front: "федеральная территория", back: "das Bundesgebiet", lesson: "B2.2" },	{ front: "федеральные территории", back: "die Bundesgebiete", lesson: "B2.2" },
{ front: "клиника", back: "die Klinik", lesson: "B2.2" },	{ front: "клиники", back: "die Kliniken", lesson: "B2.2" },
{ front: "концепция", back: "das Konzept", lesson: "B2.2" },	{ front: "концепции", back: "die Konzepte", lesson: "B2.2" },
{ front: "выставка", back: "die Messe", lesson: "B2.2" },	{ front: "выставки", back: "die Messen", lesson: "B2.2" },
{ front: "смена", back: "die Schicht", lesson: "B2.2" },	{ front: "смены", back: "die Schichten", lesson: "B2.2" },
{ front: "посменная работа", back: "der Schichtdienst", lesson: "B2.2" },	{ front: "посменные работы", back: "die Schichtdienste", lesson: "B2.2" },
{ front: "спонтанность", back: "die Spontaneität", lesson: "B2.2" },	{ front: "спонтанности", back: "die Spontaneitäten", lesson: "B2.2" },
{ front: "предприятие", back: "das Unternehmen", lesson: "B2.2" },	{ front: "предприятия", back: "die Unternehmen", lesson: "B2.2" },
{ front: "визитная карточка", back: "die Visitenkarte", lesson: "B2.2" },	{ front: "визитные карточки", back: "die Visitenkarten", lesson: "B2.2" },
{ front: "лекция", back: "die Vorlesung", lesson: "B2.2" },	{ front: "лекции", back: "die Vorlesungen", lesson: "B2.2" },
{ front: "объяснять", back: "erläutern", lesson: "B2.2" },	{ front: "объяснил", back: "hat erläutert", lesson: "B2.2" },
{ front: "исследовать", back: "forschen", lesson: "B2.2" },	{ front: "исследовал", back: "hat geforscht", lesson: "B2.2" },
{ front: "завязывать, устанавливать", back: "knüpfen", lesson: "B2.2" },	{ front: "завязал, установил", back: "hat geknüpft", lesson: "B2.2" },
{ front: "завязывать контакты", back: "Kontakte knüpfen", lesson: "B2.2" },	{ front: "завязал контакты", back: "hat Kontakte geknüpft", lesson: "B2.2" },
{ front: "быть мобильным", back: "mobil sein", lesson: "B2.2" },	{ front: "был мобильным", back: "ist mobil gewesen", lesson: "B2.2" },
{ front: "попасть (во что-то)", back: "geraten", lesson: "B2.2" },	{ front: "попал", back: "ist geraten", lesson: "B2.2" },
{ front: "иметь в распоряжении", back: "zur Verfügung haben", lesson: "B2.2" },	{ front: "имел в распоряжении", back: "hat zur Verfügung gehabt", lesson: "B2.2" },
{ front: "архив, папка", back: "die Ablage", lesson: "B2.2" },	{ front: "архивы, папки", back: "die Ablagen", lesson: "B2.2" },
{ front: "ассистент", back: "der Assistent", lesson: "B2.2" },	{ front: "ассистенты", back: "die Assistenten", lesson: "B2.2" },
{ front: "руководитель отдела", back: "der Bereichsleiter", lesson: "B2.2" },	{ front: "руководители отделов", back: "die Bereichsleiter", lesson: "B2.2" },
{ front: "конференция", back: "die Konferenz", lesson: "B2.2" },	{ front: "конференции", back: "die Konferenzen", lesson: "B2.2" },
{ front: "позиция, должность", back: "die Position", lesson: "B2.2" },	{ front: "позиции, должности", back: "die Positionen", lesson: "B2.2" },
{ front: "руководитель проекта", back: "der Projektleiter", lesson: "B2.2" },	{ front: "руководители проектов", back: "die Projektleiter", lesson: "B2.2" },
{ front: "документ", back: "die Unterlage", lesson: "B2.2" },	{ front: "документы", back: "die Unterlagen", lesson: "B2.2" },
{ front: "добиваться своего", back: "sich durchsetzen", lesson: "B2.2" },	{ front: "добился своего", back: "hat sich durchgesetzt", lesson: "B2.2" },
{ front: "доминирующий", back: "dominant", lesson: "B2.2" },	
{ front: "напористый", back: "durchsetzungsstark", lesson: "B2.2" },	
{ front: "амбициозный", back: "ehrgeizig", lesson: "B2.2" },	
{ front: "структурированный", back: "strukturiert", lesson: "B2.2" },	
{ front: "умеющий работать в команде", back: "teamfähig", lesson: "B2.2" },	
{ front: "независимый", back: "unabhängig", lesson: "B2.2" },	
{ front: "рабочая сила", back: "die Arbeitskraft", lesson: "B2.2" },	{ front: "рабочие силы", back: "die Arbeitskräfte", lesson: "B2.2" },
{ front: "эффект", back: "der Effekt", lesson: "B2.2" },	{ front: "эффекты", back: "die Effekte", lesson: "B2.2" },
{ front: "мотивация", back: "die Motivation", lesson: "B2.2" },	{ front: "мотивации", back: "die Motivationen", lesson: "B2.2" },
{ front: "репортаж", back: "die Reportage", lesson: "B2.2" },	{ front: "репортажи", back: "die Reportagen", lesson: "B2.2" },
{ front: "терапевт", back: "der Therapeut", lesson: "B2.2" },	{ front: "терапевты", back: "die Therapeuten", lesson: "B2.2" },
{ front: "изменение", back: "die Veränderung", lesson: "B2.2" },	{ front: "изменения", back: "die Veränderungen", lesson: "B2.2" },
{ front: "крах, срыв", back: "der Zusammenbruch", lesson: "B2.2" },	{ front: "крахи, срывы", back: "die Zusammenbrüche", lesson: "B2.2" },
{ front: "ощущать", back: "spüren", lesson: "B2.2" },	{ front: "ощутил", back: "hat gespürt", lesson: "B2.2" },
{ front: "быть опытным", back: "erfahren sein", lesson: "B2.2" },	
{ front: "восхищённый, восторженный", back: "begeistert", lesson: "B2.2" },	
{ front: "личность", back: "die Persönlichkeit", lesson: "B2.2" },	{ front: "личности", back: "die Persönlichkeiten", lesson: "B2.2" },
{ front: "повышение, рост", back: "die Steigerung", lesson: "B2.2" },	{ front: "повышения, росты", back: "die Steigerungen", lesson: "B2.2" },
{ front: "оборот", back: "der Umsatz", lesson: "B2.2" },	{ front: "обороты", back: "die Umsätze", lesson: "B2.2" },
{ front: "рекламная акция", back: "die Werbeaktion", lesson: "B2.2" },	{ front: "рекламные акции", back: "die Werbeaktionen", lesson: "B2.2" },
{ front: "выполнять, исполнять", back: "erfüllen", lesson: "B2.2" },	{ front: "выполнил", back: "hat erfüllt", lesson: "B2.2" },
{ front: "оставлять (после себя)", back: "hinterlassen", lesson: "B2.2" },	{ front: "оставил", back: "hat hinterlassen", lesson: "B2.2" },
{ front: "специализироваться", back: "sich spezialisieren", lesson: "B2.2" },	{ front: "специализировался", back: "hat sich spezialisiert", lesson: "B2.2" },
{ front: "утраивать", back: "verdreifachen", lesson: "B2.2" },	{ front: "утроил", back: "hat verdreifacht", lesson: "B2.2" },
{ front: "поддерживать (в работе)", back: "am Laufen halten", lesson: "B2.2" },	{ front: "поддерживал", back: "hat am Laufen gehalten", lesson: "B2.2" },
{ front: "креативный", back: "kreativ", lesson: "B2.2" },	
{ front: "непринуждённый", back: "ungezwungen", lesson: "B2.2" },	
{ front: "нестандартный", back: "unkonventionell", lesson: "B2.2" },	
{ front: "совесть", back: "das Gewissen", lesson: "B2.2" },	{ front: "совести", back: "die Gewissen", lesson: "B2.2" },
{ front: "открытость", back: "die Offenheit", lesson: "B2.2" },	
{ front: "ключевое слово", back: "das Stichwort", lesson: "B2.2" },	{ front: "ключевые слова", back: "die Stichwörter", lesson: "B2.2" },
{ front: "поставщик", back: "der Zulieferer", lesson: "B2.2" },	{ front: "поставщики", back: "die Zulieferer", lesson: "B2.2" },
{ front: "жаловаться", back: "beschweren", lesson: "B2.2" },	{ front: "пожаловался", back: "hat beschwert", lesson: "B2.2" },
{ front: "нумеровать", back: "nummerieren", lesson: "B2.2" },	{ front: "пронумеровал", back: "hat nummeriert", lesson: "B2.2" },
{ front: "забывать", back: "vergessen", lesson: "B2.2" },	{ front: "забыл", back: "hat vergessen", lesson: "B2.2" },
{ front: "сотрудничать", back: "zusammenarbeiten", lesson: "B2.2" },	{ front: "сотрудничал", back: "hat zusammengearbeitet", lesson: "B2.2" },
{ front: "вести разговор", back: "ein Gespräch führen", lesson: "B2.2" },	{ front: "вел разговор", back: "hat ein Gespräch geführt", lesson: "B2.2" },
{ front: "вытеснять, распространять", back: "vertreiben", lesson: "B2.2" },	{ front: "вытеснил, распространил", back: "hat vertrieben", lesson: "B2.2" },
{ front: "из-за, на основании", back: "aufgrund", lesson: "B2.2" },	
{ front: "подробный", back: "ausführlich", lesson: "B2.2" },	
{ front: "благодаря", back: "dank", lesson: "B2.2" },	
{ front: "по крайней мере", back: "zumindest", lesson: "B2.2" },	
{ front: "трудовой суд", back: "das Arbeitsgericht", lesson: "B2.2" },	{ front: "трудовые суды", back: "die Arbeitsgerichte", lesson: "B2.2" },
{ front: "юрист по трудовому праву", back: "der Arbeitsrechtler", lesson: "B2.2" },	{ front: "юристы по трудовому праву", back: "die Arbeitsrechtler", lesson: "B2.2" },
{ front: "волнение", back: "die Aufregung", lesson: "B2.2" },	
{ front: "сенсация", back: "das Aufsehen", lesson: "B2.2" },	
{ front: "вызвать сенсацию", back: "Aufsehen erregen", lesson: "B2.2" },	{ front: "вызвал сенсацию", back: "hat Aufsehen erregt", lesson: "B2.2" },
{ front: "совещание", back: "die Besprechung", lesson: "B2.2" },	{ front: "совещания", back: "die Besprechungen", lesson: "B2.2" },
{ front: "кража", back: "der Diebstahl", lesson: "B2.2" },	{ front: "кражи", back: "die Diebstähle", lesson: "B2.2" },
{ front: "согласие", back: "das Einverständnis", lesson: "B2.2" },	{ front: "согласия", back: "die Einverständnisse", lesson: "B2.2" },
{ front: "специализированный адвокат", back: "der Fachanwalt", lesson: "B2.2" },	{ front: "специализированные адвокаты", back: "die Fachanwälte", lesson: "B2.2" },
{ front: "разрешение", back: "die Genehmigung", lesson: "B2.2" },	{ front: "разрешения", back: "die Genehmigungen", lesson: "B2.2" },
{ front: "печенье", back: "der Keks", lesson: "B2.2" },	{ front: "печенья", back: "die Kekse", lesson: "B2.2" },
{ front: "обычай", back: "die Sitte", lesson: "B2.2" },	{ front: "обычаи", back: "die Sitten", lesson: "B2.2" },
{ front: "заряжать", back: "aufladen", lesson: "B2.2" },	{ front: "зарядил", back: "hat aufgeladen", lesson: "B2.2" },
{ front: "заниматься", back: "sich befassen", lesson: "B2.2" },	{ front: "занимался", back: "hat sich befasst", lesson: "B2.2" },
{ front: "упоминать", back: "erwähnen", lesson: "B2.2" },	{ front: "упомянул", back: "hat erwähnt", lesson: "B2.2" },
{ front: "перекусывать сладким", back: "naschen", lesson: "B2.2" },	{ front: "перекусил сладким", back: "hat genascht", lesson: "B2.2" },
{ front: "выражать сомнения", back: "Bedenken äußern", lesson: "B2.2" },	{ front: "выразил сомнения", back: "hat Bedenken geäußert", lesson: "B2.2" },
{ front: "стоить работы (кому-то)", back: "den Job kosten", lesson: "B2.2" },	{ front: "стоило работы", back: "hat den Job kostet", lesson: "B2.2" },
{ front: "явный, категорический", back: "ausdrücklich", lesson: "B2.2" },	
{ front: "сомнительный", back: "bedenklich", lesson: "B2.2" },	
{ front: "без уведомления, немедленный", back: "fristlos", lesson: "B2.2" },	
{ front: "(не)обычный", back: "(un)üblich", lesson: "B2.2" },	
{ front: "ряд, несколько", back: "eine Reihe von", lesson: "B2.2" },	
{ front: "должность, учреждение", back: "das Amt", lesson: "B2.2" },	{ front: "должности, учреждения", back: "die Ämter", lesson: "B2.2" },
{ front: "деловой партнёр", back: "der Geschäftspartner", lesson: "B2.2" },	{ front: "деловые партнёры", back: "die Geschäftspartner", lesson: "B2.2" },
{ front: "клиент", back: "der Kunde", lesson: "B2.2" },	{ front: "клиенты", back: "die Kunden", lesson: "B2.2" },
{ front: "поставщик", back: "der Lieferant", lesson: "B2.2" },	{ front: "поставщики", back: "die Lieferanten", lesson: "B2.2" },
{ front: "начальник", back: "der Vorgesetzte", lesson: "B2.2" },	{ front: "начальники", back: "die Vorgesetzten", lesson: "B2.2" },
{ front: "мир труда", back: "die Arbeitswelt", lesson: "B2.2" },	{ front: "миры труда", back: "die Arbeitswelten", lesson: "B2.2" },
{ front: "ландшафт, местность", back: "die Landschaft", lesson: "B2.2" },	{ front: "ландшафты, местности", back: "die Landschaften", lesson: "B2.2" },
{ front: "изменение, трансформация", back: "der Wandel", lesson: "B2.2" },	
{ front: "приходить в голову", back: "einfallen", lesson: "B2.2" },	{ front: "пришло в голову", back: "ist eingefallen", lesson: "B2.2" },
{ front: "готовить, подготавливать", back: "vorbereiten", lesson: "B2.3" },	{ front: "подготовил", back: "hat vorbereitet", lesson: "B2.3" },
{ front: "в наши дни", back: "heutzutage", lesson: "B2.3" },	
{ front: "устройство, прибор", back: "das Gerät", lesson: "B2.3" },	{ front: "устройства, приборы", back: "die Geräte", lesson: "B2.3" },
{ front: "средство массовой информации", back: "das Medium", lesson: "B2.3" },	{ front: "СМИ", back: "die Medien", lesson: "B2.3" },
{ front: "использование", back: "die Nutzung", lesson: "B2.3" },	{ front: "использования", back: "die Nutzungen", lesson: "B2.3" },
{ front: "пользоваться", back: "benutzen", lesson: "B2.3" },	{ front: "пользовался", back: "haben benutzt", lesson: "B2.3" },
{ front: "использовать, применять", back: "nutzen", lesson: "B2.3" },	{ front: "использовал", back: "haben genutzt", lesson: "B2.3" },
{ front: "продавщица книг", back: "die Buchhändlerin", lesson: "B2.3" },	{ front: "продавщицы книг", back: "die Buchhändlerinnen", lesson: "B2.3" },
{ front: "чтение (мероприятие)", back: "die Lesung", lesson: "B2.3" },	{ front: "чтения", back: "die Lesungen", lesson: "B2.3" },
{ front: "новинка", back: "die Neuheit", lesson: "B2.3" },	{ front: "новинки", back: "die Neuheiten", lesson: "B2.3" },
{ front: "научно-популярная книга", back: "das Sachbuch", lesson: "B2.3" },	{ front: "научно-популярные книги", back: "die Sachbücher", lesson: "B2.3" },
{ front: "место для сидения", back: "die Sitzgelegenheit", lesson: "B2.3" },	{ front: "места для сидения", back: "die Sitzgelegenheiten", lesson: "B2.3" },
{ front: "постоянный клиент", back: "der Stammkunde", lesson: "B2.3" },	{ front: "постоянные клиенты", back: "die Stammkunden", lesson: "B2.3" },
{ front: "оживлять, мотивировать", back: "animieren", lesson: "B2.3" },	{ front: "оживил, замотивировал", back: "haben animiert", lesson: "B2.3" },
{ front: "оценивать", back: "beurteilen", lesson: "B2.3" },	{ front: "оценил", back: "haben beurteilt", lesson: "B2.3" },
{ front: "болтать", back: "quatschen", lesson: "B2.3" },	{ front: "поболтал", back: "haben gequatscht", lesson: "B2.3" },
{ front: "быть принятым", back: "angenommen werden", lesson: "B2.3" },	{ front: "был принят", back: "sein angenommen worden", lesson: "B2.3" },
{ front: "соблазнительный", back: "verführerisch", lesson: "B2.3" },	
{ front: "запись, приём", back: "die Aufnahme", lesson: "B2.3" },	{ front: "записи, приёмы", back: "die Aufnahmen", lesson: "B2.3" },
{ front: "аэрофотосъёмка", back: "die Luftaufnahme", lesson: "B2.3" },	{ front: "аэрофотосъёмки", back: "die Luftaufnahmen", lesson: "B2.3" },
{ front: "фотоальбом", back: "der Bildband", lesson: "B2.3" },	{ front: "фотоальбомы", back: "die Bildbände", lesson: "B2.3" },
{ front: "книжный червь", back: "die Leseratte", lesson: "B2.3" },	{ front: "книжные черви", back: "die Leseratten", lesson: "B2.3" },
{ front: "трогать, касаться", back: "anrühren", lesson: "B2.3" },	{ front: "тронул, коснулся", back: "haben angerührt", lesson: "B2.3" },
{ front: "хватать, брать", back: "greifen", lesson: "B2.3" },	{ front: "схватил", back: "haben gegriffen", lesson: "B2.3" },
{ front: "быть", back: "sein", lesson: "B2.3" },	{ front: "был", back: "sein gewesen", lesson: "B2.3" },
{ front: "тираж", back: "die Auflage", lesson: "B2.3" },	{ front: "тиражи", back: "die Auflagen", lesson: "B2.3" },
{ front: "опасение", back: "die Befürchtung", lesson: "B2.3" },	{ front: "опасения", back: "die Befürchtungen", lesson: "B2.3" },
{ front: "отрасль", back: "die Branche", lesson: "B2.3" },	{ front: "отрасли", back: "die Branchen", lesson: "B2.3" },
{ front: "событие, происходящее", back: "das Geschehen", lesson: "B2.3" },	
{ front: "сверстник / сверстница", back: "der / die Gleichaltrige", lesson: "B2.3" },	{ front: "сверстники", back: "die Gleichaltrigen", lesson: "B2.3" },
{ front: "подросток, юноша / девушка", back: "der / die Heranwachsende", lesson: "B2.3" },	{ front: "подростки", back: "die Heranwachsenden", lesson: "B2.3" },
{ front: "новостной журнал", back: "das Nachrichtenmagazin", lesson: "B2.3" },	{ front: "новостные журналы", back: "die Nachrichtenmagazine", lesson: "B2.3" },
{ front: "популярность", back: "die Popularität", lesson: "B2.3" },	
{ front: "печатное издание", back: "das Printmedium", lesson: "B2.3" },	{ front: "печатные издания", back: "die Printmedien", lesson: "B2.3" },
{ front: "повестка дня", back: "die Tagesordnung", lesson: "B2.3" },	{ front: "повестки дня", back: "die Tagesordnungen", lesson: "B2.3" },
{ front: "быть", back: "sein", lesson: "B2.3" },	{ front: "был", back: "sein gewesen", lesson: "B2.3" },
{ front: "пример для подражания", back: "das Vorbild", lesson: "B2.3" },	{ front: "примеры для подражания", back: "die Vorbilder", lesson: "B2.3" },
{ front: "расширять, развивать", back: "ausbauen", lesson: "B2.3" },	{ front: "расширил, развил", back: "haben ausgebaut", lesson: "B2.3" },
{ front: "имитировать", back: "imitieren", lesson: "B2.3" },	{ front: "имитировал", back: "haben imitiert", lesson: "B2.3" },
{ front: "формировать, оказывать влияние", back: "prägen", lesson: "B2.3" },	{ front: "сформировал, оказал влияние", back: "haben geprägt", lesson: "B2.3" },
{ front: "ценить, оценивать", back: "schätzen", lesson: "B2.3" },	{ front: "оценил, ценил", back: "haben geschätzt", lesson: "B2.3" },
{ front: "показывать", back: "zeigen", lesson: "B2.3" },	{ front: "показал", back: "haben gezeigt", lesson: "B2.3" },
{ front: "сокращающийся, спад", back: "rückläufig", lesson: "B2.3" },	
{ front: "в этой стране, здесь", back: "hierzulande", lesson: "B2.3" },	
{ front: "возрастающий, всё более", back: "zunehmend", lesson: "B2.3" },	
{ front: "документальный фильм", back: "der Dokumentarfilm", lesson: "B2.3" },	{ front: "документальные фильмы", back: "die Dokumentarfilme", lesson: "B2.3" },
{ front: "фон, задний план", back: "der Hintergrund", lesson: "B2.3" },	{ front: "фоны, задние планы", back: "die Hintergründe", lesson: "B2.3" },
{ front: "фильм ужасов", back: "der Horrorfilm", lesson: "B2.3" },	{ front: "фильмы ужасов", back: "die Horrorfilme", lesson: "B2.3" },
{ front: "комедия", back: "die Komödie", lesson: "B2.3" },	{ front: "комедии", back: "die Komödien", lesson: "B2.3" },
{ front: "экранизация литературы", back: "die Literaturverfilmung", lesson: "B2.3" },	{ front: "экранизации литературы", back: "die Literaturverfilmungen", lesson: "B2.3" },
{ front: "знаменитость", back: "der / die Prominente", lesson: "B2.3" },	{ front: "знаменитости", back: "die Prominenten", lesson: "B2.3" },
{ front: "сценарий", back: "das Skript", lesson: "B2.3" },	{ front: "сценарии", back: "die Skripte", lesson: "B2.3" },
{ front: "шаблон, образец", back: "die Vorlage", lesson: "B2.3" },	{ front: "шаблоны, образцы", back: "die Vorlagen", lesson: "B2.3" },
{ front: "выводить, происходить", back: "ableiten", lesson: "B2.3" },	{ front: "вывел, происходил", back: "haben abgeleitet", lesson: "B2.3" },
{ front: "разнообразный", back: "abwechslungsreich", lesson: "B2.3" },	
{ front: "аутентичный", back: "authentisch", lesson: "B2.3" },	
{ front: "насыщенный изображениями", back: "bilderreich", lesson: "B2.3" },	
{ front: "жуткий", back: "gruselig", lesson: "B2.3" },	
{ front: "с малым количеством действия", back: "handlungsarm", lesson: "B2.3" },	
{ front: "с юмором", back: "humorvoll", lesson: "B2.3" },	
{ front: "поучительный", back: "lehrreich", lesson: "B2.3" },	
{ front: "сенсационный, кричащий", back: "reißerisch", lesson: "B2.3" },	
{ front: "(не)фактический", back: "(un)sachlich", lesson: "B2.3" },	
{ front: "бурный", back: "turbulent", lesson: "B2.3" },	
{ front: "развлекательный", back: "unterhaltsam", lesson: "B2.3" },	
{ front: "забавный", back: "witzig", lesson: "B2.3" },	
{ front: "жанр фильма", back: "das Filmgenre", lesson: "B2.3" },	{ front: "жанры фильмов", back: "die Filmgenres", lesson: "B2.3" },
{ front: "комментарий", back: "der Kommentar", lesson: "B2.3" },	{ front: "комментарии", back: "die Kommentare", lesson: "B2.3" },
{ front: "предпринимать", back: "unternehmen", lesson: "B2.3" },	{ front: "предпринял", back: "haben unternommen", lesson: "B2.3" },
{ front: "чуткий, эмпатичный", back: "einfühlsam", lesson: "B2.3" },	
{ front: "большой экран", back: "die Großleinwand", lesson: "B2.3" },	{ front: "большие экраны", back: "die Großleinwände", lesson: "B2.3" },
{ front: "слабость", back: "die Schwäche", lesson: "B2.3" },	{ front: "слабости", back: "die Schwächen", lesson: "B2.3" },
{ front: "выделяться", back: "sich abheben", lesson: "B2.3" },	{ front: "выделился", back: "haben abgehoben", lesson: "B2.3" },
{ front: "приобретать", back: "anschaffen", lesson: "B2.3" },	{ front: "приобрёл", back: "haben angeschafft", lesson: "B2.3" },
{ front: "стоять за чем-то", back: "dahinterstecken", lesson: "B2.3" },	{ front: "стоял за чем-то", back: "haben dahintergesteckt", lesson: "B2.3" },
{ front: "уставиться", back: "starren", lesson: "B2.3" },	{ front: "уставился", back: "haben gestarrt", lesson: "B2.3" },
{ front: "следить, преследовать", back: "verfolgen", lesson: "B2.3" },	{ front: "следил, преследовал", back: "haben verfolgt", lesson: "B2.3" },
{ front: "замечательный", back: "bemerkenswert", lesson: "B2.3" },	
{ front: "великолепный", back: "großartig", lesson: "B2.3" },	
{ front: "кабель", back: "das Kabel", lesson: "B2.3" },	
{ front: "смена", back: "die Schicht", lesson: "B2.3" },	{ front: "смены", back: "die Schichten", lesson: "B2.3" },
{ front: "опоздание", back: "die Verspätung", lesson: "B2.3" },	{ front: "опоздания", back: "die Verspätungen", lesson: "B2.3" },
{ front: "обменивать", back: "tauschen", lesson: "B2.3" },	{ front: "обменял", back: "haben getauscht", lesson: "B2.3" },
{ front: "сложность", back: "die Komplexität", lesson: "B2.3" },	
{ front: "логика", back: "die Logik", lesson: "B2.3" },	
{ front: "сообщение", back: "die Meldung", lesson: "B2.3" },	{ front: "сообщения", back: "die Meldungen", lesson: "B2.3" },
{ front: "источник", back: "die Quelle", lesson: "B2.3" },	{ front: "источники", back: "die Quellen", lesson: "B2.3" },
{ front: "объяснять", back: "erläutern", lesson: "B2.3" },	{ front: "объяснил", back: "haben erläutert", lesson: "B2.3" },
{ front: "привлекательный", back: "ansprechend", lesson: "B2.3" },	
{ front: "требовательный, сложный", back: "anspruchsvoll", lesson: "B2.3" },	
{ front: "иллюстрированный", back: "bebildert", lesson: "B2.3" },	
{ front: "наглядный, структурированный", back: "übersichtlich", lesson: "B2.3" }
];

export default vocabulary;
