<h2 align="center">
  apollo-graphql-react-auth
</h2>

<h4 align="center">
  Single Page App with authentication & Permissions
</h4>

<p align="center">
  Build with powerful React 16.8 and <em>hooks</em> ⚡️
</p>

<p align="left">
  <a href="https://github.com/Nozbe/WatermelonDB/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License">
  </a>

  <!-- <a href="https://travis-ci.com/Nozbe/WatermelonDB">
    <img src="https://api.travis-ci.com/Nozbe/WatermelonDB.svg?branch=master" alt="CI Status">
  </a> -->

</p>

|   | Specs |
| - | ------------ |
| ⚡️ | **Apollo-client** no matter how much data you have |
| 📈 | **GraphqQL** from hundreds to tens of thousands of records |
| ⚛️ | **React 16.12**. Only load data when you need it |
| ✨ | **React Hooks** API with [RxJS](https://github.com/ReactiveX/rxjs) |
| 🛆 | **Prisma**. iOS, Android, and the web |
| 😎 | **TypeScript** Easily plug data into components |
| ⏱ | Fast. Async. Multi-threaded. Highly cached. |
| 🔗 | Relational. Built on rock-solid [SQLite](https://www.sqlite.org) foundation |
| 🔄 | **Offline-first.** [Sync](https://nozbe.github.io/WatermelonDB/Advanced/Sync.html) with your own backend |

## Purpose?

**Text1** is a new way of dealing with user data in React Native and React web apps.

It's optimized for building **complex applications** in React Native, and the number one goal is **real-world performance**. In simple words, _your app must launch fast_.

For simple apps, using Redux or MobX with a persistence adapter is the easiest way to go. But when you start scaling to thousands or tens of thousands of database records, your app will now be slow to launch (especially on slower Android devices). Loading a full database into JavaScript is expensive!

sadasds fixes it **by being lazy**. s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the [SQLite database](https://www.sqlite.org/index.html)  will be distracted by the readable content of a page when looking at its layout.


## Usage

**Create blog posts:** an app with posts and comments.</br>
**See your blog posts** an app with posts and comments.</br>
**Save blog drafts:** an app with posts and comments.</br>
**Signup user:** an app with posts and comments.</br>
**Authenticate user:** an app with posts and comments.</br>

First, you define Models:

```js
class Post extends Model {
  @field('name') name
  @field('body') body
  @children('comments') comments
}

class Comment extends Model {
  @field('body') body
  @field('author') author
}
```

```js
const Comment = ({ comment }) => (
  <View style={styles.commentBox}>
    <Text>{comment.body} — by {comment.author}</Text>
  </View>
)

// This is how you make your app reactive! ✨
const enhance = withObservables(['comment'], ({ comment }) => ({
  comment: comment.observe()
}))
const EnhancedComment = enhance(Comment)
```

And now you can render the whole Post:

```js
const Post = ({ post, comments }) => (
  <View>
    <Text>{post.name}</Text>
    <Text>Comments:</Text>
    {comments.map(comment =>
      <Comment key={comment.id} comment={comment} />
    )}
  </View>
)

const enhance = withObservables(['post'], ({ post }) => ({
  post,
  comments: post.comments
}))
```
**Prisma 🛆**

The result is fully reactive! Whenever a post or comment is added, changed, or removed, the right components **will automatically re-render** on screen. Doesn't matter if a change occurred in a totally different part of the app, it all just works out of the box!

### ➡️ **Learn more:** [see full documentation](https://nozbe.github.io/WatermelonDB/)


## Contributing

<img src="https://github.com/Nozbe/WatermelonDB/raw/master/assets/needyou.jpg" alt="We need you" width="220" />

**some text about contributing**

If there's a missing feature, a bug, or other improvement you'd like, I encourage you to contribute! Feel free to open an issue to get some guidance and see [Contributing guide](./CONTRIBUTING.md) for details about project setup, testing, etc.



If you make or are considering making an app using WatermelonDB, please let us know!

## Author and license

**WatermelonDB** was created by [@yuripramos](https://github.com/yuripramos).

This project is available under the MIT license. See the [LICENSE file](./LICENSE) for more info.