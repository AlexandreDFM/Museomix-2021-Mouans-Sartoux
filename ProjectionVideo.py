#!/usr/bin/env python3
##
## EPITECH PROJECT, 2021
## MuseomixProject
## File description:
## Project a video on a projector with Raspberry Pi
##

import subprocess
from apscheduler.schedulers.blocking import BlockingScheduler
import datetime

sched = BlockingScheduler()
now = datetime.datetime.now()
started = 0
def start_vid(started):
    if (started == 0): 
        p = subprocess.Popen(["vlc",'--loop', '--fullscreen','NameOfTheFile.mp4'])
        started = 1

@sched.scheduled_job('cron', minute=now.minute+1)
def scheduled_job():
    start_vid(started)

sched.start()
