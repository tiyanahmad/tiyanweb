document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('pesan').value;
    const pesan = document.getElementById('pesan').value;

    if (nama === '' || email === '' || pesan === '') {
        alert('Semua field harus diisi!');
    } else {
        alert('Pesan Anda telah dikirim!');
    }
});