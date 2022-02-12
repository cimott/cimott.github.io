
const word_list_cro = [
  "afekt", "afera", "afeza", "afiks", "agama", "agami", "agava", "agens", "agent", "agnat", "agona", "agora", "agrar"
, "aguti", "ajvar", "akord", "akrap", "akril", "aksel", "akson", "akter", "aktin", "aktiv", "album", "aleja"
, "alibi", "aljkav", "alkar", "ambar", "ambis", "ambon", "ambra", "ameba", "amidi", "amini", "amper", "anali"
, "aneks", "anima", "anion", "anker", "anoda", "antik", "anđeo", "aorta", "apeks", "apoen", "april", "arbor"
, "arbun", "areal", "arena", "arest", "argon", "arhiv", "arija", "arkus", "aroma", "arsen", "aršin", "asana"
, "asket", "askus", "aspik", "astat", "astma", "ataše", "atelje", "atest", "atlas", "atlet", "atona", "atrij"
, "augur", "autić", "autor", "avans", "avers", "avion", "avizo", "azidi", "azola", "ašram", "babac", "babak"
, "babin", "babić", "bablji", "babun", "bacač", "bacil", "badalj", "badanj", "badem", "badić", "badnji", "bagav"
, "bager", "bagra", "bahat", "bajam", "bajan", "bajat", "bajka", "bajta", "bakan", "bakar", "bakin", "baklja"
, "balav", "balet", "balin", "balon", "balun", "banda", "banka", "banov", "barak", "baraž", "barba", "barel"
, "barem", "barij", "barit", "barka", "barok", "baron", "barun", "barut", "barža", "baset", "basma", "basna"
, "batak", "batat", "batik", "batić", "bazar", "bazen", "bazga", "bazni", "bački", "bačva", "baški", "bašča"
, "bažul", "bedak", "bedem", "bedro", "begov", "behar", "belot", "benav", "bendžo", "berač", "berba", "beril"
, "berma", "besan", "betel", "beton", "bezub", "bećar", "bečki", "biber", "bijeg", "bijel", "bijes", "bilin"
, "biljar", "biljeg", "biljka", "biljni", "bingo", "binom", "biota", "biped", "biper", "biran", "birač", "birsa"
, "biser", "biski", "bista", "bitak", "bitan", "biter", "bitka", "bitno", "bitva", "bivak", "bivol", "bivši"
, "bizam", "bizon", "bičić", "bičji", "blago", "blanja", "blato", "blind", "blizu", "bljušt", "blues", "bluna"
, "bluza", "bobac", "bobić", "bocun", "bodac", "bodar", "boden", "bodež", "bodlja", "bodul", "boema", "bofor"
, "bogac", "bogalj", "bogat", "bogaz", "bogme", "bojna", "bojni", "bokal", "bokor", "bokun", "bolan", "bolid"
, "boljar", "boljka", "bolno", "bolta", "bomba", "bongo", "bonus", "borac", "borak", "borba", "bordo", "borer"
, "borik", "borić", "borje", "borni", "borov", "borša", "boršč", "bosti", "botun", "bozon", "boćar", "bočat"
, "bočni", "bočno", "božji", "božur", "braco", "brada", "braga", "brana", "brand", "brati", "brava", "bravo"
, "braća", "brbot", "breka", "breme", "brend", "brest", "breve", "breza", "breča", "breče", "brico", "briga"
, "brioš", "brkat", "brklja", "brljav", "brlog", "bronh", "brtva", "bruka", "bruto", "brvak", "brvno", "brzac"
, "brzak", "bubanj", "bucanj", "bucka", "budak", "budan", "budno", "budžak", "budžet", "bugar", "buhav", "buhač"
, "bujad", "bujan", "bujol", "bujon", "bukač", "buket", "bukle", "bukov", "bukoč", "bukva", "bulin", "buljav"
, "buljuk", "bunar", "bunda", "burag", "buran", "buraz", "burek", "burin", "burka", "burma", "burno", "burza"
, "busen", "butan", "butik", "buvlji", "bućin", "bučan", "bučje", "bučno", "bušan", "bušač", "bušel", "bušik"
, "bušin", "bušji", "bužir", "cache", "canjak", "capin", "carev", "carić", "cedar", "ceker", "cekin", "cekum"
, "celer", "celom", "cener", "centa", "cepin", "cerij", "cerje", "cerov", "cesta", "cezij", "cibet", "cican"
, "cifra", "cigan", "cigla", "cigli", "cijan", "cijel", "cijep", "cijev", "cijuk", "cikla", "cikot", "cilik"
, "ciljan", "cimer", "cimet", "cinik", "cipal", "cirka", "cirus", "cista", "citat", "citra", "civil", "cobol"
, "cotav", "crkva", "crnac", "crnjak", "crnjaš", "crnka", "crpac", "crpka", "crpni", "crtač", "crtež", "crtić"
, "crtnja", "crvac", "crvak", "crvaš", "crven", "crvić", "cucak", "cucla", "cukar", "cukor", "curak", "curin"
, "cuvik", "cveba", "cvike", "dabar", "dacit", "dagnja", "daidža", "daire", "dakle", "dalek", "daljaš", "daljnji"
, "damin", "danak", "danas", "danik", "darak", "daska", "dativ", "datum", "davež", "davni", "davno", "dašak"
, "dašto", "debeo", "debil", "deblo", "deist", "dekan", "dekla", "dekor", "delen", "delta", "demon", "demos"
, "denar", "dendi", "denga", "denim", "denjak", "deran", "derač", "derbi", "derle", "derma", "desen", "deset"
, "desni", "desno", "detalj", "detur", "devet", "devin", "devon", "dezen", "dečko", "dildo", "diler", "diljem"
, "diljka", "dimni", "dinar", "dingo", "dioba", "dioda", "dioni", "diple", "dipol", "dirka", "disaj", "disko"
, "divan", "divlje", "divlji", "divno", "dizač", "dizel", "dizna", "dičan", "dišni", "djeca", "djedo", "djelo"
, "djeva", "dlaka", "dobar", "dobit", "dobni", "doboš", "dobro", "dodir", "dogma", "dogon", "dojam", "dojka"
, "dokad", "dokaz", "doker", "dokle", "dokon", "doksa", "dokud", "dokup", "dolac", "dolap", "dolar", "dolet"
, "doljan", "dolus", "domar", "domet", "donle", "donor", "donos", "dopis", "dorat", "dosad", "doseg", "dosje"
, "dosta", "dotad", "dotle", "dotok", "dovde", "dovod", "dovoz", "doziv", "doček", "dočim", "došao", "draga"
, "dragi", "drago", "drama", "drapa", "drati", "drača", "dredža", "dreka", "drift", "drito", "drmeš", "drmež"
, "droca", "droga", "droid", "drolja", "dronjo", "drozd", "drsko", "druga", "drugi", "drugo", "druid", "drvar"
, "drvce", "drven", "drvlje", "drvni", "drzak", "drška", "držak", "držač", "dubak", "dubok", "dudov", "duduk"
, "dugin", "dugme", "duhan", "duhač", "dukat", "dulek", "dulum", "dundo", "dupin", "dupli", "duplja", "duplo"
, "durum", "dućan", "dušak", "dušek", "dušik", "dušin", "dušni", "dužan", "dužni", "dveri", "dvica", "dvije"
, "dvoje", "dvoji", "džanki", "dželat", "džepar", "džepić", "džepni", "džezva", "džihad", "džilit", "džingl", "džoger"
, "džoint", "džokej", "džoker", "džomba", "džudaš", "džukac", "džunka", "ebola", "edikt", "efekt", "egida", "egzem"
, "egzil", "eidos", "ekcem", "ekipa", "ekler", "ekran", "ekser", "elisa", "elita", "emajl", "endem", "enoli"
, "enzim", "eocen", "eolni", "eparh", "epika", "epoha", "epski", "erbij", "erker", "esnaf", "estet", "etapa"
, "etaža", "etida", "etika", "etnik", "etnos", "eunuh", "fagot", "fajda", "fakat", "faker", "fakin", "fakir"
, "falda", "falta", "falus", "farad", "farba", "farma", "farsa", "farsi", "fatum", "fauna", "fazan", "fazni"
, "fazno", "fazon", "fačuk", "fažol", "febra", "feces", "feder", "felah", "feler", "felga", "femur", "fenil"
, "fenjer", "fenol", "feral", "ferit", "fetiš", "fetus", "fetva", "fešta", "fiber", "fibra", "fijuk", "fikus"
, "filer", "filet", "filir", "filit", "finiš", "finta", "firer", "firma", "fitilj", "fićuk", "fišek", "fjaka"
, "fjeld", "fjord", "flaks", "flaša", "fleka", "flert", "floem", "floks", "flora", "flota", "fluid", "fluks"
, "fluor", "foaje", "fojba", "fokus", "folni", "fondi", "fonem", "fonon", "forma", "forte", "forum", "fosil"
, "fosna", "fotka", "foton", "frape", "fraza", "freon", "freza", "frita", "front", "frtalj", "frula", "frčka"
, "funta", "furan", "furda", "furka", "futer", "futon", "futur", "fušer", "gabor", "gabro", "gadan", "gadno"
, "gajba", "gajde", "galeb", "galge", "galij", "galon", "galop", "gamad", "ganga", "ganjak", "ganut", "garan"
, "garav", "garda", "garež", "garig", "garov", "gasni", "gater", "gatka", "gauda", "gaučo", "gavan", "gavez"
, "gavka", "gavun", "gazda", "gaćan", "gačac", "gađač", "gašen", "gebis", "gegav", "gejša", "geler", "genij"
, "genom", "geoda", "geoid", "gepek", "gerla", "germa", "geslo", "gesta", "gibak", "gibanj", "gibon", "gilda"
, "ginko", "girus", "gizda", "glans", "glava", "glede", "glina", "gliom", "gljiva", "gljive", "globa", "glosa"
, "gluho", "gluma", "glupo", "gnajs", "gnjida", "gnjila", "gnjilo", "gnjiti", "gnoma", "gojan", "golać", "golem"
, "golet", "golub", "gomolj", "gonič", "gonjen", "gorak", "gordo", "goriv", "gorje", "gorko", "gornji", "gospa"
, "gotov", "govno", "govor", "gozba", "gošća", "graba", "grace", "graja", "grana", "granje", "grapa", "građa"
, "grbalj", "grbav", "grbač", "grcaj", "grdan", "grdnja", "grdno", "greda", "grejp", "grgeč", "grgut", "grifo"
, "grilje", "grinja", "grinje", "gripa", "griva", "griža", "grlat", "grlce", "grlen", "grlić", "grljak", "grmak"
, "grmalj", "grmić", "grmlje", "grnac", "grota", "groza", "grozd", "grubo", "gruda", "grudi", "grunt", "grupa"
, "grupi", "grčki", "guava", "gubar", "gubav", "guber", "gudač", "gugut", "gujin", "gulag", "gulaš", "gumar"
, "gumen", "gumno", "gunjac", "gurav", "gusak", "gusan", "gusar", "gusji", "guska", "gusle", "gusto", "gutač"
, "guzat", "gušav", "gušče", "gužva", "gvalja", "gvirc", "gvozd", "gđica", "habit", "hahar", "haiku", "hajde"
, "hajka", "haker", "halal", "halit", "halma", "halon", "halva", "hamam", "haran", "harač", "harem", "harfa"
, "harfe", "hauba", "hašiš", "haški", "helij", "heljda", "helot", "henri", "heroj", "hertz", "hidra", "hidžra"
, "hihot", "hijat", "hilus", "himba", "himen", "himna", "himus", "hindi", "hipik", "hitac", "hitan", "hitar"
, "hitin", "hitna", "hitnja", "hitno", "hitro", "hlače", "hodač", "hodni", "hodnja", "hokej", "homić", "horda"
, "horor", "hotel", "hrana", "hrast", "hrbat", "hrgav", "hrkač", "hrnjav", "hromo", "hrušt", "hrvač", "hrčak"
, "hrđav", "humac", "humak", "human", "humka", "humlje", "humor", "humus", "hunta", "husar", "husit", "hučan"
, "hvala", "hvoja", "ibrik", "ideal", "ideja", "idila", "idiom", "idiot", "idući", "iftar", "igalo", "igdje"
, "iglar", "iglun", "igrač", "igriv", "ikako", "ikoji", "ikona", "ikuda", "ilova", "imago", "imalo", "imanje"
, "imati", "imela", "imidi", "inače", "indij", "ingot", "inoča", "input", "inćun", "irski", "irvas", "ishod"
, "iskaz", "iskon", "iskop", "iskra", "iskup", "islam", "ispad", "ispis", "ispit", "ispod", "ispuh", "istam"
, "istek", "istok", "istom", "istup", "isuti", "itrij", "ivica", "ivrit", "izaći", "izboj", "izbor", "izdah"
, "izdan", "izgon", "izići", "izlaz", "izlet", "izljev", "izlog", "izlov", "izmak", "izmet", "iznad", "iznos"
, "izraz", "izrez", "izrod", "izuti", "izvan", "izvid", "izvod", "izvor", "izvoz", "ičiji", "jadac", "jadan"
, "jadno", "jagma", "jagnje", "jahač", "jahta", "jajar", "jajce", "jajni", "jakna", "jalan", "jalov", "jalša"
, "jamac", "janjac", "janjad", "jarac", "jarad", "jarak", "jaram", "jaran", "jarić", "jarki", "jarko", "jarma"
, "jaruh", "jasan", "jasen", "jasle", "jasno", "jatak", "javni", "javno", "javor", "jazan", "jebac", "jebač"
, "jeben", "jecaj", "jecav", "jedak", "jedan", "jedar", "jedić", "jedno", "jedro", "jedva", "jeger", "jelac"
, "jelek", "jelen", "jelka", "jelov", "jesen", "jesti", "jetko", "jetra", "jezan", "jezda", "jezer", "jezik"
, "jeziv", "ječam", "ješan", "ješka", "ježak", "ježev", "ježić", "ježur", "jidiš", "jodat", "jodid", "jodni"
, "johin", "joint", "joker", "jošte", "judić", "juice", "junac", "junad", "junak", "juriš", "jurta", "juten"
, "jutro", "jučer", "jušan", "južan", "južni", "južno", "kabao", "kabel", "kadar", "kadet", "kafić", "kagan"
, "kajak", "kajda", "kakao", "kakav", "kalaj", "kalan", "kalav", "kalem", "kalež", "kalfa", "kalif", "kalij"
, "kaljav", "kalup", "kalus", "kamen", "kamin", "kanal", "kanap", "kanat", "kanda", "kandža", "kanjac", "kanjon"
, "kanon", "kanta", "kapak", "kapar", "kaplja", "kapok", "kaput", "karan", "karas", "karat", "kargo", "karma"
, "karta", "kasan", "kasar", "kasač", "kasko", "kasno", "kasta", "katar", "katni", "katun", "kavez", "kavga"
, "kazan", "kazna", "kaćun", "kašalj", "kažun", "kebab", "keder", "kefir", "kenjac", "kepec", "keper", "kerma"
, "keson", "kečap", "kibic", "kibla", "kibuc", "kicoš", "kifla", "kijač", "kikaš", "kiklja", "kikot", "kilav"
, "kinin", "kinon", "kiosk", "kipar", "kiper", "kipić", "kirnja", "kiseo", "kisik", "kitov", "kivan", "kivnja"
, "kivno", "kićen", "kičma", "kišan", "kišni", "klada", "klaka", "klanje", "klapa", "klasa", "klati", "klaun"
, "kleka", "klema", "kleti", "klica", "klija", "klika", "klima", "klinč", "kliše", "kljast", "kljova", "kljuka"
, "kljuna", "kljuse", "klopa", "klupa", "knjiga", "koala", "kobac", "koban", "kobno", "kobra", "kocka", "kodek"
, "koder", "kodni", "kodon", "kofer", "kojot", "koker", "kokon", "kokos", "kokot", "kokoš", "kolac", "kolan"
, "kolar", "kolač", "kolaž", "koledž", "kolet", "kolin", "koljač", "kolni", "kolon", "kolor", "kolos", "kolut"
, "komad", "kombi", "komet", "komin", "komis", "konac", "konak", "konjak", "konjar", "konjic", "konjić", "konop"
, "konto", "konus", "kopal", "kopar", "kopač", "koplje", "kopno", "kopra", "kopun", "kopča", "korak", "koral"
, "koralj", "korda", "korov", "korpa", "korzo", "kosac", "kosat", "kosir", "koska", "kosti", "kotac", "kotao"
, "kotar", "kotur", "kotva", "kovač", "kozak", "kozar", "kozer", "kozji", "kozle", "kočanj", "kočar", "kočni"
, "košer", "košnja", "košta", "kožar", "kožni", "kožuh", "kožun", "krama", "kramp", "kraul", "krava", "krađa"
, "krcat", "kreda", "kredo", "krele", "krema", "krhak", "krhko", "krika", "krilo", "kripl", "kriti", "krivo"
, "kriza", "križa", "krkan", "krmad", "krmak", "krmar", "krmelj", "krmni", "krnjak", "krnjav", "kroki", "kroše"
, "krpan", "krpar", "krpač", "krpelj", "krpen", "krpež", "krplja", "krsni", "krsta", "kruna", "krupa", "kruti"
, "kruto", "krući", "krvav", "krvni", "krzno", "krčag", "krčki", "krčma", "kršan", "kubik", "kubni", "kubus"
, "kucaj", "kufer", "kugla", "kuhan", "kuhar", "kukac", "kukma", "kukolj", "kulak", "kulaš", "kulen", "kulon"
, "kuluk", "kumek", "kumin", "kumir", "kumče", "kunić", "kunjad", "kunjka", "kupac", "kupač", "kupelj", "kupka"
, "kupnja", "kupon", "kupus", "kurac", "kuran", "kurat", "kurij", "kurir", "kurji", "kurva", "kusat", "kusav"
, "kusur", "kutak", "kutić", "kutni", "kućni", "kučka", "kušač", "kušin", "kušnja", "kužan", "kvaka", "kvant"
, "kvarc", "kvark", "kvart", "kvota", "kvrga", "labav", "labud", "lagan", "lahor", "lajav", "lakat", "lakej"
, "lakom", "lakše", "lampa", "lanac", "lapor", "larva", "laser", "lasta", "lavež", "lavić", "lavor", "lazar"
, "lačan", "lažac", "lažan", "lažno", "lažov", "lebić", "ledac", "leden", "leganj", "legat", "leglo", "lelek"
, "lemeš", "lemur", "lenta", "lento", "lepet", "lepra", "lesar", "letak", "letač", "letva", "levit", "leđen"
, "leđni", "leđno", "ležaj", "libar", "liber", "libor", "libra", "licej", "lidar", "lider", "ligaš", "lignja"
, "lihen", "lihva", "lijas", "lijek", "lijen", "lijep", "lijer", "lijes", "lijev", "liker", "limar", "limen"
, "limes", "limfa", "limit", "limun", "linjak", "linka", "linđo", "lipanj", "lipid", "lipom", "lipov", "lirik"
, "lisac", "liska", "lisni", "lista", "litij", "litra", "lizač", "lizol", "ličan", "lički", "lišaj", "lišce"
, "lišen", "lišće", "ljanos", "ljekar", "ljepak", "ljepši", "ljetni", "ljetos", "ljevak", "ljevač", "ljigav", "ljiljak"
, "ljiljan", "ljubak", "ljubav", "ljubić", "ljupko", "ljuska", "ljutit", "ljutnja", "loger", "logor", "lojan", "lojka"
, "lojni", "lokal", "lokna", "lokot", "lokus", "lokva", "loman", "lomot", "lonac", "lopov", "lopoč", "lopta"
, "lopuh", "losos", "lotos", "lovac", "lovaš", "lovni", "lovor", "lozni", "lozov", "ložač", "loživ", "ložni"
, "lubin", "lucanj", "ludaš", "ludov", "lugar", "lukav", "luknja", "lukno", "lular", "lulav", "lulaš", "lumen"
, "lumin", "lupar", "lupač", "lupež", "lupus", "lutak", "lutka", "lutnja", "luzer", "lučac", "lučki", "lučni"
, "luđak", "macan", "macho", "macin", "madam", "madež", "magla", "magma", "maher", "majka", "major", "majur"
, "makac", "makar", "maklja", "makov", "makro", "maksi", "malen", "maler", "malik", "maljav", "malko", "malne"
, "malta", "malus", "mamac", "mamba", "mamin", "mamut", "mango", "manjak", "manjić", "maona", "maran", "marin"
, "marka", "marod", "maron", "marva", "marža", "masen", "maser", "masiv", "maska", "maslo", "masno", "mason"
, "mater", "matni", "mauna", "mazan", "mazač", "mazga", "maziv", "mazno", "mazut", "mačak", "mačić", "mačji"
, "mačka", "mačor", "mašak", "mašna", "mašta", "medan", "medar", "meden", "medij", "mejaš", "mekan", "mekač"
, "meket", "melem", "melez", "melos", "menta", "menza", "mesar", "mesni", "mesti", "metak", "metal", "metan"
, "metar", "meter", "metež", "metil", "metilj", "metla", "metro", "mezon", "mečić", "mečka", "međaš", "mider"
, "mijau", "mijeh", "miner", "minij", "minor", "minus", "minđa", "miran", "miraz", "miraž", "mirha", "miris"
, "mirno", "mirta", "misal", "misao", "misli", "misni", "mitar", "mitra", "mišar", "mišić", "mišji", "miška"
, "mjauk", "mjera", "mlada", "mlado", "mlaka", "mlako", "mlađi", "mlivo", "mljeti", "mniti", "mnogi", "mnogo"
, "moare", "mobil", "modar", "model", "modem", "modni", "modro", "modul", "modus", "mogul", "moguć", "moher"
, "mokar", "mokro", "molba", "moljac", "momak", "momče", "monah", "monom", "moped", "moral", "mosni", "mosor"
, "mosur", "motel", "motet", "motiv", "motka", "motor", "mozak", "moćan", "moćno", "mošnja", "mošus", "možda"
, "mrena", "mreža", "mrgud", "mrkalj", "mrkan", "mrkač", "mrkli", "mrkva", "mrmor", "mrsko", "mrtav", "mrtva"
, "mrtvi", "mrtvo", "mrzak", "mrzao", "mršav", "mržnja", "mucav", "mudar", "mudro", "mukao", "muklo", "mulac"
, "mulat", "muljav", "mumps", "mungo", "munjen", "mural", "murva", "musav", "musti", "mutan", "mutav", "mutež"
, "mutno", "muzar", "muzej", "mućak", "mućka", "mučan", "mučen", "mučki", "mučno", "muški", "muško", "mužar"
, "mužev", "mužik", "mužić", "mužnja", "naboj", "nabor", "nacrt", "nadam", "nadir", "nadut", "nadžak", "nafta"
, "nagao", "nagib", "naglo", "nagon", "nahod", "naime", "naiva", "naići", "najam", "nakan", "nakit", "nakon"
, "nakot", "nalaz", "nalet", "nalik", "nalič", "naljep", "naljev", "naljut", "nalog", "namaz", "namet", "nandu"
, "nanos", "naoko", "napad", "napet", "napis", "napoj", "napon", "napor", "narav", "narod", "nasad", "nasip"
, "nauka", "navar", "navez", "navod", "navoj", "navoz", "navrh", "nazad", "nazal", "nazeb", "naziv", "nazor"
, "naćve", "načas", "načet", "način", "nađen", "naški", "nažao", "negda", "negve", "nehaj", "nehat", "nejak"
, "nejač", "nekad", "nekoć", "nekud", "neman", "nemar", "nemio", "nemir", "nemoć", "nemrs", "nepar", "nepce"
, "neper", "nepun", "nerad", "nered", "nesit", "nesti", "netko", "netom", "neven", "nevin", "nećak", "nešto"
, "neživ", "nijem", "nikad", "nikal", "nikud", "nimfa", "nindža", "nisam", "niska", "nisko", "nitko", "nizak"
, "nišan", "ništa", "njedra", "njegov", "njemak", "njezin", "nježan", "nježno", "njihaj", "njihov", "njisak", "njiska"
, "njorka", "njuška", "njušni", "nojev", "nokat", "noksa", "nomad", "nonet", "norma", "nosat", "nosač", "nosiv"
, "nosić", "nosni", "notar", "notes", "notni", "novac", "noćas", "noćca", "noćni", "nošnja", "nožar", "nožić"
, "nožni", "nugat", "nujan", "nulti", "nužan", "nužda", "nužno", "obala", "obaći", "obdan", "obilje", "obiti"
, "obići", "objed", "oblak", "oblat", "oblik", "oblog", "obnoć", "oboje", "obrat", "obraz", "obred", "obris"
, "obrok", "obrub", "obruč", "obrva", "obrve", "obuka", "obuti", "obuća", "obući", "obzir", "obzor", "ocean"
, "octen", "ocvao", "odaja", "odaje", "odano", "odati", "odbor", "odeon", "odgoj", "odjek", "odjel", "odljev"
, "odmah", "odmak", "odmet", "odmor", "odnos", "odoka", "odora", "odraz", "odred", "odrod", "odron", "odsad"
, "odveć", "odvod", "odvoz", "odziv", "ofrlje", "oglas", "ogled", "ogreb", "oholo", "okapi", "oklop", "okolo"
, "okovi", "okret", "okrug", "oksid", "oktan", "oktav", "oktet", "okuka", "okvir", "olako", "oleat", "olein"
, "oleum", "oliga", "oliva", "olovo", "oltar", "oluja", "omama", "omanji", "omara", "omega", "omjer", "omlet"
, "onako", "onamo", "ondje", "oniks", "onuda", "ončas", "opako", "opeka", "opera", "opeći", "ophod", "opica"
, "opiti", "opkop", "oplet", "oporo", "opran", "oprez", "opseg", "optok", "oputa", "opšav", "orada", "oranje"
, "orati", "oraći", "orden", "oreol", "organ", "orkan", "orlić", "orlov", "ormar", "ornat", "ortak", "oruđe"
, "osama", "oseka", "osica", "osinji", "osion", "osjet", "oslad", "oslić", "osmak", "osmaš", "osmij", "osoba"
, "ostan", "osuda", "osuti", "osvit", "osvrt", "otada", "otava", "oteti", "oteći", "otići", "otkad", "otkaz"
, "otkop", "otkos", "otkud", "otkup", "otpad", "otpis", "otpor", "otrov", "otrti", "otuda", "otući", "otvor"
, "ovako", "ovamo", "ovdje", "oveći", "oviti", "ovjes", "ovlaš", "ovrha", "ovuda", "ovčar", "ovčas", "ovčji"
, "ozimi", "očale", "očica", "očinji", "očiti", "očito", "očnjak", "oštar", "oštro", "ožeći", "pacer", "packa"
, "padež", "pagan", "pagar", "pajac", "pajzl", "pakao", "paker", "paket", "palac", "palež", "palir", "paljba"
, "palma", "paloš", "palto", "pamet", "pampa", "pamuk", "panda", "pandža", "panel", "panta", "panus", "papak"
, "papar", "papir", "paraf", "paran", "parba", "pareo", "parip", "parić", "parka", "parni", "paroh", "pasac"
, "pasaž", "pasha", "pasiv", "pasji", "paska", "pasmo", "pasoš", "pasta", "pasti", "pasulj", "pasus", "patak"
, "pater", "patka", "patnja", "patos", "pause", "pauza", "pazar", "pazuh", "pačad", "pačić", "pačji", "paški"
, "pašta", "pašče", "pažen", "pažnja", "pecar", "pedalj", "pedel", "peder", "pegla", "pehar", "pekan", "pekar"
, "pelig", "pelin", "pelir", "peljar", "pelud", "penal", "penis", "penjač", "pepeo", "perad", "perač", "perce"
, "perec", "periv", "periš", "perje", "perla", "peron", "perut", "pesar", "petak", "petit", "petlja", "petni"
, "pećar", "pečat", "pečen", "pešće", "piano", "pidžin", "pijan", "pijuk", "pijun", "piknja", "pilac", "pilad"
, "pilan", "pilar", "pilav", "pilić", "piljak", "piljar", "pilon", "pilot", "pinca", "pinen", "pinjol", "pinka"
, "pinkl", "pinta", "pipac", "pipak", "pipav", "pipun", "pirat", "piren", "pirit", "pirni", "pirol", "pisac"
, "pisak", "pisan", "pisar", "pisač", "piska", "pismo", "pista", "pitak", "pitki", "pitko", "pitom", "piton"
, "pivar", "pivot", "pizda", "pizma", "pizza", "pička", "pjega", "pjena", "plaho", "plast", "plata", "plato"
, "plavi", "plaća", "plašt", "plaža", "pleme", "pleta", "pleća", "plima", "plise", "pljeva", "plješa", "pljuca"
, "pljuga", "ploha", "plova", "ploča", "pluto", "pluća", "pluće", "pobol", "podao", "podij", "podli", "podlo"
, "podne", "podni", "podno", "podug", "poema", "poeta", "pogan", "pogon", "pohan", "pohod", "pojac", "pojam"
, "pojas", "pokal", "pokaz", "poker", "pokoj", "pokolj", "pokop", "pokus", "polen", "polet", "polio", "polip"
, "polis", "poljar", "polka", "polog", "poloj", "pomak", "poman", "pomet", "pomnja", "pomno", "pomol", "pomor"
, "pomoć", "pompa", "ponad", "ponor", "ponos", "ponoć", "pončo", "popis", "popić", "poput", "poraz", "pored"
, "porez", "poriv", "porno", "porod", "porok", "porta", "porto", "porub", "posan", "posao", "posno", "posto"
, "posut", "posve", "potez", "potka", "potok", "potom", "potop", "potrk", "pouka", "povez", "povik", "povod"
, "povoj", "povrh", "površ", "pozan", "pozer", "poziv", "pozor", "poček", "pošip", "pošta", "pošto", "požar"
, "pralja", "pranje", "prasa", "prase", "prati", "pravi", "pravo", "praća", "prdac", "prdež", "preko", "prelja"
, "prelo", "prema", "presa", "preći", "preča", "preči", "pređa", "preša", "prgav", "prhak", "prhki", "prhut"
, "prija", "prije", "prima", "princ", "prion", "prior", "prići", "priča", "prišt", "prkno", "prkos", "prljav"
, "prnjak", "prnjav", "proba", "proha", "proja", "proso", "prost", "prota", "prova", "proza", "proći", "prođa"
, "prsat", "prsni", "prsno", "prten", "pruga", "pruće", "prvak", "prvaš", "pršić", "pršut", "pržen", "pržun"
, "pseto", "pseći", "psiha", "psiho", "psina", "ptica", "ptiče", "ptoza", "pucanj", "pucač", "puder", "pudla"
, "pufer", "puhač", "pukao", "pulen", "pulpa", "pumpa", "punac", "punjač", "punjen", "punjiv", "punkt", "punta"
, "punđa", "pupak", "puran", "pusta", "pusti", "putar", "putem", "puten", "putić", "putni", "puzav", "pučki"
, "pušač", "puška", "pužev", "pužić", "pužji", "pužni", "pčela", "pšeno", "rabat", "rabin", "racio", "radar"
, "radij", "radin", "radio", "radić", "radič", "radni", "radnja", "radno", "radon", "rafal", "ragbi", "rahao"
, "rahli", "rajon", "rakov", "rakun", "rampa", "ranac", "ranjen", "ranjiv", "ranka", "rapir", "rarog", "rasad"
, "rasan", "rasap", "rasni", "rasno", "rasol", "rasti", "rasut", "ratar", "ratni", "ravan", "ravni", "ravno"
, "razma", "razni", "razno", "razor", "razum", "račić", "račji", "račun", "račva", "raški", "rašlja", "rašlje"
, "rašpa", "ražanj", "rebro", "rebus", "recka", "redak", "redar", "redni", "redom", "redov", "reful", "regal"
, "reiki", "reket", "relej", "reljef", "remen", "remis", "renij", "renta", "repak", "repat", "reper", "repić"
, "repni", "reset", "resko", "resor", "restl", "retor", "reuma", "revan", "rever", "revir", "revni", "revno"
, "rezak", "rezač", "rezon", "reška", "režanj", "režim", "ribar", "ribež", "ribiz", "ribič", "riblji", "rigol"
, "rigor", "rijas", "riječ", "rikač", "rikša", "rilaš", "rilce", "risač", "ritam", "riter", "rival", "rizik"
, "rizla", "rizma", "rizom", "ričet", "riđan", "rižin", "rižot", "roblje", "robni", "robot", "rodan", "rodeo"
, "rodij", "rodni", "rogalj", "rogat", "rogač", "roglje", "rogoz", "rohav", "rojta", "roker", "roler", "roman"
, "romon", "ronac", "rondo", "rosan", "rotor", "rovac", "rovaš", "rozga", "ročni", "rođak", "rođen", "rubac"
, "rubin", "rublja", "rublje", "rubni", "rucelj", "rudar", "rudni", "ruglo", "ruina", "rujan", "rukav", "rulet"
, "rumba", "rumen", "runda", "runjav", "ruski", "rutav", "rutil", "ručak", "ručka", "ručni", "ručno", "ružan"
, "ružin", "ružni", "ružno", "rvanje", "rzati", "rđati", "sabat", "sablja", "sabor", "sadnja", "sadra", "safir"
, "sahel", "sajam", "sajga", "sajla", "sakat", "salaš", "saldo", "salon", "salpa", "salsa", "salto", "salva"
, "samac", "samar", "samba", "samit", "samrt", "samur", "sanac", "sanak", "sanen", "sanjar", "sanjiv", "sanjke"
, "santa", "saone", "sapet", "sapun", "saraj", "sarin", "sarma", "saten", "satir", "satni", "sauna", "savez"
, "saziv", "sačma", "sažet", "scena", "sedam", "sedef", "sedlo", "sedmi", "sedra", "seksi", "sekta", "selac"
, "selam", "selen", "seljak", "semem", "semiš", "senat", "seoba", "seoce", "sepsa", "serin", "serum", "servo"
, "seter", "sezam", "sfera", "shema", "shift", "sidro", "sifon", "sigma", "sijač", "sijed", "sijev", "silan"
, "silaz", "silno", "silom", "silos", "silur", "sinak", "singl", "sinod", "sinov", "sinoć", "sinus", "sipak"
, "sipan", "sipar", "sipin", "sipki", "sipnja", "sirac", "sirak", "sirar", "siren", "sirot", "sirov", "sirup"
, "sisat", "sitan", "sitar", "sitno", "sivac", "sićan", "sjati", "sjeme", "sjena", "sjeta", "sjeći", "sječa"
, "skala", "skalp", "skaut", "skejt", "skela", "skica", "skija", "skije", "sklad", "sklat", "sklek", "sklon"
, "sklop", "skoba", "skori", "skoro", "skrab", "skroz", "skupa", "skupi", "skupo", "skuta", "skuša", "skvot"
, "skvoš", "slabi", "slabo", "slajd", "slama", "slang", "slani", "slanje", "slast", "slati", "slava", "slađi"
, "sleng", "sleći", "slika", "slina", "sliti", "sljeme", "sloga", "slovo", "sluga", "smeće", "smeđi", "smilje"
, "smion", "smjer", "smola", "smoći", "smrad", "smrča", "snaga", "snaha", "snast", "snaći", "snaša", "sneno"
, "sniti", "snovi", "sobar", "sobni", "sobom", "sodar", "sojin", "sokak", "sokna", "sokol", "solni", "somić"
, "somun", "sonar", "sonda", "sonet", "sorta", "sočan", "sočno", "soška", "sošni", "spati", "speći", "spilja"
, "spina", "spjev", "splav", "splet", "splin", "spolja", "spona", "sponja", "spora", "spore", "spori", "sporo"
, "sport", "spram", "sprej", "sprud", "spust", "sranje", "srati", "srdit", "srdnja", "srdžba", "sreća", "srnjak"
, "srnče", "srpanj", "srčan", "stado", "staja", "stanje", "stara", "stari", "start", "stati", "staza", "stega"
, "stela", "stelja", "stent", "stepa", "steći", "stick", "stiva", "stići", "stoga", "stoik", "stoka", "stola"
, "stopa", "stoti", "strah", "stran", "stres", "stric", "strip", "strka", "strmo", "strog", "stroj", "strop"
, "strti", "strug", "struk", "stuba", "stupa", "stući", "stvar", "stvor", "sudac", "sudar", "sudba", "sudnji"
, "suita", "suknja", "sukno", "sukob", "sukus", "sukut", "sulud", "sumnja", "sunce", "sunet", "sunit", "super"
, "supin", "supka", "surka", "surla", "surov", "suton", "sutra", "suzan", "suzav", "suzni", "sućut", "suđen"
, "sušac", "sušan", "sušanj", "sužanj", "sužen", "svaki", "svast", "svati", "svađa", "sveti", "sveza", "sviba"
, "svila", "sving", "svinja", "svita", "sviti", "svića", "svjet", "svjež", "svlak", "svota", "svrab", "svrha"
, "svuda", "svući", "tabak", "taban", "tabla", "tablo", "tabor", "tajac", "tajga", "tajna", "tajni", "tajno"
, "takav", "taksa", "taksi", "talac", "talas", "talij", "talir", "taljen", "taljiv", "talog", "talon", "talpa"
, "talus", "taman", "tamni", "tamno", "tanac", "tanad", "tanak", "tanan", "tanga", "tango", "tanjug", "tanjur"
, "tanka", "tanki", "tanko", "tapir", "tarac", "tarok", "tarot", "tatin", "tavan", "tačke", "tašta", "tašto"
, "tegalj", "tegla", "teglo", "teist", "tekst", "tekut", "telac", "telad", "telal", "telić", "telur", "temat"
, "temelj", "tempo", "tenar", "tenda", "tenis", "tenor", "tepav", "tepih", "teran", "terca", "teren", "teret"
, "terme", "teror", "tesar", "tesla", "tetak", "tetka", "tetra", "tezga", "tečaj", "tečan", "tečni", "tečno"
, "teško", "težak", "težnja", "tifus", "tigar", "tijek", "tikov", "tikva", "tilda", "timar", "timin", "timol"
, "timom", "timor", "timun", "timus", "tinel", "tinjac", "tinta", "tioli", "tipka", "tisak", "tiski", "titan"
, "titar", "tjeme", "tkalja", "tkanje", "tkati", "tkivo", "tlaka", "tmast", "tmica", "tmina", "tobom", "tobož"
, "tokar", "toner", "tonik", "tonus", "topao", "topaz", "topiv", "topić", "topli", "toplo", "topot", "topuz"
, "toranj", "torba", "torij", "torta", "torus", "torzo", "total", "totem", "tovan", "tovar", "točak", "točan"
, "točka", "točno", "traka", "trakt", "trans", "trasa", "trata", "trava", "trbuh", "treba", "trema", "trend"
, "trenje", "treći", "trgač", "trica", "triko", "trilja", "tripa", "tripe", "trkač", "trklja", "trkom", "trnci"
, "trnjak", "trnov", "troje", "trola", "tromb", "tromo", "tropa", "tropi", "trpak", "trpki", "trpko", "trpni"
, "trsje", "trska", "truba", "truli", "trupa", "trust", "trzaj", "trzav", "trčak", "trčka", "tršlja", "tuber"
, "tubus", "tucet", "tukac", "tukan", "tulij", "tuljac", "tuljak", "tuljan", "tulum", "tumač", "tumbe", "tumor"
, "tunel", "tunjav", "tupan", "tupav", "turbo", "tutanj", "tutor", "tučak", "tučen", "tuđin", "tušanj", "tužan"
, "tužba", "tužno", "tvrdi", "tvrdo", "tvrđa", "tvrđi", "ubavo", "ubiti", "uboga", "ubogi", "ubogo", "ubran"
, "ubrus", "ubrzo", "udaja", "udata", "udati", "udbaš", "udica", "udjel", "udova", "ufanje", "uglas", "uglat"
, "ugled", "ugljen", "ugljik", "ugoda", "ugriz", "uhoda", "uhonja", "uklet", "ukoso", "ukras", "ukriž", "ukrug"
, "ulica", "ulika", "uliti", "uljani", "uljara", "uljast", "uljeni", "uljika", "ulkus", "uloga", "ulozi", "uludo"
, "umalo", "umaći", "umiti", "umnik", "umnjak", "umrli", "unija", "unići", "unjkav", "unski", "unuka", "unuče"
, "uopće", "uočen", "upala", "upeti", "upiti", "upliv", "upola", "uprav", "uprta", "uputa", "upute", "urban"
, "urbar", "ureći", "urica", "urlik", "urota", "ushit", "usjek", "usjev", "uskok", "uskrs", "usmen", "usnat"
, "usnik", "usnuo", "uspio", "uspon", "usput", "usran", "usred", "ustav", "ustuk", "ustup", "usuti", "utaja"
, "utaći", "utega", "uteći", "utiha", "utkan", "utrka", "utrti", "utući", "uvala", "uvelo", "uveče", "uvija"
, "uviti", "uvjet", "uvući", "uzdah", "uzduh", "uzduž", "uzeti", "uzeće", "uzgoj", "uzgon", "uzica", "uzina"
, "uziti", "uzići", "uzlaz", "uzlet", "uzmah", "uzmak", "uznik", "uzrok", "uzvik", "uzvoj", "učeni", "učenje"
, "učeno", "učilo", "učiti", "učmao", "učtiv", "ušara", "ušata", "ušica", "ušiti", "ušljiv", "uštap", "uštrb"
, "užeći", "užgan", "užina", "užiti", "uživo", "vabac", "vagir", "vagon", "vajda", "vajni", "vakuf", "vakum"
, "valin", "valić", "valjak", "valjan", "valjda", "valni", "valov", "vapaj", "vapno", "varan", "varav", "varen"
, "varka", "varoš", "vatra", "vazal", "vazda", "vašar", "važan", "važni", "važno", "veber", "vedar", "vedri"
, "vedro", "velar", "velik", "velim", "veljun", "velur", "veoma", "vepar", "vepra", "vergl", "veseo", "vesla"
, "veslo", "vespa", "vesta", "vesti", "vezak", "vezan", "vezač", "vezir", "vezni", "većma", "večer", "vidan"
, "vidar", "video", "vidik", "vidno", "vidra", "viganj", "vihor", "vijak", "vijek", "vikar", "vikač", "vilin"
, "vinar", "vinil", "vinjak", "vinov", "viola", "virus", "visak", "viski", "visok", "vitak", "vitao", "vitez"
, "vitki", "vitlo", "vivak", "vizir", "vičan", "viđen", "višak", "viški", "višnja", "višnji", "vjera", "vjeđa"
, "vješt", "vlada", "vlaga", "vlaka", "vlast", "voden", "vodik", "vodič", "vodka", "vodni", "vojak", "vojka"
, "vojna", "vojni", "vojno", "vokal", "volak", "volan", "volar", "volej", "volić", "voljan", "voljen", "voljno"
, "vosak", "votka", "vozar", "vozač", "vozni", "voćar", "voćka", "voćni", "vožnja", "vrana", "vrata", "vrbik"
, "vrbov", "vreli", "vrelo", "vrenje", "vreti", "vreva", "vreća", "vrganj", "vrhnje", "vrlet", "vrnut", "vrpca"
, "vrsni", "vrsta", "vrtić", "vrtni", "vrtnja", "vrulja", "vruće", "vrući", "vrzin", "vrčić", "vršak", "vrška"
, "vrški", "vršni", "vulva", "vunen", "vučak", "vučen", "vučić", "vučji", "vučni", "zabat", "zabit", "zadah"
, "zadak", "zadnji", "zadrt", "zagat", "zahir", "zahod", "zajam", "zajeb", "zakon", "zakup", "zalaz", "zalet"
, "zaljev", "zalog", "zamah", "zamak", "zamet", "zamka", "zamor", "zanat", "zanos", "zaova", "zapad", "zapet"
, "zapis", "zapor", "zapuh", "zarad", "zarez", "zaron", "zarub", "zasad", "zasip", "zasun", "zatik", "zatim"
, "zaton", "zator", "zavod", "zavoj", "zavor", "zaziv", "zazor", "začas", "začep", "začet", "začin", "zašto"
, "zbilja", "zbiti", "zbjeg", "zbrka", "zbroj", "zdanje", "zdrav", "zdrug", "zebnja", "zebra", "zefir", "zekan"
, "zelen", "zeman", "zemlja", "zemni", "zenit", "zečar", "zečić", "zečji", "zglob", "zgoda", "zgura", "zicer"
, "zidan", "zidar", "zidić", "zidni", "zijev", "zimus", "zipka", "zirak", "zjaka", "zjena", "zlato", "zlica"
, "zloba", "zloća", "zloćo", "zmija", "znani", "znanje", "znati", "zoben", "zobun", "zombi", "zoran", "zorni"
, "zorno", "zraka", "zreli", "zrelo", "zrenje", "zreti", "zrnat", "zrnce", "zubac", "zubar", "zubat", "zubić"
, "zublja", "zubni", "zuluf", "zulum", "zumba", "zvani", "zvanje", "zvati", "zveka", "zvono", "ćaćin", "ćelav"
, "ćemer", "ćevap", "ćifta", "ćilim", "ćitab", "ćopav", "ćorak", "ćorav", "ćosav", "ćošak", "ćufte", "ćumez"
, "ćumur", "ćurak", "ćurka", "ćučji", "ćuška", "čabar", "čador", "čagalj", "čajni", "čaklja", "čakra", "čalma"
, "čamac", "čaman", "čamov", "čanak", "čaplja", "čapor", "čaran", "čarda", "čarka", "čarni", "časak", "časan"
, "časna", "časni", "časno", "čavao", "čavka", "čađav", "čaška", "čedan", "čedno", "čekan", "čekač", "čekić"
, "čekrk", "čelce", "čelik", "čelni", "čemer", "čemin", "čeoni", "čepić", "čerga", "česan", "česma", "često"
, "četka", "četni", "češalj", "češanj", "češer", "češki", "češće", "češći", "čežnja", "čibuk", "čigra", "čikov"
, "čikoš", "čilaš", "čioda", "čiopa", "čipka", "čirak", "čirav", "čiraš", "čirić", "čislo", "čisti", "čisto"
, "čitak", "čitan", "čitav", "čitač", "čitki", "čitko", "čizma", "čičak", "čišći", "čižak", "čoban", "čohan"
, "čokanj", "čokot", "čolak", "čoper", "čopor", "čorba", "črčka", "čubar", "čubav", "čudak", "čudan", "čudno"
, "čujan", "čujni", "čujno", "čukalj", "čulan", "čulav", "čumav", "čunak", "čunjić", "čupav", "čuvan", "čuvar"
, "čuven", "čučanj", "čvenk", "čvrga", "čvrst", "đakon", "đavao", "đavlji", "đačić", "đački", "đeram", "đerma"
, "đubre", "đuveč", "đuzel", "šabat", "šahta", "šajba", "šajka", "šakal", "šakač", "šaljiv", "šalom", "šalša"
, "šaman", "šamar", "šamot", "šanac", "šansa", "šapat", "šarac", "šaraf", "šaran", "šaren", "šarka", "šarov"
, "šarun", "šarža", "šator", "šatra", "šačni", "šašav", "šaški", "šeboj", "šedok", "šeflja", "šegrt", "šelak"
, "šenut", "šepav", "šerif", "šerpa", "šesti", "šesto", "šetač", "šetnja", "ševar", "šećer", "šešir", "šiber"
, "šiblje", "šifon", "šifra", "šihta", "šijit", "šijun", "šiljak", "šiljka", "šilok", "šinjel", "šinjon", "šipak"
, "šipka", "širit", "širok", "širom", "šivač", "šizma", "šićar", "šišak", "šišač", "šiška", "šiške", "škalja"
, "škamp", "škare", "škart", "škljoc", "škola", "škota", "škrba", "škrge", "škrip", "škrob", "škrti", "škrto"
, "škuda", "škulja", "škuna", "škura", "škuža", "škver", "šlajm", "šlapa", "šljaka", "šljiva", "šljuka", "šnala"
, "šnaps", "šoder", "šofer", "šogor", "šojka", "špaga", "špajz", "špica", "špigl", "špilja", "špina", "šport"
, "špula", "šrafa", "štaka", "štala", "štand", "šteka", "štela", "štene", "šteta", "štiga", "štiva", "štivo"
, "štras", "štrik", "štuka", "štula", "šugav", "šuman", "šumar", "šumni", "šumor", "šunka", "šupak", "šupalj"
, "šuplje", "šuplji", "šutke", "šutnja", "šušak", "šušanj", "šuška", "švalja", "švelja", "šverc", "žabac", "žabar"
, "žablji", "žagor", "žaket", "žalac", "žalar", "žalba", "žamor", "žaoka", "žarač", "žaren", "žarki", "žarko"
, "žarni", "žbica", "žbuka", "žbunje", "ždral", "žedan", "žedno", "željan", "željen", "željni", "željno", "želva"
, "želve", "žemlja", "ženik", "ženin", "ženka", "žeton", "žetva", "žezlo", "žeđač", "žešći", "žežen", "žganje"
, "žgati", "žgoljo", "žicar", "židak", "židov", "žilav", "žilet", "žitar", "žitelj", "žitki", "žitni", "živac"
, "živad", "živalj", "živež", "živin", "živio", "življi", "život", "žičan", "žični", "žižak", "žlica", "žmara"
, "žnora", "žohar", "žrtva", "žrvanj", "žubor", "žudnja", "žuhak", "žuljav", "župan", "župni", "žuran", "žurba"
, "žurni", "žurno", "žučan", "žučni", "žučno", "žvaka", "žvala", "žvale"
];

