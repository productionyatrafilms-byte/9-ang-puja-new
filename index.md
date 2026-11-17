# index.html — Build Instructions

Source: Nav Aangi Puja — file key `NjK34BwmabweTvSqEb8rSv`
Base frame size: **1920 x 1080** (px -> vw divides by 1920)
Base template: `basic-template.html` — content goes in `.main-container > .stage`

**STATUS: built — Hindi/Gujarati copy still pending (see section 7)**

---

## Navigation

← from: none (entry page)
→ to: pranam.html (Pranam button on the last step)

All 16 frames are **states of one page**. The current state is the `data-step`
attribute (0..15) on `.stage`; helper classes `is-intro`, `show-intro-box`,
`show-info`, `show-home`, `show-pranam` are toggled with it.

| Step | Frame | Node | What is on screen | Advance |
|---|---|---|---|---|
| 0 | Frame 5 | 83:1118 | Big "Nav AANGI Puja" + down arrow | click arrow |
| 1 | Frame 28 | 83:3398 | Title pill + statue slide in, back button | automatic |
| 2 | Frame 12 | 83:1209 | Intro text box, hand on right toe | click right toe |
| 3 | Frame 14 | 83:1259 | Right toe filled, hand on left toe | click left toe |
| 4 | Frame 13 | 83:1310 | Toes filled, Ang 1 boxes + verse, hand on left knee | click left knee |
| 5 | Frame 15 | 83:1361 | Left knee filled, boxes out, hand on right knee | click right knee |
| 6 | Frame 16 | 83:1412 | Knees filled, Ang 2, hand on left forearm | click left forearm |
| 7 | Frame 17 | 83:1899 | Knees + left forearm filled, boxes out | click right forearm |
| 8 | Frame 18 | 83:1463 | Forearms filled, Ang 3, hand on left shoulder | click left shoulder |
| 9 | Frame 20 | 83:1950 | Left shoulder filled, boxes out | click right shoulder |
| 10 | Frame 21 | 83:1514 | Shoulders filled, Ang 4, hand on shikha | click shikha |
| 11 | Frame 22 | 83:1572 | Shikha filled, Ang 5, hand on forehead | click forehead |
| 12 | Frame 23 | 83:1630 | Forehead filled, Ang 6, hand on throat | click throat |
| 13 | Frame 24 | 83:1688 | Throat filled, Ang 7, hand on heart | click heart |
| 14 | Frame 25 | 83:1746 | Heart filled, Ang 8, hand on navel | click navel |
| 15 | Frame 26 | 83:1804 | Navel filled, Ang 9, **Upsanhar (new, left) and Pranam buttons, hand pointing at Upsanhar; all dots clickable | click Upsanhar → modal |
| 16 | Frame 26 | 83:1804 | modal closed; hand moves to the Pranam button | click Pranam → pranam.html |

---

## 0. Assets

### 0.1 — Images

| File | Layer / use | Natural px |
|---|---|---|
| bg.png | Background1 — used as `.page-bg` | 1920x1080 |
| mahaveer.png | mahaveer (glow baked in: 78.6px each side) | 762x756 |
| star.png | Star 1 behind the statue | 429x428 |
| hand.png | hand (already rotated -15.66deg, shadow baked in) | 204x273 |
| hand2.png | hand at the Pranam button (step 15) | 176x263 |
| arrow.png | intro down arrow | 84x84 |
| back.png | Layer 4 — back button | 64x64 |
| home.png | Vector — home button | 77x70 |
| flower-copia8.png | Flower copia8 / 1 / 2 / 3 / 4 / 5 (bloom + long stem) | 1920x760 |
| flower-copia7.png | Flower copia7 / 6 | 1024x406 |
| follow-bubble.png | Union — speech bubble, rendered from the Figma vector path at 2x | 578x222 |
| stage-spacer.png | transparent spacer | 1920x1080 |

`flower.png` (894x626, bloom only) is **not used**: every Figma flower layer is
a 2.526:1 image with a long stem, which the supplied crop cannot reproduce. The
two flower layers were copied from the Figma desktop server instead.

