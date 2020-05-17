const cliSelect = require('cli-select');
const chalk = require('chalk');
const { exec } = require('child_process');

cliSelect({
  values: ['Major', 'Minor', 'Patch'],
  valueRenderer: function (value, selected) {
    if (selected) {
      return chalk.underline(value);
    }

    return value;
  }
}).then(function(resp) {
  console.log(resp.value + 'release is selected');
  exec('npm version '+resp.value.toLowerCase()+' --force -m "application version is updated"');
}, function() {
  console.log('Failed to execute');
});
