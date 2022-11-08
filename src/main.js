

document.addEventListener('DOMContentLoaded', () => {

    // feladat 1
    document.getElementById('elsoFel').addEventListener('click', async () => {        
        let response = await fetch('users.json');
        let eredmeny = await response.json();

        let termekLista = document.getElementById('adatok');
        adatok.textContent = '';

        // Sorrend
        let abc = eredmeny.users.sort(function(a, b){
            let anev = a.lastName.toUpperCase();
            let bnev = b.lastName.toUpperCase();

            if(anev < bnev){
                return -1;
            }else if(anev > bnev){
                return 1;
            }else {
                return 0;
            }
        });

        // Kiiratas
        for (let u of abc){
            let li = document.createElement('li');
            let lastNev = u.lastName.toUpperCase();
            li.innerHTML = lastNev + ' ' + u.firstName;
            termekLista.appendChild(li);
        }
    });

    // feladat 2
    document.getElementById('masodFel').addEventListener('click', async () => {
        let response = await fetch('users.json');
        let eredmeny = await response.json();

        let termekLista = document.getElementById('adatok');
        adatok.textContent = '';

        // Sorrend
        let abc = eredmeny.users.sort(function(a, b){
            let anev = a.username.toUpperCase();
            let bnev = b.username.toUpperCase();

            if(anev < bnev){
                return -1;
            }else if(anev > bnev){
                return 1;
            }else {
                return 0;
            }
        });
        
        // Kiiratas
        for (let u of abc){
            let li = document.createElement('li');
            li.innerHTML = u.username + '&emsp;' + u.email + '&emsp;' + u.phone;
            termekLista.appendChild(li);
        }
    });

    // feladat 3
    document.getElementById('harmadFel').addEventListener('click', async () => {

    });

    // feladat 4
    document.getElementById('negyedFel').addEventListener('click', async () => {

    });

});