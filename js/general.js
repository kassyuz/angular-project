/**
 * Created by cassio on 5/22/14.
 */
function AngCtrl($scope) {
    $scope.items = [
        {name: "Whisk Blue Label", price:80.00},
        {name: "Whisk Black Label", price:40.00},
        {name: "Whisk Red Label", price:15.00}
    ]

    $scope.title=["Bar Angulado"];

    $scope.add = function () {
        var item = {
            name:$scope.drinkName ,
            price: $scope.drinkPrice
        }
        $scope.items.push(item);
        $scope.drinkName = "";
        $scope.drinkPrice = "";


    }

}