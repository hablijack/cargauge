
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from waitress import serve
from flask import Flask, request, render_template, Response, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/assets/<path:path>')
def send_assets(path):
    return send_from_directory('assets', path)

@app.route('/')
def overview():
    return render_template('index.html')

if __name__ == '__main__':
    serve(app, port=8080)