let containerPrincipale = document.querySelector(".mio-container");
let output;

for (let i = 1; i < 101; i++ ){
        if (i % 5 == 0 && i % 3 == 0) {
            output = "fizzbuzz";
        } else if (i % 5 == 0) {
            output = "buzz";
        } else if (i % 3 == 0) {
            output = "fizz";
        } else {
            output = i;
        }
        console.log(output);
        containerPrincipale.innerHTML += '<div class="square"><p>' + output + '</p></div>';
}
