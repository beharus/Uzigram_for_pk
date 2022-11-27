/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        firecode: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        'dark-bg': "url('https://catherineasquithgallery.com/uploads/posts/2021-02/1612774746_111-p-stilnii-goluboi-fon-128.jpg')",
        'light-bg': "url('https://phonoteka.org/uploads/posts/2021-05/1620106953_26-phonoteka_org-p-yantarnii-fon-32.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
