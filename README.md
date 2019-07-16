# Wishy
Wishy is a simple script to help you dynamically load scripts without having to rely on a framework. Its name comes from _wishy-washy_, meaning indecisive.

## Why?
Because sometimes you want to conditionally import scripts. Server side and templating languages will allow you to do it with ease, but you might not want any of these for a myriad of reasons. Your site might be static, the conditions might depend on the browser, you might be through with frameworks, etc.
Wishy allows plain vanilla apps to do conditional script loading, simple as that.

## How to use it
Just call the wish function with a list of paths to the scripts you want to import, like
```
wish([ "path1", "path2"])
```
and it will append to the DOM the appropriate \<script> tags, like
```
<div id="_wishywashy"
  <script src="path1"></script>
  <script src="path2"></script>
</div>
```

If you wish to pass attributes to your script tags, just pass an object instead of the strings, like
```
wish([
  "path3",
  {
    "src": "path4"
    "key1": "value1"
  }
  ])
```
will become
```
<div id="_wishywashy"
  <script src="path3"></script>
  <script src="path4" key1="value1"></script>
</div>
```

## How to install it
Just plain import the script. It'll create a function called "wish" to which you pass your script paths.
