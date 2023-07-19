var option = document.getElementsByName("jk")
var bb = document.getElementById("bb")
var usia = document.getElementById("usia")
var tb = document.getElementById("tb")
var res = document.getElementById("result")

var main1 = document.getElementById("main1")
var main2 = document.getElementById("main2")

main2.style.display = "none"

function resetClick() {
    bb.value = ""
    usia.value = ""
    tb.value = ""
}

function hitungClick() {
    const maxAge = 99

    if (!(option[0].checked || option[1].checked)) {
        alert("Silakan memilih jenis kelamin Anda terlebih dahulu")
    } else if (bb.value == "") {
        alert("Silakan mengisi berat badan Anda terlebih dahulu")
    } else if (usia.value == "") {
        alert("Silakan menuliskan usia Anda terlebih dahulu")
    } else if (usia.value > maxAge) {
        alert("Usia invalid di atas 99 tahun")
    } else if (tb.value == "") {
        alert("Silakan mengisi tinggi badan Anda terlebih dahulu")
    } else {
        main1.style.display = "none"
        main2.style.display = "block"

        res.value = Math.round((parseInt(bb.value) / ((parseInt(tb.value)/100))**2)*100)/100

        if (res.value < 18.5) {
            document.getElementById("komen1").innerHTML = "Anda mengalami kekurangan berat badan"
            document.getElementById("batas").innerHTML = "di bawah 18,5"
            document.getElementById("komen2").innerHTML = "underweight atau berat badan yang kurang. Perbanyak konsumsi protein dan makanan bergizi serta tingkatkan frekuensi makan. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menaikkan berat badan hingga mencapai batas normal."
            document.getElementById("dampak").innerHTML = "Berat badan yang rendah dapat menyebabkan berbagai masalah penyakit"

            const poin1 = document.createElement("li")
            var isi = document.createTextNode("Infertilitas")
            poin1.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin1)

            const poin2 = document.createElement("li")
            var isi = document.createTextNode("Anemia")
            poin2.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin2)

            const poin3 = document.createElement("li")
            var isi = document.createTextNode("Osteoporosis")
            poin3.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin3)

            const poin4 = document.createElement("li")
            var isi = document.createTextNode("Sistem imun lemah")
            poin4.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin4)
        } else if (res.value < 25.0) {
            document.getElementById("komen1").innerHTML = "Anda memiliki berat badan normal"
            document.getElementById("batas").innerHTML = "di antara 18,5 dan 24,9"
            document.getElementById("komen2").innerHTML = "normal atau miliki berat yang ideal. Pertahankan terus berat badan Anda dengan memastikan asupan kalori sesuai dengan kebutuhan kalori harian dan konsumsi makanan sehat."
            document.getElementById("dampak").innerHTML = "Jaga gaya hidup sehat dan konsultasi dokter jika ada masalah kesehatan"
        } else if (res.value < 30.0) {
            document.getElementById("komen1").innerHTML = "Anda mengalami kelebihan berat badan"
            document.getElementById("batas").innerHTML = "di antara 25,0 dan 29,9"
            document.getElementById("komen2").innerHTML = "overweight atau berat badan berlebih. Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak, serta tingkatkan aktivitas dan berolahraga secara teratur. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga mencapai batas normal."
            document.getElementById("dampak").innerHTML = "Beberapa penyakit yang berasal dari kegemukan"

            const poin1 = document.createElement("li")
            var isi = document.createTextNode("Diabetes")
            poin1.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin1)

            const poin2 = document.createElement("li")
            var isi = document.createTextNode("Hipertensi")
            poin2.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin2)

            const poin3 = document.createElement("li")
            var isi = document.createTextNode("Sakit jantung")
            poin3.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin3)

            const poin4 = document.createElement("li")
            var isi = document.createTextNode("Osteoarthritis")
            poin4.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin4)
        } else {
            document.getElementById("komen1").innerHTML = "Anda mengalami obesitas"
            document.getElementById("batas").innerHTML = "di atas 30,0"
            document.getElementById("komen2").innerHTML = "obesitas atau kegemukan. Jaga pola makan dengan mengurangi makanan tinggi gula dan tinggi lemak, serta tingkatkan aktivitas dan berolahraga secara teratur. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga mencapai batas normal."
            document.getElementById("dampak").innerHTML = "Beberapa penyakit yang berasal dari kegemukan"

            const poin1 = document.createElement("li")
            var isi = document.createTextNode("Diabetes")
            poin1.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin1)

            const poin2 = document.createElement("li")
            var isi = document.createTextNode("Hipertensi")
            poin2.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin2)

            const poin3 = document.createElement("li")
            var isi = document.createTextNode("Sakit jantung")
            poin3.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin3)

            const poin4 = document.createElement("li")
            var isi = document.createTextNode("Osteoarthritis")
            poin4.appendChild(isi)
            document.getElementById("penyakit").appendChild(poin4)
        }
    }
}
