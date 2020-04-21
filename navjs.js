$(document).ready(function() {

  $('#loadnav').html(`<nav class="navbar navbar-expand-lg main-nav">
    <img id="nav-image" src="img/HOMEPAGE/HOME PAGE WOOD reduced.png" />
    <span></span>
    <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style="border: 2px solid grey;">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center full-space" style="text-align:justify;" id="navbarNavAltMarkup">
      <div class="full-space navbar-nav center-text">
        <a class="nav-item nav-link active" href="/"><strong>หน้าแแรก</strong><span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="about"><strong>เกี่ยวกับเรา</strong></a>
        <a class="nav-item nav-link" href="product"><strong>ผลิตภัณฑ์</strong></a>
        <a class="nav-item nav-link" href="contact"><strong>ติดต่อเรา</strong></a>
      </div>
    </div>
  </nav>
`);

  var current_title = $(document).attr('title');
  if(current_title.includes("Home")){
    $(".pnav-home").addClass("active");
  }
  else if(current_title.includes("Downloads")){
    $(".pnav-download").addClass("active");
  }
  else if(current_title.includes("Tutorials")){
    $(".pnav-tutorial").addClass("active");
  }
  else if(current_title.includes("Translate")){
    $(".pnav-translate").addClass("active");
  }

});
