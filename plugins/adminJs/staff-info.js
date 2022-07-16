$(function () {
    bsCustomFileInput.init();
    $("#staffTable").DataTable({
      language:{    
          "decimal":        "",
          "emptyTable":     "Không có Staff nào",
          "info":           "Hiển thị _START_ đến _END_ của _TOTAL_ Staff",
          "infoEmpty":      "Hiển thị 0 đến 0 của 0 Staff",
          "infoFiltered":   "(filtered from _MAX_ total entries)",
          "infoPostFix":    "",
          "thousands":      ",",
          "lengthMenu":     "Hiển thị _MENU_ Staff",
          "loadingRecords": "Loading...",
          "processing":     "",
          "search":         "Tìm kiếm:",
          "zeroRecords":    "Không tìm thấy Staff này",
          "paginate": {
              "first":      "First",
              "last":       "Last",
              "next":       "Tiếp",
              "previous":   "Trước"
          },
          "aria": {
              "sortAscending":  ": activate to sort column ascending",
              "sortDescending": ": activate to sort column descending"
          }
      },
      pageLength: 5,
      "responsive": true, "lengthChange": true, "autoWidth": false, "ordering": false
    }).buttons().container().appendTo('#roomTypeTable_wrapper .col-md-6:eq(0)');
    var rowLength = $('#staffTable tbody').find('tr').length;
    for(let i = 0 ; i < rowLength;i++){
      $('#staffTable tbody tr:eq('+i+') td:eq(0)').html(i+1);
    }
  });
  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('[data-mask]').inputmask()

  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('[data-mask]').inputmask()

  $('#dob').datetimepicker({
    format: 'L'
    });


    $('#editForm').validate({
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

    // --------------------------------------
    $('#staffTable').on('click','a',function(e){   
      var currentRow = $(this).closest('tr');
      $('#editForm input').removeClass('is-invalid');
      $('#editForm input').attr('aria-invalid',"false");
      
      var id =currentRow.find("input[type='hidden'][name='id']").val(); 
      var name =currentRow.find("td:eq(1)").text().trim(); 
      var phone =currentRow.find("td:eq(2)").text().trim(); 
      var email =currentRow.find("td:eq(3)").text().trim(); 
      var cccd =currentRow.find("td:eq(4)").text().trim(); 
      var dob =currentRow.find("td:eq(5)").text(); 
      var address =currentRow.find("td:eq(6)").text(); 

      $('#editForm input[name="staffName"]').val(name);
      $('#editForm input[name="phone"]').val(phone);
      $('#editForm input[name="email"]').val(email);
      $('#editForm input[name="civil_identity"]').val(cccd);
      $('#editForm input[name="dob"]').val(dob);
      $('#editForm input[name="address"]').val(address);
      $('#editForm input[name="staffName"]').val(name);
      $('#editForm input[name="id"]').val(id);
    })