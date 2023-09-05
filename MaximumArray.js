// Ada sekelompok teman yang bermain di taman. 
// Mereka memiliki sebuah daftar angka yang mencatat skor permainan mereka. 
// Mereka ingin tahu siapa yang mendapatkan skor tertinggi. 
// Bantulah mereka untuk menemukan pemain dengan skor tertinggi.


function cariAngkaTerbesar(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      console.log(arr[i])
    }
  }

  console.log("Angka terkecil:", max); // Output: 9
}

const arr = [4, 7, 2, 9, 5];
cariAngkaTerbesar(arr)