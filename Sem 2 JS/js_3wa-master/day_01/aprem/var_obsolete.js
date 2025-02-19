function foo() {
    var x = 10; // portée fonction pas bloc comme let
    if (true) {
      var x = 2;  // c'est la même variable !
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }


foo(); // 2 2