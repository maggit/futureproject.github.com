---
theme: white
---

## Our method is built on cutting-edge research

Dream Directors are more than just natural leaders. They're also rigorously trained at our signature Dream Academy in our core methodology for unlocking potential. Our method combines the best scientifically supported techniques from across multiple research domains to build will and skill in students and transform school culture.

<ul class="research-areas">
{% for post in site.categories.research %}
  <li class="research-area" id="research-area-{{ post.title | slugify }}">
    <a href="{{ post.url }}">
      <img src="{{ post.image }}" alt="{{ post.title }}" />
      <h3>{{ post.title }}</h3>
    </a>
  </li>
{% endfor %}
</ul>

In addition to these nine key areas of research that inform The Future Project's model, there are other valuable constructs that inform our work: goal-setting, grit, self-determination theory, inspiration, intrinsic motivation, collaborative leadership, student engagement, and imagination.
