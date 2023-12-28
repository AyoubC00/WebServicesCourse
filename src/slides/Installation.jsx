import ImageContainer from "../components/ImageContainer"
import Warning from "../components/Warning"
import Information from "../components/Information"
import images from "../utils/images"
const Installation = () =>
{
    return (
        <>
            <h2 className="text-4xl font-semibold mb-8 text-red-600">Installation and verification of Apache web services</h2>
            <Information text="There are several Packages and software which might help You turning Your server into a webserver to server http and https requests like" />
            <dl className="[&>dt]:font-bold [&>dt]:mb-2 [&>dd]:ps-8 [&>dd]:mb-2 mb-8">
                <dt>Debian Based</dt>
                <dd><ImageContainer title="Update the Local Repository" image={ images.update_the_local_repository } /></dd>
                <dd><ImageContainer title="Search for the package in the Debian Repository" image={ images.search_for_the_package_in_the_debian_repository } /></dd>
                <dd><ImageContainer title="Install The Packages" image={ images.install_the_packages } /></dd>
                <dt>RedHat Based</dt>
                <Warning text="The Httpd server packages aren't included By default, You'll need to install Them." />
                <dd><ImageContainer title="Update the Repositories" image={ images.update_the_repositories } /></dd>
                <dd><ImageContainer title="Search for The package on the Repository" image={ images.search_for_the_package_on_the_repository } /></dd>
                <dd><ImageContainer title="Install The Httpd Packages from Redhat" image={ images.install_the_httpd_packages_from_redhat } /></dd>
            </dl>
            <dl className="[&>dt]:font-bold [&>dt]:mb-2 [&>dd]:mb-2 mb-8">
                <dd><ImageContainer title="Verify the packet using the following command" image={ images.verify_the_packet_using_the_following_command } /></dd>
                <dd><ImageContainer title="Get the Information about the package" info="To get the Information about The package and verify it is for apache not other web service software, You can use the following command" image={ images.get_the_information_about_the_package } /></dd>
                <dd><ImageContainer title="Check ports 80 and 443" infoBefore="Let's check 1st if the centos runs any service on port 80 (http) or port 443 (https)" infoAfter="From the Picture above you'll notice That our Centos server doesn't act yet as web server because There isn't any port 80 or port 443 enabled There By default." image={ images.check_ports_80_and_443 } /></dd>
                <dd>Actually we will need a website which we should host on That server, However Let's just starts the service and Check if the server listens on port 80 or 443</dd>
                <dd><ImageContainer title="Run the services" image={ images.run_the_services } /></dd>
                <dd><ImageContainer title="Check services' status" image={ images.check_services_status } /></dd>
                <dd><ImageContainer title="Start services on startup" infoBefore="In order to let the service start automatically after the Reboot of the system instead of just Enabling Them manual again using systemctl start httpd, Then You can use the following command to enable the service Directly after the restart" image={ images.start_services_on_startup } /></dd>
                <dd><ImageContainer title="Restart services" image={ images.restart_services } /></dd>
                <dd><ImageContainer title="Stop services" image={ images.stop_services } /></dd>
                <dd><ImageContainer title="Check server's status" infoBefore="Now after we have start and enable the Apache Web server, You can check using the netstat tool for the port 80 and 443" infoAfter="You'll notice That httpd listens only on port 80 not 443" image={ images.check_servers_status } /></dd>
                <dd>To prevent having issue with Httpd services During the lunch time, You can add the both ports 80 and 443 as well as httpd services</dd>
                <dd><ImageContainer title="Add ports 80 and 443 to the firewall" image={ images.add_ports_80_and_443_to_the_firewall } /></dd>
                <dd>Or You can simply Disable The firewalld</dd>
                <dd><ImageContainer title="Disable the firewall" image={ images.disable_the_firewall } /></dd>
                <dd>Check the default Apache webpage</dd>
                <dd><ImageContainer title="Get the machine's acctual IP address" image={ images.get_the_machines_acctual_ip_address } /></dd>
                <dd><ImageContainer title="Visit your website" infoBefore="Open Your Browser and Type the following: http://192.168.221.240" image={ images.visit_your_website } /></dd>
            </dl>
            <Information text="Having Apache starting with the Default Configuration, it is good enough in production environment for Static Websites, however for more Dynamic Websites, You'll need to change the Some Default Configurations To Your own One." />
        </>
    )
}

export default Installation