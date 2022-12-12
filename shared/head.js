import Script from 'next/script'


let head = () => {
    return (
        <div>
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossOrigin="anonymous"
                />
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