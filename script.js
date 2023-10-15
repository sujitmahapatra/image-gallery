const pexelsApiKey = 'PDhJkhQjbzBpwGFjEWsRfUGcu8cJSMoJCDvB1AqqQ2F2f77Iy9pLW4To';
const numberOfImages = 16; // Change the number of images as needed

const imageGallery = document.getElementById('image-gallery');

async function fetchImages() {
    try {
        const response = await fetch(`https://api.pexels.com/v1/curated?per_page=${numberOfImages}`, {
            headers: {
                'Authorization': pexelsApiKey
            }
        });

        const data = await response.json();

        data.photos.forEach(photo => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image');
            imageContainer.innerHTML = `
                <img src="${photo.src.large}" alt="${photo.photographer}">
                <div class="image-overlay">
                    <span class="action-emojis">
                        <button class="like-button gray-like-button" onclick="toggleLike(this)">
                            📝 <!-- Comment Emoji -->
                            🚀 <!-- Share Emoji -->
                            ⬇️ <!-- Download Emoji -->
                            <!-- Add more emojis for other actions -->
                        </button>
                    </span>
                </div>
            `;
            imageGallery.appendChild(imageContainer);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

fetchImages();

function toggleLike(button) {
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
    } else {
        button.classList.add('liked');
    }
}