The dots (`b` component) are drawn in CSS — their Figma fills are plain circles.

Missing: none

### 0.2 — Fonts

| Family | Used for | File in /fonts/ |
|---|---|---|
| Playfair Display Bold | title, intro "Nav"/"Puja", verse | PlayfairDisplay-Bold.ttf |
| Playfair Display Black | intro "AANGI" | PlayfairDisplay-Black.ttf |
| Rubik Medium | text boxes, intro box | Rubik-Medium.ttf |
| Rubik Medium | Pranam button (Figma: Momo Trust Display — replaced on request) | Rubik-Medium.ttf |

---

## 1. Palette

```
--white:            #ffffff                    borders, intro text
--title-text:       #fbfffb                    title / verse text and title border
--pill-bg:          rgba(201,150,240,0.72)     title pill, verse pill
--box-top:          rgba(255,246,246,0.73)     text box gradient start
--box-bottom:       rgba(240,150,198,0.73)     text box gradient end
--intro-box-bg:     rgba(255,246,246,0.21)     intro text box
--copy:             #5b20a8                    Rubik copy
--dot-ring:         rgba(253,251,255,0.72)     dot outer circle (29px)
--dot-core:         #ffe2a2                    dot inner circle (21px)
--dot-filled:       #feac30                    filled dot (25px)
--pranam-halo:      rgba(232,50,220,0.26)
--pranam-border:    #ca50c2
--pranam-text:      #744baa
--lang:             #5c00d5
--sky:              rgb(150,209,240)           Rectangle5 gradient
--text-shadow:      rgba(0,0,0,0.41)
--box-shadow:       rgba(0,0,0,0.25)
```

---

## 2. Structure

```
body
├── #langSelect
├── img.page-bg                    bg.png
└── .main-container
    └── .stage[data-step]
        ├── img.stage-spacer
        ├── .sky-band              Rectangle5
        ├── img.flower.flower-copia8
        ├── .mahaveer              star, reflection, statue, 13 x button.ang-dot
        ├── img.flower  x5         copia7, copia1, copia5, copia6, copia3
        ├── .intro-text            Nav / AANGI / Puja
        ├── img.flower  x2         copia4, copia2
        ├── button.back-btn / button.home-btn
        ├── .title
        ├── .intro-box
        ├── .text-box.text-box-left / .text-box-right
        ├── .verse
        ├── button.pranam-btn
        ├── .follow-bubble
        ├── .hand
        └── button.intro-arrow

Content extent: the full frame, y 0 .. 1080 -> spacer 1920x1080
All vertical % below are measured from the frame's 0.
```

The design is full bleed (flowers run off every edge), so the stage must be the
whole frame. A trimmed 1010px stage left a 70px strip of bare background at the
bottom in full screen (1920x1080), so it was reverted to the full frame. In a
maximised, non-full-screen window the page therefore scrolls by ~143px.

---

When the window is taller than the stage, `.main-container` centres it
vertically (`align-content: center` in index.css, on request) and `#langSelect`
follows with `top: calc(50% - 25.625vw)`.

---

## 3. Frame 83:1118 Guidelines — intro (step 0)

    3.1- intro-text — Playfair Display, white, shadow 0 4px 4px rgba(0,0,0,0.41), centred on x=931.5
      3.1.1- "Nav" Bold `10.417vw` (200px), centre y `13.518%` (146px)
      3.1.2- "AANGI" Black `20.833vw` (400px), line-height `17vw` (0.816), centre y `38.194%` (412.5px)
      3.1.3- "Puja" Bold `10.417vw` (200px), centre y `65.185%` (704px)
    3.2- intro-arrow — `arrow.png`, width `4.375%` (84px), left `47.865%`, top `81.203%`
    3.3- statue group sits 1123px lower (top `119.87%`), dots at opacity 0.3
    3.4- title pill sits 350px higher, off-canvas
    3.5- flowers use the intro positions (class `is-intro`)
    3.6- on click of intro-arrow → step 1, everything animates to the statue layout

---

