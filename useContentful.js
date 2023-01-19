import { createClient } from "contentful"

const useContentFul = () => {

    const client = createClient({
        space: "25yycpu1l87g",
        accessToken: "zhm3P7zMu-Gp25U6erg5z4dJrD06XH4VX2IH7sW8J3Q",
        host: "cdn.contentful.com"
    });

    const getAuthors = async () => {

        try {
            const enteries = await client.getEntries({
                content_type : "header",
                select: "fields"
            });
            
            const sanitizedEntries = enteries.items.map((item) => 
                {   
                    return {
                        ...item.fields,
                    }
                }
            );
            return sanitizedEntries
        }
        catch{
            console.log("erros");
        }
    };
    return { getAuthors};
}

export default useContentFul
