# Abhishek Dongare - React Developer Portfolio

A premium, modern, job-winning developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Features elegant 3D effects, smooth animations, and a fully responsive design.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **@react-three/fiber** - 3D graphics rendering
- **@react-three/drei** - Three.js helpers
- **@emailjs/browser** - Email service integration
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishek121099/portfolio.git
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

## 📧 EmailJS Configuration

The contact form uses EmailJS to send emails directly to your inbox. Follow these steps to set it up:

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note your **Service ID**

### Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Configure the template as follows:

**Template Name:** Portfolio Contact Form

**Subject:**
```
{{subject}} - Portfolio Contact Form
```

**Content:**
```
New message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
This email was sent from your portfolio contact form.
```

**To Email:** Make sure to set the recipient email to: `abhishekdongare99@gmail.com` (or use `{{to_email}}` variable if your template supports it)

4. **Important:** In the template settings, set the recipient email to `abhishekdongare99@gmail.com`
5. Note your **Template ID**

### Step 4: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Replace the values with your actual EmailJS credentials
3. **Important**: Add `.env` to `.gitignore` to keep your keys secure

### Step 6: Test the Form

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## 📄 Adding Your Resume/CV

### Option 1: Using the Provided Path

If your CV is at `D:\Resume\Front end dev\Codafication\ABHISHEK DONGARE.pdf`:

1. Copy the file to the `public` folder in your project
2. Rename it to `ABHISHEK DONGARE.pdf` (if needed)
3. The download buttons will automatically work

### Option 2: Manual Setup

1. Place your CV PDF file in the `public` folder
2. Name it exactly: `ABHISHEK DONGARE.pdf`
3. Update the `cvPath` in `src/data/profile.js` if you use a different filename:

```javascript
cvPath: "/your-cv-filename.pdf"
```

### View CV Button

The "View CV" button opens the PDF in a new tab. Make sure the file is in the `public` folder for this to work.

## 🎨 Customization

### Update Personal Information

Edit `src/data/profile.js`:
```javascript
export const profile = {
  name: "Your Name",
  role: "Your Role",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+61 000000000",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ... other fields
};
```

