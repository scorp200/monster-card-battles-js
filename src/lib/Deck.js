var Decks = (function() {
	function createDeck(name_array) {
		var deck = [];
		for (var i = 0; i < name_array.length; i++) {
			deck.push(Cards.createCard(name_array[i]));
		}

		function getFirstCard() {
			return deck.pop();
		}

		function getCardAt(index) {
			return deck.splice(index, 1);
		}

		function addCard(card) {
			deck.push(card);
		}

		function shuffle() {
			shuffleArray(deck);
		}
		return {
			getFirstCard: getFirstCard,
			getCardAt: getCardAt,
			addCard: addCard,
			shuffle: shuffle
		}
	}
})();
