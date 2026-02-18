# Avishkar Website Hub

Folder structure (clean):

AVISHKAR WEBSITE HUB
│
├── index.html
├── style.css
├── script.js
│
└── techner
     ├── index.html
     ├── style.css
     └── script.js

Notes:
- I created the root files (`index.html`, `style.css`, `script.js`) and a standalone `/techner/` page.
- There may be legacy duplicate files in `hub/` and `techner/` (e.g. `styles.css`). If you want a perfectly clean workspace, delete the `hub/` folder and any `styles.css` duplicates.

To delete duplicates locally using PowerShell:

```powershell
Remove-Item -Recurse -Force "d:\Avishkar Website Hub\hub"
Remove-Item -Force "d:\Avishkar Website Hub\techner\styles.css"
```

After that the structure will match the clean tree above.
