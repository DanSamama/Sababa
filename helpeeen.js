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
$('.dropdown-toggle').dropdown();
var members=[
    {statut:'helper', name:'samuel', familyname:'attia', email:'test0@gmail.com',langage:'french',skills:'bank'},
    {statut:'helper', name:'orel', familyname:'attia', email:'test0@gmail.com',langage:'english',skills:'bank'},
    {statut:'helper', name:'sarah', familyname:'attia', email:'test0@gmail.com',langage:'russian',skills:'insurance'},
    {statut:'helper', name:'samuel', familyname:'attia', email:'test0@gmail.com',langage:'french',skills:'bills'},
    {statut:'helper', name:'lydia', familyname:'attia', email:'test0@gmail.com',langage:'english',skills:'bank'},
    {statut:'helper', name:'nathalie', familyname:'attia', email:'test0@gmail.com',langage:'russian',skills:'bills'},
    {statut:'helper', name:'dan', familyname:'attia', email:'test0@gmail.com',langage:'french',skills:'admin'},
    {statut:'helper', name:'jordan', familyname:'attia', email:'test0@gmail.com',langage:'english',skills:'bills'},
    {statut:'helper', name:'samuel', familyname:'attia', email:'test0@gmail.com',langage:'french',skills:'admin'},
    {statut:'helper', name:'ben', familyname:'attia', email:'test0@gmail.com',langage:'english',skills:'admin'},
    {statut:'helper', name:'samuel', familyname:'attia', email:'test0@gmail.com',langage:'russian',skills:'insurance'},
    {statut:'helpee', name:'hilly', familyname:'attia', email:'test0@gmail.com'},
    {statut:'helpee', name:'jeremy', familyname:'attia', email:'test0@gmail.com'},
    {statut:'helpee', name:'samuel', familyname:'attia', email:'test0@gmail.com'},
    {statut:'helpee', name:'samuel', familyname:'attia', email:'test0@gmail.com'},
    {statut:'helpee', name:'samuel', familyname:'attia', email:'test0@gmail.com'},
]
function frenchUsers(){
    for (var i=0;i<members.length;i++){
        if (members[i].statut.toUpperCase ==="HELPER" && members[i].langage.toUpperCase ==="FRENCH"){
            document.querySelector("div.helpers").innerHTML = members[i].name+members[i].email;
        }
    }
}

function skills (helperSkill){
    for (var i=0;i<arr.length;i++){
        if (members[i].skill.toUpperCase === helperSkill){
            document.querySelector("div.helpers").innerHTML = members[i].name+members[i].email;
        }
    }
}

function skillsChecked(){
    var answerValues = {"BANK": 1, "ADMIN": 2, "INSURANCE":3, "BILLS":4};
    var fskills=document.getElementsByClassName("skills");
    for (var i=0; i < fskills.length; i++) {
        var btn = fskills[i];
        if (btn.checked) {
            console.log("works");
            skills(btn)
        }
    }

}

function localisation(){

}