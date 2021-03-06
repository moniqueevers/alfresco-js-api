/*global describe, it, beforeEach */

import { AlfrescoApi } from '../src/alfrescoApi';
import { PersonBodyCreate } from '../src/api/content-rest-api/model/personBodyCreate';
import { PeopleApi } from '../src/api/content-rest-api/api/people.api';

let PeopleMock = require('../test/mockObjects/mockAlfrescoApi').PeopleApi;

describe('PeopleApi', function () {

    beforeEach(function () {
        this.peopleMock = new PeopleMock();

        this.alfrescoApi = new AlfrescoApi({
            hostEcm: 'http://127.0.0.1:8080'
        });
    });

    it('should add a person', function (done) {
        let personBodyCreate = new PersonBodyCreate();
        this.peopleMock.get201Response();

        personBodyCreate.id = 'chewbe';
        personBodyCreate.email = 'chewbe@millenniumfalcon.com';
        personBodyCreate.lastName = 'Chewbe';
        personBodyCreate.firstName = 'chewbacca';
        personBodyCreate.password = 'Rrrrrrrghghghghgh';

        let peopleApiService = new PeopleApi(this.alfrescoApi);
        peopleApiService.createPerson(personBodyCreate).then(function () {
                done();
            },
                                                             function (error) {
                console.error(error);
            });

    });

});
