export default class CooldownManager {
    constructor() {
        this.cooldown = new Map();
    }

    /**
     * @param {String} cooldownId
     * @param {Number} cooldown cooldown should be second
     */
    add(cooldownId, cooldown) {
        const cooldownAmount = cooldown * 1000;

        const now = Date.now();

        this.cooldown.set(cooldownId, {
            now: now,
            cooldownAmount: cooldownAmount
        });

        this._removeTimestamp(cooldownId, cooldownAmount);
    }

    get(cooldownId) {
        if (this.cooldown.has(cooldownId)) {
            const now = Date.now();
            const timestamp = this.cooldown.get(cooldownId);

            const expirationTime = timestamp.now + timestamp.cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return timeLeft.toFixed(1);
            }
        }
    }

    has(cooldownId) {
        if (this.cooldown.has(cooldownId)) {
            return true;
        }

        return false;
    }

    _removeTimestamp(cooldownId, cooldownAmount) {
        setTimeout(() => this.cooldown.delete(cooldownId), cooldownAmount);
    }
}
