const btn = document.getElementById('toNext');
const video02 = document.getElementById('video02');
const video = document.getElementById('video01');
const video03 = document.getElementById('video')


setTimeout(() => {
    btn.style.display = 'block';
    setTimeout(() => {
        btn.style.display = 'none';
    }, 1000);
}, 5000);

btn.onclick = () => {
    video03.classList.add('active');
    video02.classList.add('active2');
    video02.style.display = 'block';
    setTimeout(() => {
        video.style.display = 'none';
    }, 1000)
}

