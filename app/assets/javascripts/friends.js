var init_friend_lookup;

init_friend_lookup = function () {
  $('#friend_lookup_form').on('ajax:before', function (event, data, status) {
    show_spinner();
  });

  $('#friend_lookup_form').on('ajax:after', function (event, data, status) {
    hide_spinner();
  });
 
  $('#friend_lookup_form').on('ajax:success', function (event, data, status) {
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  $('#friend_lookup_form').on('ajax:error', function (event, xhr, status, error) {
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('The user was not found.');
  });
}

$(document).ready(function() {
  init_friend_lookup();
})

