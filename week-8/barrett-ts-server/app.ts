import * as express from "express";

const app = express();

interface Composer {
	id: number,
	firstName: string,
	lastName: string
}

const composers: Composer[] = [
	{ id: 6, firstName: "Thomas", lastName: "Morley"},
	{ id: 7, firstName: "Claudio", lastName: "Monteverdi"},
	{ id: 8, firstName: "Luca", lastName: "Marenzio"},
	{ id: 9, firstName: "Jacques", lastName: "Arcadelt"},
	{ id: 3, firstName: "Orlando", lastName: "Gibbons"},
];

function getComposers(): Composer[] {
	return composers;
}

app.get('/', (request, response) => {
	response.send('The URL for composers is http://localhost:3000/api/composers');
});

function getComposerById(composerId: number) : Composer {
	return composers.find(c => c.id == composerId);
}

app.get('/api/composer/:id', (request, response) => {
	response.json(getComposerById(request.params.id));
});

const server = app.listen(3000, "localhost", () => {
	console.log("Listening on port 3000");
});