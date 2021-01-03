import React, { useEffect } from "react";

const Ad = props => {
    const { currentPath } = props

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [currentPath])

    return (
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: `block` }}
          data-ad-client="ca-pub-5515095500922112"
          data-ad-slot="7682109354"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    )
}

// https://gan0803.dev/blog/2020-06-15-google-adsense

export default Ad;