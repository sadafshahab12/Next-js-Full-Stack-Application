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
toggle() changes the theme between "light" and "dark" when called.

useEffect() runs after the theme changes, and saves the new value to localStorage

useEffect [dependency array]
The empty array [] tells React: only run this after the first render.
Instead, useEffect just lets you run code after the component has already mounted.

✅ What can useEffect be used for?
Fetching data from an API after mount
Reading from localStorage
Adding event listeners (e.g., scroll, resize)
Updating flags like mounted to track when you're ready to show something

useEffect doesn’t mount the component.
It runs after the component is mounted.
It’s used to handle side effects that depend on the DOM, window, or localStorage.


npm i react-quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";


npx prisma init --datasource-provider mongodb