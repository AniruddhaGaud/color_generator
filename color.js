let container = document.getElementById("container");
let button = document.getElementById('btn');
        function randomcolor() {
            return Math.floor(Math.random() * 255);
        }
        button.addEventListener('click', () => {
            container.style.backgroundColor = 'rgba(' 
                + randomcolor() + ',' + randomcolor() 
                + ',' + randomcolor() + '\)'
        })