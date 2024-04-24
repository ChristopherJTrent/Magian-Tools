
export default function calculateGeomancyHaste(
	spellType,
	combinedSkill,
	geomancyPlus, 
	[eclipticAttrition, blazeOfGlory, bolster],
	[cornelia, sylvieUC]) {
	let total = 0
	total += geomancyPlus * 12
	total += Math.floor(combinedSkill / (3/1.024))
	if (bolster) return 2 * total
	if (spellType === 'geocolure') {
		let modifier = 1
		if (eclipticAttrition) modifier += .25
		if (blazeOfGlory) modifier += .50
		return modifier * total
	}
	if(cornelia || sylvieUC) {
		if(cornelia) total += 205
		if(sylvieUC) total += 295
	}
	return total
}