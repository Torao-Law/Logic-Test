// Seorang programmer sedang bekerja pada program untuk mengurutkan kumpulan angka. 
// Dia memutuskan untuk menggunakan algoritma pengurutan Bubble Sort. 

// Kumpulan angka yang perlu diurutkan adalah sebagai berikut:
// [5, 2, 9, 3, 1]

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [5, 2, 9, 3, 1];
console.log("Array setelah diurutkan:", bubbleSort(arr));