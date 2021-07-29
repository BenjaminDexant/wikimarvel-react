import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

import axios from "axios";

const baseUrl = process.env.ENDPOINT;

const apikey = process.env.PUBLIC_API_KEY;
const hash = process.env.HASH;

const getDataByURL = async () => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/comics?ts=1&apikey=${apikey}&hash=${hash}`
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const DataType = new GraphQLObjectType({
	name: "Data",
	fields: () => ({
		count: {
			type: GraphQLString,
			resolve: (data) => data.count,
		},
	}),
});

const AnswerType = new GraphQLObjectType({
	name: "Answer",
	fields: () => ({
		code: {
			type: GraphQLInt,
			resolve: (answer) => answer.code,
		},
		status: {
			type: GraphQLString,
			resolve: (answer) => answer.status,
		},
		data: {
			type: DataType,
			resolve: (obj) => obj.data,
		},
	}),
});

const QueryType = new GraphQLObjectType({
	name: "Base",
	description: "Base of all querries",
	fields: () => ({
		baseQuery: {
			type: AnswerType,
			resolve: (root, args) => {
				return getDataByURL();
			},
		},
	}),
});

export default new GraphQLSchema({
	query: QueryType,
});
