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

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}