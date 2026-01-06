const vocabulary = [
{ front: "eu", back: "ich", lesson: "A1.1" },	
{ front: "chamar‑se / chamar", back: "heißen", lesson: "A1.1" },	{ front: "ter se chamado / ter chamado", back: "haben geheißen", lesson: "A1.7" },
{ front: "o nome", back: "der Name", lesson: "A1.1" },	{ front: "os nomes", back: "die Namen", lesson: "A1.1" },
{ front: "vir", back: "kommen", lesson: "A1.1" },	{ front: "ter vindo / ter chegado", back: "sein gekommen", lesson: "A1.7" },
{ front: "a Alemanha", back: "das Deutschland", lesson: "A1.1" },	
{ front: "falar", back: "sprechen", lesson: "A1.1" },	{ front: "ter falado", back: "haben gesprochen", lesson: "A1.7" },
{ front: "o alemão", back: "das Deutsch", lesson: "A1.1" },	
{ front: "e", back: "und", lesson: "A1.1" },	
{ front: "um pouco", back: "ein bisschen", lesson: "A1.1" },	
{ front: "bom dia", back: "guten Tag", lesson: "A1.1" },	
{ front: "olá", back: "hallo", lesson: "A1.1" },	
{ front: "adeus / até logo", back: "auf Wiedersehen", lesson: "A1.1" },	
{ front: "tchau / adeus", back: "tschüs", lesson: "A1.1" },	
{ front: "o senhor", back: "der Herr", lesson: "A1.1" },	{ front: "os senhores", back: "die Herren", lesson: "A1.1" },
{ front: "a criança / a criança / o(a) filho(a) (dependendo do contexto)", back: "das Kind", lesson: "A1.1" },	{ front: "as crianças / os filhos(as)", back: "die Kinder", lesson: "A1.1" },
{ front: "boa noite (usado para “boa noite”, “boa tarde ao entardecer”)", back: "guten Abend", lesson: "A1.1" },	
{ front: "a senhora / a dama", back: "die Dame", lesson: "A1.1" },	{ front: "as senhoras / as damas", back: "die Damen", lesson: "A1.1" },
{ front: "bem‑vindo(a)", back: "willkommen", lesson: "A1.1" },	
{ front: "junto a / em / com (depende do contexto)", back: "bei", lesson: "A1.1" },	
{ front: "a música", back: "die Musik", lesson: "A1.1" },	
{ front: "internacional", back: "international", lesson: "A1.1" },	
{ front: "bom dia (usado de manhã)", back: "guten Morgen", lesson: "A1.1" },	
{ front: "a mulher / a senhora", back: "die Frau", lesson: "A1.1" },	{ front: "as mulheres / as senhoras", back: "die Frauen", lesson: "A1.1" },
{ front: "agradecer", back: "danken", lesson: "A1.1" },	{ front: "ter agradecido", back: "haben gedankt", lesson: "A1.7" },
{ front: "boa noite", back: "gute Nacht", lesson: "A1.1" },	
{ front: "o papai / o pai (informal)", back: "der Papa", lesson: "A1.1" },	{ front: "os papais / os pais (informal)", back: "die Papas", lesson: "A1.1" },
{ front: "ser / estar", back: "sein", lesson: "A1.1" },	{ front: "ter sido / ter estado", back: "gewesen", lesson: "A1.7" },
{ front: "a desculpa / o perdão / perdão", back: "die Entschuldigung", lesson: "A1.1" },	{ front: "as desculpas / os perdões", back: "die Entschuldigungen", lesson: "A1.1" },
{ front: "como / quão", back: "wie", lesson: "A1.1" },	
{ front: "ela / eles / elas / você (formal)", back: "sie", lesson: "A1.1" },	
{ front: "quem", back: "wer", lesson: "A1.1" },	
{ front: "sim", back: "ja", lesson: "A1.1" },	
{ front: "não", back: "nein", lesson: "A1.1" },	
{ front: "de onde", back: "woher", lesson: "A1.1" },	
{ front: "de / do / da", back: "aus", lesson: "A1.1" },	
{ front: "tu / você (informal)", back: "du", lesson: "A1.1" },	
{ front: "Áustria", back: "Österreich", lesson: "A1.1" },	
{ front: "a Suíça", back: "die Schweiz", lesson: "A1.1" },	
{ front: "ahá / ah", back: "aha", lesson: "A1.1" },	
{ front: "ótimo / maravilhoso", back: "toll", lesson: "A1.1" },	
{ front: "interessante", back: "interessant", lesson: "A1.1" },	
{ front: "o que / qual", back: "was", lesson: "A1.1" },	
{ front: "também", back: "auch", lesson: "A1.1" },	
{ front: "a língua / a linguagem", back: "die Sprache", lesson: "A1.1" },	{ front: "as línguas / as linguagens", back: "die Sprachen", lesson: "A1.1" },
{ front: "a letra", back: "der Buchstabe", lesson: "A1.1" },	{ front: "as letras", back: "die Buchstaben", lesson: "A1.1" },
{ front: "o alfabeto", back: "das Alphabet", lesson: "A1.1" },	
{ front: "como? / desculpe? / diga?", back: "wie bitte?", lesson: "A1.1" },	
{ front: "soletrar", back: "buchstabieren", lesson: "A1.1" },	{ front: "ter soletrado", back: "haben buchstabiert", lesson: "A1.7" },
{ front: "por favor / de nada (dependendo do contexto)", back: "bitte", lesson: "A1.1" },	
{ front: "a empresa / a firma", back: "die Firma", lesson: "A1.1" },	{ front: "as empresas / as firmas", back: "die Firmen", lesson: "A1.1" },
{ front: "muito obrigado(a)", back: "vielen Dank", lesson: "A1.1" },	
{ front: "até logo (ao telefone)", back: "auf Wiederhören", lesson: "A1.1" },	
{ front: "o endereço", back: "die Adresse", lesson: "A1.1" },	{ front: "os endereços", back: "die Adressen", lesson: "A1.1" },
{ front: "o cartão de visita", back: "die Visitenkarte", lesson: "A1.1" },	{ front: "os cartões de visita", back: "die Visitenkarten", lesson: "A1.1" },
{ front: "o prenome / o nome / o nome de batismo", back: "der Vorname", lesson: "A1.1" },	{ front: "os prenomes / os nomes de batismo", back: "die Vornamen", lesson: "A1.1" },
{ front: "o sobrenome / o apelido de família", back: "der Familienname", lesson: "A1.1" },	{ front: "os sobrenomes", back: "die Familiennamen", lesson: "A1.1" },
{ front: "a rua", back: "die Straße", lesson: "A1.1" },	{ front: "as ruas", back: "die Straßen", lesson: "A1.1" },
{ front: "a cidade", back: "die Stadt", lesson: "A1.1" },	{ front: "as cidades", back: "die Städte", lesson: "A1.1" },
{ front: "o país", back: "das Land", lesson: "A1.1" },	{ front: "os países", back: "die Länder", lesson: "A1.1" },
{ front: "o e‑mail / o correio eletrônico", back: "die E-Mail", lesson: "A1.1" },	{ front: "os e‑mails / os correios eletrônicos", back: "die E-Mails", lesson: "A1.1" },
{ front: "o telefone", back: "das Telefon", lesson: "A1.1" },	{ front: "os telefones", back: "die Telefone", lesson: "A1.1" },
{ front: "o formulário", back: "das Formular", lesson: "A1.1" },	{ front: "os formulários", back: "die Formulare", lesson: "A1.1" },
{ front: "o curso", back: "der Kurs", lesson: "A1.1" },	{ front: "os cursos", back: "die Kurse", lesson: "A1.1" },
{ front: "a língua estrangeira", back: "die Fremdsprache", lesson: "A1.1" },	{ front: "as línguas estrangeiras", back: "die Fremdsprachen", lesson: "A1.1" },
{ front: "a inscrição / o registro", back: "die Anmeldung", lesson: "A1.1" },	{ front: "as inscrições / os registros", back: "die Anmeldungen", lesson: "A1.1" },
{ front: "o código postal / o CEP", back: "die Postleitzahl", lesson: "A1.1" },	{ front: "os códigos postais / os CEPs", back: "die Postleitzahlen", lesson: "A1.1" },
{ front: "aprenda palavras (formal “você aprenda palavras”)", back: "lernen Sie Wörter", lesson: "A1.1" },	
{ front: "turco / turca", back: "türkisch", lesson: "A1.1" },	
{ front: "alemão / alemã", back: "deutsch", lesson: "A1.1" },	
{ front: "Polônia", back: "Polen", lesson: "A1.1" },	
{ front: "polonês / polonesa", back: "polnisch", lesson: "A1.1" },	
{ front: "a Turquia", back: "die Türkei", lesson: "A1.1" },	
{ front: "Espanha", back: "Spanien", lesson: "A1.1" },	
{ front: "Hungria", back: "Ungarn", lesson: "A1.1" },	
{ front: "Alemanha", back: "Deutschland", lesson: "A1.1" },	
{ front: "Áustria", back: "Österreich", lesson: "A1.1" },	
{ front: "turco / turca", back: "türkisch", lesson: "A1.1" },	
{ front: "espanhol / espanhola", back: "spanisch", lesson: "A1.1" },	
{ front: "húngaro / húngara", back: "ungarisch", lesson: "A1.1" },	
{ front: "alemão / alemã", back: "deutsch", lesson: "A1.1" },	
{ front: "a Suíça", back: "die Schweiz", lesson: "A1.1" },	
{ front: "Romênia", back: "Rumänien", lesson: "A1.1" },	
{ front: "Síria", back: "Syrien", lesson: "A1.1" },	
{ front: "Bulgária", back: "Bulgarien", lesson: "A1.1" },	
{ front: "Itália", back: "Italien", lesson: "A1.1" },	
{ front: "Grécia", back: "Griechenland", lesson: "A1.1" },	
{ front: "romeno / romena", back: "rumänisch", lesson: "A1.1" },	
{ front: "árabe", back: "arabisch", lesson: "A1.1" },	
{ front: "búlgaro / búlgara", back: "bulgarisch", lesson: "A1.1" },	
{ front: "italiano / italiana", back: "italienisch", lesson: "A1.1" },	
{ front: "grego / grega", back: "griechisch", lesson: "A1.1" },	
{ front: "aprender", back: "lernen", lesson: "A1.2" },	{ front: "ter aprendido", back: "haben gelernt", lesson: "A1.7" },
{ front: "o parque", back: "der Park", lesson: "A1.2" },	{ front: "os parques", back: "die Parks", lesson: "A1.2" },
{ front: "a pausa", back: "die Pause", lesson: "A1.2" },	{ front: "as pausas", back: "die Pausen", lesson: "A1.2" },
{ front: "a família", back: "die Familie", lesson: "A1.2" },	{ front: "as famílias", back: "die Familien", lesson: "A1.2" },
{ front: "o pai", back: "der Vater", lesson: "A1.2" },	{ front: "os pais", back: "die Väter", lesson: "A1.2" },
{ front: "os avós", back: "die Großeltern", lesson: "A1.2" },	
{ front: "a mãe", back: "die Mutter", lesson: "A1.2" },	{ front: "as mães", back: "die Mütter", lesson: "A1.2" },
{ front: "os pais / os progenitores", back: "die Eltern", lesson: "A1.2" },	
{ front: "o irmão", back: "der Bruder", lesson: "A1.2" },	{ front: "os irmãos", back: "die Brüder", lesson: "A1.2" },
{ front: "os irmãos / as irmãs", back: "die Geschwister", lesson: "A1.2" },	
{ front: "o ano", back: "das Jahr", lesson: "A1.2" },	{ front: "os anos", back: "die Jahre", lesson: "A1.2" },
{ front: "viver / morar", back: "leben", lesson: "A1.2" },	{ front: "ter vivido / ter morado", back: "haben gelebt", lesson: "A1.7" },
{ front: "em / dentro", back: "in", lesson: "A1.2" },	
{ front: "bom / boa", back: "gut", lesson: "A1.2" },	
{ front: "ótimo / ótima / super", back: "super", lesson: "A1.2" },	
{ front: "bem… / pois…", back: "na ja", lesson: "A1.2" },	
{ front: "ah / ai", back: "ach", lesson: "A1.2" },	
{ front: "tão / assim", back: "so", lesson: "A1.2" },	
{ front: "muito / muito (intensificador)", back: "sehr", lesson: "A1.2" },	
{ front: "o neto", back: "der Enkel", lesson: "A1.2" },	{ front: "os netos", back: "die Enkel", lesson: "A1.2" },
{ front: "a neta", back: "die Enkelin", lesson: "A1.2" },	{ front: "as netas", back: "die Enkelinnen", lesson: "A1.2" },
{ front: "a filha", back: "die Tochter", lesson: "A1.2" },	{ front: "as filhas", back: "die Töchter", lesson: "A1.2" },
{ front: "o filho", back: "der Sohn", lesson: "A1.2" },	{ front: "os filhos", back: "die Söhne", lesson: "A1.2" },
{ front: "a irmã", back: "die Schwester", lesson: "A1.2" },	{ front: "as irmãs", back: "die Schwestern", lesson: "A1.2" },
{ front: "a vovó / a avó (informal)", back: "die Oma", lesson: "A1.2" },	{ front: "as vovós / as avós", back: "die Omas", lesson: "A1.2" },
{ front: "o homem / o marido", back: "der Mann", lesson: "A1.2" },	{ front: "os homens / os maridos", back: "die Männer", lesson: "A1.2" },
{ front: "o vovô / o avô (informal)", back: "der Opa", lesson: "A1.2" },	{ front: "os vovôs / os avôs", back: "die Opas", lesson: "A1.2" },
{ front: "teu / sua (informal)", back: "dein", lesson: "A1.2" },	
{ front: "meu / minha", back: "mein", lesson: "A1.2" },	
{ front: "seu / dela / deles / delas / sua (formal)", back: "ihr", lesson: "A1.2" },	
{ front: "o esposo / o marido", back: "der Ehemann", lesson: "A1.2" },	{ front: "os esposos / os maridos", back: "die Ehemänner", lesson: "A1.2" },
{ front: "a esposa / a mulher", back: "die Ehefrau", lesson: "A1.2" },	{ front: "as esposas / as mulheres", back: "die Ehefrauen", lesson: "A1.2" },
{ front: "errado / equivocada", back: "falsch", lesson: "A1.2" },	
{ front: "ela / elas / eles / você (formal)", back: "sie", lesson: "A1.2" },	
{ front: "junto / juntos / juntas", back: "zusammen", lesson: "A1.2" },	
{ front: "ela / elas / eles / você (formal)", back: "sie", lesson: "A1.2" },	
{ front: "divorciado / divorciada", back: "geschieden", lesson: "A1.2" },	
{ front: "ele", back: "er", lesson: "A1.2" },	
{ front: "morar / residir", back: "wohnen", lesson: "A1.2" },	{ front: "ter morado / ter residido", back: "haben gewohnt", lesson: "A1.7" },
{ front: "agora", back: "jetzt", lesson: "A1.2" },	
{ front: "seu / de vocês / dela / deles", back: "ihr", lesson: "A1.2" },	
{ front: "nós", back: "wir", lesson: "A1.2" },	
{ front: "o número / a cifra", back: "die Zahl", lesson: "A1.2" },	{ front: "os números / as cifras", back: "die Zahlen", lesson: "A1.2" },
{ front: "onde", back: "wo", lesson: "A1.2" },	
{ front: "nascido / nascida", back: "geboren", lesson: "A1.2" },	
{ front: "o número", back: "die Nummer", lesson: "A1.2" },	{ front: "os números", back: "die Nummern", lesson: "A1.2" },
{ front: "casado / casada", back: "verheiratet", lesson: "A1.2" },	
{ front: "ter / haver", back: "haben", lesson: "A1.2" },	{ front: "ter tido", back: "haben gehabt", lesson: "A1.7" },
{ front: "o local de nascimento", back: "der Geburtsort", lesson: "A1.2" },	{ front: "os locais de nascimento", back: "die Geburtsorte", lesson: "A1.2" },
{ front: "o local de residência", back: "der Wohnort", lesson: "A1.2" },	{ front: "os locais de residência", back: "die Wohnorte", lesson: "A1.2" },
{ front: "o estado civil", back: "der Familienstand", lesson: "A1.2" },	
{ front: "solteiro / solteira", back: "ledig", lesson: "A1.2" },	
{ front: "viúvo / viúva", back: "verwitwet", lesson: "A1.2" },	
{ front: "a idade", back: "das Alter", lesson: "A1.2" },	{ front: "as idades", back: "die Alter", lesson: "A1.2" },
{ front: "o norte", back: "der Norden", lesson: "A1.2" },	
{ front: "o leste / o oriente", back: "der Osten", lesson: "A1.2" },	
{ front: "o sul", back: "der Süden", lesson: "A1.2" },	
{ front: "o oeste", back: "der Westen", lesson: "A1.2" },	
{ front: "a capital", back: "die Hauptstadt", lesson: "A1.2" },	{ front: "as capitais", back: "die Hauptstädte", lesson: "A1.2" },
{ front: "Sul", back: "Süd", lesson: "A1.2" },	
{ front: "Norte", back: "Nord", lesson: "A1.2" },	
{ front: "o professor / o mestre", back: "der Lehrer", lesson: "A1.2" },	{ front: "os professores / os mestres", back: "die Lehrer", lesson: "A1.2" },
{ front: "a professora / a mestra", back: "die Lehrerin", lesson: "A1.2" },	{ front: "as professoras / as mestras", back: "die Lehrerinnen", lesson: "A1.2" },
{ front: "o alemão", back: "der Deutsche", lesson: "A1.2" },	{ front: "os alemães", back: "die Deutschen", lesson: "A1.2" },
{ front: "a alemã", back: "die Deutsche", lesson: "A1.2" },	{ front: "as alemãs / os alemães", back: "die Deutschen", lesson: "A1.2" },
{ front: "a banana", back: "die Banane", lesson: "A1.3" },	{ front: "as bananas", back: "die Bananen", lesson: "A1.3" },
{ front: "a manteiga", back: "die Butter", lesson: "A1.3" },	
{ front: "o ovo", back: "das Ei", lesson: "A1.3" },	{ front: "os ovos", back: "die Eier", lesson: "A1.3" },
{ front: "a farinha", back: "das Mehl", lesson: "A1.3" },	
{ front: "o leite", back: "die Milch", lesson: "A1.3" },	
{ front: "o açúcar", back: "der Zucker", lesson: "A1.3" },	
{ front: "a panqueca", back: "der Pfannkuchen", lesson: "A1.3" },	{ front: "as panquecas", back: "die Pfannkuchen", lesson: "A1.3" },
{ front: "o chocolate", back: "die Schokolade", lesson: "A1.3" },	
{ front: "precisar", back: "brauchen", lesson: "A1.3" },	{ front: "ter precisado", back: "haben gebraucht", lesson: "A1.7" },
{ front: "comprar", back: "kaufen", lesson: "A1.3" },	{ front: "ter comprado", back: "haben gekauft", lesson: "A1.7" },
{ front: "a fome", back: "der Hunger", lesson: "A1.3" },	
{ front: "o euro", back: "der Euro", lesson: "A1.3" },	
{ front: "a carne", back: "das Fleisch", lesson: "A1.3" },	
{ front: "a cerveja", back: "das Bier", lesson: "A1.3" },	
{ front: "o queijo", back: "der Käse", lesson: "A1.3" },	
{ front: "o sal", back: "das Salz", lesson: "A1.3" },	
{ front: "o chá", back: "der Tee", lesson: "A1.3" },	{ front: "os chás", back: "die Tees", lesson: "A1.3" },
{ front: "o pão", back: "das Brot", lesson: "A1.3" },	{ front: "os pães", back: "die Brote", lesson: "A1.3" },
{ front: "o vinho", back: "der Wein", lesson: "A1.3" },	{ front: "os vinhos", back: "die Weine", lesson: "A1.3" },
{ front: "a água mineral", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "o arroz", back: "der Reis", lesson: "A1.3" },	
{ front: "o peixe", back: "der Fisch", lesson: "A1.3" },	{ front: "os peixes", back: "die Fische", lesson: "A1.3" },
{ front: "um / uma", back: "ein", lesson: "A1.3" },	
{ front: "nenhum / nenhuma", back: "kein", lesson: "A1.3" },	
{ front: "a maçã", back: "der Apfel", lesson: "A1.3" },	{ front: "as maçãs", back: "die Äpfel", lesson: "A1.3" },
{ front: "a laranja", back: "die Orange", lesson: "A1.3" },	{ front: "as laranjas", back: "die Orangen", lesson: "A1.3" },
{ front: "o bolo / o doce", back: "der Kuchen", lesson: "A1.3" },	{ front: "os bolos / os doces", back: "die Kuchen", lesson: "A1.3" },
{ front: "o café", back: "der Kaffee", lesson: "A1.3" },	{ front: "os cafés", back: "die Kaffees", lesson: "A1.3" },
{ front: "o suco", back: "der Saft", lesson: "A1.3" },	{ front: "os sucos", back: "die Säfte", lesson: "A1.3" },
{ front: "o pãozinho / o pão (pequeno)", back: "das Brötchen", lesson: "A1.3" },	{ front: "os pãezinhos", back: "die Brötchen", lesson: "A1.3" },
{ front: "a salsicha (pequena)", back: "das Würstchen", lesson: "A1.3" },	{ front: "as salsichas", back: "die Würstchen", lesson: "A1.3" },
{ front: "a pêra", back: "die Birne", lesson: "A1.3" },	{ front: "as pêras", back: "die Birnen", lesson: "A1.3" },
{ front: "o tomate", back: "die Tomate", lesson: "A1.3" },	{ front: "os tomates", back: "die Tomaten", lesson: "A1.3" },
{ front: "a batata", back: "die Kartoffel", lesson: "A1.3" },	{ front: "as batatas", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "o iogurte", back: "der Joghurt / das Joghurt", lesson: "A1.3" },	{ front: "os iogurtes", back: "die Joghurts", lesson: "A1.3" },
{ front: "a cebola", back: "die Zwiebel", lesson: "A1.3" },	{ front: "as cebolas", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "a estante / a prateleira", back: "das Regal", lesson: "A1.3" },	{ front: "as estantes / as prateleiras", back: "die Regale", lesson: "A1.3" },
{ front: "o preço", back: "der Preis", lesson: "A1.3" },	{ front: "os preços", back: "die Preise", lesson: "A1.3" },
{ front: "o cêntimo / o centavo", back: "der Cent", lesson: "A1.3" },	
{ front: "o folheto", back: "der Prospekt", lesson: "A1.3" },	{ front: "os folhetos", back: "die Prospekte", lesson: "A1.3" },
{ front: "a promoção especial", back: "das Sonderangebot", lesson: "A1.3" },	{ front: "as promoções especiais", back: "die Sonderangebote", lesson: "A1.3" },
{ front: "o alimento / o mantimento", back: "das Lebensmittel", lesson: "A1.3" },	{ front: "os alimentos / os mantimentos", back: "die Lebensmittel", lesson: "A1.3" },
{ front: "quanto", back: "wie viel", lesson: "A1.3" },	
{ front: "custar", back: "kosten", lesson: "A1.3" },	{ front: "ter custado", back: "haben gekostet", lesson: "A1.7" },
{ front: "o quilo / o quilograma", back: "das Kilo(gramm)", lesson: "A1.3" },	
{ front: "o grama", back: "das Gramm", lesson: "A1.3" },	
{ front: "a libra (500g na Alemanha)", back: "das Pfund", lesson: "A1.3" },	
{ front: "o litro", back: "der Liter", lesson: "A1.3" },	
{ front: "a garrafa", back: "die Flasche", lesson: "A1.3" },	{ front: "as garrafas", back: "die Flaschen", lesson: "A1.3" },
{ front: "a lata", back: "die Dose", lesson: "A1.3" },	{ front: "as latas", back: "die Dosen", lesson: "A1.3" },
{ front: "o creme / a nata", back: "die Sahne", lesson: "A1.3" },	
{ front: "a linguiça / o embutido", back: "die Wurst", lesson: "A1.3" },	{ front: "as linguiças / os embutidos", back: "die Würste", lesson: "A1.3" },
{ front: "a carne moída / picada", back: "das Hackfleisch", lesson: "A1.3" },	
{ front: "o vendedor", back: "der Verkäufer", lesson: "A1.3" },	{ front: "os vendedores", back: "die Verkäufer", lesson: "A1.3" },
{ front: "a vendedora", back: "die Verkäuferin", lesson: "A1.3" },	{ front: "as vendedoras", back: "die Verkäuferinnen", lesson: "A1.3" },
{ front: "o cliente", back: "der Kunde", lesson: "A1.3" },	{ front: "os clientes", back: "die Kunden", lesson: "A1.3" },
{ front: "a cliente", back: "die Kundin", lesson: "A1.3" },	{ front: "as clientes", back: "die Kundinnen", lesson: "A1.3" },
{ front: "ainda / mais", back: "noch", lesson: "A1.3" },	
{ front: "todo / toda / todos / todas", back: "all", lesson: "A1.3" },	
{ front: "querer (educadamente) / gostar de", back: "möchten", lesson: "A1.3" },	{ front: "ter desejado", back: "haben gewünscht", lesson: "A1.7" },
{ front: "encontrar / achar", back: "finden", lesson: "A1.3" },	{ front: "ter encontrado", back: "haben gefunden", lesson: "A1.7" },
{ front: "a loja", back: "der Laden", lesson: "A1.3" },	{ front: "as lojas", back: "die Läden", lesson: "A1.3" },
{ front: "a fruta / as frutas", back: "das Obst", lesson: "A1.3" },	
{ front: "o legume / os legumes", back: "das Gemüse", lesson: "A1.3" },	{ front: "os legumes", back: "die Gemüse", lesson: "A1.3" },
{ front: "a padaria", back: "die Bäckerei", lesson: "A1.3" },	{ front: "as padarias", back: "die Bäckereien", lesson: "A1.3" },
{ front: "a água", back: "das Wasser", lesson: "A1.3" },	
{ front: "a pimenta-do-reino / o pimentão (depende do país)", back: "der Pfeffer", lesson: "A1.3" },	
{ front: "o chocolate", back: "die Schokolade", lesson: "A1.3" },	
{ front: "a banana", back: "die Banane", lesson: "A1.3" },	{ front: "as bananas", back: "die Bananen", lesson: "A1.3" },
{ front: "a manteiga", back: "die Butter", lesson: "A1.3" },	
{ front: "o ovo", back: "das Ei", lesson: "A1.3" },	{ front: "os ovos", back: "die Eier", lesson: "A1.3" },
{ front: "o leite", back: "die Milch", lesson: "A1.3" },	
{ front: "o pão", back: "das Brot", lesson: "A1.3" },	{ front: "os pães", back: "die Brote", lesson: "A1.3" },
{ front: "o peixe", back: "der Fisch", lesson: "A1.3" },	{ front: "os peixes", back: "die Fische", lesson: "A1.3" },
{ front: "a carne", back: "das Fleisch", lesson: "A1.3" },	
{ front: "o queijo", back: "der Käse", lesson: "A1.3" },	
{ front: "a maçã", back: "der Apfel", lesson: "A1.3" },	{ front: "as maçãs", back: "die Äpfel", lesson: "A1.3" },
{ front: "a pêra", back: "die Birne", lesson: "A1.3" },	{ front: "as pêras", back: "die Birnen", lesson: "A1.3" },
{ front: "o pãozinho", back: "das Brötchen", lesson: "A1.3" },	{ front: "os pãezinhos", back: "die Brötchen", lesson: "A1.3" },
{ front: "o bolo", back: "der Kuchen", lesson: "A1.3" },	{ front: "os bolos", back: "die Kuchen", lesson: "A1.3" },
{ front: "a laranja", back: "die Orange", lesson: "A1.3" },	{ front: "as laranjas", back: "die Orangen", lesson: "A1.3" },
{ front: "o suco", back: "der Saft", lesson: "A1.3" },	{ front: "os sucos", back: "die Säfte", lesson: "A1.3" },
{ front: "o iogurte", back: "der / das Joghurt", lesson: "A1.3" },	{ front: "os iogurtes", back: "die Joghurts", lesson: "A1.3" },
{ front: "a batata", back: "die Kartoffel", lesson: "A1.3" },	{ front: "as batatas", back: "die Kartoffeln", lesson: "A1.3" },
{ front: "a cebola", back: "die Zwiebel", lesson: "A1.3" },	{ front: "as cebolas", back: "die Zwiebeln", lesson: "A1.3" },
{ front: "o tomate", back: "die Tomate", lesson: "A1.3" },	{ front: "os tomates", back: "die Tomaten", lesson: "A1.3" },
{ front: "a água mineral", back: "das Mineralwasser", lesson: "A1.3" },	
{ front: "o apartamento / a moradia", back: "die Wohnung", lesson: "A1.4" },	{ front: "os apartamentos / as moradias", back: "die Wohnungen", lesson: "A1.4" },
{ front: "a lâmpada / o candeeiro", back: "die Lampe", lesson: "A1.4" },	{ front: "as lâmpadas / os candeeiros", back: "die Lampen", lesson: "A1.4" },
{ front: "o quarto / a sala", back: "das Zimmer", lesson: "A1.4" },	{ front: "os quartos / as salas", back: "die Zimmer", lesson: "A1.4" },
{ front: "a cozinha", back: "die Küche", lesson: "A1.4" },	{ front: "as cozinhas", back: "die Küchen", lesson: "A1.4" },
{ front: "o banheiro / a casa de banho", back: "das Bad", lesson: "A1.4" },	{ front: "os banheiros / as casas de banho", back: "die Bäder", lesson: "A1.4" },
{ front: "velho / antiga", back: "alt", lesson: "A1.4" },	
{ front: "novo / nova", back: "neu", lesson: "A1.4" },	
{ front: "grande", back: "groß", lesson: "A1.4" },	
{ front: "pequeno / pequena", back: "klein", lesson: "A1.4" },	
{ front: "claro / iluminado", back: "hell", lesson: "A1.4" },	
{ front: "escuro / sombrio", back: "dunkel", lesson: "A1.4" },	
{ front: "caro / cara", back: "teuer", lesson: "A1.4" },	
{ front: "barato / barata", back: "billig", lesson: "A1.4" },	
{ front: "bonito / bonita", back: "schön", lesson: "A1.4" },	
{ front: "feio / feia", back: "hässlich", lesson: "A1.4" },	
{ front: "conhecer", back: "kennen", lesson: "A1.4" },	{ front: "ter conhecido", back: "haben gekannt", lesson: "A1.7" },
{ front: "o corredor", back: "der Flur", lesson: "A1.4" },	{ front: "os corredores", back: "die Flure", lesson: "A1.4" },
{ front: "o vaso sanitário / a casa de banho (PT)", back: "die Toilette", lesson: "A1.4" },	{ front: "os vasos / as casas de banho", back: "die Toiletten", lesson: "A1.4" },
{ front: "a varanda / o balcão", back: "der Balkon", lesson: "A1.4" },	{ front: "as varandas / os balcões", back: "die Balkone", lesson: "A1.4" },
{ front: "a sala de estar", back: "das Wohnzimmer", lesson: "A1.4" },	{ front: "as salas de estar", back: "die Wohnzimmer", lesson: "A1.4" },
{ front: "o / a / os / as (artigos definidos)", back: "der / das / die", lesson: "A1.4" },	
{ front: "a casa", back: "das Haus", lesson: "A1.4" },	{ front: "as casas", back: "die Häuser", lesson: "A1.4" },
{ front: "aqui", back: "hier", lesson: "A1.4" },	
{ front: "ali / lá", back: "dort", lesson: "A1.4" },	
{ front: "mas", back: "aber", lesson: "A1.4" },	
{ front: "não", back: "nicht", lesson: "A1.4" },	
{ front: "o mês", back: "der Monat", lesson: "A1.4" },	{ front: "os meses", back: "die Monate", lesson: "A1.4" },
{ front: "estreito / estreita", back: "schmal", lesson: "A1.4" },	
{ front: "correto / certo", back: "richtig", lesson: "A1.4" },	
{ front: "largo / larga", back: "breit", lesson: "A1.4" },	
{ front: "o armário", back: "der Schrank", lesson: "A1.4" },	{ front: "os armários", back: "die Schränke", lesson: "A1.4" },
{ front: "o frigorífico / a geladeira", back: "der Kühlschrank", lesson: "A1.4" },	{ front: "os frigoríficos / as geladeiras", back: "die Kühlschränke", lesson: "A1.4" },
{ front: "o sofá", back: "das Sofa", lesson: "A1.4" },	{ front: "os sofás", back: "die Sofas", lesson: "A1.4" },
{ front: "a mesa", back: "der Tisch", lesson: "A1.4" },	{ front: "as mesas", back: "die Tische", lesson: "A1.4" },
{ front: "a cadeira", back: "der Stuhl", lesson: "A1.4" },	{ front: "as cadeiras", back: "die Stühle", lesson: "A1.4" },
{ front: "a cama", back: "das Bett", lesson: "A1.4" },	{ front: "as camas", back: "die Betten", lesson: "A1.4" },
{ front: "a televisão", back: "der Fernseher", lesson: "A1.4" },	{ front: "as televisões", back: "die Fernseher", lesson: "A1.4" },
{ front: "o chuveiro / a ducha", back: "die Dusche", lesson: "A1.4" },	{ front: "os chuveiros / as duchas", back: "die Duschen", lesson: "A1.4" },
{ front: "o fogão", back: "der Herd", lesson: "A1.4" },	{ front: "os fogões", back: "die Herde", lesson: "A1.4" },
{ front: "a banheira", back: "die Badewanne", lesson: "A1.4" },	{ front: "as banheiras", back: "die Badewannen", lesson: "A1.4" },
{ front: "o tapete / o carpete", back: "der Teppich", lesson: "A1.4" },	{ front: "os tapetes / os carpetes", back: "die Teppiche", lesson: "A1.4" },
{ front: "a poltrona", back: "der Sessel", lesson: "A1.4" },	{ front: "as poltronas", back: "die Sessel", lesson: "A1.4" },
{ front: "os móveis", back: "die Möbel", lesson: "A1.4" },	
{ front: "o aparelho / o dispositivo", back: "das Gerät", lesson: "A1.4" },	{ front: "os aparelhos / dispositivos", back: "die Geräte", lesson: "A1.4" },
{ front: "agradar / gostar de", back: "gefallen", lesson: "A1.4" },	{ front: "ter agradado", back: "haben gefallen", lesson: "A1.7" },
{ front: "a cor", back: "die Farbe", lesson: "A1.4" },	{ front: "as cores", back: "die Farben", lesson: "A1.4" },
{ front: "encontrar", back: "finden", lesson: "A1.4" },	{ front: "ter encontrado", back: "haben gefunden", lesson: "A1.7" },
{ front: "completamente / totalmente", back: "ganz", lesson: "A1.4" },	
{ front: "moderno / moderna", back: "modern", lesson: "A1.4" },	
{ front: "preto / preta", back: "schwarz", lesson: "A1.4" },	
{ front: "cinzento / cinza", back: "grau", lesson: "A1.4" },	
{ front: "branco / branca", back: "weiß", lesson: "A1.4" },	
{ front: "verde", back: "grün", lesson: "A1.4" },	
{ front: "castanho / marrom", back: "braun", lesson: "A1.4" },	
{ front: "azul", back: "blau", lesson: "A1.4" },	
{ front: "vermelho / vermelha", back: "rot", lesson: "A1.4" },	
{ front: "amarelo / amarela", back: "gelb", lesson: "A1.4" },	
{ front: "claro(a)- (ex: hellblau = azul claro)", back: "hell-", lesson: "A1.4" },	
{ front: "escuro(a)- (ex: dunkelrot = vermelho escuro)", back: "dunkel-", lesson: "A1.4" },	
{ front: "o centímetro", back: "der Zentimeter", lesson: "A1.4" },	{ front: "os centímetros", back: "die Zentimeter", lesson: "A1.4" },
{ front: "vezes (ex: 2 mal 3 = 2 vezes 3)", back: "mal", lesson: "A1.4" },	
{ front: "o celular / o telemóvel", back: "das Handy", lesson: "A1.4" },	{ front: "os celulares / os telemóveis", back: "die Handys", lesson: "A1.4" },
{ front: "o trabalho", back: "die Arbeit", lesson: "A1.4" },	
{ front: "o anúncio", back: "die Anzeige", lesson: "A1.4" },	{ front: "os anúncios", back: "die Anzeigen", lesson: "A1.4" },
{ front: "simpático / amável", back: "nett", lesson: "A1.4" },	
{ front: "o casal (casado)", back: "das Ehepaar", lesson: "A1.4" },	{ front: "os casais", back: "die Ehepaare", lesson: "A1.4" },
{ front: "procurar", back: "suchen", lesson: "A1.4" },	{ front: "ter procurado", back: "haben gesucht", lesson: "A1.7" },
{ front: "o jardim", back: "der Garten", lesson: "A1.4" },	{ front: "os jardins", back: "die Gärten", lesson: "A1.4" },
{ front: "alugar (como senhorio)", back: "vermieten", lesson: "A1.4" },	{ front: "ter alugado", back: "haben vermietet", lesson: "A1.7" },
{ front: "o apartamento", back: "das Apartment", lesson: "A1.4" },	{ front: "os apartamentos", back: "die Apartments", lesson: "A1.4" },
{ front: "o espaço / o cômodo", back: "der Raum", lesson: "A1.4" },	{ front: "os espaços / os cômodos", back: "die Räume", lesson: "A1.4" },
{ front: "o andar / piso", back: "der Stock", lesson: "A1.4" },	
{ front: "aproximadamente", back: "circa", lesson: "A1.4" },	
{ front: "privado / particular", back: "privat", lesson: "A1.4" },	
{ front: "a partir de", back: "ab", lesson: "A1.4" },	{ front: "as televisões", back: "die TVs", lesson: "A1.4" },
{ front: "imediatamente", back: "sofort", lesson: "A1.4" },	{ front: "as garagens", back: "die Garagen", lesson: "A1.4" },
{ front: "no máximo", back: "maximal", lesson: "A1.4" },	{ front: "os metros quadrados", back: "die Quadratmeter", lesson: "A1.4" },
{ front: "a chamada (telefónica)", back: "der Anruf", lesson: "A1.4" },	
{ front: "mobiliado / mobilado", back: "möbliert", lesson: "A1.4" },	{ front: "os aluguéis / as rendas", back: "die Mieten", lesson: "A1.4" },
{ front: "a TV / a televisão", back: "das TV", lesson: "A1.4" },	{ front: "ter pago", back: "haben bezahlt", lesson: "A1.4" },
{ front: "a garagem", back: "die Garage", lesson: "A1.4" },	{ front: "ter vendido", back: "haben verkauft", lesson: "A1.4" },
{ front: "o metro quadrado", back: "der Quadratmeter", lesson: "A1.4" },	
{ front: "só / apenas", back: "nur", lesson: "A1.4" },	{ front: "os computadores", back: "die Computer", lesson: "A1.4" },
{ front: "o aluguel / a renda", back: "die Miete", lesson: "A1.4" },	{ front: "as escrivaninhas / secretárias", back: "die Schreibtische", lesson: "A1.4" },
{ front: "pagar", back: "bezahlen", lesson: "A1.4" },	
{ front: "vender", back: "verkaufen", lesson: "A1.4" },	
{ front: "algo", back: "etwas", lesson: "A1.4" },	
{ front: "o computador", back: "der Computer", lesson: "A1.4" },	
{ front: "a escrivaninha / a secretária", back: "der Schreibtisch", lesson: "A1.4" },	{ front: "os metros", back: "die Meter", lesson: "A1.4" },
{ front: "hoje", back: "heute", lesson: "A1.4" },	
{ front: "qual(is)?", back: "welche …?", lesson: "A1.4" },	
{ front: "então / portanto", back: "also", lesson: "A1.4" },	{ front: "ter visto", back: "haben gesehen", lesson: "A1.4" },
{ front: "aproximadamente", back: "ungefähr", lesson: "A1.4" },	
{ front: "o metro", back: "der Meter", lesson: "A1.4" },	
{ front: "longo / comprido", back: "lang", lesson: "A1.4" },	{ front: "ter feito", back: "haben gemacht", lesson: "A1.4" },
{ front: "exato / exatamente", back: "genau", lesson: "A1.4" },	{ front: "as apresentações", back: "die Präsentationen", lesson: "A1.4" },
{ front: "ver", back: "sehen", lesson: "A1.4" },	{ front: "ter tomado café da manhã", back: "haben gefrühstückt", lesson: "A1.4" },
{ front: "alto / elevada", back: "hoch", lesson: "A1.4" },	{ front: "ter feito compras", back: "haben eingekauft", lesson: "A1.4" },
{ front: "amanhã", back: "morgen", lesson: "A1.4" },	{ front: "ter ouvido", back: "haben gehört", lesson: "A1.4" },
{ front: "fazer", back: "machen", lesson: "A1.5" },	{ front: "ter feito", back: "haben gemacht", lesson: "A1.7" },
{ front: "a apresentação", back: "die Präsentation", lesson: "A1.5" },	{ front: "as apresentações", back: "die Präsentationen", lesson: "A1.5" },
{ front: "tomar café da manhã", back: "frühstücken", lesson: "A1.5" },	{ front: "ter tomado café da manhã", back: "haben gefrühstückt", lesson: "A1.7" },
{ front: "fazer compras", back: "einkaufen", lesson: "A1.5" },	{ front: "ter feito compras", back: "haben eingekauft", lesson: "A1.7" },
{ front: "ouvir", back: "hören", lesson: "A1.5" },	{ front: "ter ouvido", back: "haben gehört", lesson: "A1.7" },
{ front: "cozinhar", back: "kochen", lesson: "A1.5" },	{ front: "ter cozinhado", back: "haben gekocht", lesson: "A1.7" },
{ front: "passear", back: "spazieren gehen", lesson: "A1.5" },	{ front: "ter passeado", back: "sein spaziert", lesson: "A1.7" },
{ front: "arrumar", back: "aufräumen", lesson: "A1.5" },	{ front: "ter arrumado", back: "haben aufgeräumt", lesson: "A1.7" },
{ front: "levantar-se", back: "aufstehen", lesson: "A1.5" },	{ front: "ter se levantado", back: "sein aufgestanden", lesson: "A1.7" },
{ front: "ir", back: "gehen", lesson: "A1.5" },	{ front: "ter ido", back: "sein gegangen", lesson: "A1.7" },
{ front: "ou", back: "oder", lesson: "A1.5" },	
{ front: "cansado / cansada", back: "müde", lesson: "A1.5" },	
{ front: "telefonar / ligar para", back: "anrufen", lesson: "A1.5" },	{ front: "ter ligado / telefonado", back: "haben angerufen", lesson: "A1.7" },
{ front: "cedo", back: "früh", lesson: "A1.5" },	
{ front: "o supermercado", back: "der Supermarkt", lesson: "A1.5" },	{ front: "os supermercados", back: "die Supermärkte", lesson: "A1.5" },
{ front: "assistir TV", back: "fernsehen", lesson: "A1.5" },	{ front: "ter assistido TV", back: "haben ferngesehen", lesson: "A1.7" },
{ front: "com", back: "mit", lesson: "A1.5" },	
{ front: "trabalhar", back: "arbeiten", lesson: "A1.5" },	{ front: "ter trabalhado", back: "haben gearbeitet", lesson: "A1.7" },
{ front: "muito tempo / longo", back: "lange", lesson: "A1.5" },	
{ front: "jogar / brincar", back: "spielen", lesson: "A1.5" },	{ front: "ter jogado / brincado", back: "haben gespielt", lesson: "A1.7" },
{ front: "comer", back: "essen", lesson: "A1.5" },	{ front: "ter comido", back: "haben gegessen", lesson: "A1.7" },
{ front: "com prazer / gostar de", back: "gern", lesson: "A1.5" },	
{ front: "tarde", back: "spät", lesson: "A1.5" },	
{ front: "já", back: "schon", lesson: "A1.5" },	
{ front: "só / apenas", back: "erst", lesson: "A1.5" },	
{ front: "o bairro / o quarto (tempo)", back: "das Viertel", lesson: "A1.5" },	{ front: "os bairros / os quartos", back: "die Viertel", lesson: "A1.5" },
{ front: "antes de", back: "vor", lesson: "A1.5" },	
{ front: "depois de / para", back: "nach", lesson: "A1.5" },	
{ front: "meia (hora)", back: "halb", lesson: "A1.5" },	
{ front: "o relógio / a hora", back: "die Uhr", lesson: "A1.5" },	{ front: "os relógios / as horas", back: "die Uhren", lesson: "A1.5" },
{ front: "curto / brevemente", back: "kurz", lesson: "A1.5" },	
{ front: "já já / logo", back: "gleich", lesson: "A1.5" },	
{ front: "o curso intensivo", back: "der Intensivkurs", lesson: "A1.5" },	{ front: "os cursos intensivos", back: "die Intensivkurse", lesson: "A1.5" },
{ front: "começar", back: "anfangen", lesson: "A1.5" },	{ front: "ter começado", back: "haben angefangen", lesson: "A1.7" },
{ front: "no / na (data ou dia)", back: "am", lesson: "A1.5" },	
{ front: "a segunda-feira", back: "der Montag", lesson: "A1.5" },	{ front: "as segundas-feiras", back: "die Montage", lesson: "A1.5" },
{ front: "a sexta-feira", back: "der Freitag", lesson: "A1.5" },	{ front: "as sextas-feiras", back: "die Freitage", lesson: "A1.5" },
{ front: "a quinta-feira", back: "der Donnerstag", lesson: "A1.5" },	{ front: "as quintas-feiras", back: "die Donnerstage", lesson: "A1.5" },
{ front: "a quarta-feira", back: "der Mittwoch", lesson: "A1.5" },	{ front: "as quartas-feiras", back: "die Mittwoche", lesson: "A1.5" },
{ front: "a terça-feira", back: "der Dienstag", lesson: "A1.5" },	{ front: "as terças-feiras", back: "die Dienstage", lesson: "A1.5" },
{ front: "quando", back: "wann", lesson: "A1.5" },	
{ front: "às (hora) / em torno de", back: "um", lesson: "A1.5" },	
{ front: "terminar / acabar", back: "enden", lesson: "A1.5" },	{ front: "ter terminado", back: "haben geendet", lesson: "A1.7" },
{ front: "de ... até ...", back: "von ... bis ...", lesson: "A1.5" },	
{ front: "a festa", back: "die Party", lesson: "A1.5" },	{ front: "as festas", back: "die Partys", lesson: "A1.5" },
{ front: "o tempo / a hora", back: "die Zeit", lesson: "A1.5" },	{ front: "os tempos / as horas", back: "die Zeiten", lesson: "A1.5" },
{ front: "o futebol", back: "der Fußball", lesson: "A1.5" },	
{ front: "o sábado", back: "der Samstag", lesson: "A1.5" },	{ front: "os sábados", back: "die Samstage", lesson: "A1.5" },
{ front: "o domingo", back: "der Sonntag", lesson: "A1.5" },	{ front: "os domingos", back: "die Sonntage", lesson: "A1.5" },
{ front: "o dever de casa", back: "die Hausaufgabe", lesson: "A1.5" },	{ front: "os deveres de casa", back: "die Hausaufgaben", lesson: "A1.5" },
{ front: "a mamãe", back: "die Mama", lesson: "A1.5" },	{ front: "as mamães", back: "die Mamas", lesson: "A1.5" },
{ front: "dormir", back: "schlafen", lesson: "A1.5" },	{ front: "ter dormido", back: "haben geschlafen", lesson: "A1.7" },
{ front: "o fim de semana", back: "das Wochenende", lesson: "A1.5" },	{ front: "os fins de semana", back: "die Wochenenden", lesson: "A1.5" },
{ front: "próximo / próxima", back: "nächst-", lesson: "A1.5" },	
{ front: "a semana", back: "die Woche", lesson: "A1.5" },	{ front: "as semanas", back: "die Wochen", lesson: "A1.5" },
{ front: "o meio-dia", back: "der Mittag", lesson: "A1.5" },	{ front: "os meios-dias", back: "die Mittage", lesson: "A1.5" },
{ front: "a manhã", back: "der Morgen", lesson: "A1.5" },	{ front: "as manhãs", back: "die Morgen", lesson: "A1.5" },
{ front: "a noite / o fim de tarde", back: "der Abend", lesson: "A1.5" },	{ front: "as noites", back: "die Abende", lesson: "A1.5" },
{ front: "a tarde", back: "der Nachmittag", lesson: "A1.5" },	{ front: "as tardes", back: "die Nachmittage", lesson: "A1.5" },
{ front: "a manhã (antes do meio-dia)", back: "der Vormittag", lesson: "A1.5" },	{ front: "as manhãs", back: "die Vormittage", lesson: "A1.5" },
{ front: "a noite", back: "die Nacht", lesson: "A1.5" },	{ front: "as noites", back: "die Nächte", lesson: "A1.5" },
{ front: "o cinema", back: "das Kino", lesson: "A1.5" },	{ front: "os cinemas", back: "die Kinos", lesson: "A1.5" },
{ front: "o esporte", back: "der Sport", lesson: "A1.5" },	
{ front: "beber", back: "trinken", lesson: "A1.5" },	{ front: "ter bebido", back: "haben getrunken", lesson: "A1.7" },
{ front: "a pizza", back: "die Pizza", lesson: "A1.5" },	{ front: "as pizzas", back: "die Pizzen", lesson: "A1.5" },
{ front: "conversar (online)", back: "chatten", lesson: "A1.5" },	{ front: "ter conversado (online)", back: "haben gechattet", lesson: "A1.7" },
{ front: "aberto / aberta", back: "geöffnet", lesson: "A1.5" },	
{ front: "o compromisso / a consulta", back: "der Termin", lesson: "A1.5" },	{ front: "os compromissos", back: "die Termine", lesson: "A1.5" },
{ front: "o jardim de infância", back: "der Kindergarten", lesson: "A1.5" },	{ front: "os jardins de infância", back: "die Kindergärten", lesson: "A1.5" },
{ front: "a loja", back: "das Geschäft", lesson: "A1.5" },	{ front: "as lojas", back: "die Geschäfte", lesson: "A1.5" },
{ front: "a biblioteca", back: "die Bibliothek", lesson: "A1.5" },	{ front: "as bibliotecas", back: "die Bibliotheken", lesson: "A1.5" },
{ front: "fechado / fechada", back: "geschlossen", lesson: "A1.5" },	
{ front: "abrir", back: "öffnen", lesson: "A1.5" },	{ front: "ter aberto", back: "haben geöffnet", lesson: "A1.7" },
{ front: "fechar", back: "schließen", lesson: "A1.5" },	{ front: "ter fechado", back: "haben geschlossen", lesson: "A1.7" },
{ front: "o consultório", back: "die Praxis", lesson: "A1.5" },	{ front: "os consultórios", back: "die Praxen", lesson: "A1.5" },
{ front: "o dia", back: "der Tag", lesson: "A1.5" },	{ front: "os dias", back: "die Tage", lesson: "A1.5" },
{ front: "cada / todo", back: "jed-", lesson: "A1.5" },	
{ front: "a creche / jardim de infância", back: "die Kita", lesson: "A1.5" },	{ front: "as creches", back: "die Kitas", lesson: "A1.5" },
{ front: "trazer", back: "bringen", lesson: "A1.5" },	{ front: "ter trazido", back: "haben gebracht", lesson: "A1.7" },
{ front: "buscar", back: "abholen", lesson: "A1.5" },	{ front: "ter buscado", back: "haben abgeholt", lesson: "A1.7" },
{ front: "mais", back: "mehr", lesson: "A1.5" },	
{ front: "o exemplo", back: "das Beispiel", lesson: "A1.5" },	{ front: "os exemplos", back: "die Beispiele", lesson: "A1.5" },
{ front: "por exemplo", back: "zum Beispiel", lesson: "A1.5" },	
{ front: "de novo / novamente", back: "wieder", lesson: "A1.5" },	
{ front: "o amigo / o namorado", back: "der Freund", lesson: "A1.5" },	{ front: "os amigos / os namorados", back: "die Freunde", lesson: "A1.5" },
{ front: "a amiga / a namorada", back: "die Freundin", lesson: "A1.5" },	{ front: "as amigas / as namoradas", back: "die Freundinnen", lesson: "A1.5" },
{ front: "perguntar", back: "fragen", lesson: "A1.5" },	{ front: "ter perguntado", back: "haben gefragt", lesson: "A1.7" },
{ front: "responder", back: "antworten", lesson: "A1.5" },	{ front: "ter respondido", back: "haben geantwortet", lesson: "A1.7" },
{ front: "totalmente / muito mesmo", back: "total", lesson: "A1.5" },	
{ front: "o passeio", back: "der Ausflug", lesson: "A1.6" },	{ front: "os passeios", back: "die Ausflüge", lesson: "A1.6" },
{ front: "o carro", back: "das Auto", lesson: "A1.6" },	{ front: "os carros", back: "die Autos", lesson: "A1.6" },
{ front: "fazer trilha / caminhar", back: "wandern", lesson: "A1.6" },	{ front: "ter feito trilha / caminhado", back: "sein gewandert", lesson: "A1.7" },
{ front: "o piquenique", back: "das Picknick", lesson: "A1.6" },	{ front: "os piqueniques", back: "die Picknicks", lesson: "A1.6" },
{ front: "o violão / a guitarra", back: "die Gitarre", lesson: "A1.6" },	{ front: "os violões / as guitarras", back: "die Gitarren", lesson: "A1.6" },
{ front: "telefonar", back: "telefonieren", lesson: "A1.6" },	{ front: "ter telefonado", back: "haben telefoniert", lesson: "A1.7" },
{ front: "o tempo (clima)", back: "das Wetter", lesson: "A1.6" },	
{ front: "o sol", back: "die Sonne", lesson: "A1.6" },	
{ front: "brilhar", back: "scheinen", lesson: "A1.6" },	{ front: "ter brilhado", back: "haben geschienen", lesson: "A1.7" },
{ front: "chover", back: "regnen", lesson: "A1.6" },	{ front: "ter chovido", back: "haben geregnet", lesson: "A1.7" },
{ front: "muito", back: "viel-", lesson: "A1.6" },	
{ front: "a nuvem", back: "die Wolke", lesson: "A1.6" },	{ front: "as nuvens", back: "die Wolken", lesson: "A1.6" },
{ front: "partir / começar", back: "los (losgehen)", lesson: "A1.6" },	
{ front: "esquecer", back: "vergessen", lesson: "A1.6" },	{ front: "ter esquecido", back: "haben vergessen", lesson: "A1.7" },
{ front: "a sede", back: "der Durst", lesson: "A1.6" },	
{ front: "o grau (temperatura)", back: "das Grad", lesson: "A1.6" },	
{ front: "quente", back: "warm", lesson: "A1.6" },	
{ front: "com vento / ventando", back: "windig", lesson: "A1.6" },	
{ front: "frio", back: "kalt", lesson: "A1.6" },	
{ front: "nevar", back: "schneien", lesson: "A1.6" },	{ front: "ter nevado", back: "haben geschneit", lesson: "A1.7" },
{ front: "nublado", back: "bewölkt", lesson: "A1.6" },	
{ front: "a previsão do tempo", back: "der Wetterbericht", lesson: "A1.6" },	{ front: "as previsões do tempo", back: "die Wetterberichte", lesson: "A1.6" },
{ front: "o meio / o centro", back: "die Mitte", lesson: "A1.6" },	
{ front: "em todo lugar / por toda parte", back: "überall", lesson: "A1.6" },	
{ front: "a temperatura", back: "die Temperatur", lesson: "A1.6" },	{ front: "as temperaturas", back: "die Temperaturen", lesson: "A1.6" },
{ front: "subir / aumentar", back: "steigen", lesson: "A1.6" },	{ front: "ter subido / aumentado", back: "sein gestiegen", lesson: "A1.7" },
{ front: "ensolarado", back: "sonnig", lesson: "A1.6" },	
{ front: "leve", back: "leicht", lesson: "A1.6" },	
{ front: "ficar", back: "bleiben", lesson: "A1.6" },	{ front: "ter ficado", back: "sein geblieben", lesson: "A1.7" },
{ front: "a chuva", back: "der Regen", lesson: "A1.6" },	
{ front: "a neve", back: "der Schnee", lesson: "A1.6" },	
{ front: "mais (temperatura)", back: "plus", lesson: "A1.6" },	
{ front: "menos (temperatura)", back: "minus", lesson: "A1.6" },	
{ front: "o rádio", back: "das Radio", lesson: "A1.6" },	{ front: "os rádios", back: "die Radios", lesson: "A1.6" },
{ front: "a internet", back: "das Internet", lesson: "A1.6" },	
{ front: "o verão", back: "der Sommer", lesson: "A1.6" },	{ front: "os verões", back: "die Sommer", lesson: "A1.6" },
{ front: "quente (muito)", back: "heiß", lesson: "A1.6" },	
{ front: "a primavera", back: "der Frühling", lesson: "A1.6" },	{ front: "as primaveras", back: "die Frühlinge", lesson: "A1.6" },
{ front: "o outono", back: "der Herbst", lesson: "A1.6" },	{ front: "os outonos", back: "die Herbste", lesson: "A1.6" },
{ front: "ruim / mau", back: "schlecht", lesson: "A1.6" },	
{ front: "o inverno", back: "der Winter", lesson: "A1.6" },	{ front: "os invernos", back: "die Winter", lesson: "A1.6" },
{ front: "o vento", back: "der Wind", lesson: "A1.6" },	{ front: "os ventos", back: "die Winde", lesson: "A1.6" },
{ front: "agradável", back: "angenehm", lesson: "A1.6" },	
{ front: "o cardápio / a ementa", back: "die Speisekarte", lesson: "A1.6" },	{ front: "os cardápios / as ementas", back: "die Speisekarten", lesson: "A1.6" },
{ front: "o hambúrguer", back: "der Hamburger", lesson: "A1.6" },	{ front: "os hambúrgueres", back: "die Hamburger", lesson: "A1.6" },
{ front: "o prato / a refeição", back: "die Speise", lesson: "A1.6" },	{ front: "os pratos / as refeições", back: "die Speisen", lesson: "A1.6" },
{ front: "as batatas fritas", back: "die Pommes frites", lesson: "A1.6" },	
{ front: "a porção", back: "die Portion", lesson: "A1.6" },	{ front: "as porções", back: "die Portionen", lesson: "A1.6" },
{ front: "o ketchup", back: "der Ketchup", lesson: "A1.6" },	{ front: "os ketchups", back: "die Ketchups", lesson: "A1.6" },
{ front: "a salada", back: "der Salat", lesson: "A1.6" },	{ front: "as saladas", back: "die Salate", lesson: "A1.6" },
{ front: "o presunto", back: "der Schinken", lesson: "A1.6" },	{ front: "os presuntos", back: "die Schinken", lesson: "A1.6" },
{ front: "a bebida", back: "das Getränk", lesson: "A1.6" },	{ front: "as bebidas", back: "die Getränke", lesson: "A1.6" },
{ front: "a coca-cola", back: "die Cola", lesson: "A1.6" },	{ front: "as cocas", back: "die Colas", lesson: "A1.6" },
{ front: "porém / mas sim", back: "doch", lesson: "A1.6" },	
{ front: "preferencialmente / de preferência", back: "lieber", lesson: "A1.6" },	
{ front: "pegar / tomar", back: "nehmen", lesson: "A1.6" },	{ front: "ter pego / tomado", back: "haben genommen", lesson: "A1.7" },
{ front: "por que", back: "warum", lesson: "A1.6" },	
{ front: "o cachorro", back: "der Hund", lesson: "A1.6" },	{ front: "os cachorros", back: "die Hunde", lesson: "A1.6" },
{ front: "o sorvete / o gelo", back: "das Eis", lesson: "A1.6" },	
{ front: "dançar", back: "tanzen", lesson: "A1.6" },	{ front: "ter dançado", back: "haben getanzt", lesson: "A1.7" },
{ front: "nadar", back: "schwimmen", lesson: "A1.6" },	{ front: "ter nadado", back: "sein geschwommen", lesson: "A1.7" },
{ front: "encontrar", back: "treffen", lesson: "A1.6" },	{ front: "ter encontrado", back: "haben getroffen", lesson: "A1.7" },
{ front: "a bicicleta", back: "das Fahrrad", lesson: "A1.6" },	{ front: "as bicicletas", back: "die Fahrräder", lesson: "A1.6" },
{ front: "dirigir / andar (de)", back: "fahren", lesson: "A1.6" },	{ front: "ter dirigido / andado", back: "sein gefahren", lesson: "A1.7" },
{ front: "grelhar / fazer churrasco", back: "grillen", lesson: "A1.6" },	{ front: "ter feito churrasco", back: "haben gegrillt", lesson: "A1.7" },
{ front: "o tempo livre", back: "die Freizeit", lesson: "A1.6" },	
{ front: "o hobby", back: "das Hobby", lesson: "A1.6" },	{ front: "os hobbies", back: "die Hobbys", lesson: "A1.6" },
{ front: "ler", back: "lesen", lesson: "A1.6" },	{ front: "ter lido", back: "haben gelesen", lesson: "A1.7" },
{ front: "o romance policial", back: "der Krimi", lesson: "A1.6" },	{ front: "os romances policiais", back: "die Krimis", lesson: "A1.6" },
{ front: "favorito/a", back: "Lieblings-", lesson: "A1.6" },	
{ front: "o filme", back: "der Film", lesson: "A1.6" },	{ front: "os filmes", back: "die Filme", lesson: "A1.6" },
{ front: "importante", back: "wichtig", lesson: "A1.6" },	
{ front: "a churrasqueira", back: "der Grill", lesson: "A1.6" },	{ front: "as churrasqueiras", back: "die Grills", lesson: "A1.6" },
{ front: "colecionar / juntar", back: "sammeln", lesson: "A1.6" },	{ front: "ter colecionado", back: "haben gesammelt", lesson: "A1.7" },
{ front: "a profissão", back: "der Beruf", lesson: "A1.6" },	{ front: "as profissões", back: "die Berufe", lesson: "A1.6" },
{ front: "a foto", back: "das Foto", lesson: "A1.6" },	{ front: "as fotos", back: "die Fotos", lesson: "A1.6" },
{ front: "especialmente", back: "besonders", lesson: "A1.6" },	
{ front: "fotografar", back: "fotografieren", lesson: "A1.6" },	{ front: "ter fotografado", back: "haben fotografiert", lesson: "A1.7" },
{ front: "a diversão", back: "der Spaß", lesson: "A1.6" },	
{ front: "o smartphone", back: "das Smartphone", lesson: "A1.6" },	{ front: "os smartphones", back: "die Smartphones", lesson: "A1.6" },
{ front: "burro / tolo", back: "dumm", lesson: "A1.6" },	
{ front: "frequentemente", back: "oft", lesson: "A1.6" },	
{ front: "achar / opinar", back: "meinen", lesson: "A1.6" },	{ front: "ter achado / opinado", back: "haben gemeint", lesson: "A1.7" },
{ front: "o dado", back: "der Würfel", lesson: "A1.6" },	{ front: "os dados", back: "die Würfel", lesson: "A1.6" },
{ front: "o jogo", back: "das Spiel", lesson: "A1.6" },	{ front: "os jogos", back: "die Spiele", lesson: "A1.6" },
{ front: "infelizmente", back: "leider", lesson: "A1.6" },	
{ front: "o problema", back: "das Problem", lesson: "A1.6" },	{ front: "os problemas", back: "die Probleme", lesson: "A1.6" },
{ front: "sempre", back: "immer", lesson: "A1.6" },	
{ front: "talvez", back: "vielleicht", lesson: "A1.6" },	
{ front: "simples / fácil", back: "einfach", lesson: "A1.6" },	
{ front: "rápido / rapidamente", back: "schnell", lesson: "A1.6" },	
{ front: "o sol", back: "die Sonne", lesson: "A1.6" },	{ front: "os sóis", back: "die Sonnen", lesson: "A1.6" },
{ front: "Está ensolarado.", back: "Es ist sonnig.", lesson: "A1.6" },	
{ front: "a chuva", back: "der Regen", lesson: "A1.6" },	
{ front: "Está chovendo.", back: "Es regnet.", lesson: "A1.6" },	
{ front: "a nuvem", back: "die Wolke", lesson: "A1.6" },	{ front: "as nuvens", back: "die Wolken", lesson: "A1.6" },
{ front: "está nublado", back: "es ist bewölkt", lesson: "A1.6" },	
{ front: "a neve", back: "der Schnee", lesson: "A1.6" },	
{ front: "está nevando", back: "es schneit", lesson: "A1.6" },	
{ front: "o vento", back: "der Wind", lesson: "A1.6" },	{ front: "os ventos", back: "die Winde", lesson: "A1.6" },
{ front: "está ventando", back: "es ist windig", lesson: "A1.6" },	
{ front: "está frio", back: "es ist kalt", lesson: "A1.6" },	
{ front: "está quente", back: "es ist warm", lesson: "A1.6" },	
{ front: "legal / ótimo", back: "prima", lesson: "A1.7" },	
{ front: "a equipe", back: "das Team", lesson: "A1.7" },	{ front: "as equipes", back: "die Teams", lesson: "A1.7" },
{ front: "acordar (alguém)", back: "wecken", lesson: "A1.7" },	{ front: "ter acordado", back: "haben geweckt", lesson: "A1.7" },
{ front: "o café da manhã", back: "das Frühstück", lesson: "A1.7" },	{ front: "os cafés da manhã", back: "die Frühstücke", lesson: "A1.7" },
{ front: "pronto / pronta", back: "fertig", lesson: "A1.7" },	
{ front: "estar acontecendo", back: "los sein", lesson: "A1.7" },	
{ front: "escrever", back: "schreiben", lesson: "A1.7" },	{ front: "ter escrito", back: "haben geschrieben", lesson: "A1.7" },
{ front: "a matemática", back: "die Mathematik", lesson: "A1.7" },	
{ front: "o teste", back: "der Test", lesson: "A1.7" },	{ front: "os testes", back: "die Tests", lesson: "A1.7" },
{ front: "pontual", back: "pünktlich", lesson: "A1.7" },	
{ front: "de jeito nenhum / com certeza", back: "auf keinen/jeden Fall", lesson: "A1.7" },	
{ front: "ter gosto / saber bem", back: "schmecken", lesson: "A1.7" },	{ front: "ter tido gosto", back: "haben geschmeckt", lesson: "A1.7" },
{ front: "para casa", back: "nach Hause", lesson: "A1.7" },	
{ front: "a escola", back: "die Schule", lesson: "A1.7" },	{ front: "as escolas", back: "die Schulen", lesson: "A1.7" },
{ front: "poder / saber (fazer algo)", back: "können", lesson: "A1.7" },	{ front: "ter podido / sabido", back: "haben gekonnt", lesson: "A1.7" },
{ front: "doente", back: "krank", lesson: "A1.7" },	
{ front: "o médico", back: "der Arzt", lesson: "A1.7" },	{ front: "os médicos", back: "die Ärzte", lesson: "A1.7" },
{ front: "a médica", back: "die Ärztin", lesson: "A1.7" },	{ front: "as médicas", back: "die Ärztinnen", lesson: "A1.7" },
{ front: "assar", back: "backen", lesson: "A1.7" },	{ front: "ter assado", back: "haben gebacken", lesson: "A1.7" },
{ front: "cantar", back: "singen", lesson: "A1.7" },	{ front: "ter cantado", back: "haben gesungen", lesson: "A1.7" },
{ front: "andar a cavalo", back: "reiten", lesson: "A1.7" },	{ front: "ter andado a cavalo", back: "sein geritten", lesson: "A1.7" },
{ front: "o piano", back: "das Klavier", lesson: "A1.7" },	{ front: "os pianos", back: "die Klaviere", lesson: "A1.7" },
{ front: "pintar / desenhar", back: "malen", lesson: "A1.7" },	{ front: "ter pintado / desenhado", back: "haben gemalt", lesson: "A1.7" },
{ front: "o esqui", back: "der Ski", lesson: "A1.7" },	{ front: "os esquis", back: "die Skier", lesson: "A1.7" },
{ front: "o tênis (jogar tênis)", back: "das Tennis (spielen)", lesson: "A1.7" },	
{ front: "querer", back: "wollen", lesson: "A1.7" },	{ front: "ter querido", back: "haben gewollt", lesson: "A1.7" },
{ front: "finalmente", back: "endlich", lesson: "A1.7" },	
{ front: "a música / a canção", back: "das Lied", lesson: "A1.7" },	{ front: "as músicas / as canções", back: "die Lieder", lesson: "A1.7" },
{ front: "praticar / treinar", back: "üben", lesson: "A1.7" },	{ front: "ter praticado", back: "haben geübt", lesson: "A1.7" },
{ front: "o texto", back: "der Text", lesson: "A1.7" },	{ front: "os textos", back: "die Texte", lesson: "A1.7" },
{ front: "o exercício", back: "die Übung", lesson: "A1.7" },	{ front: "os exercícios", back: "die Übungen", lesson: "A1.7" },
{ front: "a carta", back: "der Brief", lesson: "A1.7" },	{ front: "as cartas", back: "die Briefe", lesson: "A1.7" },
{ front: "o ditado", back: "das Diktat", lesson: "A1.7" },	{ front: "os ditados", back: "die Diktate", lesson: "A1.7" },
{ front: "o livro", back: "das Buch", lesson: "A1.7" },	{ front: "os livros", back: "die Bücher", lesson: "A1.7" },
{ front: "tocar violão", back: "Gitarre spielen", lesson: "A1.7" },	{ front: "ter tocado violão", back: "haben Gitarre gespielt", lesson: "A1.7" },
{ front: "andar de bicicleta", back: "Fahrrad fahren", lesson: "A1.7" },	{ front: "ter andado de bicicleta", back: "sein Fahrrad gefahren", lesson: "A1.7" },
{ front: "encontrar amigos", back: "Freunde treffen", lesson: "A1.7" },	{ front: "ter encontrado amigos", back: "haben getroffen", lesson: "A1.7" },
{ front: "esquiar", back: "Ski fahren", lesson: "A1.7" },	{ front: "ter esquiado", back: "sein Ski gefahren", lesson: "A1.7" },
{ front: "jogar tênis", back: "Tennis spielen", lesson: "A1.7" },	{ front: "ter jogado tênis", back: "haben Tennis gespielt", lesson: "A1.7" },
{ front: "a história", back: "die Geschichte", lesson: "A1.8" },	{ front: "as histórias", back: "die Geschichten", lesson: "A1.8" },
{ front: "o hospital", back: "das Krankenhaus", lesson: "A1.8" },	{ front: "os hospitais", back: "die Krankenhäuser", lesson: "A1.8" },
{ front: "a entrevista", back: "das Interview", lesson: "A1.8" },	{ front: "as entrevistas", back: "die Interviews", lesson: "A1.8" },
{ front: "o jornal", back: "die Zeitung", lesson: "A1.8" },	{ front: "os jornais", back: "die Zeitungen", lesson: "A1.8" },
{ front: "a televisão", back: "das Fernsehen", lesson: "A1.8" },	
{ front: "a formação (profissional)", back: "die Ausbildung", lesson: "A1.8" },	{ front: "as formações", back: "die Ausbildungen", lesson: "A1.8" },
{ front: "o chefe", back: "der Chef", lesson: "A1.8" },	{ front: "os chefes", back: "die Chefs", lesson: "A1.8" },
{ front: "a chefe", back: "die Chefin", lesson: "A1.8" },	{ front: "as chefes", back: "die Chefinnen", lesson: "A1.8" },
{ front: "o paciente", back: "der Patient", lesson: "A1.8" },	{ front: "os pacientes", back: "die Patienten", lesson: "A1.8" },
{ front: "a paciente", back: "die Patientin", lesson: "A1.8" },	{ front: "as pacientes", back: "die Patientinnen", lesson: "A1.8" },
{ front: "o zelador", back: "der Hausmeister", lesson: "A1.8" },	{ front: "os zeladores", back: "die Hausmeister", lesson: "A1.8" },
{ front: "a zeladora", back: "die Hausmeisterin", lesson: "A1.8" },	{ front: "as zeladoras", back: "die Hausmeisterinnen", lesson: "A1.8" },
{ front: "o jornalista", back: "der Journalist", lesson: "A1.8" },	{ front: "os jornalistas", back: "die Journalisten", lesson: "A1.8" },
{ front: "a jornalista", back: "die Journalistin", lesson: "A1.8" },	{ front: "as jornalistas", back: "die Journalistinnen", lesson: "A1.8" },
{ front: "o tema", back: "das Thema", lesson: "A1.8" },	{ front: "os temas", back: "die Themen", lesson: "A1.8" },
{ front: "o mecatrônico", back: "der Mechatroniker", lesson: "A1.8" },	{ front: "os mecatrônicos", back: "die Mechatroniker", lesson: "A1.8" },
{ front: "a mecatrônica", back: "die Mechatronikerin", lesson: "A1.8" },	{ front: "as mecatrônicas", back: "die Mechatronikerinnen", lesson: "A1.8" },
{ front: "o dono de casa", back: "der Hausmann", lesson: "A1.8" },	{ front: "os donos de casa", back: "die Hausmänner", lesson: "A1.8" },
{ front: "a dona de casa", back: "die Hausfrau", lesson: "A1.8" },	{ front: "as donas de casa", back: "die Hausfrauen", lesson: "A1.8" },
{ front: "o policial", back: "der Polizist", lesson: "A1.8" },	{ front: "os policiais", back: "die Polizisten", lesson: "A1.8" },
{ front: "a policial", back: "die Polizistin", lesson: "A1.8" },	{ front: "as policiais", back: "die Polizistinnen", lesson: "A1.8" },
{ front: "o enfermeiro", back: "der Krankenpfleger", lesson: "A1.8" },	{ front: "os enfermeiros", back: "die Krankenpfleger", lesson: "A1.8" },
{ front: "a enfermeira", back: "die Krankenschwester", lesson: "A1.8" },	{ front: "as enfermeiras", back: "die Krankenschwestern", lesson: "A1.8" },
{ front: "profissionalmente", back: "beruflich", lesson: "A1.8" },	
{ front: "o aluno (ensino básico)", back: "der Schüler", lesson: "A1.8" },	{ front: "os alunos", back: "die Schüler", lesson: "A1.8" },
{ front: "a aluna (ensino básico)", back: "die Schülerin", lesson: "A1.8" },	{ front: "as alunas", back: "die Schülerinnen", lesson: "A1.8" },
{ front: "o estudante (universitário)", back: "der Student", lesson: "A1.8" },	{ front: "os estudantes", back: "die Studenten", lesson: "A1.8" },
{ front: "a estudante (universitária)", back: "die Studentin", lesson: "A1.8" },	{ front: "as estudantes", back: "die Studentinnen", lesson: "A1.8" },
{ front: "estudar (na universidade)", back: "studieren", lesson: "A1.8" },	{ front: "ter estudado", back: "haben studiert", lesson: "A1.8" },
{ front: "o trabalho / emprego", back: "der Job", lesson: "A1.8" },	{ front: "os trabalhos", back: "die Jobs", lesson: "A1.8" },
{ front: "o cargo / vaga", back: "die Stelle", lesson: "A1.8" },	{ front: "os cargos / vagas", back: "die Stellen", lesson: "A1.8" },
{ front: "autônomo", back: "selbstständig", lesson: "A1.8" },	
{ front: "empregado / ativo profissionalmente", back: "berufstätig", lesson: "A1.8" },	
{ front: "desempregado", back: "arbeitslos", lesson: "A1.8" },	
{ front: "atualmente", back: "zurzeit", lesson: "A1.8" },	
{ front: "o taxista", back: "der Taxifahrer", lesson: "A1.8" },	{ front: "os taxistas", back: "die Taxifahrer", lesson: "A1.8" },
{ front: "a taxista", back: "die Taxifahrerin", lesson: "A1.8" },	{ front: "as taxistas", back: "die Taxifahrerinnen", lesson: "A1.8" },
{ front: "durar", back: "dauern", lesson: "A1.8" },	{ front: "ter durado", back: "haben gedauert", lesson: "A1.8" },
{ front: "desde", back: "seit", lesson: "A1.8" },	
{ front: "a candidatura", back: "die Bewerbung", lesson: "A1.8" },	{ front: "as candidaturas", back: "die Bewerbungen", lesson: "A1.8" },
{ front: "o estágio", back: "das Praktikum", lesson: "A1.8" },	{ front: "os estágios", back: "die Praktika", lesson: "A1.8" },
{ front: "o departamento / setor", back: "die Abteilung", lesson: "A1.8" },	{ front: "os departamentos / setores", back: "die Abteilungen", lesson: "A1.8" },
{ front: "o diretor / responsável", back: "der Leiter", lesson: "A1.8" },	{ front: "os diretores / responsáveis", back: "die Leiter", lesson: "A1.8" },
{ front: "a diretora / responsável", back: "die Leiterin", lesson: "A1.8" },	{ front: "as diretoras / responsáveis", back: "die Leiterinnen", lesson: "A1.8" },
{ front: "homenageado / respeitado", back: "geehrt", lesson: "A1.8" },	
{ front: "a economia", back: "die Wirtschaft", lesson: "A1.8" },	
{ front: "o diploma", back: "das Diplom", lesson: "A1.8" },	{ front: "os diplomas", back: "die Diplome", lesson: "A1.8" },
{ front: "agora mesmo / neste momento", back: "gerade", lesson: "A1.8" },	
{ front: "o escritório", back: "das Büro", lesson: "A1.8" },	{ front: "os escritórios", back: "die Büros", lesson: "A1.8" },
{ front: "a informação", back: "die Information", lesson: "A1.8" },	{ front: "as informações", back: "die Informationen", lesson: "A1.8" },
{ front: "a saudação", back: "der Gruß", lesson: "A1.8" },	{ front: "as saudações", back: "die Grüße", lesson: "A1.8" },
{ front: "casar-se", back: "heiraten", lesson: "A1.8" },	{ front: "ter se casado", back: "haben geheiratet", lesson: "A1.8" },
{ front: "na verdade", back: "eigentlich", lesson: "A1.8" },	
{ front: "mais tarde", back: "später", lesson: "A1.8" },	
{ front: "o guia turístico (pessoa/livro)", back: "der Reiseführer", lesson: "A1.8" },	{ front: "os guias turísticos", back: "die Reiseführer", lesson: "A1.8" },
{ front: "a guia turística", back: "die Reiseführerin", lesson: "A1.8" },	{ front: "as guias turísticas", back: "die Reiseführerinnen", lesson: "A1.8" },
{ front: "o turista", back: "der Tourist", lesson: "A1.8" },	{ front: "os turistas", back: "die Touristen", lesson: "A1.8" },
{ front: "a turista", back: "die Touristin", lesson: "A1.8" },	{ front: "as turistas", back: "die Touristinnen", lesson: "A1.8" },
{ front: "mostrar / apresentar", back: "zeigen", lesson: "A1.8" },	{ front: "ter mostrado", back: "haben gezeigt", lesson: "A1.8" },
{ front: "a experiência profissional", back: "die Berufserfahrung", lesson: "A1.8" },	
{ front: "o café (estabelecimento)", back: "das Café", lesson: "A1.8" },	{ front: "os cafés", back: "die Cafés", lesson: "A1.8" },
{ front: "o estresse", back: "der Stress", lesson: "A1.8" },	
{ front: "às vezes", back: "manchmal", lesson: "A1.8" },	
{ front: "o garçom", back: "der Kellner", lesson: "A1.8" },	{ front: "os garçons", back: "die Kellner", lesson: "A1.8" },
{ front: "a garçonete", back: "die Kellnerin", lesson: "A1.8" },	{ front: "as garçonetes", back: "die Kellnerinnen", lesson: "A1.8" },
{ front: "o restaurante", back: "das Restaurant", lesson: "A1.8" },	{ front: "os restaurantes", back: "die Restaurants", lesson: "A1.8" },
{ front: "o arquiteto", back: "der Architekt", lesson: "A1.8" },	{ front: "os arquitetos", back: "die Architekten", lesson: "A1.8" },
{ front: "a arquiteta", back: "die Architektin", lesson: "A1.8" },	{ front: "as arquitetas", back: "die Architektinnen", lesson: "A1.8" },
{ front: "o cozinheiro", back: "der Koch", lesson: "A1.8" },	{ front: "os cozinheiros", back: "die Köche", lesson: "A1.8" },
{ front: "a cozinheira", back: "die Köchin", lesson: "A1.8" },	{ front: "as cozinheiras", back: "die Köchinnen", lesson: "A1.8" },
{ front: "o operário / trabalhador", back: "der Arbeiter", lesson: "A1.8" },	{ front: "os operários / trabalhadores", back: "die Arbeiter", lesson: "A1.8" },
{ front: "a operária / trabalhadora", back: "die Arbeiterin", lesson: "A1.8" },	{ front: "as operárias / trabalhadoras", back: "die Arbeiterinnen", lesson: "A1.8" },
{ front: "pouco", back: "wenig", lesson: "A1.8" },	
{ front: "o colega", back: "der Kollege", lesson: "A1.8" },	{ front: "os colegas", back: "die Kollegen", lesson: "A1.8" },
{ front: "a colega", back: "die Kollegin", lesson: "A1.8" },	{ front: "as colegas", back: "die Kolleginnen", lesson: "A1.8" },
{ front: "o exterior (país estrangeiro)", back: "das Ausland", lesson: "A1.8" },	
{ front: "outro / diferente", back: "ander-", lesson: "A1.8" },	
{ front: "o local de trabalho / emprego", back: "der Arbeitsplatz", lesson: "A1.8" },	{ front: "os locais de trabalho / empregos", back: "die Arbeitsplätze", lesson: "A1.8" },
{ front: "o sonho", back: "der Traum", lesson: "A1.8" },	{ front: "os sonhos", back: "die Träume", lesson: "A1.8" },
{ front: "dos sonhos (prefixo)", back: "traum-", lesson: "A1.8" },	
{ front: "durante o dia", back: "tagsüber", lesson: "A1.8" },	
{ front: "três vezes", back: "dreimal", lesson: "A1.8" },	
{ front: "receber", back: "bekommen", lesson: "A1.8" },	{ front: "ter recebido", back: "haben bekommen", lesson: "A1.8" },
{ front: "o secretário", back: "der Sekretär", lesson: "A1.8" },	{ front: "os secretários", back: "die Sekretäre", lesson: "A1.8" },
{ front: "a secretária", back: "die Sekretärin", lesson: "A1.8" },	{ front: "as secretárias", back: "die Sekretärinnen", lesson: "A1.8" },
{ front: "a universidade", back: "die Universität", lesson: "A1.8" },	{ front: "as universidades", back: "die Universitäten", lesson: "A1.8" },
{ front: "com prazo determinado", back: "befristet", lesson: "A1.8" },	
{ front: "tempo integral", back: "die Vollzeit", lesson: "A1.8" },	
{ front: "meio período", back: "die Teilzeit", lesson: "A1.8" },	
{ front: "o dia todo", back: "ganztags", lesson: "A1.8" },	
{ front: "meio turno", back: "halbtags", lesson: "A1.8" },	
{ front: "pela manhã", back: "vormittags", lesson: "A1.8" },	
{ front: "à tarde", back: "nachmittags", lesson: "A1.8" },	
{ front: "a aula particular / reforço", back: "die Nachhilfe", lesson: "A1.8" },	
{ front: "às segundas-feiras", back: "montags", lesson: "A1.8" },	
{ front: "às quintas-feiras", back: "donnerstags", lesson: "A1.8" },	
{ front: "o idoso", back: "der Senior", lesson: "A1.8" },	{ front: "os idosos", back: "die Senioren", lesson: "A1.8" },
{ front: "de idosos (prefixo)", back: "senioren-", lesson: "A1.8" },	
{ front: "o ajudante (temporário)", back: "die Aushilfe", lesson: "A1.8" },	{ front: "os ajudantes", back: "die Aushilfen", lesson: "A1.8" },
{ front: "urgente", back: "dringend", lesson: "A1.8" },	
{ front: "o serviço", back: "der Service", lesson: "A1.8" },	
{ front: "à noite", back: "abends", lesson: "A1.8" },	
{ front: "às terças-feiras", back: "dienstags", lesson: "A1.8" },	
{ front: "às quartas-feiras", back: "mittwochs", lesson: "A1.8" },	
{ front: "às sextas-feiras", back: "freitags", lesson: "A1.8" },	
{ front: "aos domingos", back: "sonntags", lesson: "A1.8" },	
{ front: "pagar", back: "zahlen", lesson: "A1.8" },	{ front: "ter pago", back: "haben gezahlt", lesson: "A1.8" },
{ front: "por (ex: por hora, por pessoa)", back: "pro", lesson: "A1.8" },	
{ front: "a hora", back: "die Stunde", lesson: "A1.8" },	{ front: "as horas", back: "die Stunden", lesson: "A1.8" },
{ front: "a demanda / procura", back: "die Nachfrage", lesson: "A1.8" },	{ front: "as demandas", back: "die Nachfragen", lesson: "A1.8" },
{ front: "livre / disponível", back: "frei", lesson: "A1.8" },	
{ front: "cada um / respectivamente", back: "jeweils", lesson: "A1.8" },	
{ front: "aos sábados", back: "samstags", lesson: "A1.8" },	
{ front: "a carteira de motorista", back: "der Führerschein", lesson: "A1.9" },	{ front: "as carteiras de motorista", back: "die Führerscheine", lesson: "A1.9" },
{ front: "o bilhete / ingresso", back: "das Ticket", lesson: "A1.9" },	{ front: "os bilhetes / ingressos", back: "die Tickets", lesson: "A1.9" },
{ front: "o órgão / repartição pública", back: "das Amt", lesson: "A1.9" },	{ front: "os órgãos / repartições", back: "die Ämter", lesson: "A1.9" },
{ front: "válido", back: "gültig", lesson: "A1.9" },	
{ front: "alugar", back: "mieten", lesson: "A1.9" },	{ front: "ter alugado", back: "haben gemietet", lesson: "A1.9" },
{ front: "estrangeiro", back: "ausländisch", lesson: "A1.9" },	
{ front: "europeu", back: "europäisch", lesson: "A1.9" },	
{ front: "a União Europeia", back: "die Europäische Union", lesson: "A1.9" },	
{ front: "jovem", back: "jung", lesson: "A1.9" },	
{ front: "a viagem / percurso", back: "die Fahrt", lesson: "A1.9" },	{ front: "as viagens / percursos", back: "die Fahrten", lesson: "A1.9" },
{ front: "o bilhete de transporte", back: "die Fahrkarte", lesson: "A1.9" },	{ front: "os bilhetes", back: "die Fahrkarten", lesson: "A1.9" },
{ front: "o requerimento / pedido", back: "der Antrag", lesson: "A1.9" },	{ front: "os requerimentos", back: "die Anträge", lesson: "A1.9" },
{ front: "dever / precisar", back: "müssen", lesson: "A1.9" },	{ front: "ter precisado / dever", back: "haben gemusst", lesson: "A1.9" },
{ front: "preencher", back: "ausfüllen", lesson: "A1.9" },	{ front: "ter preenchido", back: "haben ausgefüllt", lesson: "A1.9" },
{ front: "o documento de identidade", back: "der Ausweis", lesson: "A1.9" },	{ front: "os documentos de identidade", back: "die Ausweise", lesson: "A1.9" },
{ front: "trazer consigo", back: "mitbringen", lesson: "A1.9" },	{ front: "ter trazido", back: "haben mitgebracht", lesson: "A1.9" },
{ front: "o papel", back: "das Papier", lesson: "A1.9" },	{ front: "os papéis", back: "die Papiere", lesson: "A1.9" },
{ front: "assinar", back: "unterschreiben", lesson: "A1.9" },	{ front: "ter assinado", back: "haben unterschrieben", lesson: "A1.9" },
{ front: "em dinheiro", back: "bar", lesson: "A1.9" },	
{ front: "a máquina (automática)", back: "der Automat", lesson: "A1.9" },	{ front: "as máquinas", back: "die Automaten", lesson: "A1.9" },
{ front: "funcionar", back: "funktionieren", lesson: "A1.9" },	{ front: "ter funcionado", back: "haben funktioniert", lesson: "A1.9" },
{ front: "o destino / objetivo", back: "das Ziel", lesson: "A1.9" },	{ front: "os destinos / objetivos", back: "die Ziele", lesson: "A1.9" },
{ front: "escolher", back: "wählen", lesson: "A1.9" },	{ front: "ter escolhido", back: "haben gewählt", lesson: "A1.9" },
{ front: "o adulto / a adulta", back: "der Erwachsene / die Erwachsene", lesson: "A1.9" },	{ front: "os adultos / as adultas", back: "die Erwachsenen", lesson: "A1.9" },
{ front: "selecionar", back: "auswählen", lesson: "A1.9" },	{ front: "ter selecionado", back: "haben ausgewählt", lesson: "A1.9" },
{ front: "a gente / se (impessoal)", back: "man", lesson: "A1.9" },	
{ front: "primeiro", back: "zuerst", lesson: "A1.9" },	
{ front: "depois", back: "danach", lesson: "A1.9" },	
{ front: "então / em seguida", back: "dann", lesson: "A1.9" },	
{ front: "o final / encerramento", back: "der Schluss", lesson: "A1.9" },	
{ front: "silencioso / baixo", back: "leise", lesson: "A1.9" },	
{ front: "explicar", back: "erklären", lesson: "A1.9" },	{ front: "ter explicado", back: "haben erklärt", lesson: "A1.9" },
{ front: "alto (som)", back: "laut", lesson: "A1.9" },	
{ front: "desligar / apagar (luz)", back: "ausmachen", lesson: "A1.9" },	{ front: "ter desligado", back: "haben ausgemacht", lesson: "A1.9" },
{ front: "escutar (com atenção)", back: "zuhören", lesson: "A1.9" },	{ front: "ter escutado", back: "haben zugehört", lesson: "A1.9" },
{ front: "levantar-se", back: "aufstehen", lesson: "A1.9" },	{ front: "ter se levantado", back: "sein aufgestanden", lesson: "A1.9" },
{ front: "esperar", back: "warten", lesson: "A1.9" },	{ front: "ter esperado", back: "haben gewartet", lesson: "A1.9" },
{ front: "a taxa", back: "die Gebühr", lesson: "A1.9" },	{ front: "as taxas", back: "die Gebühren", lesson: "A1.9" },
{ front: "o caixa (registradora/local)", back: "die Kasse", lesson: "A1.9" },	{ front: "os caixas", back: "die Kassen", lesson: "A1.9" },
{ front: "rir", back: "lachen", lesson: "A1.9" },	{ front: "ter rido", back: "haben gelacht", lesson: "A1.9" },
{ front: "o momento", back: "der Moment", lesson: "A1.9" },	{ front: "os momentos", back: "die Momente", lesson: "A1.9" },
{ front: "solicitar", back: "beantragen", lesson: "A1.9" },	{ front: "ter solicitado", back: "haben beantragt", lesson: "A1.9" },
{ front: "poder / ter permissão", back: "dürfen", lesson: "A1.9" },	{ front: "ter tido permissão", back: "haben gedurft", lesson: "A1.9" },
{ front: "atenção!", back: "Achtung", lesson: "A1.9" },	
{ front: "o cigarro", back: "die Zigarette", lesson: "A1.9" },	{ front: "os cigarros", back: "die Zigaretten", lesson: "A1.9" },
{ front: "fumar", back: "rauchen", lesson: "A1.9" },	{ front: "ter fumado", back: "haben geraucht", lesson: "A1.9" },
{ front: "devagar", back: "langsam", lesson: "A1.9" },	
{ front: "o estacionamento", back: "der Parkplatz", lesson: "A1.9" },	{ front: "os estacionamentos", back: "die Parkplätze", lesson: "A1.9" },
{ front: "estacionar", back: "parken", lesson: "A1.9" },	{ front: "ter estacionado", back: "haben geparkt", lesson: "A1.9" },
{ front: "permitido", back: "erlaubt", lesson: "A1.9" },	
{ front: "proibido", back: "verboten", lesson: "A1.9" },	
{ front: "a bagagem", back: "das Gepäck", lesson: "A1.9" },	
{ front: "entregar", back: "abgeben", lesson: "A1.9" },	{ front: "ter entregue", back: "haben abgegeben", lesson: "A1.9" },
{ front: "levar consigo", back: "mitnehmen", lesson: "A1.9" },	{ front: "ter levado", back: "haben mitgenommen", lesson: "A1.9" },
{ front: "sozinho", back: "allein", lesson: "A1.9" },	
{ front: "o órgão / autoridade pública", back: "die Behörde", lesson: "A1.9" },	{ front: "os órgãos / autoridades", back: "die Behörden", lesson: "A1.9" },
{ front: "a pessoa", back: "die Person", lesson: "A1.9" },	{ front: "as pessoas", back: "die Personen", lesson: "A1.9" },
{ front: "o nome de nascimento", back: "der Geburtsname", lesson: "A1.9" },	{ front: "os nomes de nascimento", back: "die Geburtsnamen", lesson: "A1.9" },
{ front: "o sexo / gênero", back: "das Geschlecht", lesson: "A1.9" },	{ front: "os sexos / gêneros", back: "die Geschlechter", lesson: "A1.9" },
{ front: "o estrangeiro", back: "der Ausländer", lesson: "A1.9" },	{ front: "os estrangeiros", back: "die Ausländer", lesson: "A1.9" },
{ front: "a estrangeira", back: "die Ausländerin", lesson: "A1.9" },	{ front: "as estrangeiras", back: "die Ausländerinnen", lesson: "A1.9" },
{ front: "viver separado", back: "getrennt leben", lesson: "A1.9" },	
{ front: "masculino", back: "männlich", lesson: "A1.9" },	
{ front: "feminino", back: "weiblich", lesson: "A1.9" },	
{ front: "o parente / a parente", back: "der Angehörige / die Angehörige", lesson: "A1.9" },	{ front: "os parentes", back: "die Angehörigen", lesson: "A1.9" },
{ front: "significar", back: "bedeuten", lesson: "A1.9" },	{ front: "ter significado", back: "haben bedeutet", lesson: "A1.9" },
{ front: "repetir", back: "wiederholen", lesson: "A1.9" },	{ front: "ter repetido", back: "haben wiederholt", lesson: "A1.9" },
{ front: "entender", back: "verstehen", lesson: "A1.9" },	{ front: "ter entendido", back: "haben verstanden", lesson: "A1.9" },
{ front: "a escola de idiomas", back: "die Sprachenschule", lesson: "A1.9" },	{ front: "as escolas de idiomas", back: "die Sprachenschulen", lesson: "A1.9" },
{ front: "frequentar / visitar", back: "besuchen", lesson: "A1.9" },	{ front: "ter frequentado / visitado", back: "haben besucht", lesson: "A1.9" },
{ front: "ajudar", back: "helfen", lesson: "A1.9" },	{ front: "ter ajudado", back: "haben geholfen", lesson: "A1.9" },
{ front: "a informação", back: "die Auskunft", lesson: "A1.9" },	{ front: "as informações", back: "die Auskünfte", lesson: "A1.9" },
{ front: "a permissão", back: "die Erlaubnis", lesson: "A1.9" },	
{ front: "a explicação", back: "die Erklärung", lesson: "A1.9" },	{ front: "as explicações", back: "die Erklärungen", lesson: "A1.9" },
{ front: "o documento", back: "das Dokument", lesson: "A1.9" },	{ front: "os documentos", back: "die Dokumente", lesson: "A1.9" },
{ front: "o dinheiro", back: "das Geld", lesson: "A1.9" },	
{ front: "suficiente", back: "genug", lesson: "A1.9" },	
{ front: "a renda", back: "das Einkommen", lesson: "A1.9" },	
{ front: "a viagem", back: "die Reise", lesson: "A1.9" },	{ front: "as viagens", back: "die Reisen", lesson: "A1.9" },
{ front: "o seguro", back: "die Versicherung", lesson: "A1.9" },	{ front: "os seguros", back: "die Versicherungen", lesson: "A1.9" },
{ front: "a embaixada", back: "die Botschaft", lesson: "A1.9" },	{ front: "as embaixadas", back: "die Botschaften", lesson: "A1.9" },
{ front: "o visto", back: "das Visum", lesson: "A1.9" },	{ front: "os vistos", back: "die Visa", lesson: "A1.9" },
{ front: "buscar / pegar", back: "holen", lesson: "A1.9" },	{ front: "ter buscado", back: "haben geholt", lesson: "A1.9" },
{ front: "o funcionário", back: "der Mitarbeiter", lesson: "A1.9" },	{ front: "os funcionários", back: "die Mitarbeiter", lesson: "A1.9" },
{ front: "a funcionária", back: "die Mitarbeiterin", lesson: "A1.9" },	{ front: "as funcionárias", back: "die Mitarbeiterinnen", lesson: "A1.9" },
{ front: "o funcionário público", back: "der Beamte", lesson: "A1.9" },	{ front: "os funcionários públicos", back: "die Beamten", lesson: "A1.9" },
{ front: "a funcionária pública", back: "die Beamtin", lesson: "A1.9" },	{ front: "as funcionárias públicas", back: "die Beamtinnen", lesson: "A1.9" },
{ front: "ganhar (dinheiro)", back: "verdienen", lesson: "A1.9" },	{ front: "ter ganhado", back: "haben verdient", lesson: "A1.9" },
{ front: "o passaporte", back: "der Pass", lesson: "A1.9" },	{ front: "os passaportes", back: "die Pässe", lesson: "A1.9" },
{ front: "viajar", back: "reisen", lesson: "A1.9" },	{ front: "ter viajado", back: "sein gereist", lesson: "A1.9" },
{ front: "o clube", back: "der Klub", lesson: "A1.10" },	{ front: "os clubes", back: "die Klubs", lesson: "A1.10" },
{ front: "emergência médica", back: "die Notaufnahme", lesson: "A1.10" },	{ front: "emergências médicas", back: "die Notaufnahmen", lesson: "A1.10" },
{ front: "a área / setor", back: "der Bereich", lesson: "A1.10" },	{ front: "as áreas", back: "die Bereiche", lesson: "A1.10" },
{ front: "o comprimido", back: "die Tablette", lesson: "A1.10" },	{ front: "os comprimidos", back: "die Tabletten", lesson: "A1.10" },
{ front: "o olho", back: "das Auge", lesson: "A1.10" },	{ front: "os olhos", back: "die Augen", lesson: "A1.10" },
{ front: "doer", back: "weh tun", lesson: "A1.10" },	{ front: "ter doído", back: "haben wehgetan", lesson: "A1.10" },
{ front: "o acidente", back: "der Unfall", lesson: "A1.10" },	{ front: "os acidentes", back: "die Unfälle", lesson: "A1.10" },
{ front: "o doutor", back: "der Doktor", lesson: "A1.10" },	{ front: "os doutores", back: "die Doktoren", lesson: "A1.10" },
{ front: "a dor", back: "der Schmerz", lesson: "A1.10" },	{ front: "as dores", back: "die Schmerzen", lesson: "A1.10" },
{ front: "dever (obrigação)", back: "sollen", lesson: "A1.10" },	{ front: "ter tido que", back: "haben gesollt", lesson: "A1.10" },
{ front: "ambos", back: "beide", lesson: "A1.10" },	
{ front: "engraçado", back: "lustig", lesson: "A1.10" },	
{ front: "grave / ruim", back: "schlimm", lesson: "A1.10" },	
{ front: "dar", back: "geben", lesson: "A1.10" },	{ front: "ter dado", back: "haben gegeben", lesson: "A1.10" },
{ front: "a ideia", back: "die Idee", lesson: "A1.10" },	{ front: "as ideias", back: "die Ideen", lesson: "A1.10" },
{ front: "a perna", back: "das Bein", lesson: "A1.10" },	{ front: "as pernas", back: "die Beine", lesson: "A1.10" },
{ front: "o cabelo", back: "das Haar", lesson: "A1.10" },	{ front: "os cabelos", back: "die Haare", lesson: "A1.10" },
{ front: "a orelha", back: "das Ohr", lesson: "A1.10" },	{ front: "as orelhas", back: "die Ohren", lesson: "A1.10" },
{ front: "o braço", back: "der Arm", lesson: "A1.10" },	{ front: "os braços", back: "die Arme", lesson: "A1.10" },
{ front: "a barriga / o abdômen", back: "der Bauch", lesson: "A1.10" },	{ front: "as barrigas", back: "die Bäuche", lesson: "A1.10" },
{ front: "o dedo", back: "der Finger", lesson: "A1.10" },	{ front: "os dedos", back: "die Finger", lesson: "A1.10" },
{ front: "o pé", back: "der Fuß", lesson: "A1.10" },	{ front: "os pés", back: "die Füße", lesson: "A1.10" },
{ front: "o pescoço", back: "der Hals", lesson: "A1.10" },	{ front: "os pescoços", back: "die Hälse", lesson: "A1.10" },
{ front: "a cabeça", back: "der Kopf", lesson: "A1.10" },	{ front: "as cabeças", back: "die Köpfe", lesson: "A1.10" },
{ front: "as costas", back: "der Rücken", lesson: "A1.10" },	
{ front: "o peito", back: "die Brust", lesson: "A1.10" },	{ front: "os peitos", back: "die Brüste", lesson: "A1.10" },
{ front: "a mão", back: "die Hand", lesson: "A1.10" },	{ front: "as mãos", back: "die Hände", lesson: "A1.10" },
{ front: "o nariz", back: "die Nase", lesson: "A1.10" },	{ front: "os narizes", back: "die Nasen", lesson: "A1.10" },
{ front: "a boca", back: "der Mund", lesson: "A1.10" },	{ front: "as bocas", back: "die Münder", lesson: "A1.10" },
{ front: "ser / estar", back: "sein", lesson: "A1.10" },	
{ front: "dela / o de vocês", back: "ihr", lesson: "A1.10" },	
{ front: "o dente", back: "der Zahn", lesson: "A1.10" },	{ front: "os dentes", back: "die Zähne", lesson: "A1.10" },
{ front: "informar", back: "informieren", lesson: "A1.10" },	{ front: "ter informado", back: "haben informiert", lesson: "A1.10" },
{ front: "nosso", back: "unser", lesson: "A1.10" },	
{ front: "ser cancelado / não ocorrer", back: "ausfallen", lesson: "A1.10" },	{ front: "foi cancelado", back: "ist ausgefallen", lesson: "A1.10" },
{ front: "a mensagem / notícia", back: "die Nachricht", lesson: "A1.10" },	{ front: "as mensagens / notícias", back: "die Nachrichten", lesson: "A1.10" },
{ front: "o beijo", back: "der Kuss", lesson: "A1.10" },	{ front: "os beijos", back: "die Küsse", lesson: "A1.10" },
{ front: "de vocês", back: "euer", lesson: "A1.10" },	
{ front: "saudável", back: "gesund", lesson: "A1.10" },	
{ front: "tomara que / oxalá", back: "hoffentlich", lesson: "A1.10" },	
{ front: "o/a conhecido(a)", back: "der Bekannte / die Bekannte", lesson: "A1.10" },	{ front: "os/as conhecidos(as)", back: "die Bekannten", lesson: "A1.10" },
{ front: "o passo", back: "der Schritt", lesson: "A1.10" },	{ front: "os passos", back: "die Schritte", lesson: "A1.10" },
{ front: "alguns / um par", back: "ein paar", lesson: "A1.10" },	
{ front: "o remédio / a medicina", back: "die Medizin", lesson: "A1.10" },	
{ front: "calmo", back: "ruhig", lesson: "A1.10" },	
{ front: "a farmácia", back: "die Apotheke", lesson: "A1.10" },	{ front: "as farmácias", back: "die Apotheken", lesson: "A1.10" },
{ front: "a febre", back: "das Fieber", lesson: "A1.10" },	
{ front: "a tosse", back: "der Husten", lesson: "A1.10" },	
{ front: "a pomada", back: "die Salbe", lesson: "A1.10" },	{ front: "as pomadas", back: "die Salben", lesson: "A1.10" },
{ front: "usar / aplicar", back: "verwenden", lesson: "A1.10" },	{ front: "ter usado / aplicado", back: "haben verwendet", lesson: "A1.10" },
{ front: "a saúde", back: "die Gesundheit", lesson: "A1.10" },	
{ front: "o resfriado", back: "der Schnupfen", lesson: "A1.10" },	
{ front: "fazer", back: "tun", lesson: "A1.10" },	{ front: "ter feito", back: "haben getan", lesson: "A1.10" },
{ front: "o remetente", back: "der Absender", lesson: "A1.10" },	{ front: "os remetentes", back: "die Absender", lesson: "A1.10" },
{ front: "o lugar / local", back: "der Ort", lesson: "A1.10" },	{ front: "os lugares", back: "die Orte", lesson: "A1.10" },
{ front: "o destinatário", back: "der Empfänger", lesson: "A1.10" },	{ front: "os destinatários", back: "die Empfänger", lesson: "A1.10" },
{ front: "a saudação (em carta/email)", back: "die Anrede", lesson: "A1.10" },	{ front: "as saudações", back: "die Anreden", lesson: "A1.10" },
{ front: "a data", back: "das Datum", lesson: "A1.10" },	{ front: "as datas / os dados", back: "die Daten", lesson: "A1.10" },
{ front: "a assinatura", back: "die Unterschrift", lesson: "A1.10" },	{ front: "as assinaturas", back: "die Unterschriften", lesson: "A1.10" },
{ front: "enviar", back: "schicken", lesson: "A1.10" },	{ front: "ter enviado", back: "haben geschickt", lesson: "A1.10" },
{ front: "o horário de atendimento", back: "die Sprechstunde", lesson: "A1.10" },	{ front: "os horários de atendimento", back: "die Sprechstunden", lesson: "A1.10" },
{ front: "a emergência", back: "der Notfall", lesson: "A1.10" },	{ front: "as emergências", back: "die Notfälle", lesson: "A1.10" },
{ front: "por perto / nas proximidades", back: "in der Nähe", lesson: "A1.10" },	
{ front: "o minuto", back: "die Minute", lesson: "A1.10" },	{ front: "os minutos", back: "die Minuten", lesson: "A1.10" },
{ front: "tudo certo / em ordem", back: "in Ordnung", lesson: "A1.10" },	
{ front: "passar (por algum lugar)", back: "vorbeikommen", lesson: "A1.10" },	{ front: "passou (por lá)", back: "ist vorbeigekommen", lesson: "A1.10" },
{ front: "o cartão do convênio", back: "die Versichertenkarte", lesson: "A1.10" },	{ front: "os cartões do convênio", back: "die Versichertenkarten", lesson: "A1.10" },
{ front: "o chão", back: "der Boden", lesson: "A1.10" },	{ front: "os pisos / os chãos", back: "die Böden", lesson: "A1.10" },
{ front: "estar deitado / localizado", back: "liegen", lesson: "A1.10" },	{ front: "ter estado deitado / situado", back: "haben gelegen", lesson: "A1.10" },
{ front: "o médico de emergência", back: "der Notarzt", lesson: "A1.10" },	{ front: "os médicos de emergência", back: "die Notärzte", lesson: "A1.10" },
{ front: "forte", back: "stark", lesson: "A1.10" },	
{ front: "a ajuda", back: "die Hilfe", lesson: "A1.10" },	
{ front: "de repente", back: "plötzlich", lesson: "A1.10" },	
{ front: "acontecer", back: "passieren", lesson: "A1.10" },	{ front: "aconteceu", back: "ist passiert", lesson: "A1.10" },
{ front: "o medicamento", back: "das Medikament", lesson: "A1.10" },	{ front: "os medicamentos", back: "die Medikamente", lesson: "A1.10" },
{ front: "a moto", back: "das Motorrad", lesson: "A1.10" },	{ front: "as motos", back: "die Motorräder", lesson: "A1.10" },
{ front: "a lesão / o ferimento", back: "die Verletzung", lesson: "A1.10" },	{ front: "as lesões / ferimentos", back: "die Verletzungen", lesson: "A1.10" },
{ front: "a oficina", back: "die Werkstatt", lesson: "A1.11" },	{ front: "as oficinas", back: "die Werkstätten", lesson: "A1.11" },
{ front: "a chave", back: "der Schlüssel", lesson: "A1.11" },	{ front: "as chaves", back: "die Schlüssel", lesson: "A1.11" },
{ front: "a rodovia (autobahn)", back: "die Autobahn", lesson: "A1.11" },	{ front: "as rodovias", back: "die Autobahnen", lesson: "A1.11" },
{ front: "a ponte", back: "die Brücke", lesson: "A1.11" },	{ front: "as pontes", back: "die Brücken", lesson: "A1.11" },
{ front: "à direita", back: "rechts", lesson: "A1.11" },	
{ front: "em frente", back: "geradeaus", lesson: "A1.11" },	
{ front: "à esquerda", back: "links", lesson: "A1.11" },	
{ front: "o caminho", back: "der Weg", lesson: "A1.11" },	{ front: "os caminhos", back: "die Wege", lesson: "A1.11" },
{ front: "a estação de trem", back: "der Bahnhof", lesson: "A1.11" },	{ front: "as estações de trem", back: "die Bahnhöfe", lesson: "A1.11" },
{ front: "o açougue", back: "die Metzgerei", lesson: "A1.11" },	{ front: "os açougues", back: "die Metzgereien", lesson: "A1.11" },
{ front: "o correio", back: "die Post", lesson: "A1.11" },	
{ front: "o hotel", back: "das Hotel", lesson: "A1.11" },	{ front: "os hotéis", back: "die Hotels", lesson: "A1.11" },
{ front: "o museu", back: "das Museum", lesson: "A1.11" },	{ front: "os museus", back: "die Museen", lesson: "A1.11" },
{ front: "o semáforo", back: "die Ampel", lesson: "A1.11" },	{ front: "os semáforos", back: "die Ampeln", lesson: "A1.11" },
{ front: "o posto de gasolina", back: "die Tankstelle", lesson: "A1.11" },	{ front: "os postos de gasolina", back: "die Tankstellen", lesson: "A1.11" },
{ front: "o mapa da cidade", back: "der Stadtplan", lesson: "A1.11" },	{ front: "os mapas da cidade", back: "die Stadtpläne", lesson: "A1.11" },
{ front: "estranho / estrangeiro", back: "fremd", lesson: "A1.11" },	
{ front: "voar", back: "fliegen", lesson: "A1.11" },	{ front: "voou", back: "ist geflogen", lesson: "A1.11" },
{ front: "o avião", back: "das Flugzeug", lesson: "A1.11" },	{ front: "os aviões", back: "die Flugzeuge", lesson: "A1.11" },
{ front: "o bonde", back: "die Straßenbahn", lesson: "A1.11" },	{ front: "os bondes", back: "die Straßenbahnen", lesson: "A1.11" },
{ front: "o trem", back: "der Zug", lesson: "A1.11" },	{ front: "os trens", back: "die Züge", lesson: "A1.11" },
{ front: "o metrô", back: "die U-Bahn", lesson: "A1.11" },	{ front: "os metrôs", back: "die U-Bahnen", lesson: "A1.11" },
{ front: "o ônibus", back: "der Bus", lesson: "A1.11" },	{ front: "os ônibus", back: "die Busse", lesson: "A1.11" },
{ front: "o trem urbano / metropolitano", back: "die S-Bahn", lesson: "A1.11" },	{ front: "os trens urbanos", back: "die S-Bahnen", lesson: "A1.11" },
{ front: "para onde", back: "wohin", lesson: "A1.11" },	
{ front: "a estação", back: "die Station", lesson: "A1.11" },	{ front: "as estações", back: "die Stationen", lesson: "A1.11" },
{ front: "o caminhão", back: "der Lkw", lesson: "A1.11" },	{ front: "os caminhões", back: "die Lkws", lesson: "A1.11" },
{ front: "a banca (de jornal)", back: "der Kiosk", lesson: "A1.11" },	{ front: "as bancas", back: "die Kioske", lesson: "A1.11" },
{ front: "o ponto de parada", back: "die Haltestelle", lesson: "A1.11" },	{ front: "os pontos de parada", back: "die Haltestellen", lesson: "A1.11" },
{ front: "a livraria", back: "die Buchhandlung", lesson: "A1.11" },	{ front: "as livrarias", back: "die Buchhandlungen", lesson: "A1.11" },
{ front: "sentar", back: "sitzen", lesson: "A1.11" },	{ front: "esteve sentado", back: "haben gesessen", lesson: "A1.11" },
{ front: "a biblioteca", back: "die Bücherei", lesson: "A1.11" },	{ front: "as bibliotecas", back: "die Büchereien", lesson: "A1.11" },
{ front: "a árvore", back: "der Baum", lesson: "A1.11" },	{ front: "as árvores", back: "die Bäume", lesson: "A1.11" },
{ front: "o banco", back: "die Bank", lesson: "A1.11" },	{ front: "os bancos", back: "die Banken", lesson: "A1.11" },
{ front: "em / junto a", back: "an", lesson: "A1.11" },	
{ front: "sobre", back: "auf", lesson: "A1.11" },	
{ front: "atrás", back: "hinter", lesson: "A1.11" },	
{ front: "ao lado de", back: "neben", lesson: "A1.11" },	
{ front: "sobre / acima de", back: "über", lesson: "A1.11" },	
{ front: "embaixo de", back: "unter", lesson: "A1.11" },	
{ front: "entre", back: "zwischen", lesson: "A1.11" },	
{ front: "a zona de pedestres", back: "die Fußgängerzone", lesson: "A1.11" },	{ front: "as zonas de pedestres", back: "die Fußgängerzonen", lesson: "A1.11" },
{ front: "o concerto", back: "das Konzert", lesson: "A1.11" },	{ front: "os concertos", back: "die Konzerte", lesson: "A1.11" },
{ front: "emprestar / alugar", back: "ausleihen", lesson: "A1.11" },	{ front: "emprestou / alugou", back: "haben ausgeliehen", lesson: "A1.11" },
{ front: "copiar", back: "kopieren", lesson: "A1.11" },	{ front: "copiou", back: "haben kopiert", lesson: "A1.11" },
{ front: "ali na frente", back: "(da) vorne", lesson: "A1.11" },	
{ front: "ali do outro lado", back: "(da) drüben", lesson: "A1.11" },	
{ front: "a esquina", back: "die Ecke", lesson: "A1.11" },	{ front: "as esquinas", back: "die Ecken", lesson: "A1.11" },
{ front: "ali atrás", back: "(da) hinten", lesson: "A1.11" },	
{ front: "partir", back: "abfahren", lesson: "A1.11" },	{ front: "partiu", back: "ist abgefahren", lesson: "A1.11" },
{ front: "a plataforma (trem)", back: "das Gleis", lesson: "A1.11" },	{ front: "as plataformas", back: "die Gleise", lesson: "A1.11" },
{ front: "embarcar", back: "einsteigen", lesson: "A1.11" },	{ front: "embarcou", back: "ist eingestiegen", lesson: "A1.11" },
{ front: "o atraso", back: "die Verspätung", lesson: "A1.11" },	{ front: "os atrasos", back: "die Verspätungen", lesson: "A1.11" },
{ front: "chegar", back: "ankommen", lesson: "A1.11" },	{ front: "chegou", back: "ist angekommen", lesson: "A1.11" },
{ front: "fazer baldeação / conexão", back: "umsteigen", lesson: "A1.11" },	{ front: "trocou de transporte", back: "ist umgestiegen", lesson: "A1.11" },
{ front: "desembarcar", back: "aussteigen", lesson: "A1.11" },	{ front: "desembarcou", back: "ist ausgestiegen", lesson: "A1.11" },
{ front: "a partida", back: "die Abfahrt", lesson: "A1.11" },	{ front: "as partidas", back: "die Abfahrten", lesson: "A1.11" },
{ front: "a chegada", back: "die Ankunft", lesson: "A1.11" },	{ front: "as chegadas", back: "die Ankünfte", lesson: "A1.11" },
{ front: "a conexão (transporte)", back: "der Anschluss", lesson: "A1.11" },	{ front: "as conexões", back: "die Anschlüsse", lesson: "A1.11" },
{ front: "a plataforma (de embarque)", back: "der Bahnsteig", lesson: "A1.11" },	{ front: "as plataformas", back: "die Bahnsteige", lesson: "A1.11" },
{ front: "direto", back: "direkt", lesson: "A1.11" },	
{ front: "o aviso por alto-falante", back: "die Durchsage", lesson: "A1.11" },	{ front: "os avisos por alto-falante", back: "die Durchsagen", lesson: "A1.11" },
{ front: "o guichê", back: "der Schalter", lesson: "A1.11" },	{ front: "os guichês", back: "die Schalter", lesson: "A1.11" },
{ front: "ida e volta", back: "hin und zurück", lesson: "A1.11" },	
{ front: "o horário de transporte", back: "der Fahrplan", lesson: "A1.11" },	{ front: "os horários de transporte", back: "die Fahrpläne", lesson: "A1.11" },
{ front: "a bolsa", back: "die Tasche", lesson: "A1.12" },	{ front: "as bolsas", back: "die Taschen", lesson: "A1.12" },
{ front: "o saco / a sacola", back: "die Tüte", lesson: "A1.12" },	{ front: "os sacos / as sacolas", back: "die Tüten", lesson: "A1.12" },
{ front: "a conta", back: "die Rechnung", lesson: "A1.12" },	{ front: "as contas", back: "die Rechnungen", lesson: "A1.12" },
{ front: "quebrado", back: "kaputt", lesson: "A1.12" },	
{ front: "consertar", back: "reparieren", lesson: "A1.12" },	{ front: "consertou", back: "haben repariert", lesson: "A1.12" },
{ front: "bravo / azedo", back: "sauer", lesson: "A1.12" },	
{ front: "antipático / grosseiro", back: "unfreundlich", lesson: "A1.12" },	
{ front: "normal", back: "normal", lesson: "A1.12" },	
{ front: "o país de origem", back: "das Heimatland", lesson: "A1.12" },	{ front: "os países de origem", back: "die Heimatländer", lesson: "A1.12" },
{ front: "o treino", back: "Training", lesson: "A1.12" },	
{ front: "as roupas", back: "die Kleider", lesson: "A1.12" },	
{ front: "costurar", back: "nähen", lesson: "A1.12" },	{ front: "costurou", back: "haben genäht", lesson: "A1.12" },
{ front: "o conserto", back: "die Reparatur", lesson: "A1.12" },	{ front: "os consertos", back: "die Reparaturen", lesson: "A1.12" },
{ front: "tomar banho (de chuveiro)", back: "duschen", lesson: "A1.12" },	{ front: "tomou banho", back: "haben geduscht", lesson: "A1.12" },
{ front: "a declaração / afirmação", back: "die Aussage", lesson: "A1.12" },	{ front: "as declarações", back: "die Aussagen", lesson: "A1.12" },
{ front: "o técnico", back: "der Techniker", lesson: "A1.12" },	{ front: "os técnicos", back: "die Techniker", lesson: "A1.12" },
{ front: "o aquecedor", back: "die Heizung", lesson: "A1.12" },	{ front: "os aquecedores", back: "die Heizungen", lesson: "A1.12" },
{ front: "a impressora", back: "der Drucker", lesson: "A1.12" },	{ front: "as impressoras", back: "die Drucker", lesson: "A1.12" },
{ front: "o modelo", back: "das Modell", lesson: "A1.12" },	{ front: "os modelos", back: "die Modelle", lesson: "A1.12" },
{ front: "a garantia", back: "die Garantie", lesson: "A1.12" },	{ front: "as garantias", back: "die Garantien", lesson: "A1.12" },
{ front: "passado / finalizado", back: "vorbei-", lesson: "A1.12" },	
{ front: "levar (até lá)", back: "vorbeibringen", lesson: "A1.12" },	{ front: "levou até lá", back: "haben vorbeigebracht", lesson: "A1.12" },
{ front: "ligar (um aparelho/luz)", back: "anmachen", lesson: "A1.12" },	{ front: "ligou", back: "haben angemacht", lesson: "A1.12" },
{ front: "a porta", back: "die Tür", lesson: "A1.12" },	{ front: "as portas", back: "die Türen", lesson: "A1.12" },
{ front: "fechar", back: "zumachen", lesson: "A1.12" },	{ front: "fechou", back: "haben zugemacht", lesson: "A1.12" },
{ front: "a janela", back: "das Fenster", lesson: "A1.12" },	{ front: "as janelas", back: "die Fenster", lesson: "A1.12" },
{ front: "abrir", back: "aufmachen", lesson: "A1.12" },	{ front: "abriu", back: "haben aufgemacht", lesson: "A1.12" },
{ front: "o papel", back: "das Papier", lesson: "A1.12" },	{ front: "os papéis", back: "die Papiere", lesson: "A1.12" },
{ front: "a luz", back: "das Licht", lesson: "A1.12" },	{ front: "as luzes", back: "die Lichter", lesson: "A1.12" },
{ front: "a máquina de lavar louça", back: "die Spülmaschine", lesson: "A1.12" },	{ front: "as máquinas de lavar louça", back: "die Spülmaschinen", lesson: "A1.12" },
{ front: "recomendar", back: "empfehlen", lesson: "A1.12" },	{ front: "recomendou", back: "haben empfohlen", lesson: "A1.12" },
{ front: "reservar", back: "reservieren", lesson: "A1.12" },	{ front: "reservou", back: "haben reserviert", lesson: "A1.12" },
{ front: "a recepção", back: "die Rezeption", lesson: "A1.12" },	{ front: "as recepções", back: "die Rezeptionen", lesson: "A1.12" },
{ front: "o anúncio (falado)", back: "die Ansage", lesson: "A1.12" },	{ front: "os anúncios", back: "die Ansagen", lesson: "A1.12" },
{ front: "apertar / empurrar", back: "drücken", lesson: "A1.12" },	{ front: "apertou / empurrou", back: "haben gedrückt", lesson: "A1.12" },
{ front: "registrar / inscrever-se", back: "anmelden", lesson: "A1.12" },	{ front: "registrou", back: "haben angemeldet", lesson: "A1.12" },
{ front: "conectar", back: "verbinden", lesson: "A1.12" },	{ front: "conectou", back: "haben verbunden", lesson: "A1.12" },
{ front: "deixar (mensagem, etc.)", back: "hinterlassen", lesson: "A1.12" },	{ front: "deixou", back: "haben hinterlassen", lesson: "A1.12" },
{ front: "retornar a ligação", back: "zurückrufen", lesson: "A1.12" },	{ front: "retornou a ligação", back: "haben zurückgerufen", lesson: "A1.12" },
{ front: "parecer / aparência", back: "aussehen", lesson: "A1.12" },	{ front: "pareceu / teve aparência", back: "haben ausgesehen", lesson: "A1.12" },
{ front: "as férias", back: "der Urlaub", lesson: "A1.12" },	{ front: "as férias (plural formal)", back: "die Urlaube", lesson: "A1.12" },
{ front: "do lado de fora", back: "draußen", lesson: "A1.12" },	
{ front: "embora / longe", back: "weg", lesson: "A1.12" },	
{ front: "a cafeteira", back: "die Kaffeemaschine", lesson: "A1.12" },	{ front: "as cafeteiras", back: "die Kaffeemaschinen", lesson: "A1.12" },
{ front: "o cabeleireiro", back: "der Friseur", lesson: "A1.12" },	{ front: "os cabeleireiros", back: "die Friseure", lesson: "A1.12" },
{ front: "a cabeleireira", back: "die Friseurin", lesson: "A1.12" },	{ front: "as cabeleireiras", back: "die Friseurinnen", lesson: "A1.12" },
{ front: "pedir / encomendar", back: "bestellen", lesson: "A1.12" },	{ front: "pediu / encomendou", back: "hat bestellt", lesson: "A1.12" },
{ front: "a oferta", back: "das Angebot", lesson: "A1.12" },	{ front: "as ofertas", back: "die Angebote", lesson: "A1.12" },
{ front: "oferecer", back: "anbieten", lesson: "A1.12" },	{ front: "ofereceu", back: "hat angeboten", lesson: "A1.12" },
{ front: "o/a jovem", back: "der Jugendliche / die Jugendliche", lesson: "A1.12" },	{ front: "os jovens", back: "die Jugendlichen", lesson: "A1.12" },
{ front: "o manual de instruções", back: "die Gebrauchsanweisung", lesson: "A1.12" },	{ front: "os manuais de instruções", back: "die Gebrauchsanweisungen", lesson: "A1.12" },
{ front: "a lavanderia / limpeza", back: "die Reinigung", lesson: "A1.12" },	{ front: "as lavanderias / limpezas", back: "die Reinigungen", lesson: "A1.12" },
{ front: "o plugue (tomada)", back: "der Stecker", lesson: "A1.12" },	{ front: "os plugues", back: "die Stecker", lesson: "A1.12" },
{ front: "a tomada", back: "die Steckdose", lesson: "A1.12" },	{ front: "as tomadas", back: "die Steckdosen", lesson: "A1.12" },
{ front: "puxar", back: "ziehen", lesson: "A1.12" },	{ front: "puxou", back: "hat gezogen", lesson: "A1.12" },
{ front: "em cima / acima", back: "oben", lesson: "A1.12" },	
{ front: "o vinagre", back: "der Essig", lesson: "A1.12" },	
{ front: "a tecla", back: "die Taste", lesson: "A1.12" },	{ front: "as teclas", back: "die Tasten", lesson: "A1.12" },
{ front: "o segundo (tempo)", back: "die Sekunde", lesson: "A1.12" },	{ front: "os segundos", back: "die Sekunden", lesson: "A1.12" },
{ front: "a jaqueta", back: "die Jacke", lesson: "A1.13" },	{ front: "as jaquetas", back: "die Jacken", lesson: "A1.13" },
{ front: "o casaco", back: "der Mantel", lesson: "A1.13" },	{ front: "os casacos", back: "die Mäntel", lesson: "A1.13" },
{ front: "fino / magro", back: "dünn", lesson: "A1.13" },	
{ front: "servir (vestir)", back: "passen", lesson: "A1.13" },	{ front: "serviu / ficou bem", back: "hat gepasst", lesson: "A1.13" },
{ front: "largo", back: "weit", lesson: "A1.13" },	
{ front: "a roupa", back: "die Kleidung", lesson: "A1.13" },	
{ front: "a blusa", back: "die Bluse", lesson: "A1.13" },	{ front: "as blusas", back: "die Blusen", lesson: "A1.13" },
{ front: "a camiseta", back: "das T-Shirt", lesson: "A1.13" },	{ front: "as camisetas", back: "die T-Shirts", lesson: "A1.13" },
{ front: "o sapato", back: "der Schuh", lesson: "A1.13" },	{ front: "os sapatos", back: "die Schuhe", lesson: "A1.13" },
{ front: "a calça", back: "die Hose", lesson: "A1.13" },	{ front: "as calças", back: "die Hosen", lesson: "A1.13" },
{ front: "a saia", back: "der Rock", lesson: "A1.13" },	{ front: "as saias", back: "die Röcke", lesson: "A1.13" },
{ front: "o vestido", back: "das Kleid", lesson: "A1.13" },	{ front: "os vestidos", back: "die Kleider", lesson: "A1.13" },
{ front: "a bota", back: "der Stiefel", lesson: "A1.13" },	{ front: "as botas", back: "die Stiefel", lesson: "A1.13" },
{ front: "o suéter", back: "der Pullover", lesson: "A1.13" },	{ front: "os suéteres", back: "die Pullover", lesson: "A1.13" },
{ front: "a meia", back: "die Socke", lesson: "A1.13" },	{ front: "as meias", back: "die Socken", lesson: "A1.13" },
{ front: "a meia-calça", back: "der Strumpf", lesson: "A1.13" },	{ front: "as meias-calça", back: "die Strümpfe", lesson: "A1.13" },
{ front: "o jeans", back: "die Jeans", lesson: "A1.13" },	
{ front: "o lenço", back: "das Tuch", lesson: "A1.13" },	{ front: "os lenços", back: "die Tücher", lesson: "A1.13" },
{ front: "a camisa", back: "das Hemd", lesson: "A1.13" },	{ front: "as camisas", back: "die Hemden", lesson: "A1.13" },
{ front: "o terno", back: "der Anzug", lesson: "A1.13" },	{ front: "os ternos", back: "die Anzüge", lesson: "A1.13" },
{ front: "o óculos", back: "die Brille", lesson: "A1.13" },	{ front: "os óculos", back: "die Brillen", lesson: "A1.13" },
{ front: "chato / entediante", back: "langweilig", lesson: "A1.13" },	
{ front: "o guarda-chuva", back: "der (Regen-)Schirm", lesson: "A1.13" },	{ front: "os guarda-chuvas", back: "die (Regen-)Schirme", lesson: "A1.13" },
{ front: "barato", back: "günstig", lesson: "A1.13" },	
{ front: "perfeito", back: "perfekt", lesson: "A1.13" },	
{ front: "estar em pé / ficar bem", back: "stehen", lesson: "A1.13" },	{ front: "esteve em pé / ficou bem", back: "hat gestanden", lesson: "A1.13" },
{ front: "a salsicha grelhada", back: "die Bratwurst", lesson: "A1.13" },	{ front: "as salsichas grelhadas", back: "die Bratwürste", lesson: "A1.13" },
{ front: "a paisagem", back: "die Landschaft", lesson: "A1.13" },	{ front: "as paisagens", back: "die Landschaften", lesson: "A1.13" },
{ front: "a montanha", back: "der Berg", lesson: "A1.13" },	{ front: "as montanhas", back: "die Berge", lesson: "A1.13" },
{ front: "a aldeia", back: "das Dorf", lesson: "A1.13" },	{ front: "as aldeias", back: "die Dörfer", lesson: "A1.13" },
{ front: "a floresta", back: "der Wald", lesson: "A1.13" },	{ front: "as florestas", back: "die Wälder", lesson: "A1.13" },
{ front: "o Mar do Norte", back: "die Nordsee", lesson: "A1.13" },	
{ front: "a praia", back: "der Strand", lesson: "A1.13" },	{ front: "as praias", back: "die Strände", lesson: "A1.13" },
{ front: "o mar", back: "das Meer", lesson: "A1.13" },	{ front: "os mares", back: "die Meere", lesson: "A1.13" },
{ front: "o porto", back: "der Hafen", lesson: "A1.13" },	{ front: "os portos", back: "die Häfen", lesson: "A1.13" },
{ front: "nunca", back: "nie", lesson: "A1.13" },	
{ front: "melhor", back: "besser", lesson: "A1.13" },	
{ front: "o melhor", back: "am besten", lesson: "A1.13" },	
{ front: "para trás", back: "rückwärts", lesson: "A1.13" },	
{ front: "para frente", back: "vorwärts", lesson: "A1.13" },	
{ front: "junto / junto com", back: "dabei", lesson: "A1.13" },	
{ front: "pesado / difícil", back: "schwer", lesson: "A1.13" },	
{ front: "o músico", back: "der Musiker", lesson: "A1.13" },	{ front: "os músicos", back: "die Musiker", lesson: "A1.13" },
{ front: "a musicista", back: "die Musikerin", lesson: "A1.13" },	{ front: "as musicistas", back: "die Musikerinnen", lesson: "A1.13" },
{ front: "treinar", back: "trainieren", lesson: "A1.13" },	{ front: "treinou", back: "hat trainiert", lesson: "A1.13" },
{ front: "andar de bicicleta", back: "rad fahren", lesson: "A1.13" },	{ front: "andou de bicicleta", back: "ist rad gefahren", lesson: "A1.13" },
{ front: "o recorde", back: "der Rekord", lesson: "A1.13" },	{ front: "os recordes", back: "die Rekorde", lesson: "A1.13" },
{ front: "preferido / de preferência", back: "am liebsten", lesson: "A1.13" },	
{ front: "mais", back: "am meisten", lesson: "A1.13" },	
{ front: "satisfeito", back: "zufrieden", lesson: "A1.13" },	
{ front: "a piada", back: "der Witz", lesson: "A1.13" },	{ front: "as piadas", back: "die Witze", lesson: "A1.13" },
{ front: "este / esta", back: "dies-", lesson: "A1.13" },	
{ front: "qual", back: "welch-", lesson: "A1.13" },	
{ front: "a mala", back: "der Koffer", lesson: "A1.13" },	{ front: "as malas", back: "die Koffer", lesson: "A1.13" },
{ front: "pertencer", back: "gehören", lesson: "A1.13" },	{ front: "pertenceu", back: "hat gehört", lesson: "A1.13" },
{ front: "gostar", back: "mögen", lesson: "A1.13" },	{ front: "gostou", back: "hat gemocht", lesson: "A1.13" },
{ front: "o dia da semana", back: "der Wochentag", lesson: "A1.13" },	{ front: "os dias da semana", back: "die Wochentage", lesson: "A1.13" },
{ front: "o térreo", back: "das Erdgeschoss", lesson: "A1.13" },	{ front: "os térreos", back: "die Erdgeschosse", lesson: "A1.13" },
{ front: "o andar superior", back: "das Obergeschoss", lesson: "A1.13" },	{ front: "os andares superiores", back: "die Obergeschosse", lesson: "A1.13" },
{ front: "o subsolo", back: "das Untergeschoss", lesson: "A1.13" },	{ front: "os subsolos", back: "die Untergeschosse", lesson: "A1.13" },
{ front: "a saída", back: "der Ausgang", lesson: "A1.13" },	{ front: "as saídas", back: "die Ausgänge", lesson: "A1.13" },
{ front: "a drogaria", back: "die Drogerie", lesson: "A1.13" },	{ front: "as drogarias", back: "die Drogerien", lesson: "A1.13" },
{ front: "a cosmética", back: "die Kosmetik", lesson: "A1.13" },	
{ front: "a joia", back: "der Schmuck", lesson: "A1.13" },	
{ front: "a louça", back: "das Geschirr", lesson: "A1.13" },	
{ front: "o copo / vidro", back: "das Glas", lesson: "A1.13" },	{ front: "os copos / vidros", back: "die Gläser", lesson: "A1.13" },
{ front: "a moda", back: "die Mode", lesson: "A1.13" },	{ front: "as modas", back: "die Moden", lesson: "A1.13" },
{ front: "a entrada", back: "der Eingang", lesson: "A1.13" },	{ front: "as entradas", back: "die Eingänge", lesson: "A1.13" },
{ front: "desculpar-se", back: "entschuldigen", lesson: "A1.13" },	{ front: "desculpou-se", back: "hat entschuldigt", lesson: "A1.13" },
{ front: "saber", back: "wissen", lesson: "A1.13" },	{ front: "soube / sabia", back: "hat gewusst", lesson: "A1.13" },
{ front: "o sabonete", back: "die Seife", lesson: "A1.13" },	{ front: "os sabonetes", back: "die Seifen", lesson: "A1.13" },
{ front: "a escova de dentes", back: "die Zahnbürste", lesson: "A1.13" },	{ front: "as escovas de dentes", back: "die Zahnbürsten", lesson: "A1.13" },
{ front: "a pasta de dente", back: "die Zahnpasta", lesson: "A1.13" },	
{ front: "o tamanho", back: "die Größe", lesson: "A1.13" },	{ front: "os tamanhos", back: "die Größen", lesson: "A1.13" },
{ front: "vestir", back: "anziehen", lesson: "A1.13" },	{ front: "vestiu", back: "hat angezogen", lesson: "A1.13" },
{ front: "experimentar (roupa)", back: "anprobieren", lesson: "A1.13" },	{ front: "experimentou (roupa)", back: "hat anprobiert", lesson: "A1.13" },
{ front: "o aniversário", back: "der Geburtstag", lesson: "A1.14" },	{ front: "os aniversários", back: "die Geburtstage", lesson: "A1.14" },
{ front: "o pneu", back: "der Reifen", lesson: "A1.14" },	{ front: "os pneus", back: "die Reifen", lesson: "A1.14" },
{ front: "contar", back: "erzählen", lesson: "A1.14" },	{ front: "contou", back: "hat erzählt", lesson: "A1.14" },
{ front: "festejar", back: "feiern", lesson: "A1.14" },	{ front: "festejou", back: "hat gefeiert", lesson: "A1.14" },
{ front: "a despedida", back: "der Abschied", lesson: "A1.14" },	{ front: "as despedidas", back: "die Abschiede", lesson: "A1.14" },
{ front: "em breve", back: "bald", lesson: "A1.14" },	
{ front: "começar", back: "beginnen", lesson: "A1.14" },	{ front: "começou", back: "hat begonnen", lesson: "A1.14" },
{ front: "o posto de trabalho", back: "die Arbeitsstelle", lesson: "A1.14" },	{ front: "os postos de trabalho", back: "die Arbeitsstellen", lesson: "A1.14" },
{ front: "a sorte / felicidade", back: "das Glück", lesson: "A1.14" },	
{ front: "a alegria", back: "die Freude", lesson: "A1.14" },	
{ front: "desejar", back: "(sich) wünschen", lesson: "A1.14" },	{ front: "desejou", back: "hat gewünscht", lesson: "A1.14" },
{ front: "parabenizar", back: "gratulieren", lesson: "A1.14" },	{ front: "parabenizou", back: "hat gratuliert", lesson: "A1.14" },
{ front: "a felicitação / parabéns", back: "der Glückwunsch", lesson: "A1.14" },	{ front: "as felicitações", back: "die Glückwünsche", lesson: "A1.14" },
{ front: "acreditar", back: "glauben", lesson: "A1.14" },	{ front: "acreditou", back: "hat geglaubt", lesson: "A1.14" },
{ front: "visitar", back: "besuchen", lesson: "A1.14" },	{ front: "visitou", back: "hat besucht", lesson: "A1.14" },
{ front: "novembro", back: "der November", lesson: "A1.14" },	
{ front: "janeiro", back: "der Januar", lesson: "A1.14" },	
{ front: "primeiro", back: "erste", lesson: "A1.14" },	
{ front: "segundo", back: "zweite", lesson: "A1.14" },	
{ front: "terceiro", back: "dritte", lesson: "A1.14" },	
{ front: "fevereiro", back: "der Februar", lesson: "A1.14" },	
{ front: "março", back: "der März", lesson: "A1.14" },	
{ front: "abril", back: "der April", lesson: "A1.14" },	
{ front: "maio", back: "der Mai", lesson: "A1.14" },	
{ front: "junho", back: "der Juni", lesson: "A1.14" },	
{ front: "julho", back: "der Juli", lesson: "A1.14" },	
{ front: "agosto", back: "der August", lesson: "A1.14" },	
{ front: "setembro", back: "der September", lesson: "A1.14" },	
{ front: "outubro", back: "der Oktober", lesson: "A1.14" },	
{ front: "dezembro", back: "der Dezember", lesson: "A1.14" },	
{ front: "a flor", back: "die Blume", lesson: "A1.14" },	{ front: "as flores", back: "die Blumen", lesson: "A1.14" },
{ front: "o carnaval", back: "der Karneval", lesson: "A1.14" },	
{ front: "último / passada", back: "letzt-", lesson: "A1.14" },	
{ front: "participar", back: "mitmachen", lesson: "A1.14" },	{ front: "participou", back: "hat mitgemacht", lesson: "A1.14" },
{ front: "o feriado", back: "der Feiertag", lesson: "A1.14" },	{ front: "os feriados", back: "die Feiertage", lesson: "A1.14" },
{ front: "o presente", back: "das Geschenk", lesson: "A1.14" },	{ front: "os presentes", back: "die Geschenke", lesson: "A1.14" },
{ front: "amar", back: "(sich) lieben", lesson: "A1.14" },	{ front: "amou", back: "hat geliebt", lesson: "A1.14" },
{ front: "maravilhoso", back: "wunderbar", lesson: "A1.14" },	
{ front: "a sobremesa", back: "der Nachtisch", lesson: "A1.14" },	{ front: "as sobremesas", back: "die Nachtische", lesson: "A1.14" },
{ front: "limpar", back: "putzen", lesson: "A1.14" },	{ front: "limpou", back: "hat geputzt", lesson: "A1.14" },
{ front: "o laptop", back: "der Laptop", lesson: "A1.14" },	{ front: "os laptops", back: "die Laptops", lesson: "A1.14" },
{ front: "sujo", back: "schmutzig", lesson: "A1.14" },	
{ front: "lavar", back: "waschen", lesson: "A1.14" },	{ front: "lavou", back: "hat gewaschen", lesson: "A1.14" },
{ front: "o avô", back: "der Großvater", lesson: "A1.14" },	{ front: "os avôs", back: "die Großväter", lesson: "A1.14" },
{ front: "a avó", back: "die Großmutter", lesson: "A1.14" },	{ front: "as avós", back: "die Großmütter", lesson: "A1.14" },
{ front: "a festa", back: "die Feier", lesson: "A1.14" },	{ front: "as festas", back: "die Feiern", lesson: "A1.14" },
{ front: "organizar", back: "organisieren", lesson: "A1.14" },	{ front: "organizou", back: "hat organisiert", lesson: "A1.14" },
{ front: "informar", back: "Bescheid geben", lesson: "A1.14" },	{ front: "informou", back: "hat Bescheid gegeben", lesson: "A1.14" },
{ front: "o convite", back: "die Einladung", lesson: "A1.14" },	{ front: "os convites", back: "die Einladungen", lesson: "A1.14" },
{ front: "o voo", back: "der Flug", lesson: "A1.14" },	{ front: "os voos", back: "die Flüge", lesson: "A1.14" },
{ front: "tornar-se / vir a ser", back: "werden", lesson: "A1.14" },	{ front: "tornou-se / virou", back: "ist geworden", lesson: "A1.14" },
{ front: "convidar", back: "einladen", lesson: "A1.14" },	{ front: "convidou", back: "hat eingeladen", lesson: "A1.14" },
{ front: "alegrar-se", back: "sich freuen", lesson: "A1.14" },	{ front: "alegrou-se", back: "hat sich gefreut", lesson: "A1.14" },
{ front: "a festa", back: "das Fest", lesson: "A1.14" },	{ front: "as festas", back: "die Feste", lesson: "A1.14" },
{ front: "cordial / caloroso", back: "herzlich", lesson: "A1.14" },	
{ front: "o convidado / hóspede", back: "das Gast", lesson: "A1.14" },	{ front: "os convidados / hóspedes", back: "die Gäste", lesson: "A1.14" },
{ front: "o motivo / razão", back: "der Grund", lesson: "A1.14" },	{ front: "os motivos", back: "die Gründe", lesson: "A1.14" },
{ front: "a resposta", back: "die Antwort", lesson: "A1.14" },	{ front: "as respostas", back: "die Antworten", lesson: "A1.14" },
{ front: "pedir", back: "bitten", lesson: "A1.14" },	{ front: "pediu", back: "hat gebeten", lesson: "A1.14" },
{ front: "o Natal", back: "das Weihnachten", lesson: "A1.14" },	
{ front: "a Páscoa", back: "das Ostern", lesson: "A1.14" },	
{ front: "a véspera de Ano Novo", back: "das Silvester", lesson: "A1.14" },	
{ front: "o Ano Novo", back: "das Neujahr", lesson: "A1.14" },	
{ front: "ganhar", back: "gewinnen", lesson: "A1.14" },	{ front: "ganhou", back: "hat gewonnen", lesson: "A1.14" },
{ front: "o parente", back: "der Verwandte / die Verwandte", lesson: "A1.14" },	{ front: "os parentes", back: "die Verwandten", lesson: "A1.14" },
{ front: "o cartão / cartão postal", back: "die Karte", lesson: "A1.14" },	{ front: "os cartões", back: "die Karten", lesson: "A1.14" },
{ front: "o casamento", back: "die Hochzeit", lesson: "A1.14" },	{ front: "os casamentos", back: "die Hochzeiten", lesson: "A1.14" },
{ front: "feliz", back: "glücklich", lesson: "A2.1" },	
{ front: "olhar", back: "ansehen", lesson: "A2.1" },	{ front: "olhou", back: "hat angesehen", lesson: "A2.1" },
{ front: "o vizinho", back: "der Nachbar", lesson: "A2.1" },	{ front: "os vizinhos", back: "die Nachbarn", lesson: "A2.1" },
{ front: "a vizinha", back: "die Nachbarin", lesson: "A2.1" },	{ front: "as vizinhas", back: "die Nachbarinnen", lesson: "A2.1" },
{ front: "a compra", back: "der Einkauf", lesson: "A2.1" },	{ front: "as compras", back: "die Einkäufe", lesson: "A2.1" },
{ front: "funcionar", back: "klappen", lesson: "A2.1" },	{ front: "funcionou", back: "hat geklappt", lesson: "A2.1" },
{ front: "o centro", back: "das Zentrum", lesson: "A2.1" },	{ front: "os centros", back: "die Zentren", lesson: "A2.1" },
{ front: "o sentimento", back: "das Gefühl", lesson: "A2.1" },	{ front: "os sentimentos", back: "die Gefühle", lesson: "A2.1" },
{ front: "o começo", back: "der Anfang", lesson: "A2.1" },	{ front: "os começos", back: "die Anfänge", lesson: "A2.1" },
{ front: "sentir falta", back: "vermissen", lesson: "A2.1" },	{ front: "sentiu falta", back: "hat vermisst", lesson: "A2.1" },
{ front: "porque", back: "weil", lesson: "A2.1" },	
{ front: "o ser humano", back: "der Mensch", lesson: "A2.1" },	{ front: "as pessoas", back: "die Menschen", lesson: "A2.1" },
{ front: "o empregador", back: "der Arbeitgeber", lesson: "A2.1" },	{ front: "os empregadores", back: "die Arbeitgeber", lesson: "A2.1" },
{ front: "a empregadora", back: "die Arbeitgeberin", lesson: "A2.1" },	{ front: "as empregadoras", back: "die Arbeitgeberinnen", lesson: "A2.1" },
{ front: "mudar-se", back: "umziehen", lesson: "A2.1" },	{ front: "mudou-se", back: "ist umgezogen", lesson: "A2.1" },
{ front: "conhecer-se", back: "(sich) kennenlernen", lesson: "A2.1" },	{ front: "conheceu-se", back: "hat kennengelernt", lesson: "A2.1" },
{ front: "ontem", back: "gestern", lesson: "A2.1" },	
{ front: "a mudança", back: "der Umzug", lesson: "A2.1" },	{ front: "as mudanças", back: "die Umzüge", lesson: "A2.1" },
{ front: "as coisas", back: "die Sachen", lesson: "A2.1" },	
{ front: "desempacotar", back: "auspacken", lesson: "A2.1" },	{ front: "desempacotou", back: "hat ausgepackt", lesson: "A2.1" },
{ front: "adormecer", back: "einschlafen", lesson: "A2.1" },	{ front: "adormeceu", back: "ist eingeschlafen", lesson: "A2.1" },
{ front: "o despertador", back: "der Wecker", lesson: "A2.1" },	{ front: "os despertadores", back: "die Wecker", lesson: "A2.1" },
{ front: "lembrar-se", back: "(sich) merken", lesson: "A2.1" },	{ front: "lembrou-se", back: "hat gemerkt", lesson: "A2.1" },
{ front: "finalmente", back: "schließlich", lesson: "A2.1" },	
{ front: "até mesmo", back: "sogar", lesson: "A2.1" },	
{ front: "o dia de trabalho", back: "der Arbeitstag", lesson: "A2.1" },	{ front: "os dias de trabalho", back: "die Arbeitstage", lesson: "A2.1" },
{ front: "soar", back: "klingen", lesson: "A2.1" },	{ front: "soou", back: "hat geklungen", lesson: "A2.1" },
{ front: "vivenciar", back: "erleben", lesson: "A2.1" },	{ front: "viveu", back: "hat erlebt", lesson: "A2.1" },
{ front: "o problema", back: "die Panne", lesson: "A2.1" },	{ front: "os problemas", back: "die Pannen", lesson: "A2.1" },
{ front: "o dia-a-dia", back: "der Alltag", lesson: "A2.1" },	
{ front: "perder", back: "verpassen", lesson: "A2.1" },	{ front: "perdeu", back: "hat verpasst", lesson: "A2.1" },
{ front: "notar", back: "bemerken", lesson: "A2.1" },	{ front: "notou", back: "hat bemerkt", lesson: "A2.1" },
{ front: "saber, experienciar", back: "erfahren", lesson: "A2.1" },	{ front: "soube, experienciou", back: "hat erfahren", lesson: "A2.1" },
{ front: "imaginar-se, apresentar-se", back: "(sich) vorstellen", lesson: "A2.1" },	{ front: "apresentou-se", back: "hat vorgestellt", lesson: "A2.1" },
{ front: "a carteira", back: "die Geldbörse", lesson: "A2.1" },	{ front: "as carteiras", back: "die Geldbörsen", lesson: "A2.1" },
{ front: "perder", back: "verlieren", lesson: "A2.1" },	{ front: "perdeu", back: "hat verloren", lesson: "A2.1" },
{ front: "o azar", back: "das Pech", lesson: "A2.1" },	
{ front: "o cartão de crédito", back: "die Kreditkarte", lesson: "A2.1" },	{ front: "os cartões de crédito", back: "die Kreditkarten", lesson: "A2.1" },
{ front: "empurrar, bater", back: "stoßen", lesson: "A2.1" },	{ front: "empurrou/bateu", back: "hat/ist gestoßen", lesson: "A2.1" },
{ front: "vergonhoso", back: "peinlich", lesson: "A2.1" },	
{ front: "o tio", back: "der Onkel", lesson: "A2.1" },	{ front: "os tios", back: "die Onkel", lesson: "A2.1" },
{ front: "a tia", back: "die Tante", lesson: "A2.1" },	{ front: "as tias", back: "die Tanten", lesson: "A2.1" },
{ front: "o primo", back: "der Cousin", lesson: "A2.1" },	{ front: "os primos", back: "die Cousins", lesson: "A2.1" },
{ front: "a prima", back: "die Cousine", lesson: "A2.1" },	{ front: "as primas", back: "die Cousinen", lesson: "A2.1" },
{ front: "o sobrinho", back: "der Neffe", lesson: "A2.1" },	{ front: "os sobrinhos", back: "die Neffen", lesson: "A2.1" },
{ front: "a sobrinha", back: "die Nichte", lesson: "A2.1" },	{ front: "as sobrinhas", back: "die Nichten", lesson: "A2.1" },
{ front: "simpático", back: "sympathisch", lesson: "A2.1" },	
{ front: "o membro", back: "das Mitglied", lesson: "A2.1" },	{ front: "os membros", back: "die Mitglieder", lesson: "A2.1" },
{ front: "a casa compartilhada", back: "die Wohngemeinschaft", lesson: "A2.1" },	{ front: "as casas compartilhadas", back: "die Wohngemeinschaften", lesson: "A2.1" },
{ front: "provavelmente", back: "wahrscheinlich", lesson: "A2.1" },	
{ front: "o telhado", back: "das Dach", lesson: "A2.1" },	{ front: "os telhados", back: "die Dächer", lesson: "A2.1" },
{ front: "até agora", back: "bisher", lesson: "A2.1" },	
{ front: "diferente", back: "verschieden", lesson: "A2.1" },	
{ front: "o bairro", back: "das Viertel", lesson: "A2.1" },	{ front: "os bairros", back: "die Viertel", lesson: "A2.1" },
{ front: "o inquilino", back: "der Mieter", lesson: "A2.1" },	{ front: "os inquilinos", back: "die Mieter", lesson: "A2.1" },
{ front: "a inquilina", back: "die Mieterin", lesson: "A2.1" },	{ front: "as inquilinas", back: "die Mieterinnen", lesson: "A2.1" },
{ front: "mudar-se para dentro", back: "einziehen", lesson: "A2.1" },	{ front: "mudou-se para dentro", back: "ist eingezogen", lesson: "A2.1" },
{ front: "a vez", back: "das Mal", lesson: "A2.1" },	{ front: "as vezes", back: "die Male", lesson: "A2.1" },
{ front: "engraçado, estranho", back: "komisch", lesson: "A2.1" },	
{ front: "alguém", back: "jemand", lesson: "A2.1" },	
{ front: "alcançar, passar", back: "reichen", lesson: "A2.1" },	{ front: "alcançou, passou", back: "hat gereicht", lesson: "A2.1" },
{ front: "dividir", back: "teilen", lesson: "A2.1" },	{ front: "dividiu", back: "hat geteilt", lesson: "A2.1" },
{ front: "mudar-se para fora", back: "ausziehen", lesson: "A2.1" },	{ front: "mudou-se para fora", back: "ist ausgezogen", lesson: "A2.1" },
{ front: "o lugar", back: "der Platz", lesson: "A2.1" },	{ front: "os lugares", back: "die Plätze", lesson: "A2.1" },
{ front: "cada um", back: "jeder", lesson: "A2.1" },	
{ front: "usar", back: "benutzen", lesson: "A2.1" },	{ front: "usou", back: "hat benutzt", lesson: "A2.1" },
{ front: "em conjunto", back: "gemeinsam", lesson: "A2.1" },	
{ front: "caso contrário", back: "sonst", lesson: "A2.1" },	
{ front: "agora", back: "nun", lesson: "A2.1" },	
{ front: "normalmente", back: "normalerweise", lesson: "A2.1" },	
{ front: "grávida", back: "schwanger", lesson: "A2.1" },	
{ front: "o sogro", back: "der Schwiegervater", lesson: "A2.1" },	{ front: "os sogros", back: "die Schwiegerväter", lesson: "A2.1" },
{ front: "a sogra", back: "die Schwiegermutter", lesson: "A2.1" },	{ front: "as sogras", back: "die Schwiegermütter", lesson: "A2.1" },
{ front: "o lar, a casa", back: "der Haushalt", lesson: "A2.1" },	{ front: "os lares, as casas", back: "die Haushalte", lesson: "A2.1" },
{ front: "a aposentadoria", back: "die Rente", lesson: "A2.1" },	{ front: "as aposentadorias", back: "die Renten", lesson: "A2.1" },
{ front: "a energia", back: "die Energie", lesson: "A2.2" },	
{ front: "mesmo, por si mesmo", back: "selbst", lesson: "A2.2" },	
{ front: "trocar, mudar", back: "wechseln", lesson: "A2.2" },	{ front: "trocou, mudou", back: "hat gewechselt", lesson: "A2.2" },
{ front: "o teto", back: "die Decke", lesson: "A2.2" },	{ front: "os tetos", back: "die Decken", lesson: "A2.2" },
{ front: "pendurar", back: "hängen", lesson: "A2.2" },	{ front: "pendurou", back: "hat gehängt / hat gehangen", lesson: "A2.2" },
{ front: "o agradecimento", back: "der Dank", lesson: "A2.2" },	
{ front: "nada", back: "nichts", lesson: "A2.2" },	
{ front: "a quantidade", back: "die Menge", lesson: "A2.2" },	{ front: "as quantidades", back: "die Mengen", lesson: "A2.2" },
{ front: "a caneta", back: "der Kugelschreiber", lesson: "A2.2" },	{ front: "as canetas", back: "die Kugelschreiber", lesson: "A2.2" },
{ front: "colocar, enfiar", back: "stecken", lesson: "A2.2" },	{ front: "colocou, enfiou", back: "hat gesteckt", lesson: "A2.2" },
{ front: "a chave", back: "das Schloss", lesson: "A2.2" },	{ front: "as chaves", back: "die Schlösser", lesson: "A2.2" },
{ front: "estar de pé, ficar", back: "stehen", lesson: "A2.2" },	{ front: "ficou de pé", back: "hat gestanden", lesson: "A2.2" },
{ front: "a imagem", back: "das Bild", lesson: "A2.2" },	{ front: "as imagens", back: "die Bilder", lesson: "A2.2" },
{ front: "a parede", back: "die Wand", lesson: "A2.2" },	{ front: "as paredes", back: "die Wände", lesson: "A2.2" },
{ front: "o gato", back: "die Katze", lesson: "A2.2" },	{ front: "os gatos", back: "die Katzen", lesson: "A2.2" },
{ front: "colocar, pôr", back: "legen", lesson: "A2.2" },	{ front: "colocou", back: "hat gelegt", lesson: "A2.2" },
{ front: "a calma, o sossego", back: "die Ruhe", lesson: "A2.2" },	
{ front: "a placa", back: "das Schild", lesson: "A2.2" },	{ front: "as placas", back: "die Schilder", lesson: "A2.2" },
{ front: "incomodar", back: "stören", lesson: "A2.2" },	{ front: "incomodou", back: "hat gestört", lesson: "A2.2" },
{ front: "colocar, pôr", back: "stellen", lesson: "A2.2" },	{ front: "colocou", back: "hat gestellt", lesson: "A2.2" },
{ front: "a caneta, o lápis", back: "der Stift", lesson: "A2.2" },	{ front: "as canetas, os lápis", back: "die Stifte", lesson: "A2.2" },
{ front: "construir", back: "bauen", lesson: "A2.2" },	{ front: "construiu", back: "hat gebaut", lesson: "A2.2" },
{ front: "ali, para lá", back: "dahin", lesson: "A2.2" },	
{ front: "a planta", back: "die Pflanze", lesson: "A2.2" },	{ front: "as plantas", back: "die Pflanzen", lesson: "A2.2" },
{ front: "lá, para lá", back: "dorthin", lesson: "A2.2" },	
{ front: "a cautela, a precaução", back: "die Vorsicht", lesson: "A2.2" },	
{ front: "cair", back: "runterfallen", lesson: "A2.2" },	{ front: "caiu", back: "ist gefallen", lesson: "A2.2" },
{ front: "para dentro", back: "rein", lesson: "A2.2" },	
{ front: "o lixo", back: "der Müll", lesson: "A2.2" },	
{ front: "para fora", back: "raus", lesson: "A2.2" },	
{ front: "entrar", back: "reinkommen", lesson: "A2.2" },	{ front: "entrou", back: "ist reingekommen", lesson: "A2.2" },
{ front: "a comunicação, a mensagem", back: "die Mitteilung", lesson: "A2.2" },	{ front: "as comunicações, as mensagens", back: "die Mitteilungen", lesson: "A2.2" },
{ front: "o morador", back: "der Bewohner", lesson: "A2.2" },	{ front: "os moradores", back: "die Bewohner", lesson: "A2.2" },
{ front: "a moradora", back: "die Bewohnerin", lesson: "A2.2" },	{ front: "as moradoras", back: "die Bewohnerinnen", lesson: "A2.2" },
{ front: "separar", back: "trennen", lesson: "A2.2" },	{ front: "separou", back: "hat getrennt", lesson: "A2.2" },
{ front: "bio-", back: "bio-", lesson: "A2.2" },	
{ front: "o lixo, o resíduo", back: "der Abfall", lesson: "A2.2" },	{ front: "os lixos, os resíduos", back: "die Abfälle", lesson: "A2.2" },
{ front: "o plástico", back: "das Plastik", lesson: "A2.2" },	
{ front: "prestar atenção", back: "beachten", lesson: "A2.2" },	{ front: "prestou atenção", back: "hat beachtet", lesson: "A2.2" },
{ front: "a coleta de lixo", back: "die Müllabfuhr", lesson: "A2.2" },	{ front: "as coletas de lixo", back: "die Müllabfuhren", lesson: "A2.2" },
{ front: "a lata de lixo", back: "die Mülltonne", lesson: "A2.2" },	{ front: "as latas de lixo", back: "die Mülltonnen", lesson: "A2.2" },
{ front: "colocar, estacionar", back: "abstellen", lesson: "A2.2" },	{ front: "colocou, estacionou", back: "hat abgestellt", lesson: "A2.2" },
{ front: "a entrada (de garagem)", back: "die Einfahrt", lesson: "A2.2" },	{ front: "as entradas (de garagem)", back: "die Einfahrten", lesson: "A2.2" },
{ front: "o pátio", back: "der Hof", lesson: "A2.2" },	{ front: "os pátios", back: "die Höfe", lesson: "A2.2" },
{ front: "demitir, cancelar", back: "kündigen", lesson: "A2.2" },	{ front: "demitiu, cancelou", back: "hat gekündigt", lesson: "A2.2" },
{ front: "o contrato", back: "der Vertrag", lesson: "A2.2" },	{ front: "os contratos", back: "die Verträge", lesson: "A2.2" },
{ front: "esperar, ter esperança", back: "hoffen", lesson: "A2.2" },	{ front: "esperou, teve esperança", back: "hat gehofft", lesson: "A2.2" },
{ front: "a compreensão", back: "das Verständnis", lesson: "A2.2" },	
{ front: "finalizar, concluir", back: "abschließen", lesson: "A2.2" },	{ front: "finalizou, concluiu", back: "hat abgeschlossen", lesson: "A2.2" },
{ front: "baixo", back: "niedrig", lesson: "A2.2" },	
{ front: "os custos", back: "die Kosten", lesson: "A2.2" },	
{ front: "aumentar", back: "(sich) erhöhen", lesson: "A2.2" },	{ front: "aumentou", back: "hat erhöht", lesson: "A2.2" },
{ front: "remover", back: "entfernen", lesson: "A2.2" },	{ front: "removeu", back: "hat entfernt", lesson: "A2.2" },
{ front: "o objeto", back: "der Gegenstand", lesson: "A2.2" },	{ front: "os objetos", back: "die Gegenstände", lesson: "A2.2" },
{ front: "aquecer", back: "heizen", lesson: "A2.2" },	{ front: "aqueceu", back: "hat geheizt", lesson: "A2.2" },
{ front: "o carrinho de bebê", back: "der Kinderwagen", lesson: "A2.2" },	{ front: "os carrinhos de bebê", back: "die Kinderwagen", lesson: "A2.2" },
{ front: "o elevador", back: "der Aufzug", lesson: "A2.2" },	{ front: "os elevadores", back: "die Aufzüge", lesson: "A2.2" },
{ front: "a escada", back: "die Treppe", lesson: "A2.2" },	{ front: "as escadas", back: "die Treppen", lesson: "A2.2" },
{ front: "a caixa de correio", back: "der Briefkasten", lesson: "A2.2" },	{ front: "as caixas de correio", back: "die Briefkästen", lesson: "A2.2" },
{ front: "a solução", back: "die Lösung", lesson: "A2.2" },	{ front: "as soluções", back: "die Lösungen", lesson: "A2.2" },
{ front: "bastante, razoavelmente", back: "ziemlich", lesson: "A2.2" },	
{ front: "ter razão", back: "recht haben", lesson: "A2.2" },	{ front: "teve razão", back: "hat recht gehabt", lesson: "A2.2" },
{ front: "a pergunta", back: "die Frage", lesson: "A2.2" },	{ front: "as perguntas", back: "die Fragen", lesson: "A2.2" },
{ front: "o pedido", back: "die Bitte", lesson: "A2.2" },	{ front: "os pedidos", back: "die Bitten", lesson: "A2.2" },
{ front: "a intenção", back: "die Absicht", lesson: "A2.2" },	{ front: "as intenções", back: "die Absichten", lesson: "A2.2" },
{ front: "o turno", back: "die Schicht", lesson: "A2.2" },	{ front: "os turnos", back: "die Schichten", lesson: "A2.2" },
{ front: "deixar, permitir", back: "lassen", lesson: "A2.2" },	{ front: "deixou, permitiu", back: "hat gelassen", lesson: "A2.2" },
{ front: "lançar, atirar", back: "werfen", lesson: "A2.2" },	{ front: "lançou, atirou", back: "hat geworfen", lesson: "A2.2" },
{ front: "prestar atenção", back: "aufpassen", lesson: "A2.2" },	{ front: "prestou atenção", back: "hat aufgepasst", lesson: "A2.2" },
{ front: "regar, derramar", back: "gießen", lesson: "A2.2" },	{ front: "regou, derramou", back: "hat gegossen", lesson: "A2.2" },
{ front: "realmente, de verdade", back: "wirklich", lesson: "A2.2" },	
{ front: "tocar (campainha)", back: "klingeln", lesson: "A2.2" },	{ front: "tocou (campainha)", back: "hat geklingelt", lesson: "A2.2" },
{ front: "discutir", back: "besprechen", lesson: "A2.2" },	{ front: "discutiu", back: "hat besprochen", lesson: "A2.2" },
{ front: "alimentar", back: "füttern", lesson: "A2.2" },	{ front: "alimentou", back: "hat gefüttert", lesson: "A2.2" },
{ front: "o trabalhador, o artesão", back: "der Handwerker", lesson: "A2.2" },	{ front: "os trabalhadores, os artesãos", back: "die Handwerker", lesson: "A2.2" },
{ front: "o lixo orgânico", back: "der Biomüll", lesson: "A2.2" },	
{ front: "a sobremesa", back: "die Nachspeise", lesson: "A2.3" },	{ front: "as sobremesas", back: "die Nachspeisen", lesson: "A2.3" },
{ front: "o mel", back: "der Honig", lesson: "A2.3" },	
{ front: "geralmente", back: "meistens", lesson: "A2.3" },	
{ front: "raramente", back: "selten", lesson: "A2.3" },	
{ front: "estar correto, votar", back: "stimmen", lesson: "A2.3" },	{ front: "esteve correto, votou", back: "hat gestimmt", lesson: "A2.3" },
{ front: "a caminho, em trânsito", back: "unterwegs", lesson: "A2.3" },	
{ front: "a refeição", back: "die Mahlzeit", lesson: "A2.3" },	{ front: "as refeições", back: "die Mahlzeiten", lesson: "A2.3" },
{ front: "ao meio-dia", back: "mittags", lesson: "A2.3" },	
{ front: "de manhã", back: "morgens", lesson: "A2.3" },	
{ front: "a xícara", back: "die Tasse", lesson: "A2.3" },	{ front: "as xícaras", back: "die Tassen", lesson: "A2.3" },
{ front: "certamente, com certeza", back: "bestimmt", lesson: "A2.3" },	
{ front: "a comida", back: "das Essen", lesson: "A2.3" },	
{ front: "o almoço", back: "das Mittagessen", lesson: "A2.3" },	{ front: "os almoços", back: "die Mittagessen", lesson: "A2.3" },
{ front: "a cantina", back: "die Kantine", lesson: "A2.3" },	{ front: "as cantinas", back: "die Kantinen", lesson: "A2.3" },
{ front: "quase", back: "fast", lesson: "A2.3" },	
{ front: "vegetariano", back: "vegetarisch", lesson: "A2.3" },	
{ front: "o prato, o prato de comida", back: "das Gericht", lesson: "A2.3" },	{ front: "os pratos", back: "die Gerichte", lesson: "A2.3" },
{ front: "o hábito", back: "die Gewohnheit", lesson: "A2.3" },	{ front: "os hábitos", back: "die Gewohnheiten", lesson: "A2.3" },
{ front: "assumir, adotar", back: "übernehmen", lesson: "A2.3" },	{ front: "assumiu, adotou", back: "hat übernommen", lesson: "A2.3" },
{ front: "a geleia", back: "die Marmelade", lesson: "A2.3" },	{ front: "as geleias", back: "die Marmeladen", lesson: "A2.3" },
{ front: "alemão", back: "deutsch", lesson: "A2.3" },	
{ front: "o porco", back: "das Schwein", lesson: "A2.3" },	{ front: "os porcos", back: "die Schweine", lesson: "A2.3" },
{ front: "o álcool", back: "der Alkohol", lesson: "A2.3" },	
{ front: "duas vezes", back: "zweimal", lesson: "A2.3" },	
{ front: "a colher", back: "der Löffel", lesson: "A2.3" },	{ front: "as colheres", back: "die Löffel", lesson: "A2.3" },
{ front: "a faca", back: "das Messer", lesson: "A2.3" },	{ front: "as facas", back: "die Messer", lesson: "A2.3" },
{ front: "o prato", back: "der Teller", lesson: "A2.3" },	{ front: "os pratos", back: "die Teller", lesson: "A2.3" },
{ front: "o garfo", back: "die Gabel", lesson: "A2.3" },	{ front: "os garfos", back: "die Gabeln", lesson: "A2.3" },
{ front: "o quarteto", back: "das Quartett", lesson: "A2.3" },	{ front: "os quartetos", back: "die Quartette", lesson: "A2.3" },
{ front: "a panela", back: "der Topf", lesson: "A2.3" },	{ front: "as panelas", back: "die Töpfe", lesson: "A2.3" },
{ front: "a chaleira", back: "die Kanne", lesson: "A2.3" },	{ front: "as chaleiras", back: "die Kannen", lesson: "A2.3" },
{ front: "a tigela", back: "die Schüssel", lesson: "A2.3" },	{ front: "as tigelas", back: "die Schüsseln", lesson: "A2.3" },
{ front: "a frigideira", back: "die Pfanne", lesson: "A2.3" },	{ front: "as frigideiras", back: "die Pfannen", lesson: "A2.3" },
{ front: "o apetite", back: "der Appetit", lesson: "A2.3" },	
{ front: "cheirar", back: "riechen", lesson: "A2.3" },	{ front: "cheirou", back: "hat gerochen", lesson: "A2.3" },
{ front: "despir-se, mudar-se", back: "(sich) ausziehen", lesson: "A2.3" },	{ front: "despiu-se, mudou-se", back: "hat ausgezogen", lesson: "A2.3" },
{ front: "cheio", back: "voll", lesson: "A2.3" },	
{ front: "ok", back: "okay", lesson: "A2.3" },	
{ front: "antes", back: "vorher", lesson: "A2.3" },	
{ front: "educado, cortês", back: "höflich", lesson: "A2.3" },	
{ front: "a dieta", back: "die Diät", lesson: "A2.3" },	{ front: "as dietas", back: "die Diäten", lesson: "A2.3" },
{ front: "satisfeito", back: "satt", lesson: "A2.3" },	
{ front: "diferente", back: "anders", lesson: "A2.3" },	
{ front: "igualmente", back: "genauso", lesson: "A2.3" },	
{ front: "surpreender", back: "überraschen", lesson: "A2.3" },	{ front: "surpreendeu", back: "hat überrascht", lesson: "A2.3" },
{ front: "estranho, peculiar", back: "seltsam", lesson: "A2.3" },	
{ front: "picante, afiado", back: "scharf", lesson: "A2.3" },	
{ front: "doce", back: "süß", lesson: "A2.3" },	
{ front: "salgado", back: "salzig", lesson: "A2.3" },	
{ front: "gordo, frito", back: "fett", lesson: "A2.3" },	
{ front: "liderar, guiar", back: "leiten", lesson: "A2.3" },	{ front: "liderou, guiou", back: "hat geleitet", lesson: "A2.3" },
{ front: "fresco", back: "frisch", lesson: "A2.3" },	
{ front: "redondo", back: "rund", lesson: "A2.3" },	
{ front: "diferente", back: "unterschiedlich", lesson: "A2.3" },	
{ front: "o tipo, a forma", back: "die Art", lesson: "A2.3" },	{ front: "os tipos, as formas", back: "die Arten", lesson: "A2.3" },
{ front: "o cereal", back: "das Müsli", lesson: "A2.3" },	{ front: "os cereais", back: "die Müslis", lesson: "A2.3" },
{ front: "a fruta", back: "die Frucht", lesson: "A2.3" },	{ front: "as frutas", back: "die Früchte", lesson: "A2.3" },
{ front: "a entrada", back: "die Vorspeise", lesson: "A2.3" },	{ front: "as entradas", back: "die Vorspeisen", lesson: "A2.3" },
{ front: "principal", back: "Haupt-", lesson: "A2.3" },	
{ front: "a porcentagem", back: "das Prozent", lesson: "A2.3" },	{ front: "as porcentagens", back: "die Prozente", lesson: "A2.3" },
{ front: "o mercado", back: "der Markt", lesson: "A2.3" },	{ front: "os mercados", back: "die Märkte", lesson: "A2.3" },
{ front: "regional", back: "regional", lesson: "A2.3" },	
{ front: "o produto", back: "das Produkt", lesson: "A2.3" },	{ front: "os produtos", back: "die Produkte", lesson: "A2.3" },
{ front: "o ambiente, os arredores", back: "die Umgebung", lesson: "A2.3" },	{ front: "os ambientes, os arredores", back: "die Umgebungen", lesson: "A2.3" },
{ front: "o bife", back: "das Steak", lesson: "A2.3" },	{ front: "os bifes", back: "die Steaks", lesson: "A2.3" },
{ front: "a fábrica", back: "die Fabrik", lesson: "A2.3" },	{ front: "as fábricas", back: "die Fabriken", lesson: "A2.3" },
{ front: "contra", back: "gegen", lesson: "A2.3" },	
{ front: "planejar", back: "planen", lesson: "A2.3" },	{ front: "planejou", back: "hat geplant", lesson: "A2.3" },
{ front: "diário, diariamente", back: "täglich", lesson: "A2.3" },	
{ front: "o schnitzel", back: "das Schnitzel", lesson: "A2.3" },	{ front: "os schnitzels", back: "die Schnitzel", lesson: "A2.3" },
{ front: "a sopa", back: "die Suppe", lesson: "A2.3" },	{ front: "as sopas", back: "die Suppen", lesson: "A2.3" },
{ front: "o pedaço", back: "das Stück", lesson: "A2.3" },	{ front: "os pedaços", back: "die Stücke", lesson: "A2.3" },
{ front: "o limão", back: "die Zitrone", lesson: "A2.3" },	{ front: "os limões", back: "die Zitronen", lesson: "A2.3" },
{ front: "limpo", back: "sauber", lesson: "A2.3" },	
{ front: "o boi", back: "das Rind", lesson: "A2.3" },	{ front: "os bois", back: "die Rinder", lesson: "A2.3" },
{ front: "o assado", back: "der Braten", lesson: "A2.3" },	{ front: "os assados", back: "die Braten", lesson: "A2.3" },
{ front: "ocupado", back: "besetzt", lesson: "A2.3" },	
{ front: "a gorjeta", back: "das Trinkgeld", lesson: "A2.3" },	{ front: "as gorjetas", back: "die Trinkgelder", lesson: "A2.3" },
{ front: "o copo", back: "das Glas", lesson: "A2.3" },	{ front: "os copos", back: "die Gläser", lesson: "A2.3" },
{ front: "a reserva", back: "die Reservierung", lesson: "A2.4" },	{ front: "as reservas", back: "die Reservierungen", lesson: "A2.4" },
{ front: "a confirmação", back: "die Bestätigung", lesson: "A2.4" },	{ front: "as confirmações", back: "die Bestätigungen", lesson: "A2.4" },
{ front: "anotar", back: "notieren", lesson: "A2.4" },	{ front: "anotou", back: "hat notiert", lesson: "A2.4" },
{ front: "online", back: "online", lesson: "A2.4" },	
{ front: "difícil", back: "schwierig", lesson: "A2.4" },	
{ front: "a reunião, a conversa", back: "die Besprechung", lesson: "A2.4" },	{ front: "as reuniões", back: "die Besprechungen", lesson: "A2.4" },
{ front: "ou seja, pois", back: "nämlich", lesson: "A2.4" },	
{ front: "amigável, simpático", back: "freundlich", lesson: "A2.4" },	
{ front: "inteligente", back: "klug", lesson: "A2.4" },	
{ front: "o erro", back: "der Fehler", lesson: "A2.4" },	{ front: "os erros", back: "die Fehler", lesson: "A2.4" },
{ front: "se, quando", back: "wenn", lesson: "A2.4" },	
{ front: "seguro", back: "sicher", lesson: "A2.4" },	
{ front: "o material", back: "das Material", lesson: "A2.4" },	{ front: "os materiais", back: "die Materialien", lesson: "A2.4" },
{ front: "o participante", back: "der Teilnehmer", lesson: "A2.4" },	{ front: "os participantes", back: "die Teilnehmer", lesson: "A2.4" },
{ front: "a participante", back: "die Teilnehmerin", lesson: "A2.4" },	{ front: "as participantes", back: "die Teilnehmerinnen", lesson: "A2.4" },
{ front: "a dica", back: "der Tipp", lesson: "A2.4" },	{ front: "as dicas", back: "die Tipps", lesson: "A2.4" },
{ front: "regularmente", back: "regelmäßig", lesson: "A2.4" },	
{ front: "prestar atenção", back: "achten auf", lesson: "A2.4" },	{ front: "prestou atenção", back: "hat geachtet", lesson: "A2.4" },
{ front: "o bilhete, o pedaço de papel", back: "der Zettel", lesson: "A2.4" },	{ front: "os bilhetes, os pedaços de papel", back: "die Zettel", lesson: "A2.4" },
{ front: "a loja de departamentos", back: "das Kaufhaus", lesson: "A2.4" },	{ front: "as lojas de departamentos", back: "die Kaufhäuser", lesson: "A2.4" },
{ front: "utilizar", back: "nutzen", lesson: "A2.4" },	{ front: "utilizou", back: "hat genutzt", lesson: "A2.4" },
{ front: "a plataforma", back: "die Plattform", lesson: "A2.4" },	{ front: "as plataformas", back: "die Plattformen", lesson: "A2.4" },
{ front: "o fórum", back: "das Forum", lesson: "A2.4" },	{ front: "os fóruns", back: "die Foren", lesson: "A2.4" },
{ front: "a agência", back: "die Agentur", lesson: "A2.4" },	{ front: "as agências", back: "die Agenturen", lesson: "A2.4" },
{ front: "o trabalho temporário", back: "die Zeitarbeit", lesson: "A2.4" },	{ front: "os trabalhos temporários", back: "die Zeitarbeiten", lesson: "A2.4" },
{ front: "o aprendiz / a aprendiz", back: "der Auszubildende / die Auszubildende", lesson: "A2.4" },	{ front: "os aprendizes", back: "die Auszubildenden", lesson: "A2.4" },
{ front: "desligar", back: "aus·schalten", lesson: "A2.4" },	{ front: "desligou", back: "hat ausgeschaltet", lesson: "A2.4" },
{ front: "o sindicato", back: "die Gewerkschaft", lesson: "A2.4" },	{ front: "os sindicatos", back: "die Gewerkschaften", lesson: "A2.4" },
{ front: "a segurança", back: "die Sicherheit", lesson: "A2.4" },	
{ front: "a proteção", back: "der Schutz", lesson: "A2.4" },	
{ front: "a empresa", back: "der Betrieb", lesson: "A2.4" },	{ front: "as empresas", back: "die Betriebe", lesson: "A2.4" },
{ front: "a reunião, assembleia", back: "die Versammlung", lesson: "A2.4" },	{ front: "as reuniões, as assembleias", back: "die Versammlungen", lesson: "A2.4" },
{ front: "o prazo", back: "die Frist", lesson: "A2.4" },	{ front: "os prazos", back: "die Fristen", lesson: "A2.4" },
{ front: "a capacitação, a formação", back: "die Weiterbildung", lesson: "A2.4" },	{ front: "as capacitações, as formações", back: "die Weiterbildungen", lesson: "A2.4" },
{ front: "o interesse", back: "das Interesse", lesson: "A2.4" },	
{ front: "aposentar-se", back: "in Rente gehen", lesson: "A2.4" },	
{ front: "a vida", back: "das Leben", lesson: "A2.4" },	
{ front: "o aposentado", back: "der Rentner", lesson: "A2.4" },	{ front: "os aposentados", back: "die Rentner", lesson: "A2.4" },
{ front: "a aposentada", back: "die Rentnerin", lesson: "A2.4" },	{ front: "as aposentadas", back: "die Rentnerinnen", lesson: "A2.4" },
{ front: "o evento", back: "die Veranstaltung", lesson: "A2.4" },	{ front: "os eventos", back: "die Veranstaltungen", lesson: "A2.4" },
{ front: "virar, recorrer", back: "wenden", lesson: "A2.4" },	{ front: "virou, recorreu", back: "hat gewandt", lesson: "A2.4" },
{ front: "acontecer", back: "statt·finden", lesson: "A2.4" },	{ front: "aconteceu", back: "hat stattgefunden", lesson: "A2.4" },
{ front: "o conselho da empresa", back: "der Betriebsrat", lesson: "A2.4" },	{ front: "os conselhos das empresas", back: "die Betriebsräte", lesson: "A2.4" },
{ front: "relatar, informar", back: "berichten", lesson: "A2.4" },	{ front: "relatou, informou", back: "hat berichtet", lesson: "A2.4" },
{ front: "aconselhar", back: "beraten", lesson: "A2.4" },	{ front: "aconselhou", back: "hat beraten", lesson: "A2.4" },
{ front: "o tarifário", back: "der Tarif", lesson: "A2.4" },	{ front: "os tarifários", back: "die Tarife", lesson: "A2.4" },
{ front: "o direito", back: "das Recht", lesson: "A2.4" },	{ front: "os direitos", back: "die Rechte", lesson: "A2.4" },
{ front: "a rescisão", back: "die Kündigung", lesson: "A2.4" },	{ front: "as rescisões", back: "die Kündigungen", lesson: "A2.4" },
{ front: "a demissão", back: "die Entlassung", lesson: "A2.4" },	{ front: "as demissões", back: "die Entlassungen", lesson: "A2.4" },
{ front: "a norma", back: "die Vorschrift", lesson: "A2.4" },	{ front: "as normas", back: "die Vorschriften", lesson: "A2.4" },
{ front: "sem", back: "ohne", lesson: "A2.4" },	
{ front: "demitir", back: "entlassen", lesson: "A2.4" },	{ front: "demitiu", back: "hat entlassen", lesson: "A2.4" },
{ front: "proteger", back: "schützen", lesson: "A2.4" },	{ front: "protegeu", back: "hat geschützt", lesson: "A2.4" },
{ front: "agradecer", back: "(sich) bedanken", lesson: "A2.4" },	{ front: "agradeceu", back: "hat bedankt", lesson: "A2.4" },
{ front: "organizar, direcionar", back: "aus·richten", lesson: "A2.4" },	{ front: "organizou, direcionou", back: "hat ausgerichtet", lesson: "A2.4" },
{ front: "a exportação", back: "der Export", lesson: "A2.4" },	{ front: "as exportações", back: "die Exporte", lesson: "A2.4" },
{ front: "tentar", back: "versuchen", lesson: "A2.4" },	{ front: "tentou", back: "hat versucht", lesson: "A2.4" },
{ front: "ninguém", back: "niemand", lesson: "A2.4" },	
{ front: "o final do expediente", back: "der Feierabend", lesson: "A2.4" },	{ front: "os finais do expediente", back: "die Feierabende", lesson: "A2.4" },
{ front: "a importação", back: "der Import", lesson: "A2.4" },	{ front: "as importações", back: "die Importe", lesson: "A2.4" },
{ front: "o trabalhador", back: "der Arbeitnehmer", lesson: "A2.4" },	{ front: "os trabalhadores", back: "die Arbeitnehmer", lesson: "A2.4" },
{ front: "a trabalhadora", back: "die Arbeitnehmerin", lesson: "A2.4" },	{ front: "as trabalhadoras", back: "die Arbeitnehmerinnen", lesson: "A2.4" },
{ front: "em média", back: "durchschnittlich", lesson: "A2.4" },	
{ front: "a ideia, a noção", back: "die Ahnung", lesson: "A2.4" },	{ front: "as ideias, as noções", back: "die Ahnungen", lesson: "A2.4" },
{ front: "o dia da independência", back: "der Nationalfeiertag", lesson: "A2.4" },	{ front: "os dias da independência", back: "die Nationalfeiertage", lesson: "A2.4" },
{ front: "a hora extra", back: "die Überstunde", lesson: "A2.4" },	{ front: "as horas extras", back: "die Überstunden", lesson: "A2.4" },
{ front: "o salário", back: "der Lohn", lesson: "A2.4" },	{ front: "os salários", back: "die Löhne", lesson: "A2.4" },
{ front: "oferecer", back: "bieten", lesson: "A2.4" },	{ front: "ofereceu", back: "hat geboten", lesson: "A2.4" },
{ front: "a regra", back: "die Regel", lesson: "A2.4" },	{ front: "as regras", back: "die Regeln", lesson: "A2.4" },
{ front: "a indústria", back: "die Industrie", lesson: "A2.4" },	
{ front: "a média", back: "der Durchschnitt", lesson: "A2.4" },	{ front: "as médias", back: "die Durchschnitte", lesson: "A2.4" },
{ front: "a maioria", back: "die meisten", lesson: "A2.4" },	
{ front: "no total, em geral", back: "insgesamt", lesson: "A2.4" },	
{ front: "valer", back: "gelten", lesson: "A2.4" },	{ front: "valeu", back: "hat gegolten", lesson: "A2.4" },
{ front: "no mínimo", back: "mindestens", lesson: "A2.4" },	
{ front: "mover-se", back: "(sich) bewegen", lesson: "A2.5" },	{ front: "se moveu", back: "hat bewegt", lesson: "A2.5" },
{ front: "interessar-se por", back: "(sich) interessieren für", lesson: "A2.5" },	{ front: "se interessou por", back: "hat interessiert", lesson: "A2.5" },
{ front: "a dança", back: "der Tanz", lesson: "A2.5" },	{ front: "as danças", back: "die Tänze", lesson: "A2.5" },
{ front: "o basquete", back: "der Basketball", lesson: "A2.5" },	
{ front: "sentir", back: "(sich) fühlen", lesson: "A2.5" },	{ front: "sentiu", back: "hat gefühlt", lesson: "A2.5" },
{ front: "pouco", back: "zu wenig", lesson: "A2.5" },	
{ front: "o vídeo", back: "das Video", lesson: "A2.5" },	{ front: "os vídeos", back: "die Videos", lesson: "A2.5" },
{ front: "cair", back: "hin·fallen", lesson: "A2.5" },	{ front: "caiu", back: "ist hingefallen", lesson: "A2.5" },
{ front: "o desejo, a vontade", back: "die Lust", lesson: "A2.5" },	
{ front: "o clube", back: "der Verein", lesson: "A2.5" },	{ front: "os clubes", back: "die Vereine", lesson: "A2.5" },
{ front: "a tentativa", back: "der Versuch", lesson: "A2.5" },	{ front: "as tentativas", back: "die Versuche", lesson: "A2.5" },
{ front: "o campeão", back: "der Meister", lesson: "A2.5" },	{ front: "os campeões", back: "die Meister", lesson: "A2.5" },
{ front: "o tipo de esporte", back: "die Sportart", lesson: "A2.5" },	{ front: "os tipos de esporte", back: "die Sportarten", lesson: "A2.5" },
{ front: "o relaxamento", back: "die Entspannung", lesson: "A2.5" },	
{ front: "a alimentação", back: "die Ernährung", lesson: "A2.5" },	
{ front: "o movimento", back: "die Bewegung", lesson: "A2.5" },	{ front: "os movimentos", back: "die Bewegungen", lesson: "A2.5" },
{ front: "em forma", back: "fit", lesson: "A2.5" },	
{ front: "a caminhada", back: "der Spaziergang", lesson: "A2.5" },	{ front: "as caminhadas", back: "die Spaziergänge", lesson: "A2.5" },
{ front: "marcar um encontro com", back: "(sich) verabreden mit", lesson: "A2.5" },	{ front: "marcou um encontro com", back: "hat verabredet", lesson: "A2.5" },
{ front: "descansar", back: "(sich) aus·ruhen", lesson: "A2.5" },	{ front: "descansou", back: "hat ausgeruht", lesson: "A2.5" },
{ front: "alimentar-se", back: "(sich) ernähren", lesson: "A2.5" },	{ front: "alimentou-se", back: "hat ernährt", lesson: "A2.5" },
{ front: "irritar-se (com)", back: "(sich) ärgern (über)", lesson: "A2.5" },	{ front: "irritou-se", back: "hat geärgert", lesson: "A2.5" },
{ front: "maquiar-se", back: "(sich) schminken", lesson: "A2.5" },	{ front: "se maquiou", back: "hat geschminkt", lesson: "A2.5" },
{ front: "barbear-se", back: "(sich) rasieren", lesson: "A2.5" },	{ front: "se barbeou", back: "hat rasiert", lesson: "A2.5" },
{ front: "trocar-se", back: "(sich) um·ziehen", lesson: "A2.5" },	{ front: "trocou-se", back: "hat umgezogen", lesson: "A2.5" },
{ front: "pentear-se", back: "(sich) kämmen", lesson: "A2.5" },	{ front: "se penteou", back: "hat gekämmt", lesson: "A2.5" },
{ front: "lavar-se", back: "(sich) waschen", lesson: "A2.5" },	{ front: "se lavou", back: "hat gewaschen", lesson: "A2.5" },
{ front: "apressar-se", back: "(sich) beeilen", lesson: "A2.5" },	{ front: "se apressou", back: "hat beeilt", lesson: "A2.5" },
{ front: "concentrar-se (em)", back: "(sich) konzentrieren (auf)", lesson: "A2.5" },	{ front: "se concentrou (em)", back: "hat konzentriert", lesson: "A2.5" },
{ front: "queixar-se (sobre)", back: "(sich) beschweren (über)", lesson: "A2.5" },	{ front: "queixou-se (sobre)", back: "hat beschwert", lesson: "A2.5" },
{ front: "de qualquer forma", back: "überhaupt", lesson: "A2.5" },	
{ front: "a revista", back: "die Zeitschrift", lesson: "A2.5" },	{ front: "as revistas", back: "die Zeitschriften", lesson: "A2.5" },
{ front: "a história", back: "die Geschichte", lesson: "A2.5" },	
{ front: "o teatro", back: "das Theater", lesson: "A2.5" },	{ front: "os teatros", back: "die Theater", lesson: "A2.5" },
{ front: "as notícias", back: "die Nachrichten", lesson: "A2.5" },	
{ front: "o campeonato mundial", back: "die Weltmeisterschaft", lesson: "A2.5" },	{ front: "os campeonatos mundiais", back: "die Weltmeisterschaften", lesson: "A2.5" },
{ front: "a previsão do tempo", back: "die Wettervorhersage", lesson: "A2.5" },	{ front: "as previsões do tempo", back: "die Wettervorhersagen", lesson: "A2.5" },
{ front: "o time", back: "die Mannschaft", lesson: "A2.5" },	{ front: "os times", back: "die Mannschaften", lesson: "A2.5" },
{ front: "a visita", back: "der Besuch", lesson: "A2.5" },	{ front: "as visitas", back: "die Besuche", lesson: "A2.5" },
{ front: "cuidar de", back: "(sich) kümmern um", lesson: "A2.5" },	{ front: "cuidou de", back: "hat gekümmert", lesson: "A2.5" },
{ front: "sonhar com", back: "träumen von", lesson: "A2.5" },	{ front: "sonhou com", back: "hat geträumt", lesson: "A2.5" },
{ front: "o medo", back: "die Angst", lesson: "A2.5" },	{ front: "os medos", back: "die Ängste", lesson: "A2.5" },
{ front: "honesto, sincero", back: "ehrlich", lesson: "A2.5" },	
{ front: "o ouro", back: "das Gold", lesson: "A2.5" },	
{ front: "a temporada", back: "die Saison", lesson: "A2.5" },	{ front: "as temporadas", back: "die Saisons", lesson: "A2.5" },
{ front: "lembrar-se de", back: "(sich) erinnern an", lesson: "A2.5" },	{ front: "lembrou-se de", back: "hat erinnert", lesson: "A2.5" },
{ front: "pensar em", back: "denken an", lesson: "A2.5" },	{ front: "pensou em", back: "hat gedacht", lesson: "A2.5" },
{ front: "as férias", back: "die Ferien", lesson: "A2.5" },	
{ front: "a ginástica", back: "die Gymnastik", lesson: "A2.5" },	
{ front: "o tênis de mesa", back: "das Tischtennis", lesson: "A2.5" },	
{ front: "o vôlei", back: "der Volleyball", lesson: "A2.5" },	
{ front: "a academia, a aptidão física", back: "die Fitness", lesson: "A2.5" },	
{ front: "a contribuição", back: "der Beitrag", lesson: "A2.5" },	{ front: "as contribuições", back: "die Beiträge", lesson: "A2.5" },
{ front: "totalizar", back: "betragen", lesson: "A2.5" },	{ front: "totalizou", back: "hat betragen", lesson: "A2.5" },
{ front: "o grupo", back: "die Gruppe", lesson: "A2.5" },	{ front: "os grupos", back: "die Gruppen", lesson: "A2.5" },
{ front: "o desconto", back: "die Ermäßigung", lesson: "A2.5" },	{ front: "os descontos", back: "die Ermäßigungen", lesson: "A2.5" },
{ front: "gratuito", back: "kostenlos", lesson: "A2.5" },	
{ front: "o aprendiz", back: "der Azubi", lesson: "A2.5" },	{ front: "os aprendizes", back: "die Azubis", lesson: "A2.5" },
{ front: "adicional", back: "zusätzlich", lesson: "A2.5" },	
{ front: "ativo", back: "aktiv", lesson: "A2.5" },	
{ front: "correr", back: "joggen", lesson: "A2.5" },	{ front: "correu", back: "ist gejoggt", lesson: "A2.5" },
{ front: "manter-se", back: "(sich) halten", lesson: "A2.5" },	{ front: "se manteve", back: "hat gehalten", lesson: "A2.5" },
{ front: "frequentemente", back: "häufig", lesson: "A2.5" },	
{ front: "a causa", back: "die Ursache", lesson: "A2.5" },	{ front: "as causas", back: "die Ursachen", lesson: "A2.5" },
{ front: "a doença", back: "die Krankheit", lesson: "A2.5" },	{ front: "as doenças", back: "die Krankheiten", lesson: "A2.5" },
{ front: "a tela", back: "der Bildschirm", lesson: "A2.5" },	{ front: "as telas", back: "die Bildschirme", lesson: "A2.5" },
{ front: "o corpo", back: "der Körper", lesson: "A2.5" },	{ front: "os corpos", back: "die Körper", lesson: "A2.5" },
{ front: "além disso", back: "außerdem", lesson: "A2.5" },	
{ front: "o ar", back: "die Luft", lesson: "A2.5" },	
{ front: "a investigação", back: "die Untersuchung", lesson: "A2.5" },	{ front: "as investigações", back: "die Untersuchungen", lesson: "A2.5" },
{ front: "conseguir, realizar", back: "schaffen", lesson: "A2.5" },	{ front: "conseguiu, realizou", back: "hat geschafft", lesson: "A2.5" },
{ front: "barato", back: "preiswert", lesson: "A2.5" },	
{ front: "correr", back: "laufen", lesson: "A2.5" },	{ front: "correu", back: "ist gelaufen", lesson: "A2.5" },
{ front: "a tendência", back: "der Trend", lesson: "A2.5" },	{ front: "as tendências", back: "die Trends", lesson: "A2.5" },
{ front: "o parquinho", back: "der Spielplatz", lesson: "A2.5" },	{ front: "os parquinhos", back: "die Spielplätze", lesson: "A2.5" },
{ front: "extra", back: "extra", lesson: "A2.5" },	
{ front: "flexível", back: "flexibel", lesson: "A2.5" },	
{ front: "o meio ambiente", back: "die Umwelt", lesson: "A2.5" },	
{ front: "o plano de saúde", back: "die Krankenkasse", lesson: "A2.5" },	{ front: "os planos de saúde", back: "die Krankenkassen", lesson: "A2.5" },
{ front: "popular", back: "beliebt", lesson: "A2.5" },	
{ front: "o trajeto", back: "die Strecke", lesson: "A2.5" },	{ front: "os trajetos", back: "die Strecken", lesson: "A2.5" },
{ front: "claro", back: "klar", lesson: "A2.5" },	
{ front: "exagerar", back: "übertreiben", lesson: "A2.5" },	{ front: "exagerou", back: "hat übertrieben", lesson: "A2.5" },
{ front: "é claro, obviamente", back: "selbstverständlich", lesson: "A2.5" },	
{ front: "jogar tênis", back: "tennis spielen", lesson: "A2.5" },	
{ front: "esquiar", back: "ski fahren", lesson: "A2.5" },	
{ front: "jogar basquete", back: "basketball spielen", lesson: "A2.5" },	
{ front: "fazer ginástica", back: "gymnastik machen", lesson: "A2.5" },	
{ front: "jogar tênis de mesa", back: "tischtennis spielen", lesson: "A2.5" },	
{ front: "jogar vôlei", back: "volleyball spielen", lesson: "A2.5" },	
{ front: "fazer treinamento físico", back: "fitnesstraining machen", lesson: "A2.5" },	
{ front: "jogar hóquei no gelo", back: "eishockey spielen", lesson: "A2.5" },	
{ front: "nadar", back: "schwimmen", lesson: "A2.5" },	{ front: "nadou", back: "ist geschwommen", lesson: "A2.5" },
{ front: "andar de bicicleta", back: "fahrrad fahren", lesson: "A2.5" },	{ front: "andou de bicicleta", back: "ist gefahren", lesson: "A2.5" },
{ front: "jogar futebol", back: "fußball spielen", lesson: "A2.5" },	
{ front: "caminhar, fazer trilhas", back: "wandern", lesson: "A2.5" },	{ front: "caminhou, fez trilhas", back: "ist gewandert", lesson: "A2.5" },
{ front: "dançar", back: "tanzen", lesson: "A2.5" },	{ front: "dançou", back: "hat getanzt", lesson: "A2.5" },
{ front: "o boletim de notas", back: "das Zeugnis", lesson: "A2.6" },	{ front: "os boletins de notas", back: "die Zeugnisse", lesson: "A2.6" },
{ front: "a matéria", back: "das Fach", lesson: "A2.6" },	{ front: "as matérias", back: "die Fächer", lesson: "A2.6" },
{ front: "a nota", back: "die Note", lesson: "A2.6" },	{ front: "as notas", back: "die Noten", lesson: "A2.6" },
{ front: "o ginásio", back: "das Gymnasium", lesson: "A2.6" },	{ front: "os ginásios", back: "die Gymnasien", lesson: "A2.6" },
{ front: "a apresentação", back: "das Referat", lesson: "A2.6" },	{ front: "as apresentações", back: "die Referate", lesson: "A2.6" },
{ front: "o exame de maturidade", back: "das Abitur", lesson: "A2.6" },	
{ front: "a formatura, a conclusão", back: "der Abschluss", lesson: "A2.6" },	{ front: "as formações, as conclusões", back: "die Abschlüsse", lesson: "A2.6" },
{ front: "o exame", back: "die Prüfung", lesson: "A2.6" },	{ front: "os exames", back: "die Prüfungen", lesson: "A2.6" },
{ front: "preguiçoso", back: "faul", lesson: "A2.6" },	
{ front: "terrível", back: "schrecklich", lesson: "A2.6" },	
{ front: "aplicado, trabalhador", back: "fleißig", lesson: "A2.6" },	
{ front: "inteligente", back: "intelligent", lesson: "A2.6" },	
{ front: "discutir", back: "streiten", lesson: "A2.6" },	{ front: "discutiu", back: "hat gestritten", lesson: "A2.6" },
{ front: "que", back: "dass", lesson: "A2.6" },	
{ front: "melhorar", back: "verbessern", lesson: "A2.6" },	{ front: "melhorou", back: "hat verbessert", lesson: "A2.6" },
{ front: "o comportamento", back: "das Verhalten", lesson: "A2.6" },	
{ front: "rigoroso", back: "streng", lesson: "A2.6" },	
{ front: "o desejo", back: "der Wunsch", lesson: "A2.6" },	{ front: "os desejos", back: "die Wünsche", lesson: "A2.6" },
{ front: "o plano", back: "der Plan", lesson: "A2.6" },	{ front: "os planos", back: "die Pläne", lesson: "A2.6" },
{ front: "o astronauta", back: "der Astronaut", lesson: "A2.6" },	{ front: "os astronautas", back: "die Astronauten", lesson: "A2.6" },
{ front: "a astronauta", back: "die Astronautin", lesson: "A2.6" },	{ front: "as astronautas", back: "die Astronautinnen", lesson: "A2.6" },
{ front: "antes, pouco antes", back: "vorhin", lesson: "A2.6" },	
{ front: "médio, intermediário", back: "mittler-", lesson: "A2.6" },	
{ front: "a atividade", back: "die Aktivität", lesson: "A2.6" },	{ front: "as atividades", back: "die Aktivitäten", lesson: "A2.6" },
{ front: "o sistema", back: "das System", lesson: "A2.6" },	{ front: "os sistemas", back: "die Systeme", lesson: "A2.6" },
{ front: "a (universidade) especializada", back: "die (Fach-)Hochschule", lesson: "A2.6" },	{ front: "as (universidades) especializadas", back: "die (Fach-)Hochschulen", lesson: "A2.6" },
{ front: "a universidade", back: "die Universität", lesson: "A2.6" },	{ front: "as universidades", back: "die Universitäten", lesson: "A2.6" },
{ front: "a escola secundária (geral)", back: "die Gesamtschule", lesson: "A2.6" },	{ front: "as escolas secundárias (gerais)", back: "die Gesamtschulen", lesson: "A2.6" },
{ front: "a escola secundária (técnica)", back: "die Realschule", lesson: "A2.6" },	{ front: "as escolas secundárias (técnicas)", back: "die Realschulen", lesson: "A2.6" },
{ front: "a escola secundária (básica)", back: "die Hauptschule", lesson: "A2.6" },	{ front: "as escolas secundárias (básicas)", back: "die Hauptschulen", lesson: "A2.6" },
{ front: "a escola de ensino médio", back: "die Mittelschule", lesson: "A2.6" },	{ front: "as escolas de ensino médio", back: "die Mittelschulen", lesson: "A2.6" },
{ front: "a escola profissional", back: "die Berufsschule", lesson: "A2.6" },	{ front: "as escolas profissionais", back: "die Berufsschulen", lesson: "A2.6" },
{ front: "voluntário", back: "freiwillig", lesson: "A2.6" },	
{ front: "a creche", back: "die Krippe", lesson: "A2.6" },	{ front: "as creches", back: "die Krippen", lesson: "A2.6" },
{ front: "a física", back: "die Physik", lesson: "A2.6" },	
{ front: "a educação social", back: "die Sozialkunde", lesson: "A2.6" },	
{ front: "a biologia", back: "die Biologie", lesson: "A2.6" },	
{ front: "a química", back: "die Chemie", lesson: "A2.6" },	
{ front: "a geografia", back: "die Geografie", lesson: "A2.6" },	
{ front: "a arte", back: "die Kunst", lesson: "A2.6" },	
{ front: "a história", back: "die Geschichte", lesson: "A2.6" },	
{ front: "odiar", back: "hassen", lesson: "A2.6" },	{ front: "odiou", back: "hat gehasst", lesson: "A2.6" },
{ front: "a primavera", back: "das Frühjahr", lesson: "A2.6" },	
{ front: "o início", back: "der Beginn", lesson: "A2.6" },	
{ front: "a teoria", back: "die Theorie", lesson: "A2.6" },	{ front: "as teorias", back: "die Theorien", lesson: "A2.6" },
{ front: "a introdução", back: "die Einführung", lesson: "A2.6" },	{ front: "as introduções", back: "die Einführungen", lesson: "A2.6" },
{ front: "salvar", back: "speichern", lesson: "A2.6" },	{ front: "salvou", back: "hat gespeichert", lesson: "A2.6" },
{ front: "o migrante", back: "der Migrant", lesson: "A2.6" },	{ front: "os migrantes", back: "die Migranten", lesson: "A2.6" },
{ front: "a migrante", back: "die Migrantin", lesson: "A2.6" },	{ front: "as migrantes", back: "die Migrantinnen", lesson: "A2.6" },
{ front: "social", back: "sozial", lesson: "A2.6" },	
{ front: "a palestra", back: "der Vortrag", lesson: "A2.6" },	{ front: "as palestras", back: "die Vorträge", lesson: "A2.6" },
{ front: "candidatar-se", back: "(sich) bewerben", lesson: "A2.6" },	{ front: "se candidatou", back: "hat beworben", lesson: "A2.6" },
{ front: "apresentar", back: "präsentieren", lesson: "A2.6" },	{ front: "apresentou", back: "hat präsentiert", lesson: "A2.6" },
{ front: "o especialista", back: "der Experte", lesson: "A2.6" },	{ front: "os especialistas", back: "die Experten", lesson: "A2.6" },
{ front: "a especialista", back: "die Expertin", lesson: "A2.6" },	{ front: "as especialistas", back: "die Expertinnen", lesson: "A2.6" },
{ front: "a preparação", back: "die Vorbereitung", lesson: "A2.6" },	{ front: "as preparações", back: "die Vorbereitungen", lesson: "A2.6" },
{ front: "o certificado", back: "das Zertifikat", lesson: "A2.6" },	{ front: "os certificados", back: "die Zertifikate", lesson: "A2.6" },
{ front: "o incentivo, a promoção", back: "die Förderung", lesson: "A2.6" },	{ front: "os incentivos", back: "die Förderungen", lesson: "A2.6" },
{ front: "possível", back: "möglich", lesson: "A2.6" },	
{ front: "a consultoria", back: "die Beratung", lesson: "A2.6" },	{ front: "as consultas", back: "die Beratungen", lesson: "A2.6" },
{ front: "machucar-se", back: "sich verletzen", lesson: "A2.6" },	{ front: "machucou-se", back: "hat verletzt", lesson: "A2.6" },
{ front: "sangrar", back: "bluten", lesson: "A2.6" },	{ front: "sangrou", back: "hat geblutet", lesson: "A2.6" },
{ front: "os estudos", back: "das Studium", lesson: "A2.6" },	
{ front: "a rotina diária", back: "der Tagesablauf", lesson: "A2.6" },	{ front: "as rotinas diárias", back: "die Tagesabläufe", lesson: "A2.6" },
{ front: "passar (no exame)", back: "bestehen", lesson: "A2.6" },	{ front: "passou (no exame)", back: "hat bestanden", lesson: "A2.6" },
{ front: "a origem migratória", back: "der Migrationshintergrund", lesson: "A2.6" },	
{ front: "orgulhoso", back: "stolz", lesson: "A2.6" },	
{ front: "elétrico", back: "elektrisch", lesson: "A2.6" },	
{ front: "a técnica", back: "die Technik", lesson: "A2.6" },	
{ front: "o contato", back: "der Kontakt", lesson: "A2.6" },	{ front: "os contatos", back: "die Kontakte", lesson: "A2.6" },
{ front: "reconhecer", back: "anerkennen", lesson: "A2.6" },	{ front: "reconheceu", back: "hat anerkannt", lesson: "A2.6" },
{ front: "examinar, testar", back: "prüfen", lesson: "A2.6" },	{ front: "examinou, testou", back: "hat geprüft", lesson: "A2.6" },
{ front: "complicado", back: "kompliziert", lesson: "A2.6" },	
{ front: "o padeiro", back: "der Bäcker", lesson: "A2.6" },	{ front: "os padeiros", back: "die Bäcker", lesson: "A2.6" },
{ front: "a padeira", back: "die Bäckerin", lesson: "A2.6" },	{ front: "as padeiras", back: "die Bäckerinnen", lesson: "A2.6" },
{ front: "o ator", back: "der Schauspieler", lesson: "A2.6" },	{ front: "os atores", back: "die Schauspieler", lesson: "A2.6" },
{ front: "a atriz", back: "die Schauspielerin", lesson: "A2.6" },	{ front: "as atrizes", back: "die Schauspielerinnen", lesson: "A2.6" },
{ front: "a música", back: "die Musik", lesson: "A2.6" },	
{ front: "a matemática", back: "die Mathematik", lesson: "A2.6" },	
{ front: "o esporte", back: "der Sport", lesson: "A2.6" },	
{ front: "desconhecido", back: "unbekannt", lesson: "A2.7" },	
{ front: "preparar", back: "vorbereiten", lesson: "A2.7" },	{ front: "preparou", back: "hat vorbereitet", lesson: "A2.7" },
{ front: "fazer artesanato", back: "basteln", lesson: "A2.7" },	{ front: "fez artesanato", back: "hat gebastelt", lesson: "A2.7" },
{ front: "decidir", back: "entscheiden", lesson: "A2.7" },	{ front: "decidiu", back: "hat entschieden", lesson: "A2.7" },
{ front: "presentear", back: "schenken", lesson: "A2.7" },	{ front: "presenteou", back: "hat geschenkt", lesson: "A2.7" },
{ front: "o bebê", back: "das Baby", lesson: "A2.7" },	{ front: "os bebês", back: "die Babys", lesson: "A2.7" },
{ front: "o colar", back: "die Kette", lesson: "A2.7" },	{ front: "os colares", back: "die Ketten", lesson: "A2.7" },
{ front: "adivinhar", back: "raten", lesson: "A2.7" },	{ front: "adivinhou", back: "hat geraten", lesson: "A2.7" },
{ front: "a boneca", back: "die Puppe", lesson: "A2.7" },	{ front: "as bonecas", back: "die Puppen", lesson: "A2.7" },
{ front: "o DVD", back: "die DVD", lesson: "A2.7" },	{ front: "os DVDs", back: "die DVDs", lesson: "A2.7" },
{ front: "o perfume", back: "das Parfüm", lesson: "A2.7" },	{ front: "os perfumes", back: "die Parfüms", lesson: "A2.7" },
{ front: "o creme", back: "die Creme", lesson: "A2.7" },	{ front: "os cremes", back: "die Cremes", lesson: "A2.7" },
{ front: "a carteira", back: "der Geldbeutel", lesson: "A2.7" },	{ front: "as carteiras", back: "die Geldbeutel", lesson: "A2.7" },
{ front: "experimentar", back: "probieren", lesson: "A2.7" },	{ front: "experimentou", back: "hat probiert", lesson: "A2.7" },
{ front: "o macarrão", back: "die Nudel", lesson: "A2.7" },	{ front: "os macarrões", back: "die Nudeln", lesson: "A2.7" },
{ front: "entregar", back: "liefern", lesson: "A2.7" },	{ front: "entregou", back: "hat geliefert", lesson: "A2.7" },
{ front: "confiável", back: "zuverlässig", lesson: "A2.7" },	
{ front: "especial", back: "Sonder-", lesson: "A2.7" },	
{ front: "chamar, nomear", back: "nennen", lesson: "A2.7" },	{ front: "chamou, nomeou", back: "hat genannt", lesson: "A2.7" },
{ front: "a caixa", back: "die Schachtel", lesson: "A2.7" },	{ front: "as caixas", back: "die Schachteln", lesson: "A2.7" },
{ front: "imprimir", back: "ausdrucken", lesson: "A2.7" },	{ front: "imprimiu", back: "hat ausgedruckt", lesson: "A2.7" },
{ front: "o selo", back: "die Briefmarke", lesson: "A2.7" },	{ front: "os selos", back: "die Briefmarken", lesson: "A2.7" },
{ front: "as pessoas", back: "die Leute", lesson: "A2.7" },	
{ front: "a igreja", back: "die Kirche", lesson: "A2.7" },	{ front: "as igrejas", back: "die Kirchen", lesson: "A2.7" },
{ front: "o casamento", back: "die Trauung", lesson: "A2.7" },	{ front: "os casamentos", back: "die Trauungen", lesson: "A2.7" },
{ front: "louco, insano", back: "wahnsinnig", lesson: "A2.7" },	
{ front: "o humor, a atmosfera", back: "die Stimmung", lesson: "A2.7" },	
{ front: "burro, bobo", back: "blöd", lesson: "A2.7" },	
{ front: "cumprimentar", back: "grüßen", lesson: "A2.7" },	{ front: "cumprimentou", back: "hat gegrüßt", lesson: "A2.7" },
{ front: "maravilhoso", back: "wunderschön", lesson: "A2.7" },	
{ front: "chorar", back: "weinen", lesson: "A2.7" },	{ front: "chorou", back: "hat geweint", lesson: "A2.7" },
{ front: "típico", back: "typisch", lesson: "A2.7" },	
{ front: "o bolo", back: "die Torte", lesson: "A2.7" },	{ front: "os bolos", back: "die Torten", lesson: "A2.7" },
{ front: "a propósito, aliás", back: "übrigens", lesson: "A2.7" },	
{ front: "pisar, dar um passo", back: "treten", lesson: "A2.7" },	{ front: "pisou", back: "ist getreten", lesson: "A2.7" },
{ front: "bem, provavelmente", back: "wohl", lesson: "A2.7" },	
{ front: "nervoso", back: "nervös", lesson: "A2.7" },	
{ front: "pelo menos", back: "wenigstens", lesson: "A2.7" },	
{ front: "acordado", back: "wach", lesson: "A2.7" },	
{ front: "selvagem, agressivo", back: "wild", lesson: "A2.7" },	
{ front: "carregar, vestir", back: "tragen", lesson: "A2.7" },	{ front: "carregou, vestiu", back: "hat getragen", lesson: "A2.7" },
{ front: "pessoal", back: "persönlich", lesson: "A2.7" },	
{ front: "o coração", back: "das Herz", lesson: "A2.7" },	{ front: "os corações", back: "die Herzen", lesson: "A2.7" },
{ front: "a morte", back: "der Tod", lesson: "A2.7" },	
{ front: "gastar", back: "ausgeben", lesson: "A2.7" },	{ front: "gastou", back: "hat ausgegeben", lesson: "A2.7" },
{ front: "a pátria, a terra natal", back: "die Heimat", lesson: "A2.7" },	
{ front: "por, através de", back: "per", lesson: "A2.7" },	
{ front: "a mensagem de texto", back: "die SMS", lesson: "A2.7" },	{ front: "as mensagens de texto", back: "die SMS", lesson: "A2.7" },
{ front: "conversar", back: "sich unterhalten", lesson: "A2.7" },	{ front: "conversou", back: "hat unterhalten", lesson: "A2.7" },
{ front: "decorar", back: "dekorieren", lesson: "A2.7" },	{ front: "decorou", back: "hat dekoriert", lesson: "A2.7" },
{ front: "a conversa, o entretenimento", back: "die Unterhaltung", lesson: "A2.7" },	{ front: "as conversas, os entretenimentos", back: "die Unterhaltungen", lesson: "A2.7" },
{ front: "convencer", back: "überzeugen", lesson: "A2.7" },	{ front: "convenceu", back: "hat überzeugt", lesson: "A2.7" },
{ front: "o bombom", back: "die Praline", lesson: "A2.7" },	{ front: "os bombons", back: "die Pralinen", lesson: "A2.7" },
{ front: "o chocolate", back: "die Schokolade", lesson: "A2.7" },	{ front: "os chocolates", back: "die Schokoladen", lesson: "A2.7" },
{ front: "o livro", back: "das Buch", lesson: "A2.7" },	{ front: "os livros", back: "die Bücher", lesson: "A2.7" },
{ front: "a madeira", back: "das Holz", lesson: "A2.8" },	{ front: "as madeiras", back: "die Hölzer", lesson: "A2.8" },
{ front: "o martelo", back: "der Hammer", lesson: "A2.8" },	{ front: "os martelos", back: "die Hämmer", lesson: "A2.8" },
{ front: "a ferramenta", back: "das Werkzeug", lesson: "A2.8" },	{ front: "as ferramentas", back: "die Werkzeuge", lesson: "A2.8" },
{ front: "jogar junto", back: "mitspielen", lesson: "A2.8" },	{ front: "jogou junto", back: "hat mitgespielt", lesson: "A2.8" },
{ front: "a boate / a discoteca", back: "die Disko / die Diskothek", lesson: "A2.8" },	{ front: "as boates / as discotecas", back: "die Diskos / die Diskotheken", lesson: "A2.8" },
{ front: "sair", back: "ausgehen", lesson: "A2.8" },	{ front: "saiu", back: "ist ausgegangen", lesson: "A2.8" },
{ front: "passar (tempo)", back: "verbringen", lesson: "A2.8" },	{ front: "passou (tempo)", back: "hat verbracht", lesson: "A2.8" },
{ front: "a roupa (lavada)", back: "die Wäsche", lesson: "A2.8" },	
{ front: "empreender, realizar", back: "unternehmen", lesson: "A2.8" },	{ front: "empreendeu, realizou", back: "hat unternommen", lesson: "A2.8" },
{ front: "a coisa", back: "das Ding", lesson: "A2.8" },	{ front: "as coisas", back: "die Dinge", lesson: "A2.8" },
{ front: "o lago", back: "der See", lesson: "A2.8" },	{ front: "os lagos", back: "die Seen", lesson: "A2.8" },
{ front: "mesmo assim", back: "trotzdem", lesson: "A2.8" },	
{ front: "o passeio de bicicleta", back: "die Radtour", lesson: "A2.8" },	{ front: "os passeios de bicicleta", back: "die Radtouren", lesson: "A2.8" },
{ front: "a feira de pulgas", back: "der Flohmarkt", lesson: "A2.8" },	{ front: "as feiras de pulgas", back: "die Flohmärkte", lesson: "A2.8" },
{ front: "estar resfriado", back: "erkältet sein", lesson: "A2.8" },	
{ front: "constante, incessante", back: "ständig", lesson: "A2.8" },	
{ front: "a sugestão", back: "der Vorschlag", lesson: "A2.8" },	{ front: "as sugestões", back: "die Vorschläge", lesson: "A2.8" },
{ front: "o passeio turístico", back: "die Rundfahrt", lesson: "A2.8" },	{ front: "os passeios turísticos", back: "die Rundfahrten", lesson: "A2.8" },
{ front: "de acordo", back: "einverstanden", lesson: "A2.8" },	
{ front: "positivo", back: "positiv", lesson: "A2.8" },	
{ front: "reagir", back: "reagieren", lesson: "A2.8" },	{ front: "reagiu", back: "hat reagiert", lesson: "A2.8" },
{ front: "negativo", back: "negativ", lesson: "A2.8" },	
{ front: "o bar", back: "die Bar", lesson: "A2.8" },	{ front: "os bares", back: "die Bars", lesson: "A2.8" },
{ front: "a cultura", back: "die Kultur", lesson: "A2.8" },	
{ front: "a natureza", back: "die Natur", lesson: "A2.8" },	
{ front: "a ópera", back: "die Oper", lesson: "A2.8" },	{ front: "as óperas", back: "die Opern", lesson: "A2.8" },
{ front: "o ponto de encontro", back: "der Treffpunkt", lesson: "A2.8" },	{ front: "os pontos de encontro", back: "die Treffpunkte", lesson: "A2.8" },
{ front: "a prefeitura", back: "das Rathaus", lesson: "A2.8" },	{ front: "as prefeituras", back: "die Rathäuser", lesson: "A2.8" },
{ front: "a participação", back: "die Teilnahme", lesson: "A2.8" },	
{ front: "aparecer, atuar", back: "auftreten", lesson: "A2.8" },	{ front: "apareceu, atuou", back: "ist aufgetreten", lesson: "A2.8" },
{ front: "o jazz", back: "der Jazz", lesson: "A2.8" },	
{ front: "o trem", back: "die Bahn", lesson: "A2.8" },	{ front: "os trens", back: "die Bahnen", lesson: "A2.8" },
{ front: "aberto", back: "offen", lesson: "A2.8" },	
{ front: "a escola popular", back: "die Volkshochschule", lesson: "A2.8" },	{ front: "as escolas populares", back: "die Volkshochschulen", lesson: "A2.8" },
{ front: "a política", back: "die Politik", lesson: "A2.8" },	
{ front: "a fotografia", back: "die Fotografie", lesson: "A2.8" },	
{ front: "necessário", back: "erforderlich", lesson: "A2.8" },	
{ front: "entrada gratuita", back: "Eintritt frei", lesson: "A2.8" },	
{ front: "sem necessidade de inscrição", back: "keine Anmeldung erforderlich", lesson: "A2.8" },	
{ front: "o semestre", back: "das Semester", lesson: "A2.8" },	{ front: "os semestres", back: "die Semester", lesson: "A2.8" },
{ front: "a caminhada", back: "die Wanderung", lesson: "A2.8" },	{ front: "as caminhadas", back: "die Wanderungen", lesson: "A2.8" },
{ front: "o programa", back: "das Programm", lesson: "A2.8" },	{ front: "os programas", back: "die Programme", lesson: "A2.8" },
{ front: "o fã", back: "der Fan", lesson: "A2.8" },	{ front: "os fãs", back: "die Fans", lesson: "A2.8" },
{ front: "o artista", back: "der Künstler", lesson: "A2.8" },	{ front: "os artistas", back: "die Künstler", lesson: "A2.8" },
{ front: "a artista", back: "die Künstlerin", lesson: "A2.8" },	{ front: "as artistas", back: "die Künstlerinnen", lesson: "A2.8" },
{ front: "a Europa", back: "Europa", lesson: "A2.8" },	
{ front: "o brinquedo", back: "das Spielzeug", lesson: "A2.8" },	{ front: "os brinquedos", back: "die Spielzeuge", lesson: "A2.8" },
{ front: "o CD", back: "die CD", lesson: "A2.8" },	{ front: "os CDs", back: "die CDs", lesson: "A2.8" },
{ front: "durante a semana", back: "wochentags", lesson: "A2.8" },	
{ front: "o ingresso", back: "die Eintrittskarte", lesson: "A2.8" },	{ front: "os ingressos", back: "die Eintrittskarten", lesson: "A2.8" },
{ front: "o canal, a estação", back: "der Sender", lesson: "A2.8" },	{ front: "os canais, as estações", back: "die Sender", lesson: "A2.8" },
{ front: "fazer uma caminhada", back: "eine Wanderung machen", lesson: "A2.8" },	
{ front: "fazer", back: "machen", lesson: "A2.8" },	{ front: "fez", back: "hat gemacht", lesson: "A2.8" },
{ front: "ir à ópera", back: "in die Oper gehen", lesson: "A2.8" },	
{ front: "ir a um bar", back: "in eine Bar", lesson: "A2.8" },	
{ front: "fazer um passeio turístico", back: "eine Rundfahrt machen", lesson: "A2.8" },	
{ front: "passeio de bicicleta", back: "eine Radtour", lesson: "A2.8" },	
{ front: "ir a uma feira de pulgas", back: "auf einen Flohmarkt gehen", lesson: "A2.8" },	
{ front: "ir à boate", back: "in die Disko gehen", lesson: "A2.8" },	
{ front: "ir ao lago", back: "an den See fahren", lesson: "A2.8" },	
{ front: "arranjar, configurar", back: "einrichten", lesson: "A2.9" },	{ front: "arrumou, configurou", back: "hat eingerichtet", lesson: "A2.9" },
{ front: "o pôster", back: "das Poster", lesson: "A2.9" },	{ front: "os pôsteres", back: "die Poster", lesson: "A2.9" },
{ front: "a vela", back: "die Kerze", lesson: "A2.9" },	{ front: "as velas", back: "die Kerzen", lesson: "A2.9" },
{ front: "horrível, repulsivo", back: "scheußlich", lesson: "A2.9" },	
{ front: "colorido", back: "bunt", lesson: "A2.9" },	
{ front: "olhar, ver", back: "gucken", lesson: "A2.9" },	{ front: "olhou, viu", back: "hat geguckt", lesson: "A2.9" },
{ front: "a carteira", back: "die Brieftasche", lesson: "A2.9" },	{ front: "as carteiras", back: "die Brieftaschen", lesson: "A2.9" },
{ front: "o isqueiro", back: "das Feuerzeug", lesson: "A2.9" },	{ front: "os isqueiros", back: "die Feuerzeuge", lesson: "A2.9" },
{ front: "a câmera", back: "die Kamera", lesson: "A2.9" },	{ front: "as câmeras", back: "die Kameras", lesson: "A2.9" },
{ front: "o biquíni", back: "der Bikini", lesson: "A2.9" },	{ front: "os biquínis", back: "die Bikinis", lesson: "A2.9" },
{ front: "prático", back: "praktisch", lesson: "A2.9" },	
{ front: "bonito, bonito(a)", back: "hübsch", lesson: "A2.9" },	
{ front: "gordo, espesso", back: "dick", lesson: "A2.9" },	
{ front: "o prato, a lâmina", back: "die Platte", lesson: "A2.9" },	{ front: "os pratos, as lâminas", back: "die Platten", lesson: "A2.9" },
{ front: "a altura", back: "die Höhe", lesson: "A2.9" },	{ front: "as alturas", back: "die Höhen", lesson: "A2.9" },
{ front: "o estado", back: "der Zustand", lesson: "A2.9" },	{ front: "os estados", back: "die Zustände", lesson: "A2.9" },
{ front: "a qualidade", back: "die Qualität", lesson: "A2.9" },	{ front: "as qualidades", back: "die Qualitäten", lesson: "A2.9" },
{ front: "os talheres", back: "das Besteck", lesson: "A2.9" },	{ front: "os talheres", back: "die Bestecke", lesson: "A2.9" },
{ front: "o metal", back: "das Metall", lesson: "A2.9" },	{ front: "os metais", back: "die Metalle", lesson: "A2.9" },
{ front: "o tecido", back: "der Stoff", lesson: "A2.9" },	{ front: "os tecidos", back: "die Stoffe", lesson: "A2.9" },
{ front: "a mochila", back: "der Rucksack", lesson: "A2.9" },	{ front: "as mochilas", back: "die Rucksäcke", lesson: "A2.9" },
{ front: "o chapéu", back: "der Hut", lesson: "A2.9" },	{ front: "os chapéus", back: "die Hüte", lesson: "A2.9" },
{ front: "o amor", back: "die Liebe", lesson: "A2.9" },	
{ front: "o romance", back: "der Roman", lesson: "A2.9" },	{ front: "os romances", back: "die Romane", lesson: "A2.9" },
{ front: "empolgante, emocionante", back: "spannend", lesson: "A2.9" },	
{ front: "como, do que", back: "als", lesson: "A2.9" },	
{ front: "o estádio", back: "das Stadion", lesson: "A2.9" },	{ front: "os estádios", back: "die Stadien", lesson: "A2.9" },
{ front: "o computador", back: "der PC", lesson: "A2.9" },	{ front: "os computadores", back: "die PCs", lesson: "A2.9" },
{ front: "o pudim", back: "der Pudding", lesson: "A2.9" },	{ front: "os pudins", back: "die Puddings", lesson: "A2.9" },
{ front: "a vitrine", back: "das Schaufenster", lesson: "A2.9" },	{ front: "as vitrines", back: "die Schaufenster", lesson: "A2.9" },
{ front: "sugerir", back: "vorschlagen", lesson: "A2.9" },	{ front: "sugeriu", back: "hat vorgeschlagen", lesson: "A2.9" },
{ front: "distante, removido", back: "entfernt", lesson: "A2.9" },	
{ front: "a estatística", back: "die Statistik", lesson: "A2.9" },	{ front: "as estatísticas", back: "die Statistiken", lesson: "A2.9" },
{ front: "o alimento", back: "das Nahrungsmittel", lesson: "A2.9" },	{ front: "os alimentos", back: "die Nahrungsmittel", lesson: "A2.9" },
{ front: "o gás", back: "das Gas", lesson: "A2.9" },	{ front: "os gases", back: "die Gase", lesson: "A2.9" },
{ front: "o crédito", back: "der Kredit", lesson: "A2.9" },	{ front: "os créditos", back: "die Kredite", lesson: "A2.9" },
{ front: "gravar, captar", back: "aufnehmen", lesson: "A2.9" },	{ front: "gravou, captou", back: "hat aufgenommen", lesson: "A2.9" },
{ front: "economizar", back: "sparen", lesson: "A2.9" },	{ front: "economizou", back: "hat gespart", lesson: "A2.9" },
{ front: "algum(a), alguns(as)", back: "manch-", lesson: "A2.9" },	
{ front: "a lembrança", back: "die Erinnerung", lesson: "A2.9" },	{ front: "as lembranças", back: "die Erinnerungen", lesson: "A2.9" },
{ front: "o pensamento", back: "der Gedanke", lesson: "A2.9" },	{ front: "os pensamentos", back: "die Gedanken", lesson: "A2.9" },
{ front: "valioso", back: "wertvoll", lesson: "A2.9" },	
{ front: "na época, antigamente", back: "damals", lesson: "A2.9" },	
{ front: "querido, doce", back: "lieb", lesson: "A2.9" },	
{ front: "por isso", back: "deshalb", lesson: "A2.9" },	
{ front: "dentro", back: "drin", lesson: "A2.9" },	
{ front: "o martelo", back: "der Hammer", lesson: "A2.9" },	{ front: "os martelos", back: "die Hämmer", lesson: "A2.9" },
{ front: "a madeira", back: "das Holz", lesson: "A2.9" },	{ front: "as madeiras", back: "die Hölzer", lesson: "A2.9" },
{ front: "a lâmpada", back: "die Lampe", lesson: "A2.9" },	{ front: "as lâmpadas", back: "die Lampen", lesson: "A2.9" },
{ front: "o vidro", back: "das Glas", lesson: "A2.9" },	{ front: "os vidros", back: "die Gläser", lesson: "A2.9" },
{ front: "os talheres", back: "das Besteck", lesson: "A2.9" },	{ front: "os talheres", back: "die Bestecke", lesson: "A2.9" },
{ front: "o metal", back: "das Metall", lesson: "A2.9" },	{ front: "os metais", back: "die Metalle", lesson: "A2.9" },
{ front: "a (tigela de salada)", back: "die (Salat-) Schüssel", lesson: "A2.9" },	{ front: "as (tigelas de salada)", back: "die (Salat-) Schüsseln", lesson: "A2.9" },
{ front: "o plástico", back: "das Plastik", lesson: "A2.9" },	
{ front: "o ingresso", back: "die Eintrittskarte", lesson: "A2.9" },	{ front: "os ingressos", back: "die Eintrittskarten", lesson: "A2.9" },
{ front: "o papel", back: "das Papier", lesson: "A2.9" },	{ front: "os papéis", back: "die Papiere", lesson: "A2.9" },
{ front: "o pacote", back: "das Paket", lesson: "A2.10" },	{ front: "os pacotes", back: "die Pakete", lesson: "A2.10" },
{ front: "o envelope", back: "der Briefumschlag", lesson: "A2.10" },	{ front: "os envelopes", back: "die Briefumschläge", lesson: "A2.10" },
{ front: "o cartão postal", back: "die Postkarte", lesson: "A2.10" },	{ front: "os cartões postais", back: "die Postkarten", lesson: "A2.10" },
{ front: "a tesoura", back: "die Schere", lesson: "A2.10" },	{ front: "as tesouras", back: "die Scheren", lesson: "A2.10" },
{ front: "enviar", back: "verschicken", lesson: "A2.10" },	{ front: "enviou", back: "hat verschickt", lesson: "A2.10" },
{ front: "enviar, despachar", back: "versenden", lesson: "A2.10" },	{ front: "enviou", back: "hat versendet", lesson: "A2.10" },
{ front: "organizado, arrumado", back: "ordentlich", lesson: "A2.10" },	
{ front: "a remessa", back: "die Sendung", lesson: "A2.10" },	{ front: "as remessas", back: "die Sendungen", lesson: "A2.10" },
{ front: "transportar", back: "transportieren", lesson: "A2.10" },	{ front: "transportou", back: "hat transportiert", lesson: "A2.10" },
{ front: "duro", back: "hart", lesson: "A2.10" },	
{ front: "pesar", back: "wiegen", lesson: "A2.10" },	{ front: "pesou", back: "hat gewogen", lesson: "A2.10" },
{ front: "embalar", back: "verpacken", lesson: "A2.10" },	{ front: "embalou", back: "hat verpackt", lesson: "A2.10" },
{ front: "o navio", back: "das Schiff", lesson: "A2.10" },	{ front: "os navios", back: "die Schiffe", lesson: "A2.10" },
{ front: "a colheita", back: "die Ernte", lesson: "A2.10" },	{ front: "as colheitas", back: "die Ernten", lesson: "A2.10" },
{ front: "maduro", back: "reif", lesson: "A2.10" },	
{ front: "macio", back: "weich", lesson: "A2.10" },	
{ front: "a fantasia", back: "die Fantasie", lesson: "A2.10" },	{ front: "as fantasias", back: "die Fantasien", lesson: "A2.10" },
{ front: "que tipo de, qual tipo de", back: "was für ein-", lesson: "A2.10" },	
{ front: "a possibilidade", back: "die Möglichkeit", lesson: "A2.10" },	{ front: "as possibilidades", back: "die Möglichkeiten", lesson: "A2.10" },
{ front: "afinal, pois", back: "denn", lesson: "A2.10" },	
{ front: "o registro (correio)", back: "das Einschreiben", lesson: "A2.10" },	
{ front: "enviar", back: "senden", lesson: "A2.10" },	{ front: "enviou", back: "hat gesendet", lesson: "A2.10" },
{ front: "o pacotinho", back: "das Päckchen", lesson: "A2.10" },	{ front: "os pacotinhos", back: "die Päckchen", lesson: "A2.10" },
{ front: "a alfândega", back: "der Zoll", lesson: "A2.10" },	{ front: "as alfândegas", back: "die Zölle", lesson: "A2.10" },
{ front: "valioso", back: "wert", lesson: "A2.10" },	
{ front: "absolutamente, de jeito nenhum", back: "unbedingt", lesson: "A2.10" },	
{ front: "a preocupação", back: "die Sorge", lesson: "A2.10" },	{ front: "as preocupações", back: "die Sorgen", lesson: "A2.10" },
{ front: "congelar", back: "frieren", lesson: "A2.10" },	{ front: "congelou", back: "hat gefroren", lesson: "A2.10" },
{ front: "o trem", back: "die Eisenbahn", lesson: "A2.10" },	{ front: "os trens", back: "die Eisenbahnen", lesson: "A2.10" },
{ front: "a folha", back: "das Blatt", lesson: "A2.10" },	{ front: "as folhas", back: "die Blätter", lesson: "A2.10" },
{ front: "o urso", back: "der Bär", lesson: "A2.10" },	{ front: "os ursos", back: "die Bären", lesson: "A2.10" },
{ front: "a moeda", back: "die Münze", lesson: "A2.10" },	{ front: "as moedas", back: "die Münzen", lesson: "A2.10" },
{ front: "o pato", back: "die Ente", lesson: "A2.10" },	{ front: "os patos", back: "die Enten", lesson: "A2.10" },
{ front: "o souvenir", back: "das Souvenir", lesson: "A2.10" },	{ front: "os souvenirs", back: "die Souvenirs", lesson: "A2.10" },
{ front: "o animal", back: "das Tier", lesson: "A2.10" },	{ front: "os animais", back: "die Tiere", lesson: "A2.10" },
{ front: "o pássaro", back: "der Vogel", lesson: "A2.10" },	{ front: "os pássaros", back: "die Vögel", lesson: "A2.10" },
{ front: "não (prefixo)", back: "un-", lesson: "A2.10" },	
{ front: "o ponto", back: "der Punkt", lesson: "A2.10" },	{ front: "os pontos", back: "die Punkte", lesson: "A2.10" },
{ front: "o elefante", back: "der Elefant", lesson: "A2.10" },	{ front: "os elefantes", back: "die Elefanten", lesson: "A2.10" },
{ front: "a rosa", back: "die Rose", lesson: "A2.10" },	{ front: "as rosas", back: "die Rosen", lesson: "A2.10" },
{ front: "a estrela", back: "der Stern", lesson: "A2.10" },	{ front: "as estrelas", back: "die Sterne", lesson: "A2.10" },
{ front: "o céu", back: "der Himmel", lesson: "A2.10" },	{ front: "os céus", back: "die Himmel", lesson: "A2.10" },
{ front: "laranja", back: "orange", lesson: "A2.10" },	
{ front: "a rede", back: "das Netzwerk", lesson: "A2.10" },	{ front: "as redes", back: "die Netzwerke", lesson: "A2.10" },
{ front: "testar", back: "testen", lesson: "A2.10" },	{ front: "testou", back: "hat getestet", lesson: "A2.10" },
{ front: "o conhecimento", back: "das Wissen", lesson: "A2.10" },	
{ front: "o quiz", back: "das Quiz", lesson: "A2.10" },	
{ front: "o celular", back: "das Mobiltelefon", lesson: "A2.10" },	{ front: "os celulares", back: "die Mobiltelefone", lesson: "A2.10" },
{ front: "o e-mail", back: "die Mail", lesson: "A2.10" },	{ front: "os e-mails", back: "die Mails", lesson: "A2.10" },
{ front: "mundialmente", back: "weltweit", lesson: "A2.10" },	
{ front: "a caixa de correio", back: "die Mailbox", lesson: "A2.10" },	{ front: "as caixas de correio", back: "die Mailboxen", lesson: "A2.10" },
{ front: "o sucesso", back: "der Erfolg", lesson: "A2.10" },	{ front: "os sucessos", back: "die Erfolge", lesson: "A2.10" },
{ front: "o bar", back: "die Kneipe", lesson: "A2.10" },	{ front: "os bares", back: "die Kneipen", lesson: "A2.10" },
{ front: "comunicar-se", back: "melden (sich)", lesson: "A2.10" },	{ front: "se comunicou", back: "hat sich gemeldet", lesson: "A2.10" },
{ front: "o conselho de pais", back: "der Elternbeirat", lesson: "A2.10" },	{ front: "os conselhos de pais", back: "die Elternbeiräte", lesson: "A2.10" },
{ front: "a gripe", back: "die Grippe", lesson: "A2.10" },	
{ front: "a vacina", back: "die Impfung", lesson: "A2.10" },	{ front: "as vacinas", back: "die Impfungen", lesson: "A2.10" },
{ front: "o consulado", back: "das Konsulat", lesson: "A2.10" },	{ front: "os consulados", back: "die Konsulate", lesson: "A2.10" },
{ front: "geral", back: "allgemein", lesson: "A2.10" },	
{ front: "a carta", back: "der Brief", lesson: "A2.10" },	{ front: "as cartas", back: "die Briefe", lesson: "A2.10" },
{ front: "a caixa de correio", back: "der Briefkasten", lesson: "A2.10" },	{ front: "as caixas de correio", back: "die Briefkästen", lesson: "A2.10" },
{ front: "o e-mail", back: "die E-Mail", lesson: "A2.10" },	{ front: "os e-mails", back: "die E-Mails", lesson: "A2.10" },
{ front: "o celular", back: "das Handy", lesson: "A2.10" },	{ front: "os celulares", back: "die Handys", lesson: "A2.10" },
{ front: "o chat", back: "der Chat", lesson: "A2.10" },	{ front: "os chats", back: "die Chats", lesson: "A2.10" },
{ front: "o zoológico", back: "der Zoo", lesson: "A2.11" },	{ front: "os zoológicos", back: "die Zoos", lesson: "A2.11" },
{ front: "o tigre", back: "der Tiger", lesson: "A2.11" },	{ front: "os tigres", back: "die Tiger", lesson: "A2.11" },
{ front: "a zebra", back: "das Zebra", lesson: "A2.11" },	{ front: "os zebras", back: "die Zebras", lesson: "A2.11" },
{ front: "olhar, assistir", back: "anschauen", lesson: "A2.11" },	{ front: "olhou", back: "hat angeschaut", lesson: "A2.11" },
{ front: "partir, ir embora", back: "wegfahren", lesson: "A2.11" },	{ front: "partiu", back: "ist weggefahren", lesson: "A2.11" },
{ front: "pular", back: "springen", lesson: "A2.11" },	{ front: "pulou", back: "ist gesprungen", lesson: "A2.11" },
{ front: "abastecer", back: "tanken", lesson: "A2.11" },	{ front: "abasteceu", back: "hat getankt", lesson: "A2.11" },
{ front: "ao longo de", back: "entlang", lesson: "A2.11" },	
{ front: "passar por, ao lado de", back: "vorbei … an", lesson: "A2.11" },	
{ front: "em frente, oposto", back: "gegenüber", lesson: "A2.11" },	
{ front: "a direção", back: "die Richtung", lesson: "A2.11" },	{ front: "as direções", back: "die Richtungen", lesson: "A2.11" },
{ front: "o rio", back: "der Fluss", lesson: "A2.11" },	{ front: "os rios", back: "die Flüsse", lesson: "A2.11" },
{ front: "o cruzamento", back: "die Kreuzung", lesson: "A2.11" },	{ front: "os cruzamentos", back: "die Kreuzungen", lesson: "A2.11" },
{ front: "virar, dobrar", back: "abbiegen", lesson: "A2.11" },	{ front: "virou", back: "ist abgebogen", lesson: "A2.11" },
{ front: "a saída", back: "die Ausfahrt", lesson: "A2.11" },	{ front: "as saídas", back: "die Ausfahrten", lesson: "A2.11" },
{ front: "a copiadora", back: "der Kopierer", lesson: "A2.11" },	{ front: "as copiadoras", back: "die Kopierer", lesson: "A2.11" },
{ front: "a cafeteria", back: "die Cafeteria", lesson: "A2.11" },	{ front: "as cafeterias", back: "die Cafeterien", lesson: "A2.11" },
{ front: "o engarrafamento", back: "der Stau", lesson: "A2.11" },	{ front: "os engarrafamentos", back: "die Staus", lesson: "A2.11" },
{ front: "a calçada", back: "der Bürgersteig", lesson: "A2.11" },	{ front: "as calçadas", back: "die Bürgersteige", lesson: "A2.11" },
{ front: "cair", back: "stürzen", lesson: "A2.11" },	{ front: "caiu", back: "ist gestürzt", lesson: "A2.11" },
{ front: "o ciclista", back: "der Radfahrer", lesson: "A2.11" },	{ front: "os ciclistas", back: "die Radfahrer", lesson: "A2.11" },
{ front: "o joelho", back: "das Knie", lesson: "A2.11" },	{ front: "os joelhos", back: "die Knie", lesson: "A2.11" },
{ front: "colar", back: "kleben", lesson: "A2.11" },	{ front: "colou", back: "hat geklebt", lesson: "A2.11" },
{ front: "o curativo", back: "das Pflaster", lesson: "A2.11" },	{ front: "os curativos", back: "die Pflaster", lesson: "A2.11" },
{ front: "a bicicleta", back: "das Rad", lesson: "A2.11" },	{ front: "as bicicletas", back: "die Räder", lesson: "A2.11" },
{ front: "o querido, a pessoa favorita", back: "der Liebling", lesson: "A2.11" },	{ front: "os queridos, as pessoas favoritas", back: "die Lieblinge", lesson: "A2.11" },
{ front: "ficar parado", back: "stehen bleiben", lesson: "A2.11" },	{ front: "ficou parado", back: "ist stehen geblieben", lesson: "A2.11" },
{ front: "a gasolina", back: "das Benzin", lesson: "A2.11" },	
{ front: "a bateria", back: "die Batterie", lesson: "A2.11" },	{ front: "as baterias", back: "die Batterien", lesson: "A2.11" },
{ front: "vazio, descarregado", back: "leer", lesson: "A2.11" },	
{ front: "pontualmente", back: "rechtzeitig", lesson: "A2.11" },	
{ front: "o trânsito", back: "der Verkehr", lesson: "A2.11" },	
{ front: "o canteiro de obras", back: "die Baustelle", lesson: "A2.11" },	{ front: "os canteiros de obras", back: "die Baustellen", lesson: "A2.11" },
{ front: "a faixa", back: "die Spur", lesson: "A2.11" },	{ front: "as faixas", back: "die Spuren", lesson: "A2.11" },
{ front: "ultrapassar", back: "überholen", lesson: "A2.11" },	{ front: "ultrapassou", back: "hat überholt", lesson: "A2.11" },
{ front: "a pista", back: "die Fahrbahn", lesson: "A2.11" },	{ front: "as pistas", back: "die Fahrbahnen", lesson: "A2.11" },
{ front: "cuidadoso, cauteloso", back: "vorsichtig", lesson: "A2.11" },	
{ front: "por causa de, devido a", back: "wegen", lesson: "A2.11" },	
{ front: "o gelo", back: "das Eis", lesson: "A2.11" },	
{ front: "o nevoeiro", back: "der Nebel", lesson: "A2.11" },	{ front: "os nevoeiros", back: "die Nebel", lesson: "A2.11" },
{ front: "a tempestade", back: "der Sturm", lesson: "A2.11" },	{ front: "as tempestades", back: "die Stürme", lesson: "A2.11" },
{ front: "a tempestade, trovoada", back: "das Gewitter", lesson: "A2.11" },	{ front: "as tempestades", back: "die Gewitter", lesson: "A2.11" },
{ front: "nebuloso", back: "neblig", lesson: "A2.11" },	
{ front: "o caos", back: "das Chaos", lesson: "A2.11" },	
{ front: "preocupar-se", back: "sorgen", lesson: "A2.11" },	{ front: "se preocupou", back: "hat gesorgt", lesson: "A2.11" },
{ front: "a situação", back: "die Situation", lesson: "A2.11" },	{ front: "as situações", back: "die Situationen", lesson: "A2.11" },
{ front: "completo", back: "komplett", lesson: "A2.11" },	
{ front: "por horas", back: "stundenlang", lesson: "A2.11" },	
{ front: "o carro", back: "der Wagen", lesson: "A2.11" },	{ front: "os carros", back: "die Wagen", lesson: "A2.11" },
{ front: "a região", back: "die Region", lesson: "A2.11" },	{ front: "as regiões", back: "die Regionen", lesson: "A2.11" },
{ front: "o calor", back: "die Hitze", lesson: "A2.11" },	
{ front: "a parte", back: "das Teil", lesson: "A2.11" },	{ front: "as partes", back: "die Teile", lesson: "A2.11" },
{ front: "forte", back: "kräftig", lesson: "A2.11" },	
{ front: "evitar", back: "vermeiden", lesson: "A2.11" },	{ front: "evitou", back: "hat vermieden", lesson: "A2.11" },
{ front: "o perigo", back: "die Gefahr", lesson: "A2.11" },	{ front: "os perigos", back: "die Gefahren", lesson: "A2.11" },
{ front: "o cidadão", back: "der Bürger", lesson: "A2.11" },	{ front: "os cidadãos", back: "die Bürger", lesson: "A2.11" },
{ front: "a cidadã", back: "die Bürgerin", lesson: "A2.11" },	{ front: "as cidadãs", back: "die Bürgerinnen", lesson: "A2.11" },
{ front: "a vista", back: "die Aussicht", lesson: "A2.11" },	{ front: "as vistas", back: "die Aussichten", lesson: "A2.11" },
{ front: "prometer", back: "versprechen", lesson: "A2.11" },	{ front: "prometeu", back: "hat versprochen", lesson: "A2.11" },
{ front: "de verão", back: "sommerlich", lesson: "A2.11" },	
{ front: "denso, fechado, compactado", back: "dicht", lesson: "A2.11" },	
{ front: "impedir", back: "verhindern", lesson: "A2.11" },	{ front: "impediu", back: "hat verhindert", lesson: "A2.11" },
{ front: "o início", back: "der Start", lesson: "A2.11" },	{ front: "os inícios", back: "die Starts", lesson: "A2.11" },
{ front: "o pouso", back: "die Landung", lesson: "A2.11" },	{ front: "os pousos", back: "die Landungen", lesson: "A2.11" },
{ front: "o aeroporto", back: "der Flughafen", lesson: "A2.11" },	{ front: "os aeroportos", back: "die Flughäfen", lesson: "A2.11" },
{ front: "começar, iniciar", back: "starten", lesson: "A2.11" },	{ front: "começou", back: "ist gestartet", lesson: "A2.11" },
{ front: "pousar", back: "landen", lesson: "A2.11" },	{ front: "pousou", back: "ist gelandet", lesson: "A2.11" },
{ front: "previsivelmente", back: "voraussichtlich", lesson: "A2.11" },	
{ front: "o embarque", back: "der Abflug", lesson: "A2.11" },	{ front: "os embarques", back: "die Abflüge", lesson: "A2.11" },
{ front: "perigoso", back: "gefährlich", lesson: "A2.11" },	
{ front: "chamar a atenção, notar", back: "auffallen", lesson: "A2.11" },	{ front: "chamou a atenção, notou", back: "ist aufgefallen", lesson: "A2.11" },
{ front: "a motocicleta", back: "das Moped", lesson: "A2.11" },	{ front: "as motocicletas", back: "die Mopeds", lesson: "A2.11" },
{ front: "o meio de transporte", back: "das Verkehrsmittel", lesson: "A2.11" },	{ front: "os meios de transporte", back: "die Verkehrsmittel", lesson: "A2.11" },
{ front: "buzinir", back: "hupen", lesson: "A2.11" },	{ front: "buzinou", back: "hat gehupt", lesson: "A2.11" },
{ front: "frear", back: "bremsen", lesson: "A2.11" },	{ front: "freou", back: "hat gebremst", lesson: "A2.11" },
{ front: "o pedestre", back: "der Fußgänger", lesson: "A2.11" },	{ front: "os pedestres", back: "die Fußgänger", lesson: "A2.11" },
{ front: "a pedestre feminina", back: "die Fußgängerin", lesson: "A2.11" },	{ front: "as pedestres femininas", back: "die Fußgängerinnen", lesson: "A2.11" },
{ front: "a multa", back: "der Strafzettel", lesson: "A2.11" },	{ front: "as multas", back: "die Strafzettel", lesson: "A2.11" },
{ front: "a pena", back: "die Strafe", lesson: "A2.11" },	{ front: "as penas", back: "die Strafen", lesson: "A2.11" },
{ front: "cansativo, exaustivo", back: "anstrengend", lesson: "A2.11" },	
{ front: "terrível", back: "furchtbar", lesson: "A2.11" },	
{ front: "público", back: "öffentlich", lesson: "A2.11" },	
{ front: "falar", back: "reden", lesson: "A2.11" },	{ front: "falou", back: "hat geredet", lesson: "A2.11" },
{ front: "a diferença", back: "der Unterschied", lesson: "A2.11" },	{ front: "as diferenças", back: "die Unterschiede", lesson: "A2.11" },
{ front: "o país", back: "das Land", lesson: "A2.11" },	
{ front: "a velocidade", back: "das Tempo", lesson: "A2.11" },	
{ front: "o Mar Báltico", back: "die Ostsee", lesson: "A2.12" },	
{ front: "a escolha", back: "die Wahl", lesson: "A2.12" },	
{ front: "visitar", back: "besichtigen", lesson: "A2.12" },	{ front: "visitou", back: "hat besichtigt", lesson: "A2.12" },
{ front: "contra, em oposição", back: "dagegen", lesson: "A2.12" },	
{ front: "entusiasmado, empolgado", back: "begeistert", lesson: "A2.12" },	
{ front: "a acomodação", back: "die Unterkunft", lesson: "A2.12" },	{ front: "as acomodações", back: "die Unterkünfte", lesson: "A2.12" },
{ front: "o sonho", back: "der Traum", lesson: "A2.12" },	{ front: "os sonhos", back: "die Träume", lesson: "A2.12" },
{ front: "a costa", back: "die Küste", lesson: "A2.12" },	{ front: "as costas", back: "die Küsten", lesson: "A2.12" },
{ front: "a ilha", back: "die Insel", lesson: "A2.12" },	{ front: "as ilhas", back: "die Inseln", lesson: "A2.12" },
{ front: "a cadeia de montanhas", back: "das Gebirge", lesson: "A2.12" },	
{ front: "Luxemburgo", back: "Luxemburg", lesson: "A2.12" },	
{ front: "nadar", back: "baden", lesson: "A2.12" },	{ front: "nadou", back: "hat gebadet", lesson: "A2.12" },
{ front: "a areia", back: "der Sand", lesson: "A2.12" },	
{ front: "mais, adiante", back: "weiter", lesson: "A2.12" },	
{ front: "fresco, frio", back: "kühl", lesson: "A2.12" },	
{ front: "a fazenda", back: "der Bauernhof", lesson: "A2.12" },	{ front: "as fazendas", back: "die Bauernhöfe", lesson: "A2.12" },
{ front: "a vaca", back: "die Kuh", lesson: "A2.12" },	{ front: "as vacas", back: "die Kühe", lesson: "A2.12" },
{ front: "o cavalo", back: "das Pferd", lesson: "A2.12" },	{ front: "os cavalos", back: "die Pferde", lesson: "A2.12" },
{ front: "a ovelha", back: "das Schaf", lesson: "A2.12" },	{ front: "as ovelhas", back: "die Schafe", lesson: "A2.12" },
{ front: "o barco", back: "das Boot", lesson: "A2.12" },	{ front: "os barcos", back: "die Boote", lesson: "A2.12" },
{ front: "o festival", back: "das Festival", lesson: "A2.12" },	{ front: "os festivais", back: "die Festivals", lesson: "A2.12" },
{ front: "a atração turística", back: "die Sehenswürdigkeit", lesson: "A2.12" },	{ front: "as atrações turísticas", back: "die Sehenswürdigkeiten", lesson: "A2.12" },
{ front: "principalmente, acima de tudo", back: "vor allem", lesson: "A2.12" },	
{ front: "verdadeiro, autêntico", back: "echt", lesson: "A2.12" },	
{ front: "a pensão", back: "die Pension", lesson: "A2.12" },	{ front: "as pensões", back: "die Pensionen", lesson: "A2.12" },
{ front: "a vista", back: "der Blick", lesson: "A2.12" },	{ front: "as vistas", back: "die Blicke", lesson: "A2.12" },
{ front: "o quarto individual", back: "das Einzelzimmer", lesson: "A2.12" },	
{ front: "o quarto duplo", back: "das Doppelzimmer", lesson: "A2.12" },	
{ front: "o banheiro", back: "das WC", lesson: "A2.12" },	{ front: "os banheiros", back: "die WCs", lesson: "A2.12" },
{ front: "meia-pensão", back: "die Halbpension", lesson: "A2.12" },	
{ front: "o camping", back: "das Camping", lesson: "A2.12" },	
{ front: "o tour", back: "die Tour", lesson: "A2.12" },	{ front: "os tours", back: "die Touren", lesson: "A2.12" },
{ front: "o vale", back: "das Tal", lesson: "A2.12" },	{ front: "os vales", back: "die Täler", lesson: "A2.12" },
{ front: "o campo, a grama", back: "die Wiese", lesson: "A2.12" },	{ front: "os campos, as gramíneas", back: "die Wiesen", lesson: "A2.12" },
{ front: "romântico", back: "romantisch", lesson: "A2.12" },	
{ front: "a localização", back: "die Lage", lesson: "A2.12" },	{ front: "as localizações", back: "die Lagen", lesson: "A2.12" },
{ front: "o castelo", back: "das Schloss", lesson: "A2.12" },	{ front: "os castelos", back: "die Schlösser", lesson: "A2.12" },
{ front: "histórico", back: "historisch", lesson: "A2.12" },	
{ front: "numeroso, abundante", back: "zahlreich", lesson: "A2.12" },	
{ front: "a pernoite", back: "die Übernachtung", lesson: "A2.12" },	{ front: "as pernoites", back: "die Übernachtungen", lesson: "A2.12" },
{ front: "famoso", back: "berühmt", lesson: "A2.12" },	
{ front: "a catedral", back: "der Dom", lesson: "A2.12" },	{ front: "as catedrais", back: "die Dome", lesson: "A2.12" },
{ front: "o albergue juvenil", back: "die Jugendherberge", lesson: "A2.12" },	{ front: "os albergues juvenis", back: "die Jugendherbergen", lesson: "A2.12" },
{ front: "incluído", back: "inklusive", lesson: "A2.12" },	
{ front: "a estadia", back: "der Aufenthalt", lesson: "A2.12" },	{ front: "as estadias", back: "die Aufenthalte", lesson: "A2.12" },
{ front: "reservar", back: "buchen", lesson: "A2.12" },	{ front: "reservou", back: "hat gebucht", lesson: "A2.12" },
{ front: "a agência de viagens", back: "das Reisebüro", lesson: "A2.12" },	{ front: "as agências de viagens", back: "die Reisebüros", lesson: "A2.12" },
{ front: "o especialista", back: "der Spezialist", lesson: "A2.12" },	{ front: "os especialistas", back: "die Spezialisten", lesson: "A2.12" },
{ front: "o empregado", back: "der Angestellte", lesson: "A2.12" },	{ front: "os empregados", back: "die Angestellten", lesson: "A2.12" },
{ front: "a empregada", back: "die Angestellte", lesson: "A2.12" },	{ front: "as empregadas", back: "die Angestellten", lesson: "A2.12" },
{ front: "a conexão, ligação", back: "die Verbindung", lesson: "A2.12" },	{ front: "as conexões, ligações", back: "die Verbindungen", lesson: "A2.12" },
{ front: "claro, naturalmente", back: "natürlich", lesson: "A2.12" },	
{ front: "surfar", back: "surfen", lesson: "A2.12" },	{ front: "surfou", back: "ist gesurft", lesson: "A2.12" },
{ front: "a visita guiada", back: "die Führung", lesson: "A2.12" },	{ front: "as visitas guiadas", back: "die Führungen", lesson: "A2.12" },
{ front: "o centro histórico", back: "die Altstadt", lesson: "A2.12" },	{ front: "os centros históricos", back: "die Altstädte", lesson: "A2.12" },
{ front: "a exposição", back: "die Ausstellung", lesson: "A2.12" },	{ front: "as exposições", back: "die Ausstellungen", lesson: "A2.12" },
{ front: "conhecido", back: "bekannt", lesson: "A2.12" },	
{ front: "em lugar nenhum", back: "nirgends", lesson: "A2.12" },	
{ front: "fazer a mala, embalar", back: "einpacken", lesson: "A2.12" },	{ front: "fez a mala", back: "hat eingepackt", lesson: "A2.12" },
{ front: "concordar", back: "einigen", lesson: "A2.12" },	{ front: "concordou", back: "hat geeinigt", lesson: "A2.12" },
{ front: "pernoitar", back: "übernachten", lesson: "A2.12" },	{ front: "pernoitou", back: "hat übernachtet", lesson: "A2.12" },
{ front: "ser contra", back: "dagegen sein", lesson: "A2.12" },	{ front: "foi contra", back: "ist dagegen gewesen", lesson: "A2.12" },
{ front: "ser a favor", back: "dafür sein", lesson: "A2.12" },	{ front: "foi a favor", back: "ist dafür gewesen", lesson: "A2.12" },
{ front: "aceitar", back: "annehmen", lesson: "A2.12" },	{ front: "aceitou", back: "hat angenommen", lesson: "A2.12" },
{ front: "recusar", back: "ablehnen", lesson: "A2.12" },	{ front: "recusou", back: "hat abgelehnt", lesson: "A2.12" },
{ front: "relaxar, não fazer nada", back: "faulenzen", lesson: "A2.12" },	{ front: "relaxou", back: "hat gefaulenzt", lesson: "A2.12" },
{ front: "o destino de viagem", back: "das Reiseziel", lesson: "A2.12" },	{ front: "os destinos de viagem", back: "die Reiseziele", lesson: "A2.12" },
{ front: "as atividades", back: "die Aktivitäten", lesson: "A2.12" },	
{ front: "ver atrações turísticas", back: "Sehenswürdigkeiten ansehen", lesson: "A2.12" },	{ front: "viu as atrações turísticas", back: "hat Sehenswürdigkeiten angesehen", lesson: "A2.12" },
{ front: "visitar o centro histórico", back: "die Altstadt besichtigen", lesson: "A2.12" },	{ front: "visitou o centro histórico", back: "hat die Altstadt besichtigt", lesson: "A2.12" },
{ front: "ver uma exposição", back: "eine Ausstellung ansehen", lesson: "A2.12" },	{ front: "viu uma exposição", back: "hat eine Ausstellung angesehen", lesson: "A2.12" },
{ front: "fazer um city tour", back: "eine Stadtführung machen", lesson: "A2.12" },	{ front: "fez uma city tour", back: "hat eine Stadtführung gemacht", lesson: "A2.12" },
{ front: "na agência de viagens", back: "im Reisebüro", lesson: "A2.12" },	
{ front: "reservar uma viagem", back: "eine Reise buchen", lesson: "A2.12" },	{ front: "reservou uma viagem", back: "hat eine Reise gebucht", lesson: "A2.12" },
{ front: "a informação", back: "die Auskunft", lesson: "A2.12" },	
{ front: "a viagem", back: "die Reise", lesson: "A2.12" },	{ front: "as viagens", back: "die Reisen", lesson: "A2.12" },
{ front: "o escritório", back: "das Büro", lesson: "A2.12" },	{ front: "os escritórios", back: "die Büros", lesson: "A2.12" },
{ front: "o gelo", back: "das Eis", lesson: "A2.12" },	
{ front: "o ovo", back: "das Ei", lesson: "A2.12" },	{ front: "os ovos", back: "die Eier", lesson: "A2.12" },
{ front: "o valor", back: "der Betrag", lesson: "A2.12" },	{ front: "os valores", back: "die Beträge", lesson: "A2.12" },
{ front: "a conta", back: "das Konto", lesson: "A2.13" },	{ front: "as contas", back: "die Konten", lesson: "A2.13" },
{ front: "abrir", back: "eröffnen", lesson: "A2.13" },	{ front: "abriu", back: "hat eröffnet", lesson: "A2.13" },
{ front: "responder", back: "beantworten", lesson: "A2.13" },	{ front: "respondeu", back: "hat beantwortet", lesson: "A2.13" },
{ front: "providenciar, conseguir", back: "besorgen", lesson: "A2.13" },	{ front: "providenciou", back: "hat besorgt", lesson: "A2.13" },
{ front: "adiar", back: "verschieben", lesson: "A2.13" },	{ front: "adiou", back: "hat verschoben", lesson: "A2.13" },
{ front: "o cartão de débito", back: "die EC-Karte", lesson: "A2.13" },	{ front: "os cartões de débito", back: "die EC-Karten", lesson: "A2.13" },
{ front: "sacar", back: "abheben", lesson: "A2.13" },	{ front: "sacou", back: "hat abgehoben", lesson: "A2.13" },
{ front: "receber", back: "kriegen", lesson: "A2.13" },	{ front: "recebeu", back: "hat gekriegt", lesson: "A2.13" },
{ front: "o caixa eletrônico", back: "der Geldautomat", lesson: "A2.13" },	{ front: "os caixas eletrônicos", back: "die Geldautomaten", lesson: "A2.13" },
{ front: "a conta corrente", back: "das Girokonto", lesson: "A2.13" },	{ front: "as contas correntes", back: "die Girokonten", lesson: "A2.13" },
{ front: "se", back: "ob", lesson: "A2.13" },	
{ front: "o dinheiro", back: "das Bargeld", lesson: "A2.13" },	
{ front: "a soma", back: "die Summe", lesson: "A2.13" },	{ front: "as somas", back: "die Summen", lesson: "A2.13" },
{ front: "mas, porém", back: "sondern", lesson: "A2.13" },	
{ front: "mensal", back: "monatlich", lesson: "A2.13" },	
{ front: "os juros", back: "die Zinsen", lesson: "A2.13" },	
{ front: "aceitar", back: "akzeptieren", lesson: "A2.13" },	{ front: "aceitou", back: "hat akzeptiert", lesson: "A2.13" },
{ front: "a mesada", back: "das Taschengeld", lesson: "A2.13" },	
{ front: "resolver, realizar", back: "erledigen", lesson: "A2.13" },	{ front: "resolveu, realizou", back: "hat erledigt", lesson: "A2.13" },
{ front: "controlar", back: "kontrollieren", lesson: "A2.13" },	{ front: "controlou", back: "hat kontrolliert", lesson: "A2.13" },
{ front: "o controle", back: "die Kontrolle", lesson: "A2.13" },	{ front: "os controles", back: "die Kontrollen", lesson: "A2.13" },
{ front: "quebrar, estragar", back: "kaputtgehen", lesson: "A2.13" },	{ front: "quebrou", back: "ist kaputtgegangen", lesson: "A2.13" },
{ front: "reconhecer", back: "erkennen", lesson: "A2.13" },	{ front: "reconheceu", back: "hat erkannt", lesson: "A2.13" },
{ front: "o fabricante", back: "der Hersteller", lesson: "A2.13" },	{ front: "os fabricantes", back: "die Hersteller", lesson: "A2.13" },
{ front: "o óleo", back: "das Öl", lesson: "A2.13" },	
{ front: "o freio", back: "die Bremse", lesson: "A2.13" },	{ front: "os freios", back: "die Bremsen", lesson: "A2.13" },
{ front: "verificar", back: "überprüfen", lesson: "A2.13" },	{ front: "verificou", back: "hat überprüft", lesson: "A2.13" },
{ front: "renovar", back: "renovieren", lesson: "A2.13" },	{ front: "renovou", back: "hat renoviert", lesson: "A2.13" },
{ front: "mudar, alterar", back: "ändern", lesson: "A2.13" },	{ front: "mudou", back: "hat geändert", lesson: "A2.13" },
{ front: "cortar (se)", back: "schneiden (sich)", lesson: "A2.13" },	{ front: "cortou (se)", back: "hat geschnitten", lesson: "A2.13" },
{ front: "depositar", back: "einzahlen", lesson: "A2.13" },	{ front: "depositou", back: "hat eingezahlt", lesson: "A2.13" },
{ front: "o folheto", back: "die Broschüre", lesson: "A2.13" },	{ front: "os folhetos", back: "die Broschüren", lesson: "A2.13" },
{ front: "o salário", back: "das Gehalt", lesson: "A2.13" },	{ front: "os salários", back: "die Gehälter", lesson: "A2.13" },
{ front: "o comprovante de pagamento", back: "der Gehaltsnachweis", lesson: "A2.13" },	{ front: "os comprovantes de pagamento", back: "die Gehaltsnachweise", lesson: "A2.13" },
{ front: "digitar", back: "tippen", lesson: "A2.13" },	{ front: "digitou", back: "hat getippt", lesson: "A2.13" },
{ front: "transferir", back: "überweisen", lesson: "A2.13" },	{ front: "transferiu", back: "hat überwiesen", lesson: "A2.13" },
{ front: "o menu", back: "das Menü", lesson: "A2.13" },	{ front: "os menus", back: "die Menüs", lesson: "A2.13" },
{ front: "o garçom", back: "der Ober", lesson: "A2.13" },	{ front: "os garçons", back: "die Ober", lesson: "A2.13" },
{ front: "a polícia", back: "die Polizei", lesson: "A2.13" },	
{ front: "mau, bravo", back: "böse", lesson: "A2.13" },	
{ front: "o humor, o ânimo", back: "die Laune", lesson: "A2.13" },	{ front: "os humores", back: "die Launen", lesson: "A2.13" },
{ front: "o aumento", back: "die Erhöhung", lesson: "A2.13" },	{ front: "os aumentos", back: "die Erhöhungen", lesson: "A2.13" },
{ front: "o extrato bancário", back: "der Kontoauszug", lesson: "A2.13" },	{ front: "os extratos bancários", back: "die Kontoauszüge", lesson: "A2.13" },
{ front: "sacar dinheiro", back: "Geld abheben", lesson: "A2.13" },	{ front: "sacou dinheiro", back: "hat abgehoben", lesson: "A2.13" },
{ front: "a pesquisa, a enquete", back: "die Umfrage", lesson: "A2.14" },	{ front: "as pesquisas, as enquetes", back: "die Umfragen", lesson: "A2.14" },
{ front: "mal, quase não", back: "kaum", lesson: "A2.14" },	
{ front: "o futuro", back: "die Zukunft", lesson: "A2.14" },	
{ front: "a decisão", back: "die Entscheidung", lesson: "A2.14" },	{ front: "as decisões", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "morrer", back: "sterben", lesson: "A2.14" },	{ front: "morreu", back: "ist gestorben", lesson: "A2.14" },
{ front: "a infância", back: "die Kindheit", lesson: "A2.14" },	{ front: "as infâncias", back: "die Kindheiten", lesson: "A2.14" },
{ front: "ao lado, vizinho", back: "nebenan", lesson: "A2.14" },	
{ front: "apaixonar-se", back: "verlieben (sich)", lesson: "A2.14" },	{ front: "se apaixonou", back: "hat sich verliebt", lesson: "A2.14" },
{ front: "bobagem, besteira", back: "der Quatsch", lesson: "A2.14" },	
{ front: "o ensinamento, a doutrina", back: "die Lehre", lesson: "A2.14" },	{ front: "os ensinamentos, as doutrinas", back: "die Lehren", lesson: "A2.14" },
{ front: "acidental, por acaso", back: "zufällig", lesson: "A2.14" },	
{ front: "o local, o restaurante", back: "das Lokal", lesson: "A2.14" },	{ front: "os locais, os restaurantes", back: "die Lokale", lesson: "A2.14" },
{ front: "desde então", back: "seitdem", lesson: "A2.14" },	
{ front: "único, exclusivo", back: "einzig-", lesson: "A2.14" },	
{ front: "o contrário", back: "das Gegenteil", lesson: "A2.14" },	{ front: "os contrários", back: "die Gegenteile", lesson: "A2.14" },
{ front: "indiferente, tanto faz", back: "egal", lesson: "A2.14" },	
{ front: "a briga, o conflito", back: "der Streit", lesson: "A2.14" },	{ front: "as brigas, os conflitos", back: "die Streite", lesson: "A2.14" },
{ front: "o par", back: "das Paar", lesson: "A2.14" },	{ front: "os pares", back: "die Paare", lesson: "A2.14" },
{ front: "a educação", back: "die Erziehung", lesson: "A2.14" },	
{ front: "a opinião", back: "die Meinung", lesson: "A2.14" },	{ front: "as opiniões", back: "die Meinungen", lesson: "A2.14" },
{ front: "o conselho", back: "der Ratschlag", lesson: "A2.14" },	{ front: "os conselhos", back: "die Ratschläge", lesson: "A2.14" },
{ front: "o rato", back: "die Maus", lesson: "A2.14" },	{ front: "os ratos", back: "die Mäuse", lesson: "A2.14" },
{ front: "mais, mais cedo", back: "eher", lesson: "A2.14" },	
{ front: "popular", back: "populär", lesson: "A2.14" },	
{ front: "o fumante", back: "der Raucher", lesson: "A2.14" },	{ front: "os fumantes", back: "die Raucher", lesson: "A2.14" },
{ front: "a fumante", back: "die Raucherin", lesson: "A2.14" },	{ front: "as fumantes", back: "die Raucherinnen", lesson: "A2.14" },
{ front: "o conto de fadas, o mito", back: "das Märchen", lesson: "A2.14" },	{ front: "os contos de fadas, os mitos", back: "die Märchen", lesson: "A2.14" },
{ front: "abordar, falar com alguém", back: "ansprechen", lesson: "A2.14" },	{ front: "abordou, falou com alguém", back: "hat angesprochen", lesson: "A2.14" },
{ front: "agradecer", back: "danken", lesson: "A2.14" },	{ front: "agradeceu", back: "hat gedankt", lesson: "A2.14" },
{ front: "a ideia, o pensamento", back: "der Einfall", lesson: "A2.14" },	{ front: "as ideias, os pensamentos", back: "die Einfälle", lesson: "A2.14" },
{ front: "o mundo", back: "die Welt", lesson: "A2.14" },	{ front: "os mundos", back: "die Welten", lesson: "A2.14" },
{ front: "o animal de estimação", back: "das Haustier", lesson: "A2.14" },	{ front: "os animais de estimação", back: "die Haustiere", lesson: "A2.14" },
{ front: "sério", back: "ernst", lesson: "A2.14" },	
{ front: "confortável, conveniente", back: "bequem", lesson: "A2.14" },	
{ front: "a infância", back: "die Kindheit", lesson: "A2.14" },	{ front: "as infâncias", back: "die Kindheiten", lesson: "A2.14" },
{ front: "o par", back: "das Paar", lesson: "A2.14" },	{ front: "os pares", back: "die Paare", lesson: "A2.14" },
{ front: "a decisão", back: "die Entscheidung", lesson: "A2.14" },	{ front: "as decisões", back: "die Entscheidungen", lesson: "A2.14" },
{ front: "a pesquisa, a enquete", back: "die Umfrage", lesson: "A2.14" },	{ front: "as pesquisas, as enquetes", back: "die Umfragen", lesson: "A2.14" },
{ front: "o mundo", back: "die Welt", lesson: "A2.14" },	{ front: "os mundos", back: "die Welten", lesson: "A2.14" },
{ front: "a experiência", back: "das Erlebnis", lesson: "B1.1" },	{ front: "as experiências", back: "die Erlebnisse", lesson: "B1.1" },
{ front: "o artigo", back: "der Artikel", lesson: "B1.1" },	
{ front: "ser", back: "sein", lesson: "B1.1" },	{ front: "foi embora", back: "ist weg gewesen", lesson: "B1.1" },
{ front: "a religião", back: "die Religion", lesson: "B1.1" },	{ front: "as religiões", back: "die Religionen", lesson: "B1.1" },
{ front: "a surpresa", back: "die Überraschung", lesson: "B1.1" },	{ front: "as surpresas", back: "die Überraschungen", lesson: "B1.1" },
{ front: "louco, maluco", back: "verrückt", lesson: "B1.1" },	
{ front: "o prêmio, o ganho", back: "der Gewinn", lesson: "B1.1" },	{ front: "os prêmios, os ganhos", back: "die Gewinne", lesson: "B1.1" },
{ front: "o imposto", back: "die Steuer", lesson: "B1.1" },	
{ front: "a voz", back: "die Stimme", lesson: "B1.1" },	{ front: "as vozes", back: "die Stimmen", lesson: "B1.1" },
{ front: "sentar-se", back: "sich setzen", lesson: "B1.1" },	{ front: "se sentou", back: "hat sich gesetzt", lesson: "B1.1" },
{ front: "corajoso", back: "mutig", lesson: "B1.1" },	
{ front: "a notícia, a mensagem", back: "die Meldung", lesson: "B1.1" },	{ front: "as notícias, as mensagens", back: "die Meldungen", lesson: "B1.1" },
{ front: "o título", back: "die Überschrift", lesson: "B1.1" },	{ front: "os títulos", back: "die Überschriften", lesson: "B1.1" },
{ front: "durante", back: "während", lesson: "B1.1" },	
{ front: "desaparecer", back: "verschwinden", lesson: "B1.1" },	{ front: "desapareceu", back: "ist verschwunden", lesson: "B1.1" },
{ front: "vários, múltiplos", back: "mehrer-", lesson: "B1.1" },	
{ front: "em vão", back: "vergeblich", lesson: "B1.1" },	
{ front: "subir", back: "steigen", lesson: "B1.1" },	{ front: "subiu", back: "ist gestiegen", lesson: "B1.1" },
{ front: "se surpreender", back: "sich wundern", lesson: "B1.1" },	{ front: "se surpreendeu", back: "hat sich gewundert", lesson: "B1.1" },
{ front: "de fato, na verdade", back: "zwar", lesson: "B1.1" },	
{ front: "a coragem", back: "der Mut", lesson: "B1.1" },	
{ front: "ambos", back: "beid-", lesson: "B1.1" },	
{ front: "alcançar, atingir", back: "erreichen", lesson: "B1.1" },	{ front: "alcançou", back: "hat erreicht", lesson: "B1.1" },
{ front: "profundo", back: "tief", lesson: "B1.1" },	
{ front: "confundir", back: "verwechseln", lesson: "B1.1" },	{ front: "confundiu", back: "hat verwechselt", lesson: "B1.1" },
{ front: "o meio", back: "das Mittel", lesson: "B1.1" },	
{ front: "alguns, certo", back: "einig-", lesson: "B1.1" },	
{ front: "estar, situar-se", back: "sich befinden", lesson: "B1.1" },	{ front: "esteve, se situou", back: "hat sich befunden", lesson: "B1.1" },
{ front: "refletir", back: "nachdenken", lesson: "B1.1" },	{ front: "refletiu", back: "hat nachgedacht", lesson: "B1.1" },
{ front: "a informação, a indicação", back: "die Angabe", lesson: "B1.1" },	{ front: "as informações, as indicações", back: "die Angaben", lesson: "B1.1" },
{ front: "salvar", back: "retten", lesson: "B1.1" },	{ front: "salvou", back: "hat gerettet", lesson: "B1.1" },
{ front: "ser suficiente", back: "ausreichen", lesson: "B1.1" },	{ front: "foi suficiente", back: "hat ausgereicht", lesson: "B1.1" },
{ front: "a raiva, o aborrecimento", back: "der Ärger", lesson: "B1.1" },	
{ front: "seguir", back: "folgen", lesson: "B1.1" },	{ front: "seguiu", back: "ist gefolgt", lesson: "B1.1" },
{ front: "pelo menos", back: "zumindest", lesson: "B1.1" },	
{ front: "cancelar", back: "absagen", lesson: "B1.1" },	{ front: "cancelou", back: "hat abgesagt", lesson: "B1.1" },
{ front: "chamar, gritar", back: "rufen", lesson: "B1.1" },	{ front: "chamou, gritou", back: "hat gerufen", lesson: "B1.1" },
{ front: "fechar, bloquear", back: "absperren", lesson: "B1.1" },	{ front: "fechou, bloqueou", back: "hat abgesperrt", lesson: "B1.1" },
{ front: "prender", back: "festnehmen", lesson: "B1.1" },	{ front: "prendeu", back: "hat festgenommen", lesson: "B1.1" },
{ front: "bêbado", back: "betrunken", lesson: "B1.1" },	
{ front: "o ladrão", back: "der Einbrecher", lesson: "B1.1" },	
{ front: "emocionante, empolgante", back: "aufregend", lesson: "B1.1" },	
{ front: "engraçado", back: "witzig", lesson: "B1.1" },	
{ front: "a scooter", back: "der Motorroller", lesson: "B1.1" },	
{ front: "ser", back: "sein", lesson: "B1.1" },	{ front: "foi apaixonado", back: "ist verliebt gewesen", lesson: "B1.1" },
{ front: "quebrar", back: "brechen", lesson: "B1.1" },	{ front: "quebrou", back: "ist/hat gebrochen", lesson: "B1.1" },
{ front: "o treinador", back: "der Trainer", lesson: "B1.1" },	{ front: "os treinadores", back: "die Trainer", lesson: "B1.1" },
{ front: "a treinadora", back: "die Trainerin", lesson: "B1.1" },	{ front: "as treinadoras", back: "die Trainerinnen", lesson: "B1.1" },
{ front: "o campo", back: "das Feld", lesson: "B1.1" },	{ front: "os campos", back: "die Felder", lesson: "B1.1" },
{ front: "todo, cada", back: "aller-", lesson: "B1.1" },	
{ front: "o gol", back: "das Tor", lesson: "B1.1" },	{ front: "os gols", back: "die Tore", lesson: "B1.1" },
{ front: "fugir", back: "fliehen", lesson: "B1.1" },	{ front: "fugiu", back: "ist geflohen", lesson: "B1.1" },
{ front: "melhor", back: "best-", lesson: "B1.1" },	
{ front: "o cartório", back: "das Standesamt", lesson: "B1.1" },	{ front: "os cartórios", back: "die Standesämter", lesson: "B1.1" },
{ front: "atirar", back: "schießen", lesson: "B1.1" },	{ front: "atirou", back: "hat geschossen", lesson: "B1.1" },
{ front: "o dano", back: "der Schaden", lesson: "B1.1" },	{ front: "os danos", back: "die Schäden", lesson: "B1.1" },
{ front: "a cortina", back: "der Vorhang", lesson: "B1.1" },	{ front: "as cortinas", back: "die Vorhänge", lesson: "B1.1" },
{ front: "imediato, instantâneo", back: "augenblicklich", lesson: "B1.1" },	
{ front: "morder", back: "beißen", lesson: "B1.1" },	{ front: "mordeu", back: "hat gebissen", lesson: "B1.1" },
{ front: "assustar", back: "erschrecken", lesson: "B1.1" },	{ front: "assustou", back: "ist erschrocken", lesson: "B1.1" },
{ front: "o contato", back: "der Kontakt", lesson: "B1.1" },	{ front: "os contatos", back: "die Kontakte", lesson: "B1.1" },
{ front: "os dados", back: "die Daten", lesson: "B1.1" },	
{ front: "a conversa", back: "das Gespräch", lesson: "B1.1" },	{ front: "as conversas", back: "die Gespräche", lesson: "B1.1" },
{ front: "o relatório, o relatório", back: "der Bericht", lesson: "B1.1" },	{ front: "os relatórios", back: "die Berichte", lesson: "B1.1" },
{ front: "a meia-noite", back: "die Mitternacht", lesson: "B1.1" },	
{ front: "a pedra", back: "der Stein", lesson: "B1.1" },	{ front: "as pedras", back: "die Steine", lesson: "B1.1" },
{ front: "o leão", back: "der Löwe", lesson: "B1.1" },	{ front: "os leões", back: "die Löwen", lesson: "B1.1" },
{ front: "a notícia, a mensagem", back: "die Meldung", lesson: "B1.1" },	{ front: "as notícias", back: "die Meldungen", lesson: "B1.1" },
{ front: "o título", back: "die Überschrift", lesson: "B1.1" },	{ front: "os títulos", back: "die Überschriften", lesson: "B1.1" },
{ front: "o artigo", back: "der Artikel", lesson: "B1.1" },	
{ front: "a entrevista", back: "das Interview", lesson: "B1.1" },	{ front: "as entrevistas", back: "die Interviews", lesson: "B1.1" },
{ front: "a informação", back: "die Information", lesson: "B1.1" },	{ front: "as informações", back: "die Informationen", lesson: "B1.1" },
{ front: "o anúncio", back: "die Anzeige", lesson: "B1.1" },	{ front: "os anúncios", back: "die Anzeigen", lesson: "B1.1" },
{ front: "a série", back: "die Serie", lesson: "B1.2" },	{ front: "as séries", back: "die Serien", lesson: "B1.2" },
{ front: "o episódio", back: "die Folge", lesson: "B1.2" },	{ front: "os episódios", back: "die Folgen", lesson: "B1.2" },
{ front: "o personagem", back: "der Charakter", lesson: "B1.2" },	{ front: "os personagens", back: "die Charaktere", lesson: "B1.2" },
{ front: "embora, apesar de", back: "obwohl", lesson: "B1.2" },	
{ front: "constante, contínuo", back: "dauernd", lesson: "B1.2" },	
{ front: "o perdedor", back: "der Verlierer", lesson: "B1.2" },	{ front: "os perdedores", back: "die Verlierer", lesson: "B1.2" },
{ front: "o tipo, o cara", back: "der Typ", lesson: "B1.2" },	{ front: "os tipos", back: "die Typen", lesson: "B1.2" },
{ front: "otimista", back: "optimistisch", lesson: "B1.2" },	
{ front: "a figura", back: "die Figur", lesson: "B1.2" },	{ front: "as figuras", back: "die Figuren", lesson: "B1.2" },
{ front: "inacreditável, incrível", back: "unglaublich", lesson: "B1.2" },	
{ front: "inventar", back: "erfinden", lesson: "B1.2" },	{ front: "inventou", back: "hat erfunden", lesson: "B1.2" },
{ front: "a operação", back: "die Operation", lesson: "B1.2" },	{ front: "as operações", back: "die Operationen", lesson: "B1.2" },
{ front: "o sangue", back: "das Blut", lesson: "B1.2" },	
{ front: "criminal", back: "Kriminal", lesson: "B1.2" },	
{ front: "publicar", back: "veröffentlichen", lesson: "B1.2" },	{ front: "publicou", back: "hat veröffentlicht", lesson: "B1.2" },
{ front: "o caso", back: "der Fall", lesson: "B1.2" },	{ front: "os casos", back: "die Fälle", lesson: "B1.2" },
{ front: "o vocabulário de aprendizagem", back: "der Lernwortschatz", lesson: "B1.2" },	
{ front: "atual", back: "heutig", lesson: "B1.2" },	
{ front: "agir", back: "handeln", lesson: "B1.2" },	{ front: "agiu", back: "hat gehandelt", lesson: "B1.2" },
{ front: "o passado", back: "die Vergangenheit", lesson: "B1.2" },	
{ front: "a cantora", back: "die Sängerin", lesson: "B1.2" },	{ front: "as cantoras", back: "die Sängerinnen", lesson: "B1.2" },
{ front: "a banda", back: "die Band", lesson: "B1.2" },	{ front: "as bandas", back: "die Bands", lesson: "B1.2" },
{ front: "surgir", back: "entstehen", lesson: "B1.2" },	{ front: "surgiu", back: "ist entstanden", lesson: "B1.2" },
{ front: "eletrônico", back: "elektronisch", lesson: "B1.2" },	
{ front: "produzir", back: "produzieren", lesson: "B1.2" },	{ front: "produziu", back: "hat produziert", lesson: "B1.2" },
{ front: "a grande cidade", back: "die Großstadt", lesson: "B1.2" },	{ front: "as grandes cidades", back: "die Großstädte", lesson: "B1.2" },
{ front: "entrementes, entretanto", back: "inzwischen", lesson: "B1.2" },	
{ front: "inicialmente", back: "Anfangs", lesson: "B1.2" },	
{ front: "denominado, chamado", back: "sogenannt", lesson: "B1.2" },	
{ front: "a música", back: "der Song", lesson: "B1.2" },	{ front: "as músicas", back: "die Songs", lesson: "B1.2" },
{ front: "o sucesso, o hit", back: "der Hit", lesson: "B1.2" },	{ front: "os sucessos", back: "die Hits", lesson: "B1.2" },
{ front: "totalmente", back: "völlig", lesson: "B1.2" },	
{ front: "o humor", back: "der Humor", lesson: "B1.2" },	
{ front: "cotidiano", back: "alltäglich", lesson: "B1.2" },	
{ front: "a violência", back: "die Gewalt", lesson: "B1.2" },	
{ front: "criticar", back: "kritisieren", lesson: "B1.2" },	{ front: "criticou", back: "hat kritisiert", lesson: "B1.2" },
{ front: "a estrela", back: "der Star", lesson: "B1.2" },	{ front: "as estrelas", back: "die Stars", lesson: "B1.2" },
{ front: "a cena", back: "die Szene", lesson: "B1.2" },	
{ front: "bem-sucedido", back: "erfolgreich", lesson: "B1.2" },	
{ front: "se ocupar", back: "sich beschäftigen", lesson: "B1.2" },	{ front: "se ocupou", back: "hat sich beschäftigt", lesson: "B1.2" },
{ front: "o desemprego", back: "die Arbeitslosigkeit", lesson: "B1.2" },	
{ front: "o depósito", back: "das Lager", lesson: "B1.2" },	{ front: "os depósitos", back: "die Lager", lesson: "B1.2" },
{ front: "a relação", back: "das Verhältnis", lesson: "B1.2" },	{ front: "as relações", back: "die Verhältnisse", lesson: "B1.2" },
{ front: "ter sucesso, conseguir", back: "gelingen", lesson: "B1.2" },	{ front: "conseguiu", back: "ist gelungen", lesson: "B1.2" },
{ front: "o conselho", back: "der Rat", lesson: "B1.2" },	
{ front: "por último", back: "zuletzt", lesson: "B1.2" },	
{ front: "abandonar", back: "verlassen", lesson: "B1.2" },	{ front: "abandonou", back: "hat verlassen", lesson: "B1.2" },
{ front: "acompanhar", back: "begleiten", lesson: "B1.2" },	{ front: "acompanhou", back: "hat begleitet", lesson: "B1.2" },
{ front: "a caixa", back: "die Kiste", lesson: "B1.2" },	{ front: "as caixas", back: "die Kisten", lesson: "B1.2" },
{ front: "a margem", back: "das Ufer", lesson: "B1.2" },	{ front: "as margens", back: "die Ufer", lesson: "B1.2" },
{ front: "enxaguar, lavar", back: "spülen", lesson: "B1.2" },	{ front: "enxaguou", back: "hat gespült", lesson: "B1.2" },
{ front: "fora", back: "außen", lesson: "B1.2" },	
{ front: "dentro", back: "innen", lesson: "B1.2" },	
{ front: "encontrar", back: "begegnen", lesson: "B1.2" },	{ front: "encontrou", back: "ist begegnet", lesson: "B1.2" },
{ front: "a aventura", back: "das Abenteuer", lesson: "B1.2" },	{ front: "as aventuras", back: "die Abenteuer", lesson: "B1.2" },
{ front: "se realizar", back: "sich erfüllen", lesson: "B1.2" },	{ front: "se realizou", back: "hat sich erfüllt", lesson: "B1.2" },
{ front: "por isso", back: "dafür", lesson: "B1.2" },	
{ front: "concordar", back: "zustimmen", lesson: "B1.2" },	{ front: "concordou", back: "hat zugestimmt", lesson: "B1.2" },
{ front: "os meios de comunicação", back: "die Medien", lesson: "B1.2" },	
{ front: "a radiodifusão", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "escasso, curto", back: "knapp", lesson: "B1.2" },	
{ front: "duplo", back: "doppelt", lesson: "B1.2" },	
{ front: "relativo", back: "relativ", lesson: "B1.2" },	
{ front: "a série", back: "die Serie", lesson: "B1.2" },	{ front: "as séries", back: "die Serien", lesson: "B1.2" },
{ front: "o episódio", back: "die Folge", lesson: "B1.2" },	{ front: "os episódios", back: "die Folgen", lesson: "B1.2" },
{ front: "a figura", back: "die Figur", lesson: "B1.2" },	{ front: "as figuras", back: "die Figuren", lesson: "B1.2" },
{ front: "o personagem", back: "der Charakter", lesson: "B1.2" },	{ front: "os personagens", back: "die Charaktere", lesson: "B1.2" },
{ front: "criminal", back: "Kriminal", lesson: "B1.2" },	
{ front: "a radiodifusão", back: "der Rundfunk", lesson: "B1.2" },	
{ front: "a aventura", back: "das Abenteuer", lesson: "B1.2" },	{ front: "as aventuras", back: "die Abenteuer", lesson: "B1.2" },
{ front: "o cinema", back: "das Kino", lesson: "B1.2" },	{ front: "os cinemas", back: "die Kinos", lesson: "B1.2" },
{ front: "o estômago", back: "der Magen", lesson: "B1.3" },	{ front: "os estômagos", back: "die Mägen", lesson: "B1.3" },
{ front: "convencer", back: "überreden", lesson: "B1.3" },	{ front: "convenceu", back: "hat überredet", lesson: "B1.3" },
{ front: "acordar, combinar", back: "vereinbaren", lesson: "B1.3" },	{ front: "combinou", back: "hat vereinbart", lesson: "B1.3" },
{ front: "o remédio, o meio", back: "das Mittel", lesson: "B1.3" },	{ front: "os meios", back: "die Mittel", lesson: "B1.3" },
{ front: "o sono", back: "der Schlaf", lesson: "B1.3" },	
{ front: "o fator", back: "der Faktor", lesson: "B1.3" },	{ front: "os fatores", back: "die Faktoren", lesson: "B1.3" },
{ front: "à noite", back: "nachts", lesson: "B1.3" },	
{ front: "a base, a fundação", back: "die Grundlage", lesson: "B1.3" },	{ front: "as bases", back: "die Grundlagen", lesson: "B1.3" },
{ front: "suficiente", back: "ausreichend", lesson: "B1.3" },	
{ front: "prestar atenção", back: "achten", lesson: "B1.3" },	{ front: "prestou atenção", back: "hat geachtet", lesson: "B1.3" },
{ front: "a gordura", back: "das Fett", lesson: "B1.3" },	{ front: "as gorduras", back: "die Fette", lesson: "B1.3" },
{ front: "ideal", back: "ideal", lesson: "B1.3" },	
{ front: "igualmente, também", back: "ebenfalls", lesson: "B1.3" },	
{ front: "respirar", back: "atmen", lesson: "B1.3" },	{ front: "respirou", back: "hat geatmet", lesson: "B1.3" },
{ front: "raso, plano", back: "flach", lesson: "B1.3" },	
{ front: "o efeito", back: "die Wirkung", lesson: "B1.3" },	{ front: "os efeitos", back: "die Wirkungen", lesson: "B1.3" },
{ front: "mais frequentemente", back: "öfter", lesson: "B1.3" },	
{ front: "a força", back: "die Kraft", lesson: "B1.3" },	{ front: "as forças", back: "die Kräfte", lesson: "B1.3" },
{ front: "simultaneamente", back: "gleichzeitig", lesson: "B1.3" },	
{ front: "exausto", back: "erschöpft", lesson: "B1.3" },	
{ front: "o resultado", back: "das Ergebnis", lesson: "B1.3" },	{ front: "os resultados", back: "die Ergebnisse", lesson: "B1.3" },
{ front: "evitar, contornar", back: "umgehen", lesson: "B1.3" },	{ front: "evitou", back: "ist umgegangen", lesson: "B1.3" },
{ front: "acordar", back: "aufwachen", lesson: "B1.3" },	{ front: "acordou", back: "bist aufgewacht", lesson: "B1.3" },
{ front: "a falta, a carência", back: "der Mangel", lesson: "B1.3" },	{ front: "as faltas", back: "die Mängel", lesson: "B1.3" },
{ front: "extremo", back: "extrem", lesson: "B1.3" },	
{ front: "medir", back: "messen", lesson: "B1.3" },	{ front: "mediu", back: "hat gemessen", lesson: "B1.3" },
{ front: "perder peso", back: "abnehmen", lesson: "B1.3" },	{ front: "perdeu peso", back: "hat abgenommen", lesson: "B1.3" },
{ front: "o peso", back: "das Gewicht", lesson: "B1.3" },	
{ front: "examinar, investigar", back: "untersuchen", lesson: "B1.3" },	{ front: "examinou", back: "hat untersucht", lesson: "B1.3" },
{ front: "a lixeira", back: "der Abfalleimer", lesson: "B1.3" },	{ front: "as lixeiras", back: "die Abfalleimer", lesson: "B1.3" },
{ front: "a melhoria", back: "die Verbesserung", lesson: "B1.3" },	{ front: "as melhorias", back: "die Verbesserungen", lesson: "B1.3" },
{ front: "a ingestão", back: "die Einnahme", lesson: "B1.3" },	
{ front: "tal, desse tipo", back: "solch", lesson: "B1.3" },	
{ front: "o especialista", back: "der Fachmann", lesson: "B1.3" },	{ front: "os especialistas", back: "die Fachmänner", lesson: "B1.3" },
{ front: "o ombro", back: "die Schulter", lesson: "B1.3" },	{ front: "os ombros", back: "die Schultern", lesson: "B1.3" },
{ front: "inicialmente", back: "zunächst", lesson: "B1.3" },	
{ front: "supor, presumir", back: "vermuten", lesson: "B1.3" },	{ front: "supôs", back: "hat vermutet", lesson: "B1.3" },
{ front: "a interrupção, o distúrbio", back: "die Störung", lesson: "B1.3" },	{ front: "os distúrbios", back: "die Störungen", lesson: "B1.3" },
{ front: "o analgésico", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "os analgésicos", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "liderar, conduzir", back: "führen", lesson: "B1.3" },	{ front: "liderou", back: "hat geführt", lesson: "B1.3" },
{ front: "prescrever", back: "verschreiben", lesson: "B1.3" },	{ front: "prescreveu", back: "hat verschrieben", lesson: "B1.3" },
{ front: "receber", back: "erhalten", lesson: "B1.3" },	{ front: "recebeu", back: "hat erhalten", lesson: "B1.3" },
{ front: "perder peso", back: "abnehmen", lesson: "B1.3" },	{ front: "perdeu peso", back: "hat abgenommen", lesson: "B1.3" },
{ front: "o bem-estar", back: "das Wohl", lesson: "B1.3" },	
{ front: "de graça, grátis", back: "umsonst", lesson: "B1.3" },	
{ front: "participar", back: "teilnehmen", lesson: "B1.3" },	{ front: "participou", back: "hat teilgenommen", lesson: "B1.3" },
{ front: "o desempenho, a performance", back: "die Leistung", lesson: "B1.3" },	{ front: "os desempenhos", back: "die Leistungen", lesson: "B1.3" },
{ front: "vacinar", back: "impfen", lesson: "B1.3" },	{ front: "vacinou", back: "hat geimpft", lesson: "B1.3" },
{ front: "praticar (esportes)", back: "treiben", lesson: "B1.3" },	{ front: "praticou", back: "hat getrieben", lesson: "B1.3" },
{ front: "a metade", back: "die Hälfte", lesson: "B1.3" },	{ front: "as metades", back: "die Hälften", lesson: "B1.3" },
{ front: "o quarto", back: "das Viertel", lesson: "B1.3" },	{ front: "os quartos", back: "die Viertel", lesson: "B1.3" },
{ front: "o terço", back: "das Drittel", lesson: "B1.3" },	{ front: "os terços", back: "die Drittel", lesson: "B1.3" },
{ front: "fundamental, essencial", back: "grundsätzlich", lesson: "B1.3" },	
{ front: "a fruta", back: "die Frucht", lesson: "B1.3" },	{ front: "as frutas", back: "die Früchte", lesson: "B1.3" },
{ front: "abdicar, abrir mão", back: "verzichten", lesson: "B1.3" },	{ front: "abdicou", back: "hat verzichtet", lesson: "B1.3" },
{ front: "o quark (tipo de queijo)", back: "der Quark", lesson: "B1.3" },	
{ front: "a vitamina", back: "das Vitamin", lesson: "B1.3" },	{ front: "as vitaminas", back: "die Vitamine", lesson: "B1.3" },
{ front: "comunicar-se doente", back: "krankmelden", lesson: "B1.3" },	{ front: "comunicou-se doente", back: "hat krankgemeldet", lesson: "B1.3" },
{ front: "dar atestado médico", back: "krankschreiben", lesson: "B1.3" },	{ front: "deu atestado médico", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "a conferência", back: "die Konferenz", lesson: "B1.3" },	{ front: "as conferências", back: "die Konferenzen", lesson: "B1.3" },
{ front: "o bloco de notas", back: "der Schreibblock", lesson: "B1.3" },	{ front: "os blocos de notas", back: "die Schreibblöcke", lesson: "B1.3" },
{ front: "o laboratório", back: "das Labor", lesson: "B1.3" },	{ front: "os laboratórios", back: "die Labors / die Labore", lesson: "B1.3" },
{ front: "o curativo, o sindicato", back: "der Verband", lesson: "B1.3" },	{ front: "os curativos / os sindicatos", back: "die Verbände", lesson: "B1.3" },
{ front: "a seringa, a injeção", back: "die Spritze", lesson: "B1.3" },	{ front: "as seringas", back: "die Spritzen", lesson: "B1.3" },
{ front: "examinar (alguém/algo)", back: "untersuchen (jemanden/etwas)", lesson: "B1.3" },	{ front: "examinou", back: "hat untersucht", lesson: "B1.3" },
{ front: "vacinar (alguém)", back: "impfen (jemanden)", lesson: "B1.3" },	{ front: "vacinou", back: "hat geimpft", lesson: "B1.3" },
{ front: "o medicamento", back: "das Medikament", lesson: "B1.3" },	{ front: "os medicamentos", back: "die Medikamente", lesson: "B1.3" },
{ front: "prescrever", back: "verschreiben", lesson: "B1.3" },	{ front: "prescreveu", back: "hat verschrieben", lesson: "B1.3" },
{ front: "alguém", back: "jemanden", lesson: "B1.3" },	
{ front: "dar atestado médico", back: "krankschreiben", lesson: "B1.3" },	{ front: "deu atestado médico", back: "hat krankgeschrieben", lesson: "B1.3" },
{ front: "a seringa", back: "die Spritze", lesson: "B1.3" },	{ front: "as seringas", back: "die Spritzen", lesson: "B1.3" },
{ front: "o curativo", back: "der Verband", lesson: "B1.3" },	{ front: "os curativos", back: "die Verbände", lesson: "B1.3" },
{ front: "o analgésico", back: "das Schmerzmittel", lesson: "B1.3" },	{ front: "os analgésicos", back: "die Schmerzmittel", lesson: "B1.3" },
{ front: "a pomada", back: "die Salbe", lesson: "B1.3" },	{ front: "as pomadas", back: "die Salben", lesson: "B1.3" },
{ front: "a dor", back: "der Schmerz", lesson: "B1.3" },	{ front: "as dores", back: "die Schmerzen", lesson: "B1.3" },
{ front: "o resfriado", back: "der Schnupfen", lesson: "B1.3" },	
{ front: "medir (a pressão sanguínea)", back: "messen (den Blutdruck)", lesson: "B1.3" },	{ front: "mediu (a pressão sanguínea)", back: "hat gemessen", lesson: "B1.3" },
{ front: "retirar (sangue)", back: "abnehmen (Blut)", lesson: "B1.3" },	{ front: "retirou (sangue)", back: "hat abgenommen", lesson: "B1.3" },
{ front: "verificar (o peso)", back: "prüfen (das Gewicht)", lesson: "B1.3" },	{ front: "verificou (o peso)", back: "hat geprüft", lesson: "B1.3" },
{ front: "a barriga", back: "der Bauch", lesson: "B1.3" },	{ front: "as barrigas", back: "die Bäuche", lesson: "B1.3" },
{ front: "a febre", back: "das Fieber", lesson: "B1.3" },	
{ front: "a tosse", back: "der Husten", lesson: "B1.3" },	
{ front: "sobre o quê", back: "worüber", lesson: "B1.4" },	
{ front: "a pressa", back: "die Eile", lesson: "B1.4" },	
{ front: "o porão", back: "der Keller", lesson: "B1.4" },	{ front: "os porões", back: "die Keller", lesson: "B1.4" },
{ front: "lá, ali", back: "da", lesson: "B1.4" },	
{ front: "a frase", back: "der Satz", lesson: "B1.4" },	{ front: "as frases", back: "die Sätze", lesson: "B1.4" },
{ front: "lá, ali", back: "da(r)-", lesson: "B1.4" },	
{ front: "de jeito nenhum, nem um", back: "gar", lesson: "B1.4" },	
{ front: "de qualquer forma, pelo menos", back: "jedenfalls", lesson: "B1.4" },	
{ front: "sorrir", back: "lächeln", lesson: "B1.4" },	{ front: "sorriu", back: "hat gelächelt", lesson: "B1.4" },
{ front: "enfim, bem, simplesmente", back: "halt", lesson: "B1.4" },	
{ front: "claro, evidente", back: "deutlich", lesson: "B1.4" },	
{ front: "tanto, muito", back: "so viel", lesson: "B1.4" },	
{ front: "planejar", back: "vorhaben", lesson: "B1.4" },	{ front: "planejou", back: "hat vorgehabt", lesson: "B1.4" },
{ front: "a verdade", back: "die Wahrheit", lesson: "B1.4" },	{ front: "as verdades", back: "die Wahrheiten", lesson: "B1.4" },
{ front: "mentir", back: "lügen", lesson: "B1.4" },	{ front: "mentiu", back: "hat gelogen", lesson: "B1.4" },
{ front: "terminar, concluir", back: "beenden", lesson: "B1.4" },	{ front: "terminou", back: "hat beendet", lesson: "B1.4" },
{ front: "a vaga de aprendizado", back: "der Ausbildungsplatz", lesson: "B1.4" },	{ front: "as vagas de aprendizado", back: "die Ausbildungsplätze", lesson: "B1.4" },
{ front: "escolher", back: "aussuchen", lesson: "B1.4" },	{ front: "escolheu", back: "hat ausgesucht", lesson: "B1.4" },
{ front: "o presidente / a presidenta", back: "der Präsident / die Präsidentin", lesson: "B1.4" },	{ front: "os presidentes / as presidentas", back: "die Präsidenten / die Präsidentinnen", lesson: "B1.4" },
{ front: "a carteira", back: "das Portemonnaie", lesson: "B1.4" },	{ front: "as carteiras", back: "die Portemonnaies", lesson: "B1.4" },
{ front: "fluente", back: "fließend", lesson: "B1.4" },	
{ front: "por isso", back: "deswegen", lesson: "B1.4" },	
{ front: "em algum momento, algum dia", back: "irgendwann", lesson: "B1.4" },	
{ front: "traduzir", back: "übersetzen", lesson: "B1.4" },	{ front: "traduziu", back: "hat übersetzt", lesson: "B1.4" },
{ front: "por isso", back: "daher", lesson: "B1.4" },	
{ front: "a língua materna", back: "die Muttersprache", lesson: "B1.4" },	{ front: "as línguas maternas", back: "die Muttersprachen", lesson: "B1.4" },
{ front: "a pronúncia", back: "die Aussprache", lesson: "B1.4" },	
{ front: "por isso, por essa razão", back: "darum", lesson: "B1.4" },	
{ front: "escrever", back: "aufschreiben", lesson: "B1.4" },	{ front: "escreveu", back: "hat aufgeschrieben", lesson: "B1.4" },
{ front: "a expressão", back: "der Ausdruck", lesson: "B1.4" },	{ front: "as expressões", back: "die Ausdrücke", lesson: "B1.4" },
{ front: "de novo", back: "noch mal", lesson: "B1.4" },	
{ front: "o mecânico", back: "der Mechaniker", lesson: "B1.4" },	{ front: "os mecânicos", back: "die Mechaniker", lesson: "B1.4" },
{ front: "a mecânica", back: "die Mechanikerin", lesson: "B1.4" },	{ front: "as mecânicas", back: "die Mechanikerinnen", lesson: "B1.4" },
{ front: "a repetição", back: "die Wiederholung", lesson: "B1.4" },	{ front: "as repetições", back: "die Wiederholungen", lesson: "B1.4" },
{ front: "o refeitório", back: "die Mensa", lesson: "B1.4" },	{ front: "os refeitórios", back: "die Mensen", lesson: "B1.4" },
{ front: "o curso de integração", back: "der Integrationskurs", lesson: "B1.4" },	{ front: "os cursos de integração", back: "die Integrationskurse", lesson: "B1.4" },
{ front: "a origem", back: "die Herkunft", lesson: "B1.4" },	{ front: "as origens", back: "die Herkünfte", lesson: "B1.4" },
{ front: "se esconder", back: "sich verstecken", lesson: "B1.4" },	{ front: "se escondeu", back: "hat sich versteckt", lesson: "B1.4" },
{ front: "legal, bacana", back: "cool", lesson: "B1.4" },	
{ front: "o grego", back: "das Griechisch", lesson: "B1.4" },	
{ front: "o grego", back: "der Grieche", lesson: "B1.4" },	{ front: "os gregos", back: "die Griechen", lesson: "B1.4" },
{ front: "a grega", back: "die Griechin", lesson: "B1.4" },	{ front: "as gregas", back: "die Griechinnen", lesson: "B1.4" },
{ front: "confuso, desordenado", back: "durcheinander", lesson: "B1.4" },	
{ front: "no mais tardar, ao mais tardar", back: "spätestens", lesson: "B1.4" },	
{ front: "escolher", back: "wählen", lesson: "B1.4" },	{ front: "escolheu", back: "hat gewählt", lesson: "B1.4" },
{ front: "originar-se, vir de", back: "stammen", lesson: "B1.4" },	{ front: "originou-se", back: "hat gestammt", lesson: "B1.4" },
{ front: "o molho", back: "die Soße", lesson: "B1.4" },	{ front: "os molhos", back: "die Soßen", lesson: "B1.4" },
{ front: "gradualmente, aos poucos", back: "allmählich", lesson: "B1.4" },	
{ front: "o nervo", back: "der Nerv", lesson: "B1.4" },	{ front: "os nervos", back: "die Nerven", lesson: "B1.4" },
{ front: "estranho", back: "merkwürdig", lesson: "B1.4" },	
{ front: "correto", back: "korrekt", lesson: "B1.4" },	
{ front: "por outro lado, em contrapartida", back: "andererseits", lesson: "B1.4" },	
{ front: "igualmente, da mesma forma", back: "ebenso", lesson: "B1.4" },	
{ front: "a testa", back: "die Stirn", lesson: "B1.4" },	{ front: "as testas", back: "die Stirnen", lesson: "B1.4" },
{ front: "sofrer", back: "leiden", lesson: "B1.4" },	{ front: "sofreu", back: "hat gelitten", lesson: "B1.4" },
{ front: "misturar", back: "mischen", lesson: "B1.4" },	{ front: "misturou", back: "hat gemischt", lesson: "B1.4" },
{ front: "no entanto, porém", back: "allerdings", lesson: "B1.4" },	
{ front: "existir, consistir", back: "bestehen", lesson: "B1.4" },	{ front: "existiu", back: "hat bestanden", lesson: "B1.4" },
{ front: "o autor", back: "der Autor", lesson: "B1.4" },	{ front: "os autores", back: "die Autoren", lesson: "B1.4" },
{ front: "a autora", back: "die Autorin", lesson: "B1.4" },	{ front: "as autoras", back: "die Autorinnen", lesson: "B1.4" },
{ front: "os conhecimentos", back: "die Kenntnisse", lesson: "B1.4" },	
{ front: "comparar", back: "vergleichen", lesson: "B1.4" },	{ front: "comparou", back: "hat verglichen", lesson: "B1.4" },
{ front: "o parceiro", back: "der Partner", lesson: "B1.4" },	{ front: "os parceiros", back: "die Partner", lesson: "B1.4" },
{ front: "a parceira", back: "die Partnerin", lesson: "B1.4" },	{ front: "as parceiras", back: "die Partnerinnen", lesson: "B1.4" },
{ front: "xingar", back: "schimpfen", lesson: "B1.4" },	{ front: "xingou", back: "hat geschimpft", lesson: "B1.4" },
{ front: "a escrita", back: "die Schrift", lesson: "B1.4" },	{ front: "as escritas", back: "die Schriften", lesson: "B1.4" },
{ front: "o idioma estrangeiro", back: "die Fremdsprache", lesson: "B1.4" },	{ front: "os idiomas estrangeiros", back: "die Fremdsprachen", lesson: "B1.4" },
{ front: "a escola de idiomas", back: "die Sprachenschule", lesson: "B1.4" },	{ front: "as escolas de idiomas", back: "die Sprachenschulen", lesson: "B1.4" },
{ front: "fluent", back: "fließend", lesson: "B1.4" },	
{ front: "to translate", back: "übersetzen", lesson: "B1.4" },	{ front: "translated", back: "hat übersetzt", lesson: "B1.4" },
{ front: "to, at, for", back: "zu", lesson: "B1.5" },	
{ front: "the talent", back: "das Talent", lesson: "B1.5" },	{ front: "the talents", back: "die Talente", lesson: "B1.5" },
{ front: "about, approximately", back: "etwa", lesson: "B1.5" },	
{ front: "to suffice, be enough", back: "genügen", lesson: "B1.5" },	{ front: "sufficed, was enough", back: "hat genügt", lesson: "B1.5" },
{ front: "to stop, cease", back: "aufhören", lesson: "B1.5" },	{ front: "stopped", back: "hat aufgehört", lesson: "B1.5" },
{ front: "trade", back: "der Handel", lesson: "B1.5" },	
{ front: "advantage", back: "der Vorteil", lesson: "B1.5" },	{ front: "advantages", back: "die Vorteile", lesson: "B1.5" },
{ front: "to expect", back: "erwarten", lesson: "B1.5" },	{ front: "expected", back: "hat erwartet", lesson: "B1.5" },
{ front: "the requirement, prerequisite", back: "die Voraussetzung", lesson: "B1.5" },	{ front: "requirements", back: "die Voraussetzungen", lesson: "B1.5" },
{ front: "the service employee", back: "der Serviceangestellte", lesson: "B1.5" },	{ front: "the service employees", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "the service employee", back: "die Serviceangestellte", lesson: "B1.5" },	{ front: "the service employees", back: "die Serviceangestellten", lesson: "B1.5" },
{ front: "the documents", back: "die Unterlagen", lesson: "B1.5" },	{ front: "the documents", back: "die Unterlagen", lesson: "B1.5" },
{ front: "the task", back: "die Aufgabe", lesson: "B1.5" },	{ front: "the tasks", back: "die Aufgaben", lesson: "B1.5" },
{ front: "the support", back: "die Unterstützung", lesson: "B1.5" },	{ front: "the supports", back: "die Unterstützungen", lesson: "B1.5" },
{ front: "written", back: "schriftlich", lesson: "B1.5" },	
{ front: "to determine, ascertain", back: "feststellen", lesson: "B1.5" },	{ front: "determined, ascertained", back: "hat festgestellt", lesson: "B1.5" },
{ front: "used to, accustomed", back: "gewohnt", lesson: "B1.5" },	
{ front: "usual, common", back: "üblich", lesson: "B1.5" },	
{ front: "the facility, system", back: "die Anlage", lesson: "B1.5" },	{ front: "the facilities, systems", back: "die Anlagen", lesson: "B1.5" },
{ front: "the résumé, CV", back: "der Lebenslauf", lesson: "B1.5" },	{ front: "the résumés, CVs", back: "die Lebensläufe", lesson: "B1.5" },
{ front: "to develop", back: "entwickeln", lesson: "B1.5" },	{ front: "developed", back: "hat entwickelt", lesson: "B1.5" },
{ front: "to produce, manufacture", back: "herstellen", lesson: "B1.5" },	{ front: "produced, manufactured", back: "hat hergestellt", lesson: "B1.5" },
{ front: "the activity, job", back: "die Tätigkeit", lesson: "B1.5" },	{ front: "the activities, jobs", back: "die Tätigkeiten", lesson: "B1.5" },
{ front: "outside", back: "außerhalb", lesson: "B1.5" },	
{ front: "inside", back: "innerhalb", lesson: "B1.5" },	
{ front: "the point in time, moment", back: "der Zeitpunkt", lesson: "B1.5" },	{ front: "the points in time", back: "die Zeitpunkte", lesson: "B1.5" },
{ front: "to calculate, count", back: "rechnen", lesson: "B1.5" },	{ front: "calculated, counted", back: "hat gerechnet", lesson: "B1.5" },
{ front: "the mirror", back: "der Spiegel", lesson: "B1.5" },	{ front: "the mirrors", back: "die Spiegel", lesson: "B1.5" },
{ front: "to calm down", back: "sich beruhigen", lesson: "B1.5" },	{ front: "calmed down", back: "hat sich beruhigt", lesson: "B1.5" },
{ front: "technical", back: "technisch", lesson: "B1.5" },	
{ front: "responsible", back: "zuständig", lesson: "B1.5" },	
{ front: "together", back: "zusammen-", lesson: "B1.5" },	
{ front: "the responsibility", back: "die Verantwortung", lesson: "B1.5" },	
{ front: "the painter", back: "der Maler", lesson: "B1.5" },	{ front: "the painters", back: "die Maler", lesson: "B1.5" },
{ front: "the painter (female)", back: "die Malerin", lesson: "B1.5" },	{ front: "the painters (female)", back: "die Malerinnen", lesson: "B1.5" },
{ front: "the order, commission", back: "der Auftrag", lesson: "B1.5" },	{ front: "the orders, commissions", back: "die Aufträge", lesson: "B1.5" },
{ front: "the translator", back: "der Übersetzer", lesson: "B1.5" },	{ front: "the translators", back: "die Übersetzer", lesson: "B1.5" },
{ front: "the translator (female)", back: "die Übersetzerin", lesson: "B1.5" },	{ front: "the translators (female)", back: "die Übersetzerinnen", lesson: "B1.5" },
{ front: "to think about", back: "sich überlegen", lesson: "B1.5" },	{ front: "thought about", back: "hat überlegt", lesson: "B1.5" },
{ front: "the competition", back: "die Konkurrenz", lesson: "B1.5" },	
{ front: "by the way, in passing", back: "nebenbei", lesson: "B1.5" },	
{ front: "to work (part-time)", back: "jobben", lesson: "B1.5" },	{ front: "worked (part-time)", back: "hat gejobbt", lesson: "B1.5" },
{ front: "to get along, cope", back: "zurechtkommen", lesson: "B1.5" },	{ front: "got along, coped", back: "ist zurechtgekommen", lesson: "B1.5" },
{ front: "the zoo", back: "der Tierpark", lesson: "B1.5" },	{ front: "the zoos", back: "die Tierparks", lesson: "B1.5" },
{ front: "further education", back: "die Fortbildung", lesson: "B1.5" },	{ front: "further educations", back: "die Fortbildungen", lesson: "B1.5" },
{ front: "to represent", back: "vertreten", lesson: "B1.5" },	{ front: "represented", back: "hat vertreten", lesson: "B1.5" },
{ front: "the teacher (male)", back: "der Lehrer", lesson: "B1.5" },	{ front: "the teachers (male)", back: "die Lehrer", lesson: "B1.5" },
{ front: "the teacher (female)", back: "die Lehrerin", lesson: "B1.5" },	{ front: "the teachers (female)", back: "die Lehrerinnen", lesson: "B1.5" },
{ front: "the caretaker, janitor", back: "der Hausmeister", lesson: "B1.5" },	{ front: "the caretakers, janitors", back: "die Hausmeister", lesson: "B1.5" },
{ front: "the caretaker (female), janitress", back: "die Hausmeisterin", lesson: "B1.5" },	{ front: "the caretakers (female), janitresses", back: "die Hausmeisterinnen", lesson: "B1.5" },
{ front: "the doctor (male)", back: "der Arzt", lesson: "B1.5" },	{ front: "the doctors (male)", back: "die Ärzte", lesson: "B1.5" },
{ front: "the doctor (female)", back: "die Ärztin", lesson: "B1.5" },	{ front: "the doctors (female)", back: "die Ärztinnen", lesson: "B1.5" },
{ front: "the architect", back: "der Architekt", lesson: "B1.5" },	{ front: "the architects", back: "die Architekten", lesson: "B1.5" },
{ front: "the architect (female)", back: "die Architektin", lesson: "B1.5" },	{ front: "the architects (female)", back: "die Architektinnen", lesson: "B1.5" },
{ front: "the hairdresser (male)", back: "der Friseur", lesson: "B1.5" },	{ front: "the hairdressers (male)", back: "die Friseure", lesson: "B1.5" },
{ front: "the hairdresser (female)", back: "die Friseurin", lesson: "B1.5" },	{ front: "the hairdressers (female)", back: "die Friseurinnen", lesson: "B1.5" },
{ front: "the journalist (male)", back: "der Journalist", lesson: "B1.5" },	{ front: "the journalists (male)", back: "die Journalisten", lesson: "B1.5" },
{ front: "the nurse (male)", back: "der Krankenpfleger", lesson: "B1.5" },	{ front: "the nurses (male)", back: "die Krankenpfleger", lesson: "B1.5" },
{ front: "the journalist (female)", back: "die Journalistin", lesson: "B1.5" },	{ front: "the journalists (female)", back: "die Journalistinnen", lesson: "B1.5" },
{ front: "the nurse (female)", back: "die Krankenschwester", lesson: "B1.5" },	{ front: "the nurses (female)", back: "die Krankenschwestern", lesson: "B1.5" },
{ front: "the police officer (male)", back: "der Polizist", lesson: "B1.5" },	{ front: "the police officers (male)", back: "die Polizisten", lesson: "B1.5" },
{ front: "the police officer (female)", back: "die Polizistin", lesson: "B1.5" },	{ front: "the police officers (female)", back: "die Polizistinnen", lesson: "B1.5" },
{ front: "the salesman", back: "der Verkäufer", lesson: "B1.5" },	{ front: "the salesmen", back: "die Verkäufer", lesson: "B1.5" },
{ front: "the saleswoman", back: "die Verkäuferin", lesson: "B1.5" },	{ front: "the saleswomen", back: "die Verkäuferinnen", lesson: "B1.5" },
{ front: "instead", back: "statt", lesson: "B1.6" },	
{ front: "first, just", back: "erst-", lesson: "B1.6" },	
{ front: "the production", back: "die Produktion", lesson: "B1.6" },	{ front: "the productions", back: "die Produktionen", lesson: "B1.6" },
{ front: "the replacement, substitute", back: "der Ersatz", lesson: "B1.6" },	
{ front: "certain, definite", back: "bestimmt", lesson: "B1.6" },	
{ front: "to solve", back: "lösen", lesson: "B1.6" },	{ front: "solved", back: "hat gelöst", lesson: "B1.6" },
{ front: "the secret", back: "das Geheimnis", lesson: "B1.6" },	{ front: "the secrets", back: "die Geheimnisse", lesson: "B1.6" },
{ front: "the risk", back: "das Risiko", lesson: "B1.6" },	{ front: "the risks", back: "die Risiken", lesson: "B1.6" },
{ front: "the change", back: "die Änderung", lesson: "B1.6" },	{ front: "the changes", back: "die Änderungen", lesson: "B1.6" },
{ front: "the meaning", back: "der Sinn", lesson: "B1.6" },	
{ front: "to be worth it", back: "sich lohnen", lesson: "B1.6" },	{ front: "was worth it", back: "hat gelohnt", lesson: "B1.6" },
{ front: "the season", back: "die Jahreszeit", lesson: "B1.6" },	{ front: "the seasons", back: "die Jahreszeiten", lesson: "B1.6" },
{ front: "to own", back: "besitzen", lesson: "B1.6" },	{ front: "owned", back: "hat besessen", lesson: "B1.6" },
{ front: "to be born", back: "geboren werden", lesson: "B1.6" },	{ front: "was born", back: "ist geboren worden", lesson: "B1.6" },
{ front: "to decide", back: "sich entschließen", lesson: "B1.6" },	{ front: "decided", back: "hat entschlossen", lesson: "B1.6" },
{ front: "homesickness", back: "das Heimweh", lesson: "B1.6" },	
{ front: "the competition", back: "der Wettbewerb", lesson: "B1.6" },	{ front: "the competitions", back: "die Wettbewerbe", lesson: "B1.6" },
{ front: "the spice", back: "das Gewürz", lesson: "B1.6" },	{ front: "the spices", back: "die Gewürze", lesson: "B1.6" },
{ front: "meanwhile", back: "mittlerweile", lesson: "B1.6" },	
{ front: "the consideration, regard", back: "die Rücksicht", lesson: "B1.6" },	{ front: "the considerations", back: "die Rücksichten", lesson: "B1.6" },
{ front: "intercultural", back: "interkulturell", lesson: "B1.6" },	
{ front: "to found, establish", back: "gründen", lesson: "B1.6" },	{ front: "founded", back: "hat gegründet", lesson: "B1.6" },
{ front: "to care for, look after", back: "betreuen", lesson: "B1.6" },	{ front: "cared for, looked after", back: "hat betreut", lesson: "B1.6" },
{ front: "to get used to", back: "sich gewöhnen", lesson: "B1.6" },	{ front: "got used to", back: "hat gewöhnt", lesson: "B1.6" },
{ front: "to care for, maintain", back: "pflegen", lesson: "B1.6" },	{ front: "cared for, maintained", back: "hat gepflegt", lesson: "B1.6" },
{ front: "for years", back: "jahrelang", lesson: "B1.6" },	
{ front: "the businessman", back: "der Kaufmann", lesson: "B1.6" },	{ front: "the businessmen", back: "die Kaufleute", lesson: "B1.6" },
{ front: "the businesswoman", back: "die Kauffrau", lesson: "B1.6" },	{ front: "the businesswomen", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "the experiment", back: "das Experiment", lesson: "B1.6" },	{ front: "the experiments", back: "die Experimente", lesson: "B1.6" },
{ front: "financial", back: "finanziell", lesson: "B1.6" },	
{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "exclusively", back: "ausschließlich", lesson: "B1.6" },	
{ front: "the ingredient", back: "die Zutat", lesson: "B1.6" },	{ front: "the ingredients", back: "die Zutaten", lesson: "B1.6" },
{ front: "at most, no more than", back: "höchstens", lesson: "B1.6" },	
{ front: "the studio", back: "das Studio", lesson: "B1.6" },	{ front: "the studios", back: "die Studios", lesson: "B1.6" },
{ front: "in order to", back: "um … zu", lesson: "B1.6" },	
{ front: "as much as possible, preferably", back: "möglichst", lesson: "B1.6" },	
{ front: "the speech, talk", back: "die Rede", lesson: "B1.6" },	{ front: "the speeches", back: "die Reden", lesson: "B1.6" },
{ front: "the compromise", back: "der Kompromiss", lesson: "B1.6" },	{ front: "the compromises", back: "die Kompromisse", lesson: "B1.6" },
{ front: "the air conditioning", back: "die Klimaanlage", lesson: "B1.6" },	{ front: "the air conditioners", back: "die Klimaanlagen", lesson: "B1.6" },
{ front: "the software", back: "die Software", lesson: "B1.6" },	{ front: "the softwares", back: "die Softwares", lesson: "B1.6" },
{ front: "to come back", back: "wiederkommen", lesson: "B1.6" },	{ front: "came back", back: "ist wiedergekommen", lesson: "B1.6" },
{ front: "the effort", back: "die Mühe", lesson: "B1.6" },	{ front: "the efforts", back: "die Mühen", lesson: "B1.6" },
{ front: "the toothpaste", back: "die Zahncreme", lesson: "B1.6" },	{ front: "the toothpastes", back: "die Zahncremes", lesson: "B1.6" },
{ front: "the detergent", back: "das Waschmittel", lesson: "B1.6" },	
{ front: "the brush", back: "die Bürste", lesson: "B1.6" },	{ front: "the brushes", back: "die Bürsten", lesson: "B1.6" },
{ front: "to greet, welcome", back: "begrüßen", lesson: "B1.6" },	{ front: "greeted", back: "hat begrüßt", lesson: "B1.6" },
{ front: "to say goodbye", back: "sich verabschieden", lesson: "B1.6" },	{ front: "said goodbye", back: "hat verabschiedet", lesson: "B1.6" },
{ front: "the role", back: "die Rolle", lesson: "B1.6" },	{ front: "the roles", back: "die Rollen", lesson: "B1.6" },
{ front: "the claim, demand", back: "der Anspruch", lesson: "B1.6" },	{ front: "the claims, demands", back: "die Ansprüche", lesson: "B1.6" },
{ front: "to confirm", back: "bestätigen", lesson: "B1.6" },	{ front: "confirmed", back: "hat bestätigt", lesson: "B1.6" },
{ front: "the copy", back: "die Kopie", lesson: "B1.6" },	{ front: "the copies", back: "die Kopien", lesson: "B1.6" },
{ front: "to damage", back: "beschädigen", lesson: "B1.6" },	{ front: "damaged", back: "hat beschädigt", lesson: "B1.6" },
{ front: "annoying, irritating", back: "ärgerlich", lesson: "B1.6" },	
{ front: "the manual", back: "die Bedienungsanleitung", lesson: "B1.6" },	{ front: "the manuals", back: "die Bedienungsanleitungen", lesson: "B1.6" },
{ front: "to exchange", back: "umtauschen", lesson: "B1.6" },	{ front: "exchanged", back: "hat umgetauscht", lesson: "B1.6" },
{ front: "however", back: "jedoch", lesson: "B1.6" },	
{ front: "already", back: "bereits", lesson: "B1.6" },	
{ front: "to demand, require", back: "fordern", lesson: "B1.6" },	{ front: "demanded", back: "hat gefordert", lesson: "B1.6" },
{ front: "to disappoint", back: "enttäuschen", lesson: "B1.6" },	{ front: "disappointed", back: "hat enttäuscht", lesson: "B1.6" },
{ front: "to urge, invite", back: "auffordern", lesson: "B1.6" },	{ front: "urged, invited", back: "hat aufgefordert", lesson: "B1.6" },
{ front: "the operation, business", back: "der Betrieb", lesson: "B1.6" },	{ front: "the operations, businesses", back: "die Betriebe", lesson: "B1.6" },
{ front: "the company", back: "die Firma", lesson: "B1.6" },	{ front: "the companies", back: "die Firmen", lesson: "B1.6" },
{ front: "the production", back: "die Produktion", lesson: "B1.6" },	{ front: "the productions", back: "die Produktionen", lesson: "B1.6" },
{ front: "the trade", back: "der Handel", lesson: "B1.6" },	
{ front: "the risk", back: "das Risiko", lesson: "B1.6" },	{ front: "the risks", back: "die Risiken", lesson: "B1.6" },
{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },	{ front: "the businesspeople", back: "die Geschäftsleute", lesson: "B1.6" },
{ front: "the businessman", back: "der Kaufmann", lesson: "B1.6" },	{ front: "the businessmen", back: "die Kaufleute", lesson: "B1.6" },
{ front: "the businesswoman", back: "die Kauffrau", lesson: "B1.6" },	{ front: "the businesswomen", back: "die Kauffrauen", lesson: "B1.6" },
{ front: "to found, establish", back: "gründen", lesson: "B1.6" },	{ front: "founded", back: "hat gegründet", lesson: "B1.6" },
{ front: "the court, dish", back: "das Gericht", lesson: "B1.7" },	{ front: "the courts, dishes", back: "die Gerichte", lesson: "B1.7" },
{ front: "the process", back: "der Prozess", lesson: "B1.7" },	{ front: "the processes", back: "die Prozesse", lesson: "B1.7" },
{ front: "to burn", back: "brennen", lesson: "B1.7" },	{ front: "burned", back: "hat gebrannt", lesson: "B1.7" },
{ front: "the noise", back: "der Lärm", lesson: "B1.7" },	
{ front: "the lawyer", back: "der Rechtsanwalt", lesson: "B1.7" },	{ front: "the lawyers", back: "die Rechtsanwälte", lesson: "B1.7" },
{ front: "the female lawyer", back: "die Rechtsanwältin", lesson: "B1.7" },	{ front: "the female lawyers", back: "die Rechtsanwältinnen", lesson: "B1.7" },
{ front: "the property, plot", back: "das Grundstück", lesson: "B1.7" },	{ front: "the properties, plots", back: "die Grundstücke", lesson: "B1.7" },
{ front: "to suspect", back: "verdächtigen", lesson: "B1.7" },	{ front: "suspected", back: "hat verdächtigt", lesson: "B1.7" },
{ front: "the peace", back: "der Frieden", lesson: "B1.7" },	
{ front: "the reality", back: "die Wirklichkeit", lesson: "B1.7" },	{ front: "the realities", back: "die Wirklichkeiten", lesson: "B1.7" },
{ front: "the lawn", back: "der Rasen", lesson: "B1.7" },	
{ front: "the federal state", back: "das Bundesland", lesson: "B1.7" },	{ front: "the federal states", back: "die Bundesländer", lesson: "B1.7" },
{ front: "one another", back: "-einander", lesson: "B1.7" },	
{ front: "the lawyer", back: "der Anwalt", lesson: "B1.7" },	{ front: "the lawyers", back: "die Anwälte", lesson: "B1.7" },
{ front: "the female lawyer", back: "die Anwältin", lesson: "B1.7" },	{ front: "the female lawyers", back: "die Anwältinnen", lesson: "B1.7" },
{ front: "either ... or", back: "entweder ... oder", lesson: "B1.7" },	
{ front: "central", back: "zentral", lesson: "B1.7" },	
{ front: "the duty", back: "die Pflicht", lesson: "B1.7" },	{ front: "the duties", back: "die Pflichten", lesson: "B1.7" },
{ front: "the property, possession", back: "das Eigentum", lesson: "B1.7" },	{ front: "the owners", back: "die Eigentümer", lesson: "B1.7" },
{ front: "to scream", back: "schreien", lesson: "B1.7" },	{ front: "screamed", back: "hat geschrien", lesson: "B1.7" },
{ front: "with each other", back: "miteinander", lesson: "B1.7" },	
{ front: "the eraser", back: "der Radiergummi", lesson: "B1.7" },	{ front: "the erasers", back: "die Radiergummis", lesson: "B1.7" },
{ front: "the pencil", back: "der Bleistift", lesson: "B1.7" },	{ front: "the pencils", back: "die Bleistifte", lesson: "B1.7" },
{ front: "the colored pencil", back: "der Farbstift", lesson: "B1.7" },	{ front: "the colored pencils", back: "die Farbstifte", lesson: "B1.7" },
{ front: "to discover", back: "entdecken", lesson: "B1.7" },	{ front: "discovered", back: "hat entdeckt", lesson: "B1.7" },
{ front: "angry", back: "wütend", lesson: "B1.7" },	
{ front: "the puzzle", back: "das Puzzle", lesson: "B1.7" },	{ front: "the puzzles", back: "die Puzzles", lesson: "B1.7" },
{ front: "the ban", back: "das Verbot", lesson: "B1.7" },	{ front: "the bans", back: "die Verbote", lesson: "B1.7" },
{ front: "only, just", back: "bloß", lesson: "B1.7" },	
{ front: "here", back: "hierher", lesson: "B1.7" },	
{ front: "attentive", back: "aufmerksam", lesson: "B1.7" },	
{ front: "to agree on, arrange", back: "abmachen", lesson: "B1.7" },	{ front: "agreed on, arranged", back: "hat abgemacht", lesson: "B1.7" },
{ front: "actually", back: "tatsächlich", lesson: "B1.7" },	
{ front: "the cheek, impertinence", back: "die Frechheit", lesson: "B1.7" },	{ front: "the impertinences", back: "die Frechheiten", lesson: "B1.7" },
{ front: "for my part", back: "meinetwegen", lesson: "B1.7" },	
{ front: "to concern, be about", back: "angehen", lesson: "B1.7" },	{ front: "concerned", back: "ist angegangen", lesson: "B1.7" },
{ front: "the lift", back: "der Lift", lesson: "B1.7" },	{ front: "the lifts", back: "die Lifte", lesson: "B1.7" },
{ front: "the terrace", back: "die Terrasse", lesson: "B1.7" },	{ front: "the terraces", back: "die Terrassen", lesson: "B1.7" },
{ front: "some, any", back: "irgend-", lesson: "B1.7" },	
{ front: "the city center", back: "die Innenstadt", lesson: "B1.7" },	{ front: "the city centers", back: "die Innenstädte", lesson: "B1.7" },
{ front: "the cross street", back: "die Querstraße", lesson: "B1.7" },	{ front: "the cross streets", back: "die Querstraßen", lesson: "B1.7" },
{ front: "essential, significant", back: "wesentlich", lesson: "B1.7" },	
{ front: "the alternative", back: "die Alternative", lesson: "B1.7" },	{ front: "the alternatives", back: "die Alternativen", lesson: "B1.7" },
{ front: "the edge", back: "der Rand", lesson: "B1.7" },	{ front: "the edges", back: "die Ränder", lesson: "B1.7" },
{ front: "the link", back: "der Link", lesson: "B1.7" },	{ front: "the links", back: "die Links", lesson: "B1.7" },
{ front: "where (prefix)", back: "wo(r)-", lesson: "B1.7" },	
{ front: "to be missing, lacking", back: "fehlen", lesson: "B1.7" },	{ front: "was missing", back: "hat gefehlt", lesson: "B1.7" },
{ front: "the state", back: "der Staat", lesson: "B1.7" },	{ front: "the states", back: "die Staaten", lesson: "B1.7" },
{ front: "east", back: "Ost-", lesson: "B1.7" },	
{ front: "west", back: "West-", lesson: "B1.7" },	
{ front: "the wall", back: "die Mauer", lesson: "B1.7" },	{ front: "the walls", back: "die Mauern", lesson: "B1.7" },
{ front: "the government", back: "die Regierung", lesson: "B1.7" },	{ front: "the governments", back: "die Regierungen", lesson: "B1.7" },
{ front: "to rule, prevail", back: "herrschen", lesson: "B1.7" },	{ front: "ruled, prevailed", back: "hat geherrscht", lesson: "B1.7" },
{ front: "the step", back: "die Stufe", lesson: "B1.7" },	{ front: "the steps", back: "die Stufen", lesson: "B1.7" },
{ front: "in the middle", back: "mitten", lesson: "B1.7" },	
{ front: "angular, square", back: "eckig", lesson: "B1.7" },	
{ front: "northern", back: "nördlich", lesson: "B1.7" },	
{ front: "the earth, ground", back: "die Erde", lesson: "B1.7" },	{ front: "the earths", back: "die Erden", lesson: "B1.7" },
{ front: "the chance", back: "die Chance", lesson: "B1.7" },	{ front: "the chances", back: "die Chancen", lesson: "B1.7" },
{ front: "to enlarge", back: "vergrößern", lesson: "B1.7" },	{ front: "enlarged", back: "hat vergrößert", lesson: "B1.7" },
{ front: "long ago, by now", back: "längst", lesson: "B1.7" },	
{ front: "despite", back: "trotz", lesson: "B1.7" },	
{ front: "the construction, building", back: "der Bau", lesson: "B1.7" },	{ front: "the constructions, buildings", back: "die Bauten", lesson: "B1.7" },
{ front: "the permission", back: "die Genehmigung", lesson: "B1.7" },	{ front: "the permissions", back: "die Genehmigungen", lesson: "B1.7" },
{ front: "tourism", back: "der Tourismus", lesson: "B1.7" },	
{ front: "same, identical", back: "gleich-", lesson: "B1.7" },	
{ front: "the building", back: "das Gebäude", lesson: "B1.7" },	
{ front: "the roof", back: "das Dach", lesson: "B1.7" },	{ front: "the roofs", back: "die Dächer", lesson: "B1.7" },
{ front: "the house", back: "das Haus", lesson: "B1.7" },	{ front: "the houses", back: "die Häuser", lesson: "B1.7" },
{ front: "the wall", back: "die Mauer", lesson: "B1.7" },	{ front: "the walls", back: "die Mauern", lesson: "B1.7" },
{ front: "the property, plot", back: "das Grundstück", lesson: "B1.7" },	{ front: "the properties, plots", back: "die Grundstücke", lesson: "B1.7" },
{ front: "the stairs", back: "die Treppe", lesson: "B1.7" },	{ front: "the stairs", back: "die Treppen", lesson: "B1.7" },
{ front: "the step", back: "die Stufe", lesson: "B1.7" },	{ front: "the steps", back: "die Stufen", lesson: "B1.7" },
{ front: "the door", back: "die Tür", lesson: "B1.7" },	{ front: "the doors", back: "die Türen", lesson: "B1.7" },
{ front: "the window", back: "das Fenster", lesson: "B1.7" },	{ front: "the windows", back: "die Fenster", lesson: "B1.7" },
{ front: "the cellar, basement", back: "der Keller", lesson: "B1.7" },	
{ front: "the lift", back: "der Lift", lesson: "B1.7" },	{ front: "the lifts", back: "die Lifte", lesson: "B1.7" },
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
