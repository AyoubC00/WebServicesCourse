const Introduction = () =>
{
    return (
        <div className="w-full px-12 py-8">
            <h2 className="text-4xl font-semibold mb-8 text-red-600">Introduction</h2>
            <p className="mb-4">
            There are several Packages and software which might help You turning Your server into a webserver to server http and https requests like:
            </p>
            <dl className="[&>dt]:font-bold [&>dd]:ps-8 [&>dd]:mb-2 mb-8">
                <dt>Apache</dt>
                <dd>free open source, can be used in all Operating systems and It is the most popular in the world.</dd>
                <dt>Nginx</dt>
                <dd>it Is another free open source  web service software which is enhancement of apache in term of Speed and Concurrent Connections.</dd>
                <dt>IIS</dt>
                <dd>This is developed by windows and it is mainly used to be used within windows environement.
                    Litespeed: it is A commercial web service which is enhancement of Apache and it is enhanced in term of speed and concurrent Connections, it has a free open source one called openLiteSpeed.</dd>
            </dl>
            <h3 className="text-3xl text-red-600 font-semibold mb-8">Notes</h3>
            <ul className="[&>li]:mb-4 list-disc ms-16">
                <li>
                    In order to return Your Server into a web server, You'll need to install apache web services, which will help You doing This.
                </li>
                <li>
                    Apache web services are often Referred to Them as httpd (Redhat Based Distros) and Apache2 (Debian Based Distros)
                </li>
                <li>
                    Redhat called Apache httpd, because it is the one which is used to handle the http(s) request By default (not nginx or openlitespeed).
                </li>
                <li>
                    However Debian Prefer To give each package its name on the repository so You can Download Each one by its own name.
                    If Redhat changed the default httpd to nginix That means That if You run the command yum install httpd, You'll install The Nginix, however Currently the httpd still the apache service.
                </li>
            </ul>
        </div>
    )
}

export default Introduction