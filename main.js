/*Pada kode yang diberikan, var digunakan dalam deklarasi variabel i dalam loop for. 
Karena var memiliki function scope(bukan block scope seperti let dan const),
 nilai i yang dicetak oleh setTimeout akan merujuk ke nilai akhir dari i setelah loop selesai.
 Alhasil, kode di atas akan mencetak angka 6 sebanyak lima kali dengan jeda waktu yang berbeda - beda.*/

/*function cetakAngka() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

cetakAngka();*/

/*Dengan mengganti var dengan let, kita bisa memastikan i memiliki block scope dalam setiap iterasi for,
 sehingga setiap setTimeout akan mencetak nilai i yang benar pada waktu yang sesuai.*/

 function cetakAngka() {
   for (let i = 1; i <= 5; i++) { // Menggunakan let untuk i agar memiliki block scope
     setTimeout(function () {
       console.log(i); // i akan bernilai sesuai iterasi loop karena let memiliki block scope
     }, i * 1000);
   }
 }

 cetakAngka();

//Menggunakan let pada variabel i karena kita perlu memperbarui nilainya di setiap iterasi loop.
//let memastikan bahwa setiap iterasi memiliki nilai i yang berbeda dalam block scope, sehingga setiap setTimeout berfungsi sesuai iterasi.


/*Dengan async/await, kode menjadi lebih mudah dibaca karena menghilangkan 
struktur bersarang yang umum pada callback.*/
// Membungkus setTimeout di dalam Promise untuk mendukung async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve({ data: 'Some data' });
        }, 2000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing data:', data);
            resolve(`Processed: ${data.data}`);
        }, 2000);
    });
}

function saveData(processedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data saved:', processedData);
            resolve('Success');
        }, 2000);
    });
}

// Fungsi async untuk menggunakan async/await
async function main() {
    try {
        const fetchedData = await fetchData(); // Menunggu data diambil
        const processedData = await processData(fetchedData); // Memproses data
        const result = await saveData(processedData); // Menyimpan data
        console.log('All operations completed:', result); // Output akhir setelah semua selesai
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

//async/await membantu meningkatkan readability dengan mengubah callback berlapis-lapis menjadi struktur linier.
//Fungsi fetchData, processData, dan saveData diubah menjadi fungsi yang mengembalikan Promise, yang memungkinkan pemanggilan await untuk setiap proses.
//try/catch digunakan untuk menangani potensi error dengan cara yang lebih sederhana dibandingkan dengan penanganan error di callback bertingkat.