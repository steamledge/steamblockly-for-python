Blockly.Python['keywords_false'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'False';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['keywords_len'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'len('+value_name+')\n';
  return code;
};

Blockly.Python['keywords_return'] = function(block) {
  var value_return = Blockly.Python.valueToCode(block, 'return');
  // TODO: Assemble Python into code variable.
  var code = 'return '+value_return+'\n';
  return code;
};

Blockly.Python['keywords_import'] = function(block) {
  var value_import = Blockly.Python.valueToCode(block, 'import');
  // TODO: Assemble Python into code variable.
  var code = 'import '+value_import+'\n';
  return code;
};

Blockly.Python['keywords_global'] = function(block) {
  var value_global = Blockly.Python.valueToCode(block, 'global');
  // TODO: Assemble Python into code variable.
  var code = 'Global '+value_global+'\n';
  return code;
};

Blockly.Python['keywords_from'] = function(block) {
  var value_from = Blockly.Python.valueToCode(block, 'from');
  // TODO: Assemble Python into code variable.
  var code = 'from '+value_from;
  return code;
};

Blockly.Python['keywords_del'] = function(block) {
  var value_delete = Blockly.Python.valueToCode(block, 'delete');
  // TODO: Assemble Python into code variable.
  var code = 'del('+value_delete+')\n';
  return code;
};

Blockly.Python['keywords_remove'] = function(block) {
  var value_rem = Blockly.Python.valueToCode(block, 'rem');
  // TODO: Assemble Python into code variable.
  var code = 'remove('+value_rem+')\n';
  return code;
};

Blockly.Python['keywords_pop'] = function(block) {
  var value_pop = Blockly.Python.valueToCode(block, 'pop');
  // TODO: Assemble Python into code variable.
  var code = 'pop('+value_pop+')\n';
  return code;
};

Blockly.Python['keywords_true'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'True';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['keywords_from2'] = function(block) {
  var value_from = Blockly.Python.valueToCode(block, 'from');
  var value_import = Blockly.Python.valueToCode(block, 'import');
  var value_as = Blockly.Python.valueToCode(block, ' as');
  // TODO: Assemble Python into code variable.
  var code = 'from '+value_from+' import '+value_import+' as '+value_as+'\n';
  return code;
};

Blockly.Python['keywords_from1'] = function(block) {
  var value_from = Blockly.Python.valueToCode(block, 'from');
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from '+value_from+' import '+value_name+'\n';
  return code;
};

Blockly.Python['keywords_import1'] = function(block) {
  var value_import = Blockly.Python.valueToCode(block, 'import');
  var value_as = Blockly.Python.valueToCode(block, 'as');
  // TODO: Assemble Python into code variable.
  var code = 'import '+value_import+' as '+value_as+'\n';
  return code;
};

Blockly.Python['keywords_print'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_name + ')\n';
  return code;
};

Blockly.Python['keywords_break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'break\n';
  return code;
};

Blockly.Python['keywords_continue'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'continue\n';
  return code;
};

Blockly.Python['keywords_range'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'range('+value_name+'):\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};