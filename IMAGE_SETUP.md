# Image Setup Guide

## Quick Fix: Add Your Images

The images are not visible because they haven't been added to the project yet. Follow these steps:

### Step 1: Add Images to Public Folder

Place your image files directly in the `public/images/` folder with these exact names:

```
public/
  images/
    about-professional.jpg          (Your professional headshot)
    graduation-single.jpg            (Single graduation photo)
    graduation-ceremony.jpg          (Ceremony photo)
    design-sprint-presentation.jpg   (Presentation photo)
    design-sprint-team.jpg           (Team photo - 6 people)
    design-sprint-group.jpg          (Group photo - large group)
```

### Step 2: Verify Image Paths

The images should be accessible at:
- `http://localhost:5173/images/about-professional.jpg`
- `http://localhost:5173/images/graduation-single.jpg`
- etc.

### Step 3: Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended max 2MB per image
- **Dimensions**: 
  - Profile photos: 400x400px or larger (square)
  - Graduation photos: 600x800px or larger
  - Design sprint photos: Any size (will be auto-cropped)

### Troubleshooting

If images still don't show:

1. **Check file names** - They must match exactly (case-sensitive)
2. **Check file location** - Must be in `public/images/` folder
3. **Restart dev server** - Run `npm run dev` again after adding images
4. **Clear browser cache** - Hard refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Temporary Solution

If you don't have images yet, the site will show:
- Placeholder avatar with "A" initial in About section
- Icon placeholders in Education section
- Placeholder boxes in Design Sprints section

The site will work fine without images, but adding them will make it look much better!

