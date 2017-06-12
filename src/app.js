/**
 * Created by Programador RRHH-2.
 */
// window.jQuery = require('jquery');

import './app/directivesModule';
import './app/filtersModule';
import './app/servicesModule';

import './app.scss';

var QuipuUtilFront = angular.module('QuipuUtilFront', [
    'QuipuUtilFront.DirectivesModule',
    'QuipuUtilFront.FiltersModule',
    'QuipuUtilFront.ServicesModule'
]);
