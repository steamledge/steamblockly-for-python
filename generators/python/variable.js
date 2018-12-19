Blockly.Python['variable_string_input'] = function(block) {
  var text_str = block.getFieldValue('str');
  // TODO: Assemble Python into code variable.
  var code = text_str;
  return [code];
};

Blockly.Python['variable_str'] = function(block) {
  var text_str = block.getFieldValue('str');
  // TODO: Assemble Python into code variable.
  var code = text_str;
  return code;
};

Blockly.Python['variable_num_input'] = function(block) {
  var variable_num_input = block.getFieldValue('num');
  // TODO: Assemble Python into code variable.
  var code = parseFloat(block.getFieldValue('num'));
  var order;
  if (code == Infinity) {
    code = 'float("inf")';
    order = Blockly.Python.ORDER_FUNCTION_CALL;
  } else if (code == -Infinity) {
    code = '-float("inf")';
    order = Blockly.Python.ORDER_UNARY_SIGN;
  } else {
    order = code < 0 ? Blockly.Python.ORDER_UNARY_SIGN :
            Blockly.Python.ORDER_ATOMIC;
  }
  return [code, order];
};
  
Blockly.Python['variable_string'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + value_ass + ' string(' + value_name + ')\n';
  return code;
};

Blockly.Python['variable_int'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + value_ass + ' int(' + value_name + ')\n';
  return code;
};

Blockly.Python['variable_float'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + value_ass + ' float(' + value_name + ')\n';
  return code;
};

Blockly.Python['variable_dict'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_dict = Blockly.Python.valueToCode(block, 'dict');
  // TODO: Assemble Python into code variable.
  var code = value_var1 +  value_ass + ' dict{' + value_dict + '}\n';
  return code;
};

Blockly.Python['variable_tuple'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_tup = Blockly.Python.valueToCode(block, 'tup');
  // TODO: Assemble Python into code variable.
  var code =value_var1 +  value_ass + ' tuple(' + value_tup + ')\n';
  return code;
};

Blockly.Python['variable_set'] = function(block) {
  var value_var1 = Blockly.Python.valueToCode(block, 'var1');
  var value_ass = Blockly.Python.valueToCode(block, 'ass');
  var value_set = Blockly.Python.valueToCode(block, 'set');
  // TODO: Assemble Python into code variable.
  var code = value_var1 + value_ass + ' set(' + value_set + ')\n';
  return code;
};

Blockly.Python['variable_tuple1'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['variable_dict1'] = function(block) {
  var value_dict = Blockly.Python.valueToCode(block, 'dict');
  // TODO: Assemble Python into code variable.
  var code = '{' + value_dict+'}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['variable_string1'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = value_name + ';'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['variable_list1'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '['+value_name+']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};