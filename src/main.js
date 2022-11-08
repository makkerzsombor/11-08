

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

        let termekLista = document.getElementById('tablazat');
        tablazat.textContent = '';

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
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td1.textContent = u.username;
            td2.textContent = u.email;
            td3.textContent = u.phone;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            termekLista.appendChild(tr);
        }
    });

    // feladat 3
    document.getElementById('harmadFel').addEventListener('click', async () => {

        let response = await fetch('users.json');
        let eredmeny = await response.json();

        let termekLista = document.getElementById('sulyos');
        sulyos.textContent = '';

        let suly = document.getElementById('magassag').value;

        // Kiiratas


    });

    // feladat 4
    document.getElementById('negyedFel').addEventListener('click', async () => {

        let response = await fetch('users.json');
        let eredmeny = await response.json();

        let termekLista = document.getElementById('barna');
        barna.textContent = '';

        // filteres kiiratas
        let tomb = eredmeny.users.filter(e => e.eyeColor == 'Brown');

        barna.textContent = tomb.length;
    });

});