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

5. Code.

6. Commit your changes to your branch.
  ```
  git add . && git commit -m “very important changes”
  ```

7. Sync other people’s changes to the master branch (if any) into yours.
    git pull origin master
    git rebase master

8. Merge your changes into the master branch.
    git checkout master
    git merge my_branch master

9. Push to production.
    git push origin master


## Site Structure

All top-level pages have their own directories, each with an index.html and a "posts" folder. Posts are sometimes plain markdown files, and sometimes [Liquid templates](http://jekyllrb.com/docs/templates/) that loop over data from elsewhere.

The [Method](http://www.thefutureproject.org/program/#the-method) post on the [Program](http://www.thefutureproject.org/program/) page is a good example of a plain-markdown post.

The [Research](http://www.thefutureproject.org/program/#research) post on the [Program](http://www.thefutureproject.org/program/) page is a good example of a liquid template that loops over data from the [Research](https://github.com/futureproject/futureproject.github.com/tree/master/research/_posts) directory.

