$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/185856.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      $(courses).each(function() {
        var data = "<div class=\"course\"><h3>" + this.title + "</h3><img src=" + this.badge + " /><a class=\"btn btn-primary\" href=" + this.url + " target=\"_blank\">See Course</a></div>";
        $('#badges').append(data);
      });
    }
  });
});
