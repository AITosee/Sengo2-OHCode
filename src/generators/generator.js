// 初始化 Sengo
export const Sengo2Begin = function (block) {
    var mode = block.getFieldValue("mode_obj");
    var addr = block.getFieldValue("addr_obj");
    var code = `sengo2.begin(${mode})\n`;

    pythonGenerator.definitions_["import_iic"] = "from machine import I2C";
    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";
    pythonGenerator.definitions_["init_IIC"] = "i2c0 = I2C(0,freq=400000)";
    pythonGenerator.definitions_["init_Sengo2"] =
        `sengo2  = Sentry(0x7, ${addr} )`;

    return code;
};

// 设置 LEDn
export const Sengo2LedSetColor = function (block) {
    var color_dic = {
        "#000000": "sentry_led_color_e.kLedClose",
        "#ff0000": "sentry_led_color_e.kLedRed",
        "#00ff00": "sentry_led_color_e.kLedGreen",
        "#ffff00": "sentry_led_color_e.kLedYellow",
        "#0000ff": "sentry_led_color_e.kLedBlue",
        "#ff00ff": "sentry_led_color_e.kLedPurple",
        "#00ffff": "sentry_led_color_e.kLedCyan",
        "#ffffff": "sentry_led_color_e.kLedWhite",
    };

    var dropdown_led_color_obj1 =
        color_dic[this.getFieldValue("led_color_obj1")];
    var dropdown_led_color_obj2 =
        color_dic[this.getFieldValue("led_color_obj2")];

    var input_level =
        pythonGenerator.valueToCode(
            this,
            "level",
            pythonGenerator.ORDER_ATOMIC,
        ) || 1;

    return `sengo2.LedSetColor(${dropdown_led_color_obj1},${dropdown_led_color_obj2},${input_level});\n`;
};

// 启用
export const Sengo2VisionSetStatus = function (block) {
    var VisionStatus = block.getFieldValue("VisionStatus");
    var vision_obj = block.getFieldValue("vision_obj");
    var code = "sengo2" + ".Vision" + VisionStatus + "(" + vision_obj + ")\n";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return code;
};

// 设置  参数
export const Sengo2VisionSetParamNum = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var max_num = pythonGenerator.valueToCode(
        block,
        "max_num",
        pythonGenerator.ORDER_NONE,
    );
    var code = "sengo2" + ".SetParamNum(" + vision_obj + ", " + max_num + ")\n";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return code;
};

// Color   参数
export const Sengo2VisionColorSetParam = function (block) {
    var x =
        pythonGenerator.valueToCode(block, "x", pythonGenerator.ORDER_NONE) ||
        "1";
    var y =
        pythonGenerator.valueToCode(block, "y", pythonGenerator.ORDER_NONE) ||
        "1";
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sengo2" +
        ".SetParam(" +
        "sengo2_vision_e.kVisionColor, [" +
        x +
        ", " +
        y +
        ", " +
        w +
        ", " +
        h +
        ", 0]" +
        ", " +
        index +
        ")\n";

    return code;
};

// Blod   参数
export const Sengo2VisionBlobSetParam = function (block) {
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var lable = block.getFieldValue("lable");
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sengo2" +
        ".SetParam(" +
        "sengo2_vision_e.kVisionBlob, " +
        "[0, 0, " +
        w +
        ", " +
        h +
        ", " +
        lable +
        "]" +
        ", " +
        index +
        ")\n";

    return code;
};

// Face   参数
export const Sengo2VisionSetParam = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var lable = block.getFieldValue("lable");
    var index = pythonGenerator.valueToCode(
        block,
        "index",
        pythonGenerator.ORDER_ATOMIC,
    );
    var code =
        "sengo2" +
        ".SetParam(" +
        vision_obj +
        "[0, 0, 0, 0," +
        lable +
        "]" +
        ", " +
        index +
        ")\n";

    return code;
};

export const Sengo2VisionDetectedCount = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var code =
        "sengo2" + ".GetValue(" + vision_obj + ", sentry_obj_info_e.kStatus)";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2GetValue = function (block) {
    var vision_obj = block.getFieldValue("vision_obj");
    var objinfo = block.getFieldValue("objinfo");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(" +
        vision_obj +
        ", " +
        objinfo +
        ", " +
        index +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2VisionObjColor = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(sengo2_vision_e.kVisionColor, " +
        objinfo +
        ", " +
        index +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2GetQrValue = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var code =
        "sengo2" + ".GetValue(sengo2_vision_e.kVisionQrCode, " + objinfo + ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2GetQrCodeValue = function (block) {
    var code = "sengo2" + ".GetQrCodeValue()";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2LineValue = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(sengo2_vision_e.kVisionLine, " +
        objinfo +
        ", " +
        index +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2DetectedColor = function (block) {
    var ColorLabel = block.getFieldValue("ColorLabel");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        ColorLabel +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2DetectedBlob = function (block) {
    var ColorLabel = block.getFieldValue("ColorLabel");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        ColorLabel +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2DetectedCard = function (block) {
    var card = block.getFieldValue("card");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        card +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

export const Sengo2Detected20Class = function (block) {
    var card = block.getFieldValue("card");
    var index =
        pythonGenerator.valueToCode(
            block,
            "index",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, " +
        index +
        ") == " +
        card +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};
