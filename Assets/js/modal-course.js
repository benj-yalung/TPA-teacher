$(document).ready(function () {
  $(".enrolled-item").on('click', function (e) {
      e.preventDefault();
      $('#courseModal').toggleClass('is-visible');
      $(this).addClass('active-modal');
  });

  // Function to close the modal
  $(".check-course-btn_modal").on('click', function (e) {
      e.preventDefault();
      $('.enrolled-item').removeClass('active-modal');
  });

});