
const ul = document.createElement('ul');

for(let i = 0; i < objvideo.length; i++){
    const li = document.createElement('li');
    li.innerHTML = `<h3>${objvideo[i].title}</h3><img src="${objvideo[i].thumbnailUrl}" alt="${objvideo[i].title}">`;
    ul.appendChild(li);
}

document.body.appendChild(ul);