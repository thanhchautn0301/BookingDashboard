$(function () {
    bsCustomFileInput.init();
  });
  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('[data-mask]').inputmask()

  $('#dob').datetimepicker({
    format: 'L'
    });


  $('#staffAddForm').validate({
    rules:{
        staffName: {
          required: true
          ,minlength: 5
        },
        dob:{
          required: true
        },
        phone:{
          required: true
        },
        email:{
          required: true
        },
        civil_identity:{
          required: true
        }
    }
    ,messages:{
      staffName: {
        required: 'Vui lòng nhập tên Staff',
        minlength: 'Tên Staff phải có ít nhất 5 chữ'
      },
      dob:{
        required: 'Vui lòng chọn ngày sinh'
      },
      phone:{
        required: 'Vui lòng nhập số điện thoại'
      },
      email:{
        required: 'Vui lòng nhập email'
      },
      civil_identity:{
        required: 'Vui lòng nhập CCCD-CMND'
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