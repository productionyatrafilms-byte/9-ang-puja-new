// Single source of truth for every visible text on index.html and pranam.html.
// Each entry holds the same text in english / hindi / gujrati; text.js writes
// the three <span class="english|hindi|gujrati"> into every element carrying
// data-text="<path>", and custom.js shows the chosen language.
//
// English is copied from the Figma frames. Hindi and Gujarati are NOT in Figma;
// they were written for this project — have a native reader check the Jain
// terms and the verses before release.
//
// "<br>" marks a line break from the Figma text boxes.
// Path examples: data-text="title", data-text="angs.0.left", data-text="angs.8.verse"

var SITE_DATA = {
  // Big intro words on the first screen
  intro: {
    nav: {
      english: "Nav",
      hindi: "नव",
      gujrati: "નવ",
    },
    aangi: {
      english: "AANGI",
      hindi: "अंगी",
      gujrati: "અંગી",
    },
    puja: {
      english: "Puja",
      hindi: "पूजा",
      gujrati: "પૂજા",
    },
  },

  // Title pill at the top of every statue screen
  title: {
    english: "Nav Aangi Puja",
    hindi: "नवांगी पूजा",
    gujrati: "9 અંગ  નવાંગી પૂજા",
  },

  // Box shown on the first two hand steps
  introBox: {
    english:
      "This Puja involves the worship(puja) of the Nine Angs with Chandan (Sandalwood Paste), and each Ang is associated with a particular spiritual benefit.",
    hindi:
      "इस पूजा में चंदन से नौ अंगों की पूजा की जाती है और प्रत्येक अंग एक विशेष आध्यात्मिक लाभ का सूचक है।",
    gujrati:
      "આ પૂજામાં ચંદનથી નવ અંગોની પૂજા કરવામાં આવે છે અને દરેક અંગ ચોક્કસ આધ્યાત્મિક લાભનું સૂચક છે.",
  },

  // Speech bubble next to the first hand
  followHand: {
    english: "Follow the Hand",
    hindi: "हाथ का अनुसरण करें",
    gujrati: "હાથને અનુસરો",
  },

  // The nine Angs, in the order they are worshipped.
  // left = what we gain, right = what we eliminate, verse = the doha (two lines)
  angs: [
    {
      // 1 - Toes
      left: {
        english:
          "By performing Puja on the toes (Anguthas) of a Tirthankar Parmatma, we gain the virtue of Respect.",
        hindi:
          "तीर्थंकर परमात्मा के अंगूठों पर पूजा करने से हमें विनय गुण प्राप्त होता है।",
        gujrati:
          "તીર્થંકર પરમાત્માના અંગૂઠા પર પૂજા કરવાથી આપણને વિનય ગુણ મળે છે.",
      },
      right: {
        english: "We eliminate the Disrespect within us.",
        hindi: "हमारे भीतर का अविनय दूर होता है।",
        gujrati: "આપણામાં રહેલો અવિનય દૂર થાય છે.",
      },
      verse: {
        english:
          "1. Toes (Anguthe) : Jal Bhari Samput Patrama, Yuglik Nar Poojant,<br>Rushabh Charan Anguthade, Dayak Bhav Jal Ant.",
        hindi:
          "(१) अंगूठे : जल भरी सम्पुट पत्रमां, युगलिक नर पूजंत,<br>ऋषभ चरण अंगुठडे, दायक भव जल अंत।",
        gujrati:
          "(1) અંગૂઠે : જળભરી સંપુટ પત્રમાં, યુગલિક નર પૂજંત<br>ઋષભ ચરણ અંગુઠડે, દાયક ભવજલ અંત",
      },
    },
    {
      // 2 - Knees
      left: {
        english:
          "By doing Puja on the Knees (Ghutna) of a Tirthankar Parmatma, we gain Activeness.",
        hindi:
          "तीर्थंकर परमात्मा के घुटनों पर पूजा करने से हमें सक्रियता प्राप्त होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માના ઘૂંટણ પર પૂજા કરવાથી આપણને સક્રિયતા મળે છે.",
      },
      right: {
        english: "We eliminate Laziness.",
        hindi: "आलस्य दूर होता है।",
        gujrati: "આળસ દૂર થાય છે.",
      },
      verse: {
        english:
          "2. Knees (Ghutne): Janu Bale Kaussagg Rahya, Vicharya Desh - Videsh,<br>Khada - Khada Keval Lahyu, Poojo Janu Naresh.",
        hindi:
          "(२) घुटने : जानु बले काउस्सग्ग रह्या, विचर्या देश - विदेश,<br>खड़ा - खड़ां केवल लह्युं, पूजो जानु नरेश।",
        gujrati:
          "(2) ઘૂટણે : જાનુ બળે કાઉસગ્ગ રહ્યા, વિચર્યા દેશ - વિદેશ<br>ખડા - ખડા કેવલ લહ્યું, પૂજો જાનું નરેશ.",
      },
    },
    {
      // 3 - Forearms
      left: {
        english:
          "By performing Puja on the forearms of a Tirthankar Parmatma, we gain Generosity.",
        hindi:
          "तीर्थंकर परमात्मा के अग्रबाहुओं पर पूजा करने से हमें उदारता प्राप्त होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માની અગ્રબાહુ પર પૂજા કરવાથી આપણને ઉદારતા પ્રાપ્ત થાય છે.",
      },
      right: {
        english: "This helps eliminate Lobh(Greed).",
        hindi: "उससे लोभ का नाश होता है।",
        gujrati: "તેનાથી લોભનો નાશ થાય છે.",
      },
      verse: {
        english:
          "3. Forearms: Lokantik Vachne Kari, Varsya Varsidaan,<br>Karkande Prabhu Poojana, Poojo Bhavi Bahuman.",
        hindi:
          "(३) कलाई : लोकान्तिक वचने करी, वरस्या वरसीदान,<br>करकांडे प्रभु पूजना, पूजो भवि बहुमान।",
        gujrati:
          "(3) કાંડે : લોકાંતિક વચને કરી, વરસ્યા વરસીદાન<br>કર કાંડે પ્રભુ પૂજના, પૂજો ભવિ બહુમાન",
      },
    },
    {
      // 4 - Shoulders
      left: {
        english:
          "By performing Puja on the shoulders of a Tirthankar Parmatma, we gain Humility.",
        hindi:
          "तीर्थंकर परमात्मा के कंधों पर पूजा करने से हमें नम्रता प्राप्त होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માના ખભા પર પૂજા કરવાથી આપણને નમ્રતા પ્રાપ્ત થાય છે.",
      },
      right: {
        english: "We eliminate Ahankar (Ego).",
        hindi: "अहंकार का नाश होता है।",
        gujrati: "તેનાથી અહંકારનો નાશ થાય છે.",
      },
      verse: {
        english:
          "4. Shoulders (Kandha): Maan Gayu Doy Ansh Thi, Dekhi Virya Anant,<br>Bhuja Bale Bhav Jal Tarya, Poojo Khandh Mahant.",
        hindi:
          "(४) कंधे : मान गयुं दोय अंशथी, देखी वीर्य अनंत,<br>भुजा बले भव जल तर्या, पूजो खंध महंत।",
        gujrati:
          "(4) ખબે : માન ગયું દોય અંશથી, દેખી વીર્ય અનંત<br>ભુજાબળે ભવજલ તર્યા, પૂજો ખંધ મહંત",
      },
    },
    {
      // 5 - Shikha
      left: {
        english:
          "By performing Puja on the Shikha (Crest) of a Tirthankar Parmatma, we gain Perfect knowledge.",
        hindi:
          "तीर्थंकर परमात्मा की शिखा पर पूजा करने से हमें पूर्ण ज्ञान प्राप्त होता है।",
        gujrati:
          "તીર્થંકર પરમાત્માની શિખા પર પૂજા કરવાથી આપણને પૂર્ણ જ્ઞાન પ્રાપ્ત થાય છે.",
      },
      right: {
        english: "We eliminate Imperfection.",
        hindi: "अपूर्णता का नाश होता है।",
        gujrati: "અપૂર્ણતાનો નાશ થાય છે.",
      },
      verse: {
        english:
          "5. Head (Shikha): Siddhshila Gun Ujali, Lokante Bhagvant,<br>Vasiya Tine Karan Bhavi! Shir Shikha Poojant.",
        hindi:
          "(५) शिखा : सिद्धशिला गुण उजली, लोकांते भगवंत,<br>वसिया तिणे कारण भवि! शिर शिखा पूजंत।",
        gujrati:
          "(5) મસ્તકે : સિધ્ધશિલા ગુણ ઉજળી, લોકાંતે ભગવંત<br>વસિયા તિણે  કારણ ભવિ, શિર શિખા પૂજંત",
      },
    },
    {
      // 6 - Forehead
      left: {
        english:
          "By performing Puja on the forehead of a Tirthankar Parmatma, we gain Punya.",
        hindi:
          "तीर्थंकर परमात्मा के कपाल पर पूजा करने से हमें पुण्य की प्राप्ति होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માના કપાળ પર પૂજા કરવાથી આપણને પુણ્યની પ્રાપ્તિ થાય છે.",
      },
      right: {
        english: "We eliminate Paap.",
        hindi: "पाप का नाश होता है।",
        gujrati: "પાપનો નાશ થાય છે.",
      },
      verse: {
        english:
          "6. Forehead (Kapaal): Tirthankar Pad Punya Thi, Tribhuvan Jan Sevant,<br>Tribhuvan Tilak Sama Prabhu, Bhal Tilak Jayvant.",
        hindi:
          "(६) कपाल : तीर्थंकर पद पुण्यथी, त्रिभुवन जन सेवंत,<br>त्रिभुवन तिलक समा प्रभु, भाल तिलक जयवंत।",
        gujrati:
          "(6) કપાળે : તીર્થંકર પદ પુણ્યથી, ત્રિભુવન જન સેવંત<br>ત્રિભુવન તિલક સમા પ્રભુ, ભાલ તિલક જયવંત",
      },
    },
    {
      // 7 - Throat
      left: {
        english:
          "By performing Puja on the throat of a Tirthankar Parmatma, we gain Sweet Speech.",
        hindi:
          "तीर्थंकर परमात्मा के कंठ पर पूजा करने से हमें मधुर वाणी की प्राप्ति होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માના કંઠ પર પૂજા કરવાથી આપણને મધુર વાણીની પ્રાપ્તિ થાય છે.",
      },
      right: {
        english: "We eliminate Harsh Speech.",
        hindi: "कटु वाणी का नाश होता है।",
        gujrati: "કટુ વાણીનો નાશ થાય છે.",
      },
      verse: {
        english:
          "7.Throat (Kanth): Sol Prahar Prabhu Deshna, Kanthe Vivar Vartool,<br>Madhur Dhvani Surnar Sune, Tine Gale Tilak Amul.",
        hindi:
          "(७) कंठ : सोल प्रहर प्रभु देशना, कंठे विवर वर्तूल,<br>मधुर ध्वनि सुरनर सुणे, तिणे गले तिलक अमूल।",
        gujrati:
          "(7)  કંઠે (ગળું) : સોળ પ્રહર પ્રભુ દેશના, કંઠે વિવર વર્તુલ<br>મધુર ધ્વનિ સુરનર સુણે, તિણે ગળે તિલક અમૂલ",
      },
    },
    {
      // 8 - Heart
      left: {
        english:
          "By performing Puja on the heart of a Tirthankar Parmatma, we gain Compassion.",
        hindi:
          "तीर्थंकर परमात्मा के हृदय की पूजा करने से हमें करुणा प्राप्त होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માના હૃદય પર પૂજા કરવાથી આપણને કરુણા પ્રાપ્ત થાય છે.",
      },
      right: {
        english: "We eliminate Hatred (Dwesh).",
        hindi: "द्वेष का नाश होता है।",
        gujrati: "દ્વેષનો નાશ થાય છે.",
      },
      verse: {
        english:
          "8. Heart (Hriday): Hriday Kamal Upsham Bale, Baalya Rag Ne Rosh,<br>Him Dahe Van-Khandne, Hriday Tilak Santosh.",
        hindi:
          "(८) हृदय : हृदय कमल उपशम बले, बाल्या राग ने रोष,<br>हिम दहे वन - खण्डने, हृदय तिलक संतोष।",
        gujrati:
          "(8) હૃદય :હૃદય કમળ ઉપશમ બળે, બાળ્યા રાગ ને રોષ <br>હિમ દહે વન - ખંડને, હ્રદય તિલક સંતોષ",
      },
    },
    {
      // 9 - Navel
      left: {
        english:
          "By performing Puja on the navel (Nabhi) of a Tirthankar Parmatma, we gain concentration.",
        hindi:
          "तीर्थंकर परमात्मा की नाभि पर पूजा करने से हमें एकाग्रता प्राप्त होती है।",
        gujrati:
          "તીર્થંકર પરમાત્માની નાભિ પર પૂજા કરવાથી આપણને એકાગ્રતા પ્રાપ્ત થાય છે.",
      },
      right: {
        english: "We eliminate Distraction.",
        hindi: "चंचलता का नाश होता है।",
        gujrati: "ચંચળતાનો નાશ થાય છે.",
      },
      verse: {
        english:
          "9. Naval (Nabhi): Ratnatrayi Gun Ujali, Sakal Sugun Vishram,<br>Nabhi Kamal Ni Poojana, Karta Avichal Dham.",
        hindi:
          "(९) नाभि : रत्नत्रयी गुण उजली, सकल सुगुण विश्राम,<br>नाभि कमलनी पूजना, करतां अविचल धाम।",
        gujrati:
          "(9) નાભિ : રત્નત્રયી ગુણ ઊજળી, સકલ સુગુણ વિશ્રામ<br>નાભિ કમળની પૂજના, કરતાં અવિચલ ધામ",
      },
    },
  ],

  // Concluding verse
  upsanhar: {
    english:
      "Upsanhar: Updeshak Navtatv Na, Tine Nav Ang Jinand,<br>Poojo Bahuvidh Ragshu, Kahe Shubhveer Munind.",
    hindi:
      "उपसंहार : उपदेशक नवतत्त्वना, तिणे नव अंग जिणंद<br>पूजो बहुविध रागशुं, कहे शुभवीर मुणींद।",
    gujrati:
      "ઉપદેશક નવ તત્ત્વના, તિણે નવ અંગ જિણંદ<br>પૂજો બહુવિધ રાગશું, કહે શુભવીર મુણિંદ",
  },

  // Button on the left of the last statue screen; opens the upsanhar modal
  upsanharBtn: {
    english: "Upsanhar",
    hindi: "उपसंहार",
    gujrati: "ઉપસંહાર",
  },

  // Button on the last statue screen
  pranamBtn: {
    english: "Pranam",
    hindi: "प्रणाम",
    gujrati: "પ્રણામ",
  },

  // pranam.html
  pranam: {
    title: {
      english: "Pranam",
      hindi: "प्रणाम",
      gujrati: "પ્રણામ",
    },
    homeLabel: {
      english: "HOME",
      hindi: "होम",
      gujrati: "ઘર",
    },
  },
};
