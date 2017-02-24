 // business logic

function isVowel(c) {
    return ["a","e","i","o","u"].indexOf(c.toLowerCase()) !== -1
}

function isConsonant(c) {
    return ["b","c","d","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].indexOf(c.toLowerCase()) !== -1
}

function consecutiveConsonants(string) {
  var consonants = "";
  for (var i = 0; i <= string.length - 1; i++) {
    // if a consonant, add to output variable
    if (isConsonant(string.charAt(i)) == true) {
      consonants = consonants + string.charAt(i);
    } else {
      return consonants;
    }
  }
  return consonants;
}

function convertToPigLatin(string) {
   var stringLength = string.length;

  // For words beginning with a vowel, add "ay" to the end. Vowels include a,e,i,o,u.
  // The program does not add "ay" to single-letter words beginning with a "y" as it is treated as a consonant.
  if (isVowel(string.charAt(0)) == true) {
    return string + "ay";
  }
  // For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and then add "ay".
  // If the first consonants include "qu", move the "u" along with the "q".
  else if (isConsonant(string.charAt(0)) == true) {
       var consonants = consecutiveConsonants(string);
       var consonantStringLength = consonants.length;
       var sliceOfString = string.slice(parseInt(consonantStringLength), parseInt(stringLength));
       return sliceOfString + consonants + "ay";
 }
  else {
    return string;
  }
};


// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var originalWord = $("input#originalWord").val();
    var pigLatinWord = convertToPigLatin(originalWord);

    $(".originalWord").text(originalWord);
    $(".pigLatinWord").text(pigLatinWord);

    $("#result").show();
  });
});
