# Troubleshooting: UI Not Showing

If you can't see the UI, follow these steps:

## Step 1: Check Dev Server

Make sure the dev server is running:
```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 2: Check Browser Console

1. Open your browser (Chrome/Firefox/Edge)
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for any red error messages
5. Share the error messages if you see any

## Step 3: Check Network Tab

1. In Developer Tools, go to **Network** tab
2. Refresh the page (`Ctrl+R` or `F5`)
3. Check if any files are failing to load (red status)
4. Look for `index.html`, `main.jsx`, and CSS files

## Step 4: Clear Cache

1. Press `Ctrl+Shift+R` (hard refresh) to clear cache
2. Or go to DevTools → Application → Clear Storage → Clear site data

## Step 5: Check Port

Make sure nothing else is using port 5173:
```bash
# Windows PowerShell
netstat -ano | findstr :5173
```

If something is using it, kill the process or change the port in `vite.config.js`

## Step 6: Verify Files

Check that these files exist:
- ✅ `src/App.jsx`
- ✅ `src/main.jsx`
- ✅ `src/index.css`
- ✅ `index.html`
- ✅ `package.json`

## Step 7: Reinstall Dependencies

If nothing works, try:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Common Issues

### Blank White Screen
- Check browser console for JavaScript errors
- Verify all imports are correct
- Check if Tailwind CSS is loading

### "Cannot find module" Error
- Run `npm install` again
- Check file paths in imports

### Port Already in Use
- Kill the process using port 5173
- Or change port in `vite.config.js`:
  ```js
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000
    }
  })
  ```

### CSS Not Loading
- Check `src/index.css` exists
- Verify Tailwind is configured in `tailwind.config.js`
- Check `postcss.config.js` exists

## Quick Test

Create a simple test to see if React is working:

1. Open `src/App.jsx`
2. Temporarily replace with:
```jsx
function App() {
  return (
    <div style={{ padding: '50px', fontSize: '24px' }}>
      <h1>React is Working!</h1>
      <p>If you see this, React is rendering correctly.</p>
    </div>
  );
}

export default App;
```

3. Save and refresh browser
4. If you see "React is Working!", the issue is in components
5. If you still see blank, the issue is in setup

## Still Not Working?

Please share:
1. Browser console errors (screenshot or copy text)
2. Terminal output from `npm run dev`
3. What you see in the browser (blank screen, error message, etc.)

