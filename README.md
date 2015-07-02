# shorten.github.io

Shorten is a url-shortener that use the power of git.io
with the huge advantage of allowing any domain (git.io only allow github.com).


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

