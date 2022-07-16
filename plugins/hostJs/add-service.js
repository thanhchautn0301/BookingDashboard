
  $(function () {
    bsCustomFileInput.init();
    $('#summernote').summernote();
  });
  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('#roomAddForm').validate({
    rules:{
        accomodationType: {
        required: true
      }
    }
    ,messages:{
        accomodationType: {
        required: 'Vui lòng thêm ít nhất 1 dịch vụ'
      }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  })