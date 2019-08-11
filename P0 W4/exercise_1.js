// Angka Prima

/*
SET the function to accept angka as its argument

SET var count as 2

IF angka is LESS than 2 THEN
  RETURN false
ELSE IF angka is EQUAL to 2 THEN
  RETURN true
ELSE
  WHILE count is LESS than angka
    IF angka MOD count is EQUAL to 0 THEN
      RETURN false
    ELSE
      ADD count by 1
    END IF
END IF
RETURN true

*/

function angkaPrima(angka) {
  var count = 2;

  if (angka < 2) {
    return false;
  }
  else if (angka == 2) {
    return true;
  }
  else {
    while (count < angka) {
      if (angka % count == 0) {
        return false;
      }
      else {
        count++;
      }
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false