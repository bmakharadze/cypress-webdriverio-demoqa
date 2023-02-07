const axios = require("axios");
const expect = require("chai").expect;
const baseUrl = "https://reqres.in/api";
const payload = require('./fixtures/payload.json');
const user = require('./fixtures/user.json');
const expectedResponse = require("./fixtures/expectedResponse.json");
const data = require('./fixtures/data.json');

describe('API tasks', function() {
    it('checks if expected data is correct or not and returns data.', async function() {
        const response = await axios.get(baseUrl + '/users?page=2');
        const bodyObj = response.data;
        expect(bodyObj).to.deep.equal(expectedResponse);
        expect(response.status).to.equal(200);
        console.log(response.data)
    });
      
  
    it("returns specific data.", function() {
        return axios.get(baseUrl + "/users?page=2")
            .then(function(response){
                expect(response.data.data[0].first_name).to.equal(data.first_name);
                expect(response.status).to.equal(200);
            })
            .catch(function(error) {
                console.error(error);
                done(error);
            });
    });
    
    it("sends request with missing fields and validates response", function(done) {
        axios.post(baseUrl + "/users?page=2", payload)
            .then(function(response) {
                expect(response.data).to.have.property("id");
                expect(response.status).to.equal(201);
                done();
            })
            .catch(function(error) {
                console.error(error);
            });
    });

    it('deletes a user and returns status code 204', function(done) {
        axios.delete(baseUrl + '/users?page=2',  user )
            .then(function(response) {
                expect(response.status).to.equal(204);
                console.log(response.data);
                done();
        })
        .catch(function(error) {
            console.error(error);
            done(error);
        })
    });
});