### Add/Edit Projects

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    liveLink: "https://project-url.com",
    githubLink: "https://github.com/username/repo",
    description: "Project description",
    highlights: ["Feature 1", "Feature 2"],
    tags: ["React", "JavaScript"],
    problem: "Problem statement",
    approach: "Your approach",
    outcome: "Results achieved",
    tech: ["React", "Tailwind CSS"],
    challenges: "Challenges faced",
    improvements: "Future improvements"
  },
  // ... more projects
];
```

### Update Skills

Edit `src/data/skills.js`:
```javascript
export const skills = {
  frontend: ["React.js", "JavaScript", ...],
  backend: ["Node.js", "RESTful APIs", ...],
  tools: ["Git", "Figma", ...],
  cms: ["WordPress", "Shopify", ...]
};
```

### Update Experience

Edit `src/data/experience.js`:
```javascript
export const experience = [
  {
    id: 1,
    position: "Your Position",
    company: "Company Name",
    period: "Start Date – End Date",
    location: "Location",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // ... more responsibilities
    ]
  }
];
```

### Update Education

Edit `src/data/education.js`:
```javascript
export const education = [
  {
    id: 1,
    degree: "Degree Name",
    specialization: "Specialization",
    institution: "Institution Name",
    location: "Location",
    completed: "Completion Date",
    highlights: ["Highlight 1", "Highlight 2"]
  }
];
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#4f46e5',  // Change primary color
    light: '#6366f1',
    dark: '#4338ca',
  },
  accent: '#8b5cf6',     // Change accent color
}
```

## 🚢 Deployment

### Deploy to Vercel

#### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

#### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Vercel will automatically detect Vite and configure build settings
6. **Important**: Add your EmailJS environment variables in Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add `VITE_EMAILJS_SERVICE_ID`
   - Add `VITE_EMAILJS_TEMPLATE_ID`
   - Add `VITE_EMAILJS_PUBLIC_KEY`
7. Click **Deploy**

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. **Important**: Add your EmailJS environment variables:
   - Go to **Site settings** → **Environment variables**
   - Add `VITE_EMAILJS_SERVICE_ID`
   - Add `VITE_EMAILJS_TEMPLATE_ID`
   - Add `VITE_EMAILJS_PUBLIC_KEY`
7. Click **Deploy site**

### Build Settings (Auto-detected)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Navigation with scrollspy
│   │   └── Footer.jsx       # Footer component
│   ├── sections/
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects section
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Education.jsx    # Education & certifications
│   │   └── Contact.jsx      # Contact form
│   ├── ui/
│   │   ├── TiltCard.jsx     # 3D tilt effect card
│   │   ├── MagneticButton.jsx # Magnetic hover button
│   │   └── ProjectModal.jsx # Project detail modal
│   └── three/
│       ├── FloatingObject.jsx # 3D background object
│       └── ProjectsReaction.jsx # 3D reaction to projects
├── context/
│   └── ThemeContext.jsx     # Dark/light theme context
├── data/
│   ├── profile.js           # Personal information
│   ├── projects.js          # Projects data
│   ├── experience.js        # Work experience
│   ├── education.js         # Education & certifications
│   └── skills.js            # Skills data
├── hooks/
│   └── useScrollSpy.js      # Scroll spy hook
├── App.jsx                  # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎨 Features

- **Dark Mode First** - Modern dark theme with optional light mode toggle
- **3D Effects** - Subtle Three.js floating object in hero section
- **Interactive Cards** - Tilt effect on hover for projects and skills
- **Magnetic Buttons** - Buttons that follow mouse movement
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Scroll Spy** - Active section highlighting in navigation
- **Responsive Design** - Fully responsive for all screen sizes
- **Performance Optimized** - Lazy loading, optimized 3D rendering
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized** - Meta tags and proper structure
- **Email Integration** - Contact form with EmailJS

## 🔧 Troubleshooting

### Contact Form Not Sending Emails

1. Check that all EmailJS environment variables are set correctly
2. Verify your EmailJS service is connected and active
3. Check browser console for error messages
4. Ensure your EmailJS template variables match the form data

### 3D Background Not Showing

- The 3D background is automatically disabled on mobile devices
- It's also disabled if `prefers-reduced-motion` is enabled
- Check browser console for Three.js errors

### Build Errors

1. Clear `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check Node.js version (requires 16+):
```bash
node --version
```

3. Ensure all environment variables are set in production

### CV Download Not Working

1. Ensure the CV file is in the `public` folder
2. Check the filename matches exactly (case-sensitive)
3. Verify the `cvPath` in `src/data/profile.js` is correct

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Abhishek Dongare**

- Email: abhishekdongare99@gmail.com
- Phone: +61 0432006905
- LinkedIn: [abhishek-dongare-3404331ab](https://linkedin.com/in/abhishek-dongare-3404331ab)
- GitHub: [Abhishek121099](https://github.com/Abhishek121099)
- Location: Brisbane, Australia

---

## 📋 Quick Reference

### Files to Edit for Content

1. **Personal Info**: `src/data/profile.js`
2. **Projects**: `src/data/projects.js`
3. **Skills**: `src/data/skills.js`
4. **Experience**: `src/data/experience.js`
5. **Education**: `src/data/education.js`

### How to Connect Your Email

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Add environment variables to `.env` file
4. Add same variables to your hosting platform (Vercel/Netlify)

### How to Replace CV

1. Place your CV PDF in the `public` folder
2. Name it `ABHISHEK DONGARE.pdf` (or update `cvPath` in `profile.js`)

### How to Deploy

1. Push code to GitHub
2. Connect to Vercel or Netlify
3. Add environment variables
4. Deploy!

### How to Add New Projects

1. Open `src/data/projects.js`
2. Add a new project object to the array
3. Include all required fields (see existing projects for reference)
