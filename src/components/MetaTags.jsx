import React from 'react';
import Helmet from "react-helmet";

function MetaTags({title,description,canonical,googleName,googleDesc,googleImg,fbOgUrl,fbOgTitle,fbOgDesc,fbOgImg}) {
    return (
        <div>
        <Helmet>
            {/* <!-- HTML Meta Tags --> */}
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
            <link rel="canonical" href={canonical} />
            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content={googleName} />
            <meta
                itemprop="description"
                content={googleDesc}
            />
            <meta
                itemprop="image"
                content={googleImg}
            />
            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={fbOgUrl}/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fbOgTitle} />
            <meta
                property="og:description"
                content={fbOgDesc}
            />
            <meta
                property="og:image"
                content={fbOgImg}
            />
            
        </Helmet>
        </div>
    )
}

export default MetaTags