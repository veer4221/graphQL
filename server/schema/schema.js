const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;
const _=require('lodash')
var books =[
    {id:'1',name:'polokoyelo',genre:'history',authorId:'2'},
    {id:'2',name:'meluha',genre:'biography',authorId:"1"},
    {id:'3',name:'timeManagement',genre:'selfDEV',authorId:"3"},
    {id:'4',name:'arazan bulbul',genre:'history',authorId:'2'},
    {id:'5',name:'sivay',genre:'biography',authorId:"1"},
    {id:'6',name:'ramanujam',genre:'selfDEV',authorId:"3"}
];
var authore =[
    {id:'1',name:'veer',age:20},
    {id:'2',name:'manishbhai',age:40},
    {id:'3',name:'patel',age:30},
];
const BookType= new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthoreType,
            resolve(parent,args){
                console.log(parent)
                return _.find(authore,{id:parent.authorId})
            }
        }
    })
})
const AuthoreType= new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        book:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                console.log(parent)
                return _.filter(books,{authorId:parent.id})
            }
        }
    
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // args.id
               return _.find(books,{id:args.id})
            }
            
        },
        author:{
            type:AuthoreType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // args.id
               return _.find(authore,{id:args.id})
            }
            
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return books
            }
        }
    }
})


module.exports= new GraphQLSchema({
    query:RootQuery
})