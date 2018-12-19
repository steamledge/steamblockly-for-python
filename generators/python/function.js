
Blockly.Python['function_def1'] = function(block) {
  var value_def = Blockly.Python.valueToCode(block, 'def', Blockly.Python.ORDER_ATOMIC);
  var value_parameter = Blockly.Python.valueToCode(block, 'parameter', Blockly.Python.ORDER_ATOMIC);
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  // TODO: Assemble Python into code variable.
  var code = 'def '+ value_def+'('+value_parameter+'):\n'+
  			 statements_code+'\n';
  return code;
};