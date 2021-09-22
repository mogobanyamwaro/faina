$(document).ready(function () {
  $('.btn-info').click(function () {
    var name = $('#name').val();
    var description = $('#description').val();

    var national_id = $('#national_id').val();
    var select_element = $('#select_element').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    const url = 'https://shambaassist.herokuapp.com/api/registration/';
    data = {
      name,
      phone,
      description,
      national_id,
      email,
      payment_details: select_element,
    };
    addData(data);
    // $.post(
    //   url,
    //   {
    //     name,
    //     phone,
    //     description,
    //     national_id,
    //     email,
    //     payment_details: select_element,
    //   },
    //   function (response) {
    //     console.log(response);
    //   }
    // );
    function addData(data) {
      // pass your data in method
      $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(data), // now data come in this function
        contentType: 'application/json; charset=utf-8',
        crossDomain: true,
        dataType: 'json',
        success: function (data, status, jqXHR) {
          console.log('success'); // write success in " "
        },

        error: function (jqXHR, status) {
          // error handler
          console.log(jqXHR);
          console.log('fail' + status.code);
        },
      });
    }
  });
  //   clear the field
  $('.btn-clear').click(function () {
    $('#name').val('');
    $('#description').val('');
    $('#national_id').val('');
    $('#email').val('');
  });
});
