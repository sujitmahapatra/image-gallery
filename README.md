# image-gallery
Create a stylish photo gallery with animated emojis for liking, commenting, sharing, and downloading photos using HTML, CSS, and JavaScript. This gallery fetches photos from the Pexels API and displays them in a responsive grid format with interactive emojis.

<h1 align="center">
  <a href="https://sm-gallery.netlify.app">👉Live Demo</a>
</h1>

## Features

- Display a responsive grid of images fetched from the Pexels API.
- Hover over images to reveal emojis for liking, commenting, sharing, and downloading.
- Click the like button to toggle between a gray heart emoji (🩶) and a red heart emoji (❤️).
- Customize and add more emojis for other actions as needed.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/photo-gallery.git
```

2. Open `index.html` in your web browser.

3. Customize the code by replacing the Pexels API key and the number of images as needed in `script.js`.

```javascript
const pexelsApiKey = 'YOUR_PEXELS_API_KEY';
const numberOfImages = 5;
```

## Usage

- Hover over images to reveal emojis for different actions.
- Click the gray heart emoji (🩶) to like a photo; it will turn red (❤️) when liked.

## Customization

- Modify the code in `script.js` to change the number of images, add more emojis, or adjust any other functionality.
- Customize the CSS in `styles.css` to change the appearance and layout of the gallery.

## Credits

- This project uses the Pexels API to fetch free high-quality images. [Pexels API Documentation](https://www.pexels.com/api/documentation/)

## License

This project is open-source and available under the [MIT License](LICENSE).
