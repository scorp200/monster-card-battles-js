var Cards = (function() {

	var cards = {};

	function createCard(name) {
		if (cards[name])
			return cards[name]();
		return null;
	}

	function create(name, desc, img, atk, def) {
		var name = name;
		var desc = desc;
		var img = img;
		var atk = atk;
		var def = def;
		var buffs = [];

		function place() {
			// what happens when the card is placed
		}

		function update() {
			// what happens when a new turn starts
		}

		function attack(who) {
			// what happens when card is attacking
		}

		function defend(from) {
			// what happens when card is defending
		}

		function remove(index) {
			// what happens when card is removed
		}

		function addBuff(type, value, turns) {
			buffs.push({ type: type, value: value, turns: turns });
		}

		return {
			get name() { return name },
			get desc() { return desc },
			get img() { return img },
			get atk() { return atk },
			get def() { return def },
			place: place,
			update: update,
			attack: attack,
			defend: defend,
			remove: remove,
			addBuff: addBuff
		}
	}

	cards.testCard = function() {
		var card = create('test Card', 'this is a test card', 'card.png', 5, 5);
		return card;
	}

	return {
		createCard: createCard
	}
})();
