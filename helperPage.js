/**
 * Created by ITC USER on 6/19/2016.
 */

function Helpee(id, email, phone, pic, bio){
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.picture = pic;
    this.bio = bio;
}


var helpees = [new Helpee(0, 'jeremy.atias@gmail.com', '541234567', '../pictures/photo1.jpg', 'I am looking for help with my phone bill. I do not want to sign up for a plan without knowing ' +
                                                       'all the terms. Please help me translate and navigate the website.'),
               new Helpee(1, 'eastman.ely@me.com', '587831032', '../pictures/photo2.jpg', 'I am not sure how to renew my Visa and would like someone to review the paperwork with me.' +
                                                       'I am not completely sure how to fill out the application and what I will need to bring to the office. ' +
                                                       'The help would be greatly appreciated.'),
               new Helpee(2, 'nathalie@hotmail.com', '546768890', '../pictures/photo3.jpg', 'I am trying to open a bank account and would like to discuss which is the best bank for me.' +
                                                       'I have information from a couple banks but none of it is in English. I am located in North Tel Aviv' +
                                                       ' and would like to speak to you for a few hours.'),
               new Helpee(3, 'othergirl@gmail.com', '521234567', '../pictures/photo4.jpg', 'I have recieved a number of bills that are all in Hebrew. I would like to review them with someone ' +
                                                       'before I just start paying them all.'),
               new Helpee(4, 'examplelady@msn.com', '584444444', '../pictures/photo5.jpg', 'Je dois acheter une assurance santé et ne savent pas quelle compagnie à signer avec. ' +
                                                       'Pouvez-vous sil vous plaît venez me montrer les différentes sociétés et me aider à comprendre ' +
                                                       'quelles sont les options et les prix quils offrent?'),
               new Helpee(5, 'finalguy@gmail.com', '522139876', '../pictures/photo6.jpg', 'I am looking for help with my phone bill. I do not want to sign up for a plan without knowing ' +
                                                       'all the terms. Please help me translate and navigate the website.')];
for(var i = 0; i <helpees.length; i++){
  var element = $('<div></div>');
    element.addClass('row');
    element.addClass('request');
    element.data('index', i);
    element.html('<div class="col-md-1"><img class="profileImage" src="' + helpees[i].picture + '"/>' +
                 '</div><div class="col-md-7">' + helpees[i].bio + '</div><div class="col-md-2 buttonContainer"><div class="button contact">Contact</div></div>' +
                 '<div class="col-md-2 buttonContainer centered"><div class="button delete">Delete</div></div>');
    $('.container-fluid.requests').append(element);
};

var deleteButtons = $('.delete');
var contactButtons = $('.contact');

contactButtons.on('click',function(){
    var clicked = $(this);
    var index = clicked.parents('.row').data('index');
    alert('Phone Number: ' + helpees[index].phone + ' Email: ' + helpees[index].email);
});

deleteButtons.on('click', function(){
    var clicked = $(this);

    clicked.parents('.row').fadeOut();
});