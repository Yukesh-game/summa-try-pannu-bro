const img = new Image();
img.src = 'photo_2025-03-22_08-49-27.jpg';
img.onload = () => console.log('Image loaded successfully');
img.onerror = () => console.log('Image failed to load');