import time
import board
import busio
import adafruit_veml7700

i2c = busio.I2C(board.SCL, board.SDA)
veml7700 = adafruit_veml7700.VEML7700(i2c)

one_percent_lux = (65500 / 100)
one_percent_brightness = (255 / 100)

second_counter = 0
remembered_percent_lux = 100

def set_display_brightness(percent_lux):
    value = calculate_current_brightness(percent_lux)
    file = open("/sys/class/backlight/rpi_backlight/brightness","w")
    file.write(str(value))
    file.close()

def get_current_lux():
    return veml7700.light

def calculate_current_lux_percent(current_lux):
     return (current_lux / one_percent_lux)

def calculate_current_brightness(percent_lux):
    brightness_value = round(percent_lux * one_percent_brightness)
    if brightness_value < 35:
        brightness_value = 35
    return brightness_value


while True:
    current_lux = get_current_lux()
    current_percent_lux = calculate_current_lux_percent(current_lux)

    lux_difference = round(remembered_percent_lux - current_percent_lux)
    if lux_difference < 0:
        lux_difference = (lux_difference * -1)

    if lux_difference > 10:
        set_display_brightness(current_percent_lux)

    remembered_percent_lux = current_percent_lux
    second_counter += 0.5
    time.sleep(0.5)
