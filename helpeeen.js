/**
 * Created by itc_user on 6/19/2016.
 */
 var CITYG="";
 var AVAILG="";
 var SKILLSG="";
 var LANGG="ENGLISH";
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
    //this.skills = skills;
    this.days = days;
    this.rating = rating;
}

var members =[
    {status:"helper", name:"tom", familyname:"smith", mail:"test0@gmail.com",langage:"french",skills:["banks", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"orel", familyname:"attia", mail:"test1@gmail.com",langage:"english",skills:["banks", "insurance"],city:"jerusalem",availability:["sunday", "tuesday", "wednesday", "friday"]},
    {status:"helper", name:"sarah", familyname:"jones", mail:"test2@gmail.com",langage:"russian",skills:["banks", "admin"],city:"haifa",availability:["sunday", "thursday", "saturday"]},
    {status:"helper", name:"samuel", familyname:"johnson", mail:"test3@gmail.com",langage:"french",skills:["banks", "insurance"],city:"jerusalem",availability:["monday", "tuesday", "wednesday", "thursday", "friday"]},
    {status:"helper", name:"lydia", familyname:"jordan", mail:"test4@gmail.com",langage:"english",skills:["bills", "insurance", "admin"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday", "saturday"]},
    {status:"helper", name:"nathalie", familyname:"mays", mail:"test5@gmail.com",langage:"russian",skills:["banks", "insurance"],city:"haifa",availability:["sunday", "monday", "wednesday", "thursday", "friday"]},
    {status:"helper", name:"dan", familyname:"west",mail:"test6@gmail.com",langage:"french",skills:["banks", "insurance"],city:"haifa",availability:["tuesday", "thursday", "friday"]},
    {status:"helper", name:"jordan", familyname:"jay", mail:"test7@gmail.com",langage:"english",skills:["banks", "insurance"],city:"jerusalem",availability:["tuesday", "wednesday", "friday"]},
    {status:"helper", name:"amir", familyname:"thomas",mail:"test8@gmail.com",langage:"french",skills:["banks", "admin"],city:"tel aviv",availability:["sunday", "tuesday", "thursday", "saturday"]},
    {status:"helper", name:"ben", familyname:"simmons", mail:"test9@gmail.com",langage:"english",skills:["bills", "insurance"],city:"haifa",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"thomas", familyname:"attia", mail:"test10@gmail.com",langage:"russian",skills:["banks", "admin", "insurance"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"hilly", familyname:"smith", mail:"test11@gmail.com",langage:"french",skills:["banks", "bills", "admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"sarah", familyname:"michaels", mail:"test12@gmail.com",langage:"french",skills:["bills", "admin"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"samuel", familyname:"scott", mail:"test13@gmail.com",langage:"french",skills:["admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"john", familyname:"james", mail:"test14@gmail.com",langage:"french",skills:["banks", "admin"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"mike", familyname:"attia", mail:"test15@gmail.com",langage:"french",skills:["banks", "bills"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]}
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
    LANGG = "FRENCH";
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
    LANGG = "ENGLISH";
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
    LANGG = "RUSSIAN";
    document.querySelector("div.helpers").innerHTML = txt;
}
function skills (helperSkill){
    var txt=" ";
    var count=0;
    console.log(helperSkill);
    for (var i in members){
        for (var j in members[i].skills) {
            if (members[i].skills[j].toUpperCase() === helperSkill.toUpperCase()
                && (CITYG == "" || CITYG == members[i].city.toUpperCase()) && LANGG == members[i].langage.toUpperCase()){
                if (AVAILG == "") {
                    txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                    count++;
                }
                else {
                    for (var k in members[i].availability) {
                        if (AVAILG == members[i].availability[k].toUpperCase()) {
                            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                            count++;
                        }
                    }
                }
            }
        }
    }
    if (count == 0) {
        if (LANGG == "ENGLISH") {
            txt="\n I'm sorry, there are currently no helpers available under these criteria.";
        }
        else if (LANGG == "FRENCH") {
            txt="\n Je suis désolé, il n'y a actuellement personne de disponibles selon ces critères.";
        }
        else {
            txt="\n Мне очень жаль, нет в настоящее время нет помощников, доступных в соответствии с этими критериями.";
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function skillsChecked(){
    var fskills=document.getElementsByClassName("skills");
    for (var i in fskills) {
        var btn = fskills[i];
        if (btn.selected) {
            SKILLSG = btn.value.toUpperCase();
            skills(btn.value);
        }
    }
}

function localisation(place){
    var txt=" ";
    var count =0;
    console.log(place);
    for (var i in members){
        if (members[i].city.toUpperCase() === place.toUpperCase() && LANGG == members[i].langage.toUpperCase()){
            if (AVAILG == "") {
                if (SKILLSG == "") {
                    txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                    count++;
                }
                else {
                    for (var k in members[i].skills) {
                        if (SKILLSG == members[i].skills[k].toUpperCase()) {
                            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                            count++;
                        }
                    }
                }
            }
            else {
                for (var k in members[i].availability) {
                    if (AVAILG == members[i].availability[k].toUpperCase()) {
                        if (SKILLSG == "") {
                            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                            count++;
                        }
                        else {
                            for (var p in members[i].skills) {
                                if (SKILLSG == members[i].skills[p].toUpperCase()) {
                                    txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                                    count++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (count == 0) {
        if (LANGG == "ENGLISH") {
            txt="\n I'm sorry, there are currently no helpers available under these criteria.";
        }
        else if (LANGG == "FRENCH") {
            txt="\n Je suis désolé, il n'y a actuellement personne de disponibles selon ces critères.";
        }
        else {
            txt="\n Мне очень жаль, нет в настоящее время нет помощников, доступных в соответствии с этими критериями.";
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function localisationChecked(){
    var fcity=document.getElementsByClassName("city");
    for (var i in fcity) {
        var btn = fcity[i];
        if (btn.selected) {
            CITYG = btn.value.toUpperCase();
            localisation(btn.value);
        }
    }
}
function availability(moment){
    var txt=" ";
    var count=0;
    console.log(moment);
    for (var i in members){
        for (var j in members[i].availability) {
            if (members[i].availability[j].toUpperCase() === moment.toUpperCase() 
                && (CITYG == "" || CITYG == members[i].city.toUpperCase()) && LANGG == members[i].langage.toUpperCase()){
                if (SKILLSG == "") {
                    txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                    count++;
                }
                else {
                    for (var k in members[i].skills) {
                        if (SKILLSG == members[i].skills[k].toUpperCase()) {
                            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
                            count++;
                        }
                    }
                }
            }
        }
    }
    if (count == 0) {
        if (LANGG == "ENGLISH") {
            txt="\n I'm sorry, there are currently no helpers available under these criteria.";
        }
        else if (LANGG == "FRENCH") {
            txt="\n Je suis désolé, il n'y a actuellement personne de disponibles selon ces critères.";
        }
        else {
            txt="\n Мне очень жаль, нет в настоящее время нет помощников, доступных в соответствии с этими критериями.";
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function availabilityChecked(){
    var fday=document.getElementsByClassName("day");
    for (var i in fday) {
        var btn = fday[i];
        if (btn.selected) {
            AVAILG = btn.value.toUpperCase();
            availability(btn.value);
        }
    }
}
