export const baseUrl = "https://decide-now-backend.onrender.com";


async function rankingVotes() {
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const ranking = await fetch(`${baseUrl}/ranking/exhibitor` , option)
    .then((res)=> res.json())
    .then((data) => {
       
        return data;
    })
    .catch((err) => console.log(err))

    return ranking;
   }

export {rankingVotes}