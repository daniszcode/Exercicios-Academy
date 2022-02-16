function removerAcentos(newStringComAcento) {
  const string = newStringComAcento.normalize("NFD");

  return string.toLowerCase().replace(/[^a-z0-9]/gi, "");
}

function palindrome(palavra) {
  const strMinuscula = removerAcentos(palavra);
  const splits = strMinuscula.split("", strMinuscula.lenth);
  const strReverse = splits.reverse().join("");

  if (strReverse === strMinuscula) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("ana")); //=> true
console.log(palindrome("maam")); //=> true
console.log(palindrome("abracadabra")); // => false
console.log(palindrome("A Rita, sobre vovô, verbos atira")); //  => true
