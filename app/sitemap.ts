import {
    MetadataRoute
}
    from "next";


import {
    companies
}
    from "@/lib/company-data";



export default function sitemap()
    : MetadataRoute.Sitemap {


    const baseUrl =
        "http://localhost:3000";



    const companyPages =
        companies.map(company => (


            {


                url:
                    `${baseUrl}/companies/${company.slug}`,


                lastModified:
                    new Date()


            }


        ));





    return [


        {


            url:
                baseUrl,


            lastModified:
                new Date()


        },



        {


            url:
                `${baseUrl}/salaries`,


            lastModified:
                new Date()


        },



        {


            url:
                `${baseUrl}/compare`,


            lastModified:
                new Date()


        },


        ...companyPages


    ];


}