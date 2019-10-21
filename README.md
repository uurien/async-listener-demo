# Problem description

In that sample typescript project, I've imported "async-listener" in main index.ts file. 

After compilation we can see that:

```
(line 2151) process.addAsyncListener = addAsyncListener;
```

 Is executed before than:

 ```
 (line 2192) if (process.addAsyncListener) throw new Error("Don't require polyfill unless needed");
 ```

 In dist/index.js execution, the result is always:

 ```
(...)/async-listener-demo/dist/index.js:2192
if (process.addAsyncListener) throw new Error("Don't require polyfill unless needed");
 ```