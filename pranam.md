# pranam.html — Build Instructions

Source: Figma Frame 27 — node `83:1866` (file `NjK34BwmabweTvSqEb8rSv`); card, video, sound and
layout of the card were first copied from the 8pujameaningadv build
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built**

---

## Navigation

← from: index.html (Pranam button on the last step)
→ to: index.html (HOME pill and back button)

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bg.png | `.page-bg` | 1920x1080 |
| flower-copia8.png / flower-copia7.png | the same eight flower layers as index.html | 1920x760 / 1024x406 |
| pranam-card.png | PG card (user-supplied, purple gradient) | 866x866 |
| pranam-home.png | HOME pill (user-supplied) | 421x131 |
| pranam-video-sizer.png | transparent 415x464 sizer for the video box | 415x464 |
| back.png | Layer 4 back button | 64x64 |

Video: `assets/videos/pranam.mp4` (replaces the MASCOT image). Sound: `assets/audio/pranam.mp3`.
The white disc and ring (Ellipse 3 / Ellipse 2) are drawn in CSS.

Missing: none

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Rubik Medium | "Pranam", "HOME" (reference used Baloo — replaced on request) | Rubik-Medium.ttf |
| ITF Devanagari Bold | Hindi | ITFDevanagari-Bold.otf |
| Noto Sans Gujarati Bold | Gujarati | NotoSansGujarati-Bold.ttf |

---

## 1. Palette

```
--title-white:  #f9f9f9    "Pranam"
--white:        #ffffff    "HOME"
```

---

## 2. Structure

```
body
├── #langSelect
├── img.page-bg                 bg.png
└── .main-container
    └── .stage
        ├── img.stage-spacer    1920x1080 (full frame)
        ├── .sky-band, 8 x img.bg-flower   same layers and positions as index.html
        ├── a.back-btn
        ├── .pranam-card        card image
        ├── .pranam-disc / .pranam-ring    white disc + 17px white ring
        ├── .pranam-video       415x464 rounded box, video inside
        ├── h1.pranam-title
        └── a.home-pill
```

---

## 3. Guidelines — Frame 83:1866

    Card group scaled to 85% of Figma about its centre (x 965, y 543) on request — Figma values in brackets.
    3.1- pranam-card — `38.339%` (736px), left `31.268%`, top `14.49%`   [866px, 27.917%, 8.174%]
    3.2- disc + ring — `29.573%` (568px), left `35.474%`, top `21.966%`; ring border `0.752vw` white, plus a 2px yellow `#fff186` line on all sides
    3.3- video box (mascots) — `22.448%` (431px, enlarged on request; Figma 415px), left `39.036%`, top `25.926%`, radius `7.526vw`
    3.4- title "Pranam" Rubik Medium `4vw`, #8446d2, pushed OUT of the circle into the card's top band: centred on `50.26%` / `18.148%` (Figma had it inside the circle, Baloo)
    3.5- home-pill — `18.638%` (358px), left `41.273%`, top `75.879%`; label Rubik Medium `3.099vw`, white
    3.6- back-btn — `3.333%`, left `2.24%`, top `4.074%` → `index.html#last` (opens the last point, Ang 9 with the Pranam button, no slide-in)
    3.7- on click of home-pill → index.html

---

## 4. Open questions

1. The reference page's white page-edge border and its click sounds (pop,
   language) belong to that project's shared shell and were not copied.
2. Hindi / Gujarati for "Pranam" and "HOME" are taken from the reference build.
