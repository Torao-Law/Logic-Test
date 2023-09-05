// Seseorang petani memiliki kebun yang berisi pohon-pohon buah. 
// Dia ingin menjual beberapa buah kepada tetangganya. 
// Dia memiliki daftar pohon buah yang sudah diurutkan berdasarkan tinggi pohon. 
// Tugas Anda adalah membantu petani menemukan pohon buah tertentu dalam daftar tersebut.

// Daftar pohon buah yang sudah diurutkan adalah sebagai berikut:
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

function binarySearch(arr, target) {
  let left = 1;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); 
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return " "; // Angka tidak ditemukan
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 20;
const hasilPencarian = binarySearch(sortedArr, target);
console.log(`Angka ${target} ditemukan pada indeks ke-${hasilPencarian}`);
