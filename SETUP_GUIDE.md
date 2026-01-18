# Portfolio Setup Guide

## ✅ Project Status

Your portfolio has been completely rebuilt according to your specifications! The project is ready to use.

## 🚀 Quick Start

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to `http://localhost:5173`

## 📋 What's Been Built

### ✅ Complete Sections
- **Hero Section** - With 3D floating object, headline, and CTAs (View Projects, Download CV, View CV)
- **About Section** - Professional summary with focus cards
- **Skills Section** - Grouped by Frontend, Backend, Tools, CMS
- **Projects Section** - Filterable grid with animated modals (4 featured projects)
- **Experience Section** - Timeline with your work history
- **Education Section** - Degrees and certifications
- **Contact Section** - Form with EmailJS integration + contact info

### ✅ Features Implemented
- Dark/light theme toggle
- Sticky navbar with scroll spy
- Smooth scrolling
- 3D effects (floating object in hero)
- Interactive cards (tilt effect)
- Magnetic buttons
- Responsive design (mobile-first)
- Performance optimized (lazy loading)
- Accessibility features
- SEO meta tags

## 📝 Next Steps

### 1. Add Your CV File

**Option A: Copy from your location**
- Copy `ABHISHEK DONGARE.pdf` from `D:\Resume\Front end dev\Codafication\`
- Paste it into the `public` folder
- Make sure the filename is exactly: `ABHISHEK DONGARE.pdf`

**Option B: Use existing file**
- The file `AbhishekDongare_CV.pdf` is already in the `public` folder
- Rename it to `ABHISHEK DONGARE.pdf` OR
- Update `src/data/profile.js` line 10 to:
  ```javascript
  cvPath: "/AbhishekDongare_CV.pdf"
  ```

### 2. Set Up EmailJS (For Contact Form)

**Step 1:** Sign up at [EmailJS](https://www.emailjs.com/)

**Step 2:** Create an email service (connect your Gmail/Outlook)

**Step 3:** Create an email template with these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_email}}`

**Step 4:** Create `.env` file in project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Step 5:** Restart dev server after adding `.env` file

**Detailed instructions:** See `README.md` section "EmailJS Configuration"

### 3. Customize Content (Optional)

All content is stored in `src/data/`:
- `profile.js` - Personal information
- `projects.js` - Projects (already includes your 4 projects)
- `skills.js` - Skills (already configured)
- `experience.js` - Work experience (already configured)
- `education.js` - Education & certifications (already configured)

### 4. Test Everything

- ✅ Navigate through all sections
- ✅ Test theme toggle (dark/light)
- ✅ Test "Download CV" button
- ✅ Test "View CV" button
- ✅ Test contact form (after EmailJS setup)
- ✅ Test project modals
- ✅ Test on mobile device

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. **Add environment variables** in Vercel dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. **Add environment variables** in Netlify dashboard
5. Deploy!

**Build settings** (auto-detected):
- Build command: `npm run build`
- Publish directory: `dist`

## 📁 File Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # All page sections
│   ├── ui/              # Reusable UI components
│   └── three/           # 3D components
├── context/             # Theme context
├── data/                # All content data
├── hooks/               # Custom hooks
├── App.jsx              # Main app
└── main.jsx            # Entry point
```

## 🎨 Design Features

- **Color Scheme**: Blue to Purple gradients
- **Typography**: Inter font family
- **Effects**: Glassmorphism, subtle glows
- **Animations**: Framer Motion (respects prefers-reduced-motion)
- **3D**: Three.js floating object (disabled on mobile)

## ⚠️ Important Notes

1. **CV File**: Make sure your CV is in the `public` folder with the correct filename
2. **EmailJS**: Contact form won't work without EmailJS setup
3. **Environment Variables**: Never commit `.env` file to Git
4. **Build Warning**: The chunk size warning is normal for Three.js projects

## 🐛 Troubleshooting

### Contact form not working?
- Check EmailJS environment variables are set
- Verify EmailJS service is active
- Check browser console for errors

### CV buttons not working?
- Verify file exists in `public` folder
- Check filename matches exactly (case-sensitive)
- Update `cvPath` in `profile.js` if using different filename

### 3D background not showing?
- Normal on mobile (disabled for performance)
- Disabled if user prefers reduced motion
- Check browser console for errors

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

If you encounter any issues:
1. Check the `README.md` for detailed documentation
2. Review browser console for errors
3. Verify all environment variables are set correctly

---

**Your portfolio is ready!** 🎉

Just add your CV file and set up EmailJS, then you're good to deploy!

