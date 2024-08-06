import Script from 'next/script'


let head = () => {
    return (
        <div>
            <head>

            </head>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-WX88YX6P8X"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WX88YX6P8X');
        `}
            </Script>

        </div>
    )

}

export default head;