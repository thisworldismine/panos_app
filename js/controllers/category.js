function categoryController($scope) {
    $scope.menus_items = [
        {
            name: 'Soup',
            items: [
                'Item One',
                'Item Two'
            ]
        },
        {
            name: 'Drinks',
            items: [
                'Cocacola',
                'Fanta',
                'Sprite',
                'Dew'
            ]
        },
        {
            name: 'Foods',
            items: [
                'Momo',
                'Chowmin',
                'Fried Momo',
                'Chicken Thukpa'
            ]
        }
    ];

    $scope.quantity = [1, 2, 3, 4, 5];

    $scope.currentCategory = null;
    $scope.currentItems = null;
    $scope.currentQty = 1;

    $scope.current = function(index) {
        $scope.currentCategory = $scope.menus_items[index];
        $scope.currentItems = $scope.menus_items[index].items;
        $scope.currentQty = 1;
    }

    $scope.setQuantity = function(index) {
        $scope.currentQty = $scope.quantity[index];
        console.log($scope.currentQty);
    }

}