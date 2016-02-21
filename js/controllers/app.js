var app = angular.module('restoApp', []);

app.factory('Data', function() {
    return {total: 0}
});

app.filter('decimal', function() {
    return function(value) {
        return value.toFixed(2);
    }
});

function appController($scope, Data) {
    $scope.menus_items = [
        {
            name: 'Soup',
            items: [
                {
                    name: 'Item One',
                    price: 30.23
                },
                {
                    name: 'Item Two',
                    price: 45
                }
            ]
        },
        {
            name: 'Drinks',
            items: [
                {
                    name: 'Cocacola',
                    price: 40
                },
                {
                    name: 'Fanta',
                    price: 46
                },
                {
                    name: 'Sprite',
                    price: 60
                },
                {
                    name: 'Dew',
                    price: 75
                }
            ]
        },
        {
            name: 'Foods',
            items: [
                {
                    name: 'Momo',
                    price: 40
                },
                {
                    name: 'Chowmin',
                    price: 46
                },
                {
                    name: 'Fried Momo',
                    price: 60
                },
                {
                    name: 'Chicken Thukpa',
                    price: 75
                }
            ]
        }
    ];

    $scope.quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    $scope.data = Data;

    $scope.currentCategory = null;
    $scope.currentItems = null;
    $scope.currentQty = 1;
    $scope.currentCategoryIndex = null;

    $scope.currentItemsList = [];

    $scope.setCategory = function(index) {
        $scope.currentCategory = $scope.menus_items[index];
        $scope.currentItems = $scope.menus_items[index].items;
        $scope.currentCategoryIndex = index;
        $scope.currentQty = 1;
    };

    $scope.setQuantity = function(index) {
        $scope.currentQty = $scope.quantity[index];
        console.log($scope.currentQty);
    };
}
    