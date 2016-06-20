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
    {status:"helper", name:"ben", familyname:"simmons", mail:"test9@gmail.com",langage:"english",skills:["bills", "banks"],city:"haifa",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"thomas", familyname:"attia", mail:"test10@gmail.com",langage:"russian",skills:["banks", "admin", "insurance"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"hilly", familyname:"smith", mail:"test11@gmail.com",langage:"french",skills:["banks", "bills", "admin"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"sarah", familyname:"michaels", mail:"test12@gmail.com",langage:"french",skills:["bills", "admin"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"samuel", familyname:"scott", mail:"test13@gmail.com",langage:"french",skills:["admin", "insurance"],city:"tel aviv",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"john", familyname:"james", mail:"test14@gmail.com",langage:"french",skills:["banks", "admin"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]},
    {status:"helper", name:"mike", familyname:"attia", mail:"test15@gmail.com",langage:"french",skills:["banks", "bills"],city:"natanya",availability:["monday", "tuesday", "thursday", "friday"]}
]
var bios = [];

for(var i = 0; i < members.length; i++){
    var profile = $('<div class="bio"></div>');
    profile.html('<img src="../Images/brad-profile-square.jpg" class="profileImage"> <div class="details">French<br>Bank, Insurance</div> <div class="rating"><div class="text">5 Stars</div> <div class="buttons">More Info...</div> </div>');
    profile.find('.details').html(members[i].langage + '<br>' + members[i].skills);
    profile.data('access', i);
    bios.push(profile);
    $('.helpers').append(profile);
    profile.hide();
   //profile.hide();
}


var allClickable = $('.clickable'); //collect all clickable elements


function showBoxes() {
    var param = document.getElementById("selector").value;
    if (!(param === '')) {
        for (var i = 0; i < 16; i++) {
            bios[i].show();
        }
    }
}

function showBoxes1() {
    var param = document.getElementById("selected").value;
    for (var i = 0; i < 16; i++) {
        bios[i].hide();
    }
    if (param === 'banks') {
        for (var i = 5; i < 11; i++) {
            bios[i].show();
        }
    }
}

function showBoxes2() {
    var param = document.getElementById("selected").value;
    for (var i = 0; i < 16; i++) {
        bios[i].hide();
    }
    if (!(param === '')) {
        for (var i = 14; i < 16; i++) {
            bios[i].show();
        }
    }
}
