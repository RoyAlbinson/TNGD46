const words = ["legends", "nightmares"];
let index = 0;

setInterval(() => {
    index = (index + 1) % words.length;
    document.getElementById('changing').textContent = words[index];
}, 2000); // Changes every 2 seconds