import ImageContainer from "../components/ImageContainer"
import Information from "../components/Information"
import images from "../utils/images"

const VirtualHosts = () =>
{
    return (
        <>
            <h2 className="text-4xl font-semibold mb-8 text-red-600">Host Multiple Websites On the Same Server</h2>
            <Information text="two Interfaces have been added to the server" image={ images.two_interfaces_have_been_added_to_the_server }/>
            <p className="mt-8 font-semibold">Multiple Websites Can Be implemented in Apache Through Virtual Hosts</p>
            <dl className="[&>dt]:font-bold [&>dt]:mb-2 [&>dd]:ps-8 [&>dd]:mb-2 mb-8 mt-4">
                <dd>
                    <ImageContainer title="Move websites to /var/html" image={ images.move_websites_to_var_html } infoBefore="Folders on Desktop" infoAfter="Copy them to the appropriate folder">
                        <img src={ images.apache } alt="Illustrating image" />
                    </ImageContainer>
                    <ImageContainer title="Update permissions" image={ images.update_permissions } infoBefore="So we will navigate to the Desktop Then Copy Both folders into /var/www, then change the file owners from root to the apache"/>
                    <ul className="[&>li]:mb-4 list-disc ms-16 mt-3">
                        <li>Next You'll need to go to the directory /etc/httpd/conf.d/  then create two additional configuration files site1.conf and site2.conf</li>
                        <li>Site1.conf will contain the configuration of the site1 website, where site2.conf will contain the configuration of site2 website</li>
                        <li>/etc/httpd/conf.d contains configuration files which can be later on Included within the main configuration file /etc/httpd/conf/httpd.conf</li>
                    </ul>
                    <ImageContainer title="Create websites' conf files" image={ images.create_websites_conf_files } infoBefore="Navigate to the /etc/httpd/conf.d, then Create both files there"/>
                    <ImageContainer title="Configuration description" image={ images.configuration_description } />
                    <ImageContainer title="Configure the first website" image={ images.configure_the_first_website } />
                    <ImageContainer title="Configure the second website" image={ images.configure_the_second_website } />
                    <ImageContainer title="Modify the httpd.conf" image={ images.modify_the_httpd_conf } infoBefore="This is the main file where You need to listen on both Ips 192.168.221.253 & 192.168.221.252">
                        <p>Make Sure That This line is not commented in order to import the previous two files site1.conf and site2.conf into the main configuration</p>
                        <img src={ images.make_sure_that_this_line_is_not_commented } alt="Illustration image" />
                        <p>Make sure That the main file to look at for the sites is /var/www instead of /var/www/html</p>
                        <img src={ images.make_sure_that_the_main_file_to_look_at_for_the_sites } alt="Illustration image" />
                        <p>After doing the configuration, You'll need to close the file and check if There is no syntax error on the main file</p>
                        <img src={ images.check_errors } alt="Illustration image" />
                    </ImageContainer>
                    <ImageContainer title="Restart httpds" image={ images.apache }/>
                    <ImageContainer title="Check if the server is listening on both IPs" image={ images.check_if_the_server_is_listening_on_both_ips2 }/>
                    <p>Now to verify That Both Sites works at the same time, we will go to the client machine Then Type Both Ips and Then Discover what is the result</p>
                    <ImageContainer title="Visit the first website" image={ images.visit_the_first_website }/>
                    <ImageContainer title="Visit the second website" image={ images.visit_the_second_website }/>


                    
                </dd>

            </dl>
        </>
    )
}

export default VirtualHosts