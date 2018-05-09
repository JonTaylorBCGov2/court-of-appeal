let SearchFormSeven = require('../features/search.form.7');
let MyCases = require('../features/my.cases');
let CreateFormTwo = require('../features/create.form.2');
let SavePerson = require('../features/save.person');
let PersonInfo = require('../features/person.info');
let UpdateFormTwo = require('../features/update.form.2');

let RestAdaptor = function() {
    this.renderSearchFormSevenResult = function(data, response) { 
        if (data.indexOf('404') == 0) {
            response.statusCode = 404;
            response.write('NOT FOUND');
        } else {
            response.write( JSON.stringify({ parties:data })); 
        }        
        response.end(); 
    };
    this.renderMyCasesResult = function(data, response) { response.write( JSON.stringify({ cases:data })); response.end(); };    
    this.renderCreateFormTwoResult = function(id, response) {
        response.writeHead(201, {'Location': '/forms/' + id});
        response.write(JSON.stringify({}));
        response.end();
    };
    this.renderUpdateFormTwoResult = function(id, response) {
        response.writeHead(200, {'Location': '/forms/' + id});
        response.end();
    };
    this.renderSavePersonResult = function(id, response) { 
        response.writeHead(201, {'Location': '/persons/' + id});
        response.write(JSON.stringify({}));
        response.end();
    };
    this.renderPersonInfoResult = function(person, response) { 
        if (person !== undefined) {
            response.write(JSON.stringify(person));
        } 
        else {
            response.statusCode = 404;
        }
        response.end();
    };
};

RestAdaptor.prototype.useHub = function(hub) {
    this.searchFormSeven = new SearchFormSeven(hub);
};
RestAdaptor.prototype.useDatabase = function(database) {
    this.myCases = new MyCases(database);
    this.createFormTwo = new  CreateFormTwo(database);
    this.updateFormTwo = new UpdateFormTwo(database);
    this.savePerson = new SavePerson(database); 
    this.personInfo = new PersonInfo(database);
};
RestAdaptor.prototype.route = function(app) {
    app.get('/api/forms', (request, response)=> {
        this.searchFormSeven.now({ file:request.query.file }, (data)=> {
            this.renderSearchFormSevenResult(data, response);
        });
    });
    app.post('/api/forms', (request, response)=> {
        let login = request.headers['x-user'];
        this.savePerson.now(login, (id)=> {
            let params = request.body;
            params.data = JSON.parse(params.data);
            params.person_id = id;
            this.createFormTwo.now(params, (data)=> {
                this.renderCreateFormTwoResult(data, response);
            });           
        });
    });
    app.put('/api/forms/:id', (request, response)=> {
        let data = JSON.parse(request.body.data);
        this.updateFormTwo.now(request.params.id, data, (data)=> {
            this.renderUpdateFormTwoResult(data, response);
        });
    });
    app.get('/api/cases', (request, response)=> {
        let login = request.headers['x-user'];
        this.myCases.now(login, (data)=> {                    
            this.renderMyCasesResult(data, response);
        });
    });
    app.post('/api/persons', (request, response)=> {
        let params = request.body;
        let person = params.data;
        this.savePerson.now(person, (data)=> {
            this.renderSavePersonResult(data, response);
        });
    });
    app.get('/api/persons/:login', (request, response, next)=> {
        let login = request.params.login;
        this.personInfo.now(login, (data)=> {
            this.renderPersonInfoResult(data, response);
        });
    });
    app.get('/*', function (req, res) { res.send( JSON.stringify({ message: 'pong' }) ); });
};


module.exports = RestAdaptor;