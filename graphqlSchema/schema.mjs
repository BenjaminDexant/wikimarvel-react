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

const ts = process.env.TS;
const apikey = process.env.PUBLIC_API_KEY;
const hash = process.env.HASH;

const getCharactersByURL = async () => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const getCharacterIDByURL = async (id) => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const getCharactersNameByURL = async (name) => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const getEventsByURL = async () => {
	try {
		const response = await axios.get(
			`${baseUrl}/v1/public/events?characters=1009165&limit=34&ts=${ts}&apikey=${apikey}&hash=${hash}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const UrlsType = new GraphQLObjectType({
	name: "Urls",
	fields: () => ({
		type: {
			type: GraphQLString,
			resolve: (item) => item.type,
		},
		url: {
			type: GraphQLString,
			resolve: (item) => item.url,
		},
	}),
});

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
		title: {
			type: GraphQLString,
			resolve: (item) => item.title,
		},
		description: {
			type: GraphQLString,
			resolve: (item) => item.description,
		},
		urls: {
			type: new GraphQLList(UrlsType),
			resolve: (item) => item.urls,
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
			resolve: (answer) => answer.data,
		},
	}),
});

const QueryType = new GraphQLObjectType({
	name: "Base",
	description: "Base of all querries",
	fields: () => ({
		charactersList: {
			type: AnswerType,
			resolve: (root, args) => {
				return getCharactersByURL();
			},
		},
		eventsList: {
			type: AnswerType,
			resolve: (root, args) => {
				return getEventsByURL();
			},
		},
		characterID: {
			type: AnswerType,
			args: {
				id: { type: GraphQLString },
			},
			resolve: (root, args) => {
				return getCharacterIDByURL(args.id);
			},
		},
		charactersName: {
			type: AnswerType,
			args: {
				name: { type: GraphQLString },
			},
			resolve: (root, args) => {
				return getCharactersNameByURL(args.name);
			},
		},
	}),
});

export default new GraphQLSchema({
	query: QueryType,
});
