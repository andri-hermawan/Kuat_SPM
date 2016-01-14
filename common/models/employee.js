module.exports = function(Employee) {
    Employee.observe('after save', function filterProperties(ctx, next) {
        var models = Employee.app.models;
        models.Role.create({
            name: ctx.instance.role
        }, function(err, role) {
            role.principals.create({
                principalType: models.RoleMapping.USER,
                principalId: ctx.instance.id
            }, function(err, principal) {
            	console.log(principal);
            });
        });
        next();
    });
};
