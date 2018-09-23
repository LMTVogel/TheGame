alert ('Welkom bij de Koninklijke Marechaussee Simulator. Je speelt hier een marechaussee die op een melding afgaat met zijn maatje. Voor de mensen die niet weten wat de Koninklijke Marechaussee is. De Koninklijke Marechaussee is de militaire politie van Nederland. Zij helpen de politie als die het te druk hebben. Net zoals in deze simulatie. Veel speelplezier en maak wijze keuzes.');

var munition = prompt('Je begint je dienst. Je loopt naar de wapenkamer en gaat naar je kluisje om je dienstwapen te pakken. Je hebt ook nog kogels nodig. Hoeveel pak je er?');
if (munition > 100) {
	alert('LOL DAT KAN JE NIET MEENEMEN ');
} else if (munition >= 16 && munition < 100){
	alert('Goedzo, je hebt er precies genoeg.');
	var lopen = prompt("Hoeveel stappen moet je zetten om naar je auto te lopen. hmmmm :}");
} else {
	alert('Helaas, je hebt te weinig kogels gepakt. Als je in een vuurgevecht zou komen heb je veel te weinig kogels.');
}

if (lopen <= 32){
	alert("dat is fout");
} else {
	alert("goed gedaan");
	var zwaailicht = prompt("welke kleur zijn de zwaailichten?");
}

if (zwaailicht != "blauw"){
	alert("Hoe kun jij nou agent zijn. Je bent ontslagen.");
} else if (zwaailicht == "blauw"){
	alert("Goedzo, laten we beginnen.");
	var bureau = prompt('Je krijgt een melding van een inbraak heterdaad. Jij en je maatje razen naar buiten. Kies je de fietsen of de auto? Kies: auto of fiets.');
}

if (bureau == 'auto') {
	alert('Goedzo, met de auto ben je veel sneller ter plaatsen. Met de fietsen had het een eeuwigheid geduurd.');
	var kruispunt = prompt('Je komt op een kruispunt en het stoplicht staat op rood. Zet je je zwaailicht en sirene aan? Kies: ja of nee.');
} else {
	alert('Helaas, je komt te laat aan en de inbreker is al weer weg. Je had de auto moeten kiezen want dan ben je veel sneller.');
}

if (kruispunt == 'nee') {
	alert('Goedzo, een hulpdienst is altijd een voorrangsvoertuig dus de weggebruikers zullen je voorrang moeten geven.');
	var busbaan = prompt('Pak je de busbaan of ga je via de woonwijk? Kies: busbaan of woonwijk.');
} else {
	alert('Helaas, je had je zwaailicht en sirene niet aan moeten zetten. De inbreker hoorde jullie aankomen en is gevlucht. Een politie auto mag gewoon door roodlicht rijden zonder sirene omdat het een voorrangsvoertuig is. ');
}

if (busbaan == 'busbaan') {
	alert('Goedzo, als je door de woonwijk was gegaan dan was je veel te laat aangekomen.');
	var woning = prompt('Jullie komen aan bij de woning. Wat doe je. Splitsen jullie tacties op of gaan jullie samen de woning in? Kies: opsplitsen of samen.');
} else {
	alert('Helaas, er staat een vuilniswagen en die blokkeert de weg. Je draait om en gaat naar de inbraak, maar de inbreker is al weg want je bent veel te laat.');
}

if (woning == 'opsplitsen') {
	alert('Goedzo, in de meeste gevallen is samen naar binnen gaan veel veiliger dan opsplitsen. Als je nu samen naar binnen was gegaan was de inbreker via de achterkant van de woning gevlucht.');
	var wapen = prompt('De inbreker probeert te vluchten en je komt hem tegen in het steegje achter het huis. Hij trekt een mes. Wat doe je? Pak je je vuurwapen of pepperspray? Kies: vuurwapen of pepperspray.');
} else {
	alert('Helaas, de inbreker vlucht via de achterdeur naar buiten. Het is beter om tacties op te splitsen. In de meeste gevallen is het inderdaad veiliger om met elkaar naar binnen te gaan maar nu is de inbreker gevlucht.');
}

