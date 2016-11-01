$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/seancrater.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      console.log(courses);
      $(courses).each(function() {
        var data = "<div class=\"course\"><h3>" + this.title + "</h3><img src=" + this.badge + " /><a class=\"btn btn-primary\" href=" + this.url + " target=\"_blank\">See Course</a></div>";
        $('#badges').append(data);
        console.log(this.title);
      });
    }
  });
});
