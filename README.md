# Abhishek Dongare - Portfolio Website

A modern, futuristic portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features interactive 3D effects, smooth animations, and a tech-oriented design.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics for background effects
- **Chart.js** - Data visualization for project demos
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running Locally

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚢 Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

### Build Settings (Auto-detected by Vercel)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📄 Adding Your Resume

1. Place your resume PDF in the `public` folder
2. Name it exactly: `AbhishekDongare_Resume.pdf`
3. The download button will automatically work

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── TiltCard.jsx    # 3D tilt effect card
│   ├── MagneticButton.jsx # Magnetic hover button
│   ├── TechBackground.jsx # Three.js background
│   └── ProjectModal.jsx   # Project detail modal
├── sections/            # Page sections
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── DesignSprints.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
├── data/                # Content data
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── sprints.js
├── hooks/               # Custom hooks
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── index.css           # Tailwind imports
```

## 🎨 Features

- **Dark Mode First** - Modern dark theme with optional light mode toggle
- **3D Effects** - Subtle Three.js background in hero section
- **Interactive Cards** - Tilt effect on hover for projects and skills
- **Magnetic Buttons** - Buttons that follow mouse movement
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Responsive Design** - Fully responsive for all screen sizes
- **Performance Optimized** - Heavy animations disabled on mobile
- **Accessibility** - Semantic HTML and ARIA labels
- **SEO Optimized** - Meta tags and proper structure

## 🖼️ Images

Place your images in the `public/images/` folder:
- Professional headshot for About section
- Project screenshots
- Design sprint photos
- Graduation photos

## 📝 Customization

### Update Content

Edit the data files in `src/data/`:
- `projects.js` - Update project details
- `skills.js` - Modify skills list
- `experience.js` - Update work experience
- `sprints.js` - Update design sprint information

### Update Contact Information

Edit `src/sections/Contact.jsx` to update:
- Email address
- Social media links (GitHub, LinkedIn)

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: {
    DEFAULT: '#4f46e5',  // Change this
    light: '#6366f1',
    dark: '#4338ca',
  },
  accent: '#8b5cf6',     // Change this
}
```

## 🔧 Troubleshooting

### Images not showing
- Ensure images are in `public/images/` folder
- Check file names match exactly (case-sensitive)
- Restart dev server after adding images

### 3D background not working
- Check browser console for errors
- Ensure Three.js dependencies are installed
- Background is automatically disabled on mobile

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 16+)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Abhishek Dongare**
- Email: abhishekdongare99@gmail.com
- LinkedIn: [abhishek-dongare-3404331ab](https://www.linkedin.com/in/abhishek-dongare-3404331ab)
- GitHub: [Abhishek121099](https://github.com/Abhishek121099)