if (wapen == 'vuurwapen') {
	alert('Goedzo, je mag je vuurwapen altijd gebruiken als je bedrijgd word met een wapen.');
	var boeien = prompt('Je houd de inbreker onder schot en hij laat zijn wapen vallen. Je wilt hem gaan boeien. Doe je dit in je eentje of wacht je tot je maatje er bij is. Kies: wachten of zelf boeien.');
} else {
	alert('Helaas, de inbreker steekt je neer. Pepperspray heeft wat tijd nodig om in te werken en hij heeft je neergestoken. De inbreker ontsnapt.');
}

if (boeien == 'wachten') {
	alert('Goedzo, het is slim om te wachten op je maatje want als je dit alleen zou doen en je doet je wapen weer in je holster dan kan de inbreker weer het gevecht aangaan.');
	var escort = prompt('Je brengt de verdachte naar de politie auto. Je zet hem achterin de auto en jullie rijden naar het bureau om hem in te rekenen. Maar ineens komt er een gepantserde vrachtwagen voor jullie rijden en stopt jullie. Er komen gewapende mannen uit met assault rifles en er worden waarschuwingsschoten gelost. Ze roepen dat jullie de inbreker vrij moeten laten en dat jullie je wapens in moeten leveren. Jullie stappen uit. Wat doe je? Richt je je wapen op de overvallers of doe je wat ze zeggen. Kies: richt je wapen of doe wat ze zeggen.');
} else {
	alert('Helaas, je had moeten wachten op je maatje. De inbreker grijpt snel naar het mes en steekt je neer.');
}

if (escort == 'doe wat ze zeggen') {
	alert('Goedzo, er is nu nog ruimte voor onderhandeling.');
	var gijzeling = prompt('Maar helaas, de overvallers dwingen jullie om de vrachtwagen in te gaan. Maar ga je dit ook echt doen? Kies: vluchten of de vrachtwagen in gaan.');
} else {
	alert('Helaas, doordat je je wapen omhoog tilt word je neergeschoten.');
}

if (gijzeling == 'de vrachtwagen in gaan') {
	alert('Je bent de vrachtwagen in gegaan en je word vastgebonden. Ze willen losgeld van de overheid krijgen. Alles was een grote set-up. De inbraak was een val voor jou en je maatje. Maar ze zijn 1 ding vergeten. Je hebt je portofoon nog in je zak zitten. Die gaat mooi van pas komen.');
	var porto = prompt('Je kunt omroepen naar de meldkamer dat je gegijzeld word of je klikt op de SOS knop. Dan ziet de politie meteen je locatie en komt het arrestatieteam jou bevrijden. Kies: omroepen of SOS knop.');
} else {
	alert('Helaas, doordat je vlucht word je neergeschoten.');
}

if (porto == 'SOS knop') {
	alert('Geweldig denk je, het arrestatieteam is onderweg om jou te bevrijden. Ze onderscheppen de auto en de criminelen worden gepakt.');
	var spugen = prompt('Het arrestatieteam bevrijd jou en je maatje. Je loopt langs de criminelen opweg naar de ambulance om te kijken of je gewond bent. Spuug je in het gezicht van 1 van de gijzelaars of loop je er gewoon langs alsof ze niet bestaan. Kies: spugen of langslopen.');
} else {
	alert('Helaas, ze horen je praten met de meldkamer en je word doodgeschoten omdat ze weten dat ze anders de sjaak zijn.');
}

if (spugen == 'spugen') {
	alert('Geweldige keuze, die criminelen verdienen niks anders dan een dikke rochel in het gezicht en 60 jaar celstraf. JE HEBT DE SIMULATIE GEWONNEN!');
} else {
	alert('Hoe kun je nou niet in het gezicht van de criminelen spugen. Je bent af want hier ga je later spijt van krijgen.');
}