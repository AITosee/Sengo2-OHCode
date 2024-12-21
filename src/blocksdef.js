// Sengo Enable Disable
const SENGO2_ENABLE = "启用";
const SENGO2_DISABLE = "关闭";

// Sengo White Balance Type
const SENGO2_AWB_AUTO = "自动";
const SENGO2_AWB_LOCK = "锁定";
const SENGO2_AWB_WHITE_LIGHT = "白光";
const SENGO2_AWB_YELLOW_LIGHT = "黄光";

// Sengo State Value Type
const SENGO2_STATE_VALUE = "数据";
const SENGO2_STATE_VALUE_X = "横坐标";
const SENGO2_STATE_VALUE_Y = "纵坐标";
const SENGO2_STATE_VALUE_WIDTH = "宽度";
const SENGO2_STATE_VALUE_HEIGHT = "高度";
const SENGO2_STATE_VALUE_LABEL = "标签";

const SENGO2_STATE_LINE_EX = "终点横坐标";
const SENGO2_STATE_LINE_EY = "终点纵坐标";
const SENGO2_STATE_LINE_SX = "起点横坐标";
const SENGO2_STATE_LINE_SY = "起点纵坐标";
const SENGO2_STATE_LINE_A = "倾斜角度";

const SENGO2_STATE_VALUE_R = "红色分量值";
const SENGO2_STATE_VALUE_G = "绿色分量值";
const SENGO2_STATE_VALUE_B = "蓝色分量值";

// LED color type
const SENGO2_LED_CLOSE = "黑色";
const SENGO2_LED_RED = "红色";
const SENGO2_LED_GREEN = "绿色";
const SENGO2_LED_YELLOW = "黄色";
const SENGO2_LED_BLUE = "蓝色";
const SENGO2_LED_PURPLE = "紫色";
const SENGO2_LED_CYAN = "青色";
const SENGO2_LED_WHITE = "白色";

// Sengo Color Type
const SENGO2_COLOR_BLACK = "黑色";
const SENGO2_COLOR_WHITE = "白色";
const SENGO2_COLOR_RED = "红色";
const SENGO2_COLOR_GREEN = "绿色";
const SENGO2_COLOR_BLUE = "蓝色";
const SENGO2_COLOR_YELLOW = "黄色";
const SENGO2_COLOR_UNKNOWN = "其他";

// Sengo Vision type
const SENGO2_VISION_VISIONCOLOR = "颜色识别";
const SENGO2_VISION_VISIONBLOB = "色块检测";
const SENGO2_VISION_VISIONBALL = "球体识别";
const SENGO2_VISION_VISIONAPRILTAG = "标签识别";
const SENGO2_VISION_VISIONLINE = "线条检测";
const SENGO2_VISION_VISIONLEARNING = "深度学习";
const SENGO2_VISION_VISIONCARD = "卡片识别";
const SENGO2_VISION_VISIONFACE = "人脸识别";
const SENGO2_VISION_VISIONBODY = "人体检测";
const SENGO2_VISION_VISION20CLASSES = "20类物体";
const SENGO2_VISION_VISIONQRCODE = "二维码";
const SENGO2_VISION_VISIONMOTIONDETECT = "运动物体";
const SENGO2_VISION_VISIONCUSTOM = "自定义";

// Sengo 20 Class Type
const SENGO2_CLASS20_AIRPLANE = "飞机";
const SENGO2_CLASS20_BICYCLE = "自行车";
const SENGO2_CLASS20_BIRD = "鸟";
const SENGO2_CLASS20_BOAT = "船";
const SENGO2_CLASS20_BOTTLE = "瓶子";
const SENGO2_CLASS20_BUS = "公交车";
const SENGO2_CLASS20_CAR = "小汽车";
const SENGO2_CLASS20_CAT = "猫";
const SENGO2_CLASS20_CHAIR = "椅子";
const SENGO2_CLASS20_COW = "奶";
const SENGO2_CLASS20_TABLE = "餐桌";
const SENGO2_CLASS20_DOG = "狗";
const SENGO2_CLASS20_HORSE = "马";
const SENGO2_CLASS20_MOTORBIKE = "摩托车";
const SENGO2_CLASS20_PERSON = "人";
const SENGO2_CLASS20_PLANT = "盆栽植物";
const SENGO2_CLASS20_SHEEP = "羊";
const SENGO2_CLASS20_SOFA = "沙发";
const SENGO2_CLASS20_TRAIN = "火车";
const SENGO2_CLASS20_MONITOR = "电视";

