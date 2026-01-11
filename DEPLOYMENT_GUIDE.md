# Vercel Deployment Guide

Your portfolio is ready to deploy on Vercel! Follow these steps to get your site live.

## What You Need

✅ GitHub account (recommended)
✅ Vercel account (free)
✅ Your portfolio code

## Step 1: Prepare Your Code

### Add Your Professional Photo
1. Replace `public/assets/profile.jpg` with your professional photo
2. Supported formats: JPG, PNG, WebP
3. Recommended size: 400x400px

### Add Your CV
1. Save your CV as PDF
2. Place it at `public/assets/cv/Tharushi_CV.pdf`
3. Users can download it from the Hero section

### Update Your GitHub Links
Edit `src/components/Projects.jsx` and update the GitHub URLs for each project:
```jsx
github: 'https://github.com/YOUR_USERNAME/project-name'
```

## Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
```bash
cd c:\Users\ASUS\my-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

2. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio` or `my-portfolio`
   - Copy the repository URL

3. **Connect and push**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Connect GitHub (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in (or create account) with GitHub
3. Click "New Project"
4. Click "Import Git Repository"
5. Select your portfolio repository
6. **Configure Build Settings**:
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Click "Deploy"

**✓ Done!** Your site will be live in 1-2 minutes

### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
cd c:\Users\ASUS\my-portfolio
vercel
```

3. **Follow the prompts**:
   - Connect GitHub account (optional)
   - Confirm project settings
   - Click deploy link

## Step 4: Add a Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow Vercel's DNS instructions

## After Deployment

### Update Content
Your site automatically redeploys when you push changes to GitHub:

```bash
# Make changes to components
git add .
git commit -m "Update projects section"
git push
```

Vercel will rebuild and redeploy automatically within 1-2 minutes.

### Monitor Performance
- Vercel dashboard shows analytics
- Check "Deployments" tab for build logs
- View performance metrics under "Analytics"

### Preview URLs
- **Production**: `https://your-portfolio.vercel.app`
- **Preview**: Automatic for each pull request
- **Custom Domain**: Your custom URL

## Troubleshooting

### Build Fails
Check the build logs in Vercel dashboard:
1. Go to "Deployments"
2. Click the failed deployment
3. Scroll to "Build Logs"
4. Look for error messages

Common issues:
- Missing dependencies: Run `npm install` locally
- Syntax errors: Check console for red squiggles
- Image paths: Use `/assets/...` for public folder

### Site Not Loading
- Clear browser cache (Ctrl+Shift+Del)
- Check that `index.html` exists in root
- Verify environment variables if needed

### Custom Domain Issues
- Wait 24-48 hours for DNS propagation
- Verify nameserver settings with your domain registrar
- Use DNS checker: [whatsmydns.net](https://whatsmydns.net)

## Environment Variables (Optional)

If you add any environment variables in future:

1. Create `.env.local` in project root
2. Go to Vercel project → Settings → Environment Variables
3. Add your variables there
4. Redeploy

## Performance Tips

✅ **Already optimized for you:**
- Fast Vite build
- CSS-only styling (no heavy libraries)
- Minimal JavaScript
- Smooth animations

📸 **Further optimization:**
- Compress images before adding to `public/`
- Use WebP format for images
- Lazy load images if adding many

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vite.dev
- **React Docs**: https://react.dev

## Quick Checklist

- [ ] Photos and CV added to `public/assets/`
- [ ] GitHub links updated in Projects component
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Domain connected (optional)
- [ ] Deployment successful ✓

---

**Your portfolio is now live! 🎉**

Share your portfolio link:
- LinkedIn: Add to profile
- Resume: Include as portfolio link
- Job applications: Share in applications
- Social media: Share on Twitter, etc.

Good luck! 🚀
