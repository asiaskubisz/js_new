// OGÓLNA FUNKCJA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': <[X-Client-Id]>,
  'X-Auth-Token': <[X-Auth-Token]>
};

$.ajaxSetup({
	headers: myHeaders
});


GET /board
-----------------------------
Response:
{
   id: int,
   name: string,
   columns: [{
       id: int,
       name: string,
       cards: [{
           id: int,
           bootcamp_kanban_column_id: int,
           name: string
       }]
   }]
}

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
    });
}

function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}

todoColumn.createCard(card1);
  doingColumn.createCard(card2);

