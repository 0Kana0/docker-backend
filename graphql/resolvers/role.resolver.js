// graphql/resolvers/role.resolver.js
const RoleController = require('../../controllers/role.controller');

module.exports = {
  Query: {
    roles: async (_parent, args, ctx) => {
      return await RoleController.listRoles();
    },
    role: async (_parent, { id }, ctx) => {
      return await RoleController.getRoleById(id);
    },
  },
  Mutation: {
    createRole: async (_parent, { input }, ctx) => {
      return await RoleController.createRole(input);
    },
    updateRole: async (_parent, { id, input }, ctx) => {
      return await RoleController.updateRole(id, input);
    },
    deleteRole: async (_parent, { id }, ctx) => {
      return await RoleController.deleteRole(id);
    },
  },
};
