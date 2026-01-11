# Setup Instructions for Images & Media

## Adding Your Professional Photo

### Step 1: Prepare Your Photo
1. Find a professional headshot (portrait oriented)
2. Recommended dimensions: 400x400px to 600x600px
3. Format: JPG, PNG, or WebP
4. File size: Less than 500KB (for better loading)

### Step 2: Add to Project
1. Save your photo as `profile.jpg`
2. Place it in: `public/assets/profile.jpg`
3. Create the folders if they don't exist:
   ```
   public/
   └── assets/
       └── profile.jpg
   ```

### Step 3: Verify
- The photo will automatically appear in the Hero section
- If not showing, check file path and name spelling

## Adding Your CV

### Step 1: Prepare Your CV
1. Export your CV as PDF (from Word/Google Docs)
2. Recommended name: `Tharushi_CV.pdf`
3. File size: Less than 5MB

### Step 2: Add to Project
1. Create CV folder: `public/assets/cv/`
2. Place PDF inside: `public/assets/cv/Tharushi_CV.pdf`

### Step 3: Verify
- The "Download CV" button on Hero section will work
- Users can download the PDF when clicked

## Adding Project Screenshots (Optional)

### Step 1: Prepare Screenshots
1. Capture screenshots of your projects
2. Crop/resize to consistent dimensions (800x600px recommended)
3. Save as PNG or JPG
4. Compress images (use [tinypng.com](https://tinypng.com))

### Step 2: Add to Project
```
public/
└── assets/
    └── projects/
        ├── mobile-safety-app.jpg
        ├── tuition-system.jpg
        ├── car-rental.jpg
        └── ...
```

### Step 3: Update Components
Edit `src/components/Projects.jsx` and add images to projects:

```jsx
const projects = [
  {
    id: 1,
    title: 'Mobile Safety App',
    // ... other fields ...
    image: '/assets/projects/mobile-safety-app.jpg' // Add this
  },
  // ...
];
```

Then update the project card to display:
```jsx
<div className="project-image">
  <img src={project.image} alt={project.title} />
</div>
```

Add styling in `Projects.css`:
```css
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
```

## Folder Structure After Setup

```
my-portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg (your photo)
│       ├── cv/
│       │   └── Tharushi_CV.pdf (your CV)
│       └── projects/
│           ├── mobile-safety-app.jpg
│           ├── tuition-system.jpg
│           └── ... (other screenshots)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── .vercelignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── DEPLOYMENT_GUIDE.md
```

## Updating Contact Information

Edit `src/components/Contact.jsx` to update your contact details:

```jsx
<a href="tel:+94761015928">0761015928</a>  // Your phone
<a href="mailto:your-email@gmail.com">Email</a>  // Your email
```

Also update in `src/components/Hero.jsx`

## Updating Project Links

Edit `src/components/Projects.jsx`:

```jsx
{
  id: 1,
  title: 'Project Name',
  github: 'https://github.com/YOUR_USERNAME/repo-name',
  // ...
}
```

Make sure to replace:
- `YOUR_USERNAME` with your GitHub username
- `repo-name` with your actual repository name

## Testing Locally

After adding media files:

```bash
npm run dev
```

Visit `http://localhost:5173` to preview your changes.

## Image Optimization Tips

✅ **Best Practices:**
- Use PNG for screenshots with transparency
- Use JPG for photographs
- Use WebP for better compression (supported by modern browsers)
- Compress images before uploading (target: <200KB per image)

📸 **Free Tools:**
- [TinyPNG](https://tinypng.com) - Compress images
- [Squoosh](https://squoosh.app) - Convert and optimize
- [JPEG.io](https://jpeg.io) - Quick JPEG compression

## Troubleshooting

### Image Not Showing
- Check file path in code (case-sensitive on Linux/Mac)
- Verify file exists in `public/` folder
- Clear browser cache and reload
- Open DevTools (F12) → Network tab → check for 404 errors

### CV Download Not Working
- Ensure PDF exists at `public/assets/cv/Tharushi_CV.pdf`
- Check browser console for errors (F12 → Console)
- Try different PDF (some corrupted PDFs cause issues)

### Large File Sizes
- Compress images using TinyPNG or Squoosh
- Use correct format (PNG for screenshots, JPG for photos)
- Target file sizes:
  - Profile photo: <300KB
  - Project screenshots: <200KB each
  - CV PDF: <2MB

## Next Steps

1. ✅ Add your professional photo
2. ✅ Add your CV
3. ✅ Update contact information
4. ✅ Update project GitHub links
5. ✅ (Optional) Add project screenshots
6. ✅ Test locally with `npm run dev`
7. ✅ Push to GitHub
8. ✅ Deploy to Vercel (see DEPLOYMENT_GUIDE.md)

---

Need help? Check the README.md or DEPLOYMENT_GUIDE.md files!
