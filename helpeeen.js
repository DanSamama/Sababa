/**
 * Created by itc_user on 6/19/2016.
 */
function member(id, helper, email, password, first, last, phone, city, languages, skills, days, rating){
    this.id = id;
    this.helper = helper;
    this.location = city;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phone;
    this.languages = languages;
    this.skills = skills;
    this.days = days;
    this.rating = rating;
}

var members =[
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"bank",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"orel", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bank",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"sarah", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"insurance",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"bills",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"lydia", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bank",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"nathalie", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"bills",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"dan", familyname:"attia",mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"jordan", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bills",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"samuel", familyname:"attia",mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"ben", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"insurance",city:"tel aviv",availability:"monday"},
    {status:"helpee", name:"hilly", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helpee", name:"jeremy", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin",city:"tel aviv",availability:"monday"}
]
function frenchUsers(){
    var txt="";
    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="FRENCH"){
             txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;

        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function englishUsers(){
    var txt="";
    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="ENGLISH"){
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;

        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function russianUsers(){
    var txt="";
    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="RUSSIAN"){
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;

        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}
function skills (helperSkill){
    var txt=" ";
    console.log(helperSkill);
    for (var i in members){
       
        if (members[i].skills.toUpperCase() === helperSkill.toUpperCase()){
            console.log('works');
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function skillsChecked(){
    var fskills=document.getElementsByClassName("skills");
    for (var i in fskills) {
        var btn = fskills[i];
        if (btn.selected) {
            skills(btn.value);
        }
    }
}

function localisation(place){
    var txt=" ";
    console.log(place);
    for (var i in members){

        if (members[i].city.toUpperCase() === place.toUpperCase()){
            console.log('works');
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function localisationChecked(){
    var fcity=document.getElementsByClassName("city");
    for (var i in fcity) {
        var btn = fcity[i];
        if (btn.selected) {
            localisation(btn.value);
        }
    }
}
function availability(moment){
    var txt=" ";
    console.log(moment);
    for (var i in members){

        if (members[i].availability.toUpperCase() === moment.toUpperCase()){
            console.log('works');
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function availabilityChecked(){
    var fday=document.getElementsByClassName("day");
    for (var i in fday) {
        var btn = fday[i];
        if (btn.selected) {
            availability(btn.value);
        }
    }
}
