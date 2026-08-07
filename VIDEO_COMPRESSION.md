# Video Compression Guide

_Last updated: 2026-08-07_

How to prepare a raw video for use on this site. Source files come out of the edit
suite at ~19–20 Mbps, which is 5–10× more than a muted background loop needs and far
over GitHub's 50 MB file-size recommendation. Every video in `public/videosHQ/` has
been through the recipe below.

---

## 1. The recipe

```bash
ffmpeg -i "INPUT.mp4" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -an -movflags +faststart \
  "OUTPUT.mp4"
```

Run it, confirm the output (§3), then replace the raw file in `public/videosHQ/`.

### Why each flag

| Flag | Reason |
|---|---|
| `-c:v libx264` | H.264 — universal browser support, which `.mp4` implies. |
| `-preset slow` | Spends more CPU to find a smaller encode at the same quality. Encoding is one-off; download size is paid by every visitor. |
| `-crf 26` | **Quality target, not bitrate.** Simple/dark footage gets small automatically; complex footage keeps the bits it needs. 26 holds up well for background video sitting under dark overlays and text. Lower = better quality + bigger file (18–23 is typical for foreground video). |
| `-pix_fmt yuv420p` | Maximum decoder compatibility. Without it some sources encode as `yuv444p`, which Safari and some Android browsers refuse to play. |
| `-an` | **Strips audio.** Every video on this site is a muted background loop, so the audio track is pure dead weight (~317 kbps on the originals). |
| `-movflags +faststart` | Moves the metadata index to the front of the file so playback can begin before the whole file downloads. Big perceived-performance win. |

### Deliberately *not* doing

- **No downscaling.** 1080p is right for full-width hero backgrounds; downscaling risks
  softness on large displays, and CRF already gets the files far under target.
- **No frame-rate change.** Keeps the original cadence (24 or 30 fps).

---

## 2. Getting ffmpeg

If `ffmpeg` isn't on your PATH, the no-install option is the static npm package:

```bash
npm install ffmpeg-static ffprobe-static
node -e "console.log(require('ffmpeg-static'))"   # prints the binary path
```

Use the printed path in place of `ffmpeg`. On Windows you can also
`winget install Gyan.FFmpeg`.

---

## 3. Verifying the output

**Always confirm the encode didn't truncate the clip** — a fast encode on a short file
is normal, but a silently broken one looks the same on disk.

```bash
# Dimensions / duration / bitrate
ffprobe -v error -show_entries format=duration,bit_rate:stream=codec_type,codec_name,width,height \
  -of default=noprint_wrappers=1 OUTPUT.mp4

# Frame count must match the source exactly
ffprobe -v error -count_frames -select_streams v:0 \
  -show_entries stream=nb_read_frames -of default=noprint_wrappers=1 OUTPUT.mp4
```

Checklist:
- [ ] Width/height unchanged
- [ ] Duration unchanged
- [ ] **Frame count identical to source**
- [ ] Audio stream gone
- [ ] File comfortably under 50 MB

A visual spot-check is also worth it — pull a mid-clip frame and look at it:

```bash
ffmpeg -ss 9 -i OUTPUT.mp4 -frames:v 1 frame.jpg
```

---

## 4. Results so far

| File | Before | After | Reduction | Source profile |
|---|---:|---:|---:|---|
| `Video_Site.mp4` | 98 MB | 12 MB | 88% | 1920×1080 @30, ~19.8 Mbps |
| `Video_NossosServicos.mp4` | 76 MB | 8 MB | 89% | 1920×1080 @30, ~20.3 Mbps |
| `Futuro_VFX_v001.mp4` | 70 MB | 2.7 MB | 96% | 624×724 @30, ~20.5 Mbps |
| `Pos_Producao_Transforma_v001.mp4` | 44 MB | 1.15 MB | 97% | 626×644 @24, ~19.1 Mbps |

`public/videosHQ/` total: **~24 MB** (was ~1 GB before the first pass, which also
removed 11 unused videos).

---

## 5. Important: git history

Committing a large video, then deleting or compressing it later, **does not shrink the
repository** — the original blob stays in history forever and is re-downloaded on every
clone. GitHub hard-rejects any file over 100 MB and warns above 50 MB.

**So: compress before the first commit.** If an oversized file has already been
committed but not yet pushed, squash it away rather than committing a "fix" on top —
see the history-rewrite note in `PROJECT_DOCUMENTATION.md`.

---

## 6. Where the videos are used

| File | Used by |
|---|---|
| `Video_Site.mp4` | Home hero background (`VideoBackground`) |
| `Video_NossosServicos.mp4` | Post-Production + VFX page heroes |
| `Futuro_VFX_v001.mp4` | Services page — VFX block; Home "O Futuro dos Efeitos Visuais" uses `new-media/Futuro_VFX_v001_1.mp4` |
| `Pos_Producao_Transforma_v001.mp4` | Services page — Post-Production block |

Videos are referenced by absolute path (e.g. `/videosHQ/Video_Site.mp4`), so keeping the
filename identical when replacing a file means no code change is needed.
