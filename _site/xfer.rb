require 'nokogiri'
require 'open-uri'
page = Nokogiri::HTML(open("http://tfp.dev:4000/program/"))
posts = page.css('#research li')
date = Date.today
posts.each do |post|
  date_string = date.strftime "%Y-%m-%d"
  header = post.css('h3')
  img = post.css('img')
  slug = header.attr('id')
  body = post.css('p:last-child')
  name = header.text
  f = open("research/_posts/#{date_string}-#{slug}.md", "w")
  f.write "---\n"
  f.write "title: #{name}\n"
  f.write "image: #{img.attr('src')}\n"
  f.write "---\n\n"
  f.write body.text
  f.close
  date = date.prev_month
end

