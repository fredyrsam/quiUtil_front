import '../../node_modules/angular-file-saver/dist/angular-file-saver.bundle';
var module = angular.module('QuipuUtilFront.ServicesModule', [
  //import modules
    'ngFileSaver'
]);

import dateQuipu from './services/dateQuipu';
import fileQuipu from './services/fileQuipu'

module.service('dateQuipu', dateQuipu);
module.service('fileQuipu', fileQuipu);