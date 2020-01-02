import Head from 'next/head'
const Meta = (props) => (      
<Head>
<title>{props.title}</title>
<meta name="description" content="{props.desc}" />
<meta property="og:type" content="website" />
<meta name="og:title" property="og:title" content="" />
<meta name="og:description" property="og:description" content="" />
<meta property="og:site_name" content="" />
<meta property="og:url" content="" />  
<meta name="twitter:card" content="summary" /> 
<meta name="twitter:title" content="" />
<meta name="twitter:description" content={props.desc} />
<meta name="twitter:site" content="" />
<meta name="twitter:creator" content="" />
<meta name="google-site-verification" content="BnJCVThscfVZi_SClgqmTK3TMue9M5bYDVs2hoMK_vA" />
<link rel="icon" type="image/png" href="/static/images/favicon.ico" />
<link rel="apple-touch-icon" href="/static/images/favicon.ico" />
<link rel="stylesheet" href="" />
<meta property="og:image" content="" />  
<meta name="twitter:image" content="" />   
<link rel="canonical" href="" />
<script type="text/javascript" src="" ></script>

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>


</Head>
)

export default Meta