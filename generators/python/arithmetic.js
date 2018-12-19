Blockly.Python['arithmetic_add'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' + ' +  value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_minus'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' - ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_mult'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' * ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_div'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' / ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_mode'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' % ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_floor_div'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' // ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['arithmetic_expo'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_var2 = Blockly.Python.valueToCode(block, 'var2');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + ' ** ' + value_var2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};