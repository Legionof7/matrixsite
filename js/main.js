var slideInterval;
var midTransition;

function hideTitleAndShowSlider() {
  $('#splashText').delay(1000).fadeOut(500, function() {
    $('#slideshow').fadeIn(700, function() {
      $('.hiddenOnMobile')
        .delay(300)
        .css("display", "flex")
        .hide()
        .fadeIn(400);

        if (window.matchMedia("(max-width: 768px)").matches) {
          mobileTransitions();
          runAutoSlide();
        }
        else {
          runAutoSlide();
        }
    });
  });
};

function runAutoSlide() {
  sectionTransitions("#joinDiscord", "img/mainPage.jpg");
  var sectionNumber = 2;

  slideInterval = setInterval(function() {
    if (document.hasFocus() && !window.matchMedia("(max-width: 768px)").matches) {
      if (sectionNumber == 1) {
        checkSectionClick("#joinDiscordTitle", "#joinDiscord", "img/mainPage.jpg");
        sectionNumber = 2
      }
      else if (sectionNumber == 2) {
        checkSectionClick("#streamAcceleratorTitle", "#streamer", "img/streamPicture.jpg");
        sectionNumber = 3;
      }
      else if (sectionNumber == 3) {
        checkSectionClick("#seeTeamsTitle", "#seeTeams", "img/teamsPicture.jpg");
        sectionNumber = 4;
      }
      else if (sectionNumber == 4) {
        checkSectionClick("#seeLeaguesTitle", "#seeLeagues", "img/leaguesPicture.jpg");
        sectionNumber = 1;
      }
    }
  }, 5000);
};

function mobileTransitions() {
  $('#bg').fadeTo(100, 0, function() {
    $('#bg').delay(150).css({"background-image": "url('img/mainPage.jpg')"});
    $('#bg').delay(200).fadeTo(100, 1);
  });
};

// SECTION METHODS /////////////////////////////////////////////////////////////
function sectionTransitions(sectionId, imageUrl) {
  if (!window.matchMedia("(max-width: 768px)").matches) {
    midTransition = true;
    setTimeout(function() { midTransition = false; }, 1000);

    $(sectionId).removeClass("isSection").addClass("isSectionActive");
    $('.isSection').fadeOut(250, function() {
      $(sectionId).delay(250).fadeIn(250, function() {
        $(sectionId).removeClass("isSectionActive").addClass("isSection");
      });
    });

    $('#bg').fadeTo(100, 0, function() {
      $('#bg').delay(150).css({"background-image": "url('" + imageUrl + "')"});
      $('#bg').delay(200).fadeTo(100, 1);
    });
  }
};

function checkSectionClick(sectionTitleId, sectionId, imageUrl) {
  if (!$(sectionTitleId).hasClass("sectionActive") && !midTransition) {
    $('.sectionActive').removeClass("sectionActive").addClass("sectionTitle");
    $(sectionTitleId).removeClass("sectionTitle").addClass("sectionActive");
    sectionTransitions(sectionId, imageUrl);
  }
};

// MAIN FUNCTION ///////////////////////////////////////////////////////////////
$(document).ready(function() {
  //This preloads the images during the opening section (prevents load lag)
  $('#preload').css({"background-image": "url('img/mainPage.jpg')"});
  setTimeout(function() { $('#preload').css({"background-image": "url('img/streamPicture.jpg')"}); }, 1000);
  setTimeout(function() { $('#preload').css({"background-image": "url('img/teamsPicture.jpg')"}); }, 2000);
  setTimeout(function() { $('#preload').css({"background-image": "url('img/leaguesPicture.jpg')"}); }, 3000);

  $('#splashWord1').delay(700).fadeTo(400, 1, function() {
    $('#splashWord2').fadeTo(400, 1, function() {
      $('#splashWord3').fadeTo(400, 1, function() {
        $('#splashWord4').delay(500).fadeTo(500, 1, function() {
          hideTitleAndShowSlider();
        });
      });
    });
  });

  $('#joinDiscordTitle').click(function() {
    clearInterval(slideInterval);
    checkSectionClick("#joinDiscordTitle", "#joinDiscord", "img/mainPage.jpg");
  });

  $('#streamAcceleratorTitle').click(function() {
    clearInterval(slideInterval);
    checkSectionClick("#streamAcceleratorTitle", "#streamer", "img/streamPicture.jpg");
  });

  $('#seeTeamsTitle').click(function() {
    clearInterval(slideInterval);
    checkSectionClick("#seeTeamsTitle", "#seeTeams", "img/teamsPicture.jpg");
  });

  $('#seeLeaguesTitle').click(function() {
    clearInterval(slideInterval);
    checkSectionClick("#seeLeaguesTitle", "#seeLeagues", "img/leaguesPicture.jpg");
  });
});
