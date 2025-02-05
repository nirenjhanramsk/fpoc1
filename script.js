const animeImages = [
    "https://wallpapercave.com/wp/wp4053193.jpg",
    "https://wallpapercave.com/wp/wp4053195.jpg",
    "https://wallpapercave.com/wp/wp4053198.jpg",
    "https://wallpapercave.com/wp/wp4053199.jpg",
    "https://wallpapercave.com/wp/wp14960768.webp",
    "https://wallpapercave.com/wp/wp4053204.jpg",
    "https://wallpapercave.com/wp/wp4053206.jpg",
    "https://wallpapercave.com/wp/wp4053207.jpg",
    "https://wallpapercave.com/wp/wp4053209.jpg",
    // Add more image URLs here...
];

let currentPage = 0;
const imagesPerPage = 9; // 3x3 Grid
const galleryDiv = document.getElementById("gallery");

// Function to Display Images
function displayImages() {
    galleryDiv.innerHTML = "";
    let start = currentPage * imagesPerPage;
    let end = start + imagesPerPage;
    let pageImages = animeImages.slice(start, end);

    pageImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("thumbnail");
        galleryDiv.appendChild(img);
    });
}

// Navigation Controls
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        displayImages();
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    if ((currentPage + 1) * imagesPerPage < animeImages.length) {
        currentPage++;
        displayImages();
    }
});

// Sidebar Menu Toggle
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

// Initial Display
displayImages();
