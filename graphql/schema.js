const { makeExecutableSchema } = require("@graphql-tools/schema");

// root types ว่าง ๆ สำหรับ extend
const baseType = `
  type Query
  type Mutation
`;

// โหลดต่อโมดูล

const roleType = require("./types/role.type");
const roleResolver = require("./resolvers/role.resolver");

const typeDefs = [
  baseType, 
  roleType,
];
const resolvers = [
  roleResolver,
];

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };
