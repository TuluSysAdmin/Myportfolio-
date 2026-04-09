# Tulu Bekele — Portfolio Website

A clean, responsive IT portfolio built with plain HTML, CSS, and JavaScript.
No frameworks, no build tools — open the folder in VS Code and you're ready.

---

## Folder Structure

```
portfolio/
├── index.html       ← All page content (edit this)
├── style.css        ← All styles and colours (edit this)
├── script.js        ← All interactivity (edit this)
├── README.md        ← This file
└── images/          ← CREATE this folder, put your photos here
    ├── profile.jpg      ← Your headshot (any size, square preferred)
    ├── project1.jpg     ← Enterprise Server screenshot
    ├── project2.jpg     ← Backup & DR screenshot
    ├── project3.jpg     ← Nextcloud screenshot
    ├── project4.jpg     ← IDF / network screenshot
    ├── project5.jpg     ← GitHub docs screenshot
    └── project6.jpg     ← Windows 11 migration screenshot
```

> The `images/` folder does **not** exist yet — you create it.
> Image filenames are case-sensitive on GitHub Pages (use lowercase).

---

## Quick Start in VS Code

1. **Open the folder** in VS Code: `File → Open Folder → select "portfolio"`
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel
3. Right-click `index.html` → **Open with Live Server**
4. Your browser opens automatically — edits save and refresh live

---

## Adding Your Profile Photo

1. Create the `images/` folder inside `portfolio/`
2. Save your headshot as **`images/profile.jpg`**
   - Square crop works best (e.g. 400×400 px)
   - JPEG, PNG, or WebP all work
3. The site loads it automatically — no code changes needed

If the file is missing, a silhouette placeholder shows instead.

---

## Adding Project Screenshots

For each project card, save a screenshot to the `images/` folder:

| File name           | Project                          |
|---------------------|----------------------------------|
| `project1.jpg`      | Enterprise Server Deployment     |
| `project2.jpg`      | Backup & Disaster Recovery       |
| `project3.jpg`      | Nextcloud Private Cloud          |
| `project4.jpg`      | IDF Network Build-Out            |
| `project5.jpg`      | Technical Documentation          |
| `project6.jpg`      | Windows 10 → 11 Migration        |

**Tips for good screenshots:**
- Landscape (wider than tall) — cards are 200 px tall
- Aim for 1200×675 px or similar 16:9 crop
- PNG or JPEG both work fine

If a file is missing, the card shows a grey placeholder automatically.

---

## Customising Content

All text content lives in **`index.html`**. Open it and search for what you want to change:

| What                        | Search for                    |
|-----------------------------|-------------------------------|
| Your name                   | `Tulu`                        |
| Job title                   | `IT Support Specialist`       |
| Tagline                     | `Solving technical problems`  |
| Email address               | `Tulubekele23@gmail.com`      |
| Phone number                | `651-347-9978`                |
| GitHub URL                  | `YOUR_USERNAME` (two places)  |
| LinkedIn URL                | `YOUR_USERNAME`               |
| Project titles & text       | `project-num` sections        |
| Experience bullet points    | `timeline-body` sections      |

### Changing Colours

Open **`style.css`** and look for the `:root` block at the very top:

```css
:root {
  --bg:       #1e2a3a;   /* page background */
  --surface:  #273449;   /* card backgrounds */
  --accent:   #4f9cf9;   /* blue highlight colour */
  --text:     #eaf0fa;   /* main text */
  --text-muted: #c0cfe8; /* secondary text */
  /* ... */
}
```

Change any value here and it updates everywhere on the site instantly.

---

## Deploying to GitHub Pages (free hosting)

### Step 1 — Push to GitHub

```bash
# Inside the portfolio folder:
git init
git add .
git commit -m "Initial portfolio"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on github.com
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Branch", select **main** and folder **/ (root)**
4. Click **Save**
5. Wait ~60 seconds, then visit:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Step 3 — Update after changes

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages rebuilds automatically — changes appear in about 30 seconds.

---

## Important Notes for GitHub Pages

- **Images must be in the `images/` folder** and committed to git
- File names are **case-sensitive** — use all lowercase (`profile.jpg` not `Profile.JPG`)
- The contact form shows a visual confirmation but **does not actually send email** without a backend service. To make it send real emails, sign up for [Formspree](https://formspree.io) (free tier available) and follow their HTML form instructions.

---

## File Reference

| File         | What to edit                                      |
|--------------|---------------------------------------------------|
| `index.html` | All text, links, GitHub/LinkedIn URLs, structure  |
| `style.css`  | Colours, spacing, fonts, layout                   |
| `script.js`  | Dark/light theme colours, animations, form logic  |
| `images/`    | Drop your photos here — no code change needed     |
