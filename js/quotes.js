const quotes =[
    {
        quote: "나의 해머에 대항하는 자는 가루가 될 뿐!",
        author: "디스트로이어"
    },{
        quote: "다시는 동료를 잃지 않겠다",
        author: "워로드"
    },{
        quote: "이 거대한 검은 내 안의 투쟁심을 이끌어내지...!",
        author: "버서커"
    },{
        quote: "빛의 수호자여, 신의 이름으로 세상을 심판하라!",
        author: "홀리나이트"
    },{
        quote: "체술만으로는 강해질 수 없어",
        author: "배틀마스터"
    },{
        quote: "느껴진다. 오브에 가득한 무한한 힘이",
        author: "인파이터"
    },{
        quote: "내면의 기로 한계를 초월하라!",
        author: "기공사"
    },{
        quote: "전장의 창이 되어, 적을 섬멸하라!",
        author: "창술사"
    },{
        quote: "오로지, 극을 향하여 나아갈 뿐!",
        author: "스트라이커"
    },{
        quote: "총 앞에서는, 모두가 솔직해지는 법이지",
        author: "건슬링어"
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;