// Sengo Card Type
const SENGO2_CARD_TRAFFIC = "交通卡片";
const SENGO2_CARD_FORWARD = "前进";
const SENGO2_CARD_LEFT = "左转";
const SENGO2_CARD_RIGHT = "右转";
const SENGO2_CARD_TURN_AROUND = "掉头";
const SENGO2_CARD_PARK = "停车";
const SENGO2_CARD_GREEN_LIGHT = "绿灯";
const SENGO2_CARD_RED_LIGHT = "红灯";
const SENGO2_CARD_SPEED_40 = "限速40";
const SENGO2_CARD_SPEED_60 = "限速60";
const SENGO2_CARD_SPEED_80 = "限速80";

// Sengo2模块文本
const SENGO2_BEGIN_MESSAGE0 = "初始化  Sengo2  端口 %1 地址 %2";
const SENGO2_LED_SET_COLOR_MESSAGE0 =
    "设置  Sengo2  检测到目标时LED显示 %2 否则 %3 亮度(1~15) %1";
const SENGO2_SET_DEFAULT_MESSAGE0 = "  Sengo2  恢复默认参数";
const SENGO2_VISION_SET_STATUS_MESSAGE0 = "  Sengo2  %1算法  %2";
const SENGO2_SET_PARAMNUM_MESSAGE0 = "设置  Sengo2  %1  %2组参数";
const SENGO2_COLORPARAM_MESSAGE0 =
    "设置  Sengo2  %1  区域中心 横坐标 %2 纵坐标 %3 宽度 %4 高度 %5 参数组 %6";
const SENGO2_BOLDPARAM_MESSAGE0 =
    "设置  Sengo2  %1  最小宽度 %2 高度 %3 检测标签 %4 参数组 %5";

const SENGO2_DETECTED_MESSAGE0 = "  Sengo2  %1    检测结果数量";
const SENGO2_GET_VALUE_MESSAGE0 = "  Sengo2  %1  %2 结果%3的";
const SENGO2_COLORRCGVALUE_MESSAGE0 = "  Sengo2  颜色识别  %1 结果 %2的";
const SENGO2_QRRCGVALUE_MESSAGE0 = "  Sengo2  二维码  %1 结果 %2的";
const SENGO2_GET_QRCODEVALUE_MESSAGE0 = "  Sengo2  二维码  结果字符串";
const SENGO2_LINEVALUE_MESSAGE0 = "  Sengo2  线条检测  %1 结果 %2";
const SENGO2_DETECTEDCOLOR_MESSAGE0 = "  Sengo2  颜色识别  识别到 %1 结果 %2";
const SENGO2_DETECTEDBLOB_MESSAGE0 = "  Sengo2  色块检测  检测到 %1块 结果 %2";
const SENGO2_DETECTEDCARD_MESSAGE0 = "  Sengo2  卡片识别  识别到 %1 结果 %2";
const SENGO2_DETECTED20CLASS_MESSAGE0 =
    "  Sengo2  20分类识别  检测到 %1 结果 %2";

const Sengo_SetupMode_Color = "#EF5411";
const Sengo_RunMode_Color = "#EAA20A";

const sengo2 = [
    ["0x60", "0"]
];

