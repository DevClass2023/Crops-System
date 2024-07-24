var state_arr = new Array("Northern Province, Bombali District",
            "Northern Province, Falaba District",
            "Northern Province, Koinadugu District II",
            "Northern Province, Tonkolili District",
            "Northwestern Province, Kambia District",
            "Northwestern Province, Port Loko District",
            "Northwestern Province, Karene District",
            "Southern Province, Bo District",
            "Southern Province, Bonthe District",
            "Southern Province, Moyamba District",
            "Southern Province, Pujehun District",
            "Eastern Province, Kailahun District",
            "Eastern Province, Kenema District",
            "Eastern Province, Kono District",
			 "Uttaranchal", "West Bengal");

var s_a = new Array();
s_a[0]="";
s_a[1] = "Bombali Sebora|Makeni|Bombali Siaray|Makari|Gbanti|Paki Masabong|Mapaki|Safroko Limba|Binkolo|Biriwa Limba|Kamabai|Gbendembu|Ngowahun|Magbaiamba-Ndowahun|Hunduwa|Kamaranka|Kamaranka|Mara";
s_a[2] = "Neya|Krubola|Nyedu|Kulor-Seradu|Mongo|Bendugu|Seradu|Morifindugu|Delemandugu|Sulima|Falaba|Kabelia|Folasaba-Kamba|Dembelia Musaia|Dembelia Sikunia|Sikunia|Kamadugu-Yiraia";
s_a[3] = "Wara-Wara Bafodia|Bafodea|Kamukeh|Sengbe|Yogomaia|Wara-Wara Yagalla|Gbawuria|Diang|Kondembaia|Kasunko-Kakellay|Gbongobor-Kayaka|Thamiso|Neini|Yiffin|Kallian|Barawa-Wolley";
s_a[4] = "Dansogoia|Kalantuba|Kafe|Simiria|Kholifa Rowala|Tane|Matotoka|Kunike Gbarnga|Kholifa Mayosso-Mamuntha|Kunike Sanda|Kunike Folawusu|Yele|Mayeppoh|Poli|Masakong|Yoni Mabanta|Yoni Mamailla|Kholifa Mabang|Malal|Sambaia|Bendugu";
s_a[5] = "Magbema|Kambia|Mambolo|Mambolo|Samu|Kychum|Gbinle|Dixon|Tonko Limba|Madina|Bramaia|Kukuna|Khonimakha|Masungbala|Kawulia|Tala-Munu";
s_a[6] = "Bureh|Kasseh|Maconteh|Bake-Loko|Maforki|Port Loko|Lokomassama|Petifu|Kamasondo|Kaffu Bullom|Mahera|Marampa|Lunsar|Koya|Songo|Masimera|Masimera|Thainkatopa|Makama";
s_a[7] = "Tambakha Simibungie|Tambakha Yobangie|Gbanti|Libeisaygahun-Gombagu|Batkanu|Mafonda|Makerembay|Sanda Tendaren|Mateboi|Sanda Magbolontor|Sendugu|Sella Limba|Kamakwie|Sanda Loko|Kamalo|Buya|Romende|Safroko|Dibia";
s_a[8] = "Badja|Ngelehun|Bagbe|Ngarlu|Bagbo|Jimmi|Baoma|Baoma|Bumpe|Bumpe|Gbo|Gbo|Jaiama|Bongor|Kakua|Kakua|Komboya|Njala|Lugbu|Sumbuya|Niawa-Lenga|Nengbema|Selenga|Dambala|Tikonko|Tikonko|Valunia|Mongere|Wonde|Gboyama";
s_a[9] = "Bendu Cha|Bendu|Bum|Madina|Dema|Tissana|Imperi|Gbangbama|Jong|Mattru|Kpanda-Kemo|Motuo|Kwamebai Krim|Benduma|Nongoba Bullom|Gbap|Sittia|Yonni|Sogbini|Tihun|Yawbeko|Talia";
s_a[10] = "Bagruwa|Sembehun|Banta|Gbangbantoke|Banta-Mokele|Mokelle|Bumpe|Rotifunk|Dasse|Mano|Fakunya|Gandohun|Kaiyamba|Moyamba|Kagboro|Shenge|Kamajei|Senehun|Kongboro|Bauya|Kori|Taiama|Kowa|Njama|Ribbi|Bradford|Timdel|Bomotoke";
s_a[11] = "Barri|Potoru|Gallines|Perri|Kpaka|Massam|Makpele|Zimmi|Malen|Sahn|Mano Sakrim|Gbonjema|Kpanga|Pujehun|Kabonde|Kpanga-Krim|Gobaru|Peje|Futta|Soro Gbema|Fairo|Sowa|Bandajuma|Yekemo-Kpukumu-Krim|Karlu";
s_a[12] = "Dea|Baiwala|Njaluahun|Segbwema|Kissi Kama|Dea|Kissi Teng|Kangama|Kissi Tongi|Buedu|Jawei|Daru|Luawa|Kailahun|Malema|Jojoima|Mandu|Mobai|Peje West|Bunumbu|Penguia|Sandaru|Upper Bambara|Pendembu|Kpeje Bongre|Manowa|Yawei|Bandajuma";
s_a[13] = "Dama|Giema|Dodo|Dodo|Gaura|Joru|Gorama Mende|Tungie|Kandu Leppiama|Gbado|Koya|Baoma|Langrama|Ya Baima|Lower Bambara|Panguma|Malegohun|Sembehun|Niawa|Sundumei|Nomo|Faama|Nongowa|Kenema|Simbaru|Boajibu|Small Bo|Blama|Tunkia|Gorahun|Wando|Faala";
s_a[14] = "Tankoro|New Sembehun|Gbense|Yardu|Kama'a|Tombodu|Nimikoro|Njaiama|Nimiyama|Sewafe|Sandor|Kayima|Toli|Kondewakor|Gbane|Ngandorhun|Lei|Siama|Soa|Kainkordu|Fiama|Njagbwema|Gorama Kono|Kangama|Mafindor|Kamiendor|Gbane Kandor|Koardu";
s_a[15]=" Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island | Beadonabad | Betapur | Bindraban | Bonington | Brookesabad | Cadell Point | Calicut | Chetamale | Cinque Islands | Defence Island | Digilpur | Dolyganj | Flat Island | Geinyale | Great Coco Island | Haddo | Havelock Island | Henry Lawrence Island | Herbertabad | Hobdaypur | Ilichar | Ingoie | Inteview Island | Jangli Ghat | Jhon Lawrence Island | Karen | Kartara | KYD Islannd | Landfall Island | Little Andmand | Little Coco Island | Long Island | Maimyo | Malappuram | Manglutan | Manpur | Mitha Khari | Neill Island | Nicobar Island | North Brother Island | North Passage Island | North Sentinel Island | Nothen Reef Island | Outram Island | Pahlagaon | Palalankwe | Passage Island | Phaiapong | Phoenix Island | Port Blair | Preparis Island | Protheroepur | Rangachang | Rongat | Rutland Island | Sabari | Saddle Peak | Shadipur | Smith Island | Sound Island | South Sentinel Island | Spike Island | Tarmugli Island | Taylerabad | Titaije | Toibalawe | Tusonabad | West Island | Wimberleyganj | Yadita";


function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
