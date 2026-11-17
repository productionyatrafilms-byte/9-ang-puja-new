# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## index.html

All 16 frames are states of one page — see index.md for the step table.

| Frame    | Node ID | Figma Link                                                                               |
| -------- | ------- | ---------------------------------------------------------------------------------------- |
| Frame 5  | node-id=83-1118 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1118&m=dev |
| Frame 28 | node-id=83-3398 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-3398&m=dev |
| Frame 12 | node-id=83-1209 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1209&m=dev |
| Frame 14 | node-id=83-1259 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1259&m=dev |
| Frame 13 | node-id=83-1310 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1310&m=dev |
| Frame 15 | node-id=83-1361 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1361&m=dev |
| Frame 16 | node-id=83-1412 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1412&m=dev |
| Frame 17 | node-id=83-1899 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1899&m=dev |
| Frame 18 | node-id=83-1463 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1463&m=dev |
| Frame 20 | node-id=83-1950 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1950&m=dev |
| Frame 21 | node-id=83-1514 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1514&m=dev |
| Frame 22 | node-id=83-1572 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1572&m=dev |
| Frame 23 | node-id=83-1630 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1630&m=dev |
| Frame 24 | node-id=83-1688 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1688&m=dev |
| Frame 25 | node-id=83-1746 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1746&m=dev |
| Frame 26 | node-id=83-1804 | https://www.figma.com/design/NjK34BwmabweTvSqEb8rSv/Nav-Aangi-Puja?node-id=83-1804&m=dev |

<!-- One row per frame.
     Node ID must match the node-id in the URL — e.g. a link ending
     ?node-id=82-860 means the Node ID column reads node-id=82-860.
     Several frames can map to one HTML file when they are states of the
     same page (an intro that expands on click, for example).
     Add another "## [page].html" heading per page. -->

---

## How to Read Each Frame

For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map

> Fill after reading Figma. Drives click events and navigation.

| Page | Layer Name | Interaction | Target | Animation |
| ---- | ---------- | ----------- | ------ | --------- |
| index | intro arrow (98:3720) | click | Frame 28 state, then Frame 12 automatically | slide + fade, 0.8s ease |
| index | b (dot under the hand) | click | next frame in the sequence (12 → 14 → 13 → 15 → 16 → 17 → 18 → 20 → 21 → 22 → 23 → 24 → 25 → 26) | dot fills, hand moves, boxes slide, 0.8s ease |
| index | Pranam (83:1861) | click | pranam.html (copied from the 8pujameaningadv build, no Figma frame listed) | page load |
| index | Layer 4 back / Vector home | click | not defined in Figma — returns to Frame 5 state | 0.8s ease |

---

## Sliders

> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
| ---- | ------------ | ----------------- | ------ | ----------- |
| index | none — the verse pill scrolls between states, no Swiper | | | |

---

## Translations

> Figma usually carries English only. Every visible text node needs all three.

| Page | English | Hindi | Gujarati |
| ---- | ------- | ----- | -------- |
| index | all copy (title, intro box, 18 box texts, 9 verses, Pranam) | pending — not in Figma | pending — not in Figma |
