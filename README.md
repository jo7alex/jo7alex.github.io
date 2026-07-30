# Joanna Vasanth's blog

This is a [Jekyll](https://jekyllrb.com/) site exported from your [Veenew](https://veenew.com) account.
It uses a custom theme that matches the Veenew default look, and is ready to host for free on
[GitHub Pages](https://pages.github.com/).

## Publish on GitHub Pages

1. Create a new repository on GitHub named `<your-username>.github.io`.
2. Push the contents of this folder to that repository:

   ```bash
   git init
   git add .
   git commit -m "Initial import from Veenew"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repository's **Settings → Pages**, set the source to the `main` branch.
   Your site will be live at `https://<your-username>.github.io` within a minute or two.

## Add a new post

A ready-to-copy template lives at `_posts/TEMPLATE.md`. To add a post from the GitHub website:

1. Open `_posts/TEMPLATE.md` on GitHub and copy its contents.
2. Click **Add file → Create new file** and name it `_posts/YYYY-MM-DD-a-short-title.md`
   (the publish date followed by a hyphenated title), e.g. `_posts/2026-07-30-hello-again.md`.
3. Paste the template, edit the title, date and body, then **Commit changes**.

The post then shows up automatically on your home page, newest first.

> **Shortcut:** GitHub can open the new-file editor already filled in with the template.
> Replace `<your-username>` below, then bookmark the link — opening it starts a new post
> from the template (just fix the date in the filename before committing):
>
> ```
> https://github.com/<your-username>/<your-username>.github.io/new/main?filename=_posts%2F2026-07-30-new-post.md&value=---%0Alayout%3A%20post%0Atitle%3A%20%22Your%20post%20title%22%0Adate%3A%202026-07-30%2016%3A55%3A29%20%2B0000%0Atags%3A%20%5B%5D%0A---%0A%0A%23%20Your%20post%20title%0A%0AWrite%20your%20post%20here%20using%20**Markdown**.%20This%20first%20line%20is%20the%20heading%20shown%20on%20the%20page.%0A
> ```

[Create new post](https://github.com/jo7alex/jo7alex.github.io/new/main?filename=_posts%2F2026-07-30-new-post.md&value=---%0Alayout%3A%20post%0Atitle%3A%20%22Your%20post%20title%22%0Adate%3A%202026-07-30%2016%3A55%3A29%20%2B0000%0Atags%3A%20%5B%5D%0A---%0A%0A%23%20Your%20post%20title%0A%0AWrite%20your%20post%20here%20using%20**Markdown**.%20This%20first%20line%20is%20the%20heading%20shown%20on%20the%20page.%0A)

## Add a new page

Create a Markdown file in the top-level folder (next to `index.html`), named after
the page — for example `contact.md`:

```markdown
---
layout: page
title: "Contact"
permalink: /contact/
---

Your page content goes here.
```

The page will then be available at `/contact/`. To show it in the top menu, open
`_includes/header.html` and add a link inside the `<ul>`:

```html
<li><a href="{{ "/contact/" | relative_url }}">Contact</a></li>
```

After adding or editing any file, commit and push the change and GitHub Pages will rebuild your site.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
