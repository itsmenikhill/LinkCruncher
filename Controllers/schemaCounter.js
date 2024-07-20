const ShortUrl = require('../models/ShortUrls')

async function countItems() {
    try {
        const count = await ShortUrl.countDocuments({});
        return count
    } catch (err) {
        console.error('Error counting documents:', err);
        return -1
    }
}

module.exports = countItems;