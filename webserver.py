
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, send_from_directory
from flask_socketio import SocketIO
import obd
from apscheduler.schedulers.background import BackgroundScheduler
import time

app = Flask(__name__)
socketio = SocketIO(app)

def update_clock():
    socketio.emit('clock_update', {'data': time.strftime("%I:%M")})

def speed_update(r):
    socketio.emit('speed_update', {'data': r.value})

def fuel_update(r):
    socketio.emit('fuel_update', {'data': r.value})

def oil_temp_update(r):
    socketio.emit('oil_temp_update', {'data': r.value})

def coolant_temp_update(r):
    socketio.emit('coolant_temp_update', {'data': r.value})

def intake_temp_update(r):
    socketio.emit('intake_temp_update', {'data': r.value})

@socketio.on('connect')
def test_connect():
    socketio.emit('speed_update', {'data': 88})

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/')
def overview():
    return render_template('index.html')

if __name__ == '__main__':
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=update_clock, trigger="interval", seconds=5)
    scheduler.start()
    connection = obd.Async()
    connection.watch(obd.commands.SPEED, callback=speed_update)
    connection.watch(obd.commands.FUEL_LEVEL, callback=fuel_update)
    connection.watch(obd.commands.OIL_TEMP, callback=oil_temp_update)
    connection.watch(obd.commands.COOLANT_TEMP, callback=coolant_temp_update)
    connection.watch(obd.commands.INTAKE_TEMP, callback=intake_temp_update)
    connection.start()
    socketio.run(app, port=8080)