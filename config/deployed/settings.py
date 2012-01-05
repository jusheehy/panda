#!/usr/bin/env python

from config.settings import *

# Running in deployed mode
SETTINGS = 'deployed'

# Debug
DEBUG = True    # TEMP 
TEMPLATE_DEBUG = DEBUG

# Static media
STATIC_ROOT = '/mnt/media'

# Uploads 
MEDIA_ROOT = '/mnt/panda' 

# Django-compressor
COMPRESS_ENABLED = True 

# These settings should have been set in local_settings.py
if SITE_DOMAIN == 'localhost:8000':
    print 'WARNING: Running in production mode, but SITE_DOMAIN is not set!'
    
if EMAIL_HOST == 'localhost':
    print 'WARNING: Running in production mode, but EMAIL_HOST is set to localhost!'

