---
layout: page
title: "Resources"
description: "Resources"
header-img: "img/home-bg.jpg"
---

<div class="row">

{% for resource in site.data.resources %}
	{% include addResource.html resource=site.data.resource %}
{% endfor %}

</div>
