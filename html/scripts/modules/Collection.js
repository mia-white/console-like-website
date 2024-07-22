export default class Collection extends Map {
    constructor(...args) {
        super(...args);
    }

    find(fn) {
        if (typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
		for (const [k, v] of this) {
			if (fn(v, k)) return v;
		}

		return undefined;
    }
}