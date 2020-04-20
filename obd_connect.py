import obd
import time

connection = obd.Async()

def new_rpm(r):
    print(r.value)

connection.watch(obd.commands.RPM, callback=new_rpm)
connection.start()

time.sleep(60)
connection.stop()
