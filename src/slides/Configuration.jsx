import images from "../utils/images"
import ImageContainer from "../components/ImageContainer"
const Configuration = () =>
{
    return (
        <>
            <h2 className="text-4xl font-semibold mb-8 text-red-600">Apache Configuration</h2>
            <dl className="[&>dt]:font-bold [&>dt]:mb-2 [&>dd]:ps-8 [&>dd]:mb-2 mb-8">
                <dd><ImageContainer title="Apache's configuration file" image={ images.apaches_configuration_file } infoBefore="The default Configuration File For Apache is located at /etc/httpd/conf/httpd.conf" /></dd>
                <dd>
                <ImageContainer title="Check the httpd.conf" image={ images.cat_httpd } infoBefore="Let's cat the content of the httpd.conf file and let's discover its content">
                    <ImageContainer title="httpd.conf default content" image={ images.httpd_conf_default_content } infoBefore="The default Look Of the Configuration File" />
                </ImageContainer>
                </dd>
                <dd><ImageContainer title="Change IP address" image={ images.change_ip_address } infoBefore="If You take a close look to the previous command where we have use the command netstat -tulpen | grep httpd the service is listening on :::80 which it the IPV6 so in order to change That and Let the server listen on our ipv4:80, we need to change that on the configuration file." /></dd>
                <dd><ImageContainer title="Restart the httpd service" image={ images.restart_the_httpd_service } infoBefore="Restart the httpd service" /></dd>
                <dd><ImageContainer title="Check the listening ip address" image={ images.check_the_listening_ip_address } /></dd>
                <dd>
                    <ImageContainer title="Change default website and location" image={ images.change_default_website_and_location } infoBefore="1st let's copy the site which is in The Desktop into the /var/www/html which is the default location where The httpd search for new sites">
                        <ImageContainer title="Open the httpd configuration file" image={ images.open_the_httpd_configuration_file } infoBefore="Then You'll need to specify the location where the index.html is located in" />
                        <ImageContainer title="Change DocumentRoot" image={ images.change_documentroot } infoBefore="Then  You can change the default search directory Here" />
                    </ImageContainer>
                </dd>
                <dd><ImageContainer title="Test the new configuration" image={ images.test_the_new_configuration } infoBefore="To test If Your Configuration is working and You Haven't done any Configuration Error, Then You can run the following command" /></dd>
                <dd><ImageContainer title="Restart the httpd service" image={ images.restart_httpd2 } infoBefore="Next You'll need to restart the httpd services and check There Status" /></dd>
                <dd><ImageContainer title="Visite your new website" image={ images.visite_your_new_website } infoBefore="Now let's check if Our New Site is Deployed Successfully" /></dd>
            </dl>
        </>
    )
}

export default Configuration