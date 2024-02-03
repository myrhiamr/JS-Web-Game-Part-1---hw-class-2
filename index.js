//fixed postion newImage
function newImage(path, left, bottom) {
    let blank = document.createElement('img');
    blank.src = path;  
    blank.style.position = 'fixed';  
    blank.style.left = left + 'px';  
    blank.style.bottom = bottom + 'px';
    document.body.append(blank);
    return blank;
}

//function to create a newItem
function newItem(path, left, bottom) {
    let element = newImage(path, left, bottom);

//remove element
    element.addEventListener('dblclick', () => {
        element.remove();
    });
}


// creating newItems
newItem('assets/green-character.gif', 100, 100);
newItem('assets/well.png', 500,425);
newItem('assets/tree.png', 200,300);
newItem('assets/sword.png', 500, 405);
newItem('assets/staff.png', 600, 100);
newItem('assets/shield.png', 165, 185);
newItem('assets/pine-tree.png',450,200);
newItem('assets/pillar.png', 350, 100);
newItem('assets/crate.png', 150, 200);
