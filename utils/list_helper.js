const _ = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, item) => sum + item.likes, 0)
}

const favouriteBlog = (blogs) => {
    const favBlog = blogs.reduce((maxItem, item) => maxItem.likes > item.likes ? maxItem : item, blogs[0])

    delete favBlog._id
    delete favBlog.url
    delete favBlog.__v

    return favBlog
}

const mostBlogs = (blogs) => {
    const authorWithBlogCount = blogs.reduce((author, blog) => {
        author[blog.author] = author[blog.author] + 1 || 1
        return author
    }, {})
    const authorWithMostBlogs = Object.keys(authorWithBlogCount).reduce((a, b) => authorWithBlogCount[a] > authorWithBlogCount[b] ? a : b)
    return { "autor": authorWithMostBlogs, "blogs": authorWithBlogCount[authorWithMostBlogs] }
}

const mostLikes = (blogs) => {
    const authorLikesCount = blogs.reduce((author, blog) => {
        author[blog.author] = author[blog.author] + blog.likes || blog.likes
        return author
    }, {})
    const authorWithMostLikes = Object.keys(authorLikesCount).reduce((a, b) => authorLikesCount[a] > authorLikesCount[b] ? a : b)
    return { "author": authorWithMostLikes, "likes": authorLikesCount[authorWithMostLikes] }
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}