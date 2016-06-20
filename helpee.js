/**
 * Created by itc_user on 6/19/2016.
 */
var CITYG="";
var AVAILG="";
var SKILLSG="";
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

var genericItem = $('<div class="bio"> ' +
    '<img src="brad-profile-square.jpg" class="profileImage">' +
    '<div class="details"><br></div> <div class="rating"><div class="text">5 Stars</div>' +
    '<div class="infoButton">More Info...</div> </div> </div>');

var itemArray = [];

var members =[
    {status:"helper", name:"samuel", familyname:"attia", mail:"test0@gmail.com",langage:"french",skills:["banks", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"orel", familyname:"attia", mail:"test1@gmail.com",langage:"english",skills:["banks", "insurance"],city:"jerusalem",availability:["sunday", "tuesday", "wednesday", "friday"]},
    {status:"helper", name:"sarah", familyname:"attia", mail:"test2@gmail.com",langage:"russian",skills:["banks", "admin"],city:"haifa",availability:["sunday", "thursday", "saturday"]},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test3@gmail.com",langage:"french",skills:["banks", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "wednesday", "thursday", "friday"]},
    {status:"helper", name:"lydia", familyname:"attia", mail:"test4@gmail.com",langage:"english",skills:["bills", "insurance", "admin"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday", "saturday"]},
    {status:"helper", name:"nathalie", familyname:"attia", mail:"test5@gmail.com",langage:"russian",skills:["banks", "insurance"],city:"tel aviv",availability:["sunday", "monday", "wednesday", "thursday", "friday"]},
    {status:"helper", name:"dan", familyname:"attia",mail:"test6@gmail.com",langage:"french",skills:["banks", "insurance"],city:"tel aviv",availability:["tuesday", "thursday", "friday"]},
    {status:"helper", name:"jordan", familyname:"attia", mail:"test7@gmail.com",langage:"english",skills:["banks", "insurance"],city:"tel aviv",availability:["tuesday", "wednesday", "friday"]},
    {status:"helper", name:"samuel", familyname:"attia",mail:"test8@gmail.com",langage:"french",skills:["banks", "admin"],city:"tel aviv",availability:["sunday", "tuesday", "thursday", "saturday"]},
    {status:"helper", name:"ben", familyname:"attia", mail:"test9@gmail.com",langage:"english",skills:["bills", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"samuel", familyname:"attia", mail:"test10@gmail.com",langage:"russian",skills:["banks", "admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helpee", name:"hilly", familyname:"attia", mail:"test11@gmail.com",langage:"french",skills:["banks", "bills", "admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helpee", name:"jeremy", familyname:"attia", mail:"test12@gmail.com",langage:"french",skills:["bills", "admin"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test13@gmail.com",langage:"french",skills:["admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test14@gmail.com",langage:"french",skills:["banks", "admin"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helpee", name:"samuel", familyname:"attia", mail:"test15@gmail.com",langage:"french",skills:["banks", "bills"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]}
];
function frenchUsers(){
    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="FRENCH"){
            var helperSkills = "";
            for(var x in members[i].skills){
                if(!(x === 0))
                    helperSkills += ', ' + members[i].skills[x];
            }
            genericItem.find('.details').html('French<br>' + helperSkills);
            itemArray.push(genericItem);
        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
}

function englishUsers(){

    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="ENGLISH"){
            var helperSkills = "";
            for(var x in members[i].skills){
                if(x !== 0)
                    helperSkills += ', ' + members[i].skills[x];
            }
            genericItem.find('.details').html('English<br>' + helperSkills);
            itemArray.push(genericItem);

        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
}

function russianUsers(){
    for (var i in members){
        console.log(members.length);
        console.log(members[i].status.toUpperCase());
        console.log(members[i].langage.toUpperCase());
        if (members[i].status.toUpperCase() ==="HELPER" && members[i].langage.toUpperCase() ==="RUSSIAN"){
            var helperSkills = "";
            for(var x in members[i].skills){
                if(x !== 0)
                    helperSkills += ', ' + members[i].skills[x];
            }
            genericItem.find('.details').html('Russian<br>' + helperSkills);
            itemArray.push(genericItem);
        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
}
var y = 0;
function skills (helperSkill){
    console.log(helperSkill);
    for (var i in members){
        for (var j in members[i].skills) {
            console.log(members[i].skills[j].toUpperCase());
            console.log(helperSkill.toUpperCase() + '\n\n') ;

            if (members[i].skills[j].toUpperCase() === helperSkill.toUpperCase()
                && (CITYG == "" || CITYG == members[i].city.toUpperCase())){
                if (AVAILG == "") {
                    var helperSkills = "";
                    for(var x in members[i].skills){
                        if(x !== 0)
                            helperSkills += ', ' + members[i].skills[x];
                    }
                    genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                    itemArray.push(genericItem);
                }
                else {
                    for (var k in members[i].availability) {
                        if (AVAILG == members[i].availability[k].toUpperCase()) {
                            var helperSkills = "";
                            for(var x in members[i].skills){
                                if(x !== 0)
                                    helperSkills += ', ' + members[i].skills[x];
                            }
                            genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                            itemArray.push(genericItem);
                        }
                    }
                }
            }


        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
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
    console.log(place);
    for (var i in members){
        if (members[i].city.toUpperCase() === place.toUpperCase()){
            if (AVAILG == "") {
                if (SKILLSG == "") {
                    var helperSkills = "";
                    for(var x in members[i].skills){
                        if(x !== 0)
                            helperSkills += ', ' + members[i].skills[x];
                    }
                    genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                    itemArray.push(genericItem);
                }
                else {
                    for (var k in members[i].skills) {
                        if (SKILLSG == members[i].skills[k].toUpperCase()) {
                            var helperSkills = "";
                            for(var x in members[i].skills){
                                if(x !== 0)
                                    helperSkills += ', ' + members[i].skills[x];
                            }
                            genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                            itemArray.push(genericItem);
                        }
                    }
                }
            }
            else {
                for (var k in members[i].availability) {
                    if (AVAILG == members[i].availability[k].toUpperCase()) {
                        if (SKILLSG == "") {
                            var helperSkills = "";
                            for(var x in members[i].skills){
                                if(x !== 0)
                                    helperSkills += ', ' + members[i].skills[x];
                            }
                            genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                            itemArray.push(genericItem);
                        }
                        else {
                            for (var p in members[i].skills) {
                                if (SKILLSG == members[i].skills[p].toUpperCase()) {
                                    var helperSkills = "";
                                    for(var x in members[i].skills){
                                        if(x !== 0)
                                            helperSkills += ', ' + members[i].skills[x];
                                    }
                                    genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                                    itemArray.push(genericItem);
                                }
                            }
                        }
                    }

                }
            }
        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
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
    console.log(moment);
    for (var i in members){
        for (var j in members[i].availability) {
            if (members[i].availability[j].toUpperCase() === moment.toUpperCase()
                && (CITYG == "" || CITYG == members[i].city.toUpperCase())){
                if (SKILLSG == "") {
                    var helperSkills = "";
                    for(var x in members[i].skills){
                        if(x !== 0)
                            helperSkills += ', ' + members[i].skills[x];
                    }
                    genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                    itemArray.push(genericItem);
                }
                else {
                    for (var k in members[i].skills) {
                        if (SKILLSG == members[i].skills[k].toUpperCase()) {
                            var helperSkills = "";
                            for(var x in members[i].skills){
                                if(x !== 0)
                                helperSkills += ', ' + members[i].skills[x];
                            }
                            genericItem.find('.details').html(members[i].langage + '<br>' + helperSkills);
                            itemArray.push(genericItem);
                        }
                    }
                }
            }
        }

    }
    for(var t = 0; t < itemArray.length; t++) {
        $('div.helpers').append(itemArray[t]);
    }
    itemArray = [];
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

