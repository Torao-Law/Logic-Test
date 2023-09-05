// Tuan Smith, seorang guru bahasa, memberikan tugas kepada murid-muridnya untuk memecahkan sebuah teka-teki bahasa. 
// Mereka diberikan sepotong teks panjang yang terdiri dari huruf-huruf acak. 
// Tugas para murid adalah menemukan panjang dari substring terpanjang yang memiliki karakter yang sama secara berurutan dalam teks ini.

// Text :
// "BBAAACCCCCDDDDEEE"

// Output :
// 5 

function subStringLongest(text) {
  let longest = 1; 
  let currentLongest = 1; 
  
  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      currentLongest++; 
    } 
    else {
      currentLongest = 1; 
    }
    
    if (currentLongest > longest) {
      longest = currentLongest; 
    }
  }
  
  return longest;
}

const teks = "BBAAACCCCCDDDDEEE";
console.log("Panjang substring terpanjang:", subStringLongest(teks));
