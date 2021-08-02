import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLID,
} from "graphql";

import axios from "axios";

const baseUrl = process.env.ENDPOINT;

const apikey = process.env.PUBLIC_API_KEY;
const hash = process.env.HASH;

const getDataByURL = async () => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// Function created to do some test, might be usefull later //!\\ TO DELETE IF NOT
/* onst getResultsArr = (results) => {
	if (Array.isArray(results)) {
		return results;
	}
	let newArr = [];
	Object.entries(results).forEach(([key, value]) => {
		newArr.push({ [key]: value });
	});
	return newArr[4].results;
}; */

const ThumbnailType = new GraphQLObjectType({
	name: "Image",
	fields: () => ({
		path: {
			type: GraphQLString,
			resolve: (item) => item.path,
		},
		extension: {
			type: GraphQLString,
			resolve: (item) => item.extension,
		},
	}),
});

const ItemType = new GraphQLObjectType({
	name: "Item",
	fields: () => ({
		id: {
			type: GraphQLID,
			resolve: (item) => item.id,
		},
		name: {
			type: GraphQLString,
			resolve: (item) => item.name,
		},
		description: {
			type: GraphQLString,
			resolve: (item) => item.description,
		},
		thumbnail: {
			type: ThumbnailType,
			resolve: (item) => item.thumbnail,
		},
	}),
});

const DataType = new GraphQLObjectType({
	name: "Data",
	fields: () => ({
		count: {
			type: GraphQLString,
			resolve: (data) => data.count,
		},
		results: {
			type: new GraphQLList(ItemType),
			resolve: (data) => data.results,
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
