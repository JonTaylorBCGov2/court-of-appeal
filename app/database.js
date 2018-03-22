var Database = function(newConnection) {  
    this.newConnection = newConnection;
};
Database.prototype.saveForm = function(form, callback) {
    var client = this.newConnection();    
    client.connect(function(err) {
        if (err) { throw err; }
        var sql = 'insert into forms(type, status, data) values($1, $2, $3);';
        client.query(sql, [form.type, 'draft', JSON.stringify(form.data)], function(err, result) {
            if (err) { throw err; }
            sql = 'SELECT last_value FROM forms_id_seq;';
            client.query(sql, function(err, result) {
                if (err) { throw err; }
                var id = result.rows[0].last_value;
                client.end();
                callback(id);
            });
        });
    });
};

module.exports = Database;