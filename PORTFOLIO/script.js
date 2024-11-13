// Mendapatkan elemen form dan elemen pesan notifikasi
const form = document.getElementById("contactForm");
const messageDiv = document.getElementById("message");
// Fungsi validasi untuk form kontak
function validateForm(event) {
// Mencegah form dikirim secara default
event.preventDefault();
// Mengambil nilai dari field nama dan pesan
const nama = document.getElementById("nama").value.trim();
const pesan = document.getElementById("pesan").value.trim();
// Memeriksa apakah field nama dan pesan sudah diisi
if (nama === "" || pesan === "") {
showMessage("Semua field wajib diisi.", true); // Pesan error
return false;
}
// Jika form valid, tampilkan pesan sukses
showMessage("Form berhasil dikirim!", false);
clearForm();
return true;
}
// Fungsi untuk menampilkan pesan sukses atau error
function showMessage(message, isError) {
messageDiv.textContent = message;
messageDiv.style.color = isError ? "red" : "green";
messageDiv.style.fontWeight = "bold";
}
// Fungsi untuk mengosongkan form setelah berhasil dikirim
function clearForm() {
form.reset();
}
// Menambahkan event listener untuk validasi saat form dikirim
form.addEventListener("submit", validateForm);
// Menambahkan efek visual saat input dalam keadaan fokus
document.getElementById("nama").addEventListener("focus", addFocus);
document.getElementById("pesan").addEventListener("focus", addFocus);
function addFocus(event) {
event.target.style.border = "2px solid #4a90e2"; // Border biru saat fokus
}
// Menghapus efek visual saat field tidak fokus
document.getElementById("nama").addEventListener("blur", removeFocus);
document.getElementById("pesan").addEventListener("blur", removeFocus);
function removeFocus(event) {
event.target.style.border = "1px solid #ddd"; // Border default saat blur
}