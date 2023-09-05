// Seorang guru matematika memberikan tugas kepada murid-muridnya untuk mencari angka terbesar dalam sebuah kumpulan angka. 
// Tugas ini bertujuan untuk melatih kemampuan mereka dalam pemrograman. 

// Murid-murid diberikan kumpulan angka sebagai berikut:
// [4, 7, 2, 9, 5]

function searchBiggestNumber(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}

const arr = [4, 7, 2, 9, 5];
console.log("Angka terbesar:", searchBiggestNumber(arr));