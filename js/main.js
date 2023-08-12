var DifferentQotes = [
{
qote:"Be yourself; everyone else is already taken" ,
writer:"Oscar Wilde",
},

{
    qote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to0",
    writer:"Marilyn Monroe",
},

{
    qote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    writer:"Albert Einstein",
},

{
    qote:"So many books, so little time.",
    writer:" Frank Zappa",
},

{
    qote:"A room without books is like a body without a soul.",
    writer:"Marcus Tullius Cicero",
},

{
    qote:"Be who you are and say what you feel, because those who mind don't matter,",
    writer:" Bernard M. Baruch",
},

{
    qote:"You've gotta dance like there's nobody watching,  you'll never be hurt",
    writer:"William W. Purkey",
},

{
    qote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    writer:"Dr. Seuss",
},

{
    qote:"Be the change that you wish to see in the world.",
    writer:"Mahatma Gandhi",
},

{
    qote:"If you want to know what a man's like, take a good look at how he treats his inferiors,",
    writer:" J.K. Rowling, Harry Potte",
},

{
    qote:"If you tell the truth, you don't have to remember anything.",
    writer:"Mark Twain",
},

{
    qote:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself",
    writer:"C.S. Lewis, The Four Loves",
},


]


var num = 120 ; 
function genereateQote(){
    var x = Math.floor(Math.random() * DifferentQotes.length );
    localStorage.setItem("number",x.toString());
    if(num != parseInt(localStorage.getItem("number"))){
        num = parseInt(localStorage.getItem("number"));
        document.getElementById("qote").innerHTML =DifferentQotes[num].qote ;
        document.getElementById("writer").innerHTML =DifferentQotes[num].writer ;
    }else{
        num=((num+1)%10);
    
        document.getElementById("qote").innerHTML =DifferentQotes[num].qote ;
        document.getElementById("writer").innerHTML =DifferentQotes[num].writer ;
        
    }
}


