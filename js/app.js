const SportsApiurl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2c7c7e8b60a842448a94a01489b96d55`
window.fetch(SportsApiurl).then(data => {
    data.json().then(sportsnews => {
        // console.log(sportsnews);
        let sportsData=sportsnews.articles;
        let output='';
        for(let sports of sportsData) {
            //<h1 class="newsh1">Sports News</h1>
            //<h1 class="h1title">${sports.title}</h1>
            output+=`
            
            <h1 class="h1title"><a href="${sports.url}" target_blank>${sports.title}</h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.pubilshedAt}</p>
            `;
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

//time javascript here 
setInterval (() => {
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);

setInterval (() => {
    var date=new Date().toLocaleDateString();
    document.getElementById("date").innerHTML=date;
},1000);

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var Day = weekday[day.getDay()];
document.getElementById("day").innerHTML=Day;

const Enturl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=2c7c7e8b60a842448a94a01489b96d55";

window.fetch(Enturl).then(data => {
    data.json().then(ent => {
        let entData=ent.articles;
        let output='';
        for(let ent1 of entData) {
            //<h1 class="newsh1">Sports News</h1>
            output+=`
            
            <h1 class="h1title">${ent1.title}</h1>
            <p>${ent1.description}</p>
            <img src="${ent1.urlToImage}"/>
            <p>${ent1.pubilshedAt}</p>
            `;
        }
        document.getElementById("right").innerHTML=output;
        // console.log(ent)
    }).catch(err => console.log(err));
}).catch(err => console.log(err));

const topheadlineApiurl="https://newsapi.org/v2/top-headlines?country=us&apiKey=2c7c7e8b60a842448a94a01489b96d55";

window.fetch(topheadlineApiurl).then(data => {
    data.json().then(topnews => {
        let topnewsData=topnews.articles;
        let output='';
        for(let topnew of topnewsData) {
            //<h1 class="newsh1">Sports News</h1>
            output+=`
            
            <h1 class="h1title">${topnew.title}</h1>
            <p>${topnew.description}</p>
            <img src="${topnew.urlToImage}"/>
            <p>${topnew.pubilshedAt}</p>
            `;
        }
        document.getElementById("middle").innerHTML=output;
        // console.log(topnews)
    }).catch(err => console.log(err));
}).catch(err => console.log(err));