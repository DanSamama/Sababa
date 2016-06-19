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
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"bank"},
    {status:"helper", name:"orel", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bank"},
    {status:"helper", name:"sarah", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"insurance"},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"bills"},
    {status:"helper", name:"lydia", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bank"},
    {status:"helper", name:"nathalie", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"bills"},
    {status:"helper", name:"dan", familyname:"attia",mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helper", name:"jordan", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"bills"},
    {status:"helper", name:"samuel", familyname:"attia",mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helper", name:"ben", familyname:"attia", mail:"test0@gmail.com",langage:"english",skills:"admin"},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"russian",skills:"insurance"},
    {status:"helpee", name:"hilly", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helpee", name:"jeremy", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin"},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:"admin"}
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
    for (var i in members){
        if (members[i].skills.toUpperCase === helperSkill){
            txt="\n"+txt+"\n"+members[i].name+" "+members[i].mail;
        }
    }
    document.querySelector("div.helpers").innerHTML = txt;
}

function skillsChecked(){
    var fskills=document.getElementsByClassName("skills");
    var btn = fskills[i];
        if (option.selected) {
            console.log("works");
            skills(btn)
        }
}

function localisation(){

}