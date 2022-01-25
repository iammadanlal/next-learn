import { useRouter } from 'next/router';
import React from 'react'

const Page = () => {
    const router = useRouter()
    const { params } = router.query;
    // Catch All Route - [...params].jsx
    // route /notes/a/b/c
    // params => [a,b,c]

    // Optional Route - notes/[[...params]].jsx

    return (
        <h1>
            Note Params Length {params & params?.length}
        </h1>
    )
}

export default Page;