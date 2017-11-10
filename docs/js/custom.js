function filter($select) {

  // Hide all panels
  $(".panel").hide();

  // show those asked for
  $(".panel_"+ $select).show();

};

$(document).ready(function() {
    $(".btn").click(function () {
      console.log($(this).data("rel"));
      filter($(this).data("rel"));
    });

    // init
    $(".panel").show();
});
