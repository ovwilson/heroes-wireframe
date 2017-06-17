module.exports = () => {
  return {
    files: [
      //'style/calculator.css',
      //{pattern: 'lib/jquery.js', instrument: false},
      'src/app/*.ts',
      //'test/helper/template.js'
    ],
    tests: [
      'src/app/*.spec.ts'
    ],
    debug: true
  };
};
