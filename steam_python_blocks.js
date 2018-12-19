Blockly.Blocks['variable_string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "str");
    this.setInputsInline(true);
    this.setOutput(true, ["String", "Array"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_str'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "str");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_num_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "num");
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "Array"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_string'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck(null);
    this.appendValueInput("NAME")
        .setCheck(["Number", "String", "Array"])
        .appendField("string");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_int'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("NAME")
        .setCheck("")
        .appendField("int");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_float'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("NAME")
        .setCheck("")
        .appendField("float");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_list'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField("list");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_dict'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("dict")
        .setCheck(null)
        .appendField("dictionary");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_tuple'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("tup")
        .setCheck("Array")
        .appendField("tuple");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_set'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendValueInput("ass")
        .setCheck("equal");
    this.appendValueInput("set")
        .setCheck(null)
        .appendField("set");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_intt'] = {
  init: function() {
    this.appendValueInput("ass")
        .setCheck("equal")
        .appendField("int");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_floatt'] = {
  init: function() {
    this.appendValueInput("float")
        .setCheck(null)
        .appendField("float");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_stringg'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("string");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_string1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("string");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
    }
};


Blockly.Blocks['variable_list1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("list");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_tuple1'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("tuple");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['variable_dict1'] = {
  init: function() {
    this.appendValueInput("dict")
        .setCheck(null)
        .appendField("dictionary");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['logic_and'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("and");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['logic_or'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("or");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['logic_not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("not");
    this.appendValueInput("var")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_if'] = {
  init: function() {
    this.appendValueInput("if")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("if");
    this.appendStatementInput("then")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("then");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_if_else'] = {
  init: function() {
    this.appendValueInput("if")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("if");
    this.appendStatementInput("then")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("then");
    this.appendStatementInput("else")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_if_elif'] = {
  init: function() {
    this.appendValueInput("if")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("if");
    this.appendStatementInput("then")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("then");
    this.appendValueInput("elif")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("elif");
    this.appendStatementInput("then2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("then");
    this.appendStatementInput("else")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_for'] = {
  init: function() {
    this.appendValueInput("for")
        .setCheck(null)
        .appendField("for");
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("sequence")
        .setCheck(null);
    this.appendStatementInput("code")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_for_else'] = {
  init: function() {
    this.appendValueInput("for")
        .setCheck(null)
        .appendField("for");
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("sequence")
        .setCheck(null);
    this.appendStatementInput("code")
        .setCheck(null);
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_while'] = {
  init: function() {
    this.appendValueInput("expression")
        .setCheck(null)
        .appendField("while");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_while_else'] = {
  init: function() {
    this.appendValueInput("expression")
        .setCheck(null)
        .appendField("while");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.appendStatementInput("else")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop_pass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pass");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_add'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_minus'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_mult'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("*");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_div'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_mode'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("%");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_floor_div'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("//");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic_expo'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("**");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_greater'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(">");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_less'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_equal'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_not_equal'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("!=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_equal_greater'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(">=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparison_equal_less'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_and'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("&");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_or'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("|");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("~");
    this.appendValueInput("var")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_xor'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("^");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_right_shift'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(">>");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bitwise_left_shift'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("<<");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_plus'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("+=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_minus'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("-=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_mult'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("*=");
    this.appendValueInput("var2")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_div'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("//=");
    this.appendValueInput("var2")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_expo'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("**=");
    this.appendValueInput("var2")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_and'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("&=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_equal'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_or'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("|=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_ast'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("^=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_right'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(">>=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignment_equal_left'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("<<=");
    this.appendValueInput("var2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['membership_in'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("var2")
        .setCheck("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['membership_not_in'] = {
  init: function() {
    this.appendValueInput("var1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("not in");
    this.appendValueInput("var2")
        .setCheck("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['function_def1'] = {
  init: function() {
    this.appendValueInput("def")
        .setCheck(null)
        .appendField("def");
    this.appendValueInput("parameter")
        .setCheck(null);
    this.appendStatementInput("code")
        .setCheck(null)
        .appendField("code");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("False");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_len'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("len");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['keywords_return'] = {
  init: function() {
    this.appendValueInput("return")
        .setCheck(null)
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_import'] = {
  init: function() {
    this.appendValueInput("import")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_global'] = {
  init: function() {
    this.appendValueInput("global")
        .setCheck(null)
        .appendField("global");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_from'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null)
        .appendField("from");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_del'] = {
  init: function() {
    this.appendValueInput("delete")
        .setCheck(null)
        .appendField("del");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_remove'] = {
  init: function() {
    this.appendValueInput("rem")
        .setCheck(null)
        .appendField("remove");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_pop'] = {
  init: function() {
    this.appendValueInput("pop")
        .setCheck(null)
        .appendField("pop");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("True");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_from1'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null)
        .appendField("from");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("import");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_from2'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null)
        .appendField("from");
    this.appendValueInput("import")
        .setCheck(null)
        .appendField("import");
    this.appendValueInput("as")
        .setCheck(null)
        .appendField("as");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_import1'] = {
  init: function() {
    this.appendValueInput("import")
        .setCheck(null)
        .appendField("import");
    this.appendValueInput("as")
        .setCheck(null)
        .appendField("as");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl
  }
}
 Blockly.Blocks['keywords_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continue");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_print'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("print");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_continue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("continue");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['keywords_range'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("range");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
