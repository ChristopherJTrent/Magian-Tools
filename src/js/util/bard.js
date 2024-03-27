// These values were obtained by observing the game. see bg wiki for information
const advancingMarchBonuses = [108, 118, 129, 140, 151, 162, 172, 183, 194]
const victoryMarchBonuses   = [163, 179, 195, 211, 228, 244, 260, 277, 293]
// Note: This can only be cast with Marsyas, and the only way to get song+8 is with Gjallarhorn
const honorMarchBonuses     = [126, 138, 150, 162, 174]
/**
 * 
 * @param {boolean[]} enabledSongs 
 * @param {integer} songBonus 
 * @param {boolean[]} enabledJobActions 
 */

export default function calculateBardHaste(
	[advMarch, vicMarch, honMarch], 
	songBonus, 
	[soulVoice, marcato],
	isTrust) {
	let total = 0
	if (advMarch) total += advancingMarchBonuses[isTrust ? 0 : songBonus]
	if (vicMarch) total += victoryMarchBonuses[isTrust ? 0 : songBonus]
	if (isTrust) return total
	if (honMarch) total += honorMarchBonuses[Math.min(songBonus, 4)]
	if (soulVoice) total *= 2
	else if (marcato) total *= 1.5
	return total
}