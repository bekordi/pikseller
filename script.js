document.addEventListener('DOMContentLoaded', () => {
    const pixelCanvas = document.getElementById('pixelCanvas');
    const clearButton = document.getElementById('clearCanvas');

    // Tuvali oluştur
    const createCanvas = (rows, cols) => {
        for (let i = 0; i < rows * cols; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('click', () => {
                pixel.style.backgroundColor = pixel.style.backgroundColor === 'white' ? 'black' : 'white';
            });
            pixelCanvas.appendChild(pixel);
        }
    };

    // Temizleme butonuna tıklandığında tuvali temizle
    clearButton.addEventListener('click', () => {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = 'white';
        });
    });

    // Canvas'ı oluştur
    createCanvas(10, 10); // 10x10'luk bir tuval
});
