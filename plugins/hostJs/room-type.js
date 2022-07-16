$(function () {
    bsCustomFileInput.init();
    $("#infoTable").DataTable({
      language:{    
          "decimal":        "",
          "emptyTable":     "Không có kiểu phòng nào",
          "info":           "Hiển thị _START_ đến _END_ của _TOTAL_ kiểu phòng",
          "infoEmpty":      "Hiển thị 0 đến 0 của 0 kiểu phòng",
          "infoFiltered":   "(filtered from _MAX_ total entries)",
          "infoPostFix":    "",
          "thousands":      ",",
          "lengthMenu":     "Hiển thị _MENU_ kiểu phòng",
          "loadingRecords": "Loading...",
          "processing":     "",
          "search":         "Tìm kiếm:",
          "zeroRecords":    "Không tìm thấy kiểu phòng này",
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
      pageLength: 7,
      "responsive": true, "lengthChange": true, "autoWidth": false, "ordering": false
    }).buttons().container().appendTo('#roomTypeTable_wrapper .col-md-6:eq(0)');
    var rowLength = $('#infoTable tbody').find('tr').length;
    for(let i = 0 ; i < rowLength;i++){
      $('#infoTable tbody tr:eq('+i+') td:eq(0)').html(i+1);
    }
  });
  $('.select2').select2()

  //Initialize Select2 Elements
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })

  $('[data-mask]').inputmask()


  $('select[name="QUANTITY_ADULT"]').on('change',function(){
    let adultQuantity = $('select[name="QUANTITY_ADULT"] option:selected').val();
    let childQuantity = $('select[name="QUANTITY_CHILDREN"] option:selected').val();
    let result = (+adultQuantity)+(+childQuantity);
    $('input[name="capity"]').val(result);
  })

  $('select[name="QUANTITY_CHILDREN"]').on('change',function(){
    let adultQuantity = $('select[name="QUANTITY_ADULT"] option:selected').val();
    let childQuantity = $('select[name="QUANTITY_CHILDREN"] option:selected').val();
    let result = (+adultQuantity)+(+childQuantity);
    $('input[name="capity"]').val(result);
  })
  

  

  $('#reservationdatetime').datetimepicker({
    format: 'L',
    minDate: new Date()
    });


  $('#roomAddForm').validate({
    rules:{
      nameRoomType: {
        required: true
      }
    }
    ,messages:{
      nameRoomType: {
        required: 'Vui lòng nhập tên kiểu phòng'
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

  $('#infoTable').on('click','a',function(e){   
    var currentRow = $(this).closest('tr');
    $('#modal-info #editForm input').removeClass('is-invalid');
    $('#modal-info #editForm input').attr('aria-invalid',"false");
  
    var id = currentRow.find("input[type='hidden'][name='id']").val(); 
    var name = currentRow.find("td:eq(1)").text(); 
    var capity = currentRow.find("td:eq(2)").text(); 
    var adults = currentRow.find("td:eq(3)").text(); 
    var childs = currentRow.find("td:eq(4)").text(); 
    var desc = currentRow.find("td:eq(5)").text(); 
  
    $('#modal-info #editForm input[name="name"]').val(name.trim());
    $('#modal-info #editForm input[name="id"]').val(id);
    $('#modal-info #editForm input[name="capity"]').val(capity);
    $('#modal-info #editForm select[name="QUANTITY_ADULT"]').val(adults);
    $('#modal-info #editForm select[name="QUANTITY_CHILDREN"]').val(childs);
    $('#modal-info #editForm textarea[name="description"]').val(desc);

    $('#modal-info #editForm select[name="QUANTITY_ADULT"]').on('change',function(){
      let adultQuantity = $('#modal-info #editForm select[name="QUANTITY_ADULT"] option:selected').val();
      let childQuantity = $('#modal-info #editForm select[name="QUANTITY_CHILDREN"] option:selected').val();
      let result = (+adultQuantity)+(+childQuantity);
      $('#modal-info #editForm input[name="capity"]').val(result);
    })
  
    $('#modal-info #editForm select[name="QUANTITY_CHILDREN"]').on('change',function(){
      let adultQuantity = $('#modal-info #editForm select[name="QUANTITY_ADULT"] option:selected').val();
      let childQuantity = $('#modal-info #editForm select[name="QUANTITY_CHILDREN"] option:selected').val();
      let result = (+adultQuantity)+(+childQuantity);
      $('#modal-info #editForm input[name="capity"]').val(result);
    })
  }) 