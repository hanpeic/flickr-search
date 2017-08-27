$(document).ready(function() {
  var selection;

  function highlight(thumb) {
    $('.lb-title').text($(thumb).data('title'));
    $('.lb-image').attr('src', $(thumb).data('large'));
    selection = thumb;
    $('.lb-container').addClass('lb-show');
    !selection.previousSibling ? $('.lb-prev').addClass('lb-disabled') : $('.lb-prev').removeClass('lb-disabled');
    !selection.nextSibling ? $('.lb-next').addClass('lb-disabled') : $('.lb-next').removeClass('lb-disabled');
  }

  $(document).on('click', '.fk-photo', function(e) {
    highlight(e.target);
  });

  $(document).on('click', '.lb-close', function(e) {
    selection = null;
    $('.lb-container').removeClass('lb-show');
  });

  $(document).on('click', '.lb-prev', function(e) {
    if(selection.previousSibling) {
      highlight(selection.previousSibling);
    }
  });

  $(document).on('click', '.lb-next', function(e) {
    if(selection.nextSibling) {
      highlight(selection.nextSibling);
    }
  });

  $(document).on('click', 'a.more-photo', function(e) {
    $('.pg-pager').addClass('pg-hidden');
  });
});
