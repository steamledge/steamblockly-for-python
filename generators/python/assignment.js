Blockly.Python['assignment_equal'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = ' = ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['assignment_equal_plus'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' += ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_minus'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' -= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_mult'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' *= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_div'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' //= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_expo'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' **= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_and'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' &= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_equal'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' = ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_or'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' |= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_ast'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' ^= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_right'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' >>= ' + value_var2 + '\n';
  return code;
};

Blockly.Python['assignment_equal_left'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' <<= ' + value_var2 + '\n';
  return code;
};