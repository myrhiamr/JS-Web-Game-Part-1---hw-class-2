function newImage(url, left, bottom) {
    let object = document.createElement('img');
    object.src = url;
    object.style.position = 'fixed';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
    return object;
}

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom);

    object.addEventListener('dblclick', () => {
        object.remove();
    });
}

// Using newImage function to add images to the screen
newImage('assets/green-character.gif', 100, 100);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

// Using newItem function to add items to the screen
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);

// Bonus: Using the tile function to add background images
function tile(url, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100);
        }
    }
}

