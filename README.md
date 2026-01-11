# Tharushi Nikethana - Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, education, and skills with a beautiful green and black design.

## Features

✨ **Modern Design**
- Professional green (#10b981) and black color scheme
- Smooth animations and transitions
- Responsive grid layouts
- Clean typography

📱 **Fully Responsive**
- Mobile-first design
- Adaptive layouts for all screen sizes
- Touch-friendly interface

🎯 **Key Sections**
- **Hero Section** - Engaging introduction with CV download
- **About** - Professional summary and highlights
- **Education** - Timeline view of education journey
- **Skills** - Technical skills with progress bars, soft skills, and certifications
- **Projects** - 11+ projects organized by 6 categories:
	- Mobile Apps (Android)
	- Web Apps (Full-stack)
	- Standalone Systems (Desktop)
	- IoT Projects
	- ML Models
	- DSA Tools
- **Contact** - Contact form and social media links
- **Footer** - Quick navigation and social links

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/TharushiNK/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Customization

### Update Profile Information
Edit the data directly in the component files:
- `src/components/Hero.jsx` - Name, title, and contact info
- `src/components/About.jsx` - About section content
- `src/components/Education.jsx` - Education entries
- `src/components/Skills.jsx` - Skills and certifications
- `src/components/Projects.jsx` - Project information
- `src/components/Contact.jsx` - Contact details

### Add Your Professional Photo
1. Place your photo in `public/assets/profile.jpg`
2. The Hero section will automatically display it

### Add Project Screenshots
1. Create a `screenshots` folder in `public/assets/projects/`
2. Update the project image URLs in `src/components/Projects.jsx`

### Download CV
1. Add your CV file as `public/assets/cv/Tharushi_CV.pdf`
2. Users can download it from the Hero section

### Customize Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
	--primary-green: #10b981;
	--dark-green: #047857;
	--black: #1f2937;
}
```

## Deploying to Vercel

### Option 1: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Connect GitHub Repository
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Option 3: Using Vercel Dashboard
1. Visit [vercel.com/new](https://vercel.com/new)
2. Connect your GitHub account
3. Select the portfolio repository
4. Configure project settings:
	 - Framework: Vite
	 - Root Directory: ./
	 - Build Command: `npm run build`
	 - Output Directory: `dist`
5. Click "Deploy"

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg (your photo)
│       ├── cv/
│       │   └── Tharushi_CV.pdf
│       └── projects/
│           └── screenshots/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Education.jsx & Education.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The portfolio is optimized for:
- Fast load times with Vite
- Minimal CSS bundle size
- Smooth animations at 60fps
- Image optimization (place optimized images in public/)
- SEO-friendly structure

## Contact Information

- **Email**: tnkumari2003@gmail.com
- **Phone**: 0761015928
- **GitHub**: [TharushiNK](https://github.com/TharushiNK)
- **LinkedIn**: [Tharushi Nikethana](https://linkedin.com/in/tharushi-nikethana)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and create your own portfolio. If you have suggestions or improvements, feel free to submit a pull request!

---

**Made with ❤️ using React & Vite**
