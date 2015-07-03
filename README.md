# shorten.github.io

Shorten is a url-shortener that use the power of git.io
with the huge advantage of allowing any domain (git.io only allow github.com).

##File Responsibilities

###index.html (shorten.github.io)
Duh, this is the landing page. But less obviously is it that
the hash is created here onload using ms since epoch and users ip.

###m.html (shorten.github.io/m.html?u=url)
This page is used when a url is malformed.

###p.html (shorten.github.io/p.html?u=url&code=c)
This page is responsible for creating our shorened url

###r.html (shorten.github.io/r.html?u=url)
This page does theredirecting.

##How it works

1. get ms since epoch from random api
2. get user ip from random api
3. sum these two, create an hash using this magic number
4. assume that the hash is unique
5. create a new window (shorten.github.io/p.html?u=<url>&c=<hash>
6. p.html autofills a form  with url and hash that result in git.io/url=shorten.github.io/r.html?u=<url>&code=<hash> and posts it.
7. close this window after 250ms and assume git.io/hash was created
8. add git.io/hash to the input field
9. done

