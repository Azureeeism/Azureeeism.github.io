const rickroll_urls = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    "https://www.youtube.com/watch?v=6_b7RDuLwcI",
    "https://www.youtube.com/watch?v=G8iEMVr7GFg",
    "https://www.youtube.com/watch?v=AyOqGRjVtls",
    "https://www.youtube.com/watch?v=SpZ2FsEfwP4",
    "https://www.youtube.com/watch?v=nrsnN23tmUA",
    "https://www.youtube.com/watch?v=8mkofgRW1II",
    "https://www.youtube.com/watch?v=rAx5LIul1N8",
    "https://www.youtube.com/watch?v=sO4wVSA9UPs",
    "https://www.youtube.com/watch?v=rrs0B_LM898",
    "https://www.youtube.com/watch?v=doEqUhFiQS4",
    "https://www.youtube.com/watch?v=epyRUp0BhrA",
    "https://www.youtube.com/watch?v=uK5WDo_3s7s",
    "https://www.youtube.com/watch?v=7B--1KArxow",
    "https://www.youtube.com/watch?v=rbsPu1z3ugQ",
    "https://www.youtube.com/watch?v=ptw2FLKXDQE",
    "https://www.youtube.com/watch?v=E50L-JYWm3w",
    "https://www.youtube.com/watch?v=8leAAwMIigI",
    "https://www.youtube.com/watch?v=ByqFY-Boq5Y",
    "https://www.youtube.com/watch?v=E4ihJMQUmUQ",
    "https://www.youtube.com/watch?v=cjBHXvBYw5s",
    "https://www.youtube.com/watch?v=xaazUgEKuVA",
    "https://www.youtube.com/watch?v=TzXXHVhGXTQ",
    "https://www.youtube.com/watch?v=Uj1ykZWtPYI",
    "https://www.youtube.com/watch?v=EE-xtCF3T94",
    "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
    "https://www.youtube.com/watch?v=cqF6M25kqq4",
    "https://www.youtube.com/watch?v=0SoNH07Slj0",
    "https://www.youtube.com/watch?v=xfr64zoBTAQ",
    "https://www.youtube.com/watch?v=j5a0jTc9S10",
    "https://www.youtube.com/watch?v=nHRbZW097Uk",
    "https://www.youtube.com/watch?v=BjDebmqFRuc",
    "https://www.youtube.com/watch?v=Gc2u6AFImn8",
    "https://www.youtube.com/watch?v=8VFzHYtOARw",
    "https://www.youtube.com/watch?v=cSAp9sBzPbc",
    "https://www.youtube.com/watch?v=Dx5i1t0mN78",
    "https://www.youtube.com/watch?v=Oo0twK2ZbLU",
    "https://www.youtube.com/watch?v=lXMskKTw3Bc",
    "https://www.youtube.com/watch?v=7z_1E8VGJOw",
    "https://www.youtube.com/watch?v=VgojnNgmgVs",
    "https://www.youtube.com/watch?v=5wOXc03RwVA",
];

const hakdog = []


function setRandomLink(event) {
    event.preventDefault();

    const randomIndex = Math.floor(Math.random() * rickroll_urls.length);
    const randomLink = rickroll_urls[randomIndex];

    document.getElementById('ccit-hyperlink').href = randomLink;

    window.location.href = randomLink;
    hyperlink.target = '_blank';
    window.open(randomLink, '_blank');
}

document.getElementById('ccit-hyperlink').addEventListener('click', setRandomLink);

function myfunc1(courseName){
    document.addEventListener('DOMContentLoaded', function() {
        var abbreviation = document.getElementById(courseName);
        var originalState = abbreviation.textContent
        abbreviation.addEventListener('mouseover', function() {
            this.textContent = this.title;
        });
        
        abbreviation.addEventListener('mouseout', function() {
            
            this.textContent = originalState
        });
    });
    
}

myfunc1("BSIT")
myfunc1("BSCS")
myfunc1("BLIS")
myfunc1("DCT")