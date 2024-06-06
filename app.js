document.addEventListener('DOMContentLoaded', function() {
    const dogImage = document.getElementById('dog-image');
    const fetchButton = document.getElementById('fetch-button');

    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            dogImage.src = data.message;
        } catch (error) {
            console.error('Error fetching the dog image:', error);
        }
    }

    fetchButton.addEventListener('click', fetchDogImage);
    fetchDogImage();
});

