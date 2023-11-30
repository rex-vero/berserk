const error = document.getElementById('error');
for (let i = 0; i < 404; i++) {
    setTimeout(() => {
        error.innerText++
    }, i * 5);
}