# sengo2 vision
class sengo2_vision_e:
    kVisionColor = 1
    kVisionBlob = 2
    kVisionAprilTag = 3
    kVisionLine = 4
    kVisionLearning = 5
    kVisionCard = 6
    kVisionFace = 7
    kVision20Classes = 8
    kVisionQrCode = 9
    kVisionMotionDetect = 11
    kVisionMaxType = 12

# Sentry card label
class sengo2_card_label_e:
    kCardForward = 1
    kCardLeft = 2
    kCardRight = 3
    kCardTurnAround = 4
    kCardPark = 5
    kCardGreenLight = 6
    kCardRedLight = 7
    kCardSpeed40 = 8
    kCardSpeed60 = 9
    kCardSpeed80 = 10

try :
    from Sentry import Sentry as SentryBase
    from Sentry import sentry_color_label_e as color_label_e
    from Sentry import sentry_class20_label_e as class20_label_e
    from Sentry import sentry_obj_info_e,sentry_led_color_e

    class apriltag_vision_mode_e:
        kVisionModeFamily16H5 = 0
        kVisionModeFamily25H9 = 1
        kVisionModeFamily36H11 = 2
    
    class Sengo2(SentryBase):
        SENGO2_DEVICE_ID = 0x07
        def __init__(self, address=0x60, log_level=LOG_ERROR):
            super().__init__(self.SENGO2_DEVICE_ID,address)

        def VisionSetMode(self, vision_type, mode):

            err = self.Set(0x20, vision_type)
            if err:
                return err
            err, vision_config_reg_value = self.Get(0x22)
            if err:
                return err
            
            _mode = vision_config_reg_value&0x0f
            if _mode != mode:
                vision_config_reg_value &= 0xf0
                vision_config_reg_value |= mode
                
                err = self.Set(0x22, vision_config_reg_value)
            return err

except ImportError:
    from Sentry import SentryBase
    from Sentry import LOG_ERROR,LOG_DEBUG
    from Sentry import sentry_obj_info_e,sentry_led_color_e,color_label_e,apriltag_vision_mode_e,class20_label_e

    class Sengo2(SentryBase):
        SENGO2_DEVICE_ID = 0x07
        def __init__(self, address=0x60, log_level=LOG_ERROR):
            super().__init__(self.SENGO2_DEVICE_ID,address,log_level, sengo2_vision_e.kVisionQrCode, sengo2_vision_e.kVisionMaxType)