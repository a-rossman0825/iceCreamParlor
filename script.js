document.getElementById('couponForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('couponCode').classList.remove('d-none');
});
