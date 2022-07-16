$(function () {
    bsCustomFileInput.init();
  });
  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('#accomodationAddForm').validate({
    rules:{
        accomodationName: {
            required: true,
            minlength: 5
      },
        photos:{
            required: true,
            accept: "image/jpeg, image/pjpeg, image/png"
        }
    }
    ,messages:{
        accomodationName: {
            required: 'Vui lòng nhập tên chỗ nghỉ',
            minlength: 'Tên chỗ nghỉ phải có ít nhất 5 chữ cái'
      },
        photos:{
            required: 'Vui lòng thêm ít nhất 1 hình cho chỗ nghỉ',
            accept: 'Vui lòng thêm đúng định dạng ảnh jpg,jpeg,png'
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