# wtf-mocha

I'm trying to track down an incredibly weird bug.

If I clone this repo and `npm install`, it will install the only dependency, which is `mocha`.

We can check that the `mocha` binary exists locally:

```bash
$ cat node_modules/mocha/bin/mocha
```

And we can run the tests:

```bash
$ npx mocha


  wtf
    ✓ returns hello world


  1 passing (6ms)
```

But if I try any of the following...

```bash
$ npm test
$ yarn test
$ node_modules/mocha/bin/mocha
$ node_modules/.bin/mocha
```

...things get *extremely weird*:

```bash
$ node_modules/mocha/bin/mocha
[1]    16630 killed     node_modules/mocha/bin/mocha
```

It dies immediately, and the binary no longer exists:

```bash
$ cat node_modules/mocha/bin/mocha
cat: node_modules/mocha/bin/mocha: No such file or directory
```

In other words, running Mocha causes it to... delete itself? But running it via `npx` doesn't.

Has anyone else experienced this? Any ideas about what could possibly be causing it or how to fix it?