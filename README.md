# ⚔ Anime Villain Quiz — "Which Anime Villain Are You?"

> A fan-made psychological personality quiz featuring 100 legendary anime villains.
> Built with pure HTML, CSS, and JavaScript. No frameworks. No backend. Works on GitHub Pages.

---

## 📁 File Structure

```
/
├── index.html          ← Main HTML file
├── style.css           ← All styles
├── script.js           ← Quiz logic, villain data, animations
├── README.md           ← This file
└── assets/
    ├── images/         ← Villain images (add your own .png files here)
    └── music/          ← Background music (add .mp3 or .ogg here)
```

---

## 🖼 How to Add Villain Images

1. Open the `assets/images/` folder.
2. Add a `.png` image named exactly as the villain's **id** listed below.
3. Recommended size: **400×500px** (portrait orientation).

| Villain Name        | File Name to Use          |
|---------------------|---------------------------|
| Madara Uchiha       | `madara.png`              |
| Sosuke Aizen        | `aizen.png`               |
| Johan Liebert       | `johan.png`               |
| Frieza              | `frieza.png`              |
| Meruem              | `meruem.png`              |
| Light Yagami        | `light.png`               |
| Dio Brando          | `dio.png`                 |
| Ryomen Sukuna       | `sukuna.png`              |
| Griffith            | `griffith.png`            |
| Makima              | `makima.png`              |
| Pain (Nagato)       | `pain.png`                |
| Eren Yeager         | `eren.png`                |
| Hisoka              | `hisoka.png`              |
| Blackbeard          | `blackbeard.png`          |
| Muzan Kibutsuji     | `muzan.png`               |
| Orochimaru          | `orochimaru.png`          |
| Lelouch             | `lelouch.png`             |
| Chrollo Lucilfer    | `chrollo.png`             |
| Ainz Ooal Gown      | `ainz.png`                |
| Gendo Ikari         | `gendo.png`               |
| Bondrewd            | `bondrewd.png`            |
| Shogo Makishima     | `shogo.png`               |
| Kotomine Kirei      | `kotomine.png`            |

> If no image is found, the quiz shows a stylish placeholder card automatically — no errors!

---

## 🎵 How to Add Background Music

1. Place your music file in `assets/music/`.
2. Name it exactly: `background.mp3` or `background.ogg` (or provide both for browser compatibility).
3. The music player appears top-right with a toggle button and volume slider.
4. Music does NOT autoplay — the user controls it.

> Suggested tracks: dark orchestral, anime OST ambience, or dramatic piano compositions.

---

## ✏ How to Edit Questions

Open `script.js` and find the `QUESTIONS` array (around line 90).

Each question looks like this:
```javascript
{
  id: 1,
  text: "Your question text here?",
  theme: "betrayal",
  options: [
    { text: "Empathetic answer", weight: 5,  path: 'empathy' },
    { text: "Strategic answer",  weight: 15, path: 'intel'   },
    { text: "Dark answer",       weight: 25, path: 'dark'    },
    { text: "Chaotic answer",    weight: 40, path: 'chaos'   }
  ]
}
```

**Weight guide:**
- `5` = Empathetic/heroic response
- `15` = Strategic/calculated response  
- `25` = Dark/dominant response
- `40` = Chaotic/absolute destruction response

---

## 🦹 How to Edit or Add Villains

Find the `VILLAINS` array in `script.js` (around line 15). Each villain entry:

```javascript
{
  id: 'villain_id',          // Used for image filename (villain_id.png)
  name: 'Full Name',
  series: 'Anime Series',
  score: 150,                // Villainy score 30-300 (from the PDF)
  quote: "Their iconic quote.",
  analysis: "Personality analysis paragraph.",
  strengths: ["Strength 1", "Strength 2", "Strength 3"],
  weaknesses: ["Weakness 1", "Weakness 2", "Weakness 3"],
  soundtrack: "Song Name – Artist",
  aura: 'rgba(139,0,0,0.3)', // CSS color for background aura
  forms: [
    { name: "FORM NAME", desc: "Description of this form." },
    { name: "FORM NAME", desc: "Description." },
    { name: "FORM NAME", desc: "Description." }
  ],
  minScore: 100,  // Quiz score range for this villain to appear
  maxScore: 200
}
```

**Score range guide (minScore / maxScore):**
- Heroic anti-heroes (score 30–80): `minScore: 30, maxScore: 100`
- Strategic/tragic villains (score 80–160): `minScore: 80, maxScore: 180`
- Power-hungry villains (score 140–220): `minScore: 130, maxScore: 230`
- Pure chaos/destruction (score 200–300): `minScore: 180, maxScore: 300`

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository** — click the `+` icon → "New repository".
3. Name it anything (e.g., `anime-villain-quiz`). Make it **Public**.
4. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop: `index.html`, `style.css`, `script.js`, `README.md`
   - Also upload the `assets/` folder with your images and music
5. **Enable GitHub Pages**:
   - Go to your repository → Settings → Pages
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click Save
6. Your site will be live at: `https://yourusername.github.io/anime-villain-quiz/`

> It may take 1–2 minutes for the site to go live after enabling Pages.

---

## 🎮 Quiz Features

- **10 adaptive questions** that change based on your previous answers
- **23 detailed villain results** from the PDF villain database
- **Dynamic darkness meter** that fills as you answer
- **Suspense transitions** between questions
- **5 personality scores**: Morality, Darkness, Intelligence, Chaos, Emotional Damage
- **Villain card** with forms, analysis, strengths, weaknesses, and soundtrack
- **Download result card** as PNG image
- **Copy & share** result text
- **Background music** with toggle and volume control
- **Particle effects** background
- **Mobile optimized** for Android Chrome and touch screens

---

## ⚠ Disclaimer

This is a **fan-made, non-commercial entertainment website**. All anime characters, names, series, music references, and related intellectual property belong to their respective creators, studios, and publishers. This project is created purely for entertainment and fan appreciation purposes.

---

*Built with pure HTML · CSS · JavaScript — No frameworks required*
