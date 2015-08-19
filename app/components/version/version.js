'use strict';

angular.module('spark.version', [
  'spark.version.interpolate-filter',
  'spark.version.version-directive'
])

.value('version', '0.1');
