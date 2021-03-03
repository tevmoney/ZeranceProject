function genderType(){
    var url = "https://gender-api.com/get?name=elizabeth&key=RphpZQQgCDzlLBfXRV" 
}

try{
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('RphpZQQgCDzlLBfXRV');

    genderApiClient.getByFirstName('theresa', function (response) {
        console.log(response.gender); //femme
        console.log(response.accuracy); //98
    });

    genderApiClient.getByFirstNameAndCountry('john', 'US', function (response) {
        console.log(response.gender); //homme
        console.log(response.accuracy); //99
    });

}
catch(e){
    console.log('Error:', e);
}