// 初始化 Sengo2
Blockly.Blocks["Sengo2Begin"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_SetupMode_Color,
            args0: [
                {
                    name: "InitType",
                    options: [["I2C0", "i2c0"]],
                    type: "field_dropdown",
                },
                {
                    name: "sengo2",
                    options: sengo2,
                    type: "field_dropdown",
                },
            ],
            message0: SENGO2_BEGIN_MESSAGE0,
            inputsInline: true,
            nextStatement: null,
            previousStatement: null,
        });
    },
};
// 设置 LED
Blockly.Blocks["Sengo2LedSetColor"] = {
    init: function () {
        this.jsonInit({
            colour: "#EF5411",
            args0: [
                {
                    check: "Number",
                    type: "input_value",
                    name: "level",
                },
                {
                    type: "field_dropdown",
                    name: "detected_color",
                    options: [
                        [SENGO2_LED_CLOSE, "sentry_led_color_e.kLedClose"],
                        [SENGO2_LED_RED, "sentry_led_color_e.kLedRed"],
                        [SENGO2_LED_GREEN, "sentry_led_color_e.kLedGreen"],
                        [SENGO2_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
                        [SENGO2_LED_BLUE, "sentry_led_color_e.kLedBlue"],
                        [SENGO2_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
                        [SENGO2_LED_CYAN, "sentry_led_color_e.kLedCyan"],
                        [SENGO2_LED_WHITE, "sentry_led_color_e.kLedWhite"],
                    ],
                },
                {
                    type: "field_dropdown",
                    name: "undetected_color",
                    options: [
                        [SENGO2_LED_CLOSE, "sentry_led_color_e.kLedClose"],
                        [SENGO2_LED_RED, "sentry_led_color_e.kLedRed"],
                        [SENGO2_LED_GREEN, "sentry_led_color_e.kLedGreen"],
                        [SENGO2_LED_YELLOW, "sentry_led_color_e.kLedYellow"],
                        [SENGO2_LED_BLUE, "sentry_led_color_e.kLedBlue"],
                        [SENGO2_LED_PURPLE, "sentry_led_color_e.kLedPurple"],
                        [SENGO2_LED_CYAN, "sentry_led_color_e.kLedCyan"],
                        [SENGO2_LED_WHITE, "sentry_led_color_e.kLedWhite"],
                    ],
                },
            ],
            nextStatement: null,
            previousStatement: null,
            message0: SENGO2_LED_SET_COLOR_MESSAGE0,
            inputsInline: true,
        });
    },
};

// 启用
Blockly.Blocks["Sengo2VisionSetStatus"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_SetupMode_Color,
            args0: [
                {
                    name: "VisionStatus",
                    options: [
                        [SENGO2_ENABLE, "Begin"],
                        [SENGO2_DISABLE, "End"],
                    ],
                    type: "field_dropdown",
                },
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONCOLOR,
                            "sengo2_vision_e.kVisionColor",
                        ],
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                        [
                            SENGO2_VISION_VISIONAPRILTAG,
                            "sengo2_vision_e.kVisionAprilTag",
                        ],
                        [
                            SENGO2_VISION_VISIONLINE,
                            "sengo2_vision_e.kVisionLine",
                        ],
                        [
                            SENGO2_VISION_VISIONLEARNING,
                            "sengo2_vision_e.kVisionLearning",
                        ],
                        [
                            SENGO2_VISION_VISIONCARD,
                            "sengo2_vision_e.kVisionCard",
                        ],
                        [
                            SENGO2_VISION_VISIONFACE,
                            "sengo2_vision_e.kVisionFace",
                        ],
                        [
                            SENGO2_VISION_VISION20CLASSES,
                            "sengo2_vision_e.kVision20Classes",
                        ],
                        [
                            SENGO2_VISION_VISIONQRCODE,
                            "sengo2_vision_e.kVisionQrCode",
                        ],
                        [
                            SENGO2_VISION_VISIONCUSTOM,
                            "sengo2_vision_e.kVisionCustom",
                        ],
                        [
                            SENGO2_VISION_VISIONMOTIONDETECT,
                            "sengo2_vision_e.kVisionMotionDetect",
                        ],
                    ],
                    type: "field_dropdown",
                },
            ],
            message0: SENGO2_VISION_SET_STATUS_MESSAGE0,
            inputsInline: true,
            nextStatement: null,
            previousStatement: null,
        });
    },
};

