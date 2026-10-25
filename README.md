# G7000 Reloaded

**Preserving the building blocks of early video games — and making them accessible for exploration, research, and new creative work.**

G7000 Reloaded is an independent research and digital-preservation project dedicated to the **Philips Videopac G7000 / Magnavox Odyssey²** and its games.

## Mission

The project aims to identify, document, catalogue, and eventually make the visual and audio building blocks of original G7000/Odyssey² games usable for research, education, experimentation, and the development of new games.

By studying sprites, built-in characters, graphical patterns, animations, sound effects, and other game elements, we hope to **celebrate the ingenuity of early video-game design**, preserve knowledge of this platform, and encourage renewed engagement with its technological and cultural heritage.

The emphasis is not simply on reproducing old games. It is on understanding how they were made, appreciating their design constraints, and creating opportunities to explore and build upon that knowledge.

## Research objectives

1. **Inventory and provenance:** catalogue game ROMs, identify versions, and record cryptographic checksums and source references.
2. **Visual analysis:** investigate hardware characters, sprites, sprite patterns, graphical compositions, colours, and animations.
3. **Audio analysis:** document sound-register behaviour, sound effects, musical patterns, and reproducible sound sequences.
4. **Extraction and validation:** combine static ROM analysis with instrumented emulation to distinguish plausible data patterns from assets demonstrably used during gameplay.
5. **Open documentation:** develop a searchable, traceable catalogue with technical metadata and visual/audio previews.
6. **Creative reuse:** explore tools that can support new browser-based games and, where technically feasible, games compatible with original G7000/Odyssey² hardware.

## Methodology

G7000 cartridges generally store code and data, not ready-made PNG images or audio files. Reliable extraction therefore requires both:

- **Static analysis** of ROM contents, data structures, and Intel MCS-48-family instructions.
- **Dynamic analysis** of emulator state, including graphics and sound hardware registers over time.

We will keep original data, reconstructed assets, speculative candidates, and modern adaptations clearly differentiated. Each confirmed asset should carry provenance information, such as its source ROM, relevant offsets or observed register states, and extraction method.

## Planned stages

| Stage | Focus | Status |
| --- | --- | --- |
| 1 | ROM inventory, checksums, and initial 8×8 pattern exploration | Planned |
| 2 | Emulator instrumentation, verified visual assets, and sound capture | Planned |
| 3 | Searchable browser-based asset library | Planned |
| 4 | Experiments and tools for creating new games | Future |

## Project website

A public research website and, eventually, an interactive asset explorer will be hosted using **GitHub Pages**.

**Planned URL:** https://j0hnhaas.github.io/g7000-reloaded/

The website is under construction. This repository is the primary location for project documentation and code.

## Scope and responsible preservation

G7000 Reloaded is an independent, non-commercial research initiative and is not affiliated with Philips, Magnavox, or the original game publishers.

**Availability of a ROM does not establish permission to redistribute it or its assets.** Original games and their audiovisual content may remain protected by copyright or other rights. The project will distinguish technical documentation and original research from third-party material, record attribution where possible, and evaluate redistribution rights before publishing extracted content. No original commercial ROMs are intended to be included in this repository by default.

## Contributing

Documentation, technical corrections, reproducible experiments, references, and research collaboration are welcome. As the project develops, contributions can be coordinated through GitHub issues and pull requests.

## Status

**Early research / project setup.** The catalogue, extraction tools, asset database, and game-building environment are not yet implemented.

---

*G7000 Reloaded — understanding yesterday's games to inspire tomorrow's experiments.*
