---
layout: page
title: "Resources"
description: "Resources"
header-img: "img/home-bg.jpg"
---

Filter: 
<button type="button" class="btn btn-xs btn-default" data-rel="All">All</button>
<button type="button" class="btn btn-xs btn-success" data-rel="Python">Python</button>
<button type="button" class="btn btn-xs btn-danger" data-rel="R">R</button>
<button type="button" class="btn btn-xs btn-primary" data-rel="Matlab">MATLAB</button>

<div class="row">

{% for resource in site.data.resources %}
	{% include addResource.html resource=site.data.resource %}
{% endfor %}

</div>
