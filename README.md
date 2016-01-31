www.thefutureproject.org
------------------------

This site is built with [Jekyll](http://jekyllrb.com/), and hosted on [GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages/).

To push changes, you must be a member of the [futureproject](http://github.com/futureproject) organization.

## Getting set up for development

1. Clone the repository.
  ```
  git clone https://github.com/futureproject/futureproject.github.com.git
  ```

2. Install some ruby gems you’ll need for development.
  ```
  bundle install
  ```

3. Start your server.
  ```
  jekyll serve
  ```

## Making Edits

4. In a new terminal window, check out a branch for your edits.
  ```
  git checkout -b my_branch
  ```

5. Build a feature.

6. Commit your changes to your branch.
  ```
  git add . && git commit -m “very important changes”
  ```

8. Sync other people’s changes (if any) into your branch.
  ```
  git pull origin master
  git rebase master
  ```

9. If that rebase didn't break everything, push your branch to Github for review.
  ```
  git push origin my_branch
  ```


## Site Structure

All top-level pages have their own directories, each with an index.html and a "posts" folder. Posts are sometimes plain markdown files, and sometimes [Liquid templates](http://jekyllrb.com/docs/templates/) that loop over data from elsewhere.

The [Method](http://www.thefutureproject.org/program/#the-method) post on the [Program](http://www.thefutureproject.org/program/) page is a good example of a plain-markdown post.

The [Research](http://www.thefutureproject.org/program/#research) post on the [Program](http://www.thefutureproject.org/program/) page is a good example of a liquid template that loops over data from the [Research](https://github.com/futureproject/futureproject.github.com/tree/master/research/_posts) directory.

The [Team](http://www.thefutureproject.org/team) page is the most strangely structured on the site, because its data lives in two places:

1. The spreadsheet at "_data/team.csv" controls which people appear on the page and in what order.
2. The posts in "team/_posts" store the bio and/or video for each team member, which site visitors see when they click an employee portrait.

