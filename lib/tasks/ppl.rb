require 'nokogiri'
require 'open-uri'
page = Nokogiri::HTML(open("http://tfp.dev:4000/team/temp.html"))
posts = page.css('.temp-person')
date = Date.today
posts.each do |post|
  date_string = date.strftime "%Y-%m-%d"
  name = post.css('.person-name').text
  slug = post.css('.person-slug').text
  portrait = post.css('.person-portrait').text
  bio = post.css('.person-bio').text
  role = post.css('.person-role').text
  f = open("team/_posts/#{date_string}-#{slug}.md", "w")
  f.write "---\n"
  f.write "name: #{name}\n"
  f.write "role: #{role}\n"
  f.write "portait: #{portrait}\n"
  f.write "layout: plain\n"
  f.write "---\n\n"
  f.write bio
  f.close
  date = date.prev_month
end

