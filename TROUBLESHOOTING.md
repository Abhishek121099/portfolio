# Troubleshooting Guide

## Common Errors and Solutions

### Error: Cannot find module or dependency errors

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall all dependencies
npm install
```

### Error: Tailwind CSS not working

**Solution:**
1. Ensure `tailwind.config.js` and `postcss.config.js` are in the root directory
2. Check that `src/index.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Restart the dev server

### Error: Three.js or React Three Fiber errors

**Solution:**
1. Ensure all dependencies are installed:
   ```bash
   npm install @react-three/fiber @react-three/drei three
   ```
2. If errors persist, the TechBackground component will automatically disable on mobile
3. Check browser console for specific error messages

### Error: Chart.js not rendering

**Solution:**
1. Ensure Chart.js is installed:
   ```bash
   npm install chart.js react-chartjs-2
   ```
2. Check that Chart.js is properly registered in `ProjectModal.jsx`

### Port already in use

**Solution:**
```bash
# Kill the process using port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

### Build errors

**Solution:**
1. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```
2. Clear browser cache (Ctrl+Shift+R)
3. Check for syntax errors in console

### Images not loading

**Solution:**
1. Ensure images are in `public/images/` folder
2. Use exact file names (case-sensitive)
3. Restart dev server after adding images
4. Check browser console for 404 errors

## Quick Fix Commands

```bash
# Full clean install
rm -rf node_modules package-lock.json
npm install
npm run dev

# Check for outdated packages
npm outdated

# Update all packages (use with caution)
npm update
```

## Still Having Issues?

1. Check the browser console (F12) for specific error messages
2. Check the terminal where `npm run dev` is running
3. Ensure Node.js version is 16 or higher: `node --version`
4. Try clearing all caches and reinstalling

