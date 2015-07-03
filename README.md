# shorten.github.io

Shorten is a url-shortener that use the power of git.io
with the huge advantage of allowing any domain (git.io only allow github.com).

###File Responsibilities

####index.html (shorten.github.io)
Duh, this is the landing page. But less obviously is it that
the hash is created here onload using ms since epoch and users ip.

####m.html (shorten.github.io/m.html?u=url)
This page is used when a url is malformed.

####p.html (shorten.github.io/p.html?u=url&code=c)
This page is responsible for creating our shorened url

####r.html (shorten.github.io/r.html?u=url)
This page does there directing.

