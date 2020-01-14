/*jQuery document.ready*/
$(function() {
  /*First input box: reduce method*/
  /*Create data*/
  const data = [5, 10, 15, 20],
    input = $('#firstInput'),
    submit = $('#firstSubmit'),
    resultSum = $('.explainOne');
  /*Input submission click event*/
  submit.on('click', function() {
    /*Make value a number*/
    const val = input.val();
    const num = parseInt(val);
    /*Make sure it's real number*/
    if (!isNaN(num)) {
      /*Add value to the array*/
      data.push(num);
      /*reduce method makes array of numbers into one value that is the sum of all of them*/
      const results = data.reduce((dog, cat) => dog + cat);
      /*Add sum to explanation*/
      resultSum.text(results);
      /*Reset blank input*/
      input.val('');
    }
  });
});
  /*jQuery document.ready*/
$(function() {
  /*Second input box: map method*/
  /*Create data*/
  const array = [2, 4, 6, 8],
    input = $('#secondInput'),
    submit = $('#secondSubmit'),
    resultSum = $('.explainTwo');
  /*Input submission click event*/
  submit.on('click', function() {
    /*Make value a number*/
    const val = input.val();
    const num = parseInt(val);
    /*Make sure it's real number*/
    if (!isNaN(num)) {
      /*map method*/
      const sum = array.map(function(bird) {
        return bird * val
      });
      /*Add result to explanation*/
      resultSum.text(sum);
      /*Reset blank input*/
      input.val('');
    }
  });
});
/*jQuery document.ready*/
$(function() {
  /*Third input box: filter method*/
  /*Create data*/
  const list = [350, 6000, 8, 210, 56, 3, 74],
    input = $('#thirdInput'),
    submit = $('#thirdSubmit'),
    resultSum = $('.explainThree');
  /*Input submission click event*/
  submit.on('click', function() {
    /*Make value a number*/
    const val = input.val();
    const num = parseInt(val);
    /*Make sure it's real number*/
    if (!isNaN(num)) {
      /*filter method*/
      const sum = list.filter(function(bear) {
        return bear > val
      });
      /*Add result to explanation*/
      resultSum.text(sum);
      /*Reset blank input*/
      input.val('');
    }
  });
});

/*jQuery document.ready*/
$(function() {
  /*Fourth input box: find method*/
  /*Create data*/
  const list = [55555, 4444, 333, 22, 1, 0],
    input = $('#fourthInput'),
    submit = $('#fourthSubmit'),
    resultSum = $('.explainFour');
  /*Input submission click event*/
  submit.on('click', function() {
    /*Make value a number*/
    const val = input.val();
    const num = parseInt(val);
    /*Make sure it's real number*/
    if (!isNaN(num)) {
      /*find method*/
      const sum = list.find(function(fish) {
        return fish < val
      });
      /*Add result to explanation*/
      resultSum.text(sum);
      /*Reset blank input*/
      input.val('');
    }
  });
});
