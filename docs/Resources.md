---
layout: page
title: "Resources"
description: "Resources"
header-img: "img/home-bg.jpg"
---

<div>

{% for resource in site.data.resources %}
	{% include addResource.html resource=site.data.resource %}
{% endfor %}

</div>
