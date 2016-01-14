module.exports = function(Loopback) {
    Loopback.models.Employee.create([{
        firstName: 'Ojahan',
        lastName: 'Hutajulu',
        phone: '08123123123',
        role: 'superman',
        username: 'ojahan',
        email: 'ojahan@satunol.com',
        password: 'satunol.com'
    }, {
        firstName: 'Alfi',
        lastName: 'Setyadi Mochtar',
        phone: '082131063146',
        role: 'superman',
        username: 'alfi',
        email: 'alfisetyadi@gmail.com',
        password: 'satunol.com'
    }, {
        firstName: 'Accounting',
        lastName: 'Satunol',
        phone: '08123123123',
        role: 'accounting',
        username: 'accounting',
        email: 'accounting@satunol.com',
        password: 'satunol.com'
    }, {
        firstName: 'Project',
        lastName: 'Manager',
        phone: '08123123123',
        role: 'pm',
        username: 'pm',
        email: 'pm@satunol.com',
        password: 'satunol.com'
    }, {
        firstName: 'Developer',
        lastName: 'Satunol',
        phone: '08123123123',
        role: 'developer',
        username: 'developer',
        email: 'developer@satunol.com',
        password: 'satunol.com'
    }], function(err, users) {
        // if (err) return cb(err);

        //create the superman role
        Loopback.models.Role.create({
            name: users[0].role
        }, function(err, role) {
            // if (err) cb(err);

            //make Ojahan an superman
            role.principals.create({
                principalType: Loopback.models.RoleMapping.USER,
                principalId: users[0].id
            }, function(err, principal) {
                // cb(err);
            });

            //make Alfi an superman
            role.principals.create({
                principalType: Loopback.models.RoleMapping.USER,
                principalId: users[1].id
            }, function(err, principal) {
                // cb(err);
            });
        });

        Loopback.models.Role.create({
            name: users[2].role
        }, function(err, role) {
            // if (err) cb(err);
            role.principals.create({
                principalType: Loopback.models.RoleMapping.USER,
                principalId: users[2].id
            }, function(err, principal) {
                // cb(err);
            });
        });


        Loopback.models.Role.create({
            name: users[3].role
        }, function(err, role) {
            // if (err) cb(err);
            role.principals.create({
                principalType: Loopback.models.RoleMapping.USER,
                principalId: users[3].id
            }, function(err, principal) {
                // cb(err);
            });
        });


        Loopback.models.Role.create({
            name: users[4].role
        }, function(err, role) {
            // if (err) cb(err);
            role.principals.create({
                principalType: Loopback.models.RoleMapping.USER,
                principalId: users[4].id
            }, function(err, principal) {
                // cb(err);
            });
        });

    });
}
