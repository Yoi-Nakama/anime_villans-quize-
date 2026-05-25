/* ================================================================
   ANIME VILLAIN QUIZ — COMPLETE SCRIPT
   100 Villains from PDF · Dynamic 10-Question Engine
   ================================================================ */

'use strict';

// ─── VILLAIN DATABASE (from PDF) ─────────────────────────────────
const VILLAINS = [
  {
    id: 'madara', name: 'Madara Uchiha', series: 'Naruto / Shippuden',
    score: 107,
    quote: "Wake up to reality. Nothing ever goes as planned in this accursed world.",
    analysis: "You are the architect of tragedy — a visionary who watched the world betray everything you loved and responded not with despair, but with a plan so enormous it rewrote history. Like Madara, you operate decades ahead of others, weaving manipulation and raw power into a single inescapable destiny. Your pain is ancient and your ambition divine.",
    strengths: ["Strategic genius decades ahead of enemies", "Unmatched battlefield dominance", "Unwavering ideological conviction"],
    weaknesses: ["Loneliness buried under arrogance", "Cannot accept a world that doesn't match your vision", "Underestimates the power of human bonds"],
    soundtrack: "Madara's Theme – Hiroshi Kitadani",
    aura: 'rgba(139,0,0,0.3)',
    forms: [
      { name: "BASE FORM", desc: "The legendary Uchiha warrior whose name alone stopped wars." },
      { name: "PERFECT SUSANOO", desc: "Planetary devastation incarnate — mountains cleaved with a swing." },
      { name: "TEN-TAILS JINCHURIKI", desc: "A god walking the earth, rewriting reality at will." }
    ],
    minScore: 60, maxScore: 140
  },
  {
    id: 'aizen', name: 'Sosuke Aizen', series: 'Bleach',
    score: 216,
    quote: "Admiration is the emotion furthest from understanding.",
    analysis: "You have always been the smartest person in the room — and you've always known it. Like Aizen, you constructed elaborate realities around those you manipulated, never letting anyone see the truth until it was far too late. You don't fight battles; you end them before they begin. Beneath the calm composure lives a boundless ambition that cannot be contained by ordinary existence.",
    strengths: ["Peerless psychological manipulation", "Plans within plans within plans", "Unreadable, perfectly composed demeanor"],
    weaknesses: ["Crushing loneliness from existing above others", "Underestimates the unpredictable", "Superiority complex blinds to genuine connection"],
    soundtrack: "Treachery – Shiro Sagisu",
    aura: 'rgba(74,0,128,0.35)',
    forms: [
      { name: "SHINIGAMI CAPTAIN", desc: "The perfect mask — trusted, admired, worshipped." },
      { name: "HOGYOKU MERGED", desc: "Power beyond definition, transcending Soul Society's laws." },
      { name: "TRANSCENDENT BEING", desc: "A being whose very existence defies the boundaries of life and death." }
    ],
    minScore: 141, maxScore: 230
  },
  {
    id: 'johan', name: 'Johan Liebert', series: 'Monster',
    score: 205,
    quote: "There is no such thing as truth in this world. That is the reality.",
    analysis: "You understand people at a level that frightens even you. Like Johan, you see the void at the center of every human being — the secret terror they hide behind smiles — and you could exploit it effortlessly. You don't desire power or revenge. You desire something older and more absolute: the perfect end. Your darkness doesn't rage; it whispers.",
    strengths: ["Godlike understanding of human psychology", "Absolute charisma that dismantles all resistance", "Patient, methodical, inevitable"],
    weaknesses: ["Nihilism that destroys the self alongside enemies", "No authentic human connection", "The void within that can never be filled"],
    soundtrack: "For the Love of Life – David Sylvian",
    aura: 'rgba(20,10,40,0.5)',
    forms: [
      { name: "THE PERFECT CHILD", desc: "Angelic face concealing the ultimate monster within." },
      { name: "THE MANIPULATOR", desc: "Words become weapons that destroy minds without a trace." },
      { name: "THE VOID", desc: "A presence so nihilistic it erases meaning from existence itself." }
    ],
    minScore: 170, maxScore: 260
  },
  {
    id: 'frieza', name: 'Frieza', series: 'Dragon Ball Z',
    score: 189,
    quote: "I am the strongest being in the universe. It is my destiny to rule.",
    analysis: "You were born believing the universe owed you dominion, and you've never questioned that belief. Like Frieza, you combine aristocratic contempt with explosive violence, maintaining perfect composure until pride demands otherwise. Cruelty is not a tool for you — it's an art form. You don't hate your enemies; you consider them insects beneath your notice.",
    strengths: ["Overwhelming raw power paired with tactical brilliance", "Absolute self-confidence", "Never underestimates the need to evolve"],
    weaknesses: ["Pathological pride leads to catastrophic miscalculations", "Cannot comprehend those who fight for others", "Underestimates opponents driven by love"],
    soundtrack: "Frieza's Theme – Shunsuke Kikuchi",
    aura: 'rgba(180,0,180,0.3)',
    forms: [
      { name: "SUPPRESSED FORM", desc: "The aristocrat who treats genocide as a business transaction." },
      { name: "FINAL FORM", desc: "Sleek, terrifying perfection — the universe's most feared being." },
      { name: "GOLDEN FRIEZA", desc: "Evolution itself forced to obey his indomitable will." }
    ],
    minScore: 141, maxScore: 220
  },
  {
    id: 'meruem', name: 'Meruem', series: 'Hunter × Hunter',
    score: 136,
    quote: "I am the apex of evolution. And yet... you have taught me what it means to be human.",
    analysis: "You were born believing yourself beyond human emotion — pure intellect, pure dominance. But somewhere between conquest and connection, something cracked open inside you. Like Meruem, your greatest strength and deepest tragedy is that you're capable of genuine transformation. The question is whether the world will survive long enough to witness it.",
    strengths: ["Unmatched intellect and adaptive power", "Strategic mastery across all disciplines", "Capable of genuine emotional evolution"],
    weaknesses: ["Underestimates the value of compassion until too late", "Existential loneliness from being without equal", "Power creates isolation that distorts reality"],
    soundtrack: "Rage × and × Cries – Yoshihisa Hirano",
    aura: 'rgba(80,0,100,0.3)',
    forms: [
      { name: "BORN KING", desc: "The most powerful Chimera Ant, born to dominate all life." },
      { name: "POST-BOMB", desc: "Transformed by nuclear force into something even more terrifying." },
      { name: "TRANSCENDENT", desc: "An existence that briefly chose love over conquest — and lost everything." }
    ],
    minScore: 80, maxScore: 160
  },
  {
    id: 'light', name: 'Light Yagami', series: 'Death Note',
    score: 191,
    quote: "I am justice. I protect the innocent and punish the wicked.",
    analysis: "You started with ideals pure enough to inspire gods — and ended as the very monster you swore to destroy. Like Light, your intellect is a double-edged blade: sharp enough to reshape the world, sharp enough to cut yourself. The tragedy isn't that you chose evil; it's that you genuinely believed you were choosing good. That self-deception is your most human quality.",
    strengths: ["Extraordinary strategic foresight and deduction", "Absolute commitment to ideological vision", "Ability to perform normalcy while planning devastation"],
    weaknesses: ["God complex that corrodes empathy", "Hubris that creates fatal blind spots", "The need to be seen as righteous even by himself"],
    soundtrack: "Death Note Theme – Yoshihisa Hirano",
    aura: 'rgba(40,40,140,0.3)',
    forms: [
      { name: "STUDENT PRODIGY", desc: "The perfect son who discovers the power of a god." },
      { name: "KIRA", desc: "The self-declared god of a new world, ruling through fear and death." },
      { name: "CORNERED GENIUS", desc: "Stripped of the notebook, forced to rely on raw human brilliance." }
    ],
    minScore: 141, maxScore: 230
  },
  {
    id: 'dio', name: 'Dio Brando', series: 'JoJo\'s Bizarre Adventure',
    score: 170,
    quote: "It was I, DIO! — everything in this world was created to serve me!",
    analysis: "You clawed your way up from nothing and decided the world would kneel. Like Dio, you possess a magnetism so powerful it bends reality — people follow you not out of respect but out of something older and darker. You've never forgotten what it felt like to be powerless, and you've sworn with every fiber of your being that you never will be again.",
    strengths: ["Overwhelming charisma that recruits fanatical loyalty", "Relentless will to dominate every situation", "Cunning that matches raw supernatural power"],
    weaknesses: ["Pride that demands performances of supremacy", "Fear of weakness paradoxically creates vulnerabilities", "Inability to understand love as anything but weakness"],
    soundtrack: "THE WORLD – Coda",
    aura: 'rgba(200,150,0,0.25)',
    forms: [
      { name: "HUMAN DIO", desc: "A cunning manipulator who wore friendship like a mask." },
      { name: "VAMPIRE DIO", desc: "Immortal and predatory, with mastery over the undead." },
      { name: "THE WORLD DIO", desc: "A stand user who stopped time itself at the peak of his power." }
    ],
    minScore: 120, maxScore: 200
  },
  {
    id: 'sukuna', name: 'Ryomen Sukuna', series: 'Jujutsu Kaisen',
    score: 262,
    quote: "Do not waste my time with your existence. You are all entertainment.",
    analysis: "Pure, absolute, unapologetic power. Like Sukuna, you don't hate humanity — you simply find it beneath consideration. Every interaction is entertainment, every battle a momentary diversion from the crushing boredom of supreme existence. You are not evil in any ideological sense; you are simply the most powerful thing in the room and you've never bothered to pretend otherwise.",
    strengths: ["Unrivaled cursed technique mastery", "Completely free from moral hesitation", "Strategic brilliance hidden behind apparent carelessness"],
    weaknesses: ["Genuine connection is incomprehensible to you", "Boredom drives reckless decisions", "Cannot understand why others fight for each other"],
    soundtrack: "Sakuna's Rampage – Hiroaki Tsutsumi",
    aura: 'rgba(192,18,42,0.4)',
    forms: [
      { name: "PARTIAL VESSEL", desc: "Finger by finger, the King of Curses reclaims his throne." },
      { name: "FULL INCARNATION", desc: "The complete horror of the greatest cursed spirit in history." },
      { name: "DISMANTLE / CLEAVE", desc: "Reality carved apart by techniques that obliterate all resistance." }
    ],
    minScore: 200, maxScore: 300
  },
  {
    id: 'griffith', name: 'Griffith', series: 'Berserk',
    score: 103,
    quote: "A dream... It's something you do for yourself alone.",
    analysis: "You had a dream so beautiful it justified everything — every sacrifice, every betrayal, every moment where you stepped over someone who loved you. Like Griffith, you are genuinely magnetic, genuinely brilliant, and genuinely capable of inspiring others to die for you. The tragedy is that the dream was real. You just forgot to remain human while pursuing it.",
    strengths: ["Visionary leadership and magnetic charisma", "Willpower that survives even the unimaginable", "Tactical genius on and off the battlefield"],
    weaknesses: ["Dream consumes capacity for genuine love", "Cannot tolerate dependence on another person", "The void where conscience used to be"],
    soundtrack: "Guts' Theme / Forces – Susumu Hirasawa",
    aura: 'rgba(200,180,255,0.2)',
    forms: [
      { name: "THE WHITE FALCON", desc: "A commander of unmatched brilliance who inspired absolute devotion." },
      { name: "THE TORTURED", desc: "Broken, stripped of everything — but the dream never died." },
      { name: "FEMTO / HAWK OF DARKNESS", desc: "The God Hand member who sacrificed humanity for transcendence." }
    ],
    minScore: 60, maxScore: 140
  },
  {
    id: 'makima', name: 'Makima', series: 'Chainsaw Man',
    score: 184,
    quote: "I simply want a world where people and devils coexist... under control.",
    analysis: "You understand that control is the highest form of love — at least, that's what you tell yourself. Like Makima, you draw people in with warmth and vision, then bind them so completely they can't imagine existing without you. The frightening truth is that your desire isn't malice; it's a consuming need to possess everything you love so completely that nothing can ever be taken from you again.",
    strengths: ["Absolute psychological control over others", "Near-invulnerable through unique power redistribution", "Masks terrifying power behind warmth and reason"],
    weaknesses: ["Cannot experience genuine connection, only control", "The very love she craves is destroyed by her nature", "Loneliness so profound it warps all perception"],
    soundtrack: "Beast – Chainsaw Man OST",
    aura: 'rgba(139,0,0,0.35)',
    forms: [
      { name: "CONTROL DEVIL", desc: "Domination and subjugation embodied — all bow inevitably." },
      { name: "FULL POWER", desc: "An ancient fear that has always existed and always will." },
      { name: "NAYUTA", desc: "A new beginning carrying the same fundamental longing for connection." }
    ],
    minScore: 141, maxScore: 220
  },
  {
    id: 'pain', name: 'Pain (Nagato)', series: 'Naruto Shippuden',
    score: 160,
    quote: "Just by living, people hurt others without even realizing it.",
    analysis: "You watched the world devour everything you loved and concluded that suffering is the only universal teacher. Like Pain, you carry wounds so deep they became a philosophy. You don't seek revenge out of selfishness — you genuinely believe that only through shared pain can peace be achieved. The tragedy is that you're not entirely wrong.",
    strengths: ["Philosophical conviction that gives purpose to suffering", "God-level control over multiple powerful bodies", "Ability to inspire fanatical devotion through pain"],
    weaknesses: ["Pain as a worldview is ultimately self-defeating", "Isolation from genuinely connecting with others", "Idealism that has calcified into destructive dogma"],
    soundtrack: "Girei – Naruto Shippuden OST",
    aura: 'rgba(100,0,150,0.3)',
    forms: [
      { name: "SIX PATHS OF PAIN", desc: "Six bodies, one devastating will, god-like destructive capability." },
      { name: "DEVA PATH", desc: "The power of attraction and repulsion — Shinra Tensei incarnate." },
      { name: "RINNE REBIRTH", desc: "The final act of a broken idealist choosing life over revenge." }
    ],
    minScore: 100, maxScore: 180
  },
  {
    id: 'eren', name: 'Eren Yeager', series: 'Attack on Titan',
    score: 43,
    quote: "I don't have time to worry if it's right or wrong. You can't do anything if you're not free.",
    analysis: "You began as the most relatable hero — passionate, protective, furiously alive. And somewhere between the walls and the ocean, freedom became your cage and liberation became genocide. Like Eren, your most terrifying quality is not cruelty but conviction: you believe, with your entire soul, that what you're doing is necessary. That certainty is what makes you unforgettable.",
    strengths: ["Absolute conviction that cannot be broken by logic", "Titan powers of unmatched scale and variety", "Strategic planning across years and timelines"],
    weaknesses: ["Love and friendship ultimately couldn't survive the ideology", "Freedom became the very thing that enslaved him", "The boy who wanted to protect became what he feared"],
    soundtrack: "Attack on Titan Final Season OST – Hiroyuki Sawano",
    aura: 'rgba(60,80,160,0.3)',
    forms: [
      { name: "SURVEY CORPS SOLDIER", desc: "A boy with more rage than any wall could contain." },
      { name: "WAR HAMMER TITAN", desc: "Power drawn from the crystallized inheritance of kings." },
      { name: "FOUNDING TITAN", desc: "A skeletal god rewriting the fate of the entire world." }
    ],
    minScore: 30, maxScore: 80
  },
  {
    id: 'hisoka', name: 'Hisoka', series: 'Hunter × Hunter',
    score: 243,
    quote: "My greatest pleasure comes not from fighting weak enemies, but from watching strong ones crumble.",
    analysis: "You are an aesthete of violence — you collect powerful opponents the way others collect art, savoring their potential before the inevitable clash. Like Hisoka, you operate on a plane of desire so pure it's almost beautiful, with no ideological agenda other than the perfect duel. The world is your stage and everyone in it exists to either entertain you or become worthy of your attention.",
    strengths: ["Reading opponents at a psychological level", "Bungee Gum mastery that defies conventional combat logic", "Patience to wait years for the perfect moment"],
    weaknesses: ["No loyalty beyond personal entertainment", "Obsessive desires override all strategic calculation", "Fundamentally incapable of forming genuine bonds"],
    soundtrack: "Hisoka's Theme – Yoshihisa Hirano",
    aura: 'rgba(255,20,80,0.3)',
    forms: [
      { name: "THE JESTER", desc: "A smiling face that hides an appetite for destruction." },
      { name: "BUNGEE GUM MASTER", desc: "Rubber and gum — simple concepts wielded with genius cruelty." },
      { name: "RESURRECTED", desc: "Even death couldn't contain his hunger for worthy opponents." }
    ],
    minScore: 180, maxScore: 280
  },
  {
    id: 'blackbeard', name: 'Marshall D. Teach (Blackbeard)', series: 'One Piece',
    score: 229,
    quote: "Fools who don't respect the past are destined to repeat it.",
    analysis: "You waited in the shadows for decades, dismissed and overlooked, while you built a plan so patient and cunning that when you finally moved, the world hadn't seen it coming. Like Blackbeard, you understand that the greatest power comes not from strength alone but from the audacity to seize what no one else dared to take. Destiny doesn't choose you — you choose destiny.",
    strengths: ["Unprecedented ability to wield two Devil Fruits", "Strategic patience measured in decades", "Exploits the dreams and efforts of others"],
    weaknesses: ["Cowardice when facing opponents at true strength", "Depends on opportunism rather than decisive action", "Cannot inspire genuine loyalty, only fear and self-interest"],
    soundtrack: "Blackbeard's Theme – Kouhei Tanaka",
    aura: 'rgba(30,30,80,0.4)',
    forms: [
      { name: "LURKING SHADOWS", desc: "A crewmate for decades, hidden, waiting, calculating." },
      { name: "DARK-DARK FRUIT", desc: "The power of gravity and absolute darkness embodied." },
      { name: "DUAL FRUIT EMPEROR", desc: "The impossible made real — the most feared name on the seas." }
    ],
    minScore: 170, maxScore: 270
  },
  {
    id: 'muzan', name: 'Muzan Kibutsuji', series: 'Demon Slayer',
    score: 158,
    quote: "No one in this world can surpass me. No one can ever defeat me.",
    analysis: "You are terror refined to its purest essence — a being who erased everything human in themselves in pursuit of absolute immortality. Like Muzan, you do not tolerate weakness in yourself or others; it is a disease to be cut out. The price of that perfection is that nothing in the world can touch you, move you, or matter to you. You are invincible and utterly alone.",
    strengths: ["Near-complete biological immortality", "Control over an entire army of devoted monsters", "Evolutionary adaptability — changes form at will"],
    weaknesses: ["Pathological fear of death beneath the supremacy", "Loneliness that exists beneath contempt for all life", "Pride that cannot acknowledge any form of vulnerability"],
    soundtrack: "Kamado Tanjirou no Uta – Go Shiina",
    aura: 'rgba(120,0,60,0.35)',
    forms: [
      { name: "HUMAN DISGUISE", desc: "A perfect mask of normalcy hiding absolute evil." },
      { name: "TRANSFORMED DEMON", desc: "The first and most powerful demon, terror made flesh." },
      { name: "MERGED FORM", desc: "Absorbing all twelve Kizuki into a final desperate awakening." }
    ],
    minScore: 100, maxScore: 200
  },
  {
    id: 'orochimaru', name: 'Orochimaru', series: 'Naruto',
    score: 140,
    quote: "When there is a true desire in the heart and that desire is strong — it is impossible to stop.",
    analysis: "You have always wanted to know everything. Every forbidden technique, every hidden truth, every secret the world tries to bury. Like Orochimaru, your curiosity transcends morality — not because you're evil, but because curiosity operates on a different scale than good and evil. The bodies you've shed, the lives you've disrupted — all acceptable costs for the eternal pursuit of knowledge.",
    strengths: ["Encyclopedic mastery of forbidden jutsu and scientific sorcery", "Biological immortality through body transference", "Patience and planning across entire human lifetimes"],
    weaknesses: ["Loneliness of a being who has shed every human relationship", "Knowledge pursued without wisdom becomes monstrous", "Cannot fathom why bonds would matter more than power"],
    soundtrack: "Orochimaru's Theme – Toshiro Masuda",
    aura: 'rgba(60,100,20,0.3)',
    forms: [
      { name: "SANNIN PRODIGY", desc: "Konoha's greatest genius before ambition devoured restraint." },
      { name: "IMMORTAL SCIENTIST", desc: "A serpentine immortal obsessed with unlocking all jutsu." },
      { name: "REBORN CURIOSITY", desc: "Reincarnated with the same hunger, now more patient than ever." }
    ],
    minScore: 90, maxScore: 170
  },
  {
    id: 'lelouch', name: 'Lelouch vi Britannia', series: 'Code Geass',
    score: 46,
    quote: "The only ones who should kill are those who are prepared to be killed.",
    analysis: "You are the chess master who sacrificed his own king — yourself — to achieve a peace no one else could architect. Like Lelouch, your darkness was never for yourself; it was always a tool wielded in service of something too precious to name without breaking. You wore villainy like armor and walked into legend wearing a monster's mask. No one will ever fully understand what that cost you.",
    strengths: ["Geass: the power to command absolute obedience once", "Strategic genius that anticipates opponents multiple moves ahead", "Willingness to sacrifice reputation, relationships, and self for the goal"],
    weaknesses: ["Carries guilt that cannot be externalized or shared", "Isolation from genuine connection to protect others from his choices", "The plan requires perfection — any crack is catastrophic"],
    soundtrack: "Colors – Flow",
    aura: 'rgba(80,0,160,0.25)',
    forms: [
      { name: "STUDENT PRINCE", desc: "A disgraced royal hiding genius behind an ordinary face." },
      { name: "ZERO", desc: "The masked liberator who became a legend and a symbol." },
      { name: "99TH EMPEROR", desc: "A tyrant by design, engineering his own assassination for world peace." }
    ],
    minScore: 30, maxScore: 80
  },
  {
    id: 'chrollo', name: 'Chrollo Lucilfer', series: 'Hunter × Hunter',
    score: 236,
    quote: "I don't steal out of necessity. I steal out of love.",
    analysis: "You lead not by demanding obedience but by becoming someone worth following into the abyss. Like Chrollo, you possess an otherworldly calm that reads as enlightenment — you've processed the darkness of existence and arrived at a kind of serene devastation. You steal not only possessions but abilities, identities, futures. Everything belongs to you because you've decided it does.",
    strengths: ["Nen ability to steal and wield others' powers", "Philosophical composure that cannot be rattled", "Loyalty that goes both ways — the Phantom Troupe is genuine"],
    weaknesses: ["Detachment that prevents true intimacy even with the Troupe", "Cannot use his own ability freely due to restrictions", "Nihilism masquerading as spirituality"],
    soundtrack: "Phantom Troupe Theme – Yoshihisa Hirano",
    aura: 'rgba(30,10,60,0.4)',
    forms: [
      { name: "TROUPE SPIDER", desc: "The spider's head — calm, charismatic, and utterly dangerous." },
      { name: "SKILL HUNTER", desc: "A living library of stolen abilities wielded with perfect efficiency." },
      { name: "FREED SPIDER", desc: "Nen restriction lifted — the full horror of what he can become." }
    ],
    minScore: 180, maxScore: 270
  },
  {
    id: 'ainz', name: 'Ainz Ooal Gown', series: 'Overlord',
    score: 185,
    quote: "There is no greater folly than to throw away your life for something as trivial as pride.",
    analysis: "You came into godhood by accident and responded to it with the performance of absolute confidence while internally improvising constantly. Like Ainz, your greatest power is not your magic — it's that everyone around you projects genius onto your every action. You are terrifying because you are genuinely dangerous, and also because no one, including yourself, knows exactly where your limits are.",
    strengths: ["Overwhelming magical power spanning every school", "Commands absolute loyalty from supremely powerful beings", "Passive emotional suppression — undead nature prevents panic"],
    weaknesses: ["Imposter syndrome beneath the omnipotent facade", "Decisions made to maintain appearances rather than true intent", "Increasingly loses touch with the humanity he once had"],
    soundtrack: "Overlord Main Theme – Shuji Katayama",
    aura: 'rgba(80,0,120,0.3)',
    forms: [
      { name: "SATORU SUZUKI", desc: "A lonely salaryman who found belonging in a guild." },
      { name: "LICH OVERLORD", desc: "The skeletal god-king of Nazarick who rewrites the world's rules." },
      { name: "TRUE UNDEAD", desc: "A being whose humanity erodes with every passing day of godhood." }
    ],
    minScore: 130, maxScore: 220
  },
  {
    id: 'gendo', name: 'Gendo Ikari', series: 'Neon Genesis Evangelion',
    score: 172,
    quote: "I have no need for a child who can't follow orders.",
    analysis: "You built walls so impenetrable around your grief that the people who loved you most became strangers. Like Gendo, every terrible thing you've done traces back to a loss so unbearable you chose to rebuild reality rather than endure it. The tragedy is not that you're unfeeling — it's that you feel so much that only apocalypse seems proportionate.",
    strengths: ["Master manipulation of systems, organizations, and people", "Willingness to sacrifice everything for a singular obsession", "Intelligence that operates beyond what others can perceive"],
    weaknesses: ["Used his own child as a tool, destroying what he claimed to love", "Emotional devastation hidden behind cold authority", "The plan to restore what was lost ensures it can never be truly found"],
    soundtrack: "Cruel Angel's Thesis – Yoko Takahashi",
    aura: 'rgba(40,40,100,0.3)',
    forms: [
      { name: "NERV COMMANDER", desc: "The coldest man alive, running humanity's last defense without warmth." },
      { name: "SEELE'S PAWN", desc: "Simultaneously servant and saboteur of the Human Instrumentality Project." },
      { name: "INSTRUMENTALITY ARCHITECT", desc: "The man who nearly merged all human souls to find one woman." }
    ],
    minScore: 120, maxScore: 200
  },
  {
    id: 'bondrewd', name: 'Bondrewd', series: 'Made in Abyss',
    score: 294,
    quote: "Isn't it wonderful? The children gave me this power through their love.",
    analysis: "You are perhaps the most terrifying kind of monster: one who genuinely loves. Like Bondrewd, your capacity for warmth and your capacity for atrocity coexist without apparent contradiction, because you've constructed an internal logic where the two are the same thing. You pursue knowledge with a joy so pure it transcends any ethical framework that could contain it.",
    strengths: ["Praying Hands — an infinite repository of stolen power", "Scientific genius that advanced human knowledge across lifetimes", "Completely at peace with his own nature — no self-doubt"],
    weaknesses: ["Love expressed as consumption destroys what it claims to cherish", "Cannot understand why others would find his methods monstrous", "Existence built on suffering of innocents creates an inescapable stain"],
    soundtrack: "Hanezeve Caradhina – Kevin Penkin",
    aura: 'rgba(200,150,0,0.2)',
    forms: [
      { name: "THE LORD OF DAWN", desc: "A legendary White Whistle whose name inspires awe and dread." },
      { name: "PRAYING HANDS BEAST", desc: "Dozens of children's power combined into one monstrous form." },
      { name: "IMMORTAL RESEARCHER", desc: "Consciousness transferred endlessly — death itself cannot stop his work." }
    ],
    minScore: 240, maxScore: 300
  },
  {
    id: 'shogo', name: 'Shogo Makishima', series: 'Psycho-Pass',
    score: 230,
    quote: "A lion doesn't concern itself with the opinion of sheep.",
    analysis: "You see a world of sleepwalkers and rage quietly that no one chooses to be truly human. Like Makishima, you cannot be measured by any system because your will exists outside all systems — your Psycho-Pass remains clear not because you're innocent but because you're beyond the categories of guilt and innocence. You want people to make real choices, even terrible ones.",
    strengths: ["Criminally asymptomatic — no system can measure or predict you", "Philosophical sophistication that dismantles opponents' convictions", "Combat capability married to supreme tactical intelligence"],
    weaknesses: ["Loneliness of a being who cannot be truly known by anyone", "Need for worthy adversaries reveals dependence on external validation", "Nihilism about systems extends to nihilism about meaning itself"],
    soundtrack: "Abnormalize – Ling Tosite Sigure",
    aura: 'rgba(150,150,200,0.2)',
    forms: [
      { name: "THE UNDETECTABLE", desc: "A criminal whose mind evades every sensor — a ghost in plain sight." },
      { name: "THE PROPHET", desc: "A man who understands where civilization's rot originates." },
      { name: "THE FINAL ARGUMENT", desc: "An opponent who forces the protagonist to question everything." }
    ],
    minScore: 180, maxScore: 270
  },
  {
    id: 'kotomine', name: 'Kotomine Kirei', series: 'Fate/Zero',
    score: 256,
    quote: "I have finally found the answer. My joy comes from the suffering of others.",
    analysis: "You spent a lifetime pretending your nature was a curse and finally accepted it as truth. Like Kirei, you are a man who discovered, late and with devastating clarity, that he is fundamentally incapable of joy except in the suffering of others — and rather than despair, you chose to simply be what you are. That honesty makes you one of the most philosophically terrifying figures in anime.",
    strengths: ["Magecraft and martial arts combined into a lethal art form", "Absolute clarity of self that most villains never achieve", "Ability to counsel and manipulate through genuine insight into human weakness"],
    weaknesses: ["Discovered his true nature too late to be anything but what he is", "Emptiness that can only be filled temporarily", "Cannot experience the positive spectrum of human emotion"],
    soundtrack: "Kirei's Hymn – Yuki Kajiura",
    aura: 'rgba(50,0,0,0.5)',
    forms: [
      { name: "PRIEST COUNSELOR", desc: "The holy man who gave advice while harboring absolute emptiness." },
      { name: "CHURCH EXECUTOR", desc: "A combat master wielding Black Keys with lethal elegance." },
      { name: "SELF-REALIZED MONSTER", desc: "A man fully at peace with what he is — and therefore truly dangerous." }
    ],
    minScore: 200, maxScore: 290
  }
];

