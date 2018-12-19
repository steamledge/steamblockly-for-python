Blockly.Python['loop_if'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if');
  //var value_if = Blockly.Python.valueToCode(block, 'if', Blockly.Python.ORDER_ATOMIC);
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  // TODO: Assemble Python into code variable.
  var code = 'if '+value_if+' :\n' +
              statements_then;
  return code;
};

Blockly.Python['loop_if_else'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if');
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = 'if('+value_if+'):\n'+
              statements_then+'\n'+
              'else:\n'+
              statements_else+'\n';
  return code;
};

Blockly.Python['loop_if_elif'] = function(block) {
  var value_if = Blockly.Python.valueToCode(block, 'if');
  var statements_then = Blockly.Python.statementToCode(block, 'then');
  var value_elif = Blockly.Python.valueToCode(block, 'elif');
  var statements_then2 = Blockly.Python.statementToCode(block, 'then2');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = 'if('+value_if+'):\n'+
              statements_then+'\n'+
              'elif '+value_elif+':\n'+
              statements_then2+'\n'+
              'else:\n'+
              statements_else+'\n';
  return code;
};

Blockly.Python['loop_for'] = function(block) {
  var value_for = Blockly.Python.valueToCode(block, 'for');
  var value_sequence = Blockly.Python.valueToCode(block, 'sequence');
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  // TODO: Assemble Python into code variable.
  var code = 'for '+value_for+' in '+value_sequence+':\n'+
              statements_code+'\n';
  return code;
};

Blockly.Python['loop_for_else'] = function(block) {
  var value_for = Blockly.Python.valueToCode(block, 'for');
  var value_sequence = Blockly.Python.valueToCode(block, 'sequence');
  var statements_code = Blockly.Python.statementToCode(block, 'code');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'for '+value_for+' in '+value_sequence+':\n'+
              statements_code+'\n'+
              'else:\n'+
              statements_name+'\n';
  return code;
};

Blockly.Python['loop_while'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'expression');
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = 'while '+value_expression+':\n'+
              statements_do+'\n';
  return code;
};

Blockly.Python['loop_while_else'] = function(block) {
  var value_expression = Blockly.Python.valueToCode(block, 'expression');
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  var statements_else = Blockly.Python.statementToCode(block, 'else');
  // TODO: Assemble Python into code variable.
  var code = 'while '+value_expression+':\n'+
              statements_do+'\n'+
              'else:\n'+
              statements_else+'\n';
  return code;  
};
