---
title: Home Page
layout: layouts/layout
reasons:
    - I got swag
    - Im in the streets everyday b
    - I understand the monetary system and the purpose of taxation
    - I can maneuver in the AWS console
---

## This is the Home page homie

### Reasons why you might hit my jack

{% for reason in reasons %}
- {{ reason }}
{%- endfor %}
