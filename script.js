var jmlangkot = 10;
var angkotberoperasi = 6;

for (var noangkot = 1; noangkot <= jmlangkot; noangkot++) {
  if (noangkot <= 6) {
    console.log("angkot no " + noangkot + " beroperasi dengan baik.");
  } else if (noangkot === 8 || noangkot === 10) {
    console.log("angkot no. " + noangkot + " sedang lembur.");
  } else {
    console.log("angkot no. " + noangkot + " sedang tidak beroperasi.");
  }
}