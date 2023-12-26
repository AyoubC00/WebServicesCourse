import ApacheLogo from "../assets/apachelogo.png"
const Home = () =>
{
    return (
        <div className="w-3/4 mx-auto py-16">
            <img src={ ApacheLogo } alt="Apache Logo" className="w-40 m-auto mb-8" />
            <h1 className="text-4xl text-red-600 mb-8">Who am I?</h1>
            <p className="text-center text-lg leading-relaxed">Apache, an open-source Web server created by American software developer Robert McCool. Apache was released in 1995. In the early 2020s, Apache servers deployed about 30 percent of the Internet’s content, second only to Nginx.</p>
        </div>
    )
}

export default Home