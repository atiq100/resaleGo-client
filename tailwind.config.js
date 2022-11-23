/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ea580c",
        
"secondary": "#4cd359",
        
"accent": "#f472b6",
        
"neutral": "#231D2B",
        
"base-100": "#FFFFFF",
        
"info": "#2dd4bf",
        
"success": "#84cc16",
        
"warning": "#b91c1c",
        
"error": "#E55E57",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
