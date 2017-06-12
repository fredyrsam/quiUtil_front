function dateAutomater($compile) {
    "ngInject";
    return {
        transclude: true,
        template: require('./dateAutomater.html'),
        restrict: 'AE',
        link: function ($scope, element, attrs) {
            $scope.dateInfo = $scope.dateInfo || {};
            var dateInfo = $scope.dateInfo,
                input = element.find('input'),
                button = element.find('button'),
                name = input.name || 'date'+Object.keys($scope.dateInfo).length,
                info = {
                    open: false,
                    click: function() {
                        this.open = true
                    }
                }
            dateInfo[name] = info;
            input.attr('ng-model', attrs.dateAutomater);
            input.attr('ng-required', attrs.ngRequired);
            input.attr('ng-change', attrs.dateChange);
            input.attr('ng-class', attrs.dateInputClass);
            input.attr('datepicker-options', 'dateOptions');
            input.attr('current-text', 'Hoy');
            input.attr('clear-text', 'Limpiar');
            input.attr('close-text', 'Cerrar');
            input.attr('uib-datepicker-popup', 'dd/MM/yyyy');
            input.attr('is-open', 'dateInfo[\"'+name+'\"].open');
            button.attr('ng-click', 'dateInfo[\"'+name+'\"].click()');

            $compile(element.contents())($scope);
        }
    }
};

export default dateAutomater;