angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])	

.factory('LoginUser', [function() {

	var users = [
		{
			id: '1',
			username: 'admin',
			password: '123',
			image: 'img/admin.png',
			active: '0'
		},
		{
			id: '2',
			username: 'customer1',
			password: '123',
			image: 'img/user.png',
			active: '0'
		}
	]

	return {
    getClothesItems: function() {
        return items.filter(function(item) { 
            return item.department === 'clothes'; })
    },
    getAccessaryItems: function() {
        return items.filter(function(item) { 
            return item.department === 'accessary'; })
    },

    getItem: function(id) {
		var results = items.filter(function(item) {
        	return item.id === id;
    })

    return results[0];
	},
	shopItem: function(id, quantity) {
	    
	    var results = items.filter(function(item) {
	        return item.id === id;
	    })

	    results[0].quantity = quantity;
	    
	},
	removeItem: function(id) {

	    var results = items.filter(function(item) {
	        return item.id === id;
	    })

	    results[0].quantity = 0;
	},

	getSelected: function() {

	    return items.filter(function(item) {
	        return item.quantity > 0;
	    })
    
	},
	getTotalPrice: function() {

	    var sum = 0;

	    for (var item of items) {
	        sum = sum + item.price * item.quantity;
	    }
	        
	    return sum; 
	},
	clearSelected: function() {

	    for (var item of items) {
	        item.quantity =  0;
	    }
	}
}

}])

.factory('StoreItems', [function() {

    var items = [
        {
            id: '1',
            department: 'clothes',
            name: 'Jersey body',
            desc: 'Jersey body are the latest farm-fresh Japanese-inspired fashion item',
            image: 'img/hmprod.png',
            price: 120,
            quantity: 0
        },
        {
            id: '2',
            department: 'clothes',
            name: 'Ann Taylor Petite',
            desc: 'This well known American brand is synonymous with a classic and sophisticated style. They have a wide range of petite clothing.',
            image: 'img/polo-3.jpeg',
            price: 2000,
            quantity: 0
        },
        {
            id: '3',
            department: 'clothes',
            name: 'GANT Polo Shirt',
            desc: '70’s/retro style',
            image: 'img/hmprod-2.png',
            price: 250,
            quantity: 0
        },
        {
            id: '4',
            department: 'accessary',
            name: 'Joel Round Simple Knit Best ',
            desc: 'Simple, Layered to Good Hajji woven Knit Vest!',
            image: 'img/hmprod-4.png',
            price: 240,
            quantity: 0
        }   
    ]
    
    return {
    getClothesItems: function() {
        return items.filter(function(item) { 
            return item.department === 'clothes'; })
    },
    getAccessaryItems: function() {
        return items.filter(function(item) { 
            return item.department === 'accessary'; })
    },

    getItem: function(id) {
		var results = items.filter(function(item) {
        	return item.id === id;
    })

    return results[0];
	},
	shopItem: function(id, quantity) {
	    
	    var results = items.filter(function(item) {
	        return item.id === id;
	    })

	    results[0].quantity = quantity;
	    
	},
	removeItem: function(id) {

	    var results = items.filter(function(item) {
	        return item.id === id;
	    })

	    results[0].quantity = 0;
	},

	getSelected: function() {

	    return items.filter(function(item) {
	        return item.quantity > 0;
	    })
    
	},
	getTotalPrice: function() {

	    var sum = 0;

	    for (var item of items) {
	        sum = sum + item.price * item.quantity;
	    }
	        
	    return sum; 
	},
	clearSelected: function() {

	    for (var item of items) {
	        item.quantity =  0;
	    }
	}
}

}])

.service('BlankService', [function(){

}]);