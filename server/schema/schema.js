const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;
const _=require('lodash')
var books =[
    {id:'1',name:'polokoyelo',genre:'history'},
    {id:'2',name:'meluha',genre:'biography'},
    {id:'3',name:'timeManagement',genre:'selfDEV'}
]
const BookType= new GraphQLObjectType({
    name:'book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // args.id
               return _.find(books,{id:args.id})
            }
            
        }
    }
})


module.exports= new GraphQLSchema({
    query:RootQuery
})