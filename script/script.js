document.addEventListener("DOMContentLoaded",function(event){ //mendengarkan apabila terdapat aksi pada index
    var urlParams = new URLSearchParams(window.location.search);   

    window.location.href = '#bmi'
    var berat = parseInt(urlParams.get("berat")); //mengambil input input berat
    var tinggi = parseInt(urlParams.get("tinggi")); //mengambil nilai input tinggi

    var tinggim = tinggi / 100; // mengubah tinggi badan dari centimeter menjadi meter
    var calculate= berat / (tinggim * tinggim); //hitung BMI menggunakan rumus BMI
    var bmi = calculate .toFixed(1); // mengurangi angka di belakang koma menjadi 1
    var bmiElement = document.getElementById("bmi"); //mengubah variabel dari data bmi menjadi bmielement
    bmiElement.textContent = bmi; 

    var kondisi = document.getElementById("kondisi"); // meletakan var kondisi pada id kondisi
    var comment = document.getElementById("comment"); // meletakan var comment pada id comment
    var interpretasi = document.getElementById("interpretasi"); // meletakan var interpretasi pada id interpretasi
    var kategori = document.getElementById("kategori"); //meletakan var kategori pada id kategori

    const ket = document.getElementById("ket");

    if (bmi > 30){ //jika bmi lebih dari 30 maka akan menjalankan semua perintah diabawah ini
        document.getElementById("kondisi").innerHTML = "Obesitas" ;
        document.getElementById("comment").innerHTML = "Anda Berada dalam Kategori Obesitas";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI lebih dari 30";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori kegemukan atau Obesitas.";
        ket.textContent = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
    } else if (bmi > 25.0){ //jika bmi lebih dari 25 maka akan menjalankan semua perintah diabawah ini
        document.getElementById("kondisi").innerHTML = "kelebihan Berat Badan";
        document.getElementById("comment").innerHTML = "Anda memiliki berat badan Berlebih";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI diantara 25.0 hingga 29.9";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori Overweight atau kelebihan berat badan.";
        ket.textContent = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else if(bmi > 18.5){ //jika bmi lebih dari 18.5 maka akan menjalankan semua perintah diabawah ini
        document.getElementById("kondisi").innerHTML = "Normal (Ideal)";
        document.getElementById("comment").innerHTML = "Anda memiliki Berat badan Yang Ideal";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI diantara 18.5 hingga 24.9";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori Ideal atau Normal.";
        ket.textContent = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else { //jika hasil bmi kurang dari 18.5 maka akan membaca perintah dibawah ini
        document.getElementById("kondisi").innerHTML = "Kekurangan berat Badan";
        document.getElementById("comment").innerHTML = "Anda kekurangan berat badan";
        document.getElementById("interpretasi").innerHTML = "Hasil BMI Kurang dari 18.5";
        document.getElementById("kategori").innerHTML = "Anda berada dalam kategori kategori kekurangan berat badan.";
        ket.textContent = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    }
})

function reset(){
    document.getElementById("kondisi").innerHTML = '';
    document.getElementById("comment").innerHTML = '';
    document.getElementById("interpretasi").innerHTML = '';
    document.getElementById("kategori").innerHTML = '';
    document.getElementById("ket").innerHTML = '';
}