Blockly.Blocks["Sengo2SetParamNum"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_SetupMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONCOLOR,
                            "sengo2_vision_e.kVisionColor",
                        ],
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                        [
                            SENGO2_VISION_VISIONLEARNING,
                            "sengo2_vision_e.kVisionLearning",
                        ],
                        [
                            SENGO2_VISION_VISIONFACE,
                            "sengo2_vision_e.kVisionFace",
                        ],
                        [
                            SENGO2_VISION_VISIONCUSTOM,
                            "sengo2_vision_e.kVisionCustom",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "max_num",
                },
            ],
            nextStatement: null,
            previousStatement: null,
            inputsInline: true,
            message0: SENGO2_SET_PARAMNUM_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2SetColorParam"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_SetupMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONCOLOR,
                            "sengo2_vision_e.kVisionColor",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "x",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "y",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "w",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "h",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            inputsInline: true,
            nextStatement: null,
            previousStatement: null,
            message0: SENGO2_COLORPARAM_MESSAGE0,
        });
    },
};


Blockly.Blocks["Sengo2SetBlodParam"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_SetupMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "w",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "h",
                },
                {
                    type: "field_dropdown",
                    name: "lable",
                    options: [
                        [SENGO2_COLOR_RED, "sentry_color_label_e.kColorRed"],
                        [
                            SENGO2_COLOR_BLACK,
                            "sentry_color_label_e.kColorBlack",
                        ],
                        [
                            SENGO2_COLOR_WHITE,
                            "sentry_color_label_e.kColorWhite",
                        ],
                        [
                            SENGO2_COLOR_GREEN,
                            "sentry_color_label_e.kColorGreen",
                        ],
                        [SENGO2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
                        [
                            SENGO2_COLOR_YELLOW,
                            "sentry_color_label_e.kColorYellow",
                        ],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            inputsInline: true,
            nextStatement: null,
            previousStatement: null,
            message0: SENGO2_BOLDPARAM_MESSAGE0,
        });
    },
};


