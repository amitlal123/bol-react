import {getDesigns} from '../data/CardDesignsVO.js';

var designs = getDesigns();

export function getDisplayDesigns() {
	// Creates new list of design objects with id, name, range of denoms offered, and image

	var displayDesigns = [];

	for (var i = 0; i < designs.length; i++) {
		var design = {};
		design.id = designs[i]._id;
		design.name = designs[i].name;
		design.denomRange = designs[i].denomRange;
		design.image = designs[i].image;
		displayDesigns.push(design);
	}
	return displayDesigns;
}

export function getValues() {
	//** Loop through designs object and return array of available denominations**//
	//**Hard coded here**//
	var values = ["$25", "$50", "$100", "$200", "$500", "$1000", "$2000", "$3000"];
	return values;
}

export function getThemes() {
	//** Loop through designs object and return array of available themes**//
	//**Hard coded here**//
	var themes = ["Popular", "Birthday", "Congratulations", "Holiday", "Thank You"];
	return themes;
}
