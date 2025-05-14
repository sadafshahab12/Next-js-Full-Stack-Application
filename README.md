<<<<<<< HEAD
"theme" is the key name.

getItem() is the method to get the value stored under that key.

value will contain whatever was previously saved — e.g., "dark" or "light".

if (typeof window !== "undefined")
Checks if the code is running in a browser.

Some environments (like server-side code) don't have window, so this check avoids errors.

React will only run that function once — when the component first loads.

**Without function:**
useState(getFromLocalStorage());
runs every time the component renders 😬

** With function:**
useState(() => getFromLocalStorage());
runs ONLY once when component starts ✅

Check local storage once when the page loads.
Use that as the starting theme.
If there’s nothing saved, start with "light".
