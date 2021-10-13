import { listings } from '../listings';
// import { IResolvers } from 'apollo-server-express';

export const resolvers = {
    Query: { 
        listings: () => { return listings }
    },

    Mutation: {
        deleteListings: (_root: undefined, { id }: { id: string } ) => {
            for (let i = 0; i < listings.length; i++) {
                if (listings[i].id === id) {
                    return listings.splice(i, 1)[0];
                }
            }
        }
    }  
}