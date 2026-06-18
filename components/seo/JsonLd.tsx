export default function JsonLd() {


    const data = {


        "@context":
            "https://schema.org",


        "@type":
            "Dataset",


        name:
            "Software Engineer Salary Dataset",


        description:
            "Technology salary compensation data including company, role, location, level and total compensation.",


        url:
            "https://talentdash.com/salaries",


        creator: {

            "@type":
                "Organization",

            name:
                "TalentDash"

        },


        distribution: {

            "@type":
                "DataDownload",

            encodingFormat:
                "application/json"

        }


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