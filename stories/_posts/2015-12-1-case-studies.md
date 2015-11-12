---
theme: white
---
<ul class="case-studies">
{% for post in site.categories.case-studies %}
  <li class="case-study">
    <a class="case-study-icon" href="{{post.url}}">
      <img src="{{post.icon}}" alt="{{post.title}}" />
    </a>
    <div class="case-study-info">
      <h5 class="case-study-title">{{ post.title }}</h5>
      <div class="case-study-project-name">&ldquo;{{ post.project_name }}&rdquo;</div>
      <div class="case-study-person-role">{{ post.person_role }}</div>
    </div>
  </li>
{% endfor %}
</ul>


