// Internationalization (i18n) Support
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.programs": "Mindfulness Programs",
        "nav.contact": "Contact",

        // Homepage
        "hero.title": "Surbhi Kakar",
        "hero.subtitle": "Yoga Teacher | Mindfulness Trainer | Data Scientist",
        "hero.intro": "Guiding children and adults toward mindful living through yoga, mindfulness training, and a balanced approach to life. Based in Amsterdam.",
        "hero.cta.programs": "Mindfulness Programs",
        "hero.cta.learn": "Learn More",

        "pillars.title": "Three Pillars of Practice",
        "pillars.subtitle": "A holistic approach to well-being and growth",
        "pillars.yoga.title": "Yoga",
        "pillars.yoga.desc": "Teaching Hatha and Vinyasa yoga with a focus on connecting body, breath, and mind. Yoga is more than physical practice—it's a path to inner awareness and balance.",
        "pillars.mindfulness.title": "Mindfulness",
        "pillars.mindfulness.desc": "Mindfulness trainer for children, helping young minds develop present-moment awareness, emotional regulation, and inner calm through playful, age-appropriate practices.",
        "pillars.data.title": "Data Science",
        "pillars.data.desc": "PhD in Computer Science with expertise in machine learning and AI. Bringing analytical thinking and research rigor to understanding patterns in data and human behavior.",

        "quote.text": "\"For me, yoga transcends the mat; it is a union with my true self. Whether engaging in a physical Warrior Pose or tapping into my inner spiritual warrior, yoga helps me connect with my emotions, thoughts, and body.\"",
        "quote.author": "— Surbhi Kakar",

        "cta.title": "Start Your Mindfulness Journey",
        "cta.text": "Whether you're seeking yoga classes, mindfulness training for your child, or simply want to learn more about living mindfully, I'm here to guide you.",
        "cta.button": "Get in Touch",

        // Footer
        "footer.navigation": "Navigation",
        "footer.connect": "Connect",
        "footer.location": "Location",
        "footer.location.text": "Amstelveen / Amsterdam<br>The Netherlands",
        "footer.copyright": "© 2026 Surbhi Kakar. All rights reserved.",

        // About Page
        "about.title": "About Me",
        "about.subtitle": "A journey of connecting body, mind, and purpose through yoga, mindfulness, and analytical thinking.",

        "about.yoga.title": "My Yoga Journey",
        "about.yoga.p1": "Growing up in India, yoga's roots were woven into my cultural fabric long before I stepped onto a mat. But it wasn't until I encountered a transformative teacher that I truly understood yoga's power. In her class, I discovered something profound: I am more than my thoughts.",
        "about.yoga.p2": "By anchoring into my body, I found joy existing in the present moment—even while my mind churned with worries and to-do lists. That discovery changed everything.",
        "about.yoga.p3": "In 2024, I completed my Yoga Teacher Training at Yoga Minds in the Netherlands, deepening both my practice and my commitment to sharing this ancient wisdom. Today, I teach Hatha and Vinyasa yoga, guiding students to discover their own connection between breath, body, and awareness—the same revelation that transformed my life.",
        "about.yoga.quote": "\"I am more than my thoughts. By anchoring into my body, I found joy existing in the present moment—even while my mind churned with worries and to-do lists.\"",

        "about.yoga.timeline.2017": "Began yoga practice in India",
        "about.yoga.timeline.2017.desc": "First steps on the yogic path",
        "about.yoga.timeline.2024": "Yoga Teacher Training",
        "about.yoga.timeline.2024.desc": "Certified at Yoga Minds, Netherlands",
        "about.yoga.timeline.present": "Teaching Hatha & Vinyasa",
        "about.yoga.timeline.present.desc": "Yoga Teacher at Yoga Minds",

        "about.mindfulness.title": "My Mindfulness Journey",
        "about.mindfulness.p1": "My path to mindfulness began in 2019 when I discovered the teachings of Vietnamese monk Thich Nhat Hanh. What resonated deeply with me was his vision of \"engaged mindfulness\"—a practice that extends beyond the meditation cushion into meaningful action in the world. His teachings inspired me to share this gift with others, particularly children.",
        "about.mindfulness.p2": "In today's world, constant busyness has become a badge of honor—a marker of success. Yet this relentless pace disconnects us from our bodies and emotions, leaving us ungrounded. I've witnessed how vital it is to understand and navigate our emotions, and how much more powerful this skill becomes when cultivated early.",
        "about.mindfulness.p3": "This vision drives my work with children today.",
        "about.mindfulness.quote": "\"Children's minds are like fresh soil. When we plant seeds of mindfulness and kindness early, they grow into adults who accept themselves fully, express themselves authentically, and create harmony within themselves and in the world around them.\"",

        "about.mindfulness.timeline.2025": "Eline Snel Certification",
        "about.mindfulness.timeline.2025.desc": "Mindfulness Children Trainer course",
        "about.mindfulness.timeline.oct2025": "Academy for Mindful Teaching",
        "about.mindfulness.timeline.oct2025.desc": "Mindfulness Trainer for Children",

        "about.credentials.title": "Professional Background",
        "about.credentials.p1": "My professional journey has been anything but linear and that's exactly what makes my approach unique. I've nurtured young minds as an Assistant Professor, earned a PhD in Computer Science, and applied analytical thinking as a Data Scientist solving complex challenges in banking and retail. I've also authored \"The Dancing Leaf,\" a contemplative work exploring nature, mindfulness, and the quiet wisdom found in observing the world around us.",
        "about.credentials.p2": "Today, these seemingly disparate paths converge in my work as a yoga teacher and mindfulness trainer in training. I'm trained with the Academy for Mindful Teaching, based on the internationally recognized Eline Snel Method (The Frog), which is already implemented in several schools in the Netherlands and abroad. As part of my training, I'm offering a supervised pilot program for children aged 5-8 and 8-11, with ongoing guidance and oversight from the Academy for Mindful Teaching.",

        "about.education.title": "Education",
        "about.education.phd": "PhD in Computer Science",
        "about.education.phd.detail": "Jamia Millia Islamia, 2017-2023",
        "about.education.mca": "MCA (Master of Computer Applications)",
        "about.education.mca.detail": "IP University, 2008-2011",
        "about.education.bsc": "BSc (Hons) Computer Science",
        "about.education.bsc.detail": "Delhi University, 2004-2007",

        "about.roles.title": "Current Roles",
        "about.roles.ds": "Data Scientist",
        "about.roles.ds.detail": "Rabobank, Dec 2022 - Present",
        "about.roles.yoga": "Yoga Teacher",
        "about.roles.yoga.detail": "Yoga Minds, Aug 2024 - Present",
        "about.roles.mindfulness": "Mindfulness Trainer for Children (in training)",
        "about.roles.mindfulness.detail": "Academy for Mindful Teaching, Oct 2025 - Present",

        "about.experience.title": "Previous Experience",
        "about.experience.ebay": "eBay",
        "about.experience.ebay.detail": "Software Development",
        "about.experience.onexillium": "OneXillium",
        "about.experience.onexillium.detail": "Technology Solutions",
        "about.experience.cvent": "Cvent",
        "about.experience.cvent.detail": "Software Development",
        "about.experience.professor": "Assistant Professor",
        "about.experience.professor.detail": "Academic Teaching",

        "about.publications.title": "Publications",
        "about.publications.subtitle": "Contributions to literature and research",
        "about.publications.book": "Book",
        "about.publications.textbook": "Textbook",
        "about.publications.research": "Research",
        "about.publications.dancing.title": "The Dancing Leaf",
        "about.publications.dancing.meta": "Hay House, 2024",
        "about.publications.dancing.desc": "A contemplative work exploring themes of nature, mindfulness, and the gentle wisdom found in observing the world around us.",
        "about.publications.java.title": "A Textbook of Java Programming",
        "about.publications.java.meta": "2017",
        "about.publications.java.desc": "A comprehensive guide to Java programming, designed for students and professionals seeking to master the language.",
        "about.publications.ieee.title": "IEEE Research Papers",
        "about.publications.ieee.meta": "Multiple publications",
        "about.publications.ieee.desc": "Academic research papers on Machine Learning and Artificial Intelligence, contributing to the advancement of computer science knowledge.",

        "about.volunteering.title": "Giving Back",
        "about.volunteering.subtitle": "Contributing to community and causes I care about",
        "about.volunteering.wakeup.title": "Wake Up Amsterdam",
        "about.volunteering.wakeup.desc": "Organizing mindfulness days for adults, fostering present-moment awareness in the community.",
        "about.volunteering.fruittuin.title": "Fruittuin Van West",
        "about.volunteering.fruittuin.desc": "Environmental volunteering, connecting with nature and supporting sustainable urban agriculture.",
        "about.volunteering.un.title": "UN Volunteers",
        "about.volunteering.un.desc": "Authored Java programming courses, making technology education accessible globally.",
        "about.volunteering.landmark.title": "Landmark",
        "about.volunteering.landmark.desc": "Provided life coaching and personal development, helping others discover their potential.",

        // Contact Page
        "contact.title": "Get in Touch",
        "contact.subtitle": "I'd love to hear from you. Whether you're interested in yoga classes, mindfulness programs for your child, or simply want to connect.",
        "contact.connect.title": "Let's Connect",
        "contact.connect.text": "I welcome inquiries about yoga classes, mindfulness training for children, speaking engagements, or professional collaborations. Feel free to reach out through any of the channels below.",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.location.text": "Amstelveen / Amsterdam<br>The Netherlands",
        "contact.linkedin": "LinkedIn",
        "contact.linkedin.link": "Connect on LinkedIn",
        "contact.yoga": "Yoga Classes",
        "contact.yoga.text": "Available through",

        "contact.services.title": "Ways to Work Together",
        "contact.services.subtitle": "Explore the different services and programs I offer",
        "contact.services.yoga.title": "Yoga Classes",
        "contact.services.yoga.desc": "Join me for Hatha or Vinyasa yoga sessions that connect breath, body, and mind. Available through Yoga Minds in the Amsterdam area.",
        "contact.services.yoga.btn": "Learn More",
        "contact.services.mindfulness.title": "Children's Mindfulness",
        "contact.services.mindfulness.desc": "8-week mindfulness programs designed for children ages 5-11, teaching present-moment awareness through playful activities.",
        "contact.services.mindfulness.btn": "View Programs",
        "contact.services.speaking.title": "Speaking & Workshops",
        "contact.services.speaking.desc": "Available for speaking engagements, corporate wellness workshops, and educational presentations on mindfulness and well-being.",
        "contact.services.speaking.btn": "Inquire",

        "contact.affiliations.title": "Affiliations",
        "contact.affiliations.subtitle": "Organizations I'm proud to be associated with",
        "contact.affiliations.yogaminds": "Yoga Minds",
        "contact.affiliations.yogaminds.desc": "Yoga Teacher Training & Classes",
        "contact.affiliations.academy": "Academy for Mindful Teaching",
        "contact.affiliations.academy.desc": "Mindfulness Trainer for Children",
        "contact.affiliations.wakeup": "Wake Up Amsterdam",
        "contact.affiliations.wakeup.desc": "Mindfulness Community",

        // Mindfulness Programs Page
        "programs.badge": "H1 2026 Programs",
        "programs.title": "Mindfulness Matters",
        "programs.subtitle": "8-week mindfulness programs designed to help children develop present-moment awareness, emotional understanding, and inner calm through playful, age-appropriate practices.",

        "programs.what.title": "What is Mindfulness for Children?",
        "programs.what.p1": "Mindfulness teaches children to be fully present in the moment, enabling them to understand their inner and outer world with an open and loving mind. Through playful activities, games, and gentle awareness practices, children learn to observe their thoughts, feelings, and body sensations without judgment.",
        "programs.what.p2": "Young children naturally live in the present moment. Mindfulness helps them maintain this gift while developing skills to navigate their inner and outer worlds—skills that will serve them throughout their lives.",
        "programs.what.p3": "Based on the renowned Eline Snel method, these programs introduce attention training in a way that's accessible and engaging for children, helping them cope with stress, improve concentration, and develop emotional resilience.",

        "programs.why.title": "Why Mindfulness Matters",
        "programs.why.1": "Improved focus and concentration in school and daily activities",
        "programs.why.2": "Better emotional regulation and understanding of feelings",
        "programs.why.3": "Reduced anxiety and stress through present-moment awareness",
        "programs.why.4": "Enhanced self-awareness and body connection",
        "programs.why.5": "Greater empathy and kindness toward self and others",
        "programs.why.6": "Tools for managing difficult emotions and situations",
        "programs.why.7": "Improved sleep quality and relaxation skills",

        "programs.our.title": "Our Programs",
        "programs.our.subtitle": "Choose the program designed for your child's age group",
        "programs.tab.5-8": "Ages 5-8",
        "programs.tab.8-11": "Ages 8-11",

        "programs.5-8.title": "Building Foundation Skills for Young Learners",
        "programs.5-8.desc": "This program introduces young children to attention training through playful activities, helping them develop body awareness and emotional understanding in age-appropriate ways with shorter activities suited for younger attention spans.",

        "programs.8-11.title": "Building Present-Moment Awareness in Young Minds",
        "programs.8-11.desc": "This program teaches children to be fully present in the moment, enabling them to understand their inner and outer world with an open and loving mind through age-appropriate exercises and deeper exploration.",

        "programs.quote": "\"The present moment is the only time we truly have. Teaching children to be here, now, is one of the greatest gifts we can offer.\"",

        "programs.support.title": "Supporting Your Child's Journey",
        "programs.support.subtitle": "Parents and teachers play an essential role in reinforcing mindfulness at home and school",

        "programs.parents.title": "How Parents Can Help",
        "programs.parents.1": "Practice mindfulness together as a family",
        "programs.parents.2": "Notice and name feelings with your child without judgment",
        "programs.parents.3": "Take 3 deep breaths together before meals or bedtime",
        "programs.parents.4": "Practice mindful eating, walking, or listening",
        "programs.parents.5": "Build in screen-free time for reflection",
        "programs.parents.6": "Create quiet moments for awareness",
        "programs.parents.7": "Model present-moment awareness yourself",

        "programs.teachers.title": "How Teachers Can Help",
        "programs.teachers.1": "Use bell signals for attention transitions",
        "programs.teachers.2": "Incorporate brief mindful moments in the day",
        "programs.teachers.3": "Celebrate kind and friendly behavior",
        "programs.teachers.4": "Support sensory awareness activities",
        "programs.teachers.5": "Recognize emotional awareness in students",
        "programs.teachers.6": "Encourage kind communication",
        "programs.teachers.7": "Support practice in daily routines",

        "programs.tips.title": "Practice Tips for Home",
        "programs.tips.younger": "For younger children (5-8):",
        "programs.tips.1": "\"Let's breathe like a sleeping bear\" or blow bubbles slowly",
        "programs.tips.2": "\"I see you're feeling angry. That's okay. Where do you feel it?\"",
        "programs.tips.3": "Slowly eat a raisin or piece of fruit, using all senses",
        "programs.tips.4": "Ring a bell to practice stopping and listening quietly",

        "programs.frog.title": "Try This at Home: Sitting Like a Frog (Ages 5-8)",
        "programs.frog.1": "Sit comfortably with feet flat on the floor",
        "programs.frog.2": "Rest hands gently on your lap",
        "programs.frog.3": "Notice your tummy moving as you breathe",
        "programs.frog.4": "Stay still and calm like a frog watching a fly",
        "programs.frog.5": "Try for just 1-2 minutes at first",

        "programs.breath.title": "Try This at Home: Breath Awareness (Ages 8-11)",
        "programs.breath.1": "Sit comfortably and close your eyes",
        "programs.breath.2": "Notice your breath moving in and out",
        "programs.breath.3": "When your mind wanders, gently bring attention back to breathing",
        "programs.breath.4": "After 3 minutes, slowly open your eyes",

        "programs.guide.title": "Your Child's Mindfulness Guide",
        "programs.guide.text": "These programs are taught by Surbhi Kakar, a mindfulness trainer in training currently enrolled in Eline Snel's renowned \"Course to become a mindfulness children trainer.\" Surbhi brings a unique perspective combining her training in mindfulness with her background as a yoga teacher and data scientist.",
        "programs.guide.academy": "Academy for Mindful Teaching",
        "programs.guide.academy.desc": "Mindfulness Trainer for Children",
        "programs.guide.snel": "Eline Snel Method",
        "programs.guide.snel.desc": "Mindfulness Children Trainer (in training)",
        "programs.guide.yogaminds": "Yoga Minds",
        "programs.guide.yogaminds.desc": "Certified Yoga Teacher",

        "programs.enroll.title": "Enroll Your Child",
        "programs.enroll.text": "Interested in enrolling your child in a Mindfulness Matters program? Get in touch to learn about upcoming sessions, schedules, and how to register.",
        "programs.enroll.btn": "Express Interest",

        // Week titles (5-8)
        "week.1.title": "The A for Attention",
        "week.1.concept": "\"Friendly, mild attention for what is here now\"",
        "week.1.desc": "Children learn to pay attention to the present moment, notice what they're doing and feeling, and discover that relaxation feels good.",
        "week.2.title": "An Expedition Through Your Body",
        "week.2.concept": "\"Living in your body means picking up signals\"",
        "week.2.desc": "Children learn that their body tells them when they're tired, happy, nervous, or sad—and how to recognize these signals.",
        "week.3.title": "Using All Five Senses",
        "week.3.concept": "\"Using senses brings you closer to actual experience\"",
        "week.3.desc": "Through the raisin exercise and \"sitting like a frog,\" children learn to observe without judgment and experience the moment directly.",
        "week.4.title": "You Can Feel Feelings",
        "week.4.concept": "\"The four basic feelings are anger, joy, fear, and sorrow\"",
        "week.4.desc": "Children discover that all feelings are normal and temporary—like weather that comes and goes.",
        "week.5.title": "Accepting Feelings",
        "week.5.concept": "\"Acceptance means recognizing what is happening\"",
        "week.5.desc": "Children learn to notice feelings in their bodies and accept them with friendly attention—without suppressing or being overwhelmed.",
        "week.6.title": "Moving Consciously",
        "week.6.concept": "\"When consciousness and body work together\"",
        "week.6.desc": "Children notice their possibilities and limitations, learning to react to their body appropriately and build self-awareness.",
        "week.7.title": "The Power of Imagination",
        "week.7.concept": "\"Using imagination enables creative dealing with fears\"",
        "week.7.desc": "Children learn to make \"pictures\" in their minds, creating safe places and dealing creatively with things they're afraid of.",
        "week.8.title.5-8": "Being Nice is Fun",
        "week.8.concept.5-8": "\"Friendliness is one of the most powerful qualities\"",
        "week.8.desc.5-8": "Children practice being complimentary and giving friendly feelings, creating a positive atmosphere around them.",

        // Week titles (8-11) - different weeks
        "week.1.title.8-11": "Observing and Focusing",
        "week.1.concept.8-11": "\"Being fully present without judgments\"",
        "week.1.desc.8-11": "Children learn to be present in the here and now, focusing attention on breath movement and starting to observe their inner world.",
        "week.2.title.8-11": "Listening to Your Body",
        "week.2.concept.8-11": "\"Your body acts as a barometer for experiences\"",
        "week.2.desc.8-11": "Children develop conscious awareness of different body areas and learn to trust body signals, building self-awareness and healthy boundaries.",
        "week.4.title.8-11": "Patience, Faith & Letting Go",
        "week.4.concept.8-11": "\"Managing desires by accepting what is\"",
        "week.4.desc.8-11": "Children learn three core principles: patience (changes cannot be forced), faith (everything changes), and letting go (release the urge to control).",
        "week.6.title.8-11": "The Wondrous World of Thoughts",
        "week.6.concept.8-11": "\"Learning to observe and manage thoughts\"",
        "week.6.desc.8-11": "In our stimulus-heavy world, children discover they can channel their mental energy more effectively and gain greater peace of mind.",
        "week.7.title.8-11": "It's Fun to Be Kind",
        "week.7.concept.8-11": "\"Kindness is like gentle rain that falls everywhere\"",
        "week.7.desc.8-11": "Children learn that kindness touches the heart directly and that awareness of unkindness is essential for creating a better world.",
        "week.8.title.8-11": "The Secret of Happiness",
        "week.8.concept.8-11": "\"Happiness comes from being fully present\"",
        "week.8.desc.8-11": "The culminating lesson teaches children to find joy in the present moment and the wonder of simplicity—in fresh bread, a poem, a sweet smile."
    },

    nl: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "Over Mij",
        "nav.programs": "Mindfulness Programma's",
        "nav.contact": "Contact",

        // Homepage
        "hero.title": "Surbhi Kakar",
        "hero.subtitle": "Yogadocent | Mindfulness Trainer | Data Scientist",
        "hero.intro": "Begeleiding van kinderen en volwassenen naar een mindful leven door yoga, mindfulness training en een evenwichtige benadering van het leven. Gevestigd in Amsterdam.",
        "hero.cta.programs": "Mindfulness Programma's",
        "hero.cta.learn": "Meer Informatie",

        "pillars.title": "Drie Pijlers van de Praktijk",
        "pillars.subtitle": "Een holistische benadering van welzijn en groei",
        "pillars.yoga.title": "Yoga",
        "pillars.yoga.desc": "Hatha en Vinyasa yoga met focus op de verbinding tussen lichaam, adem en geest. Yoga is meer dan fysieke oefening—het is een pad naar innerlijk bewustzijn en balans.",
        "pillars.mindfulness.title": "Mindfulness",
        "pillars.mindfulness.desc": "Mindfulness trainer voor kinderen, die jonge geesten helpt bij het ontwikkelen van bewustzijn in het moment, emotieregulatie en innerlijke rust door speelse, leeftijdsgeschikte oefeningen.",
        "pillars.data.title": "Data Science",
        "pillars.data.desc": "PhD in Informatica met expertise in machine learning en AI. Analytisch denken en onderzoeksnauwkeurigheid toepassen om patronen in data en menselijk gedrag te begrijpen.",

        "quote.text": "\"Voor mij overstijgt yoga de mat; het is een verbinding met mijn ware zelf. Of ik nu een fysieke Warrior Pose doe of mijn innerlijke spirituele krijger aanraak, yoga helpt me verbinden met mijn emoties, gedachten en lichaam.\"",
        "quote.author": "— Surbhi Kakar",

        "cta.title": "Begin Je Mindfulness Reis",
        "cta.text": "Of je nu op zoek bent naar yogalessen, mindfulness training voor je kind, of gewoon meer wilt leren over mindful leven, ik begeleid je graag.",
        "cta.button": "Neem Contact Op",

        // Footer
        "footer.navigation": "Navigatie",
        "footer.connect": "Contact",
        "footer.location": "Locatie",
        "footer.location.text": "Amstelveen / Amsterdam<br>Nederland",
        "footer.copyright": "© 2026 Surbhi Kakar. Alle rechten voorbehouden.",

        // About Page
        "about.title": "Over Mij",
        "about.subtitle": "Een reis van verbinding tussen lichaam, geest en doel door yoga, mindfulness en analytisch denken.",

        "about.yoga.title": "Mijn Yoga Reis",
        "about.yoga.p1": "Opgroeiend in India waren de wortels van yoga verweven met mijn culturele achtergrond lang voordat ik op een mat stapte. Maar pas toen ik een transformerende leraar ontmoette, begreep ik echt de kracht van yoga. In haar les ontdekte ik iets diepgaands: ik ben meer dan mijn gedachten.",
        "about.yoga.p2": "Door te verankeren in mijn lichaam, vond ik vreugde in het huidige moment—zelfs terwijl mijn hoofd vol zat met zorgen en to-do lijstjes. Die ontdekking veranderde alles.",
        "about.yoga.p3": "In 2024 voltooide ik mijn Yoga Docentenopleiding bij Yoga Minds in Nederland, waardoor zowel mijn beoefening als mijn toewijding om deze oude wijsheid te delen werd verdiept. Vandaag geef ik Hatha en Vinyasa yoga les, waarbij ik studenten begeleid om hun eigen verbinding tussen adem, lichaam en bewustzijn te ontdekken—dezelfde openbaring die mijn leven transformeerde.",
        "about.yoga.quote": "\"Ik ben meer dan mijn gedachten. Door te verankeren in mijn lichaam, vond ik vreugde in het huidige moment—zelfs terwijl mijn hoofd vol zat met zorgen en to-do lijstjes.\"",

        "about.yoga.timeline.2017": "Begonnen met yoga in India",
        "about.yoga.timeline.2017.desc": "Eerste stappen op het yogapad",
        "about.yoga.timeline.2024": "Yoga Docentenopleiding",
        "about.yoga.timeline.2024.desc": "Gecertificeerd bij Yoga Minds, Nederland",
        "about.yoga.timeline.present": "Hatha & Vinyasa Lessen",
        "about.yoga.timeline.present.desc": "Yogadocent bij Yoga Minds",

        "about.mindfulness.title": "Mijn Mindfulness Reis",
        "about.mindfulness.p1": "Mijn pad naar mindfulness begon in 2019 toen ik de leringen van de Vietnamese monnik Thich Nhat Hanh ontdekte. Wat diep bij me resoneerde was zijn visie op \"geëngageerde mindfulness\"—een praktijk die verder reikt dan het meditatiekussen naar betekenisvolle actie in de wereld. Zijn leringen inspireerden me om dit geschenk met anderen te delen, vooral met kinderen.",
        "about.mindfulness.p2": "In de wereld van vandaag is constante drukte een ereteken geworden—een teken van succes. Toch ontkoppelt dit meedogenloze tempo ons van ons lichaam en onze emoties, waardoor we ongegrond raken. Ik heb gezien hoe essentieel het is om onze emoties te begrijpen en te navigeren, en hoeveel krachtiger deze vaardigheid wordt wanneer deze vroeg wordt gecultiveerd.",
        "about.mindfulness.p3": "Deze visie drijft mijn werk met kinderen vandaag.",
        "about.mindfulness.quote": "\"De geesten van kinderen zijn als verse aarde. Wanneer we vroeg zaden van mindfulness en vriendelijkheid planten, groeien ze uit tot volwassenen die zichzelf volledig accepteren, zich authentiek uitdrukken en harmonie creëren in zichzelf en in de wereld om hen heen.\"",

        "about.mindfulness.timeline.2025": "Eline Snel Certificering",
        "about.mindfulness.timeline.2025.desc": "Mindfulness Kindtrainer cursus",
        "about.mindfulness.timeline.oct2025": "Academie voor Mindful Lesgeven",
        "about.mindfulness.timeline.oct2025.desc": "Mindfulness Trainer voor Kinderen",

        "about.credentials.title": "Professionele Achtergrond",
        "about.credentials.p1": "Mijn professionele reis is allesbehalve lineair geweest en dat is precies wat mijn aanpak uniek maakt. Ik heb jonge geesten gekoesterd als Universitair Docent, een PhD in Informatica behaald, en analytisch denken toegepast als Data Scientist bij het oplossen van complexe uitdagingen in het bankwezen en de retail. Ik heb ook \"The Dancing Leaf\" geschreven, een contemplatief werk dat natuur, mindfulness en de stille wijsheid verkent die te vinden is in het observeren van de wereld om ons heen.",
        "about.credentials.p2": "Vandaag komen deze schijnbaar ongelijksoortige paden samen in mijn werk als yogadocent en mindfulness trainer in opleiding. Ik word opgeleid bij de Academie voor Mindful Lesgeven, gebaseerd op de internationaal erkende Eline Snel Methode (De Kikker), die al wordt toegepast in verschillende scholen in Nederland en daarbuiten. Als onderdeel van mijn opleiding bied ik een begeleid pilotprogramma aan voor kinderen van 5-8 en 8-11 jaar, met voortdurende begeleiding en toezicht van de Academie voor Mindful Lesgeven.",

        "about.education.title": "Opleiding",
        "about.education.phd": "PhD Informatica",
        "about.education.phd.detail": "Jamia Millia Islamia, 2017-2023",
        "about.education.mca": "MCA (Master of Computer Applications)",
        "about.education.mca.detail": "IP University, 2008-2011",
        "about.education.bsc": "BSc (Hons) Informatica",
        "about.education.bsc.detail": "Delhi University, 2004-2007",

        "about.roles.title": "Huidige Functies",
        "about.roles.ds": "Data Scientist",
        "about.roles.ds.detail": "Rabobank, dec 2022 - heden",
        "about.roles.yoga": "Yogadocent",
        "about.roles.yoga.detail": "Yoga Minds, aug 2024 - heden",
        "about.roles.mindfulness": "Mindfulness Trainer voor Kinderen (in opleiding)",
        "about.roles.mindfulness.detail": "Academie voor Mindful Lesgeven, okt 2025 - heden",

        "about.experience.title": "Eerdere Ervaring",
        "about.experience.ebay": "eBay",
        "about.experience.ebay.detail": "Software Development",
        "about.experience.onexillium": "OneXillium",
        "about.experience.onexillium.detail": "Technology Solutions",
        "about.experience.cvent": "Cvent",
        "about.experience.cvent.detail": "Software Development",
        "about.experience.professor": "Universitair Docent",
        "about.experience.professor.detail": "Academisch Onderwijs",

        "about.publications.title": "Publicaties",
        "about.publications.subtitle": "Bijdragen aan literatuur en onderzoek",
        "about.publications.book": "Boek",
        "about.publications.textbook": "Leerboek",
        "about.publications.research": "Onderzoek",
        "about.publications.dancing.title": "The Dancing Leaf",
        "about.publications.dancing.meta": "Hay House, 2024",
        "about.publications.dancing.desc": "Een contemplatief werk dat thema's verkent van natuur, mindfulness en de zachte wijsheid die te vinden is in het observeren van de wereld om ons heen.",
        "about.publications.java.title": "A Textbook of Java Programming",
        "about.publications.java.meta": "2017",
        "about.publications.java.desc": "Een uitgebreide gids voor Java programmeren, ontworpen voor studenten en professionals die de taal willen beheersen.",
        "about.publications.ieee.title": "IEEE Onderzoekspapers",
        "about.publications.ieee.meta": "Meerdere publicaties",
        "about.publications.ieee.desc": "Academische onderzoekspapers over Machine Learning en Kunstmatige Intelligentie.",

        "about.volunteering.title": "Vrijwilligerswerk",
        "about.volunteering.subtitle": "Bijdragen aan gemeenschap en doelen die me na aan het hart liggen",
        "about.volunteering.wakeup.title": "Wake Up Amsterdam",
        "about.volunteering.wakeup.desc": "Organiseren van mindfulness dagen voor volwassenen, het bevorderen van bewustzijn in het moment in de gemeenschap.",
        "about.volunteering.fruittuin.title": "Fruittuin Van West",
        "about.volunteering.fruittuin.desc": "Milieuvrijwilligerswerk, verbinden met de natuur en ondersteunen van duurzame stadslandbouw.",
        "about.volunteering.un.title": "UN Volunteers",
        "about.volunteering.un.desc": "Java programmeercursussen geschreven, technologie-educatie wereldwijd toegankelijk gemaakt.",
        "about.volunteering.landmark.title": "Landmark",
        "about.volunteering.landmark.desc": "Life coaching en persoonlijke ontwikkeling gegeven, anderen geholpen hun potentieel te ontdekken.",

        // Contact Page
        "contact.title": "Neem Contact Op",
        "contact.subtitle": "Ik hoor graag van je. Of je nu geïnteresseerd bent in yogalessen, mindfulness programma's voor je kind, of gewoon wilt verbinden.",
        "contact.connect.title": "Laten We Verbinden",
        "contact.connect.text": "Ik verwelkom vragen over yogalessen, mindfulness training voor kinderen, spreekbeurten of professionele samenwerkingen. Neem gerust contact op via een van de onderstaande kanalen.",
        "contact.email": "E-mail",
        "contact.location": "Locatie",
        "contact.location.text": "Amstelveen / Amsterdam<br>Nederland",
        "contact.linkedin": "LinkedIn",
        "contact.linkedin.link": "Verbind op LinkedIn",
        "contact.yoga": "Yogalessen",
        "contact.yoga.text": "Beschikbaar via",

        "contact.services.title": "Manieren om Samen te Werken",
        "contact.services.subtitle": "Ontdek de verschillende diensten en programma's die ik aanbied",
        "contact.services.yoga.title": "Yogalessen",
        "contact.services.yoga.desc": "Doe mee met Hatha of Vinyasa yoga sessies die adem, lichaam en geest verbinden. Beschikbaar via Yoga Minds in de regio Amsterdam.",
        "contact.services.yoga.btn": "Meer Info",
        "contact.services.mindfulness.title": "Mindfulness voor Kinderen",
        "contact.services.mindfulness.desc": "8-weekse mindfulness programma's ontworpen voor kinderen van 5-11 jaar, met bewustzijn in het moment door speelse activiteiten.",
        "contact.services.mindfulness.btn": "Bekijk Programma's",
        "contact.services.speaking.title": "Spreekbeurten & Workshops",
        "contact.services.speaking.desc": "Beschikbaar voor spreekbeurten, bedrijfswellness workshops en educatieve presentaties over mindfulness en welzijn.",
        "contact.services.speaking.btn": "Informeer",

        "contact.affiliations.title": "Affiliaties",
        "contact.affiliations.subtitle": "Organisaties waar ik trots op ben om mee verbonden te zijn",
        "contact.affiliations.yogaminds": "Yoga Minds",
        "contact.affiliations.yogaminds.desc": "Yoga Docentenopleiding & Lessen",
        "contact.affiliations.academy": "Academie voor Mindful Lesgeven",
        "contact.affiliations.academy.desc": "Mindfulness Trainer voor Kinderen",
        "contact.affiliations.wakeup": "Wake Up Amsterdam",
        "contact.affiliations.wakeup.desc": "Mindfulness Gemeenschap",

        // Mindfulness Programs Page
        "programs.badge": "H1 2026 Programma's",
        "programs.title": "Mindfulness Matters",
        "programs.subtitle": "8-weekse mindfulness programma's ontworpen om kinderen te helpen bewustzijn in het moment, emotioneel begrip en innerlijke rust te ontwikkelen door speelse, leeftijdsgeschikte oefeningen.",

        "programs.what.title": "Wat is Mindfulness voor Kinderen?",
        "programs.what.p1": "Mindfulness leert kinderen volledig aanwezig te zijn in het moment, waardoor ze hun innerlijke en uiterlijke wereld kunnen begrijpen met een open en liefdevol hart. Door speelse activiteiten, spelletjes en zachte bewustzijnsoefeningen leren kinderen hun gedachten, gevoelens en lichamelijke sensaties te observeren zonder oordeel.",
        "programs.what.p2": "Jonge kinderen leven van nature in het huidige moment. Mindfulness helpt hen dit geschenk te behouden terwijl ze vaardigheden ontwikkelen om hun innerlijke en uiterlijke wereld te navigeren—vaardigheden die hen hun hele leven zullen dienen.",
        "programs.what.p3": "Gebaseerd op de gerenommeerde Eline Snel methode, introduceren deze programma's aandachtstraining op een manier die toegankelijk en boeiend is voor kinderen.",

        "programs.why.title": "Waarom Mindfulness Belangrijk Is",
        "programs.why.1": "Verbeterde focus en concentratie op school en in dagelijkse activiteiten",
        "programs.why.2": "Betere emotieregulatie en begrip van gevoelens",
        "programs.why.3": "Verminderde angst en stress door bewustzijn in het moment",
        "programs.why.4": "Verhoogd zelfbewustzijn en lichaamsverbinding",
        "programs.why.5": "Meer empathie en vriendelijkheid naar zichzelf en anderen",
        "programs.why.6": "Hulpmiddelen voor het omgaan met moeilijke emoties en situaties",
        "programs.why.7": "Verbeterde slaapkwaliteit en ontspanningsvaardigheden",

        "programs.our.title": "Onze Programma's",
        "programs.our.subtitle": "Kies het programma ontworpen voor de leeftijdsgroep van je kind",
        "programs.tab.5-8": "5-8 jaar",
        "programs.tab.8-11": "8-11 jaar",

        "programs.5-8.title": "Fundamentele Vaardigheden voor Jonge Leerlingen",
        "programs.5-8.desc": "Dit programma introduceert jonge kinderen aan aandachtstraining door speelse activiteiten, waardoor ze lichaamsbewustzijn en emotioneel begrip ontwikkelen op leeftijdsgeschikte manieren.",

        "programs.8-11.title": "Bewustzijn in het Moment voor Jonge Geesten",
        "programs.8-11.desc": "Dit programma leert kinderen volledig aanwezig te zijn in het moment, waardoor ze hun innerlijke en uiterlijke wereld kunnen begrijpen met een open en liefdevol hart.",

        "programs.quote": "\"Het huidige moment is de enige tijd die we werkelijk hebben. Kinderen leren hier en nu te zijn, is een van de grootste geschenken die we kunnen bieden.\"",

        "programs.support.title": "Ondersteuning van de Reis van Je Kind",
        "programs.support.subtitle": "Ouders en leerkrachten spelen een essentiële rol bij het versterken van mindfulness thuis en op school",

        "programs.parents.title": "Hoe Ouders Kunnen Helpen",
        "programs.parents.1": "Oefen mindfulness samen als gezin",
        "programs.parents.2": "Merk gevoelens op en benoem ze met je kind zonder oordeel",
        "programs.parents.3": "Neem samen 3 diepe ademhalingen voor maaltijden of bedtijd",
        "programs.parents.4": "Oefen mindful eten, wandelen of luisteren",
        "programs.parents.5": "Plan schermvrije tijd voor reflectie",
        "programs.parents.6": "Creëer stille momenten voor bewustzijn",
        "programs.parents.7": "Wees zelf een voorbeeld van bewustzijn in het moment",

        "programs.teachers.title": "Hoe Leerkrachten Kunnen Helpen",
        "programs.teachers.1": "Gebruik belsignalen voor aandachtsovergangen",
        "programs.teachers.2": "Neem korte mindful momenten op in de dag",
        "programs.teachers.3": "Vier vriendelijk en aardig gedrag",
        "programs.teachers.4": "Ondersteun zintuiglijke bewustzijnsactiviteiten",
        "programs.teachers.5": "Erken emotioneel bewustzijn bij leerlingen",
        "programs.teachers.6": "Moedig vriendelijke communicatie aan",
        "programs.teachers.7": "Ondersteun oefening in dagelijkse routines",

        "programs.tips.title": "Oefentips voor Thuis",
        "programs.tips.younger": "Voor jongere kinderen (5-8):",
        "programs.tips.1": "\"Laten we ademen als een slapende beer\" of langzaam bellen blazen",
        "programs.tips.2": "\"Ik zie dat je boos bent. Dat is oké. Waar voel je het?\"",
        "programs.tips.3": "Eet langzaam een rozijn of stukje fruit, met alle zintuigen",
        "programs.tips.4": "Laat een bel klinken om te oefenen met stoppen en stil luisteren",

        "programs.frog.title": "Probeer Dit Thuis: Zitten als een Kikker (5-8 jaar)",
        "programs.frog.1": "Zit comfortabel met je voeten plat op de vloer",
        "programs.frog.2": "Leg je handen zachtjes op je schoot",
        "programs.frog.3": "Merk op hoe je buik beweegt als je ademt",
        "programs.frog.4": "Blijf stil en kalm als een kikker die naar een vlieg kijkt",
        "programs.frog.5": "Probeer eerst maar 1-2 minuten",

        "programs.breath.title": "Probeer Dit Thuis: Adembewustzijn (8-11 jaar)",
        "programs.breath.1": "Zit comfortabel en sluit je ogen",
        "programs.breath.2": "Merk op hoe je adem in en uit beweegt",
        "programs.breath.3": "Als je gedachten afdwalen, breng je aandacht zachtjes terug naar je ademhaling",
        "programs.breath.4": "Open na 3 minuten langzaam je ogen",

        "programs.guide.title": "De Mindfulness Gids van Je Kind",
        "programs.guide.text": "Deze programma's worden gegeven door Surbhi Kakar, een mindfulness trainer in opleiding die momenteel de gerenommeerde cursus van Eline Snel volgt. Surbhi brengt een uniek perspectief dat haar mindfulness training combineert met haar achtergrond als yogadocent en data scientist.",
        "programs.guide.academy": "Academie voor Mindful Lesgeven",
        "programs.guide.academy.desc": "Mindfulness Trainer voor Kinderen",
        "programs.guide.snel": "Eline Snel Methode",
        "programs.guide.snel.desc": "Mindfulness Kindtrainer (in opleiding)",
        "programs.guide.yogaminds": "Yoga Minds",
        "programs.guide.yogaminds.desc": "Gecertificeerd Yogadocent",

        "programs.enroll.title": "Schrijf Je Kind In",
        "programs.enroll.text": "Geïnteresseerd in het inschrijven van je kind voor een Mindfulness Matters programma? Neem contact op voor informatie over komende sessies, roosters en inschrijving.",
        "programs.enroll.btn": "Interesse Aangeven",

        // Week titles (5-8) - Dutch
        "week.1.title": "De A van Aandacht",
        "week.1.concept": "\"Vriendelijke, milde aandacht voor wat hier nu is\"",
        "week.1.desc": "Kinderen leren aandacht te geven aan het huidige moment, op te merken wat ze doen en voelen, en ontdekken dat ontspanning goed voelt.",
        "week.2.title": "Een Expeditie Door Je Lichaam",
        "week.2.concept": "\"Leven in je lichaam betekent signalen oppikken\"",
        "week.2.desc": "Kinderen leren dat hun lichaam hen vertelt wanneer ze moe, blij, nerveus of verdrietig zijn—en hoe ze deze signalen kunnen herkennen.",
        "week.3.title": "Alle Vijf Zintuigen Gebruiken",
        "week.3.concept": "\"Zintuigen gebruiken brengt je dichter bij de werkelijke ervaring\"",
        "week.3.desc": "Door de rozijnoefening en \"zitten als een kikker\" leren kinderen observeren zonder oordeel.",
        "week.4.title": "Je Kunt Gevoelens Voelen",
        "week.4.concept": "\"De vier basisgevoelens zijn boosheid, vreugde, angst en verdriet\"",
        "week.4.desc": "Kinderen ontdekken dat alle gevoelens normaal en tijdelijk zijn—zoals weer dat komt en gaat.",
        "week.5.title": "Gevoelens Accepteren",
        "week.5.concept": "\"Acceptatie betekent herkennen wat er gebeurt\"",
        "week.5.desc": "Kinderen leren gevoelens in hun lichaam op te merken en ze met vriendelijke aandacht te accepteren.",
        "week.6.title": "Bewust Bewegen",
        "week.6.concept": "\"Als bewustzijn en lichaam samenwerken\"",
        "week.6.desc": "Kinderen merken hun mogelijkheden en beperkingen op, leren gepast te reageren op hun lichaam.",
        "week.7.title": "De Kracht van Verbeelding",
        "week.7.concept": "\"Verbeelding maakt creatief omgaan met angsten mogelijk\"",
        "week.7.desc": "Kinderen leren \"plaatjes\" te maken in hun hoofd, veilige plekken te creëren en creatief om te gaan met dingen waar ze bang voor zijn.",
        "week.8.title.5-8": "Aardig Zijn is Leuk",
        "week.8.concept.5-8": "\"Vriendelijkheid is een van de krachtigste eigenschappen\"",
        "week.8.desc.5-8": "Kinderen oefenen met complimentjes geven en vriendelijke gevoelens delen.",

        // Week titles (8-11) - Dutch
        "week.1.title.8-11": "Observeren en Focussen",
        "week.1.concept.8-11": "\"Volledig aanwezig zijn zonder oordelen\"",
        "week.1.desc.8-11": "Kinderen leren aanwezig te zijn in het hier en nu, aandacht te richten op adembeweging en hun innerlijke wereld te observeren.",
        "week.2.title.8-11": "Luisteren naar Je Lichaam",
        "week.2.concept.8-11": "\"Je lichaam is een barometer voor ervaringen\"",
        "week.2.desc.8-11": "Kinderen ontwikkelen bewust bewustzijn van verschillende lichaamsdelen en leren lichaamssignalen te vertrouwen.",
        "week.4.title.8-11": "Geduld, Vertrouwen & Loslaten",
        "week.4.concept.8-11": "\"Verlangens beheren door te accepteren wat is\"",
        "week.4.desc.8-11": "Kinderen leren drie kernprincipes: geduld, vertrouwen (alles verandert) en loslaten (de drang om te controleren loslaten).",
        "week.6.title.8-11": "De Wonderlijke Wereld van Gedachten",
        "week.6.concept.8-11": "\"Leren gedachten te observeren en beheren\"",
        "week.6.desc.8-11": "In onze prikkelrijke wereld ontdekken kinderen dat ze hun mentale energie effectiever kunnen kanaliseren.",
        "week.7.title.8-11": "Aardig Zijn is Leuk",
        "week.7.concept.8-11": "\"Vriendelijkheid is als zachte regen die overal valt\"",
        "week.7.desc.8-11": "Kinderen leren dat vriendelijkheid het hart direct raakt en dat bewustzijn van onvriendelijkheid essentieel is.",
        "week.8.title.8-11": "Het Geheim van Geluk",
        "week.8.concept.8-11": "\"Geluk komt van volledig aanwezig zijn\"",
        "week.8.desc.8-11": "De afsluitende les leert kinderen vreugde te vinden in het huidige moment en de verwondering van eenvoud."
    }
};

// Get stored language or default to English
function getLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
    updateLanguageSwitcher(lang);
}

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Update language switcher UI
function updateLanguageSwitcher(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    applyTranslations(lang);
    updateLanguageSwitcher(lang);
});
