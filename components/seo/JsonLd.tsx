export default function JsonLd() {


    const data = {


        "@context":
            "https://schema.org",


        "@type":
            "WebSite",


        name:
            "TalentDash",


        description:
            "Software engineer salary intelligence platform",


        url:
            "http://localhost:3000"


    };



    return (

        <script

            type="application/ld+json"

            dangerouslySetInnerHTML={{

                __html:
                    JSON.stringify(data)

            }}

        />

    );


}