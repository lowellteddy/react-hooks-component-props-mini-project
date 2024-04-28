import React from "react";
import Article from "./Article.js";
function ArticleList(prop) {
    return (

        <main>
            {prop.posts.map(
                (post) => (
                    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
                )
            )}
        </main>
    )


}
export default ArticleList;