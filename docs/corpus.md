# ROM Corpus Builder (v1)

The browser-based Corpus Builder is available on the GitHub Pages landing page. It creates a **deterministic local snapshot** from explicitly selected `.bin` files. It does not automatically fetch your Google Drive folder and it does **not** upload ROM bytes to GitHub.

## Procedure

1. Download the exact ROM collection from the designated Google Drive folder to your computer and extract it if Google packaged it as a ZIP.
2. Open the GitHub Pages site and choose the 79 `.bin` files using the multiple-file selector (ignore `selectgame.$$$`).
3. Click **Build corpus**, then download the binary, JSON manifest and SHA-256 text file.
4. Keep those three outputs together as an immutable snapshot. Record the Drive folder ID and snapshot date in your private research notes.
5. Verify `rom_count`, per-ROM names and checksums against the intended Drive-folder inventory. The browser builder only attests to the selected files, **not** their completeness or origin.

The binary file concatenates the bytes of the input files in stable filename order, without separators or padding. The manifest stores every entry's name, length, SHA-256 digest, inclusive start offset and **exclusive** end offset, plus the combined SHA-256 digest. A scanner must reject candidates spanning more than one entry's range. On ingestion, verify all offsets, sizes and checksums before accepting the corpus.

An 8×8 bitmap scanner may consider an eight-byte block only where `offset >= blob_offset` and `offset + 8 <= blob_end_exclusive` for a single ROM entry.

**Note:** Building a corpus from the 79 currently observed files is a different step from verifying its source. The website cannot guarantee that locally selected files equal a particular historical Google Drive folder snapshot. The first snapshot should be reviewed before treating it as the canonical research corpus.

## Copyright and distribution

The repository deliberately excludes commercial ROM bytes. Do not commit `g7000-corpus-v1.bin` or third-party ROMs without appropriate redistribution rights. The manifest's metadata may be useful to share publicly after separate rights/privacy review.

## Future upgrades

- Manifest-assisted loading in the ROM Explorer, including boundary enforcement.
- Cross-ROM deduplication and common-pattern analysis.
- Verified source-specific snapshot metadata and independently checked corpus inventories.
