function itemController($scope, Data) {
    $scope.selected_qty = [];
    $scope.itemsSet = null;
    $scope.currentItemsList = $scope.currentItemsList;
    $scope.data = Data;
    $scope.setItemsList = function(index) {
        $scope.itemsSet = true;
        $scope.currentItemsList.push({
            name: $scope.menus_items[$scope.currentCategoryIndex].items[index].name,
            quantity: $scope.currentQty,
            unitPrice: $scope.menus_items[$scope.currentCategoryIndex].items[index].price
        });

        $scope.data.total = $scope.data.total + $scope.currentQty*$scope.menus_items[$scope.currentCategoryIndex].items[index].price;
        console.log($scope.data.total);
        
    };
}