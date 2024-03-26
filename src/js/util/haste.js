
export function calculateDelay(base, haste/*, dualWield, martialArts*/) {
	return base * Math.max((1-haste/1024), .2)
}
export function calculateDelayForTP(base) {
	return base
}