## 4. Frames 83:3398 / 83:1209 / 83:1259 Guidelines — statue + intro box (steps 1-3)

    4.1- title — pill width `42.24%` (811px), left `29.375%`, top `5.185%`
      4.1.1- bg rgba(201,150,240,0.72), border `0.313vw` (6px) #fbfffb, radius `4.193vw`, shadow 0 4px 4px rgba(0,0,0,0.25)
      4.1.2- text "Nav Aangi Puja" Playfair Display Bold `5.208vw` (100px), white
    4.2- mahaveer — group left `30.333%`, top `15.889%`, width `39.688%` (762px png)
      4.2.1- star `56.26%` of group, left `21.677%`, top `-6.8%`, behind statue
      4.2.2- reflection: same image flipped, opacity 0.67, multiply, top `59.087%`
      4.2.3- 13 dots, `6.168%` of group (47px) — positions in index.css
    4.3- back-btn — `back.png`, width `3.333%` (64px), left `2.24%`, top `4.074%`
    4.4- intro-box — width `66.563%` (1278px), left `16.823%`, top `76.945%`
      4.4.1- bg rgba(255,246,246,0.21), border `0.208vw` (4px) white, radius `3.646vw`
      4.4.2- Rubik Medium `1.875vw` (36px), line-height `2.475vw` (1.32), #5b20a8, text width 1183px
    4.5- hand — `hand.png` width `10.625%` (204px); position per step in index.css
    4.6- on click of the dot under the hand → dot fills (#feac30), next step
    4.7- follow-bubble (MaskGroup 106:4032) — `follow-bubble.png`, width `15.052%` (289px), left `59.792%`, top `49.722%`
      4.7.1- "Follow the Hand" Rubik Medium `1.458vw` (Figma: Rubik Regular — the page's existing English font is used instead, per user) (28px), line-height `1.729vw`, #000000, centred on x=1303.5
      4.7.2- shown on steps 2-3 with a left-to-right wipe (the Figma mask is the wipe's start state)

---

## 5. Frames 83:1310 .. 83:1746 Guidelines — Ang 1-8 (steps 4-14)

    5.1- home-btn replaces back-btn — `home.png`, width `4.01%` (77px), left `1.719%`, top `4.074%`
    5.2- text-box — width `30.208%` (580px), top `27.037%`, left `4.583%` / `65.312%`
      5.2.1- gradient rgba(255,246,246,0.73) → rgba(240,150,198,0.73), border `0.365vw` (7px) white, radius `3.646vw`
      5.2.2- Rubik Medium `1.875vw` (36px), line-height `2.756vw` (1.47), #5b20a8, text width 501px
      5.2.3- left box = what we gain, right box = what we eliminate
    5.3- verse — pill top `77.593%` (838px), centred on x=969.5, same pill style as title, border white
      5.3.1- width 1583px (Ang 1-5), 1775px (Ang 6), 1697px (Ang 7-8), 1519px (Ang 9)
      5.3.2- Playfair Display Bold `2.5vw` (48px) in Figma — English lowered to `2.292vw` (44px) on request; Hindi/Gujarati unchanged; line-height `3.333vw`, #fbfffb, two lines
      5.3.3- Ang 4 → 9 verses scroll vertically inside the pill (Figma mask group)
    5.4- on the in-between steps (5, 7, 9) the boxes slide off left/right and the verse drops off the bottom
    5.5- only the current Ang's dots stay filled (Frame 17 also keeps the knees filled)

---

## 6. Frame 83:1804 Guidelines — Ang 9 + Pranam (step 15)

    6.1- pranam-btn — width `11.198%` (215px), left `81.562%`, top `65.834%`
      6.1.1- halo rgba(232,50,220,0.26), radius `2.474vw`, shadow 0 4px 4px rgba(0,0,0,0.25)
      6.1.2- inner 199x83, border `0.365vw` #ca50c2, gradient #e3e3e3 → #fffbfb 54.8% → #e9e6e8
      6.1.3- "Pranam" Rubik Medium `1.458vw` (28px), #744baa
    6.2- hand at the Pranam button uses `hand2.png` (176x263), width `9.167%`, left `87.969%`, top `65.185%`
    6.3- on click of pranam-btn → pranam.html
    6.4- upsanhar-btn (added on request, not in Figma) — mirror of the Pranam button: same size and style, left `7.24%`, top `65.834%`; label `upsanharBtn`
      6.4.1- hand (hand2.png) mirrored (`scaleX(-1)`) at left `1.3%`, top `65.185%` while it points here (step 15), so the hand body hangs to the left and does not cover the verse text
      6.4.2- click → centred modal (`.upsanhar-modal`, 1240px wide, left `17.708%`, top `29.63%`) with the concluding verse `upsanhar` in Playfair Bold `2.3vw` (Hindi/Gujarati `2.8vw`), purple dim backdrop, round close button
      6.4.3- both buttons (Upsanhar and Pranam) appear together at the 9th point and only there: in free mode they and the hand hide while another Ang is shown and return on the navel dot. Closing the modal (button, backdrop click or Esc) → step 16: the hand moves to Pranam
      6.4.4- back from pranam.html (`index.html#last`) opens step 16
    6.4.5- the hand is never hidden by clicking Pranam; it hides only when the user comes back from pranam.html (`index.html#last`) and stays hidden for that visit; pressing home / back to restart from the intro starts a new guided pass and the hand shows again
    6.4- once step 15 is reached every dot is clickable (class `is-free`): a click shows that Ang's boxes + verse and fills its dot(s)
    6.5- statue slide-in, the intro words sliding down and the title pill dropping in all use `--slide` 1.8s (slowed on request); the hand appears 2.2s after the arrow click

---

## 6a. Sounds — assets/audio/

| Sound | Plays on | Code |
|---|---|---|
| transition.mp3 | click on the intro arrow (file not supplied yet — drop it into assets/audio/) | index.js |
| click.mp3 | a dot click that is accepted (the dot under the hand, or any dot once all nine Angs are done) | index.js |
| pop.mp3 | back, home (index.html) and back, HOME (pranam.html) | custom.js |
| Eng.mpeg / Hin.mpeg / Guj.mpeg | a real click on E / H / G | custom.js |
| pranam.mp3 | once, when pranam.html opens | pranam.js |

pop, Eng, Hin and Guj were copied from the 8pujameaningadv build. On pranam.html
the back and HOME links wait 120ms for the pop before navigating. The intro
arrow and the Pranam button are silent (no sound was asked for).

---

## 6b. Text — assets/js/data.js

Every visible text lives in `assets/js/data.js` (`SITE_DATA`), each with
`english` / `hindi` / `gujrati`. The HTML carries empty elements with
`data-text="<path>"`; `text.js` fills them with the three language spans before
`custom.js` shows the chosen one (script order: data.js, text.js, custom.js).

| Path | Text |
|---|---|
| `intro.nav` / `intro.aangi` / `intro.puja` | big intro words |
| `title` | title pill |
| `introBox` | intro box |
| `followHand` | speech bubble |
| `angs.0..8.left` / `.right` / `.verse` | what we gain / eliminate / doha of Ang 1..9 |
| `upsanharBtn` / `upsanhar` | Upsanhar button label / concluding verse shown in its modal |
| `pranamBtn` | Pranam button |
| `pranam.title` / `pranam.homeLabel` | pranam.html |

To change a text, edit data.js only. Hindi and Gujarati are NOT in Figma —
they were written for this build and need a native reader's check.
Shared Hindi/Gujarati fonts are declared in `assets/css/theme.css`.

---

## 7. Open questions

1. Fonts: the four files in 0.2 were downloaded from Google Fonts (static
   instances at the weights Figma uses).
2. Hindi and Gujarati copy is not in Figma. It was written in data.js and
   needs a native reader's check (verses are Gujarati dohas, transliterated
   into Devanagari for Hindi).
3. Targets for back-btn and home-btn are not defined in the frames; both
   return to the intro (step 0). Pranam opens pranam.html.
5. Shared page styles (body colour, language switch, vertical centring) live
   in `assets/css/theme.css`, linked by index.html and pranam.html.
4. Transition timings were not read from the prototype; 0.8s ease is used.
