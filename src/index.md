---
title: data
layout: base.njk
---
## Got Milk

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}
