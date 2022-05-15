$(document).ready(function(){
  $("button").click(function(){
    var box= document.getElementById("email");
    if (box.value.length<5) {
      box.focus();
      box.style.border="solid 3px red";
      return false;
    }
    $("#pop-up").hide();
  });
});


var pests = [
  {
    name: 'mosquito',
    id: '#mosquito',
  },
  {
    name: 'cockroach',
    id: '#cockroach',
  },
  {
    name: 'bedbugs',
    id: '#bedbugs',
  },
  {
    name: 'mice',
    id: '#mice',
  },
  {
    name: 'termite',
    id: '#termite',
  },
  {
    name: 'ant',
    id: '#ant',
  }
];

function search(event) {
  if (event.key == "Enter") {
    var value = $('#search').val().toLowerCase();
    if (value == '')
      return;
    var found = false;
    $('#search').val('');

    $('#notfound').fadeOut();
    for (let i = 0; i < pests.length; ++i) {
        $(pests[i].id).fadeOut();
    }

    for (let i = 0; i < pests.length; ++i) {
      if(pests[i].name.indexOf(value) !== -1) {
        $(pests[i].id).fadeIn();
        found = true;
      }
    }

    if (! found) {
      $('#notfound').fadeIn();
    }
  }
}
