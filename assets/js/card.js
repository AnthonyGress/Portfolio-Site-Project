const shareBtn = document.querySelector('.shareBtn');
const qrCode = document.querySelector('.qr-code')

const toggleQr = () => {
  qrCode.classList.contains('d-none') ? qrCode.classList.remove('d-none') : qrCode.classList.add('d-none');
}

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: "Anthony's Card",
      url: 'https://techxguy.com/digital-card',
      text: "This is Anthony's Digital Business Card. Let's Connect!"
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
    toggleQr();
  }
});