const word_list_eng = [
"aahed", "aalii", "aargh", "abaca", "abaci", "aback", "abaft", "abaka", "abamp", "abase", "abash", "abate", 
"abbas", "abbes", "abbey", "abbot", "abeam", "abele", "abets", "abhor", "abide", "abler", "ables", "abmho", 
"abode", "abohm", "aboil", "aboma", "aboon", "abort", "about", "above", "abris", "abuse", "abuts", "abuzz", 
"abyes", "abysm", "abyss", "acari", "acerb", "aceta", "ached", "aches", "achoo", "acids", "acidy", "acing", 
"acini", "ackee", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acorn", "acred", "acres", "acrid", 
"acted", "actin", "actor", "acute", "acyls", "adage", "adapt", "addax", "added", "adder", "addle", "adeem", 
"adept", "adieu", "adios", "adits", "adman", "admen", "admit", "admix", "adobe", "adobo", "adopt", "adore", 
"adorn", "adown", "adoze", "adult", "adunc", "adust", "adyta", "adzes", "aecia", "aedes", "aegis", "aeons", 
"aerie", "afars", "affix", "afire", "afoot", "afore", "afoul", "afrit", "after", "again", "agama", "agape", 
"agars", "agate", "agave", "agaze", "agene", "agent", "agers", "agger", "aggie", "aggro", "aghas", "agile", 
"aging", "agios", "agism", "agist", "aglee", "aglet", "agley", "aglow", "agmas", "agone", "agons", "agony", 
"agora", "agree", "agria", "agues", "ahead", "ahold", "ahull", "aided", "aider", "aides", "ailed", "aimed", 
"aimer", "aioli", "aired", "airer", "airns", "airth", "airts", "aisle", "aitch", "aiver", "ajiva", "ajuga", 
"akees", "akela", "akene", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alarm", "alary", 
"alate", "albas", "album", "alcid", "alder", "aldol", "alecs", "alefs", "aleph", "alert", "alfas", "algae", 
"algal", "algas", "algid", "algin", "algor", "algum", "alias", "alibi", "alien", "alifs", "align", "alike", 
"aline", "alist", "alive", "aliya", "alkyd", "alkyl", "allay", "allee", "alley", "allod", "allot", "allow", 
"alloy", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "aloes", "aloft", "aloha", "aloin", 
"alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "altho", "altos", "alula", "alums", "alway", 
"amahs", "amain", "amass", "amaze", "amber", "ambit", "amble", "ambos", "ambry", "ameba", "ameer", "amend", 
"amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", 
"amino", "amins", "amirs", "amiss", "amity", "ammos", "amnia", "amnic", "amoks", "amole", "among", "amort", 
"amour", "ample", "amply", "ampul", "amuck", "amuse", "amyls", "ancon", "anear", "anele", "anent", "angas", 
"angel", "anger", "angle", "angry", "angst", "anile", "anils", "anima", "anime", "animi", "anion", "anise", 
"ankhs", "ankle", "ankus", "anlas", "annal", "annas", "annex", "annoy", "annul", "anoas", "anode", "anole", 
"anomy", "ansae", "antae", "antas", "anted", "antes", "antic", "antis", "antra", "antre", "antsy", "anvil", 
"aorta", "apace", "apart", "apeak", "apeek", "apers", "apery", "aphid", "aphis", "apian", "aping", "apish", 
"apnea", "apods", "aport", "appal", "appel", "apple", "apply", "apres", "apron", "apses", "apsis", "apter", 
"aptly", "aquae", "aquas", "araks", "arbor", "arced", "arcus", "ardeb", "ardor", "areae", "areal", "areas", 
"areca", "areic", "arena", "arete", "argal", "argil", "argle", "argol", "argon", "argot", "argue", "argus", 
"arhat", "arias", "ariel", "arils", "arise", "arles", "armed", "armer", "armet", "armor", "aroid", "aroma", 
"arose", "arpen", "arras", "array", "arris", "arrow", "arses", "arsis", "arson", "artal", "artel", "artsy", 
"arums", "arval", "arvos", "aryls", "asana", "ascot", "ascus", "asdic", "ashed", "ashen", "ashes", "aside", 
"asked", "asker", "askew", "askoi", "askos", "aspen", "asper", "aspic", "aspis", "assai", "assay", "asses", 
"asset", "aster", "astir", "asyla", "ataps", "ataxy", "atilt", "atlas", "atman", "atmas", "atoll", "atoms", 
"atomy", "atone", "atony", "atopy", "atria", "atrip", "attar", "attic", "audad", "audio", "audit", "auger", 
"aught", "augur", "aulic", "aunts", "aunty", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", 
"auris", "aurum", "autos", "auxin", "avail", "avant", "avast", "avens", "avers", "avert", "avgas", "avian", 
"avion", "aviso", "avoid", "avows", "await", "awake", "award", "aware", "awash", "awful", "awing", "awned", 
"awoke", "awols", "axels", "axial", "axile", "axils", "axing", "axiom", "axion", "axite", "axled", "axles", 
"axman", "axmen", "axone", "axons", "ayahs", "ayins", "azans", "azide", "azido", "azine", "azlon", "azoic", 
"azole", "azons", "azote", "azoth", "azure", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", 
"babul", "babus", "bacca", "backs", "bacon", "baddy", "badge", "badly", "baffs", "baffy", "bagel", "baggy", 
"bahts", "bails", "bairn", "baith", "baits", "baiza", "baize", "baked", "baker", "bakes", "balas", "balds", 
"baldy", "baled", "baler", "bales", "balks", "balky", "balls", "bally", "balms", "balmy", "balsa", "banal", 
"banco", "bands", "bandy", "baned", "banes", "bangs", "banjo", "banks", "banns", "banty", "barbe", "barbs", 
"barde", "bards", "bared", "barer", "bares", "barfs", "barge", "baric", "barks", "barky", "barms", "barmy", 
"barns", "barny", "baron", "barre", "barye", "basal", "based", "baser", "bases", "basic", "basil", "basin", 
"basis", "basks", "bassi", "basso", "bassy", "baste", "basts", "batch", "bated", "bates", "bathe", "baths", 
"batik", "baton", "batts", "battu", "batty", "bauds", "baulk", "bawds", "bawdy", "bawls", "bawty", "bayed", 
"bayou", "bazar", "bazoo", "beach", "beads", "beady", "beaks", "beaky", "beams", "beamy", "beano", "beans", 
"beard", "bears", "beast", "beats", "beaus", "beaut", "beaux", "bebop", "becap", "becks", "bedel", "bedew", 
"bedim", "beech", "beefs", "beefy", "beeps", "beers", "beery", "beets", "befit", "befog", "began", "begat", 
"beget", "begin", "begot", "begum", "begun", "beige", "beigy", "being", "belay", "belch", "belga", "belie", 
"belle", "bells", "belly", "below", "belts", "bemas", "bemix", "bench", "bends", "bendy", "benes", "benne", 
"benni", "benny", "bents", "beret", "bergs", "berme", "berms", "berry", "berth", "beryl", "beset", "besom", 
"besot", "bests", "betas", "betel", "beths", "beton", "betta", "bevel", "bevor", "bewig", "bezel", "bezil", 
"bhang", "bhoot", "bhuts", "biali", "bialy", "bibbs", "bible", "bices", "biddy", "bided", "bider", "bides", 
"bidet", "bield", "biers", "biffs", "biffy", "bifid", "bight", "bigly", "bigot", "bijou", "biked", "biker", 
"bikes", "bikie", "bilbo", "biles", "bilge", "bilgy", "bilks", "bills", "billy", "bimah", "bimas", "bimbo", 
"binal", "bindi", "binds", "bines", "binge", "bingo", "binit", "bints", "biome", "biont", "biota", "biped", 
"bipod", "birch", "birds", "birks", "birle", "birls", "birrs", "birse", "birth", "bises", "bisks", "bison", 
"bitch", "biter", "bites", "bitsy", "bitts", "bitty", "bizes", "blabs", "black", "blade", "blahs", "blain", 
"blame", "blams", "bland", "blank", "blare", "blase", "blast", "blate", "blats", "blawn", "blaws", "blaze", 
"bleak", "blear", "bleat", "blebs", "bleed", "bleep", "blend", "blent", "bless", "blest", "blets", "blimp", 
"blimy", "blind", "blini", "blink", "blips", "bliss", "blite", "blitz", "bloat", "blobs", "block", "blocs", 
"bloke", "blond", "blood", "bloom", "bloop", "blots", "blown", "blows", "blowy", "blubs", "blued", "bluer", 
"blues", "bluet", "bluey", "bluff", "blume", "blunt", "blurb", "blurs", "blurt", "blush", "blype", "board", 
"boars", "boart", "boast", "boats", "bobby", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "boffo", 
"boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogus", "bohea", "boils", "boing", "boite", "bolar", 
"bolas", "bolds", "boles", "bolls", "bolos", "bolts", "bolus", "bombe", "bombs", "bonds", "boned", "boner", 
"bones", "boney", "bongo", "bongs", "bonks", "bonne", "bonny", "bonus", "bonze", "boobs", "booby", "booed", 
"boogy", "books", "booms", "boomy", "boons", "boors", "boost", "booth", "boots", "booty", "booze", "boozy", 
"boral", "boras", "borax", "bored", "borer", "bores", "boric", "borne", "boron", "borts", "borty", "bortz", 
"bosks", "bosky", "bosom", "boson", "bossy", "bosun", "botas", "botch", "botel", "bothy", "botts", "bough", 
"boule", "bound", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowed", "bowel", "bower", "bowls", 
"bowse", "boxed", "boxer", "boxes", "boyar", "boyla", "boyos", "bozos", "brace", "brach", "bract", "brads", 
"braes", "brags", "braid", "brail", "brain", "brake", "braky", "brand", "brank", "brans", "brant", "brash", 
"brass", "brats", "brava", "brave", "bravi", "bravo", "brawl", "brawn", "braws", "braxy", "brays", "braza", 
"braze", "bread", "break", "bream", "brede", "breed", "brees", "brens", "brent", "breve", "brews", "briar", 
"bribe", "brick", "bride", "brief", "brier", "bries", "brigs", "brill", "brims", "brine", "bring", "brink", 
"brins", "briny", "brios", "brisk", "brits", "britt", "broad", "brock", "broil", "broke", "brome", "bromo", 
"bronc", "brood", "brook", "broom", "broos", "brose", "brosy", "broth", "brown", "brows", "brugh", "bruin", 
"bruit", "brume", "brunt", "brush", "brusk", "brute", "bubal", "bubby", "bucko", "bucks", "buddy", "budge", 
"buffi", "buffo", "buffs", "buffy", "buggy", "bugle", "buhls", "buhrs", "build", "built", "bulbs", "bulge", 
"bulgy", "bulks", "bulky", "bulla", "bulls", "bully", "bumfs", "bumph", "bumps", "bumpy", "bunch", "bunco", 
"bunds", "bundt", "bungs", "bunko", "bunks", "bunns", "bunny", "bunts", "bunya", "buoys", "buran", "buras", 
"burbs", "burds", "buret", "burgh", "burgs", "burin", "burke", "burls", "burly", "burns", "burnt", "burps", 
"burro", "burrs", "burry", "bursa", "burse", "burst", "busby", "bused", "buses", "bushy", "busks", "busts", 
"busty", "butch", "buteo", "butle", "butte", "butts", "butty", "butut", "butyl", "buxom", "buyer", "bwana", 
"bylaw", "byres", "byrls", "byssi", "bytes", "byway", "cabal", "cabby", "caber", "cabin", "cable", "cabob", 
"cacao", "cacas", "cache", "cacti", "caddy", "cades", "cadet", "cadge", "cadgy", "cadis", "cadre", "caeca", 
"cafes", "caffs", "caged", "cager", "cages", "cagey", "cahow", "caids", "cains", "caird", "cairn", "cajon", 
"caked", "cakes", "cakey", "calfs", "calif", "calix", "calks", "calla", "calls", "calms", "calve", "calyx", 
"camas", "camel", "cameo", "cames", "campi", "campo", "camps", "campy", "canal", "candy", "caned", "caner", 
"canes", "canid", "canna", "canny", "canoe", "canon", "canso", "canst", "canto", "cants", "canty", "caped", 
"caper", "capes", "caphs", "capon", "capos", "caput", "carat", "carbo", "carbs", "cards", "cared", "carer", 
"cares", "caret", "carex", "cargo", "carks", "carle", "carls", "carns", "carny", "carob", "carol", "carom", 
"carpi", "carps", "carrs", "carry", "carse", "carte", "carts", "carve", "casas", "cased", "cases", "casks", 
"casky", "caste", "casts", "casus", "catch", "cater", "cates", "catty", "cauld", "caulk", "cauls", "cause", 
"caved", "caver", "caves", "cavie", "cavil", "cawed", "cease", "cebid", "cecal", "cecum", "cedar", "ceded", 
"ceder", "cedes", "cedis", "ceiba", "ceils", "celeb", "cella", "celli", "cello", "cells", "celom", "celts", 
"cense", "cento", "cents", "ceorl", "cepes", "cerci", "cered", "ceres", "ceria", "ceric", "ceros", "cesta", 
"cesti", "cetes", "chads", "chafe", "chaff", "chain", "chair", "chalk", "champ", "chams", "chang", "chant", 
"chaos", "chape", "chaps", "chapt", "chard", "chare", "chark", "charm", "charr", "chars", "chart", "chary", 
"chase", "chasm", "chats", "chaws", "chays", "cheap", "cheat", "check", "cheek", "cheep", "cheer", "chefs", 
"chela", "chemo", "chert", "chess", "chest", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chick", 
"chico", "chics", "chide", "chief", "chiel", "child", "chile", "chili", "chill", "chimb", "chime", "chimp", 
"china", "chine", "chink", "chino", "chins", "chips", "chirk", "chirm", "chiro", "chirp", "chirr", "chits", 
"chive", "chivy", "chock", "choir", "choke", "choky", "cholo", "chomp", "chook", "chops", "chord", "chore", 
"chose", "chott", "chows", "chubs", "chuck", "chufa", "chuff", "chugs", "chump", "chums", "chunk", "churl", 
"churn", "churr", "chute", "chyle", "chyme", "cibol", "cider", "cigar", "cilia", "cimex", "cinch", "cines", 
"cions", "circa", "cires", "cirri", "cisco", "cissy", "cists", "cited", "citer", "cites", "civet", "civic", 
"civie", "civil", "civvy", "clach", "clack", "clade", "clads", "clags", "claim", "clamp", "clams", "clang", 
"clank", "clans", "claps", "clapt", "claro", "clary", "clash", "clasp", "class", "clast", "clave", "clavi", 
"claws", "clays", "clean", "clear", "cleat", "cleek", "clefs", "cleft", "clepe", "clept", "clerk", "clews", 
"click", "cliff", "clift", "climb", "clime", "cline", "cling", "clink", "clips", "clipt", "cloak", "clock", 
"clods", "clogs", "clomb", "clomp", "clone", "clonk", "clons", "cloot", "clops", "close", "cloth", "clots", 
"cloud", "clour", "clout", "clove", "clown", "cloys", "cloze", "clubs", "cluck", "clued", "clues", "clump", 
"clung", "clunk", "coach", "coact", "coala", "coals", "coaly", "coapt", "coast", "coati", "coats", "cobbs", 
"cobby", "cobia", "coble", "cobra", "cocas", "cocci", "cocks", "cocky", "cocoa", "cocos", "codas", "codec", 
"coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogon", "cohog", "cohos", "coifs", 
"coign", "coils", "coins", "coirs", "coked", "cokes", "colas", "colds", "coled", "coles", "colic", "colin", 
"colly", "colog", "colon", "color", "colts", "colza", "comae", "comal", "comas", "combe", "combo", "combs", 
"comer", "comes", "comet", "comfy", "comic", "comix", "comma", "commy", "compo", "comps", "compt", "comte", 
"conch", "condo", "coned", "cones", "coney", "conga", "conge", "congo", "conic", "conin", "conks", "conky", 
"conns", "conte", "conto", "conus", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", 
"cools", "cooly", "coomb", "coons", "coops", "coopt", "coots", "copal", "coped", "copen", "coper", "copes", 
"copra", "copse", "coral", "corby", "cords", "cored", "corer", "cores", "corgi", "coria", "corks", "corky", 
"corms", "corns", "cornu", "corny", "corps", "corse", "cosec", "coses", "coset", "cosey", "cosie", "costa", 
"costs", "cotan", "coted", "cotes", "cotta", "couch", "coude", "cough", "could", "count", "coupe", "coups", 
"court", "couth", "coved", "coven", "cover", "coves", "covet", "covey", "covin", "cowed", "cower", "cowls", 
"cowry", "coxae", "coxal", "coxed", "coxes", "coyed", "coyer", "coyly", "coypu", "cozen", "cozes", "cozey", 
"cozie", "craal", "crabs", "crack", "craft", "crags", "crake", "cramp", "crams", "crane", "crank", "crape", 
"craps", "crash", "crass", "crate", "crave", "crawl", "craws", "craze", "crazy", "creak", "cream", "credo", 
"creed", "creek", "creel", "creep", "creme", "crepe", "crept", "crepy", "cress", "crest", "crews", "cribs", 
"crick", "cried", "crier", "cries", "crime", "crimp", "cripe", "crisp", "croak", "croci", "crock", "crocs", 
"croft", "crone", "crony", "crook", "croon", "crops", "crore", "cross", "croup", "crowd", "crown", "crows", 
"croze", "cruck", "crude", "cruds", "cruel", "cruet", "crumb", "crump", "cruor", "crura", "cruse", "crush", 
"crust", "crwth", "crypt", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubic", "cubit", "cuddy", "cuffs", 
"cuifs", "cuing", "cuish", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", 
"cults", "cumin", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curbs", "curch", "curds", "curdy", "cured", 
"curer", "cures", "curet", "curfs", "curia", "curie", "curio", "curls", "curly", "curns", "currs", "curry", 
"curse", "curst", "curve", "curvy", "cusec", "cushy", "cusks", "cusps", "cusso", "cutch", "cuter", "cutes", 
"cutey", "cutie", "cutin", "cutis", "cutty", "cutup", "cyano", "cyans", "cycad", "cycas", "cycle", "cyclo", 
"cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cynic", "cysts", "cyton", "czars", "daces", 
"dacha", "dadas", "daddy", "dados", "daffs", "daffy", "dagga", "dagos", "dahls", "daily", "dairy", "daisy", 
"dales", "dally", "daman", "damar", "dames", "damns", "damps", "dance", "dandy", "dangs", "danio", "darbs", 
"dared", "darer", "dares", "daric", "darks", "darky", "darns", "darts", "dashi", "dashy", "dated", "dater", 
"dates", "datos", "datto", "datum", "daube", "daubs", "dauby", "daunt", "dauts", "daven", "davit", "dawed", 
"dawen", "dawks", "dawns", "dawts", "dazed", "dazes", "deads", "deair", "deals", "dealt", "deans", "dears", 
"deary", "deash", "death", "deave", "debar", "debit", "debts", "debug", "debut", "debye", "decaf", "decal", 
"decay", "decks", "decor", "decos", "decoy", "decry", "dedal", "deeds", "deedy", "deems", "deeps", "deers", 
"deets", "defat", "defer", "defis", "defog", "degas", "degum", "deice", "deify", "deign", "deils", "deism", 
"deist", "deity", "deked", "dekes", "dekko", "delay", "deled", "deles", "delfs", "delft", "delis", "dells", 
"delly", "delta", "delve", "demes", "demit", "demob", "demon", "demos", "demur", "denes", "denim", "dense", 
"dents", "deoxy", "depot", "depth", "derat", "deray", "derby", "derma", "derms", "derry", "desex", "desks", 
"deter", "detox", "deuce", "devas", "devel", "devil", "devon", "dewan", "dewar", "dewax", "dewed", "dexes", 
"dexie", "dhaks", "dhals", "dhobi", "dhole", "dhoti", "dhows", "dhuti", "dials", "diary", "diazo", "diced", 
"dicer", "dices", "dicey", "dicks", "dicky", "dicot", "dicta", "dicty", "didie", "didos", "didst", "diene", 
"diets", "dight", "digit", "diked", "diker", "dikes", "dikey", "dildo", "dills", "dilly", "dimer", "dimes", 
"dimly", "dinar", "dined", "diner", "dines", "dinge", "dingo", "dings", "dingy", "dinks", "dinky", "dints", 
"diode", "diols", "dippy", "dipso", "direr", "dirge", "dirks", "dirls", "dirts", "dirty", "disci", "disco", 
"discs", "dishy", "disks", "disme", "ditas", "ditch", "dites", "ditsy", "ditto", "ditty", "ditzy", "divan", 
"divas", "dived", "diver", "dives", "divot", "divvy", "diwan", "dixit", "dizen", "dizzy", "djinn", "djins", 
"doats", "dobby", "dobie", "dobla", "dobra", "docks", "dodge", "dodgy", "dodos", "doers", "doest", "doeth", 
"doffs", "doges", "dogey", "doggo", "doggy", "dogie", "dogma", "doily", "doing", "doits", "dojos", "dolce", 
"dolci", "doled", "doles", "dolls", "dolly", "dolma", "dolor", "dolts", "domal", "domed", "domes", "domic", 
"donas", "donee", "donga", "dongs", "donna", "donne", "donor", "donsy", "donut", "dooly", "dooms", "doomy", 
"doors", "doozy", "dopas", "doped", "doper", "dopes", "dopey", "dorks", "dorky", "dorms", "dormy", "dorps", 
"dorrs", "dorsa", "dorty", "dosed", "doser", "doses", "dotal", "doted", "doter", "dotes", "dotty", "doubt", 
"douce", "dough", "douma", "doums", "doura", "douse", "doven", "doves", "dowdy", "dowed", "dowel", "dower", 
"dowie", "downs", "downy", "dowry", "dowse", "doxie", "doyen", "doyly", "dozed", "dozen", "dozer", "dozes", 
"drabs", "draff", "draft", "drags", "drail", "drain", "drake", "drama", "drams", "drank", "drape", "drats", 
"drave", "drawl", "drawn", "draws", "drays", "dread", "dream", "drear", "dreck", "dreed", "drees", "dregs", 
"dreks", "dress", "drest", "dribs", "dried", "drier", "dries", "drift", "drill", "drily", "drink", "drips", 
"dript", "drive", "droit", "droll", "drone", "drool", "droop", "drops", "dropt", "dross", "drouk", "drove", 
"drown", "drubs", "drugs", "druid", "drums", "drunk", "drupe", "druse", "dryad", "dryer", "dryly", "duads", 
"duals", "ducal", "ducat", "duces", "duchy", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", 
"duets", "duffs", "duits", "duked", "dukes", "dulia", "dulls", "dully", "dulse", "dumas", "dumbs", "dumka", 
"dumky", "dummy", "dumps", "dumpy", "dunam", "dunce", "dunch", "dunes", "dungs", "dungy", "dunks", "dunts", 
"duomi", "duomo", "duped", "duper", "dupes", "duple", "dural", "duras", "dured", "dures", "durns", "duroc", 
"duros", "durra", "durrs", "durst", "durum", "dusks", "dusky", "dusts", "dusty", "dutch", "duvet", "dwarf", 
"dweeb", "dwell", "dwelt", "dwine", "dyads", "dyers", "dying", "dyked", "dykes", "dykey", "dynel", "dynes", 
"eager", "eagle", "eagre", "eared", "earls", "early", "earns", "earth", "eased", "easel", "eases", "easts", 
"eaten", "eater", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebony", "eched", "eches", "echos", "eclat", 
"ecrus", "edema", "edged", "edger", "edges", "edict", "edify", "edile", "edits", "educe", "educt", "eerie", 
"egads", "egers", "egest", "eggar", "egged", "egger", "egret", "eider", "eidos", "eight", "eikon", "eject", 
"eking", "elain", "eland", "elans", "elate", "elbow", "elder", "elect", "elegy", "elemi", "elfin", "elide", 
"elint", "elite", "eloin", "elope", "elude", "elute", "elver", "elves", "embar", "embay", "embed", "ember", 
"embow", "emcee", "emeer", "emend", "emery", "emeus", "emirs", "emits", "emmer", "emmet", "emote", "empty", 
"emyde", "emyds", "enact", "enate", "ended", "ender", "endow", "endue", "enema", "enemy", "enjoy", "ennui", 
"enoki", "enols", "enorm", "enows", "enrol", "ensky", "ensue", "enter", "entia", "entry", "enure", "envoi", 
"envoy", "enzym", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epoch", "epode", 
"epoxy", "equal", "equid", "equip", "erase", "erect", "ergot", "erica", "ernes", "erode", "erose", "erred", 
"error", "erses", "eruct", "erugo", "erupt", "ervil", "escar", "escot", "eskar", "esker", "essay", "esses", 
"ester", "estop", "etape", "ether", "ethic", "ethos", "ethyl", "etnas", "etude", "etuis", "etwee", "etyma", 
"euros", "evade", "evens", "event", "evert", "every", "evict", "evils", "evite", "evoke", "ewers", "exact", 
"exalt", "exams", "excel", "execs", "exert", "exile", "exine", "exist", "exits", "exons", "expat", "expel", 
"expos", "extol", "extra", "exude", "exult", "exurb", "eyers", "eying", "eyras", "eyres", "eyrie", "eyrir", 
"fable", "faced", "facer", "faces", "facet", "facia", "facts", "faddy", "faded", "fader", "fades", "fadge", 
"fados", "faena", "faery", "faggy", "fagin", "fagot", "fails", "faint", "fairs", "fairy", "faith", "faked", 
"faker", "fakes", "fakey", "fakir", "falls", "false", "famed", "fames", "fancy", "fanes", "fanga", "fangs", 
"fanny", "fanon", "fanos", "fanum", "faqir", "farad", "farce", "farci", "farcy", "fards", "fared", "farer", 
"fares", "farle", "farls", "farms", "faros", "farts", "fasts", "fatal", "fated", "fates", "fatly", "fatso", 
"fatty", "fatwa", "faugh", "fauld", "fault", "fauna", "fauns", "fauve", "favas", "faves", "favor", "favus", 
"fawns", "fawny", "faxed", "faxes", "fayed", "fazed", "fazes", "fears", "fease", "feast", "feats", "feaze", 
"fecal", "feces", "fecks", "feeds", "feels", "feeze", "feign", "feint", "feist", "felid", "fella", "fells", 
"felly", "felon", "felts", "femes", "femme", "femur", "fence", "fends", "fenny", "feods", "feoff", "feral", 
"feres", "feria", "ferly", "fermi", "ferns", "ferny", "ferry", "fesse", "fetal", "fetas", "fetch", "feted", 
"fetes", "fetid", "fetor", "fetus", "feuar", "feuds", "feued", "fever", "fewer", "feyer", "feyly", "fezes", 
"fiars", "fiats", "fiber", "fibre", "fices", "fiche", "fichu", "ficin", "ficus", "fidge", "fidos", "fiefs", 
"field", "fiend", "fiery", "fifed", "fifer", "fifes", "fifth", "fifty", "fight", "filar", "filch", "filed", 
"filer", "files", "filet", "fille", "fillo", "fills", "filly", "films", "filmy", "filos", "filth", "filum", 
"final", "finch", "finds", "fined", "finer", "fines", "finis", "finks", "finny", "finos", "fiord", "fique", 
"fired", "firer", "fires", "firms", "firns", "firry", "first", "firth", "fiscs", "fishy", "fists", "fitch", 
"fitly", "fiver", "fives", "fixed", "fixer", "fixes", "fixit", "fizzy", "fjeld", "fjord", "flabs", "flack", 
"flags", "flail", "flair", "flake", "flaky", "flame", "flams", "flamy", "flank", "flans", "flaps", "flare", 
"flash", "flask", "flats", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleck", "fleer", "flees", 
"fleet", "flesh", "flews", "fleys", "flick", "flics", "flied", "flier", "flies", "fling", "flint", "flips", 
"flirt", "flite", "flits", "float", "flock", "flocs", "floes", "flogs", "flong", "flood", "floor", "flops", 
"flora", "floss", "flota", "flour", "flout", "flown", "flows", "flubs", "flued", "flues", "fluff", "fluid", 
"fluke", "fluky", "flume", "flump", "flung", "flunk", "fluor", "flush", "flute", "fluty", "fluyt", "flyby", 
"flyer", "flyte", "foals", "foams", "foamy", "focal", "focus", "foehn", "fogey", "foggy", "fogie", "fohns", 
"foils", "foins", "foist", "folds", "folia", "folio", "folks", "folky", "folly", "fonds", "fondu", "fonts", 
"foods", "fools", "foots", "footy", "foram", "foray", "forbs", "forby", "force", "fordo", "fords", "fores", 
"forge", "forgo", "forks", "forky", "forme", "forms", "forte", "forth", "forts", "forty", "forum", "fossa", 
"fosse", "fouls", "found", "fount", "fours", "fovea", "fowls", "foxed", "foxes", "foyer", "frags", "frail", 
"frame", "franc", "frank", "fraps", "frass", "frats", "fraud", "frays", "freak", "freed", "freer", "frees", 
"fremd", "frena", "frere", "fresh", "frets", "friar", "fried", "frier", "fries", "frigs", "frill", "frise", 
"frisk", "frith", "frits", "fritt", "fritz", "frizz", "frock", "froes", "frogs", "frond", "frons", "front", 
"frore", "frosh", "frost", "froth", "frown", "frows", "froze", "frugs", "fruit", "frump", "fryer", "fubsy", 
"fucks", "fucus", "fudge", "fuels", "fugal", "fuggy", "fugio", "fugle", "fugue", "fugus", "fujis", "fulls", 
"fully", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fungi", "fungo", "funks", "funky", "funny", 
"furan", "furls", "furor", "furry", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fussy", 
"fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fuzzy", "fyces", "fykes", "fytte", "gabby", "gable", 
"gaddi", "gadid", "gadis", "gaffe", "gaffs", "gaged", "gager", "gages", "gaily", "gains", "gaits", "galah", 
"galas", "galax", "galea", "gales", "galls", "gally", "galop", "gamas", "gamay", "gamba", "gambe", "gambs", 
"gamed", "gamer", "games", "gamey", "gamic", "gamin", "gamma", "gammy", "gamps", "gamut", "ganef", "ganev", 
"gangs", "ganja", "ganof", "gaols", "gaped", "gaper", "gapes", "gappy", "garbs", "garni", "garth", "gases", 
"gasps", "gassy", "gasts", "gated", "gates", "gator", "gauds", "gaudy", "gauge", "gault", "gaums", "gaunt", 
"gaurs", "gauss", "gauze", "gauzy", "gavel", "gavot", "gawks", "gawky", "gawps", "gawsy", "gayal", "gayer", 
"gayly", "gazar", "gazed", "gazer", "gazes", "gears", "gecko", "gecks", "geeks", "geeky", "geese", "geest", 
"gelds", "gelee", "gelid", "gelts", "gemma", "gemmy", "gemot", "genes", "genet", "genic", "genie", "genii", 
"genip", "genoa", "genom", "genre", "genro", "gents", "genua", "genus", "geode", "geoid", "gerah", "germs", 
"germy", "gesso", "geste", "gests", "getas", "getup", "geums", "ghast", "ghats", "ghaut", "ghazi", "ghees", 
"ghost", "ghoul", "ghyll", "giant", "gibed", "giber", "gibes", "giddy", "gifts", "gigas", "gighe", "gigot", 
"gigue", "gilds", "gills", "gilly", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginks", "ginny", "gipon", 
"gipsy", "girds", "girls", "girly", "girns", "giron", "giros", "girsh", "girth", "girts", "gismo", "gists", 
"given", "giver", "gives", "gizmo", "glace", "glade", "glads", "glady", "glair", "gland", "glans", "glare", 
"glary", "glass", "glaze", "glazy", "gleam", "glean", "gleba", "glebe", "glede", "gleds", "gleed", "gleek", 
"glees", "gleet", "glens", "gleys", "glial", "glias", "glide", "gliff", "glime", "glims", "glint", "glitz", 
"gloam", "gloat", "globe", "globs", "glogg", "gloms", "gloom", "glops", "glory", "gloss", "glost", "glout", 
"glove", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "gluon", "gluts", "glyph", 
"gnarl", "gnarr", "gnars", "gnash", "gnats", "gnawn", "gnaws", "gnome", "goads", "goals", "goats", "goban", 
"gobos", "godet", "godly", "goers", "gofer", "gogos", "going", "golds", "golem", "golfs", "golly", "gombo", 
"gonad", "gonef", "goner", "gongs", "gonia", "gonif", "gonof", "gonzo", "goods", "goody", "gooey", "goofs", 
"goofy", "gooks", "gooky", "goons", "goony", "goops", "goopy", "goose", "goosy", "goral", "gored", "gores", 
"gorge", "gorps", "gorse", "gorsy", "gouge", "gourd", "gouts", "gouty", "gowan", "gowds", "gowks", "gowns", 
"goxes", "goyim", "graal", "grabs", "grace", "grade", "grads", "graft", "grail", "grain", "grama", "gramp", 
"grams", "grana", "grand", "grans", "grant", "grape", "graph", "grapy", "grasp", "grass", "grate", "grave", 
"gravy", "grays", "graze", "great", "grebe", "greed", "greek", "green", "grees", "greet", "grego", "greys", 
"gride", "grids", "grief", "griff", "grift", "grigs", "grill", "grime", "grimy", "grind", "grins", "griot", 
"gripe", "grips", "gript", "gripy", "grist", "grith", "grits", "groan", "groat", "grogs", "groin", "groom", 
"grope", "gross", "grosz", "grots", "group", "grout", "grove", "growl", "grown", "grows", "grubs", "gruel", 
"grues", "gruff", "grume", "grump", "grunt", "guaco", "guano", "guans", "guard", "guars", "guava", "gucks", 
"gudes", "guess", "guest", "guffs", "guide", "guids", "guild", "guile", "guilt", "guiro", "guise", "gulag", 
"gular", "gulch", "gules", "gulfs", "gulfy", "gulls", "gully", "gulps", "gulpy", "gumbo", "gumma", "gummy", 
"gunks", "gunky", "gunny", "guppy", "gurge", "gurry", "gursh", "gurus", "gushy", "gussy", "gusto", "gusts", 
"gusty", "gutsy", "gutta", "gutty", "guyed", "guyot", "gybed", "gybes", "gypsy", "gyral", "gyred", "gyres", 
"gyron", "gyros", "gyrus", "gyved", "gyves", "haafs", "haars", "habit", "habus", "hacek", "hacks", "hadal", 
"haded", "hades", "hadji", "hadst", "haems", "haets", "hafis", "hafiz", "hafts", "hahas", "haika", "haiks", 
"haiku", "hails", "hairs", "hairy", "hajes", "hajis", "hajji", "hakes", "hakim", "haled", "haler", "hales", 
"halid", "hallo", "halls", "halma", "halms", "halos", "halts", "halva", "halve", "hamal", "hames", "hammy", 
"hamza", "hance", "hands", "handy", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "hapax", 
"haply", "happy", "hards", "hardy", "hared", "harem", "hares", "harks", "harls", "harms", "harps", "harpy", 
"harry", "harsh", "harts", "hasps", "haste", "hasty", "hatch", "hated", "hater", "hates", "haugh", "haulm", 
"hauls", "haunt", "haute", "haven", "haver", "haves", "havoc", "hawed", "hawks", "hawse", "hayed", "hayer", 
"hazan", "hazed", "hazel", "hazer", "hazes", "heads", "heady", "heals", "heaps", "heard", "hears", "heart", 
"heath", "heats", "heave", "heavy", "hebes", "hecks", "heder", "hedge", "hedgy", "heeds", "heels", "heeze", 
"hefts", "hefty", "heigh", "heils", "heirs", "heist", "helio", "helix", "hello", "hells", "helms", "helos", 
"helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hence", "henna", "henry", 
"hents", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heron", "heros", "herry", 
"hertz", "hests", "heths", "heuch", "heugh", "hewed", "hewer", "hexad", "hexed", "hexer", "hexes", "hexyl", 
"hicks", "hided", "hider", "hides", "highs", "hight", "hiked", "hiker", "hikes", "hilar", "hillo", "hills", 
"hilly", "hilts", "hilum", "hilus", "hinds", "hinge", "hinny", "hints", "hippo", "hippy", "hired", "hirer", 
"hires", "hissy", "hists", "hitch", "hived", "hives", "hoagy", "hoard", "hoars", "hoary", "hobby", "hobos", 
"hocks", "hocus", "hodad", "hoers", "hogan", "hoggs", "hoick", "hoise", "hoist", "hoked", "hokes", "hokey", 
"hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holly", "holms", "holts", 
"homed", "homer", "homes", "homey", "homos", "honan", "honda", "honed", "honer", "hones", "honey", "hongs", 
"honks", "honky", "honor", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", 
"hoops", "hoots", "hooty", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horde", "horns", 
"horny", "horse", "horst", "horsy", "hosed", "hosel", "hosen", "hoses", "hosta", "hosts", "hotch", "hotel", 
"hotly", "hound", "houri", "hours", "house", "hovel", "hover", "howdy", "howes", "howff", "howfs", "howks", 
"howls", "hoyas", "hoyle", "hubby", "hucks", "huffs", "huffy", "huger", "hulas", "hulks", "hulky", "hullo", 
"hulls", "human", "humic", "humid", "humor", "humph", "humps", "humpy", "humus", "hunch", "hunks", "hunky", 
"hunts", "hurds", "hurls", "hurly", "hurry", "hurst", "hurts", "husks", "husky", "hussy", "hutch", "huzza", 
"hydra", "hydro", "hyena", "hying", "hylas", "hymen", "hymns", "hyoid", "hyped", "hyper", "hypes", "hypha", 
"hypos", "hyrax", "hyson", "iambi", "iambs", "ichor", "icier", "icily", "icing", "icker", "icons", "ictic", 
"ictus", "ideal", "ideas", "idiom", "idiot", "idled", "idler", "idles", "idols", "idyll", "idyls", "igloo", 
"iglus", "ihram", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliac", "iliad", "ilial", "ilium", 
"iller", "image", "imago", "imams", "imaum", "imbed", "imbue", "imide", "imido", "imids", "imine", "imino", 
"immix", "imped", "impel", "impis", "imply", "inane", "inapt", "inarm", "inbye", "incog", "incur", "incus", 
"index", "indie", "indol", "indow", "indri", "indue", "inept", "inert", "infer", "infix", "infos", "infra", 
"ingle", "ingot", "inion", "inked", "inker", "inkle", "inlay", "inlet", "inned", "inner", "input", "inset", 
"inter", "intis", "intro", "inure", "inurn", "invar", "iodic", "iodid", "iodin", "ionic", "iotas", "irade", 
"irate", "irids", "iring", "irked", "iroko", "irone", "irons", "irony", "isbas", "isled", "isles", "islet", 
"issei", "issue", "istle", "itchy", "items", "ither", "ivied", "ivies", "ivory", "ixias", "ixora", "ixtle", 
"izars", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jager", "jaggs", "jaggy", "jagra", "jails", 
"jakes", "jalap", "jalop", "jambe", "jambs", "jammy", "janes", "janty", "japan", "japed", "japer", "japes", 
"jarls", "jatos", "jauks", "jaunt", "jaups", "javas", "jawan", "jawed", "jazzy", "jeans", "jebel", "jeeps", 
"jeers", "jefes", "jehad", "jehus", "jells", "jelly", "jemmy", "jenny", "jerid", "jerks", "jerky", "jerry", 
"jesse", "jests", "jetes", "jeton", "jetty", "jewed", "jewel", "jibbs", "jibed", "jiber", "jibes", "jiffs", 
"jiffy", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinni", "jinns", "jisms", "jived", 
"jiver", "jives", "jivey", "jnana", "jocko", "jocks", "joeys", "johns", "joins", "joint", "joist", "joked", 
"joker", "jokes", "jokey", "joles", "jolly", "jolts", "jolty", "jones", "joram", "jorum", "jotas", "jotty", 
"joual", "jouks", "joule", "joust", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "judas", 
"judge", "judos", "jugal", "jugum", "juice", "juicy", "jujus", "juked", "jukes", "julep", "jumbo", "jumps", 
"jumpy", "junco", "junks", "junky", "junta", "junto", "jupes", "jupon", "jural", "jurat", "jurel", "juror", 
"justs", "jutes", "jutty", "kabab", "kabar", "kabob", "kadis", "kafir", "kagus", "kaiak", "kaifs", "kails", 
"kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalpa", "kames", "kamik", "kanas", "kanes", "kanji", 
"kaons", "kapas", "kaphs", "kapok", "kappa", "kaput", "karat", "karma", "karns", "karoo", "karst", "karts", 
"kasha", "katas", "kauri", "kaury", "kavas", "kayak", "kayos", "kazoo", "kbars", "kebab", "kebar", "kebob", 
"kecks", "kedge", "keefs", "keeks", "keels", "keens", "keeps", "keets", "keeve", "kefir", "keirs", "kelep", 
"kelim", "kelly", "kelps", "kelpy", "kemps", "kempt", "kenaf", "kench", "kendo", "kenos", "kepis", "kerbs", 
"kerfs", "kerne", "kerns", "kerry", "ketch", "ketol", "kevel", "kevil", "kexes", "keyed", "khadi", "khafs", 
"khaki", "khans", "khaph", "khats", "kheda", "kheth", "khets", "khoum", "kiang", "kibbe", "kibbi", "kibei", 
"kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kiefs", "kiers", "kikes", "kilim", "kills", "kilns", 
"kilos", "kilts", "kilty", "kinas", "kinds", "kines", "kings", "kinin", "kinks", "kinky", "kinos", "kiosk", 
"kirks", "kirns", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitty", "kivas", "kiwis", 
"klong", "kloof", "kluge", "klutz", "knack", "knaps", "knars", "knaur", "knave", "knead", "kneed", "kneel", 
"knees", "knell", "knelt", "knife", "knish", "knits", "knobs", "knock", "knoll", "knops", "knosp", "knots", 
"knout", "known", "knows", "knurl", "knurs", "koala", "koans", "koels", "kohls", "koine", "kolas", "kolos", 
"konks", "kooks", "kooky", "kopek", "kophs", "kopje", "koppa", "korai", "korat", "korun", "kotos", "kotow", 
"kraal", "kraft", "krait", "kraut", "kreep", "krill", "krona", "krone", "kroon", "krubi", "kudos", "kudus", 
"kudzu", "kugel", "kukri", "kulak", "kumys", "kurta", "kurus", "kusso", "kvass", "kyack", "kyaks", "kyars", 
"kyats", "kylix", "kyrie", "kytes", "kythe", "laari", "label", "labia", "labor", "labra", "laced", "lacer", 
"laces", "lacey", "lacks", "laded", "laden", "lader", "lades", "ladle", "laevo", "lagan", "lager", "lahar", 
"laich", "laics", "laigh", "laird", "lairs", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lalls", 
"lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lamps", "lanai", "lance", "lands", "lanes", 
"lanky", "lapel", "lapin", "lapis", "lapse", "larch", "lards", "lardy", "laree", "lares", "large", "largo", 
"laris", "larks", "larky", "larum", "larva", "lased", "laser", "lases", "lasso", "lasts", "latch", "lated", 
"laten", "later", "latex", "lathe", "lathi", "laths", "lathy", "latke", "latte", "lauan", "lauds", "laugh", 
"laura", "lavas", "laved", "laver", "laves", "lawed", "lawns", "lawny", "laxer", "laxly", "layed", "layer", 
"layup", "lazar", "lazed", "lazes", "leach", "leads", "leady", "leafs", "leafy", "leaks", "leaky", "leans", 
"leant", "leaps", "leapt", "learn", "lears", "leary", "lease", "leash", "least", "leave", "leavy", "leben", 
"ledge", "ledgy", "leech", "leeks", "leers", "leery", "leets", "lefts", "lefty", "legal", "leger", "leges", 
"leggy", "legit", "lehrs", "lehua", "leman", "lemma", "lemon", "lemur", "lends", "lenes", "lenis", "lenos", 
"lense", "lento", "leone", "leper", "lepta", "letch", "lethe", "letup", "leuds", "levee", "level", "lever", 
"levin", "lewis", "lexes", "lexis", "lezzy", "liana", "liane", "liang", "liard", "liars", "libel", "liber", 
"libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liege", "liens", "liers", "lieus", 
"lieve", "lifer", "lifts", "ligan", "liger", "light", "liked", "liken", "liker", "likes", "lilac", "lilts", 
"liman", "limas", "limba", "limbi", "limbo", "limbs", "limby", "limed", "limen", "limes", "limey", "limit", 
"limns", "limos", "limpa", "limps", "linac", "lindy", "lined", "linen", "liner", "lines", "liney", "linga", 
"lingo", "lings", "lingy", "linin", "links", "linky", "linns", "linos", "lints", "linty", "linum", "lions", 
"lipid", "lipin", "lippy", "liras", "lirot", "lisle", "lisps", "lists", "litai", "litas", "liter", "lithe", 
"litho", "litre", "lived", "liven", "liver", "lives", "livid", "livre", "llama", "llano", "loach", "loads", 
"loafs", "loams", "loamy", "loans", "loath", "lobar", "lobby", "lobed", "lobes", "lobos", "local", "lochs", 
"locks", "locos", "locum", "locus", "loden", "lodes", "lodge", "loess", "lofts", "lofty", "logan", "loges", 
"loggy", "logia", "logic", "logoi", "logos", "loins", "lolls", "lolly", "loner", "longe", "longs", "looby", 
"looed", "looey", "loofa", "loofs", "looie", "looks", "looms", "loons", "loony", "loops", "loopy", "loose", 
"loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lores", "loris", "lorry", "losel", 
"loser", "loses", "lossy", "lotah", "lotas", "lotic", "lotos", "lotte", "lotto", "lotus", "lough", "louie", 
"louis", "loupe", "loups", "lours", "loury", "louse", "lousy", "louts", "lovat", "loved", "lover", "loves", 
"lowed", "lower", "lowes", "lowly", "lowse", "loxed", "loxes", "loyal", "luaus", "lubes", "luces", "lucid", 
"lucks", "lucky", "lucre", "ludes", "ludic", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", 
"lumen", "lumps", "lumpy", "lunar", "lunas", "lunch", "lunes", "lunet", "lunge", "lungi", "lungs", "lunks", 
"lunts", "lupin", "lupus", "lurch", "lured", "lurer", "lures", "lurid", "lurks", "lusts", "lusty", "lusus", 
"lutea", "luted", "lutes", "luxes", "lweis", "lyard", "lyart", "lyase", "lycea", "lycee", "lying", "lymph", 
"lynch", "lyres", "lyric", "lysed", "lyses", "lysin", "lysis", "lyssa", "lytic", "lytta", "maars", "mabes", 
"macaw", "maced", "macer", "maces", "mache", "macho", "machs", "macks", "macle", "macon", "macro", "madam", 
"madly", "madre", "mafia", "mafic", "mages", "magic", "magma", "magot", "magus", "mahoe", "maids", "maile", 
"maill", "mails", "maims", "mains", "mairs", "maist", "maize", "major", "makar", "maker", "makes", "makos", 
"malar", "males", "malic", "malls", "malms", "malmy", "malts", "malty", "mamas", "mamba", "mambo", "mamey", 
"mamie", "mamma", "mammy", "manas", "maned", "manes", "mange", "mango", "mangy", "mania", "manic", "manly", 
"manna", "manor", "manos", "manse", "manta", "manus", "maple", "maqui", "march", "marcs", "mares", "marge", 
"maria", "marks", "marls", "marly", "marry", "marse", "marsh", "marts", "marvy", "maser", "mashy", "masks", 
"mason", "massa", "masse", "massy", "masts", "match", "mated", "mater", "mates", "matey", "maths", "matin", 
"matte", "matts", "matza", "matzo", "mauds", "mauls", "maund", "mauts", "mauve", "maven", "mavie", "mavin", 
"mavis", "mawed", "maxes", "maxim", "maxis", "mayan", "mayas", "maybe", "mayed", "mayor", "mayos", "mayst", 
"mazed", "mazer", "mazes", "mbira", "meads", "meals", "mealy", "means", "meant", "meany", "meats", "meaty", 
"mecca", "medal", "media", "medic", "medii", "meeds", "meets", "meiny", "melds", "melee", "melic", "mells", 
"melon", "melts", "memos", "menad", "mends", "mensa", "mense", "menta", "menus", "meous", "meows", "mercy", 
"merde", "merer", "meres", "merge", "merit", "merks", "merle", "merls", "merry", "mesas", "meshy", "mesic", 
"mesne", "meson", "messy", "metal", "meted", "meter", "metes", "meths", "metis", "metre", "metro", "mewed", 
"mewls", "mezes", "mezzo", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micks", "micra", "micro", 
"middy", "midge", "midis", "midst", "miens", "miffs", "miffy", "miggs", "might", "miked", "mikes", "mikra", 
"milch", "miler", "miles", "milia", "milks", "milky", "mille", "mills", "milos", "milpa", "milts", "milty", 
"mimed", "mimeo", "mimer", "mimes", "mimic", "minae", "minas", "mince", "mincy", "minds", "mined", "miner", 
"mines", "mingy", "minim", "minis", "minke", "minks", "minny", "minor", "mints", "minty", "minus", "mired", 
"mires", "mirex", "mirks", "mirky", "mirth", "mirza", "misdo", "miser", "mises", "misos", "missy", "mists", 
"misty", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixer", "mixes", "mixup", "mizen", "moans", 
"moats", "mocha", "mocks", "modal", "model", "modem", "modes", "modus", "moggy", "mogul", "mohel", "mohur", 
"moils", "moira", "moire", "moist", "mojos", "mokes", "molal", "molar", "molas", "molds", "moldy", "moles", 
"molls", "molly", "molto", "molts", "momes", "momma", "mommy", "momus", "monad", "monas", "monde", "mondo", 
"money", "mongo", "monie", "monks", "monos", "monte", "month", "mooch", "moods", "moody", "mooed", "moola", 
"mools", "moons", "moony", "moors", "moory", "moose", "moots", "moped", "moper", "mopes", "mopey", "morae", 
"moral", "moras", "moray", "morel", "mores", "morns", "moron", "morph", "morro", "morse", "morts", "mosey", 
"mosks", "mosso", "mossy", "moste", "mosts", "motel", "motes", "motet", "motey", "moths", "mothy", "motif", 
"motor", "motte", "motto", "motts", "mouch", "moues", "mould", "moult", "mound", "mount", "mourn", "mouse", 
"mousy", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower", "moxas", "moxie", "mozos", "mucid", 
"mucin", "mucks", "mucky", "mucor", "mucro", "mucus", "muddy", "mudra", "muffs", "mufti", "muggs", "muggy", 
"muhly", "mujik", "mulch", "mulct", "muled", "mules", "muley", "mulla", "mulls", "mumms", "mummy", "mumps", 
"mumus", "munch", "mungo", "munis", "muons", "mural", "muras", "mured", "mures", "murex", "murid", "murks", 
"murky", "murra", "murre", "murrs", "murry", "musca", "mused", "muser", "muses", "mushy", "music", "musks", 
"musky", "mussy", "musth", "musts", "musty", "mutch", "muted", "muter", "mutes", "muton", "mutts", "muzzy", 
"mynah", "mynas", "myoid", "myoma", "myope", "myopy", "myrrh", "mysid", "myths", "mythy", "naans", "nabes", 
"nabis", "nabob", "nacho", "nacre", "nadas", "nadir", "naevi", "naggy", "naiad", "naifs", "nails", "naira", 
"naive", "naked", "naled", "named", "namer", "names", "nanas", "nance", "nancy", "nanny", "napes", "nappe", 
"nappy", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "nasal", "nasty", "natal", 
"natch", "nates", "natty", "naval", "navar", "navel", "naves", "navvy", "nawab", "nazis", "neaps", "nears", 
"neath", "neats", "necks", "needs", "needy", "neems", "neeps", "negus", "neifs", "neigh", "neist", "nelly", 
"nemas", "neons", "nerds", "nerdy", "nerol", "nerts", "nertz", "nerve", "nervy", "nests", "netop", "netts", 
"netty", "neuks", "neume", "neums", "never", "neves", "nevus", "newel", "newer", "newie", "newly", "newsy", 
"newts", "nexus", "ngwee", "nicad", "nicer", "niche", "nicks", "nicol", "nidal", "nided", "nides", "nidus", 
"niece", "nieve", "nifty", "nighs", "night", "nihil", "nills", "nimbi", "nines", "ninja", "ninny", "ninon", 
"ninth", "nipas", "nippy", "nisei", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitty", 
"nival", "nixed", "nixes", "nixie", "nizam", "nobby", "noble", "nobly", "nocks", "nodal", "noddy", "nodes", 
"nodus", "noels", "noggs", "nohow", "noils", "noily", "noirs", "noise", "noisy", "nolos", "nomad", "nomas", 
"nomen", "nomes", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nonyl", "nooks", "nooky", "noons", 
"noose", "nopal", "noria", "noris", "norms", "north", "nosed", "noses", "nosey", "notal", "notch", "noted", 
"noter", "notes", "notum", "nouns", "novae", "novas", "novel", "noway", "nowts", "nubby", "nubia", "nucha", 
"nuder", "nudes", "nudge", "nudie", "nudzh", "nuked", "nukes", "nulls", "numbs", "numen", "nurds", "nurls", 
"nurse", "nutsy", "nutty", "nyala", "nylon", "nymph", "oaken", "oakum", "oared", "oases", "oasis", "oasts", 
"oaten", "oater", "oaths", "oaves", "obeah", "obeli", "obese", "obeys", "obias", "obits", "objet", "oboes", 
"obole", "oboli", "obols", "occur", "ocean", "ocher", "ochre", "ochry", "ocker", "ocrea", "octad", "octal", 
"octan", "octet", "octyl", "oculi", "odder", "oddly", "odeon", "odeum", "odist", "odium", "odors", "odour", 
"odyle", "odyls", "ofays", "offal", "offed", "offer", "often", "ofter", "ogams", "ogees", "ogham", "ogive", 
"ogled", "ogler", "ogles", "ogres", "ohias", "ohing", "ohmic", "oidia", "oiled", "oiler", "oinks", "okapi", 
"okays", "okehs", "okras", "olden", "older", "oldie", "oleic", "olein", "oleos", "oleum", "olios", "olive", 
"ollas", "ology", "omasa", "omber", "ombre", "omega", "omens", "omers", "omits", "onery", "onion", "onium", 
"onset", "ontic", "oohed", "oomph", "oorie", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opera", 
"opine", "oping", "opium", "opsin", "opted", "optic", "orach", "orals", "orang", "orate", "orbed", "orbit", 
"orcas", "orcin", "order", "ordos", "oread", "organ", "orgic", "oribi", "oriel", "orles", "orlop", "ormer", 
"ornis", "orpin", "orris", "ortho", "orzos", "osier", "osmic", "osmol", "ossia", "ostia", "other", "ottar", 
"otter", "ottos", "ought", "ounce", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outdo", "outed", 
"outer", "outgo", "outre", "ouzel", "ouzos", "ovals", "ovary", "ovate", "ovens", "overs", "overt", "ovine", 
"ovoid", "ovoli", "ovolo", "ovule", "owing", "owlet", "owned", "owner", "owsen", "oxbow", "oxeye", "oxide", 
"oxids", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozone", "pacas", "paced", "pacer", "paces", "pacha", 
"packs", "pacts", "paddy", "padis", "padle", "padre", "padri", "paean", "paeon", "pagan", "paged", "pager", 
"pages", "pagod", "paiks", "pails", "pains", "paint", "pairs", "paisa", "paise", "palea", "paled", "paler", 
"pales", "palet", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsy", "pampa", "panda", "pandy", 
"paned", "panel", "panes", "panga", "pangs", "panic", "panne", "pansy", "panto", "pants", "panty", "papal", 
"papas", "papaw", "paper", "pappi", "pappy", "paras", "parch", "pardi", "pards", "pardy", "pared", "pareo", 
"parer", "pares", "pareu", "parge", "pargo", "paris", "parka", "parks", "parle", "parol", "parrs", "parry", 
"parse", "parts", "party", "parve", "parvo", "paseo", "pases", "pasha", "passe", "pasta", "paste", "pasts", 
"pasty", "patch", "pated", "paten", "pater", "pates", "paths", "patin", "patio", "patly", "patsy", "patty", 
"pause", "pavan", "paved", "paver", "paves", "pavid", "pavin", "pavis", "pawed", "pawer", "pawky", "pawls", 
"pawns", "paxes", "payed", "payee", "payer", "payor", "peace", "peach", "peage", "peags", "peaks", "peaky", 
"peals", "peans", "pearl", "pears", "peart", "pease", "peats", "peaty", "peavy", "pecan", "pechs", "pecks", 
"pecky", "pedal", "pedes", "pedro", "peeks", "peels", "peens", "peeps", "peers", "peery", "peeve", "peins", 
"peise", "pekan", "pekes", "pekin", "pekoe", "peles", "pelfs", "pelon", "pelts", "penal", "pence", "pends", 
"penes", "pengo", "penis", "penna", "penne", "penni", "penny", "peons", "peony", "pepla", "pepos", "peppy", 
"perch", "perdu", "perdy", "perea", "peril", "peris", "perks", "perky", "perms", "perry", "perse", "pesky", 
"pesos", "pesto", "pests", "pesty", "petal", "peter", "petit", "petti", "petto", "petty", "pewee", "pewit", 
"phage", "phase", "phial", "phlox", "phone", "phono", "phons", "phony", "photo", "phots", "phpht", "phuts", 
"phyla", "phyle", "piano", "pians", "pibal", "pical", "picas", "picks", "picky", "picot", "picul", "piece", 
"piers", "pieta", "piety", "piggy", "pigmy", "piing", "pikas", "piked", "piker", "pikes", "pikis", "pilaf", 
"pilar", "pilau", "pilaw", "pilea", "piled", "pilei", "piles", "pilis", "pills", "pilot", "pilus", "pimas", 
"pimps", "pinas", "pinch", "pined", "pines", "piney", "pingo", "pings", "pinko", "pinks", "pinky", "pinna", 
"pinny", "pinon", "pinot", "pinta", "pinto", "pints", "pinup", "pions", "pious", "pipal", "piped", "piper", 
"pipes", "pipet", "pipit", "pique", "pirns", "pirog", "pisco", "pisos", "piste", "pitas", "pitch", "piths", 
"pithy", "piton", "pivot", "pixel", "pixes", "pixie", "pizza", "place", "plack", "plage", "plaid", "plain", 
"plait", "plane", "plank", "plans", "plant", "plash", "plasm", "plate", "plats", "platy", "playa", "plays", 
"plaza", "plead", "pleas", "pleat", "plebe", "plebs", "plena", "plews", "plica", "plied", "plier", "plies", 
"plink", "plods", "plonk", "plops", "plots", "plotz", "plows", "ploys", "pluck", "plugs", "plumb", "plume", 
"plump", "plums", "plumy", "plunk", "plush", "plyer", "poach", "pocks", "pocky", "podgy", "podia", "poems", 
"poesy", "poets", "pogey", "poilu", "poind", "point", "poise", "poked", "poker", "pokes", "pokey", "polar", 
"poled", "poler", "poles", "polio", "polis", "polka", "polls", "polos", "polyp", "polys", "pomes", "pommy", 
"pomps", "ponce", "ponds", "pones", "pongs", "pooch", "poods", "poofs", "poofy", "poohs", "pools", "poons", 
"poops", "poori", "poove", "popes", "poppa", "poppy", "popsy", "porch", "pored", "pores", "porgy", "porks", 
"porky", "porno", "porns", "porny", "ports", "posed", "poser", "poses", "posit", "posse", "posts", "potsy", 
"potto", "potty", "pouch", "pouff", "poufs", "poult", "pound", "pours", "pouts", "pouty", "power", "poxed", 
"poxes", "poyou", "praam", "prahu", "prams", "prang", "prank", "praos", "prase", "prate", "prats", "praus", 
"prawn", "prays", "preed", "preen", "prees", "preps", "presa", "prese", "press", "prest", "prexy", "preys", 
"price", "prick", "pricy", "pride", "pried", "prier", "pries", "prigs", "prill", "prima", "prime", "primi", 
"primo", "primp", "prims", "prink", "print", "prion", "prior", "prise", "prism", "priss", "privy", "prize", 
"proas", "probe", "prods", "proem", "profs", "progs", "prole", "promo", "proms", "prone", "prong", "proof", 
"props", "prose", "proso", "pross", "prost", "prosy", "proud", "prove", "prowl", "prows", "proxy", "prude", 
"prune", "pruta", "pryer", "psalm", "pseud", "pshaw", "psoae", "psoai", "psoas", "psych", "pubes", "pubic", 
"pubis", "puces", "pucka", "pucks", "pudgy", "pudic", "puffs", "puffy", "puggy", "pujah", "pujas", "puked", 
"pukes", "pukka", "puled", "puler", "pules", "pulik", "pulis", "pulls", "pulps", "pulpy", "pulse", "pumas", 
"pumps", "punas", "punch", "pungs", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", 
"pupal", "pupas", "pupil", "puppy", "purda", "puree", "purer", "purge", "purin", "puris", "purls", "purrs", 
"purse", "pursy", "puses", "pushy", "pussy", "puton", "putti", "putto", "putts", "putty", "pygmy", "pyins", 
"pylon", "pyoid", "pyran", "pyres", "pyric", "pyxes", "pyxie", "pyxis", "qaids", "qanat", "qophs", "quack", 
"quads", "quaff", "quags", "quail", "quais", "quake", "quaky", "quale", "qualm", "quant", "quare", "quark", 
"quart", "quash", "quasi", "quass", "quate", "quays", "quean", "queen", "queer", "quell", "quern", "query", 
"quest", "queue", "queys", "quick", "quids", "quiet", "quiff", "quill", "quilt", "quins", "quint", "quips", 
"quipu", "quire", "quirk", "quirt", "quite", "quits", "quods", "quoin", "quoit", "quota", "quote", "quoth", 
"qursh", "rabat", "rabbi", "rabic", "rabid", "raced", "racer", "races", "racks", "racon", "radar", "radii", 
"radio", "radix", "radon", "raffs", "rafts", "ragas", "raged", "ragee", "rages", "raggy", "ragis", "raias", 
"raids", "rails", "rains", "rainy", "raise", "rajah", "rajas", "rajes", "raked", "rakee", "raker", "rakes", 
"rakis", "rales", "rally", "ralph", "ramee", "ramet", "ramie", "rammy", "ramps", "ramus", "rance", "ranch", 
"rands", "randy", "ranee", "range", "rangy", "ranid", "ranis", "ranks", "rants", "raped", "raper", "rapes", 
"raphe", "rapid", "rared", "rarer", "rares", "rased", "raser", "rases", "rasps", "raspy", "ratal", "ratan", 
"ratch", "rated", "ratel", "rater", "rates", "rathe", "ratio", "ratos", "ratty", "raved", "ravel", "raven", 
"raver", "raves", "ravin", "rawer", "rawin", "rawly", "raxed", "raxes", "rayah", "rayas", "rayed", "rayon", 
"razed", "razee", "razer", "razes", "razor", "reach", "react", "readd", "reads", "ready", "realm", "reals", 
"reams", "reaps", "rearm", "rears", "reata", "reave", "rebar", "rebbe", "rebec", "rebel", "rebid", "rebop", 
"rebus", "rebut", "rebuy", "recap", "recce", "recks", "recon", "recta", "recti", "recto", "recur", "recut", 
"redan", "redds", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", 
"redub", "redux", "redye", "reeds", "reedy", "reefs", "reefy", "reeks", "reeky", "reels", "reest", "reeve", 
"refed", "refel", "refer", "refit", "refix", "refly", "refry", "regal", "reges", "regma", "regna", "rehab", 
"rehem", "reifs", "reify", "reign", "reink", "reins", "reive", "rekey", "relax", "relay", "relet", "relic", 
"relit", "reman", "remap", "remet", "remex", "remit", "remix", "renal", "rends", "renew", "renig", "renin", 
"rente", "rents", "reoil", "repay", "repeg", "repel", "repin", "reply", "repos", "repot", "repps", "repro", 
"reran", "rerig", "rerun", "resaw", "resay", "resee", "reset", "resew", "resid", "resin", "resod", "resow", 
"rests", "retag", "retax", "retch", "retem", "retia", "retie", "retro", "retry", "reuse", "revel", "revet", 
"revue", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rexes", "rheas", "rheum", "rhino", "rhomb", 
"rhumb", "rhyme", "rhyta", "rials", "riant", "riata", "ribby", "ribes", "riced", "ricer", "rices", "ricin", 
"ricks", "rider", "rides", "ridge", "ridgy", "riels", "rifer", "riffs", "rifle", "rifts", "right", "rigid", 
"rigor", "riled", "riles", "riley", "rille", "rills", "rimed", "rimer", "rimes", "rinds", "rings", "rinks", 
"rinse", "rioja", "riots", "riped", "ripen", "riper", "ripes", "risen", "riser", "rises", "rishi", "risks", 
"risky", "risus", "rites", "ritzy", "rival", "rived", "riven", "river", "rives", "rivet", "riyal", "roach", 
"roads", "roams", "roans", "roars", "roast", "robed", "robes", "robin", "roble", "robot", "rocks", "rocky", 
"rodeo", "roger", "rogue", "roils", "roily", "roles", "rolfs", "rolls", "roman", "romeo", "romps", "rondo", 
"roods", "roofs", "rooks", "rooky", "rooms", "roomy", "roose", "roost", "roots", "rooty", "roped", "roper", 
"ropes", "ropey", "roque", "rosed", "roses", "roset", "rosin", "rotas", "rotch", "rotes", "rotis", "rotls", 
"rotor", "rotos", "rotte", "rouen", "roues", "rouge", "rough", "round", "roups", "roupy", "rouse", "roust", 
"route", "routh", "routs", "roved", "roven", "rover", "roves", "rowan", "rowdy", "rowed", "rowel", "rowen", 
"rower", "rowth", "royal", "ruana", "rubes", "ruble", "rubus", "ruche", "rucks", "rudds", "ruddy", "ruder", 
"ruers", "ruffe", "ruffs", "rugae", "rugal", "rugby", "ruing", "ruins", "ruled", "ruler", "rules", "rumba", 
"rumen", "rummy", "rumor", "rumps", "runes", "rungs", "runic", "runny", "runts", "runty", "rupee", "rural", 
"ruses", "rushy", "rusks", "rusts", "rusty", "ruths", "rutin", "rutty", "ryked", "rykes", "rynds", "ryots", 
"sabed", "saber", "sabes", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "sades", 
"sadhe", "sadhu", "sadis", "sadly", "safer", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", 
"sahib", "saice", "saids", "saiga", "sails", "sains", "saint", "saith", "sajou", "saker", "sakes", "sakis", 
"salad", "salal", "salep", "sales", "salic", "sally", "salmi", "salol", "salon", "salpa", "salps", "salsa", 
"salts", "salty", "salve", "salvo", "samba", "sambo", "samek", "samps", "sands", "sandy", "saned", "saner", 
"sanes", "sanga", "sangh", "santo", "sapid", "sapor", "sappy", "saran", "sards", "saree", "sarge", "sarin", 
"saris", "sarks", "sarky", "sarod", "saros", "sasin", "sassy", "satay", "sated", "satem", "sates", "satin", 
"satis", "satyr", "sauce", "sauch", "saucy", "saugh", "sauls", "sault", "sauna", "saury", "saute", "saved", 
"saver", "saves", "savin", "savor", "savoy", "savvy", "sawed", "sawer", "saxes", "sayer", "sayid", "sayst", 
"scabs", "scads", "scags", "scald", "scale", "scall", "scalp", "scaly", "scamp", "scams", "scans", "scant", 
"scape", "scare", "scarf", "scarp", "scars", "scart", "scary", "scats", "scatt", "scaup", "scaur", "scena", 
"scend", "scene", "scent", "schav", "schmo", "schul", "schwa", "scion", "scoff", "scold", "scone", "scoop", 
"scoot", "scope", "scops", "score", "scorn", "scots", "scour", "scout", "scowl", "scows", "scrag", "scram", 
"scrap", "scree", "screw", "scrim", "scrip", "scrod", "scrub", "scrum", "scuba", "scudi", "scudo", "scuds", 
"scuff", "sculk", "scull", "sculp", "scums", "scups", "scurf", "scuta", "scute", "scuts", "seals", "seams", 
"seamy", "sears", "seats", "sebum", "secco", "sects", "sedan", "seder", "sedge", "sedgy", "sedum", "seeds", 
"seedy", "seeks", "seels", "seely", "seems", "seeps", "seepy", "seers", "segni", "segno", "segos", "segue", 
"seifs", "seine", "seise", "seism", "seize", "selah", "selfs", "selle", "sells", "selva", "semen", "semes", 
"semis", "sends", "sengi", "senna", "senor", "sensa", "sense", "sente", "senti", "sepal", "sepia", "sepic", 
"sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "serif", 
"serin", "serow", "serry", "serum", "serve", "servo", "setae", "setal", "seton", "setts", "setup", "seven", 
"sever", "sewan", "sewar", "sewed", "sewer", "sexed", "sexes", "sexto", "sexts", "shack", "shade", "shads", 
"shady", "shaft", "shags", "shahs", "shake", "shako", "shaky", "shale", "shall", "shalt", "shaly", "shame", 
"shams", "shank", "shape", "shard", "share", "shark", "sharn", "sharp", "shaul", "shave", "shawl", "shawm", 
"shawn", "shaws", "shays", "sheaf", "sheal", "shear", "sheas", "sheds", "sheen", "sheep", "sheer", "sheet", 
"sheik", "shelf", "shell", "shend", "shent", "sheol", "sherd", "shewn", "shews", "shied", "shiel", "shier", 
"shies", "shift", "shill", "shily", "shims", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirr", 
"shirt", "shist", "shits", "shiva", "shive", "shivs", "shlep", "shoal", "shoat", "shock", "shoed", "shoer", 
"shoes", "shogs", "shoji", "shone", "shook", "shool", "shoon", "shoos", "shoot", "shops", "shore", "shorl", 
"shorn", "short", "shote", "shots", "shott", "shout", "shove", "shown", "shows", "showy", "shoyu", "shred", 
"shrew", "shris", "shrub", "shrug", "shtik", "shuck", "shuln", "shuls", "shuns", "shunt", "shush", "shute", 
"shuts", "shyer", "shyly", "sials", "sibbs", "sibyl", "sices", "sicko", "sicks", "sided", "sides", "sidle", 
"siege", "sieur", "sieve", "sifts", "sighs", "sight", "sigil", "sigma", "signs", "siker", "sikes", "silds", 
"silex", "silks", "silky", "sills", "silly", "silos", "silts", "silty", "silva", "simar", "simas", "simps", 
"since", "sines", "sinew", "singe", "sings", "sinhs", "sinks", "sinus", "siped", "sipes", "sired", "siree", 
"siren", "sires", "sirra", "sirup", "sisal", "sises", "sissy", "sitar", "sited", "sites", "situp", "situs", 
"siver", "sixes", "sixmo", "sixte", "sixth", "sixty", "sizar", "sized", "sizer", "sizes", "skags", "skald", 
"skate", "skats", "skean", "skeed", "skeen", "skees", "skeet", "skegs", "skein", "skelm", "skelp", "skene", 
"skeps", "skews", "skids", "skied", "skier", "skies", "skiey", "skiff", "skill", "skimo", "skimp", "skims", 
"skink", "skins", "skint", "skips", "skirl", "skirr", "skirt", "skite", "skits", "skive", "skoal", "skosh", 
"skuas", "skulk", "skull", "skunk", "skyed", "skyey", "slabs", "slack", "slags", "slain", "slake", "slams", 
"slang", "slank", "slant", "slaps", "slash", "slate", "slats", "slaty", "slave", "slaws", "slays", "sleds", 
"sleek", "sleep", "sleet", "slept", "slews", "slice", "slick", "slide", "slier", "slily", "slime", "slims", 
"slimy", "sling", "slink", "slipe", "slips", "slipt", "slits", "slobs", "sloes", "slogs", "sloid", "slojd", 
"sloop", "slope", "slops", "slosh", "sloth", "slots", "slows", "sloyd", "slubs", "slued", "slues", "sluff", 
"slugs", "slump", "slums", "slung", "slunk", "slurb", "slurp", "slurs", "slush", "sluts", "slyer", "slyly", 
"slype", "smack", "small", "smalt", "smarm", "smart", "smash", "smaze", "smear", "smeek", "smell", "smelt", 
"smerk", "smews", "smile", "smirk", "smite", "smith", "smock", "smogs", "smoke", "smoky", "smolt", "smote", 
"smuts", "snack", "snafu", "snags", "snail", "snake", "snaky", "snaps", "snare", "snark", "snarl", "snash", 
"snath", "snaws", "sneak", "sneap", "sneck", "sneds", "sneer", "snell", "snibs", "snick", "snide", "sniff", 
"snipe", "snips", "snits", "snobs", "snogs", "snood", "snook", "snool", "snoop", "snoot", "snore", "snort", 
"snots", "snout", "snows", "snowy", "snubs", "snuck", "snuff", "snugs", "snyes", "soaks", "soaps", "soapy", 
"soars", "soave", "sober", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", 
"softa", "softs", "softy", "soggy", "soils", "sojas", "sokes", "sokol", "solan", "solar", "soldi", "soldo", 
"soled", "solei", "soles", "solid", "solon", "solos", "solum", "solus", "solve", "somas", "sonar", "sonde", 
"sones", "songs", "sonic", "sonly", "sonny", "sonsy", "sooey", "sooks", "sooth", "soots", "sooty", "sophs", 
"sophy", "sopor", "soppy", "soras", "sorbs", "sords", "sorel", "sorer", "sores", "sorgo", "sorns", "sorry", 
"sorts", "sorus", "soths", "sotol", "sough", "souks", "souls", "sound", "soups", "soupy", "sours", "souse", 
"south", "sowar", "sowed", "sower", "soyas", "soyuz", "sozin", "space", "spacy", "spade", "spado", "spaed", 
"spaes", "spahi", "spail", "spait", "spake", "spale", "spall", "spang", "spank", "spans", "spare", "spark", 
"spars", "spasm", "spate", "spats", "spawn", "spays", "speak", "spean", "spear", "speck", "specs", "speed", 
"speel", "speer", "speil", "speir", "spell", "spelt", "spend", "spent", "sperm", "spews", "spica", "spice", 
"spick", "spics", "spicy", "spied", "spiel", "spier", "spies", "spiff", "spike", "spiks", "spiky", "spile", 
"spill", "spilt", "spine", "spins", "spiny", "spire", "spirt", "spiry", "spite", "spits", "spitz", "spivs", 
"splat", "splay", "split", "spode", "spoil", "spoke", "spoof", "spook", "spool", "spoon", "spoor", "spore", 
"sport", "spots", "spout", "sprag", "sprat", "spray", "spree", "sprig", "sprit", "sprue", "sprug", "spuds", 
"spued", "spues", "spume", "spumy", "spunk", "spurn", "spurs", "spurt", "sputa", "squab", "squad", "squat", 
"squaw", "squeg", "squib", "squid", "stabs", "stack", "stade", "staff", "stage", "stags", "stagy", "staid", 
"staig", "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stane", "stang", "stank", 
"staph", "stare", "stark", "stars", "start", "stash", "state", "stats", "stave", "stays", "stead", "steak", 
"steal", "steam", "steed", "steek", "steel", "steep", "steer", "stein", "stela", "stele", "stems", "steno", 
"steps", "stere", "stern", "stets", "stews", "stich", "stick", "stied", "sties", "stiff", "stile", "still", 
"stilt", "stime", "stimy", "sting", "stink", "stint", "stipe", "stirk", "stirp", "stirs", "stoae", "stoai", 
"stoas", "stoat", "stobs", "stock", "stogy", "stoic", "stoke", "stole", "stoma", "stomp", "stone", "stony", 
"stood", "stook", "stool", "stoop", "stope", "stops", "stopt", "store", "stork", "storm", "story", "stoss", 
"stoup", "stour", "stout", "stove", "stowp", "stows", "strap", "straw", "stray", "strep", "strew", "stria", 
"strip", "strop", "strow", "stroy", "strum", "strut", "stubs", "stuck", "studs", "study", "stuff", "stull", 
"stump", "stums", "stung", "stunk", "stuns", "stunt", "stupa", "stupe", "sturt", "styed", "styes", "style", 
"styli", "stymy", "suave", "subah", "subas", "suber", "sucks", "sucre", "sudds", "sudor", "sudsy", "suede", 
"suers", "suets", "suety", "sugar", "sughs", "suing", "suint", "suite", "suits", "sulci", "sulfa", "sulfo", 
"sulks", "sulky", "sully", "sulus", "sumac", "summa", "sumos", "sumps", "sunna", "sunns", "sunny", "sunup", 
"super", "supes", "supra", "surah", "sural", "suras", "surds", "surer", "surfs", "surfy", "surge", "surgy", 
"surly", "surra", "sushi", "sutra", "sutta", "swabs", "swage", "swags", "swail", "swain", "swale", "swami", 
"swamp", "swamy", "swang", "swank", "swans", "swaps", "sward", "sware", "swarf", "swarm", "swart", "swash", 
"swath", "swats", "sways", "swear", "sweat", "swede", "sweep", "sweer", "sweet", "swell", "swept", "swift", 
"swigs", "swill", "swims", "swine", "swing", "swink", "swipe", "swirl", "swish", "swiss", "swith", "swive", 
"swobs", "swoon", "swoop", "swops", "sword", "swore", "sworn", "swots", "swoun", "swung", "sycee", "syces", 
"sykes", "sylis", "sylph", "sylva", "synch", "syncs", "synod", "synth", "syphs", "syren", "syrup", "sysop", 
"tabby", "taber", "tabes", "tabid", "tabla", "table", "taboo", "tabor", "tabun", "tabus", "taces", "tacet", 
"tache", "tachs", "tacit", "tacks", "tacky", "tacos", "tacts", "taels", "taffy", "tafia", "tahrs", "taiga", 
"tails", "tains", "taint", "tajes", "taken", "taker", "takes", "takin", "talar", "talas", "talcs", "taler", 
"tales", "talks", "talky", "tally", "talon", "taluk", "talus", "tamal", "tamed", "tamer", "tames", "tamis", 
"tammy", "tamps", "tango", "tangs", "tangy", "tanka", "tanks", "tansy", "tanto", "tapas", "taped", "taper", 
"tapes", "tapir", "tapis", "tardo", "tardy", "tared", "tares", "targe", "tarns", "taroc", "tarok", "taros", 
"tarot", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasks", "tasse", "taste", "tasty", "tatar", 
"tater", "tates", "tatty", "taunt", "taupe", "tauts", "tawed", "tawer", "tawie", "tawny", "tawse", "taxed", 
"taxer", "taxes", "taxis", "taxon", "taxus", "tazza", "tazze", "teach", "teaks", "teals", "teams", "tears", 
"teary", "tease", "teats", "techy", "tecta", "teddy", "teels", "teems", "teens", "teeny", "teeth", "teffs", 
"tegua", "teiid", "teind", "telae", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", 
"tempi", "tempo", "temps", "tempt", "tench", "tends", "tenet", "tenia", "tenon", "tenor", "tense", "tenth", 
"tents", "tenty", "tepal", "tepas", "tepee", "tepid", "tepoy", "terai", "terce", "terga", "terms", "terne", 
"terns", "terra", "terry", "terse", "tesla", "testa", "tests", "testy", "teths", "tetra", "teuch", "teugh", 
"tewed", "texas", "texts", "thack", "thane", "thank", "tharm", "thaws", "thebe", "theca", "theft", "thegn", 
"thein", "their", "theme", "thens", "there", "therm", "these", "theta", "thews", "thewy", "thick", "thief", 
"thigh", "thill", "thine", "thing", "think", "thins", "thiol", "third", "thirl", "thole", "thong", "thorn", 
"thoro", "thorp", "those", "thous", "thraw", "three", "threw", "thrip", "throb", "throe", "throw", "thrum", 
"thuds", "thugs", "thuja", "thumb", "thump", "thunk", "thurl", "thuya", "thyme", "thymi", "thymy", "tiara", 
"tibia", "tical", "ticks", "tidal", "tided", "tides", "tiers", "tiffs", "tiger", "tight", "tigon", "tikes", 
"tikis", "tilak", "tilde", "tiled", "tiler", "tiles", "tills", "tilth", "tilts", "timed", "timer", "times", 
"timid", "tinct", "tinea", "tined", "tines", "tinge", "tings", "tinny", "tints", "tipis", "tippy", "tipsy", 
"tired", "tires", "tirls", "tiros", "titan", "titer", "tithe", "titis", "title", "titre", "titty", "tizzy", 
"toads", "toady", "toast", "today", "toddy", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "togue", 
"toile", "toils", "toits", "tokay", "toked", "token", "toker", "tokes", "tolan", "tolas", "toled", "toles", 
"tolls", "tolus", "tolyl", "toman", "tombs", "tomes", "tommy", "tonal", "tondi", "tondo", "toned", "toner", 
"tones", "toney", "tonga", "tongs", "tonic", "tonne", "tonus", "tools", "toons", "tooth", "toots", "topaz", 
"toped", "topee", "toper", "topes", "tophe", "tophi", "tophs", "topic", "topis", "topoi", "topos", "toque", 
"torah", "toras", "torch", "torcs", "tores", "toric", "torii", "toros", "torot", "torse", "torsi", "torsk", 
"torso", "torte", "torts", "torus", "total", "toted", "totem", "toter", "totes", "touch", "tough", "tours", 
"touse", "touts", "towed", "towel", "tower", "towie", "towns", "towny", "toxic", "toxin", "toyed", "toyer", 
"toyon", "toyos", "trace", "track", "tract", "trade", "tragi", "traik", "trail", "train", "trait", "tramp", 
"trams", "trank", "tranq", "trans", "traps", "trapt", "trash", "trass", "trave", "trawl", "trays", "tread", 
"treat", "treed", "treen", "trees", "treks", "trend", "tress", "trets", "trews", "treys", "triac", "triad", 
"trial", "tribe", "trice", "trick", "tried", "trier", "tries", "trigo", "trigs", "trike", "trill", "trims", 
"trine", "triol", "trios", "tripe", "trips", "trite", "troak", "trock", "trode", "trois", "troke", "troll", 
"tromp", "trona", "trone", "troop", "trooz", "trope", "troth", "trots", "trout", "trove", "trows", "troys", 
"truce", "truck", "trued", "truer", "trues", "trugs", "trull", "truly", "trump", "trunk", "truss", "trust", 
"truth", "tryma", "tryst", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tubae", "tubal", "tubas", "tubby", 
"tubed", "tuber", "tubes", "tucks", "tufas", "tuffs", "tufts", "tufty", "tules", "tulip", "tulle", "tumid", 
"tummy", "tumor", "tumps", "tunas", "tuned", "tuner", "tunes", "tungs", "tunic", "tunny", "tupik", "tuque", 
"turbo", "turds", "turfs", "turfy", "turks", "turns", "turps", "tushy", "tusks", "tutee", "tutor", "tutti", 
"tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twang", "twats", "tweak", "tweed", "tween", "tweet", 
"twerp", "twice", "twier", "twigs", "twill", "twine", "twins", "twiny", "twirl", "twirp", "twist", "twits", 
"twixt", "twyer", "tyees", "tyers", "tying", "tykes", "tyned", "tynes", "typal", "typed", "types", "typey", 
"typic", "typos", "typps", "tyred", "tyres", "tyros", "tythe", "tzars", "udder", "uhlan", "ukase", "ulama", 
"ulans", "ulcer", "ulema", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ultra", "ulvas", "umbel", "umber", 
"umbos", "umbra", "umiac", "umiak", "umiaq", "umped", "unais", "unapt", "unarm", "unary", "unaus", "unban", 
"unbar", "unbid", "unbox", "uncap", "uncia", "uncle", "uncos", "uncoy", "uncus", "uncut", "undee", "under", 
"undid", "undue", "unfed", "unfit", "unfix", "ungot", "unhat", "unhip", "unify", "union", "unite", "units", 
"unity", "unlay", "unled", "unlet", "unlit", "unman", "unmet", "unmew", "unmix", "unpeg", "unpen", "unpin", 
"unrig", "unrip", "unsay", "unset", "unsew", "unsex", "untie", "until", "unwed", "unwit", "unwon", "unzip", 
"upbow", "upbye", "updos", "updry", "upend", "uplit", "upped", "upper", "upset", "uraei", "urare", "urari", 
"urase", "urate", "urban", "urbia", "ureal", "ureas", "uredo", "ureic", "urged", "urger", "urges", "urial", 
"urine", "ursae", "usage", "users", "usher", "using", "usnea", "usque", "usual", "usurp", "usury", "uteri", 
"utile", "utter", "uveal", "uveas", "uvula", "vacua", "vagal", "vague", "vagus", "vails", "vairs", "vakil", 
"vales", "valet", "valid", "valor", "valse", "value", "valve", "vamps", "vanda", "vaned", "vanes", "vangs", 
"vapid", "vapor", "varas", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", 
"vatic", "vatus", "vault", "vaunt", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegan", "vegie", 
"veils", "veins", "veiny", "velar", "velds", "veldt", "velum", "venae", "venal", "vends", "venge", "venin", 
"venom", "vents", "venue", "verbs", "verge", "verse", "verso", "verst", "verts", "vertu", "verve", "vesta", 
"vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vials", "viand", "vibes", "vicar", "viced", "vices", 
"vichy", "video", "viers", "views", "viewy", "vigas", "vigil", "vigor", "viler", "villa", "villi", "vills", 
"vimen", "vinal", "vinas", "vinca", "vined", "vines", "vinic", "vinos", "vinyl", "viola", "viols", "viper", 
"viral", "vireo", "vires", "virga", "virid", "virls", "virtu", "virus", "visas", "vised", "vises", "visit", 
"visor", "vista", "vitae", "vital", "vitta", "vivas", "vivid", "vixen", "vizir", "vizor", "vocal", "voces", 
"vodka", "vodun", "vogie", "vogue", "voice", "voids", "voila", "voile", "volar", "voled", "voles", "volta", 
"volte", "volti", "volts", "volva", "vomer", "vomit", "voted", "voter", "votes", "vouch", "vowed", "vowel", 
"vower", "vroom", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vulgo", "vulva", "vying", "wacke", "wacko", 
"wacks", "wacky", "waddy", "waded", "wader", "wades", "wadis", "wafer", "waffs", "wafts", "waged", "wager", 
"wages", "wagon", "wahoo", "waifs", "wails", "wains", "wairs", "waist", "waits", "waive", "waked", "waken", 
"waker", "wakes", "waled", "waler", "wales", "walks", "walla", "walls", "wally", "waltz", "wames", "wamus", 
"wands", "waned", "wanes", "waney", "wanly", "wants", "wards", "wared", "wares", "warks", "warms", "warns", 
"warps", "warts", "warty", "washy", "wasps", "waspy", "waste", "wasts", "watap", "watch", "water", "watts", 
"waugh", "wauks", "wauls", "waved", "waver", "waves", "wavey", "wawls", "waxed", "waxen", "waxer", "waxes", 
"weald", "weals", "weans", "wears", "weary", "weave", "webby", "weber", "wecht", "wedel", "wedge", "wedgy", 
"weeds", "weedy", "weeks", "weens", "weeny", "weeps", "weepy", "weest", "weets", "wefts", "weigh", "weird", 
"weirs", "wekas", "welch", "welds", "wells", "welly", "welsh", "welts", "wench", "wends", "wenny", "wests", 
"wetly", "whack", "whale", "whamo", "whams", "whang", "whaps", "wharf", "whats", "whaup", "wheal", "wheat", 
"wheel", "wheen", "wheep", "whelk", "whelm", "whelp", "whens", "where", "whets", "whews", "wheys", "which", 
"whids", "whiff", "whigs", "while", "whims", "whine", "whins", "whiny", "whips", "whipt", "whirl", "whirr", 
"whirs", "whish", "whisk", "whist", "white", "whits", "whity", "whizz", "whole", "whomp", "whoof", "whoop", 
"whops", "whore", "whorl", "whort", "whose", "whoso", "whump", "wicks", "widdy", "widen", "wider", "wides", 
"widow", "width", "wield", "wifed", "wifes", "wifty", "wigan", "wiggy", "wight", "wilco", "wilds", "wiled", 
"wiles", "wills", "willy", "wilts", "wimps", "wimpy", "wince", "winch", "winds", "windy", "wined", "wines", 
"winey", "wings", "wingy", "winks", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", 
"wirra", "wised", "wiser", "wises", "wisha", "wisps", "wispy", "wists", "witan", "witch", "wited", "wites", 
"withe", "withy", "witty", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wodge", "woful", 
"woken", "wolds", "wolfs", "woman", "wombs", "womby", "women", "wonks", "wonky", "wonts", "woods", "woody", 
"wooed", "wooer", "woofs", "wools", "wooly", "woops", "woosh", "woozy", "words", "wordy", "works", "world", 
"worms", "wormy", "worry", "worse", "worst", "worth", "worts", "would", "wound", "woven", "wowed", "wrack", 
"wrang", "wraps", "wrapt", "wrath", "wreak", "wreck", "wrens", "wrest", "wrick", "wried", "wrier", "wries", 
"wring", "wrist", "write", "writs", "wrong", "wrote", "wroth", "wrung", "wryer", "wryly", "wurst", "wussy", 
"wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", 
"xerus", "xylan", "xylem", "xylol", "xylyl", "xysti", "xysts", "yacht", "yacks", "yaffs", "yager", "yagis", 
"yahoo", "yaird", "yamen", "yamun", "yangs", "yanks", "yapok", "yapon", "yards", "yarer", "yarns", "yauds", 
"yauld", "yaups", "yawed", "yawls", "yawns", "yawps", "yeans", "yearn", "years", "yeast", "yecch", "yechs", 
"yechy", "yeggs", "yelks", "yells", "yelps", "yenta", "yente", "yerba", "yerks", "yeses", "yetis", "yetts", 
"yeuks", "yeuky", "yield", "yikes", "yills", "yince", "yipes", "yirds", "yirrs", "yirth", "ylems", "yobbo", 
"yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoked", "yokel", 
"yokes", "yolks", "yolky", "yomim", "yonic", "yonis", "yores", "young", "yourn", "yours", "youse", "youth", 
"yowed", "yowes", "yowie", "yowls", "yuans", "yucas", "yucca", "yucch", "yucks", "yucky", "yugas", "yulan", 
"yules", "yummy", "yupon", "yurta", "yurts", "zaire", "zamia", "zanza", "zappy", "zarfs", "zaxes", "zayin", 
"zazen", "zeals", "zebec", "zebra", "zebus", "zeins", "zerks", "zeros", "zests", "zesty", "zetas", "zibet", 
"zilch", "zills", "zincs", "zincy", "zineb", "zings", "zingy", "zinky", "zippy", "ziram", "zitis", "zizit", 
"zlote", "zloty", "zoeae", "zoeal", "zoeas", "zombi", "zonal", "zoned", "zoner", "zones", "zonks", "zooid", 
"zooks", "zooms", "zoons", "zooty", "zoril", "zoris", "zowie", "zymes"
];
