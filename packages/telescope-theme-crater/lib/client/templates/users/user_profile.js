Template.craterUserProfile.rendered = function () {
  $('.user-profile-tabs a').on('click', function (event) {
    event.preventDefault();
    $(this).tab('show');
  });
};