// ─── QUESTION DATABASE ─────────────────────────────────────────────
const QUESTIONS = [
  {
    id: 1,
    text: "Someone has deeply betrayed your trust. How do you respond?",
    theme: "betrayal",
    options: [
      { text: "I try to understand why they did it and eventually forgive.", weight: 5, path: 'empathy' },
      { text: "I analyze the situation and use the information strategically.", weight: 15, path: 'intel' },
      { text: "I make them regret it — completely and permanently.", weight: 25, path: 'dark' },
      { text: "I erase them. Not just from my life — from everything.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 2,
    text: "The path to your dream requires sacrificing someone you love. What do you do?",
    theme: "sacrifice",
    options: [
      { text: "The dream isn't worth it. I find another way.", weight: 5, path: 'empathy' },
      { text: "I look for a third option — I refuse to accept binary choices.", weight: 15, path: 'intel' },
      { text: "They would want me to succeed. I carry their memory forward.", weight: 25, path: 'dark' },
      { text: "Dreams are absolute. People are replaceable.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 3,
    text: "You hold absolute power over a kingdom. What defines your rule?",
    theme: "control",
    options: [
      { text: "Protection of the weak. Power exists to serve, not to dominate.", weight: 5, path: 'empathy' },
      { text: "Order through strategy. A world of calculated stability.", weight: 15, path: 'intel' },
      { text: "Strength determines all. The worthy rise; the rest serve.", weight: 25, path: 'dark' },
      { text: "Fear. Absolute, unyielding fear. Obedience through terror.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 4,
    text: "How do you truly view other people?",
    theme: "ego",
    options: [
      { text: "Complex, beautiful, and worthy of understanding.", weight: 5, path: 'empathy' },
      { text: "Pieces on a board — useful, interesting, but ultimately tools.", weight: 15, path: 'intel' },
      { text: "Most are beneath me. A few might be worth my attention.", weight: 25, path: 'dark' },
      { text: "Insects. Entertainment at best. Obstacles at worst.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 5,
    text: "You have achieved your ultimate goal. What comes next?",
    theme: "ambition",
    options: [
      { text: "I rest. I rebuild. I protect what I've earned.", weight: 5, path: 'empathy' },
      { text: "I set a greater goal. The horizon always recedes.", weight: 15, path: 'intel' },
      { text: "I expand. What I've conquered becomes a foundation for more.", weight: 25, path: 'dark' },
      { text: "The goal was never the destination — the pursuit itself was the point.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 6,
    text: "A child with no power stands in your way. What happens?",
    theme: "morality",
    options: [
      { text: "I help them. Power against the powerless is meaningless.", weight: 5, path: 'empathy' },
      { text: "I move around them. They're not worth my consideration.", weight: 15, path: 'intel' },
      { text: "I remove them from my path as efficiently as possible.", weight: 25, path: 'dark' },
      { text: "Weakness is not an excuse for standing in my way.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 7,
    text: "What is the nature of peace?",
    theme: "ideology",
    options: [
      { text: "Understanding and coexistence — hard-won and worth preserving.", weight: 5, path: 'empathy' },
      { text: "A balance of power that prevents mutual destruction.", weight: 15, path: 'intel' },
      { text: "Something that must be enforced — peace through domination.", weight: 25, path: 'dark' },
      { text: "An illusion. Conflict is the natural state of all things.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 8,
    text: "You discover someone has been secretly working against you for years. Your reaction?",
    theme: "revenge",
    options: [
      { text: "Confrontation and conversation — I need to understand why.", weight: 5, path: 'empathy' },
      { text: "I've already prepared for this. I turn their betrayal against them.", weight: 15, path: 'intel' },
      { text: "They had their years of secrecy. Now they get their consequences.", weight: 25, path: 'dark' },
      { text: "Every person they've ever loved suffers for what they did to me.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 9,
    text: "Your greatest fear — the one you'd never admit — is:",
    theme: "fear",
    options: [
      { text: "That I am not enough. That I will fail those who need me.", weight: 5, path: 'empathy' },
      { text: "Being outmaneuvered by someone I underestimated.", weight: 15, path: 'intel' },
      { text: "Losing my power to someone stronger than me.", weight: 25, path: 'dark' },
      { text: "Nothing. I have already faced the void and found it empty.", weight: 40, path: 'chaos' }
    ]
  },
  {
    id: 10,
    text: "What is your truest, most honest motivation — the one buried beneath all the rest?",
    theme: "core",
    options: [
      { text: "Love. For people, for the world, for what could be.", weight: 5, path: 'empathy' },
      { text: "Understanding. To know everything, to miss nothing.", weight: 15, path: 'intel' },
      { text: "Respect. To be recognized as what I truly am.", weight: 25, path: 'dark' },
      { text: "Transcendence. To exist beyond all limitations, all rules, all death.", weight: 40, path: 'chaos' }
    ]
  }
];

// Adaptive question overrides based on path
const ADAPTIVE_QUESTIONS = {
  empathy: {
    5: { text: "Someone you love has turned to darkness. You can stop them — but only by destroying them. What do you choose?", theme: "love" },
    7: { text: "You could save thousands of lives by sacrificing your own moral code once. Just once. Do you?", theme: "loneliness" }
  },
  intel: {
    5: { text: "You've predicted every move your enemy will make. But your prediction requires you to let innocents suffer. Do you proceed?", theme: "control" },
    7: { text: "Your greatest plan requires erasing yourself from everyone's memory — no credit, no recognition, nothing. Worth it?", theme: "ego" }
  },
  dark: {
    5: { text: "You stand at the edge of absolute power. To claim it, you must betray every person who trusted you. The hesitation is:", theme: "betrayal" },
    7: { text: "Your ideology is correct and you know it. But the world refuses to accept it. Do you force them?", theme: "ambition" }
  },
  chaos: {
    5: { text: "You could end all conflict permanently — by ending everything. Is that salvation or destruction?", theme: "nihilism" },
    7: { text: "Someone offers you genuine love — freely, without conditions. What does that feel like?", theme: "void" }
  }
};

// ─── GAME STATE ──────────────────────────────────────────────────
let state = {
  currentQ: 0,
  totalQ: 10,
  totalScore: 0,
  pathCounts: { empathy: 0, intel: 0, dark: 0, chaos: 0 },
  answers: [],
  musicPlaying: false,
  villainResult: null
};

// ─── PARTICLES ───────────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() < 0.3 ? '#8b0000' : Math.random() < 0.5 ? '#4a0080' : '#2a1a3a';
      this.life = 0;
      this.maxLife = Math.random() * 200 + 100;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity * (1 - this.life / this.maxLife);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

// ─── MUSIC ───────────────────────────────────────────────────────
const musicToggle = document.getElementById('music-toggle');
const bgMusic     = document.getElementById('bg-music');
const volSlider   = document.getElementById('volume-slider');

bgMusic.volume = 0.4;

musicToggle.addEventListener('click', () => {
  if (state.musicPlaying) {
    bgMusic.pause();
    state.musicPlaying = false;
    musicToggle.textContent = '♪';
    musicToggle.classList.remove('playing');
  } else {
    bgMusic.play().catch(() => {});
    state.musicPlaying = true;
    musicToggle.textContent = '■';
    musicToggle.classList.add('playing');
  }
});

volSlider.addEventListener('input', () => {
  bgMusic.volume = parseFloat(volSlider.value);
});

// ─── PAGE NAV ────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── START QUIZ ──────────────────────────────────────────────────
function startQuiz() {
  state = {
    currentQ: 0,
    totalQ: 10,
    totalScore: 0,
    pathCounts: { empathy: 0, intel: 0, dark: 0, chaos: 0 },
    answers: [],
    musicPlaying: state.musicPlaying,
    villainResult: null
  };
  showPage('quiz-page');
  renderQuestion();
}

// ─── GET QUESTION ─────────────────────────────────────────────────
function getQuestion(index) {
  const base = QUESTIONS[index];
  const dominantPath = getDominantPath();
  const adaptive = ADAPTIVE_QUESTIONS[dominantPath];
  if (adaptive && adaptive[index + 1]) {
    return { ...base, ...adaptive[index + 1] };
  }
  return base;
}

function getDominantPath() {
  const pc = state.pathCounts;
  return Object.keys(pc).reduce((a, b) => pc[a] >= pc[b] ? a : b, 'empathy');
}

// ─── RENDER QUESTION ─────────────────────────────────────────────
function renderQuestion() {
  const q = getQuestion(state.currentQ);
  const qNum = state.currentQ + 1;

  document.getElementById('q-current').textContent = qNum;
  document.getElementById('q-total').textContent   = state.totalQ;
  document.getElementById('q-badge').textContent   = `Q${qNum}`;
  document.getElementById('question-text').textContent = q.text;

  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt.text}`;
    btn.addEventListener('click', () => selectOption(btn, opt, i));
    optContainer.appendChild(btn);
  });

  // update darkness bar
  const pct = Math.round((state.totalScore / (state.totalQ * 40)) * 100);
  const capped = Math.min(pct, 100);
  document.getElementById('darkness-bar').style.width  = capped + '%';
  document.getElementById('darkness-percent').textContent = capped + '%';

  // animate card in
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'cardAppear 0.4s ease both';
}

// ─── SELECT OPTION ───────────────────────────────────────────────
function selectOption(btn, opt, idx) {
  // Disable all buttons
  document.querySelectorAll('.option-btn').forEach(b => {
    b.style.pointerEvents = 'none';
    b.style.opacity = '0.5';
  });
  btn.classList.add('selected');
  btn.style.opacity = '1';

  state.totalScore += opt.weight;
  state.pathCounts[opt.path]++;
  state.answers.push({ q: state.currentQ, optIdx: idx, weight: opt.weight, path: opt.path });

  const suspenseMessages = [
    "Your soul is being analyzed...",
    "Darkness calibrating...",
    "Your true nature emerges...",
    "The shadows recognize you...",
    "Power assessment in progress...",
    "Your aura is taking shape..."
  ];

  setTimeout(() => {
    if (state.currentQ < state.totalQ - 1) {
      showSuspense(suspenseMessages[Math.floor(Math.random() * suspenseMessages.length)], () => {
        state.currentQ++;
        renderQuestion();
      });
    } else {
      showSuspense("YOUR VILLAIN HAS BEEN DETERMINED...", () => {
        computeResult();
      });
    }
  }, 300);
}

// ─── SUSPENSE ────────────────────────────────────────────────────
function showSuspense(text, callback) {
  const overlay = document.getElementById('suspense-overlay');
  const sText   = document.getElementById('suspense-text');
  sText.textContent = text;
  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('hidden');
    callback();
  }, 1200);
}

// ─── COMPUTE RESULT ───────────────────────────────────────────────
function computeResult() {
  const score = state.totalScore;
  const maxPossible = state.totalQ * 40;
  const pct = score / maxPossible;
  const dp = getDominantPath();

  // Find best villain match
  let best = null;
  let bestDiff = Infinity;

  VILLAINS.forEach(v => {
    const inRange = score >= v.minScore && score <= v.maxScore;
    const diff = Math.abs(v.score / 300 * maxPossible - score);

    if (inRange) {
      // Prefer path alignment
      const pathMatch = (
        (dp === 'empathy' && v.score < 80) ||
        (dp === 'intel'   && v.score >= 80  && v.score <= 160) ||
        (dp === 'dark'    && v.score >= 140  && v.score <= 220) ||
        (dp === 'chaos'   && v.score > 200)
      );
      const adjustedDiff = pathMatch ? diff * 0.5 : diff;
      if (adjustedDiff < bestDiff) { bestDiff = adjustedDiff; best = v; }
    }
  });

  // Fallback by score range
  if (!best) {
    VILLAINS.forEach(v => {
      const diff = Math.abs(v.score / 300 * maxPossible - score);
      if (diff < bestDiff) { bestDiff = diff; best = v; }
    });
  }

  state.villainResult = best;

  // Compute display scores
  const darknessScore = Math.round(pct * 100);
  const intelScore    = Math.round((state.pathCounts.intel / state.totalQ) * 100 + 20);
  const chaosScore    = Math.round((state.pathCounts.chaos / state.totalQ) * 100 + (state.pathCounts.dark / state.totalQ) * 50);
  const moralityScore = Math.max(5, 100 - darknessScore);
  const emoScore      = Math.round((state.pathCounts.empathy + state.pathCounts.dark) / state.totalQ * 70 + 20);
  const villainPct    = Math.round((best.score / 300) * 100);

  showResult(best, { darkness: darknessScore, intel: Math.min(intelScore, 99), chaos: Math.min(chaosScore, 99), morality: moralityScore, emotional: Math.min(emoScore, 99), villainScore: villainPct });
}

// ─── SHOW RESULT ─────────────────────────────────────────────────
function showResult(villain, scores) {
  showPage('result-page');

  // Aura color
  const aura = document.getElementById('result-aura');
  aura.style.background = `radial-gradient(ellipse 70% 60% at 50% 30%, ${villain.aura} 0%, transparent 70%)`;

  // Villain info
  document.getElementById('villain-name').textContent    = villain.name;
  document.getElementById('villain-series').textContent  = '— ' + villain.series + ' —';
  document.getElementById('villain-quote').textContent   = villain.quote;
  document.getElementById('villain-analysis').textContent = villain.analysis;
  document.getElementById('villain-soundtrack').textContent = villain.soundtrack;

  // Image
  const img  = document.getElementById('villain-img');
  const ph   = document.getElementById('villain-placeholder');
  const psym = document.getElementById('placeholder-symbol');
  img.classList.add('hidden');
  ph.style.display = 'flex';

  psym.textContent = villain.name[0];

  img.src = `assets/images/${villain.id}.png`;
  img.onload = () => {
    ph.style.display = 'none';
    img.classList.remove('hidden');
  };
  img.onerror = () => {
    ph.style.display = 'flex';
    img.classList.add('hidden');
  };

  // Strengths
  const sList = document.getElementById('villain-strengths');
  sList.innerHTML = '';
  villain.strengths.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    sList.appendChild(li);
  });

  // Weaknesses
  const wList = document.getElementById('villain-weaknesses');
  wList.innerHTML = '';
  villain.weaknesses.forEach(w => {
    const li = document.createElement('li');
    li.textContent = w;
    wList.appendChild(li);
  });

  // Forms
  const formsGrid = document.getElementById('villain-forms');
  formsGrid.innerHTML = '';
  villain.forms.forEach(f => {
    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `<div class="form-name">${f.name}</div><div class="form-desc">${f.desc}</div>`;
    formsGrid.appendChild(card);
  });

  // Score bars (animate after short delay)
  setTimeout(() => {
    animateBar('morality-bar',    scores.morality);
    animateBar('darkness-s-bar',  scores.darkness);
    animateBar('intel-bar',       scores.intel);
    animateBar('chaos-bar',       scores.chaos);
    animateBar('emo-bar',         scores.emotional);
    animateBar('villain-score-bar', scores.villainScore);

    document.getElementById('morality-val').textContent   = scores.morality + '%';
    document.getElementById('darkness-s-val').textContent = scores.darkness + '%';
    document.getElementById('intel-val').textContent      = scores.intel + '%';
    document.getElementById('chaos-val').textContent      = scores.chaos + '%';
    document.getElementById('emo-val').textContent        = scores.emotional + '%';
    document.getElementById('villain-score-val').textContent = scores.villainScore + '/100';
  }, 400);
}

function animateBar(id, pct) {
  const bar = document.getElementById(id);
  bar.style.width = pct + '%';
}

function handleImgError() {
  document.getElementById('villain-img').classList.add('hidden');
  document.getElementById('villain-placeholder').style.display = 'flex';
}

// ─── SHARE / DOWNLOAD ─────────────────────────────────────────────
function buildResultText() {
  const v = state.villainResult;
  if (!v) return '';
  const pct = Math.round((state.totalScore / (state.totalQ * 40)) * 100);
  return `🔥 ANIME VILLAIN QUIZ RESULT 🔥\n\nI am: ${v.name} (${v.series})\nVillainy Score: ${v.score}/300\nDarkness Level: ${pct}%\n\n"${v.quote}"\n\n⚔ Take the quiz: [your-site-url]\n#AnimeVillainQuiz #WhichAnimeVillainAreYou`;
}

function copyResult() {
  const text = buildResultText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('Result copied to clipboard!');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Result copied!');
  });
}

function shareScore() {
  const text = buildResultText();
  if (navigator.share) {
    navigator.share({ title: 'Anime Villain Quiz Result', text }).catch(() => {});
  } else {
    copyResult();
  }
}

function downloadCard() {
  const v = state.villainResult;
  if (!v) return;
  const pct = Math.round((state.totalScore / (state.totalQ * 40)) * 100);

  const canvas = document.createElement('canvas');
  canvas.width  = 600;
  canvas.height = 350;
  const ctx = canvas.getContext('2d');

  // Background
  const grad = ctx.createLinearGradient(0, 0, 600, 350);
  grad.addColorStop(0, '#050508');
  grad.addColorStop(1, '#0f0f1a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 600, 350);

  // Border
  ctx.strokeStyle = '#8b0000';
  ctx.lineWidth = 3;
  ctx.strokeRect(4, 4, 592, 342);

  // Red accent line
  ctx.fillStyle = '#c0122a';
  ctx.fillRect(4, 4, 592, 4);

  // Title
  ctx.fillStyle = '#7060a0';
  ctx.font = '12px monospace';
  ctx.fillText('WHICH ANIME VILLAIN ARE YOU?', 30, 40);

  // Villain name
  ctx.fillStyle = '#c0122a';
  ctx.font = 'bold 36px serif';
  ctx.fillText(v.name, 30, 100);

  // Series
  ctx.fillStyle = '#c8961e';
  ctx.font = '14px monospace';
  ctx.fillText('— ' + v.series + ' —', 30, 130);

  // Quote
  ctx.fillStyle = '#a0a0c0';
  ctx.font = 'italic 14px serif';
  const words = v.quote.split(' ');
  let line = ''; let y = 175;
  words.forEach(word => {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > 540 && line !== '') {
      ctx.fillText('"' + line.trim() + '"', 30, y);
      line = word + ' ';
      y += 22;
    } else { line = test; }
  });
  if (line) ctx.fillText('"' + line.trim() + '"', 30, y);

  // Scores
  const scoreY = 260;
  ctx.fillStyle = '#7060a0';
  ctx.font = '11px monospace';
  ctx.fillText(`VILLAINY: ${v.score}/300  |  DARKNESS: ${pct}%  |  SCORE: ${state.totalScore}/${state.totalQ * 40}`, 30, scoreY);

  // Watermark
  ctx.fillStyle = '#2a1a3a';
  ctx.font = '11px monospace';
  ctx.fillText('Fan-made entertainment quiz — All characters belong to their creators', 30, 320);

  const link = document.createElement('a');
  link.download = `${v.id}-villain-card.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();

  showToast('Card downloaded!');
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  t.style.cssText = `
    position:fixed; bottom:70px; left:50%; transform:translateX(-50%);
    background:rgba(139,0,0,0.95); color:#fff; padding:12px 24px;
    border-radius:4px; font-family:monospace; font-size:13px; letter-spacing:2px;
    z-index:9999; border:1px solid #c0122a; backdrop-filter:blur(10px);
    animation: toastIn 0.3s ease;
  `;
  const style = document.createElement('style');
  style.textContent = '@keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }';
  document.head.appendChild(style);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ─── RESTART ─────────────────────────────────────────────────────
function restartQuiz() {
  startQuiz();
}

// ─── INIT ─────────────────────────────────────────────────────────
// Landing page is shown by default (active class on HTML)
// All ready — quiz starts on button click
