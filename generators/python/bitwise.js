Blockly.Python['bitwise_and'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' & '+value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_or'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' | '+value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_not'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var');
  // TODO: Assemble Python into code variable.
  var code = ' ~ '+value_var;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_xor'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' ^ '+value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_right_shift'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' >> '+value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['bitwise_left_shift'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1+' << '+value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

