import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const peopleData = [
  { id: '1', name: 'John Smith' },
  { id: '2', name: 'Sara Smith' },
  { id: '3', name: 'Budd Deey' },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    people: {
      type: PersonType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => {
        console.log('Resolve person with ID', id);

        return peopleData.find(item => item.id === id);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
