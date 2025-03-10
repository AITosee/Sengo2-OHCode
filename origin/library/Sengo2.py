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
    from SentryBase import Sentry as SentryBase
    from SentryBase import sentry_color_label_e as color_label_e
    from SentryBase import sentry_class20_label_e as class20_label_e
    from SentryBase import sentry_obj_info_e,sentry_led_color_e

    class apriltag_vision_mode_e:
        kVisionModeFamily16H5 = 0
        kVisionModeFamily25H9 = 1
        kVisionModeFamily36H11 = 2
    
    class Sengo2(SentryBase):
        SENGO2_DEVICE_ID = 0x07
        def __init__(self, address=0x60):
            super().__init__(self.SENGO2_DEVICE_ID,address)

        def VisionSetMode(self, vision_type, mode):
            pass

except ImportError:
    from Sentry import SentryBase
    from Sentry import LOG_ERROR,LOG_DEBUG
    from Sentry import sentry_obj_info_e,sentry_led_color_e,color_label_e,apriltag_vision_mode_e,class20_label_e

    class Sengo2(SentryBase):
        SENGO2_DEVICE_ID = 0x07
        def __init__(self, address=0x60, log_level=LOG_ERROR):
            super().__init__(self.SENGO2_DEVICE_ID,address,log_level, sengo2_vision_e.kVisionQrCode, sengo2_vision_e.kVisionMaxType)