const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'your heroku application here'; 
}
/*
const requestOptions = {
url : 'http://yourapi.com/api/path', 
method : 'GET', 
json : {}, 
qs : { 
offset : 20 
} 
};

request(requestOptions, (err, response, body) => { 
if (err) { 
console.log(err); 
} else if (response.statusCode === 200) { 
console.log(body); 
} else { 
console.log(response.statusCode); 
} 
});



*/
/* GET 'home' page */
const homelist = function(req, res){
res.render('index', { 
title: 'Home',
 user : req.user 
});
 };


// registration form
const member = function(req, res){
res.render('registration', { 
title: 'Registration form',

});
};

   
// log in page 
 
const login = function(req, res){
res.render('login', { 
user : req.user, error : req.flash('error'),
title: 'Log In' 
});
};
 
// Events page 

const _renderEvents = function(req, res, responseBody){ 
console.log(responseBody)
res.render('events', {
title: 'List of events',
pageHeader: {
title: 'Events',
strapline: 'Select the events that suit you'
},
sidebar: "These are the list of events we organised for you",
event: responseBody 
});
};



 const events = function(req, res){
const path = '/api/events'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}, 
qs : { 
lng : -0.9690884, 
lat : 51.455041, 
maxDistance : 20 
} 
}; 
console.log(requestOptions);
request(requestOptions, (err, response, body) => { 
_renderEvents(req, res, body); 
} 
);
};

 


 




module.exports = {
homelist,
member,
login,
events
//events
};

