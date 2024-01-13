var nama = document.querySelector('input[name=nama]')
var NPM = document.querySelector('input[name=npm]')
var jurusan = document.querySelector('input[name=jurusan]')
var nilai = document.getElementById('input[name=nilai]')
var hasil = "";
var keterangan ="";


const button = document.querySelector('button')
const button1 = document.querySelector('.table button')
const table = document.querySelector('.table')
const dark = document.getElementById('mm')
const siang = document.getElementById('ss')
const input = document.querySelector('form')




button.addEventListener('click', function () {


    document.getElementById('name').innerHTML = nama.value
    document.getElementById('NPM').innerHTML = NPM.value
    document.getElementById('Jurusan').innerHTML = jurusan.value

    if (nilai >= 80) {
        hasil = "A"
    } else if(nilai >= 70) {
        hasil = "B"
    } else if(nilai >= 60) {
        hasil = "C"
    } else if(nilai >= 50) {
        hasil = "D"
    } else { 
        hasil = "E";
    }
        
    document.getElementById('hasil').innerHTML = hasil.valueOf;

    switch(true){
        case nilai >= 60:
            keterangan = "Lulus";
            break;
            case nilai <= 60:
            keterangan = "Tidak Lulus";
            break;
        default:
    }

    document.getElementById('keterangan').innerHTML = keterangan.valueOf;

        

        table.style.display = 'flex'

        

});




button1.addEventListener('click', function(){
    table.style.display = 'none'

        nama.value = ''
        NPM.value = ''
        jurusan.value = ''
        hasil = ("grade:")
        keterangan =("anda")
});

dark.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    dark.style.display = 'none'
    siang.style.display = 'block'

    
});

siang.addEventListener('click', function(){
    dark.style.display = 'block'
    siang.style.display = 'none'
    document.body.classList.toggle('dark')
    
    
})