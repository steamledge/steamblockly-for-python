Blockly.Python['membership_in'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' in '+value_var2+'\n';
  return code;
};

Blockly.Python['membership_not_in'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' not in '+value_var2+'\n';
  return code;
};