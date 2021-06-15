console.log("Selamat datang!")

let pantaiImg = document.querySelector("#pantaiImg");
pantaiImg.setAttribute("src", 'assets/image/tanjungaan2.jpg');

var divTitle = document.querySelector('div');
divTitle.style.color = 'cyan';

var paragraph = document.querySelectorAll('p');
for(var p of paragraph)
  p.style.color = 'rgb(95, 45, 45)';

var btn = document.querySelector('button');
  btn.addEventListener('click', test);
    function test() { 

        const firstName = prompt("Halo! Siapa nama depanmu?");
        const lastName = prompt("Siapa nama belakangmu?");
        const language = prompt("Bisa berbahasa apa? (Pilih: English/French/Japanese/Indonesia)");
 
            const user = {
            name: {
                first: firstName,
                last: lastName,
            },
            language: language
            };
    
            if (user.language === "English") {
            alert("Nice to meet you, " + user.name.first + " " + user.name.last + "!");
            } else if (user.language === "French") {
            alert("Ravi de vous rencontrer, " + user.name.first + " " + user.name.last + "!");
            } else if (user.language === "Japanese") {
            alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
            } else {
            alert("Senang bertemu dengan Anda, " + user.name.first + " " + user.name.last + "!");
            }
    }