Blockly.Blocks["Sengo2Detected"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONCOLOR,
                            "sengo2_vision_e.kVisionColor",
                        ],
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                        [
                            SENGO2_VISION_VISIONAPRILTAG,
                            "sengo2_vision_e.kVisionAprilTag",
                        ],
                        [
                            SENGO2_VISION_VISIONLINE,
                            "sengo2_vision_e.kVisionLine",
                        ],
                        [
                            SENGO2_VISION_VISIONLEARNING,
                            "sengo2_vision_e.kVisionLearning",
                        ],
                        [
                            SENGO2_VISION_VISIONCARD,
                            "sengo2_vision_e.kVisionCard",
                        ],
                        [
                            SENGO2_VISION_VISIONFACE,
                            "sengo2_vision_e.kVisionFace",
                        ],
                        [
                            SENGO2_VISION_VISION20CLASSES,
                            "sengo2_vision_e.kVision20Classes",
                        ],
                        [
                            SENGO2_VISION_VISIONQRCODE,
                            "sengo2_vision_e.kVisionQrCode",
                        ],
                        [
                            SENGO2_VISION_VISIONCUSTOM,
                            "sengo2_vision_e.kVisionCustom",
                        ],
                        [
                            SENGO2_VISION_VISIONMOTIONDETECT,
                            "sengo2_vision_e.kVisionMotionDetect",
                        ],
                    ],
                    type: "field_dropdown",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_DETECTED_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2GetValue"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                        [
                            SENGO2_VISION_VISIONAPRILTAG,
                            "sengo2_vision_e.kVisionAprilTag",
                        ],
                        [
                            SENGO2_VISION_VISIONLEARNING,
                            "sengo2_vision_e.kVisionLearning",
                        ],
                        [
                            SENGO2_VISION_VISIONCARD,
                            "sengo2_vision_e.kVisionCard",
                        ],
                        [
                            SENGO2_VISION_VISIONFACE,
                            "sengo2_vision_e.kVisionFace",
                        ],
                        [
                            SENGO2_VISION_VISION20CLASSES,
                            "sengo2_vision_e.kVision20Classes",
                        ],
                        [
                            SENGO2_VISION_VISIONMOTIONDETECT,
                            "sengo2_vision_e.kVisionMotionDetect",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    type: "field_dropdown",
                    name: "objinfo",
                    options: [
                        [SENGO2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
                        [SENGO2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
                        [
                            SENGO2_STATE_VALUE_WIDTH,
                            "sentry_obj_info_e.kWidthValue",
                        ],
                        [
                            SENGO2_STATE_VALUE_HEIGHT,
                            "sentry_obj_info_e.kHeightValue",
                        ],
                        [SENGO2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_GET_VALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2GetValueNomal"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    name: "VisionType",
                    options: [
                        [
                            SENGO2_VISION_VISIONCUSTOM,
                            "sengo2_vision_e.kVisionCustom",
                        ],
                        [
                            SENGO2_VISION_VISIONCOLOR,
                            "sengo2_vision_e.kVisionColor",
                        ],
                        [
                            SENGO2_VISION_VISIONBLOB,
                            "sengo2_vision_e.kVisionBlob",
                        ],
                        [
                            SENGO2_VISION_VISIONLEARNING,
                            "sengo2_vision_e.kVisionLearning",
                        ],
                        [
                            SENGO2_VISION_VISIONFACE,
                            "sengo2_vision_e.kVisionFace",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    type: "field_dropdown",
                    name: "objinfo",
                    options: [
                        [SENGO2_STATE_VALUE + "1", "sentry_obj_info_e.kXValue"],
                        [SENGO2_STATE_VALUE + "2", "sentry_obj_info_e.kYValue"],
                        [
                            SENGO2_STATE_VALUE + "3",
                            "sentry_obj_info_e.kWidthValue",
                        ],
                        [
                            SENGO2_STATE_VALUE + "4",
                            "sentry_obj_info_e.kHeightValue",
                        ],
                        [SENGO2_STATE_VALUE + "5", "sentry_obj_info_e.kLabel"],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_GET_VALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2ColorRcgValue"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    type: "field_dropdown",
                    name: "objinfo",
                    options: [
                        [SENGO2_STATE_VALUE_LABEL, "sentry_obj_info_e.kLabel"],
                        [SENGO2_STATE_VALUE_R, "sentry_obj_info_e.kRValue"],
                        [SENGO2_STATE_VALUE_G, "sentry_obj_info_e.kGValue"],
                        [SENGO2_STATE_VALUE_B, "sentry_obj_info_e.kBValue"],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_COLORRCGVALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2QrRcgValue"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    type: "field_dropdown",
                    name: "objinfo",
                    options: [
                        [SENGO2_STATE_VALUE_X, "sentry_obj_info_e.kXValue"],
                        [SENGO2_STATE_VALUE_Y, "sentry_obj_info_e.kYValue"],
                        [
                            SENGO2_STATE_VALUE_WIDTH,
                            "sentry_obj_info_e.kWidthValue",
                        ],
                        [
                            SENGO2_STATE_VALUE_HEIGHT,
                            "sentry_obj_info_e.kHeightValue",
                        ],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_QRRCGVALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2GetQrCodeValue"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,

            output: null,
            inputsInline: true,
            message0: SENGO2_GET_QRCODEVALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2LineValue"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    type: "field_dropdown",
                    name: "objinfo",
                    options: [
                        [SENGO2_STATE_LINE_EX, "sentry_obj_info_e.kXValue"],
                        [SENGO2_STATE_LINE_EY, "sentry_obj_info_e.kYValue"],
                        [SENGO2_STATE_LINE_SX, "sentry_obj_info_e.kWidthValue"],
                        [
                            SENGO2_STATE_LINE_SY,
                            "sentry_obj_info_e.kHeightValue",
                        ],
                        [SENGO2_STATE_LINE_A, "sentry_obj_info_e.kLabel"],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: null,
            inputsInline: true,
            message0: SENGO2_LINEVALUE_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2DetectedColor"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    type: "field_dropdown",
                    name: "ColorLabel",
                    options: [
                        [
                            SENGO2_COLOR_BLACK,
                            "sentry_color_label_e.kColorBlack",
                        ],
                        [
                            SENGO2_COLOR_WHITE,
                            "sentry_color_label_e.kColorWhite",
                        ],
                        [SENGO2_COLOR_RED, "sentry_color_label_e.kColorRed"],
                        [
                            SENGO2_COLOR_GREEN,
                            "sentry_color_label_e.kColorGreen",
                        ],
                        [SENGO2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
                        [
                            SENGO2_COLOR_YELLOW,
                            "sentry_color_label_e.kColorYellow",
                        ],
                        [
                            SENGO2_COLOR_UNKNOWN,
                            "sentry_color_label_e.kColorUnkown",
                        ],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: "Boolean",
            inputsInline: true,
            message0: SENGO2_DETECTEDCOLOR_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2DetectedBlob"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    type: "field_dropdown",
                    name: "ColorLabel",
                    options: [
                        [SENGO2_COLOR_RED, "sentry_color_label_e.kColorRed"],
                        [
                            SENGO2_COLOR_BLACK,
                            "sentry_color_label_e.kColorBlack",
                        ],
                        [
                            SENGO2_COLOR_WHITE,
                            "sentry_color_label_e.kColorWhite",
                        ],
                        [
                            SENGO2_COLOR_GREEN,
                            "sentry_color_label_e.kColorGreen",
                        ],
                        [SENGO2_COLOR_BLUE, "sentry_color_label_e.kColorBlue"],
                        [
                            SENGO2_COLOR_YELLOW,
                            "sentry_color_label_e.kColorYellow",
                        ],
                    ],
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: "Boolean",
            inputsInline: true,
            message0: SENGO2_DETECTEDBLOB_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2DetectedCard"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    name: "card",
                    options: [
                        [
                            SENGO2_CARD_FORWARD,
                            "sentry2_card_label_e.kCardForward",
                        ],
                        [SENGO2_CARD_LEFT, "sentry2_card_label_e.kCardLeft"],
                        [SENGO2_CARD_RIGHT, "sentry2_card_label_e.kCardRight"],
                        [
                            SENGO2_CARD_TURN_AROUND,
                            "sentry2_card_label_e.kCardTurnAround",
                        ],
                        [SENGO2_CARD_PARK, "sentry2_card_label_e.kCardPark"],
                        [
                            SENGO2_CARD_GREEN_LIGHT,
                            "sentry2_card_label_e.kCardGreenLight",
                        ],
                        [
                            SENGO2_CARD_RED_LIGHT,
                            "sentry2_card_label_e.kCardRedLight",
                        ],
                        [
                            SENGO2_CARD_SPEED_40,
                            "sentry2_card_label_e.kCardSpeed40",
                        ],
                        [
                            SENGO2_CARD_SPEED_60,
                            "sentry2_card_label_e.kCardSpeed60",
                        ],
                        [
                            SENGO2_CARD_SPEED_80,
                            "sentry2_card_label_e.kCardSpeed80",
                        ]
                    ],
                    type: "field_dropdown",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: "Boolean",
            inputsInline: true,
            message0: SENGO2_DETECTEDCARD_MESSAGE0,
        });
    },
};

Blockly.Blocks["Sengo2Detected20Class"] = {
    init: function () {
        this.jsonInit({
            colour: Sengo_RunMode_Color,
            args0: [
                {
                    name: "card",
                    options: [
                        [
                            SENGO2_CLASS20_AIRPLANE,
                            "sentry_class20_label_e.kAirplane",
                        ],
                        [
                            SENGO2_CLASS20_BICYCLE,
                            "sentry_class20_label_e.kBicycle",
                        ],
                        [SENGO2_CLASS20_BIRD, "sentry_class20_label_e.kBird"],
                        [SENGO2_CLASS20_BOAT, "sentry_class20_label_e.kBoat"],
                        [SENGO2_CLASS20_BOTTLE, "sentry_class20_label_e.kBus"],
                        [SENGO2_CLASS20_BUS, "sentry_class20_label_e.kCar"],
                        [SENGO2_CLASS20_CAR, "sentry_class20_label_e.kCat"],
                        [SENGO2_CLASS20_CAT, "sentry_class20_label_e.kChair"],
                        [SENGO2_CLASS20_CHAIR, "sentry_class20_label_e.kCow"],
                        [SENGO2_CLASS20_COW, "sentry_class20_label_e.kTable"],
                        [SENGO2_CLASS20_TABLE, "sentry_class20_label_e.kDog"],
                        [SENGO2_CLASS20_DOG, "sentry_class20_label_e.kHorse"],
                        [
                            SENGO2_CLASS20_HORSE,
                            "sentry_class20_label_e.kMotorBike",
                        ],
                        [
                            SENGO2_CLASS20_MOTORBIKE,
                            "sentry_class20_label_e.kPerson",
                        ],
                        [
                            SENGO2_CLASS20_PERSON,
                            "sentry_class20_label_e.kPlant",
                        ],
                        [SENGO2_CLASS20_PLANT, "sentry_class20_label_e.kSheep"],
                        [SENGO2_CLASS20_SHEEP, "sentry_class20_label_e.kSheep"],
                        [SENGO2_CLASS20_SOFA, "sentry_class20_label_e.kSofa"],
                        [SENGO2_CLASS20_TRAIN, "sentry_class20_label_e.kTrain"],
                        [
                            SENGO2_CLASS20_MONITOR,
                            "sentry_class20_label_e.kMonitor",
                        ],
                    ],
                    type: "field_dropdown",
                },
                {
                    check: "Number",
                    type: "input_value",
                    name: "objid",
                },
            ],
            output: "Boolean",
            inputsInline: true,
            message0: SENGO2_DETECTED20CLASS_MESSAGE0,
        });
    },
};

// 初始化 Sengo
pythonGenerator.forBlock["Sengo2Begin"] = function (block) {
    var sengo2 = block.getFieldValue("sengo2");
    var InitType = block.getFieldValue("InitType");
    var code = "sengo2" + ".begin(" + InitType + ")\n";

    pythonGenerator.definitions_["import_iic"] = "from machine import I2C";
    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";
    pythonGenerator.definitions_["init_IIC"] = "i2c0 = I2C(0,freq=400000)";
    pythonGenerator.definitions_["init_Sengo2" + sengo2] =
        "sengo2" + " = Sentry(0x7,0x6" + sengo2 + ")";

    return code;
};

// 设置 LEDn
pythonGenerator.forBlock["Sengo2LedSetColor"] = function (block) {
    var detected_color = block.getFieldValue("detected_color");
    var undetected_color = block.getFieldValue("undetected_color");
    var level =
        Blockly.Python.valueToCode(block, "level", Blockly.Python.ORDER_NONE) ||
        "1";
    var code =
        "sengo2" +
        ".LedSetColor(" +
        detected_color +
        ", " +
        undetected_color +
        ", " +
        level +
        ")\n";

    Blockly.Python.definitions_["import_Sentry"] = "from Sentry import *";

    return code;
};

// 启用
pythonGenerator.forBlock["Sengo2VisionSetStatus"] = function (block) {
    var VisionStatus = block.getFieldValue("VisionStatus");
    var VisionType = block.getFieldValue("VisionType");
    var code = "sengo2" + ".Vision" + VisionStatus + "(" + VisionType + ")\n";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return code;
};

// 设置  参数
pythonGenerator.forBlock["Sengo2SetParamNum"] = function (block) {
    var VisionType = block.getFieldValue("VisionType");
    var max_num = pythonGenerator.valueToCode(
        block,
        "max_num",
        pythonGenerator.ORDER_NONE,
    );
    var code = "sengo2" + ".SetParamNum(" + VisionType + ", " + max_num + ")\n";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return code;
};

// Color   参数
pythonGenerator.forBlock["Sengo2SetColorParam"] = function (block) {
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
    var objid = pythonGenerator.valueToCode(
        block,
        "objid",
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
        objid +
        ")\n";

    return code;
};

// Blod   参数
pythonGenerator.forBlock["Sengo2SetBlodParam"] = function (block) {
    var w =
        pythonGenerator.valueToCode(block, "w", pythonGenerator.ORDER_NONE) ||
        "1";
    var h =
        pythonGenerator.valueToCode(block, "h", pythonGenerator.ORDER_NONE) ||
        "1";
    var lable = block.getFieldValue("lable");
    var objid = pythonGenerator.valueToCode(
        block,
        "objid",
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
        objid +
        ")\n";

    return code;
};


pythonGenerator.forBlock["Sengo2Detected"] = function (block) {
    var VisionType = block.getFieldValue("VisionType");
    var code =
        "sengo2" + ".GetValue(" + VisionType + ", sentry_obj_info_e.kStatus)";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2GetValue"] = pythonGenerator.forBlock[
    "Sengo2GetValueNomal"
] = function (block) {
    var VisionType = block.getFieldValue("VisionType");
    var objinfo = block.getFieldValue("objinfo");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(" +
        VisionType +
        ", " +
        objinfo +
        ", " +
        objid +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2ColorRcgValue"] = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(sengo2_vision_e.kVisionColor, " +
        objinfo +
        ", " +
        objid +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2QrRcgValue"] = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var code =
        "sengo2" + ".GetValue(sengo2_vision_e.kVisionQrCode, " + objinfo + ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2GetQrCodeValue"] = function (block) {
    var code = "sengo2" + ".GetQrCodeValue()";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2LineValue"] = function (block) {
    var objinfo = block.getFieldValue("objinfo");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";
    var code =
        "sengo2" +
        ".GetValue(sengo2_vision_e.kVisionLine, " +
        objinfo +
        ", " +
        objid +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2DetectedColor"] = function (block) {
    var ColorLabel = block.getFieldValue("ColorLabel");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionColor, sentry_obj_info_e.kLabel, " +
        objid +
        ") == " +
        ColorLabel +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2DetectedBlob"] = function (block) {
    var ColorLabel = block.getFieldValue("ColorLabel");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionBlob, sentry_obj_info_e.kLabel, " +
        objid +
        ") == " +
        ColorLabel +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2DetectedCard"] = function (block) {
    var card = block.getFieldValue("card");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVisionCard, sentry_obj_info_e.kLabel, " +
        objid +
        ") == " +
        card +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};

pythonGenerator.forBlock["Sengo2Detected20Class"] = function (block) {
    var card = block.getFieldValue("card");
    var objid =
        pythonGenerator.valueToCode(
            block,
            "objid",
            pythonGenerator.ORDER_NONE,
        ) || "0";

    var code =
        "(sengo2" +
        ".GetValue(sengo2_vision_e.kVision20Classes, sentry_obj_info_e.kLabel, " +
        objid +
        ") == " +
        card +
        ")";

    pythonGenerator.definitions_["import_Sentry"] = "from Sentry import *";

    return [code, pythonGenerator.ORDER_ATOMIC];
};
